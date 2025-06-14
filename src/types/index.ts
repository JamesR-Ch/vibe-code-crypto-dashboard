export interface CoinPrice {
  symbol: string;
  price: string;
}

export interface VenusBalances {
  usdc: string;
  usdt: string;
}

export interface ContractInfo {
  address: string;
  name: string;
}

export interface NetworkConfig {
  name: string;
  rpcUrl: string;
  contracts: {
    usdc?: ContractInfo;
    usdt?: ContractInfo;
    aavePool?: ContractInfo;
    venusUsdc?: ContractInfo;
    venusUsdt?: ContractInfo;
  };
}

export interface LoadingStates {
  balance: boolean;
  venus: boolean;
  prices: boolean;
  all: boolean;
}