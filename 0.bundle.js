webpackJsonp([0],{

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(124);

var _config = __webpack_require__(334);

var _img = __webpack_require__(333);

var _img2 = _interopRequireDefault(_img);

__webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var sourcesContainer = document.querySelector('.sources-container');
var sourcesSelector = document.querySelector('.source-selector');
var newsContainer = document.querySelector('.news-container');
var homeButton = document.querySelector('.home-btn');
var startButton = document.querySelector('.btn-start');
var pageBtnBar = document.querySelector('.page-btn-bar');
var pageNumber = document.querySelector('.page-number');
var nextPageBtn = document.querySelector('.next-page');
var prevPageBtn = document.querySelector('.prev-page');
var loader = document.querySelector('.loader');
var loaderImg = document.querySelector('.loader-img');

// App startup

var fetchPage = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pageNumber) {
        var response, _ref2, articles;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return fetch((0, _config.getNewsURL)(sourcesSelector.value, pageNumber), { mode: 'cors' });

                    case 3:
                        response = _context.sent;

                        if (response.ok) {
                            _context.next = 6;
                            break;
                        }

                        throw 'Failed with code ' + response.status + ', ' + response.statusText;

                    case 6:
                        _context.next = 8;
                        return response.json();

                    case 8:
                        _ref2 = _context.sent;
                        articles = _ref2.articles;
                        return _context.abrupt('return', articles);

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context['catch'](0);

                        console.error(_context.t0);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 13]]);
    }));

    return function fetchPage(_x) {
        return _ref.apply(this, arguments);
    };
}();

var articleFactoryWithLogger = new _utils.LoggerDecorator(_utils.articleFactory);
var pageGetter = new _utils.PageGetterProxy(fetchPage);

exports.default = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        sourcesSelector.classList.remove('hidden');
                        sourcesSelector.addEventListener('change', function () {
                            return selectNewsSource(sourcesSelector.value);
                        });
                        homeButton.classList.remove('hidden');
                        homeButton.src = _img2.default.icon.default;
                        loaderImg.src = _img2.default.loader.default;
                        startButton.classList.add('hidden');
                        nextPageBtn.onclick = nextPage;
                        prevPageBtn.onclick = prevPage;
                        _context2.prev = 8;
                        _context2.next = 11;
                        return fetch(_config.sourcesURL, { mode: 'cors' });

                    case 11:
                        response = _context2.sent;

                        if (response.ok) {
                            _context2.next = 14;
                            break;
                        }

                        throw 'Failed with code ' + response.status + ', ' + response.statusText;

                    case 14:
                        _context2.next = 16;
                        return response.json();

                    case 16:
                        data = _context2.sent;

                        renderNewsSources(data.sources);
                        _context2.next = 23;
                        break;

                    case 20:
                        _context2.prev = 20;
                        _context2.t0 = _context2['catch'](8);

                        console.error(_context2.t0);

                    case 23:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[8, 20]]);
    }));

    function startup() {
        return _ref3.apply(this, arguments);
    }

    return startup;
}();

// App Dom logic


var createSourceItem = function createSourceItem(_ref4) {
    var _ref4$id = _ref4.id,
        id = _ref4$id === undefined ? '' : _ref4$id,
        _ref4$url = _ref4.url,
        url = _ref4$url === undefined ? '' : _ref4$url,
        _ref4$name = _ref4.name,
        name = _ref4$name === undefined ? '' : _ref4$name,
        _ref4$description = _ref4.description,
        description = _ref4$description === undefined ? '' : _ref4$description;

    var sourceItem = articleFactoryWithLogger.create({ class: 'source-item' });
    sourceItem.innerHTML = '\n        <div class="source-wrapper">\n            <figure class="source-image">\n                <img\n                alt="' + name + '"\n                class="icon"\n                data-src="' + (0, _config.getIconURL)(url) + '"\n                src="' + (0, _config.getIconURL)(url) + '"\n                referrerpolicy="no-referrer"\n                title="' + description + '"\n                onerror="this.onerror=null;this.src=\'' + _img2.default['src' + (0, _utils.getRandomIntNumber)(1, 2)].default + '\'"\n                >\n                <figcaption>' + name + '</figcaption>\n            </figure>\n        </div>\n    ';
    sourceItem.addEventListener('click', function () {
        return selectNewsSource(id);
    });
    return sourceItem;
};

