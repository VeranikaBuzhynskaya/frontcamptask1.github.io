let news = document.getElementById('news');

const source = new Sources();
source.fetchSources();

const article = new Articles();
article.fetchArticles('bbc-news');

document.getElementsByClassName('navbar')[0].addEventListener("click", function(e){
    if(e.target.id){
        while (news.lastChild) {
            news.removeChild(news.lastChild);
        }
        const article = new Articles();
        article.fetchArticles(e.target.id);
    } else{
        document.getElementsByClassName('footer')[0].innerHTML = `Made by ${e.target.innerText}`;
    }
});
