const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// require('./routes/authRoutes');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI,()=>console.log('connected to db'))

const app = express();

require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);