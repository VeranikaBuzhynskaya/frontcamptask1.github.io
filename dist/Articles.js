'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Articles = function () {
    function Articles() {
        _classCallCheck(this, Articles);

        this.apiKey = 'ea0683d6cc144385987781ae61303c23';
        this.container = document.getElementById('news');
    }

    _createClass(Articles, [{
        key: 'showArticles',
        value: function showArticles(source) {
            this.fetchArticles(source).then(this.render.bind(this));
        }
    }, {
        key: 'fetchArticles',
        value: function fetchArticles(source) {
            var loader = new NewsLoader(source, this.apiKey);
            return loader.load();
        }
    }, {
        key: 'render',
        value: function render(articles) {
            var _this = this;

            var fragment = document.createDocumentFragment();
            articles.forEach(function (article) {
                fragment.appendChild(_this.createArticles(article));
            });
            this.container.appendChild(fragment);
        }
    }, {
        key: 'formatedDate',
        value: function formatedDate(publishedAt) {
            if (publishedAt) {
                var newDate = new Date(publishedAt || Date.now() - new Date().getTimezoneOffset());
                return newDate.toGMTString().split('G')[0];
            } else {
                return 'Indefined';
            }
        }
    }, {
        key: 'createArticles',
        value: function createArticles(article) {
            var blockNews = document.createElement('article');
            blockNews.className = 'blockNews';
            document.body.appendChild(blockNews);

            var urlToImage = article.urlToImage,
                title = article.title,
                description = article.description,
                url = article.url,
                _article$author = article.author,
                author = _article$author === undefined ? 'Current news portal' : _article$author,
                publishedAt = article.publishedAt;


            var datePublish = this.formatedDate(publishedAt);

            blockNews.innerHTML = '<img class="image" src= ' + (urlToImage ? urlToImage : 'http://drpp-ny.org/wp-content/uploads/2014/07/sorry-image-not-available.png') + ' alt="News picture">\n         <div class="blockDescription">\n            <h3 class="title">' + title + '</h3>\n            <p class="description">' + description + '</p>\n            <a class="readMore" href="' + url + '">Read more</a>\n         <div>\n         <p class="author">Author: ' + (author ? author : 'Current news portal') + '</p>\n         <span class="datePublish">published: ' + datePublish + '</span>';

            return blockNews;
        }
    }]);

    return Articles;
}();