'use strict';
const AWS = require('aws-sdk')
const eventBridge = new AWS.EventBridge()


module.exports.indexdata = async (event) => {

  console.log('>>>>>>>>>>>>>>>>>>>> envent ', event)

  
};
