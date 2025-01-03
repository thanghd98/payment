import { CHAIN_DATA } from "@wallet/constants";
import { PaymentAbstract } from "../../../abstract";
import { IsWhiteListTokenParams, PaymentEngineConfig, PayParams, SetWhiteListTokenParams } from "../../../types";
import { PaymentContext } from "../types";
import { CoreChain } from "./coreChain";

export class EvmPayment extends PaymentAbstract {
    _coreChain: CoreChain
    private privateKey: string

    constructor(_config: PaymentEngineConfig){
        super(_config)
        this.privateKey = _config.privateKey
        this._coreChain = new CoreChain()
    }

    async setWhitelistToken(params: SetWhiteListTokenParams): Promise<string>{
        const { params: paramsWhiteList, chain } = params

        try {
            const addresses = paramsWhiteList.map(item => item.address)
            const isActives = paramsWhiteList.map(item => item.isActive)

            const { contract, address }: { address: string; contract: PaymentContext } = this._coreChain.getContract(chain)
            const data = contract.methods.setWhitelistTokens(addresses, isActives).encodeABI()

            const chainData = CHAIN_DATA[chain]

            const client = this._coreChain.getProvider(chain)
            const signer = client.eth.accounts.privateKeyToAccount(this.privateKey as string)
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

    async isWhitelistToken(params: IsWhiteListTokenParams): Promise<boolean> {
        const {tokenAddress, chain} = params
        try {
            const { contract }: { address: string; contract: PaymentContext } = this._coreChain.getContract(chain)
            const isWhiteList = await contract.methods.isWhiteListToken(tokenAddress).call()

            return isWhiteList as boolean
        } catch (error) {
            return false
        }
    }

    async pay(params: PayParams): Promise<string>{
        const { tokenAddress, amount, receiver, data: dataHex, chain } = params
        try {
            const { contract, address }: { address: string; contract: PaymentContext } = this._coreChain.getContract(chain)
            const data = contract.methods.pay(tokenAddress, amount, receiver, dataHex).encodeABI()
            console.log("🚀 ~ EvmPayment ~ pay ~ data:", data)

            const chainData = CHAIN_DATA[chain]

            const client = this._coreChain.getProvider(chain)
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

    hasChain(chain: string): boolean {
        return Object.values(CHAIN_DATA)
            .filter(chain => chain.isWeb3)
            .map(item => item.chain)
            .includes(chain)
    }
}