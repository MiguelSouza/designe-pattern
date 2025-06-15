import { AuthEvent } from "../core/AuthEvent";
import { EventVisitor } from "../core/EventVisitor";

export class LogoutEvent implements AuthEvent {
  constructor(
    public user: string,
    public timestamp: Date,
  ) {}

  accept(visitor: EventVisitor): void {
    visitor.visitLogout(this);
  }
}
