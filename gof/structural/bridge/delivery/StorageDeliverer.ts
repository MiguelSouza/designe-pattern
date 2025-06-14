export class StorageDeliverer {
  save(path: string, content: string) {
    console.log(`Saving file to ${path} with content:\n${content}`);
  }
}
