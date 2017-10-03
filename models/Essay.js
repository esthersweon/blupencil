const mongoose = require('mongoose');

const essaySchema = new mongoose.Schema({
  _author   : { type: mongoose.Schema.ObjectId, ref: 'User' },
  _editor   : { type: mongoose.Schema.ObjectId, ref: 'User' },
  _category : { type: mongoose.Schema.ObjectId, ref: 'Category' },
  title     : String,
  link      : String,
  revised   : { type: Boolean, required: true, default: false },
}, { timestamps: true });

/**
 * Helper method 
 */
essaySchema.methods.isTaken = function isTaken() {
};

const Essay = mongoose.model('Essay', essaySchema);

module.exports = Essay;
