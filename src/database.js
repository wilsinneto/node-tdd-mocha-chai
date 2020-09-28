const mongoose = require("mongoose");
const config = require("config");

// const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost/test";
const mongodbUrl = config.get("database.mongoUrl");

const connect = () => mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const close = () => mongoose.connection.close();

module.export = {
  connect,
  close
}
