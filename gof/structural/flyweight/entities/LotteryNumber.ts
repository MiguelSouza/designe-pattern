export class LotteryNumber {
  constructor(public readonly number: number) {}

  display(billetId: string): string {
    return `Number ${this.number} in billet ${billetId}`;
  }
}
