import { ReportExporter } from "../exports/ReportExporter";

export abstract class Report {
  constructor(protected exporter: ReportExporter) {}

  abstract title(): string;
  abstract data(): Record<string, any>[];

  generate(): string {
    return this.exporter.export(this.title(), this.data());
  }
}
