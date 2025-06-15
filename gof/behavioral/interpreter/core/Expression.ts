export interface Expression {
  interpret(context: LogContext): boolean;
}

export type LogContext = {
  level: string;
  service: string;
  message: string;
};
