import { PaymentAbstract } from "../abstract";
import { EvmPayment } from "../engines";

export const PaymentEngines: PaymentAbstract[] = [
    EvmPayment
] as any