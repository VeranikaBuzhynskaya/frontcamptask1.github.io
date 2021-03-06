import createStore from './redux/createStore';
import applyMiddleware from './redux/applyMiddleware';
import thunkMiddleware from './redux/redux-thunk';
import {createLogger} from './redux/redux-logger';
import rootReducer from '../reducers/rootReducer'

const loggerMiddleware = createLogger();

export default class Store{
    constructor() {
        this.store = createStore(
            rootReducer,
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        );
    }
    
    subscribe(onChange) {
        this.store.subscribe(onChange);
    }
    
    dispatch(action) {
        this.store.dispatch(action);
    }
    
    getSources() {
        const state = this.store.getState();
        return state.sources;
    }
    
    getSelectedSource() {
        const state = this.store.getState();
        return state.selectedSource;
    }
    
    getArticles() {
        const state = this.store.getState();
        return state.articles;
    }
    
}