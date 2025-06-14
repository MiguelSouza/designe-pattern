import { ReportExporter } from "./ReportExporter";

export class CSVExporter implements ReportExporter {
  export(title: string, data: Record<string, any>[]): string {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((row) => Object.values(row).join(",")).join("\n");
    const output = `CSV Export\n${title}\n${headers}\n${rows}`;
    return output;
  }
}
