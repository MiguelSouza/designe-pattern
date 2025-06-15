import { LoginEvent } from "../events/LoginEvent";
import { LogoutEvent } from "../events/LogoutEvent";
import { ErrorEvent } from "../events/ErrorEvent";

export interface EventVisitor {
  visitLogin(event: LoginEvent): void;
  visitLogout(event: LogoutEvent): void;
  visitError(event: ErrorEvent): void;
}
