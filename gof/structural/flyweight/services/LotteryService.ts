import { LotteryBillet } from "../entities/LotteryBillet";
import { LotteryNumberFactory } from "../entities/LotteryNumberFactory";

export class LotteryService {
  private factory = new LotteryNumberFactory();

  createBillet(id: string, numbers: number[]): LotteryBillet {
    const billet = new LotteryBillet(id, this.factory);
    numbers.forEach((n) => billet.addNumber(n));
    return billet;
  }

  getFactory(): LotteryNumberFactory {
    return this.factory;
  }
}
