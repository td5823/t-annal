const path = require("path");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  "@": resolveApp("src"),
  routes: resolveApp("src/routes"),
  store: resolveApp("src/store"),
  utils: resolveApp("src/library/utils"),
  assets: resolveApp("src/library/assets"),
  components: resolveApp("src/library/components"),
  setupProxy: resolveApp("src/setupProxy.js"),
};
