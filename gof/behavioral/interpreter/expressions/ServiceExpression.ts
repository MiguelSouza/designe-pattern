import { Expression, LogContext } from "../core/Expression";

export class ServiceExpression implements Expression {
  constructor(private service: string) {}

  interpret(context: LogContext): boolean {
    return context.service === this.service;
  }
}
