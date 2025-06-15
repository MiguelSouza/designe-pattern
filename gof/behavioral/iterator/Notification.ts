export type NotificationType = "info" | "warning" | "error";

export class Notification {
  constructor(
    public message: string,
    public type: NotificationType,
  ) {}
}
