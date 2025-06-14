import { PaymentService } from "../services/PaymentService";
import { PagSeguro } from "../providers/PagSeguro";

export class PagSeguroAdapter implements PaymentService {
  private pagSeguro = new PagSeguro();

  processPayment(amount: number): void {
    this.pagSeguro.makePayment(amount);
  }
}
