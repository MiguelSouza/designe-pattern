import { AbstractHandler } from "./AbstractHandler";

export class CEO extends AbstractHandler {
  public handle(request: number): string | null {
    if (request <= 20000) {
      return `CEO approved $${request}`;
    }
    return super.handle(request);
  }
}
