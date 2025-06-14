import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mb-4 sm:mb-6 md:mb-8 shadow-2xl animate-pulse">
        <span className="text-2xl sm:text-3xl md:text-4xl">💎</span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 tracking-tight px-4">
        Crypto Dashboard
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
        Monitor lending platform balances and track real-time prices
      </p>
    </div>
  );
};
