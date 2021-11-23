import type { GitCommit } from "./types/git_commit_type";
import { gitLogCommitMarker } from "./constants/git_log_format_markers";
import parseCommit from "./parse_commit";
import byline from "byline";

const parseGitLog = (stream: NodeJS.ReadableStream): Promise<GitCommit[]> => {
  return new Promise((resolve, reject) => {
    let buffer: string[] = [];
    const parsedCommits: GitCommit[] = [];
    const streamByLine = byline(stream);
    const commitPattern = gitLogCommitMarker;

    streamByLine.on("data", (line) => {
      const lineString = line.toString();
      if (lineString.match(commitPattern)) {
        if (buffer.length) {
          parsedCommits.push(parseCommit(buffer));
          buffer = [];
        }
      } else {
        buffer.push(lineString);
      }
    });

    streamByLine.on("error", (e) => {
      reject(e);
    });

    streamByLine.on("end", () => {
      if (buffer.length) {
        parsedCommits.push(parseCommit(buffer));
      }
      resolve(parsedCommits);
    });
  });
};

export default parseGitLog;
