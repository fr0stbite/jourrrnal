import separator from "./separator";

function join(paths: string[]): string {
  return paths.join(separator);
}

export default join;
