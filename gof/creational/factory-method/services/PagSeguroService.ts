import { PaymentService } from "./PaymentService";

export class PagSeguroService implements PaymentService {
  execute(amount: number): string {
    return `PagSeguro processou pagamento de R$${amount}`;
  }
}
