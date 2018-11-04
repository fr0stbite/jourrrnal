import defaultJournalPath from "./defaultJournalPath";
import { getDefaultEditorPath, open } from "./utility/editor";
import { createDirectory } from "./utility/file";
import { join, normalize } from "./utility/path";

(async () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = date.getMonth().toString();
  const day = date.getDate();

  const editorPath = await getDefaultEditorPath();
  const entryDirectoryPath = join([defaultJournalPath, year]);
  const entryPath = normalize(join([entryDirectoryPath, `${day}-${month}.txt`]));

  await createDirectory(entryDirectoryPath, true);
  await open(editorPath, entryPath);
})();
