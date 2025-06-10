import { PaymentCreator } from "./PaymentCreator";
import { PaymentService } from "../services/PaymentService";
import { PagSeguroService } from "../services/PagSeguroService";

export class PagSeguroCreator extends PaymentCreator {
  createService(): PaymentService {
    return new PagSeguroService();
  }
}
