import { chainKey } from "./chain";

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
  transactionId: string,
  data?: string,
  chain: chainKey
}

export interface Transaction{
  data: string,
  to: string,
  value: string | number
}
