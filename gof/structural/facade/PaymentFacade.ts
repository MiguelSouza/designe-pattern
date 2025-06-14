import { IPaymentFacade } from "./interfaces/IPaymentFacade";
import { PagSeguroService } from "./services/PagSeguroService";
import { MercadoPagoService } from "./services/MercadoPagoService";

export class PaymentFacade implements IPaymentFacade {
  private pagSeguro = new PagSeguroService();
  private mercadoPago = new MercadoPagoService();

  payWithPagSeguro(amount: number): string[] {
    return [this.pagSeguro.authenticate(), this.pagSeguro.sendPayment(amount)];
  }

  refundWithPagSeguro(transactionId: string): string[] {
    return [this.pagSeguro.authenticate(), this.pagSeguro.sendRefund(transactionId)];
  }

  payWithMercadoPago(amount: number): string[] {
    return [this.mercadoPago.login(), this.mercadoPago.makePayment(amount)];
  }

  refundWithMercadoPago(transactionId: string): string[] {
    return [this.mercadoPago.login(), this.mercadoPago.makeRefund(transactionId)];
  }
}
