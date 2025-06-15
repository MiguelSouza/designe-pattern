import { AbstractHandler } from "./AbstractHandler";

export class Director extends AbstractHandler {
  public handle(request: number): string | null {
    if (request <= 5000) {
      return `Director approved $${request}`;
    }
    return super.handle(request);
  }
}
