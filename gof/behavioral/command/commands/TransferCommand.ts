import { Command } from "../core/Command";
import { BankAccount } from "../core/BankAccount";

export class TransferCommand implements Command {
  constructor(
    private from: BankAccount,
    private to: BankAccount,
    private amount: number,
  ) {}

  execute() {
    this.from.withdraw(this.amount);
    this.to.deposit(this.amount);
  }

  undo() {
    this.to.withdraw(this.amount);
    this.from.deposit(this.amount);
  }
}
