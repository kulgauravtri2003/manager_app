const Transaction = require('../models/transactionModel');
const { v4: uuidv4 } = require('uuid');

// Create a new transaction
const createTransaction = async (req, res) => {
    try {
        const { amount, description } = req.body;
        const transactionID = uuidv4();
        const transaction = new Transaction({ transactionID, amount, description });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read all transactions
const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a transaction
const updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, description } = req.body;
        const transaction = await Transaction.findByIdAndUpdate(id, { amount, description }, { new: true });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        await Transaction.findByIdAndDelete(id);
        res.status(200).json({ message: 'Transaction deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction,
};
