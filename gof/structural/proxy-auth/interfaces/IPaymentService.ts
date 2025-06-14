export interface IPaymentService {
  pay(userId: string, amount: number): string;
}
