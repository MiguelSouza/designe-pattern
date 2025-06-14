import { ReportExporter } from "../../../../gof/structural/bridge/exports/ReportExporter";
import { InventoryReport } from "../../../../gof/structural/bridge/reports/InventoryReport";

describe("InventoryReport (Bridge Pattern)", () => {
  it("deve gerar o relatorio com os dados corretos", () => {
    const mockExport = jest.fn();

    const mockExporter: ReportExporter = {
      export: mockExport,
    };

    const report = new InventoryReport(mockExporter);
    report.generate();

    expect(mockExport).toHaveBeenCalledWith("Inventory Summary", [
      { item: "Socks", quantity: 300 },
      { item: "Belts", quantity: 150 },
    ]);
  });
});
