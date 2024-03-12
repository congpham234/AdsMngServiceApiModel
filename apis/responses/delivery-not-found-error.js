const deliveryNotFoundError = {
  description: 'Delivery not found',
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/ErrorModel'
      }
    }
  }
};

module.exports = deliveryNotFoundError;
