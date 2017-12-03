'use strict';

var news = document.getElementById('news');
var defaultSource = 'bbc-news';
var dropDownSources = document.getElementById('dropdown-content');

var source = new Sources();
source.showSources();

var article = new Articles();
article.showArticles(defaultSource);

function handleMenu() {
    dropDownSources.classList.toggle("show");
}

dropDownSources.addEventListener("click", function (e) {
    if (e.target.id) {
        while (news.lastChild) {
            news.removeChild(news.lastChild);
        }
        var _article = new Articles();
        _article.showArticles(e.target.id);
    } else if (e.target.nodeName === "LABEL") {
        document.getElementById('header').querySelector('h1').innerHTML = '' + e.target.textContent;
        dropDownSources.classList.remove('show');
    }
});

document.addEventListener("click", function (e) {
    if (!event.target.matches('.dropbtn')) {
        dropDownSources.classList.remove('show');
    }
});