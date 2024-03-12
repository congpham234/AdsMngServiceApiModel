const getDeliveryDoc = require('./v1/get-delivery-doc');
const updateDeliveryDoc = require('./v1/update-delivery-doc');
const deliveryInstructionsEnum = require('./schemas/delivery-instructions-enum');
const deliveryStatusEnum = require('./schemas/delivery-status-enum');
const deliverySchema = require('./schemas/delivery-schema');
const errorModel = require('./schemas/error-model');
const internalServerError = require('./responses/internal-server-error');
const deliveryNotFoundError = require('./responses/delivery-not-found-error');

const components = {
  schemas: {
    Delivery: deliverySchema,
    DeliveryStatus: deliveryStatusEnum,
    DeliveryInstructions: deliveryInstructionsEnum,
    ErrorModel: errorModel,
  },
  responses: {
    InternalServerError: internalServerError,
    DeliveryNotFoundError: deliveryNotFoundError
  }
};

const deliveryPath = {
  get: getDeliveryDoc, post: updateDeliveryDoc,
};

const apiDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Delivery Service',
    version: '1.0.0',
    description: 'API Description for Delivery Service',
  },
  servers: [{ url: 'http://localhost:3000' }],
  paths: {
    '/v1/delivery/{deliveryId}': deliveryPath,
  },
  components: components,
};

module.exports = apiDefinition;
