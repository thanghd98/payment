import { chainKey } from "../../../types"

export const paymentContract = (chain: chainKey) => {
    const contractInfos: Partial<Record< chainKey, {contractAddress: string}>> = {
        'victionTestnet': {
            contractAddress: '0x164369E395F477f73BBaf63887327e3453F54189'
        }
    }

    return contractInfos[chain]
}