var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
  client.subscribe('hello')
  client.publish('hello', 'Hello mqtt')
})

client.on('hello', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
