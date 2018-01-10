import Service from "./Service";

export default class RequestArticleCommand extends Service{
    constructor (source,apiKey) {
        super();
        this.source = source;
        this.apiKey = apiKey;
    };

    get requestLink() {
        return `https://newsapi.org/v1/articles?source=${this.source}&apiKey=${this.apiKey}`;
    };

    load() {
        return super.load()
            .then(data => data.articles)
            .catch(error => console.error('Something wrong with load articles', error));
    };

}