import { PaymentProcessor } from "../services/PaymentProcessor";
import { PagSeguroProcessor } from "../services/PagSeguroProcessor";

export interface PaymentGatewayFactory {
  createProcessor(): PaymentProcessor;
}

export class PagSeguroFactory implements PaymentGatewayFactory {
  createProcessor(): PaymentProcessor {
    return PagSeguroProcessor.getInstance();
  }
}
