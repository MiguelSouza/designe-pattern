import { LotteryNumber } from "./LotteryNumber";
import { LotteryNumberFactory } from "./LotteryNumberFactory";

export class LotteryBillet {
  private numbers: LotteryNumber[] = [];

  constructor(
    public readonly id: string,
    private factory: LotteryNumberFactory,
  ) {}

  addNumber(num: number): void {
    const lotteryNumber = this.factory.getNumber(num);
    this.numbers.push(lotteryNumber);
  }

  showNumbers(): string[] {
    return this.numbers.map((num) => num.display(this.id));
  }
}
