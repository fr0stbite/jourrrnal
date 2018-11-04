import separator from "./separator";

function parent(path: string, level: number = 1): string {
  return path.split(separator).slice(0, -1 * level).join(separator);
}

export default parent;
