const getDeliveryDoc = require('./v1/get-delivery-doc');
const updateDeliveryDoc = require('./v1/update-delivery-doc');
const deliveryInstructionsEnum = require('./schemas/delivery-instructions-enum');
const deliveryStatusEnum = require('./schemas/delivery-status-enum');
const deliverySchema = require('./schemas/delivery-schema');
const errorModel = require('./schemas/error-model');
const internalServerError = require('./responses/internal-server-error');
const deliveryNotFoundError = require('./responses/delivery-not-found-error');
const answerSchema = require('./schemas/answer-schema');
const questionSchema = require('./schemas/question-schema');
const getAnswerDoc = require('./v1/get-answer-doc');

const components = {
  schemas: {
    Delivery: deliverySchema,
    DeliveryStatus: deliveryStatusEnum,
    DeliveryInstructions: deliveryInstructionsEnum,
    ErrorModel: errorModel,
    Answer: answerSchema,
    Question: questionSchema
  },
  responses: {
    InternalServerError: internalServerError,
    DeliveryNotFoundError: deliveryNotFoundError
  }
};

const deliveryPath = {
  get: getDeliveryDoc, post: updateDeliveryDoc,
};

const testAiPath = {
  post: getAnswerDoc
}

const apiDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Delivery Service',
    version: '1.0.0',
    description: 'API Description for Delivery Service',
  },
  servers: [{ url: 'http://localhost:3000' }],
  paths: {
    '/v1/delivery': deliveryPath,
    '/v1/ai': testAiPath,
  },
  components: components,
};

module.exports = apiDefinition;
