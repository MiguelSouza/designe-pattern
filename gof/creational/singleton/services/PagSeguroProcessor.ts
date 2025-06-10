import { PaymentProcessor } from "./PaymentProcessor";
import { PaymentRequest } from "../dto/PaymentRequest";

export class PagSeguroProcessor implements PaymentProcessor {
  private static instance: PagSeguroProcessor;

  private constructor() {}

  static getInstance(): PagSeguroProcessor {
    if (!PagSeguroProcessor.instance) {
      PagSeguroProcessor.instance = new PagSeguroProcessor();
    }
    return PagSeguroProcessor.instance;
  }

  async processPayment(request: PaymentRequest): Promise<void> {
    console.log(`[PagSeguro Singleton] Processando R$${request.amount}`);
  }
}
