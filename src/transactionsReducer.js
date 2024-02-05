const initialState = {
    transactions: [],
    loading: false,
    error: null
  };
  
  const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TRANSACTIONS_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_TRANSACTIONS_SUCCESS':
        return { ...state, loading: false, transactions: action.payload };
      case 'FETCH_TRANSACTIONS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default transactionsReducer;