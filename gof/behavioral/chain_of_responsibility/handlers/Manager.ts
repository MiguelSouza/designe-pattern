import { AbstractHandler } from "./AbstractHandler";

export class Manager extends AbstractHandler {
  public handle(request: number): string | null {
    if (request <= 1000) {
      return `Manager approved $${request}`;
    }
    return super.handle(request);
  }
}
