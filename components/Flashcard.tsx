import React from 'react';
import { FlashcardProps } from '../types';

const Flashcard: React.FC<FlashcardProps> = ({ word, data, isFlipped, isLoading, onFlip }) => {
  return (
    <div 
      className="relative w-full max-w-md h-96 perspective-1000 cursor-pointer group"
      onClick={onFlip}
    >
      <div 
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* FRONT SIDE */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl"></div>

            <span className="text-sm font-light tracking-[0.2em] uppercase text-white/60 mb-4">GRE Vocabulary</span>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-tight text-center break-words w-full">
              {word}
            </h2>
            <div className="mt-8 text-white/50 text-sm animate-pulse">
              Click to reveal meaning
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full w-full rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl"></div>

            {data ? (
              <div className="z-10 text-center flex flex-col h-full justify-center">
                <div className="mb-2">
                   <h3 className="text-3xl font-serif font-bold text-white mb-1">{data.word}</h3>
                   <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                      <span className="italic font-serif">{data.type}</span>
                      <span>•</span>
                      <span className="font-mono text-xs border border-white/20 px-2 py-0.5 rounded-full">{data.pronunciation}</span>
                   </div>
                </div>
                
                <div className="my-6">
                  <p className="text-lg leading-relaxed font-light text-white/90">
                    {data.definition}
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border-l-2 border-purple-400 text-left">
                  <p className="text-sm text-purple-200 font-semibold mb-1 uppercase tracking-wider text-xs">Example</p>
                  <p className="text-md italic text-white/80">
                    "{data.example}"
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-red-300">Failed to load definition.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
