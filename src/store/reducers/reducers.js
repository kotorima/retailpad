import { combineReducers } from 'redux';
import value1 from './reducer1';
import value2 from './reducer2';

const reducers = combineReducers({
    value1,
    value2
});

export default reducers;