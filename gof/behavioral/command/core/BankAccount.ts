export class BankAccount {
  constructor(
    public name: string,
    private balance = 0,
  ) {}

  deposit(amount: number) {
    this.balance += amount;
    console.log(`[${this.name}] Deposit: $${amount} | Balance: $${this.balance}`);
  }

  withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`[${this.name}] Withdraw: $${amount} | Balance: $${this.balance}`);
    } else {
      throw new Error(`[${this.name}] Insufficient funds`);
    }
  }

  getBalance() {
    return this.balance;
  }
}
