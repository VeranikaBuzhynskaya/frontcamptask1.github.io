let news = document.getElementById('news');

const source = new Sources();
source.fetchSources();

const article = new Articles();
article.fetchArticles('bbc-news');

document.getElementById('navbar').addEventListener("click", function(e){
    if(e.target.id){
        while (news.lastChild) {
            news.removeChild(news.lastChild);
        }
        const article = new Articles();
        article.fetchArticles(e.target.id);
    } else{
        document.getElementById('footer').innerHTML = `Made by ${e.target.innerText}`;
    }
});
