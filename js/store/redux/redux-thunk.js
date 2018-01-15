const thunk =
({getState, dispatch}) => nextDispatch => action => {
    if (typeof action === 'function') {
        return action(dispatch);
    }
    return nextDispatch(action);
};

export default thunk;