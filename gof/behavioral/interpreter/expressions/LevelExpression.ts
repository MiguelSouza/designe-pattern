import { Expression, LogContext } from "../core/Expression";

export class LevelExpression implements Expression {
  constructor(private level: string) {}

  interpret(context: LogContext): boolean {
    return context.level === this.level;
  }
}
