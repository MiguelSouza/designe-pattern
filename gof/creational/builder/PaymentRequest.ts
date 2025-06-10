export type PaymentMethod = "pix" | "boleto" | "credit_card";

export class PaymentRequest {
  amount!: number;
  description?: string;
  method!: PaymentMethod;
  installments?: number;
  buyerEmail?: string;

  constructor(init?: Partial<PaymentRequest>) {
    Object.assign(this, init);
  }
}
