import { chainKey } from "../../../types"

export const paymentContract = (chain: chainKey) => {
    const contractInfos: Partial<Record< chainKey, {contractAddress: string}>> = {
        'victionTestnet': {
            contractAddress: '0x31c8340e8b1e964666283D7602029E8D533e411C'
        }
    }

    return contractInfos[chain]
}