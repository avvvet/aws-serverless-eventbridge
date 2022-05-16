'use strict';
const axios = require('axios')
const host = 'https://search-near-open-search-eynwuxt52aa4siq4kuhh4iqtua.us-east-1.es.amazonaws.com'
const index = 'contacts'
const type = 'contact'

const url = `${host}/${index}/${type}/`
const headers = { 
    "Content-Type" : "application/json",
    "auth": {
        "username": "awet",
        "password": "Awet_003994"
    }
} 
module.exports.indexdata = async (event) => {
  console.log('>>>>>>>>>>>>>>>>>>>> triggered  ', event)
  let count = 0
  for( const record of event.Records) {
      const id = record.dynamodb.Keys.id.S 
      if(record.eventName == 'REMOVE') {
          await axios.delete(url + id)
          return 'Item removed'
      } else  {
          const document = record.dynamodb.NewImage
          console.log('Adding document >>>> ', document)
          await axios.put(url + id, document, headers)
      }
      count++
  }
  console.log('>>>>> ', `successfully indexed ${count}`)
  return `successfully indexed ${count}`
  
};
