'use strict';

export default class Service {
    constructor (source, apiKey = 0) {
        this.source = source;
        this.apiKey = apiKey;
        this.load = this.loggingDecorator(this.load);
    };

    get requestLink() {
        if(this.apiKey){
            return `https://newsapi.org/v1/articles?source=${this.source}&apiKey=${this.apiKey}`;
        } else {
            return `https://newsapi.org/v1/sources`;
        }
    };

    load() {
        return fetch(new Request(this.requestLink))
            .then(response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json(); })
            .then(data => data.articles || data.sources)
            .catch(error => error);
    };

    loggingDecorator(wrapped){
        return function() {
            console.log('Starting');
            const result = wrapped.apply(this, arguments);
            console.log('Finished');
            return result;
        }
    }
}








