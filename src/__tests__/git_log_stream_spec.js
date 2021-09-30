import logStream from "../git_log_stream";

describe("git log stream", () => {
  fit("should throw an error if the directory does not exist", (done) => {
    logStream("/fake_nonexistent_directory").addErrorHandler(() => done());
  });
});
