import { chainKey } from "../../../types"

export const paymentContract = (chain: chainKey) => {
    const contractInfos: Partial<Record< chainKey, {contractAddress: string}>> = {
        'tomo': {
            contractAddress: '0xd9AD88911e2D55aA91a1CC6305736f573D846ee3'
        }
    }

    return contractInfos[chain]
}