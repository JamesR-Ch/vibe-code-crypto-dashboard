import { useState } from 'react';
import type { CoinPrice } from '../types';
import { DEFAULT_ALTCOINS, MAX_ALTCOINS } from '../constants/networks';
import { fetchBtcPrice, fetchAltcoinPrices } from '../utils/api';
import { formatPrice } from '../utils/formatters';

export const usePrices = () => {
  const [btcPrice, setBtcPrice] = useState<string>('');
  const [altcoinPrices, setAltcoinPrices] = useState<CoinPrice[]>([]);
  const [altcoins, setAltcoins] = useState<string[]>(DEFAULT_ALTCOINS);
  const [newAltcoin, setNewAltcoin] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchPrices = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Fetch BTC price
      const btcPriceValue = await fetchBtcPrice();
      setBtcPrice(formatPrice(btcPriceValue));

      // Fetch altcoin prices
      const altPrices = await fetchAltcoinPrices(altcoins);
      const formattedPrices = altPrices.map(coin => ({
        ...coin,
        price: formatPrice(coin.price)
      }));
      setAltcoinPrices(formattedPrices);
    } catch (err) {
      setError('Failed to fetch prices. Please try again.');
      console.error('Error fetching prices:', err);
    } finally {
      setLoading(false);
    }
  };

  const addAltcoin = async () => {
    if (newAltcoin && altcoins.length < MAX_ALTCOINS && !altcoins.includes(newAltcoin.toUpperCase())) {
      const newSymbol = newAltcoin.toUpperCase();
      setAltcoins([...altcoins, newSymbol]);
      setNewAltcoin('');
      
      // Immediately fetch price for the new coin
      try {
        const newCoinPrices = await fetchAltcoinPrices([newSymbol]);
        if (newCoinPrices.length > 0) {
          const formattedPrice = {
            ...newCoinPrices[0],
            price: formatPrice(newCoinPrices[0].price)
          };
          setAltcoinPrices(prev => [...prev, formattedPrice]);
        }
      } catch (err) {
        console.error('Error fetching price for new coin:', err);
      }
    }
  };

  const removeAltcoin = (symbol: string) => {
    setAltcoins(altcoins.filter(coin => coin !== symbol));
    setAltcoinPrices(altcoinPrices.filter(coin => coin.symbol !== symbol));
  };

  return {
    btcPrice,
    altcoinPrices,
    altcoins,
    newAltcoin,
    loading,
    error,
    fetchPrices,
    addAltcoin,
    removeAltcoin,
    setNewAltcoin,
    setError
  };
};