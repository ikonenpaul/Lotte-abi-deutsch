// Persistenter Speicher für Fortschritt + API-Key (localStorage)

const PROGRESS_KEY = 'lotte-progress';
const API_KEY_KEY = 'lotte-gemini-key';

export function getProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : { sections: {}, attempts: [] };
  } catch {
    return { sections: {}, attempts: [] };
  }
}

export function markSectionRead(modulId, sectionId) {
  const p = getProgress();
  if (!p.sections[modulId]) p.sections[modulId] = {};
  p.sections[modulId][sectionId] = Date.now();
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

export function isSectionRead(modulId, sectionId) {
  const p = getProgress();
  return !!(p.sections[modulId] && p.sections[modulId][sectionId]);
}

export function getModulProgress(modulId, totalSections) {
  const p = getProgress();
  const read = p.sections[modulId] ? Object.keys(p.sections[modulId]).length : 0;
  return totalSections > 0 ? Math.min(1, read / totalSections) : 0;
}

export function saveAttempt(attempt) {
  const p = getProgress();
  p.attempts = p.attempts || [];
  p.attempts.push({ ...attempt, date: Date.now() });
  // Letzte 30 behalten
  if (p.attempts.length > 30) p.attempts = p.attempts.slice(-30);
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

export function getApiKey() {
  return localStorage.getItem(API_KEY_KEY) || '';
}

export function setApiKey(key) {
  localStorage.setItem(API_KEY_KEY, key.trim());
}

export function clearApiKey() {
  localStorage.removeItem(API_KEY_KEY);
}

export function clearAllProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}
