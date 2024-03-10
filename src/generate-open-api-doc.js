const swaggerOptions = require('../apis/swagger-options');
const createFile = require('./file-creator');

const generateOpenApiDoc = function () {
  const filename = 'openapi-spec.json';
  createFile(filename, JSON.stringify(swaggerOptions));
}

module.exports = generateOpenApiDoc;
