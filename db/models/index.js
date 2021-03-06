const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Use native promises
mongoose.Promise = global.Promise;

// For salting passwords
const SALT_WORK_FACTOR = 10;

// Setting up db uri
// If testing, '_test' will be added on to the db name to keep environments separate
const name = `puppy_profiles${process.env.NODE_ENV === 'testing' ? '_test' : ''}`;
// Set URL to either Heroku or local db
const url = process.env.MONGODB_URI || `mongodb://localhost/${name}`;

// Connect to db
mongoose.connect(url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

// User schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  // Password not required bc OAuth -> users may or may not have passwords
  password: { type: String },
  name: { type: String, required: true, unique: true },
  picture: { type: String, default: '/img/default.png' },
  description: { type: String },
  googleId: { type: String }
});

// Hash and salt passwords before saving to db
UserSchema.pre('save', function (next) {
  const user = this;
  // Only hash and salt if pw has been modified or is new
  if (!user.isModified('password')) return next();
  // Salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);
    // Hash
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      // Set password to be the hashed one
      user.password = hash;
      next();
    });
  });
});

// Check if the password entered matches the password in the db
UserSchema.methods.authenticate = function (enteredPassword) {
  return new Promise((resolve, reject) =>
    bcrypt.compare(enteredPassword, this.password, (err, result) => (
      err ? reject(err) : resolve(result)
    ))
  );
};

UserSchema.statics.findOrCreate = function (props) {
  const self = this;
  return self.findOne({ googleId: props.googleId }).exec().then(user => {
    if (user) return user;
    return self.create({
      googleId: props.googleId,
      email: props.email,
      name: props.name
    });
  });
};

// When sending data from db to anywhere, only send these fields
UserSchema.set('toJSON', {
  transform(doc, ret, options) {
    const retJson = {
      email: ret.email,
      name: ret.name,
      picture: ret.picture,
      description: ret.description
    };
    return retJson;
  }
});

module.exports = mongoose.model('User', UserSchema);
