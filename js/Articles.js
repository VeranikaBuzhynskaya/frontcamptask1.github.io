class Articles {
    constructor(){
        this.apiKey = `ea0683d6cc144385987781ae61303c23`;
        this.container = document.getElementById('news');
    }

    showArticles(source){
        this.fetchArticles(source).then(this.render.bind(this));
    }

    fetchArticles(source){
        const loader = new NewsLoader(source,this.apiKey);
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
        console.log("EEEEEEEEEE");
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