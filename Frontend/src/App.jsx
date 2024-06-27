import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

const App = () => {
    const [currentTransaction, setCurrentTransaction] = useState(null);

    const handleEdit = (transaction) => {
        setCurrentTransaction(transaction);
    };

    const handleSave = () => {
        setCurrentTransaction(null);
    };

    return (
        <div>
            <h1>Transaction Management</h1>
            <TransactionForm currentTransaction={currentTransaction} onSave={handleSave} />
            <TransactionList onEdit={handleEdit} />
        </div>
    );
};

export default App;
