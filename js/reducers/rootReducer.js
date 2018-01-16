import {ACTION_TYPES} from '../actions/actionTypes';
export const defaultState = {
    articles:[],
    sources:[],
    checkedSource: 'bbc-news'
};

export default function news(state=defaultState, action) {
    switch (action.type) {
        case ACTION_TYPES.SELECT_SOURCE: {
            return Object.assign({}, state, 
                { 
                    checkedSource: action.sourceID
                });
        }
        case ACTION_TYPES.RECEIVE_NEWS: {
            return Object.assign({}, state, 
                { 
                    articles: action.articles
                } 
            );
        }
        case ACTION_TYPES.RECEIVE_SOUCES: {
            return Object.assign({}, state, 
                { 
                    sources: action.sources
                } 
            );
        }
        default:
            return state;
    }
}