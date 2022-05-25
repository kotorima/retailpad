function mapStateToProps(component) {
    switch (component) {
        case "Component1":
            {
                return function(state) {
                    return {
                        value1: state.value1
                    };
                }
            }
        case "Component2":
            {
                return function(state) {
                    return {
                        value2: state.value2
                    };
                }
            }
        default:
            return undefined;
    }
}

export default mapStateToProps;