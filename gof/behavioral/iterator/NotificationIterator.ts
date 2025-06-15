import { Notification } from "./Notification";

export class NotificationIterator {
  private position = 0;

  constructor(private items: Notification[]) {}

  hasNext(): boolean {
    return this.position < this.items.length;
  }

  next(): Notification | null {
    if (this.hasNext()) {
      return this.items[this.position++];
    }
    return null;
  }
}
