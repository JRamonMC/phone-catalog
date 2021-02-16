//import libraries
const express = require('express');
const mongoose = require ('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//use libraries methods
const app = express();
require('dotenv').config();

//middleweares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

console.log(process.env.DATABASE)

const dbConnectionURL = {
  LOCALURL: `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
};
mongoose.connect(dbConnectionURL.LOCALURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(
    console,
    "Mongodb Connection Error:" + dbConnectionURL.LOCALURL
  )
);
db.once("open", () => {
  // we're connected !
  console.log("Mongodb Connection Successful");
});

//Routes
app.use('/api/phone', require('./routes/phone'));

//Listen
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server listen on Port ${port}`)
})
