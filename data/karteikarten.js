// Karteikarten-Aggregator — sammelt Karteikarten aus allen Modulen
import { kleist } from './kleist.js';
import { keun } from './keun.js';
import { sprachePolitik } from './sprache-politik.js';
import { sprachwandel } from './sprachwandel.js';

export function getAllFlashcards() {
  return [
    ...kleist.flashcards.map(c => ({ ...c, modul: 'kleist', modulTitle: 'Kleist' })),
    ...keun.flashcards.map(c => ({ ...c, modul: 'keun', modulTitle: 'Keun' })),
    ...sprachePolitik.flashcards.map(c => ({ ...c, modul: 'sprache-politik', modulTitle: 'Sprache & Politik' })),
    ...sprachwandel.flashcards.map(c => ({ ...c, modul: 'sprachwandel', modulTitle: 'Sprachwandel' }))
  ];
}

export function getFlashcardsByModul(modulId) {
  const map = { kleist, keun, 'sprache-politik': sprachePolitik, sprachwandel };
  return map[modulId]?.flashcards || [];
}
