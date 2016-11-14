'use strict';

class NewsLoader {
    constructor (link, apiKey) {
        this.link = link;
        this.apiKey = apiKey;
    };

    get requestLink() {
        return `${this.link}&apiKey=${this.apiKey}`;
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
            .then(data => data.articles)
            .catch(error => error);
    };
}








