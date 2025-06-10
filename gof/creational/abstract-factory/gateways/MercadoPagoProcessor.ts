import { PaymentProcessor } from "./PaymentProcessor";
import { PaymentRequest } from "../dto/PaymentRequest";

export class MercadoPagoProcessor implements PaymentProcessor {
  async processPayment(request: PaymentRequest): Promise<void> {
    console.log("Mercado Pago: pagamento enviado para processamento:", request);
  }
}
