import { Mediator } from "./Mediator";
import { AuthService } from "../services/AuthService";
import { LoggerService } from "../services/LoggerService";

export class AuthMediator implements Mediator {
  constructor(
    private authService: AuthService,
    private loggerService: LoggerService,
  ) {}

  notify(sender: object, event: string, data?: any): void {
    if (sender === this.loggerService) return;
    if (event === "login") {
      this.loggerService.log(`Usuário logado: ${data}`);
    } else if (event === "logout") {
      this.loggerService.log(`Usuário deslogado: ${data}`);
    }
  }
}
