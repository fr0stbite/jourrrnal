import { parent } from "../path";
import { getExecutablePath } from "../process";

async function getGitForWindowsPath(): Promise<string> {
  return parent(await getExecutablePath("git"), 2);
}

export default getGitForWindowsPath;
