export interface ReportExporter {
  export(title: string, data: Record<string, any>[]): string;
}
