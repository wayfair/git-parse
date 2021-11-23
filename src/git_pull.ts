import promisify from "util.promisify";
import childProcess from "child_process";
import { validatePath, resolveHome } from "./util";

const exec = promisify(childProcess.exec);

/**
 * Pulls a repo given its path.
 *
 * Returns child_process exec output for git pull. Throws error on failure.
 */
const gitPull = async (
  pathToRepo: string
): Promise<{ stdout: string; stderr: string }> => {
  const resolvedPath = resolveHome(pathToRepo);

  try {
    validatePath(resolvedPath);
  } catch (e) {
    return Promise.reject(e);
  }

  return exec(`git pull`, { cwd: resolvedPath });
};

export default gitPull;
