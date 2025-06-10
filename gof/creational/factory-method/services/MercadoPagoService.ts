import { PaymentService } from "./PaymentService";

export class MercadoPagoService implements PaymentService {
  execute(amount: number): string {
    return `MercadoPago processou pagamento de R$${amount}`;
  }
}
