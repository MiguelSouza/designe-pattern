import { CSVExporter } from "../../../../gof/structural/bridge/exports/CSVExporter";

describe("CSVExporter", () => {
  it("deve formatar os dados como CSV", () => {
    const exporter = new CSVExporter();
    const result = exporter.export("Test CSV", [
      { name: "A", value: 1 },
      { name: "B", value: 2 },
    ]);

    expect(result).toContain("Test CSV");
    expect(result).toContain("name,value");
    expect(result).toContain("A,1");
    expect(result).toContain("B,2");
  });
});
