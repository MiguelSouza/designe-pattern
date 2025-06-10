export interface PaymentRequest {
  amount: number;
  currency: string;
  customerId: string;
  method: "credit_card" | "boleto" | "pix";
}
