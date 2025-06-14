import { ReportExporter } from "./ReportExporter";

export class JSONExporter implements ReportExporter {
  export(title: string, data: Record<string, any>[]): string {
    const output = `JSON Export\n${title}\n${JSON.stringify(data)}`;
    return output;
  }
}
