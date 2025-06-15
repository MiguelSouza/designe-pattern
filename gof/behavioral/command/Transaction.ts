import { Command } from "./core/Command";

export class Transaction {
  private executed: Command[] = [];

  constructor(private commands: Command[]) {}

  run() {
    try {
      for (const cmd of this.commands) {
        cmd.execute();
        this.executed.push(cmd);
      }
      console.log("Transação concluída.");
    } catch (error) {
      console.error("Erro na transação. Iniciando rollback...");
      this.rollback();
    }
  }

  rollback() {
    for (const cmd of this.executed.reverse()) {
      cmd.undo();
    }
    console.log(" Rollback completo.");
  }
}
