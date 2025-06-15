import { Notification } from "./Notification";
import { NotificationIterator } from "./NotificationIterator";

export class NotificationCollection {
  private items: Notification[] = [];

  add(notification: Notification) {
    this.items.push(notification);
  }

  createIterator(): NotificationIterator {
    return new NotificationIterator(this.items);
  }

  get length() {
    return this.items.length;
  }
}
