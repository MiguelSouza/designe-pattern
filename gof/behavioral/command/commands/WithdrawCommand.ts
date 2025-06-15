import { Command } from "../core/Command";
import { BankAccount } from "../core/BankAccount";

export class WithdrawCommand implements Command {
  constructor(
    private account: BankAccount,
    private amount: number,
  ) {}

  execute() {
    this.account.withdraw(this.amount);
  }

  undo() {
    this.account.deposit(this.amount);
  }
}
