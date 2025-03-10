# COIN98 PAYMENT SERVICES
@coin98/evm_payment

```tsx
const payment = new Coin98PaymentServices();

const data = await payment.pay({
    chain: "tomo", //chain
    tokenAddress: "0x0Fd0288AAAE91eaF935e2eC14b23486f86516c8C", //address token
    amount: String(0.01 * 10 ** 18), //amount - wei
    partnerCode: "coin98_partner", // partner code
    payFor: "0x8DAb7Dc51D132602DdB5DB5E591aec978f71cDb8", //receiver
    data: "0x", //optionals - default 0x
});

const result = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
        {
            chain: // chain hex id,
            to: data.to,
            from: //address,
            value: data.value,
            data: data.data,
        },
    ],
});
````