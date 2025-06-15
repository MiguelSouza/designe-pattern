import { Expression, LogContext } from "../core/Expression";

export class AndExpression implements Expression {
  constructor(
    private expr1: Expression,
    private expr2: Expression,
  ) {}

  interpret(context: LogContext): boolean {
    return this.expr1.interpret(context) && this.expr2.interpret(context);
  }
}
