const { watch } = require("minimist")(process.argv.slice(2));
const cp = require("child_process");
const fs = require("fs");

const srcDirExists = fs.existsSync("src");
if (!srcDirExists) {
  process.exit(0);
}

// @TODO this could probably be done via node api?

const babelCmd = `babel src \
  --out-dir dist \
  --source-maps inline \
  --copy-files \
  --ignore '**/__tests__/*' \
  ${watch ? "--watch" : ""}`;

const flowCmd = `flow-copy-source src dist \
  --ignore '**/__tests__/*' \
  ${watch ? "--watch" : ""}`;

// The & rather than && is needed for watch mode for reasons we're
// a bit fuzzy on, but && works better in some cases. So only use
// & when we really need it.
const cmd = `${babelCmd} ${watch ? "&" : "&&"} ${flowCmd}`;
cp.execSync(cmd, { stdio: [0, 1, 2] });
