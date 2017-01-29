
import {createStore,applyMiddleware} from 'redux';// to create to store for the application, to link this to any of the middleware components
import thunkMiddleware from 'redux-thunk';// dispatch of the actions and action creators
import rootReducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

// add reducers to store
const store = createStoreWithMiddleware(rootReducers);

export default store;