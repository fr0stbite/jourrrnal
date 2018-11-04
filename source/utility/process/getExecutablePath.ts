import { execFile } from "child_process";

import { isWindows } from "../platform";
import ExecutableNotFoundError from "./ExecutableNotFoundError";

function getExecutablePath(name: string): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile(isWindows ? "where" : "which", [name], (error, output) => {
      if (error) {
        reject(new ExecutableNotFoundError(name));
        return;
      }

      resolve(output);
    });
  });
}

export default getExecutablePath;
