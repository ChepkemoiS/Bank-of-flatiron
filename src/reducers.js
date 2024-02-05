import { combineReducers } from 'redux';
import transactionsReducer from './reducers/transactionsReducer';

const rootReducer = combineReducers({
  transactions: transactionsReducer
});

export default rootReducer;