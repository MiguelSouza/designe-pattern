import { Memento } from "./Memento";

export class History {
  private mementos: Memento[] = [];

  add(memento: Memento) {
    this.mementos.push(memento);
  }

  undo(): Memento | undefined {
    return this.mementos.pop();
  }
}
