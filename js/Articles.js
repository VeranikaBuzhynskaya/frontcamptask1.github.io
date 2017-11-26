class Articles {
    constructor(){
        this.apiKey = `ea0683d6cc144385987781ae61303c23`;
    }

    fetchArticles(container, source){
        const loader = new NewsLoader(source,this.apiKey);
        const fragment = document.createDocumentFragment();

        loader.load().then(articles => {
            articles.forEach(article => {
                fragment.appendChild(this.createArticles(article)); // render больше подходит, т.к. тут отрисовываю
            });
            container.appendChild(fragment);
        })
    }

    createArticles(article){
        let blockNews = document.createElement('article');
        blockNews.className = 'blockNews';
        document.body.appendChild(blockNews);

        blockNews.innerHTML = `<img class="image" src= ${article.urlToImage} alt="News picture">
         <div class="blockDescription">
            <h3 class="title">${article.title}<h3>
            <p class="description">${article.description}<p>
            <a class="readMore" href="${article.url}">Read more</a>
         <div>
         <p class="author">Author: ${article.author}</p>
         <span class="dataPublish">published: ${article.publishedAt}</span>`;

        return blockNews;
    }
}