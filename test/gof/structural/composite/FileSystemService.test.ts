import { faker } from "@faker-js/faker";
import { File } from "../../../../gof/structural/composite/entities/File";
import { Folder } from "../../../../gof/structural/composite/entities/Folder";
import { FileSystemService } from "../../../../gof/structural/composite/services/FileSystemService";

describe("Composite Pattern – File and Folder (with Faker)", () => {
  describe("File (Leaf)", () => {
    it("deve retornar nome e tamanho corretos", () => {
      const name = faker.system.fileName();
      const size = faker.number.int({ min: 100, max: 500 });
      const file = new File(name, size);
      expect(file.getName()).toBe(name);
      expect(file.getSize()).toBe(size);
    });
  });

  describe("Folder (Composite)", () => {
    it("deve retornar o nome correto", () => {
      const name = faker.system.directoryPath();
      const folder = new Folder(name);
      expect(folder.getName()).toBe(name);
    });

    it("deve retornar tamanho 0 para pasta vazia", () => {
      const folder = new Folder(faker.word.words(1));
      expect(folder.getSize()).toBe(0);
    });

    it("deve calcular corretamente o tamanho com um arquivo", () => {
      const folder = new Folder(faker.word.words(1));
      const size = faker.number.int({ min: 100, max: 500 });
      folder.add(new File(faker.system.fileName(), size));
      expect(folder.getSize()).toBe(size);
    });

    it("deve calcular corretamente o tamanho com vários arquivos", () => {
      const folder = new Folder(faker.word.words(1));
      const size1 = faker.number.int({ min: 100, max: 500 });
      const size2 = faker.number.int({ min: 100, max: 500 });
      folder.add(new File(faker.system.fileName(), size1));
      folder.add(new File(faker.system.fileName(), size2));
      expect(folder.getSize()).toBe(size1 + size2);
    });

    it("deve suportar pastas aninhadas (1 nível)", () => {
      const inner = new Folder(faker.word.words(1));
      const size = faker.number.int({ min: 100, max: 500 });
      inner.add(new File(faker.system.fileName(), size));

      const outer = new Folder(faker.word.words(1));
      outer.add(inner);

      expect(outer.getSize()).toBe(size);
    });

    it("deve suportar pastas profundamente aninhadas (vários níveis)", () => {
      const size = faker.number.int({ min: 50, max: 150 });

      const level3 = new Folder(faker.word.words(1));
      level3.add(new File(faker.system.fileName(), size));

      const level2 = new Folder(faker.word.words(1));
      level2.add(level3);

      const level1 = new Folder(faker.word.words(1));
      level1.add(level2);

      expect(level1.getSize()).toBe(size);
    });

    it("deve misturar pastas e arquivos em todos os níveis", () => {
      const imgSize = faker.number.int({ min: 300, max: 600 });
      const pdfSize = faker.number.int({ min: 100, max: 300 });

      const img = new File(faker.system.fileName(), imgSize);
      const pdf = new File(faker.system.fileName(), pdfSize);

      const subFolder = new Folder(faker.word.words(1));
      subFolder.add(img);

      const root = new Folder(faker.word.words(1));
      root.add(pdf);
      root.add(subFolder);

      expect(root.getSize()).toBe(imgSize + pdfSize);
    });

    it("deve permitir adicionar pastas dinamicamente", () => {
      const dynamic = new Folder(faker.word.words(1));
      expect(dynamic.getSize()).toBe(0);

      const size1 = faker.number.int({ min: 50, max: 100 });
      const size2 = faker.number.int({ min: 50, max: 100 });

      dynamic.add(new File(faker.system.fileName(), size1));
      expect(dynamic.getSize()).toBe(size1);

      const nested = new Folder(faker.word.words(1));
      nested.add(new File(faker.system.fileName(), size2));
      dynamic.add(nested);
      expect(dynamic.getSize()).toBe(size1 + size2);
    });
  });

  describe("FileSystemService", () => {
    const service = new FileSystemService();

    it("deve criar a estrutura da amostra com o tamanho total correto", () => {
      const root = service.createSampleStructure();
      expect(service.getTotalSize(root)).toBe(1800);
    });

    it("deve conter pastas e arquivos como filhos na estrutura de amostra", () => {
      const root = service.createSampleStructure();
      const children = root.getChildren();
      expect(children.length).toBe(3);
      expect(children[0].getName()).toBe("Photos");
      expect(children[1].getName()).toBe("Docs");
      expect(children[2].getName()).toBe("readme.md");
    });
  });
});
