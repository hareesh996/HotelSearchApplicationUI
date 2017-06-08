import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import reducer from './reducer';
import hotelSearchReducer from '../modules/dashboard/reducers/search-reducer';

/**
 * Turns an object whose values are different reducer functions, into a single reducer function. It will 
 * call every child reducer, and gather their results into a single state object, 
 * whose keys correspond to the keys of the passed reducer functions.
 */
const rootReducers  = combineReducers({
    form,
    routerReducer,
    reducer,
    hotelSearchReducer
})

export default rootReducers;