import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionForm = ({ currentTransaction, onSave }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentTransaction) {
            setAmount(currentTransaction.amount);
            setDescription(currentTransaction.description);
        }
    }, [currentTransaction]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = { amount, description };
        const API_URL = process.env.REACT_APP_API_URL;

        if (currentTransaction) {
            await axios.put(`${API_URL}/transactions/${currentTransaction._id}`, newTransaction);
        } else {
            await axios.post(`${API_URL}/transactions`, newTransaction);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default TransactionForm;
