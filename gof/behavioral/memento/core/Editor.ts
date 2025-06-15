import { Memento } from "./Memento";

export class Editor {
  private content: string = "";

  write(text: string) {
    this.content += text;
  }

  save(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento) {
    this.content = memento.getContent();
  }

  getContent() {
    return this.content;
  }
}
