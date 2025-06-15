export class Memento {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}
