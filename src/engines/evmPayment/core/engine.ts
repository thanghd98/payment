import { CHAIN_DATA } from "@wallet/constants";
import { encodeBytes32String } from "ethers";
import { PaymentAbstract } from "../../../abstract";
import { ADDRESS_ZERO } from "../../../constants";
import { IsWhiteListTokenParams, PaymentEngineConfig, PayParams, SetWhiteListTokenParams, Transaction } from "../../../types";
import { PaymentContext } from "../types";
import { CoreChain } from "./coreChain";

export class EvmPayment extends PaymentAbstract {
    _coreChain: CoreChain

    constructor(_config: PaymentEngineConfig){
        super(_config)
        this._coreChain = new CoreChain()
    }

    async setWhitelistToken(params: SetWhiteListTokenParams): Promise<Transaction>{
        const { params: paramsWhiteList, chain } = params

        try {
            const addresses = paramsWhiteList.map(item => item.address)
            const isActives = paramsWhiteList.map(item => item.isActive)

            const { contract, address }: { address: string; contract: PaymentContext } = this._coreChain.getContract(chain)
            const data = contract.methods.setWhitelistTokens(addresses, isActives).encodeABI()

            const transaction = {
                to: address,
                value: '0',
                data,
            }

            return transaction
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

    async pay(params: PayParams): Promise<Transaction>{
        const { tokenAddress, amount, receiver, data: dataHex, transactionId, chain } = params
        try {
            const { contract, address }: { address: string; contract: PaymentContext } = this._coreChain.getContract(chain)
            const data = contract.methods.pay(tokenAddress, amount, receiver, encodeBytes32String(transactionId), dataHex).encodeABI()

            const isNativeAddress = !tokenAddress || tokenAddress === ADDRESS_ZERO

            const transaction = {
                to: address,
                value: isNativeAddress ? amount : '0',
                data,
            }

            // const gas = await client.eth.estimateGas(transaction)
            // //@ts-expect-error
            // transaction.gas = gas

            // const tx = await signer.signTransaction(transaction)

            // const { transactionHash } = await client.eth.sendSignedTransaction(tx.rawTransaction as string)

            return transaction
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