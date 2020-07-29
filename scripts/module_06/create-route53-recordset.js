// Imports
const AWS = require('aws-sdk')

AWS.config.update({ region: 'eu-west-1' })

// Declare local variables
const route53 = new AWS.Route53()
const hzId = '/hostedzone/Z01958832TWLHPB15LQXM'

createRecordSet(hzId)
.then(data => console.log(data))

function createRecordSet (hzId) {
  // Link to ELB Regions:
  // https://docs.aws.amazon.com/general/latest/gr/elb.html
  const params = {
    HostedZoneId: hzId,
    ChangeBatch: {
      Changes: [
        {
          Action: 'CREATE',
          ResourceRecordSet: {
            Name: 'hbfl.online',
            Type: 'A',
            AliasTarget: {
              DNSName: 'hamsterELB-224944669.eu-west-1.elb.amazonaws.com',
              EvaluateTargetHealth: false,
              HostedZoneId: 'Z32O12XQLNTSW2'
            }
          }
        }
      ]
    }
  }

  return new Promise((resolve, reject) => {
    route53.changeResourceRecordSets(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
