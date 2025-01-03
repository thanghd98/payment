import Web3 from "web3"
import { CHAIN_DATA } from '@wallet/constants'
import { PaymentContext } from "../types"
import { PaymentAbi, paymentContract } from "../constants"
import { AbiItem } from "ethereum-abi-types-generator"
import { chainKey } from "../../../types"

export class CoreChain {
    constructor() {}

    getProvider(chain: chainKey): Web3 {
        const mProvider = new Web3.providers.HttpProvider(CHAIN_DATA[chain.toString()]?.rpcURL)
        return new Web3(mProvider)
    }

    getContract(chain: chainKey){
        const { contractAddress } = paymentContract(chain) as { contractAddress: string }
        const client = this.getProvider(chain)

        const contract = (new client.eth.Contract(
            PaymentAbi as AbiItem[],
            contractAddress
        ) as unknown) as PaymentContext

        return { address: contractAddress, contract }
    }
}