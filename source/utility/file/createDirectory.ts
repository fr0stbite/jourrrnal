import { mkdir } from "fs";

function createDirectory(path: string, recursive: boolean = false): Promise<void> {
  return new Promise((resolve, reject) => {
    mkdir(path, { recursive }, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

export default createDirectory;
