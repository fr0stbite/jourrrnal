import { isWindows } from "../platform";

import linuxSeparator from "./linuxSeparator";
import windowsSeparator from "./windowsSeparator";

const separator = isWindows ? windowsSeparator : linuxSeparator;

export default separator;
