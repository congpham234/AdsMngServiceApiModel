const fs = require('fs');

const createFile = function (filename, content) {
  // Define the path where the file will be created (assuming project root folder)
  const filePath = `./${filename}`;

  // Write the content to the file
  fs.writeFileSync(filePath, content);
  console.log(`File "${filename}" created successfully at project root directory.`);
};

module.exports = createFile;
