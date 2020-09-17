const mongoose = require("mongoose");
require('dotenv').config
const { Schema } = mongoose;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/travel-clarity",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const storySchema = new Schema({
  city: String,
  country: String,
  username: String,
  date: Date,
  title: String,
  body: String,
  likes: Number,
  avatar: String,
});

const Story = mongoose.model("Story", storySchema);

module.exports = {
  Story,
};
