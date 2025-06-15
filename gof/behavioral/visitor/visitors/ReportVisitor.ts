import { EventVisitor } from "../core/EventVisitor";
import { LoginEvent } from "../events/LoginEvent";
import { LogoutEvent } from "../events/LogoutEvent";
import { ErrorEvent } from "../events/ErrorEvent";

export class ReportVisitor implements EventVisitor {
  visitLogin(event: LoginEvent): void {
    console.log(`[REPORT] ${event.user} logged in at ${event.timestamp.toISOString()}`);
  }

  visitLogout(event: LogoutEvent): void {
    console.log(`[REPORT] ${event.user} logged out at ${event.timestamp.toISOString()}`);
  }

  visitError(event: ErrorEvent): void {
    console.log(
      `[REPORT] ERROR for ${event.user} at ${event.timestamp.toISOString()}: ${event.message}`,
    );
  }
}
