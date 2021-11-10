import logStream from "../git_log_stream";

describe("git log stream", () => {
  it("should throw an error if the directory does not exist", (done) => {
    // function does not currently return a promise
    logStream("/fake_nonexistent_directory").addErrorHandler(() => done());
  });
});
