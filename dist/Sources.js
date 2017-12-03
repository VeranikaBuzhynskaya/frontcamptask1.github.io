'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sources = function () {
    function Sources() {
        _classCallCheck(this, Sources);

        this.checkedSource = 'bbc-news';
        this.container = document.getElementById('dropdown-content');
    }

    _createClass(Sources, [{
        key: 'showSources',
        value: function showSources() {
            var _this = this;

            this.fetchSources().then(function (sources) {
                _this.render(sources);
            });
        }
    }, {
        key: 'fetchSources',
        value: function fetchSources() {
            var loader = new NewsLoader();
            return loader.load();
        }
    }, {
        key: 'render',
        value: function render(sources) {
            var _this2 = this;

            var fragment = document.createDocumentFragment();
            sources.forEach(function (source) {
                fragment.appendChild(_this2.createSourcesNav(source));
            });
            this.container.appendChild(fragment);
        }
    }, {
        key: 'createSourcesNav',
        value: function createSourcesNav(source) {
            var itemMenu = document.createElement('div');
            itemMenu.className = 'itemMenu';
            document.body.appendChild(itemMenu);

            var id = source.id,
                sourceName = source.name;


            itemMenu.innerHTML = '\n            <input type="radio" name="fetchBy" id=' + id + '>\n            <label for=' + id + '>' + sourceName + '</label>';

            if (id === this.checkedSource) {
                itemMenu.firstElementChild.checked = true;
            }
            return itemMenu;
        }
    }]);

    return Sources;
}();