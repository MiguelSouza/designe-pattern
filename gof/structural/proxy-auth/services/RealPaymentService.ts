import { IPaymentService } from "../interfaces/IPaymentService";

export class RealPaymentService implements IPaymentService {
  pay(userId: string, amount: number): string {
    return `User ${userId} paid ${amount} successfully.`;
  }
}
