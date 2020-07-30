// Imports
const AWS = require('aws-sdk')

AWS.config.update({ region: 'eu-west-1' })

// Declare local variables
const sns = new AWS.SNS()
const type = 'sms'
const endpoint = '44123456789'
const topicArn = 'arn:aws:sns:eu-west-1:988035987866:hamster-topic'

createSubscription(type, topicArn, endpoint)
.then(data => console.log(data))

function createSubscription (type, topicArn, endpoint) {
  const params = {
    Protocol: type,
    TopicArn: topicArn,
    Endpoint: endpoint
  }

  return new Promise((resolve, reject) => {
    sns.subscribe(params, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
