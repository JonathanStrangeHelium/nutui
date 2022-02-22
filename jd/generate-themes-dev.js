const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let fileStr = `@import '../variables.scss';\n`;
let tasks = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let folderName = element.name.toLowerCase();
    tasks.push(
      fs
        .copy(
          path.resolve(__dirname, `../src/packages/__VUE/${folderName}/index.scss`),
          path.resolve(__dirname, `../dist/theme/source/packages/${folderName}/index.scss_source`)
        )
        .then((success) => {
          fileStr += `@import '../../packages/${folderName}/index.scss';\n`;
        })
        .catch((error) => {})
    );
  });
});

tasks.push(
  fs.copy(path.resolve(__dirname, '../src/packages/styles'), path.resolve(__dirname, '../dist/theme/source/styles'))
);
tasks.push(
  fs.copy(
    path.resolve(__dirname, '../src/packages/styles/variables.scss'),
    path.resolve(__dirname, '../dist/theme/source/styles/variables.scss_source')
  )
);

Promise.all(tasks).then((res) => {
  fs.outputFile(
    path.resolve(__dirname, '../dist/theme/source/styles/themes/default.scss'),
    fileStr,
    'utf8',
    (error) => {
      // logger.success(`文件写入成功`);
    }
  );
});
