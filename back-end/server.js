const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

// importing users.js
const users = require('./routes/api/users');
const items = require('./routes/api/items');

// DB config
const db_connection = require('./config/keys').mongoURI;

//configure middleware -- body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to mongodb
mongoose
  .connect(
    db_connection,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// passport initialization
app.use(passport.initialize());

require('./config/passport')(passport);

// setting routes
app.use('/api/users', users);
app.use('/api/items', items);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
