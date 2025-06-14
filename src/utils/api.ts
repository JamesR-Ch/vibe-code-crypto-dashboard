import { BINANCE_API_BASE } from '../constants/networks';
import type { CoinPrice } from '../types';

export const fetchBtcPrice = async (): Promise<string> => {
  const response = await fetch(`${BINANCE_API_BASE}/ticker/price?symbol=BTCUSDT`);
  if (!response.ok) throw new Error('Failed to fetch BTC price');
  const data = await response.json();
  return data.price;
};

interface BinancePriceResponse {
  symbol: string;
  price: string;
}

export const fetchAltcoinPrices = async (symbols: string[]): Promise<CoinPrice[]> => {
  const symbolsQuery = symbols.map(coin => `${coin}USDT`).join(',');
  const response = await fetch(
    `${BINANCE_API_BASE}/ticker/price?symbols=[${symbolsQuery.split(',').map(s => `"${s}"`).join(',')}]`
  );
  
  if (!response.ok) throw new Error('Failed to fetch altcoin prices');
  const data: BinancePriceResponse[] = await response.json();
  
  return data.map((item) => ({
    symbol: item.symbol.replace('USDT', ''),
    price: item.price
  }));
};