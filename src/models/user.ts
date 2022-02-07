import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';

const { Schema } = mongoose;

const userShema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// userShema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userShema);
