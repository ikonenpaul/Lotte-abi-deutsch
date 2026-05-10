// Web Speech API Wrapper — STT (SpeechRecognition) + TTS (speechSynthesis)
// Browser-Support: Chrome / Edge primär. Safari teilweise. Firefox nur Synthese.

const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

export function isSpeechRecognitionSupported() {
  return !!SpeechRec;
}

export function isSpeechSynthesisSupported() {
  return 'speechSynthesis' in window;
}

export class Recognizer {
  constructor({ onResult, onError, onEnd, lang = 'de-DE' } = {}) {
    if (!SpeechRec) throw new Error('SpeechRecognition wird in diesem Browser nicht unterstützt. Probier es mit Chrome oder Edge.');
    this.recognition = new SpeechRec();
    this.recognition.lang = lang;
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.transcript = '';
    this.interim = '';
    this.recognition.onresult = (event) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const r = event.results[i];
        if (r.isFinal) final += r[0].transcript + ' ';
        else interim += r[0].transcript;
      }
      if (final) this.transcript += final;
      this.interim = interim;
      onResult?.({ transcript: this.transcript, interim });
    };
    this.recognition.onerror = (event) => {
      onError?.(event.error || 'Unbekannter Fehler');
    };
    this.recognition.onend = () => {
      onEnd?.(this.transcript);
    };
  }
  start() {
    this.transcript = '';
    this.interim = '';
    this.recognition.start();
  }
  stop() {
    try { this.recognition.stop(); } catch (e) {}
  }
}

export function speak(text, { lang = 'de-DE', rate = 1.0, pitch = 1.0, onend } = {}) {
  if (!('speechSynthesis' in window)) {
    onend?.();
    return;
  }
  // Vorhandene Aussprache stoppen
  speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = lang;
  utt.rate = rate;
  utt.pitch = pitch;
  // Versuche, eine deutsche Stimme zu wählen
  const voices = speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de'));
  if (deVoice) utt.voice = deVoice;
  if (onend) utt.onend = onend;
  speechSynthesis.speak(utt);
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}
