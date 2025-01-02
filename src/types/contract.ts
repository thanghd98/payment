import { Web3ContractContext } from 'ethereum-abi-types-generator'

export type PaymentMethods = 'setWhitelistTokens' | 'isWhiteListToken'

export type PaymentContext = Web3ContractContext<PaymentContract, PaymentMethods, null, null>

export interface EncodeContext {
    encodeABI(): string
}

export interface CallContext {
    call(): Promise<string | boolean>
}

export interface PaymentContract {
    setWhitelistTokens(tokens: string[], isActives: boolean[]): EncodeContext
    isWhiteListToken(contractAddress: string): CallContext
}