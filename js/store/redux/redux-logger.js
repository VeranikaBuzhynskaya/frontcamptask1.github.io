const createLogger = () => ({getState,dispatch}) => nextDispatch => action => {
    console.log(getState());
    console.log(action.type);
    nextDispatch(action);
};

export {createLogger};