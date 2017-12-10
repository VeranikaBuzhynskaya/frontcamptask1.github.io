'use strict';

export default class NewsLoader {
    constructor (source, apiKey = 0) {
        this.source = source;
        this.apiKey = apiKey;
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
}








