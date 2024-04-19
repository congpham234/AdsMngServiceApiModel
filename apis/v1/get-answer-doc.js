/** for /answer POST route */
const getAnswerDoc = {
  responses: {
    '200': {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Answer',
          },
        },
      },
    },
  },
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Question',
        },
      },
    },
  },
};

module.exports = getAnswerDoc;
