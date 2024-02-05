import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions } from './actions';
import TransactionsTable from './components/TransactionsTable';

function App() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);
  const loading = useSelector((state) => state.transactions.loading);
  const error = useSelector((state) => state.transactions.error);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Recent Bank Transactions</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <TransactionsTable transactions={transactions} />}
    </div>
  );
}

export default App;