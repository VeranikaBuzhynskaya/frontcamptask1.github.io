class Articles {
    constructor(){
        this.requestLink = 'https://newsapi.org/v1/articles?source=bbc-news';
    }

    render(){
        const apiKey = `ea0683d6cc144385987781ae61303c23`;
        const loader = new NewsLoader(this.requestLink, apiKey);

        loader.load().then(articles => {
            articles.forEach(article => {
                this.createArticles(article);
            });
        })
    }

    createArticles(article){
        let blockNews = document.createElement('div');
        blockNews.className = 'blockNews';
        document.body.appendChild(blockNews);

        let imageNews = document.createElement('img');
        imageNews.className = 'image';
        imageNews.setAttribute('src', `${article.urlToImage}` );
        imageNews.setAttribute('alt', 'News picture' );
        blockNews.appendChild(imageNews);

        let blockDescription = document.createElement('div');
        blockDescription.className = 'blockDescription';
        blockNews.appendChild(blockDescription);

        let title = document.createElement('h3');
        title.className = 'title';
        title.innerHTML = `${article.title}`;
        blockDescription.appendChild(title);

        let description = document.createElement('p');
        description.className = 'description';
        description.innerHTML = `${article.description}`;
        blockDescription.appendChild(description);

        let link = document.createElement('a');
        link.setAttribute('href', `${article.url}` );
        link.innerHTML = 'Read more';
        blockDescription.appendChild(link);

        let author = document.createElement('p');
        author.className = 'author';
        author.innerHTML = `Author: ${article.author}`;
        blockDescription.appendChild(author);

        let datePublish = document.createElement('span');
        datePublish.className = 'datePublish';
        datePublish.innerHTML = `published: ${article.publishedAt}`;
        blockNews.appendChild(datePublish);
    }
}