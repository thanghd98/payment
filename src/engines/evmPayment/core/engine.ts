import { CHAIN_DATA } from "@wallet/constants";
import { PaymentAbstract } from "../../../abstract";
import { ADDRESS_ZERO } from "../../../constants";
import { PaymentEngineConfig, PayParams, Transaction } from "../../../types";
import { PaymentContext } from "../types";
import { CoreChain } from "./coreChain";

export class EvmPayment extends PaymentAbstract {
    _coreChain: CoreChain

    constructor(_config: PaymentEngineConfig){
        super(_config)
        this._coreChain = new CoreChain()
    }

    async pay(params: PayParams): Promise<Transaction>{
        const { tokenAddress, amount, partnerCode, data: dataHex, payFor, chain } = params
        try {
            const { contract, address }: { address: string; contract: PaymentContext } = await this._coreChain.getContract(chain)

            const partnerInfo = await contract.methods.getPartnerInfo(partnerCode).call()
            console.log("🚀 ~ EvmPayment ~ pay ~ partnerInfo:", partnerInfo)
            //@ts-expect-error
            if(!partnerInfo.isActive) throw new Error('Partner not exists')
            
            const isWhiteListToken = await contract.methods.isWhiteListToken(tokenAddress).call()
            console.log("🚀 ~ EvmPayment ~ pay ~ isWhiteListToken:", isWhiteListToken)
            if(!isWhiteListToken) throw new Error('Token not exists')

            const data = contract.methods.pay(partnerCode, tokenAddress, amount, payFor, dataHex || '0x').encodeABI()
            console.log("🚀 ~ EvmPayment ~ pay ~ data:", data)

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