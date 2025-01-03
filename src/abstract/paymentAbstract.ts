import { IsWhiteListTokenParams, PaymentEngineConfig, PayParams, SetWhiteListTokenParams } from "../types";

export abstract class PaymentAbstract{  
    _config: PaymentEngineConfig  
    
    constructor (_config: PaymentEngineConfig) {
      this._config = _config
    }
  
    abstract setWhitelistToken(params: SetWhiteListTokenParams): Promise<string>
    abstract isWhitelistToken(params: IsWhiteListTokenParams): Promise<boolean>
    abstract pay(params: PayParams): Promise<string>
    abstract hasChain(chain: string): boolean
}