var createNewsItem = function createNewsItem(_ref5) {
    var _ref5$author = _ref5.author,
        author = _ref5$author === undefined ? '' : _ref5$author,
        _ref5$publishedAt = _ref5.publishedAt,
        publishedAt = _ref5$publishedAt === undefined ? '' : _ref5$publishedAt,
        _ref5$title = _ref5.title,
        title = _ref5$title === undefined ? '' : _ref5$title,
        urlToImage = _ref5.urlToImage,
        _ref5$url = _ref5.url,
        url = _ref5$url === undefined ? '' : _ref5$url;

    var newsItem = _utils.articleFactory.create({ class: 'news-item' });
    var background = _utils.divFactory.create({
        class: 'news-background',
        style: 'background-image: url(' + (urlToImage || (0, _config.getRandomImageUrl)()) + '), url(' + (0, _config.getRandomImageUrl)() + ')'
    });
    var date = new Date(publishedAt);
    newsItem.innerHTML = '\n            <div class="news-content">\n                <a href="' + url + '" target="_blank">\n                    <p class="publish-time">' + date.toLocaleDateString() + '</p>\n                    <h4>' + title + '</h4>\n                    ' + (author ? '<p class="author">by ' + author + '</p>' : '') + '\n                </a>\n                <div class="tint"></div>\n            </div>\n    ';
    newsItem.appendChild(background);
    return newsItem;
};

var createSourceSelectOption = function createSourceSelectOption(_ref6) {
    var _ref6$name = _ref6.name,
        name = _ref6$name === undefined ? '' : _ref6$name,
        _ref6$id = _ref6.id,
        id = _ref6$id === undefined ? '' : _ref6$id;

    var sourceOption = _utils.optionFactory.create({ value: id });
    sourceOption.innerHTML = name;
    return sourceOption;
};

var renderNewsSources = function renderNewsSources() {
    var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    sources.forEach(function (newsSource) {
        sourcesContainer.appendChild(createSourceItem(newsSource));
        sourcesSelector.appendChild(createSourceSelectOption(newsSource));
    });
};

var renderNews = function renderNews() {
    var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    while (newsContainer.lastChild) {
        newsContainer.removeChild(newsContainer.lastChild);
    }
    articles.forEach(function (article) {
        newsContainer.appendChild(createNewsItem(article));
    });
    pageBtnBar.classList.remove('hidden');
};

var selectNewsSource = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var sourceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        sourcesContainer.classList.add('hidden');
                        sourcesSelector.value = sourceId;
                        _config.store.dispatch(_config.RESET_STORE);
                        pageGetter.clearPages();
                        _context3.t0 = renderNews;
                        _context3.next = 7;
                        return pageGetter.getPage(1);

                    case 7:
                        _context3.t1 = _context3.sent;
                        (0, _context3.t0)(_context3.t1);

                    case 9:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function selectNewsSource() {
        return _ref7.apply(this, arguments);
    };
}();

var changePage = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var articles;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        loader.classList.remove('hidden');
                        if (_config.store.getState().currentPage === 1) {
                            prevPageBtn.setAttribute('disabled', true);
                        } else {
                            prevPageBtn.removeAttribute('disabled');
                        }
                        pageNumber.innerHTML = _config.store.getState().currentPage;
                        _context4.next = 5;
                        return pageGetter.getPage(_config.store.getState().currentPage);

                    case 5:
                        articles = _context4.sent;

                        renderNews(articles);
                        loader.classList.add('hidden');

                    case 8:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function changePage() {
        return _ref8.apply(this, arguments);
    };
}();

var nextPage = function nextPage() {
    _config.store.dispatch(_config.NEXT_PAGE);
};

var prevPage = function prevPage() {
    _config.store.dispatch(_config.PREV_PAGE);
};

_config.store.subscribe(changePage);

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bg2Min = __webpack_require__(336);

var bg1 = _interopRequireWildcard(_bg2Min);

var bg2 = _interopRequireWildcard(_bg2Min);

var _bg3Min = __webpack_require__(337);

var bg3 = _interopRequireWildcard(_bg3Min);

var _bg4Min = __webpack_require__(338);

var bg4 = _interopRequireWildcard(_bg4Min);

var _bg5Min = __webpack_require__(339);

var bg5 = _interopRequireWildcard(_bg5Min);

var _bg6Min = __webpack_require__(340);

var bg6 = _interopRequireWildcard(_bg6Min);

var _bg7Min = __webpack_require__(341);

var bg7 = _interopRequireWildcard(_bg7Min);

var _bg8Min = __webpack_require__(342);

var bg8 = _interopRequireWildcard(_bg8Min);

var _icon = __webpack_require__(343);

var icon = _interopRequireWildcard(_icon);

var _src = __webpack_require__(344);

