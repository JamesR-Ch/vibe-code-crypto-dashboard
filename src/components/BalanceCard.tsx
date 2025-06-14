import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { NETWORKS } from '../constants/networks';
import { truncateAddress } from '../utils/formatters';

interface BalanceCardProps {
  balance: string;
  loading: boolean;
  onCheck: () => void;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ balance, loading, onCheck }) => {
  return (
    <Card gradient="blue" className="h-full">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-lg sm:text-xl md:text-2xl">🏦</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Base Network
        </h2>
      </div>
      
      <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-blue-200/50">
        <h3 className="font-semibold text-gray-700 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
          <span>📋</span> Contract Details
        </h3>
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="font-medium text-gray-600">USDC:</span>
            <span className="text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded-lg break-all text-xs">
              {truncateAddress(NETWORKS.BASE.contracts.usdc!.address, 4, 4)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="font-medium text-gray-600">AAVE Pool:</span>
            <span className="text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded-lg break-all text-xs">
              {truncateAddress(NETWORKS.BASE.contracts.aavePool!.address, 4, 4)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="font-medium text-gray-600">Network:</span>
            <span className="text-gray-800 font-semibold">{NETWORKS.BASE.name}</span>
          </div>
        </div>
      </div>

      <Button
        onClick={onCheck}
        disabled={loading}
        variant="secondary"
        size="lg"
        className="w-full mb-4 sm:mb-6"
        icon="💰"
      >
        {loading ? 'Checking...' : 'Check USDC Balance'}
      </Button>

      {balance && (
        <div className="p-4 sm:p-6 bg-gradient-to-r from-green-200/60 to-emerald-200/60 backdrop-blur-sm border border-green-300/50 rounded-xl sm:rounded-2xl transition-all duration-200 ease-out hover:from-green-200/80 hover:to-emerald-200/80 hover:shadow-md transform-gpu will-change-transform">
          <h3 className="font-semibold text-green-800 mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg">
            <span>✅</span> Balance
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 break-words">{balance}</p>
        </div>
      )}
    </Card>
  );
};