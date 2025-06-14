import { FileSystemItem } from "../interfaces/FileSystemItem";

export class File implements FileSystemItem {
  constructor(
    private name: string,
    private size: number,
  ) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }
}
