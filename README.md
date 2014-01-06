# NSA_bot_data

## WebApp with MongoDB backend to go along with NSABot's collected data

### Installation:
- Install [mongoDB](www.mongodb.org/), [node](http://nodejs.org/), and [npm](https://npmjs.org)
- As a side note, I recommend installing npm through [nvm](https://github.com/creationix/nvm) (node version manager)
- Run ```$ npm install```
- Run ```$ mongod``` (mongoDB daemon process -- basically hosts the db). Note: the DB will be hosted locally usually on port 27017.
- Run ```$ mongo``` (command-line shell that connects to a specific instance of mongod)
- Run ```$ node app.js``` (this will start the server on port 5000)
- Go to localhost:5000