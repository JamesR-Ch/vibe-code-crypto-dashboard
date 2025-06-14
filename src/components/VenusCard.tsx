import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import type { VenusBalances } from '../types';
import { NETWORKS } from '../constants/networks';
import { truncateAddress } from '../utils/formatters';

interface VenusCardProps {
  venusBalances: VenusBalances;
  loading: boolean;
  onCheck: () => void;
}

export const VenusCard: React.FC<VenusCardProps> = ({ venusBalances, loading, onCheck }) => {
  return (
    <Card gradient="orange" className="h-full">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-lg sm:text-xl md:text-2xl">⚡</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Venus BSC
        </h2>
      </div>
      
      <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-orange-200/50">
        <h3 className="font-semibold text-gray-700 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
          <span>📋</span> Contract Details
        </h3>
        <div className="space-y-2 sm:space-y-3 text-xs">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="font-medium text-gray-600">USDC Token:</span>
            <span className="text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded-lg break-all text-xs">
              {truncateAddress(NETWORKS.BSC.contracts.usdc!.address, 4, 4)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="font-medium text-gray-600">Venus USDC:</span>
            <span className="text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded-lg break-all text-xs">
              {truncateAddress(NETWORKS.BSC.contracts.venusUsdc!.address, 4, 4)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="font-medium text-gray-600">USDT Token:</span>
            <span className="text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded-lg break-all text-xs">
              {truncateAddress(NETWORKS.BSC.contracts.usdt!.address, 4, 4)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="font-medium text-gray-600">Venus USDT:</span>
            <span className="text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded-lg break-all text-xs">
              {truncateAddress(NETWORKS.BSC.contracts.venusUsdt!.address, 4, 4)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="font-medium text-gray-600">Network:</span>
            <span className="text-gray-800 font-semibold">{NETWORKS.BSC.name}</span>
          </div>
        </div>
      </div>

      <Button
        onClick={onCheck}
        disabled={loading}
        variant="warning"
        size="lg"
        className="w-full mb-4 sm:mb-6"
        icon="🏛️"
      >
        {loading ? 'Checking...' : 'Check Venus Balances'}
      </Button>

      {(venusBalances.usdc || venusBalances.usdt) && (
        <div className="space-y-3 sm:space-y-4">
          {venusBalances.usdc && (
            <div className="p-4 sm:p-6 bg-gradient-to-r from-green-200/60 to-emerald-200/60 backdrop-blur-sm border border-green-300/50 rounded-xl sm:rounded-2xl transition-all duration-200 ease-out hover:from-green-200/80 hover:to-emerald-200/80 hover:shadow-md transform-gpu will-change-transform">
              <h3 className="font-semibold text-green-800 mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg">
                <span>💵</span> USDC Balance
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 break-words">{venusBalances.usdc}</p>
            </div>
          )}
          {venusBalances.usdt && (
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-200/60 to-cyan-200/60 backdrop-blur-sm border border-blue-300/50 rounded-xl sm:rounded-2xl transition-all duration-200 ease-out hover:from-blue-200/80 hover:to-cyan-200/80 hover:shadow-md transform-gpu will-change-transform">
              <h3 className="font-semibold text-blue-800 mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg">
                <span>💸</span> USDT Balance
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 break-words">{venusBalances.usdt}</p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};