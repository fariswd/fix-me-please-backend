var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = Schema({
  memberid: String,
  days: Number,
  date: { type: Date, default: Date.now() },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'book' }]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
