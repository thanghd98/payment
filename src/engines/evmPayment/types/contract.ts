import { Web3ContractContext } from 'ethereum-abi-types-generator'

export type PaymentMethods = 'setWhitelistTokens' | 'isWhiteListToken' |'pay'

export type PaymentContext = Web3ContractContext<PaymentContract, PaymentMethods, null, null>

export interface EncodeContext {
    encodeABI(): string
}

export interface CallContext {
    call(): Promise<string | boolean>
}

export interface PaymentContract {
    pay(partnerCode: string, tokenAddress: string, amount: string, payFor: string, data?: string): EncodeContext
    isWhiteListToken(tokenAddress: string): CallContext
    getPartnerInfo(partnerCode: string): CallContext
}