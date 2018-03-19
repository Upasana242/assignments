const fs = require("fs");

const packageJsonPath = `${process.cwd()}/package.json`;

const deps = x => x.dependencies;

console.log("package json path ", packageJsonPath);

const readFileAsync = function(filePath, format) {
  return new Promise((resolve, reject) => {
    fs.readFile(packageJsonPath, "utf-8", function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

readFileAsync(packageJsonPath, "utf-8")
  .then(JSON.parse)
  .then(deps)
  .then(obj => {
    for (key in obj){
        console.log('\x1b[36m%s\x1b[0m', key,':');
        console.log('\x1b[33m%s\x1b[0m:',obj[key]);
    }
})