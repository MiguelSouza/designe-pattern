import { EventVisitor } from "../core/EventVisitor";
import { LoginEvent } from "../events/LoginEvent";
import { LogoutEvent } from "../events/LogoutEvent";
import { ErrorEvent } from "../events/ErrorEvent";

export class DatadogVisitor implements EventVisitor {
  visitLogin(event: LoginEvent): void {
    console.log(`[DATADOG] login event sent for ${event.user}`);
  }

  visitLogout(event: LogoutEvent): void {
    console.log(`[DATADOG] logout event sent for ${event.user}`);
  }

  visitError(event: ErrorEvent): void {
    console.log(`[DATADOG] error sent for ${event.user}: ${event.message}`);
  }
}
