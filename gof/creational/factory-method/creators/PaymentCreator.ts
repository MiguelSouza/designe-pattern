import { PaymentService } from "../services/PaymentService";

export abstract class PaymentCreator {
  abstract createService(): PaymentService;

  processPayment(amount: number): string {
    const service = this.createService();
    return service.execute(amount);
  }
}
