import { PaymentEngines } from "./constants";
import { Coin98PaymentFactory } from "./factory/paymentFactory";
import { IsWhiteListTokenParams, PayParams, SetWhiteListTokenParams, Transaction } from "./types";

export class Coin98PaymentServices {
    factory?: Coin98PaymentFactory
    static instance: Coin98PaymentServices
    
    constructor() {
        if(Coin98PaymentServices.instance){
            return Coin98PaymentServices.instance
        }

        this.factory = new Coin98PaymentFactory({engines: PaymentEngines })
        Coin98PaymentServices.instance = this;

        return this
    }

    async setWhitelistToken(params: SetWhiteListTokenParams): Promise<Transaction>{
        if(this.factory){
            return await this.factory.setWhitelistToken(params)
        }

        throw new Error('Method not implement')
    }

    async isWhitelistToken(params: IsWhiteListTokenParams): Promise<boolean>{
        if(this.factory){
            return await this.factory.isWhitelistToken(params)
        }

        return false
    }

    async pay(params: PayParams): Promise<Transaction>{
        if(this.factory){
            return await this.factory.pay(params)
        }

        throw new Error('Method not implement')
    }

}