import Web3 from "web3"
import { CHAIN_DATA } from '@wallet/constants'
import { PaymentContext } from "../types"
import { PaymentAbi, paymentContract } from "../constants"
import { AbiItem } from "ethereum-abi-types-generator"
import { chainKey } from "../../../types"
import { RegistryService } from '@wallet/registry'
export class CoreChain {
    constructor() {}
    registry = new RegistryService(localStorage)

    async getProvider(chain: chainKey): Promise<Web3> {
        const rpcUrl = await this.registry.getChainNode(chain)
        const mProvider = new Web3.providers.HttpProvider(rpcUrl as string || CHAIN_DATA[chain].rpcURL as string)
        return new Web3(mProvider)
    }

    async getContract(chain: chainKey){
        const { contractAddress } = paymentContract(chain) as { contractAddress: string }
        const client = await this.getProvider(chain)

        const contract = (new client.eth.Contract(
            PaymentAbi as AbiItem[],
            contractAddress
        ) as unknown) as PaymentContext

        return { address: contractAddress, contract }
    }
}