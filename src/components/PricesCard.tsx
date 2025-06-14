import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Input } from './Input';
import type { CoinPrice } from '../types';
import { MAX_ALTCOINS } from '../constants/networks';

interface PricesCardProps {
  btcPrice: string;
  altcoinPrices: CoinPrice[];
  altcoins: string[];
  newAltcoin: string;
  loading: boolean;
  onFetchPrices: () => void;
  onAddAltcoin: () => void;
  onRemoveAltcoin: (symbol: string) => void;
  onNewAltcoinChange: (value: string) => void;
}

export const PricesCard: React.FC<PricesCardProps> = ({
  btcPrice,
  altcoinPrices,
  altcoins,
  newAltcoin,
  loading,
  onFetchPrices,
  onAddAltcoin,
  onRemoveAltcoin,
  onNewAltcoinChange
}) => {
  return (
    <Card gradient="purple" className="h-full">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-lg sm:text-xl md:text-2xl">📈</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Live Prices
        </h2>
      </div>
      
      <Button
        onClick={onFetchPrices}
        disabled={loading}
        variant="primary"
        size="lg"
        className="w-full mb-6 sm:mb-8"
        icon="💹"
      >
        {loading ? 'Fetching...' : 'Get Latest Prices'}
      </Button>

      {/* BTC Price */}
      {btcPrice && (
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-orange-200/60 to-yellow-200/60 backdrop-blur-sm border border-orange-300/50 rounded-xl sm:rounded-2xl transition-all duration-200 ease-out hover:from-orange-200/80 hover:to-yellow-200/80 hover:shadow-md transform-gpu will-change-transform">
          <div className="flex flex-col space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-orange-800 flex items-center gap-2">
              <span>₿</span> Bitcoin (BTC)
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 break-words">{btcPrice}</p>
          </div>
        </div>
      )}

      {/* Altcoin Management */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6 flex items-center gap-2">
          <span>⚙️</span> Manage Altcoins (Max {MAX_ALTCOINS})
        </h3>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
          <div className="flex-1">
            <Input
              value={newAltcoin}
              onChange={(e) => onNewAltcoinChange(e.target.value.toUpperCase())}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && newAltcoin && altcoins.length < MAX_ALTCOINS && !altcoins.includes(newAltcoin.toUpperCase())) {
                  onAddAltcoin();
                }
              }}
              placeholder="Enter symbol (e.g., ADA)"
              maxLength={10}
            />
          </div>
          <Button
            onClick={onAddAltcoin}
            disabled={altcoins.length >= MAX_ALTCOINS || !newAltcoin}
            variant="success"
            size="md"
            className="w-full sm:w-auto"
            icon="➕"
          >
            Add
          </Button>
        </div>
        <div className="text-xs sm:text-sm text-gray-600 bg-white/40 rounded-lg p-3">
          <p className="font-medium mb-2">Current altcoins: {altcoins.length}/{MAX_ALTCOINS}</p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {altcoins.map((coin) => (
              <span 
                key={coin} 
                className="px-2 sm:px-3 py-1 bg-purple-200/60 text-purple-800 rounded-full text-xs font-medium"
              >
                {coin}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Altcoin Prices */}
      <div className="space-y-3 sm:space-y-4">
        {altcoinPrices.map((coin) => (
          <div 
            key={coin.symbol} 
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-4 sm:p-5 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-xl sm:rounded-2xl hover:bg-white/80 transition-all duration-150 ease-out hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-md transform-gpu will-change-transform"
          >
            <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-4">
              <span className="font-bold text-gray-800 text-lg sm:text-xl">{coin.symbol}</span>
              <Button
                onClick={() => onRemoveAltcoin(coin.symbol)}
                variant="danger"
                size="sm"
                icon="❌"
              >
                Remove
              </Button>
            </div>
            <span className="font-bold text-purple-700 text-lg sm:text-xl text-right">{coin.price}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};