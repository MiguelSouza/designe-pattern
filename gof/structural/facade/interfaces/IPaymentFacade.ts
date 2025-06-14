export interface IPaymentFacade {
  payWithPagSeguro(amount: number): string[];
  refundWithPagSeguro(transactionId: string): string[];
  payWithMercadoPago(amount: number): string[];
  refundWithMercadoPago(transactionId: string): string[];
}
