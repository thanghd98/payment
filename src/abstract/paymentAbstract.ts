import { PaymentEngineConfig, PayParams, Transaction } from "../types";

export abstract class PaymentAbstract{  
    _config: PaymentEngineConfig  
    
    constructor (_config: PaymentEngineConfig) {
      this._config = _config
    }
  
    abstract pay(params: PayParams): Promise<Transaction>
    abstract hasChain(chain: string): boolean
}