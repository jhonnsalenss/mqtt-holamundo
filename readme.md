# Description

This is an example implemented by a MQTT broker and two clients

Clone this project
```
$ git clone git@github.com:jhonnsalenss/mqtt-holamundo.git
$ cd mqtt-holamundo
```
To test this, We will install node_modules
```
$ cd mqtt-server
$ npm install
$ node server.js
$ cd ../mqtt-client
$ npm install
```
Next run, broker in terminal
```
$ node server.js
```
Next run, client2.js in other terminal
```
$ node client2.js
```
Then run client1.js in another terminal
```
$ node clien1.js
```
Check in client2.js terminal message received
