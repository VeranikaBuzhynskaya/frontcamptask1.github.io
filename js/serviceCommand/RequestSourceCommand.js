import Service from "./Service";

export default class RequestSourceCommand extends Service{
    constructor () {
        super();
    };

    get requestLink() {
        return `https://newsapi.org/v1/sources`;
    };

    load() {
        return super.load()
            .then(data => data.sources)
            .catch(error => console.error('Something wrong with load sources', error));
    };

}