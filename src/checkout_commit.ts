import promisify from "util.promisify";
import childProcess from "child_process";
import { validatePath, resolveHome } from "./util";

const exec = promisify(childProcess.exec);

export interface CheckoutCommmitOptions {
  force?: boolean | undefined;
}

/**
 * Checks out a commit given its repo and hash.
 *
 * Returns void. Throws error on failure.
 */
const checkoutCommit = async (
  pathToRepo: string,
  hash: string,
  options: CheckoutCommmitOptions = { force: false }
) => {
  const resolvedPath = resolveHome(pathToRepo);

  try {
    validatePath(resolvedPath);
  } catch (e) {
    return Promise.reject(e);
  }

  return exec(`git checkout ${hash} ${options.force ? "--force" : ""}`, {
    cwd: resolvedPath,
  });
};

export default checkoutCommit;
