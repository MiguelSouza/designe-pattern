import { BankAccount } from "../../../../gof/behavioral/command/core/BankAccount";
import { Transaction } from "../../../../gof/behavioral/command/Transaction";
import { DepositCommand } from "../../../../gof/behavioral/command/commands/DepositCommand";
import { WithdrawCommand } from "../../../../gof/behavioral/command/commands/WithdrawCommand";

describe("Padrão Command - Bank transactions", () => {
  let account: BankAccount;

  it("realiza depósito e saque com sucesso", () => {
    account = new BankAccount("Miguel", 0);

    const deposit = new DepositCommand(account, 1000);
    const withdraw = new WithdrawCommand(account, 400);

    const transaction = new Transaction([deposit, withdraw]);
    transaction.run();

    expect(account.getBalance()).toBe(600);
  });

  it("faz rollback se ocorrer erro na transação", () => {
    account = new BankAccount("Miguel", 0);

    const deposit = new DepositCommand(account, 500);
    const withdraw = new WithdrawCommand(account, 800);

    const transaction = new Transaction([deposit, withdraw]);
    transaction.run();

    expect(account.getBalance()).toBe(0);
  });

  it("executa múltiplos depósitos e saques válidos", () => {
    account = new BankAccount("Miguel", 0);

    const commands = [
      new DepositCommand(account, 200),
      new DepositCommand(account, 300),
      new WithdrawCommand(account, 100),
    ];

    const transaction = new Transaction(commands);
    transaction.run();

    expect(account.getBalance()).toBe(400);
  });

  it("desfaz operações se erro ocorrer no meio", () => {
    account = new BankAccount("Miguel", 0);

    const commands = [
      new DepositCommand(account, 300),
      new DepositCommand(account, 200),
      new WithdrawCommand(account, 600),
      new DepositCommand(account, 100),
    ];

    const transaction = new Transaction(commands);
    transaction.run();

    expect(account.getBalance()).toBe(0);
  });
});
