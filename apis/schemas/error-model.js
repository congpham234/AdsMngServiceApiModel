const errorModel = {
  type: 'object',
  required: [
    'message'
  ],
  properties: {
    message: {
      'type': 'string'
    }
  }
};

module.exports = errorModel;
