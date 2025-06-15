import { Command } from "../core/Command";
import { BankAccount } from "../core/BankAccount";

export class DepositCommand implements Command {
  constructor(
    private account: BankAccount,
    private amount: number,
  ) {}

  execute() {
    this.account.deposit(this.amount);
  }

  undo() {
    this.account.withdraw(this.amount);
  }
}
