import { AuthEvent } from "../core/AuthEvent";
import { EventVisitor } from "../core/EventVisitor";

export class ErrorEvent implements AuthEvent {
  constructor(
    public user: string,
    public timestamp: Date,
    public message: string,
  ) {}

  accept(visitor: EventVisitor): void {
    visitor.visitError(this);
  }
}
