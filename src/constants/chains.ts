import { chainKey } from "../types";

export const paymentContract = (chain: chainKey) => {
    const contractInfos: Partial<Record< chainKey, {contractAddress: string}>> = {
        'victionTestnet': {
            contractAddress: '0xf2e4c753e7EF6d6Dbf2690fcb0d6b1e2b81cEC56'
        }
    }

    return contractInfos[chain]
}