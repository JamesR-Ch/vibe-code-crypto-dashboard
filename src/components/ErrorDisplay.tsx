import React from 'react';

interface ErrorDisplayProps {
  error: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mt-12 max-w-2xl mx-auto">
      <div className="p-6 bg-gradient-to-r from-red-200/60 to-pink-200/60 backdrop-blur-sm border border-red-300/50 rounded-2xl shadow-lg">
        <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2 text-lg">
          <span>⚠️</span> Error
        </h3>
        <p className="text-red-700 text-lg">{error}</p>
      </div>
    </div>
  );
};