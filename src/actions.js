export const fetchTransactionsRequest = () => ({
    type: 'FETCH_TRANSACTIONS_REQUEST'
  });
  
  export const fetchTransactionsSuccess = (transactions) => ({
    type: 'FETCH_TRANSACTIONS_SUCCESS',
    payload: transactions
  });
  
  export const fetchTransactionsFailure = (error) => ({
    type: 'FETCH_TRANSACTIONS_FAILURE',
    payload: error
  });
  
  export const fetchTransactions = () => {
    return async (dispatch) => {
      dispatch(fetchTransactionsRequest());
  
      try {
        const response = await fetch('https://api.example.com/transactions');
        const transactions = await response.json();
        dispatch(fetchTransactionsSuccess(transactions));
      } catch (error) {
        dispatch(fetchTransactionsFailure(error.message));
      }
    };
  };