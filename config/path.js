const path = require("path");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  "@": resolveApp("src"),
  assets: resolveApp("src/assets"),
  utils: resolveApp("src/utils"),
  locale: resolveApp("src/locale"),
  components: resolveApp("src/components"),
  containers: resolveApp("src/containers"),
  store: resolveApp("src/store"),
  helper: resolveApp("src/helper"),
};
