import ACTION_2 from '../actions/action2';
import initialState from '../initialState';

function value2(action, state = initialState.value2) {
    switch (action && action.type) {
        case ACTION_2:
            return action.value2;

        default:
            return state;
    }
}

export default value2;