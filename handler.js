'use strict';
const AWS = require('aws-sdk')
const eventBridge = new AWS.EventBridge()


module.exports.create = async (event) => {
  const user = {
    firstName: 'Sam',
    lastName: 'Son'
  }
 
  const param = {
    Entries: [
      {
        Source: 'USER-SERVICE',
        DetailType: 'NEW-USER',
        Detail: JSON.stringify(user),
        EventBusName: 'service-bus'
      }
    ]
  }
 
  try {
    const res = await eventBridge.putEvents(param).promise()
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Executed successfully!',
          input: res,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: 'Error',
          input: error,
        },
        null,
        2
      ),
    };
  }

  
};
