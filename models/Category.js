const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title : String
}, { timestamps: true });

/**
 * Helper method 
 */
categorySchema.methods.isTaken = function isTaken() {
};

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
