import React, { useState, useEffect, useCallback } from 'react';
import Flashcard from './components/Flashcard';
import Controls from './components/Controls';
import { GRE_WORDS } from './constants';
import { fetchWordDetails } from './services/geminiService';
import { WordData } from './types';

const App: React.FC = () => {
  // Use a shuffled copy of words or the original list
  const [wordList, setWordList] = useState<string[]>(GRE_WORDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Cache fetched word data to minimize API calls
  const [cache, setCache] = useState<Map<string, WordData>>(new Map());

  // Refs to handle strict mode double-invocations or race conditions
  const currentWord = wordList[currentIndex];

  const loadWordData = useCallback(async (word: string) => {
    if (cache.has(word)) return;

    setIsLoading(true);
    const data = await fetchWordDetails(word);
    
    if (data) {
      setCache(prev => new Map(prev).set(word, data));
    }
    setIsLoading(false);
  }, [cache]);

  // Load data when flipped if not already loaded
  useEffect(() => {
    if (isFlipped && !cache.has(currentWord)) {
      loadWordData(currentWord);
    }
  }, [isFlipped, currentWord, cache, loadWordData]);

  // Prefetch next word for smoother UX
  useEffect(() => {
    const nextWord = wordList[currentIndex + 1];
    if (nextWord && !cache.has(nextWord)) {
      // Small delay to prioritize current UI interaction
      const timer = setTimeout(() => {
        fetchWordDetails(nextWord).then(data => {
            if (data) setCache(prev => new Map(prev).set(nextWord, data));
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, wordList, cache]);

  const handleNext = () => {
    if (currentIndex < wordList.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 200); // Wait for flip back
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
      const shuffled = [...GRE_WORDS].sort(() => Math.random() - 0.5);
      setWordList(shuffled);
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
        {!process.env.API_KEY && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-3 py-1 rounded-full text-xs backdrop-blur-md">
                API Key Missing
            </div>
        )}
      </header>

      {/* Main Content */}
      <main className="z-10 flex flex-col items-center w-full max-w-lg">
        <Flashcard 
          word={currentWord} 
          data={cache.get(currentWord) || null} 
          isFlipped={isFlipped}
          isLoading={isLoading && isFlipped && !cache.has(currentWord)}
          onFlip={handleFlip}
        />
        
        <Controls 
          onNext={handleNext}
          onPrev={handlePrev}
          onShuffle={handleShuffle}
          currentIndex={currentIndex}
          total={wordList.length}
          disabled={isLoading && isFlipped && !cache.has(currentWord)}
        />
      </main>

      <footer className="absolute bottom-4 pb-[env(safe-area-inset-bottom)] text-white/20 text-xs text-center z-10">
        Powered by Google Gemini 2.5 Flash
      </footer>
    </div>
  );
};

export default App;