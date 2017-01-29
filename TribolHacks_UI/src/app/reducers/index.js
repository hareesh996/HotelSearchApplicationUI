import {combineReducers} from 'redux';
import {formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import {reducer} from './reducer';

const rootReducers  = combineReducers({
    formReducer,
    routerReducer,
    reducer
})

export default rootReducers;