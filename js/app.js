let news = document.getElementById('news');
let sourcesNav = document.getElementsByClassName('dropdown-content').item(0);

const source = new Sources();
source.fetchSources(sourcesNav);

const article = new Articles();
article.fetchArticles(news, 'bbc-news');

document.getElementsByClassName('navbar')[0].addEventListener("click", function(e){
    if(e.target.id){
        while (news.lastChild) {
            news.removeChild(news.lastChild);
        }
        const article = new Articles();
        article.fetchArticles(news, e.target.id);
    }
});
