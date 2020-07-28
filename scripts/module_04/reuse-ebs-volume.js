// Imports
const AWS = require('aws-sdk')

AWS.config.update({ region: 'eu-west-1' })

// Declare local variables
const ec2 = new AWS.EC2()
const volumeId = 'vol-0c28d47fdf0c69934'
const instanceId = 'i-0abca935ae729b5e5'

detachVolume(volumeId)
.then(() => attachVolume(instanceId, volumeId))
// attachVolume(instanceId, volumeId)

function detachVolume (volumeId) {
  const params = {
    VolumeId : volumeId
  }

  return new Promise((resolve, reject) => {
    ec2.detachVolume(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

function attachVolume (instanceId, volumeId) {
  const params = {
    InstanceId : instanceId,
    VolumeId : volumeId,
    Device: '/dev/sdf'
  }

  return new Promise((resolve, reject) => {
    ec2.attachVolume(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
