import { chainKey } from "./chain";
export interface PayParams {
  partnerCode: string,
  tokenAddress: string,
  amount: string,
  payFor: string,
  data?: string,
  chain: chainKey
}

export interface Transaction{
  data: string,
  to: string,
  value: string | number
}
