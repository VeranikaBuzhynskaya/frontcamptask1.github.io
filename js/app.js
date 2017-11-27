let news = document.getElementById('news');
const defaultSource = 'bbc-news';

const source = new Sources();
source.showSources();

const article = new Articles();
article.showArticles(defaultSource);

document.getElementById('navbar').addEventListener("click", function(e){
    if(e.target.id){
        while (news.lastChild) {
            news.removeChild(news.lastChild);
        }
        const article = new Articles();
        article.showArticles(e.target.id);
    } else{
        document.getElementById('footer').innerHTML = `Made by ${e.target.innerText}`;
    }
});
