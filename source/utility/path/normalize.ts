import linuxSeparator from "./linuxSeparator";
import windowsSeparator from "./windowsSeparator";

function normalize(path: string): string {
  return path.replace(new RegExp(`\\${windowsSeparator}`, "g"), linuxSeparator);
}

export default normalize;
