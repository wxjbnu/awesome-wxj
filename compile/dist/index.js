/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Couldn't find preset \"es2015\" relative to directory \"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\.0.0.0@path-browserify\"\n    at E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:293:19\n    at Array.map (native)\n    at OptionManager.resolvePresets (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.7.1.1@babel-loader\\lib\\index.js:49:20)\n    at Object.module.exports (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.7.1.1@babel-loader\\lib\\index.js:174:20)");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*

The MIT License (MIT)

Original Library 
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var ansiStyles = colors.styles = __webpack_require__(13);
var defineProps = Object.defineProperties;

colors.supportsColor = __webpack_require__(14);

if (typeof colors.enabled === "undefined") {
  colors.enabled = colors.supportsColor;
}

colors.stripColors = colors.strip = function (str) {
  return ("" + str).replace(/\x1B\[\d+m/g, '');
};

var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str + '';
  }

  return ansiStyles[style].open + str + ansiStyles[style].close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function escapeStringRegexp(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = function () {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function (key) {
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function get() {
        return build(this._styles.concat(key));
      }
    };
  });
  return ret;
}();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = arguments;
  var argsLen = args.length;
  var str = argsLen !== 0 && String(arguments[0]);
  if (argsLen > 1) {
    for (var a = 1; a < argsLen; a++) {
      str += ' ' + args[a];
    }
  }

  if (!colors.enabled || !str) {
    return str;
  }

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
  }

  return str;
}

