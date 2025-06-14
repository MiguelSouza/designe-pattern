import { ReportExporter } from "./ReportExporter";

export class PDFExporter implements ReportExporter {
  export(title: string, data: Record<string, any>[]): string {
    const output = `PDF Export\n${title}\n${JSON.stringify(data, null, 2)}`;
    return output;
  }
}
