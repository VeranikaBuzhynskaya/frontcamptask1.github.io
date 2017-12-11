import service from "./Service";
import Article from "./Article";
import Source from "./Source";
import '../styles/style.css';
import './test.json';

const news = document.getElementById('news');
const defaultSource = 'bbc-news';
const dropDownSources = document.getElementById('dropdown-content');
const dropButton = document.getElementsByClassName('dropbtn')[0];

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const source = new Source();
source.showSources();

const article = new Article();
article.showArticles(defaultSource);

dropButton.addEventListener("click", e => {
    dropDownSources.classList.toggle("show");
});

dropDownSources.addEventListener("click", e => {
    if(e.target.id){
        while (news.lastChild) {``
            news.removeChild(news.lastChild);
        }
        const article = new Article();
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
