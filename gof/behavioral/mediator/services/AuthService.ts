import { Mediator } from "../core/Mediator";

export class AuthService {
  constructor(private mediator: Mediator) {}

  login(user: string) {
    console.log(`${user} fez login.`);
    this.mediator.notify(this, "login", user);
  }

  logout(user: string) {
    console.log(`${user} fez logout.`);
    this.mediator.notify(this, "logout", user);
  }
}
