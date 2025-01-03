import { PaymentAbstract } from "../abstract";
import { IsWhiteListTokenParams, PaymentEngineConfig, PayParams, SetWhiteListTokenParams } from "../types";

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

    async setWhitelistToken(params: SetWhiteListTokenParams): Promise<string>{
        const {chain} = params
        const engine = this.getPaymentByChain(chain)

        if(engine){
            try {
                return engine.setWhitelistToken(params)
            } catch (error) {
                return ''
            }
        }

        throw new Error('Method not implement')
    }

    async isWhitelistToken(params: IsWhiteListTokenParams): Promise<boolean>{
        const {chain} = params
        const engine = this.getPaymentByChain(chain)

        if(engine){
            try {
                return engine.isWhitelistToken(params)
            } catch (error) {
                return false
            }
        }

        throw new Error('Method not implement')
    }

    async pay(params: PayParams): Promise<string>{
        const {chain} = params
        const engine = this.getPaymentByChain(chain)
        console.log("🚀 ~ Coin98PaymentFactory ~ pay ~ engine:", engine)

        if(engine){
            try {
                return engine.pay(params)
            } catch (error) {
                return ''
            }
        }

        throw new Error('Method not implement')
    }

}