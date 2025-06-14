import type { NetworkConfig } from '../types';

export const NETWORKS: Record<string, NetworkConfig> = {
  BASE: {
    name: 'Base Mainnet',
    rpcUrl: 'https://mainnet.base.org',
    contracts: {
      usdc: {
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        name: 'USDC'
      },
      aavePool: {
        address: '0x4e65fE4DbA92790696d040ac24Aa414708F5c0AB',
        name: 'AAVE Pool'
      }
    }
  },
  BSC: {
    name: 'BSC Mainnet',
    rpcUrl: 'https://bsc-dataseed1.binance.org',
    contracts: {
      usdc: {
        address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
        name: 'USDC Token'
      },
      usdt: {
        address: '0x55d398326f99059fF775485246999027B3197955',
        name: 'USDT Token'
      },
      venusUsdc: {
        address: '0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8',
        name: 'Venus USDC'
      },
      venusUsdt: {
        address: '0xfD5840Cd36d94D7229439859C0112a4185BC0255',
        name: 'Venus USDT'
      }
    }
  }
};

export const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)'
];

export const DEFAULT_ALTCOINS = ['ETH', 'SOL', 'BNB'];
export const MAX_ALTCOINS = 5;
export const BINANCE_API_BASE = 'https://api.binance.com/api/v3';