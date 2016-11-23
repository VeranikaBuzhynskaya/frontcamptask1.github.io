'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Articles = function () {
    function Articles() {
        _classCallCheck(this, Articles);

        this.requestLink = 'https://newsapi.org/v1/articles?source=bbc-news'; // for loader
    }

    _createClass(Articles, [{
        key: 'render',
        value: function render() {
            var _this = this;

            // best get another name
            var apiKey = 'ea0683d6cc144385987781ae61303c23';
            var loader = new NewsLoader(this.requestLink, apiKey);
            var news = document.getElementsByClassName('news').item(0); // best use id и передавать в article контейнер
            var fragment = document.createDocumentFragment();

            loader.load().then(function (articles) {
                articles.forEach(function (article) {
                    fragment.appendChild(_this.createArticles(article)); // render больше подходит, т.к. тут отрисовываю
                });
                news.appendChild(fragment);
            });
        }
    }, {
        key: 'createArticles',
        value: function createArticles(article) {
            var blockNews = document.createElement('article');
            blockNews.className = 'blockNews';
            document.body.appendChild(blockNews);

            blockNews.innerHTML = '<img class="image" src= ' + article.urlToImage + ' alt="News picture">\n         <div class="blockDescription">\n            <h3 class="title">' + article.title + '<h3>\n            <p class="description">' + article.description + '<p>\n            <a class="readMore" href="' + article.url + '">Read more</a>\n         <div>\n         <p class="author">Author: ' + article.author + '</p>\n         <span class="dataPublish">published: ' + article.publishedAt + '</span>';

            return blockNews;
        }
    }]);

    return Articles;
}();