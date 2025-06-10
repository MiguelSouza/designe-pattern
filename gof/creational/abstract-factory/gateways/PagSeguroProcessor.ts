import { PaymentProcessor } from "./PaymentProcessor";
import { PaymentRequest } from "../dto/PaymentRequest";

export class PagSeguroProcessor implements PaymentProcessor {
  async processPayment(request: PaymentRequest): Promise<void> {
    console.log("PagSeguro: pagamento processado com sucesso:", request);
  }
}
