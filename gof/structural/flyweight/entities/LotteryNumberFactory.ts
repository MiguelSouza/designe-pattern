import { LotteryNumber } from "./LotteryNumber";

export class LotteryNumberFactory {
  private numbers: Map<number, LotteryNumber> = new Map();

  getNumber(num: number): LotteryNumber {
    if (!this.numbers.has(num)) {
      this.numbers.set(num, new LotteryNumber(num));
    }
    return this.numbers.get(num)!;
  }

  getTotalObjectsCreated(): number {
    return this.numbers.size;
  }
}
