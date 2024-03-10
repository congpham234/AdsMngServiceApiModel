const swaggerJSDoc = require('swagger-jsdoc');
const getDeliveryDoc = require('./v1/get-delivery-doc');
const updateDeliveryDoc = require('./v1/update-delivery-doc');
const deliveryInstructionsEnum = require('./schemas/delivery-instructions-enum');
const deliveryStatusEnum = require('./schemas/delivery-status-enum');
const deliverySchema = require('./schemas/delivery-schema');

const components = {
  schemas: {
    Delivery: deliverySchema,
    DeliveryStatus: deliveryStatusEnum,
    DeliveryInstructions: deliveryInstructionsEnum,
  },
};

const deliveryPath = {
  get: getDeliveryDoc, post: updateDeliveryDoc,
};

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Delivery Service',
      version: '1.0.0',
      description: 'API Description for Delivery Service',
    },
    servers: [{ url: 'http://localhost:3000' }],
    paths: {
      '/v1/delivery': deliveryPath,
    },
    components: components,
  },
  apis: [
    './src/routes/**/*.ts',
  ],
};

const swaggerOptions = swaggerJSDoc(options);

module.exports = swaggerOptions;
