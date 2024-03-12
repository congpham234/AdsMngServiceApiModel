const deliverySchema = {
  type: 'object',
  properties: {
    deliveryId: { type: 'string' },
    driverId: { type: 'string' },
    deliveryDate: { type: 'string', format: 'date-time' },
    deliveryStatus: { $ref: '#/components/schemas/DeliveryStatus' },
    recipientName: { type: 'string' },
    recipientAddress: { type: 'string' },
    deliveryInstructions: { $ref: '#/components/schemas/DeliveryInstructions' },
    proofOfDelivery: { type: 'string' },
  },
};

module.exports = deliverySchema;
