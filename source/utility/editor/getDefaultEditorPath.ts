import { getGitForWindowsPath } from "../environment";
import { isFile, join } from "../path";
import { isWindows } from "../platform";
import { ExecutableNotFoundError, getExecutablePath } from "../process";

const DEFAULT_LINUX_EDITOR: string = "vi";
const DEFAULT_WINDOWS_EDITOR: string = "vim.exe";

async function getDefaultEditorPath(): Promise<string> {
  try {
    return await getExecutablePath(DEFAULT_LINUX_EDITOR);
  } catch (error) {
    if (error.type !== "ExecutableNotFoundError") {
      throw error;
    }

    if (!isWindows) {
      throw error;
    }

    const path = await getGitForWindowsPath();
    const executablePath = join([path, "usr", "bin", DEFAULT_WINDOWS_EDITOR]);
    const exists = await isFile(executablePath);

    if (!exists) {
      throw new ExecutableNotFoundError(DEFAULT_WINDOWS_EDITOR);
    }

    return executablePath;
  }
}

export default getDefaultEditorPath;
