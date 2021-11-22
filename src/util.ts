import { existsSync } from "fs";
import { join } from "path";

export const resolveHome = (filepath: string) => {
  if (filepath[0] === "~") {
    const restOfPath: string = filepath.slice(1);
    if (typeof process.env.HOME !== 'string')
      throw new Error("HOME environment variable is missing");
    const home = process.env.HOME;
    return join(home, restOfPath);
  }
  return filepath;
};

export const validatePath = (resolvedPath: string) => {
  if (!existsSync(resolvedPath)) {
    throw new Error(`The path ${resolvedPath} was not found`);
  }

  if (!existsSync(join(resolvedPath, ".git"))) {
    throw new Error(
      `The directory ${resolvedPath} does not appear to be the root of a git repository.`
    );
  }
};
