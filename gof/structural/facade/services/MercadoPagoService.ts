export class MercadoPagoService {
  login() {
    return "MercadoPago logged in";
  }
  makePayment(amount: number) {
    return `MercadoPago made payment of ${amount}`;
  }
  makeRefund(transactionId: string) {
    return `MercadoPago refunded transaction ${transactionId}`;
  }
}
