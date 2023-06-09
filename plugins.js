const path = require("path");
const fs = require("fs");

module.exports = class MyPlugin {
  apply(compiler) {
    compiler.hooks.make.tap(MyPlugin.name, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: MyPlugin.name,
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
        },
        () => {
          const stats = compilation.getStats().toJson({
            all: false,
            chunkGroups: true,
            entrypoints: true,
          });

          const filepath = path.resolve(__dirname, "./status.json");
          fs.writeFileSync(filepath, JSON.stringify(stats, null, 2));
        }
      );
    });
  }
};
