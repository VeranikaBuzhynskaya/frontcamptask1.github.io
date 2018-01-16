import {ACTION_TYPES} from "./actionTypes";
import {fetchSources, recieveSources, selectSource, fetchNews, receiveNews} from "./actions";

let instance;
export default class ActionService {
    constructor() {
        if(instance) {
            return instance;
        }
        instance = this;
    }

    getAction(type,...args) {
        switch(type) {
            case ACTION_TYPES.SELECT_SOURCE:
                return selectSource.apply(this,args);
            case ACTION_TYPES.RECEIVE_NEWS:
                return receiveNews.apply(this,args);
            case ACTION_TYPES.RECEIVE_SOURCES:
                return recieveSources.apply(this,args);
            case ACTION_TYPES.REQUEST_SOURCES:
                return fetchSources.apply(this,args);
            case ACTION_TYPES.REQUEST_NEWS:
                return fetchNews.apply(this,args);
        }
    }
}