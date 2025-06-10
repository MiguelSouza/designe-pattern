import { PaymentGatewayFactory } from "./PaymentGatewayFactory";
import { PagSeguroProcessor } from "../gateways/PagSeguroProcessor";
import { PaymentProcessor } from "../gateways/PaymentProcessor";

export class PagSeguroFactory implements PaymentGatewayFactory {
  createProcessor(): PaymentProcessor {
    return new PagSeguroProcessor();
  }
}
