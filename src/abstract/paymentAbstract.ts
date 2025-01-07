import { IsWhiteListTokenParams, PaymentEngineConfig, PayParams, SetWhiteListTokenParams, Transaction } from "../types";

export abstract class PaymentAbstract{  
    _config: PaymentEngineConfig  
    
    constructor (_config: PaymentEngineConfig) {
      this._config = _config
    }
  
    abstract setWhitelistToken(params: SetWhiteListTokenParams): Promise<Transaction>
    abstract isWhitelistToken(params: IsWhiteListTokenParams): Promise<boolean>
    abstract pay(params: PayParams): Promise<Transaction>
    abstract hasChain(chain: string): boolean
}