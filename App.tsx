import React, { useState, useEffect, useCallback } from 'react';
import Flashcard from './components/Flashcard';
import Controls from './components/Controls';
import { GRE_WORDS, WORD_DATA } from './constants';
import { WordData } from './types';

const App: React.FC = () => {
  // Track words the user doesn't know (need more practice)
  const [unknownWords, setUnknownWords] = useState<Set<string>>(new Set());
  const [knownWords, setKnownWords] = useState<Set<string>>(new Set());
  
  // Initialize with all words shuffled
  const [wordList, setWordList] = useState<string[]>(() => {
    return [...GRE_WORDS].sort(() => Math.random() - 0.5);
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const currentWord = wordList[currentIndex];

  // Get word data directly from our database (no API calls needed)
  const currentWordData: WordData | null = WORD_DATA.get(currentWord) || null;

  // Handle "I knew this" - mark as known, move to next word (increment count)
  const handleKnown = useCallback(() => {
    // Mark as known
    setKnownWords(prev => new Set(prev).add(currentWord));
    setUnknownWords(prev => {
      const updated = new Set(prev);
      updated.delete(currentWord);
      return updated;
    });
    
    // Flip card back and move to next word (increment count)
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < wordList.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reshuffle when reaching the end
        const remainingUnknown = Array.from(unknownWords);
        const newWords = [...GRE_WORDS]
          .filter(w => !knownWords.has(w) || unknownWords.has(w))
          .sort(() => Math.random() - 0.5);
        setWordList(newWords);
        setCurrentIndex(0);
      }
    }, 200);
  }, [currentWord, currentIndex, wordList.length, unknownWords, knownWords]);

  // Handle "I didn't know this" - don't increment count, schedule to appear after 8 words
  const handleUnknown = useCallback(() => {
    // Mark as unknown
    setUnknownWords(prev => new Set(prev).add(currentWord));
    setKnownWords(prev => {
      const updated = new Set(prev);
      updated.delete(currentWord);
      return updated;
    });
    
    // Don't increment currentIndex, but schedule this word to appear after 8 words
    setIsFlipped(false);
    setTimeout(() => {
      const newWordList = [...wordList];
      
      // Remove current word from its position
      newWordList.splice(currentIndex, 1);
      
      // Calculate where to insert it: after 8 other words from current position
      // After removal, currentIndex now points to the next word
      // We want to insert after 8 more words, so at currentIndex + 8
      const insertPosition = Math.min(currentIndex + 8, newWordList.length);
      
      // Insert the word at the calculated position
      newWordList.splice(insertPosition, 0, currentWord);
      
      setWordList(newWordList);
      // Keep currentIndex the same - next word is already at currentIndex after removal
      // Count doesn't increment because we only count words marked as "I knew this"
    }, 200);
  }, [currentWord, currentIndex, wordList]);

  const handleNext = () => {
    if (currentIndex < wordList.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 200);
    } else {
      // Reshuffle when reaching the end
      const remainingUnknown = Array.from(unknownWords);
      const newWords = [...GRE_WORDS]
        .filter(w => !knownWords.has(w) || unknownWords.has(w))
        .sort(() => Math.random() - 0.5);
      setWordList(newWords);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 200);
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const newWords = [...GRE_WORDS]
        .filter(w => !knownWords.has(w) || unknownWords.has(w))
        .sort(() => Math.random() - 0.5);
      setWordList(newWords);
      setCurrentIndex(0);
    }, 200);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Calculate display - count only increments when words are marked as "I knew this"
  // Total should always be 100 (total words)
  const wordsCompleted = knownWords.size;
  const displayTotal = GRE_WORDS.length;

  return (
    // Use h-screen and dvh (dynamic viewport height) for iOS full screen feel
    <div className="h-[100dvh] w-full bg-[#0f172a] relative overflow-hidden flex flex-col items-center justify-center p-4 pt-safe-top pb-safe-bottom">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header with Safe Area spacing */}
      <header className="absolute top-0 w-full p-6 pt-[calc(1.5rem+env(safe-area-inset-top))] flex justify-between items-center z-20">
        <div className="flex items-center gap-3">
            {/* SVG Logo - Rounded Square with Stylized Chevron */}
            <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shadow-lg rounded-[24px]">
              {/* Rounded Background */}
              <rect width="100" height="100" rx="24" fill="#E0E7FF" />
              {/* Dark Stylized Chevron */}
              <path 
                d="M38 32 L65 50 L38 68" 
                stroke="#1E1B4B" 
                strokeWidth="14" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            <h1 className="text-3xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-tight lowercase">gre vocab</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="z-10 flex flex-col items-center w-full max-w-lg">
        <Flashcard 
          word={currentWord} 
          data={currentWordData} 
          isFlipped={isFlipped}
          isLoading={false}
          onFlip={handleFlip}
        />
        
        <Controls 
          onNext={handleNext}
          onPrev={handlePrev}
          onShuffle={handleShuffle}
          onKnown={handleKnown}
          onUnknown={handleUnknown}
          currentIndex={wordsCompleted}
          total={displayTotal}
          disabled={false}
          showLearningButtons={isFlipped}
        />
      </main>
    </div>
  );
};

export default App;
