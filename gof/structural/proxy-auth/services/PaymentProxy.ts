import { IPaymentService } from "../interfaces/IPaymentService";
import { RealPaymentService } from "./RealPaymentService";

export class PaymentProxy implements IPaymentService {
  constructor(
    private realService: RealPaymentService,
    private userToken: string,
    private validTokens: Map<string, string>,
  ) {}

  pay(userId: string, amount: number): string {
    const expectedToken = this.validTokens.get(userId);

    if (!expectedToken || this.userToken !== expectedToken) {
      return `Access denied for user ${userId}: invalid token.`;
    }

    const log = `[LOG] ${new Date().toISOString()} - ${userId} paid ${amount}`;
    console.log(log);

    return this.realService.pay(userId, amount);
  }
}
