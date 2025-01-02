import { chainKey } from "./chain";

export enum Enviroment {
  production = 'production',
  development = 'development',
}

export interface PaymentConfig {
  privateKey: string;
}

export interface SetWhileListTokenParams {
  params: Array<{
    address: string;
    isActive: boolean;
  }>;
  chain: chainKey
}
