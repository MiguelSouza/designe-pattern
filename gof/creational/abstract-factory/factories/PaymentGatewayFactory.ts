import { PaymentProcessor } from "../gateways/PaymentProcessor";

export interface PaymentGatewayFactory {
  createProcessor(): PaymentProcessor;
}
