import { CHAIN_DATA } from "@wallet/constants";
import { CrossChainContext, PaymentConfig, SetWhileListTokenParams } from "../types";
import { CoreChain } from "./coreChain";

export class Coin98Payment {
    coreChain: CoreChain
    private privateKey: string

    constructor(config: PaymentConfig){
        this.coreChain = new CoreChain()
        this.privateKey = config.privateKey
    }

    async setWhileListToken(params: SetWhileListTokenParams): Promise<string>{
        const { params: paramsWhileList, chain } = params

        try {
            const addresses = paramsWhileList.map(item => item.address)
            const isActives = paramsWhileList.map(item => item.isActive)

            const { contract, address }: { address: string; contract: CrossChainContext } = this.coreChain.getContract(chain)
            const data = contract.methods.setWhitelistTokens(addresses, isActives).encodeABI()

            const chainData = CHAIN_DATA[chain]

            const client = this.coreChain.getProvider(chain)
            const signer = client.eth.accounts.privateKeyToAccount(this.privateKey)
            const nonce = await client.eth.getTransactionCount(signer.address)

            const transaction = {
                chainId: chainData?.numChainId,
                to: address,
                from: signer.address,
                value: "0x",
                data,
                nonce
            }


            const gas = await client.eth.estimateGas(transaction)
            //@ts-expect-error
            transaction.gas = gas

            const tx = await signer.signTransaction(transaction)

            const { transactionHash } = await client.eth.sendSignedTransaction(tx.rawTransaction as string)

            return transactionHash
        } catch (error) {
            throw new Error(error as unknown as string)
        }
    }

}