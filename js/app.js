const news = document.getElementById('news');
const defaultSource = 'bbc-news';
const dropDownSources = document.getElementById('dropdown-content');

const source = new Sources();
source.showSources();

const article = new Articles();
article.showArticles(defaultSource);

function handleMenu() {
    dropDownSources.classList.toggle("show");
}

dropDownSources.addEventListener("click", e => {
    if(e.target.id){
        while (news.lastChild) {
            news.removeChild(news.lastChild);
        }
        const article = new Articles();
        article.showArticles(e.target.id);
    } else if(e.target.nodeName === "LABEL"){
        document.getElementById('header').querySelector('h1').innerHTML = `${e.target.textContent}`;
        dropDownSources.classList.remove('show');
    }
});

document.addEventListener("click", e => {
    if (!event.target.matches('.dropbtn')) {
        dropDownSources.classList.remove('show');
    }
});
