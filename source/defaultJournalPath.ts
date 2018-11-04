import { homedir } from "os";

import { join } from "./utility/path";

const defaultJournalPath: string = join([homedir(), ".journal"]);

export default defaultJournalPath;
