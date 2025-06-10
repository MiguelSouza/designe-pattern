import { PaymentProcessor } from "../services/PaymentProcessor";

export interface PaymentGatewayFactory {
  createProcessor(): PaymentProcessor;
}
