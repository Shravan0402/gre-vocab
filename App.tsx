import React, { useState, useEffect, useCallback } from 'react';
import Flashcard from './components/Flashcard';
import Controls from './components/Controls';
import { GRE_WORDS, WORD_DATA } from './constants';
import { WordData } from './types';

// Shuffle words with priority for unknown words
const shuffleWords = (allWords: string[], unknown: Set<string>, known: Set<string>): string[] => {
    const unknownList = allWords.filter(w => unknown.has(w));
    const knownList = allWords.filter(w => known.has(w) && !unknown.has(w));
    const neutralList = allWords.filter(w => !unknown.has(w) && !known.has(w));
    
    // Unknown words appear 3x more frequently than known/neutral words
    const weightedUnknown = [...unknownList, ...unknownList, ...unknownList];
    const combined = [...weightedUnknown, ...neutralList, ...knownList];
    
    // Shuffle the combined array
    const shuffled = [...combined].sort(() => Math.random() - 0.5);
    
    // If we have very few words, make sure we have enough variety
    if (shuffled.length < allWords.length) {
      const remaining = allWords.filter(w => !shuffled.includes(w));
      shuffled.push(...remaining);
    }
    
    return shuffled.length > 0 ? shuffled : [...allWords].sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  // Track words the user doesn't know (need more practice)
  const [unknownWords, setUnknownWords] = useState<Set<string>>(new Set());
  const [knownWords, setKnownWords] = useState<Set<string>>(new Set());
  
  // Use a shuffled copy of words with smart repetition
  const [wordList, setWordList] = useState<string[]>(() => shuffleWords(GRE_WORDS, new Set(), new Set()));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const currentWord = wordList[currentIndex];

  // Get word data directly from our database (no API calls needed)
  const currentWordData: WordData | null = WORD_DATA.get(currentWord) || null;

  // Handle "I knew this" - mark as known, remove from unknown
  const handleKnown = useCallback(() => {
    setKnownWords(prev => new Set(prev).add(currentWord));
    setUnknownWords(prev => {
      const updated = new Set(prev);
      updated.delete(currentWord);
      return updated;
    });
    
    // Move to next word
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < wordList.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reshuffle when reaching the end
        setWordList(shuffleWords(GRE_WORDS, unknownWords, knownWords));
        setCurrentIndex(0);
      }
    }, 200);
  }, [currentWord, currentIndex, wordList.length, unknownWords, knownWords, shuffleWords]);

  // Handle "I didn't know this" - mark as unknown for more practice
  const handleUnknown = useCallback(() => {
    setUnknownWords(prev => new Set(prev).add(currentWord));
    setKnownWords(prev => {
      const updated = new Set(prev);
      updated.delete(currentWord);
      return updated;
    });
    
    // Move to next word and immediately reshuffle to include this word more often
    setIsFlipped(false);
    setTimeout(() => {
      const updatedUnknown = new Set(unknownWords).add(currentWord);
      const updatedKnown = new Set(knownWords);
      updatedKnown.delete(currentWord);
      
      if (currentIndex < wordList.length - 1) {
        // Reshuffle remaining words to include this word more often
        const remainingWords = wordList.slice(currentIndex + 1);
        const newWords = shuffleWords([...remainingWords, currentWord], updatedUnknown, updatedKnown);
        setWordList([...wordList.slice(0, currentIndex + 1), ...newWords]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reshuffle when reaching the end
        setWordList(shuffleWords(GRE_WORDS, updatedUnknown, updatedKnown));
        setCurrentIndex(0);
      }
    }, 200);
  }, [currentWord, currentIndex, wordList, unknownWords, knownWords, shuffleWords]);

  // Periodically reshuffle remaining words to include unknown words more frequently
  // This ensures unknown words appear more often in the remaining deck
  useEffect(() => {
    const interval = setInterval(() => {
      if (unknownWords.size > 0 && currentIndex < wordList.length - 5) {
        // Only reshuffle if we're not near the end, and preserve current position
        const remainingWords = wordList.slice(currentIndex);
        const reshuffledRemaining = shuffleWords(remainingWords, unknownWords, knownWords);
        setWordList([...wordList.slice(0, currentIndex), ...reshuffledRemaining]);
      }
    }, 60000); // Check every 60 seconds
    
    return () => clearInterval(interval);
  }, [unknownWords, knownWords, currentIndex, wordList, shuffleWords]);

  const handleNext = () => {
    if (currentIndex < wordList.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 200);
    } else {
      // Reshuffle when reaching the end
      setWordList(shuffleWords(GRE_WORDS, unknownWords, knownWords));
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
      setWordList(shuffleWords(GRE_WORDS, unknownWords, knownWords));
      setCurrentIndex(0);
    }, 200);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

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
          currentIndex={currentIndex}
          total={wordList.length}
          disabled={false}
          showLearningButtons={isFlipped}
        />
      </main>
    </div>
  );
};

export default App;