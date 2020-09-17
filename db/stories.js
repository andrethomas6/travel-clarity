const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://localhost:27017/stories', {useNewUrlParser: true, useUnifiedTopology: true});


const storySchema = new Schema ({
  city: String,
  country: String,
  username: String,
  date: Date,
  title: String,
  body: String,
  likes: Number,
  avatar: String
});

const Story = mongoose.model('Story', storySchema);

module.exports = {
  Story
}
