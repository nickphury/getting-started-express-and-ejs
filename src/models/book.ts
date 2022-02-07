import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
});

// bookSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Book', bookSchema);
