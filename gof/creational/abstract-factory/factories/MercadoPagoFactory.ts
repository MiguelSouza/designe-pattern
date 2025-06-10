import { PaymentGatewayFactory } from "./PaymentGatewayFactory";
import { PaymentProcessor } from "../gateways/PaymentProcessor";
import { MercadoPagoProcessor } from "../gateways/MercadoPagoProcessor";

export class MercadoPagoFactory implements PaymentGatewayFactory {
  createProcessor(): PaymentProcessor {
    return new MercadoPagoProcessor();
  }
}
