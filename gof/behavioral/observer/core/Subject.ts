import { Observer } from "./Observer";

export class Subject {
  private observers: Observer[] = [];

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  detach(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(event: string, data: any) {
    for (const observer of this.observers) {
      observer.update(event, data);
    }
  }
}
