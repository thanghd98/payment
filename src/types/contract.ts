import { Web3ContractContext } from 'ethereum-abi-types-generator'

export type CrossChainMethods = 'setWhitelistTokens'

export type CrossChainContext = Web3ContractContext<CrossChainContract, CrossChainMethods, null, null>

export interface EncodeContext {
    encodeABI(): string
}

export interface CallContext {
    call(): Promise<string>
}

export interface CrossChainContract {
    setWhitelistTokens(tokens: string[], isActives: boolean[]): EncodeContext
}