import { PaymentAbstract } from "../abstract";
import { PaymentEngineConfig, PayParams, Transaction } from "../types";

export class Coin98PaymentFactory {
    engines: PaymentAbstract[]

    constructor(configs: PaymentEngineConfig){
        //@ts-expect-error
        this.engines = configs.engines.map(PaymentEngines => new PaymentEngines(configs))   
    }

    getPaymentByChain(chain: string){
        const engine = this.engines.find(engine => {
            return engine.hasChain(chain)
        })
        
        if(!engine) throw new Error('Engine not exists')

        return engine
    }

    async pay(params: PayParams): Promise<Transaction>{
        const {chain} = params
        const engine = this.getPaymentByChain(chain)

        if(engine){
            try {
                return engine.pay(params)
            } catch (error) {
                throw new Error('Method not implement')
            }
        }

        throw new Error('Method not implement')
    }

}