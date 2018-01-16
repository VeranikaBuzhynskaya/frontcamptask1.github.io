import service from "./serviceCommand/Service";
import Article from "./modals/Article";
import Source from "./modals/Source";
import Store from "./store/store";
import { checkedSource } from "./actions/actions";
import EventSourceObserver from "./Observer";
import '../styles/style.css';
import './test.json';

const news = document.getElementById('news');
const dropDownSources = document.getElementById('dropdown-content');
const dropButton = document.getElementById('dropbtn');

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const store = new Store();
const source = new Source(store);
const article = new Article(store);

source.showSources();
article.showArticles();

const blogObserver = new EventSourceObserver(dropDownSources);

blogObserver.subscribe(e => {
    if(e.target.id){
        if (source.updateCheckedSource(e.target.id)){
            while (news.lastChild) {``
                news.removeChild(news.lastChild);
            }
            const article = new Article(store);
            store.store.dispatch(checkedSource(e.target.id));
            article.showArticles();
        
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
