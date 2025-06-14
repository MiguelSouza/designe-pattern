import { FileSystemItem } from "../interfaces/FileSystemItem";

export class Folder implements FileSystemItem {
  private children: FileSystemItem[] = [];

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.children.push(item);
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.children.reduce((acc, item) => acc + item.getSize(), 0);
  }

  getChildren(): FileSystemItem[] {
    return this.children;
  }
}
