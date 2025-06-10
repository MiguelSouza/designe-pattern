import { PaymentCreator } from "./PaymentCreator";
import { PaymentService } from "../services/PaymentService";
import { MercadoPagoService } from "../services/MercadoPagoService";

export class MercadoPagoCreator extends PaymentCreator {
  createService(): PaymentService {
    return new MercadoPagoService();
  }
}
