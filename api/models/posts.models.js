const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default: 'https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg?w=1480&t=st=1708628245~exp=1708628845~hmac=008ccd1e09e588e032fa70b99cee7c4eae45f8bfdc90c569ccec4e758b3cf877',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
