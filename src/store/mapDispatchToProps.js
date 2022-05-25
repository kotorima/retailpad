import { bindActionCreators } from 'redux';
import action1 from './actionCreators/action1';
import action2 from './actionCreators/action2';

function mapDispatchToProps(component) {
    switch (component) {
        case "Component1":
            return function(dispatch) {
                return {
                    changeValue1: bindActionCreators(dispatch, action1)
                };
            };
        case "Component2":
            return function(dispatch) {
                return {
                    changeValue2: bindActionCreators(dispatch, action2)
                };
            };
        default:
            return undefined;
    }
}

export default mapDispatchToProps;