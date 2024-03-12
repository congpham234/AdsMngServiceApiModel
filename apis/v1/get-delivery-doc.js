/** for /delivery GET route */
const getDeliveryDoc = {
  responses: {
    '200': {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Delivery',
          },
        },
      },
    },
    '404': {
      $ref: '#/components/responses/DeliveryNotFoundError'
    },
    '500': {
      $ref: '#/components/responses/InternalServerError'
    },
  },
  parameters: [
    {
      name: 'deliveryId',
      in: 'query',
      description: 'ID of the delivery',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
};

module.exports = getDeliveryDoc;
