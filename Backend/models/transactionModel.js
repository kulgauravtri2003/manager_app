const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionID: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
