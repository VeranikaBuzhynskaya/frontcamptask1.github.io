import Service from "../serviceCommand/Service";
import commandFactory from "../serviceCommand/CommandFactory";

export default class Article {
    constructor(store){
        this.store = store;
        this.container = document.getElementById('news');
    }

    showArticles(){
        let source = this.store.store.getState().checkedSource;
        this.fetchArticles(source).then(this.render.bind(this));
    }

    fetchArticles(source){
        // const loader = new Service(source,this.apiKey);
        const loader = commandFactory.getCommandRequest('article', source);
        return loader.load();
    }

    render(articles){
        const fragment = document.createDocumentFragment();
        articles.forEach(article => {
            fragment.appendChild(this.createArticles(article));
        });
        this.container.appendChild(fragment);
    }

    formatedDate(publishedAt){
        if(publishedAt){
            let newDate = new Date(publishedAt || Date.now() - new Date().getTimezoneOffset());
            return newDate.toGMTString().split('G')[0];
        } else {
            return 'Indefined'
        }
    }

    createArticles(article){
        let blockNews = document.createElement('article');
        blockNews.className = 'blockNews';
        document.body.appendChild(blockNews);

        let {urlToImage, title, description, url, author = 'Current news portal', publishedAt} = article;

        let datePublish = this.formatedDate(publishedAt);

        blockNews.innerHTML = `<img class="image" src= ${urlToImage ? urlToImage : 'http://drpp-ny.org/wp-content/uploads/2014/07/sorry-image-not-available.png'} alt="News picture">
         <div class="blockDescription">
            <h3 class="title">${title}</h3>
            <p class="description">${description}</p>
            <a class="readMore" href="${url}">Read more</a>
         <div>
         <p class="author">Author: ${author ? author : 'Current news portal' }</p>
         <span class="datePublish">published: ${datePublish}</span>`;

        return blockNews;
    }
}