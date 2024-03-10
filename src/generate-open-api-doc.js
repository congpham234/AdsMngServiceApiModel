const apiDefinition = require('../apis/api-definition');
const createFile = require('./file-creator');

const generateOpenApiDoc = function () {
  const filename = 'openapi-spec.json';
  createFile(filename, JSON.stringify(apiDefinition));
}

module.exports = generateOpenApiDoc;