var src1 = _interopRequireWildcard(_src);

var _src2 = __webpack_require__(345);

var src2 = _interopRequireWildcard(_src2);

var _loading = __webpack_require__(346);

var loader = _interopRequireWildcard(_loading);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var images = {
    bg1: bg1, bg2: bg2, bg3: bg3, bg4: bg4, bg5: bg5, bg6: bg6, bg7: bg7, bg8: bg8, icon: icon, src1: src1, src2: src2, loader: loader
};

exports.default = images;

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = exports.getRandomImageUrl = exports.getIconURL = exports.getNewsURL = exports.sourcesURL = exports.PREV_PAGE = exports.NEXT_PAGE = exports.RESET_STORE = undefined;

var _utils = __webpack_require__(124);

var _store = __webpack_require__(335);

var _store2 = _interopRequireDefault(_store);

var _img = __webpack_require__(333);

var _img2 = _interopRequireDefault(_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_KEY = 'c94ea59ef0324dcd827c08d3f4f96f88';
var HOST_URL = 'https://newsapi.org/v2';
var NEWS_PARAM = '/everything';
var SOURCES_PARAM = '/sources';

var RESET_STORE = { type: 'RESET_STORE' };
var NEXT_PAGE = { type: 'NEXT_PAGE' };
var PREV_PAGE = { type: 'PREV_PAGE' };

exports.RESET_STORE = RESET_STORE;
exports.NEXT_PAGE = NEXT_PAGE;
exports.PREV_PAGE = PREV_PAGE;


var sourcesURL = '' + HOST_URL + SOURCES_PARAM + '?category=technology&language=en&apiKey=' + API_KEY;
var getNewsURL = function getNewsURL() {
    var sourceName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return '' + HOST_URL + NEWS_PARAM + '?sources=' + sourceName + '&language=en&page=' + page + '&apiKey=' + API_KEY;
};
var getIconURL = function getIconURL() {
    var siteUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return 'https://icons.better-idea.org/icon?url=' + siteUrl + '&size=50..120..200';
};
var getRandomImageUrl = function getRandomImageUrl() {
    return _img2.default['bg' + (0, _utils.getRandomIntNumber)(1, 8)].default;
};

exports.sourcesURL = sourcesURL;
exports.getNewsURL = getNewsURL;
exports.getIconURL = getIconURL;
exports.getRandomImageUrl = getRandomImageUrl;

// Store config

var initialState = {
    currentPage: 1
};

var newsReducer = function newsReducer(state, action) {
    switch (action.type) {
        case 'NEXT_PAGE':
            {
                return {
                    currentPage: state.currentPage + 1
                };
            }
        case 'PREV_PAGE':
            {
                return {
                    currentPage: state.currentPage - 1
                };
            }
        case 'RESET_STORE':
            {
                return initialState;
            }
        default:
            {
                return state;
            }
    }
};

var store = exports.store = _store2.default.getStore(newsReducer, initialState);

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// In current Redux store implementation Singleton and Observer are implemented

var Store = function () {
    function Store(reducer) {
        var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Store);

        this.state = initialState;
        Object.freeze(this.state);
        this.listeners = [];
        this.reducer = reducer;
    }

    // Singleton
    // The store should be unique for the whole application, that's why I implemented Singleton
    // pattern, which always returns the same instance of store.

    _createClass(Store, [{
        key: "getState",
        value: function getState() {
            return this.state;
        }

        // Observer
        // In this method an Observer pattern was implemented, to inform the application about
        // the store state changes, so that it could take appropriate actions.

    }, {
        key: "dispatch",
        value: function dispatch(action) {
            this.state = this.reducer(this.state, action);
            Object.freeze(this.state);
            this.listeners.forEach(function (listener) {
                return listener();
            });
        }
    }, {
        key: "subscribe",
        value: function subscribe(listener) {
            var _this = this;

            this.listeners.push(listener);
            return function () {
                _this.listeners = _this.listeners.filter(function (l) {
                    return l !== listener;
                });
            };
        }
    }], [{
        key: "getStore",
        value: function getStore(reducer, initialState) {
            if (!Store.instance) {
                Store.instance = new Store(reducer, initialState);
            }
            return Store.instance;
        }
    }]);

    return Store;
}();

exports.default = Store;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-2-min.jpg";

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-3-min.jpg";

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-4-min.jpg";

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-5-min.jpg";

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-6-min.jpg";

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-7-min.jpg";

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-8-min.jpg";

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon.png";

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/src-1.png";

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/src-2.png";

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.png";

/***/ })

});