export interface WordData {
  word: string;
  definition: string;
  example: string;
  pronunciation: string;
  type: string; // e.g., "adjective", "noun"
}

export interface FlashcardProps {
  word: string;
  data: WordData | null;
  isFlipped: boolean;
  isLoading: boolean;
  onFlip: () => void;
}
