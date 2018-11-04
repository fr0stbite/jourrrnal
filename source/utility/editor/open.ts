import { spawn } from "child_process";

function open(name: string, path: string, options: string[] = []): Promise<void> {
  const process = spawn(name, [path, ...options], { stdio: "inherit" });

  return new Promise((resolve) => {
    process.once("exit", () => resolve());
  });
}

export default open;
