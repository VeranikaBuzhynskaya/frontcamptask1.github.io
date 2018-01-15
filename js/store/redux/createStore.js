export default function createStore(reducer, enhancer){
    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = listener => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    const dispatch = action => {
        state = reducer(state,action);
        listeners.forEach(listener => listener());
    };

    if(typeof enhancer !== 'undefined') {
        return enhancer(createStore)(reducer);
    }

    dispatch({});

    return { getState, subscribe, dispatch };
}
