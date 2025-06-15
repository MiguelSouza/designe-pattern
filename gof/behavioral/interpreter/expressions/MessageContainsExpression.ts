import { Expression, LogContext } from "../core/Expression";

export class MessageContainsExpression implements Expression {
  constructor(private keyword: string) {}

  interpret(context: LogContext): boolean {
    return context.message.includes(this.keyword);
  }
}
