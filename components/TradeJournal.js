const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  openedAt: {
    type: Date,
    required: true,
  },
  closedAt: {
    type: Date,
    required: true,
  },
  currencyPair: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    enum: ['Long', 'Short'],
    required: true,
  },
  lotSize: {
    type: Number,
    required: true,
  },
  entryPrice: {
    type: Number,
    required: true,
  },
  exitPrice: {
    type: Number,
    required: true,
  },
  stopLoss: {
    type: Number,
    required: true,
  },
  takeProfit: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('TradeJournal', tradeSchema);