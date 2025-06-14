import { ReportExporter } from "../../../../gof/structural/bridge/exports/ReportExporter";
import { SalesReport } from "../../../../gof/structural/bridge/reports/SalesReport";

describe("SalesReport (Bridge Pattern)", () => {
  it("deve gerar o relatorio com o título e os dados corretos", () => {
    const mockExport = jest.fn();

    const mockExporter: ReportExporter = {
      export: mockExport,
    };

    const report = new SalesReport(mockExporter);
    report.generate();

    expect(mockExport).toHaveBeenCalledTimes(1);
    expect(mockExport).toHaveBeenCalledWith("Monthly Sales Report", [
      { product: "Shoes", total: 1200 },
      { product: "Shirts", total: 850 },
    ]);
  });

  it("deve retornar o conteúdo exportado", () => {
    const mockExporter: ReportExporter = {
      export: jest.fn().mockReturnValue("Exported Content"),
    };

    const report = new SalesReport(mockExporter);
    const result = report.generate();

    expect(result).toBe("Exported Content");
  });
});
