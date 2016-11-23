'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsLoader = function () {
    function NewsLoader(link, apiKey) {
        _classCallCheck(this, NewsLoader);

        this.link = link;
        this.apiKey = apiKey;
    }

    _createClass(NewsLoader, [{
        key: 'load',
        value: function load() {
            return fetch(new Request(this.requestLink)).then(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                return response.json();
            }).then(function (data) {
                return data.articles;
            }).catch(function (error) {
                return error;
            });
        }
    }, {
        key: 'requestLink',
        get: function get() {
            return this.link + '&apiKey=' + this.apiKey;
        }
    }]);

    return NewsLoader;
}();