export class PagSeguroService {
  authenticate() {
    return "PagSeguro authenticated";
  }
  sendPayment(amount: number) {
    return `PagSeguro processed payment of ${amount}`;
  }
  sendRefund(transactionId: string) {
    return `PagSeguro refunded transaction ${transactionId}`;
  }
}
