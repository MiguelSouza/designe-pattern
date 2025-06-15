import { EventVisitor } from "./EventVisitor";

export interface AuthEvent {
  user: string;
  timestamp: Date;
  accept(visitor: EventVisitor): void;
}
