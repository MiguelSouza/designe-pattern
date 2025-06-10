export interface PaymentService {
  execute(amount: number): string;
}
