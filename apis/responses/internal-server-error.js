const internalServerError = {
  description: 'Internal server error',
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/ErrorModel'
      }
    }
  }
};

module.exports = internalServerError;
