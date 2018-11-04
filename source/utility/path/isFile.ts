import { access, constants } from "fs";

function isFile(path: string): Promise<boolean> {
  return new Promise((resolve) => {
    access(path, constants.F_OK, (error) => {
      if (error) {
        resolve(false);
        return;
      }

      resolve(true);
    });
  });
}

export default isFile;
