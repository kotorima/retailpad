import ACTION_1 from '../actions/action1';
import initialState from '../initialState';

function value1(action, state = initialState.value1) {
    switch (action && action.type) {
        case ACTION_1:
            return action.value1;

        default:
            return state;
    }
}

export default value1;