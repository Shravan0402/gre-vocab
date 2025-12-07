import React from 'react';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  onShuffle: () => void;
  onKnown: () => void;
  onUnknown: () => void;
  currentIndex: number;
  total: number;
  disabled: boolean;
  showLearningButtons: boolean;
}

const Controls: React.FC<ControlsProps> = ({ 
  onNext, 
  onPrev, 
  onShuffle, 
  onKnown,
  onUnknown,
  currentIndex, 
  total, 
  disabled,
  showLearningButtons 
}) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-md z-10">
      {/* Learning Buttons - Only show when card is flipped */}
      {showLearningButtons && (
        <div className="flex gap-4 w-full">
          <button
            onClick={onKnown}
            disabled={disabled}
            className="flex-1 py-4 px-6 rounded-2xl bg-green-500/20 backdrop-blur-xl border border-green-400/30 text-white font-semibold text-lg shadow-[0_8px_32px_0_rgba(34,197,94,0.2)] hover:bg-green-500/30 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            I knew this
          </button>
          
          <button
            onClick={onUnknown}
            disabled={disabled}
            className="flex-1 py-4 px-6 rounded-2xl bg-red-500/20 backdrop-blur-xl border border-red-400/30 text-white font-semibold text-lg shadow-[0_8px_32px_0_rgba(239,68,68,0.2)] hover:bg-red-500/30 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            I didn't know this
          </button>
        </div>
      )}

      <div className="flex items-center justify-between w-full bg-black/20 backdrop-blur-md rounded-full p-2 border border-white/10">
        <button
          onClick={onPrev}
          disabled={disabled || currentIndex === 0}
          className="p-4 rounded-full bg-white/5 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
          aria-label="Previous word"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex flex-col items-center">
            <span className="text-white/90 font-mono font-bold text-lg">{currentIndex + 1} <span className="text-white/40">/</span> {total}</span>
        </div>

        <button
          onClick={onNext}
          disabled={disabled || currentIndex === total - 1}
          className="p-4 rounded-full bg-white/5 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
          aria-label="Next word"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <button
        onClick={onShuffle}
        disabled={disabled}
        className="text-white/60 hover:text-white text-sm flex items-center gap-2 transition-colors uppercase tracking-wider font-semibold hover:bg-white/10 px-4 py-2 rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        Shuffle Words
      </button>
    </div>
  );
};

export default Controls;