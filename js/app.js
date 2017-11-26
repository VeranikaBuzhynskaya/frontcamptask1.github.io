let news = document.getElementById('news');
let sourcesNav = document.getElementById('dropdown-content');

const source = new Sources();
source.fetchSources(sourcesNav);

const article = new Articles();
article.fetchArticles('bbc-news');

document.getElementsByClassName('navbar')[0].addEventListener("click", function(e){
    if(e.target.id){
        while (news.lastChild) {
            news.removeChild(news.lastChild);
        }
        const article = new Articles();
        article.fetchArticles(e.target.id);
    }
});
