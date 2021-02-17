# phone-catalog

This is a fullstack project made with Node and React. Technologies such as MongoDB, Jest and Bootstrap have also been used. More info in https://www.notion.so/Jose-Ramon-Some-thoughts-about-the-project-d170f61002f3455c9061c6a4c128ee3c


## Installation

Download the zip or clone the project. In main folder you can see `server` and `client` folders. 

**Important** You must have mongoDB running on your PC.

### Server

The server has been developed with NodeJS, Express, MongoDB and Jest. 

- Go to `server` folder and type `npm i` in order to install all required packages.
- Now, with `npm start`, the server is gonna listen on port 5000. (You can change if if you want, editing your environment variables)

### Client 

The client has been developed with React, Bootstrap, Jest and Enzyme. 

Here, you need to add to `.env` file this URL : `REACT_APP_API_URL=http://localhost:5000/api/phone`.

- Go to `client` server and type `npm i` in order to install all required packages.
- Run `npm start`. The client is available on localhost:3000.


### Environment variables

This is an example of `.env` file for server.

```
DATABASE=mongodb://localhost:27017/my-database
SECRET=manolitoscolmenar
PORT=5000
MONGO_HOSTNAME=localhost
MONGO_DB=my-database
MONGO_PORT=27017
```

You can choose between DATABASE or MONGO_HOSTNAME + MONGO_DB + MONGO_PORT

## Test

If you want to run some test, you need to go to `client` or `server` directory and type `npm test`

That's all.


## Miscelaneous

### Docker

Docker files has been added to server and client. Also, we've include a docker-compose.yml file to dockerize the app. 


Also, you need to set  `MONGO_HOSTNAME=mongo` in your server `.env` file.



