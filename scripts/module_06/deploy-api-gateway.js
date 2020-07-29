// Imports
const AWS = require('aws-sdk')

AWS.config.update({ region: 'eu-west-1' })

// Declare local variables
const apiG = new AWS.APIGateway()
const apiId = '28k98nzuae'

createDeployment(apiId, 'prod')
.then(data => console.log(data))

function createDeployment (apiId, stageName) {
  const params = {
    restApiId: apiId,
    stageName
  }

  return new Promise((resolve, reject) => {
    apiG.createDeployment(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
