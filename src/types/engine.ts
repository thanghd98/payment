import { chainKey } from "./chain";

export enum Enviroment {
  production = 'production',
  development = 'development',
}

export interface PaymentConfig {
  privateKey: string;
}

export interface SetWhiteListTokenParams {
  params: Array<{
    address: string;
    isActive: boolean;
  }>;
  chain: chainKey
}

export interface IsWhiteListTokenParams {
  tokenAddress: string
  chain: chainKey
}

export interface PayParams {
  tokenAddress: string,
  amount: string,
  receiver: string,
  data?: string,
  chain: chainKey
}