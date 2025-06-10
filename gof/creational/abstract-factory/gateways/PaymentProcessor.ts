import { PaymentRequest } from "../dto/PaymentRequest";

export interface PaymentProcessor {
  processPayment(request: PaymentRequest): Promise<void>;
}
