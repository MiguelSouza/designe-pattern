import { Folder } from "../entities/Folder";
import { File } from "../entities/File";
import { FileSystemItem } from "../interfaces/FileSystemItem";

export class FileSystemService {
  createSampleStructure(): Folder {
    const root = new Folder("Root");

    const photos = new Folder("Photos");
    photos.add(new File("photo1.jpg", 500));
    photos.add(new File("photo2.jpg", 700));

    const docs = new Folder("Docs");
    docs.add(new File("cv.pdf", 300));
    docs.add(new File("report.docx", 200));

    root.add(photos);
    root.add(docs);
    root.add(new File("readme.md", 100));

    return root;
  }

  getTotalSize(folder: Folder): number {
    return folder.getSize();
  }

  printStructure(folder: Folder, indent: string = ""): void {
    console.log(`${indent}${folder.getName()}/`);
    for (const item of folder.getChildren()) {
      if ("getChildren" in item) {
        this.printStructure(item as Folder, indent + "  ");
      } else {
        console.log(`${indent}  ${item.getName()} (${item.getSize()} KB)`);
      }
    }
  }
}
