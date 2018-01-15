import service from "./serviceCommand/Service";
import Article from "./modals/Article";
import Source from "./modals/Source";
import Store from "./store/store";
import EventSourceObserver from "./Observer";
import '../styles/style.css';
import './test.json';

const news = document.getElementById('news');
const defaultSource = 'bbc-news';
const dropDownSources = document.getElementById('dropdown-content');
const dropButton = document.getElementById('dropbtn');

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const store = new Store();
const source = new Source();
const article = new Article();

source.showSources();
article.showArticles(defaultSource);

const blogObserver = new EventSourceObserver(dropDownSources);

blogObserver.subscribe(e => {
    if(e.target.id){
        if (source.updateCheckedSource(e.target.id)){
            while (news.lastChild) {``
                news.removeChild(news.lastChild);
            }
            const article = new Article();
            article.showArticles(e.target.id);
        
        }   
    } else if(e.target.nodeName === "LABEL"){
        document.getElementById('header').querySelector('h1').innerHTML = `${e.target.textContent}`;
        dropDownSources.classList.remove('show');
    }
});

dropButton.addEventListener("click", e => {
    dropDownSources.classList.toggle("show");
});

document.addEventListener("click", e => {
    if (!event.target.matches('.dropbtn')) {
        dropDownSources.classList.remove('show');
    }
});
