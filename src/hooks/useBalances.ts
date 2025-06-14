import { useState } from 'react';
import { ethers } from 'ethers';
import type { VenusBalances } from '../types';
import { NETWORKS, ERC20_ABI } from '../constants/networks';
import { formatBalance } from '../utils/formatters';

export const useBalances = () => {
  const [balance, setBalance] = useState<string>('');
  const [venusBalances, setVenusBalances] = useState<VenusBalances>({ usdc: '', usdt: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const checkBaseBalance = async () => {
    setLoading(true);
    setError('');
    setBalance('');

    try {
      const provider = new ethers.JsonRpcProvider(NETWORKS.BASE.rpcUrl);
      const usdcContract = new ethers.Contract(
        NETWORKS.BASE.contracts.usdc!.address,
        ERC20_ABI,
        provider
      );

      const balanceWei = await usdcContract.balanceOf(NETWORKS.BASE.contracts.aavePool!.address);
      const decimals = await usdcContract.decimals();
      const symbol = await usdcContract.symbol();

      const balanceFormatted = ethers.formatUnits(balanceWei, decimals);
      setBalance(formatBalance(balanceFormatted, symbol));
    } catch (err) {
      setError('Failed to fetch Base balance. Please try again.');
      console.error('Error fetching Base balance:', err);
    } finally {
      setLoading(false);
    }
  };

  const checkVenusBalances = async () => {
    setLoading(true);
    setError('');
    setVenusBalances({ usdc: '', usdt: '' });

    try {
      const provider = new ethers.JsonRpcProvider(NETWORKS.BSC.rpcUrl);

      // Check USDC in Venus
      const usdcContract = new ethers.Contract(
        NETWORKS.BSC.contracts.usdc!.address,
        ERC20_ABI,
        provider
      );
      const usdcBalanceWei = await usdcContract.balanceOf(NETWORKS.BSC.contracts.venusUsdc!.address);
      const usdcDecimals = await usdcContract.decimals();
      const usdcFormatted = ethers.formatUnits(usdcBalanceWei, usdcDecimals);

      // Check USDT in Venus
      const usdtContract = new ethers.Contract(
        NETWORKS.BSC.contracts.usdt!.address,
        ERC20_ABI,
        provider
      );
      const usdtBalanceWei = await usdtContract.balanceOf(NETWORKS.BSC.contracts.venusUsdt!.address);
      const usdtDecimals = await usdtContract.decimals();
      const usdtFormatted = ethers.formatUnits(usdtBalanceWei, usdtDecimals);

      setVenusBalances({
        usdc: formatBalance(usdcFormatted, 'USDC'),
        usdt: formatBalance(usdtFormatted, 'USDT')
      });
    } catch (err) {
      setError('Failed to fetch Venus balances. Please try again.');
      console.error('Error fetching Venus balances:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    balance,
    venusBalances,
    loading,
    error,
    checkBaseBalance,
    checkVenusBalances,
    setError
  };
};