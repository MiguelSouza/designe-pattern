import { PaymentService } from "../services/PaymentService";
import { MercadoPago } from "../providers/MercadoPago";

export class MercadoPagoAdapter implements PaymentService {
  private mercadoPago = new MercadoPago();

  processPayment(amount: number): void {
    this.mercadoPago.payWithAmount(amount, "BRL");
  }
}
