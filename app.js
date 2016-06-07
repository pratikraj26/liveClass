var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    mongoose = require('mongoose');

server.listen(3000, function(err){
  if(err) throw err;
  console.log("Server listening on port 3000");
});

mongoose.connect('mongodb://localhost/liveclass', function(err){
  if(err){
    console.log(err);
  }else {
    console.log("Database connected");
  }
});

var userSchema = mongoose.Schema({
  name: {
    first_name: {
      type: String,
      lowercase: true,
      trim: true
    },
    last_name: {
      type: String,
      lowercase: true,
      trim: true
    }
  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  password: String,
  country_code: String,
  dial_code: String,
  phone: Number,
  user_type: String,
  joined_on : {
    type: Date,
    Default: Date.now
  }
});

var userSession = mongoose.Schema({
  user_id: String,
  token: String,
  device_id: String,
  logged_in_on: {
    type: Date,
    Default: Date.now
  }
});

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.use('/*', function(req, res){
  res.sendFile(__dirname + '/public/404.html');
});
