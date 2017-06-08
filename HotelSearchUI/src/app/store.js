import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from 'reducers/index';


// applying the middleware onto the store
const storeWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
// add reducers to the above created store
const store = storeWithMiddleware(rootReducers);

export default store;