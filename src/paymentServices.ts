import { PaymentEngines } from "./constants";
import { Coin98PaymentFactory } from "./factory/paymentFactory";
import { IsWhiteListTokenParams, PayParams, SetWhiteListTokenParams } from "./types";

interface Config {
    privateKey: string
}

export class Coin98PaymentServices {
    factory?: Coin98PaymentFactory
    static instance: Coin98PaymentServices
    
    constructor({ privateKey }: Config) {
        if(Coin98PaymentServices.instance){
            return Coin98PaymentServices.instance
        }

        this.factory = new Coin98PaymentFactory({engines: PaymentEngines, privateKey })
        Coin98PaymentServices.instance = this;

        return this
    }

    async setWhitelistToken(params: SetWhiteListTokenParams): Promise<string>{
        if(this.factory){
            return await this.factory.setWhitelistToken(params)
        }

        return ''
    }

    async isWhitelistToken(params: IsWhiteListTokenParams): Promise<boolean>{
        if(this.factory){
            return await this.factory.isWhitelistToken(params)
        }

        return false
    }

    async pay(params: PayParams): Promise<string>{
        if(this.factory){
            return await this.factory.pay(params)
        }

        return ''
    }

}