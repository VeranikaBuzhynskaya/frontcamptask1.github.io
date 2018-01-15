export default (midleware) =>
createStore =>
    reducer => {
        const store = createStore(reducer);

        const middlewareApi = {
            getState: store.getState,
            dispatch: store.dispatch
        };
        const middlewaresChain = midlewares.map(midleware => midleware(middlewareApi));
        const composedMiddleware = middlewaresChain.reduce(
            (m1, m2) =>
                (...middlewareParams) => m1(m2(...middlewareParams))
        );
        const enhancedDispatch = composedMiddleware(store.dispatch);
        
        return Object.assign({}, store, { dispatch: enhancedDispatch });
    }