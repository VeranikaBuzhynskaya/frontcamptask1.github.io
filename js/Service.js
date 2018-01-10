'use strict';

export default class Service {
    constructor () {
        this.load = this.loggingDecorator(this.load);
    };

    get requestLink() {
        
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
    };

    loggingDecorator(wrapped){
        return function() {
            console.log('Starting loading');
            const result = wrapped.apply(this, arguments);
            console.log('Finished loading');
            return result;
        }
    }
}