function applyTheme(theme) {
  for (var style in theme) {
    (function (style) {
      colors[style] = function (str) {
        if (_typeof(theme[style]) === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
}

colors.setTheme = function (theme) {
  if (typeof theme === 'string') {
    try {
      colors.themes[theme] = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      applyTheme(colors.themes[theme]);
      return colors.themes[theme];
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    applyTheme(theme);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function (name) {
    ret[name] = {
      get: function get() {
        return build([name]);
      }
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split(""),
      i = 0;
  exploded = exploded.map(map);
  return exploded.join("");
};

// custom formatter methods
colors.trap = __webpack_require__(16);
colors.zalgo = __webpack_require__(17);

// maps
colors.maps = {};
colors.maps.america = __webpack_require__(18);
colors.maps.zebra = __webpack_require__(19);
colors.maps.rainbow = __webpack_require__(20);
colors.maps.random = __webpack_require__(21);

for (var map in colors.maps) {
  (function (map) {
    colors[map] = function (str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Couldn't find preset \"es2015\" relative to directory \"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\.0.11.10@process\"\n    at E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:293:19\n    at Array.map (native)\n    at OptionManager.resolvePresets (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.7.1.1@babel-loader\\lib\\index.js:49:20)\n    at Object.module.exports (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.7.1.1@babel-loader\\lib\\index.js:174:20)");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
/**
 * npm 包
 */

/**
 * 其他文件
 */


var _safe = __webpack_require__(12);

var _safe2 = _interopRequireDefault(_safe);

var _fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = __webpack_require__(22);

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _path = __webpack_require__(0);

var _path2 = _interopRequireDefault(_path);

var _child_process = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"child_process\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _hashSum = __webpack_require__(23);

var _hashSum2 = _interopRequireDefault(_hashSum);

var _cache = __webpack_require__(6);

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_safe2.default.enabled = true;

_safe2.default.setTheme({
    /*SILLY: 'rainbow',
    INPUT: 'grey',
    VERBOSE: 'cyan',
    PROMPT: 'grey',
    INFO: 'green',
    DATA: 'grey',
    HELP: 'cyan',
    WARN: 'yellow',
    DEBUG: 'blue',
    ERROR: 'red',*/
    'info': 'grey',
    '变更': 'bgYellow',
    '删除': 'bgMagenta',
    '执行': 'blue',
    '压缩': 'blue',
    '信息': 'grey',
    '完成': 'green',
    '创建': 'green',
    '监听': 'magenta',
    '错误': 'red',
    '测试': 'red',
    '拷贝': 'yellow',
    '编译': 'blue',
    '写入': 'green'
});

var ID_CACHE = {};
var utils = {
    seqPromise: function seqPromise(promises) {
        return new Promise(function (resolve, reject) {

            var count = 0;
            var results = [];

            var iterateeFunc = function iterateeFunc(previousPromise, currentPromise) {
                return previousPromise.then(function (result) {
                    if (count++ !== 0) results = results.concat(result);
                    return currentPromise(result, results, count);
                }).catch(function (err) {
                    return reject(err);
                });
            };

            promises = promises.concat(function () {
                return Promise.resolve();
            });

            promises.reduce(iterateeFunc, Promise.resolve(false)).then(function (res) {
                resolve(results);
            });
        });
    },
    exec: function exec(cmd, quite) {
        return new Promise(function (resolve, reject) {
            var fcmd = (0, _child_process.exec)(cmd, function (err, stdout, stderr) {
                if (err) {
                    reject(err);
                } else {
                    resolve(stdout, stderr);
                }
            });
            fcmd.stdout.on('data', function (chunk) {
                !quite && process.stdout.write(chunk);
            });
            fcmd.stderr.on('data', function (chunk) {
                !quite && process.stdout.write(chunk);
            });
        });
    },
    timeoutExec: function timeoutExec(sec, cmd, quite) {
        var timeout = new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject('timeout');
            }, sec * 1000);
        });
        var task = this.exec(cmd, quite);
        return Promise.race([timeout, task]);
    },
    elemToArray: function elemToArray(elems) {
        var rst = [];
        for (var i = 0, len = elems.$$length; i < len; i++) {
            rst.push(elems[i]);
        }
        return rst;
    },
    getComId: function getComId(elem) {
        var tagName = elem.nodeName;
        var path = elem.getAttribute('path');
        var id = elem.getAttribute('id');
        if (tagName !== 'component') return tagName;
        if (id) return id;
        if (path && !id) return path;
    },
    getComPath: function getComPath(elem) {
        return elem.getAttribute('path') || this.getComId(elem);
    },
    findComponentInTemplate: function findComponentInTemplate(com, template) {
        if (typeof com !== 'string') {
            com = this.getComId(com);
        }
        var definePath = template.components[com];
        definePath = definePath.indexOf('.') === -1 ? definePath : _path2.default.resolve(template.src, '..' + _path2.default.sep + definePath);
        return this.findComponent(definePath, true);
    },
    findComponent: function findComponent(com) {
        var wpyExt = _cache2.default.getExt();

        var src = '';
        if (com.indexOf(_path2.default.sep) !== -1) {
            if (this.isFile(com + wpyExt)) {
                src = com + wpyExt;
            }
        } else {
            var comPath = _path2.default.join(this.currentDir, 'node_modules', com);
            if (this.isDir(comPath)) {
                var pkg = this.readFile(_path2.default.join(comPath, 'package.json'));
                try {
                    pkg = JSON.parse(pkg);
                } catch (e) {
                    pkg = null;
                }
                src = _path2.default.join(comPath, pkg.main);
            } else {
                var _comPath = _path2.default.join(this.currentDir, _cache2.default.getSrc(), 'components', com);
                if (this.isFile(_comPath + wpyExt)) {
                    src = _comPath + wpyExt;
                } else if (this.isFile(_comPath + '/index' + wpyExt)) {
                    src = _comPath + '/index' + wpyExt;
                } else if (this.isFile(_comPath + '/' + com + wpyExt)) {
                    src = _comPath + '/' + com + wpyExt;
                }
            }
        }
        return src;
    },


    currentDir: process.cwd(),
    cliDir: __dirname,

    isFunction: function isFunction(fn) {
        return typeof fn === 'function';
    },
    isString: function isString(obj) {
        return toString.call(obj) === '[object String]';
    },
    isObject: function isObject(obj) {
        return toString.call(obj) === '[object Object]';
    },
    isNumber: function isNumber(obj) {
        return toString.call(obj) === '[object Number]';
    },
    isBoolean: function isBoolean(obj) {
        return toString.call(obj) === '[object Boolean]';
    },
    isArray: function isArray(obj) {
        return Array.isArray(obj);
    },
    isFile: function isFile(p) {
        p = (typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object' ? _path2.default.join(p.dir, p.base) : p;
        if (!_fs2.default.existsSync(p)) {
            return false;
        }
        return _fs2.default.statSync(p).isFile();
    },
    isDir: function isDir(p) {
        if (!_fs2.default.existsSync(p)) {
            return false;
        }
        return _fs2.default.statSync(p).isDirectory();
    },

    /**
     * xml dom 对 TEXT_NODE 和 ATTRIBUTE_NODE 进行转义。
     */
    decode: function decode(content) {
        var pmap = ['<', '&', '"'];
        var amap = ['&lt;', '&amp;', '&quot;'];
        var reg = new RegExp('(' + amap[0] + '|' + amap[1] + '|' + amap[2] + ')', 'ig');
        return content.replace(reg, function (match, m) {
            return pmap[amap.indexOf(m)];
        });
    },
    encode: function encode(content, start, end) {
        start = start || 0;
        end = end || content.length;

        var buffer = [];
        var pmap = ['<', '&', '"'];
        var amap = ['&lt;', '&amp;', '&quot;'];

        var i = 0,
            c = void 0;
        for (var _i = 0, len = content.length; _i < len; _i++) {
            if (_i < start || _i > end) {
                buffer.push(content[_i]);
            } else {
                c = pmap.indexOf(content[_i]);
                buffer.push(c === -1 ? content[_i] : amap[c]);
            }
        }
        return buffer.join('');
    },

    /**
     * xml replace
     */
    attrReplace: function attrReplace(content) {
        var config = utils.getConfig();
        var knownTags = [
        // 视图容器
        'view', 'scroll-view', 'swiper', 'swiper-item',

        // 基础内容
        'icon', 'text', 'progress',

        // 表单组件
        'button', 'checkbox-group', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'picker-view-column', 'radio-group', 'radio', 'slider', 'switch', 'textarea',

        // 导航
        'navigator',

        // 媒体组件
        'audio', 'image', 'video',

        // 地图
        'map',

        // 画布
        'canvas',

        // 客服会话
        'contact-button'];
        var configTags = config.knownTags;
        if (configTags && Array.isArray(configTags)) {
            // 增加可配置的 knownTags
            // 以防止由于小程序升级 上边的默认tag不完全导致的问题
            // 如果说小程序升级的话 在 wepy 没升级的情况下
            // 用户可以通过临时加入 knownTags 的方法兼容
            knownTags.push.apply(knownTags, configTags);
        }
        // Exp error when using this code: <input focus wx:if="{{test >   
        return content.replace(/<([\w-]+)\s*[\s\S]*?(\/|<\/[\w-]+)>/ig, function (tag, tagName) {
            tagName = tagName.toLowerCase();
            return tag.replace(/\s+:([\w-_]*)([\.\w]*)\s*=/ig, function (attr, name, type) {
                // replace :param.sync => v-bind:param.sync
                if (type === '.once' || type === '.sync') {} else type = '.once';
                return ' v-bind:' + name + type + '=';
            }).replace(/\s+\@([\w-_]*)([\.\w]*)\s*=/ig, function (attr, name, type) {
                // replace @change => v-on:change
                var prefix = type !== '.user' ? type === '.stop' ? 'catch' : 'bind' : 'v-on:';
                return ' ' + prefix + name + '=';
            });
        });
    },

    /**
     * get indent of a mutiple lines string
     * return {length: 4, char: ' '}
     */
    getIndent: function getIndent(str) {
        var arr = str.split('\n');
        while (arr.length && !/\w/.test(arr[0])) {
            // if the first line is empty line, then get rid of it
            arr.shift();
        }
        var indent = { firstLineIndent: 0, indent: 0, char: '' };
        var s = arr[0],
            i = 0;
        if (s.charCodeAt(0) === 32 || s.charCodeAt(0) === 9) {
            // 32 is space, 9 is tab
            indent.char = s[0];
        }
        while (s[i] === indent.char) {
            i++;
        }
        indent.firstLineIndent = i;
        if (!arr[1]) return indent;
        s = arr[1], i = 0;
        if (!indent.char) {
            if (s.charCodeAt(0) === 32 || s.charCodeAt(0) === 9) {
                // 32 is space, 9 is tab
                indent.char = s[0];
            }
        }
        while (s[i] === indent.char) {
            i++;
        }
        indent.indent = i - indent.firstLineIndent;
        return indent;
    },

    /**
     * Fix indent for a mutiple lines string
     * @param  {String} str  string to fix
     * @param  {Number} num  4 means add 4 chars to each line, -4 means remove 4 chars for each line
     * @param  {String} char space or tab, indent charactor
     * @return {String}      fixed indent string
     */
    fixIndent: function fixIndent(str, num, char) {
        if (char === undefined) {
            var indent = getIndent(str);
            char = indent.char;
        }
        var arr = str.split('\n');
        if (num > 0) {
            // added char to each line
            arr.forEach(function (v, i) {
                var p = 0;
                while (p++ < num) {
                    arr[i] = char + arr[i];
                }
            });
        } else {
            // remove char for each line
            arr.forEach(function (v, i) {
                arr[i] = arr[i].substr(-1 * num);
            });
        }
        return arr.join('\n');
    },
    unique: function unique(arr) {
        var tmp = {},
            out = [];
        arr.forEach(function (v) {
            if (!tmp[v]) {
                tmp[v] = 1;
                out.push(v);
            }
        });
        return out;
    },
    unlink: function unlink(p) {
        var rst = '';
        p = (typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object' ? _path2.default.join(p.dir, p.base) : p;
        try {
            rst = _fs2.default.unlinkSync(p);
        } catch (e) {
            rst = null;
        }
        return rst;
    },
    readFile: function readFile(p) {
        var rst = '';
        p = (typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object' ? _path2.default.join(p.dir, p.base) : p;
        try {
            rst = _fs2.default.readFileSync(p, 'utf-8');
        } catch (e) {
            rst = null;
        }
        return rst;
    },
    mkdir: function mkdir(name) {
        var rst = true;
        try {
            _fs2.default.mkdirSync(name);
        } catch (e) {
            rst = e;
        }
        return rst;
    },
    writeFile: function writeFile(p, data) {
        var opath = this.isString(p) ? _path2.default.parse(p) : p;
        if (!this.isDir(opath.dir)) {
            _mkdirp2.default.sync(opath.dir);
        }
        _fs2.default.writeFileSync(p, data);
    },
    copy: function copy(opath, ext, src, dist) {
        var target = this.getDistPath(opath, ext, src, dist);
        this.writeFile(target, this.readFile(_path2.default.join(opath.dir, opath.base)));
        var readable = _fs2.default.createReadStream(_path2.default.join(opath.dir, opath.base));
        var writable = _fs2.default.createWriteStream(target);
        readable.pipe(writable);
    },
    getRelative: function getRelative(opath) {
        return _path2.default.relative(this.currentDir, _path2.default.join(opath.dir, opath.base));
    },
    getDistPath: function getDistPath(opath, ext, src, dist) {
        var relative = void 0;
        src = src || _cache2.default.getSrc();
        dist = dist || _cache2.default.getDist();
        if (typeof opath === 'string') opath = _path2.default.parse(opath);
        ext = ext ? ext[0] === '.' ? ext : '.' + ext : opath.ext;
        // 第三组件
        // 相对目录以node_modules开始
        if (_path2.default.relative(this.currentDir, opath.dir).indexOf('node_modules') === 0) {
            // if (opath.dir.indexOf(`${path.sep}${src}${path.sep}`) === -1 && opath.dir.indexOf('node_modules') > 1) {
            relative = _path2.default.relative(_path2.default.join(this.currentDir, 'node_modules'), opath.dir);
            relative = _path2.default.join('npm', relative);
        } else {
            relative = _path2.default.relative(_path2.default.join(this.currentDir, src), opath.dir);
        }
        return _path2.default.join(this.currentDir, dist, relative, opath.name + ext);
    },
    getModifiedTime: function getModifiedTime(p) {
        return this.isFile(p) ? +_fs2.default.statSync(p).mtime : false;
    },
    getConfig: function getConfig() {
        var config = _cache2.default.getConfig();
        if (config) return config;

        var configFile = _path2.default.join(this.currentDir, _path2.default.sep, 'wepy.config.js');
        var configType = 'js';

        if (!this.isFile(configFile)) {
            configFile = _path2.default.join(this.currentDir, _path2.default.sep, '.wepyrc');

            config = this.readFile(configFile);
            try {
                config = JSON.parse(config);
            } catch (e) {
                config = null;
            }
        } else {
            config = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        }

        _cache2.default.setConfig(config);
        return config;
    },
    getIgnore: function getIgnore() {
        var ignoreFile = _path2.default.join(this.currentDir, _path2.default.sep, '.wepyignore');
        return this.isFile(ignoreFile) ? this.readFile(ignoreFile) : '';
    },
    getFiles: function getFiles() {
        var _this = this;

        var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.cwd();
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        var cfiles = _cache2.default.getFileList(dir);
        if (cfiles) return cfiles;
        dir = _path2.default.normalize(dir);
        if (!_fs2.default.existsSync(dir)) {
            return [];
        }
        var files = _fs2.default.readdirSync(dir);
        var rst = [];
        files.forEach(function (item) {
            var filepath = dir + _path2.default.sep + item;
            var stat = _fs2.default.statSync(filepath);
            if (stat.isFile()) {
                rst.push(prefix + item);
            } else if (stat.isDirectory()) {
                rst = rst.concat(_this.getFiles(_path2.default.normalize(dir + _path2.default.sep + item), _path2.default.normalize(prefix + item + _path2.default.sep)));
            }
        });

        _cache2.default.setFileList(dir, rst);
        return rst;
    },
    getVersion: function getVersion() {
        var filepath = _path2.default.resolve(__dirname, '../package.json');
        var version = JSON.parse(this.readFile(filepath)).version;
        return version;
    },
    datetime: function datetime() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
        var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm:ss';

        var fn = function fn(d) {
            return ('0' + d).slice(-2);
        };
        if (date && this.isString(date)) {
            date = new Date(Date.parse(date));
        }
        var formats = {
            YYYY: date.getFullYear(),
            MM: fn(date.getMonth() + 1),
            DD: fn(date.getDate()),
            HH: fn(date.getHours()),
            mm: fn(date.getMinutes()),
            ss: fn(date.getSeconds())
        };
        return format.replace(/([a-z])\1+/ig, function (a) {
            return formats[a] || a;
        });
    },
    error: function error(msg) {
        this.log(msg, 'error', false);
    },
    warning: function warning(msg) {
        this.log(msg, 'warning', false);
    },
    log: function log(msg, type) {
        var showTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var dateTime = showTime ? _safe2.default.gray('[' + this.datetime() + '] ') : '';
        if (this.isObject(msg) || this.isArray(msg)) {
            msg = JSON.stringify(msg);
        }
        if (type && this.isString(type)) {
            type = type.toUpperCase();
            if (type === 'ERROR') {
                console.error(_safe2.default.red('[Error] ' + msg));
                //console.log();
            } else if (type === 'WARNING') {
                console.error(_safe2.default.yellow('[WARNING] ' + msg));
                //console.log();
            } else {
                var fn = _safe2.default[type] ? _safe2.default[type] : _safe2.default['info'];
                console.log(dateTime + fn('[' + type + ']') + ' ' + msg);
            }
        } else {
            console.log(dateTime + msg);
        }
    },
    output: function output(type, file, flag) {
        if (!flag) {
            flag = file.substr(file.lastIndexOf('.') + 1).toUpperCase();
            if (flag.length < 4) {
                var i = 4 - flag.length;
                while (i--) {
                    flag += ' ';
                }
            }
        }
        this.log(flag + ': ' + _path2.default.relative(this.currentDir, file), type);
    },
    genId: function genId(filepath) {
        if (!ID_CACHE[filepath]) {
            ID_CACHE[filepath] = '_' + (0, _hashSum2.default)(filepath).slice(1, 8);
        }
        return ID_CACHE[filepath];
    }
};
exports.default = utils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), "/"))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _compileTemplate = __webpack_require__(9);

var tt = '\n<template>\n  <div style="height:100%;display:flex;justify-content: center;align-items: center;">\n    <input type="text"> <br>\n    <p>{{token}}</p>\n    <p>{{userData}}</p>\n  </div>\n</template>';

console.log((0, _compileTemplate.getTemplate)(tt));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 */

function copy(src, dest) {
	for (var p in src) {
		dest[p] = src[p];
	}
}
/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class, Super) {
	var pt = Class.prototype;
	if (Object.create) {
		var ppt = Object.create(Super.prototype);
		pt.__proto__ = ppt;
	}
	if (!(pt instanceof Super)) {
		var t = function t() {};

		;
		t.prototype = Super.prototype;
		t = new t();
		copy(pt, t);
		Class.prototype = pt = t;
	}
	if (pt.constructor != Class) {
		if (typeof Class != 'function') {
			console.error("unknow Class:" + Class);
		}
		pt.constructor = Class;
	}
}
var htmlns = 'http://www.w3.org/1999/xhtml';
// Node Types
var NodeType = {};
var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
var TEXT_NODE = NodeType.TEXT_NODE = 3;
var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
var NOTATION_NODE = NodeType.NOTATION_NODE = 12;

// ExceptionCode
var ExceptionCode = {};
var ExceptionMessage = {};
var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
//level2
var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);

function DOMException(code, message) {
	if (message instanceof Error) {
		var error = message;
	} else {
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if (message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode, DOMException);
/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {};
NodeList.prototype = {
	/**
  * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
  * @standard level1
  */
	length: 0,
	/**
  * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
  * @standard level1
  * @param index  unsigned long 
  *   Index into the collection.
  * @return Node
  * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
  */
	item: function item(index) {
		return this[index] || null;
	},
	toString: function toString(isHTML, nodeFilter) {
		for (var buf = [], i = 0; i < this.length; i++) {
			serializeToString(this[i], buf, isHTML, nodeFilter);
		}
		return buf.join('');
	}
};
function LiveNodeList(node, refresh) {
	this._node = node;
	this._refresh = refresh;
	_updateLiveList(this);
}
function _updateLiveList(list) {
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if (list._inc != inc) {
		var ls = list._refresh(list._node);
		//console.log(ls.length)
		__set__(list, 'length', ls.length);
		copy(ls, list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function (i) {
	_updateLiveList(this);
	return this[i];
};

_extends(LiveNodeList, NodeList);
/**
 * 
 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */
function NamedNodeMap() {};

function _findNodeIndex(list, node) {
	var i = list.length;
	while (i--) {
		if (list[i] === node) {
			return i;
		}
	}
}

function _addNamedNode(el, list, newAttr, oldAttr) {
	if (oldAttr) {
		list[_findNodeIndex(list, oldAttr)] = newAttr;
	} else {
		list[list.length++] = newAttr;
	}
	if (el) {
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if (doc) {
			oldAttr && _onRemoveAttribute(doc, el, oldAttr);
			_onAddAttribute(doc, el, newAttr);
		}
	}
}
function _removeNamedNode(el, list, attr) {
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list, attr);
	if (i >= 0) {
		var lastIndex = list.length - 1;
		while (i < lastIndex) {
			list[i] = list[++i];
		}
		list.length = lastIndex;
		if (el) {
			var doc = el.ownerDocument;
			if (doc) {
				_onRemoveAttribute(doc, el, attr);
				attr.ownerElement = null;
			}
		}
	} else {
		throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + '@' + attr));
	}
}
NamedNodeMap.prototype = {
	length: 0,
	item: NodeList.prototype.item,
	getNamedItem: function getNamedItem(key) {
		//		if(key.indexOf(':')>0 || key == 'xmlns'){
		//			return null;
		//		}
		//console.log()
		var i = this.length;
		while (i--) {
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if (attr.nodeName == key) {
				return attr;
			}
		}
	},
	setNamedItem: function setNamedItem(attr) {
		var el = attr.ownerElement;
		if (el && el != this._ownerElement) {
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement, this, attr, oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function setNamedItemNS(attr) {
		// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement,
		    oldAttr;
		if (el && el != this._ownerElement) {
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
		_addNamedNode(this._ownerElement, this, attr, oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function removeNamedItem(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement, this, attr);
		return attr;
	}, // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR

	//for level2
	removeNamedItemNS: function removeNamedItemNS(namespaceURI, localName) {
		var attr = this.getNamedItemNS(namespaceURI, localName);
		_removeNamedNode(this._ownerElement, this, attr);
		return attr;
	},
	getNamedItemNS: function getNamedItemNS(namespaceURI, localName) {
		var i = this.length;
		while (i--) {
			var node = this[i];
			if (node.localName == localName && node.namespaceURI == namespaceURI) {
				return node;
			}
		}
		return null;
	}
};
/**
 * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
 */
function DOMImplementation( /* Object */features) {
	this._features = {};
	if (features) {
		for (var feature in features) {
			this._features = features[feature];
		}
	}
};

DOMImplementation.prototype = {
	hasFeature: function hasFeature( /* string */feature, /* string */version) {
		var versions = this._features[feature.toLowerCase()];
		if (versions && (!version || version in versions)) {
			return true;
		} else {
			return false;
		}
	},
	// Introduced in DOM Level 2:
	createDocument: function createDocument(namespaceURI, qualifiedName, doctype) {
		// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype;
		if (doctype) {
			doc.appendChild(doctype);
		}
		if (qualifiedName) {
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	// Introduced in DOM Level 2:
	createDocumentType: function createDocumentType(qualifiedName, publicId, systemId) {
		// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId;
		node.systemId = systemId;
		// Introduced in DOM Level 2:
		//readonly attribute DOMString        internalSubset;

		//TODO:..
		//  readonly attribute NamedNodeMap     entities;
		//  readonly attribute NamedNodeMap     notations;
		return node;
	}
};

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {};

Node.prototype = {
	firstChild: null,
	lastChild: null,
	previousSibling: null,
	nextSibling: null,
	attributes: null,
	parentNode: null,
	childNodes: null,
	ownerDocument: null,
	nodeValue: null,
	namespaceURI: null,
	prefix: null,
	localName: null,
	// Modified in DOM Level 2:
	insertBefore: function insertBefore(newChild, refChild) {
		//raises 
		return _insertBefore(this, newChild, refChild);
	},
	replaceChild: function replaceChild(newChild, oldChild) {
		//raises 
		this.insertBefore(newChild, oldChild);
		if (oldChild) {
			this.removeChild(oldChild);
		}
	},
	removeChild: function removeChild(oldChild) {
		return _removeChild(this, oldChild);
	},
	appendChild: function appendChild(newChild) {
		return this.insertBefore(newChild, null);
	},
	hasChildNodes: function hasChildNodes() {
		return this.firstChild != null;
	},
	cloneNode: function cloneNode(deep) {
		return _cloneNode(this.ownerDocument || this, this, deep);
	},
	// Modified in DOM Level 2:
	normalize: function normalize() {
		var child = this.firstChild;
		while (child) {
			var next = child.nextSibling;
			if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
				this.removeChild(next);
				child.appendData(next.data);
			} else {
				child.normalize();
				child = next;
			}
		}
	},
	// Introduced in DOM Level 2:
	isSupported: function isSupported(feature, version) {
		return this.ownerDocument.implementation.hasFeature(feature, version);
	},
	// Introduced in DOM Level 2:
	hasAttributes: function hasAttributes() {
		return this.attributes.length > 0;
	},
	lookupPrefix: function lookupPrefix(namespaceURI) {
		var el = this;
		while (el) {
			var map = el._nsMap;
			//console.dir(map)
			if (map) {
				for (var n in map) {
					if (map[n] == namespaceURI) {
						return n;
					}
				}
			}
			el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
		}
		return null;
	},
	// Introduced in DOM Level 3:
	lookupNamespaceURI: function lookupNamespaceURI(prefix) {
		var el = this;
		while (el) {
			var map = el._nsMap;
			//console.dir(map)
			if (map) {
				if (prefix in map) {
					return map[prefix];
				}
			}
			el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
		}
		return null;
	},
	// Introduced in DOM Level 3:
	isDefaultNamespace: function isDefaultNamespace(namespaceURI) {
		var prefix = this.lookupPrefix(namespaceURI);
		return prefix == null;
	}
};

function _xmlEncoder(c) {
	return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';
}

copy(NodeType, Node);
copy(NodeType, Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node, callback) {
	if (callback(node)) {
		return true;
	}
	if (node = node.firstChild) {
		do {
			if (_visitNode(node, callback)) {
				return true;
			}
		} while (node = node.nextSibling);
	}
}

function Document() {}
function _onAddAttribute(doc, el, newAttr) {
	doc && doc._inc++;
	var ns = newAttr.namespaceURI;
	if (ns == 'http://www.w3.org/2000/xmlns/') {
		//update namespace
		el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
	}
}
function _onRemoveAttribute(doc, el, newAttr, remove) {
	doc && doc._inc++;
	var ns = newAttr.namespaceURI;
	if (ns == 'http://www.w3.org/2000/xmlns/') {
		//update namespace
		delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
	}
}
function _onUpdateChild(doc, el, newChild) {
	if (doc && doc._inc) {
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if (newChild) {
			cs[cs.length++] = newChild;
		} else {
			//console.log(1)
			var child = el.firstChild;
			var i = 0;
			while (child) {
				cs[i++] = child;
				child = child.nextSibling;
			}
			cs.length = i;
		}
	}
}

/**
 * attributes;
 * children;
 * 
 * writeable properties:
 * nodeValue,Attr:value,CharacterData:data
 * prefix
 */
function _removeChild(parentNode, child) {
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if (previous) {
		previous.nextSibling = next;
	} else {
		parentNode.firstChild = next;
	}
	if (next) {
		next.previousSibling = previous;
	} else {
		parentNode.lastChild = previous;
	}
	_onUpdateChild(parentNode.ownerDocument, parentNode);
	return child;
}
/**
 * preformance key(refChild == null)
 */
function _insertBefore(parentNode, newChild, nextChild) {
	var cp = newChild.parentNode;
	if (cp) {
		cp.removeChild(newChild); //remove and update
	}
	if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
		var newFirst = newChild.firstChild;
		if (newFirst == null) {
			return newChild;
		}
		var newLast = newChild.lastChild;
	} else {
		newFirst = newLast = newChild;
	}
	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = nextChild;

	if (pre) {
		pre.nextSibling = newFirst;
	} else {
		parentNode.firstChild = newFirst;
	}
	if (nextChild == null) {
		parentNode.lastChild = newLast;
	} else {
		nextChild.previousSibling = newLast;
	}
	do {
		newFirst.parentNode = parentNode;
	} while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
	_onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);
	//console.log(parentNode.lastChild.nextSibling == null)
	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
		newChild.firstChild = newChild.lastChild = null;
	}
	return newChild;
}
function _appendSingleChild(parentNode, newChild) {
	var cp = newChild.parentNode;
	if (cp) {
		var pre = parentNode.lastChild;
		cp.removeChild(newChild); //remove and update
		var pre = parentNode.lastChild;
	}
	var pre = parentNode.lastChild;
	newChild.parentNode = parentNode;
	newChild.previousSibling = pre;
	newChild.nextSibling = null;
	if (pre) {
		pre.nextSibling = newChild;
	} else {
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
	return newChild;
	//console.log("__aa",parentNode.lastChild.nextSibling == null)
}
Document.prototype = {
	//implementation : null,
	nodeName: '#document',
	nodeType: DOCUMENT_NODE,
	doctype: null,
	documentElement: null,
	_inc: 1,

	insertBefore: function insertBefore(newChild, refChild) {
		//raises 
		if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
			var child = newChild.firstChild;
			while (child) {
				var next = child.nextSibling;
				this.insertBefore(child, refChild);
				child = next;
			}
			return newChild;
		}
		if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
			this.documentElement = newChild;
		}

		return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
	},
	removeChild: function removeChild(oldChild) {
		if (this.documentElement == oldChild) {
			this.documentElement = null;
		}
		return _removeChild(this, oldChild);
	},
	// Introduced in DOM Level 2:
	importNode: function importNode(importedNode, deep) {
		return _importNode(this, importedNode, deep);
	},
	// Introduced in DOM Level 2:
	getElementById: function getElementById(id) {
		var rtv = null;
		_visitNode(this.documentElement, function (node) {
			if (node.nodeType == ELEMENT_NODE) {
				if (node.getAttribute('id') == id) {
					rtv = node;
					return true;
				}
			}
		});
		return rtv;
	},

	//document factory method:
	createElement: function createElement(tagName) {
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.childNodes = new NodeList();
		var attrs = node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment: function createDocumentFragment() {
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode: function createTextNode(data) {
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data);
		return node;
	},
	createComment: function createComment(data) {
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data);
		return node;
	},
	createCDATASection: function createCDATASection(data) {
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data);
		return node;
	},
	createProcessingInstruction: function createProcessingInstruction(target, data) {
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.target = target;
		node.nodeValue = node.data = data;
		return node;
	},
	createAttribute: function createAttribute(name) {
		var node = new Attr();
		node.ownerDocument = this;
		node.name = name;
		node.nodeName = name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference: function createEntityReference(name) {
		var node = new EntityReference();
		node.ownerDocument = this;
		node.nodeName = name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS: function createElementNS(namespaceURI, qualifiedName) {
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs = node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if (pl.length == 2) {
			node.prefix = pl[0];
			node.localName = pl[1];
		} else {
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS: function createAttributeNS(namespaceURI, qualifiedName) {
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if (pl.length == 2) {
			node.prefix = pl[0];
			node.localName = pl[1];
		} else {
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document, Node);

function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType: ELEMENT_NODE,
	hasAttribute: function hasAttribute(name) {
		return this.getAttributeNode(name) != null;
	},
	getAttribute: function getAttribute(name) {
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode: function getAttributeNode(name) {
		return this.attributes.getNamedItem(name);
	},
	setAttribute: function setAttribute(name, value) {
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr);
	},
	removeAttribute: function removeAttribute(name) {
		var attr = this.getAttributeNode(name);
		attr && this.removeAttributeNode(attr);
	},

	//four real opeartion method
	appendChild: function appendChild(newChild) {
		if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
			return this.insertBefore(newChild, null);
		} else {
			return _appendSingleChild(this, newChild);
		}
	},
	setAttributeNode: function setAttributeNode(newAttr) {
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS: function setAttributeNodeNS(newAttr) {
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode: function removeAttributeNode(oldAttr) {
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS: function removeAttributeNS(namespaceURI, localName) {
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},

	hasAttributeNS: function hasAttributeNS(namespaceURI, localName) {
		return this.getAttributeNodeNS(namespaceURI, localName) != null;
	},
	getAttributeNS: function getAttributeNS(namespaceURI, localName) {
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS: function setAttributeNS(namespaceURI, qualifiedName, value) {
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr);
	},
	getAttributeNodeNS: function getAttributeNodeNS(namespaceURI, localName) {
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},

	getElementsByTagName: function getElementsByTagName(tagName) {
		return new LiveNodeList(this, function (base) {
			var ls = [];
			_visitNode(base, function (node) {
				if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)) {
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS: function getElementsByTagNameNS(namespaceURI, localName) {
		return new LiveNodeList(this, function (base) {
			var ls = [];
			_visitNode(base, function (node) {
				if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)) {
					ls.push(node);
				}
			});
			return ls;
		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;

_extends(Element, Node);
function Attr() {};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);

function CharacterData() {};
CharacterData.prototype = {
	data: '',
	substringData: function substringData(offset, count) {
		return this.data.substring(offset, offset + count);
	},
	appendData: function appendData(text) {
		text = this.data + text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function insertData(offset, text) {
		this.replaceData(offset, 0, text);
	},
	appendChild: function appendChild(newChild) {
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
	},
	deleteData: function deleteData(offset, count) {
		this.replaceData(offset, count, "");
	},
	replaceData: function replaceData(offset, count, text) {
		var start = this.data.substring(0, offset);
		var end = this.data.substring(offset + count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
};
_extends(CharacterData, Node);
function Text() {};
Text.prototype = {
	nodeName: "#text",
	nodeType: TEXT_NODE,
	splitText: function splitText(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if (this.parentNode) {
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
};
_extends(Text, CharacterData);
function Comment() {};
Comment.prototype = {
	nodeName: "#comment",
	nodeType: COMMENT_NODE
};
_extends(Comment, CharacterData);

function CDATASection() {};
CDATASection.prototype = {
	nodeName: "#cdata-section",
	nodeType: CDATA_SECTION_NODE
};
_extends(CDATASection, CharacterData);

function DocumentType() {};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);

function Notation() {};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);

function Entity() {};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);

function EntityReference() {};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);

function DocumentFragment() {};
DocumentFragment.prototype.nodeName = "#document-fragment";
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);

function ProcessingInstruction() {}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, Node);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function (node, isHtml, nodeFilter) {
	return nodeSerializeToString.call(node, isHtml, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml, nodeFilter) {
	var buf = [];
	var refNode = this.nodeType == 9 ? this.documentElement : this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;

	if (uri && prefix == null) {
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if (prefix == null) {
			//isHTML = true;
			var visibleNamespaces = [{ namespace: uri, prefix: null
				//{namespace:uri,prefix:''}
			}];
		}
	}
	serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}
function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	if (!prefix && !uri) {
		return false;
	}
	if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" || uri == 'http://www.w3.org/2000/xmlns/') {
		return false;
	}

	var i = visibleNamespaces.length;
	//console.log('@@@@',node.tagName,prefix,uri,visibleNamespaces)
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		//console.log(node.nodeType,node.tagName,ns.prefix,prefix)
		if (ns.prefix == prefix) {
			return ns.namespace != uri;
		}
	}
	//console.log(isHTML,uri,prefix=='')
	//if(isHTML && prefix ==null && uri == 'http://www.w3.org/1999/xhtml'){
	//	return false;
	//}
	//node.flag = '11111'
	//console.error(3,true,node.flag,node.prefix,node.namespaceURI)
	return true;
}
function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
	if (nodeFilter) {
		node = nodeFilter(node);
		if (node) {
			if (typeof node == 'string') {
				buf.push(node);
				return;
			}
		} else {
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}
	switch (node.nodeType) {
		case ELEMENT_NODE:
			if (!visibleNamespaces) visibleNamespaces = [];
			var startVisibleNamespaces = visibleNamespaces.length;
			var attrs = node.attributes;
			var len = attrs.length;
			var child = node.firstChild;
			var nodeName = node.tagName;

			isHTML = htmlns === node.namespaceURI || isHTML;
			buf.push('<', nodeName);

			for (var i = 0; i < len; i++) {
				// add namespaces for attributes
				var attr = attrs.item(i);
				if (attr.prefix == 'xmlns') {
					visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
				} else if (attr.nodeName == 'xmlns') {
					visibleNamespaces.push({ prefix: '', namespace: attr.value });
				}
			}
			for (var i = 0; i < len; i++) {
				var attr = attrs.item(i);
				if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
					var prefix = attr.prefix || '';
					var uri = attr.namespaceURI;
					var ns = prefix ? ' xmlns:' + prefix : " xmlns";
					buf.push(ns, '="', uri, '"');
					visibleNamespaces.push({ prefix: prefix, namespace: uri });
				}
				serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
			}
			// add namespace for current node		
			if (needNamespaceDefine(node, isHTML, visibleNamespaces)) {
				var prefix = node.prefix || '';
				var uri = node.namespaceURI;
				var ns = prefix ? ' xmlns:' + prefix : " xmlns";
				buf.push(ns, '="', uri, '"');
				visibleNamespaces.push({ prefix: prefix, namespace: uri });
			}

			if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
				buf.push('>');
				//if is cdata child node
				if (isHTML && /^script$/i.test(nodeName)) {
					while (child) {
						if (child.data) {
							buf.push(child.data);
						} else {
							serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
						}
						child = child.nextSibling;
					}
				} else {
					while (child) {
						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
						child = child.nextSibling;
					}
				}
				buf.push('</', nodeName, '>');
			} else {
				buf.push('/>');
			}
			// remove added visible namespaces
			//visibleNamespaces.length = startVisibleNamespaces;
			return;
		case DOCUMENT_NODE:
		case DOCUMENT_FRAGMENT_NODE:
			var child = node.firstChild;
			while (child) {
				serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
				child = child.nextSibling;
			}
			return;
		case ATTRIBUTE_NODE:
			return buf.push(' ', node.name, '="', node.value.replace(/[<&"]/g, _xmlEncoder), '"');
		case TEXT_NODE:
			return buf.push(node.data.replace(/[<&]/g, _xmlEncoder));
		case CDATA_SECTION_NODE:
			return buf.push('<![CDATA[', node.data, ']]>');
		case COMMENT_NODE:
			return buf.push("<!--", node.data, "-->");
		case DOCUMENT_TYPE_NODE:
			var pubid = node.publicId;
			var sysid = node.systemId;
			buf.push('<!DOCTYPE ', node.name);
			if (pubid) {
				buf.push(' PUBLIC "', pubid);
				if (sysid && sysid != '.') {
					buf.push('" "', sysid);
				}
				buf.push('">');
			} else if (sysid && sysid != '.') {
				buf.push(' SYSTEM "', sysid, '">');
			} else {
				var sub = node.internalSubset;
				if (sub) {
					buf.push(" [", sub, "]");
				}
				buf.push(">");
			}
			return;
		case PROCESSING_INSTRUCTION_NODE:
			return buf.push("<?", node.target, " ", node.data, "?>");
		case ENTITY_REFERENCE_NODE:
			return buf.push('&', node.nodeName, ';');
		//case ENTITY_NODE:
		//case NOTATION_NODE:
		default:
			buf.push('??', node.nodeName);
	}
}
function _importNode(doc, node, deep) {
	var node2;
	switch (node.nodeType) {
		case ELEMENT_NODE:
			node2 = node.cloneNode(false);
			node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
		//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
		case DOCUMENT_FRAGMENT_NODE:
			break;
		case ATTRIBUTE_NODE:
			deep = true;
			break;
		//case ENTITY_REFERENCE_NODE:
		//case PROCESSING_INSTRUCTION_NODE:
		////case TEXT_NODE:
		//case CDATA_SECTION_NODE:
		//case COMMENT_NODE:
		//	deep = false;
		//	break;
		//case DOCUMENT_NODE:
		//case DOCUMENT_TYPE_NODE:
		//cannot be imported.
		//case ENTITY_NODE:
		//case NOTATION_NODE：
		//can not hit in level3
		//default:throw e;
	}
	if (!node2) {
		node2 = node.cloneNode(false); //false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if (deep) {
		var child = node.firstChild;
		while (child) {
			node2.appendChild(_importNode(doc, child, deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function _cloneNode(doc, node, deep) {
	var node2 = new node.constructor();
	for (var n in node) {
		var v = node[n];
		if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) != 'object') {
			if (v != node2[n]) {
				node2[n] = v;
			}
		}
	}
	if (node.childNodes) {
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
		case ELEMENT_NODE:
			var attrs = node.attributes;
			var attrs2 = node2.attributes = new NamedNodeMap();
			var len = attrs.length;
			attrs2._ownerElement = node2;
			for (var i = 0; i < len; i++) {
				node2.setAttributeNode(_cloneNode(doc, attrs.item(i), true));
			}
			break;;
		case ATTRIBUTE_NODE:
			deep = true;
	}
	if (deep) {
		var child = node.firstChild;
		while (child) {
			node2.appendChild(_cloneNode(doc, child, deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object, key, value) {
	object[key] = value;
}
//do dynamic
try {
	if (Object.defineProperty) {
		var getTextContent = function getTextContent(node) {
			switch (node.nodeType) {
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					var buf = [];
					node = node.firstChild;
					while (node) {
						if (node.nodeType !== 7 && node.nodeType !== 8) {
							buf.push(getTextContent(node));
						}
						node = node.nextSibling;
					}
					return buf.join('');
				default:
					return node.nodeValue;
			}
		};

		Object.defineProperty(LiveNodeList.prototype, 'length', {
			get: function get() {
				_updateLiveList(this);
				return this.$$length;
			}
		});
		Object.defineProperty(Node.prototype, 'textContent', {
			get: function get() {
				return getTextContent(this);
			},
			set: function set(data) {
				switch (this.nodeType) {
					case ELEMENT_NODE:
					case DOCUMENT_FRAGMENT_NODE:
						while (this.firstChild) {
							this.removeChild(this.firstChild);
						}
						if (data || String(data)) {
							this.appendChild(this.ownerDocument.createTextNode(data));
						}
						break;
					default:
						//TODO:
						this.data = data;
						this.value = data;
						this.nodeValue = data;
				}
			}
		});

		__set__ = function __set__(object, key, value) {
			//console.log(value)
			object['$$' + key] = value;
		};
	}
} catch (e) {} //ie8


//if(typeof require == 'function'){
exports.DOMImplementation = DOMImplementation;
exports.XMLSerializer = XMLSerializer;
//}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cachePath = '.wepycache';
var _buildCache = null;
var _cacheChanged = false;
var _filelistCache = {};

exports.default = {
    setParams: function setParams(v) {
        this._params = v;
    },
    getParams: function getParams() {
        return this._params;
    },
    setExt: function setExt(v) {
        this._ext = v;
    },
    getExt: function getExt() {
        return this._ext || '.wpy';
    },
    getSrc: function getSrc() {
        return this._src || 'src';
    },
    setSrc: function setSrc() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'src';

        this._src = v;
    },
    getDist: function getDist() {
        return this._dist || 'dist';
    },
    setDist: function setDist() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dist';

        this._dist = v;
    },
    setPages: function setPages() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        this._pages = v;
    },
    getPages: function getPages() {
        return this._pages || [];
    },
    getConfig: function getConfig() {
        return this._config || null;
    },
    setConfig: function setConfig() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        this._config = v;
    },
    setFileList: function setFileList(key, v) {
        _filelistCache[key] = v;
    },
    getFileList: function getFileList(key) {
        return _filelistCache[key] || null;
    },
    getBuildCache: function getBuildCache(file) {
        if (_buildCache) return _buildCache;

        if (_util2.default.isFile(cachePath)) {
            _buildCache = _util2.default.readFile(cachePath);
            try {
                _buildCache = JSON.parse(_buildCache);
            } catch (e) {
                _buildCache = null;
            }
        }

        return _buildCache || {};
    },
    setBuildCache: function setBuildCache(file) {
        var cache = this.getBuildCache();
        cache[file] = _util2.default.getModifiedTime(file);
        _buildCache = cache;
        _cacheChanged = true;
    },
    clearBuildCache: function clearBuildCache() {
        _util2.default.unlink(cachePath);
    },
    saveBuildCache: function saveBuildCache() {
        if (_cacheChanged) {
            _util2.default.writeFile(cachePath, JSON.stringify(_buildCache));
            _cacheChanged = false;
        }
    },
    checkBuildCache: function checkBuildCache(file) {
        var cache = this.getBuildCache();
        return cache[file] && cache[file] === _util2.default.getModifiedTime(file);
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(4);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _xmldom = __webpack_require__(10);

var _path = __webpack_require__(0);

var _path2 = _interopRequireDefault(_path);

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

var _cache = __webpack_require__(6);

var _cache2 = _interopRequireDefault(_cache);

var _compileWpy = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./compile-wpy\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _compileWpy2 = _interopRequireDefault(_compileWpy);

var _loader = __webpack_require__(24);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = '$';
var JOIN = '$';

var BOOLEAN_ATTRS = ['wx:else', 'show-info', 'active', 'controls', 'danmu-btn', 'enable-danmu', 'autoplay', 'disabled', 'show-value', 'checked', 'scroll-x', 'scroll-y', 'auto-focus', 'focus', 'auto-height', 'password', 'indicator-dots', 'report-submit', 'hidden', 'plain', 'loading', 'redirect', 'loop', 'controls'];

exports.default = {
    comPrefix: {},
    comCount: 0,
    getPrefix: function getPrefix(prefix) {
        return prefix;
        if (this.comPrefix[prefix]) return this.comPrefix[prefix];
        this.comPrefix[prefix] = this.comCount++;
        return this.comPrefix[prefix];
    },
    getTemplate: function getTemplate(content) {
        content = '<template>' + content + '</template>';
        content = _util2.default.attrReplace(content);
        var doc = new _xmldom.DOMImplementation().createDocument();
        var node = _compileWpy2.default.createParser().parseFromString(content);
        var template = [].slice.call(node.childNodes || []).filter(function (n) {
            return n.nodeName === 'template';
        });

        [].slice.call(template[0].childNodes || []).forEach(function (n) {
            doc.appendChild(n);
        });
        return doc;
    },
    isInQuote: function isInQuote(str, n) {
        var firstIndex = str.search(/"|'/);
        if (firstIndex === -1 || firstIndex > n) return false;
        var char = '';
        var last = '';
        for (var i = 0; i < n; i++) {
            var c = str[i];
            if (c === '"' || c === '\'') {
                if (!char) {
                    char = c;
                } else if (char === c && last !== '\\') {
                    char = '';
                }
            }
            last = c;
        }
        return char !== '';
    },
    getFunctionInfo: function getFunctionInfo(str) {
        var rst = { name: '', params: [] },
            char = '',
            tmp = '',
            stack = [];
        for (var i = 0, len = str.length; i < len; i++) {
            char = str[i];
            if (!rst.name) {
                if (char === '(') {
                    rst.name = tmp;
                    tmp = '';
                    continue;
                }
            }
            if ((char === ',' || char === ')') && stack.length === 0) {
                var p = tmp.replace(/^\s*/ig, '').replace(/\s*$/ig, '');
                if (p && (p[0] === '"' || p[0] === '\'') && p[0] === p[p.length - 1]) {
                    p = p.substring(1, p.length - 1);
                }
                rst.params.push(p);
                tmp = '';
                continue;
            }
            if (char === '\'' || char === '"') {
                if (stack.length && stack[stack.length - 1] === char) stack.pop();else stack.push(char);
            }
            tmp += char;
        }
        return rst;
    },


    // 替换xmldom生成的无值属性
    replaceBooleanAttr: function replaceBooleanAttr(code) {
        var reg = void 0;
        BOOLEAN_ATTRS.forEach(function (v) {
            reg = new RegExp(v + '=[\'"]' + v + '[\'"]', 'ig');
            code = code.replace(reg, v);
        });
        return code;
    },
    parseExp: function parseExp(content, prefix, ignores, mapping) {
        var _this = this;

        var comid = this.getPrefix(prefix);
        // replace {{ param ? 'abc' : 'efg' }} => {{ $prefix_param ? 'abc' : 'efg' }}
        return content.replace(/\{\{([^}]+)\}\}/ig, function (matchs, words) {
            return matchs.replace(/[^\.\w'"](\.{0}|\.{3})([a-z_\$][\w\d\._\$]*)/ig, function (match, expand, word, n) {
                //console.log(matchs + '------' + match + '--' + word + '--' + n);
                var char = match[0];
                var tmp = word.match(/^([\w\$]+)(.*)/);
                var w = tmp[1];
                var rest = tmp[2];
                if (ignores[w] || _this.isInQuote(matchs, n)) {
                    return match;
                } else {
                    if (mapping.items && mapping.items[w]) {
                        // prefix 减少一层
                        var upper = comid.split(PREFIX);
                        upper.pop();
                        upper = upper.join(PREFIX);
                        upper = upper ? '' + PREFIX + upper + JOIN : '';
                        return '' + char + expand + upper + mapping.items[w].mapping + rest;
                    }
                    return '' + char + expand + PREFIX + comid + JOIN + word;
                }
            });
        });
    },


    /**
     * Get :class expression
     * e.g. getClassExp('{"abc": num < 1}');
     */
    parseClassExp: function parseClassExp(exp) {
        exp = exp.replace(/^\s/ig, '').replace(/\s$/ig, '');
        if (exp[0] === '{' && exp[exp.length - 1] === '}') {
            exp = exp.substring(1, exp.length - 1);
            var i = 0,
                len = exp.length;
            var flagStack = [],
                flag = 'start';
            var classNames = [],
                result = {},
                str = '';
            for (i = 0; i < len; i++) {
                if (exp[i] === '\'' || exp[i] === '"') {
                    if (flagStack.length && flagStack[0] === exp[i]) {
                        flagStack.pop();
                        if (flag === 'class') {
                            flag = ':';
                            continue;
                        } else if (flag === 'expression') {
                            str += exp[i];
                            continue;
                        }
                    } else {
                        if (flagStack.length === 0) {
                            flagStack.push(exp[i]);
                            if (flag === 'start') {
                                flag = 'class';
                                continue;
                            } else if (flag === 'expression') {
                                str += exp[i];
                                continue;
                            }
                        }
                    }
                }
                // {abc: num < 1} or {'abc': num <１}
                if (exp[i] === ':' && (flag === ':' || flag === 'class') && flagStack.length === 0) {
                    flag = 'expression';
                    classNames.push(str);
                    str = '';
                    continue;
                }
                if (exp[i] === ',' && flag === 'expression' && flagStack.length === 0) {
                    result[classNames[classNames.length - 1]] = str.replace(/^\s/ig, '').replace(/\s$/ig, '');;
                    str = '';
                    flag = 'start';
                    continue;
                }
                // get rid of the begining space
                if (!str.length && exp[i] === ' ') continue;

                // not started with '', like {abc: num < 1}
                if (flag === 'start') {
                    flag = 'class';
                }

                if (flag === 'class' || flag === 'expression') {
                    str += exp[i];
                }
            }
            if (str.length) {
                result[classNames[classNames.length - 1]] = str.replace(/^\s/ig, '').replace(/\s$/ig, '');
            }
            return result;
        } else {
            throw ':class expression is not correct, it has to be {\'className\': mycondition}';
        }
    },


    // 通过mapping一层层映射，反应到属性上
    getMappingIndex: function getMappingIndex(mapping, arr) {
        if (!arr) arr = [];

        if (mapping === null) return arr.reverse();

        var val = mapping.prefix ? '' + PREFIX + mapping.prefix + JOIN + mapping.for.index : mapping.for.index;
        arr.push('{{' + val + '}}');
        return this.getMappingIndex(mapping.parent, arr);
    },
    updateBind: function updateBind(node, prefix) {
        var _this2 = this;

        var ignores = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var mapping = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


        var comid = prefix ? this.getPrefix(prefix) : '';

        if (node.nodeName === '#text' && prefix) {
            if (node.data && node.data.indexOf('{{') > -1) {
                node.replaceData(0, node.data.length, this.parseExp(node.data, prefix, ignores, mapping));
            }
        } else {
            [].slice.call(node.attributes || []).forEach(function (attr) {
                if (attr.name === 'v-bind:class.once') {
                    var classObject = _this2.parseClassExp(attr.value);
                    var classArray = (node.getAttribute('class') || '').split(' ').map(function (v) {
                        return v.replace(/^\s/ig, '').replace(/\s$/ig, '');
                    });
                    if (classArray.length === 1 && classArray[0] === '') classArray = [];
                    for (var k in classObject) {
                        var exp = classObject[k].replace(/\'/ig, '\\\'').replace(/\"/ig, '\\"');
                        var name = k.replace(/\'/ig, '\\\'').replace(/\"/ig, '\\"');
                        var index = classArray.indexOf(name);
                        if (index !== -1) {
                            classArray.splice(index, 1);
                        }
                        exp = '{{' + exp + ' ? \'' + name + '\' : \'\'}}';
                        classArray.push(_this2.parseExp(exp, prefix, ignores, mapping));
                    }
                    node.setAttribute('class', classArray.join(' '));
                    node.removeAttribute(attr.name);
                }
                if (prefix) {
                    if (attr.value.indexOf('{{') > -1) {
                        attr.value = _this2.parseExp(attr.value, prefix, ignores, mapping);
                    }
                    if (attr.name === 'wx:for' || attr.name === 'wx:for-items') {
                        var _index = node.getAttribute('wx:for-index') || 'index';
                        var item = node.getAttribute('wx:for-item') || 'item';
                        ignores[_index] = true;
                        ignores[item] = true;
                        //attr.value = parseExp(attr.value, prefix, ignores);
                    }
                }
                // bindtap="abc" => bindtap="prefix_abc"
                if (attr.name.indexOf('bind') === 0 || attr.name.indexOf('catch') === 0) {
                    // added index for all events;
                    if (mapping.items && mapping.items.length > 0) {
                        // prefix 减少一层
                        var upper = comid.split(PREFIX);
                        upper.pop();
                        upper = upper.join(PREFIX);
                        upper = upper ? '' + PREFIX + upper + JOIN : '';
                        var comIndex = _this2.getMappingIndex(mapping);
                        node.setAttribute('data-com-index', comIndex.join('-'));
                    }
                    if (attr.value.indexOf('(') > 0) {
                        // method('{{p}}', 123);
                        var funcInfo = _this2.getFunctionInfo(attr.value);
                        attr.value = funcInfo.name;
                        funcInfo.params.forEach(function (p, i) {
                            node.setAttribute('data-wepy-params-' + String.fromCharCode(97 + i), p);
                        });
                    }
                    if (prefix) attr.value = '' + PREFIX + comid + JOIN + attr.value;
                }
            });
            [].slice.call(node.childNodes || []).forEach(function (child) {
                _this2.updateBind(child, prefix, ignores, mapping);
            });
        }
        return node;
    },
    updateSlot: function updateSlot(node, childNodes) {
        var slots = {},
            has = void 0;
        if (!childNodes || childNodes.length === 0) slots = {};else {
            [].slice.call(childNodes || []).forEach(function (child) {
                var name = child.nodeName === '#text' || child.nodeName === '#comment' ? '' : child.getAttribute('slot');

                if (!name) {
                    name = '$$default';
                }
                if (slots[name]) slots[name].push(child);else slots[name] = [child];
            });
        }

        var slotsElems = _util2.default.elemToArray(node.getElementsByTagName('slot'));

        slotsElems.forEach(function (slot) {
            var name = slot.getAttribute('name');
            if (!name) name = '$$default';

            // 无内容时，用子内容替换
            var replacements = slots[name] && slots[name].length > 0 ? slots[name] : [].slice.call(slot.childNodes || []);

            var doc = new _xmldom.DOMImplementation().createDocument();
            replacements.forEach(function (n) {
                if (name !== '$$default' && n.nodeName !== '#text' && n.nodeName !== '#comment') n.removeAttribute('slot');
                doc.appendChild(n);
            });

            node.replaceChild(doc, slot);
        });
        return node;
    },
    compileXML: function compileXML(node, template, prefix, childNodes) {
        var _this3 = this;

        var comAppendAttribute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        var propsMapping = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};


        this.updateSlot(node, childNodes);

        this.updateBind(node, prefix, {}, propsMapping);

        if (node && node.documentElement) {
            Object.keys(comAppendAttribute).forEach(function (key) {
                node.documentElement.setAttribute(key, comAppendAttribute[key]);
            });
        }

        var repeats = _util2.default.elemToArray(node.getElementsByTagName('repeat'));

        var forDetail = {};
        template.props = {};
        repeats.forEach(function (repeat) {
            var repeatComs = [];
            // <repeat for="xxx" index="idx" item="xxx" key="xxx"></repeat>
            //                    To
            // <block wx:for="xxx" wx:for-index="xxx" wx:for-item="xxx" wx:key="xxxx"></block>
            repeat.tagName = 'block';
            var val = repeat.getAttribute('for');
            if (val) {
                repeat.setAttribute('wx:for', val);
                repeat.removeAttribute('for');
                ['index', 'item', 'key'].forEach(function (attr) {
                    var val = repeat.getAttribute(attr);
                    var tag = attr === 'key' ? 'wx:key' : 'wx:for-' + attr;
                    val = val || attr;
                    forDetail[attr] = val;

                    if (prefix) {
                        repeat.setAttribute(tag, '' + PREFIX + prefix + JOIN + val);
                    } else {
                        repeat.setAttribute(tag, val);
                    }
                    repeat.removeAttribute(attr);
                });
            }
            Object.keys(template.components).forEach(function (com) {
                repeatComs = repeatComs.concat(_util2.default.elemToArray(repeat.getElementsByTagName(com)));
            });
            repeatComs.forEach(function (com) {
                var comAttributes = {};
                template.props[com.tagName] = {
                    items: { length: 0 },
                    for: forDetail,
                    prefix: prefix,
                    parent: propsMapping.for ? propsMapping : null
                };
                [].slice.call(com.attributes || []).forEach(function (attr) {

                    if (['hidden', 'wx:if', 'wx:elif', 'wx:else'].indexOf(attr.name) > -1) {
                        comAttributes[attr.name] = attr.value;
                    }
                    var name = attr.name;

                    var prop = template.props[com.tagName],
                        tmp = {};

                    if (name.indexOf('v-bind') === 0) {
                        tmp.bind = true;
                        name = name.replace(/^v\-bind\:/, '');
                    }

                    if (name.indexOf('.once') === name.length - 5) {
                        name = name.replace(/\.once$/, '');
                        tmp.type = 'once';
                    } else if (name.indexOf('.sync') === name.length - 5) {
                        tmp.type = 'sync';
                        name = name.replace(/\.sync$/, '');
                    }
                    tmp.mapping = attr.value;

                    prop.items[name] = tmp;
                    prop.items.length++;
                });

                var comid = _util2.default.getComId(com);
                var src = _util2.default.findComponentInTemplate(com, template);
                if (!src) {
                    _util2.default.error('找不到组件：' + com.tagName, '错误');
                } else {
                    var wpy = _compileWpy2.default.resolveWpy(src);
                    var newnode = _this3.compileXML(_this3.getTemplate(wpy.template.code), wpy.template, prefix ? prefix + '$' + comid : '' + comid, com.childNodes, comAttributes, template.props[comid]);
                    node.replaceChild(newnode, com);
                }
            });
        });

        var componentElements = _util2.default.elemToArray(node.getElementsByTagName('component'));
        var customElements = [];
        Object.keys(template.components).forEach(function (com) {
            customElements = customElements.concat(_util2.default.elemToArray(node.getElementsByTagName(com)));
        });

        componentElements = componentElements.concat(customElements);

        componentElements.forEach(function (com) {
            var comid = void 0,
                definePath = void 0,
                isCustom = false,
                comAttributes = {};
            [].slice.call(com.attributes || []).forEach(function (attr) {
                if (['hidden', 'wx:if', 'wx:elif', 'wx:else'].indexOf(attr.name) > -1) {
                    comAttributes[attr.name] = attr.value;
                }
            });
            if (com.nodeName === 'component') {
                comid = _util2.default.getComId(com);
                definePath = _util2.default.getComPath(com);
                if (!comid) throw new Error('Unknow component id');
            } else {
                isCustom = true;
                comid = _util2.default.getComId(com);
                definePath = template.components[comid];
                definePath = definePath.indexOf('.') === -1 ? definePath : _path2.default.resolve(template.src, '..' + _path2.default.sep + template.components[comid]);
            }

            var src = _util2.default.findComponent(definePath, isCustom);
            if (!src) {
                _util2.default.error('找不到组件：' + definePath, '错误');
            } else {
                var wpy = _compileWpy2.default.resolveWpy(src);
                var newnode = _this3.compileXML(_this3.getTemplate(wpy.template.code), wpy.template, prefix ? prefix + '$' + comid : '' + comid, com.childNodes, comAttributes);

                node.replaceChild(newnode, com);
            }
        });
        return node;
    },
    compile: function compile(template) {
        var _this4 = this;

        var lang = template.type;
        var content = _util2.default.attrReplace(template.code);

        var config = _util2.default.getConfig();
        var src = _cache2.default.getSrc();
        var dist = _cache2.default.getDist();
        var self = this;

        var compiler = _loader2.default.loadCompiler(lang);

        if (!compiler) {
            return;
        }

        if (lang === 'pug') {
            // fix indent for pug, https://github.com/wepyjs/wepy/issues/211
            var indent = _util2.default.getIndent(content);
            if (indent.firstLineIndent) {
                content = _util2.default.fixIndent(content, indent.firstLineIndent * -1, indent.char);
            }
        }

        compiler(content, config.compilers[lang] || {}).then(function (content) {
            var node = _compileWpy2.default.createParser().parseFromString(content);
            node = _this4.compileXML(node, template);
            var target = _util2.default.getDistPath(_path2.default.parse(template.src), 'wxml', src, dist);

            if (node.childNodes.length === 0) {
                // empty node tostring will cause an error.
                node = '';
            } else {
                // https://github.com/jindw/xmldom/blob/master/dom.js#L585
                // https://github.com/jindw/xmldom/blob/master/dom.js#L919
                // if childNode is only one Text, then will get an error in doc.toString
                if (node.documentElement === null && node.nodeType === 9) {
                    node.nodeType = 11;
                }
                // xmldom will auto generate something like xmlns:wx.
                node = node.toString().replace(/xmlns[^\s>]*/g, '');
            }

            var plg = new _loader2.default.PluginHelper(config.plugins, {
                type: 'wxml',
                code: _util2.default.decode(node.toString()),
                file: target,
                output: function output(p) {
                    _util2.default.output(p.action, p.file);
                },
                done: function done(rst) {
                    _util2.default.output('写入', rst.file);
                    rst.code = self.replaceBooleanAttr(rst.code);
                    _util2.default.writeFile(target, rst.code);
                }
            });
        }).catch(function (e) {
            console.log(e);
        });

        //util.log('WXML: ' + path.relative(process.cwd(), target), '写入');
        //util.writeFile(target, util.decode(node.toString()));
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DOMParser(options) {
	this.options = options || { locator: {} };
}
DOMParser.prototype.parseFromString = function (source, mimeType) {
	var options = this.options;
	var sax = new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler(); //contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns || {};
	var entityMap = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '"', 'apos': "'" };
	if (locator) {
		domBuilder.setDocumentLocator(locator);
	}

	sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if (/\/x?html?$/.test(mimeType)) {
		entityMap.nbsp = '\xa0';
		entityMap.copy = '\xa9';
		defaultNSMap[''] = 'http://www.w3.org/1999/xhtml';
	}
	defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';
	if (source) {
		sax.parse(source, defaultNSMap, entityMap);
	} else {
		sax.errorHandler.error("invalid doc source");
	}
	return domBuilder.doc;
};
function buildErrorHandler(errorImpl, domBuilder, locator) {
	if (!errorImpl) {
		if (domBuilder instanceof DOMHandler) {
			return domBuilder;
		}
		errorImpl = domBuilder;
	}
	var errorHandler = {};
	var isCallback = errorImpl instanceof Function;
	locator = locator || {};
	function build(key) {
		var fn = errorImpl[key];
		if (!fn && isCallback) {
			fn = errorImpl.length == 2 ? function (msg) {
				errorImpl(key, msg);
			} : errorImpl;
		}
		errorHandler[key] = fn && function (msg) {
			fn('[xmldom ' + key + ']\t' + msg + _locator(locator));
		} || function () {};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler 
 * 
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
	this.cdata = false;
}
function position(locator, node) {
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
	startDocument: function startDocument() {
		this.doc = new DOMImplementation().createDocument(null, null, null);
		if (this.locator) {
			this.doc.documentURI = this.locator.systemId;
		}
	},
	startElement: function startElement(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
		var el = doc.createElementNS(namespaceURI, qName || localName);
		var len = attrs.length;
		appendElement(this, el);
		this.currentElement = el;

		this.locator && position(this.locator, el);
		for (var i = 0; i < len; i++) {
			var namespaceURI = attrs.getURI(i);
			var value = attrs.getValue(i);
			var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator && position(attrs.getLocator(i), attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr);
		}
	},
	endElement: function endElement(namespaceURI, localName, qName) {
		var current = this.currentElement;
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping: function startPrefixMapping(prefix, uri) {},
	endPrefixMapping: function endPrefixMapping(prefix) {},
	processingInstruction: function processingInstruction(target, data) {
		var ins = this.doc.createProcessingInstruction(target, data);
		this.locator && position(this.locator, ins);
		appendElement(this, ins);
	},
	ignorableWhitespace: function ignorableWhitespace(ch, start, length) {},
	characters: function characters(chars, start, length) {
		chars = _toString.apply(this, arguments);
		//console.log(chars)
		if (chars) {
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if (this.currentElement) {
				this.currentElement.appendChild(charNode);
			} else if (/^\s*$/.test(chars)) {
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator, charNode);
		}
	},
	skippedEntity: function skippedEntity(name) {},
	endDocument: function endDocument() {
		this.doc.normalize();
	},
	setDocumentLocator: function setDocumentLocator(locator) {
		if (this.locator = locator) {
			// && !('lineNumber' in locator)){
			locator.lineNumber = 0;
		}
	},
	//LexicalHandler
	comment: function comment(chars, start, length) {
		chars = _toString.apply(this, arguments);
		var comm = this.doc.createComment(chars);
		this.locator && position(this.locator, comm);
		appendElement(this, comm);
	},

	startCDATA: function startCDATA() {
		//used in characters() methods
		this.cdata = true;
	},
	endCDATA: function endCDATA() {
		this.cdata = false;
	},

	startDTD: function startDTD(name, publicId, systemId) {
		var impl = this.doc.implementation;
		if (impl && impl.createDocumentType) {
			var dt = impl.createDocumentType(name, publicId, systemId);
			this.locator && position(this.locator, dt);
			appendElement(this, dt);
		}
	},
	/**
  * @see org.xml.sax.ErrorHandler
  * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
  */
	warning: function warning(error) {
		console.warn('[xmldom warning]\t' + error, _locator(this.locator));
	},
	error: function error(_error) {
		console.error('[xmldom error]\t' + _error, _locator(this.locator));
	},
	fatalError: function fatalError(error) {
		console.error('[xmldom fatalError]\t' + error, _locator(this.locator));
		throw error;
	}
};
function _locator(l) {
	if (l) {
		return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
	}
}
function _toString(chars, start, length) {
	if (typeof chars == 'string') {
		return chars.substr(start, length);
	} else {
		//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if (chars.length >= start + length || start) {
			return new java.lang.String(chars, start, length) + '';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
	DOMHandler.prototype[key] = function () {
		return null;
	};
});

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement(hander, node) {
	if (!hander.currentElement) {
		hander.doc.appendChild(node);
	} else {
		hander.currentElement.appendChild(node);
	}
} //appendChild and setAttributeNS are preformance key

//if(typeof require == 'function'){
var XMLReader = __webpack_require__(11).XMLReader;
var DOMImplementation = exports.DOMImplementation = __webpack_require__(5).DOMImplementation;
exports.XMLSerializer = __webpack_require__(5).XMLSerializer;
exports.DOMParser = DOMParser;
//}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; //\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^' + nameStartChar.source + nameChar.source + '*(?:\:' + nameStartChar.source + nameChar.source + '*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0; //tag name offerring
var S_ATTR = 1; //attr name offerring 
var S_ATTR_SPACE = 2; //attr name end and space offer
var S_EQ = 3; //=space?
var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)
var S_ATTR_END = 5; //attr value end and no space(quot end)
var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7; //closed el<el />

function XMLReader() {}

XMLReader.prototype = {
	parse: function parse(source, defaultNSMap, entityMap) {
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap, defaultNSMap = {});
		_parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
		domBuilder.endDocument();
	}
};
function _parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10),
			    surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a) {
		var k = a.slice(1, -1);
		if (k in entityMap) {
			return entityMap[k];
		} else if (k.charAt(0) === '#') {
			return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
		} else {
			errorHandler.error('entity not found:' + a);
			return a;
		}
	}
	function appendText(end) {
		//has some bugs
		if (end > start) {
			var xt = source.substring(start, end).replace(/&#?\w+;/g, entityReplacer);
			locator && position(start);
			domBuilder.characters(xt, 0, end - start);
			start = end;
		}
	}
	function position(p, m) {
		while (p >= lineEnd && (m = linePattern.exec(source))) {
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p - lineStart + 1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g;
	var locator = domBuilder.locator;

	var parseStack = [{ currentNSMap: defaultNSMapCopy }];
	var closeMap = {};
	var start = 0;
	while (true) {
		try {
			var tagStart = source.indexOf('<', start);
			if (tagStart < 0) {
				if (!source.substr(start).match(/^\s*$/)) {
					var doc = domBuilder.doc;
					var text = doc.createTextNode(source.substr(start));
					doc.appendChild(text);
					domBuilder.currentElement = text;
				}
				return;
			}
			if (tagStart > start) {
				appendText(tagStart);
			}
			switch (source.charAt(tagStart + 1)) {
				case '/':
					var end = source.indexOf('>', tagStart + 3);
					var tagName = source.substring(tagStart + 2, end);
					var config = parseStack.pop();
					if (end < 0) {

						tagName = source.substring(tagStart + 2).replace(/[\s<].*/, '');
						//console.error('#@@@@@@'+tagName)
						errorHandler.error("end tag name: " + tagName + ' is not complete:' + config.tagName);
						end = tagStart + 1 + tagName.length;
					} else if (tagName.match(/\s</)) {
						tagName = tagName.replace(/[\s<].*/, '');
						errorHandler.error("end tag name: " + tagName + ' maybe not complete');
						end = tagStart + 1 + tagName.length;
					}
					//console.error(parseStack.length,parseStack)
					//console.error(config);
					var localNSMap = config.localNSMap;
					var endMatch = config.tagName == tagName;
					var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
					if (endIgnoreCaseMach) {
						domBuilder.endElement(config.uri, config.localName, tagName);
						if (localNSMap) {
							for (var prefix in localNSMap) {
								domBuilder.endPrefixMapping(prefix);
							}
						}
						if (!endMatch) {
							errorHandler.fatalError("end tag name: " + tagName + ' is not match the current start tagName:' + config.tagName);
						}
					} else {
						parseStack.push(config);
					}

					end++;
					break;
				// end elment
				case '?':
					// <?...?>
					locator && position(tagStart);
					end = parseInstruction(source, tagStart, domBuilder);
					break;
				case '!':
					// <!doctype,<![CDATA,<!--
					locator && position(tagStart);
					end = parseDCC(source, tagStart, domBuilder, errorHandler);
					break;
				default:
					locator && position(tagStart);
					var el = new ElementAttributes();
					var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
					//elStartEnd
					var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
					var len = el.length;

					if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
						el.closed = true;
						if (!entityMap.nbsp) {
							errorHandler.warning('unclosed xml attribute');
						}
					}
					if (locator && len) {
						var locator2 = copyLocator(locator, {});
						//try{//attribute position fixed
						for (var i = 0; i < len; i++) {
							var a = el[i];
							position(a.offset);
							a.locator = copyLocator(locator, {});
						}
						//}catch(e){console.error('@@@@@'+e)}
						domBuilder.locator = locator2;
						if (appendElement(el, domBuilder, currentNSMap)) {
							parseStack.push(el);
						}
						domBuilder.locator = locator;
					} else {
						if (appendElement(el, domBuilder, currentNSMap)) {
							parseStack.push(el);
						}
					}

					if (el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed) {
						end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
					} else {
						end++;
					}
			}
		} catch (e) {
			errorHandler.error('element parse error: ' + e);
			//errorHandler.error('element parse error: '+e);
			end = -1;
			//throw e;
		}
		if (end > start) {
			start = end;
		} else {
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart, start) + 1);
		}
	}
}
function copyLocator(f, t) {
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG; //status
	while (true) {
		var c = source.charAt(p);
		switch (c) {
			case '=':
				if (s === S_ATTR) {
					//attrName
					attrName = source.slice(start, p);
					s = S_EQ;
				} else if (s === S_ATTR_SPACE) {
					s = S_EQ;
				} else {
					//fatalError: equal must after attrName or space after attrName
					throw new Error('attribute equal must after attrName');
				}
				break;
			case '\'':
			case '"':
				if (s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				) {
						//equal
						if (s === S_ATTR) {
							errorHandler.warning('attribute value must after "="');
							attrName = source.slice(start, p);
						}
						start = p + 1;
						p = source.indexOf(c, start);
						if (p > 0) {
							value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
							el.add(attrName, value, start - 1);
							s = S_ATTR_END;
						} else {
							//fatalError: no end quot match
							throw new Error('attribute value no end \'' + c + '\' match');
						}
					} else if (s == S_ATTR_NOQUOT_VALUE) {
					value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
					//console.log(attrName,value,start,p)
					el.add(attrName, value, start);
					//console.dir(el)
					errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
					start = p + 1;
					s = S_ATTR_END;
				} else {
					//fatalError: no equal before
					throw new Error('attribute value must after "="');
				}
				break;
			case '/':
				switch (s) {
					case S_TAG:
						el.setTagName(source.slice(start, p));
					case S_ATTR_END:
					case S_TAG_SPACE:
					case S_TAG_CLOSE:
						s = S_TAG_CLOSE;
						el.closed = true;
					case S_ATTR_NOQUOT_VALUE:
					case S_ATTR:
					case S_ATTR_SPACE:
						break;
					//case S_EQ:
					default:
						throw new Error("attribute invalid close char('/')");
				}
				break;
			case '':
				//end document
				//throw new Error('unexpected end of input')
				errorHandler.error('unexpected end of input');
				if (s == S_TAG) {
					el.setTagName(source.slice(start, p));
				}
				return p;
			case '>':
				switch (s) {
					case S_TAG:
						el.setTagName(source.slice(start, p));
					case S_ATTR_END:
					case S_TAG_SPACE:
					case S_TAG_CLOSE:
						break; //normal
					case S_ATTR_NOQUOT_VALUE: //Compatible state
					case S_ATTR:
						value = source.slice(start, p);
						if (value.slice(-1) === '/') {
							el.closed = true;
							value = value.slice(0, -1);
						}
					case S_ATTR_SPACE:
						if (s === S_ATTR_SPACE) {
							value = attrName;
						}
						if (s == S_ATTR_NOQUOT_VALUE) {
							errorHandler.warning('attribute "' + value + '" missed quot(")!!');
							el.add(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
						} else {
							if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !value.match(/^(?:disabled|checked|selected)$/i)) {
								errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
							}
							el.add(value, value, start);
						}
						break;
					case S_EQ:
						throw new Error('attribute value missed!!');
				}
				//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
				return p;
			/*xml space '\x20' | #x9 | #xD | #xA; */
			case "\x80":
				c = ' ';
			default:
				if (c <= ' ') {
					//space
					switch (s) {
						case S_TAG:
							el.setTagName(source.slice(start, p)); //tagName
							s = S_TAG_SPACE;
							break;
						case S_ATTR:
							attrName = source.slice(start, p);
							s = S_ATTR_SPACE;
							break;
						case S_ATTR_NOQUOT_VALUE:
							var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
							errorHandler.warning('attribute "' + value + '" missed quot(")!!');
							el.add(attrName, value, start);
						case S_ATTR_END:
							s = S_TAG_SPACE;
							break;
						//case S_TAG_SPACE:
						//case S_EQ:
						//case S_ATTR_SPACE:
						//	void();break;
						//case S_TAG_CLOSE:
						//ignore warning
					}
				} else {
					//not space
					//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
					//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
					switch (s) {
						//case S_TAG:void();break;
						//case S_ATTR:void();break;
						//case S_ATTR_NOQUOT_VALUE:void();break;
						case S_ATTR_SPACE:
							var tagName = el.tagName;
							if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
								errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
							}
							el.add(attrName, attrName, start);
							start = p;
							s = S_ATTR;
							break;
						case S_ATTR_END:
							errorHandler.warning('attribute space is required"' + attrName + '"!!');
						case S_TAG_SPACE:
							s = S_ATTR;
							start = p;
							break;
						case S_EQ:
							s = S_ATTR_NOQUOT_VALUE;
							start = p;
							break;
						case S_TAG_CLOSE:
							throw new Error("elements closed character '/' and '>' must be connected to");
					}
				}
		} //end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el, domBuilder, currentNSMap) {
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while (i--) {
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if (nsp > 0) {
			var prefix = a.prefix = qName.slice(0, nsp);
			var localName = qName.slice(nsp + 1);
			var nsPrefix = prefix === 'xmlns' && localName;
		} else {
			localName = qName;
			prefix = null;
			nsPrefix = qName === 'xmlns' && '';
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName;
		//prefix == null for no ns prefix attribute 
		if (nsPrefix !== false) {
			//hack!!
			if (localNSMap == null) {
				localNSMap = {};
				//console.log(currentNSMap,0)
				_copy(currentNSMap, currentNSMap = {});
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = 'http://www.w3.org/2000/xmlns/';
			domBuilder.startPrefixMapping(nsPrefix, value);
		}
	}
	var i = el.length;
	while (i--) {
		a = el[i];
		var prefix = a.prefix;
		if (prefix) {
			//no prefix attribute has no namespace
			if (prefix === 'xml') {
				a.uri = 'http://www.w3.org/XML/1998/namespace';
			}if (prefix !== 'xmlns') {
				a.uri = currentNSMap[prefix || ''];

				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if (nsp > 0) {
		prefix = el.prefix = tagName.slice(0, nsp);
		localName = el.localName = tagName.slice(nsp + 1);
	} else {
		prefix = null; //important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns, localName, tagName, el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if (el.closed) {
		domBuilder.endElement(ns, localName, tagName);
		if (localNSMap) {
			for (prefix in localNSMap) {
				domBuilder.endPrefixMapping(prefix);
			}
		}
	} else {
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
	if (/^(?:script|textarea)$/i.test(tagName)) {
		var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
		var text = source.substring(elStartEnd + 1, elEndStart);
		if (/[&<]/.test(text)) {
			if (/^script$/i.test(tagName)) {
				//if(!/\]\]>/.test(text)){
				//lexHandler.startCDATA();
				domBuilder.characters(text, 0, text.length);
				//lexHandler.endCDATA();
				return elEndStart;
				//}
			} //}else{//text area
			text = text.replace(/&#?\w+;/g, entityReplacer);
			domBuilder.characters(text, 0, text.length);
			return elEndStart;
			//}
		}
	}
	return elStartEnd + 1;
}
function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if (pos == null) {
		//console.log(tagName)
		pos = source.lastIndexOf('</' + tagName + '>');
		if (pos < elStartEnd) {
			//忘记闭合
			pos = source.lastIndexOf('</' + tagName);
		}
		closeMap[tagName] = pos;
	}
	return pos < elStartEnd;
	//} 
}
function _copy(source, target) {
	for (var n in source) {
		target[n] = source[n];
	}
}
function parseDCC(source, start, domBuilder, errorHandler) {
	//sure start with '<!'
	var next = source.charAt(start + 2);
	switch (next) {
		case '-':
			if (source.charAt(start + 3) === '-') {
				var end = source.indexOf('-->', start + 4);
				//append comment source.substring(4,end)//<!--
				if (end > start) {
					domBuilder.comment(source, start + 4, end - start - 4);
					return end + 3;
				} else {
					errorHandler.error("Unclosed comment");
					return -1;
				}
			} else {
				//error
				return -1;
			}
		default:
			if (source.substr(start + 3, 6) == 'CDATA[') {
				var end = source.indexOf(']]>', start + 9);
				domBuilder.startCDATA();
				domBuilder.characters(source, start + 9, end - start - 9);
				domBuilder.endCDATA();
				return end + 3;
			}
			//<!DOCTYPE
			//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
			var matchs = split(source, start);
			var len = matchs.length;
			if (len > 1 && /!doctype/i.test(matchs[0][0])) {
				var name = matchs[1][0];
				var pubid = len > 3 && /^public$/i.test(matchs[2][0]) && matchs[3][0];
				var sysid = len > 4 && matchs[4][0];
				var lastMatch = matchs[len - 1];
				domBuilder.startDTD(name, pubid && pubid.replace(/^(['"])(.*?)\1$/, '$2'), sysid && sysid.replace(/^(['"])(.*?)\1$/, '$2'));
				domBuilder.endDTD();

				return lastMatch.index + lastMatch[0].length;
			}
	}
	return -1;
}

function parseInstruction(source, start, domBuilder) {
	var end = source.indexOf('?>', start);
	if (end) {
		var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if (match) {
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]);
			return end + 2;
		} else {
			//error
			return -1;
		}
	}
	return -1;
}

/**
 * @param source
 */
function ElementAttributes(source) {}
ElementAttributes.prototype = {
	setTagName: function setTagName(tagName) {
		if (!tagNamePattern.test(tagName)) {
			throw new Error('invalid tagName:' + tagName);
		}
		this.tagName = tagName;
	},
	add: function add(qName, value, offset) {
		if (!tagNamePattern.test(qName)) {
			throw new Error('invalid attribute:' + qName);
		}
		this[this.length++] = { qName: qName, value: value, offset: offset };
	},
	length: 0,
	getLocalName: function getLocalName(i) {
		return this[i].localName;
	},
	getLocator: function getLocator(i) {
		return this[i].locator;
	},
	getQName: function getQName(i) {
		return this[i].qName;
	},
	getURI: function getURI(i) {
		return this[i].uri;
	},
	getValue: function getValue(i) {
		return this[i].value;
	}
	//	,getIndex:function(uri, localName)){
	//		if(localName){
	//			
	//		}else{
	//			var qName = uri
	//		}
	//	},
	//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
	//	getType:function(uri,localName){}
	//	getType:function(i){},
};

function _set_proto_(thiz, parent) {
	thiz.__proto__ = parent;
	return thiz;
}
if (!(_set_proto_({}, _set_proto_.prototype) instanceof _set_proto_)) {
	_set_proto_ = function _set_proto_(thiz, parent) {
		function p() {};
		p.prototype = parent;
		p = new p();
		for (parent in thiz) {
			p[parent] = thiz[parent];
		}
		return p;
	};
}

function split(source, start) {
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source); //skip <
	while (match = reg.exec(source)) {
		buf.push(match);
		if (match[1]) return buf;
	}
}

exports.XMLReader = XMLReader;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
// Remark: Requiring this file will use the "safe" colors API which will not touch String.prototype
//
//   var colors = require('colors/safe);
//   colors.red("foo")
//
//
var colors = __webpack_require__(1);
module['exports'] = colors;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49]

};

Object.keys(codes).forEach(function (key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\x1B[' + val[0] + 'm';
  style.close = '\x1B[' + val[1] + 'm';
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var argv = process.argv;

module.exports = function () {
  if (argv.indexOf('--no-color') !== -1 || argv.indexOf('--color=false') !== -1) {
    return false;
  }

  if (argv.indexOf('--color') !== -1 || argv.indexOf('--color=true') !== -1 || argv.indexOf('--color=always') !== -1) {
    return true;
  }

  if (process.stdout && !process.stdout.isTTY) {
    return false;
  }

  if (process.platform === 'win32') {
    return true;
  }

  if ('COLORTERM' in process.env) {
    return true;
  }

  if (process.env.TERM === 'dumb') {
    return false;
  }

  if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
    return true;
  }

  return false;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module['exports'] = function runTheTrap(text, options) {
  var result = "";
  text = text || "Run the trap, drop the bass";
  text = text.split('');
  var trap = {
    a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
    b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
    c: ["\xA9", "\u023B", "\u03FE"],
    d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
    e: ["\xCB", "\u0115", "\u018E", "\u0258", "\u03A3", "\u03BE", "\u04BC", "\u0A6C"],
    f: ["\u04FA"],
    g: ["\u0262"],
    h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
    i: ["\u0F0F"],
    j: ["\u0134"],
    k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
    l: ["\u0139"],
    m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
    n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
    o: ["\xD8", "\xF5", "\xF8", "\u01FE", "\u0298", "\u047A", "\u05DD", "\u06DD", "\u0E4F"],
    p: ["\u01F7", "\u048E"],
    q: ["\u09CD"],
    r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
    s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
    t: ["\u0141", "\u0166", "\u0373"],
    u: ["\u01B1", "\u054D"],
    v: ["\u05D8"],
    w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
    x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
    y: ["\xA5", "\u04B0", "\u04CB"],
    z: ["\u01B5", "\u0240"]
  };
  text.forEach(function (c) {
    c = c.toLowerCase();
    var chars = trap[c] || [" "];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== "undefined") {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// please no
module['exports'] = function zalgo(text, options) {
  text = text || "   he is here   ";
  var soul = {
    "up": ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈', '͊', '͋', '͌', '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚'],
    "down": ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'],
    "mid": ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͜', '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡', ' ҉']
  },
      all = [].concat(soul.up, soul.down, soul.mid),
      zalgo = {};

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function is_char(character) {
    var bool = false;
    all.filter(function (i) {
      bool = i === character;
    });
    return bool;
  }

  function heComes(text, options) {
    var result = '',
        counts,
        l;
    options = options || {};
    options["up"] = typeof options["up"] !== 'undefined' ? options["up"] : true;
    options["mid"] = typeof options["mid"] !== 'undefined' ? options["mid"] : true;
    options["down"] = typeof options["down"] !== 'undefined' ? options["down"] : true;
    options["size"] = typeof options["size"] !== 'undefined' ? options["size"] : "maxi";
    text = text.split('');
    for (l in text) {
      if (is_char(l)) {
        continue;
      }
      result = result + text[l];
      counts = { "up": 0, "down": 0, "mid": 0 };
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ["up", "mid", "down"];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colors = __webpack_require__(1);

module['exports'] = function () {
  return function (letter, i, exploded) {
    if (letter === " ") return letter;
    switch (i % 3) {
      case 0:
        return colors.red(letter);
      case 1:
        return colors.white(letter);
      case 2:
        return colors.blue(letter);
    }
  };
}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colors = __webpack_require__(1);

module['exports'] = function (letter, i, exploded) {
  return i % 2 === 0 ? letter : colors.inverse(letter);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colors = __webpack_require__(1);

module['exports'] = function () {
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV
  return function (letter, i, exploded) {
    if (letter === " ") {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colors = __webpack_require__(1);

module['exports'] = function () {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];
  return function (letter, i, exploded) {
    return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 1))]](letter);
  };
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var path = __webpack_require__(0);
var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var _0777 = parseInt('0777', 8);

module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

function mkdirP(p, opts, f, made) {
    if (typeof opts === 'function') {
        f = opts;
        opts = {};
    } else if (!opts || (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) !== 'object') {
        opts = { mode: opts };
    }

    var mode = opts.mode;
    var xfs = opts.fs || fs;

    if (mode === undefined) {
        mode = _0777 & ~process.umask();
    }
    if (!made) made = null;

    var cb = f || function () {};
    p = path.resolve(p);

    xfs.mkdir(p, mode, function (er) {
        if (!er) {
            made = made || p;
            return cb(null, made);
        }
        switch (er.code) {
            case 'ENOENT':
                mkdirP(path.dirname(p), opts, function (er, made) {
                    if (er) cb(er, made);else mkdirP(p, opts, cb, made);
                });
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                xfs.stat(p, function (er2, stat) {
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) cb(er, made);else cb(null, made);
                });
                break;
        }
    });
}

mkdirP.sync = function sync(p, opts, made) {
    if (!opts || (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) !== 'object') {
        opts = { mode: opts };
    }

    var mode = opts.mode;
    var xfs = opts.fs || fs;

    if (mode === undefined) {
        mode = _0777 & ~process.umask();
    }
    if (!made) made = null;

    p = path.resolve(p);

    try {
        xfs.mkdirSync(p, mode);
        made = made || p;
    } catch (err0) {
        switch (err0.code) {
            case 'ENOENT':
                made = sync(path.dirname(p), opts, made);
                sync(p, opts, made);
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat;
                try {
                    stat = xfs.statSync(p);
                } catch (err1) {
                    throw err0;
                }
                if (!stat.isDirectory()) throw err0;
                break;
        }
    }

    return made;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function pad(hash, len) {
  while (hash.length < len) {
    hash = '0' + hash;
  }
  return hash;
}

function fold(hash, text) {
  var i;
  var chr;
  var len;
  if (text.length === 0) {
    return hash;
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
}

function foldObject(hash, o, seen) {
  return Object.keys(o).sort().reduce(foldKey, hash);
  function foldKey(hash, key) {
    return foldValue(hash, o[key], key, seen);
  }
}

function foldValue(input, value, key, seen) {
  var hash = fold(fold(fold(input, key), toString(value)), typeof value === 'undefined' ? 'undefined' : _typeof(value));
  if (value === null) {
    return fold(hash, 'null');
  }
  if (value === undefined) {
    return fold(hash, 'undefined');
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    if (seen.indexOf(value) !== -1) {
      return fold(hash, '[Circular]' + key);
    }
    seen.push(value);
    return foldObject(hash, value, seen);
  }
  return fold(hash, value.toString());
}

function toString(o) {
  return Object.prototype.toString.call(o);
}

function sum(o) {
  return pad(foldValue(0, o, '', []).toString(16), 8);
}

module.exports = sum;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(25);

var _module2 = _interopRequireDefault(_module);

var _path = __webpack_require__(0);

var _path2 = _interopRequireDefault(_path);

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var relativeModules = {};
var requiredModules = {};

var loadedPlugins = [];

var PluginHelper = function () {
    function PluginHelper(plugins, op) {
        _classCallCheck(this, PluginHelper);

        this.applyPlugin(0, op);
        return true;
    }

    _createClass(PluginHelper, [{
        key: 'applyPlugin',
        value: function applyPlugin(index, op) {
            var _this = this;

            var plg = loadedPlugins[index];

            if (!plg) {
                op.done && op.done(op);
            } else {
                op.next = function () {
                    _this.applyPlugin(index + 1, op);
                };
                op.catch = function () {
                    op.error && op.error(op);
                };
                if (plg) plg.apply(op);
            }
        }
    }]);

    return PluginHelper;
}();

exports.default = {
    loadCompiler: function loadCompiler(lang) {
        if (['wxml', 'xml', 'css', 'js'].indexOf(lang) > -1) {
            return function (c) {
                return Promise.resolve(c);
            };
        }

        var name = 'wepy-compiler-' + lang;
        var compiler = this.load(name);

        if (!compiler) {
            this.missingNPM = name;
            _util2.default.log('\u627E\u4E0D\u5230\u7F16\u8BD1\u5668\uFF1A' + name + '\u3002', 'warning');
        }

        return compiler;
    },
    getNodeModulePath: function getNodeModulePath(loc, relative) {
        relative = relative || _util2.default.currentDir;
        if ((typeof _module2.default === 'undefined' ? 'undefined' : _typeof(_module2.default)) === 'object') return null;

        var relativeMod = relativeModules[relative];

        if (!relativeMod) {
            relativeMod = new _module2.default();

            var filename = _path2.default.join(relative, './');
            relativeMod.id = filename;
            relativeMod.filename = filename;

            relativeMod.paths = _module2.default._nodeModulePaths(relative);
            relativeModules[relative] = relativeMod;
        }

        try {
            return _module2.default._resolveFilename(loc, relativeMod);
        } catch (err) {
            return null;
        }
    },
    load: function load(loc, relative) {

        if (requiredModules[loc]) return requiredModules[loc];

        var modulePath = this.getNodeModulePath(loc, relative);
        var m = null;
        try {
            m = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        } catch (e) {
            if (e.message !== 'missing path') console.log(e);
        }
        if (m) {
            m = m.default ? m.default : m;
            requiredModules[loc] = m;
        }
        return m;
    },
    loadPlugin: function loadPlugin(plugins, op) {
        var plg = void 0,
            plgkey = void 0,
            setting = void 0,
            config = void 0;
        for (plgkey in plugins) {
            var name = 'wepy-plugin-' + plgkey;
            setting = plugins[plgkey];
            plg = this.load(name);

            if (!plg) {
                this.missingNPM = name;
                _util2.default.log('\u627E\u4E0D\u5230\u63D2\u4EF6\uFF1A' + name + '\u3002', 'warning');
                return false;
            }
            loadedPlugins.push(new plg(setting));
        }
        return true;
    },

    PluginHelper: PluginHelper
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname, Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(0);

var _path2 = _interopRequireDefault(_path);

var _concatStream = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"concat-stream\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _concatStream2 = _interopRequireDefault(_concatStream);

var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash.template\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _lodash2 = _interopRequireDefault(_lodash);

var _mapStream = __webpack_require__(27);

var _mapStream2 = _interopRequireDefault(_mapStream);

var _vinylFs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vinyl-fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _vinylFs2 = _interopRequireDefault(_vinylFs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = createModule;

function createModule(dir) {
  return new Promise(function (resolve, reject) {
    _vinylFs2.default.src(_path2.default.resolve(__dirname, "..", "templates", "**", "*"), { dot: true }).pipe(renameFiles({ gitignore: ".gitignore" })) // See: https://github.com/npm/npm/issues/3763
    .pipe(templateFiles({ name: _path2.default.basename(dir) })).once("error", reject).pipe(_vinylFs2.default.dest(dir)).pipe(collectFiles(resolve));
  });
}

function renameFiles(renames) {
  return (0, _mapStream2.default)(function (file, cb) {
    if (file.basename in renames) {
      file.basename = renames[file.basename];
    }
    cb(null, file);
  });
}

function templateFiles(data) {
  return (0, _mapStream2.default)(function (file, cb) {
    file.contents = new Buffer((0, _lodash2.default)(file.contents)(data));
    cb(null, file);
  });
}

function collectFiles(cb) {
  return (0, _concatStream2.default)(function (files) {
    return cb(files.map(function (file) {
      return file.path;
    }));
  });
}
/* WEBPACK VAR INJECTION */}.call(exports, "/", __webpack_require__(26).Buffer))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Couldn't find preset \"es2015\" relative to directory \"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\.4.9.1@buffer\"\n    at E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:293:19\n    at Array.map (native)\n    at OptionManager.resolvePresets (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.7.1.1@babel-loader\\lib\\index.js:49:20)\n    at Object.module.exports (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.7.1.1@babel-loader\\lib\\index.js:174:20)");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

//filter will reemit the data if cb(err,pass) pass is truthy

// reduce is more tricky
// maybe we want to group the reductions or emit progress updates occasionally
// the most basic reduce just emits one 'data' event after it has recieved 'end'


var Stream = __webpack_require__(28).Stream;

//create an event stream and apply function to each .write
//emitting each response as data
//unless it's an empty callback

module.exports = function (mapper, opts) {

  var stream = new Stream(),
      self = this,
      inputs = 0,
      outputs = 0,
      ended = false,
      paused = false,
      destroyed = false,
      lastWritten = 0,
      inNext = false;

  this.opts = opts || {};
  var errorEventName = this.opts.failures ? 'failure' : 'error';

  // Items that are not ready to be written yet (because they would come out of
  // order) get stuck in a queue for later.
  var writeQueue = {};

  stream.writable = true;
  stream.readable = true;

  function queueData(data, number) {
    var nextToWrite = lastWritten + 1;

    if (number === nextToWrite) {
      // If it's next, and its not undefined write it
      if (data !== undefined) {
        stream.emit.apply(stream, ['data', data]);
      }
      lastWritten++;
      nextToWrite++;
    } else {
      // Otherwise queue it for later.
      writeQueue[number] = data;
    }

    // If the next value is in the queue, write it
    if (writeQueue.hasOwnProperty(nextToWrite)) {
      var dataToWrite = writeQueue[nextToWrite];
      delete writeQueue[nextToWrite];
      return queueData(dataToWrite, nextToWrite);
    }

    outputs++;
    if (inputs === outputs) {
      if (paused) paused = false, stream.emit('drain'); //written all the incoming events
      if (ended) end();
    }
  }

  function next(err, data, number) {
    if (destroyed) return;
    inNext = true;

    if (!err || self.opts.failures) {
      queueData(data, number);
    }

    if (err) {
      stream.emit.apply(stream, [errorEventName, err]);
    }

    inNext = false;
  }

  // Wrap the mapper function by calling its callback with the order number of
  // the item in the stream.
  function wrappedMapper(input, number, callback) {
    return mapper.call(null, input, function (err, data) {
      callback(err, data, number);
    });
  }

  stream.write = function (data) {
    if (ended) throw new Error('map stream is not writable');
    inNext = false;
    inputs++;

    try {
      //catch sync errors and handle them like async errors
      var written = wrappedMapper(data, inputs, next);
      paused = written === false;
      return !paused;
    } catch (err) {
      //if the callback has been called syncronously, and the error
      //has occured in an listener, throw it again.
      if (inNext) throw err;
      next(err);
      return !paused;
    }
  };

  function end(data) {
    //if end was called with args, write it, 
    ended = true; //write will emit 'end' if ended is true
    stream.writable = false;
    if (data !== undefined) {
      return queueData(data, inputs);
    } else if (inputs == outputs) {
      //wait for processing 
      stream.readable = false, stream.emit('end'), stream.destroy();
    }
  }

  stream.end = function (data) {
    if (ended) return;
    end(data);
  };

  stream.destroy = function () {
    ended = destroyed = true;
    stream.writable = stream.readable = paused = false;
    process.nextTick(function () {
      stream.emit('close');
    });
  };
  stream.pause = function () {
    paused = true;
  };

  stream.resume = function () {
    paused = false;
  };

  return stream;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Couldn't find preset \"es2015\" relative to directory \"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\.2.0.1@stream-browserify\"\n    at E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:293:19\n    at Array.map (native)\n    at OptionManager.resolvePresets (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.6.25.0@babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.7.1.1@babel-loader\\lib\\index.js:49:20)\n    at Object.module.exports (E:\\2017_wxj\\awesome-wxj\\compile\\node_modules\\.7.1.1@babel-loader\\lib\\index.js:174:20)");

/***/ })
/******/ ]);