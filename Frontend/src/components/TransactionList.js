import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionList = ({ onEdit }) => {
    const [transactions, setTransactions] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await axios.get(`${API_URL}/transactions`);
            setTransactions(response.data);
        };

        fetchTransactions();
    }, [API_URL]);

    const handleDelete = async (id) => {
        await axios.delete(`${API_URL}/transactions/${id}`);
        setTransactions(transactions.filter((transaction) => transaction._id !== id));
    };

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction._id}>
                        <p>{transaction.description}: ${transaction.amount}</p>
                        <button onClick={() => onEdit(transaction)}>Edit</button>
                        <button onClick={() => handleDelete(transaction._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
