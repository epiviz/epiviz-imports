(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d3 = __webpack_require__(1);
var sprintf = __webpack_require__(2);
var epiviz = __webpack_require__(3);

module.exports = {
    sprintf: sprintf,
    epiviz : epiviz
};

// window.sprintf = sprintf;
// window.epiviz = epiviz;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
  var d3 = {
    version: "3.5.17"
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = this.document;
  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }
  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }
  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function(list) {
        var i = list.length, array = new Array(i);
        while (i--) array[i] = list[i];
        return array;
      };
    }
  }
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
      d3_element_prototype.setAttribute = function(name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };
      d3_element_prototype.setAttributeNS = function(space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };
      d3_style_prototype.setProperty = function(name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.transpose = function(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  };
  function d3_transposeLength(d) {
    return d.length;
  }
  d3.zip = function() {
    return d3.transpose(arguments);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  function d3_identity(d) {
    return d;
  }
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatches = function(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
    d3_selectMatches = function(n, s) {
      return d3_selectMatcher.call(n, s);
    };
    return d3_selectMatches(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3.select(d3_document.documentElement);
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument, namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }
    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group;
    if (typeof node === "string") {
      group = [ d3_select(node, d3_document) ];
      group.parentNode = d3_document.documentElement;
    } else {
      group = [ node ];
      group.parentNode = d3_documentElement(node);
    }
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group;
    if (typeof nodes === "string") {
      group = d3_array(d3_selectAll(nodes, d3_document));
      group.parentNode = d3_document.documentElement;
    } else {
      group = d3_array(nodes);
      group.parentNode = null;
    }
    return d3_selection([ group ]);
  };
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  if (d3_document) {
    d3_selection_onFilters.forEach(function(k) {
      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
  }
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect, d3_event_dragId = 0;
  function d3_event_dragSuppress(node) {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect == null) {
      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
    }
    if (d3_event_dragSelect) {
      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0) {
        var window = d3_window(container);
        if (window.scrollX || window.scrollY) {
          svg = d3.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var ctm = svg[0][0].getScreenCTM();
          d3_mouse_bug44083 = !(ctm.f || ctm.e);
          svg.remove();
        }
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < ε2) {
      S = Math.log(w1 / w0) / ρ;
      i = function(t) {
        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / ρ;
      i = function(t) {
        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      };
    }
    i.duration = S * 1e3;
    return i;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    if (!d3_behavior_zoomWheel) {
      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return d3.event.wheelDelta;
      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
        return -d3.event.detail;
      }, "MozMousePixelScroll");
    }
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: null
      };
      scaleTo(+_);
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      }), center0 = null;
    }
    function mousedowned() {
      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) {
      return rgb(color.r, color.g, color.b);
    }
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function() {
    d3_timer.apply(this, arguments);
  };
  function d3_timer(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
    return timer;
  }
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now(), timer = d3_timer_queueHead;
    while (timer) {
      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
      timer = timer.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.c) {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      } else {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value = +value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransformPop(s) {
    return s.length ? s.pop() + "," : "";
  }
  function d3_interpolateTranslate(ta, tb, s, q) {
    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
      var i = s.push("translate(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    }
  }
  function d3_interpolateRotate(ra, rb, s, q) {
    if (ra !== rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
    }
  }
  function d3_interpolateSkew(wa, wb, s, q) {
    if (wa !== wb) {
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
    }
  }
  function d3_interpolateScale(ka, kb, s, q) {
    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] !== 1 || kb[1] !== 1) {
      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
    }
  }
  function d3_interpolateTransform(a, b) {
    var s = [], q = [];
    a = d3.transform(a), b = d3.transform(b);
    d3_interpolateTranslate(a.translate, b.translate, s, q);
    d3_interpolateRotate(a.rotate, b.rotate, s, q);
    d3_interpolateSkew(a.skew, b.skew, s, q);
    d3_interpolateScale(a.scale, b.scale, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: groupSums[di]
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        timer = null;
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) {
          alpha = x;
        } else {
          timer.c = null, timer.t = NaN, timer = null;
          event.end({
            type: "end",
            alpha: alpha = 0
          });
        }
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        timer = d3_timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, l = candidates.length, x;
        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = root.y = 0;
      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    return domain;
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(1, base * n / scale.ticks().length);
      return function(d) {
        var i = d / pow(Math.round(log(d)));
        if (i * base < base - .5) i *= base;
        return i <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var rc1 = rc, rc0 = rc;
        if (da < π) {
          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }
        if (x1 != null) {
          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }
  function d3_svg_lineLinearClosed(points) {
    return points.join("L") + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, activeId, active;
      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
        active.timer.c = null;
        active.timer.t = NaN;
        if (--lock.count) delete lock[activeId]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id], time, timer, duration, ease, tweens;
    function schedule(elapsed) {
      var delay = transition.delay;
      timer.t = delay + time;
      if (delay <= elapsed) return start(elapsed - delay);
      timer.c = start;
    }
    function start(elapsed) {
      var activeId = lock.active, active = lock[activeId];
      if (active) {
        active.timer.c = null;
        active.timer.t = NaN;
        --lock.count;
        delete lock[activeId];
        active.event && active.event.interrupt.call(node, node.__data__, active.index);
      }
      for (var cancelId in lock) {
        if (+cancelId < id) {
          var cancel = lock[cancelId];
          cancel.timer.c = null;
          cancel.timer.t = NaN;
          --lock.count;
          delete lock[cancelId];
        }
      }
      timer.c = tick;
      d3_timer(function() {
        if (timer.c && tick(elapsed || 1)) {
          timer.c = null;
          timer.t = NaN;
        }
        return 1;
      }, 0, time);
      lock.active = id;
      transition.event && transition.event.start.call(node, node.__data__, i);
      tweens = [];
      transition.tween.forEach(function(key, value) {
        if (value = value.call(node, node.__data__, i)) {
          tweens.push(value);
        }
      });
      ease = transition.ease;
      duration = transition.duration;
    }
    function tick(elapsed) {
      var t = elapsed / duration, e = ease(t), n = tweens.length;
      while (n > 0) {
        tweens[--n].call(node, e);
      }
      if (t >= 1) {
        transition.event && transition.event.end.call(node, node.__data__, i);
        if (--lock.count) delete lock[id]; else delete node[ns];
        return 1;
      }
    }
    if (!transition) {
      time = inherit.time;
      timer = d3_timer(schedule, 0, time);
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        timer: timer,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = d3_array(arguments);
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
sprintf() for JavaScript 0.7-beta1
http://www.diveintojavascript.com/projects/javascript-sprintf

Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of sprintf() for JavaScript nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


Changelog:
2010.11.07 - 0.7-beta1-node
  - converted it to a node.js compatible module

2010.09.06 - 0.7-beta1
  - features: vsprintf, support for named placeholders
  - enhancements: format cache, reduced global namespace pollution

2010.05.22 - 0.6:
 - reverted to 0.4 and fixed the bug regarding the sign of the number 0
 Note:
 Thanks to Raphael Pigulla <raph (at] n3rd [dot) org> (http://www.n3rd.org/)
 who warned me about a bug in 0.5, I discovered that the last update was
 a regress. I appologize for that.

2010.05.09 - 0.5:
 - bug fix: 0 is now preceeded with a + sign
 - bug fix: the sign was not at the right position on padded results (Kamal Abdali)
 - switched from GPL to BSD license

2007.10.21 - 0.4:
 - unit test and patch (David Baird)

2007.09.17 - 0.3:
 - bug fix: no longer throws exception on empty paramenters (Hans Pufal)

2007.09.11 - 0.2:
 - feature: added argument swapping

2007.04.03 - 0.1:
 - initial release
**/

var sprintf = (function() {
	function get_type(variable) {
		return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	}
	function str_repeat(input, multiplier) {
		for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
		return output.join('');
	}

	var str_format = function() {
		if (!str_format.cache.hasOwnProperty(arguments[0])) {
			str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
		}
		return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
	};

	// convert object to simple one line string without indentation or
	// newlines. Note that this implementation does not print array
	// values to their actual place for sparse arrays. 
	//
	// For example sparse array like this
	//    l = []
	//    l[4] = 1
	// Would be printed as "[1]" instead of "[, , , , 1]"
	// 
	// If argument 'seen' is not null and array the function will check for 
	// circular object references from argument.
	str_format.object_stringify = function(obj, depth, maxdepth, seen) {
		var str = '';
		if (obj != null) {
			switch( typeof(obj) ) {
			case 'function': 
				return '[Function' + (obj.name ? ': '+obj.name : '') + ']';
			    break;
			case 'object':
				if ( obj instanceof Error) { return '[' + obj.toString() + ']' };
				if (depth >= maxdepth) return '[Object]'
				if (seen) {
					// add object to seen list
					seen = seen.slice(0)
					seen.push(obj);
				}
				if (obj.length != null) { //array
					str += '[';
					var arr = []
					for (var i in obj) {
						if (seen && seen.indexOf(obj[i]) >= 0) arr.push('[Circular]');
						else arr.push(str_format.object_stringify(obj[i], depth+1, maxdepth, seen));
					}
					str += arr.join(', ') + ']';
				} else if ('getMonth' in obj) { // date
					return 'Date(' + obj + ')';
				} else { // object
					str += '{';
					var arr = []
					for (var k in obj) { 
						if(obj.hasOwnProperty(k)) {
							if (seen && seen.indexOf(obj[k]) >= 0) arr.push(k + ': [Circular]');
							else arr.push(k +': ' +str_format.object_stringify(obj[k], depth+1, maxdepth, seen)); 
						}
					}
					str += arr.join(', ') + '}';
				}
				return str;
				break;
			case 'string':				
				return '"' + obj + '"';
				break
			}
		}
		return '' + obj;
	}

	str_format.format = function(parse_tree, argv) {
		var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
		for (i = 0; i < tree_length; i++) {
			node_type = get_type(parse_tree[i]);
			if (node_type === 'string') {
				output.push(parse_tree[i]);
			}
			else if (node_type === 'array') {
				match = parse_tree[i]; // convenience purposes only
				if (match[2]) { // keyword argument
					arg = argv[cursor];
					for (k = 0; k < match[2].length; k++) {
						if (!arg.hasOwnProperty(match[2][k])) {
							throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
						}
						arg = arg[match[2][k]];
					}
				}
				else if (match[1]) { // positional argument (explicit)
					arg = argv[match[1]];
				}
				else { // positional argument (implicit)
					arg = argv[cursor++];
				}

				if (/[^sO]/.test(match[8]) && (get_type(arg) != 'number')) {
					throw new Error(sprintf('[sprintf] expecting number but found %s "' + arg + '"', get_type(arg)));
				}
				switch (match[8]) {
					case 'b': arg = arg.toString(2); break;
					case 'c': arg = String.fromCharCode(arg); break;
					case 'd': arg = parseInt(arg, 10); break;
					case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
					case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
				    case 'O': arg = str_format.object_stringify(arg, 0, parseInt(match[7]) || 5); break;
					case 'o': arg = arg.toString(8); break;
					case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
					case 'u': arg = Math.abs(arg); break;
					case 'x': arg = arg.toString(16); break;
					case 'X': arg = arg.toString(16).toUpperCase(); break;
				}
				arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
				pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
				pad_length = match[6] - String(arg).length;
				pad = match[6] ? str_repeat(pad_character, pad_length) : '';
				output.push(match[5] ? arg + pad : pad + arg);
			}
		}
		return output.join('');
	};

	str_format.cache = {};

	str_format.parse = function(fmt) {
		var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
		while (_fmt) {
			if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
				parse_tree.push(match[0]);
			}
			else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
				parse_tree.push('%');
			}
			else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosOuxX])/.exec(_fmt)) !== null) {
				if (match[2]) {
					arg_names |= 1;
					var field_list = [], replacement_field = match[2], field_match = [];
					if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
						field_list.push(field_match[1]);
						while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
							if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else {
								throw new Error('[sprintf] ' + replacement_field);
							}
						}
					}
					else {
                        throw new Error('[sprintf] ' + replacement_field);
					}
					match[2] = field_list;
				}
				else {
					arg_names |= 2;
				}
				if (arg_names === 3) {
					throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported');
				}
				parse_tree.push(match);
			}
			else {
				throw new Error('[sprintf] ' + _fmt);
			}
			_fmt = _fmt.substring(match[0].length);
		}
		return parse_tree;
	};

	return str_format;
})();

var vsprintf = function(fmt, argv) {
	var argvClone = argv.slice();
	argvClone.unshift(fmt);
	return sprintf.apply(null, argvClone);
};

module.exports = sprintf;
sprintf.sprintf = sprintf;
sprintf.vsprintf = vsprintf;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4).epiviz;



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var require;var COMPILED=false;var goog=goog||{};goog.global=this;goog.global.CLOSURE_UNCOMPILED_DEFINES;goog.global.CLOSURE_DEFINES;goog.isDef=function(val){return val!==void 0};
goog.exportPath_=function(name,opt_object,opt_objectToExportTo){var parts=name.split(".");var cur=opt_objectToExportTo||goog.global;if(!(parts[0]in cur)&&cur.execScript)cur.execScript("var "+parts[0]);for(var part;parts.length&&(part=parts.shift());)if(!parts.length&&goog.isDef(opt_object))cur[part]=opt_object;else if(cur[part])cur=cur[part];else cur=cur[part]={}};
goog.define=function(name,defaultValue){var value=defaultValue;if(!COMPILED)if(goog.global.CLOSURE_UNCOMPILED_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES,name))value=goog.global.CLOSURE_UNCOMPILED_DEFINES[name];else if(goog.global.CLOSURE_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES,name))value=goog.global.CLOSURE_DEFINES[name];goog.exportPath_(name,value)};goog.define("goog.DEBUG",true);goog.define("goog.LOCALE","en");
goog.define("goog.TRUSTED_SITE",true);goog.define("goog.STRICT_MODE_COMPATIBLE",false);goog.define("goog.DISALLOW_TEST_ONLY_CODE",COMPILED&&!goog.DEBUG);goog.define("goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING",false);goog.provide=function(name){if(goog.isInModuleLoader_())throw Error("goog.provide can not be used within a goog.module.");if(!COMPILED)if(goog.isProvided_(name))throw Error('Namespace "'+name+'" already declared.');goog.constructNamespace_(name)};
goog.constructNamespace_=function(name,opt_obj){if(!COMPILED){delete goog.implicitNamespaces_[name];var namespace=name;while(namespace=namespace.substring(0,namespace.lastIndexOf("."))){if(goog.getObjectByName(namespace))break;goog.implicitNamespaces_[namespace]=true}}goog.exportPath_(name,opt_obj)};goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module=function(name){if(!goog.isString(name)||!name||name.search(goog.VALID_MODULE_RE_)==-1)throw Error("Invalid module identifier");if(!goog.isInModuleLoader_())throw Error("Module "+name+" has been loaded incorrectly. Note, "+"modules cannot be loaded as normal scripts. They require some kind of "+"pre-processing step. You're likely trying to load a module via a "+"script tag or as a part of a concatenated bundle without rewriting the "+"module. For more info see: "+"https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=name;if(!COMPILED){if(goog.isProvided_(name))throw Error('Namespace "'+name+'" already declared.');delete goog.implicitNamespaces_[name]}};goog.module.get=function(name){return goog.module.getInternal_(name)};
goog.module.getInternal_=function(name){if(!COMPILED)if(name in goog.loadedModules_)return goog.loadedModules_[name];else if(!goog.implicitNamespaces_[name]){var ns=goog.getObjectByName(name);return ns!=null?ns:null}return null};goog.moduleLoaderState_=null;goog.isInModuleLoader_=function(){return goog.moduleLoaderState_!=null};
goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInModuleLoader_())throw new Error("goog.module.declareLegacyNamespace must be called from "+"within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to "+"goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=true};
goog.setTestOnly=function(opt_message){if(goog.DISALLOW_TEST_ONLY_CODE){opt_message=opt_message||"";throw Error("Importing test-only code into non-debug environment"+(opt_message?": "+opt_message:"."));}};goog.forwardDeclare=function(name){};goog.forwardDeclare("Document");goog.forwardDeclare("HTMLScriptElement");goog.forwardDeclare("XMLHttpRequest");
if(!COMPILED){goog.isProvided_=function(name){return name in goog.loadedModules_||!goog.implicitNamespaces_[name]&&goog.isDefAndNotNull(goog.getObjectByName(name))};goog.implicitNamespaces_={"goog.module":true}}goog.getObjectByName=function(name,opt_obj){var parts=name.split(".");var cur=opt_obj||goog.global;for(var part;part=parts.shift();)if(goog.isDefAndNotNull(cur[part]))cur=cur[part];else return null;return cur};
goog.globalize=function(obj,opt_global){var global=opt_global||goog.global;for(var x in obj)global[x]=obj[x]};
goog.addDependency=function(relPath,provides,requires,opt_loadFlags){if(goog.DEPENDENCIES_ENABLED){var provide,require;var path=relPath.replace(/\\/g,"/");var deps=goog.dependencies_;if(!opt_loadFlags||typeof opt_loadFlags==="boolean")opt_loadFlags=opt_loadFlags?{"module":"goog"}:{};for(var i=0;provide=provides[i];i++){deps.nameToPath[provide]=path;deps.loadFlags[path]=opt_loadFlags}for(var j=0;require=requires[j];j++){if(!(path in deps.requires))deps.requires[path]={};deps.requires[path][require]=
true}}};goog.define("goog.ENABLE_DEBUG_LOADER",true);goog.logToConsole_=function(msg){if(goog.global.console)goog.global.console["error"](msg)};
goog.require=function(name){if(!COMPILED){if(goog.ENABLE_DEBUG_LOADER&&goog.IS_OLD_IE_)goog.maybeProcessDeferredDep_(name);if(goog.isProvided_(name)){if(goog.isInModuleLoader_())return goog.module.getInternal_(name)}else if(goog.ENABLE_DEBUG_LOADER){var path=goog.getPathFromDeps_(name);if(path)goog.writeScripts_(path);else{var errorMessage="goog.require could not find: "+name;goog.logToConsole_(errorMessage);throw Error(errorMessage);}}return null}};goog.basePath="";goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;goog.global.CLOSURE_IMPORT_SCRIPT;goog.nullFunction=function(){};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(ctor){ctor.instance_=undefined;ctor.getInstance=function(){if(ctor.instance_)return ctor.instance_;if(goog.DEBUG)goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=ctor;return ctor.instance_=new ctor}};goog.instantiatedSingletons_=[];goog.define("goog.LOAD_MODULE_USING_EVAL",true);
goog.define("goog.SEAL_MODULE_EXPORTS",goog.DEBUG);goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;goog.define("goog.TRANSPILE","detect");goog.define("goog.TRANSPILER","transpile.js");
if(goog.DEPENDENCIES_ENABLED){goog.dependencies_={loadFlags:{},nameToPath:{},requires:{},visited:{},written:{},deferred:{}};goog.inHtmlDocument_=function(){var doc=goog.global.document;return doc!=null&&"write"in doc};goog.findBasePath_=function(){if(goog.isDef(goog.global.CLOSURE_BASE_PATH)){goog.basePath=goog.global.CLOSURE_BASE_PATH;return}else if(!goog.inHtmlDocument_())return;var doc=goog.global.document;var scripts=doc.getElementsByTagName("SCRIPT");for(var i=scripts.length-1;i>=0;--i){var script=
(scripts[i]);var src=script.src;var qmark=src.lastIndexOf("?");var l=qmark==-1?src.length:qmark;if(src.substr(l-7,7)=="base.js"){goog.basePath=src.substr(0,l-7);return}}};goog.importScript_=function(src,opt_sourceText){var importScript=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;if(importScript(src,opt_sourceText))goog.dependencies_.written[src]=true};goog.IS_OLD_IE_=!!(!goog.global.atob&&goog.global.document&&goog.global.document.all);goog.importProcessedScript_=function(src,isModule,
needsTranspile){var bootstrap='goog.retrieveAndExec_("'+src+'", '+isModule+", "+needsTranspile+");";goog.importScript_("",bootstrap)};goog.queuedModules_=[];goog.wrapModule_=function(srcUrl,scriptText){if(!goog.LOAD_MODULE_USING_EVAL||!goog.isDef(goog.global.JSON))return""+"goog.loadModule(function(exports) {"+'"use strict";'+scriptText+"\n"+";return exports"+"});"+"\n//# sourceURL="+srcUrl+"\n";else return""+"goog.loadModule("+goog.global.JSON.stringify(scriptText+"\n//# sourceURL="+srcUrl+"\n")+
");"};goog.loadQueuedModules_=function(){var count=goog.queuedModules_.length;if(count>0){var queue=goog.queuedModules_;goog.queuedModules_=[];for(var i=0;i<count;i++){var path=queue[i];goog.maybeProcessDeferredPath_(path)}}};goog.maybeProcessDeferredDep_=function(name){if(goog.isDeferredModule_(name)&&goog.allDepsAreAvailable_(name)){var path=goog.getPathFromDeps_(name);goog.maybeProcessDeferredPath_(goog.basePath+path)}};goog.isDeferredModule_=function(name){var path=goog.getPathFromDeps_(name);
var loadFlags=path&&goog.dependencies_.loadFlags[path]||{};var languageLevel=loadFlags["lang"]||"es3";if(path&&(loadFlags["module"]=="goog"||goog.needsTranspile_(languageLevel))){var abspath=goog.basePath+path;return abspath in goog.dependencies_.deferred}return false};goog.allDepsAreAvailable_=function(name){var path=goog.getPathFromDeps_(name);if(path&&path in goog.dependencies_.requires)for(var requireName in goog.dependencies_.requires[path])if(!goog.isProvided_(requireName)&&!goog.isDeferredModule_(requireName))return false;
return true};goog.maybeProcessDeferredPath_=function(abspath){if(abspath in goog.dependencies_.deferred){var src=goog.dependencies_.deferred[abspath];delete goog.dependencies_.deferred[abspath];goog.globalEval(src)}};goog.loadModuleFromUrl=function(url){goog.retrieveAndExec_(url,true,false)};goog.writeScriptSrcNode_=function(src){goog.global.document.write('<script type="text/javascript" src="'+src+'"></'+"script>")};goog.appendScriptSrcNode_=function(src){var doc=goog.global.document;var scriptEl=
(doc.createElement("script"));scriptEl.type="text/javascript";scriptEl.src=src;scriptEl.defer=false;scriptEl.async=false;doc.head.appendChild(scriptEl)};goog.writeScriptTag_=function(src,opt_sourceText){if(goog.inHtmlDocument_()){var doc=goog.global.document;if(!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&doc.readyState=="complete"){var isDeps=/\bdeps.js$/.test(src);if(isDeps)return false;else throw Error('Cannot write "'+src+'" after document load');}if(opt_sourceText===undefined)if(!goog.IS_OLD_IE_)if(goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING)goog.appendScriptSrcNode_(src);
else goog.writeScriptSrcNode_(src);else{var state=" onreadystatechange='goog.onScriptLoad_(this, "+ ++goog.lastNonModuleScriptIndex_+")' ";doc.write('<script type="text/javascript" src="'+src+'"'+state+"></"+"script>")}else doc.write('<script type="text/javascript">'+goog.protectScriptTag_(opt_sourceText)+"</"+"script>");return true}else return false};goog.protectScriptTag_=function(str){return str.replace(/<\/(SCRIPT)/ig,"\\x3c\\$1")};goog.needsTranspile_=function(lang){if(goog.TRANSPILE=="always")return true;
else if(goog.TRANSPILE=="never")return false;else if(!goog.requiresTranspilation_)goog.requiresTranspilation_=goog.createRequiresTranspilation_();if(lang in goog.requiresTranspilation_)return goog.requiresTranspilation_[lang];else throw new Error("Unknown language mode: "+lang);};goog.requiresTranspilation_=null;goog.lastNonModuleScriptIndex_=0;goog.onScriptLoad_=function(script,scriptIndex){if(script.readyState=="complete"&&goog.lastNonModuleScriptIndex_==scriptIndex)goog.loadQueuedModules_();return true};
goog.writeScripts_=function(pathToLoad){var scripts=[];var seenScript={};var deps=goog.dependencies_;function visitNode(path){if(path in deps.written)return;if(path in deps.visited)return;deps.visited[path]=true;if(path in deps.requires)for(var requireName in deps.requires[path])if(!goog.isProvided_(requireName))if(requireName in deps.nameToPath)visitNode(deps.nameToPath[requireName]);else throw Error("Undefined nameToPath for "+requireName);if(!(path in seenScript)){seenScript[path]=true;scripts.push(path)}}
visitNode(pathToLoad);for(var i=0;i<scripts.length;i++){var path=scripts[i];goog.dependencies_.written[path]=true}var moduleState=goog.moduleLoaderState_;goog.moduleLoaderState_=null;for(var i=0;i<scripts.length;i++){var path=scripts[i];if(path){var loadFlags=deps.loadFlags[path]||{};var languageLevel=loadFlags["lang"]||"es3";var needsTranspile=goog.needsTranspile_(languageLevel);if(loadFlags["module"]=="goog"||needsTranspile)goog.importProcessedScript_(goog.basePath+path,loadFlags["module"]=="goog",
needsTranspile);else goog.importScript_(goog.basePath+path)}else{goog.moduleLoaderState_=moduleState;throw Error("Undefined script input");}}goog.moduleLoaderState_=moduleState};goog.getPathFromDeps_=function(rule){if(rule in goog.dependencies_.nameToPath)return goog.dependencies_.nameToPath[rule];else return null};goog.findBasePath_();if(!goog.global.CLOSURE_NO_DEPS)goog.importScript_(goog.basePath+"deps.js")}
goog.loadModule=function(moduleDef){var previousState=goog.moduleLoaderState_;try{goog.moduleLoaderState_={moduleName:undefined,declareLegacyNamespace:false};var exports;if(goog.isFunction(moduleDef))exports=moduleDef.call(undefined,{});else if(goog.isString(moduleDef))exports=goog.loadModuleFromSource_.call(undefined,moduleDef);else throw Error("Invalid module definition");var moduleName=goog.moduleLoaderState_.moduleName;if(!goog.isString(moduleName)||!moduleName)throw Error('Invalid module name "'+
moduleName+'"');if(goog.moduleLoaderState_.declareLegacyNamespace)goog.constructNamespace_(moduleName,exports);else if(goog.SEAL_MODULE_EXPORTS&&Object.seal&&goog.isObject(exports))Object.seal(exports);goog.loadedModules_[moduleName]=exports}finally{goog.moduleLoaderState_=previousState}};goog.loadModuleFromSource_=function(){var exports={};eval(arguments[0]);return exports};
goog.normalizePath_=function(path){var components=path.split("/");var i=0;while(i<components.length)if(components[i]==".")components.splice(i,1);else if(i&&components[i]==".."&&components[i-1]&&components[i-1]!="..")components.splice(--i,2);else i++;return components.join("/")};
goog.loadFileSync_=function(src){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(src);else try{var xhr=new goog.global["XMLHttpRequest"];xhr.open("get",src,false);xhr.send();return xhr.status==0||xhr.status==200?xhr.responseText:null}catch(err){return null}};
goog.retrieveAndExec_=function(src,isModule,needsTranspile){if(!COMPILED){var originalPath=src;src=goog.normalizePath_(src);var importScript=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;var scriptText=goog.loadFileSync_(src);if(scriptText==null)throw new Error('Load of "'+src+'" failed');if(needsTranspile)scriptText=goog.transpile_.call(goog.global,scriptText,src);if(isModule)scriptText=goog.wrapModule_(src,scriptText);else scriptText+="\n//# sourceURL="+src;var isOldIE=goog.IS_OLD_IE_;
if(isOldIE){goog.dependencies_.deferred[originalPath]=scriptText;goog.queuedModules_.push(originalPath)}else importScript(src,scriptText)}};
goog.transpile_=function(code,path){var jscomp=goog.global["$jscomp"];if(!jscomp)goog.global["$jscomp"]=jscomp={};var transpile=jscomp.transpile;if(!transpile){var transpilerPath=goog.basePath+goog.TRANSPILER;var transpilerCode=goog.loadFileSync_(transpilerPath);if(transpilerCode){eval(transpilerCode+"\n//# sourceURL="+transpilerPath);if(goog.global["$gwtExport"]&&goog.global["$gwtExport"]["$jscomp"]&&!goog.global["$gwtExport"]["$jscomp"]["transpile"])throw new Error('The transpiler did not properly export the "transpile" '+
"method. $gwtExport: "+JSON.stringify(goog.global["$gwtExport"]));goog.global["$jscomp"].transpile=goog.global["$gwtExport"]["$jscomp"]["transpile"];jscomp=goog.global["$jscomp"];transpile=jscomp.transpile}}if(!transpile){var suffix=" requires transpilation but no transpiler was found.";transpile=jscomp.transpile=function(code,path){goog.logToConsole_(path+suffix);return code}}return transpile(code,path)};
goog.typeOf=function(value){var s=typeof value;if(s=="object")if(value){if(value instanceof Array)return"array";else if(value instanceof Object)return s;var className=Object.prototype.toString.call((value));if(className=="[object Window]")return"object";if(className=="[object Array]"||typeof value.length=="number"&&typeof value.splice!="undefined"&&typeof value.propertyIsEnumerable!="undefined"&&!value.propertyIsEnumerable("splice"))return"array";if(className=="[object Function]"||typeof value.call!=
"undefined"&&typeof value.propertyIsEnumerable!="undefined"&&!value.propertyIsEnumerable("call"))return"function"}else return"null";else if(s=="function"&&typeof value.call=="undefined")return"object";return s};goog.isNull=function(val){return val===null};goog.isDefAndNotNull=function(val){return val!=null};goog.isArray=function(val){return goog.typeOf(val)=="array"};goog.isArrayLike=function(val){var type=goog.typeOf(val);return type=="array"||type=="object"&&typeof val.length=="number"};
goog.isDateLike=function(val){return goog.isObject(val)&&typeof val.getFullYear=="function"};goog.isString=function(val){return typeof val=="string"};goog.isBoolean=function(val){return typeof val=="boolean"};goog.isNumber=function(val){return typeof val=="number"};goog.isFunction=function(val){return goog.typeOf(val)=="function"};goog.isObject=function(val){var type=typeof val;return type=="object"&&val!=null||type=="function"};
goog.getUid=function(obj){return obj[goog.UID_PROPERTY_]||(obj[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(obj){return!!obj[goog.UID_PROPERTY_]};goog.removeUid=function(obj){if(obj!==null&&"removeAttribute"in obj)obj.removeAttribute(goog.UID_PROPERTY_);try{delete obj[goog.UID_PROPERTY_]}catch(ex){}};goog.UID_PROPERTY_="closure_uid_"+(Math.random()*1E9>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;
goog.cloneObject=function(obj){var type=goog.typeOf(obj);if(type=="object"||type=="array"){if(obj.clone)return obj.clone();var clone=type=="array"?[]:{};for(var key in obj)clone[key]=goog.cloneObject(obj[key]);return clone}return obj};goog.bindNative_=function(fn,selfObj,var_args){return(fn.call.apply(fn.bind,arguments))};
goog.bindJs_=function(fn,selfObj,var_args){if(!fn)throw new Error;if(arguments.length>2){var boundArgs=Array.prototype.slice.call(arguments,2);return function(){var newArgs=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(newArgs,boundArgs);return fn.apply(selfObj,newArgs)}}else return function(){return fn.apply(selfObj,arguments)}};
goog.bind=function(fn,selfObj,var_args){if(Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1)goog.bind=goog.bindNative_;else goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};goog.partial=function(fn,var_args){var args=Array.prototype.slice.call(arguments,1);return function(){var newArgs=args.slice();newArgs.push.apply(newArgs,arguments);return fn.apply(this,newArgs)}};goog.mixin=function(target,source){for(var x in source)target[x]=source[x]};
goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(script){if(goog.global.execScript)goog.global.execScript(script,"JavaScript");else if(goog.global.eval){if(goog.evalWorksForGlobals_==null){goog.global.eval("var _evalTest_ = 1;");if(typeof goog.global["_evalTest_"]!="undefined"){try{delete goog.global["_evalTest_"]}catch(ignore){}goog.evalWorksForGlobals_=true}else goog.evalWorksForGlobals_=false}if(goog.evalWorksForGlobals_)goog.global.eval(script);else{var doc=goog.global.document;var scriptElt=(doc.createElement("SCRIPT"));
scriptElt.type="text/javascript";scriptElt.defer=false;scriptElt.appendChild(doc.createTextNode(script));doc.body.appendChild(scriptElt);doc.body.removeChild(scriptElt)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.cssNameMapping_;goog.cssNameMappingStyle_;
goog.getCssName=function(className,opt_modifier){if(String(className).charAt(0)==".")throw new Error('className passed in goog.getCssName must not start with ".".'+" You passed: "+className);var getMapping=function(cssName){return goog.cssNameMapping_[cssName]||cssName};var renameByParts=function(cssName){var parts=cssName.split("-");var mapped=[];for(var i=0;i<parts.length;i++)mapped.push(getMapping(parts[i]));return mapped.join("-")};var rename;if(goog.cssNameMapping_)rename=goog.cssNameMappingStyle_==
"BY_WHOLE"?getMapping:renameByParts;else rename=function(a){return a};var result=opt_modifier?className+"-"+rename(opt_modifier):rename(className);if(goog.global.CLOSURE_CSS_NAME_MAP_FN)return goog.global.CLOSURE_CSS_NAME_MAP_FN(result);return result};goog.setCssNameMapping=function(mapping,opt_style){goog.cssNameMapping_=mapping;goog.cssNameMappingStyle_=opt_style};goog.global.CLOSURE_CSS_NAME_MAPPING;if(!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING)goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING;
goog.getMsg=function(str,opt_values){if(opt_values)str=str.replace(/\{\$([^}]+)}/g,function(match,key){return opt_values!=null&&key in opt_values?opt_values[key]:match});return str};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(publicPath,object,opt_objectToExportTo){goog.exportPath_(publicPath,object,opt_objectToExportTo)};goog.exportProperty=function(object,publicName,symbol){object[publicName]=symbol};
goog.inherits=function(childCtor,parentCtor){function tempCtor(){}tempCtor.prototype=parentCtor.prototype;childCtor.superClass_=parentCtor.prototype;childCtor.prototype=new tempCtor;childCtor.prototype.constructor=childCtor;childCtor.base=function(me,methodName,var_args){var args=new Array(arguments.length-2);for(var i=2;i<arguments.length;i++)args[i-2]=arguments[i];return parentCtor.prototype[methodName].apply(me,args)}};
goog.base=function(me,opt_methodName,var_args){var caller=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||goog.DEBUG&&!caller)throw Error("arguments.caller not defined.  goog.base() cannot be used "+"with strict mode code. See "+"http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(caller.superClass_){var ctorArgs=new Array(arguments.length-1);for(var i=1;i<arguments.length;i++)ctorArgs[i-1]=arguments[i];return caller.superClass_.constructor.apply(me,ctorArgs)}var args=new Array(arguments.length-
2);for(var i=2;i<arguments.length;i++)args[i-2]=arguments[i];var foundCaller=false;for(var ctor=me.constructor;ctor;ctor=ctor.superClass_&&ctor.superClass_.constructor)if(ctor.prototype[opt_methodName]===caller)foundCaller=true;else if(foundCaller)return ctor.prototype[opt_methodName].apply(me,args);if(me[opt_methodName]===caller)return me.constructor.prototype[opt_methodName].apply(me,args);else throw Error("goog.base called from a method of one name "+"to a method of a different name");};
goog.scope=function(fn){if(goog.isInModuleLoader_())throw Error("goog.scope is not supported within a goog.module.");fn.call(goog.global)};if(!COMPILED)goog.global["COMPILED"]=COMPILED;
goog.defineClass=function(superClass,def){var constructor=def.constructor;var statics=def.statics;if(!constructor||constructor==Object.prototype.constructor)constructor=function(){throw Error("cannot instantiate an interface (no constructor defined).");};var cls=goog.defineClass.createSealingConstructor_(constructor,superClass);if(superClass)goog.inherits(cls,superClass);delete def.constructor;delete def.statics;goog.defineClass.applyProperties_(cls.prototype,def);if(statics!=null)if(statics instanceof
Function)statics(cls);else goog.defineClass.applyProperties_(cls,statics);return cls};goog.defineClass.ClassDescriptor;goog.define("goog.defineClass.SEAL_CLASS_INSTANCES",goog.DEBUG);
goog.defineClass.createSealingConstructor_=function(ctr,superClass){if(!goog.defineClass.SEAL_CLASS_INSTANCES)return ctr;var superclassSealable=!goog.defineClass.isUnsealable_(superClass);var wrappedCtr=function(){var instance=ctr.apply(this,arguments)||this;instance[goog.UID_PROPERTY_]=instance[goog.UID_PROPERTY_];if(this.constructor===wrappedCtr&&superclassSealable&&Object.seal instanceof Function)Object.seal(instance);return instance};return wrappedCtr};
goog.defineClass.isUnsealable_=function(ctr){return ctr&&ctr.prototype&&ctr.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]};goog.defineClass.OBJECT_PROTOTYPE_FIELDS_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];
goog.defineClass.applyProperties_=function(target,source){var key;for(key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key];for(var i=0;i<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;i++){key=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i];if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}};goog.tagUnsealableClass=function(ctr){if(!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES)ctr.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=true};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";
goog.createRequiresTranspilation_=function(){var requiresTranspilation={"es3":false};var transpilationRequiredForAllLaterModes=false;function addNewerLanguageTranspilationCheck(modeName,isSupported){if(transpilationRequiredForAllLaterModes)requiresTranspilation[modeName]=true;else if(isSupported())requiresTranspilation[modeName]=false;else{requiresTranspilation[modeName]=true;transpilationRequiredForAllLaterModes=true}}function evalCheck(code){try{return!!eval(code)}catch(ignored){return false}}addNewerLanguageTranspilationCheck("es5",
function(){return evalCheck("[1,].length==1")});addNewerLanguageTranspilationCheck("es6",function(){var es6fullTest="class X{constructor(){if(new.target!=String)throw 1;this.x=42}}"+"let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof "+"String))throw 1;for(const a of[2,3]){if(a==2)continue;function "+"f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()"+"==3}";return evalCheck('(()=>{"use strict";'+es6fullTest+"})()")});addNewerLanguageTranspilationCheck("es6-impl",function(){return true});
addNewerLanguageTranspilationCheck("es7",function(){return evalCheck("2 ** 2 == 4")});addNewerLanguageTranspilationCheck("es8",function(){return evalCheck("async () => 1, true")});return requiresTranspilation};goog.provide("epiviz.deferred.Deferred");epiviz.deferred.Deferred=function(deferred){this._deferred=deferred||$.Deferred()};epiviz.deferred.Deferred.State={PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"};epiviz.deferred.Deferred.prototype.then=function(doneFilter,failFilter,progressFilter){return new epiviz.deferred.Promise(this._deferred.then(doneFilter,failFilter,progressFilter))};
epiviz.deferred.Deferred.prototype.done=function(doneCallbacks,moreDoneCallbacks){return new epiviz.deferred.Deferred(this._deferred.done(doneCallbacks,moreDoneCallbacks))};epiviz.deferred.Deferred.prototype.fail=function(failCallbacks,moreFailCallbacks){return new epiviz.deferred.Deferred(this._deferred.fail(failCallbacks,moreFailCallbacks))};
epiviz.deferred.Deferred.prototype.always=function(alwaysCallbacks,moreAlwaysCallbacks){return new epiviz.deferred.Deferred(this._deferred.always(alwaysCallbacks,moreAlwaysCallbacks))};epiviz.deferred.Deferred.prototype.state=function(){return this._deferred.state()};epiviz.deferred.Deferred.prototype.notify=function(args){return new epiviz.deferred.Deferred(this._deferred.notify(args))};
epiviz.deferred.Deferred.prototype.notifyWith=function(context,args){return new epiviz.deferred.Deferred(this._deferred.notifyWith(context,args))};epiviz.deferred.Deferred.prototype.progress=function(progressCallbacks,moreProgressCallbacks){return new epiviz.deferred.Deferred(this._deferred.progress(progressCallbacks,moreProgressCallbacks))};epiviz.deferred.Deferred.prototype.promise=function(target){return new epiviz.deferred.Promise(this._deferred.promise(target))};
epiviz.deferred.Deferred.prototype.reject=function(args){return new epiviz.deferred.Deferred(this._deferred.reject(args))};epiviz.deferred.Deferred.prototype.rejectWith=function(context,args){return new epiviz.deferred.Deferred(this._deferred.rejectWith(context,args))};epiviz.deferred.Deferred.prototype.resolve=function(args){return new epiviz.deferred.Deferred(this._deferred.resolve(args))};
epiviz.deferred.Deferred.prototype.resolveWith=function(context,args){return new epiviz.deferred.Deferred(this._deferred.resolveWith(context,args))};goog.provide("epiviz.utils");goog.require("epiviz.deferred.Deferred");epiviz.utils=function(){};epiviz.utils.capitalizeFirstLetter=function(str){return str.charAt(0).toUpperCase()+str.slice(1)};epiviz.utils.stringContains=function(str,substr){return str.indexOf(substr)!=-1};epiviz.utils.stringStartsWith=function(str,prefix){return str.indexOf(prefix)==0};epiviz.utils.stringEndsWith=function(str,suffix){return str.lastIndexOf(suffix)==str.length-suffix.length};
epiviz.utils.fillArray=function(n,value){n=n||0;var result=new Array(n);for(var i=0;i<n;++i)result[i]=value;return result};epiviz.utils.indexOf=function(arr,predicate){for(var i=0;i<arr.length;++i)if(predicate(arr[i]))return i;return-1};epiviz.utils.arraysEqual=function(arr1,arr2){if(arr1==arr2)return true;if(!arr1||!arr2)return false;if(arr1.length!=arr2.length)return false;if(arr1<arr2||arr2<arr1)return false;for(var i=0;i<arr1.length;++i)if(arr1[i]!=arr2[i])return false;return true};
epiviz.utils.elementsEqual=function(arr1,arr2){if(arr1==arr2)return true;if(!arr1||!arr2)return false;if(arr1.length!=arr2.length)return false;var valueMap={};var i;for(i=0;i<arr1.length;++i){if(!(arr1[i]in valueMap))valueMap[arr1[i]]=0;++valueMap[arr1[i]]}for(i=0;i<arr2.length;++i){if(!valueMap[arr2[i]])return false;--valueMap[arr2[i]]}return true};epiviz.utils.range=function(n,startIndex){startIndex=startIndex||0;n=n||0;var result=new Array(n);for(var i=0;i<n;++i)result[i]=i+startIndex;return result};
epiviz.utils.arrayAppend=function(self,arr){self.push.apply(self,arr)};epiviz.utils.arrayFlip=function(arr){var result={};for(var i=0;i<arr.length;++i)result[arr[i]]=i;return result};epiviz.utils.indexOfMin=function(matrix,isSymmetrical){var ret=null;var min=null;for(var i=0;i<matrix.length;++i)for(var j=isSymmetrical?i+1:0;j<matrix[i].length;++j)if(min==null||matrix[i][j]<min){min=matrix[i][j];ret=[i,j]}return{min:min,index:ret}};
epiviz.utils.arrayIntersection=function(arr1,arr2){var arr1Map={};arr1.forEach(function(e){arr1Map[e]=e});var ret=[];arr2.forEach(function(e){if(e in arr1Map)ret.push(e)});return ret};epiviz.utils.asyncFor=function(n,iterationCallback,finishedCallback){if(!n){if(finishedCallback)finishedCallback();return}var iteration=function(i){if(i>=n){if(finishedCallback)finishedCallback();return}iterationCallback(i,function(result){if(result){if(finishedCallback)finishedCallback()}else iteration(i+1)})};iteration(0)};
epiviz.utils.deferredFor=function(n,deferredIteration){var initial=new epiviz.deferred.Deferred;var ret=new epiviz.deferred.Deferred;var p=initial.promise();for(var i=0;i<n;++i)(function(i){p=p.then(function(){var promise=deferredIteration(i);if(i==n-1)promise.then(function(){ret.resolve()});return promise})})(i);initial.resolve();return ret};epiviz.utils.mapCopy=function(map){var result={};for(var key in map){if(!map.hasOwnProperty(key))continue;result[key]=map[key]}return result};
epiviz.utils.mapEquals=function(m1,m2){if(m1==m2)return true;if(!m1||!m2)return false;var k;for(k in m1){if(!m1.hasOwnProperty(k))continue;if(!m2.hasOwnProperty(k))return false;if(m1[k]!=m2[k])return false}for(k in m2){if(!m2.hasOwnProperty(k))continue;if(!m1.hasOwnProperty(k))return false}return true};
epiviz.utils.mapCombine=function(m1,m2,combineArrayVals){var result={};var key;if(m2)for(key in m2){if(!m2.hasOwnProperty(key))continue;result[key]=m2[key]}if(m1)for(key in m1){if(!m1.hasOwnProperty(key))continue;if(combineArrayVals&&result[key]&&$.isArray(result[key])&&m1[key]&&$.isArray(m1[key]))result[key]=result[key].concat(m1[key]);else result[key]=m1[key]}return result};
epiviz.utils.mapJoin=function(map,keyValueSep,separator){if(!keyValueSep&&keyValueSep!=="")keyValueSep=":";if(!separator&&separator!=="")separator=",";var result="";for(var key in map){if(!map.hasOwnProperty(key))continue;if(result)result+=separator;result+=key+keyValueSep+map[key]}return result};epiviz.utils.mapKeyIntersection=function(m1,m2){var result=[];if(!m1||!m2)return result;for(var key in m1){if(!m1.hasOwnProperty(key))continue;if(key in m2)result.push(key)}return result};
epiviz.utils.forEach=function(obj,callback){for(var key in obj){if(!obj.hasOwnProperty(key))continue;if(callback(obj[key],key,obj))break}};
epiviz.utils.evaluateFullyQualifiedTypeName=function(typeName){try{var namespaces=typeName.split(".");var func=namespaces.pop();var context=window;for(var i=0;i<namespaces.length;++i)context=context[namespaces[i]];var result=context[func];if(typeof result!=="function"){console.error("Unknown type name: "+typeName);return null}return result}catch(error){console.error("Unknown type name: "+typeName);return null}};
epiviz.utils.applyConstructor=function(ctor,params){var obj;var fakeCtor=function(){};fakeCtor.prototype=ctor.prototype;obj=new fakeCtor;obj.constructor=ctor;ctor.apply(obj,params);return obj};epiviz.utils.RAD_TO_DEG=180/Math.PI;epiviz.utils.DEG_TO_RAD=Math.PI/180;epiviz.utils.getInternetExplorerVersion=function(){var rv=-1;if(navigator.appName=="Microsoft Internet Explorer"){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");var match=re.exec(ua);if(match!=null)rv=parseFloat(match[1])}return rv};
epiviz.utils.generatePseudoGUID=function(size){var chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";var result="";for(var i=0;i<size;++i)result+=chars[Math.round(Math.random()*(chars.length-1))];return result};epiviz.utils.colorize=function(min,max,median,colorMin,colorMax,colorMedian){return d3.scale.linear().domain([min,median,max]).range([colorMin,colorMedian,colorMax])};
epiviz.utils.colorizeBinary=function(min,max,colorMin,colorMax){return d3.scale.linear().domain([min,max]).range([colorMin,colorMax])};epiviz.utils.sign=function(val){return val<0?-1:val==0?0:1};goog.provide("caja");goog.provide("epiviz.caja");goog.require("epiviz.deferred.Deferred");goog.require("epiviz.utils");caja.initialize=function(){};epiviz.caja.cajole=function(funcStr,args){var deferred=new epiviz.deferred.Deferred;setTimeout(function(){deferred.resolve(eval("("+funcStr+")"))},0);return deferred};
epiviz.caja.run=function(scriptUrl,args){var deferred=new epiviz.deferred.Deferred;setTimeout(function(){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.type="text/javascript";script.src=scriptUrl;script.onreadystatechange=script.onload=function(){deferred.resolve()};head.appendChild(script)},0);return deferred};
epiviz.caja.chain=function(scriptUrls,args){if(!$.isArray(args))args=epiviz.utils.fillArray(scriptUrls.length,args);return epiviz.utils.deferredFor(scriptUrls.length,function(j){return epiviz.caja.run(scriptUrls[j],args[j])})};
epiviz.caja.buildChartMethodContext=function(){return{epiviz:{ui:{charts:epiviz.ui.charts,controls:epiviz.ui.controls},utils:epiviz.utils,plugins:epiviz.plugins,measurements:epiviz.measurements,events:epiviz.events,deferred:epiviz.deferred,datatypes:epiviz.datatypes,data:{DataProvider:epiviz.data.DataProvider,Request:epiviz.data.Request,Response:epiviz.data.Response,WebServerDataProvider:{makeGetRequest:epiviz.data.WebServerDataProvider.makeGetRequest}},Config:epiviz.Config},d3:d3,$:$,sprintf:sprintf,
goog:goog}};goog.provide("epiviz.events.EventListener");epiviz.events.EventListener=function(updateCallback){this._id=epiviz.events.EventListener._nextId++;this._updateCallback=updateCallback};epiviz.events.EventListener._nextId=0;epiviz.events.EventListener.prototype.update=function(args){this._updateCallback(args)};epiviz.events.EventListener.prototype.id=function(){return this._id};goog.provide("epiviz.ui.WebArgsManager");goog.require("epiviz.utils");goog.require("epiviz.events.EventListener");epiviz.ui.WebArgsManager=function(locationManager,workspaceManager){this._locationManager=locationManager;this._workspaceManager=workspaceManager;this._registerLocationChanged();this._registerActiveWorkspaceChanged()};epiviz.ui.WebArgsManager.WEB_ARGS=epiviz.ui.WebArgsManager.WEB_ARGS||{};
epiviz.ui.WebArgsManager.extractWindowLocationArgs=function(){var argsStr=window.location.search.length>0?window.location.search.substr(1):"";var argPairs=argsStr.split("&");var args={};argPairs.forEach(function(pair,i){if(pair.trim().length==0)return;var arrInd=pair.indexOf("[]");if(arrInd==0)return;var arg,val;var eqInd=pair.indexOf("=");if(eqInd<0){arg=arrInd<0?pair:pair.substr(0,arrInd);val="true"}else{arg=arrInd<0?pair.substr(0,eqInd):pair.substr(0,arrInd);val=pair.substr(eqInd+1)}arg=decodeURIComponent(arg);
val=decodeURIComponent(val);if(arrInd<0)args[arg]=val;else{if(!(arg in args))args[arg]=[];args[arg].push(val)}});return args};
epiviz.ui.WebArgsManager.prototype._updateUrl=function(){var url="?";var args=epiviz.ui.WebArgsManager.WEB_ARGS;if(!("ws"in args)&&"workspace"in args){args["ws"]=args["workspace"];delete args["workspace"]}for(var arg in args){if(!args.hasOwnProperty(arg))continue;if(Array.isArray(args[arg])){var val;for(var i=0;i<args[arg].length;++i){val=args[arg][i];if(val==undefined)val="undefined";url+=sprintf("%s[]=%s&",arg,val)}}else{val=args[arg];if(val==undefined)val="undefined";url+=sprintf("%s=%s&",arg,
val)}}var ie=epiviz.utils.getInternetExplorerVersion();if(ie<0||ie>=10)switch(window.location.protocol){case "http:":case "https:":history.replaceState(null,"",url);break;case "file:":break;default:}};
epiviz.ui.WebArgsManager.prototype._registerLocationChanged=function(){var self=this;this._locationManager.onCurrentLocationChanged().addListener(new epiviz.events.EventListener(function(e){epiviz.ui.WebArgsManager.WEB_ARGS["seqName"]=e.newValue.seqName();epiviz.ui.WebArgsManager.WEB_ARGS["start"]=e.newValue.start();epiviz.ui.WebArgsManager.WEB_ARGS["end"]=e.newValue.end();epiviz.ui.WebArgsManager.WEB_ARGS["genome"]=e.newValue.genome();self._updateUrl()}))};
epiviz.ui.WebArgsManager.prototype._registerActiveWorkspaceChanged=function(){var self=this;this._workspaceManager.onActiveWorkspaceChanged().addListener(new epiviz.events.EventListener(function(e){epiviz.ui.WebArgsManager.WEB_ARGS["ws"]=e.workspaceId||"";delete epiviz.ui.WebArgsManager.WEB_ARGS["workspace"];self._updateUrl()}))};goog.provide("epiviz.events.Event");epiviz.events.Event=function(){this._count=0;this._listeners={};this._firing=false};epiviz.events.Event.prototype.addListener=function(listener){if(!this._listeners[listener.id()])++this._count;this._listeners[listener.id()]=listener};epiviz.events.Event.prototype.removeListener=function(listener){if(!this._listeners[listener.id()])return;delete this._listeners[listener.id()];--this._count};
epiviz.events.Event.prototype.notify=function(args){if(this._firing)return;if(this._count==0)return;this._firing=true;for(var id in this._listeners){if(!this._listeners.hasOwnProperty(id))continue;this._listeners[id].update(args)}this._firing=false};epiviz.events.Event.prototype.isFiring=function(){return this._firing};goog.provide("epiviz.data.MessageType");epiviz.data.MessageType={REQUEST:"request",RESPONSE:"response"};goog.provide("epiviz.data.Response");goog.require("epiviz.data.MessageType");epiviz.data.Response=function(requestId,data){this._id=requestId;this._data=data};epiviz.data.Response.prototype.id=function(){return this._id};epiviz.data.Response.prototype.data=function(){var data=this._data;var all_keys=Object.keys(data);if(all_keys.length>0)if(all_keys.indexOf("success")!=-1){all_keys.splice(all_keys.indexOf("success"),1);delete data["success"]}return data};epiviz.data.Response.prototype.type=function(){return epiviz.data.MessageType.RESPONSE};
epiviz.data.Response.prototype.raw=function(){return{requestId:this._id,type:this.type(),data:this._data}};epiviz.data.Response.fromRawObject=function(o){return new epiviz.data.Response(o.requestId,o.data)};goog.provide("epiviz.data.DataProvider");goog.require("epiviz.events.Event");goog.require("epiviz.data.Response");
epiviz.data.DataProvider=function(id){this._id=id;this._requestAddSeqInfos=new epiviz.events.Event;this._requestRemoveSeqNames=new epiviz.events.Event;this._requestAddMeasurements=new epiviz.events.Event;this._requestRemoveMeasurements=new epiviz.events.Event;this._requestAddChart=new epiviz.events.Event;this._requestRemoveChart=new epiviz.events.Event;this._requestFlushCache=new epiviz.events.Event;this._requestClearDatasourceGroupCache=new epiviz.events.Event;this._requestNavigate=new epiviz.events.Event;
this._requestRedraw=new epiviz.events.Event;this._requestCurrentLocation=new epiviz.events.Event;this._requestPrintWorkspace=new epiviz.events.Event;this._requestSetChartSettings=new epiviz.events.Event;this._requestGetChartSettings=new epiviz.events.Event;this._requestGetAvailableCharts=new epiviz.events.Event;this._requestLoadWorkspace=new epiviz.events.Event;this._requestUiStatus=new epiviz.events.Event;this._requestLoadMeasurements=new epiviz.events.Event};
epiviz.data.DataProvider.prototype.id=function(){return this._id};epiviz.data.DataProvider.prototype.getData=function(request,callback){callback(epiviz.data.Response.fromRawObject({requestId:request.id(),data:null}))};epiviz.data.DataProvider.prototype.onRequestAddSeqInfos=function(){return this._requestAddSeqInfos};epiviz.data.DataProvider.prototype.onRequestRemoveSeqNames=function(){return this._requestRemoveSeqNames};epiviz.data.DataProvider.prototype.onRequestAddMeasurements=function(){return this._requestAddMeasurements};
epiviz.data.DataProvider.prototype.onRequestRemoveMeasurements=function(){return this._requestRemoveMeasurements};epiviz.data.DataProvider.prototype.onRequestLoadMeasurements=function(){return this._requestLoadMeasurements};epiviz.data.DataProvider.prototype.onRequestAddChart=function(){return this._requestAddChart};epiviz.data.DataProvider.prototype.onRequestRemoveChart=function(){return this._requestRemoveChart};epiviz.data.DataProvider.prototype.onRequestFlushCache=function(){return this._requestFlushCache};
epiviz.data.DataProvider.prototype.onRequestClearDatasourceGroupCache=function(){return this._requestClearDatasourceGroupCache};epiviz.data.DataProvider.prototype.onRequestNavigate=function(){return this._requestNavigate};epiviz.data.DataProvider.prototype.onRequestRedraw=function(){return this._requestRedraw};epiviz.data.DataProvider.prototype.onRequestCurrentLocation=function(){return this._requestCurrentLocation};epiviz.data.DataProvider.prototype.onRequestPrintWorkspace=function(){return this._requestPrintWorkspace};
epiviz.data.DataProvider.prototype.onRequestGetChartSettings=function(){return this._requestGetChartSettings};epiviz.data.DataProvider.prototype.onRequestSetChartSettings=function(){return this._requestSetChartSettings};epiviz.data.DataProvider.prototype.onRequestGetAvailableCharts=function(){return this._requestGetAvailableCharts};epiviz.data.DataProvider.prototype.onRequestLoadWorkspace=function(){return this._requestLoadWorkspace};epiviz.data.DataProvider.prototype.onRequestUiStatus=function(){return this._requestUiStatus};goog.provide("epiviz.data.Request");goog.require("epiviz.data.MessageType");goog.require("epiviz.utils");epiviz.data.Request=function(id,args,method){this._id=id;this._args=args;this._method=method};epiviz.data.Request.Method={GET:"get",POST:"post"};
epiviz.data.Request.Action={GET_ROWS:"getRows",GET_VALUES:"getValues",GET_COMBINED:"getCombined",GET_MEASUREMENTS:"getMeasurements",SEARCH:"search",GET_SEQINFOS:"getSeqInfos",SAVE_WORKSPACE:"saveWorkspace",DELETE_WORKSPACE:"deleteWorkspace",GET_WORKSPACES:"getWorkspaces",GET_HIERARCHY:"getHierarchy",PROPAGATE_HIERARCHY_CHANGES:"propagateHierarchyChanges",GET_PCA:"getPCA",GET_DIVERSITY:"getDiversity",GET_CHART_SETTINGS:"getChartSettings",SET_CHART_SETTINGS:"setChartSettings",GET_AVAILABLE_CHARTS:"getAvailableCharts",
ADD_MEASUREMENTS:"addMeasurements",REMOVE_MEASUREMENTS:"removeMeasurements",LOAD_MEASUREMENTS:"loadMeasurements",ADD_SEQINFOS:"addSeqInfos",REMOVE_SEQNAMES:"removeSeqNames",ADD_CHART:"addChart",REMOVE_CHART:"removeChart",CLEAR_DATASOURCE_GROUP_CACHE:"clearDatasourceGroupCache",FLUSH_CACHE:"flushCache",NAVIGATE:"navigate",REDRAW:"redraw",GET_CURRENT_LOCATION:"getCurrentLocation",WRITE_DEBUG_MSG:"writeMsg",PRINT_WORKSPACE:"printWorkspace",LOAD_WORKSPACE:"loadWorkspace",REGISTER_CHART_TYPES:"registerChartTypes",
UI_STATUS:"uiStatus"};epiviz.data.Request.createRequest=function(args,method){return new epiviz.data.Request(epiviz.data.Request._nextId++,args,method||epiviz.data.Request.Method.GET)};epiviz.data.Request.fromRawObject=function(o){return new epiviz.data.Request(o.requestId,o.data)};epiviz.data.Request._nextId=0;epiviz.data.Request.prototype.id=function(){return this._id};epiviz.data.Request.prototype.type=function(){return epiviz.data.MessageType.REQUEST};epiviz.data.Request.prototype.method=function(){return this._method};
epiviz.data.Request.prototype.joinArgs=function(keyValGlue,argGlue){keyValGlue=keyValGlue||"=";argGlue=argGlue||"&";var result=sprintf("requestId%s%s",keyValGlue,this._id);for(var arg in this._args){if(!this._args.hasOwnProperty(arg))continue;if(!Array.isArray(this._args[arg]))result+=sprintf("%s%s%s%s",argGlue,arg,keyValGlue,this._args[arg]||"");else for(var i=0;i<this._args[arg].length;++i)result+=sprintf("%s%s[]%s%s",argGlue,arg,keyValGlue,this._args[arg][i])}return result};
epiviz.data.Request.prototype.isEmpty=function(){for(var arg in this._args){if(!this._args.hasOwnProperty(arg))continue;return false}return true};epiviz.data.Request.prototype.get=function(arg){return arg in this._args?this._args[arg]:null};epiviz.data.Request.prototype.raw=function(){return{requestId:this._id,type:this.type(),data:epiviz.utils.mapCopy(this._args)}};epiviz.data.Request.emptyRequest=function(){return epiviz.data.Request.createRequest({})};
epiviz.data.Request.getRows=function(datasource,range){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_ROWS,datasourceGroup:datasource.dataprovider(),datasource:datasource.id(),seqName:range?range.seqName():undefined,start:range?range.start():undefined,end:range?range.end():undefined,genome:range?range.genome():undefined,metadata:datasource.metadata()})};
epiviz.data.Request.getValues=function(measurement,range){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_VALUES,datasourceGroup:measurement.dataprovider(),datasource:measurement.datasource().id(),measurement:measurement.id(),seqName:range?range.seqName():undefined,start:range?range.start():undefined,end:range?range.end():undefined,genome:range?range.genome():undefined})};
epiviz.data.Request.getCombined=function(measurementsByDatasource,range){var rawMsByDs={};var dataSource="";var dataprovider="";var measure;for(var ds in measurementsByDatasource){dataSource=ds;if(!measurementsByDatasource.hasOwnProperty(ds))continue;rawMsByDs[ds]=function(){var ms=[];measurementsByDatasource[ds].foreach(function(m){if(dataSource=="genes")measure=m;dataprovider=m.dataprovider();ms.push(m.id())});return ms}()}if(dataSource=="genes")return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,
action:epiviz.data.Request.Action.GET_COMBINED,seqName:range?range.seqName():undefined,start:range?range.start():undefined,end:range?range.end():undefined,measurements:rawMsByDs[dataSource],datasourceGroup:dataprovider,datasource:dataSource,genome:range?range.genome():undefined,metadata:measure.metadata()});return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_COMBINED,seqName:range?range.seqName():undefined,start:range?range.start():undefined,
end:range?range.end():undefined,measurements:rawMsByDs[dataSource],datasource:dataSource,datasourceGroup:dataprovider,genome:range?range.genome():undefined})};epiviz.data.Request.getMeasurements=function(datasourceGroup){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_MEASUREMENTS,datasourceGroup:datasourceGroup})};
epiviz.data.Request.search=function(query,maxResults){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.SEARCH,q:query||"",maxResults:maxResults})};epiviz.data.Request.getSeqInfos=function(datasourceGroup){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_SEQINFOS,datasourceGroup:datasourceGroup})};
epiviz.data.Request.saveWorkspace=function(workspace,config){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.SAVE_WORKSPACE,id:workspace.id(),name:workspace.name(),content:encodeURIComponent(JSON.stringify(workspace.raw(config).content))},epiviz.data.Request.Method.POST)};
epiviz.data.Request.deleteWorkspace=function(workspace){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.DELETE_WORKSPACE,id:workspace.id()},epiviz.data.Request.Method.POST)};epiviz.data.Request.getWorkspaces=function(filter,requestWorkspaceId){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_WORKSPACES,q:filter||"",ws:requestWorkspaceId})};
epiviz.data.Request.getHierarchy=function(datasourceGroup,nodeId){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_HIERARCHY,datasourceGroup:datasourceGroup,nodeId:nodeId})};
epiviz.data.Request.propagateHierarchyChanges=function(datasourceGroup,selection,order,selectedLevels){return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.PROPAGATE_HIERARCHY_CHANGES,datasourceGroup:datasourceGroup,selection:selection,order:order,selectedLevels:selectedLevels})};
epiviz.data.Request.getPCA=function(measurementsByDatasource,range){var rawMsByDs={};for(var ds in measurementsByDatasource){if(!measurementsByDatasource.hasOwnProperty(ds))continue;rawMsByDs[ds]=function(){var ms=[];measurementsByDatasource[ds].foreach(function(m){ms.push(m.id())});return ms}()}return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_PCA,measurements:rawMsByDs})};
epiviz.data.Request.getDiversity=function(measurementsByDatasource,range){var rawMsByDs={};for(var ds in measurementsByDatasource){if(!measurementsByDatasource.hasOwnProperty(ds))continue;rawMsByDs[ds]=function(){var ms=[];measurementsByDatasource[ds].foreach(function(m){ms.push(m.id())});return ms}()}return epiviz.data.Request.createRequest({version:epiviz.EpiViz.VERSION,action:epiviz.data.Request.Action.GET_DIVERSITY,measurements:rawMsByDs})};goog.provide("epiviz.measurements.Measurement");goog.provide("epiviz.measurements.Measurement.Type");goog.require("epiviz.utils");
epiviz.measurements.Measurement=function(id,name,type,datasourceId,datasourceGroup,dataprovider,formula,defaultChartType,annotation,minValue,maxValue,metadata){var MeasurementType=epiviz.measurements.Measurement.Type;this._id=id;this._name=name;this._type=type;this._datasource=type==MeasurementType.RANGE?this:new epiviz.measurements.Measurement(datasourceId,datasourceId,MeasurementType.RANGE,datasourceId,datasourceGroup,dataprovider,null,"Blocks Track",null,null,null,metadata);this._datasourceGroup=
datasourceGroup;this._dataprovider=dataprovider;this._formula=formula||null;this._defaultChartType=defaultChartType||null;this._annotation=annotation||null;this._minValue=minValue||minValue===0?minValue:null;this._maxValue=maxValue||maxValue===0?maxValue:null;this._metadata=metadata||null};epiviz.measurements.Measurement.Type={FEATURE:"feature",RANGE:"range",UNORDERED:"unordered"};
epiviz.measurements.Measurement.Type.isOrdered=function(type){return type==epiviz.measurements.Measurement.Type.FEATURE||type==epiviz.measurements.Measurement.Type.RANGE};epiviz.measurements.Measurement.Type.hasValues=function(type){return type==epiviz.measurements.Measurement.Type.FEATURE||type==epiviz.measurements.Measurement.Type.UNORDERED};epiviz.measurements.Measurement.prototype.id=function(){return this._id};epiviz.measurements.Measurement.prototype.name=function(){return this._name};
epiviz.measurements.Measurement.prototype.type=function(){return this._type};epiviz.measurements.Measurement.prototype.datasource=function(){return this._datasource};epiviz.measurements.Measurement.prototype.datasourceId=function(){return this._datasource.id()};epiviz.measurements.Measurement.prototype.datasourceGroup=function(){return this._datasourceGroup};epiviz.measurements.Measurement.prototype.dataprovider=function(){return this._dataprovider};
epiviz.measurements.Measurement.prototype.formula=function(){return this._formula};epiviz.measurements.Measurement.prototype.formulaStr=function(){if(!this._formula)return"";var referredMs=this._formula.referredMeasurements;var expression=this._formula.expression.toString();for(var formulaIndex in referredMs){if(!referredMs.hasOwnProperty(formulaIndex))continue;expression=expression.replace(new RegExp("\\{"+formulaIndex+"\\}","g")," {"+referredMs[formulaIndex].name()+"} ")}return expression};
epiviz.measurements.Measurement.prototype.evaluate=function(values){var tuple={};for(var i in this._formula.referredMeasurements){if(!this._formula.referredMeasurements.hasOwnProperty(i))continue;var m=this._formula.referredMeasurements[i];tuple["{"+i+"}"]=m.isComputed()?m.evaluate(values):values.get(m)}return this._formula.expression.evaluate(tuple)};
epiviz.measurements.Measurement.prototype.evaluateArr=function(values){var tuple={};for(var i in this._formula.referredMeasurements){if(!this._formula.referredMeasurements.hasOwnProperty(i))continue;var m=this._formula.referredMeasurements[i];tuple["{"+i+"}"]=m.isComputed()?m.evaluateArr(values):values.get(m)}return this._formula.expression.evaluateArr(tuple)};epiviz.measurements.Measurement.prototype.defaultChartType=function(){return this._defaultChartType};
epiviz.measurements.Measurement.prototype.annotation=function(){return this._annotation};epiviz.measurements.Measurement.prototype.minValue=function(){return this._minValue};epiviz.measurements.Measurement.prototype.maxValue=function(){return this._maxValue};epiviz.measurements.Measurement.prototype.metadata=function(){return this._metadata||[]};
epiviz.measurements.Measurement.prototype.componentMeasurements=function(){var result=new epiviz.measurements.MeasurementSet;if(!this._formula){result.add(this);return result}for(var i in this._formula.referredMeasurements){if(!this._formula.referredMeasurements.hasOwnProperty(i))continue;result.addAll(this._formula.referredMeasurements[i].componentMeasurements())}return result};epiviz.measurements.Measurement.prototype.isComputed=function(){return this._formula?true:false};
epiviz.measurements.Measurement.prototype.raw=function(measurementsIndexMap){if(this._formula){var referredMeasurements=this._formula.referredMeasurements;var rawReferredMeasurements={};for(var formulaIndex in referredMeasurements){if(!referredMeasurements.hasOwnProperty(formulaIndex))continue;rawReferredMeasurements[formulaIndex]=measurementsIndexMap.get(referredMeasurements[formulaIndex])}}return{id:this._id,name:this._name,type:this._type,datasourceId:this._datasource._id,datasourceGroup:this._datasourceGroup,
dataprovider:this._dataprovider,formula:this._formula?{expression:this._formula.expression.toString(),referredMeasurements:rawReferredMeasurements}:null,defaultChartType:this._defaultChartType,annotation:this._annotation,minValue:this._minValue,maxValue:this._maxValue,metadata:this._metadata}};epiviz.measurements.Measurement.prototype.toString=function(){return this.name()};
epiviz.measurements.Measurement.fromRawObject=function(o,measurements){var formula=null;if(o.formula){var expr=epiviz.utils.ExpressionParser.parse(o.formula.expression);var refMs={};var vars=expr.variables();for(var i=0;i<vars.length;++i){if(!epiviz.utils.stringStartsWith(vars[i],"{")||!epiviz.utils.stringEndsWith(vars[i],"}"))continue;var formulaIndex=parseInt(vars[i].substring(1,vars[i].length-1));var index=o.formula.referredMeasurements[formulaIndex];refMs[formulaIndex]=measurements[index]}formula=
{expression:expr,referredMeasurements:refMs}}return new epiviz.measurements.Measurement(o.id,o.name,o.type,o.datasourceId,o.datasourceGroup,o.dataprovider,formula,o.defaultChartType,o.annotation,o.minValue,o.maxValue,o.metadata)};goog.provide("epiviz.utils.Iterable");epiviz.utils.Iterable=function(){};epiviz.utils.Iterable.prototype.foreach=function(iteration){};goog.provide("epiviz.utils.Iterator");epiviz.utils.Iterator=function(){};epiviz.utils.Iterator.prototype.first=function(){throw Error("unimplemented abstract method");};epiviz.utils.Iterator.prototype.next=function(){throw Error("unimplemented abstract method");};goog.provide("epiviz.measurements.MeasurementSet");goog.require("epiviz.utils.Iterable");goog.require("epiviz.utils.Iterator");epiviz.measurements.MeasurementSet=function(other){this._measurementTree={};this._size=0;this._order=[];if(other)this.addAll(other)};
epiviz.measurements.MeasurementSet.prototype.add=function(m){if(!(m.dataprovider()in this._measurementTree))this._measurementTree[m.dataprovider()]={};if(!(m.type()in this._measurementTree[m.dataprovider()]))this._measurementTree[m.dataprovider()][m.type()]={};if(!(m.datasourceGroup()in this._measurementTree[m.dataprovider()][m.type()]))this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()]={};if(!(m.datasource().id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()]))this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()]=
{};if(m.id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()])return false;this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()]={measurement:m,index:this._order.length};this._order.push({measurement:m,contained:true});++this._size;return true};
epiviz.measurements.MeasurementSet.prototype.remove=function(m){if(!(m.dataprovider()in this._measurementTree))return false;if(!(m.type()in this._measurementTree[m.dataprovider()]))return false;if(!(m.datasourceGroup()in this._measurementTree[m.dataprovider()][m.type()]))return false;if(!(m.datasource().id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()]))return false;if(!(m.id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()]))return false;
this._order[this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()].index].contained=false;delete this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()];--this._size;return true};
epiviz.measurements.MeasurementSet.prototype.addAll=function(measurements){if(!measurements||!measurements.size())return false;var newMeasurementsAdded=false;var self=this;measurements.foreach(function(m){if(self.add(m))newMeasurementsAdded=true;return false});return newMeasurementsAdded};
epiviz.measurements.MeasurementSet.prototype.removeAll=function(measurements){var someMeasurementsRemoved=false;var self=this;measurements.foreach(function(m){if(self.remove(m))someMeasurementsRemoved=true;return false});return someMeasurementsRemoved};epiviz.measurements.MeasurementSet.prototype.foreach=function(func,predicate){var iter=this.iterator();for(var m=iter.first(),i=0;m!==null;m=iter.next(),++i){if(predicate&&!predicate(m))continue;if(func(m,i))return}};
epiviz.measurements.MeasurementSet.prototype.iterator=function(){return new epiviz.measurements.MeasurementSet.Iterator(this)};epiviz.measurements.MeasurementSet.prototype.subset=function(predicate){var measurements=new epiviz.measurements.MeasurementSet;this.foreach(function(m){measurements.add(m)},predicate);return measurements};
epiviz.measurements.MeasurementSet.prototype.map=function(transformer){var ret=new epiviz.measurements.MeasurementSet;this.foreach(function(m){ret.add(transformer(m))});return ret};epiviz.measurements.MeasurementSet.prototype.size=function(){return this._size};
epiviz.measurements.MeasurementSet.prototype.contains=function(m){if(!(m.dataprovider()in this._measurementTree))return false;if(!(m.type()in this._measurementTree[m.dataprovider()]))return false;if(!(m.datasourceGroup()in this._measurementTree[m.dataprovider()][m.type()]))return false;if(!(m.datasource().id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()]))return false;return m.id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()]};
epiviz.measurements.MeasurementSet.prototype.first=function(){return this.iterator().first()};epiviz.measurements.MeasurementSet.prototype.get=function(index){if(index>=this._size||index<0)return null;if(this._size==this._order.length)return this._order[index].measurement;var result=null;this.foreach(function(m,i){if(i==index){result=m;return true}return false});return result};
epiviz.measurements.MeasurementSet.prototype.toArray=function(){var result=new Array(this._size);this.foreach(function(m,i){result[i]=m});return result};epiviz.measurements.MeasurementSet.prototype.sorted=function(comparer){var msArr=this.toArray().sort(comparer);var ret=new epiviz.measurements.MeasurementSet;msArr.forEach(function(m){ret.add(m)});return ret};
epiviz.measurements.MeasurementSet.prototype.raw=function(){var result=new Array(this._size);this.foreach(function(m,i){result[i]=m.raw()});return result};epiviz.measurements.MeasurementSet.prototype.remoteRaw=function(){var result=new Array;this.foreach(function(m,i){if(m.dataprovider().indexOf("websocket")==-1)result[i]=m.raw()});return result};
epiviz.measurements.MeasurementSet.prototype.split=function(criterion){var ret={};this.foreach(function(m,i){var key=criterion(m);var group=ret[key];if(group==undefined){group=new epiviz.measurements.MeasurementSet;ret[key]=group}group.add(m)});return ret};epiviz.measurements.MeasurementSet.Iterator=function(measurementSet){this._parent=measurementSet;this._lastIndex=null};
epiviz.measurements.MeasurementSet.Iterator.prototype.first=function(){if(this._parent.size()==0)return null;for(var i=0;i<this._parent._order.length;++i)if(this._parent._order[i].contained){this._lastIndex=i;return this._parent._order[i].measurement}throw Error("Inconsistent MeasurementSet with size() > 0 and no first element");};
epiviz.measurements.MeasurementSet.Iterator.prototype.next=function(){if(this._lastIndex===null)throw Error("Iterator.next() called before calling Iterator.first()");for(var i=this._lastIndex+1;i<this._parent._order.length;++i)if(this._parent._order[i].contained){this._lastIndex=i;return this._parent._order[i].measurement}this._lastIndex=this._parent._order.length;return null};goog.provide("epiviz.ui.controls.VisConfigSelection");epiviz.ui.controls.VisConfigSelection=function(measurements,datasource,datasourceGroup,dataprovider,annotation,defaultChartType,minSelectedMeasurements,customData){this.measurements=measurements;this.datasource=datasource;this.datasourceGroup=datasourceGroup;this.dataprovider=dataprovider;this.annotation=annotation;this.defaultChartType=defaultChartType;this.minSelectedMeasurements=minSelectedMeasurements||1;this.customData=customData};goog.provide("epiviz.events.EventResult");epiviz.events.EventResult=function(){this.success=null;this.errorMessage=null;this.value=null};goog.provide("epiviz.datatypes.GenomicRange");epiviz.datatypes.GenomicRange=function(seqname,start,width,genome){if(width!=undefined&&width<0){width=-width;if(start!=undefined)start-=width}this._seqname=seqname;this._start=start;this._width=width;this._genome=genome};epiviz.datatypes.GenomicRange.fromStartEnd=function(seqname,start,end,genome){return new epiviz.datatypes.GenomicRange(seqname,start,start!=undefined&&end!=undefined?end-start:undefined,genome)};
epiviz.datatypes.GenomicRange.prototype.seqName=function(){return this._seqname};epiviz.datatypes.GenomicRange.prototype.genome=function(){return this._genome};epiviz.datatypes.GenomicRange.prototype.start=function(){return this._start};epiviz.datatypes.GenomicRange.prototype.width=function(){return this._width};epiviz.datatypes.GenomicRange.prototype.end=function(){return this._start!=undefined&&this._width!=undefined?this._start+this._width:undefined};
epiviz.datatypes.GenomicRange.prototype.isEmpty=function(){return this._width<=0};
epiviz.datatypes.GenomicRange.prototype.subtract=function(other){if(!other||other.genome()!=this._genome||other.seqName()!=this._seqname||other.isEmpty()||other.start()>=this.end()||this._start>=other.end())return[this];if(other.start()<=this._start&&other.end()>=this.end())return[];if(other.start()>this._start&&other.end()<this.end())return[epiviz.datatypes.GenomicRange.fromStartEnd(this._seqname,this._start,other.start()),epiviz.datatypes.GenomicRange.fromStartEnd(this._seqname,other.end(),this.end())];
if(other.start()>this._start)return[epiviz.datatypes.GenomicRange.fromStartEnd(this._seqname,this._start,other.start(),this._genome)];return[epiviz.datatypes.GenomicRange.fromStartEnd(this._seqname,other.end(),this.end(),this._genome)]};epiviz.datatypes.GenomicRange.prototype.equals=function(other){if(!other)return false;if(other==this)return true;return this._genome==other._genome&&this._seqname==other._seqname&&this._start==other._start&&this._width==other._width};
epiviz.datatypes.GenomicRange.prototype.overlapsWith=function(other){if(!other)return false;if(this==other)return true;if(this.genome()!=other.genome())return false;if(this.seqName()!=other.seqName())return false;return this.start()<other.end()&&this.end()>other.start()};epiviz.datatypes.GenomicRange.prototype.raw=function(){return{seqName:this._seqname,start:this._start,width:this._width,genome:this._genome}};
epiviz.datatypes.GenomicRange.fromRawObject=function(o){return new epiviz.datatypes.GenomicRange(o.seqName,o.start,o.width,o.genome)};goog.provide("epiviz.ui.charts.ColorPalette");goog.require("epiviz.utils");epiviz.ui.charts.ColorPalette=function(colors,name,id,keyIndices){this._colors=colors;this._id=id||epiviz.utils.generatePseudoGUID(6);this._name=name||"Custom ("+this._id+")";this._keyIndices=keyIndices||{};this._nKeys=0};epiviz.ui.charts.ColorPalette.prototype.id=function(){return this._id};epiviz.ui.charts.ColorPalette.prototype.name=function(){return this._name};
epiviz.ui.charts.ColorPalette.prototype.get=function(i){return this._colors[i%this._colors.length]};epiviz.ui.charts.ColorPalette.prototype.getByKey=function(key){var index=this._keyIndices[key];if(index==undefined){index=this._nKeys;this._keyIndices[key]=this._nKeys;++this._nKeys}return this.get(index)};epiviz.ui.charts.ColorPalette.prototype.keyColorIndex=function(key){var ret=this._keyIndices[key];if(ret==undefined)return-1;return ret};epiviz.ui.charts.ColorPalette.prototype.keyIndices=function(){return this._keyIndices};
epiviz.ui.charts.ColorPalette.prototype.size=function(){return this._colors.length};epiviz.ui.charts.ColorPalette.prototype.equals=function(other){if(this==other)return true;if(!other)return false;return epiviz.utils.arraysEqual(this._colors,other._colors)};epiviz.ui.charts.ColorPalette.prototype.copy=function(){return new epiviz.ui.charts.ColorPalette(this._colors.slice(0))};
epiviz.ui.charts.ColorPalette.prototype.raw=function(config){if(config&&this._id in config.colorPalettesMap)return{id:this._id};return{id:this._id,name:this._name,colors:this._colors}};
epiviz.ui.charts.ColorPalette.fromRawObject=function(o,config){if($.isArray(o))return new epiviz.ui.charts.ColorPalette(o);if(config&&o.id in config.colorPalettesMap)return config.colorPalettesMap[o.id];if(!o.colors||!o.colors.length)o.colors=epiviz.Config.COLORS_BRIGHT;return new epiviz.ui.charts.ColorPalette(o.colors,o.name,o.id)};goog.provide("epiviz.data.WebsocketDataProvider");goog.require("epiviz.utils");goog.require("epiviz.data.DataProvider");goog.require("epiviz.data.Response");goog.require("epiviz.ui.WebArgsManager");goog.require("epiviz.data.MessageType");goog.require("epiviz.data.Request");goog.require("epiviz.measurements.Measurement");goog.require("epiviz.measurements.MeasurementSet");goog.require("epiviz.ui.controls.VisConfigSelection");goog.require("epiviz.events.EventResult");goog.require("epiviz.datatypes.GenomicRange");
goog.require("epiviz.ui.charts.ColorPalette");epiviz.data.WebsocketDataProvider=function(id,websocketHost){epiviz.data.DataProvider.call(this,id||epiviz.data.WebsocketDataProvider.DEFAULT_ID);this._websocketHost=websocketHost;this._socket=null;this._useUI=epiviz.ui.WebArgsManager.WEB_ARGS["websocketNoUI"]!="true";this._debug=epiviz.ui.WebArgsManager.WEB_ARGS["debug"]=="true";this._callbacks={};this._requestsStack=[];this._initialize()};epiviz.data.WebsocketDataProvider.prototype=epiviz.utils.mapCopy(epiviz.data.DataProvider.prototype);
epiviz.data.WebsocketDataProvider.constructor=epiviz.data.WebsocketDataProvider;epiviz.data.WebsocketDataProvider.DEFAULT_ID="websocket";
epiviz.data.WebsocketDataProvider.prototype._initialize=function(){if(!this._websocketHost||this._websocketHost=="None")return;try{this._socket=new WebSocket(this._websocketHost);this._log("WebSocket - status "+this._socket.readyState);var self=this;this._socket.onopen=function(){self._onSocketOpen()};this._socket.onmessage=function(msg){self._onSocketMessage(msg)};this._socket.onclose=function(){self._onSocketClose()}}catch(error){this._log(error.toString())}};
epiviz.data.WebsocketDataProvider.prototype._onSocketOpen=function(){for(var i=0;i<this._requestsStack.length;++i)this._socket.send(this._requestsStack[i]);this._requestsStack=[];this._registerAvailableCharts()};epiviz.data.WebsocketDataProvider.prototype._onSocketClose=function(){this._socket=null};epiviz.data.WebsocketDataProvider.prototype._sendMessage=function(message){if(this.connected()&&this._socket.readyState)this._socket.send(message);else this._requestsStack.push(message)};
epiviz.data.WebsocketDataProvider.prototype._onSocketMessage=function(msg){this._log("Local Controller Received: "+msg.data);var message=JSON.parse(msg.data);message.data.dataprovidertype="websocket";if(message["type"]==epiviz.data.MessageType.RESPONSE){var response=epiviz.data.Response.fromRawObject(message);var callback=this._callbacks[response.id()];delete this._callbacks[response.id()];callback(response)}else if(message["type"]==epiviz.data.MessageType.REQUEST){var Action=epiviz.data.Request.Action;
var request=epiviz.data.Request.fromRawObject(message);switch(request.get("action")){case Action.ADD_MEASUREMENTS:this._addMeasurements(request);break;case Action.REMOVE_MEASUREMENTS:this._removeMeasurements(request);break;case Action.ADD_SEQINFOS:this._addSeqInfos(request);break;case Action.REMOVE_SEQNAMES:this._removeSeqNames(request);break;case Action.ADD_CHART:this._addChart(request);break;case Action.REMOVE_CHART:this._removeChart(request);break;case Action.CLEAR_DATASOURCE_GROUP_CACHE:this._clearDatasourceGroupCache(request);
break;case Action.FLUSH_CACHE:this._flushCache(request);break;case Action.NAVIGATE:this._navigate(request);break;case Action.REDRAW:this._redraw(request);break;case Action.GET_CURRENT_LOCATION:this._getCurrentLocation(request);break;case Action.WRITE_DEBUG_MSG:this._writeDebugMsg(request);break;case Action.PRINT_WORKSPACE:this._printWorkspace(request);break;case Action.SET_CHART_SETTINGS:this._setChartSettings(request);break;case Action.GET_CHART_SETTINGS:this._getChartSettings(request);break;case Action.GET_AVAILABLE_CHARTS:this._getAvailableCharts(request);
break;case Action.LOAD_WORKSPACE:this._loadWorkspace(request);break;case Action.UI_STATUS:this._uiStatus(request);case Action.LOAD_MEASUREMENTS:this._loadMeasurements(request);break}}};epiviz.data.WebsocketDataProvider.prototype._log=function(message){if(this._debug)console.log(message)};epiviz.data.WebsocketDataProvider.prototype._fireEvent=function(event,args){if(!this._useUI){args.result.success=true;return}event.notify(args)};
epiviz.data.WebsocketDataProvider.prototype.connected=function(){return this._socket!=null};epiviz.data.WebsocketDataProvider.prototype.getData=function(request,callback){var message=JSON.stringify(request.raw());this._callbacks[request.id()]=callback;this._sendMessage(message)};
epiviz.data.WebsocketDataProvider.prototype._addMeasurements=function(request){var result=new epiviz.events.EventResult;var measurements=new epiviz.measurements.MeasurementSet;var rawMeasurements=JSON.parse(request.get("measurements"));for(var i=0;i<rawMeasurements.length;++i)measurements.add(new epiviz.measurements.Measurement(rawMeasurements[i]["id"],rawMeasurements[i]["name"],rawMeasurements[i]["type"],rawMeasurements[i]["datasourceId"],rawMeasurements[i]["datasourceGroup"],this.id(),null,rawMeasurements[i]["defaultChartType"],
rawMeasurements[i]["annotation"],rawMeasurements[i]["minValue"],rawMeasurements[i]["maxValue"],rawMeasurements[i]["metadata"]));this._fireEvent(this.onRequestAddMeasurements(),{measurements:measurements,result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._removeMeasurements=function(request){var result=new epiviz.events.EventResult;var measurements=new epiviz.measurements.MeasurementSet;var rawMeasurements=JSON.parse(request.get("measurements"));for(var i=0;i<rawMeasurements.length;++i)measurements.add(new epiviz.measurements.Measurement(rawMeasurements[i]["id"],rawMeasurements[i]["name"],rawMeasurements[i]["type"],rawMeasurements[i]["datasourceId"],rawMeasurements[i]["datasourceGroup"],this.id(),null,rawMeasurements[i]["defaultChartType"],
rawMeasurements[i]["annotation"],rawMeasurements[i]["minValue"],rawMeasurements[i]["maxValue"],rawMeasurements[i]["metadata"]));this._fireEvent(this.onRequestRemoveMeasurements(),{measurements:measurements,result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._addSeqInfos=function(request){var result=new epiviz.events.EventResult;var seqInfos=JSON.parse(request.get("seqInfos"));this._fireEvent(this.onRequestAddSeqInfos(),{seqInfos:seqInfos,result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._removeSeqNames=function(request){var result=new epiviz.events.EventResult;var seqNames=JSON.parse(request.get("seqNames"));this._fireEvent(this.onRequestRemoveSeqNames(),{seqNames:seqNames,result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._addChart=function(request){var result=new epiviz.events.EventResult;var measurements,datasource,datasourceGroup;var dataprovider=this.id();if(request.get("measurements")!=undefined){measurements=new epiviz.measurements.MeasurementSet;var rawMeasurements=JSON.parse(request.get("measurements"));for(var i=0;i<rawMeasurements.length;++i){if(rawMeasurements[i]["dataprovider"]!=null&&rawMeasurements[i]["dataprovider"].length!=0)dataprovider=rawMeasurements[i]["dataprovider"];
measurements.add(new epiviz.measurements.Measurement(rawMeasurements[i]["id"],rawMeasurements[i]["name"],rawMeasurements[i]["type"],rawMeasurements[i]["datasourceId"],rawMeasurements[i]["datasourceGroup"],dataprovider,null,rawMeasurements[i]["defaultChartType"],rawMeasurements[i]["annotation"],rawMeasurements[i]["minValue"],rawMeasurements[i]["maxValue"],rawMeasurements[i]["metadata"]))}}datasource=request.get("datasource");datasourceGroup=request.get("datasourceGroup")||datasource;this._fireEvent(this.onRequestAddChart(),
{type:request.get("type"),visConfigSelection:new epiviz.ui.controls.VisConfigSelection(measurements,datasource,datasourceGroup),result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._removeChart=function(request){var chartId=request.get("chartId");var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestRemoveChart(),{id:chartId,result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._clearDatasourceGroupCache=function(request){var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestClearDatasourceGroupCache(),{datasourceGroup:request.get("datasourceGroup"),result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._flushCache=function(request){var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestFlushCache(),{result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._navigate=function(request){var range=JSON.parse(request.get("range"));var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestNavigate(),{range:epiviz.datatypes.GenomicRange.fromStartEnd(range.seqName,range.start,range.end),result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._redraw=function(request){var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestRedraw(),{result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._getCurrentLocation=function(request){var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestCurrentLocation(),{result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._writeDebugMsg=function(request){var msg=request.get("msg");var msgDiv=document.createElement("pre");msgDiv.innerHTML=msg.replace(/&/g,"&amp;").replace(/\\</g,"&lt;");var response=new epiviz.data.Response(request.id(),{msg:"that msg"});document.getElementById("chart-container").appendChild(msgDiv);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._printWorkspace=function(request){var contrId=request.get("chartId");var fName=request.get("fileName");var fType=request.get("fileType");var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestPrintWorkspace(),{chartId:contrId,fileName:fName,fileType:fType,result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._setChartSettings=function(request){var chartId=request.get("chartId");var settings=request.get("settings");var colorMap=request.get("colorMap");var colors=new epiviz.ui.charts.ColorPalette(colorMap);var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestSetChartSettings(),{chartId:chartId,settings:settings,colorMap:colors,result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._getChartSettings=function(request){var chartId=request.get("chartId");var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestGetChartSettings(),{chartId:chartId,result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._getAvailableCharts=function(request){var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestGetChartSettings(),{result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._registerAvailableCharts=function(){var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestGetChartSettings(),{result:result});request=epiviz.data.Request.createRequest({action:epiviz.data.Request.Action.REGISTER_CHART_TYPES,data:result.value});var message=JSON.stringify(request.raw());this._callbacks[request.id()]=function(resp){};this._sendMessage(message)};
epiviz.data.WebsocketDataProvider.prototype.updateChartSettings=function(request,callback){var message=JSON.stringify(request.raw());this._callbacks[request.id()]=callback;this._sendMessage(message)};epiviz.data.WebsocketDataProvider.prototype._loadWorkspace=function(request){var workspaceId=request.get("workspaceId");var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestLoadWorkspace(),{workspace:workspaceId});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._uiStatus=function(request){var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestUiStatus(),{result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};
epiviz.data.WebsocketDataProvider.prototype._loadMeasurements=function(request){var result=new epiviz.events.EventResult;this._fireEvent(this.onRequestLoadMeasurements(),{result:result});var response=new epiviz.data.Response(request.id(),result);this._sendMessage(JSON.stringify(response.raw()))};goog.provide("epiviz.data.WebServerDataProvider");goog.require("epiviz.utils");goog.require("epiviz.data.DataProvider");goog.require("epiviz.data.Response");epiviz.data.WebServerDataProvider=function(id,serverEndpoint){epiviz.data.DataProvider.call(this,id||epiviz.Config.DEFAULT_DATA_PROVIDER_ID);this._serverEndpoint=serverEndpoint||epiviz.data.WebServerDataProvider.DEFAULT_SERVER_ENDPOINT};epiviz.data.WebServerDataProvider.prototype=epiviz.utils.mapCopy(epiviz.data.DataProvider.prototype);
epiviz.data.WebServerDataProvider.constructor=epiviz.data.WebServerDataProvider;epiviz.data.WebServerDataProvider.DEFAULT_SERVER_ENDPOINT="data/main.php";
epiviz.data.WebServerDataProvider.prototype.getData=function(request,callback,failCallback){if(request.isEmpty())return;if(request.method()==epiviz.data.Request.Method.GET){var query=sprintf("%s?%s",this._serverEndpoint,request.joinArgs());epiviz.data.WebServerDataProvider.makeGetRequest(query,function(jsondata){callback(epiviz.data.Response.fromRawObject(jsondata))},function(jqXHR,textStatus,errorThrown){failCallback(jqXHR,textStatus,errorThrown)})}else epiviz.data.WebServerDataProvider.makePostRequest(this._serverEndpoint,
request.joinArgs(),function(jsondata){callback(epiviz.data.Response.fromRawObject(jsondata))},function(jqXHR,textStatus,errorThrown){failCallback(jqXHR,textStatus,errorThrown)})};
epiviz.data.WebServerDataProvider.makeGetRequest=function(query,callback,failCallback){var request=$.ajax({type:"get",url:query,dataType:"json",async:true,cache:false,processData:true});request.done(function(jsonData){callback(jsonData)});request.fail(function(jqXHR,textStatus,errorThrown){failCallback(jqXHR,textStatus,errorThrown)});request.always(function(){})};
epiviz.data.WebServerDataProvider.makePostRequest=function(query,postData,callback,failCallback){var request=$.ajax({type:"post",url:query,data:postData,dataType:"json",async:true,cache:false,processData:true});request.done(function(data,textStatus,jqXHR){callback(data)});request.fail(function(jqXHR,textStatus,errorThrown){console.error("The following error occured: "+textStatus,errorThrown);failCallback(jqXHR,textStatus,errorThrown)});request.always(function(){})};goog.provide("epiviz.Config");goog.require("epiviz.ui.WebArgsManager");goog.require("epiviz.data.WebsocketDataProvider");goog.require("epiviz.data.WebServerDataProvider");
epiviz.Config=function(settingsMap){this.dataServerLocation=null;this.chartSaverLocation=null;this.zoominRatio=null;this.zoomoutRatio=null;this.navigationStepRatio=null;this.navigationDelay=null;this.defaultWorkspaceSettings=null;this.dataProviders=null;this.workspacesDataProvider=null;this.useCache=true;this.useCookie=null;this.cacheUpdateIntervalMilliseconds=3E4;this.maxSearchResults=null;this.chartTypes=null;this.chartSettings=null;this.chartCustomSettings=null;this.clustering=null;this.colorPalettes=
null;this.colorPalettesMap=null;if(settingsMap){for(var setting in settingsMap){if(!settingsMap.hasOwnProperty(setting))continue;this[setting]=settingsMap[setting]}if(settingsMap.configType!="epivizr_standalone"){var socketHosts=epiviz.ui.WebArgsManager.WEB_ARGS["websocket-host"];if(socketHosts&&socketHosts.length)for(var i=0;i<socketHosts.length;++i)this.dataProviders.push(sprintf("epiviz.data.WebsocketDataProvider,%s,%s",epiviz.data.WebsocketDataProvider.DEFAULT_ID+"-"+i,socketHosts[i]))}}var colorPalettesMap=
{};this.colorPalettes.forEach(function(palette){colorPalettesMap[palette.id()]=palette});this.colorPalettesMap=colorPalettesMap;if(settingsMap.configType!="default")this.useCookie=epiviz.ui.WebArgsManager.WEB_ARGS.useCookie};epiviz.Config.SETTINGS={};epiviz.Config.DEFAULT_DATA_PROVIDER_ID="umd";epiviz.Config.DEFAULT_WORKSPACE_NAME="Default Workspace";epiviz.Config.EPIVIZ_V1_COLORS=["#025167","#e7003e","#ffcd00","#057d9f","#970026","#ffe373","#ff8100"];
epiviz.Config.COLORS_BRIGHT=["#1859a9","#ed2d2e","#008c47","#010101","#f37d22","#662c91","#a11d20","#b33893"];epiviz.Config.COLORS_LIGHT=["#b8d2eb","#f2aeac","#d8e4aa","#cccccc","#f2d1b0","#d4b2d3","#ddb8a9","#ebbfd9"];epiviz.Config.COLORS_MEDIUM=["#599ad3","#f1595f","#79c36a","#727272","#f9a65a","#9e66ab","#cd7058","#d77fb3"];epiviz.Config.COLORS_D3_CAT10=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];
epiviz.Config.COLORS_D3_CAT20=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"];epiviz.Config.COLORS_D3_CAT20B=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"];
epiviz.Config.COLORS_D3_CAT20C=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];epiviz.Config.VisualizationPropertySettings={WIDTH:"width",HEIGHT:"height",MARGINS:"margins",COLORS:"colors",DECORATIONS:"decorations"};goog.provide("epiviz.data.RequestStack");epiviz.data.RequestStack=function(){this._requests=[];this._callbacks={};this._dataMap={}};epiviz.data.RequestStack.prototype.pushRequest=function(request,callback){this._requests.push(request);this._callbacks[request.id()]=callback};
epiviz.data.RequestStack.prototype.serveData=function(response){if(!this._callbacks[response.id()])return;if(this._requests.length>0&&this._requests[0].id()==response.id()){var callback=this._callbacks[response.id()];delete this._callbacks[response.id()];this._requests=this._requests.slice(1);callback(response.data());while(this._requests.length>0&&this._requests[0].id()in this._dataMap){callback=this._callbacks[this._requests[0].id()];var data=this._dataMap[this._requests[0].id()];delete this._callbacks[this._requests[0].id()];
delete this._dataMap[this._requests[0].id()];this._requests=this._requests.slice(1);callback(data)}return}this._dataMap[response.id()]=response.data()};epiviz.data.RequestStack.prototype.clear=function(){this._requests=[];this._callbacks={};this._dataMap={}};goog.provide("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.utils.Iterable");goog.require("epiviz.utils.Iterator");epiviz.measurements.MeasurementHashtable=function(){this._size=0;this._measurementTree={};this._order=[]};
epiviz.measurements.MeasurementHashtable.prototype.put=function(m,value){if(this.contains(m)){var existingItem=this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()];this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()]={key:m,value:value,index:existingItem.index};this._order[existingItem.index]={key:m,value:value,contained:true};return}if(!(m.dataprovider()in this._measurementTree))this._measurementTree[m.dataprovider()]=
{};if(!(m.type()in this._measurementTree[m.dataprovider()]))this._measurementTree[m.dataprovider()][m.type()]={};if(!(m.datasourceGroup()in this._measurementTree[m.dataprovider()][m.type()]))this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()]={};if(!(m.datasource().id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()]))this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()]={};this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()]=
{key:m,value:value,index:this._order.length};this._order.push({key:m,value:value,contained:true});++this._size};epiviz.measurements.MeasurementHashtable.prototype.get=function(m){if(!this.contains(m))return null;return this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()].value};
epiviz.measurements.MeasurementHashtable.prototype.remove=function(m){if(!this.contains(m))return false;var item=this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()];delete this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()][m.id()];this._order[item.index].contained=false;--this._size;return true};
epiviz.measurements.MeasurementHashtable.prototype.contains=function(m){if(!(m.dataprovider()in this._measurementTree))return false;if(!(m.type()in this._measurementTree[m.dataprovider()]))return false;if(!(m.datasourceGroup()in this._measurementTree[m.dataprovider()][m.type()]))return false;if(!(m.datasource().id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()]))return false;return m.id()in this._measurementTree[m.dataprovider()][m.type()][m.datasourceGroup()][m.datasource().id()]};
epiviz.measurements.MeasurementHashtable.prototype.clear=function(){this._size=0;this._measurementTree={};this._order=[]};epiviz.measurements.MeasurementHashtable.prototype.isEmpty=function(){return this._size==0};epiviz.measurements.MeasurementHashtable.prototype.size=function(){return this._size};
epiviz.measurements.MeasurementHashtable.prototype.foreach=function(func,predicate){var iter=this.iterator();for(var pair=iter.first(),i=0;pair!==null;pair=iter.next(),++i){if(predicate&&!predicate(pair.key))continue;if(func(pair.key,pair.value,i))return}};epiviz.measurements.MeasurementHashtable.prototype.first=function(){return this.iterator().first()};
epiviz.measurements.MeasurementHashtable.prototype.sorted=function(comparer){var ret=new epiviz.measurements.MeasurementHashtable;var pairs=this._order.slice(0);pairs.sort(function(p1,p2){return comparer(p1.key,p2.key)});pairs.forEach(function(pair){if(!pair.contained)return;ret.put(pair.key,pair.value)});return ret};epiviz.measurements.MeasurementHashtable.prototype.keys=function(){var ret=[];this._order.forEach(function(o){if(o.contained)ret.push(o.key)});return ret};
epiviz.measurements.MeasurementHashtable.prototype.iterator=function(){return new epiviz.measurements.MeasurementHashtable.Iterator(this)};epiviz.measurements.MeasurementHashtable.prototype.toString=function(){var result={};this.foreach(function(m,v){var id=m.id();var i=2;while(id in result)id=m.id()+" ("+i++ +")";result[id]=v});return JSON.stringify(result)};epiviz.measurements.MeasurementHashtable.Iterator=function(measurementHashtable){this._parent=measurementHashtable;this._lastIndex=null};
epiviz.measurements.MeasurementHashtable.Iterator.prototype.first=function(){if(this._parent.size()==0)return null;for(var i=0;i<this._parent._order.length;++i)if(this._parent._order[i].contained){this._lastIndex=i;return{key:this._parent._order[i].key,value:this._parent._order[i].value}}throw Error("Inconsistent MeasurementHashtable with size() > 0 and no first element");};
epiviz.measurements.MeasurementHashtable.Iterator.prototype.next=function(){if(this._lastIndex===null)throw Error("Iterator.next() called before calling Iterator.first()");for(var i=this._lastIndex+1;i<this._parent._order.length;++i)if(this._parent._order[i].contained){this._lastIndex=i;return{key:this._parent._order[i].key,value:this._parent._order[i].value}}this._lastIndex=this._parent._order.length;return null};
epiviz.measurements.MeasurementHashtable.prototype.split=function(criterion){var ret={};this.foreach(function(m,i){var key=criterion(m);var group=ret[key];if(group==undefined){group=new epiviz.measurements.MeasurementSet;ret[key]=group}group.add(m)});return ret};goog.provide("epiviz.datatypes.MeasurementGenomicData");epiviz.datatypes.MeasurementGenomicData=function(){};epiviz.datatypes.MeasurementGenomicData.prototype.get=function(index){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.getRow=function(index){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.measurement=function(){throw Error("unimplemented abstract method");};
epiviz.datatypes.MeasurementGenomicData.prototype.globalStartIndex=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.globalEndIndex=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.size=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.getByGlobalIndex=function(globalIndex){throw Error("unimplemented abstract method");};
epiviz.datatypes.MeasurementGenomicData.prototype.getRowByGlobalIndex=function(globalIndex){throw Error("unimplemented abstract method");};epiviz.datatypes.MeasurementGenomicData.prototype.binarySearchStarts=function(range){throw Error("unimplemented abstract method");};goog.provide("epiviz.datatypes.MeasurementGenomicDataArrayWrapper");goog.require("epiviz.datatypes.MeasurementGenomicData");epiviz.datatypes.MeasurementGenomicDataArrayWrapper=function(measurement,items,itemsByGlobalIndex){this._measurement=measurement;this._items=items;this._itemsByGlobalIndex=itemsByGlobalIndex};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.get=function(index){return this._items&&index>=0&&index<this._items.length?this._items[index]:null};
epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.getRow=function(index){return this._items&&index>=0&&index<this._items.length?this._items[index].rowItem:null};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.measurement=function(){return this._measurement};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.globalStartIndex=function(){return this._items&&this._items.length?this._items[0].globalIndex:null};
epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.globalEndIndex=function(){return this._items&&this._items.length?this._items[this._items.length-1].globalIndex+1:null};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.size=function(){return this._items?this._items.length:0};
epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.getByGlobalIndex=function(globalIndex){return this._itemsByGlobalIndex&&globalIndex in this._itemsByGlobalIndex?this._itemsByGlobalIndex[globalIndex]:null};epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.getRowByGlobalIndex=function(globalIndex){return this._itemsByGlobalIndex&&globalIndex in this._itemsByGlobalIndex?this._itemsByGlobalIndex[globalIndex].rowItem:null};
epiviz.datatypes.MeasurementGenomicDataArrayWrapper.prototype.binarySearchStarts=function(range){if(!this._items||!this._items.length||this._items[0].rowItem.start()>range.end()||this._items[this._items.length-1].rowItem.start()<range.start())return{index:null,length:0};var s=0,e=this._items.length-1;var m;var startIndex=null;while(s<=e){m=Math.floor((s+e)*.5);if(this._items[m].rowItem.start()==range.start()){startIndex=m;e=m-1}else if(this._items[m].rowItem.start()<range.start())s=m+1;else e=m-1}if(startIndex===
null)startIndex=s;s=0;e=this._items.length-1;var endIndex=null;while(s<=e){m=Math.floor((s+e)*.5);if(this._items[m].rowItem.start()==range.end()){endIndex=m;s=m+1}else if(this._items[m].rowItem.start()<range.end())s=m+1;else e=m-1}if(endIndex===null)endIndex=s-1;return{index:startIndex,length:endIndex+1-startIndex}};goog.provide("epiviz.datatypes.GenomicData");epiviz.datatypes.GenomicData=function(){};epiviz.datatypes.GenomicData.prototype.ready=function(callback){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.isReady=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.firstSeries=function(){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.prototype.getSeries=function(m){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.get=function(m,i){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.getRow=function(m,i){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.measurements=function(){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.prototype.globalStartIndex=function(m){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.globalEndIndex=function(m){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.size=function(m){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.getByGlobalIndex=function(m,globalIndex){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.prototype.getRowByGlobalIndex=function(m,globalIndex){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.binarySearchStarts=function(m,range){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.prototype.foreach=function(callback){throw Error("unimplemented abstract method");};goog.provide("epiviz.datatypes.GenomicData.ValueItem");
epiviz.datatypes.GenomicData.ValueItem=function(globalIndex,rowItem,value,measurement,valueAnnotation){this.globalIndex=globalIndex;this.rowItem=rowItem;this.value=value===0||value?value:null;this.measurement=measurement;this.valueAnnotation=valueAnnotation};goog.provide("epiviz.datatypes.GenomicData.RowItem");epiviz.datatypes.GenomicData.RowItem=function(){};epiviz.datatypes.GenomicData.RowItem.prototype.id=function(){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.RowItem.prototype.seqName=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.start=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.end=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.globalIndex=function(){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicData.RowItem.prototype.strand=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.metadata=function(column){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicData.RowItem.prototype.rowMetadata=function(){throw Error("unimplemented abstract method");};goog.provide("epiviz.datatypes.MapGenomicData");goog.require("epiviz.datatypes.GenomicData");goog.require("epiviz.deferred.Deferred");epiviz.datatypes.MapGenomicData=function(map){this._map=map;this._measurements=map?map.keys():null;this._mapLoaded=new epiviz.deferred.Deferred;if(this._map)this._mapLoaded.resolve()};epiviz.datatypes.MapGenomicData.prototype.ready=function(callback){this._mapLoaded.done(callback)};
epiviz.datatypes.MapGenomicData.prototype.isReady=function(){return this._mapLoaded.state()==epiviz.deferred.Deferred.State.RESOLVED};epiviz.datatypes.MapGenomicData.prototype._setMap=function(map){if(this._map)throw Error("MapGenomicData is immutable");this._map=map;if(!map)return;this._measurements=map.keys();this._mapLoaded.resolve()};epiviz.datatypes.MapGenomicData.prototype.firstSeries=function(){if(this._map.size()==0)return null;return this._map.first().value};
epiviz.datatypes.MapGenomicData.prototype.getSeries=function(m){return this._map.get(m)};epiviz.datatypes.MapGenomicData.prototype.get=function(m,i){var mItems=this._map.get(m);if(!mItems)return null;return mItems.get(i)};epiviz.datatypes.MapGenomicData.prototype.getRow=function(m,i){var mItems=this._map.get(m);if(!mItems)return null;return mItems.getRow(i)};epiviz.datatypes.MapGenomicData.prototype.measurements=function(){return this._measurements};
epiviz.datatypes.MapGenomicData.prototype.globalStartIndex=function(m){var mItems=this._map.get(m);if(!mItems)return null;return mItems.globalStartIndex()};epiviz.datatypes.MapGenomicData.prototype.globalEndIndex=function(m){var mItems=this._map.get(m);if(!mItems)return null;return mItems.globalEndIndex()};epiviz.datatypes.MapGenomicData.prototype.size=function(m){var mItems=this._map.get(m);if(!mItems)return null;return mItems.size()};
epiviz.datatypes.MapGenomicData.prototype.getByGlobalIndex=function(m,globalIndex){var mItems=this._map.get(m);if(!mItems)return null;return mItems.getByGlobalIndex(globalIndex)};epiviz.datatypes.MapGenomicData.prototype.getRowByGlobalIndex=function(m,globalIndex){var mItems=this._map.get(m);if(!mItems)return null;return mItems.getRowByGlobalIndex(globalIndex)};
epiviz.datatypes.MapGenomicData.prototype.binarySearchStarts=function(m,range){var mItems=this._map.get(m);if(!mItems)return{index:null,length:0};return mItems.binarySearchStarts(range)};epiviz.datatypes.MapGenomicData.prototype.foreach=function(callback){this._map.foreach(function(m,series,seriesIndex){callback(m,series,seriesIndex)})};goog.provide("epiviz.datatypes.PartialSummarizedExperiment");goog.require("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.measurements.Measurement.Type");epiviz.datatypes.PartialSummarizedExperiment=function(){this._rowData=null;this._values=new epiviz.measurements.MeasurementHashtable};epiviz.datatypes.PartialSummarizedExperiment.prototype.ranges=function(){return this.rowData()};epiviz.datatypes.PartialSummarizedExperiment.prototype.rowData=function(){return this._rowData};
epiviz.datatypes.PartialSummarizedExperiment.prototype.addRowData=function(rowData){if(!rowData)return;if(!this._rowData||this._rowData.boundaries().seqName()!=rowData.boundaries().seqName()||this._rowData.boundaries().start()>rowData.boundaries().end()||this._rowData.boundaries().end()<rowData.boundaries().start()||rowData.measurement().type()==epiviz.measurements.Measurement.Type.UNORDERED){this._rowData=rowData;return}this._rowData=this._rowData.merge(rowData)};
epiviz.datatypes.PartialSummarizedExperiment.prototype.addValues=function(values){if(!values)return;var currentValues=this._values.get(values.measurement());if(!currentValues||currentValues.boundaries().seqName()!=values.boundaries().seqName()||currentValues.boundaries().start()>values.boundaries().end()||currentValues.boundaries().end()<values.boundaries().start()||values.measurement().type()==epiviz.measurements.Measurement.Type.UNORDERED){this._values.put(values.measurement(),values);return}this._values.put(values.measurement(),
currentValues.merge(values))};epiviz.datatypes.PartialSummarizedExperiment.prototype.trim=function(range){var result=new epiviz.datatypes.PartialSummarizedExperiment;if(this._rowData)result.addRowData(this._rowData.trim(range));if(result.rowData())this._values.foreach(function(m,featureValueArray){result.addValues(featureValueArray.trim(range,result.rowData().globalStartIndex(),result.rowData().size()))});return result};epiviz.datatypes.PartialSummarizedExperiment.prototype.values=function(measurement){return this._values.get(measurement)};
epiviz.datatypes.PartialSummarizedExperiment.prototype.calcMinGlobalIndex=function(){var minGlobalIndex=this._rowData?this._rowData.globalStartIndex():null;if(this._values)this._values.foreach(function(m,valuesArray){if(valuesArray&&valuesArray.globalStartIndex()!=undefined&&(minGlobalIndex==undefined||minGlobalIndex>valuesArray.globalStartIndex()))minGlobalIndex=valuesArray.globalStartIndex()});return minGlobalIndex};
epiviz.datatypes.PartialSummarizedExperiment.prototype.calcMaxGlobalIndex=function(){var maxGlobalIndex=this._rowData&&this._rowData.globalStartIndex()!=undefined?this._rowData.globalStartIndex()+this._rowData.size():null;if(this._values)this._values.foreach(function(m,valuesArray){if(valuesArray&&valuesArray.globalStartIndex()!=undefined&&(maxGlobalIndex==undefined||maxGlobalIndex<valuesArray.globalStartIndex()+valuesArray.size()))maxGlobalIndex=valuesArray.globalStartIndex()+valuesArray.size()});
return maxGlobalIndex};
epiviz.datatypes.PartialSummarizedExperiment.prototype.toString=function(){var result="";var minGlobalIndex=this.calcMinGlobalIndex();var maxGlobalIndex=this.calcMaxGlobalIndex();result+=sprintf("%25s",this._rowData&&this._rowData.measurement()?this._rowData.measurement().name().substr(0,22):"[undefined datasource]");var chr,start,end,rowGlobalIndex,rowSize;if(this._rowData&&this._rowData.boundaries()){chr=this._rowData.boundaries().seqName();start=this._rowData.boundaries().start();end=this._rowData.boundaries().end();
rowGlobalIndex=this._rowData.globalStartIndex()!=undefined?this._rowData.globalStartIndex():"*";rowSize=this._rowData.size()}else{chr=start=end=rowGlobalIndex="*";rowSize=0}result+=sprintf(" [%6s%10s%10s] [globalStartIndex: %10s] [size: %7s]\n",chr,start,end,rowGlobalIndex,rowSize);var header=sprintf("%15s%15s%15s%15s%15s","id","idx","chr","start","end");if(this._values)this._values.foreach(function(m,valuesArray){result+=sprintf("%25s",m.name().substr(0,22));if(valuesArray&&valuesArray.boundaries()){chr=
valuesArray.boundaries().seqName();start=valuesArray.boundaries().start();end=valuesArray.boundaries().end()}else chr=start=end="*";result+=sprintf(" [%6s%10s%10s] [globalStartIndex: %10s] [size: %7s]\n",chr,start,end,valuesArray.globalStartIndex()!=undefined?valuesArray.globalStartIndex():"*",valuesArray.size());header+=sprintf("%25s",m.name().substr(0,22))});result+=header+"\n";for(var globalIndex=minGlobalIndex;globalIndex<maxGlobalIndex;++globalIndex){var id;if(this._rowData&&this._rowData.globalStartIndex()!=
undefined&&this._rowData.globalStartIndex()<=globalIndex&&this._rowData.globalStartIndex()+this._rowData.size()>globalIndex){var row=this._rowData.getByGlobalIndex(globalIndex);id=row.id();chr=row.seqName();start=row.start();end=row.end()}else id=chr=start=end="*";result+=sprintf("%15s%15s%15s%15s%15s",id,globalIndex,chr,start,end);if(this._values)this._values.foreach(function(m,valuesArray){if(valuesArray&&valuesArray.globalStartIndex()!=undefined&&valuesArray.globalStartIndex()<=globalIndex&&valuesArray.globalStartIndex()+
valuesArray.size()>globalIndex)result+=sprintf("%25s",valuesArray.getByGlobalIndex(globalIndex));else result+=sprintf("%25s","*")});result+="\n"}return result};goog.provide("epiviz.data.Cache");goog.require("epiviz.data.RequestStack");goog.require("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.datatypes.MeasurementGenomicDataArrayWrapper");goog.require("epiviz.datatypes.MapGenomicData");goog.require("epiviz.measurements.MeasurementSet");goog.require("epiviz.datatypes.PartialSummarizedExperiment");
epiviz.data.Cache=function(config,dataProviderFactory){this._config=config;this._dataProviderFactory=dataProviderFactory;this._data={};this._measurementRequestStackMap=new epiviz.measurements.MeasurementHashtable;this._measurementPendingRequestsMap=new epiviz.measurements.MeasurementHashtable;this._lastRequest=null;if(this._config.cacheUpdateIntervalMilliseconds>0){var self=this;this._intervalId=window.setTimeout(function(){self._clearUnneededData()},config.cacheUpdateIntervalMilliseconds)}};
epiviz.data.Cache.prototype.getData=function(range,chartMeasurementsMap,dataReadyCallback,failCallback){var MeasurementType=epiviz.measurements.Measurement.Type;var self=this;this._lastRequest=epiviz.datatypes.GenomicRange.fromStartEnd(range.seqName(),range.start()-range.width(),range.end()+range.width(),range.genome());if(this._config.cacheUpdateIntervalMilliseconds>0){window.clearInterval(this._intervalId);this._intervalId=window.setTimeout(function(){self._clearUnneededData()},this._config.cacheUpdateIntervalMilliseconds)}var computedMs=
this._extractComputedMeasurements(chartMeasurementsMap);this._updateComputedMeasurementsData(computedMs);this._serveAvailableData(range,chartMeasurementsMap,dataReadyCallback);var range_with_cache=new epiviz.datatypes.GenomicRange(range.seqName(),Math.max(range.start()-range.width(),0),range.end()+range.width()-Math.max(range.start()-range.width(),0),range.genome());var requestRanges=[range_with_cache];var msNeededRanges=this._calcMeasurementNeededRanges(requestRanges,chartMeasurementsMap);msNeededRanges.foreach(function(m,
ranges){var requestStack=self._measurementRequestStackMap.get(m);if(!requestStack){requestStack=new epiviz.data.RequestStack;self._measurementRequestStackMap.put(m,requestStack)}var request;if(ranges.length==0){request=epiviz.data.Request.emptyRequest();requestStack.pushRequest(request,function(){self._handleResponse(dataReadyCallback,range,chartMeasurementsMap,request,null,m,null)});requestStack.serveData(new epiviz.data.Response(request.id(),{}));return}for(var i=0;i<ranges.length;++i){request=
m.type()==MeasurementType.RANGE?epiviz.data.Request.getRows(m,ranges[i]):epiviz.data.Request.getValues(m,ranges[i]);(function(r,request){requestStack.pushRequest(request,function(data){self._handleResponse(dataReadyCallback,range,chartMeasurementsMap,request,r,m,data)})})(ranges[i],request);var pendingRequests=self._measurementPendingRequestsMap.get(m);if(!pendingRequests){pendingRequests={};self._measurementPendingRequestsMap.put(m,pendingRequests)}pendingRequests[request.id()]=ranges[i];var dataProvider=
self._dataProviderFactory.get(m.dataprovider())||self._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);dataProvider.getData(request,function(response){requestStack.serveData(response)},function(jqXHR,textStatus,errorThrown){failCallback(jqXHR,textStatus,errorThrown)})}})};
epiviz.data.Cache.prototype._handleResponse=function(chartDataReadyCallback,chartRequestedRange,chartMeasurementsMap,request,range,measurement,rawData){if(range)if(measurement.type()==epiviz.measurements.Measurement.Type.RANGE){var genomicArray=new epiviz.datatypes.GenomicRangeArray(measurement,range,rawData.globalStartIndex,rawData.values,rawData.useOffset);this._mergeData(measurement,genomicArray)}else{var mrange=measurement.datasource();if(Object.keys(rawData.rows.values.metadata).length==0)delete rawData.rows.values.metadata;
var rowData=new epiviz.datatypes.GenomicRangeArray(mrange,range,rawData.rows.globalStartIndex,rawData.rows.values,rawData.rows.useOffset);this._mergeData(mrange,rowData);var valData=new epiviz.datatypes.FeatureValueArray(measurement,range,rawData.values.globalStartIndex,rawData.values.values[measurement.id()]);this._mergeData(measurement,valData)}var computedMs=this._extractComputedMeasurements(chartMeasurementsMap);this._updateComputedMeasurementsData(computedMs);var pendingRequests=this._measurementPendingRequestsMap.get(measurement);
if(pendingRequests)delete pendingRequests[request.id()];this._serveAvailableData(chartRequestedRange,chartMeasurementsMap,chartDataReadyCallback)};
epiviz.data.Cache.prototype._serveAvailableData=function(range,chartMeasurementsMap,dataReadyCallback){var MeasurementType=epiviz.measurements.Measurement.Type;var self=this;var servedChartIds=[];for(var chartId in chartMeasurementsMap){if(!chartMeasurementsMap.hasOwnProperty(chartId))continue;var chartMeasurements=chartMeasurementsMap[chartId];var allDataAvailable=true;var chartData=new epiviz.measurements.MeasurementHashtable;(function(chartData){chartMeasurements.foreach(function(m){var storedData=
self._data[m.datasourceGroup()];if(!storedData||!storedData.rowData()||m.type()==MeasurementType.FEATURE&&!storedData.values(m)){allDataAvailable=false;return true}var rowData=storedData.rowData();var valueData=m.type()==MeasurementType.FEATURE?storedData.values(m):null;var neededRanges=range.subtract(rowData.boundaries());if(neededRanges.length){allDataAvailable=false;return true}if(valueData){neededRanges=range.subtract(valueData.boundaries());if(neededRanges.length){allDataAvailable=false;return true}}chartData.put(m,
new epiviz.datatypes.MeasurementGenomicDataWrapper(m,self._data[m.datasourceGroup()]));return false})})(chartData);if(allDataAvailable){dataReadyCallback(chartId,new epiviz.datatypes.MapGenomicData(chartData));servedChartIds.push(chartId)}}for(var i=0;i<servedChartIds.length;++i)delete chartMeasurementsMap[servedChartIds[i]]};
epiviz.data.Cache.prototype._calcMeasurementNeededRanges=function(ranges,chartMeasurementsMap){var MeasurementType=epiviz.measurements.Measurement.Type;var self=this;var result=new epiviz.measurements.MeasurementHashtable;for(var chartId in chartMeasurementsMap){if(!chartMeasurementsMap.hasOwnProperty(chartId))continue;var chartMeasurements=new epiviz.measurements.MeasurementSet;(function(chartMeasurements){chartMeasurementsMap[chartId].foreach(function(m){var compMs=m.componentMeasurements();compMs.foreach(function(compM){chartMeasurements.add(compM)})})})(chartMeasurements);
chartMeasurements.foreach(function(m){var neededRanges=null;var storedData=self._data[m.datasourceGroup()];if(!storedData||m.type()==MeasurementType.FEATURE&&!storedData.values(m))neededRanges=ranges.slice(0);else{var data=m.type()==MeasurementType.FEATURE?storedData.values(m):storedData.rowData();if(!data)neededRanges=ranges.slice(0);else{neededRanges=[];var boundaries=data.boundaries();for(var i=0;i<ranges.length;++i)neededRanges=neededRanges.concat(ranges[i].subtract(boundaries))}}var pendingRequests=
self._measurementPendingRequestsMap.get(m);if(pendingRequests)for(var j=0;j<neededRanges.length;++j)for(var requestId in pendingRequests){if(!pendingRequests.hasOwnProperty(requestId))continue;var dif=neededRanges[j].subtract(pendingRequests[requestId]);Array.prototype.splice.apply(neededRanges,[j,1].concat(dif));if(dif.length==0){--j;break}if(j>=neededRanges.length)break}result.put(m,neededRanges)})}return result};
epiviz.data.Cache.prototype._extractComputedMeasurements=function(chartMeasurementsMap){var result=new epiviz.measurements.MeasurementSet;for(var chartId in chartMeasurementsMap){if(!chartMeasurementsMap.hasOwnProperty(chartId))continue;chartMeasurementsMap[chartId].foreach(function(m){if(m.isComputed())result.add(m)})}return result};
epiviz.data.Cache.prototype._mergeData=function(measurement,data){var MeasurementType=epiviz.measurements.Measurement.Type;var storedData=this._data[measurement.datasourceGroup()];if(!storedData){storedData=new epiviz.datatypes.PartialSummarizedExperiment;this._data[measurement.datasourceGroup()]=storedData}if(measurement.type()==MeasurementType.RANGE){storedData.addRowData(data);return}storedData.addValues(data)};
epiviz.data.Cache.prototype._clearUnneededData=function(){if(!this._lastRequest)return;console.log(sprintf("Clearing data outside of range [%7s%10s%10s]",this._lastRequest.seqName(),this._lastRequest.start(),this._lastRequest.end()));var self=this;var newData={};for(var datasourceGroup in this._data){if(!this._data.hasOwnProperty(datasourceGroup))continue;var exp=this._data[datasourceGroup];newData[datasourceGroup]=exp.trim(self._lastRequest)}this._data=newData};
epiviz.data.Cache.prototype._updateComputedMeasurementsData=function(computedMs){var self=this;var GenomicRange=epiviz.datatypes.GenomicRange;computedMs.foreach(function(cm){var storedData=self._data[cm.datasourceGroup()];if(!storedData)return false;var componentMeasurements=cm.componentMeasurements();var globalStartIndex=null;var size=null;var boundaries=null;componentMeasurements.foreach(function(m){var values=storedData.values(m);if(!values||!values.boundaries()){globalStartIndex=null;size=null;
boundaries=null;return true}if(boundaries===null){globalStartIndex=values.globalStartIndex();size=values.size();boundaries=values.boundaries();return globalStartIndex===null}if(values.boundaries().seqName()!=boundaries.seqName()){size=0;return true}if(globalStartIndex<values.globalStartIndex()){size-=values.globalStartIndex()-globalStartIndex;if(size<0){size=0;return true}globalStartIndex=values.globalStartIndex();var start=values.boundaries().start(),end=boundaries.end();if(size>values.size()){size=
values.size();end=values.boundaries().end()}boundaries=GenomicRange.fromStartEnd(boundaries.seqName(),start,end,boundaries.genome())}else{var newSize=values.size()-globalStartIndex+values.globalStartIndex();if(size>newSize){size=newSize;if(size<=0){size=0;return true}boundaries=GenomicRange.fromStartEnd(boundaries.seqName(),boundaries.start(),values.boundaries().end(),boundaries.genome())}}if(size==0)return true;return false});if(boundaries===null)return false;var existingValues=storedData.values(cm);
if(existingValues&&(globalStartIndex===null||existingValues.globalStartIndex()<globalStartIndex&&existingValues.globalStartIndex()+existingValues.size()>globalStartIndex+size))return false;var compMsVals=new epiviz.measurements.MeasurementHashtable;var values=null;if(existingValues&&existingValues.size()){componentMeasurements.foreach(function(m){var v=storedData.values(m);var mVals=[];if(globalStartIndex!==null)for(var index=globalStartIndex;index<existingValues.globalStartIndex();++index)mVals.push(v.getByGlobalIndex(index));
compMsVals.put(m,mVals)});values=new epiviz.datatypes.FeatureValueArray(cm,GenomicRange.fromStartEnd(boundaries.seqName(),boundaries.start(),existingValues.boundaries().start()),globalStartIndex,cm.evaluateArr(compMsVals),boundaries.genome());self._mergeData(cm,values);compMsVals=new epiviz.measurements.MeasurementHashtable;componentMeasurements.foreach(function(m){var v=storedData.values(m);var mVals=[];if(globalStartIndex!==null)for(var index=existingValues.globalStartIndex()+existingValues.size();index<
globalStartIndex+size;++index)mVals.push(v.getByGlobalIndex(index));compMsVals.put(m,mVals)});values=new epiviz.datatypes.FeatureValueArray(cm,GenomicRange.fromStartEnd(boundaries.seqName(),existingValues.boundaries().end(),boundaries.end(),boundaries.genome()),existingValues.globalStartIndex()+existingValues.size(),cm.evaluateArr(compMsVals));self._mergeData(cm,values);return false}compMsVals=new epiviz.measurements.MeasurementHashtable;componentMeasurements.foreach(function(m){var v=storedData.values(m);
var mVals=[];if(globalStartIndex!==null)for(var index=globalStartIndex;index<globalStartIndex+size;++index)mVals.push(v.getByGlobalIndex(index));compMsVals.put(m,mVals)});values=new epiviz.datatypes.FeatureValueArray(cm,boundaries,globalStartIndex,cm.evaluateArr(compMsVals));self._mergeData(cm,values);return false})};epiviz.data.Cache.prototype.flush=function(){this._data={};this._measurementRequestStackMap.foreach(function(m,requestStack){requestStack.clear()});this._measurementPendingRequestsMap.clear()};
epiviz.data.Cache.prototype.clearDatasourceGroupCache=function(datasourceGroup){delete this._data[datasourceGroup];this._measurementRequestStackMap.foreach(function(m,requestStack){if(m.datasourceGroup()==datasourceGroup)requestStack.clear()});var msToClear=[];this._measurementPendingRequestsMap.foreach(function(m,map){if(m.datasourceGroup()==datasourceGroup)msToClear.push(m)});for(var i=0;i<msToClear.length;++i)this._measurementPendingRequestsMap.put(msToClear[i],{})};goog.provide("epiviz.data.EmptyResponseDataProvider");goog.require("epiviz.data.DataProvider");goog.require("epiviz.data.Response");epiviz.data.EmptyResponseDataProvider=function(){epiviz.data.DataProvider.call(this,epiviz.data.EmptyResponseDataProvider.DEFAULT_ID)};epiviz.data.EmptyResponseDataProvider.prototype=epiviz.utils.mapCopy(epiviz.data.DataProvider.prototype);epiviz.data.EmptyResponseDataProvider.constructor=epiviz.data.EmptyResponseDataProvider;
epiviz.data.EmptyResponseDataProvider.DEFAULT_ID="empty";
epiviz.data.EmptyResponseDataProvider.prototype.getData=function(request,callback){var requestId=request.id();var action=request.get("action");switch(action){case epiviz.data.Request.Action.GET_ROWS:callback(epiviz.data.Response.fromRawObject({data:{values:{id:null,start:[],end:[],strand:[],metadata:{my_metadata:[]}},globalStartIndex:null,useOffset:false},requestId:requestId}));return;case epiviz.data.Request.Action.GET_VALUES:callback(epiviz.data.Response.fromRawObject({data:{values:[],globalStartIndex:null},
requestId:requestId}));return;case epiviz.data.Request.Action.GET_MEASUREMENTS:callback(epiviz.data.Response.fromRawObject({requestId:request.id(),data:{id:[],name:[],type:[],datasourceId:[],datasourceGroup:[],defaultChartType:[],annotation:[],minValue:[],maxValue:[],metadata:[]}}));return;case epiviz.data.Request.Action.GET_SEQINFOS:callback(epiviz.data.Response.fromRawObject({requestId:request.id(),data:[]}));return;case epiviz.data.Request.Action.SEARCH:callback(epiviz.data.Response.fromRawObject({requestId:request.id(),
data:[]}));return;case epiviz.data.Request.Action.SAVE_WORKSPACE:callback(epiviz.data.Response.fromRawObject({requestId:request.id(),data:[]}));return;case epiviz.data.Request.Action.DELETE_WORKSPACE:callback(epiviz.data.Response.fromRawObject({requestId:request.id(),data:[]}));return;case epiviz.data.Request.Action.GET_WORKSPACES:callback(epiviz.data.Response.fromRawObject({requestId:request.id(),data:[]}));return;default:epiviz.data.DataProvider.prototype.getData.call(this,request,callback);break}};goog.provide("epiviz.data.DataProviderFactory");goog.require("epiviz.events.EventListener");goog.require("epiviz.events.Event");goog.require("epiviz.data.EmptyResponseDataProvider");goog.require("epiviz.utils");
epiviz.data.DataProviderFactory=function(config){this._config=config;this._providers={};this._size=0;var tokens;for(var i=0;i<this._config.dataProviders.length;++i){if(!$.isArray(this._config.dataProviders[i]))tokens=this._config.dataProviders[i].split(",");else tokens=this._config.dataProviders[i];var dataProviderConstructor=epiviz.utils.evaluateFullyQualifiedTypeName(tokens[0]);if(!dataProviderConstructor)continue;var dataProvider=epiviz.utils.applyConstructor(dataProviderConstructor,tokens.slice(1));
this._providers[dataProvider.id()]=dataProvider;++this._size}var emptyProvider=new epiviz.data.EmptyResponseDataProvider;this._providers[emptyProvider.id()]=emptyProvider;++this._size;tokens=this._config.workspacesDataProvider.split(",");var wsDataProviderConstructor=epiviz.utils.evaluateFullyQualifiedTypeName(tokens[0]);this._workspacesDataProvider=epiviz.utils.applyConstructor(wsDataProviderConstructor,tokens.slice(1))};
epiviz.data.DataProviderFactory.prototype.foreach=function(func){for(var id in this._providers){if(!this._providers.hasOwnProperty(id))continue;if(func(this._providers[id]))return}};epiviz.data.DataProviderFactory.prototype.isEmpty=function(){return!this._size};epiviz.data.DataProviderFactory.prototype.size=function(){return this._size};epiviz.data.DataProviderFactory.prototype.get=function(id){if(id in this._providers)return this._providers[id];return null};
epiviz.data.DataProviderFactory.prototype.workspacesDataProvider=function(){return this._workspacesDataProvider};goog.provide("epiviz.datatypes.GenomicArray");epiviz.datatypes.GenomicArray=function(measurement,boundaries,globalStartIndex,values){this._measurement=measurement;this._boundaries=boundaries;this._globalStartIndex=globalStartIndex;this._values=values};epiviz.datatypes.GenomicArray.prototype.boundaries=function(){return this._boundaries};epiviz.datatypes.GenomicArray.prototype.globalStartIndex=function(){return this._globalStartIndex};epiviz.datatypes.GenomicArray.prototype.measurement=function(){return this._measurement};
epiviz.datatypes.GenomicArray.prototype.get=function(index){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicArray.prototype.size=function(){throw Error("unimplemented abstract method");};epiviz.datatypes.GenomicArray.prototype.getByGlobalIndex=function(globalIndex){return this.get(globalIndex-this._globalStartIndex)};epiviz.datatypes.GenomicArray.prototype.concatValues=function(second,secondIndex){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicArray.prototype.createNew=function(measurement,boundaries,globalStartIndex,values){throw Error("unimplemented abstract method");};
epiviz.datatypes.GenomicArray.prototype.merge=function(arr){if(!arr||arr.boundaries()==undefined)return this;if(this.boundaries().seqName()!=arr.boundaries().seqName()||this.boundaries().start()>arr.boundaries().end()||arr.boundaries().start()>this.boundaries().end())throw Error("Two genomic arrays can only be merged if they overlap or are in continuation to one another");var first=this.boundaries().start()<arr.boundaries().start()?this:arr;var second=first==this?arr:this;if(first.boundaries().end()>=
second.boundaries().end())return first;var secondIndex=first.globalStartIndex()!=undefined&&second.globalStartIndex()!=undefined?first.globalStartIndex()+first.size()-second.globalStartIndex():0;var measurement=first.measurement(),globalStartIndex=first.globalStartIndex()!=undefined?first.globalStartIndex():second.globalStartIndex(),boundaries=epiviz.datatypes.GenomicRange.fromStartEnd(first.boundaries().seqName(),first.boundaries().start(),second.boundaries().end(),first.boundaries().genome()),values=
first.concatValues(second,secondIndex);return this.createNew(measurement,boundaries,globalStartIndex,values)};goog.provide("epiviz.datatypes.GenomicRangeArray");goog.require("epiviz.datatypes.GenomicArray");goog.require("epiviz.datatypes.GenomicRange");goog.require("epiviz.utils");
epiviz.datatypes.GenomicRangeArray=function(measurement,boundaries,globalStartIndex,values,useOffset){epiviz.datatypes.GenomicArray.call(this,measurement,boundaries,globalStartIndex,values);this._id=values.id;this._seqName=values.chr;this._start=values.start;this._end=values.end;this._strand=values.strand||null;this._metadata=values.metadata;this._size=null;if(useOffset){var i;for(i=1;i<this._start.length;++i){this._start[i]+=this._start[i-1];if(this._end)this._end[i]+=this._end[i-1]}}};
epiviz.datatypes.GenomicRangeArray.prototype=epiviz.utils.mapCopy(epiviz.datatypes.GenomicArray.prototype);epiviz.datatypes.GenomicRangeArray.constructor=epiviz.datatypes.GenomicRangeArray;epiviz.datatypes.GenomicRangeArray.prototype.createNew=function(measurement,boundaries,globalStartIndex,values){return new epiviz.datatypes.GenomicRangeArray(measurement,boundaries,globalStartIndex,values)};
epiviz.datatypes.GenomicRangeArray.prototype.get=function(i){if(i<0||i>=this.size())return null;return new epiviz.datatypes.GenomicRangeArray.RowItemWrapper(this,i)};
epiviz.datatypes.GenomicRangeArray.prototype.size=function(){if(this._size==undefined){var size=Math.max(this._id?this._id.length:0,this._start?this._start.length:0,this._end?this._end.length:0,this._metadata&&Object.keys(this._metadata).length?Math.max.apply(undefined,$.map(this._metadata,function(col){return col.length})):0);this._size=size}return this._size};
epiviz.datatypes.GenomicRangeArray.prototype.concatValues=function(second,secondIndex){var strand=null;if(!Array.isArray(this._strand)&&!Array.isArray(second._strand)&&this._strand==second._strand)strand=this._strand;else{var firstStrand=Array.isArray(this._strand)?this._strand:epiviz.utils.fillArray(this.size(),this._strand),secondStrand=Array.isArray(second._strand)?second._strand:epiviz.utils.fillArray(second.size(),second._strand);strand=firstStrand.concat(secondStrand.slice(secondIndex))}var id=
this._id?this._id.concat(second._id.slice(secondIndex)):null,start=this._start.concat(second._start.slice(secondIndex)),end=this._end?this._end.concat(second._end.slice(secondIndex)):null,seqName=this._seqName?this._seqName.concat(second._seqName.slice(secondIndex)):null;var metadata={};for(var col in this._metadata){if(!this._metadata.hasOwnProperty(col))continue;metadata[col]=this._metadata[col].concat(second._metadata[col].slice(secondIndex))}return{id:id,start:start,end:end,strand:strand,metadata:metadata,
chr:seqName}};
epiviz.datatypes.GenomicRangeArray.prototype.trim=function(range){if(this.globalStartIndex()==undefined||!this.size()||!range||!this.boundaries()||this.boundaries().seqName()!=range.seqName())return null;var start=Math.max(this.boundaries().start(),range.start());var end=Math.min(this.boundaries().end(),range.end());if(end<=start)return null;range=epiviz.datatypes.GenomicRange.fromStartEnd(range.seqName(),start,end,range.genome());var startIndex=-1;var endIndex=-1;for(var i=0;i<this.size();++i){if(startIndex<0&&
this.end(i)>=range.start())startIndex=i;if(this._start[i]<range.end())endIndex=i+1}if(endIndex<=startIndex)return null;var values,globalStartIndex;var col;if(startIndex>=0&&endIndex>=startIndex){values={id:this._id?this._id.slice(startIndex,endIndex):null,start:this._start.slice(startIndex,endIndex),end:this._end?this._end.slice(startIndex,endIndex):null,chr:this._seqName?this._seqName.slice(startIndex,endIndex):null,strand:Array.isArray(this._strand)?this._strand.slice(startIndex,endIndex):this._strand,
metadata:{}};for(col in this._metadata){if(!this._metadata.hasOwnProperty(col))continue;values.metadata[col]=this._metadata[col].slice(startIndex,endIndex)}globalStartIndex=this.globalStartIndex()+startIndex}else{values={id:this._id?[]:null,start:[],chr:this._seqName?[]:null,end:this._end?[]:null,strand:Array.isArray(this._strand)?[]:this._strand,metadata:{}};for(col in this._metadata){if(!this._metadata.hasOwnProperty(col))continue;values.metadata[col]=[]}globalStartIndex=null}return new epiviz.datatypes.GenomicRangeArray(this.measurement(),
range,globalStartIndex,values)};epiviz.datatypes.GenomicRangeArray.prototype.ranges=function(){return this};epiviz.datatypes.GenomicRangeArray.prototype.foreach=function(func){var size=this.size();for(var i=0;i<size;++i)if(func(this.get(i)))return};epiviz.datatypes.GenomicRangeArray.prototype.metadataColumns=function(){if(this._metadata)return Object.keys(this._metadata);return[]};
epiviz.datatypes.GenomicRangeArray.prototype.id=function(index){return this._id?this._id[index]:this.globalStartIndex()+index};epiviz.datatypes.GenomicRangeArray.prototype.seqName=function(index){return this._seqName?this._seqName[index]:undefined};epiviz.datatypes.GenomicRangeArray.prototype.start=function(index){return this._start?this._start[index]:undefined};epiviz.datatypes.GenomicRangeArray.prototype.end=function(index){return this._end?this._end[index]:this.start(index)};
epiviz.datatypes.GenomicRangeArray.prototype.strand=function(index){return Array.isArray(this._strand)?this._strand[index]:this._strand};epiviz.datatypes.GenomicRangeArray.prototype.metadata=function(column,index){if(!this._metadata||!this._metadata[column])return null;return this._metadata[column][index]};epiviz.datatypes.GenomicRangeArray.prototype.rowMetadata=function(index){var result={};for(var column in this._metadata){if(!this._metadata.hasOwnProperty(column))continue;result[column]=this._metadata[column][index]}return result};
epiviz.datatypes.GenomicRangeArray.prototype.toString=function(){var g,c,s,e;if(this.boundaries()){g=this.boundaries().genome();c=this.boundaries().seqName();s=this.boundaries().start();e=this.boundaries().end()}else g=c=s=e="*";var header=sprintf("%25s",this.measurement().name().substr(0,22))+sprintf(" [%6s%10s%10s]",c,s,e);var id=sprintf("%10s:","id");var idx=sprintf("%10s:","idx");var chr=sprintf("%10s:","chr");var start=sprintf("%10s:","start");var end=sprintf("%10s:","end");if(this.globalStartIndex()!=
undefined)for(var globalIndex=this.globalStartIndex();globalIndex<this.globalStartIndex()+this.size();++globalIndex){var row=this.getByGlobalIndex(globalIndex);id+=sprintf("%10s",row.id());idx+=sprintf("%10s",globalIndex);chr+=sprintf("%10s",row.seqName());start+=sprintf("%10s",row.start());end+=sprintf("%10s",row.end())}return[header,id,idx,chr,start,end].join("\n")};goog.provide("epiviz.datatypes.GenomicRangeArray.RowItemWrapper");goog.require("epiviz.datatypes.GenomicData.RowItem");
epiviz.datatypes.GenomicRangeArray.RowItemWrapper=function(parent,index){this._index=index;this._parent=parent};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.parent=function(){return this._parent};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.id=function(){return this._parent.id(this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.seqName=function(){return this._parent.seqName(this._index)};
epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.start=function(){return this._parent.start(this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.end=function(){return this._parent.end(this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.index=function(){return this._index};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.globalIndex=function(){return this._index+this._parent.globalStartIndex()};
epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.equals=function(other){if(!other)return false;if(this==other)return true;return other.seqName()==this.seqName()&&other.start()==this.start()&&other.end()==this.end()};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.strand=function(){return this._parent.strand(this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.metadata=function(column){return this._parent.metadata(column,this._index)};
epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.rowMetadata=function(){return this._parent.rowMetadata(this._index)};epiviz.datatypes.GenomicRangeArray.RowItemWrapper.prototype.overlapsWith=function(other){if(!other)return false;if(this==other)return true;if(this.seqName()!=other.seqName())return false;return this.start()<other.end()&&this.end()>other.start()};goog.provide("epiviz.datatypes.FeatureValueArray");goog.require("epiviz.datatypes.GenomicArray");goog.require("epiviz.datatypes.GenomicRange");goog.require("epiviz.utils");
epiviz.datatypes.FeatureValueArray=function(measurement,boundaries,globalStartIndex,values){var vals=null;var valuesAnnotation=null;if(!values||$.isArray(values)){vals=values;valuesAnnotation={values:values}}else{vals=values.values;valuesAnnotation=values}epiviz.datatypes.GenomicArray.call(this,measurement,boundaries,globalStartIndex,vals);this._valuesAnnotation=valuesAnnotation};epiviz.datatypes.FeatureValueArray.prototype=epiviz.utils.mapCopy(epiviz.datatypes.GenomicArray.prototype);
epiviz.datatypes.FeatureValueArray.constructor=epiviz.datatypes.FeatureValueArray;epiviz.datatypes.FeatureValueArray.prototype.createNew=function(measurement,boundaries,globalStartIndex,values){return new epiviz.datatypes.FeatureValueArray(measurement,boundaries,globalStartIndex,values)};epiviz.datatypes.FeatureValueArray.prototype.get=function(index){return this._values[index]};
epiviz.datatypes.FeatureValueArray.prototype.getAnnotation=function(index){if(this._valuesAnnotation==undefined)return null;var ret={};for(var col in this._valuesAnnotation){if(!this._valuesAnnotation.hasOwnProperty(col))continue;ret[col]=this._valuesAnnotation[col][index]}return ret};epiviz.datatypes.FeatureValueArray.prototype.size=function(){return this._values?this._values.length:0};
epiviz.datatypes.FeatureValueArray.prototype.concatValues=function(second,secondIndex){if(!second||!second.size())return this._valuesAnnotation;if(!this._valuesAnnotation||!this._valuesAnnotation.values)this._valuesAnnotation={values:[]};var ret={};for(var key in this._valuesAnnotation){if(!this._valuesAnnotation.hasOwnProperty(key))continue;if(!second._valuesAnnotation.hasOwnProperty(key))continue;ret[key]=this._valuesAnnotation[key].concat(second._valuesAnnotation[key].slice(secondIndex))}return ret};
epiviz.datatypes.FeatureValueArray.prototype.trim=function(range,globalStartIndex,length){if(this.globalStartIndex()==undefined||!this.size()||globalStartIndex==undefined||!range||!this.boundaries()||this.boundaries().seqName()!=range.seqName())return null;var start=Math.max(this.boundaries().start(),range.start());var end=Math.min(this.boundaries().end(),range.end());if(end<=start)return null;range=epiviz.datatypes.GenomicRange.fromStartEnd(range.seqName(),start,end,range.genome());var startIndex=
Math.max(globalStartIndex,this.globalStartIndex())-this.globalStartIndex();var endIndex=Math.min(globalStartIndex+length,this.globalStartIndex()+this.size())-this.globalStartIndex();if(endIndex<=startIndex)return null;var values={};for(var key in this._valuesAnnotation){if(!this._valuesAnnotation.hasOwnProperty(key))continue;values[key]=this._valuesAnnotation[key].slice(startIndex,endIndex)}return new epiviz.datatypes.FeatureValueArray(this.measurement(),range,startIndex+this.globalStartIndex(),values)};
epiviz.datatypes.FeatureValueArray.prototype.toString=function(){var c,s,e;if(this.boundaries()){c=this.boundaries().seqName();s=this.boundaries().start();e=this.boundaries().end()}else c=s=e="*";var header=sprintf("%25s",this.measurement().name().substr(0,22))+sprintf(" [%6s%10s%10s]",c,s,e);var idx=sprintf("%10s:","idx");var val=sprintf("%10s:","val");if(this.globalStartIndex()!=undefined)for(var globalIndex=this.globalStartIndex();globalIndex<this.globalStartIndex()+this.size();++globalIndex){var v=
this.getByGlobalIndex(globalIndex);idx+=sprintf("%10s",globalIndex);val+=sprintf("%10s",v)}return[header,idx,val].join("\n")};goog.provide("epiviz.datatypes.MeasurementGenomicDataWrapper");goog.require("epiviz.datatypes.MeasurementGenomicData");goog.require("epiviz.datatypes.GenomicData.ValueItem");goog.require("epiviz.measurements.Measurement.Type");epiviz.datatypes.MeasurementGenomicDataWrapper=function(measurement,container){this._measurement=measurement;this._container=container;this._size=null;this._globalStartIndex=null};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.get=function(index){var rows=this._container.rowData();var values=null;var firstGlobalIndex=this.globalStartIndex();var item=null;var value=null;var valueAnnotation=null;var globalIndex=null;var size=this.size();if(!size||index>=size||index<0)return new epiviz.datatypes.GenomicData.ValueItem(globalIndex,item,value,this._measurement,valueAnnotation);if(firstGlobalIndex!=undefined){if(this._measurement.type()==epiviz.measurements.Measurement.Type.FEATURE||
this._measurement.type()==epiviz.measurements.Measurement.Type.UNORDERED){values=this._container.values(this._measurement);var valueIndex=firstGlobalIndex-values.globalStartIndex()+index;value=values.get(valueIndex);valueAnnotation=values.getAnnotation(valueIndex)}var rowIndex=firstGlobalIndex-rows.globalStartIndex()+index;item=rows.get(rowIndex);globalIndex=firstGlobalIndex+index}return new epiviz.datatypes.GenomicData.ValueItem(globalIndex,item,value,this._measurement,valueAnnotation)};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.getRow=function(index){var rows=this._container.rowData();var firstGlobalIndex=this.globalStartIndex();var item=null;var size=this.size();if(!size||index>=size||index<0)return item;if(firstGlobalIndex!=undefined){var rowIndex=firstGlobalIndex-rows.globalStartIndex()+index;item=rows.get(rowIndex)}return item};epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.measurement=function(){return this._measurement};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.globalStartIndex=function(){if(this._globalStartIndex!==null)return this._globalStartIndex;var rows=this._container.rowData();var values=null;var firstGlobalIndex=rows.globalStartIndex();if(firstGlobalIndex===null)return firstGlobalIndex;if(this._measurement.type()==epiviz.measurements.Measurement.Type.FEATURE||this._measurement.type()==epiviz.measurements.Measurement.Type.UNORDERED){values=this._container.values(this._measurement);if(!values.globalStartIndex())return values.globalStartIndex();
firstGlobalIndex=Math.max(firstGlobalIndex,values.globalStartIndex())}this._globalStartIndex=firstGlobalIndex;return this._globalStartIndex};epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.globalEndIndex=function(){var startIndex=this.globalStartIndex();if(startIndex==null)return null;return startIndex+this.size()};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.size=function(){if(this._size!==null)return this._size;var firstGlobalIndex=this.globalStartIndex();if(firstGlobalIndex==undefined)return 0;var rows=this._container.rowData();var values=this._container.values(this._measurement);var result=rows.size()-firstGlobalIndex+rows.globalStartIndex();if(this._measurement.type()==epiviz.measurements.Measurement.Type.FEATURE||this._measurement.type()==epiviz.measurements.Measurement.Type.UNORDERED)result=
Math.min(result,values.size()-firstGlobalIndex+values.globalStartIndex());this._size=Math.max(0,result);return this._size};epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.getByGlobalIndex=function(globalIndex){var firstGlobalIndex=this.globalStartIndex();if(firstGlobalIndex==undefined)return new epiviz.datatypes.GenomicData.ValueItem(null,null,null,this._measurement,null);return this.get(globalIndex-firstGlobalIndex)};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.getRowByGlobalIndex=function(globalIndex){var firstGlobalIndex=this.globalStartIndex();if(firstGlobalIndex==undefined)return null;return this.getRow(globalIndex-firstGlobalIndex)};
epiviz.datatypes.MeasurementGenomicDataWrapper.prototype.binarySearchStarts=function(range){var rows=this._container.rowData();if(this.size()==0||!rows||rows.size()==0||rows.start(0)>=range.end()||rows.start(rows.size()-1)<=range.start())return{index:null,length:0};var s=0,e=rows.size()-1;var m;var startIndex=null;while(s<=e){m=Math.floor((s+e)*.5);if(rows.start(m)==range.start()){startIndex=m;e=m-1}else if(rows.start(m)<range.start())s=m+1;else e=m-1}if(startIndex===null)startIndex=s;s=0;e=rows.size()-
1;var endIndex=null;while(s<=e){m=Math.floor((s+e)*.5);if(rows.start(m)==range.end()){endIndex=m;s=m+1}else if(rows.start(m)<range.end())s=m+1;else e=m-1}if(endIndex===null)endIndex=s-1;var globalStartIndex=Math.max(startIndex+rows.globalStartIndex(),this.globalStartIndex());var globalEndIndex=Math.min(endIndex+rows.globalStartIndex(),this.globalStartIndex()+this.size()-1);return{index:globalStartIndex-this.globalStartIndex(),length:globalEndIndex-globalStartIndex+1}};goog.provide("epiviz.datatypes.SeqInfo");goog.require("epiviz.utils");epiviz.datatypes.SeqInfo=function(seqName,min,max,genome){this.genome=genome;this.seqName=seqName;this.min=min;this.max=max};epiviz.datatypes.SeqInfo.prototype.raw=function(){return[this.seqName,this.min,this.max,this.genome]};epiviz.datatypes.SeqInfo.fromRawObject=function(o){return new epiviz.datatypes.SeqInfo(o[0],parseFloat(o[1]),parseFloat(o[2]),o[3])};
epiviz.datatypes.SeqInfo.compare=function(s1,s2){if(s1.genome==s2.genome){if(s1.seqName==s2.seqName)return 0;if(s1.seqName==undefined)return-1;if(s2.seqName==undefined)return 1;var n1str=s1.seqName.replace(/\D/g,"");var n2str=s2.seqName.replace(/\D/g,"");if(n1str==""||n2str==""||!epiviz.utils.stringStartsWith(s1.seqName,n1str)&&!epiviz.utils.stringEndsWith(s1.seqName,n1str)||!epiviz.utils.stringStartsWith(s2.seqName,n2str)&&!epiviz.utils.stringEndsWith(s2.seqName,n2str))return s1.seqName<s2.seqName?
-1:s1.seqName>s2.seqName?1:0;return parseInt(n1str)-parseInt(n2str)}else{var n1str=s1.genome.replace(/\D/g,"");var n2str=s2.genome.replace(/\D/g,"");if(n1str==""||n2str==""||!epiviz.utils.stringStartsWith(s1.genome,n1str)&&!epiviz.utils.stringEndsWith(s1.genome,n1str)||!epiviz.utils.stringStartsWith(s2.genome,n2str)&&!epiviz.utils.stringEndsWith(s2.genome,n2str))return s1.genome<s2.genome?-1:s1.genome>s2.genome?1:0;return parseInt(n1str)-parseInt(n2str)}};goog.provide("epiviz.data.DataManager");goog.require("epiviz.data.DataProvider");goog.require("epiviz.data.DataProviderFactory");goog.require("epiviz.measurements.MeasurementSet");goog.require("epiviz.measurements.Measurement");goog.require("epiviz.events.EventListener");goog.require("epiviz.data.Cache");goog.require("epiviz.events.Event");goog.require("epiviz.data.RequestStack");goog.require("epiviz.datatypes.GenomicRangeArray");goog.require("epiviz.datatypes.FeatureValueArray");goog.require("epiviz.datatypes.MeasurementGenomicData");
goog.require("epiviz.datatypes.MeasurementGenomicDataWrapper");goog.require("epiviz.datatypes.SeqInfo");goog.require("epiviz.events.EventResult");goog.require("epiviz.utils");
epiviz.data.DataManager=function(config,dataProviderFactory){this._config=config;this._measurements=new epiviz.measurements.MeasurementSet;this._dataProviderFactory=dataProviderFactory;this._cache=new epiviz.data.Cache(config,dataProviderFactory);this._combinedRequestsStacks={};this._requestAddMeasurements=new epiviz.events.Event;this._requestRemoveMeasurements=new epiviz.events.Event;this._requestAddChart=new epiviz.events.Event;this._requestRemoveChart=new epiviz.events.Event;this._requestPrintWorkspace=
new epiviz.events.Event;this._requestLoadWorkspace=new epiviz.events.Event;this._requestAddSeqInfos=new epiviz.events.Event;this._requestRemoveSeqNames=new epiviz.events.Event;this._requestNavigate=new epiviz.events.Event;this._requestRedraw=new epiviz.events.Event;this._flushCache=new epiviz.events.Event;this._clearDatasourceGroupCache=new epiviz.events.Event;this._requestCurrentLocation=new epiviz.events.Event;this._requestGetChartSettings=new epiviz.events.Event;this._requestSetChartSettings=new epiviz.events.Event;
this._requestGetAvailableCharts=new epiviz.events.Event;this._requestLoadMeasurements=new epiviz.events.Event;this._requestUiStatus=new epiviz.events.Event;this._registerProviderAddMeasurements();this._registerProviderRemoveMeasurements();this._registerProviderAddChart();this._registerProviderRemoveChart();this._registerProviderPrintWorkspace();this._registerProviderLoadWorkspace();this._registerProviderAddSeqInfos();this._registerProviderRemoveSeqNames();this._registerProviderNavigate();this._registerProviderRedraw();
this._registerProviderFlushCache();this._registerProviderClearDatasourceGroupCache();this._registerProviderGetCurrentLocation();this._registerProviderGetChartSettings();this._registerProviderSetChartSettings();this._registerProviderGetAvailableCharts();this._registerProviderUiStatus();this._registerProviderLoadMeasurements()};epiviz.data.DataManager.prototype.onRequestAddMeasurements=function(){return this._requestAddMeasurements};epiviz.data.DataManager.prototype.onRequestRemoveMeasurements=function(){return this._requestRemoveMeasurements};
epiviz.data.DataManager.prototype.onRequestLoadMeasurements=function(){return this._requestLoadMeasurements};epiviz.data.DataManager.prototype.onRequestAddChart=function(){return this._requestAddChart};epiviz.data.DataManager.prototype.onRequestRemoveChart=function(){return this._requestRemoveChart};epiviz.data.DataManager.prototype.onRequestPrintWorkspace=function(){return this._requestPrintWorkspace};epiviz.data.DataManager.prototype.onRequestLoadWorkspace=function(){return this._requestLoadWorkspace};
epiviz.data.DataManager.prototype.onRequestAddSeqInfos=function(){return this._requestAddSeqInfos};epiviz.data.DataManager.prototype.onRequestRemoveSeqNames=function(){return this._requestRemoveSeqNames};epiviz.data.DataManager.prototype.onRequestNavigate=function(){return this._requestNavigate};epiviz.data.DataManager.prototype.onRequestRedraw=function(){return this._requestRedraw};epiviz.data.DataManager.prototype.onClearDatasourceGroupCache=function(){return this._clearDatasourceGroupCache};
epiviz.data.DataManager.prototype.onFlushCache=function(){return this._flushCache};epiviz.data.DataManager.prototype.onRequestCurrentLocation=function(){return this._requestCurrentLocation};epiviz.data.DataManager.prototype.onRequestGetChartSettings=function(){return this._requestGetChartSettings};epiviz.data.DataManager.prototype.onRequestSetChartSettings=function(){return this._requestSetChartSettings};epiviz.data.DataManager.prototype.onRequestGetAvailableCharts=function(){return this._requestGetAvailableCharts};
epiviz.data.DataManager.prototype.onRequestUiStatus=function(){return this._requestUiStatus};
epiviz.data.DataManager.prototype.getSeqInfos=function(callback,failCallback){var self=this;var nResponses=0;var existingSeqNames={};var result=[];this._dataProviderFactory.foreach(function(provider){provider.getData(epiviz.data.Request.getSeqInfos(provider.id()),function(response){var seqs=response.data();if(epiviz.EpiViz.VERSION==5){if(seqs)if(!Array.isArray(seqs)){var keys=Object.keys(seqs);for(var i=0;i<keys.length;i++)for(var j=0;j<seqs[keys[i]].length;j++)result.push(epiviz.datatypes.SeqInfo.fromRawObject([seqs[keys[i]][j][0],
seqs[keys[i]][j][1],seqs[keys[i]][j][2],keys[i]]))}}else if(seqs)if(!Array.isArray(seqs)){var keys=Object.keys(seqs);for(var i=0;i<keys.length;i++)if(!(keys[i]in existingSeqNames)){result.push(epiviz.datatypes.SeqInfo.fromRawObject([keys[i],seqs[keys[i]][0],seqs[keys[i]][1]]));existingSeqNames[keys[i]]=true}}else for(var i=0;i<seqs.length;++i)if(!(seqs[i][0]in existingSeqNames)){result.push(epiviz.datatypes.SeqInfo.fromRawObject(seqs[i]));existingSeqNames[seqs[i][0]]=true}if(++nResponses<self._dataProviderFactory.size())return;
callback(result.sort(epiviz.datatypes.SeqInfo.compare))},function(jqXHR,textStatus,errorThrown){failCallback(jqXHR,textStatus,errorThrown)})})};
epiviz.data.DataManager.prototype.updateChartSettings=function(values){var self=this;this._dataProviderFactory.foreach(function(provider){if(provider.id().includes("websocket-")){var colors=null;if(values.colorMap!=null)colors=values.colorMap._colors;provider.updateChartSettings(epiviz.data.Request.createRequest({action:epiviz.data.Request.Action.SET_CHART_SETTINGS,settings:values.settings,colorMap:colors,chartId:values.chartId}),function(){})}})};
epiviz.data.DataManager.prototype.getMeasurements=function(callback,failCallback){var self=this;var result=new epiviz.measurements.MeasurementSet;var nResponses=0;this._dataProviderFactory.foreach(function(provider){provider.getData(epiviz.data.Request.getMeasurements(provider.id()),function(response){var jsondata=response.data();if(jsondata){var n=jsondata["id"]?jsondata["id"].length||0:0;for(var i=0;i<n;++i)result.add(new epiviz.measurements.Measurement(jsondata["id"][i],jsondata["name"][i],$.isArray(jsondata["type"])?
jsondata["type"][i]:jsondata["type"],$.isArray(jsondata["datasourceId"])?jsondata["datasourceId"][i]:jsondata["datasourceId"],$.isArray(jsondata["datasourceGroup"])?jsondata["datasourceGroup"][i]:jsondata["datasourceGroup"],provider.id(),null,$.isArray(jsondata["defaultChartType"])?jsondata["defaultChartType"][i]:jsondata["defaultChartType"],jsondata["annotation"][i],$.isArray(jsondata["minValue"])?jsondata["minValue"][i]:jsondata["minValue"],$.isArray(jsondata["maxValue"])?jsondata["maxValue"][i]:
jsondata["maxValue"],eval(jsondata["metadata"][i])))}if(++nResponses<self._dataProviderFactory.size())return;callback(result)},function(jqXHR,textStatus,errorThrown){failCallback(jqXHR,textStatus,errorThrown)})})};
epiviz.data.DataManager.prototype.getData=function(range,chartMeasurementsMap,dataReadyCallback,failCallback){if(this._config.useCache&&!(range==null||range.seqName()=="all"||range.seqName()==null))this._cache.getData(range,chartMeasurementsMap,dataReadyCallback,failCallback);else this._getDataNoCache(range,chartMeasurementsMap,dataReadyCallback,failCallback)};
epiviz.data.DataManager.prototype._getDataNoCache=function(range,chartMeasurementsMap,dataReadyCallback,failCallback){var self=this;var msByDp={};for(var chartId in chartMeasurementsMap){if(!chartMeasurementsMap.hasOwnProperty(chartId))continue;var chartMsByDp=chartMeasurementsMap[chartId].split(function(m){return m.dataprovider()});for(var dp in chartMsByDp){if(!chartMsByDp.hasOwnProperty(dp))continue;var dpMs=msByDp[dp];if(dpMs==undefined)msByDp[dp]=chartMsByDp[dp];else dpMs.addAll(chartMsByDp[dp])}}var allData=
{};epiviz.utils.forEach(msByDp,function(dpMs,dataprovider){var msByDs=dpMs.split(function(m){return m.datasource().id()});var request=epiviz.data.Request.getCombined(msByDs,range);var requestStack=self._combinedRequestsStacks[dataprovider];if(requestStack==undefined){requestStack=new epiviz.data.RequestStack;self._combinedRequestsStacks[dataprovider]=requestStack}requestStack.pushRequest(request,function(data){var dataByDs={};epiviz.utils.forEach(msByDs,function(dsMs,datasourceId){var datasource=
dsMs.first().datasource();var dsData=data;var sumExp=new epiviz.datatypes.PartialSummarizedExperiment;var globalStartIndex=dsData.rows.globalStartIndex;var newRange=range;if(range==null||range.seqName()=="all"||range.seqName()==null)newRange=new epiviz.datatypes.GenomicRange("all",dsData.rows.values.start[0],dsData.rows.values.start.length);if(isNaN(newRange._start))newRange._start=globalStartIndex;if(isNaN(newRange._width))newRange._width=dsData.rows.end[dsData.rows.end.length-1]-range._start;var rowData=
new epiviz.datatypes.GenomicRangeArray(datasource,newRange,globalStartIndex,dsData.rows.values,dsData.rows.useOffset);sumExp.addRowData(rowData);dsMs.foreach(function(m){var valueData=new epiviz.datatypes.FeatureValueArray(m,newRange,globalStartIndex,dsData.values.values[m.id()]);sumExp.addValues(valueData)});dataByDs[datasourceId]=sumExp});allData[dataprovider]=dataByDs;self._serveAvailableData(range,chartMeasurementsMap,dataReadyCallback,allData)});var dataProvider=self._dataProviderFactory.get(dataprovider)||
self._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);dataProvider.getData(request,function(response){requestStack.serveData(response)},function(jqXHR,textStatus,errorThrown){failCallback(jqXHR,textStatus,errorThrown)})})};
epiviz.data.DataManager.prototype._serveAvailableData=function(range,chartMeasurementsMap,dataReadyCallback,data){var resolvedCharts=[];epiviz.utils.forEach(chartMeasurementsMap,function(ms,chartId){var allMsDataFetched=true;var msDataMap=new epiviz.measurements.MeasurementHashtable;ms.foreach(function(m){if(!(m.dataprovider()in data)){allMsDataFetched=false;return true}var msData=new epiviz.datatypes.MeasurementGenomicDataWrapper(m,data[m.dataprovider()][m.datasource().id()]);msDataMap.put(m,msData)});
if(allMsDataFetched){var genomicData=new epiviz.datatypes.MapGenomicData(msDataMap);dataReadyCallback(chartId,genomicData);resolvedCharts.push(chartId)}});resolvedCharts.forEach(function(chartId){delete chartMeasurementsMap[chartId]})};
epiviz.data.DataManager.prototype.getPCA=function(range,chartMeasurementsMap,dataReadyCallback){var self=this;var msByDp={};for(var chartId in chartMeasurementsMap){if(!chartMeasurementsMap.hasOwnProperty(chartId))continue;var chartMsByDp=chartMeasurementsMap[chartId].split(function(m){return m.dataprovider()});for(var dp in chartMsByDp){if(!chartMsByDp.hasOwnProperty(dp))continue;var dpMs=msByDp[dp];if(dpMs==undefined)msByDp[dp]=chartMsByDp[dp];else dpMs.addAll(chartMsByDp[dp])}}var allData={};epiviz.utils.forEach(msByDp,
function(dpMs,dataprovider){var msByDs=dpMs.split(function(m){return m.datasource().id()});var request=epiviz.data.Request.getPCA(msByDs,range);var msName=Object.keys(msByDs)[0];var dataProvider=self._dataProviderFactory.get(dataprovider)||self._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);dataProvider.getData(request,function(response){var resp=response.data();if(response.data().dataprovidertype=="websocket")resp=resp[msName];dataReadyCallback(chartId,resp)})})};
epiviz.data.DataManager.prototype.getDiversity=function(range,chartMeasurementsMap,dataReadyCallback){var self=this;var msByDp={};for(var chartId in chartMeasurementsMap){if(!chartMeasurementsMap.hasOwnProperty(chartId))continue;var chartMsByDp=chartMeasurementsMap[chartId].split(function(m){return m.dataprovider()});for(var dp in chartMsByDp){if(!chartMsByDp.hasOwnProperty(dp))continue;var dpMs=msByDp[dp];if(dpMs==undefined)msByDp[dp]=chartMsByDp[dp];else dpMs.addAll(chartMsByDp[dp])}}var allData=
{};epiviz.utils.forEach(msByDp,function(dpMs,dataprovider){var msByDs=dpMs.split(function(m){return m.datasource().id()});var request=epiviz.data.Request.getDiversity(msByDs,range);var msName=Object.keys(msByDs)[0];var dataProvider=self._dataProviderFactory.get(dataprovider)||self._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);dataProvider.getData(request,function(response){var resp=response.data();if(response.data().dataprovidertype=="websocket")resp=resp[msName];dataReadyCallback(chartId,
resp)})})};
epiviz.data.DataManager.prototype.getHierarchy=function(chartVisConfigSelectionMap,dataReadyCallback){for(var chartId in chartVisConfigSelectionMap){if(!chartVisConfigSelectionMap.hasOwnProperty(chartId))continue;var visConfigSelection=chartVisConfigSelectionMap[chartId]}var dataprovider=visConfigSelection.dataprovider;if(!dataprovider)visConfigSelection.measurements.foreach(function(m){if(m.dataprovider()){dataprovider=m.dataprovider();return true}return false});var datasourceGroup=visConfigSelection.datasourceGroup;if(!datasourceGroup)visConfigSelection.measurements.foreach(function(m){if(m.datasourceGroup()){datasourceGroup=
m.datasourceGroup();return true}return false});var provider=this._dataProviderFactory.get(dataprovider)||this._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);provider.getData(epiviz.data.Request.getHierarchy(datasourceGroup,visConfigSelection.customData),function(response){dataReadyCallback(chartId,response.data())})};
epiviz.data.DataManager.prototype.propagateHierarchyChanges=function(chartVisConfigSelectionMap,dataReadyCallback){for(var chartId in chartVisConfigSelectionMap){if(!chartVisConfigSelectionMap.hasOwnProperty(chartId))continue;var visConfigSelection=chartVisConfigSelectionMap[chartId];var dataprovider=visConfigSelection.dataprovider;if(!dataprovider)visConfigSelection.measurements.foreach(function(m){if(m.dataprovider()){dataprovider=m.dataprovider();return true}return false});var provider=this._dataProviderFactory.get(dataprovider)||
this._dataProviderFactory.get(epiviz.data.EmptyResponseDataProvider.DEFAULT_ID);(function(chartId,provider,visConfigSelection){provider.getData(epiviz.data.Request.propagateHierarchyChanges(visConfigSelection.datasourceGroup,visConfigSelection.customData.selection,visConfigSelection.customData.order,visConfigSelection.customData.selectedLevels),function(response){setTimeout(function(){provider.onRequestClearDatasourceGroupCache().notify({datasourceGroup:visConfigSelection.datasourceGroup,result:new epiviz.events.EventResult});
provider.onRequestRedraw().notify({result:new epiviz.events.EventResult});dataReadyCallback(chartId,response.data())},0)})})(chartId,provider,visConfigSelection)}};
epiviz.data.DataManager.prototype.getWorkspaces=function(callback,filter,requestWorkspaceId){var workspaceProvider=this._dataProviderFactory.workspacesDataProvider();if(!workspaceProvider)throw Error("Invalid data provider for workspaces (see Config.workspaceDataProvider)");workspaceProvider.getData(epiviz.data.Request.getWorkspaces(filter,requestWorkspaceId),function(response){var wsRows=response.data();var workspaces=[];if(!wsRows||!wsRows.length){callback(workspaces);return}for(var i=0;i<wsRows.length;++i)workspaces.push({id:wsRows[i].id,
name:wsRows[i].name,content:JSON.parse(wsRows[i].content)});callback(workspaces)})};epiviz.data.DataManager.prototype.saveWorkspace=function(workspace,config,callback){var workspaceProvider=this._dataProviderFactory.workspacesDataProvider();if(!workspaceProvider)throw Error("Invalid data provider for workspaces (see Config.workspaceDataProvider)");workspaceProvider.getData(epiviz.data.Request.saveWorkspace(workspace,config),function(response){var workspaceId=response.data();callback(workspaceId)})};
epiviz.data.DataManager.prototype.deleteWorkspace=function(workspace){var workspaceProvider=this._dataProviderFactory.workspacesDataProvider();if(!workspaceProvider)throw Error("Invalid data provider for workspaces (see Config.workspaceDataProvider)");workspaceProvider.getData(epiviz.data.Request.deleteWorkspace(workspace),function(response){var success=response.data().success})};
epiviz.data.DataManager.prototype.search=function(callback,query){var self=this;var remainingResponses=this._dataProviderFactory.size();var results=[];this._dataProviderFactory.foreach(function(provider){provider.getData(epiviz.data.Request.search(query,self._config.maxSearchResults),function(response){var providerResults=response.data();if(providerResults)epiviz.utils.arrayAppend(results,providerResults);--remainingResponses;if(!remainingResponses)callback(results)})})};
epiviz.data.DataManager.prototype.flushCache=function(){this._cache.flush();this._flushCache.notify()};epiviz.data.DataManager.prototype.clearDatasourceGroupCache=function(datasourceGroup){this._cache.clearDatasourceGroupCache(datasourceGroup);this._clearDatasourceGroupCache.notify({datasourceGroup:datasourceGroup})};epiviz.data.DataManager.prototype._registerProviderAddMeasurements=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestAddMeasurements().addListener(new epiviz.events.EventListener(function(e){self._requestAddMeasurements.notify(e)}))})};
epiviz.data.DataManager.prototype._registerProviderRemoveMeasurements=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestRemoveMeasurements().addListener(new epiviz.events.EventListener(function(e){self._requestRemoveMeasurements.notify(e)}))})};epiviz.data.DataManager.prototype._registerProviderLoadMeasurements=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestLoadMeasurements().addListener(new epiviz.events.EventListener(function(e){self._requestLoadMeasurements.notify(e)}))})};
epiviz.data.DataManager.prototype._registerProviderAddChart=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestAddChart().addListener(new epiviz.events.EventListener(function(e){self._requestAddChart.notify(e)}))})};epiviz.data.DataManager.prototype._registerProviderRemoveChart=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestRemoveChart().addListener(new epiviz.events.EventListener(function(e){self._requestRemoveChart.notify(e)}))})};
epiviz.data.DataManager.prototype._registerProviderPrintWorkspace=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestPrintWorkspace().addListener(new epiviz.events.EventListener(function(e){self._requestPrintWorkspace.notify(e)}))})};epiviz.data.DataManager.prototype._registerProviderLoadWorkspace=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestLoadWorkspace().addListener(new epiviz.events.EventListener(function(e){self._requestLoadWorkspace.notify(e)}))})};
epiviz.data.DataManager.prototype._registerProviderAddSeqInfos=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestAddSeqInfos().addListener(new epiviz.events.EventListener(function(e){var seqInfos=[];for(var i=0;i<e.seqInfos.length;++i)seqInfos.push(epiviz.datatypes.SeqInfo.fromRawObject(e.seqInfos[i]));self._requestAddSeqInfos.notify({seqInfos:seqInfos,result:e.result})}))})};
epiviz.data.DataManager.prototype._registerProviderRemoveSeqNames=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestRemoveSeqNames().addListener(new epiviz.events.EventListener(function(e){self._requestRemoveSeqNames.notify(e)}))})};epiviz.data.DataManager.prototype._registerProviderNavigate=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestNavigate().addListener(new epiviz.events.EventListener(function(e){self._requestNavigate.notify(e)}))})};
epiviz.data.DataManager.prototype._registerProviderRedraw=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestRedraw().addListener(new epiviz.events.EventListener(function(e){self._requestRedraw.notify(e)}))})};
epiviz.data.DataManager.prototype._registerProviderClearDatasourceGroupCache=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestClearDatasourceGroupCache().addListener(new epiviz.events.EventListener(function(e){self.clearDatasourceGroupCache(e.datasourceGroup);e.result.success=true}))})};
epiviz.data.DataManager.prototype._registerProviderFlushCache=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestFlushCache().addListener(new epiviz.events.EventListener(function(e){self.flushCache();e.result.success=true}))})};epiviz.data.DataManager.prototype._registerProviderGetCurrentLocation=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestCurrentLocation().addListener(new epiviz.events.EventListener(function(e){self._requestCurrentLocation.notify(e)}))})};
epiviz.data.DataManager.prototype._registerProviderSetChartSettings=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestSetChartSettings().addListener(new epiviz.events.EventListener(function(e){self._requestSetChartSettings.notify(e)}))})};epiviz.data.DataManager.prototype._registerProviderGetChartSettings=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestGetChartSettings().addListener(new epiviz.events.EventListener(function(e){self._requestGetChartSettings.notify(e)}))})};
epiviz.data.DataManager.prototype._registerProviderGetAvailableCharts=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestGetChartSettings().addListener(new epiviz.events.EventListener(function(e){self._requestGetAvailableCharts.notify(e)}))})};epiviz.data.DataManager.prototype._registerProviderUiStatus=function(){var self=this;this._dataProviderFactory.foreach(function(provider){provider.onRequestUiStatus().addListener(new epiviz.events.EventListener(function(e){self._requestUiStatus.notify(e)}))})};goog.provide("epiviz.datatypes.ItemFilteredGenomicData");goog.require("epiviz.datatypes.MapGenomicData");goog.require("epiviz.utils");goog.require("epiviz.deferred.Deferred");goog.require("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.datatypes.MeasurementGenomicDataArrayWrapper");epiviz.datatypes.ItemFilteredGenomicData=function(data,filter){epiviz.datatypes.MapGenomicData.call(this);this._data=data;this._filter=filter;this._deferredInit=null;this._initialize()};
epiviz.datatypes.ItemFilteredGenomicData.prototype=epiviz.utils.mapCopy(epiviz.datatypes.MapGenomicData.prototype);epiviz.datatypes.ItemFilteredGenomicData.constructor=epiviz.datatypes.ItemFilteredGenomicData;
epiviz.datatypes.ItemFilteredGenomicData.prototype._initialize=function(){if(this._deferredInit)return this._deferredInit;this._deferredInit=new epiviz.deferred.Deferred;var self=this;var filter=this._filter;var data=this._data;data.ready(function(){filter.preMark()(data).done(function(preFilterVars){var map=new epiviz.measurements.MeasurementHashtable;var measurements=data.measurements();epiviz.utils.deferredFor(measurements.length,function(j){var mDeferredIteration=new epiviz.deferred.Deferred;
var m=measurements[j];var mItems=[];var mItemsByGlobalIndex={};epiviz.utils.deferredFor(data.size(m),function(i){var dataDeferredIteration=new epiviz.deferred.Deferred;var item=data.get(m,i);filter.mark()(item,data,preFilterVars).done(function(markResult){if(markResult){mItems.push(item);mItemsByGlobalIndex[item.globalIndex]=item}dataDeferredIteration.resolve()});return dataDeferredIteration}).done(function(){map.put(m,new epiviz.datatypes.MeasurementGenomicDataArrayWrapper(m,mItems,mItemsByGlobalIndex));
mDeferredIteration.resolve()});return mDeferredIteration}).done(function(){self._setMap(map);self._deferredInit.resolve()})})});return this._deferredInit};goog.provide("epiviz.datatypes.RowItemImpl");epiviz.datatypes.RowItemImpl=function(id,seqName,start,end,globalIndex,strand,rowMetadata){this._id=id;this._seqName=seqName;this._start=start;this._end=end;this._globalIndex=globalIndex;this._strand=strand;this._rowMetadata=rowMetadata};epiviz.datatypes.RowItemImpl.prototype.id=function(){return this._id};epiviz.datatypes.RowItemImpl.prototype.seqName=function(){return this._seqName};epiviz.datatypes.RowItemImpl.prototype.start=function(){return this._start};
epiviz.datatypes.RowItemImpl.prototype.end=function(){return this._end};epiviz.datatypes.RowItemImpl.prototype.globalIndex=function(){return this._globalIndex};epiviz.datatypes.RowItemImpl.prototype.strand=function(){return this._strand};epiviz.datatypes.RowItemImpl.prototype.metadata=function(column){var ret=this._rowMetadata[column];if(ret==undefined)return null;return ret};epiviz.datatypes.RowItemImpl.prototype.rowMetadata=function(){return this._rowMetadata};goog.provide("epiviz.datatypes.MeasurementAggregatedGenomicData");goog.require("epiviz.datatypes.MapGenomicData");goog.require("epiviz.deferred.Deferred");goog.require("epiviz.measurements.Measurement");goog.require("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.utils");goog.require("epiviz.datatypes.MeasurementGenomicDataArrayWrapper");goog.require("epiviz.datatypes.GenomicData.ValueItem");goog.require("epiviz.datatypes.RowItemImpl");
epiviz.datatypes.MeasurementAggregatedGenomicData=function(data,groupByMarker,aggregator){epiviz.datatypes.MapGenomicData.call(this);this._data=data;this._groupByMarker=groupByMarker;this._aggregator=aggregator;this._deferredInit=null;this._initialize()};epiviz.datatypes.MeasurementAggregatedGenomicData.prototype=epiviz.utils.mapCopy(epiviz.datatypes.MapGenomicData.prototype);epiviz.datatypes.MeasurementAggregatedGenomicData.constructor=epiviz.datatypes.MeasurementAggregatedGenomicData;
epiviz.datatypes.MeasurementAggregatedGenomicData.prototype._initialize=function(){if(this._deferredInit)return this._deferredInit;this._deferredInit=new epiviz.deferred.Deferred;var self=this;var groupBy=this._groupByMarker;var data=this._data;data.ready(function(){groupBy.preMark()(data).done(function(preGroupVars){var map=new epiviz.measurements.MeasurementHashtable;var grouped={};var measurements=data.measurements();epiviz.utils.deferredFor(measurements.length,function(j){var mDeferredIteration=
new epiviz.deferred.Deferred;var m=measurements[j];groupBy.mark()(m,data,preGroupVars).done(function(groupLabel){if(!(groupLabel in grouped))grouped[groupLabel]=[];grouped[groupLabel].push(m);mDeferredIteration.resolve()});return mDeferredIteration}).done(function(){var labelMeasurements={};var label;var ms;for(label in grouped){if(!grouped.hasOwnProperty(label))continue;ms=grouped[label];var id=label+"-group",name=label,type=ms[0].type(),datasourceId=ms[0].datasourceId(),datasourceGroup=ms[0].datasourceGroup(),
dataprovider=ms[0].dataprovider(),defaultChartType=ms[0].defaultChartType(),annotation=epiviz.utils.mapCopy(ms[0].annotation()),minValue=ms[0].minValue(),maxValue=ms[0].maxValue(),metadata=ms[0].metadata();var metadataColsMap={};metadata.forEach(function(c){metadataColsMap[c]=c});grouped[label].forEach(function(m){if(datasourceId!=m.datasourceId())datasourceId="*";if(datasourceGroup!=m.datasourceGroup())datasourceGroup="*";if(dataprovider!=m.dataprovider())dataprovider="*";if(defaultChartType!=m.defaultChartType())defaultChartType=
"*";var mAnno=m.annotation();if(annotation!=mAnno)if(annotation==undefined)annotation=epiviz.utils.mapCopy(mAnno);else if(mAnno!=undefined)for(var k in mAnno){if(!mAnno.hasOwnProperty(k))continue;if(!(k in annotation)){annotation[k]=mAnno[k];continue}if(annotation[k]!=mAnno[k])annotation[k]="*"}minValue=Math.min(minValue,m.minValue());maxValue=Math.max(maxValue,m.maxValue());m.metadata().forEach(function(c){if(!(c in metadataColsMap)){metadataColsMap[c]=c;metadata.push(c)}})});labelMeasurements[label]=
new epiviz.measurements.Measurement(id,name,type,datasourceId,datasourceGroup,dataprovider,null,defaultChartType,annotation,minValue,maxValue,metadata)}for(label in grouped){if(!grouped.hasOwnProperty(label))continue;var m=labelMeasurements[label];var items=[];var itemsByGlobalIndex={};ms=grouped[label];var globalStartIndex=Math.min.apply(undefined,ms.map(function(m){return data.globalStartIndex(m)}));var globalEndIndex=Math.max.apply(undefined,ms.map(function(m){return data.globalEndIndex(m)}));
for(var globalIndex=globalStartIndex;globalIndex<globalEndIndex;++globalIndex){var indexItems=ms.map(function(m){return data.getByGlobalIndex(m,globalIndex)}).filter(function(item){return item});if(!indexItems.length)continue;var values=indexItems.map(function(item){return item.value});var aggregation=self._aggregator.aggregate(label,ms,values);var row=indexItems[0].rowItem;var aggRow=new epiviz.datatypes.RowItemImpl(row.id(),row.seqName(),row.start(),row.end(),row.globalIndex(),row.strand(),row.rowMetadata()||
{});var item=new epiviz.datatypes.GenomicData.ValueItem(globalIndex,aggRow,aggregation.value,m,{errMinus:aggregation.errMinus,errPlus:aggregation.errPlus});items.push(item);itemsByGlobalIndex[globalIndex]=item}var series=new epiviz.datatypes.MeasurementGenomicDataArrayWrapper(m,items,itemsByGlobalIndex);map.put(m,series)}self._setMap(map);self._deferredInit.resolve()})})});return this._deferredInit};goog.provide("epiviz.datatypes.MeasurementOrderedGenomicData");goog.require("epiviz.datatypes.MapGenomicData");goog.require("epiviz.deferred.Deferred");goog.require("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.utils");epiviz.datatypes.MeasurementOrderedGenomicData=function(data,order){epiviz.datatypes.MapGenomicData.call(this);this._data=data;this._order=order;this._deferredInit=null;this._initialize()};epiviz.datatypes.MeasurementOrderedGenomicData.prototype=epiviz.utils.mapCopy(epiviz.datatypes.MapGenomicData.prototype);
epiviz.datatypes.MeasurementOrderedGenomicData.constructor=epiviz.datatypes.MeasurementOrderedGenomicData;
epiviz.datatypes.MeasurementOrderedGenomicData.prototype._initialize=function(){if(this._deferredInit)return this._deferredInit;this._deferredInit=new epiviz.deferred.Deferred;var self=this;var data=this._data;var order=this._order;data.ready(function(){order.preMark()(data).done(function(preOrderVars){var map=new epiviz.measurements.MeasurementHashtable;var measurements=data.measurements();var measurementLabels=new epiviz.measurements.MeasurementHashtable;epiviz.utils.deferredFor(measurements.length,
function(j){var mDeferredIteration=new epiviz.deferred.Deferred;var m=measurements[j];order.mark()(m,data,preOrderVars).done(function(label){measurementLabels.put(m,label);mDeferredIteration.resolve()});return mDeferredIteration}).done(function(){measurements.sort(function(m1,m2){var v1=measurementLabels.get(m1);var v2=measurementLabels.get(m2);return v1==v2?0:v1<v2?-1:1});measurements.forEach(function(m){map.put(m,data.getSeries(m))});self._setMap(map);self._deferredInit.resolve()})})});return this._deferredInit};goog.provide("epiviz.deferred.Promise");goog.require("epiviz.deferred.Deferred");epiviz.deferred.Promise=function(promise){this._promise=promise};epiviz.deferred.Promise.prototype.then=function(doneFilter,failFilter,progressFilter){return new epiviz.deferred.Promise(this._promise.then(doneFilter,failFilter,progressFilter))};epiviz.deferred.Promise.prototype.done=function(doneCallbacks,moreDoneCallbacks){return new epiviz.deferred.Deferred(this._promise.done(doneCallbacks,moreDoneCallbacks))};
epiviz.deferred.Promise.prototype.fail=function(failCallbacks,moreFailCallbacks){return new epiviz.deferred.Deferred(this._promise.fail(failCallbacks,moreFailCallbacks))};epiviz.deferred.Promise.prototype.always=function(alwaysCallbacks,moreAlwaysCallbacks){return new epiviz.deferred.Deferred(this._promise.always(alwaysCallbacks,moreAlwaysCallbacks))};epiviz.deferred.Promise.prototype.state=function(){return this._promise.state()};goog.provide("epiviz.ui.charts.CustomSetting");epiviz.ui.charts.CustomSetting=function(id,type,defaultValue,label,possibleValues){this.id=id;this.type=type;this.defaultValue=defaultValue;this.label=label||id;this.possibleValues=possibleValues||null};epiviz.ui.charts.CustomSetting.Type={NUMBER:"number",STRING:"string",ARRAY:"array",BOOLEAN:"boolean",CATEGORICAL:"categorical",MEASUREMENTS_METADATA:"measurementsMetadata",MEASUREMENTS_ANNOTATION:"measurementsAnnotation"};
epiviz.ui.charts.CustomSetting.DEFAULT="default";goog.provide("epiviz.ui.charts.VisEventArgs");epiviz.ui.charts.VisEventArgs=function(id,args){this.id=id;this.args=args};goog.provide("epiviz.ui.charts.Axis");epiviz.ui.charts.Axis={X:"x",Y:"y"};goog.provide("epiviz.ui.charts.Margins");goog.require("epiviz.ui.charts.Axis");epiviz.ui.charts.Margins=function(top,left,bottom,right){this._top=top;this._left=left;this._bottom=bottom;this._right=right};epiviz.ui.charts.Margins.ZERO_MARGIN=new epiviz.ui.charts.Margins(0,0,0,0);epiviz.ui.charts.Margins.prototype.top=function(){return this._top};epiviz.ui.charts.Margins.prototype.left=function(){return this._left};epiviz.ui.charts.Margins.prototype.bottom=function(){return this._bottom};
epiviz.ui.charts.Margins.prototype.right=function(){return this._right};epiviz.ui.charts.Margins.prototype.sumAxis=function(axis){switch(axis){case epiviz.ui.charts.Axis.X:return this._left+this._right;case epiviz.ui.charts.Axis.Y:return this._top+this._bottom;default:throw Error("Invalid argument: "+axis);}};epiviz.ui.charts.Margins.prototype.raw=function(){return{top:this._top,left:this._left,bottom:this._bottom,right:this._right}};
epiviz.ui.charts.Margins.fromRawObject=function(o){return new epiviz.ui.charts.Margins(o.top,o.left,o.bottom,o.right)};epiviz.ui.charts.Margins.prototype.copy=function(){return new epiviz.ui.charts.Margins(this._top,this._left,this._bottom,this._right)};epiviz.ui.charts.Margins.prototype.equals=function(other){if(!other)return false;if(this==other)return true;return this._top==other._top&&this._left==other._left&&this._bottom==other._bottom&&this._right==other._right};goog.provide("epiviz.ui.charts.Visualization");goog.require("epiviz.caja");goog.require("epiviz.deferred.Deferred");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.events.Event");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.ui.charts.Margins");
epiviz.ui.charts.Visualization=function(id,container,properties){this._id=id;this._container=container;this._properties=properties;this._originalMethods={};this._hasModifiedMethods=false;this._lastModifiedMethod="draw";var self=this;if(properties.modifiedMethods){var methodsUpdated=new epiviz.deferred.Deferred;var modifiedMethods=properties.modifiedMethods;var modifiedMethodNames=Object.keys(modifiedMethods);var cajoledMethods={};var nMethodsUpdated=0;for(var m in modifiedMethods){if(!modifiedMethods.hasOwnProperty(m))continue;
if(m=="_setModifiedMethods")continue;(function(m){epiviz.caja.cajole(modifiedMethods[m],epiviz.caja.buildChartMethodContext()).done(function(method){if(!method)return;cajoledMethods[m]=method;nMethodsUpdated+=1;if(nMethodsUpdated>=modifiedMethodNames.length)methodsUpdated.resolve()})})(m)}methodsUpdated.done(function(){for(var m in cajoledMethods){if(!cajoledMethods.hasOwnProperty(m))continue;self._originalMethods[m]=self[m];self[m]=cajoledMethods[m];self._lastModifiedMethod=m}self._hasModifiedMethods=
true;self.draw()})}this._customSettingsValues={};for(var i=0;i<properties.customSettingsDefs.length;++i){var setting=properties.customSettingsDefs[i];var val=properties.customSettingsValues[setting.id];switch(setting.type){case epiviz.ui.charts.CustomSetting.Type.BOOLEAN:this._customSettingsValues[setting.id]=val===false||val?val:setting.defaultValue;break;case epiviz.ui.charts.CustomSetting.Type.NUMBER:this._customSettingsValues[setting.id]=val===0||val?val:setting.defaultValue;break;case epiviz.ui.charts.CustomSetting.Type.STRING:this._customSettingsValues[setting.id]=
val===""||val?val:setting.defaultValue;break;case epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA:var possibleValues={};properties.visConfigSelection.measurements.foreach(function(m){m.metadata().forEach(function(metadataCol){possibleValues[metadataCol]=metadataCol})});setting.possibleValues=Object.keys(possibleValues);setting.possibleValues.sort();val=val||setting.defaultValue;this._customSettingsValues[setting.id]=val in possibleValues?val:setting.possibleValues.length?setting.possibleValues[0]:
"";break;case epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION:var possibleValues={name:"name"};properties.visConfigSelection.measurements.foreach(function(m){var anno=m.annotation();if(!anno)return;Object.keys(anno).forEach(function(key){possibleValues[key]=key})});setting.possibleValues=Object.keys(possibleValues);setting.possibleValues.sort();val=val||setting.defaultValue;this._customSettingsValues[setting.id]=val in possibleValues?val:setting.possibleValues.length?setting.possibleValues[0]:
"";break;default:this._customSettingsValues[setting.id]=val||setting.defaultValue;break}}this._svgId=sprintf("%s-svg",this._id);this._svg=null;this._unalteredData=null;this._lastData=null;this._lastRange=null;this._slide=0;this._zoom=1;this._markers=properties.chartMarkers;this._markersMap={};this._markersIndices={};this._markers.forEach(function(marker,i){if(!marker)return;self._markersMap[marker.id()]=marker;self._markersIndices[marker.id()]=i});this._autoPropagateChanges=true;this._hover=new epiviz.events.Event;
this._unhover=new epiviz.events.Event;this._select=new epiviz.events.Event;this._deselect=new epiviz.events.Event;this._save=new epiviz.events.Event;this._remove=new epiviz.events.Event;this._colorsChanged=new epiviz.events.Event;this._methodsModified=new epiviz.events.Event;this._methodsReset=new epiviz.events.Event;this._markersModified=new epiviz.events.Event;this._customSettingsChanged=new epiviz.events.Event;this._sizeChanged=new epiviz.events.Event;this._marginsChanged=new epiviz.events.Event;
this._dataWaitStart=new epiviz.events.Event;this._dataWaitEnd=new epiviz.events.Event};epiviz.ui.charts.Visualization.SVG_MARGIN=20;
epiviz.ui.charts.Visualization.prototype._initialize=function(){if(this._properties.height=="100%")this._properties.height=this._container.height()-epiviz.ui.charts.Visualization.SVG_MARGIN;if(this._properties.width=="100%")this._properties.width=this._container.width()-epiviz.ui.charts.Visualization.SVG_MARGIN;var width=this.width();var height=this.height();this._container.addClass("visualization-container");this._container.append(sprintf('<svg id="%s" class="visualization" width="%s" height="%s"><style type="text/css"></style><defs></defs></svg>',
this._svgId,width,height));this._svg=d3.select(this._container.find("#"+this._svgId)[0]);var jSvg=$(this._container.find("#"+this._svgId)[0]);this._widthDif=jSvg.width()-(this._container.width()-epiviz.ui.charts.Visualization.SVG_MARGIN);this._heightDif=height-(this._container.height()-epiviz.ui.charts.Visualization.SVG_MARGIN);this._properties.width=width;this._properties.height=height;var self=this;this._container.click(function(){self._deselect.notify(new epiviz.ui.charts.VisEventArgs(self._id))})};
epiviz.ui.charts.Visualization.prototype._clearAxes=function(svg){svg=svg||this._svg;svg.selectAll(".xAxis").remove();svg.selectAll(".yAxis").remove()};
epiviz.ui.charts.Visualization.prototype._drawAxes=function(xScale,yScale,xTicks,yTicks,svg,width,height,margins,xAxisFormat,yAxisFormat,xLabels,yLabels,xLabelsBtTicks,yLabelsBtTicks){svg=svg||this._svg;margins=margins||this.margins();height=height||this.height();width=width||this.width();var axesGroup=svg.select(".axes"),xAxisGrid=axesGroup.select(".xAxis-grid"),yAxisGrid=axesGroup.select(".yAxis-grid"),xAxisLine=axesGroup.select(".xAxis-line"),yAxisLine=axesGroup.select(".yAxis-line");if(axesGroup.empty())axesGroup=
svg.append("g").attr("class","axes");if(xAxisGrid.empty())xAxisGrid=axesGroup.append("g").attr("class","xAxis xAxis-grid");if(yAxisGrid.empty())yAxisGrid=axesGroup.append("g").attr("class","yAxis yAxis-grid");if(xAxisLine.empty())xAxisLine=axesGroup.append("g").attr("class","xAxis xAxis-line");if(yAxisLine.empty())yAxisLine=axesGroup.append("g").attr("class","yAxis yAxis-line");if(xScale){xAxisGrid.attr("transform","translate("+margins.left()+", "+margins.top()+")").selectAll("line.x").data(xScale.ticks(xTicks)).enter().append("line").attr("x1",
xScale).attr("x2",xScale).attr("y1",0).attr("y2",height-margins.top()-margins.bottom()).style("stroke","#eeeeee").style("shape-rendering","crispEdges");var xAxisTickFormat=xAxisFormat||(xLabels?function(i){return xLabels[i]}:function(x){var format=d3.format("s");var rounded=Math.round(x*1E3)/1E3;return format(rounded)});var xAxis=d3.svg.axis().scale(xScale).orient("bottom").ticks(xTicks).tickFormat(xAxisTickFormat);xAxisLine.attr("transform","translate("+margins.left()+", "+(height-margins.bottom())+
")").call(xAxis);if(xLabels){var xTransform="rotate(-90)";if(xLabelsBtTicks)xTransform+="translate(0,"+(xScale(.5)-xScale(0))+")";xAxisLine.selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy","-0.5em").attr("transform",xTransform)}}if(yScale){yAxisGrid.attr("transform","translate("+margins.left()+", "+margins.top()+")").selectAll("line.y").data(yScale.ticks(yTicks-1)).enter().append("line").attr("x1",0).attr("x2",width-margins.left()-margins.right()).attr("y1",yScale).attr("y2",
yScale).style("stroke","#eeeeee").style("shape-rendering","crispEdges");var yAxisTickFormat=yLabels?function(i){return yLabels[i]}:function(y){var format=d3.format("s");var rounded=Math.round(y*1E3)/1E3;return format(rounded)};var yAxis=d3.svg.axis().ticks(yTicks-1).scale(yScale).orient("left").tickFormat(yAxisTickFormat);yAxisLine.attr("transform","translate("+margins.left()+", "+margins.top()+")").call(yAxis)}};
epiviz.ui.charts.Visualization.prototype._drawTitle=function(){var svgTitle=this._svg.selectAll(".visualization-title");var Settings=epiviz.ui.charts.Visualization.CustomSettings;var settingsVals=this.customSettingsValues();var title=settingsVals[Settings.TITLE];if(!title||title.trim()==""){if(!svgTitle.empty())svgTitle.remove();return}if(svgTitle.empty())svgTitle=this._svg.append("text").attr("class","visualization-title").attr("text-anchor","middle");svgTitle.attr("x",this.width()*.5).attr("y",
25).text(title)};epiviz.ui.charts.Visualization.prototype.resize=function(width,height){if(width)this._properties.width=width;if(height)this._properties.height=height;this.draw();this._sizeChanged.notify(new epiviz.ui.charts.VisEventArgs(this._id,{width:this._properties.width,height:this._properties.height}))};
epiviz.ui.charts.Visualization.prototype.updateSize=function(){this.resize(this._widthDif+this._container.width()-epiviz.ui.charts.Visualization.SVG_MARGIN,this._heightDif+this._container.height()-epiviz.ui.charts.Visualization.SVG_MARGIN)};
epiviz.ui.charts.Visualization.prototype.draw=function(range,data){if(range!=undefined)this._lastRange=range;if(data!=undefined){this._lastData=data;this._unalteredData=data;this._dataWaitEnd.notify(new epiviz.ui.charts.VisEventArgs(this._id))}this._svg.attr("width",this.width()).attr("height",this.height());this._drawTitle();return[]};epiviz.ui.charts.Visualization.prototype.container=function(){return this._container};epiviz.ui.charts.Visualization.prototype.id=function(){return this._id};
epiviz.ui.charts.Visualization.prototype.properties=function(){return this._properties};epiviz.ui.charts.Visualization.prototype.height=function(){return this._properties.height};epiviz.ui.charts.Visualization.prototype.width=function(){return this._properties.width};epiviz.ui.charts.Visualization.prototype.margins=function(){return this._properties.margins};epiviz.ui.charts.Visualization.prototype.colors=function(){return this._properties.colors};
epiviz.ui.charts.Visualization.prototype.setColors=function(colors){if(!colors||colors.equals(this._properties.colors))return;this._properties.colors=colors;this.draw();this._colorsChanged.notify(new epiviz.ui.charts.VisEventArgs(this._id,this._properties.colors))};epiviz.ui.charts.Visualization.prototype.colorLabels=function(){var self=this;var colors=new Array(this.measurements().size());this.measurements().foreach(function(m,i){colors[i]=m.name()});return colors};
epiviz.ui.charts.Visualization.prototype.measurements=function(){return this.properties().visConfigSelection.measurements};epiviz.ui.charts.Visualization.prototype.customSettingsValues=function(){return this._customSettingsValues};
epiviz.ui.charts.Visualization.prototype.setCustomSettingsValues=function(settingsValues){if(this._customSettingsValues==settingsValues||!settingsValues||epiviz.utils.mapEquals(this._customSettingsValues,settingsValues))return;var CustomSettings=epiviz.ui.charts.Visualization.CustomSettings;var currentTitle=this._customSettingsValues[CustomSettings.TITLE]||"";var newTitle=settingsValues[CustomSettings.TITLE]||"";var currentLen=currentTitle.trim().length;var newLen=newTitle.trim().length;if(!(currentLen*
newLen)&&currentLen+newLen){var marginDelta=epiviz.utils.sign(newLen-currentLen)*20;var top=settingsValues[CustomSettings.MARGIN_TOP]||this._properties.margins.top();var left=settingsValues[CustomSettings.MARGIN_LEFT]||this._properties.margins.left();var right=settingsValues[CustomSettings.MARGIN_RIGHT]||this._properties.margins.right();var bottom=settingsValues[CustomSettings.MARGIN_BOTTOM]||this._properties.margins.bottom();settingsValues[CustomSettings.MARGIN_TOP]=top+marginDelta;settingsValues[CustomSettings.MARGIN_LEFT]=
left;settingsValues[CustomSettings.MARGIN_RIGHT]=right;settingsValues[CustomSettings.MARGIN_BOTTOM]=bottom}var currentMeasurementAggregator=this._customSettingsValues[epiviz.ui.charts.ChartType.CustomSettings.MEASUREMENT_GROUPS_AGGREGATOR];var newMeasurementAggregator=settingsValues[epiviz.ui.charts.ChartType.CustomSettings.MEASUREMENT_GROUPS_AGGREGATOR];this._customSettingsValues=settingsValues;if(CustomSettings.MARGIN_TOP in settingsValues&&CustomSettings.MARGIN_BOTTOM in settingsValues&&CustomSettings.MARGIN_LEFT in
settingsValues&&CustomSettings.MARGIN_RIGHT in settingsValues){this._properties.margins=new epiviz.ui.charts.Margins(settingsValues[CustomSettings.MARGIN_TOP],settingsValues[CustomSettings.MARGIN_LEFT],settingsValues[CustomSettings.MARGIN_BOTTOM],settingsValues[CustomSettings.MARGIN_RIGHT]);this._marginsChanged.notify(new epiviz.ui.charts.VisEventArgs(this._id,this._properties.margins))}if(currentMeasurementAggregator!=newMeasurementAggregator){var self=this;this.transformData(this._lastRange,this._unalteredData).done(function(){self.draw()})}else this.draw();
this._customSettingsChanged.notify(new epiviz.ui.charts.VisEventArgs(this._id,settingsValues))};
epiviz.ui.charts.Visualization.prototype.setModifiedMethods=function(modifiedMethods){var self=this;var methodsModified=false;if(!modifiedMethods)return;var modifiedMethodNames=Object.keys(modifiedMethods);var methodsUpdated=new epiviz.deferred.Deferred;var nMethodsUpdated=0;var cajoledMethods={};for(var m in modifiedMethods){if(!modifiedMethods.hasOwnProperty(m))continue;if(m=="_setModifiedMethods")continue;if(this[m].toString()==modifiedMethods[m])continue;if(!(m in this._originalMethods))this._originalMethods[m]=
this[m];(function(m){epiviz.caja.cajole(modifiedMethods[m],epiviz.caja.buildChartMethodContext()).done(function(method){if(method){cajoledMethods[m]=method;methodsModified=true;nMethodsUpdated+=1;if(nMethodsUpdated>=modifiedMethodNames.length)methodsUpdated.resolve()}})})(m)}methodsUpdated.done(function(){if(methodsModified){for(var m in cajoledMethods){if(!cajoledMethods.hasOwnProperty(m))continue;self[m]=cajoledMethods[m];self._lastModifiedMethod=m}self._hasModifiedMethods=true;self.draw();self._methodsModified.notify(new epiviz.ui.charts.VisEventArgs(self._id,
modifiedMethods))}})};epiviz.ui.charts.Visualization.prototype.hasModifiedMethods=function(){return this._hasModifiedMethods};epiviz.ui.charts.Visualization.prototype.lastModifiedMethod=function(){return this._lastModifiedMethod};
epiviz.ui.charts.Visualization.prototype.resetModifiedMethods=function(){if(!this._hasModifiedMethods)return;for(var m in this._originalMethods){if(!this._originalMethods.hasOwnProperty(m))continue;this[m]=this._originalMethods[m]}this._hasModifiedMethods=false;this.draw();this._methodsReset.notify(new epiviz.ui.charts.VisEventArgs(this._id))};
epiviz.ui.charts.Visualization.prototype.putMarker=function(marker){if(!marker)return;var i;if(marker.id()in this._markersMap){i=this._markersIndices[marker.id()];var oldMarker=this._markers[i];if(oldMarker==marker||oldMarker.type()==marker.type()&&oldMarker.preMarkStr()==marker.preMarkStr()&&oldMarker.markStr()==marker.markStr())return;this._markers[i]=marker;this._markersMap[marker.id()]=marker}else{i=this._markers.length;this._markers.push(marker);this._markersIndices[marker.id()]=i;this._markersMap[marker.id()]=
marker}var self=this;this.transformData(this._lastRange,this._unalteredData).done(function(){self.draw()});this._markersModified.notify(new epiviz.ui.charts.VisEventArgs(this._id,this._markers))};
epiviz.ui.charts.Visualization.prototype.removeMarker=function(markerId){if(!(markerId in this._markersMap))return;var i=this._markersIndices[markerId];this._markers[i]=null;delete this._markersMap[markerId];delete this._markersIndices[markerId];var self=this;this.transformData(this._lastRange,this._unalteredData).done(function(){self.draw()});this._markersModified.notify(new epiviz.ui.charts.VisEventArgs(this._id,this._markers))};
epiviz.ui.charts.Visualization.prototype.getMarker=function(markerId){if(!markerId||!(markerId in this._markersMap))return null;return this._markersMap[markerId]};epiviz.ui.charts.Visualization.prototype.displayType=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.Visualization.prototype.autoPropagateChanges=function(){return this._autoPropagateChanges};epiviz.ui.charts.Visualization.prototype.setAutoPropagateChanges=function(val){this._autoPropagateChanges=val};
epiviz.ui.charts.Visualization.prototype.transformData=function(range,data){var lastRange=this._lastRange;if(range!=undefined)this._lastRange=range;if(data!=undefined){this._lastData=data;this._unalteredData=data}if(lastRange&&range&&lastRange.overlapsWith(range)&&lastRange.width()==range.width())this._slide=range.start()-lastRange.start();if(lastRange&&range&&lastRange.overlapsWith(range)&&lastRange.width()!=range.width())this._zoom=lastRange.width()/range.width();var deferred=new epiviz.deferred.Deferred;
deferred.resolve();return deferred};epiviz.ui.charts.Visualization.prototype.onHover=function(){return this._hover};epiviz.ui.charts.Visualization.prototype.onUnhover=function(){return this._unhover};epiviz.ui.charts.Visualization.prototype.onSelect=function(){return this._select};epiviz.ui.charts.Visualization.prototype.onDeselect=function(){return this._deselect};
epiviz.ui.charts.Visualization.prototype.doHover=function(selectedObject){var itemsGroup=this._container.find(".items");var unselectedHoveredGroup=itemsGroup.find("> .hovered");var selectedGroup=itemsGroup.find("> .selected");var selectedHoveredGroup=selectedGroup.find("> .hovered");var filter=function(){if(Array.isArray(selectedObject)){var match=false;for(var sIndex=0;sIndex<selectedObject.length;sIndex++){var sel=selectedObject[sIndex];if(sel.overlapsWith(d3.select(this).data()[0]))match=true}return match}else return selectedObject.overlapsWith(d3.select(this).data()[0])};
var selectItems=itemsGroup.find("> .item").filter(filter);unselectedHoveredGroup.append(selectItems);selectItems=selectedGroup.find("> .item").filter(filter);selectedHoveredGroup.append(selectItems)};
epiviz.ui.charts.Visualization.prototype.doUnhover=function(){var itemsGroup=this._container.find(".items");var unselectedHoveredGroup=itemsGroup.find("> .hovered");var selectedGroup=itemsGroup.find("> .selected");var selectedHoveredGroup=selectedGroup.find("> .hovered");itemsGroup.prepend(unselectedHoveredGroup.children());selectedGroup.prepend(selectedHoveredGroup.children())};
epiviz.ui.charts.Visualization.prototype.doSelect=function(selectedObject){var itemsGroup=this._container.find(".items");var unselectedHoveredGroup=itemsGroup.find("> .hovered");var selectedGroup=itemsGroup.find("> .selected");var selectedHoveredGroup=selectedGroup.find("> .hovered");var filter=function(){return selectedObject.overlapsWith(d3.select(this).data()[0])};var selectItems=itemsGroup.find("> .item").filter(filter);selectedGroup.append(selectItems);selectItems=unselectedHoveredGroup.find("> .item").filter(filter);
selectedHoveredGroup.append(selectItems)};epiviz.ui.charts.Visualization.prototype.doDeselect=function(){var itemsGroup=this._container.find(".items");var unselectedHoveredGroup=itemsGroup.find("> .hovered");var selectedGroup=itemsGroup.find("> .selected");var selectedHoveredGroup=selectedGroup.find("> .hovered");itemsGroup.prepend(selectedGroup.find("> .item"));unselectedHoveredGroup.prepend(selectedHoveredGroup.children())};epiviz.ui.charts.Visualization.prototype.onSave=function(){return this._save};
epiviz.ui.charts.Visualization.prototype.onRemove=function(){return this._remove};epiviz.ui.charts.Visualization.prototype.onColorsChanged=function(){return this._colorsChanged};epiviz.ui.charts.Visualization.prototype.onMethodsModified=function(){return this._methodsModified};epiviz.ui.charts.Visualization.prototype.onMethodsReset=function(){return this._methodsReset};epiviz.ui.charts.Visualization.prototype.onMarkersModified=function(){return this._markersModified};
epiviz.ui.charts.Visualization.prototype.onCustomSettingsChanged=function(){return this._customSettingsChanged};epiviz.ui.charts.Visualization.prototype.onSizeChanged=function(){return this._sizeChanged};epiviz.ui.charts.Visualization.prototype.onMarginsChanged=function(){return this._marginsChanged};epiviz.ui.charts.Visualization.prototype.onDataWaitStart=function(){return this._dataWaitStart};epiviz.ui.charts.Visualization.prototype.onDataWaitEnd=function(){return this._dataWaitEnd};
epiviz.ui.charts.Visualization.CustomSettings={TITLE:"title",MARGIN_LEFT:"marginLeft",MARGIN_RIGHT:"marginRight",MARGIN_TOP:"marginTop",MARGIN_BOTTOM:"marginBottom",X_MIN:"xMin",X_MAX:"xMax",Y_MIN:"yMin",Y_MAX:"yMax",COL_LABEL:"colLabel",ROW_LABEL:"rowLabel"};goog.provide("epiviz.ui.charts.VisualizationType");goog.require("epiviz.ui.charts.Visualization");goog.require("epiviz.Config");goog.require("epiviz.utils");goog.require("epiviz.ui.charts.CustomSetting");
epiviz.ui.charts.VisualizationType=function(config){var VisualizationPropertySettings=epiviz.Config.VisualizationPropertySettings;this._config=config;this._defaultSettings=epiviz.utils.mapCombine(epiviz.utils.mapCombine(config.chartSettings[this.typeName()],config.chartSettings[this.chartDisplayType()],true),config.chartSettings["default"],true);this._defaultWidth=this._defaultSettings[VisualizationPropertySettings.WIDTH];this._defaultHeight=this._defaultSettings[VisualizationPropertySettings.HEIGHT];
this._defaultMargins=this._defaultSettings[VisualizationPropertySettings.MARGINS];this._defaultColors=config.colorPalettesMap[this._defaultSettings[VisualizationPropertySettings.COLORS]];this._decorations=this._defaultSettings[VisualizationPropertySettings.DECORATIONS];this._customSettingsValues=config.chartCustomSettings[this.typeName()]||null};epiviz.ui.charts.VisualizationType.DisplayType={PLOT:"plot",TRACK:"track",DATA_STRUCTURE:"data-structure"};
epiviz.ui.charts.VisualizationType.prototype.createNew=function(id,container,properties){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.typeName=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.chartName=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.chartHtmlAttributeName=function(){throw Error("unimplemented abstract method");};
epiviz.ui.charts.VisualizationType.prototype.chartDisplayType=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.VisualizationType.prototype.measurementsFilter=function(){return function(m){return true}};epiviz.ui.charts.VisualizationType.prototype.isRestrictedToSameDatasourceGroup=function(){return false};epiviz.ui.charts.VisualizationType.prototype.isRestrictedToRangeMeasurements=function(){return false};
epiviz.ui.charts.VisualizationType.prototype.isRestrictedToFeatureMeasurements=function(){return!this.isRestrictedToRangeMeasurements()};epiviz.ui.charts.VisualizationType.prototype.minSelectedMeasurements=function(){return 1};epiviz.ui.charts.VisualizationType.prototype.chartContainer=function(){return epiviz.ui.ControlManager.CHART_TYPE_CONTAINERS[this.chartDisplayType()]};epiviz.ui.charts.VisualizationType.prototype.cssClass=function(){throw Error("unimplemented abstract method");};
epiviz.ui.charts.VisualizationType.prototype.defaultWidth=function(){return this._defaultWidth};epiviz.ui.charts.VisualizationType.prototype.defaultHeight=function(){return this._defaultHeight};epiviz.ui.charts.VisualizationType.prototype.defaultMargins=function(){return this._defaultMargins};epiviz.ui.charts.VisualizationType.prototype.defaultColors=function(){return this._defaultColors};epiviz.ui.charts.VisualizationType.prototype.decorations=function(){return this._decorations};
epiviz.ui.charts.VisualizationType.prototype.customSettingsValues=function(){return this._customSettingsValues};
epiviz.ui.charts.VisualizationType.prototype.customSettingsDefs=function(){return[new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.TITLE,epiviz.ui.charts.CustomSetting.Type.STRING,"","Title"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.MARGIN_TOP,epiviz.ui.charts.CustomSetting.Type.NUMBER,this._defaultMargins.top(),"Top margin"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.MARGIN_BOTTOM,epiviz.ui.charts.CustomSetting.Type.NUMBER,
this._defaultMargins.bottom(),"Bottom margin"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.MARGIN_LEFT,epiviz.ui.charts.CustomSetting.Type.NUMBER,this._defaultMargins.left(),"Left margin"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.MARGIN_RIGHT,epiviz.ui.charts.CustomSetting.Type.NUMBER,this._defaultMargins.right(),"Right margin")]};goog.provide("epiviz.ui.charts.markers.VisualizationMarker");goog.require("epiviz.caja");goog.require("epiviz.utils");goog.require("epiviz.deferred.Deferred");
epiviz.ui.charts.markers.VisualizationMarker=function(type,id,name,preMark,mark){this._type=type;this._id=id||epiviz.utils.generatePseudoGUID(6);this._name=name||"Custom Marker "+this._id;this._preMarkStr=preMark||"";this._markStr=mark||"";var deferredPreMark=new epiviz.deferred.Deferred;var cajoledPreMark=null;epiviz.caja.cajole(this._preMarkStr).done(function(preMarkFunc){cajoledPreMark=preMarkFunc;deferredPreMark.resolve()});this._preMark=function(data){var d=new epiviz.deferred.Deferred;deferredPreMark.done(function(){var initialVars=
cajoledPreMark(data);d.resolve(initialVars)});return d};var deferredMark=new epiviz.deferred.Deferred;var cajoledMark=null;epiviz.caja.cajole(this._markStr).done(function(markFunc){cajoledMark=markFunc;deferredMark.resolve()});this._mark=function(item,data,preMarkResult){var d=new epiviz.deferred.Deferred;deferredMark.done(function(){var markResult=cajoledMark(item,data,preMarkResult);d.resolve(markResult)});return d}};epiviz.ui.charts.markers.VisualizationMarker.prototype.type=function(){return this._type};
epiviz.ui.charts.markers.VisualizationMarker.prototype.id=function(){return this._id};epiviz.ui.charts.markers.VisualizationMarker.prototype.name=function(){return this._name};epiviz.ui.charts.markers.VisualizationMarker.prototype.preMark=function(){return this._preMark};epiviz.ui.charts.markers.VisualizationMarker.prototype.mark=function(){return this._mark};epiviz.ui.charts.markers.VisualizationMarker.prototype.preMarkStr=function(){return this._preMarkStr};
epiviz.ui.charts.markers.VisualizationMarker.prototype.markStr=function(){return this._markStr};epiviz.ui.charts.markers.VisualizationMarker.Type={FILTER:"filter",COLOR_BY_ROW:"colorByRow",ORDER_BY_MEASUREMENTS:"orderByMeasurements",COLOR_BY_MEASUREMENTS:"colorByMeasurements",GROUP_BY_MEASUREMENTS:"groupByMeasurements"};epiviz.ui.charts.markers.VisualizationMarker.prototype.raw=function(){return{type:this._type,id:this._id,name:this._name,preMark:this._preMarkStr,mark:this._markStr}};
epiviz.ui.charts.markers.VisualizationMarker.fromRawObject=function(o){return new epiviz.ui.charts.markers.VisualizationMarker(o.type,o.id,o.name,o.preMark,o.mark)};goog.provide("epiviz.ui.charts.VisualizationProperties");goog.require("epiviz.ui.controls.VisConfigSelection");goog.require("epiviz.utils");goog.require("epiviz.measurements.MeasurementSet");
epiviz.ui.charts.VisualizationProperties=function(width,height,margins,visConfigSelection,colors,modifiedMethods,customSettingsValues,customSettingsDefs,chartMarkers){this.width=width;this.height=height;this.margins=margins;this.visConfigSelection=visConfigSelection;this.colors=colors;this.modifiedMethods=modifiedMethods;this.customSettingsValues=customSettingsValues||{};this.customSettingsDefs=customSettingsDefs||[];this.chartMarkers=chartMarkers||[]};
epiviz.ui.charts.VisualizationProperties.prototype.copy=function(){var visConfigSelection=new epiviz.ui.controls.VisConfigSelection(this.visConfigSelection.measurements?new epiviz.measurements.MeasurementSet(this.visConfigSelection.measurements):undefined,this.visConfigSelection.datasource,this.visConfigSelection.datasourceGroup,this.visConfigSelection.dataprovider,epiviz.utils.mapCopy(this.visConfigSelection.annotation),this.visConfigSelection.defaultChartType,this.visConfigSelection.minSelectedMeasurements);
return new epiviz.ui.charts.VisualizationProperties(this.width,this.height,this.margins?this.margins.copy():this.margins,visConfigSelection,this.colors,this.modifiedMethods?epiviz.utils.mapCopy(this.modifiedMethods):this.modifiedMethods,this.customSettingsValues?epiviz.utils.mapCopy(this.customSettingsValues):this.customSettingsValues,this.customSettingsDefs?this.customSettingsDefs.slice(0):this.customSettingsDefs,this.chartMarkers.slice(0))};goog.provide("epiviz.workspaces.Workspace");goog.require("epiviz.measurements.MeasurementSet");goog.require("epiviz.events.Event");goog.require("epiviz.utils");goog.require("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.ui.charts.markers.VisualizationMarker");goog.require("epiviz.ui.charts.VisualizationProperties");goog.require("epiviz.ui.charts.Visualization");goog.require("epiviz.ui.controls.VisConfigSelection");goog.require("epiviz.ui.charts.Margins");goog.require("epiviz.ui.charts.ColorPalette");
epiviz.workspaces.Workspace=function(id,name,content){this._id=id;this._name=name;this._range=content.range;this._chartsOrder={};this._chartsById={};for(var displayType in content.charts){if(!content.charts.hasOwnProperty(displayType))continue;this._chartsOrder[displayType]=[];for(var i=0;i<content.charts[displayType].length;++i){this._chartsById[content.charts[displayType][i].id]=content.charts[displayType][i];this._chartsOrder[displayType].push(content.charts[displayType][i].id)}}this._computedMeasurements=
content.computedMeasurements||new epiviz.measurements.MeasurementSet;this._changed=false;this._contentChanged=new epiviz.events.Event};epiviz.workspaces.Workspace.DEFAULT_WORKSPACE_NAME=epiviz.Config.DEFAULT_WORKSPACE_NAME;epiviz.workspaces.Workspace.prototype.id=function(){return this._id};epiviz.workspaces.Workspace.prototype.name=function(){return this._name};epiviz.workspaces.Workspace.prototype.range=function(){return this._range};
epiviz.workspaces.Workspace.prototype.charts=function(){var charts={};for(var displayType in this._chartsOrder){if(!this._chartsOrder.hasOwnProperty(displayType))continue;charts[displayType]=[];for(var i=0;i<this._chartsOrder[displayType].length;++i)charts[displayType].push(this._chartsById[this._chartsOrder[displayType][i]])}return charts};epiviz.workspaces.Workspace.prototype.chartsOrder=function(){return this._chartsOrder};epiviz.workspaces.Workspace.prototype.computedMeasurements=function(){return this._computedMeasurements};
epiviz.workspaces.Workspace.prototype.chartAdded=function(id,type,properties,chartsOrder){this._chartsById[id]={id:id,type:type,properties:properties.copy()};this._chartsOrder=chartsOrder;this._setChanged()};epiviz.workspaces.Workspace.prototype.chartRemoved=function(id,chartsOrder){if(!this._chartsById[id])return;delete this._chartsById[id];this._chartsOrder=chartsOrder;this._setChanged()};
epiviz.workspaces.Workspace.prototype.chartSizeChanged=function(chartId,width,height){if(!this._chartsById[chartId])return;if(this._chartsById[chartId].properties.width==width&&this._chartsById[chartId].properties.height==height)return;this._chartsById[chartId].properties.width=width;this._chartsById[chartId].properties.height=height;this._setChanged()};
epiviz.workspaces.Workspace.prototype.chartMarginsChanged=function(chartId,margins){if(this._chartsById[chartId].properties.margins.equals(margins))return;this._chartsById[chartId].properties.margins=margins?margins.copy():margins;this._setChanged()};epiviz.workspaces.Workspace.prototype.chartColorsChanged=function(chartId,colors){if(this._chartsById[chartId].properties.colors.equals(colors))return;this._chartsById[chartId].properties.colors=colors;this._setChanged()};
epiviz.workspaces.Workspace.prototype.chartMethodsModified=function(chartId,modifiedMethods){if(epiviz.utils.mapEquals(this._chartsById[chartId].properties.modifiedMethods,modifiedMethods))return;this._chartsById[chartId].properties.modifiedMethods=epiviz.utils.mapCombine(modifiedMethods,this._chartsById[chartId].properties.modifiedMethods);this._setChanged()};
epiviz.workspaces.Workspace.prototype.chartMethodsReset=function(chartId){if(!this._chartsById[chartId].properties.modifiedMethods||Object.keys(this._chartsById[chartId].properties.modifiedMethods).length==0)return;this._chartsById[chartId].properties.modifiedMethods={};this._setChanged()};
epiviz.workspaces.Workspace.prototype.chartMarkersModified=function(chartId,markers){if(epiviz.utils.arraysEqual(this._chartsById[chartId].properties.chartMarkers,markers))return;this._chartsById[chartId].properties.chartMarkers=markers.filter(function(marker){return marker!=null});this._setChanged()};
epiviz.workspaces.Workspace.prototype.chartCustomSettingsChanged=function(chartId,customSettingsValues){if(epiviz.utils.mapEquals(this._chartsById[chartId].properties.customSettingsValues,customSettingsValues))return;this._chartsById[chartId].properties.customSettingsValues=customSettingsValues?epiviz.utils.mapCopy(customSettingsValues):customSettingsValues;this._setChanged()};
epiviz.workspaces.Workspace.prototype.locationChanged=function(range){if(this._range.equals(range))return;this._range=range;this._setChanged()};epiviz.workspaces.Workspace.prototype.computedMeasurementsAdded=function(measurements){var sizeBefore=this._computedMeasurements.size();this._computedMeasurements.addAll(measurements);if(sizeBefore!=this._computedMeasurements.size())this._setChanged()};
epiviz.workspaces.Workspace.prototype.computedMeasurementsRemoved=function(measurements){var sizeBefore=this._computedMeasurements.size();this._computedMeasurements.removeAll(measurements);if(sizeBefore!=this._computedMeasurements.size())this._setChanged()};epiviz.workspaces.Workspace.prototype.chartsOrderChanged=function(chartsOrder){this._chartsOrder=chartsOrder;this._setChanged()};epiviz.workspaces.Workspace.prototype.changed=function(){return this._changed};
epiviz.workspaces.Workspace.prototype.resetChanged=function(){this._changed=false};epiviz.workspaces.Workspace.prototype._setChanged=function(){this._changed=true;this._contentChanged.notify(this)};epiviz.workspaces.Workspace.prototype.copy=function(name,id){var charts=this.charts();return new epiviz.workspaces.Workspace(id||null,name,{range:this._range,computedMeasurements:new epiviz.measurements.MeasurementSet(this._computedMeasurements),charts:charts})};
epiviz.workspaces.Workspace.prototype.raw=function(config){var wsMeasurements=new epiviz.measurements.MeasurementHashtable;var charts={};this._computedMeasurements.foreach(function(m){var mIndex;var componentMs=m.componentMeasurements();componentMs.foreach(function(compM){var mIndex=wsMeasurements.get(compM);if(mIndex===null){mIndex=wsMeasurements.size();wsMeasurements.put(compM,mIndex)}});var refMs=m.formula().referredMeasurements;for(var j in refMs){if(!refMs.hasOwnProperty(j))continue;mIndex=wsMeasurements.get(refMs[j]);
if(mIndex===null){mIndex=wsMeasurements.size();wsMeasurements.put(refMs[j],mIndex)}}mIndex=wsMeasurements.get(m);if(mIndex===null){mIndex=wsMeasurements.size();wsMeasurements.put(m,mIndex)}});for(var displayType in this._chartsOrder){if(!this._chartsOrder.hasOwnProperty(displayType))continue;charts[displayType]=[];for(var i=0;i<this._chartsOrder[displayType].length;++i){var chartData=this._chartsById[this._chartsOrder[displayType][i]];var props=chartData.properties;var ms=[];(function(ms){props.visConfigSelection.measurements.foreach(function(m){var mIndex=
wsMeasurements.get(m);if(mIndex===null){mIndex=wsMeasurements.size();wsMeasurements.put(m,mIndex)}ms.push(mIndex)})})(ms);charts[displayType].push({id:chartData.id,type:chartData.type.typeName(),properties:{width:props.width,height:props.height,margins:props.margins.raw(),visConfigSelection:{measurements:ms,datasource:props.visConfigSelection.datasource,datasourceGroup:props.visConfigSelection.datasourceGroup,dataprovider:props.visConfigSelection.dataprovider,annotation:props.visConfigSelection.annotation,
defaultChartType:props.visConfigSelection.defaultChartType,minSelectedMeasurements:props.visConfigSelection.minSelectedMeasurements,customData:props.visConfigSelection.customData},colors:props.colors.raw(config),modifiedMethods:epiviz.utils.mapCopy(props.modifiedMethods),customSettings:props.customSettingsValues||null,chartMarkers:props.chartMarkers.map(function(marker){return marker.raw()})}})}}var rawMs=new Array(wsMeasurements.size());wsMeasurements.foreach(function(m,j){rawMs[j]=m.raw(wsMeasurements)});
return{id:this._id,name:this._name,content:{range:this._range.raw(),measurements:rawMs,charts:charts}}};
epiviz.workspaces.Workspace.fromRawObject=function(o,chartFactory,config){var i;var ms=new Array(o.content.measurements.length);var computedMeasurements=new epiviz.measurements.MeasurementSet;for(i=0;i<o.content.measurements.length;++i)if(!o.content.measurements[i].formula)ms[i]=epiviz.measurements.Measurement.fromRawObject(o.content.measurements[i]);for(i=0;i<o.content.measurements.length;++i)if(o.content.measurements[i].formula){ms[i]=epiviz.measurements.Measurement.fromRawObject(o.content.measurements[i],
ms);computedMeasurements.add(ms[i])}var charts={};for(var t in o.content.charts){if(!o.content.charts.hasOwnProperty(t))continue;charts[t]=[];for(i=0;i<o.content.charts[t].length;++i){var chartInfo=o.content.charts[t][i];var chartMs;var rawVisConfigSelection=chartInfo.properties.visConfigSelection;var rawMs=rawVisConfigSelection?rawVisConfigSelection.measurements:chartInfo.properties.measurements;if(rawMs){chartMs=new epiviz.measurements.MeasurementSet;for(var j=0;j<rawMs.length;++j)chartMs.add(ms[rawMs[j]])}var visConfigSelection=
rawVisConfigSelection?new epiviz.ui.controls.VisConfigSelection(chartMs,rawVisConfigSelection.datasource,rawVisConfigSelection.datasourceGroup,rawVisConfigSelection.dataprovider,rawVisConfigSelection.annotation,rawVisConfigSelection.defaultChartType,rawVisConfigSelection.minSelectedMeasurements,rawVisConfigSelection.customData):new epiviz.ui.controls.VisConfigSelection(chartMs);var chartType=chartFactory.get(chartInfo.type);if(!chartType)continue;charts[t].push({id:chartInfo.id,type:chartType,properties:new epiviz.ui.charts.VisualizationProperties(chartInfo.properties.width,
chartInfo.properties.height,epiviz.ui.charts.Margins.fromRawObject(chartInfo.properties.margins),visConfigSelection,epiviz.ui.charts.ColorPalette.fromRawObject(chartInfo.properties.colors,config),chartInfo.properties.modifiedMethods,chartInfo.properties.customSettings,chartType.customSettingsDefs(),chartInfo.properties.chartMarkers?chartInfo.properties.chartMarkers.map(function(rawMarker){return epiviz.ui.charts.markers.VisualizationMarker.fromRawObject(rawMarker)}):[])})}}return new epiviz.workspaces.Workspace(o.id,
o.name,{range:epiviz.datatypes.GenomicRange.fromRawObject(o.content.range),computedMeasurements:computedMeasurements,charts:charts})};epiviz.workspaces.Workspace.prototype.onContentChanged=function(){return this._contentChanged};goog.provide("epiviz.ui.controls.Dialog");goog.require("epiviz.utils");epiviz.ui.controls.Dialog=function(title,handlers){this._container=$("#dialogs");this._title=title;this._id=epiviz.ui.controls.Dialog.generateId();this._handlers=handlers;this._container.append(sprintf('<div id="%s" title="%s" style="display: none;"></div>',this._id,this._title));this._dialog=null};epiviz.ui.controls.Dialog._nextIdIndex=0;epiviz.ui.controls.Dialog.generateId=function(){return sprintf("dialog-%s",epiviz.utils.generatePseudoGUID(5))};
epiviz.ui.controls.Dialog.prototype.show=function(){};goog.provide("epiviz.ui.controls.MessageDialog");goog.require("epiviz.ui.controls.Dialog");epiviz.ui.controls.MessageDialog=function(title,handlers,message,icon){epiviz.ui.controls.Dialog.call(this,title,handlers);this._message=message;this._icon=icon||epiviz.ui.controls.MessageDialog.Icon.INFO};epiviz.ui.controls.MessageDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.MessageDialog.constructor=epiviz.ui.controls.MessageDialog;
epiviz.ui.controls.MessageDialog.Icon={INFO:"info",ERROR:"error",QUESTION:"question"};
epiviz.ui.controls.MessageDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var Icon=epiviz.ui.controls.MessageDialog.Icon;if(!this._dialog){var self=this;this._dialog=$("#"+this._id);this._dialog.css("display","inline");var state=this._icon==Icon.ERROR?"error":"highlight";var icon=this._icon==Icon.ERROR?"alert":"info";this._dialog.append(sprintf('<div class="ui-state-%s ui-corner-all" style="margin: 5px; padding: 5px; height: auto;">'+'<div class="ui-icon ui-icon-%s" style="float: left; margin-right: 5px;"></div>'+
'<div class="dialog-text">%s</div>'+"</div>",state,icon,this._message));var buttons={};for(var buttonName in this._handlers){if(!this._handlers.hasOwnProperty(buttonName))continue;(function(buttonName){buttons[buttonName]=function(){self._handlers[buttonName]();$(this).dialog("close")}})(buttonName)}this._dialog.dialog({autoOpen:false,resizable:false,buttons:buttons,modal:true});this._dialog.dialog({close:function(event,ui){$(this).remove();self._dialog=null}})}this._dialog.dialog("open");this._dialog.dialog("option",
"position","center")};goog.provide("epiviz.EpiViz");goog.require("epiviz.ui.charts.VisualizationType");goog.require("epiviz.workspaces.Workspace");goog.require("epiviz.events.EventListener");goog.require("epiviz.ui.controls.MessageDialog");goog.require("epiviz.datatypes.GenomicRange");
epiviz.EpiViz=function(config,locationManager,measurementsManager,controlManager,dataManager,chartFactory,chartManager,workspaceManager,userManager,webArgsManager,cookieManager){this._config=config;this._locationManager=locationManager;this._measurementsManager=measurementsManager;this._controlManager=controlManager;this._dataManager=dataManager;this._chartFactory=chartFactory;this._chartManager=chartManager;this._workspaceManager=workspaceManager;this._userManager=userManager;this._webArgsManager=
webArgsManager;this._cookieManager=cookieManager;this._registerRequestSeqInfos();this._registerRequestMeasurements();this._registerUiAddChart();this._registerUiSaveWorkspace();this._registerUiDeleteActiveWorkspace();this._registerUiRevertActiveWorkspace();this._registerUiLoginLinkClicked();this._registerUiSearchWorkspaces();this._registerUiActiveWorkspaceChanged();this._registerUiSearch();this._registerChartRequestHierarchy();this._registerChartPropagateHierarchySelection();this._registerChartPropogateIcicleLocationChange();
this._registerChartPropagateNavigationChanges();this._registerUiSettingsChanged();this._registerDataAddMeasurements();this._registerDataLoadMeasurements();this._registerDataRemoveMeasurements();this._registerDataAddChart();this._registerDataRemoveChart();this._registerDataAddSeqInfos();this._registerDataRemoveSeqNames();this._registerDataNavigate();this._registerDataRedraw();this._registerDataGetCurrentLocation();this._registerPrintWorkspace();this._registerLoadWorkspace();this._registerDataSetChartSettings();
this._registerDataGetChartSettings();this._registerDataGetAvailableCharts();this._registerDataUiStatus();this._registerRequestWorkspaces();this._registerWorkspacesLoaded();this._registerActiveWorkspaceChanged();this._registerActiveWorkspaceContentChanged();this._registerLocationChanged();var self=this};epiviz.EpiViz.VERSION="5";
epiviz.EpiViz.prototype.start=function(){this._cookieManager.initialize();this._controlManager.initialize();this._workspaceManager.initialize();this._measurementsManager.initialize();this._locationManager.initialize()};epiviz.EpiViz.prototype.config=function(){return this._config};
epiviz.EpiViz.prototype._addChart=function(type,visConfigSelection,chartId,chartProperties){chartId=this._chartManager.addChart(type,visConfigSelection,chartId,chartProperties);var self=this;if(type.typeName()=="epiviz.plugins.charts.CustomScatterPlot"){var range=null;var chartMeasurementsMap={};chartMeasurementsMap[chartId]=visConfigSelection.measurements;this._dataManager.getPCA(range,chartMeasurementsMap,function(chartId,data){self._chartManager.updateCharts(range,data,[chartId])})}else if(type.typeName()==
"epiviz.plugins.charts.DiversityScatterPlot"){var range=null;var chartMeasurementsMap={};chartMeasurementsMap[chartId]=visConfigSelection.measurements;this._dataManager.getDiversity(range,chartMeasurementsMap,function(chartId,data){self._chartManager.updateCharts(range,data,[chartId])})}else if(type.chartDisplayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE){var chartVisConfigSelectionMap={};chartVisConfigSelectionMap[chartId]=visConfigSelection;var range=this._workspaceManager.activeWorkspace().range();
this._dataManager.getHierarchy(chartVisConfigSelectionMap,function(chartId,hierarchy){self._chartManager.updateCharts(range,hierarchy,[chartId])})}else{var range=this._workspaceManager.activeWorkspace().range();this._chartManager.dataWaitStart(chartId);var chartMeasurementsMap={};chartMeasurementsMap[chartId]=visConfigSelection.measurements;this._dataManager.getData(range,chartMeasurementsMap,function(chartId,data){self._chartManager.updateCharts(range,data,[chartId])})}return chartId};
epiviz.EpiViz.prototype._registerRequestSeqInfos=function(){var self=this;this._locationManager.onRequestSeqInfos().addListener(new epiviz.events.EventListener(function(){self._dataManager.getSeqInfos(function(seqInfos){self._locationManager.updateSeqInfos(seqInfos)})}))};epiviz.EpiViz.prototype._registerRequestMeasurements=function(){var self=this;this._measurementsManager.onRequestMeasurements().addListener(new epiviz.events.EventListener(function(){self._dataManager.getMeasurements(function(measurements){self._measurementsManager.addMeasurements(measurements)})}))};
epiviz.EpiViz.prototype._registerRequestWorkspaces=function(){var self=this;this._workspaceManager.onRequestWorkspaces().addListener(new epiviz.events.EventListener(function(e){var cookieWorkspace=self._cookieManager.getWorkspace(self._chartFactory,self._config);self._dataManager.getWorkspaces(function(rawWorkspaces){var ws=[];var activeWorkspace=null;var unchangedActiveWorkspace=null;for(var i=0;i<rawWorkspaces.length;++i){var w=epiviz.workspaces.Workspace.fromRawObject(rawWorkspaces[i],self._chartFactory,
self._config);if(w.id()===null){activeWorkspace=w;continue}if(w.id()==e.activeWorkspaceId){if(cookieWorkspace&&cookieWorkspace.id()==e.activeWorkspaceId){unchangedActiveWorkspace=w;w=cookieWorkspace}activeWorkspace=w}ws.push(w)}self._workspaceManager.updateWorkspaces(ws,activeWorkspace,e.activeWorkspaceId,unchangedActiveWorkspace);if(!cookieWorkspace)self._workspaceManager.activeWorkspace().resetChanged()},"",e.activeWorkspaceId)}))};
epiviz.EpiViz.prototype._registerUiAddChart=function(){var self=this;this._controlManager.onAddChart().addListener(new epiviz.events.EventListener(function(e){self._addChart(e.type,e.visConfigSelection)}))};
epiviz.EpiViz.prototype._registerUiSaveWorkspace=function(){var self=this;this._controlManager.onSaveWorkspace().addListener(new epiviz.events.EventListener(function(e){var workspace=self._workspaceManager.getByName(e.name);if(workspace)workspace=self._workspaceManager.activeWorkspace().copy(e.name,workspace.id());else workspace=self._workspaceManager.activeWorkspace().copy(e.name);self._dataManager.saveWorkspace(workspace,self._config,function(id){workspace=workspace.copy(workspace.name(),id);workspace.resetChanged();
self._workspaceManager.updateWorkspace(workspace);self._workspaceManager.changeActiveWorkspace(id)})}))};epiviz.EpiViz.prototype._registerUiDeleteActiveWorkspace=function(){var self=this;this._controlManager.onDeleteActiveWorkspace().addListener(new epiviz.events.EventListener(function(){self._dataManager.deleteWorkspace(self._workspaceManager.activeWorkspace());self._workspaceManager.deleteActiveWorkspace()}))};epiviz.EpiViz.prototype._registerUiRevertActiveWorkspace=function(){var self=this;this._controlManager.onRevertActiveWorkspace().addListener(new epiviz.events.EventListener(function(){self._workspaceManager.revertActiveWorkspace()}))};
epiviz.EpiViz.prototype._registerUiLoginLinkClicked=function(){var self=this;this._controlManager.onLoginLinkClicked().addListener(new epiviz.events.EventListener(function(){self._userManager.toggleLogin()}))};epiviz.EpiViz.prototype._registerUiSearchWorkspaces=function(){var self=this;this._controlManager.onSearchWorkspaces().addListener(new epiviz.events.EventListener(function(e){self._dataManager.getWorkspaces(function(workspaces){e.callback(workspaces)},e.searchTerm,e.searchTerm)}))};
epiviz.EpiViz.prototype._registerUiActiveWorkspaceChanged=function(){var self=this;this._controlManager.onActiveWorkspaceChanged().addListener(new epiviz.events.EventListener(function(e){var doChangeActiveWorkspace=function(){if(e.newValue.id&&!self._workspaceManager.get(e.newValue.id))self._dataManager.getWorkspaces(function(rawWorkspaces){var result=null;for(var i=0;i<rawWorkspaces.length;++i){var w=epiviz.workspaces.Workspace.fromRawObject(rawWorkspaces[i],self._chartFactory,self._config);if(w.id()===
null){result=w;break}}if(result)self._workspaceManager.changeActiveWorkspace(e.newValue.id,result)},e.newValue.name,e.newValue.id);else self._workspaceManager.changeActiveWorkspace(e.newValue.id)};if(epiviz.workspaces.UserManager.USER_STATUS.loggedIn&&!self._workspaceManager.activeWorkspaceChanging()&&self._workspaceManager.activeWorkspace().changed()){var dialog=new epiviz.ui.controls.MessageDialog("Discard workspace changes",{Yes:function(){doChangeActiveWorkspace()},No:function(){e.cancel()}},
"There are unsaved changes in the current workspace. Do you wish to discard them?",epiviz.ui.controls.MessageDialog.Icon.QUESTION);dialog.show()}else doChangeActiveWorkspace()}))};epiviz.EpiViz.prototype._registerUiSearch=function(){var self=this;this._controlManager.onSearch().addListener(new epiviz.events.EventListener(function(e){self._dataManager.search(function(results){e.callback(results)},e.searchTerm)}))};
epiviz.EpiViz.prototype._registerChartRequestHierarchy=function(){var self=this;this._chartManager.onChartRequestHierarchy().addListener(new epiviz.events.EventListener(function(e){var map={};map[e.id]=e.args;self._dataManager.getHierarchy(map,function(chartId,data){self._chartManager.updateCharts(undefined,data,[chartId])})}))};
epiviz.EpiViz.prototype._registerChartPropagateHierarchySelection=function(){var self=this;this._chartManager.onChartPropagateHierarchyChanges().addListener(new epiviz.events.EventListener(function(e){var map={};map[e.id]=e.args;self._dataManager.propagateHierarchyChanges(map,function(chartId,data){self._chartManager.updateCharts(undefined,data,[chartId])})}))};epiviz.EpiViz.prototype._registerChartPropagateNavigationChanges=function(){var self=this;this._chartManager.onChartPropagateNavigationChanges().addListener(new epiviz.events.EventListener(function(e){self._locationManager.changeCurrentLocation(e.range)}))};
epiviz.EpiViz.prototype._registerUiSettingsChanged=function(){var self=this;this._workspaceManager.onUiChartSettingsChanged().addListener(new epiviz.events.EventListener(function(e){self._dataManager.updateChartSettings(e)}))};
epiviz.EpiViz.prototype._registerDataAddMeasurements=function(){var self=this;this._dataManager.onRequestAddMeasurements().addListener(new epiviz.events.EventListener(function(e){try{self._measurementsManager.addMeasurements(e.measurements);e.result.success=true}catch(error){e.result.success=false;e.result.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataRemoveMeasurements=function(){var self=this;this._dataManager.onRequestRemoveMeasurements().addListener(new epiviz.events.EventListener(function(e){try{self._measurementsManager.removeMeasurements(e.measurements);e.result.success=true}catch(error){e.result.success=false;e.result.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataLoadMeasurements=function(){var self=this;this._dataManager.onRequestLoadMeasurements().addListener(new epiviz.events.EventListener(function(e){try{var m=self._measurementsManager.getRemoteMeasurements();e.result.success=true;e.result.measurements=m}catch(error){e.result.success=false;e.result.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataAddChart=function(){var self=this;this._dataManager.onRequestAddChart().addListener(new epiviz.events.EventListener(function(e){try{var chartType=self._chartFactory.get(e.type);var chartId=self._addChart(chartType,e.visConfigSelection);e.result.success=true;e.result.value={id:chartId}}catch(error){e.result.success=false;e.result.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataRemoveChart=function(){var self=this;this._dataManager.onRequestRemoveChart().addListener(new epiviz.events.EventListener(function(e){try{self._chartManager.removeChart(e.id);e.result.success=true}catch(error){e.result.success=false;e.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerPrintWorkspace=function(){var self=this;this._dataManager.onRequestPrintWorkspace().addListener(new epiviz.events.EventListener(function(e){try{var pm=new epiviz.ui.PrintManager(e.chartId,e.fileName,e.fileType);pm.print();e.result.success=true}catch(error){e.result.success=false;e.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerLoadWorkspace=function(){var self=this;this._dataManager.onRequestLoadWorkspace().addListener(new epiviz.events.EventListener(function(e){try{self._workspaceManager._requestWorkspaces.notify({activeWorkspaceId:e.workspace})}catch(error){e.result.success=false;e.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataSetChartSettings=function(){var self=this;this._dataManager.onRequestSetChartSettings().addListener(new epiviz.events.EventListener(function(e){try{self._chartManager.setChartSettings(e.chartId,e.settings,e.colorMap);e.result.success=true}catch(error){e.result.success=false;e.result.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataGetChartSettings=function(){var self=this;this._dataManager.onRequestGetChartSettings().addListener(new epiviz.events.EventListener(function(e){try{self._chartManager.getChartSettings(e.chartId);e.result.success=true}catch(error){e.result.success=false;e.result.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataGetAvailableCharts=function(){var self=this;this._dataManager.onRequestGetChartSettings().addListener(new epiviz.events.EventListener(function(e){try{e.result.value=[];self._chartFactory.foreach(function(chartName,chartType){e.result.value.push({"chartName":chartName,"customSettings":chartType.customSettingsDefs(),"colorMap":chartType.defaultColors()._colors})});e.result.success=true}catch(error){e.result.success=false;e.result.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataAddSeqInfos=function(){var self=this;this._dataManager.onRequestAddSeqInfos().addListener(new epiviz.events.EventListener(function(e){try{self._locationManager.addSeqInfos(e.seqInfos);e.result.success=true}catch(error){e.result.success=false;e.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataRemoveSeqNames=function(){var self=this;this._dataManager.onRequestRemoveSeqNames().addListener(new epiviz.events.EventListener(function(e){try{self._locationManager.removeSeqNames(e.seqNames);e.result.success=true}catch(error){e.result.success=false;e.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataNavigate=function(){var self=this;this._dataManager.onRequestNavigate().addListener(new epiviz.events.EventListener(function(e){try{self._locationManager.changeCurrentLocation(e.range);e.result.success=true}catch(error){e.result.success=false;e.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataRedraw=function(){var self=this;this._dataManager.onRequestRedraw().addListener(new epiviz.events.EventListener(function(e){try{var currentLocation=self._locationManager.currentLocation();self._locationManager.changeCurrentLocation(currentLocation);e.result.success=true;self._chartManager.updateDataStructureCharts()}catch(error){e.result.success=false;e.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerDataGetCurrentLocation=function(){var self=this;this._dataManager.onRequestCurrentLocation().addListener(new epiviz.events.EventListener(function(e){try{var currentLocation=self._locationManager.currentLocation();e.result.value={seqName:currentLocation.seqName(),start:currentLocation.start(),end:currentLocation.end()};e.result.success=true}catch(error){e.result.success=false;e.errorMessage=error.toString()}}))};
epiviz.EpiViz.prototype._registerWorkspacesLoaded=function(){var self=this;this._workspaceManager.onWorkspacesLoaded().addListener(new epiviz.events.EventListener(function(e){}))};
epiviz.EpiViz.prototype._registerActiveWorkspaceChanged=function(){var self=this;this._workspaceManager.onActiveWorkspaceChanged().addListener(new epiviz.events.EventListener(function(e){self._workspaceManager.startChangingActiveWorkspace();self._controlManager.updateSelectedWorkspace({id:e.newValue.id(),name:e.newValue.name()});self._locationManager.changeCurrentLocation(e.newValue.range());self._measurementsManager.removeMeasurements(self._measurementsManager.computedMeasurements());self._measurementsManager.addMeasurements(e.newValue.computedMeasurements());
self._chartManager.clear();var charts=e.newValue.charts();for(var displayType in charts){if(!charts.hasOwnProperty(displayType))continue;for(var i=0;i<charts[displayType].length;++i)self._addChart(charts[displayType][i].type,charts[displayType][i].properties.visConfigSelection,charts[displayType][i].id,charts[displayType][i].properties.copy())}self._workspaceManager.endChangingActiveWorkspace()}))};
epiviz.EpiViz.prototype._registerActiveWorkspaceContentChanged=function(){var self=this;this._workspaceManager.onActiveWorkspaceContentChanged().addListener(new epiviz.events.EventListener(function(w){self._cookieManager.saveWorkspace(w,self._config)}))};
epiviz.EpiViz.prototype._registerLocationChanged=function(){var self=this;this._locationManager.onCurrentLocationChanged().addListener(new epiviz.events.EventListener(function(e){self._chartManager.dataWaitStart(undefined,function(chart){return chart.displayType()!=epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE});var chartMeasurementsMap=self._chartManager.chartsMeasurements();for(var mea in chartMeasurementsMap)if(mea.indexOf("pca_scatter")!=-1||mea.indexOf("diversity_scatter")!=-1)delete chartMeasurementsMap[mea];
self._dataManager.getData(e.newValue,chartMeasurementsMap,function(chartId,data){self._chartManager.updateCharts(e.newValue,data,[chartId])});if(!self._chartManager.onChartPropogateIcicleLocationChanges().isFiring())self._chartManager.onChartIcicleLocationChanges().notify()}))};
epiviz.EpiViz.prototype._registerChartPropogateIcicleLocationChange=function(){var self=this;self._chartManager.onChartPropogateIcicleLocationChanges().addListener(new epiviz.events.EventListener(function(e){var currentLocation=self._locationManager.currentLocation();if(currentLocation!=null)self._locationManager.changeCurrentLocation(new epiviz.datatypes.GenomicRange(currentLocation.seqName(),e.start,e.width))}))};
epiviz.EpiViz.prototype._registerDataUiStatus=function(){var self=this;this._dataManager.onRequestUiStatus().addListener(new epiviz.events.EventListener(function(e){if(self._workspaceManager._activeWorkspace==null)self._workspaceManager.onActiveWorkspaceChanged().addListener(new epiviz.events.EventListener(function(e1){e.result.success=true}));else e.result.success=true}))};goog.provide("epiviz.localstorage.LocalStorageManager");goog.require("epiviz.workspaces.Workspace");epiviz.localstorage.LocalStorageManager=function(type){this._workspace=type;this._availStorage=typeof Storage==="undefined"||localStorage==null?false:true};epiviz.localstorage.LocalStorageManager.MODE={INCOGNITO_MODE:"incognito_workspace",COOKIE_MODE:"workspace"};epiviz.localstorage.LocalStorageManager.prototype.initialize=function(){};
epiviz.localstorage.LocalStorageManager.prototype.getWorkspace=function(chartFactory,config){if(this._availStorage){var rawStr=localStorage.getItem(this._workspace);if(!rawStr)return null;return epiviz.workspaces.Workspace.fromRawObject(JSON.parse(rawStr),chartFactory,config)}};epiviz.localstorage.LocalStorageManager.prototype.saveWorkspace=function(workspace,config){if(this._availStorage){var raw=workspace.raw(config);localStorage.setItem(this._workspace,JSON.stringify(raw))}};
epiviz.localstorage.LocalStorageManager.prototype.clearWorkspace=function(){if(this._availStorage)localStorage.removeItem(this._workspace)};epiviz.localstorage.LocalStorageManager.prototype.clearAll=function(){if(this._availStorage)localStorage.clear()};goog.provide("epiviz.ui.LocationManager");goog.require("epiviz.events.Event");goog.require("epiviz.datatypes.GenomicRange");epiviz.ui.LocationManager=function(config){this._seqInfos={};this._currentLocation=null;this._lastUnfilledRequest=null;this._timeout=null;this._navigationDelay=config.navigationDelay;this._currentLocationChanged=new epiviz.events.Event;this._seqInfosUpdated=new epiviz.events.Event;this._requestSeqInfos=new epiviz.events.Event};epiviz.ui.LocationManager.prototype.initialize=function(){this._requestSeqInfos.notify()};
epiviz.ui.LocationManager.prototype.changeCurrentLocation=function(range){if(this._currentLocationChanged.isFiring())return;this._lastUnfilledRequest=range;if(this._timeout!==null){window.clearTimeout(this._timeout);this._timeout=null}var self=this;var locationChangeFunction=function(){var request=self._lastUnfilledRequest;if(request===null)return;self._doChangeCurrentLocation(request)};if(this._navigationDelay)this._timeout=window.setTimeout(locationChangeFunction,this._navigationDelay);else locationChangeFunction()};
epiviz.ui.LocationManager.prototype._doChangeCurrentLocation=function(range){var oldValue=this._currentLocation;var genome=range.genome();var seqName=range.seqName();if(!(range.seqName()in this._seqInfos)){if(!oldValue)return;seqName=oldValue.seqName()}var start=undefined,end=undefined;if(this._seqInfos[seqName]&&this._seqInfos[seqName].min!=undefined&&this._seqInfos[seqName].max!=undefined){start=range.start()!=undefined&&range.start()>=this._seqInfos[seqName].min?range.start():this._seqInfos[seqName].min;
end=range.width()!=undefined?start+range.width():start+9999}if(start!=undefined&&end!=undefined&&end>this._seqInfos[seqName].max){start=Math.max(this._seqInfos[seqName].min,this._seqInfos[seqName].max-end+start);end=this._seqInfos[seqName].max}this._lastUnfilledRequest=null;this._currentLocation=epiviz.datatypes.GenomicRange.fromStartEnd(seqName,start,end,genome);this._currentLocationChanged.notify({oldValue:oldValue,newValue:this._currentLocation})};
epiviz.ui.LocationManager.prototype.currentLocation=function(){return this._currentLocation};epiviz.ui.LocationManager.prototype.lastUnfilledLocationChangeRequest=function(){return this._lastUnfilledRequest};
epiviz.ui.LocationManager.prototype.updateSeqInfos=function(seqInfos){this._seqInfos={};for(var i=0;i<seqInfos.length;++i)this._seqInfos[seqInfos[i].seqName]=seqInfos[i];this._seqInfosUpdated.notify(seqInfos);if(this._lastUnfilledRequest!==null)if(this._lastUnfilledRequest.seqName()in this._seqInfos)this._doChangeCurrentLocation(this._lastUnfilledRequest);else if(seqInfos.length>0){var request=new epiviz.datatypes.GenomicRange(seqInfos[0].seqName,this._lastUnfilledRequest.start(),this._lastUnfilledRequest.width(),
seqInfos[0].genome);this._doChangeCurrentLocation(request)}};epiviz.ui.LocationManager.prototype.addSeqInfos=function(seqInfos){for(var i=0;i<seqInfos.length;++i)if(!this._seqInfos[seqInfos[i].seqName])this._seqInfos[seqInfos[i].seqName]=seqInfos[i];var eventSeqInfos=[];for(var seqName in this._seqInfos){if(!this._seqInfos.hasOwnProperty(seqName))continue;eventSeqInfos.push(this._seqInfos[seqName])}this._seqInfosUpdated.notify(eventSeqInfos)};
epiviz.ui.LocationManager.prototype.removeSeqNames=function(seqNames){for(var i=0;i<seqNames.length;++i)delete this._seqInfos[seqNames[i]];var eventSeqInfos=[];for(var seqName in this._seqInfos){if(!this._seqInfos.hasOwnProperty(seqName))continue;eventSeqInfos.push(this._seqInfos[seqName])}this._seqInfosUpdated.notify(eventSeqInfos);if(!(this._currentLocation.seqName()in this._seqInfos))this.changeCurrentLocation(new epiviz.datatypes.GenomicRange(eventSeqInfos[0].seqName,this._currentLocation.start(),
this._currentLocation.width(),eventSeqInfos[0].genome))};epiviz.ui.LocationManager.prototype.seqInfos=function(){return this._seqInfos};epiviz.ui.LocationManager.prototype.onCurrentLocationChanged=function(){return this._currentLocationChanged};epiviz.ui.LocationManager.prototype.onSeqInfosUpdated=function(){return this._seqInfosUpdated};epiviz.ui.LocationManager.prototype.onRequestSeqInfos=function(){return this._requestSeqInfos};goog.provide("epiviz.measurements.MeasurementsManager");goog.require("epiviz.events.Event");goog.require("epiviz.measurements.MeasurementSet");
epiviz.measurements.MeasurementsManager=function(){this._requestMeasurements=new epiviz.events.Event;this._measurementsAdded=new epiviz.events.Event;this._measurementsRemoved=new epiviz.events.Event;this._computedMeasurementsAdded=new epiviz.events.Event;this._computedMeasurementsRemoved=new epiviz.events.Event;this._measurements=new epiviz.measurements.MeasurementSet;this._computedMeasurements=new epiviz.measurements.MeasurementSet};epiviz.measurements.MeasurementsManager.prototype.initialize=function(){this._requestMeasurements.notify()};
epiviz.measurements.MeasurementsManager.prototype.onRequestMeasurements=function(){return this._requestMeasurements};epiviz.measurements.MeasurementsManager.prototype.onMeasurementsAdded=function(){return this._measurementsAdded};epiviz.measurements.MeasurementsManager.prototype.onMeasurementsRemoved=function(){return this._measurementsRemoved};epiviz.measurements.MeasurementsManager.prototype.onComputedMeasurementsAdded=function(){return this._computedMeasurementsAdded};
epiviz.measurements.MeasurementsManager.prototype.onComputedMeasurementsRemoved=function(){return this._computedMeasurementsRemoved};epiviz.measurements.MeasurementsManager.prototype.measurements=function(){return this._measurements};epiviz.measurements.MeasurementsManager.prototype.computedMeasurements=function(){return this._computedMeasurements};
epiviz.measurements.MeasurementsManager.prototype.addMeasurements=function(measurements){if(!measurements||!measurements.size())return;var self=this;this._measurements.addAll(measurements);var computedMeasurements=new epiviz.measurements.MeasurementSet;measurements.foreach(function(m){if(m.isComputed()){computedMeasurements.add(m);self._computedMeasurements.add(m)}});this._measurementsAdded.notify(measurements);if(computedMeasurements.size()>0)this._computedMeasurementsAdded.notify(computedMeasurements)};
epiviz.measurements.MeasurementsManager.prototype.removeMeasurements=function(measurements){var self=this;this._measurements.removeAll(measurements);var computedMeasurements=new epiviz.measurements.MeasurementSet;measurements.foreach(function(m){if(m.isComputed()){computedMeasurements.add(m);self._computedMeasurements.remove(m)}});this._measurementsRemoved.notify(measurements);if(computedMeasurements.size()>0)this._computedMeasurementsRemoved.notify(computedMeasurements)};
epiviz.measurements.MeasurementsManager.prototype.addMeasurement=function(measurement){var measurements=new epiviz.measurements.MeasurementSet;measurements.add(measurement);this.addMeasurements(measurements)};epiviz.measurements.MeasurementsManager.prototype.removeMeasurement=function(measurement){var measurements=new epiviz.measurements.MeasurementSet;measurements.add(measurement);this.removeMeasurements(measurements)};
epiviz.measurements.MeasurementsManager.prototype.getRemoteMeasurements=function(){var self=this;return this._measurements.remoteRaw()};goog.provide("epiviz.ui.charts.markers.MeasurementAggregator");epiviz.ui.charts.markers.MeasurementAggregator=function(id,aggregator){this._id=id;this._aggregator=aggregator};epiviz.ui.charts.markers.MeasurementAggregator.prototype.aggregate=function(label,measurements,values){return this._aggregator(label,measurements,values)};epiviz.ui.charts.markers.MeasurementAggregator.prototype.id=function(){return this._id};
epiviz.ui.charts.markers.MeasurementAggregators={"mean-stdev":new epiviz.ui.charts.markers.MeasurementAggregator("mean-stdev",function(label,measurements,values){if(!values||values.length==0)return null;var mean=values.reduce(function(v1,v2){return v1+v2})/values.length;var variance=values.map(function(v){return(v-mean)*(v-mean)}).reduce(function(v1,v2){return v1+v2})/values.length;var stdev=Math.sqrt(variance);return{value:mean,errMinus:mean-stdev,errPlus:mean+stdev}}),"quartiles":new epiviz.ui.charts.markers.MeasurementAggregator("quartiles",
function(label,measurements,values){if(!values||values.length==0)return null;values=values.slice(0).sort(function(v1,v2){return v1-v2});var n=values.length;var m1=Math.floor(n*.5);var m2=Math.ceil(n*.5);var q2=(values[Math.floor((n-1)*.5)]+values[m1])*.5;var q1=(values[Math.floor((m1-1)*.5)]+values[Math.floor(m1*.5)])*.5;var q3=(values[m2+Math.floor((n-m2-1)*.5)]+values[m2+Math.floor((n-m2)*.5)])*.5;return{value:q2,errMinus:q1,errPlus:q3}}),"count":new epiviz.ui.charts.markers.MeasurementAggregator("count",
function(label,measurements,values){if(!values||values.length==0)return 0;return{value:values.length}}),"min":new epiviz.ui.charts.markers.MeasurementAggregator("min",function(label,measurements,values){if(!values||values.length==0)return null;return{value:Math.min.apply(undefined,values)}}),"max":new epiviz.ui.charts.markers.MeasurementAggregator("max",function(label,measurements,values){if(!values||values.length==0)return null;return{value:Math.max.apply(undefined,values)}}),"sum":new epiviz.ui.charts.markers.MeasurementAggregator("sum",
function(label,measurements,values){if(!values||values.length==0)return null;return{value:values.reduce(function(v1,v2){return v1+v2})}})};goog.provide("epiviz.ui.charts.ChartType");goog.require("epiviz.ui.charts.VisualizationType");goog.require("epiviz.ui.charts.markers.MeasurementAggregator");goog.require("epiviz.ui.charts.CustomSetting");epiviz.ui.charts.ChartType=function(config){epiviz.ui.charts.VisualizationType.call(this,config)};epiviz.ui.charts.ChartType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.VisualizationType.prototype);epiviz.ui.charts.ChartType.constructor=epiviz.ui.charts.ChartType;
epiviz.ui.charts.ChartType.prototype.createNew=function(id,container,properties){throw Error("unimplemented abstract method");};
epiviz.ui.charts.ChartType.prototype.customSettingsDefs=function(){var defs=epiviz.ui.charts.VisualizationType.prototype.customSettingsDefs.call(this);if(this.isRestrictedToRangeMeasurements())return defs;var aggregators=Object.keys(epiviz.ui.charts.markers.MeasurementAggregators);return defs.concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.ChartType.CustomSettings.MEASUREMENT_GROUPS_AGGREGATOR,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,aggregators[0],"Aggregator for measurement groups",
aggregators)])};epiviz.ui.charts.ChartType.CustomSettings={MEASUREMENT_GROUPS_AGGREGATOR:"measurementGroupsAggregator"};goog.provide("epiviz.ui.charts.Chart");goog.require("epiviz.ui.charts.Visualization");goog.require("epiviz.measurements.Measurement");goog.require("epiviz.deferred.Deferred");goog.require("epiviz.ui.charts.markers.MeasurementAggregator");goog.require("epiviz.ui.charts.ChartType");goog.require("epiviz.datatypes.MeasurementAggregatedGenomicData");goog.require("epiviz.ui.charts.markers.VisualizationMarker");goog.require("epiviz.datatypes.ItemFilteredGenomicData");goog.require("epiviz.datatypes.MeasurementOrderedGenomicData");
goog.require("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.ui.charts.VisEventArgs");epiviz.ui.charts.Chart=function(id,container,properties){epiviz.ui.charts.Visualization.call(this,id,container,properties);this._nBins=100;this._binSize=null;this._measurementColorLabels=null;this._globalIndexColorLabels=null};epiviz.ui.charts.Chart.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Visualization.prototype);epiviz.ui.charts.Chart.constructor=epiviz.ui.charts.Chart;
epiviz.ui.charts.Chart.prototype._initialize=function(){epiviz.ui.charts.Visualization.prototype._initialize.call(this);this._svg.classed("base-chart",true)};
epiviz.ui.charts.Chart.prototype._addFilters=function(){var defs=this._svg.append("defs");var glow=defs.append("filter").attr("id",this.id()+"-glow");glow.append("feGaussianBlur").attr("id","gaussianBlur").attr("stdDeviation","2").attr("result","blurResult");glow.append("feComposite").attr("id","composite").attr("in","SourceGraphic").attr("in2","blurResult").attr("operator","over");var contour=defs.append("filter").attr("id",this.id()+"-contour");contour.append("feGaussianBlur").attr("in","SourceAlpha").attr("stdDeviation",
"1").attr("result","blur");contour.append("feColorMatrix").attr("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -1 ").attr("result","colorMatrix");contour.append("feFlood").attr("result","fillColor").attr("flood-color","#800000").attr("in","blur");contour.append("feComposite").attr("result","composite").attr("in","fillColor").attr("in2","colorMatrix").attr("operator","atop");contour.append("feComposite").attr("in","SourceGraphic").attr("in2","composite").attr("operator","atop");var dropShadow=defs.append("filter").attr("id",
this.id()+"-dropshadow").attr("filterUnits","userSpaceOnUse").attr("color-interpolation-filters","sRGB");var temp=dropShadow.append("feComponentTransfer").attr("in","SourceAlpha");temp.append("feFuncR").attr("type","discrete").attr("tableValues","1");temp.append("feFuncG").attr("type","discrete").attr("tableValues",198/255);temp.append("feFuncB").attr("type","discrete").attr("tableValues","0");dropShadow.append("feGaussianBlur").attr("stdDeviation","2");dropShadow.append("feOffset").attr("dx","0").attr("dy",
"0").attr("result","shadow");dropShadow.append("feComposite").attr("in","SourceGraphic").attr("in2","shadow").attr("operator","over")};epiviz.ui.charts.Chart.prototype.draw=function(range,data){epiviz.ui.charts.Visualization.prototype.draw.call(this,range,data);if(range)this._binSize=Math.ceil((range.end()-range.start())/this._nBins);return[]};
epiviz.ui.charts.Chart.prototype.transformData=function(range,data){var deferred=new epiviz.deferred.Deferred;var self=this;epiviz.ui.charts.Visualization.prototype.transformData.call(this,range,data).done(function(){if(!self._lastData){deferred.resolve();return}self._lastData.ready(function(){var isFeatureChart=false;self._lastData.measurements().every(function(m){isFeatureChart=m.type()!==epiviz.measurements.Measurement.Type.RANGE;return!isFeatureChart});if(isFeatureChart){var groupByMarker;self._markers.every(function(marker){if(marker&&
marker.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.GROUP_BY_MEASUREMENTS)groupByMarker=marker;return!groupByMarker});if(groupByMarker){var aggregator=epiviz.ui.charts.markers.MeasurementAggregators[self.customSettingsValues()[epiviz.ui.charts.ChartType.CustomSettings.MEASUREMENT_GROUPS_AGGREGATOR]];self._lastData=new epiviz.datatypes.MeasurementAggregatedGenomicData(self._lastData,groupByMarker,aggregator)}}var filter;self._markers.every(function(marker){if(marker&&marker.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.FILTER)filter=
marker;return!filter});if(filter)self._lastData=new epiviz.datatypes.ItemFilteredGenomicData(self._lastData,filter);var order;self._markers.every(function(marker){if(marker&&marker.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.ORDER_BY_MEASUREMENTS)order=marker;return!order});if(order)self._lastData=new epiviz.datatypes.MeasurementOrderedGenomicData(self._lastData,order);self._lastData.ready(function(){var data=self._lastData;if(data.isReady()){var deferredColorByMeasurements=new epiviz.deferred.Deferred;
var colorByMeasurements;self._markers.every(function(marker){if(marker&&marker.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.COLOR_BY_MEASUREMENTS)colorByMeasurements=marker;return!colorByMeasurements});self._measurementColorLabels=null;if(colorByMeasurements){var measurementColorLabels=new epiviz.measurements.MeasurementHashtable;colorByMeasurements.preMark()(data).done(function(preColorVars){var measurements=data.measurements();epiviz.utils.deferredFor(measurements.length,function(j){var mDeferredIteration=
new epiviz.deferred.Deferred;colorByMeasurements.mark()(measurements[j],data,preColorVars).done(function(label){measurementColorLabels.put(measurements[j],label);mDeferredIteration.resolve()});return mDeferredIteration}).done(function(){self._measurementColorLabels=measurementColorLabels;deferredColorByMeasurements.resolve()})})}else deferredColorByMeasurements.resolve();var deferredColorByGlobalIndices=new epiviz.deferred.Deferred;var colorByGlobalIndices;self._markers.every(function(marker){if(marker&&
marker.type()==epiviz.ui.charts.markers.VisualizationMarker.Type.COLOR_BY_ROW)colorByGlobalIndices=marker;return!colorByGlobalIndices});self._globalIndexColorLabels=null;if(colorByGlobalIndices){var globalIndexColorLabels={};colorByGlobalIndices.preMark()(data).done(function(preColorVars){var firstSeries=data.firstSeries();epiviz.utils.deferredFor(firstSeries.size(),function(j){var seriesDeferredIteration=new epiviz.deferred.Deferred;colorByGlobalIndices.mark()(firstSeries.getRow(j),data,preColorVars).done(function(label){globalIndexColorLabels[j+
firstSeries.globalStartIndex()]=label;seriesDeferredIteration.resolve()});return seriesDeferredIteration}).done(function(){self._globalIndexColorLabels=globalIndexColorLabels;deferredColorByGlobalIndices.resolve()})})}else deferredColorByGlobalIndices.resolve();deferredColorByMeasurements.done(function(){if(deferredColorByGlobalIndices.state()==epiviz.deferred.Deferred.State.RESOLVED){self._dataWaitEnd.notify(new epiviz.ui.charts.VisEventArgs(self.id()));deferred.resolve()}});deferredColorByGlobalIndices.done(function(){if(deferredColorByMeasurements.state()==
epiviz.deferred.Deferred.State.RESOLVED){self._dataWaitEnd.notify(new epiviz.ui.charts.VisEventArgs(self.id()));deferred.resolve()}})}})})});return deferred};epiviz.ui.charts.Chart.prototype.properties=function(){return epiviz.ui.charts.Visualization.prototype.properties.call(this)};goog.provide("epiviz.ui.charts.VisObject");goog.require("epiviz.utils");epiviz.ui.charts.VisObject=function(){};epiviz.ui.charts.VisObject.prototype.regionStart=function(){return null};epiviz.ui.charts.VisObject.prototype.regionEnd=function(){return null};epiviz.ui.charts.VisObject.prototype.regionSeqName=function(){return null};epiviz.ui.charts.VisObject.prototype.getMetadata=function(i,j,metadataCol){return null};epiviz.ui.charts.VisObject.prototype.getSeqName=function(i,j){return null};
epiviz.ui.charts.VisObject.prototype.getStart=function(i,j){return null};epiviz.ui.charts.VisObject.prototype.getEnd=function(i,j){return null};epiviz.ui.charts.VisObject.prototype.metadataColumns=function(){return null};epiviz.ui.charts.VisObject.prototype.dimensions=function(){return[0,0]};epiviz.ui.charts.VisObject.prototype.metadataLooseCompare=function(){return false};
epiviz.ui.charts.VisObject.prototype.overlapsWith=function(other){if(!other)return false;if(this===other)return true;var i,j,k;if(this.regionSeqName()!=other.regionSeqName())return false;var thisDim=this.dimensions();var otherDim=other.dimensions();if((!thisDim[0]||!otherDim[0])&&(this.regionStart()==undefined||other.regionStart()==undefined||this.regionEnd()==undefined||other.regionEnd()==undefined))return false;if(!thisDim[0]){if(!otherDim[0])return this.regionStart()<other.regionEnd()&&this.regionEnd()>
other.regionStart();for(j=0;j<otherDim[1];++j){var otherRowStart=other.getStart(0,j);var otherRowEnd=other.getEnd(0,j);if(otherRowStart!=undefined&&otherRowEnd!=undefined&&this.regionStart()<otherRowEnd&&this.regionEnd()>otherRowStart)return true}return false}var commonMetadata=epiviz.utils.arrayIntersection(this.metadataColumns(),other.metadataColumns());if(commonMetadata.length){for(i=0;i<thisDim[1];++i)for(j=0;j<otherDim[1];++j){var metadataMatches=true;for(k=0;k<commonMetadata.length;++k){var useLooseCompare=
this.metadataLooseCompare()||other.metadataLooseCompare();var thisM=this.getMetadata(0,i,commonMetadata[k]);var otherM=other.getMetadata(0,j,commonMetadata[k]);if(thisM==otherM)continue;if(!useLooseCompare){metadataMatches=false;break}var first,second;if(thisM.length<=otherM.length){first=thisM;second=otherM}else{first=otherM;second=thisM}var r=new RegExp("^(.+,)?"+first+"(,.+)?$");if(!r.test(second)){metadataMatches=false;break}}if(metadataMatches)return true}return false}for(i=0;i<thisDim[1];++i)for(j=
0;j<otherDim[1];++j)if(this.getStart(0,i)<other.getEnd(0,j)&&this.getEnd(0,i)>other.getStart(0,j))return true;return false};goog.provide("epiviz.ui.charts.ChartObject");goog.require("epiviz.ui.charts.VisObject");epiviz.ui.charts.ChartObject=function(id,start,end,values,seriesIndex,valueItems,measurements,cssClasses,seqName){epiviz.ui.charts.VisObject.call(this);this.id=id;this.seqName=seqName;this.start=start;this.end=end;this.values=values;this.seriesIndex=seriesIndex;this.valueItems=valueItems;this.measurements=measurements;this.cssClasses=cssClasses};epiviz.ui.charts.ChartObject.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.VisObject.prototype);
epiviz.ui.charts.ChartObject.constructor=epiviz.ui.charts.ChartObject;epiviz.ui.charts.ChartObject.prototype.regionStart=function(){return this.start};epiviz.ui.charts.ChartObject.prototype.regionEnd=function(){return this.end};epiviz.ui.charts.ChartObject.prototype.regionSeqName=function(){return this.seqName};epiviz.ui.charts.ChartObject.prototype.getMetadata=function(i,j,metadataCol){if(this.valueItems)return this.valueItems[i][j].rowItem.metadata(metadataCol);return null};
epiviz.ui.charts.ChartObject.prototype.getStart=function(i,j){return this.valueItems[i][j].rowItem.start()};epiviz.ui.charts.ChartObject.prototype.getSeqName=function(i,j){return this.seqName|this.valueItems[i][j].rowItem.seqName()};epiviz.ui.charts.ChartObject.prototype.getEnd=function(i,j){return this.valueItems[i][j].rowItem.end()};epiviz.ui.charts.ChartObject.prototype.metadataColumns=function(){return Object.keys(this.valueItems[0][0].rowItem.rowMetadata())};
epiviz.ui.charts.ChartObject.prototype.dimensions=function(){var ret=[];if(this.valueItems){ret.push(this.valueItems.length);if(this.valueItems.length)ret.push(this.valueItems[0].length);else ret.push(0);return ret}return[0,0]};goog.provide("epiviz.ui.charts.Track");goog.require("epiviz.ui.charts.Chart");goog.require("epiviz.ui.charts.VisualizationType");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.ui.charts.Axis");epiviz.ui.charts.Track=function(id,container,properties){epiviz.ui.charts.Chart.call(this,id,container,properties);this._background=null;this._highlightGroup=null;this._propagateNavigationChanges=new epiviz.events.Event};
epiviz.ui.charts.Track.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Chart.prototype);epiviz.ui.charts.Track.constructor=epiviz.ui.charts.Track;
epiviz.ui.charts.Track.prototype._initialize=function(){this._properties.width="100%";epiviz.ui.charts.Chart.prototype._initialize.call(this);var self=this;this._highlightGroup=this._svg.append("g").attr("class","track-highlight");this._background=this._svg.append("rect").attr("class","chart-background").attr("x",0).attr("y",0).attr("width","100%").attr("height","100%").attr("fill","#ffffff").attr("fill-opacity","0");this._background.on("mouseover",function(){self._captureMouseHover()}).on("mousemove",
function(){self._captureMouseHover()}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))})};epiviz.ui.charts.Track.prototype.draw=function(range,data,slide,zoom){var result=epiviz.ui.charts.Chart.prototype.draw.call(this,range,data);this._drawLegend();return result};epiviz.ui.charts.Track.prototype.displayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.TRACK};
epiviz.ui.charts.Track.prototype.doHover=function(selectedObject){epiviz.ui.charts.Chart.prototype.doHover.call(this,selectedObject);if(selectedObject.start==undefined||selectedObject.end==undefined)return;if(!this._lastRange)return;this._highlightGroup.selectAll("rect").remove();this._highlightGroup.attr("transform","translate("+this.margins().left()+", "+0+")");var Axis=epiviz.ui.charts.Axis;var xScale=d3.scale.linear().domain([this._lastRange.start(),this._lastRange.end()]).range([0,this.width()-
this.margins().sumAxis(Axis.X)]);var items=[];if(!selectedObject.measurements||!selectedObject.measurements.length)items.push({start:selectedObject.start,end:selectedObject.end});else for(var i=0;i<selectedObject.valueItems[0].length;++i){var rowItem=selectedObject.valueItems[0][i].rowItem;items.push({start:rowItem.start(),end:rowItem.end()})}var minHighlightSize=5;this._highlightGroup.selectAll("rect").data(items,function(d){return sprintf("%s-%s",d.start,d.end)}).enter().append("rect").style("fill",
this.colors().get(0)).style("fill-opacity","0.1").attr("x",function(d){var defaultWidth=xScale(d.end+1)-xScale(d.start);var width=Math.max(minHighlightSize,defaultWidth);return xScale(d.start)+defaultWidth*.5-width*.5}).attr("width",function(d){return Math.max(minHighlightSize,xScale(d.end+1)-xScale(d.start))}).attr("y",0).attr("height",this.height())};epiviz.ui.charts.Track.prototype.doUnhover=function(){epiviz.ui.charts.Chart.prototype.doUnhover.call(this);this._highlightGroup.selectAll("rect").remove()};
epiviz.ui.charts.Track.prototype._captureMouseHover=function(){if(!this._lastRange)return;this._unhover.notify(new epiviz.ui.charts.VisEventArgs(this.id()));var inverseXScale=d3.scale.linear().domain([0,this.width()]).range([this._lastRange.start(),this._lastRange.end()]);var start=inverseXScale(d3.mouse(this._background[0][0])[0])-this._binSize/2;var end=start+this._binSize;var seqName=this._lastRange.seqName();var selectedObject=new epiviz.ui.charts.ChartObject(sprintf("%s-highlight",this.id()),
start,end,null,null,null,null,null,seqName);this._hover.notify(new epiviz.ui.charts.VisEventArgs(this.id(),selectedObject))};
epiviz.ui.charts.Track.prototype._drawLegend=function(){var self=this;this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();if(!this._lastData||!this._lastData.isReady())return;var title="";var measurements=this._lastData.measurements();var titleEntries=this._svg.selectAll(".chart-title").data(measurements).enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("fill",function(m,i){if(!self._measurementColorLabels)return self.colors().get(i);
return self.colors().getByKey(self._measurementColorLabels.get(m))}).attr("y",self.margins().top()-5).text(function(m,i){return m.name()});var textLength=0;var titleEntriesStartPosition=[];this._container.find(" .chart-title").each(function(i){titleEntriesStartPosition.push(textLength);textLength+=this.getBBox().width+15});titleEntries.attr("x",function(column,i){return self.margins().left()+10+titleEntriesStartPosition[i]});var colorEntries=this._svg.selectAll(".chart-title-color").data(measurements).enter().append("circle").attr("class",
"chart-title-color").attr("cx",function(column,i){return self.margins().left()+4+titleEntriesStartPosition[i]}).attr("cy",self.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(m,i){if(!self._measurementColorLabels)return self.colors().get(i);return self.colors().getByKey(self._measurementColorLabels.get(m))})};goog.provide("epiviz.plugins.charts.BlocksTrack");goog.require("epiviz.ui.charts.Track");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.BlocksTrack=function(id,container,properties){epiviz.ui.charts.Track.call(this,id,container,properties);this._initialize()};epiviz.plugins.charts.BlocksTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);
epiviz.plugins.charts.BlocksTrack.constructor=epiviz.plugins.charts.BlocksTrack;epiviz.plugins.charts.BlocksTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this);this._svg.classed("blocks-track",true)};
epiviz.plugins.charts.BlocksTrack.prototype.draw=function(range,data,slide,zoom){epiviz.ui.charts.Track.prototype.draw.call(this,range,data,slide,zoom);data=this._lastData;range=this._lastRange;if(!data||!range||!data.isReady())return[];return this._drawBlocks(range,data,slide||0,zoom||1)};
epiviz.plugins.charts.BlocksTrack.prototype._drawBlocks=function(range,data,slide,zoom){var Axis=epiviz.ui.charts.Axis;var start=range.start();var end=range.end();var width=this.width();var height=this.height();var margins=this.margins();var measurements=this.measurements();var colors=this.colors();var minBlockDistance=this.customSettingsValues()[epiviz.plugins.charts.BlocksTrackType.CustomSettings.MIN_BLOCK_DISTANCE];var colorLabel=this.customSettingsValues()[epiviz.plugins.charts.BlocksTrackType.CustomSettings.BLOCK_COLOR_BY];
var useColorBy=this.customSettingsValues()[epiviz.plugins.charts.BlocksTrackType.CustomSettings.USE_COLOR_BY];var colorBy=function(row){if(data.measurements().length>1)return colors.get(row.seriesIndex);return useColorBy?colors.getByKey(row.values):colors.get(row.seriesIndex)};var xScale=d3.scale.linear().domain([start,end]).range([0,width-margins.sumAxis(Axis.X)]);var delta=slide*(width-margins.sumAxis(Axis.X))/(end-start);this._clearAxes();this._drawAxes(xScale,null,10,5);var self=this;var blocks=
[];var i=0;data.foreach(function(m,series,seriesIndex){var seriesBlocks=[];for(var j=0;j<series.size();++j){var cell=series.get(j);if(cell.rowItem.start()>range.end()||cell.rowItem.end()<range.start())continue;var classes=sprintf("item data-series-%s",i);if(minBlockDistance!==null&&seriesBlocks.length>0){var lastBlock=seriesBlocks[seriesBlocks.length-1];var start=xScale(cell.rowItem.start());var lastEnd=xScale(lastBlock.end);if(start-lastEnd<minBlockDistance){lastBlock.end=Math.max(lastBlock.end,
cell.rowItem.end());lastBlock.valueItems[0].push(cell);lastBlock.id=sprintf("b-%s-%s-%s",i,lastBlock.start,lastBlock.end);continue}}seriesBlocks.push(new epiviz.ui.charts.ChartObject(sprintf("b-%s-%s-%s",i,cell.rowItem.start(),cell.rowItem.end()),cell.rowItem.start(),cell.rowItem.end(),cell.rowItem.metadata(colorLabel),i,[[cell]],[m],classes,cell.rowItem.seqName()))}blocks=blocks.concat(seriesBlocks);++i});var items=this._svg.select(".items");var selected=items.select(".selected");var clipPath=this._svg.select("#clip-"+
this.id());if(items.empty()){if(clipPath.empty())this._svg.select("defs").append("clipPath").attr("id","clip-"+this.id()).append("rect").attr("class","clip-path-rect");items=this._svg.append("g").attr("class","items").attr("id",this.id()+"-gene-content").attr("clip-path","url(#clip-"+this.id()+")");selected=items.append("g").attr("class","selected");items.append("g").attr("class","hovered");selected.append("g").attr("class","hovered")}items.attr("transform","translate("+margins.left()+", "+margins.top()+
")");this._svg.select(".clip-path-rect").attr("x",0).attr("y",0).attr("width",width-margins.sumAxis(Axis.X)).attr("height",height-margins.sumAxis(Axis.Y));items.selectAll(".item").remove();var selection=items.selectAll(".item").data(blocks,function(b){return b.id});selection.enter().insert("rect",":first-child").attr("class",function(b){return b.cssClasses}).style("fill",function(b){return colorBy(b)}).attr("x",function(b){return xScale(b.start)/zoom+delta}).attr("width",function(b){return zoom*(xScale(b.end+
1)-xScale(b.start))}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))}).on("mouseover",function(b){self._hover.notify(new epiviz.ui.charts.VisEventArgs(self.id(),b))}).on("click",function(b){self._deselect.notify(new epiviz.ui.charts.VisEventArgs(self.id()));self._select.notify(new epiviz.ui.charts.VisEventArgs(self.id(),b));d3.event.stopPropagation()});selection.attr("class",function(b){return b.cssClasses}).attr("height",height-margins.sumAxis(Axis.Y)).attr("y",
0).transition().duration(500).attr("x",function(b){return xScale(b.start)}).attr("width",function(b){return xScale(b.end+1)-xScale(b.start)});selection.exit().transition().duration(500).attr("x",function(b){return xScale(b.start)}).remove();return blocks};epiviz.plugins.charts.BlocksTrack.prototype.setColors=function(colors){this.container().find(".items").remove();epiviz.ui.charts.Visualization.prototype.setColors.call(this,colors)};goog.provide("epiviz.ui.charts.TrackType");goog.require("epiviz.ui.charts.ChartType");goog.require("epiviz.ui.charts.VisualizationType");epiviz.ui.charts.TrackType=function(config){epiviz.ui.charts.ChartType.call(this,config)};epiviz.ui.charts.TrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.ChartType.prototype);epiviz.ui.charts.TrackType.constructor=epiviz.ui.charts.TrackType;epiviz.ui.charts.TrackType.prototype.chartDisplayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.TRACK};
epiviz.ui.charts.TrackType.prototype.cssClass=function(){return"track-container ui-widget-content"};goog.provide("epiviz.plugins.charts.BlocksTrackType");goog.require("epiviz.plugins.charts.BlocksTrack");goog.require("epiviz.ui.charts.TrackType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");epiviz.plugins.charts.BlocksTrackType=function(config){epiviz.ui.charts.TrackType.call(this,config)};epiviz.plugins.charts.BlocksTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);
epiviz.plugins.charts.BlocksTrackType.constructor=epiviz.plugins.charts.BlocksTrackType;epiviz.plugins.charts.BlocksTrackType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.BlocksTrack(id,container,properties)};epiviz.plugins.charts.BlocksTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.BlocksTrack"};epiviz.plugins.charts.BlocksTrackType.prototype.chartName=function(){return"Blocks Track"};
epiviz.plugins.charts.BlocksTrackType.prototype.chartHtmlAttributeName=function(){return"blocks"};epiviz.plugins.charts.BlocksTrackType.prototype.isRestrictedToRangeMeasurements=function(){return true};epiviz.plugins.charts.BlocksTrackType.prototype.measurementsFilter=function(){return function(m){return m.type()==epiviz.measurements.Measurement.Type.RANGE}};
epiviz.plugins.charts.BlocksTrackType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.TrackType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.BlocksTrackType.CustomSettings.MIN_BLOCK_DISTANCE,epiviz.ui.charts.CustomSetting.Type.NUMBER,5,"Minimum block distance"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.BlocksTrackType.CustomSettings.USE_COLOR_BY,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,false,"Use Block Color by"),
new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.BlocksTrackType.CustomSettings.BLOCK_COLOR_BY,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Block color by")])};epiviz.plugins.charts.BlocksTrackType.CustomSettings={MIN_BLOCK_DISTANCE:"minBlockDistance",BLOCK_COLOR_BY:"blockColorBy",USE_COLOR_BY:"useColorBy"};goog.provide("epiviz.plugins.charts.StackedBlocksTrack");goog.require("epiviz.ui.charts.Track");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.StackedBlocksTrack=function(id,container,properties){epiviz.ui.charts.Track.call(this,id,container,properties);this._initialize()};epiviz.plugins.charts.StackedBlocksTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);
epiviz.plugins.charts.StackedBlocksTrack.constructor=epiviz.plugins.charts.StackedBlocksTrack;epiviz.plugins.charts.StackedBlocksTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this);this._svg.classed("blocks-track",true)};
epiviz.plugins.charts.StackedBlocksTrack.prototype.draw=function(range,data,slide,zoom){epiviz.ui.charts.Track.prototype.draw.call(this,range,data,slide,zoom);data=this._lastData;range=this._lastRange;if(!data||!range||!data.isReady())return[];return this._drawBlocks(range,data,slide||0,zoom||1)};
epiviz.plugins.charts.StackedBlocksTrack.prototype._drawBlocks=function(range,data,slide,zoom){var Axis=epiviz.ui.charts.Axis;var start=range.start();var end=range.end();var width=this.width();var height=this.height();var margins=this.margins();var measurements=this.measurements();var colors=this.colors();var minBlockDistance=this.customSettingsValues()[epiviz.plugins.charts.StackedBlocksTrackType.CustomSettings.MIN_BLOCK_DISTANCE];var colorLabel=this.customSettingsValues()[epiviz.plugins.charts.StackedBlocksTrackType.CustomSettings.BLOCK_COLOR_BY];
var useColorBy=this.customSettingsValues()[epiviz.plugins.charts.StackedBlocksTrackType.CustomSettings.USE_COLOR_BY];var colorBy=function(row){if(data.measurements().length>1)return colors.get(row.seriesIndex);return useColorBy?colors.getByKey(row.values):colors.get(row.seriesIndex)};var xScale=d3.scale.linear().domain([start,end]).range([0,width-margins.sumAxis(Axis.X)]);var delta=slide*(width-margins.sumAxis(Axis.X))/(end-start);this._clearAxes();this._drawAxes(xScale,null,10,5);var self=this;var blocks=
[];var i=0;data.foreach(function(m,series,seriesIndex){var seriesBlocks=[];for(var j=0;j<series.size();++j){var cell=series.get(j);if(cell.rowItem.start()>range.end()||cell.rowItem.end()<range.start())continue;var classes=sprintf("item data-series-%s",i);if(minBlockDistance!==null&&seriesBlocks.length>0){var lastBlock=seriesBlocks[seriesBlocks.length-1];var start=xScale(cell.rowItem.start());var lastEnd=xScale(lastBlock.end);if(start-lastEnd<minBlockDistance){lastBlock.end=Math.max(lastBlock.end,
cell.rowItem.end());lastBlock.valueItems[0].push(cell);lastBlock.id=sprintf("b-%s-%s-%s",i,lastBlock.start,lastBlock.end);continue}}seriesBlocks.push(new epiviz.ui.charts.ChartObject(sprintf("b-%s-%s-%s",i,cell.rowItem.start(),cell.rowItem.end()),cell.rowItem.start(),cell.rowItem.end(),cell.rowItem.metadata(colorLabel),i,[[cell]],[m],classes))}blocks=blocks.concat(seriesBlocks);++i});var items=this._svg.select(".items");var selected=items.select(".selected");var clipPath=this._svg.select("#clip-"+
this.id());if(items.empty()){if(clipPath.empty())this._svg.select("defs").append("clipPath").attr("id","clip-"+this.id()).append("rect").attr("class","clip-path-rect");items=this._svg.append("g").attr("class","items").attr("id",this.id()+"-gene-content").attr("clip-path","url(#clip-"+this.id()+")");selected=items.append("g").attr("class","selected");items.append("g").attr("class","hovered");selected.append("g").attr("class","hovered")}items.attr("transform","translate("+margins.left()+", "+margins.top()+
")");this._svg.select(".clip-path-rect").attr("x",0).attr("y",0).attr("width",width-margins.sumAxis(Axis.X)).attr("height",height-margins.sumAxis(Axis.Y));items.selectAll(".item").remove();var selection=items.selectAll(".item").data(blocks,function(b){return b.id});var seriesBlockHeight=(height-margins.sumAxis(Axis.Y))/i;selection.enter().insert("rect",":first-child").attr("class",function(b){return b.cssClasses}).style("fill",function(b){return colorBy(b)}).attr("x",function(b){return xScale(b.start)/
zoom+delta}).attr("y",function(b){return b.seriesIndex*seriesBlockHeight}).attr("width",function(b){return zoom*(xScale(b.end+1)-xScale(b.start))}).attr("height",function(b){return seriesBlockHeight}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))}).on("mouseover",function(b){self._hover.notify(new epiviz.ui.charts.VisEventArgs(self.id(),b))}).on("click",function(b){self._deselect.notify(new epiviz.ui.charts.VisEventArgs(self.id()));self._select.notify(new epiviz.ui.charts.VisEventArgs(self.id(),
b));d3.event.stopPropagation()});selection.attr("class",function(b){return b.cssClasses}).transition().duration(500).attr("x",function(b){return xScale(b.start)}).attr("y",function(b){return b.seriesIndex*seriesBlockHeight}).attr("width",function(b){return xScale(b.end+1)-xScale(b.start)}).attr("height",function(b){return seriesBlockHeight});selection.exit().transition().duration(500).attr("x",function(b){return xScale(b.start)}).attr("y",function(b){return b.seriesIndex*seriesBlockHeight}).attr("width",
function(b){return xScale(b.end+1)-xScale(b.start)}).attr("height",function(b){return seriesBlockHeight}).remove();return blocks};epiviz.plugins.charts.StackedBlocksTrack.prototype.setColors=function(colors){this.container().find(".items").remove();epiviz.ui.charts.Visualization.prototype.setColors.call(this,colors)};goog.provide("epiviz.plugins.charts.StackedBlocksTrackType");goog.require("epiviz.plugins.charts.StackedBlocksTrack");goog.require("epiviz.ui.charts.TrackType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");epiviz.plugins.charts.StackedBlocksTrackType=function(config){epiviz.ui.charts.TrackType.call(this,config)};epiviz.plugins.charts.StackedBlocksTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);
epiviz.plugins.charts.StackedBlocksTrackType.constructor=epiviz.plugins.charts.StackedBlocksTrackType;epiviz.plugins.charts.StackedBlocksTrackType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.StackedBlocksTrack(id,container,properties)};epiviz.plugins.charts.StackedBlocksTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.StackedBlocksTrack"};epiviz.plugins.charts.StackedBlocksTrackType.prototype.chartName=function(){return"Stacked Blocks Track"};
epiviz.plugins.charts.StackedBlocksTrackType.prototype.chartHtmlAttributeName=function(){return"stacked-blocks"};epiviz.plugins.charts.StackedBlocksTrackType.prototype.isRestrictedToRangeMeasurements=function(){return true};epiviz.plugins.charts.StackedBlocksTrackType.prototype.measurementsFilter=function(){return function(m){return m.type()==epiviz.measurements.Measurement.Type.RANGE}};
epiviz.plugins.charts.StackedBlocksTrackType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.TrackType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedBlocksTrackType.CustomSettings.MIN_BLOCK_DISTANCE,epiviz.ui.charts.CustomSetting.Type.NUMBER,5,"Minimum block distance"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedBlocksTrackType.CustomSettings.USE_COLOR_BY,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,
false,"Use Block Color by"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedBlocksTrackType.CustomSettings.BLOCK_COLOR_BY,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Block color by")])};epiviz.plugins.charts.StackedBlocksTrackType.CustomSettings={MIN_BLOCK_DISTANCE:"minBlockDistance",BLOCK_COLOR_BY:"blockColorBy",USE_COLOR_BY:"useColorBy"};goog.provide("epiviz.plugins.charts.LineTrack");goog.require("epiviz.ui.charts.Track");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.utils");goog.require("epiviz.datatypes.GenomicRange");goog.require("epiviz.ui.charts.CustomSetting");epiviz.plugins.charts.LineTrack=function(id,container,properties){epiviz.ui.charts.Track.call(this,id,container,properties);this._initialize()};
epiviz.plugins.charts.LineTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);epiviz.plugins.charts.LineTrack.constructor=epiviz.plugins.charts.LineTrack;epiviz.plugins.charts.LineTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this)};
epiviz.plugins.charts.LineTrack.prototype.draw=function(range,data,slide,zoom){epiviz.ui.charts.Track.prototype.draw.call(this,range,data,slide,zoom);data=this._lastData;range=this._lastRange;slide=slide||this._slide||0;zoom=zoom||this._zoom||1;this._slide=0;this._zoom=1;if(!data||!range)return[];var CustomSetting=epiviz.ui.charts.CustomSetting;var minY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN];var maxY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX];
if(minY==CustomSetting.DEFAULT){minY=null;this.measurements().foreach(function(m){if(m===null)return;if(minY===null||m.minValue()<minY)minY=m.minValue()})}if(maxY==CustomSetting.DEFAULT){maxY=null;this.measurements().foreach(function(m){if(m===null)return;if(maxY===null||m.maxValue()>maxY)maxY=m.maxValue()})}if(minY===null&&maxY===null){minY=-1;maxY=1}if(minY===null)minY=maxY-1;if(maxY===null)maxY=minY+1;var Axis=epiviz.ui.charts.Axis;var xScale=d3.scale.linear().domain([range.start(),range.end()]).range([0,
this.width()-this.margins().sumAxis(Axis.X)]);var yScale=d3.scale.linear().domain([minY,maxY]).range([this.height()-this.margins().sumAxis(Axis.Y),0]);this._clearAxes();this._drawAxes(xScale,yScale,10,5);var delta=slide*(this.width()-this.margins().sumAxis(Axis.X))/range.width();var linesGroup=this._svg.selectAll(".lines");if(linesGroup.empty())linesGroup=this._svg.append("g").attr("class","lines").attr("transform","translate("+this.margins().left()+", "+this.margins().top()+")");data.measurements().forEach(function(m,
i){var lineSeries=linesGroup.selectAll(".line-series-index-"+i);var pointSeries=linesGroup.selectAll(".point-series-index-"+i);if(lineSeries.empty())linesGroup.append("g").attr("class","line-series-index-"+i);if(pointSeries.empty())linesGroup.append("g").attr("class","point-series-index-"+i)});for(var i=data.measurements().length;;++i){var lineSeries=linesGroup.selectAll(".line-series-index-"+i);var pointSeries=linesGroup.selectAll(".point-series-index-"+i);if(lineSeries.empty())break;lineSeries.remove();
pointSeries.remove()}return this._drawLines(range,data,delta,zoom,xScale,yScale)};
epiviz.plugins.charts.LineTrack.prototype._drawLines=function(range,data,delta,zoom,xScale,yScale){var colors=this.colors();var step=parseInt(this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.STEP]);var showPoints=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_POINTS];var showLines=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_LINES];var showErrorBars=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_ERROR_BARS];
var pointRadius=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.POINT_RADIUS];var lineThickness=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.LINE_THICKNESS];var interpolation=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.INTERPOLATION];var absLine=this.customSettingsValues()[epiviz.plugins.charts.LineTrackType.CustomSettings.ABS_LINE_VAL];var self=this;var invXScale=d3.scale.linear().domain([0,this.width()-
this.margins().sumAxis(epiviz.ui.charts.Axis.X)]).range([range.start(),range.end()]);var deltaInBp=invXScale(delta)-range.start();var extendedRange=epiviz.datatypes.GenomicRange.fromStartEnd(range.seqName(),Math.min(range.start(),range.start()+deltaInBp),Math.max(range.end(),range.end()+deltaInBp),range.genome());var graph=this._svg.select(".lines");var items=[];data.foreach(function(m,series,i){var color=self._measurementColorLabels?colors.getByKey(self._measurementColorLabels.get(m)):colors.get(i);
var drawBoundaries=series.binarySearchStarts(extendedRange);if(drawBoundaries.length==0)return;var index=Math.ceil(drawBoundaries.index/step)*step;drawBoundaries.length=Math.max(0,drawBoundaries.length-index+drawBoundaries.index);drawBoundaries.index=index;var indices=epiviz.utils.range(drawBoundaries.length,drawBoundaries.index).filter(function(i){return!step||step<=1||(i-drawBoundaries.index)%step==0});for(var k=0;k<indices.length;++k){var cell=series.get(indices[k]);items.push(new epiviz.ui.charts.ChartObject(sprintf("line_%s_%s",
i,cell.globalIndex),cell.rowItem.start(),cell.rowItem.end(),[cell.value],i,[[cell]],[m],sprintf("item data-series-%s",i),cell.rowItem.seqName()))}var x=function(j){var cell=series.get(j);return xScale(cell.rowItem.start())};var y=function(j){var cell=series.get(j);return yScale(cell.value)};var errMinus=function(j){var cell=series.get(j);var v=cell.valueAnnotation?cell.valueAnnotation["errMinus"]:null;return v!=undefined?yScale(v):null};var errPlus=function(j){var cell=series.get(j);var v=cell.valueAnnotation?
cell.valueAnnotation["errPlus"]:null;return v!=undefined?yScale(v):null};if(showLines){var line=d3.svg.line().x(x).y(y).interpolate(interpolation);var lines=graph.select(".line-series-index-"+i).selectAll("path").data([indices]);lines.enter().append("path").attr("d",line).style("shape-rendering","auto").style("stroke-opacity","0.8").on("mouseover",function(){self._captureMouseHover()}).on("mousemove",function(){self._captureMouseHover()}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))});
lines.attr("d",line).style("stroke",color).style("stroke-width",lineThickness).attr("transform","translate("+ +delta+")").transition().duration(500).attr("transform","translate("+0+")")}else graph.select(".line-series-index-"+i).selectAll("path").remove();graph.select(".point-series-index-"+i).selectAll("circle").remove();graph.select(".point-series-index-"+i).selectAll(".error-bar").remove();if(showPoints){var points=graph.select(".point-series-index-"+i).selectAll("circle").data(indices);points.enter().append("circle").attr("class",
"point-series-index-"+i).attr("r",pointRadius).attr("cx",x).attr("cy",y).attr("fill",color).attr("stroke",color).attr("transform","translate("+ +delta+")").transition().duration(500).attr("transform","translate("+0+")");points.on("mouseover",function(){self._captureMouseHover()}).on("mousemove",function(){self._captureMouseHover()}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))});points.exit().transition().duration(500).style("opacity",0).remove();if(showErrorBars){var errorBars=
graph.select(".point-series-index-"+i).selectAll(".error-bar").data(indices);errorBars.enter().append("g").attr("class","error-bar").each(function(j){var m=errMinus(j),p=errPlus(j);if(m==null||p==null)return;d3.select(this).append("line").attr("x1",x(j)).attr("x2",x(j)).attr("y1",m).attr("y2",p).style("stroke",color).style("shape-rendering","auto");d3.select(this).append("line").attr("x1",x(j)-2).attr("x2",x(j)+2).attr("y1",m).attr("y2",m).style("stroke",color).style("shape-rendering","auto");d3.select(this).append("line").attr("x1",
x(j)-2).attr("x2",x(j)+2).attr("y1",p).attr("y2",p).style("stroke",color).style("shape-rendering","auto")}).attr("transform","translate("+ +delta+")").transition().duration(500).attr("transform","translate("+0+")");errorBars.on("mouseover",function(){self._captureMouseHover()}).on("mousemove",function(){self._captureMouseHover()}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))});errorBars.exit().transition().duration(500).style("opacity",0).remove()}}});
if(absLine!=epiviz.ui.charts.CustomSetting.DEFAULT){graph.selectAll(".abLine").remove();graph.append("svg:line").attr("class","abLine").attr("x1",0).attr("x2",self.width()-self.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y1",yScale(absLine)).attr("y2",yScale(absLine)).style("stroke","black").style("stroke-dasharray","5, 5")}return items};goog.provide("epiviz.plugins.charts.LineTrackType");goog.require("epiviz.plugins.charts.LineTrack");goog.require("epiviz.ui.charts.TrackType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.LineTrackType=function(config){epiviz.ui.charts.TrackType.call(this,config)};epiviz.plugins.charts.LineTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);
epiviz.plugins.charts.LineTrackType.constructor=epiviz.plugins.charts.LineTrackType;epiviz.plugins.charts.LineTrackType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.LineTrack(id,container,properties)};epiviz.plugins.charts.LineTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.LineTrack"};epiviz.plugins.charts.LineTrackType.prototype.chartName=function(){return"Line Track"};
epiviz.plugins.charts.LineTrackType.prototype.chartHtmlAttributeName=function(){return"lines"};epiviz.plugins.charts.LineTrackType.prototype.measurementsFilter=function(){return function(m){return m.type()==epiviz.measurements.Measurement.Type.FEATURE}};
epiviz.plugins.charts.LineTrackType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.TrackType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.STEP,epiviz.ui.charts.CustomSetting.Type.NUMBER,50,"Step"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_POINTS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,false,"Show points"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_LINES,
epiviz.ui.charts.CustomSetting.Type.BOOLEAN,true,"Show lines"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.SHOW_ERROR_BARS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,true,"Show error bars"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.POINT_RADIUS,epiviz.ui.charts.CustomSetting.Type.NUMBER,1,"Point radius"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.LINE_THICKNESS,epiviz.ui.charts.CustomSetting.Type.NUMBER,
1,"Line thickness"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max Y"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.INTERPOLATION,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,
"linear","Interpolation",["linear","step-before","step-after","basis","basis-open","basis-closed","bundle","cardinal","cardinal-open","monotone"]),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LineTrackType.CustomSettings.ABS_LINE_VAL,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Draw abline")])};
epiviz.plugins.charts.LineTrackType.CustomSettings={STEP:"step",SHOW_POINTS:"showPoints",SHOW_ERROR_BARS:"showErrorBars",SHOW_LINES:"showLines",POINT_RADIUS:"pointRadius",LINE_THICKNESS:"lineThickness",INTERPOLATION:"interpolation",ABS_LINE_VAL:"abLine"};goog.provide("epiviz.plugins.charts.StackedLineTrack");goog.require("epiviz.ui.charts.Track");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.utils");goog.require("epiviz.datatypes.GenomicRange");epiviz.plugins.charts.StackedLineTrack=function(id,container,properties){epiviz.ui.charts.Track.call(this,id,container,properties);this._initialize()};epiviz.plugins.charts.StackedLineTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);
epiviz.plugins.charts.StackedLineTrack.constructor=epiviz.plugins.charts.StackedLineTrack;epiviz.plugins.charts.StackedLineTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this)};
epiviz.plugins.charts.StackedLineTrack.prototype.draw=function(range,data,slide,zoom){epiviz.ui.charts.Track.prototype.draw.call(this,range,data,slide,zoom);data=this._lastData;range=this._lastRange;slide=slide||this._slide;zoom=zoom||this._zoom;this._slide=0;this._zoom=1;if(!data||!range)return[];var Axis=epiviz.ui.charts.Axis;slide=slide||0;var delta=slide*(this.width()-this.margins().sumAxis(Axis.X))/range.width();return this._drawLines(range,data,delta,zoom||1)};
epiviz.plugins.charts.StackedLineTrack.prototype._drawLines=function(range,data,delta,zoom){var Axis=epiviz.ui.charts.Axis;var colors=this.colors();var step=this.customSettingsValues()[epiviz.plugins.charts.StackedLineTrackType.CustomSettings.STEP];var interpolation=this.customSettingsValues()[epiviz.plugins.charts.StackedLineTrackType.CustomSettings.INTERPOLATION];var offset=this.customSettingsValues()[epiviz.plugins.charts.StackedLineTrackType.CustomSettings.OFFSET];var absLine=this.customSettingsValues()[epiviz.plugins.charts.StackedLineTrackType.CustomSettings.ABS_LINE_VAL];
var self=this;var invXScale=d3.scale.linear().domain([0,this.width()-this.margins().sumAxis(Axis.X)]).range([range.start(),range.end()]);var deltaInBp=invXScale(delta)-range.start();var extendedRange=epiviz.datatypes.GenomicRange.fromStartEnd(range.seqName(),Math.min(range.start(),range.start()+deltaInBp),Math.max(range.end(),range.end()+deltaInBp));var items=[];var seriesAreas=[];var firstGlobalIndex=data.firstSeries().globalStartIndex();var lastGlobalIndex=data.firstSeries().globalEndIndex();data.foreach(function(measurement,
series){var firstIndex=series.globalStartIndex();var lastIndex=series.globalEndIndex();if(firstIndex>firstGlobalIndex)firstGlobalIndex=firstIndex;if(lastIndex<lastGlobalIndex)lastGlobalIndex=lastIndex});firstGlobalIndex=Math.ceil(firstGlobalIndex/step)*step;lastGlobalIndex=Math.floor(lastGlobalIndex/step)*step;var labels;data.foreach(function(m,series,i){var indices=epiviz.utils.range((lastGlobalIndex-firstGlobalIndex)/step).map(function(i){return i*step+firstGlobalIndex}).filter(function(globalIndex){return series.getByGlobalIndex(globalIndex)});
for(var k=0;k<indices.length;++k){var cell=series.getByGlobalIndex(indices[k]);items.push(new epiviz.ui.charts.ChartObject(sprintf("line_%s_%s",i,cell.globalIndex),cell.rowItem.start(),cell.rowItem.end(),[cell.value],i,[[cell]],[m],sprintf("item data-series-%s",i),cell.rowItem.seqName()))}var x=function(j){var cell=series.getByGlobalIndex(j);return cell.rowItem.start()};var y=function(j){var cell=series.getByGlobalIndex(j);return cell.value};var areas=[];indices.forEach(function(j){areas.push({x:x(j),
y:y(j)})});seriesAreas.push(areas);if(!labels){labels=[];indices.forEach(function(j){var cell=series.getByGlobalIndex(j);labels.push(cell.rowItem.metadata("bacteria"))})}});var xScale=d3.scale.linear().domain([range.start(),range.end()]).range([0,this.width()-this.margins().sumAxis(Axis.X)]);this._clearAxes();this._drawAxes(xScale,undefined,10);var graph=this._svg.select(".lines");if(graph.empty())graph=this._svg.append("g").attr("class","lines").attr("transform","translate("+this.margins().left()+
", "+this.margins().top()+")");var stack=d3.layout.stack().offset(offset);var layers=stack(seriesAreas);var yScale=d3.scale.linear().domain([Math.min(0,d3.min(layers,function(layer){return d3.min(layer,function(d){return d.y0+d.y})})),d3.max(layers,function(layer){return d3.max(layer,function(d){return d.y0+d.y})})]).range([this.height()-this.margins().sumAxis(Axis.Y),0]);var area=d3.svg.area().x(function(d){return xScale(d.x)}).y0(function(d){return yScale(d.y0)}).y1(function(d){return yScale(d.y0+
d.y)}).interpolate(interpolation);var lines=graph.selectAll("path").data(layers);lines.enter().append("path").attr("d",area).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(d,i){return colors.get(i)}).on("mouseover",function(){self._captureMouseHover()}).on("mousemove",function(){self._captureMouseHover()}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))});lines.attr("d",area).style("fill",function(d,i){return colors.get(i)}).attr("transform",
"translate("+ +delta+")").transition().duration(500).attr("transform","translate("+0+")");if(absLine!=epiviz.ui.charts.CustomSetting.DEFAULT){graph.selectAll(".abLine").remove();graph.append("svg:line").attr("class","abLine").attr("x1",0).attr("x2",self.width()-self.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y1",yScale(absLine)).attr("y2",yScale(absLine)).style("stroke","black").style("stroke-dasharray","5, 5")}return items};goog.provide("epiviz.plugins.charts.StackedLineTrackType");goog.require("epiviz.plugins.charts.StackedLineTrack");goog.require("epiviz.ui.charts.TrackType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.StackedLineTrackType=function(config){epiviz.ui.charts.TrackType.call(this,config)};epiviz.plugins.charts.StackedLineTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);
epiviz.plugins.charts.StackedLineTrackType.constructor=epiviz.plugins.charts.StackedLineTrackType;epiviz.plugins.charts.StackedLineTrackType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.StackedLineTrack(id,container,properties)};epiviz.plugins.charts.StackedLineTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.StackedLineTrack"};epiviz.plugins.charts.StackedLineTrackType.prototype.chartName=function(){return"Stacked Track"};
epiviz.plugins.charts.StackedLineTrackType.prototype.chartHtmlAttributeName=function(){return"stacked-lines"};epiviz.plugins.charts.StackedLineTrackType.prototype.measurementsFilter=function(){return function(m){return m.type()==epiviz.measurements.Measurement.Type.FEATURE}};epiviz.plugins.charts.StackedLineTrackType.prototype.isRestrictedToSameDatasourceGroup=function(){return true};
epiviz.plugins.charts.StackedLineTrackType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.TrackType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLineTrackType.CustomSettings.STEP,epiviz.ui.charts.CustomSetting.Type.NUMBER,1,"Step"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLineTrackType.CustomSettings.OFFSET,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"zero","Offset",["zero","wiggle"]),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLineTrackType.CustomSettings.INTERPOLATION,
epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"basis","Interpolation",["linear","step-before","step-after","basis","basis-open","basis-closed","bundle","cardinal","cardinal-open","monotone"]),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLineTrackType.CustomSettings.ABS_LINE_VAL,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Draw abline")])};
epiviz.plugins.charts.StackedLineTrackType.CustomSettings={STEP:"step",OFFSET:"offset",INTERPOLATION:"interpolation",ABS_LINE_VAL:"abLine"};goog.provide("epiviz.ui.charts.Plot");goog.require("epiviz.ui.charts.Chart");goog.require("epiviz.ui.charts.VisualizationType");epiviz.ui.charts.Plot=function(id,container,properties){epiviz.ui.charts.Chart.call(this,id,container,properties)};epiviz.ui.charts.Plot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Chart.prototype);epiviz.ui.charts.Plot.constructor=epiviz.ui.charts.Plot;epiviz.ui.charts.Plot.prototype.displayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.PLOT};goog.provide("epiviz.plugins.charts.ScatterPlot");goog.require("epiviz.ui.charts.Plot");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.utils");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.measurements.Measurement");
epiviz.plugins.charts.ScatterPlot=function(id,container,properties){epiviz.ui.charts.Plot.call(this,id,container,properties);this._chartContent=null;this._legend=null;this._measurementsX=[];this._measurementsY=[];var self=this;this.measurements().foreach(function(m,i){if(i%2==0)self._measurementsX.push(m);else self._measurementsY.push(m)});this._xLabel="";this._yLabel="";for(var i=0;i<Math.min(this._measurementsX.length,this._measurementsY.length);++i){if(i>0){this._xLabel+=", ";this._yLabel+=", "}this._xLabel+=
this._measurementsX[i].name();this._yLabel+=this._measurementsY[i].name()}this._colorLabels=[];this._initialize()};epiviz.plugins.charts.ScatterPlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.ScatterPlot.constructor=epiviz.plugins.charts.ScatterPlot;
epiviz.plugins.charts.ScatterPlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("scatter-plot",true);this._chartContent=this._svg.append("g").attr("class","chart-content");this._legend=this._svg.append("g").attr("class","chart-legend")};
epiviz.plugins.charts.ScatterPlot.prototype.draw=function(range,data){epiviz.ui.charts.Plot.prototype.draw.call(this,range,data);data=this._lastData;range=this._lastRange;if(!data||!range)return[];return this._drawCircles(range,data)};
epiviz.plugins.charts.ScatterPlot.prototype._drawCircles=function(range,data){var self=this;var Axis=epiviz.ui.charts.Axis;var circleRadius=Math.max(1,this.customSettingsValues()[epiviz.plugins.charts.ScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO]*Math.min(this.width(),this.height()));var gridSquareSize=Math.max(Math.floor(circleRadius),1);var nSeries=Math.min(this._measurementsX.length,this._measurementsY.length);var absLine=this.customSettingsValues()[epiviz.plugins.charts.ScatterPlotType.CustomSettings.ABS_LINE_VAL];
var firstGlobalIndex=data.firstSeries().globalStartIndex();var lastGlobalIndex=data.firstSeries().globalEndIndex();data.foreach(function(measurement,series){var firstIndex=series.globalStartIndex();var lastIndex=series.globalEndIndex();if(firstIndex>firstGlobalIndex)firstGlobalIndex=firstIndex;if(lastIndex<lastGlobalIndex)lastGlobalIndex=lastIndex});var nItems=lastGlobalIndex-firstGlobalIndex;var margins=this.margins();var width=this.width();var height=this.height();var CustomSetting=epiviz.ui.charts.CustomSetting;
var minY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN];var maxY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX];var minX=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MIN];var maxX=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MAX];if(minX==CustomSetting.DEFAULT)minX=this._measurementsX[0].minValue();if(minY==CustomSetting.DEFAULT)minY=this._measurementsY[0].minValue();if(maxX==
CustomSetting.DEFAULT)maxX=this._measurementsX[0].maxValue();if(maxY==CustomSetting.DEFAULT)maxY=this._measurementsY[0].maxValue();var dataHasGenomicLocation=epiviz.measurements.Measurement.Type.isOrdered(this._measurementsX[0].type());var xScale=d3.scale.linear().domain([minX,maxX]).range([0,width-margins.sumAxis(Axis.X)]);var yScale=d3.scale.linear().domain([minY,maxY]).range([height-margins.sumAxis(Axis.Y),0]);this._clearAxes(this._chartContent);this._drawAxes(xScale,yScale,15,15,this._chartContent);
var i,index;var indices=[];for(i=0;i<nItems;++i){index=i+firstGlobalIndex;var item=data.getSeries(this._measurementsX[0]).getRowByGlobalIndex(index);if(!item)continue;if(!dataHasGenomicLocation||(range.start()==undefined||range.end()==undefined)||item.start()<range.end()&&item.end()>range.start())for(var j=0;j<nSeries;++j)indices.push(j*nItems+i)}var grid={};var items=[];var maxGroupItems=1;for(i=0;i<indices.length;++i){index=indices[i]%nItems;var globalIndex=index+firstGlobalIndex;var seriesIndex=
Math.floor(indices[i]/nItems);var mX=self._measurementsX[seriesIndex];var mY=self._measurementsY[seriesIndex];var cellX=data.getSeries(mX).getByGlobalIndex(globalIndex);var cellY=data.getSeries(mY).getByGlobalIndex(globalIndex);if(!cellX||!cellY)continue;var classes=sprintf("item data-series-%s",seriesIndex);var x=xScale(cellX.value);var y=yScale(cellY.value);var gridX=Math.floor(x/gridSquareSize)*gridSquareSize;var gridY=Math.floor(y/gridSquareSize)*gridSquareSize;var uiObj=null;if(grid[gridY]&&
grid[gridY][gridX]){uiObj=grid[gridY][gridX];uiObj.id+="_"+cellX.globalIndex;uiObj.start=Math.min(uiObj.start,cellX.rowItem.start());uiObj.end=Math.max(uiObj.end,cellX.rowItem.end());uiObj.values[0]=(uiObj.values[0]*uiObj.valueItems[0].length+cellX.value)/(uiObj.valueItems[0].length+1);uiObj.values[1]=(uiObj.values[1]*uiObj.valueItems[1].length+cellY.value)/(uiObj.valueItems[1].length+1);uiObj.valueItems[0].push(cellX);uiObj.valueItems[1].push(cellY);if(uiObj.valueItems[0].length>maxGroupItems)maxGroupItems=
uiObj.valueItems[0].length;continue}uiObj=new epiviz.ui.charts.ChartObject(sprintf("scatter_%s_%s",seriesIndex,cellX.globalIndex),cellX.rowItem.start(),cellX.rowItem.end(),[cellX.value,cellY.value],seriesIndex,[[cellX],[cellY]],[mX,mY],classes,cellX.rowItem.seqName());if(!grid[gridY])grid[gridY]={};grid[gridY][gridX]=uiObj;items.push(uiObj)}var itemsGroup=this._chartContent.select(".items");if(itemsGroup.empty()){itemsGroup=this._chartContent.append("g").attr("class","items");var selectedGroup=itemsGroup.append("g").attr("class",
"selected");itemsGroup.append("g").attr("class","hovered");selectedGroup.append("g").attr("class","hovered")}var selection=itemsGroup.selectAll("circle").data(items,function(d){return d.id});selection.enter().insert("circle",":first-child").attr("id",function(d){return sprintf("%s-item-%s-%s",self.id(),d.seriesIndex,d.valueItems[0][0].globalIndex)}).style("opacity",0).style("fill-opacity",0).attr("r",0);selection.each(function(d){var circle=d3.select(this);var fill;if(!self._globalIndexColorLabels)fill=
self.colors().get(d.seriesIndex);else fill=self.colors().getByKey(self._globalIndexColorLabels[d.valueItems[0][0].globalIndex]);circle.attr("cx",margins.left()+(d.values[0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("cy",height-margins.bottom()-(d.values[1]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY)).attr("class",d.cssClasses).style("fill",fill)});selection.transition().duration(1E3).style("fill-opacity",function(d){return Math.max(.6,d.valueItems[0].length/maxGroupItems)}).style("opacity",
null).attr("r",circleRadius);selection.exit().transition().duration(1E3).style("opacity",0).attr("r",0).remove();selection.on("mouseover",function(d){self._hover.notify(new epiviz.ui.charts.VisEventArgs(self.id(),d))}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))}).on("click",function(d){self._deselect.notify(new epiviz.ui.charts.VisEventArgs(self.id()));self._select.notify(new epiviz.ui.charts.VisEventArgs(self.id(),d));d3.event.stopPropagation()});
if(this._globalIndexColorLabels){var colorLabelsMap={};for(j=firstGlobalIndex;j<lastGlobalIndex;++j)colorLabelsMap[this._globalIndexColorLabels[j]]=this._globalIndexColorLabels[j];this._colorLabels=Object.keys(colorLabelsMap);this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();var titleEntries=this._svg.selectAll(".chart-title").data(this._colorLabels);titleEntries.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",self.margins().top()-
5);titleEntries.attr("fill",function(label,i){return self.colors().getByKey(label)}).text(function(label){return label});var textLength=0;var titleEntriesStartPosition=[];this._container.find(" .chart-title").each(function(i){titleEntriesStartPosition.push(textLength);textLength+=this.getBBox().width+15});titleEntries.attr("x",function(column,i){return self.margins().left()+10+titleEntriesStartPosition[i]});var colorEntries=this._svg.selectAll(".chart-title-color").data(this._colorLabels).enter().append("circle").attr("class",
"chart-title-color").attr("cx",function(column,i){return self.margins().left()+4+titleEntriesStartPosition[i]}).attr("cy",self.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(label,i){return self.colors().getByKey(label)}).style("stroke-width",0)}else{var n=Math.min(this._measurementsX.length,this._measurementsY.length);var colors=new Array(n);for(j=0;j<n;++j)colors[j]=sprintf("%s vs %s",this._measurementsX[j].name(),this._measurementsY[j].name());
this._colorLabels=colors}if(absLine!=epiviz.ui.charts.CustomSetting.DEFAULT){itemsGroup.selectAll(".abLine").remove();itemsGroup.append("svg:line").attr("class","abLine").attr("x1",margins.left()+(minX-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("x2",margins.left()+(maxX-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y1",height-margins.bottom()-(absLine-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY)).attr("y2",height-margins.bottom()-(absLine-minY)*(height-margins.sumAxis(Axis.Y))/
(maxY-minY)).style("stroke","black").style("stroke-dasharray","5, 5")}return items};epiviz.plugins.charts.ScatterPlot.prototype.colorLabels=function(){return this._colorLabels};
epiviz.plugins.charts.ScatterPlot.prototype._drawAxes=function(xScale,yScale,xTicks,yTicks,svg,width,height,margins){epiviz.ui.charts.Plot.prototype._drawAxes.call(this,xScale,yScale,xTicks,yTicks,svg,width,height,margins);this._legend.selectAll("text").remove();var xMeasurements=this._measurementsX;var self=this;this._legend.selectAll(".x-measurement").remove();this._legend.selectAll(".x-measurement-color").remove();var xEntries=this._legend.selectAll(".x-measurement").data(xMeasurements).enter().append("text").attr("class",
"x-measurement").attr("font-weight","bold").attr("fill",function(m,i){return self._globalIndexColorLabels?"#000000":self.colors().get(i)}).attr("y",this.height()-this.margins().bottom()+35).text(function(m,i){return m.name()});var xTextLength=0;var xTitleEntriesStartPosition=[];this._container.find(" .x-measurement").each(function(i){xTitleEntriesStartPosition.push(xTextLength);xTextLength+=this.getBBox().width+15});xEntries.attr("x",function(column,i){return(self.width()-xTextLength)*.5+7+xTitleEntriesStartPosition[i]});
var xColorEntries=this._legend.selectAll(".x-measurement-color").data(xMeasurements).enter().append("circle").attr("class","x-measurement-color").attr("cx",function(column,i){return(self.width()-xTextLength)*.5+1+xTitleEntriesStartPosition[i]}).attr("cy",this.height()-this.margins().bottom()+31).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(m,i){return self._globalIndexColorLabels?"#ffffff":self.colors().get(i)});var yMeasurements=this._measurementsY;
this._legend.selectAll(".y-measurement").remove();this._legend.selectAll(".y-measurement-color").remove();var yEntries=this._legend.selectAll(".y-measurement").data(yMeasurements).enter().append("text").attr("class","y-measurement").attr("font-weight","bold").attr("fill",function(m,i){return self._globalIndexColorLabels?"#000000":self.colors().get(i)}).attr("y",this.margins().left()-35).attr("transform","rotate(-90)").text(function(m,i){return m.name()});var yTextLength=0;var yTitleEntriesStartPosition=
[];this._container.find(" .y-measurement").each(function(i){yTitleEntriesStartPosition.push(yTextLength);yTextLength+=this.getBBox().width+15});yEntries.attr("x",function(column,i){return-self.height()+(self.height()-yTextLength)*.5+12+self.margins().top()+yTitleEntriesStartPosition[i]});var yColorEntries=this._legend.selectAll(".y-measurement-color").data(yMeasurements).enter().append("circle").attr("class","y-measurement-color").attr("cx",function(column,i){return-self.height()+(self.height()-yTextLength)*
.5+6+self.margins().top()+yTitleEntriesStartPosition[i]}).attr("cy",this.margins().left()-39).attr("transform","rotate(-90)").attr("r",4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(m,i){return self._globalIndexColorLabels?"#ffffff":self.colors().get(i)})};goog.provide("epiviz.ui.charts.PlotType");goog.require("epiviz.ui.charts.ChartType");goog.require("epiviz.ui.charts.VisualizationType");epiviz.ui.charts.PlotType=function(config){epiviz.ui.charts.ChartType.call(this,config)};epiviz.ui.charts.PlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.ChartType.prototype);epiviz.ui.charts.PlotType.constructor=epiviz.ui.charts.PlotType;epiviz.ui.charts.PlotType.prototype.chartDisplayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.PLOT};
epiviz.ui.charts.PlotType.prototype.cssClass=function(){return"plot-container ui-widget-content"};goog.provide("epiviz.plugins.charts.ScatterPlotType");goog.require("epiviz.plugins.charts.ScatterPlot");goog.require("epiviz.ui.charts.PlotType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.ScatterPlotType=function(config){epiviz.ui.charts.PlotType.call(this,config)};epiviz.plugins.charts.ScatterPlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);
epiviz.plugins.charts.ScatterPlotType.constructor=epiviz.plugins.charts.ScatterPlotType;epiviz.plugins.charts.ScatterPlotType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.ScatterPlot(id,container,properties)};epiviz.plugins.charts.ScatterPlotType.prototype.typeName=function(){return"epiviz.plugins.charts.ScatterPlot"};epiviz.plugins.charts.ScatterPlotType.prototype.chartName=function(){return"Scatter Plot"};
epiviz.plugins.charts.ScatterPlotType.prototype.chartHtmlAttributeName=function(){return"scatter"};epiviz.plugins.charts.ScatterPlotType.prototype.measurementsFilter=function(){return function(m){return epiviz.measurements.Measurement.Type.hasValues(m.type())}};epiviz.plugins.charts.ScatterPlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return true};epiviz.plugins.charts.ScatterPlotType.prototype.minSelectedMeasurements=function(){return 2};
epiviz.plugins.charts.ScatterPlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.ScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO,epiviz.ui.charts.CustomSetting.Type.NUMBER,.015,"Circle radius ratio"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,
"Min X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,
"Max Y"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.ScatterPlotType.CustomSettings.ABS_LINE_VAL,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Draw abline")])};epiviz.plugins.charts.ScatterPlotType.CustomSettings={CIRCLE_RADIUS_RATIO:"circleRadiusRatio",ABS_LINE_VAL:"abLine"};goog.provide("epiviz.plugins.charts.GenesTrack");goog.require("epiviz.ui.charts.Track");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.utils");epiviz.plugins.charts.GenesTrack=function(id,container,properties){epiviz.ui.charts.Track.call(this,id,container,properties);this._initialize()};epiviz.plugins.charts.GenesTrack.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Track.prototype);
epiviz.plugins.charts.GenesTrack.constructor=epiviz.plugins.charts.GenesTrack;epiviz.plugins.charts.GenesTrack.prototype._initialize=function(){epiviz.ui.charts.Track.prototype._initialize.call(this);this._svg.classed("genes-track",true)};
epiviz.plugins.charts.GenesTrack.prototype.draw=function(range,data,slide,zoom){epiviz.ui.charts.Track.prototype.draw.call(this,range,data,slide,zoom);data=this._lastData;range=this._lastRange;if(!data||!range)return[];slide=slide||this._slide;zoom=zoom||this._zoom;this._slide=0;this._zoom=1;return this._drawGenes(range,data,slide||0,zoom||1)};
epiviz.plugins.charts.GenesTrack.prototype._drawGenes=function(range,data,slide,zoom){var Axis=epiviz.ui.charts.Axis;var start=range.start();var end=range.end();var width=this.width();var height=this.height();var margins=this.margins();var xScale=d3.scale.linear().domain([start,end]).range([0,width-margins.sumAxis(Axis.X)]);var delta=slide*(width-margins.sumAxis(Axis.X))/(end-start);this._clearAxes();this._drawAxes(xScale,null,10,5);var self=this;var series=data.firstSeries();var indices=epiviz.utils.range(series.size());
var dataItems=indices.map(function(i){var cell=series.get(i);var item=cell.rowItem;var classes=sprintf("item gene-%s",item.metadata("gene"));return new epiviz.ui.charts.ChartObject(item.metadata("gene"),item.start(),item.end(),null,0,[[cell]],[series.measurement()],classes,item.seqName())});if(zoom){this._svg.select(".items").remove();this._svg.select("defs").select("#clip-"+this.id()).remove()}var items=this._svg.select(".items");var selected=items.select(".selected");if(items.empty()){var defs=
this._svg.select("defs");defs.append("clipPath").attr("id","clip-"+this.id()).append("rect").attr("x",0).attr("y",0).attr("width",width-margins.sumAxis(Axis.X)).attr("height",height-margins.sumAxis(Axis.Y));items=this._svg.append("g").attr("class","items").attr("transform","translate("+margins.left()+", "+margins.top()+")").attr("id",this.id()+"-gene-content").attr("clip-path","url(#clip-"+this.id()+")");selected=items.append("g").attr("class","selected");items.append("g").attr("class","hovered");
selected.append("g").attr("class","hovered")}var selection=items.selectAll(".item").data(dataItems,function(d){return d.id});selection.enter().insert("g",":first-child").on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))}).on("mouseover",function(d){self._hover.notify(new epiviz.ui.charts.VisEventArgs(self.id(),d))}).on("click",function(d){self._deselect.notify(new epiviz.ui.charts.VisEventArgs(self.id()));self._select.notify(new epiviz.ui.charts.VisEventArgs(self.id(),
d));d3.event.stopPropagation()}).attr("transform","translate("+delta+", 0) scale(1, 1)").each(function(d){self._drawGene(this,d,xScale)});var drag=d3.behavior.drag().on("drag",function(d){var movePercent=d3.event.dx;var newStart=Math.round(range.start()+movePercent/width*range.start());var newRange=new epiviz.datatypes.GenomicRange(range.seqName(),newStart,range.width(),range.genome());if(newRange)self._propagateNavigationChanges.notify({"id":self.id(),"range":newRange})});self._svg.call(drag);if(delta)selection.each(function(d){self._translateGene(this,
d,delta)});selection.exit().transition().duration(500).style("opacity",0).remove();return dataItems};
epiviz.plugins.charts.GenesTrack.prototype._translateGene=function(elem,d,delta){var gene=d3.select(elem);var transform=gene.attr("transform");var translateRx=new RegExp("translate\\([\\d\\.\\-]+[\\,\\s]+[\\d\\.\\-]+\\)","g");var numberRx=new RegExp("[\\d\\.\\-]+","g");var translate=transform.match(translateRx)[0];var x=parseFloat(translate.match(numberRx)[0]);transform=transform.replace(translateRx,"translate("+(x-delta)+", 0)");gene.transition().duration(500).attr("transform",transform)};
epiviz.plugins.charts.GenesTrack.prototype._drawGene=function(elem,d,xScale){var Axis=epiviz.ui.charts.Axis;var self=this;var rowItem=d.valueItems[0][0].rowItem;var geneStart=xScale(d.start);var geneEnd=xScale(d.end);var or=rowItem.strand()=="+"?1:-1;var offset=-or*(this.height()-this.margins().sumAxis(Axis.Y))*.25;var exonStarts=rowItem.metadata("exon_starts").split(",").map(function(s){return parseInt(s)});var exonEnds=rowItem.metadata("exon_ends").split(",").map(function(s){return parseInt(s)});
var exonCount=exonStarts.length;var exonIndices=d3.range(0,exonCount);var geneHeight=this.height()*.08;var exonHeight=this.height()*.16;var h=geneHeight*Math.sqrt(3)*.5;var gene=d3.select(elem);gene.attr("class",d.cssClasses);gene.append("polygon").attr("class","gene-body").style("fill",this.colors().get(0)).attr("points",function(){var xs=null,ys;var y0=(self.height()-self.margins().sumAxis(Axis.Y)-geneHeight)*.5+offset;ys=[y0,y0,y0+geneHeight*.5,y0+geneHeight,y0+geneHeight];if(rowItem.strand()==
"+")xs=[geneStart,geneEnd,geneEnd+h,geneEnd,geneStart];else xs=[geneEnd,geneStart,geneStart-h,geneStart,geneEnd];return sprintf("%s,%s %s,%s %s,%s %s,%s %s,%s",xs[0],ys[0],xs[1],ys[1],xs[2],ys[2],xs[3],ys[3],xs[4],ys[4])});var exons=gene.append("g").attr("class","exons").style("fill",this.colors().get(1));exons.selectAll("rect").data(exonIndices).enter().append("rect").attr("x",function(j){return xScale(exonStarts[j])}).attr("y",(self.height()-exonHeight-self.margins().sumAxis(Axis.Y))*.5+offset).attr("width",
function(j){return xScale(exonEnds[j])-xScale(exonStarts[j])}).attr("height",exonHeight);gene.append("text").attr("class","gene-name").attr("x",geneStart+2).attr("y",(self.height()-self.margins().sumAxis(Axis.Y))*.5+offset-or*(geneHeight+2)).style("dominant-baseline","central").text(d.id)};epiviz.plugins.charts.GenesTrack.prototype.colorLabels=function(){return["Genes","Exons"]};
epiviz.plugins.charts.GenesTrack.prototype._drawAxes=function(xScale,yScale,xTicks,yTicks,svg,width,height,margins){epiviz.ui.charts.Track.prototype._drawAxes.call(this,xScale,yScale,xTicks,yTicks,svg,width,height,margins);var Axis=epiviz.ui.charts.Axis;var axesGroup=this._svg.select(".axes");axesGroup.append("g").attr("class","xAxis").append("line").attr("x1",this.margins().left()).attr("x2",this.width()-this.margins().left()).attr("y1",this.margins().top()+(this.height()-this.margins().sumAxis(Axis.Y))*
.5).attr("y2",this.margins().top()+(this.height()-this.margins().sumAxis(Axis.Y))*.5).style("stroke","#555555").style("shape-rendering","crispEdges")};goog.provide("epiviz.plugins.charts.GenesTrackType");goog.require("epiviz.plugins.charts.GenesTrack");goog.require("epiviz.ui.charts.TrackType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");epiviz.plugins.charts.GenesTrackType=function(config){epiviz.ui.charts.TrackType.call(this,config)};epiviz.plugins.charts.GenesTrackType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.TrackType.prototype);epiviz.plugins.charts.GenesTrackType.constructor=epiviz.plugins.charts.GenesTrackType;
epiviz.plugins.charts.GenesTrackType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.GenesTrack(id,container,properties)};epiviz.plugins.charts.GenesTrackType.prototype.typeName=function(){return"epiviz.plugins.charts.GenesTrack"};epiviz.plugins.charts.GenesTrackType.prototype.chartName=function(){return"Genes Track"};epiviz.plugins.charts.GenesTrackType.prototype.chartHtmlAttributeName=function(){return"genes"};
epiviz.plugins.charts.GenesTrackType.prototype.isRestrictedToRangeMeasurements=function(){return true};epiviz.plugins.charts.GenesTrackType.prototype.measurementsFilter=function(){return function(m){return m.type()==epiviz.measurements.Measurement.Type.RANGE}};goog.provide("epiviz.ui.charts.transform.clustering.ClusterSubtree");epiviz.ui.charts.transform.clustering.ClusterSubtree=function(children,distance){this._children=children;this._weight=null;this._distance=distance;this._sorted=false};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.weight=function(){if(this._weight==undefined){var weight=0;for(var i=0;i<this._children.length;++i)weight+=this._children[i].weight();this._weight=weight}return this._weight};
epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.children=function(){return this._children};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.data=function(){var ret=[];for(var i=0;i<this._children.length;++i)ret=ret.concat(this._children[i].data());return ret};
epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.sort=function(recursive){if(this.sorted())return;this._children.sort(function(node1,node2){return node1.weight()-node2.weight()});if(recursive){for(var i=0;i<this._children.length;++i)this._children[i].sort(recursive);this._sorted=true}};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.copy=function(){var children=[];for(var i=0;i<this._children.length;++i)children.push(this._children[i].copy());return new epiviz.ui.charts.transform.clustering.ClusterSubtree(children)};
epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.distance=function(){return this._distance};epiviz.ui.charts.transform.clustering.ClusterSubtree.prototype.sorted=function(){return this._sorted};goog.provide("epiviz.ui.charts.transform.clustering.ClusterLeaf");epiviz.ui.charts.transform.clustering.ClusterLeaf=function(dataIndex){this._dataIndex=dataIndex};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.weight=function(){return 1};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.children=function(){return[]};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.data=function(){return[this._dataIndex]};
epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.sort=function(){};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.copy=function(){return new epiviz.ui.charts.transform.clustering.ClusterLeaf(this._dataIndex)};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.distance=function(){return 0};epiviz.ui.charts.transform.clustering.ClusterLeaf.prototype.sorted=function(){return true};goog.provide("epiviz.ui.charts.transform.clustering.ClusterTree");epiviz.ui.charts.transform.clustering.ClusterTree=function(root,data){this._root=root;this._data=data};epiviz.ui.charts.transform.clustering.ClusterTree.prototype.root=function(){return this._root};
epiviz.ui.charts.transform.clustering.ClusterTree.prototype.orderedData=function(){if(!this._root.sorted())this._root.sort(true);var orderedIndices=this._root.data();var orderedData=[];for(var i=0;i<orderedIndices.length;++i)orderedData.push(this._data[orderedIndices[i]]);return orderedData};goog.provide("epiviz.ui.charts.transform.clustering.NoneClustering");goog.require("epiviz.ui.charts.transform.clustering.ClusterSubtree");goog.require("epiviz.ui.charts.transform.clustering.ClusterLeaf");goog.require("epiviz.ui.charts.transform.clustering.ClusterTree");epiviz.ui.charts.transform.clustering.NoneClustering=function(){};
epiviz.ui.charts.transform.clustering.NoneClustering.prototype.cluster=function(data,metric,linkage){var nodes=[];for(var i=0;i<data.length;++i)nodes.push(new epiviz.ui.charts.transform.clustering.ClusterLeaf(i));var root=new epiviz.ui.charts.transform.clustering.ClusterSubtree(nodes,0);return new epiviz.ui.charts.transform.clustering.ClusterTree(root,data)};epiviz.ui.charts.transform.clustering.NoneClustering.prototype.id=function(){return"none"};goog.provide("epiviz.ui.charts.transform.clustering.AgglomerativeClustering");goog.require("epiviz.ui.charts.transform.clustering.ClusterSubtree");goog.require("epiviz.ui.charts.transform.clustering.ClusterLeaf");goog.require("epiviz.ui.charts.transform.clustering.ClusterTree");goog.require("epiviz.utils");epiviz.ui.charts.transform.clustering.AgglomerativeClustering=function(){};
epiviz.ui.charts.transform.clustering.AgglomerativeClustering.prototype.cluster=function(data,metric,linkage){var i,j;var distances=new Array(data.length);for(i=0;i<data.length;++i){distances[i]=new Array(data.length);for(j=i+1;j<data.length;++j)distances[i][j]=metric.distance(data[i],data[j])}var nodes=[];for(i=0;i<data.length;++i)nodes.push(new epiviz.ui.charts.transform.clustering.ClusterLeaf(i));while(nodes.length>1){var minInfo=epiviz.utils.indexOfMin(distances,true);var indices=minInfo.index;
var node=new epiviz.ui.charts.transform.clustering.ClusterSubtree([nodes[indices[0]],nodes[indices[1]]],minInfo.min);if(indices[0]<indices[1]){var aux=indices[0];indices[0]=indices[1];indices[1]=aux}nodes.splice(indices[0],1);nodes.splice(indices[1],1);nodes.push(node);distances=linkage.link(distances,indices)}return new epiviz.ui.charts.transform.clustering.ClusterTree(nodes[0],data)};epiviz.ui.charts.transform.clustering.AgglomerativeClustering.prototype.id=function(){return"agglomerative"};goog.provide("epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm");epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm=function(){};epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm.prototype.cluster=function(data,metric,linkage){};epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm.prototype.id=function(){};goog.provide("epiviz.ui.charts.transform.clustering.EuclideanMetric");epiviz.ui.charts.transform.clustering.EuclideanMetric=function(){};
epiviz.ui.charts.transform.clustering.EuclideanMetric.prototype.distance=function(item1,item2){if(item1==undefined||item2==undefined)return null;var len=item1.length;var nDimensions=0;var meanDimDif=0;var dist=0;var i;for(i=0;i<len;++i){if(item1[i]==undefined||item2[i]==undefined)continue;++nDimensions;var dif=item1[i]-item2[i];meanDimDif+=dif;dist+=dif*dif}if(nDimensions>0)meanDimDif/=nDimensions;dist+=(len-nDimensions)*meanDimDif*meanDimDif;return dist};
epiviz.ui.charts.transform.clustering.EuclideanMetric.prototype.id=function(){return"euclidean"};goog.provide("epiviz.ui.charts.transform.clustering.CompleteLinkage");epiviz.ui.charts.transform.clustering.CompleteLinkage=function(){};
epiviz.ui.charts.transform.clustering.CompleteLinkage.prototype.link=function(distances,indices){var ret=new Array(distances.length-1);if(indices[0]<indices[1]){var aux=indices[0];indices[0]=indices[1];indices[1]=aux}for(var i=0,j=0;i<distances.length;++i,++j){if(i==indices[0]||i==indices[1]){--j;continue}ret[j]=distances[i].slice(0);ret[j].splice(indices[0],1);ret[j].splice(indices[1],1);var vals=[i<indices[0]?distances[i][indices[0]]:distances[indices[0]][i],i<indices[1]?distances[i][indices[1]]:
distances[indices[1]][i]];ret[j].push(Math.max(vals[0],vals[1]))}ret[ret.length-1]=new Array(ret.length);return ret};epiviz.ui.charts.transform.clustering.CompleteLinkage.prototype.id=function(){return"complete"};goog.provide("epiviz.ui.charts.transform.clustering.ClusteringLinkage");epiviz.ui.charts.transform.clustering.ClusteringLinkage=function(){};epiviz.ui.charts.transform.clustering.ClusteringLinkage.prototype.link=function(distances,indices){};epiviz.ui.charts.transform.clustering.ClusteringLinkage.prototype.id=function(){};goog.provide("epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory");goog.require("epiviz.utils");goog.require("epiviz.ui.charts.transform.clustering.NoneClustering");goog.require("epiviz.ui.charts.transform.clustering.AgglomerativeClustering");goog.require("epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm");goog.require("epiviz.ui.charts.transform.clustering.EuclideanMetric");goog.require("epiviz.ui.charts.transform.clustering.CompleteLinkage");goog.require("epiviz.ui.charts.transform.clustering.ClusteringLinkage");
epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory=function(config){this._config=config;this._algorithms={};this._metrics={};this._linkages={};var i;for(i=0;i<config.clustering.algorithms.length;++i){var algorithmConstructor=epiviz.utils.evaluateFullyQualifiedTypeName(config.clustering.algorithms[i]);var algorithm=epiviz.utils.applyConstructor(algorithmConstructor);this._algorithms[algorithm.id()]=algorithm}for(i=0;i<config.clustering.metrics.length;++i){var metricConstructor=epiviz.utils.evaluateFullyQualifiedTypeName(config.clustering.metrics[i]);
var metric=epiviz.utils.applyConstructor(metricConstructor);this._metrics[metric.id()]=metric}for(i=0;i<config.clustering.linkages.length;++i){var linkageConstructor=epiviz.utils.evaluateFullyQualifiedTypeName(config.clustering.linkages[i]);var linkage=epiviz.utils.applyConstructor(linkageConstructor);this._linkages[linkage.id()]=linkage}};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory._instance=null;epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.instance=function(){return epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory._instance};
epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.initialize=function(config){epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory._instance=new epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory(config)};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.algorithm=function(id){return this._algorithms[id]};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.metric=function(id){return this._metrics[id]};
epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.linkage=function(id){return this._linkages[id]};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.algorithms=function(){return Object.keys(this._algorithms)};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.metrics=function(){return Object.keys(this._metrics)};epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.prototype.linkages=function(){return Object.keys(this._linkages)};goog.provide("epiviz.plugins.charts.HeatmapPlot");goog.require("epiviz.ui.charts.Plot");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.utils");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.measurements.Measurement");goog.require("epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory");goog.require("epiviz.measurements.MeasurementHashtable");goog.require("epiviz.datatypes.MapGenomicData");
epiviz.plugins.charts.HeatmapPlot=function(id,container,properties){epiviz.ui.charts.Plot.call(this,id,container,properties);this._chartContent=null;this._min=this.measurements().first().minValue();this._max=this.measurements().first().maxValue();this._colorScale=epiviz.utils.colorizeBinary(this._min,this._max,"#ffffff",this.colors().getByKey("Max"));this._colorLabels=[];this._dendrogramRatio=.1;this._initialize()};epiviz.plugins.charts.HeatmapPlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);
epiviz.plugins.charts.HeatmapPlot.constructor=epiviz.plugins.charts.HeatmapPlot;epiviz.plugins.charts.HeatmapPlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("heatmap-plot",true);this._chartContent=this._svg.append("g").attr("class","chart-content")};
epiviz.plugins.charts.HeatmapPlot.prototype.draw=function(range,data){epiviz.ui.charts.Plot.prototype.draw.call(this,range,data);data=this._lastData;range=this._lastRange;if(!data||!range)return[];var cluster=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTER];var pair=this._applyClustering(range,data);var orderedData=pair.data;var colOrder=pair.columnOrder;return this._drawCells(range,orderedData,colOrder)};
epiviz.plugins.charts.HeatmapPlot.prototype._applyClustering=function(range,data){var dataHasGenomicLocation=epiviz.measurements.Measurement.Type.isOrdered(this.measurements().first().type());var cluster=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTER];var showDendrogram=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_DENDROGRAM];var clusteringAlgFactory=epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.instance();
var clusterer=clusteringAlgFactory.algorithm(this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_ALG]);var metric=clusteringAlgFactory.metric(this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_METRIC]);var linkage=clusteringAlgFactory.linkage(this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_LINKAGE]);var maxColumns=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.MAX_COLUMNS];
var firstGlobalIndex=data.firstSeries().globalStartIndex();var lastGlobalIndex=data.firstSeries().size()+firstGlobalIndex;data.foreach(function(measurement,series){var firstIndex=series.globalStartIndex();var lastIndex=series.globalEndIndex();if(firstIndex>firstGlobalIndex)firstGlobalIndex=firstIndex;if(lastIndex<lastGlobalIndex)lastGlobalIndex=lastIndex});var nEntries=lastGlobalIndex-firstGlobalIndex;var clusterRows=cluster==epiviz.plugins.charts.HeatmapPlotType.Cluster.ROWS||cluster==epiviz.plugins.charts.HeatmapPlotType.Cluster.BOTH;
var clusterCols=cluster==epiviz.plugins.charts.HeatmapPlotType.Cluster.COLS||cluster==epiviz.plugins.charts.HeatmapPlotType.Cluster.BOTH;var dendrogramRatio=showDendrogram*this._dendrogramRatio;var dendrogramCols=showDendrogram&&clusterCols&&maxColumns>=nEntries;var population,dendrogram,indexOrder,top,left,height,width;var svg=this._svg;["dendrogram-horizontal","dendrogram-vertical"].forEach(function(dendClass){svg.select("."+dendClass).remove()});var orderedData=data;if(clusterRows){population=
[];data.foreach(function(measurement,series){var row=[];for(var j=0;j<nEntries;++j){var globalIndex=j+firstGlobalIndex;var item=series.getByGlobalIndex(globalIndex);var rowInfo=item.rowItem;if(!dataHasGenomicLocation||(range.start()==undefined||range.end()==undefined)||rowInfo.start()<range.end()&&rowInfo.end()>=range.start())row.push(item.value)}population.push(row)});dendrogram=clusterer.cluster(population,metric,linkage);indexOrder=dendrogram.root().data();var measurements=[];data.foreach(function(measurement){measurements.push(measurement)});
var orderedMs=[];var i;for(i=0;i<indexOrder.length;++i)orderedMs[i]=measurements[indexOrder[i]];var ordered=new epiviz.measurements.MeasurementHashtable;for(i=0;i<orderedMs.length;++i)ordered.put(orderedMs[i],data.getSeries(orderedMs[i]));orderedData=new epiviz.datatypes.MapGenomicData(ordered);if(dendrogramRatio){width=this.width()*dendrogramRatio;height=this.height()*(1-dendrogramRatio*dendrogramCols)-this.margins().sumAxis(epiviz.ui.charts.Axis.Y);top=this.margins().top();left=this.width()-width-
this.margins().right();this._drawDendrogram(dendrogram,top,left,height,width)}}indexOrder=null;if(clusterCols){population=[];data.foreach(function(measurement,series){for(var j=0,row=0;j<nEntries;++j){var globalIndex=j+firstGlobalIndex;var item=series.getByGlobalIndex(globalIndex);var rowInfo=item.rowItem;if(!dataHasGenomicLocation||(range.start()==undefined||range.end()==undefined)||rowInfo.start()<range.end()&&rowInfo.end()>=range.start()){if(population.length<=row)population.push([]);population[row].push(item.value);
++row}}});if(population.length==0)return{data:orderedData,columnOrder:[]};dendrogram=clusterer.cluster(population,metric,linkage);indexOrder=dendrogram.root().data();if(dendrogramCols){var rowLabelsAsColors=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_COLORS_FOR_ROW_LABELS];var rowLabelColorWidth=rowLabelsAsColors?20:0;left=this.margins().left();top=this.height()*(1-dendrogramRatio)-this.margins().bottom();width=this.height()*dendrogramRatio;height=this.width()*
(1-dendrogramRatio*clusterRows)-this.margins().left()-this.margins().right()-rowLabelColorWidth;this._drawDendrogram(dendrogram,top,left,height,width,true)}}return{data:orderedData,columnOrder:indexOrder}};
epiviz.plugins.charts.HeatmapPlot.prototype._drawCells=function(range,data,colOrder){var self=this;var Axis=epiviz.ui.charts.Axis;var maxColumns=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.MAX_COLUMNS];var firstGlobalIndex=data.firstSeries().globalStartIndex();var lastGlobalIndex=data.firstSeries().size()+firstGlobalIndex;var rows=[];var dataHasGenomicLocation=epiviz.measurements.Measurement.Type.isOrdered(this.measurements().first().type());data.foreach(function(measurement,
series){var firstIndex=series.globalStartIndex();var lastIndex=series.globalEndIndex();if(firstIndex>firstGlobalIndex)firstGlobalIndex=firstIndex;if(lastIndex<lastGlobalIndex)lastGlobalIndex=lastIndex;rows.push(measurement)});var nEntries=lastGlobalIndex-firstGlobalIndex;var colLabel=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL];var cluster=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTER];var clusterRows=cluster==epiviz.plugins.charts.HeatmapPlotType.Cluster.ROWS||
cluster==epiviz.plugins.charts.HeatmapPlotType.Cluster.BOTH;var clusterCols=(cluster==epiviz.plugins.charts.HeatmapPlotType.Cluster.COLS||cluster==epiviz.plugins.charts.HeatmapPlotType.Cluster.BOTH)&&maxColumns>=nEntries;var dendrogramRatio=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_DENDROGRAM]*this._dendrogramRatio;var rowLabelsAsColors=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_COLORS_FOR_ROW_LABELS];var rowLabelColorWidth=
rowLabelsAsColors?20:0;var width=this.width()*(1-dendrogramRatio*clusterRows)-rowLabelColorWidth;var height=this.height()*(1-dendrogramRatio*clusterCols);var globalIndices=[];var colnames=[];var i,globalIndex;for(i=0;i<nEntries;++i){globalIndex=i+firstGlobalIndex;var item;data.foreach(function(m,series){item=series.getRowByGlobalIndex(globalIndex);return item});if(!item)continue;if(!dataHasGenomicLocation||(range.start()==undefined||range.end()==undefined)||item.start()<range.end()&&item.end()>=range.start()){globalIndices.push(globalIndex);
var label=item.metadata(colLabel)||""+item.id();colnames.push(label)}}if(colOrder){var unorderedGlobalIndices=globalIndices;var unorderedColnames=colnames;globalIndices=new Array(globalIndices.length);colnames=new Array(colnames.length);for(i=0;i<globalIndices.length;++i){globalIndices[i]=unorderedGlobalIndices[colOrder[i]];colnames[i]=unorderedColnames[colOrder[i]]}}var items=[];var colIndex={};data.foreach(function(m,series,seriesIndex){var nextCellsPerCol=Math.ceil(colnames.length/maxColumns),
cellsPerCol=0;var colsLeft=maxColumns;for(var i=0;i<colnames.length;++i){globalIndex=globalIndices[i];var cell=series.getByGlobalIndex(globalIndex);if(!cell)continue;var uiObj=null;if(cellsPerCol==0){var classes=sprintf("item data-series-%s",seriesIndex);uiObj=new epiviz.ui.charts.ChartObject(sprintf("heatmap_%s_%s",seriesIndex,globalIndex),cell.rowItem.start(),cell.rowItem.end(),[cell.value],seriesIndex,[[cell]],[m],classes,cell.rowItem.seqName());items.push(uiObj);nextCellsPerCol=Math.ceil((colnames.length-
i)/colsLeft);cellsPerCol=nextCellsPerCol;--colsLeft}else{uiObj=items[items.length-1];uiObj.id+="_"+globalIndex;if(epiviz.measurements.Measurement.Type.isOrdered(series.measurement().type())){uiObj.start=Math.min(uiObj.start,cell.rowItem.start());uiObj.end=Math.max(uiObj.end,cell.rowItem.end())}uiObj.values[0]=(uiObj.values[0]*uiObj.valueItems[0].length+cell.value)/(uiObj.valueItems[0].length+1);uiObj.valueItems[0].push(cell)}if(seriesIndex==0)colIndex[globalIndex]=items.length-1;--cellsPerCol}});
var colorLabelsMap;var colorScales;this._min=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN];this._max=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX];var CustomSetting=epiviz.ui.charts.CustomSetting;if(this._min==CustomSetting.DEFAULT)this._min=data.measurements()[0].minValue();if(this._max==CustomSetting.DEFAULT)this._max=data.measurements()[0].maxValue();if(this._globalIndexColorLabels){colorLabelsMap={};for(var j=firstGlobalIndex;j<
lastGlobalIndex;++j)colorLabelsMap[this._globalIndexColorLabels[j]]=this._globalIndexColorLabels[j];this._colorLabels=Object.keys(colorLabelsMap);colorScales={};this._colorLabels.forEach(function(label,i){var color=self.colors().getByKey(label);colorScales[label]=epiviz.utils.colorizeBinary(self._min,self._max,"#ffffff",color)})}else{this._colorLabels=[sprintf("Max",data.firstSeries().measurement().maxValue())];this._colorScale=epiviz.utils.colorizeBinary(this._min,this._max,"#ffffff",this.colors().getByKey("Max"))}var nCols=
Math.min(colnames.length,maxColumns);var cellWidth=nCols?(width-this.margins().sumAxis(Axis.X))/nCols:0;var cellHeight=(height-this.margins().sumAxis(Axis.Y))/data.measurements().length;var itemsGroup=this._chartContent.select(".items");if(itemsGroup.empty()){itemsGroup=this._chartContent.append("g").attr("class","items");var selectedGroup=itemsGroup.append("g").attr("class","selected");itemsGroup.append("g").attr("class","hovered");selectedGroup.append("g").attr("class","hovered")}itemsGroup.attr("transform",
"translate("+this.margins().left()+", "+this.margins().top()+")");var selection=itemsGroup.selectAll("rect").data(items,function(d){return d.id});selection.enter().append("rect").attr("id",function(d){return sprintf("%s-item-%s-%s",self.id(),d.seriesIndex,d.valueItems[0][0].globalIndex)}).attr("class",function(d){return d.cssClasses}).style("opacity",0).style("fill-opacity",0).attr("x",function(d){return cellWidth*colIndex[d.valueItems[0][0].globalIndex]}).attr("y",function(d){return cellHeight*d.seriesIndex}).attr("width",
cellWidth).attr("height",cellHeight).style("fill",function(d,i){if(!self._globalIndexColorLabels)return self._colorScale(d.values[0]);return colorScales[self._globalIndexColorLabels[d.valueItems[0][0].globalIndex]](d.values[0])});selection.transition().duration(1E3).style("fill-opacity",null).style("opacity",null).attr("x",function(d){return cellWidth*colIndex[d.valueItems[0][0].globalIndex]}).attr("y",function(d){return cellHeight*d.seriesIndex}).attr("width",cellWidth).attr("height",cellHeight).style("fill",
function(d){if(!self._globalIndexColorLabels)return self._colorScale(d.values[0]);return colorScales[self._globalIndexColorLabels[d.valueItems[0][0].globalIndex]](d.values[0])});selection.exit().transition().duration(1E3).style("opacity",0).remove();selection.on("mouseover",function(d){self._hover.notify(new epiviz.ui.charts.VisEventArgs(self.id(),d))}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))}).on("click",function(d){self._deselect.notify(new epiviz.ui.charts.VisEventArgs(self.id()));
self._select.notify(new epiviz.ui.charts.VisEventArgs(self.id(),d));d3.event.stopPropagation()});this._drawLabels(itemsGroup,colnames,globalIndices,nCols,rows,cellWidth,cellHeight,firstGlobalIndex,width);return items};
epiviz.plugins.charts.HeatmapPlot.prototype._drawDendrogram=function(dendrogram,top,left,height,width,horizontal){var dendClass=horizontal?"dendrogram-horizontal":"dendrogram-vertical";var showLabels=false;var dendContainer=this._svg.append("g").attr("class",dendClass);if(!horizontal){dendContainer.attr("transform","translate("+left+","+top+")");this._drawSubDendrogram(this._svg.select("."+dendClass),dendrogram.root(),0,0,width,height,showLabels)}else{dendContainer.attr("transform","translate("+left+
","+top+")scale(-1, 1)rotate(90, 0, 0)");this._drawSubDendrogram(this._svg.select("."+dendClass),dendrogram.root(),0,0,width,height,showLabels)}};
epiviz.plugins.charts.HeatmapPlot.prototype._drawSubDendrogram=function(svg,node,top,left,width,height,showLabels){var children=node.children();if(children.length==0)return top+height*.5;var xScale=d3.scale.linear().domain([0,node.distance()]).range([0,width]);var nextTop=0;var firstY,lastY;for(var i=0;i<children.length;++i){var childTop=top+nextTop;var childHeight=height/node.weight()*children[i].weight();var childWidth=xScale(children[i].distance());var yCenter=this._drawSubDendrogram(svg,children[i],
childTop,left,childWidth,childHeight,showLabels);svg.append("line").attr("x1",left+childWidth).attr("x2",left+width).attr("y1",yCenter).attr("y2",yCenter).style("stroke","#555555").style("stroke-width",1).style("shape-rendering","auto");if(i==0&&showLabels)svg.append("text").attr("class","row-text").attr("x",Math.max(left+10,left+(childWidth+width)*.5)).attr("y",yCenter-10).style("text-anchor","middle").text(Globalize.format(node.distance(),"n2"));if(firstY==undefined||firstY>yCenter)firstY=yCenter;
if(lastY==undefined||lastY<yCenter)lastY=yCenter;nextTop+=height/node.weight()*children[i].weight()}svg.append("line").attr("x1",left+width).attr("x2",left+width).attr("y1",firstY).attr("y2",lastY).style("stroke","#555555").style("stroke-width",1).style("shape-rendering","auto");return(firstY+lastY)*.5};
epiviz.plugins.charts.HeatmapPlot.prototype._drawLabels=function(itemsGroup,colnames,columnMap,nCols,rows,cellWidth,cellHeight,firstGlobalIndex,width){var self=this;var mapCol=function(i,centered){return i*cellWidth+(centered?.5*cellWidth:0)};var mapRow=function(i,centered){return i*cellHeight+(centered?cellHeight*.5:0)};var measurementLabel=function(m){var label;if(rowLabel=="name")label=m.name();else{var anno=m.annotation();if(!anno||!(rowLabel in anno))label="<NA>";else label=anno[rowLabel]}rowLabelMap[label]=
label;return label};var colSelection=itemsGroup.selectAll(".col-text");var maxColSize=0;if(colnames.length>nCols)colSelection.transition().duration(500).style("opacity",0).remove();else{colSelection=colSelection.data(colnames,function(d,i){return d+columnMap[i]});colSelection.enter().append("text").attr("class","col-text").style("opacity","0").attr("x",0).attr("y",0).attr("transform",function(d,i){return"translate("+mapCol(i,true)+","+-5+")rotate(-60)"}).text(function(d){return d});colSelection.transition().duration(500).attr("x",
0).attr("y",0).attr("transform",function(d,i){return"translate("+mapCol(i,true)+","+-5+")rotate(-60)"}).style("opacity",null).attr("fill",function(colName,i){var globalIndex=i+firstGlobalIndex;if(!self._globalIndexColorLabels)return"#000000";return self.colors().getByKey(self._globalIndexColorLabels[globalIndex])});colSelection.exit().transition().duration(500).style("opacity",0).remove();this._container.find(" .col-text").each(function(i){var textWidth=this.getBBox().width;if(maxColSize<textWidth)maxColSize=
textWidth})}var rowLabel=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL];var rowLabelsAsColors=this.customSettingsValues()[epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_COLORS_FOR_ROW_LABELS];if(!rowLabelsAsColors){itemsGroup.selectAll(".row-color-label").remove();var rowSelection=itemsGroup.selectAll(".row-text").data(rows,function(m){return m.id()});rowSelection.enter().append("text").attr("class","row-text").attr("x",0).attr("y",0).attr("transform",
function(d,i){return"translate("+-5+","+mapRow(i,true)+")rotate(30)"});rowSelection.text(function(m){if(rowLabel=="name")return m.name();var anno=m.annotation();if(!anno||!(rowLabel in anno))return"<NA>";return anno[rowLabel]});rowSelection.transition().duration(500).attr("x",0).attr("y",0).attr("transform",function(d,i){return"translate("+-5+","+mapRow(i,true)+")rotate(30)"});rowSelection.exit().remove()}var rowLabelCat;if(rowLabelsAsColors){itemsGroup.selectAll(".row-text").remove();var rowLabelMap=
{};rows.forEach(function(m){var label=measurementLabel(m);rowLabelMap[label]=label});rowLabelCat=Object.keys(rowLabelMap);var rowColorLabels=itemsGroup.selectAll(".row-color-label").data(rows,function(m){return m.id()});rowColorLabels.enter().append("rect").attr("class","row-color-label").attr("x",width-self.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y",-cellHeight*.5).attr("width",20).attr("height",cellHeight).attr("transform",function(d,i){return"translate("+0+","+mapRow(i,true)+")"});rowColorLabels.style("fill",
function(m){var label=measurementLabel(m);return self.colors().getByKey(label)});rowColorLabels.transition().duration(500).attr("x",width-self.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y",-cellHeight*.5).attr("height",cellHeight).attr("transform",function(d,i){return"translate("+0+","+mapRow(i,true)+")"});rowColorLabels.exit().remove()}this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();var titleEntries=this._svg.selectAll(".chart-title").data(["Min"].concat(this._colorLabels));
titleEntries.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",self.margins().top()-5-maxColSize);titleEntries.attr("fill",function(label,i){if(i==0)return"#000000";return self.colors().getByKey(label)}).text(function(label){return label});var textLength=0;var titleEntriesStartPosition=[];this._container.find(" .chart-title").each(function(i){titleEntriesStartPosition.push(textLength);textLength+=this.getBBox().width+15});titleEntries.attr("x",function(column,
i){return self.margins().left()+10+titleEntriesStartPosition[i]});var colorEntries=this._svg.selectAll(".chart-title-color").data(["Min"].concat(this._colorLabels)).enter().append("circle").attr("class","chart-title-color").attr("cx",function(column,i){return self.margins().left()+4+titleEntriesStartPosition[i]}).attr("cy",self.margins().top()-9-maxColSize).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(label,i){if(i==0)return"#ffffff";return self.colors().getByKey(label)}).style("stroke-width",
function(label,i){return i?0:1}).style("stroke","#000000");this._svg.selectAll(".row-legend").remove();this._svg.selectAll(".row-legend-color").remove();if(rowLabelsAsColors){var textEntries=this._svg.selectAll(".row-legend").data(rowLabelCat);textEntries.enter().append("text").attr("class","row-legend").attr("font-weight","bold").attr("x",-20);textEntries.attr("fill",function(label){return self.colors().getByKey(label)}).text(function(label){return label}).attr("transform",function(d,i){return"translate("+
self.margins().left()+","+self.margins().top()+")"});textEntries.attr("y",function(label,i){return 10+i*15});this._svg.selectAll(".row-legend-color").data(rowLabelCat).enter().append("rect").attr("class","chart-title-color").attr("x",-18).attr("y",function(label,i){return 2+i*15}).attr("width",10).attr("height",10).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(label){return self.colors().getByKey(label)}).style("stroke-width",0).attr("transform",function(d,i){return"translate("+
self.margins().left()+","+self.margins().top()+")"});this._colorLabels=this._colorLabels.concat(rowLabelCat)}};epiviz.plugins.charts.HeatmapPlot.prototype.colorLabels=function(){return this._colorLabels};goog.provide("epiviz.plugins.charts.HeatmapPlotType");goog.require("epiviz.plugins.charts.HeatmapPlot");goog.require("epiviz.ui.charts.PlotType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.Visualization");goog.require("epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory");epiviz.plugins.charts.HeatmapPlotType=function(config){epiviz.ui.charts.PlotType.call(this,config)};
epiviz.plugins.charts.HeatmapPlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);epiviz.plugins.charts.HeatmapPlotType.constructor=epiviz.plugins.charts.HeatmapPlotType;epiviz.plugins.charts.HeatmapPlotType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.HeatmapPlot(id,container,properties)};epiviz.plugins.charts.HeatmapPlotType.prototype.typeName=function(){return"epiviz.plugins.charts.HeatmapPlot"};
epiviz.plugins.charts.HeatmapPlotType.prototype.chartName=function(){return"Heatmap"};epiviz.plugins.charts.HeatmapPlotType.prototype.chartHtmlAttributeName=function(){return"heatmap"};epiviz.plugins.charts.HeatmapPlotType.prototype.measurementsFilter=function(){return function(m){return epiviz.measurements.Measurement.Type.hasValues(m.type())}};epiviz.plugins.charts.HeatmapPlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return true};
epiviz.plugins.charts.HeatmapPlotType.prototype.customSettingsDefs=function(){var clusteringFactory=epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.instance();return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Columns labels"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,
epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Row labels"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_COLORS_FOR_ROW_LABELS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,false,"Row labels as colors"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.MAX_COLUMNS,epiviz.ui.charts.CustomSetting.Type.NUMBER,40,"Max columns"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,
epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Value"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max Value"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTER,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"rows","Cluster",Object.keys(epiviz.plugins.charts.HeatmapPlotType.Cluster).map(function(key){return epiviz.plugins.charts.HeatmapPlotType.Cluster[key]})),
new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_ALG,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,clusteringFactory.algorithms()[0],"Clustering Algorithm",clusteringFactory.algorithms()),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_METRIC,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,clusteringFactory.metrics()[0],"Clustering Metric",clusteringFactory.metrics()),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.CLUSTERING_LINKAGE,
epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,clusteringFactory.linkages()[0],"Clustering Linkage",clusteringFactory.linkages()),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.HeatmapPlotType.CustomSettings.SHOW_DENDROGRAM,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,true,"Show Dendrogram")])};epiviz.plugins.charts.HeatmapPlotType.Cluster={NONE:"none",ROWS:"rows",COLS:"columns",BOTH:"both"};
epiviz.plugins.charts.HeatmapPlotType.CustomSettings={MAX_COLUMNS:"maxColumns",CLUSTER:"cluster",CLUSTERING_ALG:"clusteringAlg",CLUSTERING_METRIC:"clusteringMetric",CLUSTERING_LINKAGE:"clusteringLinkage",SHOW_DENDROGRAM:"showDendrogram",SHOW_COLORS_FOR_ROW_LABELS:"showColorsForRowLabels"};goog.provide("epiviz.plugins.charts.LinePlot");goog.require("epiviz.ui.charts.Plot");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.utils");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.measurements.Measurement");epiviz.plugins.charts.LinePlot=function(id,container,properties){epiviz.ui.charts.Plot.call(this,id,container,properties);this._initialize()};
epiviz.plugins.charts.LinePlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.LinePlot.constructor=epiviz.plugins.charts.LinePlot;epiviz.plugins.charts.LinePlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("line-plot",true)};
epiviz.plugins.charts.LinePlot.prototype.draw=function(range,data,slide,zoom){epiviz.ui.charts.Plot.prototype.draw.call(this,range,data,slide,zoom);data=this._lastData;range=this._lastRange;if(!data||!range)return[];var CustomSetting=epiviz.ui.charts.CustomSetting;var minY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN];var maxY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX];var rowLabel=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL];
if(minY==CustomSetting.DEFAULT){minY=null;data.measurements().forEach(function(m){if(m===null)return;if(minY===null||m.minValue()<minY)minY=m.minValue()})}if(maxY==CustomSetting.DEFAULT){maxY=null;data.measurements().forEach(function(m){if(m===null)return;if(maxY===null||m.maxValue()>maxY)maxY=m.maxValue()})}if(minY===null&&maxY===null){minY=-1;maxY=1}if(minY===null)minY=maxY-1;if(maxY===null)maxY=minY+1;var Axis=epiviz.ui.charts.Axis;var xScale=d3.scale.linear().domain([0,data.measurements().length-
1]).range([0,this.width()-this.margins().sumAxis(Axis.X)]);var yScale=d3.scale.linear().domain([minY,maxY]).range([this.height()-this.margins().sumAxis(Axis.Y),0]);this._clearAxes();this._drawAxes(xScale,yScale,data.measurements().length,5,undefined,undefined,undefined,undefined,undefined,undefined,data.measurements().map(function(m){if(rowLabel=="name")return m.name();var anno=m.annotation();if(!anno||!(rowLabel in anno))return"<NA>";return anno[rowLabel]}));var linesGroup=this._svg.selectAll(".lines");
if(linesGroup.empty()){linesGroup=this._svg.append("g").attr("class","lines items");var selectedGroup=linesGroup.append("g").attr("class","selected");linesGroup.append("g").attr("class","hovered");selectedGroup.append("g").attr("class","hovered")}linesGroup.attr("transform","translate("+this.margins().left()+", "+this.margins().top()+")");return this._drawLines(range,data,xScale,yScale)};
epiviz.plugins.charts.LinePlot.prototype._drawLines=function(range,data,xScale,yScale){var colors=this.colors();var showPoints=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_POINTS];var showLines=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_LINES];var showErrorBars=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_ERROR_BARS];var pointRadius=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.POINT_RADIUS];
var lineThickness=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.LINE_THICKNESS];var interpolation=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.INTERPOLATION];var colLabel=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL];var absLine=this.customSettingsValues()[epiviz.plugins.charts.LinePlotType.CustomSettings.ABS_LINE_VAL];var self=this;var graph=this._svg.select(".lines");var firstGlobalIndex=data.firstSeries().globalStartIndex();
var lastGlobalIndex=data.firstSeries().globalEndIndex();data.foreach(function(measurement,series){var firstIndex=series.globalStartIndex();var lastIndex=series.globalEndIndex();if(firstIndex>firstGlobalIndex)firstGlobalIndex=firstIndex;if(lastIndex<lastGlobalIndex)lastGlobalIndex=lastIndex});var nEntries=lastGlobalIndex-firstGlobalIndex;var dataHasGenomicLocation=epiviz.measurements.Measurement.Type.isOrdered(data.measurements()[0].type());var firstIndex,lastIndex;for(var i=0;i<nEntries;++i){var globalIndex=
i+firstGlobalIndex;var item=data.firstSeries().getRowByGlobalIndex(globalIndex);if(!dataHasGenomicLocation||(range.start()==undefined||range.end()==undefined)||item.start()<range.end()&&item.end()>=range.start()){if(firstIndex==undefined)firstIndex=globalIndex;lastIndex=globalIndex+1}}firstGlobalIndex=firstIndex;lastGlobalIndex=lastIndex;nEntries=lastIndex-firstIndex;var width=this.width();var lineFunc=d3.svg.line().x(function(d){return xScale(d.x)}).y(function(d){return yScale(d.y)}).interpolate(interpolation);
var colorBy=function(row){return self._globalIndexColorLabels?self._globalIndexColorLabels[row.globalIndex()]:row.metadata(colLabel)};var valuesForIndex=function(index){return data.measurements().map(function(m,i){var item=data.getByGlobalIndex(m,index);return{x:i,y:item?item.value:null,errMinus:item&&item.valueAnnotation?item.valueAnnotation["errMinus"]:null,errPlus:item&&item.valueAnnotation?item.valueAnnotation["errPlus"]:null}}).filter(function(o){return o.y!==null})};var indices=epiviz.utils.range(nEntries,
firstGlobalIndex);var lineItems;if(!showLines)graph.selectAll(".line-series").remove();else{lineItems=indices.map(function(index){var rowItem=data.firstSeries().getRowByGlobalIndex(index);return new epiviz.ui.charts.ChartObject(sprintf("line-series-%s",index),rowItem.start(),rowItem.end(),valuesForIndex(index),index,data.measurements().map(function(m,i){return[data.getByGlobalIndex(m,index)]}),data.measurements(),"",rowItem.seqName())});var lines=graph.selectAll(".line-series").data(lineItems,function(d){return d.id});
lines.enter().insert("g",":first-child").attr("class","line-series item").style("opacity","0").on("mouseover",function(d){self._hover.notify(new epiviz.ui.charts.VisEventArgs(self.id(),d))}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))}).each(function(d){d3.select(this).append("path").attr("class","bg-line").attr("d",lineFunc(d.values)).style("shape-rendering","auto").style("stroke-width",10).style("stroke","#dddddd").style("stroke-opacity","0.1");d3.select(this).append("path").attr("class",
"main-line").attr("d",lineFunc(d.values)).style("shape-rendering","auto")});lines.transition().duration(500).style("opacity","0.7").each(function(d){var color=colors.getByKey(colorBy(data.firstSeries().getRowByGlobalIndex(d.seriesIndex)));d3.select(this).selectAll(".bg-line").attr("d",lineFunc(d.values));d3.select(this).selectAll(".main-line").attr("d",lineFunc(d.values)).style("stroke",color).style("stroke-width",lineThickness)});lines.exit().transition().duration(500).style("opacity","0").remove()}if(!showPoints)graph.selectAll(".points").remove();
else{var points=graph.selectAll(".points").data(lineItems,function(d){return d.id});points.enter().append("g").attr("class","points").style("opacity","0");points.each(function(d){d3.select(this).selectAll(".data-point").remove();var selection=d3.select(this).selectAll(".data-point").data(d.values);selection.enter().append("g").attr("class","data-point").each(function(dataPoint){d3.select(this).append("circle").attr("cx",function(d){return xScale(d.x)}).attr("cy",function(d){return yScale(d.y)}).attr("r",
pointRadius).style("stroke-width",2).attr("fill","none").attr("stroke",colors.getByKey(colorBy(data.firstSeries().getRowByGlobalIndex(d.seriesIndex))));d3.select(this).selectAll(".error-bar").remove();if(showErrorBars&&dataPoint.errMinus!=undefined&&dataPoint.errPlus!=undefined){d3.select(this).append("line").attr("x1",xScale(dataPoint.x)).attr("x2",xScale(dataPoint.x)).attr("y1",yScale(dataPoint.errMinus)).attr("y2",yScale(dataPoint.errPlus)).style("stroke",colors.getByKey(colorBy(data.firstSeries().getRowByGlobalIndex(d.seriesIndex)))).style("stroke-width",
2).attr("class","error-bar");d3.select(this).append("line").attr("x1",xScale(dataPoint.x)-4).attr("x2",xScale(dataPoint.x)+4).attr("y1",yScale(dataPoint.errMinus)).attr("y2",yScale(dataPoint.errMinus)).style("stroke",colors.getByKey(colorBy(data.firstSeries().getRowByGlobalIndex(d.seriesIndex)))).style("stroke-width",2).attr("class","error-bar");d3.select(this).append("line").attr("x1",xScale(dataPoint.x)-4).attr("x2",xScale(dataPoint.x)+4).attr("y1",yScale(dataPoint.errPlus)).attr("y2",yScale(dataPoint.errPlus)).style("stroke",
colors.getByKey(colorBy(data.firstSeries().getRowByGlobalIndex(d.seriesIndex)))).style("stroke-width",2).attr("class","error-bar")}});selection.exit().remove()}).transition().duration(500).style("opacity","1");points.exit().transition().duration(500).style("opacity","0").remove()}var title="";var labels={};indices.forEach(function(index){var label=colorBy(data.firstSeries().getRowByGlobalIndex(index));labels[label]=label});this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color").remove();
var titleEntries=this._svg.selectAll(".chart-title").data(Object.keys(labels));titleEntries.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",self.margins().top()-5);titleEntries.attr("fill",function(label){return colors.getByKey(label)}).text(function(label){return label});var textLength=0;var titleEntriesStartPosition=[];this._container.find(" .chart-title").each(function(i){titleEntriesStartPosition.push(textLength);textLength+=this.getBBox().width+15});titleEntries.attr("x",
function(column,i){return self.margins().left()+10+titleEntriesStartPosition[i]});var colorEntries=this._svg.selectAll(".chart-title-color").data(Object.keys(labels)).enter().append("circle").attr("class","chart-title-color").attr("cx",function(column,i){return self.margins().left()+4+titleEntriesStartPosition[i]}).attr("cy",self.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(label){return colors.getByKey(label)});if(absLine!=epiviz.ui.charts.CustomSetting.DEFAULT){graph.selectAll(".abLine").remove();
graph.append("svg:line").attr("class","abLine").attr("x1",0).attr("x2",self.width()-self.margins().sumAxis(epiviz.ui.charts.Axis.X)).attr("y1",yScale(absLine)).attr("y2",yScale(absLine)).style("stroke","black").style("stroke-dasharray","5, 5")}return lineItems};epiviz.plugins.charts.LinePlot.prototype.colorLabels=function(){var labels=[];for(var i=0;i<this.colors().size()&&i<20;++i)labels.push("Color "+(i+1));return labels};goog.provide("epiviz.plugins.charts.LinePlotType");goog.require("epiviz.plugins.charts.LinePlot");goog.require("epiviz.ui.charts.PlotType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.LinePlotType=function(config){epiviz.ui.charts.PlotType.call(this,config)};epiviz.plugins.charts.LinePlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);
epiviz.plugins.charts.LinePlotType.constructor=epiviz.plugins.charts.LinePlotType;epiviz.plugins.charts.LinePlotType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.LinePlot(id,container,properties)};epiviz.plugins.charts.LinePlotType.prototype.typeName=function(){return"epiviz.plugins.charts.LinePlot"};epiviz.plugins.charts.LinePlotType.prototype.chartName=function(){return"Line Plot"};epiviz.plugins.charts.LinePlotType.prototype.chartHtmlAttributeName=function(){return"line-plot"};
epiviz.plugins.charts.LinePlotType.prototype.measurementsFilter=function(){return function(m){return m.type()==epiviz.measurements.Measurement.Type.FEATURE}};epiviz.plugins.charts.LinePlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return true};
epiviz.plugins.charts.LinePlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Columns labels"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Row labels"),
new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_POINTS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,false,"Show points"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_LINES,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,true,"Show lines"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.SHOW_ERROR_BARS,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,true,"Show error bars"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.POINT_RADIUS,
epiviz.ui.charts.CustomSetting.Type.NUMBER,4,"Point radius"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.LINE_THICKNESS,epiviz.ui.charts.CustomSetting.Type.NUMBER,3,"Line thickness"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,
epiviz.ui.charts.CustomSetting.DEFAULT,"Max Y"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.INTERPOLATION,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"basis","Interpolation",["linear","step-before","step-after","basis","basis-open","basis-closed","bundle","cardinal","cardinal-open","monotone"]),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.LinePlotType.CustomSettings.ABS_LINE_VAL,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,
"Draw abline")])};epiviz.plugins.charts.LinePlotType.CustomSettings={SHOW_POINTS:"showPoints",SHOW_ERROR_BARS:"showErrorBars",SHOW_LINES:"showLines",POINT_RADIUS:"pointRadius",LINE_THICKNESS:"lineThickness",INTERPOLATION:"interpolation",ABS_LINE_VAL:"abLine"};goog.provide("epiviz.plugins.charts.StackedLinePlot");goog.require("epiviz.ui.charts.Plot");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.utils");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.ChartObject");goog.require("epiviz.measurements.Measurement");goog.require("epiviz.ui.charts.markers.VisualizationMarker");goog.require("epiviz.measurements.MeasurementHashtable");
epiviz.plugins.charts.StackedLinePlot=function(id,container,properties){epiviz.ui.charts.Plot.call(this,id,container,properties);this._initialize()};epiviz.plugins.charts.StackedLinePlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.StackedLinePlot.constructor=epiviz.plugins.charts.StackedLinePlot;
epiviz.plugins.charts.StackedLinePlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("stacked-line-plot",true)};
epiviz.plugins.charts.StackedLinePlot.prototype.draw=function(range,data,slide,zoom){epiviz.ui.charts.Plot.prototype.draw.call(this,range,data,slide,zoom);data=this._lastData;range=this._lastRange;if(!data||!range)return[];var groupBy=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.ROW_GROUP_BY];var useGroupBy=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.USE_GROUP_BY];var self=this;var removeMarker=function(){for(var k=0;k<
self._markers.length;k++)if(self._markers[k]._type==epiviz.ui.charts.markers.VisualizationMarker.Type.GROUP_BY_MEASUREMENTS){var old_mId=self._markers[k].id();delete self._markersMap[old_mId];delete self._markersIndices[old_mId];delete self._markers[k];self._markers.length--}};var checkMarker=function(marker){if(!marker)return null;var i;if(marker.id()in self._markersMap){i=self._markersIndices[marker.id()];var oldMarker=self._markers[i];if(oldMarker==marker||oldMarker.type()==marker.type()&&oldMarker.preMarkStr()==
marker.preMarkStr()&&oldMarker.markStr()==marker.markStr())return null;self._markers[i]=marker;self._markersMap[marker.id()]=marker}else{removeMarker();i=self._markers.length;self._markers.push(marker);self._markersIndices[marker.id()]=i;self._markersMap[marker.id()]=marker}};var transformPlotData=function(){self.transformData(self._lastRange,self._unalteredData).done(function(){self._drawPlot(self._lastRange,self._lastData,slide,zoom)});self._markersModified.notify(new epiviz.ui.charts.VisEventArgs(self._id,
self._markers))};if(useGroupBy){var marker=new epiviz.ui.charts.markers.VisualizationMarker(epiviz.ui.charts.markers.VisualizationMarker.Type.GROUP_BY_MEASUREMENTS,null,null,"function(data){return null}","function(m, data, preMarkResult) {return m.annotation()['"+groupBy+"'];}");var value=checkMarker(marker)}else removeMarker();transformPlotData()};
epiviz.plugins.charts.StackedLinePlot.prototype._drawPlot=function(range,data,slide,zoom){var rowLabel=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL];var interpolation=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.INTERPOLATION];var xBound=interpolation.indexOf("step")==0?data.measurements().length:data.measurements().length-1;var Axis=epiviz.ui.charts.Axis;var xScale=d3.scale.linear().domain([0,xBound]).range([0,this.width()-
this.margins().sumAxis(Axis.X)]);this._clearAxes();this._drawAxes(xScale,undefined,data.measurements().length,5,undefined,undefined,undefined,undefined,undefined,undefined,data.measurements().map(function(m){if(rowLabel=="name")return m.name();var anno=m.annotation();if(!anno||!(rowLabel in anno))return"<NA>";return anno[rowLabel]}),undefined,interpolation.indexOf("step")==0);var linesGroup=this._svg.selectAll(".lines");if(linesGroup.empty()){linesGroup=this._svg.append("g").attr("class","lines items");
var selectedGroup=linesGroup.append("g").attr("class","selected");linesGroup.append("g").attr("class","hovered");selectedGroup.append("g").attr("class","hovered")}linesGroup.attr("transform","translate("+this.margins().left()+", "+this.margins().top()+")");return this._drawLines(range,data,xScale)};
epiviz.plugins.charts.StackedLinePlot.prototype._drawLines=function(range,data,xScale){var Axis=epiviz.ui.charts.Axis;var colors=this.colors();var interpolation=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.INTERPOLATION];var colLabel=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL];var offset=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.OFFSET];var scaleToPercent=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.SCALE_TO_PERCENT];
var hoverOpacity=this.customSettingsValues()[epiviz.plugins.charts.StackedLinePlotType.CustomSettings.HOVER_OPACITY];var self=this;var graph=this._svg.select(".lines");var firstGlobalIndex=data.firstSeries().globalStartIndex();var lastGlobalIndex=data.firstSeries().globalEndIndex();data.foreach(function(measurement,series){var firstIndex=series.globalStartIndex();var lastIndex=series.globalEndIndex();if(firstIndex>firstGlobalIndex)firstGlobalIndex=firstIndex;if(lastIndex<lastGlobalIndex)lastGlobalIndex=
lastIndex});var nEntries=lastGlobalIndex-firstGlobalIndex;var dataHasGenomicLocation=epiviz.measurements.Measurement.Type.isOrdered(this.measurements().first().type());var firstIndex,lastIndex;for(var i=0;i<nEntries;++i){var globalIndex=i+firstGlobalIndex;var item=data.firstSeries().getRowByGlobalIndex(globalIndex);if(!item)continue;if(!dataHasGenomicLocation||(range.start()==undefined||range.end()==undefined)||item.start()<range.end()&&item.end()>=range.start()){if(firstIndex==undefined)firstIndex=
globalIndex;lastIndex=globalIndex+1}}firstGlobalIndex=firstIndex;lastGlobalIndex=lastIndex;nEntries=lastIndex-firstIndex;var indices=epiviz.utils.range(nEntries,firstGlobalIndex);if(indices.length==0)return[];var msSums=null;if(scaleToPercent){msSums=new epiviz.measurements.MeasurementHashtable;data.measurements().forEach(function(m){var sum=indices.filter(function(i){return data.getByGlobalIndex(m,i)}).map(function(i){return data.getByGlobalIndex(m,i).value}).reduce(function(v1,v2){return v1+v2});
msSums.put(m,sum)})}var colorBy=function(row){return self._globalIndexColorLabels?self._globalIndexColorLabels[row.globalIndex()]:row.metadata(colLabel)};var valuesForIndex=function(index){var ret=[];if(interpolation=="step-before")ret.push({x:0,y:0});var ms=data.measurements();ret=ret.concat(ms.map(function(m,i){var div=scaleToPercent?msSums.get(m):1;div=div||1;var item=data.getByGlobalIndex(m,index);return{x:ret.length+i,y:item?item.value/div:null}}));if(interpolation=="step-after")ret.push({x:ret.length,
y:0});return ret.filter(function(o){return o.y!==null})};var lineItems;lineItems=indices.filter(function(index){return data.firstSeries().getRowByGlobalIndex(index)}).map(function(index){var rowItem=data.firstSeries().getRowByGlobalIndex(index);var measurements=data.measurements();return new epiviz.ui.charts.ChartObject(sprintf("line-series-%s",index),rowItem.start(),rowItem.end(),valuesForIndex(index),index,measurements.map(function(m,i){return[data.getByGlobalIndex(m,index)]}),measurements,"",rowItem.seqName())});
var seriesAreas=indices.map(function(index){return valuesForIndex(index)});var stack=d3.layout.stack().offset(offset);var layers=stack(seriesAreas);var yScale=d3.scale.linear().domain([Math.min(0,d3.min(layers,function(layer){return d3.min(layer,function(d){return d.y0+d.y})})),d3.max(layers,function(layer){return d3.max(layer,function(d){return d.y0+d.y})})]).range([this.height()-this.margins().sumAxis(Axis.Y),0]);var area=d3.svg.area().x(function(d){return xScale(d.x)}).y0(function(d){return yScale(d.y0)}).y1(function(d){return yScale(d.y0+
d.y)}).interpolate(interpolation);var lines=graph.selectAll(".line-series").data(lineItems,function(d){return d.seriesIndex});lines.enter().insert("path",":first-child").attr("class","line-series item").attr("d",function(d,i){return area(layers[i])}).style("opacity","0").style("shape-rendering","auto").style("fill",function(d,i){return colors.getByKey(colorBy(data.firstSeries().getRowByGlobalIndex(d.seriesIndex)))}).on("mouseover",function(d,i){self._hover.notify(new epiviz.ui.charts.VisEventArgs(self.id(),
d));graph.selectAll(".item").style("opacity",1-hoverOpacity);graph.selectAll(".hovered .item").style("opacity",hoverOpacity)}).on("mouseout",function(){self._unhover.notify(new epiviz.ui.charts.VisEventArgs(self.id()))});lines.transition().duration(500).style("opacity","0.7").attr("d",function(d,i){return area(layers[i])}).style("fill",function(d,i){return colors.getByKey(colorBy(data.firstSeries().getRowByGlobalIndex(d.seriesIndex)))});lines.exit().transition().duration(500).style("opacity","0").remove();
var title="";var labels={};indices.forEach(function(index){if(!data.firstSeries().getByGlobalIndex(index))return;var label=colorBy(data.firstSeries().getRowByGlobalIndex(index));labels[label]=label});this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();var titleEntries=this._svg.selectAll(".chart-title").data(Object.keys(labels));titleEntries.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",self.margins().top()-5);titleEntries.attr("fill",
function(label){return colors.getByKey(label)}).text(function(label){return label});var textLength=0;var titleEntriesStartPosition=[];this._container.find(" .chart-title").each(function(i){titleEntriesStartPosition.push(textLength);textLength+=this.getBBox().width+15});titleEntries.attr("x",function(column,i){return self.margins().left()+10+titleEntriesStartPosition[i]});var colorEntries=this._svg.selectAll(".chart-title-color").data(Object.keys(labels)).enter().append("circle").attr("class","chart-title-color").attr("cx",
function(column,i){return self.margins().left()+4+titleEntriesStartPosition[i]}).attr("cy",self.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(label){return colors.getByKey(label)});return lineItems};epiviz.plugins.charts.StackedLinePlot.prototype.colorLabels=function(){var labels=[];for(var i=0;i<this.colors().size()&&i<20;++i)labels.push("Color "+(i+1));return labels};goog.provide("epiviz.plugins.charts.StackedLinePlotType");goog.require("epiviz.plugins.charts.StackedLinePlot");goog.require("epiviz.ui.charts.PlotType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.StackedLinePlotType=function(config){epiviz.ui.charts.PlotType.call(this,config)};epiviz.plugins.charts.StackedLinePlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);
epiviz.plugins.charts.StackedLinePlotType.constructor=epiviz.plugins.charts.StackedLinePlotType;epiviz.plugins.charts.StackedLinePlotType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.StackedLinePlot(id,container,properties)};epiviz.plugins.charts.StackedLinePlotType.prototype.typeName=function(){return"epiviz.plugins.charts.StackedLinePlot"};epiviz.plugins.charts.StackedLinePlotType.prototype.chartName=function(){return"Stacked Plot"};
epiviz.plugins.charts.StackedLinePlotType.prototype.chartHtmlAttributeName=function(){return"stacked-line-plot"};epiviz.plugins.charts.StackedLinePlotType.prototype.measurementsFilter=function(){return function(m){return m.type()==epiviz.measurements.Measurement.Type.FEATURE}};epiviz.plugins.charts.StackedLinePlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return true};
epiviz.plugins.charts.StackedLinePlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.COL_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_METADATA,"colLabel","Color by"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Labels"),
new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.OFFSET,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"zero","Offset",["zero","wiggle"]),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.INTERPOLATION,epiviz.ui.charts.CustomSetting.Type.CATEGORICAL,"step-after","Interpolation",["linear","step-before","step-after","basis","basis-open","basis-closed","bundle","cardinal","cardinal-open","monotone"]),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.SCALE_TO_PERCENT,
epiviz.ui.charts.CustomSetting.Type.BOOLEAN,true,"Scale to Percent"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.USE_GROUP_BY,epiviz.ui.charts.CustomSetting.Type.BOOLEAN,false,"Use Group by"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.ROW_GROUP_BY,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Group By"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.StackedLinePlotType.CustomSettings.HOVER_OPACITY,
epiviz.ui.charts.CustomSetting.Type.NUMBER,.6,"Hover Opacity")])};epiviz.plugins.charts.StackedLinePlotType.CustomSettings={INTERPOLATION:"interpolation",OFFSET:"offset",SCALE_TO_PERCENT:"scaleToPercent",ROW_GROUP_BY:"groupBy",USE_GROUP_BY:"useGroupBy",HOVER_OPACITY:"hoverOpacity"};goog.provide("epiviz.ui.charts.DataStructureVisualizationType");goog.require("epiviz.ui.charts.VisualizationType");epiviz.ui.charts.DataStructureVisualizationType=function(config){epiviz.ui.charts.VisualizationType.call(this,config)};epiviz.ui.charts.DataStructureVisualizationType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.VisualizationType.prototype);epiviz.ui.charts.DataStructureVisualizationType.constructor=epiviz.ui.charts.DataStructureVisualizationType;
epiviz.ui.charts.DataStructureVisualizationType.prototype.chartDisplayType=function(){return epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE};epiviz.ui.charts.DataStructureVisualizationType.prototype.cssClass=function(){return"data-structure-container ui-widget-content"};epiviz.ui.charts.DataStructureVisualizationType.prototype.isRestrictedToSameDatasourceGroup=function(){return true};epiviz.ui.charts.DataStructureVisualizationType.prototype.hasMeasurements=function(){return false};
epiviz.ui.charts.DataStructureVisualizationType.prototype.customSettingsDefs=function(){var defs=epiviz.ui.charts.VisualizationType.prototype.customSettingsDefs.call(this);return defs};goog.provide("epiviz.ui.charts.tree.HierarchyVisualizationType");goog.require("epiviz.ui.charts.DataStructureVisualizationType");epiviz.ui.charts.tree.HierarchyVisualizationType=function(config){epiviz.ui.charts.DataStructureVisualizationType.call(this,config)};epiviz.ui.charts.tree.HierarchyVisualizationType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.DataStructureVisualizationType.prototype);epiviz.ui.charts.tree.HierarchyVisualizationType.constructor=epiviz.ui.charts.tree.HierarchyVisualizationType;goog.provide("epiviz.ui.charts.tree.IcicleType");goog.require("epiviz.ui.charts.tree.HierarchyVisualizationType");goog.require("epiviz.ui.charts.CustomSetting");epiviz.ui.charts.tree.IcicleType=function(config){epiviz.ui.charts.tree.HierarchyVisualizationType.call(this,config)};epiviz.ui.charts.tree.IcicleType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.tree.HierarchyVisualizationType.prototype);epiviz.ui.charts.tree.IcicleType.constructor=epiviz.ui.charts.tree.IcicleType;
epiviz.ui.charts.tree.IcicleType.prototype.createNew=function(id,container,properties){return new epiviz.ui.charts.tree.Icicle(id,container,properties)};epiviz.ui.charts.tree.IcicleType.prototype.typeName=function(){return"epiviz.ui.charts.tree.Icicle"};epiviz.ui.charts.tree.IcicleType.prototype.chartName=function(){return"Icicle"};epiviz.ui.charts.tree.IcicleType.prototype.chartHtmlAttributeName=function(){return"icicle"};
epiviz.ui.charts.tree.IcicleType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.tree.HierarchyVisualizationType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.tree.IcicleType.CustomSettings.HOVER_OPACITY,epiviz.ui.charts.CustomSetting.Type.NUMBER,.9,"Hover Opacity"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.tree.IcicleType.CustomSettings.AGG_LEVEL,epiviz.ui.charts.CustomSetting.Type.STRING,"","Agg Level"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.tree.IcicleType.CustomSettings.NODE_SEL,
epiviz.ui.charts.CustomSetting.Type.STRING,"{}","Node Selection")])};epiviz.ui.charts.tree.IcicleType.CustomSettings={HOVER_OPACITY:"hoverOpacity",AGG_LEVEL:"aggLevel",NODE_SEL:"nodeSel"};goog.provide("epiviz.ui.charts.ChartIndexObject");goog.require("epiviz.ui.charts.VisObject");epiviz.ui.charts.ChartIndexObject=function(id,keys,keyValues,values,valueItems,measurements,seriesIndex,cssClasses){epiviz.ui.charts.VisObject.call(this);this.id=id;this.keys=keys;this.keyValues=keyValues;this.values=values;this.seriesIndex=seriesIndex;this.valueItems=valueItems;this.measurements=measurements;this.cssClasses=cssClasses};epiviz.ui.charts.ChartIndexObject.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.VisObject.prototype);
epiviz.ui.charts.ChartIndexObject.constructor=epiviz.ui.charts.ChartIndexObject;epiviz.ui.charts.ChartIndexObject.prototype.getMetadata=function(i,j,metadataCol){if(this.valueItems)return this.valueItems[i][j][metadataCol];return null};epiviz.ui.charts.ChartIndexObject.prototype.metadataColumns=function(){return this.keys};epiviz.ui.charts.ChartIndexObject.prototype.dimensions=function(){return[1,1]};goog.provide("epiviz.plugins.charts.DiversityScatterPlot");goog.require("epiviz.ui.charts.Plot");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.ui.charts.Visualization");goog.require("epiviz.utils");goog.require("epiviz.measurements.Measurement");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.ChartIndexObject");goog.require("epiviz.deferred.Deferred");
epiviz.plugins.charts.DiversityScatterPlot=function(id,container,properties){epiviz.ui.charts.Plot.call(this,id,container,properties);this._dispatch=d3.dispatch("hover","click");this._chartContent=null;this._legend=null;this._measurementsX=[];this._measurementsY=[];var self=this;this.measurements().foreach(function(m,i){if(i%2==0)self._measurementsX.push(m);else self._measurementsY.push(m)});this._xLabel="";this._yLabel="";for(var i=0;i<Math.min(this._measurementsX.length,this._measurementsY.length);++i){if(i>
0){this._xLabel+=", ";this._yLabel+=", "}this._xLabel+=this._measurementsX[i].name();this._yLabel+=this._measurementsY[i].name()}this._colorLabels=[];this._initialize()};epiviz.plugins.charts.DiversityScatterPlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.DiversityScatterPlot.constructor=epiviz.plugins.charts.DiversityScatterPlot;
epiviz.plugins.charts.DiversityScatterPlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("scatter-plot",true);this._chartContent=this._svg.append("g").attr("class","chart-content");this._legend=this._svg.append("g").attr("class","chart-legend")};
epiviz.plugins.charts.DiversityScatterPlot.prototype.draw=function(){epiviz.ui.charts.Plot.prototype.draw.call(this,undefined,undefined);var self=this;self.drawScatter(self._lastRange,self._lastData.data,"sample_id",self._xLabel,"alphaDiversity")};
epiviz.plugins.charts.DiversityScatterPlot.prototype.drawScatter=function(range,data,key,dimx,dimy){this.xTag=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL];var old_x_axis=this._measurementsX[0];var tempAnnotation=old_x_axis.annotation();this._measurementsX=[];var new_x_axis=new epiviz.measurements.Measurement(this.xTag,this.xTag,"feature","ihmp","ihmp","ihmp",null,null,tempAnnotation,-1,1,[]);this._measurementsX.push(new_x_axis);return this._drawCircles(data,
this.xTag,dimy,key)};
epiviz.plugins.charts.DiversityScatterPlot.prototype._drawCircles=function(data,dimx,dimy,key){var self=this;var Axis=epiviz.ui.charts.Axis;var circleRadius=Math.max(1,this.customSettingsValues()[epiviz.plugins.charts.DiversityScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO]*Math.min(this.width(),this.height()));var gridSquareSize=Math.max(Math.floor(circleRadius),1);var margins=this.margins();var width=this.width();var height=this.height();var CustomSetting=epiviz.ui.charts.CustomSetting;var minY=
this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN];var maxY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX];var minX=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MIN];var maxX=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MAX];if(minY==CustomSetting.DEFAULT)minY=this._measurementsY[0].minValue();if(maxY==CustomSetting.DEFAULT)maxY=this._measurementsY[0].maxValue();var allValues=
[];data.forEach(function(m){allValues.push(m[dimx])});var uniqueValues=[];allValues.forEach(function(m){if(uniqueValues.indexOf(m)==-1)uniqueValues.push(m)});console.log(uniqueValues);this.xTickValues=uniqueValues;data.forEach(function(n){var index=uniqueValues.indexOf(n[dimx]);n._xVal=index+1});var count=0;var plotData=[];uniqueValues.forEach(function(m){plotData[count]=[];plotData[count][0]=count;plotData[count][1]=[];count++});data.forEach(function(d){var ind=uniqueValues.indexOf(d[dimx]);plotData[ind][1].push(d[dimy])});
if(minX==CustomSetting.DEFAULT)minX=0;if(maxX==CustomSetting.DEFAULT)maxX=uniqueValues.length+1;var xScale=d3.scale.linear().domain([minX,maxX]).range([0,width-margins.sumAxis(Axis.X)]);var yScale=d3.scale.linear().domain([minY,maxY]).range([height-margins.sumAxis(Axis.Y),0]);this._clearAxes(this._chartContent);xLabelsPadded=[""];uniqueValues.forEach(function(n){xLabelsPadded.push(n)});console.log(xLabelsPadded);this._drawAxes(xScale,yScale,xLabelsPadded.length,15,this._chartContent,width,height,
margins,undefined,undefined,xLabelsPadded,undefined,undefined);var grid={};var items=[];var maxGroupItems=1;var seriesIndex=0;for(var i=0;i<data.length;++i){console.log(data[i]);var cellX=data[i]["_xVal"];var cellY=data[i][dimy];if(!cellX||!cellY)continue;var classes=sprintf("item data-series-%s",seriesIndex);var x=xScale(cellX);var y=yScale(cellY);var gridX=Math.floor(x/gridSquareSize)*gridSquareSize;var gridY=Math.floor(y/gridSquareSize)*gridSquareSize;var uiObj=null;if(grid[gridY]&&grid[gridY][gridX]){uiObj=
grid[gridY][gridX];uiObj.id+="_"+data[i][key];uiObj.values[0]=(uiObj.values[0]*uiObj.valueItems[0].length+cellX)/(uiObj.valueItems[0].length+1);uiObj.values[1]=(uiObj.values[1]*uiObj.valueItems[1].length+cellY)/(uiObj.valueItems[1].length+1);uiObj.valueItems[0].push(data[i]);uiObj.valueItems[1].push(data[i]);if(uiObj.valueItems[0].length>maxGroupItems)maxGroupItems=uiObj.valueItems[0].length;continue}uiObj=new epiviz.ui.charts.ChartIndexObject(sprintf("scatter_%s_%s_%s_%s",cellX,cellY,seriesIndex,
data[i][key]),[key],data[i][key],[cellX,cellY],[[data[i]],[data[i]]],["_xVal",dimy],seriesIndex,classes);if(!grid[gridY])grid[gridY]={};grid[gridY][gridX]=uiObj;items.push(uiObj)}console.log("after loop");var itemsGroup=this._chartContent.select(".items");if(itemsGroup.empty()){itemsGroup=this._chartContent.append("g").attr("class","items");var selectedGroup=itemsGroup.append("g").attr("class","selected");itemsGroup.append("g").attr("class","hovered");selectedGroup.append("g").attr("class","hovered")}var selection=
itemsGroup.selectAll("circle").data(items,function(d){return d.id});selection.enter().insert("circle",":first-child").attr("id",function(d){return sprintf("%s-item-%s",self.id(),d.seriesIndex)}).style("opacity",0).style("fill-opacity",0).attr("r",0);selection.each(function(d){var circle=d3.select(this);var fill=self.colors().get(d.seriesIndex);circle.attr("cx",margins.left()+(d.values[0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("cy",height-margins.bottom()-(d.values[1]-minY)*(height-
margins.sumAxis(Axis.Y))/(maxY-minY)).attr("class",d.cssClasses).style("fill",fill)});selection.transition().duration(1E3).style("fill-opacity",function(d){return Math.max(.6,d.valueItems[0].length/maxGroupItems)}).style("opacity",null).attr("r",circleRadius);selection.exit().transition().duration(1E3).style("opacity",0).attr("r",0).remove();selection.on("click",function(d){console.log("click");console.log(d);self._deselect.notify(new epiviz.ui.charts.VisEventArgs(self.id()));self._select.notify(new epiviz.ui.charts.VisEventArgs(self.id(),
d));self._dispatch.click(self.id(),null);d3.event.stopPropagation()});if(this._globalIndexColorLabels){var colorLabelsMap={};for(j=firstGlobalIndex;j<lastGlobalIndex;++j)colorLabelsMap[this._globalIndexColorLabels[j]]=this._globalIndexColorLabels[j];this._colorLabels=Object.keys(colorLabelsMap);this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();var titleEntries=this._svg.selectAll(".chart-title").data(this._colorLabels);titleEntries.enter().append("text").attr("class",
"chart-title").attr("font-weight","bold").attr("y",self.margins().top()-5);titleEntries.attr("fill",function(label,i){return self.colors().getByKey(label)}).text(function(label){return label});var textLength=0;var titleEntriesStartPosition=[];this._container.find(" .chart-title").each(function(i){titleEntriesStartPosition.push(textLength);textLength+=this.getBBox().width+15});titleEntries.attr("x",function(column,i){return self.margins().left()+10+titleEntriesStartPosition[i]});var colorEntries=this._svg.selectAll(".chart-title-color").data(this._colorLabels).enter().append("circle").attr("class",
"chart-title-color").attr("cx",function(column,i){return self.margins().left()+4+titleEntriesStartPosition[i]}).attr("cy",self.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(label,i){return self.colors().getByKey(label)}).style("stroke-width",0)}else{var n=Math.min(this._measurementsX.length,this._measurementsY.length);var colors=new Array(n);for(j=0;j<n;++j)colors[j]=sprintf("%s vs %s",this._measurementsX[j].name(),this._measurementsY[j].name());
this._colorLabels=colors}var rectBox=itemsGroup;console.log(uniqueValues);rectBox.selectAll(".iqr-range").remove();rectBox.selectAll(".whisker").remove();for(i=0;i<plotData.length;i++){var findIQR=plotData[i][1];console.log(findIQR);var lower_upper=[];lower_upper=quartiles(findIQR);console.log(lower_upper);var iqr_result=lower_upper[1]-lower_upper[0];var iqr_15=iqr_result*1.5;var whisker_lower_index=0;var whisker_upper_index=findIQR.length-1;for(j=0;j<findIQR.length;j++)if(findIQR[j]<lower_upper[0]-
iqr_15)whisker_lower_index=j;else break;for(k=findIQR.length-1;k>0;k--)if(findIQR[k]>lower_upper[1]+iqr_15)whisker_upper_index=k;else break;rectBox.append("rect").attr("id","0").attr("class","iqr-range").style("opacity",1).style("fill-opacity",.2).attr("x",margins.left()+(.6+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y",height-margins.bottom()-(lower_upper[1]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY)).attr("width",xScale(.8)).attr("height",Math.abs(yScale(lower_upper[1])-
yScale(lower_upper[0]))).attr("fill","#1E90FF");rectBox.append("line").style("stroke","gray").attr("class","whisker").attr("x1",margins.left()+(1+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y1",height-margins.bottom()-(lower_upper[1]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY)).attr("x2",margins.left()+(1+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y2",height-margins.bottom()-(findIQR[whisker_upper_index]-minY)*(height-margins.sumAxis(Axis.Y))/
(maxY-minY));rectBox.append("line").style("stroke","gray").attr("class","whisker").attr("x1",margins.left()+(1+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y1",height-margins.bottom()-(lower_upper[0]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY)).attr("x2",margins.left()+(1+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y2",height-margins.bottom()-(findIQR[whisker_lower_index]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY));rectBox.append("line").style("stroke",
"gray").attr("class","whisker").attr("x1",margins.left()+(.6+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y1",height-margins.bottom()-(findIQR[whisker_upper_index]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY)).attr("x2",margins.left()+(1.4+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y2",height-margins.bottom()-(findIQR[whisker_upper_index]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY));rectBox.append("line").style("stroke","gray").attr("class",
"whisker").attr("x1",margins.left()+(.6+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y1",height-margins.bottom()-(findIQR[whisker_lower_index]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY)).attr("x2",margins.left()+(1.4+plotData[i][0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("y2",height-margins.bottom()-(findIQR[whisker_lower_index]-minY)*(height-margins.sumAxis(Axis.Y))/(maxY-minY))}function quartiles(d){d.sort(d3.ascending);var q1=d3.quantile(d,.25);
var q3=d3.quantile(d,.75);return[q1,q3]}return items};epiviz.plugins.charts.DiversityScatterPlot.prototype.colorLabels=function(){return this._colorLabels};
epiviz.plugins.charts.DiversityScatterPlot.prototype._drawAxesOld=function(xScale,yScale,xTicks,yTicks,svg,width,height,margins){epiviz.ui.charts.Plot.prototype._drawAxes(xScale,yScale,xTicks,yTicks,svg,width,height,margins,undefined,undefined,this.xTickValues,undefined,undefined);this._legend.selectAll("text").remove();var xMeasurements=this._measurementsX;var self=this;this._legend.selectAll(".x-measurement").remove();this._legend.selectAll(".x-measurement-color").remove();var xEntries=this._legend.selectAll(".x-measurement").data(xMeasurements).enter().append("text").attr("class",
"x-measurement").attr("font-weight","bold").attr("fill",function(m,i){return self._globalIndexColorLabels?"#000000":self.colors().get(i)}).attr("y",this.height()-this.margins().bottom()+35).text(function(m,i){return m.name()});var xTextLength=0;var xTitleEntriesStartPosition=[];this._container.find(" .x-measurement").each(function(i){xTitleEntriesStartPosition.push(xTextLength);xTextLength+=this.getBBox().width+15});xEntries.attr("x",function(column,i){return(self.width()-xTextLength)*.5+7+xTitleEntriesStartPosition[i]});
var xColorEntries=this._legend.selectAll(".x-measurement-color").data(xMeasurements).enter().append("circle").attr("class","x-measurement-color").attr("cx",function(column,i){return(self.width()-xTextLength)*.5+1+xTitleEntriesStartPosition[i]}).attr("cy",this.height()-this.margins().bottom()+31).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(m,i){return self._globalIndexColorLabels?"#ffffff":self.colors().get(i)});var yMeasurements=["alphaDiversity"];this._legend.selectAll(".y-measurement").remove();
this._legend.selectAll(".y-measurement-color").remove();var yEntries=this._legend.selectAll(".y-measurement").data(yMeasurements).enter().append("text").attr("class","y-measurement").attr("font-weight","bold").attr("fill",function(m,i){return self._globalIndexColorLabels?"#000000":self.colors().get(i)}).attr("y",this.margins().left()-35).attr("transform","rotate(-90)").text(function(m,i){return m});var yTextLength=0;var yTitleEntriesStartPosition=[];this._container.find(" .y-measurement").each(function(i){yTitleEntriesStartPosition.push(yTextLength);
yTextLength+=this.getBBox().width+15});yEntries.attr("x",function(column,i){return-self.height()+(self.height()-yTextLength)*.5+12+self.margins().top()+yTitleEntriesStartPosition[i]});var yColorEntries=this._legend.selectAll(".y-measurement-color").data(yMeasurements).enter().append("circle").attr("class","y-measurement-color").attr("cx",function(column,i){return-self.height()+(self.height()-yTextLength)*.5+6+self.margins().top()+yTitleEntriesStartPosition[i]}).attr("cy",this.margins().left()-39).attr("transform",
"rotate(-90)").attr("r",4).style("shape-rendering","auto").style("stroke-width","0").style("fill",function(m,i){return self._globalIndexColorLabels?"#ffffff":self.colors().get(i)})};epiviz.plugins.charts.DiversityScatterPlot.prototype.transformData=function(range,data){var lastRange=this._lastRange;if(range!=undefined)this._lastRange=range;if(data!=undefined){this._lastData=data;this._unalteredData=data}var deferred=new epiviz.deferred.Deferred;deferred.resolve();return deferred};goog.provide("epiviz.plugins.charts.DiversityScatterPlotType");goog.require("epiviz.plugins.charts.DiversityScatterPlot");goog.require("epiviz.ui.charts.PlotType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.DiversityScatterPlotType=function(config){epiviz.ui.charts.PlotType.call(this,config)};epiviz.plugins.charts.DiversityScatterPlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);
epiviz.plugins.charts.DiversityScatterPlotType.constructor=epiviz.plugins.charts.DiversityScatterPlotType;epiviz.plugins.charts.DiversityScatterPlotType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.DiversityScatterPlot(id,container,properties)};epiviz.plugins.charts.DiversityScatterPlotType.prototype.typeName=function(){return"epiviz.plugins.charts.DiversityScatterPlot"};epiviz.plugins.charts.DiversityScatterPlotType.prototype.chartName=function(){return"Diversity Scatter Plot"};
epiviz.plugins.charts.DiversityScatterPlotType.prototype.chartHtmlAttributeName=function(){return"diversity_scatter"};epiviz.plugins.charts.DiversityScatterPlotType.prototype.measurementsFilter=function(){return function(m){return epiviz.measurements.Measurement.Type.hasValues(m.type())}};epiviz.plugins.charts.DiversityScatterPlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return true};epiviz.plugins.charts.DiversityScatterPlotType.prototype.minSelectedMeasurements=function(){return 2};
epiviz.plugins.charts.DiversityScatterPlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.DiversityScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO,epiviz.ui.charts.CustomSetting.Type.NUMBER,.015,"Circle radius ratio"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.ROW_LABEL,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,
"name","Row labels"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,
epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max Y")])};epiviz.plugins.charts.DiversityScatterPlotType.CustomSettings={CIRCLE_RADIUS_RATIO:"circleRadiusRatio"};goog.provide("epiviz.plugins.charts.CustomScatterPlot");goog.require("epiviz.ui.charts.Plot");goog.require("epiviz.ui.charts.Axis");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.utils");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.ChartIndexObject");goog.require("epiviz.deferred.Deferred");
epiviz.plugins.charts.CustomScatterPlot=function(id,container,properties){epiviz.ui.charts.Plot.call(this,id,container,properties);this._chartContent=null;this._legend=null;this._measurementsX=[];this._measurementsY=[];var self=this;this.measurements().foreach(function(m,i){if(i%2==0)self._measurementsX.push(m);else self._measurementsY.push(m)});this._xLabel="";this._yLabel="";for(var i=0;i<Math.min(this._measurementsX.length,this._measurementsY.length);++i){if(i>0){this._xLabel+=", ";this._yLabel+=
", "}this._xLabel+=this._measurementsX[i].name();this._yLabel+=this._measurementsY[i].name()}this._colorLabels=[];this._initialize()};epiviz.plugins.charts.CustomScatterPlot.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.Plot.prototype);epiviz.plugins.charts.CustomScatterPlot.constructor=epiviz.plugins.charts.CustomScatterPlot;
epiviz.plugins.charts.CustomScatterPlot.prototype._initialize=function(){epiviz.ui.charts.Plot.prototype._initialize.call(this);this._svg.classed("scatter-plot",true);this._chartContent=this._svg.append("g").attr("class","chart-content");this._legend=this._svg.append("g").attr("class","chart-legend")};
epiviz.plugins.charts.CustomScatterPlot.prototype.draw=function(){epiviz.ui.charts.Plot.prototype.draw.call(this,undefined,undefined);var self=this;self._variance_labels=self._lastData.pca_variance_explained;self.drawScatter(self._lastRange,self._lastData.data,"sample_id","PC1","PC2")};epiviz.plugins.charts.CustomScatterPlot.prototype.drawScatter=function(range,data,key,dimx,dimy){return this._drawCircles(data,dimx,dimy,key)};
epiviz.plugins.charts.CustomScatterPlot.prototype._drawCircles=function(data,dimx,dimy,key){var self=this;var Axis=epiviz.ui.charts.Axis;var circleRadius=Math.max(1,this.customSettingsValues()[epiviz.plugins.charts.CustomScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO]*Math.min(this.width(),this.height()));var gridSquareSize=Math.max(Math.floor(circleRadius),1);var margins=this.margins();var width=this.width();var height=this.height();var CustomSetting=epiviz.ui.charts.CustomSetting;var minY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MIN];
var maxY=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.Y_MAX];var minX=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MIN];var maxX=this.customSettingsValues()[epiviz.ui.charts.Visualization.CustomSettings.X_MAX];var colorbylabel=this.customSettingsValues()[epiviz.plugins.charts.CustomScatterPlotType.CustomSettings.COLOR_BY];if(minX==CustomSetting.DEFAULT)minX=this._measurementsX[0].minValue();if(minY==CustomSetting.DEFAULT)minY=this._measurementsY[0].minValue();
if(maxX==CustomSetting.DEFAULT)maxX=this._measurementsX[0].maxValue();if(maxY==CustomSetting.DEFAULT)maxY=this._measurementsY[0].maxValue();var xScale=d3.scale.linear().domain([minX,maxX]).range([0,width-margins.sumAxis(Axis.X)]).nice();var yScale=d3.scale.linear().domain([minY,maxY]).range([height-margins.sumAxis(Axis.Y),0]).nice();this._clearAxes(this._chartContent);this._drawAxes(xScale,yScale,15,15,this._chartContent);var grid={};var items=[];var maxGroupItems=1;var seriesIndex=0;for(var i=0;i<
data.length;++i){var cellX=data[i][dimx];var cellY=data[i][dimy];if(!cellX||!cellY)continue;var classes=sprintf("item data-series-%s",seriesIndex);var x=xScale(cellX);var y=yScale(cellY);var gridX=Math.floor(x/gridSquareSize)*gridSquareSize;var gridY=Math.floor(y/gridSquareSize)*gridSquareSize;var uiObj=null;if(grid[gridY]&&grid[gridY][gridX]){uiObj=grid[gridY][gridX];uiObj.id+="_"+data[i][key];uiObj.values[0]=(uiObj.values[0]*uiObj.valueItems[0].length+cellX)/(uiObj.valueItems[0].length+1);uiObj.values[1]=
(uiObj.values[1]*uiObj.valueItems[1].length+cellY)/(uiObj.valueItems[1].length+1);uiObj.valueItems[0].push(data[i]);uiObj.valueItems[1].push(data[i]);if(uiObj.valueItems[0].length>maxGroupItems)maxGroupItems=uiObj.valueItems[0].length;continue}uiObj=new epiviz.ui.charts.ChartIndexObject(sprintf("scatter_%s_%s_%s_%s",cellX,cellY,seriesIndex,data[i][key]),[key],data[i][key],[cellX,cellY],[[data[i]],[data[i]]],[dimx,dimy],seriesIndex,classes);if(!grid[gridY])grid[gridY]={};grid[gridY][gridX]=uiObj;items.push(uiObj)}var itemsGroup=
this._chartContent.select(".items");if(itemsGroup.empty()){itemsGroup=this._chartContent.append("g").attr("class","items");var selectedGroup=itemsGroup.append("g").attr("class","selected");itemsGroup.append("g").attr("class","hovered");selectedGroup.append("g").attr("class","hovered")}var selection=itemsGroup.selectAll("circle").data(items,function(d){return d.id});selection.enter().insert("circle",":first-child").attr("id",function(d){return sprintf("%s-item-%s",self.id(),d.seriesIndex)}).style("opacity",
0).style("fill-opacity",0).attr("r",0);selection.each(function(d){var circle=d3.select(this);var fill=self.colors().getByKey(d.valueItems[0][0][colorbylabel]);if(self._globalIndexColorLabels!=null&&self._globalIndexColorLabels.indexOf(d.valueItems[0][0][colorbylabel])==-1)self._globalIndexColorLabels.push(d.valueItems[0][0][colorbylabel]);circle.attr("cx",margins.left()+(d.values[0]-minX)*(width-margins.sumAxis(Axis.X))/(maxX-minX)).attr("cy",height-margins.bottom()-(d.values[1]-minY)*(height-margins.sumAxis(Axis.Y))/
(maxY-minY)).attr("class",d.cssClasses).style("fill",fill)});selection.transition().duration(1E3).style("fill-opacity",function(d){return Math.max(.6,d.valueItems[0].length/maxGroupItems)}).style("opacity",null).attr("r",circleRadius);selection.exit().transition().duration(1E3).style("opacity",0).attr("r",0).remove();selection.on("click",function(d){console.log("click");self._deselect.notify(new epiviz.ui.charts.VisEventArgs(self.id()));self._select.notify(new epiviz.ui.charts.VisEventArgs(self.id(),
d));d3.event.stopPropagation()});if(this._globalIndexColorLabels){var colorLabelsMap={};for(j=firstGlobalIndex;j<lastGlobalIndex;++j)colorLabelsMap[this._globalIndexColorLabels[j]]=this._globalIndexColorLabels[j];this._colorLabels=Object.keys(colorLabelsMap);this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();var titleEntries=this._svg.selectAll(".chart-title").data(this._colorLabels);titleEntries.enter().append("text").attr("class","chart-title").attr("font-weight",
"bold").attr("y",self.margins().top()-5);titleEntries.attr("fill",function(label,i){return self.colors().getByKey(label)}).text(function(label){return label});var textLength=0;var titleEntriesStartPosition=[];this._container.find(" .chart-title").each(function(i){titleEntriesStartPosition.push(textLength);textLength+=this.getBBox().width+15});titleEntries.attr("x",function(column,i){return self.margins().left()+10+titleEntriesStartPosition[i]});var colorEntries=this._svg.selectAll(".chart-title-color").data(this._colorLabels).enter().append("circle").attr("class",
"chart-title-color").attr("cx",function(column,i){return self.margins().left()+4+titleEntriesStartPosition[i]}).attr("cy",self.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(label,i){return self.colors().getByKey(label)}).style("stroke-width",0)}else{var n=Math.min(this._measurementsX.length,this._measurementsY.length);var colors=new Array(n);for(j=0;j<n;++j)colors[j]=sprintf("%s vs %s",this._measurementsX[j].name(),this._measurementsY[j].name());
this._colorLabels=colors}this._colorLabels=[];Object.keys(self.colors()._keyIndices).forEach(function(m){if(!(m=="undefined"||m=="Max"))self._colorLabels.push(m)});this._svg.selectAll(".chart-title").remove();this._svg.selectAll(".chart-title-color ").remove();var titleEntries=this._svg.selectAll(".chart-title").data(this._colorLabels);titleEntries.enter().append("text").attr("class","chart-title").attr("font-weight","bold").attr("y",self.margins().top()-5);titleEntries.attr("fill",function(label,
i){return self.colors().getByKey(label)}).text(function(label){return label});var textLength=0;var titleEntriesStartPosition=[];this._container.find(" .chart-title").each(function(i){titleEntriesStartPosition.push(textLength);textLength+=this.getBBox().width+15});titleEntries.attr("x",function(column,i){return self.margins().left()+10+titleEntriesStartPosition[i]});var colorEntries=this._svg.selectAll(".chart-title-color").data(this._colorLabels).enter().append("circle").attr("class","chart-title-color").attr("cx",
function(column,i){return self.margins().left()+4+titleEntriesStartPosition[i]}).attr("cy",self.margins().top()-9).attr("r",4).style("shape-rendering","auto").style("stroke-width","0").attr("fill",function(label,i){return self.colors().getByKey(label)}).style("stroke-width",0);var title="";return items};epiviz.plugins.charts.CustomScatterPlot.prototype.colorLabels=function(){return this._colorLabels};
epiviz.plugins.charts.CustomScatterPlot.prototype._drawAxes=function(xScale,yScale,xTicks,yTicks,svg,width,height,margins){epiviz.ui.charts.Plot.prototype._drawAxes.call(this,xScale,yScale,xTicks,yTicks,svg,width,height,margins);var self=this;this._legend.selectAll("text").remove();var xMeasurements=["pca1"];var self=this;this._legend.selectAll(".x-measurement").remove();this._legend.selectAll(".x-measurement-color").remove();var xEntries=this._legend.selectAll(".x-measurement").data(xMeasurements).enter().append("text").attr("class",
"x-measurement").attr("font-weight","bold").attr("fill",function(m,i){return self._globalIndexColorLabels?"#000000":self.colors().get(i)}).attr("y",this.height()-this.margins().bottom()+35).text(function(m,i){return m+" (% Variance Explained = "+self._variance_labels[0]+")"});var xTextLength=0;var xTitleEntriesStartPosition=[];this._container.find(" .x-measurement").each(function(i){xTitleEntriesStartPosition.push(xTextLength);xTextLength+=this.getBBox().width+15});xEntries.attr("x",function(column,
i){return(self.width()-xTextLength)*.5+7+xTitleEntriesStartPosition[i]});var yMeasurements=["pca2"];this._legend.selectAll(".y-measurement").remove();this._legend.selectAll(".y-measurement-color").remove();var yEntries=this._legend.selectAll(".y-measurement").data(yMeasurements).enter().append("text").attr("class","y-measurement").attr("font-weight","bold").attr("fill",function(m,i){return self._globalIndexColorLabels?"#000000":self.colors().get(i)}).attr("y",this.margins().left()-35).attr("transform",
"rotate(-90)").text(function(m,i){return m+" (% Variance Explained = "+self._variance_labels[1]+")"});var yTextLength=0;var yTitleEntriesStartPosition=[];this._container.find(" .y-measurement").each(function(i){yTitleEntriesStartPosition.push(yTextLength);yTextLength+=this.getBBox().width+15});yEntries.attr("x",function(column,i){return-self.height()+(self.height()-yTextLength)*.5+12+self.margins().top()+yTitleEntriesStartPosition[i]})};
epiviz.plugins.charts.CustomScatterPlot.prototype.transformData=function(range,data){var lastRange=this._lastRange;if(range!=undefined)this._lastRange=range;if(data!=undefined){this._lastData=data;this._unalteredData=data}var deferred=new epiviz.deferred.Deferred;deferred.resolve();return deferred};goog.provide("epiviz.plugins.charts.CustomScatterPlotType");goog.require("epiviz.plugins.charts.CustomScatterPlot");goog.require("epiviz.ui.charts.PlotType");goog.require("epiviz.measurements.Measurement.Type");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.charts.Visualization");epiviz.plugins.charts.CustomScatterPlotType=function(config){epiviz.ui.charts.PlotType.call(this,config)};epiviz.plugins.charts.CustomScatterPlotType.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.PlotType.prototype);
epiviz.plugins.charts.CustomScatterPlotType.constructor=epiviz.plugins.charts.CustomScatterPlotType;epiviz.plugins.charts.CustomScatterPlotType.prototype.createNew=function(id,container,properties){return new epiviz.plugins.charts.CustomScatterPlot(id,container,properties)};epiviz.plugins.charts.CustomScatterPlotType.prototype.typeName=function(){return"epiviz.plugins.charts.CustomScatterPlot"};epiviz.plugins.charts.CustomScatterPlotType.prototype.chartName=function(){return"PCA Scatter Plot"};
epiviz.plugins.charts.CustomScatterPlotType.prototype.chartHtmlAttributeName=function(){return"pca_scatter"};epiviz.plugins.charts.CustomScatterPlotType.prototype.measurementsFilter=function(){return function(m){return epiviz.measurements.Measurement.Type.hasValues(m.type())}};epiviz.plugins.charts.CustomScatterPlotType.prototype.isRestrictedToSameDatasourceGroup=function(){return true};epiviz.plugins.charts.CustomScatterPlotType.prototype.minSelectedMeasurements=function(){return 2};
epiviz.plugins.charts.CustomScatterPlotType.prototype.customSettingsDefs=function(){return epiviz.ui.charts.PlotType.prototype.customSettingsDefs.call(this).concat([new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.CustomScatterPlotType.CustomSettings.CIRCLE_RADIUS_RATIO,epiviz.ui.charts.CustomSetting.Type.NUMBER,.015,"Circle radius ratio"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,
"Min X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.X_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Max X"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MIN,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,"Min Y"),new epiviz.ui.charts.CustomSetting(epiviz.ui.charts.Visualization.CustomSettings.Y_MAX,epiviz.ui.charts.CustomSetting.Type.NUMBER,epiviz.ui.charts.CustomSetting.DEFAULT,
"Max Y"),new epiviz.ui.charts.CustomSetting(epiviz.plugins.charts.CustomScatterPlotType.CustomSettings.COLOR_BY,epiviz.ui.charts.CustomSetting.Type.MEASUREMENTS_ANNOTATION,"name","Color By")])};epiviz.plugins.charts.CustomScatterPlotType.CustomSettings={CIRCLE_RADIUS_RATIO:"circleRadiusRatio",COLOR_BY:"colorBy"};goog.provide("epiviz.ui.charts.ChartFactory");goog.require("epiviz.utils");goog.require("epiviz.plugins.charts.BlocksTrackType");goog.require("epiviz.plugins.charts.StackedBlocksTrackType");goog.require("epiviz.plugins.charts.LineTrackType");goog.require("epiviz.plugins.charts.StackedLineTrackType");goog.require("epiviz.plugins.charts.ScatterPlotType");goog.require("epiviz.plugins.charts.GenesTrackType");goog.require("epiviz.plugins.charts.HeatmapPlotType");goog.require("epiviz.plugins.charts.LinePlotType");
goog.require("epiviz.plugins.charts.StackedLinePlotType");goog.require("epiviz.ui.charts.tree.IcicleType");goog.require("epiviz.plugins.charts.DiversityScatterPlotType");goog.require("epiviz.plugins.charts.CustomScatterPlotType");epiviz.ui.charts.ChartFactory=function(config){this._config=config;this._types={};this._size=0;for(var i=0;i<config.chartTypes.length;++i)this.register(config.chartTypes[i])};epiviz.ui.charts.ChartFactory.prototype.size=function(){return this._size};
epiviz.ui.charts.ChartFactory.prototype.registerType=function(type){if(!(type.typeName()in this._types))++this._size;this._types[type.typeName()]=type};epiviz.ui.charts.ChartFactory.prototype.unregisterType=function(type){if(!(type.typeName()in this._types))return false;--this._size;delete this._types[type.typeName()];return true};
epiviz.ui.charts.ChartFactory.prototype.register=function(typeName){var typeDescriptorConstructor=epiviz.utils.evaluateFullyQualifiedTypeName(typeName);if(!typeDescriptorConstructor)return false;this.registerType((new typeDescriptorConstructor(this._config)));return true};epiviz.ui.charts.ChartFactory.prototype.unregister=function(typeName){var typeDescriptorConstructor=epiviz.utils.evaluateFullyQualifiedTypeName(typeName);if(!typeDescriptorConstructor)return false;return this.unregisterType((new typeDescriptorConstructor(this._config)))};
epiviz.ui.charts.ChartFactory.prototype.get=function(typeName){if(typeName&&typeName in this._types)return this._types[typeName];return null};epiviz.ui.charts.ChartFactory.prototype.foreach=function(func){for(var typeName in this._types){if(!this._types.hasOwnProperty(typeName))continue;if(func(typeName,this._types[typeName]))return}};goog.provide("epiviz.ui.controls.Control");goog.require("epiviz.utils");epiviz.ui.controls.Control=function(container,title,id){this._container=container;this._title=title||"";this._id=id||epiviz.utils.generatePseudoGUID(6)};epiviz.ui.controls.Control.prototype.initialize=function(){};epiviz.ui.controls.Control.prototype.id=function(){return this._id};epiviz.ui.controls.Control.prototype.title=function(){return this._title};goog.provide("epiviz.ui.controls.DataTable");goog.require("epiviz.ui.controls.Control");
epiviz.ui.controls.DataTable=function(container,columns,rows,rowParser,multiselect,showColumnSelector){epiviz.ui.controls.Control.call(this,container);this._columns=columns;this._rows=rows;this._rowsArray=[];var self=this;this._rows.foreach(function(row){self._rowsArray.push(row)});this._rowParser=rowParser;this._multiselect=multiselect||false;this._showColumnSelector=showColumnSelector||false;this._table=null;this._columnSelector=null;this._selectedIndices=[];this._selectedIndicesMap={};this._selectList=
null;this._deselectList=null;this._lastSelection=null};epiviz.ui.controls.DataTable.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Control.prototype);epiviz.ui.controls.DataTable.constructor=epiviz.ui.controls.DataTable;epiviz.ui.controls.DataTable.ColumnType={STRING:"string",NUMBER:"number",BOOLEAN:"boolean"};
epiviz.ui.controls.DataTable.prototype.initialize=function(){this._container.append('<div class="epiviz-data-table"><table style="width: 100%!important;"><thead></thead><tbody></tbody><tfoot></tfoot></table></div>');this._table=this._container.find("table");var thead=this._table.find("thead");var tfoot=this._table.find("tfoot");var tbody=this._table.find("tbody");var headFootContent=sprintf("<tr><th>%s</th></tr>",this._columns.join("</th><th>"));thead.append(headFootContent);tfoot.append(headFootContent);
var self=this;this._rows.foreach(function(row){var rowHtml="";for(var i=0;i<self._columns.length;++i)rowHtml+=sprintf("<td>%s</td>",self._rowParser(row,self._columns[i]));tbody.append(sprintf("<tr>%s</tr>",rowHtml))});var j;var columnFilterTypes=new Array(this._columns.length);for(j=0;j<this._columns.length;++j)columnFilterTypes[j]={type:"text",bRegex:true,bSmart:true};this._table.dataTable({bJQueryUI:true,sDom:'<"H"lfr>Tt<"F"ip>',oTableTools:{sRowSelect:this._multiselect?"multi":"single",aButtons:["select_all"],
fnPreRowSelect:function(e,nodes,isSelect){return self._preRowSelect(this,e,nodes,isSelect)},fnRowSelected:function(nodes){return self._select(this,nodes)},fnRowDeselected:function(nodes){return self._select(this,nodes)}}}).columnFilter({aoColumns:columnFilterTypes});var visibleIndex=-1;for(j=0;j<this._columns.length;++j){if(this._columns[j].isVisible)++visibleIndex;this._table.fnSetColumnVis(j,this._columns[j].isVisible);if(!this._columns[j].defaultFilter)continue;this._table.fnFilter(this._columns[j].defaultFilter,
j,true,true);this._table.find("tfoot").find(sprintf("th:eq(%s)",visibleIndex)).find("input").removeClass("search_init").val(this._columns[j].defaultFilter)}this._container.find(".ui-buttonset").first().attr("style","position: absolute!important;");if(this._showColumnSelector){var colSelectorCls="epiviz-data-table-column-selector";this._container.find(".fg-toolbar").first().append(sprintf('<div style="float: right; margin-right: 5px;">'+"<label>Selected Columns: </label>"+'<select class="%s" multiple="multiple" style="">'+
'<option value="-1">All</option>'+"</select>"+"</div>",colSelectorCls));this._columnSelector=this._container.find("."+colSelectorCls);for(var i=0;i<this._columns.length;++i){var option=sprintf('<option value="%s"%s%s>%s</option>',i,this._columns[i].isVisible?' selected="selected"':"",this._columns[i].isFixed?' disabled="disabled"':"",this._columns[i].name);this._columnSelector.append(option)}this._columnSelector.dropdownchecklist({width:"80px",firstItemChecksAll:true,onComplete:function(selector){self._selectColumns(selector)}})}};
epiviz.ui.controls.DataTable.prototype.selectedIndices=function(){return this._selectedIndices||[]};epiviz.ui.controls.DataTable.prototype.selectedRows=function(){if(!this._selectedIndices)return[];var result=new Array(this._selectedIndices.length);for(var i=0;i<this._selectedIndices.length;++i)result[i]=this._rowsArray[this._selectedIndices[i]];return result};
epiviz.ui.controls.DataTable.prototype._preRowSelect=function(tableTools,e,nodes,isSelect){if(e){this._selectList=this._deselectList=null;if(e.shiftKey&&nodes.length==1){this._deselectList=tableTools.fnGetSelected();if(!this._lastSelection)this._lastSelection=nodes[0];this._selectList=this._getRangeOfRows(this._lastSelection,nodes[0])}else{this._lastSelection=nodes[0];if(!e.ctrlKey&&!e.metaKey){this._deselectList=tableTools.fnGetSelected();if(!isSelect)this._selectList=nodes}}}return true};
epiviz.ui.controls.DataTable.prototype._getRangeOfRows=function(fromNode,toNode){var fromPos=this._table.fnGetPosition(fromNode),toPos=this._table.fnGetPosition(toNode),oSettings=this._table.fnSettings(),fromIndex=$.inArray(fromPos,oSettings.aiDisplay),toIndex=$.inArray(toPos,oSettings.aiDisplay),result=[];if(fromIndex>=0&&toIndex>=0)for(var i=Math.min(fromIndex,toIndex);i<=Math.max(fromIndex,toIndex);++i){var dataIndex=oSettings.aiDisplay[i];result.push(oSettings.aoData[dataIndex].nTr)}return result.length>
0?result:null};
epiviz.ui.controls.DataTable.prototype._select=function(tableTools,nodes){var nodeList;if(this._deselectList){nodeList=this._deselectList;this._deselectList=null;tableTools.fnDeselect(nodeList)}if(this._selectList){nodeList=this._selectList;if(!this._multiselect&&nodeList.length>0)nodeList=[nodeList[nodeList.length-1]];this._selectList=null;tableTools.fnSelect(nodeList)}var selection=tableTools.fnGetSelected();var selectedIndices=new Array(selection.length);var selectedIndicesMap={};var i;for(i=0;i<
selection.length;++i){selectedIndices[i]=this._table.fnGetPosition(selection[i]);selectedIndicesMap[selectedIndices[i]]=true}for(i=0;i<this._selectedIndices.length;++i)if(!selectedIndicesMap[this._selectedIndices[i]]){delete this._selectedIndicesMap[this._selectedIndices[i]];this._selectedIndices.splice(i,1);--i}for(i=0;i<selectedIndices.length;++i)if(!this._selectedIndicesMap[selectedIndices[i]]){this._selectedIndicesMap[selectedIndices[i]]=true;this._selectedIndices.push(selectedIndices[i])}return true};
epiviz.ui.controls.DataTable.prototype._selectColumns=function(selector){var selectedIndices={},i;for(i=0;i<selector.options.length;++i)if(selector.options[i].selected&&selector.options[i].value)selectedIndices[parseInt(selector.options[i].value)]=true;for(i=0;i<this._columns.length;++i)this._table.fnSetColumnVis(i,selectedIndices[i]||this._columns[i].isFixed)};goog.provide("epiviz.ui.controls.DataTable.Column");
epiviz.ui.controls.DataTable.Column=function(id,name,type,isHidden,isFixed,defaultFilter){this.id=id;this.name=name;this.type=type;this.isVisible=!isHidden;this.isFixed=isFixed||false;this.defaultFilter=defaultFilter||""};epiviz.ui.controls.DataTable.Column.prototype.toString=function(){return this.name};goog.provide("epiviz.utils.IterableArray");goog.require("epiviz.utils.Iterable");epiviz.utils.IterableArray=function(array){this._array=array};epiviz.utils.IterableArray.prototype.foreach=function(iteration){for(var i=0;i<this._array.length;++i)if(iteration(this._array[i]))return};goog.provide("epiviz.ui.controls.DatasourceGroupWizardStep");goog.require("epiviz.ui.controls.DataTable");goog.require("epiviz.utils.IterableArray");epiviz.ui.controls.DatasourceGroupWizardStep=function(){this._dataTable=null;this._data=null};
epiviz.ui.controls.DatasourceGroupWizardStep.prototype.initialize=function(container,data){this._data=data;container.find(".epiviz-data-table").remove();var columns=[new epiviz.ui.controls.DataTable.Column("datasourceGroup","Data Source Group",epiviz.ui.controls.DataTable.ColumnType.STRING)];var datasourceGroups={};data.measurements.foreach(function(m){if(data.dataprovider&&data.dataprovider!=m.dataprovider())return;if(data.annotation)for(var key in data.annotation){if(!data.annotation.hasOwnProperty(key))continue;
if(!m.annotation()||m.annotation()[key]!=data.annotation[key])return}datasourceGroups[m.datasourceGroup()]=true});this._dataTable=new epiviz.ui.controls.DataTable(container,columns,new epiviz.utils.IterableArray(Object.keys(datasourceGroups)),function(v){return v});this._dataTable.initialize()};
epiviz.ui.controls.DatasourceGroupWizardStep.prototype.next=function(){var selectedRows=this._dataTable?this._dataTable.selectedRows():[];if(selectedRows.length==0)return{error:"No rows selected"};this._data.datasourceGroup=selectedRows[0];var copy=new epiviz.ui.controls.VisConfigSelection(this._data.measurements.subset(function(m){return m.datasourceGroup()==selectedRows[0]}),this._data.datasource,this._data.datasourceGroup,this._data.dataprovider,this._data.annotation?epiviz.utils.mapCopy(this._data.annotation):
this._data.annotation,this._data.defaultChartType,this._data.minSelectedMeasurements,this._data.customData);return{data:copy}};epiviz.ui.controls.DatasourceGroupWizardStep.prototype.title=function(){return"Select Datasource Group"};goog.provide("epiviz.ui.controls.MeaurementsWizardStep");goog.require("epiviz.ui.controls.DataTable");goog.require("epiviz.measurements.MeasurementSet");epiviz.ui.controls.MeaurementsWizardStep=function(){this._dataTable=null;this._data=null;this._measurements=null};
epiviz.ui.controls.MeaurementsWizardStep.prototype.initialize=function(container,data){this._data=data;container.find(".epiviz-data-table").remove();var viewCount=2;var ColumnType=epiviz.ui.controls.DataTable.ColumnType;var columns=[new epiviz.ui.controls.DataTable.Column("id","Id",ColumnType.STRING,true),new epiviz.ui.controls.DataTable.Column("name","Name",ColumnType.STRING,false,true),new epiviz.ui.controls.DataTable.Column("type","Type",ColumnType.STRING,true),new epiviz.ui.controls.DataTable.Column("datasourceId",
"Data Source",ColumnType.STRING,true),new epiviz.ui.controls.DataTable.Column("datasourceGroup","Data Source Group",ColumnType.STRING,true),new epiviz.ui.controls.DataTable.Column("dataprovider","Data Provider",ColumnType.STRING,true),new epiviz.ui.controls.DataTable.Column("formulaStr","Formula",ColumnType.STRING,true)];var annotationColumns=[];var annotationMap={};data.measurements.foreach(function(m){var anno=m.annotation();if(anno==undefined)return;for(var annoCol in anno){if(!anno.hasOwnProperty(annoCol))continue;
if(!(annoCol in annotationMap)){annotationColumns.push(annoCol);annotationMap[annoCol]=true}}});annotationColumns.sort();columns=columns.concat(annotationColumns.map(function(annoCol){var hidden=false;if(viewCount<=0)hidden=true;viewCount--;return new epiviz.ui.controls.DataTable.Column("[anno] "+annoCol,annoCol,ColumnType.STRING,hidden)}));this._measurements=data.measurements.subset(function(m){if(data.datasource&&data.datasource!=m.datasourceId())return false;if(data.datasourceGroup&&data.datasourceGroup!=
m.datasourceGroup())return false;if(data.dataprovider&&data.dataprovider!=m.dataprovider())return false;if(data.annotation)for(var key in data.annotation){if(!data.annotation.hasOwnProperty(key))continue;if(!m.annotation()||m.annotation()[key]!=data.annotation[key])return false}return true});this._dataTable=new epiviz.ui.controls.DataTable(container,columns,this._measurements,function(m,column){var result=null;if(epiviz.utils.stringStartsWith(column.id,"[anno] ")){result="";if(m.annotation()!=undefined)result=
m.annotation()[column.name]||""}else switch(column.id){case "annotation":result=epiviz.utils.mapJoin(m.annotation(),": ","<br />");break;default:result=m[column.id]();break}if(result===0||result)return result;return""},true,true);this._dataTable.initialize()};
epiviz.ui.controls.MeaurementsWizardStep.prototype.next=function(){var selectedRows=this._dataTable?this._dataTable.selectedRows():[];if(selectedRows.length<this._data.minSelectedMeasurements)return{error:"Minimum selected rows required is "+this._data.minSelectedMeasurements};var selectedMeasurements=new epiviz.measurements.MeasurementSet;for(var i=0;i<selectedRows.length;++i)selectedMeasurements.add(selectedRows[i]);this._data.measurements=selectedMeasurements;return{data:this._data}};
epiviz.ui.controls.MeaurementsWizardStep.prototype.title=function(){return"Select Measurements"};goog.provide("epiviz.ui.controls.Wizard");goog.require("epiviz.ui.controls.Dialog");goog.require("epiviz.ui.controls.MessageDialog");goog.require("epiviz.utils");epiviz.ui.controls.Wizard=function(title,handlers,steps,initialData,width,height,showTabs){epiviz.ui.controls.Dialog.call(this,title,handlers);this._steps=steps;this._initialData=initialData;this._width=width;this._height=height;this._showTabs=showTabs||false;this._tabs=null;this._initialize()};epiviz.ui.controls.Wizard.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);
epiviz.ui.controls.Wizard.constructor=epiviz.ui.controls.Wizard;
epiviz.ui.controls.Wizard.prototype._initialize=function(){var self=this;this._dialog=$("#"+this._id);this._dialog.append('<div id="wizardDialog" class="wizard-dialog">'+'<div class="wizard-tabs">'+'<ul class="wizard-tabs-title-list"></ul>'+"</div>"+"</div>");this._tabs=this._dialog.find(".wizard-tabs");var titleList=this._tabs.find(".wizard-tabs-title-list");for(var i=0;i<this._steps.length;++i){titleList.append(sprintf('<li><a href="#%s-tab-%s">%s</a></li>',this._id,i,this._steps[i].title()));this._tabs.append(sprintf('<div id="%s-tab-%s"></div>',
this._id,i))}if(!this._showTabs){titleList.css("visibility","hidden");titleList.css("position","absolute")}this._tabs.tabs({activate:function(e,ui){self._tabActivate(ui)},disabled:epiviz.utils.range(this._steps.length-1,1)});this._dialog.dialog({autoOpen:false,resizable:true,width:this._width||undefined,height:this._height||undefined,buttons:{Back:function(){var selectedTabIndex=self._tabs.tabs("option","active");if(selectedTabIndex==0)return;self._tabs.tabs("option","disabled",epiviz.utils.range(self._steps.length-
selectedTabIndex,selectedTabIndex));self._tabs.tabs("option","active",selectedTabIndex-1)},Next:function(){var selectedTabIndex=self._tabs.tabs("option","active");var result=self._steps[selectedTabIndex].next();if(result.error){var errorDialog=new epiviz.ui.controls.MessageDialog("Error",{Ok:function(){}},result.error,epiviz.ui.controls.MessageDialog.Icon.ERROR);errorDialog.show();return}self._steps[selectedTabIndex+1].initialize($(sprintf("#%s-tab-%s",self._id,selectedTabIndex+1)),result.data);self._tabs.tabs("option",
"disabled",epiviz.utils.range(self._steps.length-selectedTabIndex-2,selectedTabIndex+2));self._tabs.tabs("option","active",selectedTabIndex+1)},Finish:function(){var result=self._steps[self._steps.length-1].next();if(result.error){var errorDialog=new epiviz.ui.controls.MessageDialog("Error",{Ok:function(){}},result.error,epiviz.ui.controls.MessageDialog.Icon.ERROR);errorDialog.show();return}if(self._handlers.finish)self._handlers.finish(result.data);$(this).dialog("close")},Cancel:function(){if(self._handlers.close)self._handlers.close();
$(this).dialog("close")}},modal:true});if(this._steps.length>1){this._dialog.parent().find('button:contains("Finish")').button("disable");this._dialog.parent().find('button:contains("Next")').button("enable")}else{this._dialog.parent().find('button:contains("Finish")').button("enable");this._dialog.parent().find('button:contains("Next")').button("disable")}this._steps[0].initialize($(sprintf("#%s-tab-0",self._id)),this._initialData);this._dialog.css("overflow","visible")};
epiviz.ui.controls.Wizard.prototype._tabActivate=function(ui){var selectedTabIndex=this._tabs.tabs("option","active");var finishButton=this._dialog.parent().find('button:contains("Finish")');var nextButton=this._dialog.parent().find('button:contains("Next")');if(selectedTabIndex==this._steps.length-1){nextButton.button("disable");finishButton.button("enable")}else{nextButton.button("enable");finishButton.button("disable")}this._tabs.tabs("option","disabled",epiviz.utils.range(this._steps.length-selectedTabIndex-
1,selectedTabIndex+1))};epiviz.ui.controls.Wizard.prototype.show=function(){var self=this;this._dialog.dialog("open");this._dialog.dialog("option","position","center");this._dialog.dialog({close:function(event,ui){$(this).remove();self._dialog=null}})};goog.provide("epiviz.ui.controls.Wizard.Step");epiviz.ui.controls.Wizard.Step=function(){};epiviz.ui.controls.Wizard.Step.prototype.initialize=function(container,data){};epiviz.ui.controls.Wizard.Step.prototype.next=function(){};
epiviz.ui.controls.Wizard.Step.prototype.title=function(){};goog.provide("epiviz.ui.controls.ComputedMeasurementsDialog");goog.require("epiviz.ui.controls.Dialog");goog.require("epiviz.measurements.Measurement");goog.require("epiviz.utils");goog.require("epiviz.ui.controls.MessageDialog");
epiviz.ui.controls.ComputedMeasurementsDialog=function(title,handlers,measurements,chartsMeasurements){epiviz.ui.controls.Dialog.call(this,title,handlers);this._measurements=measurements;this._chartsMeasurements=chartsMeasurements;this._expressionTextBox=null;this._idTextBox=null;this._nameTextBox=null;this._minTextBox=null;this._maxTextBox=null;this._measurementsList=null;this._addButtonProperties={text:false,icons:{primary:"ui-icon ui-icon-plus"}};this._deleteButtonsProperties={text:false,icons:{primary:"ui-icon ui-icon-trash"}};
this._tabs=null;this._selectedDatasourceGroup=null;this._datasourceGroupMeasurements=null;this._addTabs();this._addDialogContents();this._addDatasourceGroupTable(measurements)};epiviz.ui.controls.ComputedMeasurementsDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.ComputedMeasurementsDialog.constructor=epiviz.ui.controls.ComputedMeasurementsDialog;
epiviz.ui.controls.ComputedMeasurementsDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var self=this;if(this._dialog){this._dialog.dialog("open");this._dialog.dialog("option","position","center");this._dialog.dialog({close:function(event,ui){$(this).remove();self._dialog=null;self._handlers.close()}})}};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._addDatasourceGroupTable=function(measurements){var self=this;var container=$(sprintf("#datasource-group-tab-%s",this._id));var rawTableCls="computed-measurements-dialog-raw-table";var table="<table "+'style="border-spacing:0; '+"border-collapse:collapse; "+"-webkit-touch-callout: none; "+"-webkit-user-select: none; "+"-khtml-user-select: none; "+"-moz-user-select: moz-none; "+"-ms-user-select: none; "+"user-select: none; "+'width: 100%%;" '+
'class="'+rawTableCls+'">%s</table>';var header="<thead><tr><th>Data Source Group</th></tr></thead>";var footer="<tfoot><tr><th>Data Source Group</th></tr></tfoot>";var body="";var measurementsByDatasourceGroup={};measurements.foreach(function(m){if(m.type()!=epiviz.measurements.Measurement.Type.FEATURE)return;if(!(m.datasourceGroup()in measurementsByDatasourceGroup))measurementsByDatasourceGroup[m.datasourceGroup()]=[];measurementsByDatasourceGroup[m.datasourceGroup()].push(m)});for(var g in measurementsByDatasourceGroup){if(!measurementsByDatasourceGroup.hasOwnProperty(g))continue;
body+=sprintf('<tr><td class="center">%s</td></tr>',g)}container.append(sprintf(table,header+body+footer));var rawTable=container.find("."+rawTableCls);var oTable=rawTable.dataTable({bJQueryUI:true,sDom:'<"H"lfr>Tt<"F"ip>',"oTableTools":{"sRowSelect":"single","aButtons":[],"fnPreRowSelect":function(e,nodes,isSelect){return true},"fnRowSelected":function(nodes){var data=oTable.fnGetData(nodes[0]);self._selectedDatasourceGroup=data[0];self._datasourceGroupMeasurements=measurementsByDatasourceGroup[self._selectedDatasourceGroup]},
"fnRowDeselected":function(nodes){var data=oTable.fnGetData(nodes[0]);if(data==self._selectedDatasourceGroup){self._selectedDatasourceGroup=null;self._datasourceGroupMeasurements=null}}}});container.find(".DTTT_container").css("position","absolute")};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._addTabs=function(){var self=this;this._selectDialog().append('<div id="computedMeasurementsDialog" class="computed-measurements-dialog">'+'<div class="computed-measurements-tabs">'+"<ul>"+sprintf('<li><a href="#datasource-group-tab-%s">Data Source Group</a></li>',this._id)+sprintf('<li><a href="#formula-tab-%s">Expression</a></li>',this._id)+"</ul>"+sprintf('<div id="datasource-group-tab-%s"></div>',this._id)+sprintf('<div id="formula-tab-%s"></div>',
this._id)+"</div>"+"</div>");this._tabs=this._selectTabs();this._tabs.tabs({activate:function(e,ui){self._tabActivate(ui)}})};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._addDialogContents=function(){var self=this;this._selectDialog().dialog({autoOpen:false,resizable:true,width:"600",height:"550",buttons:{Back:function(){var selectedTabIndex=self._tabs.tabs("option","active");if(selectedTabIndex==0)return;self._tabs.tabs("option","active",0)},Next:function(){var selectedTabIndex=self._tabs.tabs("option","active");if(selectedTabIndex==1)return;self._tabs.tabs("option","active",1)},Add:function(){var expr=epiviz.utils.ExpressionParser.parse(self._selectExpressionTextBox().val().trim());
var referredMeasurements={};var variables=expr.variables();var min=null,max=null;var metadata=[];var usedMetadata={};for(var i=0;i<variables.length;++i){var variable=variables[i];if(!epiviz.utils.stringStartsWith(variable,"{")||!epiviz.utils.stringEndsWith(variable,"}"))continue;var index=parseInt(variable.substring(1,variable.length-1));var m=self._datasourceGroupMeasurements[index];referredMeasurements[index]=m;if(min===null||min>m.minValue())min=m.minValue();if(max===null||max<m.maxValue())max=
m.maxValue();if(m.metadata())for(var j=0;j<m.metadata().length;++j)if(!usedMetadata[m.metadata()[j]]){usedMetadata[m.metadata()[j]]=true;metadata.push(m.metadata()[j])}}var userMin=self._selectMinTextBox().val().trim();var userMax=self._selectMaxTextBox().val().trim();min=userMin?parseFloat(userMin):min;max=userMax?parseFloat(userMax):max;var id=self._selectIdTextBox().val().trim()||epiviz.utils.generatePseudoGUID(5);var measurement=new epiviz.measurements.Measurement(id,self._selectNameTextBox().val().trim()||
"Unnamed ["+id+"]",epiviz.measurements.Measurement.Type.FEATURE,null,self._selectedDatasourceGroup,null,{referredMeasurements:referredMeasurements,expression:expr},"any",null,min,max,metadata);var nextIndex=self._datasourceGroupMeasurements.length;var msList=$(sprintf("#computed-measurement-measurements-%s",self._id));var removeButton='<button id="delete-button-%2$s-%3$s" data-measurement="%2$s">Delete</button>';msList.append(sprintf('<div style="min-height: 30px; padding: 2px;">'+'<div style="margin: 6px; float: left;">%1$s {<b>%2$s</b>}</div>'+
'<div style="float: right;">'+removeButton+'<button style="" id="measurement-button-%2$s-%3$s" data-measurement="%2$s">Insert %2$s</button>'+"</div>"+"</div>",measurement.name(),nextIndex,self._id));$("#measurement-button-"+nextIndex+"-"+self._id).button(self._addButtonProperties).click(function(){self._addButtonClick($(this))});$("#delete-button-"+nextIndex+"-"+self._id).button(self._deleteButtonsProperties).click(function(){self._deleteButtonClick($(this))});self._datasourceGroupMeasurements.push(measurement);
self._handlers.add(measurement)},Close:function(){self._handlers.close();$(this).dialog("close")}},modal:true})};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._addButtonClick=function(button){var measurementIndex=button.data("measurement");var exprBox=this._selectExpressionTextBox();exprBox.val(exprBox.val().trim()+" {"+measurementIndex+"}")};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._deleteButtonClick=function(button){var measurementIndex=button.data("measurement");var measurement=this._datasourceGroupMeasurements[measurementIndex];var dialog;for(var i=0;i<this._datasourceGroupMeasurements.length;++i){var m=this._datasourceGroupMeasurements[i];if(m==null||m===measurement||!m.isComputed())continue;if(m.componentMeasurements().contains(measurement)){dialog=new epiviz.ui.controls.MessageDialog("Measurement cannot be deleted",
{Ok:function(){}},"There are other measurements that depend on the one selected. Please delete those before deleting this.",epiviz.ui.controls.MessageDialog.Icon.ERROR);dialog.show();return}}for(var chartId in this._chartsMeasurements){if(!this._chartsMeasurements.hasOwnProperty(chartId))continue;if(this._chartsMeasurements[chartId].contains(measurement)){dialog=new epiviz.ui.controls.MessageDialog("Measurement cannot be deleted",{Ok:function(){}},"There are charts using the selected measurement. Remove them from the workspace and then try again.",
epiviz.ui.controls.MessageDialog.Icon.ERROR);dialog.show();return}}this._datasourceGroupMeasurements[measurementIndex]=null;button.parent().parent().remove();this._handlers.remove(measurement)};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._tabActivate=function(ui){var selectedTabIndex=this._selectTabs().tabs("option","active");if(selectedTabIndex==0)return;ui.newPanel.empty();this._idTextBox=null;this._nameTextBox=null;this._expressionTextBox=null;this._minTextBox=null;this._maxTextBox=null;this._measurementsList=null;if(!this._selectedDatasourceGroup)return;ui.newPanel.append(sprintf('<label for="computed-measurement-key-%1$s"><b>Id:</b></label> '+'<input id="computed-measurement-key-%1$s" class="ui-widget-content ui-corner-all" style="padding: 2px;" type="text"/>&nbsp;'+
'<label for="computed-measurement-name-%1$s"><b>Name:</b></label> '+'<input id="computed-measurement-name-%1$s" class="ui-widget-content ui-corner-all" style="padding: 2px;" type="text"/>'+"<br /><br />"+'<div id="computed-measurement-measurements-%1$s" style="overflow: auto; max-height: 200px; border-style: solid; border-width: 1px; border-color: #999999;"></div>'+"<br/>"+'<label for="computed-measurement-min-%1$s"><b>Min:</b></label> '+'<input id="computed-measurement-min-%1$s" class="ui-widget-content ui-corner-all" style="padding: 2px;" type="text"/>&nbsp;'+
'<label for="computed-measurement-max-%1$s"><b>Max:</b></label> '+'<input id="computed-measurement-max-%1$s" class="ui-widget-content ui-corner-all" style="padding: 2px;" type="text"/><br/>'+'<div style="overflow: hidden; padding: 10px; padding-right: 20px; margin: 0px;">'+'<textarea id="computed-measurement-expr-%1$s" class="ui-widget-content ui-corner-all" style="width: 100%%; height: 55px; padding: 5px; margin: 0; resize: none;"></textarea>'+"</div>",this._id));var msList=this._selectMeasurementsList();
var contents="";for(var i=0;i<this._datasourceGroupMeasurements.length;++i){var m=this._datasourceGroupMeasurements[i];var removeButton="";if(m.isComputed())removeButton='<button id="delete-button-%2$s-%3$s" data-measurement="%2$s">Delete %2$s</button>';contents+=sprintf('<div style="min-height: 30px; padding: 2px;">'+'<div style="margin: 6px; float: left;">%1$s {<b>%2$s</b>}</div>'+'<div style="float: right;">'+removeButton+'<button style="" id="measurement-button-%2$s-%3$s" data-measurement="%2$s">Insert %2$s</button>'+
"</div>"+"</div>",m.name(),i,this._id)}msList.append(contents);var self=this;for(i=0;i<this._datasourceGroupMeasurements.length;++i){m=this._datasourceGroupMeasurements[i];if(m.isComputed())$("#delete-button-"+i+"-"+this._id).button(this._deleteButtonsProperties).click(function(){self._deleteButtonClick($(this))});$("#measurement-button-"+i+"-"+this._id).button(this._addButtonProperties).click(function(){self._addButtonClick($(this))})}this._selectIdTextBox().watermark("[auto]");this._selectNameTextBox().watermark("[auto]");
this._selectMinTextBox().watermark("[auto]");this._selectMaxTextBox().watermark("[auto]");this._selectExpressionTextBox().watermark("[expression; for example: {0} - {1}]")};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectDialog=function(){if(!this._dialog)this._dialog=$("#"+this._id);return this._dialog};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectExpressionTextBox=function(){if(!this._expressionTextBox)this._expressionTextBox=$("#computed-measurement-expr-"+this._id);return this._expressionTextBox};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectIdTextBox=function(){if(!this._idTextBox)this._idTextBox=$("#computed-measurement-key-"+this._id);return this._idTextBox};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectNameTextBox=function(){if(!this._nameTextBox)this._nameTextBox=$("#computed-measurement-name-"+this._id);return this._nameTextBox};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectMinTextBox=function(){if(!this._minTextBox)this._minTextBox=$("#computed-measurement-min-"+this._id);return this._minTextBox};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectMaxTextBox=function(){if(!this._maxTextBox)this._maxTextBox=$("#computed-measurement-max-"+this._id);return this._maxTextBox};epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectTabs=function(){if(!this._tabs)this._tabs=this._dialog.find(".computed-measurements-tabs");return this._tabs};
epiviz.ui.controls.ComputedMeasurementsDialog.prototype._selectMeasurementsList=function(){if(!this._measurementsList)this._measurementsList=$("#computed-measurement-measurements-"+this._id);return this._measurementsList};goog.provide("epiviz.ui.tutorials");
epiviz.ui.tutorials=function(){this._tutorialList=[{"name":"Epiviz Overview","id":"tut_epiviz_overview","tutorial":[{target:"body",content:"<p class='intro-header'>Welcome to Epiviz Genomic Browser!<br></p>"+"<p class='intro-text'>This tutorial will walk you through the functionality available in Epiviz.</p>",position:"center"},{target:"#intro-navigation",content:"<p class='intro-text'>The navigation section of Epiviz lets you select a chromosome and explore the genome. Options are available to move left/right and zoom in/out.</p>"+"<p class='intro-text'>The settings icon allows you to control the navigation parameters.</p>",
position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#search-box",content:"<p class='intro-header'>Use the search input to look for a specific gene or target.</p>"+"<p class='intro-text'>This will navigate Epiviz to the selected gene location and update the workspace with the new data.</p>",position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#vis-menu-button",content:'<p class="intro-text">Choose from a list of available data sources, measurements or chart types to add visualizations to the Epiviz Workspace.</p>',
position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#intro-workspace",content:'<p class="intro-header">managing workspaces.</p>'+'<p class="intro-text">If you are logged in, you will be able to save your Epiviz analysis and workspaces.'+"You will also be able to retrieve them at a later time from your account.</p>",position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#login-link",content:'<p class="intro-text">Please login to save and manage Epiviz workspaces.</p>',
position:"left",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"body",content:"<p class='intro-header'>Thank you for using Epiviz!</p>"+'<p class="intro-text">If you would like to give us some feedback or stay informed with updates, Please visit the <a target="_blank" href="http://epiviz.github.io/">Epiviz webpage</a>.</p>',position:"center"}]},{"name":"Data Visualization and Controls","id":"tut_data_controls","tutorial":[{target:"body",content:"<p class='intro-header'>Welcome to Epiviz Genomic Browser!<br><br>"+
"Data visualization tutorial<br></p>"+"<p class='intro-text'>This tutorial will help create/add new data visualizations to the Epiviz workspace "+"and controls available for each visualization.</p>",position:"center"},{target:"#vis-menu-button",content:'<p class="intro-text">The Data Visualizations button helps users add new charts to the workspace.</p>'+"<p>Users have the option to choose data sources and measurements to add to the workspace.</p>",position:"right",onHide:function(anno,$target,$annoElem,
returnFromOnShow){$("#vis-menu-button").button().trigger("click")},showOverlay:function(){},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#vis-menu",content:'<p class="intro-text">Choose the type of chart to add to your workspace. We choose scatter plot to continue with the tutorial</p>',position:"right",onShow:function(anno,$target,$annoElem){},onHide:function(anno,$target,$annoElem,returnFromOnShow){$("#plot-menu-add-scatter").trigger("click")},showOverlay:function(){},buttons:[AnnoButton.BackButton,
AnnoButton.NextButton]},{target:function(){var parent=$("#wizardDialog").parent().attr("id");var p_parent=$("#"+parent).parent();return p_parent},content:'<p class="intro-text">This window lets you choose form a list of data sources and '+"the measurements available from each data source to add to your Epiviz workspace</p>"+"<p>We selected the first data source in the table or choose a data source from the list.</p>",showOverlay:function(){},onShow:function(anno,$target,$annoElem){$("#wizardDialog table tbody tr:first").trigger("click")},
onHide:function(anno,$target,$annoElem,returnFromOnShow){$('.ui-button:contains("Next")').trigger("click")},position:"right",buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){var parent=$("#wizardDialog").parent().attr("id");var p_parent=$("#"+parent).parent();return p_parent},content:'<p class="intro-text">After choosing a data source, the next tab lists all the measurements (or features) '+"available from this data source. If you have any computed measurements for this data source, they will be added to this list.</p>"+
"<p>To add a plot to the workspace, pick a few measurements and select finish on this window. </p>",showOverlay:function(){},position:"right",onShow:function(anno,$target,$annoElem){},onHide:function(anno,$target,$annoElem,returnFromOnShow){var parent=$("#wizardDialog").parent().attr("id");$("#"+parent).dialog("close")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#feature-view",content:'<p class="intro-text">Visualizations are added to the workspace based on the type of chart. </p>'+
"<p>Brushing is implemented on all the plots. When you hover over a data point, it highlight that region in the gene on all the visualizations.</p>",position:{top:"24em",left:"14em"},showOverlay:function(){},onShow:function(anno,$target,$annoElem){$('button:contains("Remove"):first').css("display","block")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Remove"):first')},content:'<p class="intro-text">Removes the plot from the workspace</p>',position:"left",
showOverlay:function(){},className:"anno-width-175",onShow:function(anno,$target,$annoElem){$('button:contains("Save"):eq(1)').css("display","block")},onHide:function(anno,$target,$annoElem,returnFromOnShow){$($target).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Save"):eq(1)')},content:'<p class="intro-text">Save a plot to your local machine (image, pdf)</p>',position:"left",showOverlay:function(){},className:"anno-width-175",
onShow:function(anno,$target,$annoElem){$('button:contains("Custom settings"):first').css("display","inline-block")},onHide:function(anno,$target,$annoElem,returnFromOnShow){$($target).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Custom settings"):first')},content:'<p class="intro-text">Change chart display properties and aggregation methods for grouping.</p>',position:"left",showOverlay:function(){},className:"anno-width-175",
onShow:function(anno,$target,$annoElem){$('button:contains("Code"):first').css("display","inline-block")},onHide:function(anno,$target,$annoElem,returnFromOnShow){$($target).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Code"):first')},content:'<p class="intro-text">Edit code to redraw the chart on the workspace.</p>',position:"left",showOverlay:function(){},className:"anno-width-175",onShow:function(anno,$target,$annoElem){$('button:contains("Colors"):first').css("display",
"inline-block")},onHide:function(anno,$target,$annoElem,returnFromOnShow){$($target).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('button:contains("Colors"):first')},content:'<p class="intro-text">Choose colors for data points on the plot</p>',position:"left",showOverlay:function(){},className:"anno-width-175",onShow:function(anno,$target,$annoElem){$('label:contains("Toggle tooltip"):first').css("display","block")},onHide:function(anno,
$target,$annoElem,returnFromOnShow){$($target).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:function(){return $('label:contains("Toggle tooltip"):first')},content:'<p class="intro-text">Toggle tooltips for data points</p>',position:"right",showOverlay:function(){},className:"anno-width-175",onHide:function(anno,$target,$annoElem,returnFromOnShow){$($target).css("display","none")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"body",content:"<p class='intro-header'>Thank you for using Epiviz!</p>"+
'<p class="intro-text">If you would like to give us some feedback or stay informed with updates, Please visit the <a target="_blank" href="http://epiviz.github.io/">Epiviz webpage</a>.</p>',position:"center"}]},{"name":"Computed Measurements","id":"tut_comp_measurements","tutorial":[{target:"body",content:"<p class='intro-header'>Welcome to Epiviz Genomic Browser!<br>"+"Compute Measurements Tutorial<br></p>"+"<p class='intro-text'>This tutorial will help you create new measurements (derived from existing measurements) and generate plots to add "+
"to the workspace.</p>",position:"center"},{target:"#computed-measurements-button",content:"<p class='intro-text'>The computed measurements button helps users "+"add new measurements to data sources</p>",position:"right",onShow:function(anno,$target,$annoElem){$("#computed-measurements-button").button().trigger("click")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#computedMeasurementsDialog",content:"<p class='intro-text'>This tab lets you "+"choose a data source where you will create a new measurement.</p>"+
"<p>We choose the first data source in the list or choose any data source.</p>",position:{top:"20em",left:"1em"},showOverlay:function(){},onShow:function(anno,$target,$annoElem){$("#computedMeasurementsDialog table tbody tr td:first").trigger("click")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#computedMeasurementsDialog",content:"<p class='intro-text'>The measurements tab lists "+"all available measurements from the selected data source (including previously created computed measurements).</p>"+
"<p>Use the buttons next to each measurement to add to the expression window</p>",position:{top:"20em",left:"1em"},showOverlay:function(){},onShow:function(anno,$target,$annoElem){$('.ui-button:contains("Next")').trigger("click")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#computedMeasurementsDialog",content:"<p class='intro-text'> After choosing measurements, use mathematical operators to evaluate the expression.</p>"+"<p><a target='_blank' href='https://silentmatt.com/javascript-expression-evaluator/'>supported operators</a> </p>",
position:{top:"33em",left:"1em"},showOverlay:function(){},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"#computedMeasurementsDialog",content:"<p class='intro-text'>After adding a computed measurement, "+"use the data visualization button to plot the measurement to your workspace.</p>"+"<p>To learn how to add new plots to the workspace, please use the Epiviz data visualization tutorial.</p>",position:{top:"10em",left:"1em"},showOverlay:function(){},onHide:function(anno,$target,$annoElem,
returnFromOnShow){var parent=$("#computedMeasurementsDialog").parent().attr("id");$("#"+parent).dialog("close")},buttons:[AnnoButton.BackButton,AnnoButton.NextButton]},{target:"body",content:"<p class='intro-header'>Thank you for using Epiviz!</p>"+'<p class="intro-text">If you would like to give us some feedback or stay informed with updates, Please visit the <a target="_blank" href="http://epiviz.github.io/">Epiviz webpage</a>.</p>',position:"center"}]}]};goog.provide("epiviz.ui.PrintManager");epiviz.ui.PrintManager=function(ctrId,fName,fType,workspaceId){this._containerId=ctrId?ctrId:"pagemain";this._fName=fName?fName:"epiviz_"+Math.floor($.now()/1E3);this._fType=fType?fType:"pdf";this._workspaceId=workspaceId};
epiviz.ui.PrintManager.prototype.print=function(){var self=this;var container=$("#"+self._containerId);function inline_styles(dom){var used="";var sheets=document.styleSheets;for(var i=0;i<sheets.length;i++){var rules=sheets[i].cssRules;for(var j=0;j<rules.length;j++){var rule=rules[j];if(typeof rule.style!="undefined"){var elems=dom.querySelectorAll(rule.selectorText);if(elems.length>0)used+=rule.selectorText+" { "+rule.style.cssText+" }\n"}}}$(dom).find("style").remove();var s=document.createElement("style");
s.setAttribute("type","text/css");s.innerHTML="<![CDATA[\n"+used+"\n]]\x3e";dom.insertBefore(s,dom.firstChild)}function custom_styles(dom){var axes=$(dom).find(".domain");axes.each(function(){$(this).css({"fill":"none","stroke-width":"1px","stroke":"#000000","shape-rendering":"crispEdges"})});var gLabels=$(dom).find(".gene-name");gLabels.each(function(){$(this).remove()});if(epiviz.utils.stringContains($(dom).attr("id"),"track-lines")){var lines=$(dom).find(".lines path");lines.each(function(){$(this).css({"fill":"none"})})}var texts=
$(dom).find("text");texts.each(function(){$(this).css({"font-size":"11px"})});var cLegends=$(dom).find(".chart-legend");cLegends.each(function(){$(this).css({"border":"none","background":"transparent"})})}var svgElems=container.find("svg");svgElems.each(function(){var canvas,xml;canvas=document.createElement("canvas");canvas.className="tempCanvas";custom_styles(this);xml=(new XMLSerializer).serializeToString(this);xml=xml.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/,"");var self=this;canvg(canvas,
xml,{useCORS:true,renderCallback:function(){$(canvas).insertAfter(this);$(this).hide()}})});html2canvas(container,{timeout:0,width:container[0].scrollWidth+200,height:container[0].scrollHeight+200,useCORS:true}).then(function(canvas){var ctx=canvas.getContext("2d");ctx.mozImageSmoothingEnabled=false;ctx.imageSmoothingEnabled=false;var filename=self._fName+"."+self._fType;var format=self._fType;var image=canvas.toDataURL("image/png");if(format=="pdf"){var toDataUrl=function(url,callback,outputFormat){var img=
new Image;img.onload=function(){var canvas=document.createElement("canvas");var ctx=canvas.getContext("2d");var dataURL;canvas.height=this.height;canvas.width=this.width;ctx.drawImage(this,0,0);dataURL=canvas.toDataURL(outputFormat);callback(dataURL);canvas=null};img.src=url};var dWidth=container[0].scrollWidth>1400?container[0].scrollWidth:1400;var dHeight=container[0].scrollHeight>1E3?container[0].scrollHeight:1E3;var jsdoc=new jsPDF("l","px",[dWidth*.6,dHeight*.65]);var s_url="http://epiviz.cbcb.umd.edu/4/?ws="+
self._workspaceId;jsdoc.addImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAAyCAYAAABIxaeCAAASqElEQVR4nO2de5QU1Z3Hv/Wurn5M9wxvGBwGBUVF4hBFgwkaZOPukRBdGBaDkpUdY7LGaDxCEjUxehSMxizHF8QHMasug9mYaKJBRKMm7LKALwQxMCAPcXAe/Ziuqdet2j+qi+npqemZ7q7u6eH055w6Z7rurXtv99S37r2/3+/eouoa1++nYb3GmOoWXj62JV417TiGIf6WZpGtOfMCwgUu0rmqGSbFTTZpZiRtkpE662c5ImsmzXXQpn4QwE7a1LYInbs2x0fNjg1luw89s2goq69QplC1SzZYJz5ZxGIs/QPaNLbQlvEnoXPXX+KjZmtD2L6s+FuaeTJh7nxCc4tNmr+M0IKUy/WMqRmAuYkzkk/y0T0vxEfNJsVqqwesyPg74pJnJYDVpWlOhWwU+sDtLcwMGFProE3tGdoyH1S50IGCavKQquj7I5TApBsNWmgiND/KizIZUz3AEfk+vvPDJ8vkYVQPYCH6F6EbFWGWCYUKk86WSGi+WmcDN6hc4GNY5Klg8sCpBdVWOAGOyPd0VZ1xQGWDt3klSgAgtDBJ4SKPJmsa9opax1COLyMA1gLYD2AVBi/KcmUu7O9iAeiA/bCpMADs4LLRLCgsk6UJSwQjtkbs+uTOWHh6V3Gb1htBjzeqXOAXOiON6y8PYyqttGnsBqwDAN3JmIpMGJ8AIGxS9DhCcWeBYuqy1UMYXx1hfBs4I/ltXo9+O+kb/7HX3yULTbBFebIQAdCMnoeL8/lSAJtL3JZVsEcfO1L1d5a4/pwYpDBtCMXxhK26xQhNvTIgH1reJU3cUqyGOQTkwyNUvvoRlQv1edIyphZlTeUlg/H9WVTb3k6KYw+StDGADn+f8vzKsTEKXzOf0OwCAHMBmnOrV2f9F5s0926wa9/Pdv/hxz+vXbKh2PPPZgzcm2xGzw29DmV+cwFogHuP34DSC7Mpre4mlPmQP+scMysWMUU9tlqQj9wRC083PG4XAEBSWy9TufCThBbG9Jw1TcFIvgqLPEbtf+Fl5fRlar7lhzreGZesOr0JFHN9tmGxpLa+xcX3L42NvPCTfOvKQgTAq7BvGDdaYIuwrG+kfojAHsZmivOk7zELNv6c8Y37r9TZqikmRTWAYubojFSTSwEM6d4qah2NSd/4wwW1JA1/SzNLJsy9W+GqbgXFUPZZUxOMrv9kiLJaFkZ5OryU1FYfYXxNKhtYCdBj3PJwRI5yRvIaWRj5Bw+rHkiU18EW5XBmLmxRNMAWw3UANg5pi0qAF1bZEx8OP9tIn7bwsRmEYv/FpPnFhBYmDKYQxtRaBa3jSlkc89eCWgMg2LV/lOwb9zxhfBfZZ0xIavvvGC16ayJ42r5Cy8+GqHUEFL56JSxyCyhG6JPBIpZfPX7vR//9/Ts8Gtr2N3xtgf1Ub/GgjgpDgKfCTMff0kyTCV+do7P+fyc0Px+gmexFmaqoRb+r8NVP5NsYv3JshsJX/57QwsRUme/4ldabk+LYN/ItMx9EreNUnfU/TGhhnlu6pLS+TLdubew6ZUGigGpWwO5JMmkBMBPlP3+skIWiuUuS9YtMha/ZQmjxCn/3p1M5I/kEYOpZihIUPvy4YMTvOvxsI5VrQ0St/QpFGPE2oYWJsIgiGImbAXpmqUUJAApfve/gf139NcbUrgPMPuKTxdGX6eMv+VtV27ZJeVYRQe+AAYdODAOLYYXik9WP6ZD0Tdivs/7lweQn0xhTa4btk3ItTmVDt9U3PvVk6OgmV2tnJoefbaQ4o+s2hQs/TyjOz5jadlHvbFDZ4IMAzMF+Ea+pXbLBIjS/jiHqOQzp3pqZrrKhs7qqp28V9c7+5ofZyBa5MxTDVyeQwfE3ph/7U2kV/2MJGZQwHRL+SfsIzTeKWvtFjKl80F8+nZGWdY+Z/UJV27asIXKho5u4Uxeu/bXOBu4CRYEx1XsJzV+g8CN259KuYkIY3wHxkxe/zBH5XmQ8KAgtjtbZwOui1v7VHIqMoMd0n45jfS0lK2A7/ZthD6vrXfLUp9KaU3nd2p6NV9Fb6K9mpG9Pnd+eY7n9EYHdTgu9RyWrUueaB7g288E02KMD7qOgvMhJmA4KX/NX/7E3GwQj9kNYRHHLozPSP3ZFzn45FN8Tckuv6tjp7x79pd+rXHgpgChHlAWEFn4EoCiul0JI1i8ydEb6kai1L2BMLZ6eRiguqHOhP4lax2B7lIVw7y1L6Q6phy2EXCOLnKik7XAXcT4437sB/Vunc6EJdjs7UdoHXQT27znXi8LyEiYAxMfP01W2apWoR7/ImOp7bnkI4/ty0l+3JSAfHpF+PhT/qEauOv01nfVfxpjqXsFInKczkpduiKKg8DUvBmK7ZwlGYm/6eUJxvMJVPScYsW8Oohi3f1wnSudCaIAtrEJE4EUZDhvRM3z3Yrjs9OibkftcvRMAleexI1WGF79J/sJ0UPiaXYHOD84XjPgatykhYXwN3eLINyWldRwA+Ls/HZ0M1L2hM9L5HJHflLo/vVBlg38vtB2lIhaZsUdo3Xq+YMT/2CuBYhiVrVov6NFrByjC7R+Xz02UDw2wh5JuveQ6AIvQ94ZbCfeHhuOD9aLndMovVJhz0dOeUvpKG9Lq9SRwomBhAkCsZqaqsqEbRS26GBbpE0NLaPEMlY+8LSmtkylLNwBYgpF4TorunpfwT+rwog2lJD5+Xow99Mp8zkjck/EwYlQ2+CtBj17fz6URuN/IO1zOFYO16CvKHQAmo3/H/2rYgnXzqzqxr4Xi1OusqMkX59oWlE6Y9eiJB94Ij/6XngjTQeGrN0jq57MYU+kTukZofpLKh9/Suaox/rbtX9jXvPyqWM3MvMPphppk/SJTZ4M/9iut19rrOlNQDKVy4YcFPXqDy2X9zeccw0ShRzbjwwr07a03w/aZDsYSvBnu4nRiTwthB3puaC+EWcq5ZTNsce6A/XDzBE+FCQCyOOZDqfvYLMZUt2WmEVoYazDSm1r49Ia8Y3TLjKQ49klJPnw5YyrpIwVK5UJrBD36w4zsXhlM8iFTtJ2we8JccCKSMofdXlgj04ez+fxOjtEnvaxi44RTtsD+LT2bjnguTABI+Cd9JiU/uZgj8kuZafYaz9BrotZ+STHqHgoSgcmvBGIffYUzEp/1nKWhcuF7BD16fz4BFx7jZgleifxupBb0tSAXOgRFqkynPfmU5VyzGaXxBTsWWOcB52mdRREmACSCU2Qpse8bjKU/k5lGaD5guxjav16s+ktNLDJjp9T+7gWCHt+Tfl7lwj+oa1z/XCi+x4ehi33NtAQX6kpwu9YrCy2Q+9C4Hj3fsRS9ZRN6RgkrUQQbQdGECQCx8HSDfv/RazgjsT4zjVCcoHOh34pa29XFbEMx8XcfCXFGcpNgJDZw761hYqMvOih8vm22oEffSs9HGF9jt/+UvwhGvO8CUZvJyN9Mn3705wt1m1sWQif63oxe+O/SjUC5lJdu9Cn2/HIuehazryxWfUUVJgDo53yP6GzwXwUj9lhmGqE4RuEi6zkjcXOx2+E1ghGbqAij3tZZ/6Um6LFS7WwRAOLj5nawhzfNE7WOXk9unZG+qLKh1wGz1aU4T3xfWcics3nxhM8sw4stUNKHobkMZ50etti9pWOBBYq8Rrbowkxh7Wtu+o5gxH/ZJ4ViKJ0NPiAYiYe499YMsIKlPBC1tvMMRvpfQvNnc0byZSn64ddi1ecmnfRk/SLl789fv1hSjz+Y4U6pYUzdLUzRk2iRLGSKxgsjReaw3CvDltMD5RJJVQrfZfo2KZvhoQXWjZy2FimE2iUbLBW4SdCjXSoXui3zmaCywe9yZy2vFbWOqxS+uqT7CeWCYMSvUfgRjwLwCUbiN0Lr1mtj4+f1WXVTu2SDKQM3S8pnB2Vh5C9AMamHDhVwKXYh8jfGDMRQWoLzYR16gvybMPBQ0RFwusulGDTDHtk4OyC48sz/3AUAeGvyXdnKWgbglLTPd6bOrXdOlKrHPIHKhW8XtegNgNlnobHOSPN1NrBVUluHeje+PviVYyJH5LUqG1oPwCepnz+wr3n5NXEXUaYji2PWSFrbQlhEBgBC8xSAZEa2CIbf6o1MwXtl2OpEzxx4oN8kgtIYfdam6nHcIoUwA8BTAH6aOuoAhAE8mJ6p5MIEAIWvfkjUOhYzlt4nAJ7Q/FkqF/k/Ueu4bCja5kZAPjRT4cI7dEZqYiydiFrHDbIw8pbB+mJlYfTvBCNxMSxyHLD363XJNty2qsycF3tpcXZENtelnnRKEbC+IlWPV26RdAFGAdwE4EbY4jzBkAgTABR+xPOi2nYJY2qfZaYRmg8rfPVLHJHvr2rf3neLjxIRTHzMiXrnnd2+sVsJ45vGmFpcVI5frvDVD+ValsqFtzGmNosxtY8IzdcCZuZw3Vm5MRyoR1/BeDmMHGxgu5O2EcWZBixEzy4T16Hw7zgndTg4NpfvZ2YcMmECQFIcu1XQY+dxRH7XJZnWGekHXZGztola25mlbpuktn5F9te9o3CROwjFsYypfOxTW2clfeNfzrdMwvgOCFrHhRyRtzBEddvt3VmwXO64tdHroeRAge3py8SKMYytR2+3iBd1PJX290EA/wG7Bw1nZhxSYQKALIw8LMpHvsQReb1bOqHF6Qo/YidnJFdXRd93M5x4ir/76BSOyL+VhdGvE5o/EwAEI/HHQPzj87t8tXsGun4gZHFMp5TY9w+gmF8zlr7XJcsquO8FVC64xcZuhveGF2do2l9UUbrv0uutMJ2VMxF45xZZBns+6XAnbEEuc8s85MIE7CghnZG+JWrt/8ZYerdLFl5n/bd2haZ+JBiJb/pbmj23Jvu7j0zjjMTTSd/YD3VGugIAxVi6IWptK/c1L788Fp4e9aquWHi6QWj+Zto07odF3LbiXAHv1jt6SbofL51i+PPSBZdNmMWYWzqB6V65RTKNO+/CtsDW9XdBWQjTQeFrHpfkIzMZU9nplk5oYbzKBn+j1C3YK+jR71RF3xcLqc/f0syLWvuVnJHclPSN26WzwaUAzQIAY6oHReX4xQo/YnWxAu51xve4/Z4U8x2XZGcxcjOK4+d0RDZYd8pCuO9csBHF27w53QiUbhhrSrWjGEYfxwKb1S2SI5nGnZsGuqCshAkACf+k3VLy0CxBj97NWLrrW7cIzderXPjhrtDUY5J6/Olg1/75/pbmQYm06vO/jRW19kbBiD+t1C1oVfia53XWfylAOxtLgyPyE/6ulnOSvvFve/fN3FGEke8B9Lnofw6zED375ji7iRe6zCq97P2p8lfAXaQrUunp7yBx8HSpkwvOayAy90lKD1j30ujj/LbOKhovCKO3ceeN1JGVkgUY5EIiOEUHcLu/++gGjY+s1RnpQrd8hBbCsjBqKYRRSxlpgiYYsd0APqBM8ilgRQHLsihWMhgpDJhTAHpqbMT5k0C5BxgxpnZA0KPfk4VRL+mhMwbV1lz2D514VdY1xYsw8EuF0o0ubvnyfQ3fXPTsmD5YSvVyno2wf5eFsL9bsQLWnS1Fvd5CNNO4863BXFSWwnRI+sbvOvxs4+zT/vmRxTrrX0VocWJ/eQkt8IQWZsB24OYEY2px2jJ+7mvf+UB81Gy3OW6pWAe7F1iF8g442Ai7pyzFdijrYAuzAfZv4sy7vd6lwFka1wLvfLJ16G3cWQ/bGjsgZTeUzaR2yQZL4WueC3TumiIYsRsY0n3Uq7I5In8uGImfSfKROp2R7h5iUTo40SWTUbwwPSC/DcB2wG6bp4uCB1GnM4dtRs+oweu5pSPGehSwi8RVs263rpp1u/PwSHePOMEEg6Lshelg7ytU9RC961f1wa79S0WtYyusPF4fYhEiau2vBRN7rybvPlKrssGfJAL15bjzubMguRo9m2I5hxftdSJZ0st2Y0cqbWbqGIoXAi1CbwPTanhvCd4Mbx+Ec9A3mGDQlv1+310yHAjIh6Z2i2O+Dor6JwAXEopzHZozptZGm9prNMw/892fvZIITjnmVRs8nGMWi3rYBp50Toa3iJUlThA7gHfQM606COAL6CvMOQBeT/t8YqeLsp5jDkSXNHEvgPsA3Bc89KLPHHnuNItiphFWCsMyaZPmj8Ii77c0L99Xu2SDCQBq0HX/6QoVvGQZets67kQOvSUwzIWZTmLi5d3oZ+nPcB4VVBiW/CTtbyeYICdOGmFWqFAmLEDviJ6D6C3UdOoyPp/Ixxb6Hr8KFSr04pyMzwtSx2D4qfPHsLHKVqgwTOiz2Xk+VIayFSp4y3rYkT6D2Zo1jN5GojecPyrCrFDBe36JnkXQ2ZiD3u6Si50/KkPZChXKkIowK1QoQyrCrFChDKEs66R46VaFCmXBW5PPziX7HJyMIXkVKgxzouhn0fT/A3tQ05HQIpHYAAAAAElFTkSuQmCC",
"PNG",20,20,100,21);jsdoc.setFontSize(10);jsdoc.text(150,25,"Chromosome: Location");jsdoc.setFontSize(14);jsdoc.text(150,40,$("#chromosome-selector").val()+" : "+$("#text-location").val());jsdoc.setTextColor(0,0,0);jsdoc.setFontSize(10);if(self._workspaceId!=null){jsdoc.text(350,25,"Workspace ID");jsdoc.setTextColor(0,0,255);jsdoc.setFontSize(16);jsdoc.text(350,45,s_url)}jsdoc.setFontSize(14);jsdoc.text(350,40,$("#save-workspace-text").val());jsdoc.addImage(image,"PNG",15,55);jsdoc.save(filename)}else{if(navigator.msSaveBlob){var image_blob=
canvas.msToBlob();var blob=new Blob([image_blob],{type:"image/png"});navigator.msSaveBlob(blob,filename)}else{var blob=new Blob([image],{type:"image/png"});var link=document.createElement("a");if(link.download!==undefined){var url=URL.createObjectURL(blob);link.setAttribute("href",image);link.setAttribute("download",filename);link.style="visibility:hidden";link.setAttribute("target","_blank");document.body.appendChild(link);link.click();document.body.removeChild(link)}else{var image_octet=image.replace("image/png",
"image/octet-stream");window.open(image_octet)}}container.find(".tempCanvas").remove();svgElems.each(function(){$(this).show()})}})};goog.provide("epiviz.ui.ControlManager");goog.require("epiviz.utils");goog.require("epiviz.Config");goog.require("epiviz.events.Event");goog.require("epiviz.ui.controls.DatasourceGroupWizardStep");goog.require("epiviz.datatypes.GenomicRange");goog.require("epiviz.ui.charts.VisualizationType");goog.require("epiviz.ui.controls.VisConfigSelection");goog.require("epiviz.ui.controls.MeaurementsWizardStep");goog.require("epiviz.ui.controls.Wizard");goog.require("epiviz.ui.controls.ComputedMeasurementsDialog");
goog.require("epiviz.ui.tutorials");goog.require("epiviz.ui.PrintManager");goog.require("epiviz.ui.controls.MessageDialog");goog.require("epiviz.events.EventListener");
epiviz.ui.ControlManager=function(config,chartFactory,chartManager,measurementsManager,locationManager){this._config=config;this._chartFactory=chartFactory;this._chartManager=chartManager;this._measurementsManager=measurementsManager;this._locationManager=locationManager;this._addChart=new epiviz.events.Event;this._activeWorkspaceChanged=new epiviz.events.Event;this._saveWorkspace=new epiviz.events.Event;this._deleteActiveWorkspace=new epiviz.events.Event;this._revertActiveWorkspace=new epiviz.events.Event;
this._loginLinkClicked=new epiviz.events.Event;this._searchWorkspaces=new epiviz.events.Event;this._search=new epiviz.events.Event;this._activeWorkspaceInfo=null;this._stepRatio=config.navigationStepRatio;this._zoominRatio=config.zoominRatio;this._zoomoutRatio=config.zoomoutRatio};epiviz.ui.ControlManager.CHART_TYPE_CONTAINERS={"plot":"feature-view","track":"location-view","data-structure":"data-structure-view"};epiviz.ui.ControlManager.DISPLAY_TYPE_LABELS={"plot":"Feature","track":"Location","data-structure":"Data Structure"};
epiviz.ui.ControlManager.prototype.initialize=function(){this._initializeChromosomeSelector();this._initializeLocationTextbox();this._initializeNavigationButtons();this._initializeZoomButtons();this._initializeLocationSettingsDialog();this._initializeChartMenus();this._initializeComputedMeasurementsMenu();this._initializeHelpButton();this._initializeSearchBox();this._initializeWorkspaceSaving();this._initializeTutorials();this._initializeScreenshotMenu();this._initializeLoginLink();this._initializeLayout();
this._checkBrowserCompatibility();this._registerLocationChanged();this._registerSeqInfosUpdated()};epiviz.ui.ControlManager.prototype.onAddChart=function(){return this._addChart};epiviz.ui.ControlManager.prototype.onActiveWorkspaceChanged=function(){return this._activeWorkspaceChanged};epiviz.ui.ControlManager.prototype.onSaveWorkspace=function(){return this._saveWorkspace};epiviz.ui.ControlManager.prototype.onDeleteActiveWorkspace=function(){return this._deleteActiveWorkspace};
epiviz.ui.ControlManager.prototype.onRevertActiveWorkspace=function(){return this._revertActiveWorkspace};epiviz.ui.ControlManager.prototype.onLoginLinkClicked=function(){return this._loginLinkClicked};epiviz.ui.ControlManager.prototype.onSearchWorkspaces=function(){return this._searchWorkspaces};epiviz.ui.ControlManager.prototype.onSearch=function(){return this._search};
epiviz.ui.ControlManager.prototype._updateSeqNames=function(seqInfos){var chromosomeSelector=$("#chromosome-selector");var optionFormat='<option value="%s"%s>%s</option>';chromosomeSelector.empty();for(var i=0;i<seqInfos.length;++i){var option=sprintf(optionFormat,seqInfos[i].seqName,this._locationManager.currentLocation()&&seqInfos[i].seqName==this._locationManager.currentLocation().seqName()?'selected="selected"':"",seqInfos[i].seqName);chromosomeSelector.append(option)}chromosomeSelector.selectmenu()};
epiviz.ui.ControlManager.prototype._updateSelectedLocation=function(range){if(!range)return;this._locationManager.changeCurrentLocation(range);range=this._locationManager.currentLocation();var locationTextBox=$("#text-location");locationTextBox.val(Globalize.format(range.start(),"n0")+" - "+Globalize.format(range.end(),"n0"));var chromosomeSelector=$("#chromosome-selector");chromosomeSelector.val(range.seqName());chromosomeSelector.selectmenu()};
epiviz.ui.ControlManager.prototype.updateSelectedWorkspace=function(workspaceInfo){var self=this;var saveTextBox=$("#save-workspace-text");var oldValue=this._activeWorkspaceInfo;saveTextBox.val(workspaceInfo.name);this._activeWorkspaceInfo=workspaceInfo;var args={oldValue:oldValue,newValue:workspaceInfo,cancel:function(){saveTextBox.val(oldValue.name);self._activeWorkspaceInfo=oldValue}};this._activeWorkspaceChanged.notify(args)};
epiviz.ui.ControlManager.prototype._initializeChromosomeSelector=function(){var chromosomeSelector=$("#chromosome-selector");chromosomeSelector.selectmenu({style:"popup",width:"90",maxHeight:"100",menuWidth:"90"});var self=this;chromosomeSelector.change(function(){var currentLocation=self._locationManager.lastUnfilledLocationChangeRequest()||self._locationManager.currentLocation();var seqName=$(this).val();self._updateSelectedLocation(new epiviz.datatypes.GenomicRange(seqName,currentLocation.start(),
currentLocation.width(),currentLocation.genome()))})};
epiviz.ui.ControlManager.prototype._initializeLocationTextbox=function(){var self=this;var locationTextBox=$("#text-location");locationTextBox.keypress(function(event){if(event.which!=13)return true;try{var location=$(this).val();var startEnd=location.split("-");var start=Globalize.parseInt(startEnd[0]);var end=Globalize.parseInt(startEnd[1]);var currentLocation=self._locationManager.lastUnfilledLocationChangeRequest()||self._locationManager.currentLocation();self._updateSelectedLocation(epiviz.datatypes.GenomicRange.fromStartEnd(currentLocation.seqName(),
start,end,currentLocation.genome()));return true}catch(error){return false}})};
epiviz.ui.ControlManager.prototype._initializeNavigationButtons=function(){var self=this;$("#moveright").button({icons:{primary:"ui-icon ui-icon-seek-next"},text:false}).click(function(){var currentLocation=self._locationManager.lastUnfilledLocationChangeRequest()||self._locationManager.currentLocation();var start=currentLocation.start()+Math.round(currentLocation.width()*self._stepRatio);self._updateSelectedLocation(new epiviz.datatypes.GenomicRange(currentLocation.seqName(),start,currentLocation.width(),
currentLocation.genome()))});$("#moveleft").button({icons:{primary:"ui-icon ui-icon-seek-prev"},text:false}).click(function(){var currentLocation=self._locationManager.lastUnfilledLocationChangeRequest()||self._locationManager.currentLocation();var start=currentLocation.start()-Math.round(currentLocation.width()*self._stepRatio);self._updateSelectedLocation(new epiviz.datatypes.GenomicRange(currentLocation.seqName(),start,currentLocation.width(),currentLocation.genome()))})};
epiviz.ui.ControlManager.prototype._initializeZoomButtons=function(){var self=this;var zoomin=$("#zoomin");zoomin.button({icons:{primary:"ui-icon ui-icon-zoomin"},text:false});var zoomout=$("#zoomout");zoomout.button({icons:{primary:"ui-icon ui-icon-zoomout"},text:false});var zoomHandler=function(zoomRatio){var currentLocation=self._locationManager.lastUnfilledLocationChangeRequest()||self._locationManager.currentLocation();var mid=currentLocation.start()+currentLocation.width()*.5;var width=Math.round(currentLocation.width()*
zoomRatio);var start=Math.round(mid-width*.5);self._updateSelectedLocation(new epiviz.datatypes.GenomicRange(currentLocation.seqName(),start,width,currentLocation.genome()))};zoomin.click(function(){zoomHandler(self._zoominRatio)});zoomout.click(function(){zoomHandler(self._zoomoutRatio)})};
epiviz.ui.ControlManager.prototype._initializeLocationSettingsDialog=function(){var self=this;$("#location-settings").button({text:false,icons:{primary:"ui-icon ui-icon-gear"}}).click(function(){$("#location-settings-dialog").dialog("open")});$("#location-settings-dialog").dialog({autoOpen:false,resizable:false,width:"300",buttons:{"Ok":function(){self._zoominRatio=$("#zoomin-ratio-text").val();self._zoomoutRatio=$("#zoomout-ratio-text").val();self._stepRatio=$("#navigation-step-ratio-text").val();
$(this).dialog("close")},"Cancel":function(){$("#zoomin-ratio-text").val(Globalize.format(self._zoominRatio,"n3"));$("#zoomout-ratio-text").val(Globalize.format(self._zoomoutRatio,"n3"));$("#navigation-step-ratio-text").val(Globalize.format(self._stepRatio,"n6"));$(this).dialog("close")}},modal:true});$("#zoomout-ratio-text").spinner({min:1.001,max:1E3,step:.001,start:1.2,numberFormat:"n3"}).val(self._zoomoutRatio);$("#zoomin-ratio-text").spinner({min:.001,max:.999,step:.01,start:.8,numberFormat:"n3"}).val(self._zoominRatio);
$("#navigation-step-ratio-text").spinner({min:1E-6,max:1,step:1E-6,start:.2,numberFormat:"n6"}).val(self._stepRatio)};
epiviz.ui.ControlManager.prototype._initializeChartMenus=function(){var self=this;var visMenu=$("#vis-menu");$("#vis-menu-button").button({text:false,icons:{primary:"ui-icon ui-icon-scatterplot",secondary:"ui-icon-triangle-1-s"}}).click(function(){var menu=visMenu;var visible=menu.is(":visible");$(".dropdown-menu").find(">:first-child").hide();if(!visible)menu.show().position({my:"left top",at:"left bottom",of:this});else menu.hide();return false});var chartsByDisplayType={};var displayTypeLabels=
epiviz.ui.ControlManager.DISPLAY_TYPE_LABELS;this._chartFactory.foreach(function(typeName,chartType){if(!(chartType.chartDisplayType()in chartsByDisplayType))chartsByDisplayType[chartType.chartDisplayType()]=[];chartsByDisplayType[chartType.chartDisplayType()].push(chartType)});for(var displayType in chartsByDisplayType){if(!chartsByDisplayType.hasOwnProperty(displayType))continue;$(sprintf('<li class="ui-widget-header">%s</li>',displayTypeLabels[displayType])).appendTo(visMenu);chartsByDisplayType[displayType].forEach(function(chartType,
i){var id=sprintf("%s-menu-add-%s",chartType.chartDisplayType(),chartType.chartHtmlAttributeName());visMenu.append(sprintf('<li><a href="javascript:void(0)" id="%s">Add New %s</a></li>',id,chartType.chartName()));$("#"+id).click(function(){var wizardSteps=[];if(chartType.isRestrictedToSameDatasourceGroup())wizardSteps.push(new epiviz.ui.controls.DatasourceGroupWizardStep);if(chartType.chartDisplayType()!=epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE)wizardSteps.push(new epiviz.ui.controls.MeaurementsWizardStep);
if(!wizardSteps.length){self._addChart.notify({type:chartType,visConfigSelection:new epiviz.ui.controls.VisConfigSelection(self._measurementsManager.measurements().subset(chartType.measurementsFilter()))});return}var wizardMeasurements=self._measurementsManager.measurements().subset(chartType.measurementsFilter());wizardMeasurements.addAll(self._measurementsManager.measurements().map(function(m){return m.datasource()}).subset(chartType.measurementsFilter()));var dialog=new epiviz.ui.controls.Wizard(sprintf("Add new %s",
chartType.chartName()),{finish:function(data){self._addChart.notify({type:chartType,visConfigSelection:data})}},wizardSteps,new epiviz.ui.controls.VisConfigSelection(wizardMeasurements,undefined,undefined,undefined,undefined,chartType.chartName(),chartType.minSelectedMeasurements()),"750",undefined,chartType.isRestrictedToSameDatasourceGroup());dialog.show();visMenu.hide()})})}visMenu.hide().menu()};
epiviz.ui.ControlManager.prototype._initializeComputedMeasurementsMenu=function(){var self=this;$("#computed-measurements-button").button({text:false,icons:{primary:"ui-icon ui-icon-calculator"}}).click(function(){var dialog=new epiviz.ui.controls.ComputedMeasurementsDialog("Computed Measurements",{add:function(measurement){self._measurementsManager.addMeasurement(measurement)},remove:function(measurement){self._measurementsManager.removeMeasurement(measurement)},close:function(){}},self._measurementsManager.measurements(),
self._chartManager.chartsMeasurements());dialog.show()})};epiviz.ui.ControlManager.prototype._initializeHelpButton=function(){$("#help-button").button({text:false,icons:{primary:"ui-icon ui-icon-help"}}).click(function(){var win=window.open("http://epiviz.github.io/","_blank");win.focus()})};
epiviz.ui.ControlManager.prototype._initializeTutorials=function(){var self=this;var tutorialMenu=$("#help-tutorials");var tuts=new epiviz.ui.tutorials;var tMenu='<div class="dropdown-menu">'+'<ul id="tutorial-list">'+'<li class="ui-widget-header">Tutorials</li>';if(tuts._tutorialList.length>0)tuts._tutorialList.forEach(function(t){tMenu+='<li><a href="javascript:void(0);" id="'+t.id+'">'+t.name+"</a></li>"});else tMenu+="<li>No Tutorials available</li>";tMenu+="</ul>"+"</div>";$(sprintf(tMenu)).insertAfter(tutorialMenu);
var tutorialList=$("#tutorial-list");tutorialList.hide().menu();tutorialMenu.button({icons:{primary:"ui-icon ui-icon-info",secondary:"ui-icon-triangle-1-s"},text:false}).click(function(){var visible=tutorialList.is(":visible");if(!visible)tutorialList.show().position({my:"left top",at:"left bottom",of:this});else tutorialList.hide();return false});if(tuts._tutorialList.length>0)tuts._tutorialList.forEach(function(t){$("#"+t.id).click(function(){var anno=new Anno(t.tutorial);anno.show();tutorialList.hide()})})};
epiviz.ui.ControlManager.prototype._initializeScreenshotMenu=function(){var self=this;var savePageButton=$("#save-page");savePageButton.button({icons:{primary:"ui-icon ui-icon-print"},text:false}).click(function(){var name=$("#save-workspace-text").val();self._saveWorkspace.notify({name:name,id:name==self._activeWorkspaceInfo.name?self._activeWorkspaceInfo.id:null});savePageButton.append(sprintf('<div id="loading" title="printing workspace">'+"<p>Save/Print the existing EpiViz workspace.</p>"+'<div style="position:absolute; right:15px;">'+
'<select class="screenshot-file-format">'+'<option value="pdf" selected="selected">PDF</option>'+'<option value="png" >PNG</option>'+"</select>"+"</div>"+"</div>"));savePageButton.find("#loading").dialog({resizable:false,modal:true,title:"Print workspace as image",buttons:{"Print":function(){$(this).dialog("close");var format=$(".screenshot-file-format option:selected").val();var timestamp=Math.floor($.now()/1E3);var workspace_id=self._activeWorkspaceInfo.id;var pm=new epiviz.ui.PrintManager("pagemain",
"epiviz_"+timestamp,format,workspace_id);pm.print();$(this).dialog("destroy").remove()},"cancel":function(){$(this).dialog("destroy").remove()}}}).show()})};
epiviz.ui.ControlManager.prototype._initializeSearchBox=function(){var self=this;var searchBox=$("#search-box");searchBox.watermark("Find Gene/Probe");searchBox.autocomplete({source:function(request,callback){self._search.notify({searchTerm:request.term,callback:function(results){var items=[];for(var i=0;i<results.length;++i)items.push({value:results[i].probe||results[i].gene,label:results[i].probe||results[i].gene,html:results[i].probe?sprintf("<b>%s</b>, %s, [%s: %s - %s]",results[i].probe,results[i].gene,
results[i].seqName,Globalize.format(results[i].start,"n0"),Globalize.format(results[i].end,"n0")):sprintf("<b>%s</b>, [%s: %s - %s]",results[i].gene,results[i].seqName,Globalize.format(results[i].start,"n0"),Globalize.format(results[i].end,"n0")),range:epiviz.datatypes.GenomicRange.fromStartEnd(results[i].seqName,results[i].start,results[i].end)});callback(items)}})},minLength:1,select:function(event,ui){var currentLocation=self._locationManager.lastUnfilledLocationChangeRequest()||self._locationManager.currentLocation();
var seqName=ui.item.range.seqName();var start=Math.round(ui.item.range.start()-ui.item.range.width()*11);var width=ui.item.range.width()*22;self._updateSelectedLocation(new epiviz.datatypes.GenomicRange(seqName,start,width))},focus:function(event){event.preventDefault()},open:function(){},close:function(){}}).data("autocomplete")._renderItem=function(ul,item){return $("<li></li>").data("item.autocomplete",item).append(sprintf("<a>%s</a>",item.html)).appendTo(ul)}};
epiviz.ui.ControlManager.prototype._initializeWorkspaceSaving=function(){var self=this;var saveTextBox=$("#save-workspace-text");var saveWorkspaceButton=$("#save-workspace-button");var revertWorkspaceButton=$("#revert-workspace-button");var deleteWorkspaceButton=$("#delete-workspace-button");saveWorkspaceButton.button({text:false,icons:{primary:"ui-icon-disk"}}).click(function(){var dialog=null;try{var name=saveTextBox.val();var pattern=/[a-zA-Z0-9_\s]+/g;var result=pattern.exec(name);if(result==
name){if(!epiviz.workspaces.UserManager.USER_STATUS.loggedIn){dialog=new epiviz.ui.controls.MessageDialog("User not logged in",{Yes:function(){self._loginLinkClicked.notify()},No:function(){}},"You need to log in in order to save the workspace. Do you wish to log in now?",epiviz.ui.controls.MessageDialog.Icon.QUESTION);dialog.show();return}self._saveWorkspace.notify({name:name,id:name==self._activeWorkspaceInfo.name?self._activeWorkspaceInfo.id:null})}else{dialog=new epiviz.ui.controls.MessageDialog("Invalid workspace name",
{Ok:function(){$(this).remove()}},"Invalid workspace name: "+name,epiviz.ui.controls.MessageDialog.Icon.ERROR);dialog.show()}}catch(error){dialog=new epiviz.ui.controls.MessageDialog("Error",{ok:function(){$(this).remove()}},"An error occurred while trying to save workspace: "+error.message,epiviz.ui.controls.MessageDialog.Icon.ERROR);dialog.show()}});deleteWorkspaceButton.button({text:false,icons:{primary:"ui-icon-trash"}}).click(function(e){if(!epiviz.workspaces.UserManager.USER_STATUS.loggedIn)return;
var dialog=new epiviz.ui.controls.MessageDialog("Delete active workspace",{Yes:function(){self._deleteActiveWorkspace.notify()},No:function(){}},"Are you sure you want to delete the active workspace?",epiviz.ui.controls.MessageDialog.Icon.QUESTION);dialog.show()});revertWorkspaceButton.button({text:false,icons:{primary:"ui-icon-arrowreturnthick-1-w"}}).click(function(e){var dialog=new epiviz.ui.controls.MessageDialog("Delete active workspace",{Yes:function(){self._revertActiveWorkspace.notify()},
No:function(){}},"Are you sure you want to revert the changes on the active workspace?",epiviz.ui.controls.MessageDialog.Icon.QUESTION);dialog.show()});saveTextBox.watermark("Save Workspace Name");saveTextBox.autocomplete({source:function(request,callback){self._searchWorkspaces.notify({searchTerm:request.term,callback:function(workspaces){var items=[];for(var i=0;i<workspaces.length;++i)items.push({value:workspaces[i].id,label:workspaces[i].name,html:sprintf("<b>%s</b> %s",workspaces[i].name,workspaces[i].id||
"")});callback(items)}})},minLength:0,select:function(event,ui){event.preventDefault();self.updateSelectedWorkspace({id:ui.item.value||saveTextBox.val(),name:ui.item.label})},focus:function(event){event.preventDefault()},open:function(){},close:function(){}}).data("autocomplete")._renderItem=function(ul,item){return $("<li></li>").data("item.autocomplete",item).append(sprintf("<a>%s</a>",item.html)).appendTo(ul)};saveTextBox.click(function(){saveTextBox.autocomplete("search","")})};
epiviz.ui.ControlManager.prototype._initializeLoginLink=function(){var self=this;$("#login-link").live({click:function(){self._loginLinkClicked.notify()}})};epiviz.ui.ControlManager.prototype._initializeLayout=function(){var layout=$("body").layout({applyDefaultStyles:true,east__size:390,east__minSize:390,east__initHidden:true,north__resizable:false,north__initHidden:false,south__initHidden:true,east__initClosed:true})};
epiviz.ui.ControlManager.prototype._checkBrowserCompatibility=function(){var ie=epiviz.utils.getInternetExplorerVersion();if(ie>0){var dialog=new epiviz.ui.controls.MessageDialog("Browser compatibility warning",{Ok:function(){}},"EpiViz works best on Google Chrome, Apple Safari or Mozilla Firefox. Please open it using one of those browsers.",epiviz.ui.controls.MessageDialog.Icon.ERROR);dialog.show()}};epiviz.ui.ControlManager.prototype._registerLocationChanged=function(){var self=this;this._locationManager.onCurrentLocationChanged().addListener(new epiviz.events.EventListener(function(e){self._updateSelectedLocation(e.newValue)}))};
epiviz.ui.ControlManager.prototype._registerSeqInfosUpdated=function(){var self=this;this._locationManager.onSeqInfosUpdated().addListener(new epiviz.events.EventListener(function(seqNames){self._updateSeqNames(seqNames)}))};goog.provide("epiviz.ui.controls.SaveSvgAsImageDialog");goog.require("epiviz.ui.controls.Dialog");
epiviz.ui.controls.SaveSvgAsImageDialog=function(handlers,chartId,chartSaverLocation){epiviz.ui.controls.Dialog.call(this,"Save Chart SVG as Image",handlers);this._dialog=$("#"+this._id);this._dialog.append('<div class="save-svg-dialog">'+'<label class="dialog-label">Choose file format:</label>'+"<br/><br/>"+'<div style="position:absolute; right:15px;">'+'<select class="svg-file-format">'+'<option value="pdf" selected="selected">PDF</option>'+'<option value="ps" >PS</option>'+'<option value="png" >PNG</option>'+
'<option value="svg">SVG</option>'+'<option value="eps">EPS</option>'+"</select>"+"</div>"+sprintf('<form name="%s-svg-save-form" method="POST">',this._id)+"<div>"+'<input type="hidden" name="svg" />'+'<input type="hidden" name="format" />'+"<br/><br/>"+"</div>"+"</form>"+"</div>");this._chartId=chartId;this._chartSaverLocation=chartSaverLocation;var self=this;this._dialog.dialog({autoOpen:false,resizable:false,width:"200",buttons:{Ok:function(){var svg=$("#"+self._chartId).find("svg").clone();svg.attr("xmlns",
"http://www.w3.org/2000/svg");svg.attr("version","1.1");var fileFormat=self._dialog.find(".svg-file-format");var form=document.forms[sprintf("%s-svg-save-form",self._id)];form.action=self._chartSaverLocation;form["svg"].value=$("<div>").append(svg).html();form["format"].value=fileFormat.val();form.submit();self._handlers.ok();$(this).dialog("close")},Cancel:function(){self._handlers.cancel();$(this).dialog("close")}},modal:true})};epiviz.ui.controls.SaveSvgAsImageDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);
epiviz.ui.controls.SaveSvgAsImageDialog.constructor=epiviz.ui.controls.SaveSvgAsImageDialog;epiviz.ui.controls.SaveSvgAsImageDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var self=this;if(this._dialog){this._dialog.dialog("open");this._dialog.dialog("option","position","center");this._dialog.dialog({close:function(event,ui){$(this).remove();self._dialog=null}})}};goog.provide("epiviz.ui.charts.decoration.VisualizationDecoration");epiviz.ui.charts.decoration.VisualizationDecoration=function(visualization,otherDecoration,config){this._visualization=visualization;this._otherDecoration=otherDecoration;this._config=config};epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate=function(){if(this._otherDecoration)this._otherDecoration.decorate()};epiviz.ui.charts.decoration.VisualizationDecoration.prototype.visualization=function(){return this._visualization};
epiviz.ui.charts.decoration.VisualizationDecoration.prototype.otherDecoration=function(){return this._otherDecoration};epiviz.ui.charts.decoration.VisualizationDecoration.prototype.config=function(){return this._config};goog.provide("epiviz.ui.charts.decoration.ChartOptionButton");goog.require("epiviz.ui.charts.decoration.VisualizationDecoration");epiviz.ui.charts.decoration.ChartOptionButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,visualization,otherDecoration,config);this.isChartOptionButton=true};epiviz.ui.charts.decoration.ChartOptionButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);
epiviz.ui.charts.decoration.ChartOptionButton.constructor=epiviz.ui.charts.decoration.ChartOptionButton;
epiviz.ui.charts.decoration.ChartOptionButton.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);if(!this.isChartOptionButton)return;var buttonIndex=0;for(var decoration=this.otherDecoration();decoration;decoration=decoration.otherDecoration())if(decoration.isChartOptionButton)++buttonIndex;var button=$(sprintf('<button style="position: absolute; top: 5px; right: %spx">%s</button>',5+buttonIndex*30,this._text())).appendTo(this.visualization().container()).button(this._renderOptions()).click(this._click());
this.visualization().container().mousemove(function(){button.show()}).mouseleave(function(){button.hide()})};epiviz.ui.charts.decoration.ChartOptionButton.prototype._click=function(){return function(){}};epiviz.ui.charts.decoration.ChartOptionButton.prototype._renderOptions=function(){return{}};epiviz.ui.charts.decoration.ChartOptionButton.prototype._text=function(){return""};goog.provide("epiviz.ui.charts.decoration.RemoveChartButton");goog.require("epiviz.ui.charts.decoration.ChartOptionButton");goog.require("epiviz.ui.charts.VisEventArgs");epiviz.ui.charts.decoration.RemoveChartButton=function(visualization,otherDecoration){epiviz.ui.charts.decoration.ChartOptionButton.call(this,visualization,otherDecoration)};epiviz.ui.charts.decoration.RemoveChartButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);
epiviz.ui.charts.decoration.RemoveChartButton.constructor=epiviz.ui.charts.decoration.RemoveChartButton;epiviz.ui.charts.decoration.RemoveChartButton.prototype._click=function(){var self=this;return function(){self.visualization().onRemove().notify(new epiviz.ui.charts.VisEventArgs(self.visualization().id()))}};epiviz.ui.charts.decoration.RemoveChartButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-cancel"},text:false}};
epiviz.ui.charts.decoration.RemoveChartButton.prototype._text=function(){return"Remove"};goog.provide("epiviz.ui.charts.decoration.SaveChartButton");goog.require("epiviz.ui.charts.decoration.ChartOptionButton");goog.require("epiviz.ui.charts.VisEventArgs");epiviz.ui.charts.decoration.SaveChartButton=function(visualization,otherDecoration){epiviz.ui.charts.decoration.ChartOptionButton.call(this,visualization,otherDecoration)};epiviz.ui.charts.decoration.SaveChartButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);
epiviz.ui.charts.decoration.SaveChartButton.constructor=epiviz.ui.charts.decoration.SaveChartButton;epiviz.ui.charts.decoration.SaveChartButton.prototype._click=function(){var self=this;return function(){self.visualization().onSave().notify(new epiviz.ui.charts.VisEventArgs(self.visualization().id()))}};epiviz.ui.charts.decoration.SaveChartButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-disk"},text:false}};
epiviz.ui.charts.decoration.SaveChartButton.prototype._text=function(){return"Save"};goog.provide("epiviz.ui.controls.CustomSettingsDialog");goog.require("epiviz.ui.controls.Dialog");goog.require("epiviz.utils");goog.require("epiviz.ui.charts.CustomSetting");goog.require("epiviz.ui.controls.MessageDialog");epiviz.ui.controls.CustomSettingsDialog=function(title,handlers,customSettingsDefs,customSettingsValues){epiviz.ui.controls.Dialog.call(this,title,handlers);this._customSettingsDefs=customSettingsDefs;this._customSettingsValues=epiviz.utils.mapCopy(customSettingsValues)};
epiviz.ui.controls.CustomSettingsDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.CustomSettingsDialog.constructor=epiviz.ui.controls.CustomSettingsDialog;
epiviz.ui.controls.CustomSettingsDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var SettingType=epiviz.ui.charts.CustomSetting.Type;if(!this._dialog){var self=this;this._dialog=$("#"+this._id);this._dialog.css("display","inline");var i,inputId,input,value;var content="";for(i=0;i<this._customSettingsDefs.length;++i){inputId=sprintf("%s-%s",this._id,this._customSettingsDefs[i].id);var row=sprintf('<tr><td><label for="%s">%s</label></td><td style="text-align: right;">%%s</td></tr>',
inputId,this._customSettingsDefs[i].label);input=null;value=this._customSettingsValues[this._customSettingsDefs[i].id];switch(this._customSettingsDefs[i].type){case SettingType.BOOLEAN:row=sprintf(row,sprintf('<div id="%1$s">'+'<label for="%1$s-true">On</label>'+'<input type="radio" id="%1$s-true" name="%1$s" %2$s />'+'<label for="%1$s-false">Off</label>'+'<input type="radio" id="%1$s-false" name="%1$s" %3$s />'+"</div>",inputId,value?'checked="checked"':"",value?"":'checked="checked"'));break;case SettingType.ARRAY:row=
sprintf(row,sprintf('<input id="%s" value="%s" class="ui-widget-content ui-corner-all" style="text-align: right; padding: 5px;" />',inputId,value.join(",")));break;case SettingType.NUMBER:case SettingType.STRING:row=sprintf(row,sprintf('<input id="%s" value="%s" class="ui-widget-content ui-corner-all" style="text-align: right; padding: 5px;" />',inputId,value));break;case SettingType.CATEGORICAL:case SettingType.MEASUREMENTS_METADATA:case SettingType.MEASUREMENTS_ANNOTATION:var optionFormat='<option value="%1$s"%2$s>%1$s</option>';
var options="";var def=this._customSettingsDefs[i];if(def.possibleValues)for(var j=0;j<def.possibleValues.length;++j)options+=sprintf(optionFormat,def.possibleValues[j],def.possibleValues[j]==value?'selected="selected"':"");var selector=sprintf('<select id="%s">%s</select>',inputId,options);row=sprintf(row,selector);break}content+=row}content=sprintf('<div style="margin: 5px; padding: 5px; height: auto;"><table style="width: 100%%;">%s</table></div>',content);this._dialog.append(content);for(i=0;i<
this._customSettingsDefs.length;++i){inputId=sprintf("%s-%s",this._id,this._customSettingsDefs[i].id);input=$("#"+inputId);value=this._customSettingsValues[this._customSettingsDefs[i].id];switch(this._customSettingsDefs[i].type){case SettingType.BOOLEAN:input.buttonset();break;case SettingType.NUMBER:case SettingType.ARRAY:case SettingType.STRING:input.watermark(this._customSettingsDefs[i].label);break;case SettingType.CATEGORICAL:case SettingType.MEASUREMENTS_METADATA:case SettingType.MEASUREMENTS_ANNOTATION:input.selectmenu()}}this._dialog.dialog({autoOpen:false,
resizable:false,buttons:{Ok:function(){for(var i=0;i<self._customSettingsDefs.length;++i){inputId=sprintf("%s-%s",self._id,self._customSettingsDefs[i].id);input=$("#"+inputId);var newValue=null;if(input.val()==epiviz.ui.charts.CustomSetting.DEFAULT)newValue=self._customSettingsDefs[i].defaultValue;else{var errorDialog=null;try{switch(self._customSettingsDefs[i].type){case SettingType.BOOLEAN:var checked=$("#"+inputId+" :radio:checked").attr("id");newValue=checked.substr(checked.lastIndexOf("-")+1)==
"true";break;case SettingType.NUMBER:newValue=input.val()==epiviz.ui.charts.CustomSetting.DEFAULT?self._customSettingsDefs[i].defaultValue:parseFloat(input.val());if(isNaN(newValue)){errorDialog=new epiviz.ui.controls.MessageDialog("Invalid property value",{Ok:function(){}},sprintf('Invalid value for setting "%s" (%s)',self._customSettingsDefs[i].label,self._customSettingsDefs[i].id),epiviz.ui.controls.MessageDialog.Icon.ERROR);errorDialog.show();return}break;case SettingType.ARRAY:newValue=input.val().split(/[\s,]+/g);
break;case SettingType.STRING:case SettingType.CATEGORICAL:case SettingType.MEASUREMENTS_METADATA:case SettingType.MEASUREMENTS_ANNOTATION:newValue=input.val();break}}catch(error){errorDialog=new epiviz.ui.controls.MessageDialog("Invalid property value",{Ok:function(){}},sprintf('Invalid value for setting "%s" (%s)',self._customSettingsDefs[i].label,self._customSettingsDefs[i].id),epiviz.ui.controls.MessageDialog.Icon.ERROR);errorDialog.show();return}}self._customSettingsValues[self._customSettingsDefs[i].id]=
newValue}self._handlers.ok(self._customSettingsValues);$(this).dialog("close")},Cancel:function(){self._handlers.cancel();$(this).dialog("close")}},modal:true});this._dialog.dialog({close:function(event,ui){$(this).remove();self._dialog=null}})}this._dialog.dialog("open");this._dialog.dialog("option","position","center")};goog.provide("epiviz.ui.charts.decoration.CustomSettingsButton");goog.require("epiviz.ui.charts.decoration.ChartOptionButton");goog.require("epiviz.ui.controls.CustomSettingsDialog");epiviz.ui.charts.decoration.CustomSettingsButton=function(visualization,otherDecoration){epiviz.ui.charts.decoration.ChartOptionButton.call(this,visualization,otherDecoration)};epiviz.ui.charts.decoration.CustomSettingsButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);
epiviz.ui.charts.decoration.CustomSettingsButton.constructor=epiviz.ui.charts.decoration.CustomSettingsButton;
epiviz.ui.charts.decoration.CustomSettingsButton.prototype._click=function(){var self=this;return function(){var CustomSettings=epiviz.ui.charts.Visualization.CustomSettings;var customSettingsDialog=new epiviz.ui.controls.CustomSettingsDialog("Edit custom settings",{ok:function(settingsValues){self.visualization().setCustomSettingsValues(settingsValues)},cancel:function(){}},self.visualization().properties().customSettingsDefs,self.visualization().customSettingsValues());customSettingsDialog.show()}};
epiviz.ui.charts.decoration.CustomSettingsButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-gear"},text:false}};epiviz.ui.charts.decoration.CustomSettingsButton.prototype._text=function(){return"Custom settings"};goog.provide("epiviz.ui.controls.CodeDialog");goog.require("epiviz.ui.controls.Dialog");
epiviz.ui.controls.CodeDialog=function(title,handlers,controlCreators){epiviz.ui.controls.Dialog.call(this,title,handlers);this._controlCreators=controlCreators;this._dialog=$("#"+this._id);this._controls=[];var self=this;this._dialog.append('<div class="code-tabs"><ul></ul></div>');var codeTabs=this._dialog.find(".code-tabs");var codeTabsList=codeTabs.find("ul");this._controlCreators.forEach(function(creator,i){var id=self._id+"-code-tab-"+i;codeTabs.append(sprintf('<div id="%s"></div>',id));var tab=
codeTabs.find("#"+id);var control=creator(tab);codeTabsList.append(sprintf('<li><a href="#%s">%s</a></li>',id,control.title()));self._controls.push(control)});codeTabs.tabs({activate:function(e,ui){self._tabActivate(codeTabs)}});this._dialog.dialog({autoOpen:false,resizable:false,width:"800",buttons:{Save:function(){var results=[];self._controls.forEach(function(control){control.save();results.push(control.result())});self._handlers.save(results);$(this).dialog("close")},Cancel:function(){self._controls.forEach(function(control){control.revert()});
self._handlers.cancel();$(this).dialog("close")}},modal:true});this._dialog.dialog("option","position","center")};epiviz.ui.controls.CodeDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.CodeDialog.constructor=epiviz.ui.controls.CodeDialog;epiviz.ui.controls.CodeDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);this._dialog.dialog("open");this._controls[0].initialize();this._dialog.dialog("option","position","center")};
epiviz.ui.controls.CodeDialog.prototype._tabActivate=function(tabs){var selectedTabIndex=tabs.tabs("option","active");this._controls[selectedTabIndex].initialize();this._dialog.dialog("option","position","center")};goog.provide("epiviz.ui.charts.decoration.CodeButton");goog.require("epiviz.ui.charts.decoration.ChartOptionButton");goog.require("epiviz.ui.controls.CodeDialog");
epiviz.ui.charts.decoration.CodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.ChartOptionButton.call(this,visualization,otherDecoration,config);this.isCodeButton=true;this._controlCreators=[];var isChartOptionButton=true;var lastCodeButtonDecoration;for(var decoration=this.otherDecoration();decoration;decoration=decoration.otherDecoration())if(decoration.isCodeButton){isChartOptionButton=false;lastCodeButtonDecoration=decoration}if(lastCodeButtonDecoration)lastCodeButtonDecoration._addControlCreator(this._controlCreator(),
this._saveHandler(),this._cancelHandler());this.isChartOptionButton=isChartOptionButton;if(isChartOptionButton)this._addControlCreator(this._controlCreator(),this._saveHandler(),this._cancelHandler())};epiviz.ui.charts.decoration.CodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);epiviz.ui.charts.decoration.CodeButton.constructor=epiviz.ui.charts.decoration.CodeButton;
epiviz.ui.charts.decoration.CodeButton.prototype._click=function(){var self=this;return function(){var editCodeDialog=new epiviz.ui.controls.CodeDialog("Chart Code",{save:function(results){results.forEach(function(result,i){self._controlCreators[i].save(result)})},cancel:function(){self._controlCreators.forEach(function(o){o.cancel()})}},self._controlCreators.map(function(o){return o.creator}));editCodeDialog.show()}};
epiviz.ui.charts.decoration.CodeButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-pencil"},text:false}};epiviz.ui.charts.decoration.CodeButton.prototype._text=function(){return"Code"};epiviz.ui.charts.decoration.CodeButton.prototype._addControlCreator=function(creator,saveHandler,cancelHandler){this._controlCreators.push({creator:creator,save:saveHandler,cancel:cancelHandler})};epiviz.ui.charts.decoration.CodeButton.prototype._controlCreator=function(){return null};
epiviz.ui.charts.decoration.CodeButton.prototype._saveHandler=function(){return null};epiviz.ui.charts.decoration.CodeButton.prototype._cancelHandler=function(){return null};goog.provide("epiviz.ui.controls.CodeControl");goog.require("epiviz.ui.controls.Control");epiviz.ui.controls.CodeControl=function(container,title,id,targetObject){epiviz.ui.controls.Control.call(this,container,title,id);this._targetObj=targetObject;this._text="// TODO: Your code here\n"};epiviz.ui.controls.CodeControl.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Control.prototype);epiviz.ui.controls.CodeControl.constructor=epiviz.ui.controls.CodeControl;
epiviz.ui.controls.CodeControl.prototype.initialize=function(){};epiviz.ui.controls.CodeControl.prototype.save=function(){};epiviz.ui.controls.CodeControl.prototype.revert=function(){};epiviz.ui.controls.CodeControl.prototype.text=function(){return this._text};epiviz.ui.controls.CodeControl.prototype.result=function(){return null};goog.provide("epiviz.ui.controls.EditCodeControl");goog.require("epiviz.ui.controls.CodeControl");epiviz.ui.controls.EditCodeControl=function(container,title,id,targetObject,defaultMethod,hasModifiedMethods){epiviz.ui.controls.CodeControl.call(this,container,title,id,targetObject);this._defaultMethod=defaultMethod;this._editor=null;this._methodsCode={};this._selectedMethod=null;this._hasModifiedMethods=hasModifiedMethods||false};epiviz.ui.controls.EditCodeControl.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.CodeControl.prototype);
epiviz.ui.controls.EditCodeControl.constructor=epiviz.ui.controls.EditCodeControl;
epiviz.ui.controls.EditCodeControl.prototype.initialize=function(){if(this._editor)return;this._container.append('<div style="float: left; margin-right: 5px;"><select class="obj-methods"></select></div>'+sprintf('<div id="%1$s">'+'<label for="%1$s-true">On</label>'+'<input type="radio" id="%1$s-true" name="%1$s" %2$s />'+'<label for="%1$s-false">Off</label>'+'<input type="radio" id="%1$s-false" name="%1$s" %3$s />'+"</div>",this.id()+"-switch",this._hasModifiedMethods?'checked="checked"':"",this._hasModifiedMethods?
"":'checked="checked"')+"<br />"+'<div style="overflow-y: scroll; max-height: 500px;">'+'<textarea autofocus="autofocus" class="code-edit"></textarea>'+"</div>");this._methodsSelector=this._container.find(".obj-methods");var onOffSwitch=this._container.find("#"+this.id()+"-switch");onOffSwitch.buttonset();var self=this;var optionChange=function(e){var optionChecked=$("#"+self.id()+"-switch :radio:checked").attr("id");var newValue=optionChecked.substr(optionChecked.lastIndexOf("-")+1)=="true";if(self._editor)self._editor.setOption("disableInput",
!newValue);self._hasModifiedMethods=newValue};onOffSwitch.find("#"+this.id()+"-switch-true").on("change",optionChange);onOffSwitch.find("#"+this.id()+"-switch-false").on("change",optionChange);var codeEditor=this._container.find(".code-edit");var methods=[];var obj=this._targetObj;for(var m in obj)if($.isFunction(obj[m]))methods.push(m);methods.sort();for(var i=0;i<methods.length;++i){m=methods[i];var selected=i==0&&!this._defaultMethod||this._defaultMethod==m;this._methodsSelector.append(sprintf('<option value="%s"%s>%s</option>',
m,selected?' selected="selected"':"",m));if(selected){this._text=obj[m].toString();this._selectedMethod=m}}this._methodsSelector.change(function(){self._methodsCode[self._selectedMethod]=self._editor.getValue();var sel=$(this).val();var text=self._methodsCode[sel];if(!text){text=self._targetObj[sel].toString();self._methodsCode[sel]=text}self._text=text;if(self._editor)self._editor.getDoc().setValue(self._text);else codeEditor.val(self._text);self._selectedMethod=sel});codeEditor.val(this._text);
this._methodsSelector.selectmenu({style:"popup",width:"150",maxHeight:"150",menuWidth:"150"});this._editor=CodeMirror.fromTextArea(this._container.find(".code-edit")[0],{lineNumbers:true,matchBrackets:true,continueComments:"Enter",extraKeys:{"Ctrl-Q":"toggleComment"},autofocus:true});this._editor.setOption("disableInput",!this._hasModifiedMethods)};epiviz.ui.controls.EditCodeControl.prototype.save=function(){this._methodsCode[this._selectedMethod]=this._editor.getValue();this._text=this._editor.getValue()};
epiviz.ui.controls.EditCodeControl.prototype.revert=function(){if(this._editor)this._editor.setOption("value",this._text)};epiviz.ui.controls.EditCodeControl.prototype.modifiedMethods=function(){var modifiedMethods={};for(var m in this._methodsCode){if(!this._methodsCode.hasOwnProperty(m))continue;if(this._methodsCode[m]!=this._targetObj[m].toString())modifiedMethods[m]=this._methodsCode[m]}return modifiedMethods};
epiviz.ui.controls.EditCodeControl.prototype.result=function(){return{hasModifiedMethods:this._hasModifiedMethods,modifiedMethods:this._hasModifiedMethods?this.modifiedMethods():{}}};goog.provide("epiviz.ui.charts.decoration.EditCodeButton");goog.require("epiviz.ui.charts.decoration.CodeButton");goog.require("epiviz.ui.controls.EditCodeControl");epiviz.ui.charts.decoration.EditCodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.CodeButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.EditCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.CodeButton.prototype);
epiviz.ui.charts.decoration.EditCodeButton.constructor=epiviz.ui.charts.decoration.EditCodeButton;epiviz.ui.charts.decoration.EditCodeButton.prototype._controlCreator=function(){var self=this;return function(container){return new epiviz.ui.controls.EditCodeControl(container,"Edit Code",null,self.visualization(),self.visualization().lastModifiedMethod(),self.visualization().hasModifiedMethods())}};
epiviz.ui.charts.decoration.EditCodeButton.prototype._saveHandler=function(){var self=this;return function(result){if(result.hasModifiedMethods)self.visualization().setModifiedMethods(result.modifiedMethods);else self.visualization().resetModifiedMethods()}};epiviz.ui.charts.decoration.EditCodeButton.prototype._cancelHandler=function(){return function(){}};goog.provide("epiviz.ui.controls.ColorPickerDialog");goog.require("epiviz.ui.controls.Dialog");goog.require("epiviz.ui.charts.ColorPalette");
epiviz.ui.controls.ColorPickerDialog=function(handlers,names,palettes,selectedPalette){epiviz.ui.controls.Dialog.call(this,"Pick Colors",handlers);this._dialog=$("#"+this._id);this._dialog.append('<div class="color-picker-form" action="" style="width: 420px;">'+'<div class="chart-picker" style="float: right;"></div>'+"</div>");var colorPickerForm=this._dialog.find(".color-picker-form");var tableContent="";for(var i=0;i<names.length;++i){var inputClass=sprintf("color-%s",i);tableContent+=sprintf("<tr>"+
"<td><label>%s:&nbsp;</label></td>"+'<td><input type="text" name="%s" class="colorwell %s" value="%s" /></td>'+"</tr>",names[i],inputClass,inputClass,selectedPalette.keyColorIndex(names[i])>=0?selectedPalette.getByKey(names[i]):selectedPalette.get(i))}colorPickerForm.append(sprintf('<table class="color-picker-table">%s</table>',tableContent));var f=$.farbtastic(sprintf("#%s .chart-picker",this._id));var p=$(sprintf("#%s .chart-picker",this._id)).css("opacity",.25);var selected;$(sprintf("#%s .colorwell",
this._id)).each(function(){f.linkTo(this);$(this).css("opacity",.75)}).focus(function(){if(selected)$(selected).css("opacity",.75).removeClass("colorwell-selected");f.linkTo(this);p.css("opacity",1);$(selected=this).css("opacity",1).addClass("colorwell-selected")});colorPickerForm.append('<select class="palettes-selector"></select>');var palettesSelector=colorPickerForm.find(".palettes-selector");var palettesMap={};if(palettes)palettes.forEach(function(palette){palettesSelector.append(sprintf('<option value="%s"%s>%s</option>',
palette.id(),palette.id()==selectedPalette.id()?' selected="selected"':"",palette.name()));palettesMap[palette.id()]=palette});if(!(selectedPalette.id()in palettesMap)){palettesSelector.prepend(sprintf('<option value="%s" selected="selected">%s</option>',selectedPalette.id(),selectedPalette.name()));palettesMap[selectedPalette.id()]=selectedPalette}palettesSelector.selectmenu({style:"popup",width:"200",maxHeight:"150",menuWidth:"200"});var updateColorFields=function(){var inputs=colorPickerForm.find(".colorwell");
for(var i=0;i<inputs.length;++i){var input=inputs[i];f.linkTo($(input));f.setColor(selectedPalette.get(i))}if(selected)f.linkTo(selected)};palettesSelector.change(function(){selectedPalette=palettesMap[$(this).val()];updateColorFields()});var self=this;this._dialog.dialog({autoOpen:false,resizable:false,width:"440",buttons:{Ok:function(){var inputs=colorPickerForm.find(".colorwell");var paletteChanged=false;var colors=[];var i;for(i=0;i<selectedPalette.size();++i)colors.push(selectedPalette.get(i));
for(i=0;i<inputs.length;++i){var userVal=inputs[i].value;var index=selectedPalette.keyColorIndex(names[i]);if(index<0)index=i;if(userVal!=colors[index]){paletteChanged=true;colors[index]=userVal}}if(paletteChanged)selectedPalette=new epiviz.ui.charts.ColorPalette(colors,undefined,undefined,selectedPalette.keyIndices());self._handlers.ok(selectedPalette);$(this).dialog("close")},Cancel:function(){self._handlers.cancel();$(this).dialog("close")},Reset:function(){updateColorFields();self._handlers.reset()}},
modal:true})};epiviz.ui.controls.ColorPickerDialog.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.Dialog.prototype);epiviz.ui.controls.ColorPickerDialog.constructor=epiviz.ui.controls.ColorPickerDialog;
epiviz.ui.controls.ColorPickerDialog.prototype.show=function(){epiviz.ui.controls.Dialog.prototype.show.call(this);var self=this;if(this._dialog){this._dialog.dialog("open");this._dialog.dialog("option","position","center");this._dialog.dialog({close:function(event,ui){$(this).remove();self._dialog=null}})}};goog.provide("epiviz.ui.charts.decoration.ChartColorsButton");goog.require("epiviz.ui.charts.decoration.ChartOptionButton");goog.require("epiviz.ui.controls.ColorPickerDialog");epiviz.ui.charts.decoration.ChartColorsButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.ChartOptionButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.ChartColorsButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.ChartOptionButton.prototype);
epiviz.ui.charts.decoration.ChartColorsButton.constructor=epiviz.ui.charts.decoration.ChartColorsButton;epiviz.ui.charts.decoration.ChartColorsButton.prototype._click=function(){var self=this;return function(){var labels=self.visualization().colorLabels();var colorPickerDialog=new epiviz.ui.controls.ColorPickerDialog({ok:function(colors){self.visualization().setColors(colors)},cancel:function(){},reset:function(){}},labels,self.config().colorPalettes,self.visualization().colors());colorPickerDialog.show()}};
epiviz.ui.charts.decoration.ChartColorsButton.prototype._renderOptions=function(){return{icons:{primary:"ui-icon ui-icon-colorpicker"},text:false}};epiviz.ui.charts.decoration.ChartColorsButton.prototype._text=function(){return"Colors"};goog.provide("epiviz.ui.charts.decoration.ChartLoaderAnimation");goog.require("epiviz.ui.charts.decoration.VisualizationDecoration");goog.require("epiviz.events.EventListener");epiviz.ui.charts.decoration.ChartLoaderAnimation=function(visualization,otherDecoration){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,visualization,otherDecoration);this._loaderTimeout=0;this._animationShowing=false};epiviz.ui.charts.decoration.ChartLoaderAnimation.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);
epiviz.ui.charts.decoration.ChartLoaderAnimation.constructor=epiviz.ui.charts.decoration.ChartLoaderAnimation;
epiviz.ui.charts.decoration.ChartLoaderAnimation.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);var self=this;this.visualization().onDataWaitStart().addListener(new epiviz.events.EventListener(function(){self._addLoaderAnimation()}));this.visualization().onDataWaitEnd().addListener(new epiviz.events.EventListener(function(){self._removeLoaderAnimation()}));this.visualization().onSizeChanged().addListener(new epiviz.events.EventListener(function(){if(self._animationShowing)self._addLoaderAnimation()}))};
epiviz.ui.charts.decoration.ChartLoaderAnimation.prototype._addLoaderAnimation=function(){if(this._loaderTimeout)clearTimeout(this._loaderTimeout);var doAddLoaderAnimation=function(){self._animationShowing=true;var loaderCls="chart-loader";var visualization=self.visualization();var container=visualization.container();container.find("."+loaderCls).remove();container.append(sprintf('<div class="loader-icon %s" style="top: %spx; left: %spx;"></div>',loaderCls,Math.floor(visualization.height()*.5),Math.floor(visualization.width()*
.5)));container.find("."+loaderCls).activity({segments:8,steps:5,opacity:.3,width:4,space:0,length:10,color:"#0b0b0b",speed:1})};var self=this;if(!this._animationShowing)this._loaderTimeout=setTimeout(doAddLoaderAnimation,500);else doAddLoaderAnimation()};
epiviz.ui.charts.decoration.ChartLoaderAnimation.prototype._removeLoaderAnimation=function(){if(this._loaderTimeout)clearTimeout(this._loaderTimeout);this._animationShowing=false;var loaderCls="chart-loader";this.visualization().container().find("."+loaderCls).remove()};goog.provide("epiviz.ui.charts.decoration.ChartResize");goog.require("epiviz.ui.charts.decoration.VisualizationDecoration");epiviz.ui.charts.decoration.ChartResize=function(visualization,otherDecoration){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,visualization,otherDecoration)};epiviz.ui.charts.decoration.ChartResize.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);epiviz.ui.charts.decoration.ChartResize.constructor=epiviz.ui.charts.decoration.ChartResize;
epiviz.ui.charts.decoration.ChartResize.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);var self=this;var resizeHandler=function(event,ui){self.visualization().updateSize()};this.visualization().container().resizable({stop:resizeHandler})};goog.provide("epiviz.ui.charts.decoration.ToggleTooltipButton");goog.require("epiviz.ui.charts.decoration.VisualizationDecoration");epiviz.ui.charts.decoration.ToggleTooltipButton=function(visualization,otherDecoration){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,visualization,otherDecoration);this.isChartOptionButton=true;this._checked=false};epiviz.ui.charts.decoration.ToggleTooltipButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);
epiviz.ui.charts.decoration.ToggleTooltipButton.constructor=epiviz.ui.charts.decoration.ToggleTooltipButton;
epiviz.ui.charts.decoration.ToggleTooltipButton.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);var buttonIndex=0;for(var decoration=this.otherDecoration();decoration;decoration=decoration.otherDecoration())if(decoration.isChartOptionButton)++buttonIndex;var self=this;var tooltipButtonId=sprintf("%s-tooltip-button",this.visualization().id());this.visualization().container().append(sprintf('<div id="%1$s-container" style="position: absolute; top: 5px; right: %2$spx">'+
'<input type="checkbox" id="%1$s" %3$s />'+'<label for="%1$s" >Toggle tooltip</label>'+"</div>",tooltipButtonId,5+buttonIndex*30,this._checked?'checked="checked"':""));var button=$("#"+tooltipButtonId);var tooltipButtonContainer=$("#"+tooltipButtonId+"-container");button.button({text:false,icons:{primary:"ui-icon-comment"}}).click(function(){self._checked=button.is(":checked")});this.visualization().container().mousemove(function(){tooltipButtonContainer.show()}).mouseleave(function(){tooltipButtonContainer.hide()})};
epiviz.ui.charts.decoration.ToggleTooltipButton.prototype.checked=function(){return this._checked};goog.provide("epiviz.ui.charts.decoration.ChartTooltip");goog.require("epiviz.ui.charts.decoration.VisualizationDecoration");goog.require("epiviz.ui.charts.decoration.ToggleTooltipButton");epiviz.ui.charts.decoration.ChartTooltip=function(visualization,otherDecoration){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,visualization,otherDecoration)};epiviz.ui.charts.decoration.ChartTooltip.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);
epiviz.ui.charts.decoration.ChartTooltip.constructor=epiviz.ui.charts.decoration.ChartTooltip;
epiviz.ui.charts.decoration.ChartTooltip.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);var tooltipButtonDecoration=undefined;for(var decoration=this.otherDecoration();decoration;decoration=decoration.otherDecoration())if(decoration.constructor==epiviz.ui.charts.decoration.ToggleTooltipButton){tooltipButtonDecoration=decoration;break}var self=this;this.visualization().container().tooltip({items:".item",content:function(){if(!tooltipButtonDecoration.checked())return false;
var item=d3.select(this).data()[0];if(item.valueItems[0].length>item.measurements.length+item.measurements[0].metadata().length)return self._horizontalContent(item);else return self._verticalContent(item)},track:true,show:false})};
epiviz.ui.charts.decoration.ChartTooltip.prototype._horizontalContent=function(item){var maxMetadataValueLength=15;var metadataCols=item.measurements[0].metadata();var colsHeader=sprintf("%s%s%s",item.start!=undefined&&item.end!=undefined?"<th><b>Start</b></th><th><b>End</b></th>":"",metadataCols?"<th><b>"+metadataCols.join("</b></th><th><b>")+"</b></th>":"",item.values?"<th><b>"+item.measurements.join("</b></th><th><b>")+"</b></th>":"");var rows="";for(var j=0;j<item.valueItems[0].length&&j<10;++j){var row=
"";var rowItem=item.valueItems[0][j].rowItem;var start=Globalize.format(rowItem.start(),"n0");var end=Globalize.format(rowItem.end(),"n0");if(start!=undefined&&end!=undefined)row+=sprintf("<td>%s</td><td>%s</td>",start,end);var rowMetadata=rowItem.rowMetadata();if(metadataCols&&rowMetadata)for(var k=0;k<metadataCols.length;++k){var metadataCol=metadataCols[k];var metadataValue=rowMetadata[metadataCol]||"";row+=sprintf("<td>%s</td>",metadataValue.length<=maxMetadataValueLength?metadataValue:metadataValue.substr(0,
maxMetadataValueLength)+"...")}if(item.values)for(var i=0;i<item.measurements.length;++i)row+=sprintf("<td>%s</td>",Globalize.format(item.valueItems[i][j].value,"n3"));rows+=sprintf("<tr>%s</tr>",row)}if(j<item.valueItems[0].length){var colspan=2+(metadataCols?metadataCols.length:0)+(item.values?item.measurements.length:0);rows+=sprintf('<tr><td colspan="%s" style="text-align: center;">...</td></tr>',colspan)}return sprintf('<table class="tooltip-table"><thead><tr>%s</tr></thead><tbody>%s</tbody></table>',
colsHeader,rows)};
epiviz.ui.charts.decoration.ChartTooltip.prototype._verticalContent=function(item){var maxMetadataValueLength=15;var maxRows=10;var maxCols=6;var condensedMetadata=4;var condensedValues=5;var table=[];var coordinates=[0,0];if(item.start!=undefined&&item.end!=undefined){var start=["Start"];var end=["End"];item.valueItems[0].every(function(valueItem,j){start.push(Globalize.format(valueItem.rowItem.start(),"n0"));end.push(Globalize.format(valueItem.rowItem.end(),"n0"));return j<maxCols-1});table.push(start);
table.push(end);coordinates=[0,2]}var metadataCols=item.measurements[0].metadata();var metadata=[coordinates[1],coordinates[1]+metadataCols.length];metadataCols.forEach(function(metadata){var row=[metadata];item.valueItems[0].every(function(valueItem,j){var metadataVal=valueItem.rowItem.metadata(metadata)||"[NA]";if(metadataVal.length>maxMetadataValueLength)metadataVal=metadataVal.substr(0,maxMetadataValueLength)+"...";row.push(metadataVal);return j<maxCols-1});table.push(row)});var values=[metadata[1],
metadata[1]];if(item.values){values=[metadata[1],metadata[1]+item.measurements.length];item.measurements.forEach(function(m,i){var row=[m.name()];item.valueItems[i].every(function(valueItem,j){row.push(Globalize.format(valueItem.value,"n3"));return j<maxCols-1});table.push(row)})}var nRows=values[1];if(nRows>maxRows){coordinates[1]=1;metadata[1]=Math.min(metadata[1],metadata[0]+condensedMetadata);nRows=coordinates[1]-coordinates[0]+metadata[1]-metadata[0]+values[1]-values[0];if(nRows>maxRows)values[1]-=
nRows-maxRows}var ret="",i;for(i=coordinates[0];i<coordinates[1];++i)ret+="<tr><td><b>"+table[i][0]+"</b></td><td>"+table[i].slice(1).join("</td><td>")+"</td></tr>";for(i=metadata[0];i<metadata[1];++i)ret+="<tr><td><b>"+table[i][0]+"</b></td><td>"+table[i].slice(1).join("</td><td>")+"</td></tr>";for(i=values[0];i<values[1];++i)ret+="<tr><td><b>"+table[i][0]+"</b></td><td>"+table[i].slice(1).join("</td><td>")+"</td></tr>";return'<table class="tooltip-table"><tbody>'+ret+"</tbody></table>"};goog.provide("epiviz.ui.controls.MarkerCodeControl");goog.require("epiviz.ui.controls.CodeControl");epiviz.ui.controls.MarkerCodeControl=function(container,title,id,targetObject,preFilterText,filterText,enabled){epiviz.ui.controls.CodeControl.call(this,container,title,id,targetObject);this._editor=null;this._markEditor=null;this._editorText=preFilterText;this._markText=filterText;this._enabled=enabled||false};epiviz.ui.controls.MarkerCodeControl.prototype=epiviz.utils.mapCopy(epiviz.ui.controls.CodeControl.prototype);
epiviz.ui.controls.MarkerCodeControl.constructor=epiviz.ui.controls.MarkerCodeControl;
epiviz.ui.controls.MarkerCodeControl.prototype.initialize=function(){if(this._editor)return;this._container.append(sprintf('<div id="%1$s">'+'<label for="%1$s-true">On</label>'+'<input type="radio" id="%1$s-true" name="%1$s" %2$s />'+'<label for="%1$s-false">Off</label>'+'<input type="radio" id="%1$s-false" name="%1$s" %3$s />'+"</div>",this.id()+"-switch",this._enabled?'checked="checked"':"",this._enabled?"":'checked="checked"')+"<br />"+"<div><label><b>Pre-mark Method</b></label></div><br />"+'<div style="overflow-y: scroll; max-height: 250px;">'+
'<textarea autofocus="autofocus" class="pre-filter-code"></textarea>'+"</div><br/>"+"<div><label><b>Mark Method</b></label></div><br/>"+'<div style="overflow-y: scroll; max-height: 250px;">'+'<textarea autofocus="autofocus" class="filter-code"></textarea>'+"</div>");var onOffSwitch=this._container.find("#"+this.id()+"-switch");onOffSwitch.buttonset();var self=this;var optionChange=function(e){var optionChecked=$("#"+self.id()+"-switch :radio:checked").attr("id");var newValue=optionChecked.substr(optionChecked.lastIndexOf("-")+
1)=="true";if(self._editor)self._editor.setOption("disableInput",!newValue);if(self._markEditor)self._markEditor.setOption("disableInput",!newValue);self._enabled=newValue};onOffSwitch.find("#"+this.id()+"-switch-true").on("change",optionChange);onOffSwitch.find("#"+this.id()+"-switch-false").on("change",optionChange);var preFilterCodeEditor=this._container.find(".pre-filter-code");preFilterCodeEditor.val(this._editorText);var filterCodeEditor=this._container.find(".filter-code");filterCodeEditor.val(this._markText);
this._editor=CodeMirror.fromTextArea(preFilterCodeEditor[0],{lineNumbers:true,matchBrackets:true,continueComments:"Enter",extraKeys:{"Ctrl-Q":"toggleComment"},autofocus:true});this._editor.setOption("disableInput",!this._enabled);this._markEditor=CodeMirror.fromTextArea(filterCodeEditor[0],{lineNumbers:true,matchBrackets:true,continueComments:"Enter",extraKeys:{"Ctrl-Q":"toggleComment"},autofocus:true});this._markEditor.setOption("disableInput",!this._enabled)};
epiviz.ui.controls.MarkerCodeControl.prototype.save=function(){if(!this._editor)return;this._editorText=this._editor.getValue();this._markText=this._markEditor.getValue()};epiviz.ui.controls.MarkerCodeControl.prototype.revert=function(){if(this._editor)this._editor.setOption("value",this._editorText);if(this._markEditor)this._markEditor.setOption("value",this._markText)};
epiviz.ui.controls.MarkerCodeControl.prototype.result=function(){return{enabled:this._enabled,preMark:this._enabled?this._editorText:null,mark:this._enabled?this._markText:null}};goog.provide("epiviz.ui.charts.decoration.MarkerCodeButton");goog.require("epiviz.ui.charts.decoration.CodeButton");goog.require("epiviz.ui.controls.MarkerCodeControl");goog.require("epiviz.ui.charts.markers.VisualizationMarker");epiviz.ui.charts.decoration.MarkerCodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.CodeButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.MarkerCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.CodeButton.prototype);
epiviz.ui.charts.decoration.MarkerCodeButton.constructor=epiviz.ui.charts.decoration.MarkerCodeButton;
epiviz.ui.charts.decoration.MarkerCodeButton.prototype._controlCreator=function(){var self=this;return function(container){var existingMark=self.visualization().getMarker(self.markerId());var preMark,mark;if(existingMark){preMark=existingMark.preMarkStr();mark=existingMark.markStr()}preMark=preMark||self.preMarkTemplate();mark=mark||self.markTemplate();return new epiviz.ui.controls.MarkerCodeControl(container,self.markerLabel(),null,self.visualization(),preMark,mark,existingMark!=undefined)}};
epiviz.ui.charts.decoration.MarkerCodeButton.prototype._saveHandler=function(){var self=this;return function(arg){if(arg.enabled)self.visualization().putMarker(self.createMarker(arg.preMark,arg.mark));else self.visualization().removeMarker(self.markerId())}};epiviz.ui.charts.decoration.MarkerCodeButton.prototype._cancelHandler=function(){return function(){}};
epiviz.ui.charts.decoration.MarkerCodeButton.prototype.createMarker=function(preMark,mark){return new epiviz.ui.charts.markers.VisualizationMarker(this.markerType(),this.markerId(),this.markerLabel(),preMark,mark)};epiviz.ui.charts.decoration.MarkerCodeButton.prototype.markerType=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.decoration.MarkerCodeButton.prototype.markerLabel=function(){throw Error("unimplemented abstract method");};
epiviz.ui.charts.decoration.MarkerCodeButton.prototype.markerId=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.decoration.MarkerCodeButton.prototype.preMarkTemplate=function(){throw Error("unimplemented abstract method");};epiviz.ui.charts.decoration.MarkerCodeButton.prototype.markTemplate=function(){throw Error("unimplemented abstract method");};goog.provide("epiviz.ui.charts.decoration.ChartFilterCodeButton");goog.require("epiviz.ui.charts.decoration.MarkerCodeButton");goog.require("epiviz.ui.charts.markers.VisualizationMarker");epiviz.ui.charts.decoration.ChartFilterCodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);
epiviz.ui.charts.decoration.ChartFilterCodeButton.constructor=epiviz.ui.charts.decoration.ChartFilterCodeButton;epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.FILTER};epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.markerLabel=function(){return"User Filter"};epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.markerId=function(){return"user-filter"};
epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.preMarkTemplate=function(){return"/**\n"+" * This method is called once before every draw, for all data available to the visualization,\n"+" * for initialization. Its result can be used inside the filter method.\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @returns {InitialVars}\n"+" * @template InitialVars\n"+" */\n"+"function(data) {\n"+"  // TODO: Your code here\n"+"  return null;\n"+"}\n"};
epiviz.ui.charts.decoration.ChartFilterCodeButton.prototype.markTemplate=function(){return"/**\n"+" * This method is called for every data object. If it returns false, the object will not be drawn.\n"+" * @param {epiviz.datatypes.GenomicData.ValueItem} [item]\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @param {InitialVars} [preMarkResult]\n"+" * @returns {boolean}\n"+" * @template InitialVars\n"+" */\n"+"function(item, data, preMarkResult) {\n"+"  // TODO: Your code here\n"+"  return true;\n"+
"}\n"};goog.provide("epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton");goog.require("epiviz.ui.charts.decoration.VisualizationDecoration");epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton=function(visualization,otherDecoration){epiviz.ui.charts.decoration.VisualizationDecoration.call(this,visualization,otherDecoration);this.isChartOptionButton=true;this._checked=true};epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.VisualizationDecoration.prototype);
epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton.constructor=epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton;
epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton.prototype.decorate=function(){epiviz.ui.charts.decoration.VisualizationDecoration.prototype.decorate.call(this);var buttonIndex=0;for(var decoration=this.otherDecoration();decoration;decoration=decoration.otherDecoration())if(decoration.isChartOptionButton)++buttonIndex;var self=this;var buttonId=sprintf("%s-propagate-selection-button",this.visualization().id());this.visualization().container().append(sprintf('<div id="%1$s-container" style="position: absolute; top: 5px; right: %2$spx">'+
'<input type="checkbox" id="%1$s" %3$s />'+'<label for="%1$s" >Toggle propagate selection</label>'+"</div>",buttonId,5+buttonIndex*30,this._checked?'checked="checked"':""));var button=$("#"+buttonId);var buttonContainer=$("#"+buttonId+"-container");button.button({text:false,icons:{primary:"ui-icon ui-icon-refresh"}}).click(function(){self._checked=button.is(":checked");self.visualization().setAutoPropagateChanges(self._checked)});this.visualization().container().mousemove(function(){buttonContainer.show()}).mouseleave(function(){buttonContainer.hide()})};
epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton.prototype.checked=function(){return this._checked};goog.provide("epiviz.ui.charts.decoration.HierarchyFilterCodeButton");goog.require("epiviz.ui.charts.decoration.MarkerCodeButton");goog.require("epiviz.ui.charts.markers.VisualizationMarker");epiviz.ui.charts.decoration.HierarchyFilterCodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);
epiviz.ui.charts.decoration.HierarchyFilterCodeButton.constructor=epiviz.ui.charts.decoration.HierarchyFilterCodeButton;epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.FILTER};epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.markerLabel=function(){return"User Filter"};epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.markerId=function(){return"user-filter"};
epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.preMarkTemplate=function(){return"/**\n"+" * This method is called once before every draw, for all data available to the visualization,\n"+" * for initialization. Its result can be used inside the filter method.\n"+" * @param {epiviz.ui.charts.tree.Node} [root]\n"+" * @returns {InitialVars}\n"+" * @template InitialVars\n"+" */\n"+"function(root) {\n"+"  // TODO: Your code here\n"+"  return null;\n"+"}\n"};
epiviz.ui.charts.decoration.HierarchyFilterCodeButton.prototype.markTemplate=function(){return"/**\n"+" * This method is called for every data object. If it returns false, the object will not be drawn.\n"+" * @param {epiviz.ui.charts.tree.Node} [node]\n"+" * @param {epiviz.ui.charts.tree.Node} [root]\n"+" * @param {InitialVars} [preMarkResult]\n"+" * @returns {boolean}\n"+" * @template InitialVars\n"+" */\n"+"function(node, root, preMarkResult) {\n"+"  // TODO: Your code here\n"+"  return true;\n"+
"}\n"};goog.provide("epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton");goog.require("epiviz.ui.charts.decoration.MarkerCodeButton");goog.require("epiviz.ui.charts.markers.VisualizationMarker");epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);
epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.constructor=epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton;epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.GROUP_BY_MEASUREMENTS};epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.markerLabel=function(){return"Group by"};
epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.markerId=function(){return"group-by-measurements"};
epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.preMarkTemplate=function(){return"/**\n"+" * This method is called once before every draw, for all data available to the visualization,\n"+" * for initialization. Its result can be used inside the filter method.\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @returns {InitialVars}\n"+" * @template InitialVars\n"+" */\n"+"function(data) {\n"+"  // TODO: Your code here\n"+"  return null;\n"+"}\n"};
epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton.prototype.markTemplate=function(){return"/**\n"+" * @param {epiviz.measurements.Measurement} m\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @param {InitialVars} [preMarkResult]\n"+" * @returns {string}\n"+" * @template InitialVars\n"+" */\n"+"function(m, data, preMarkResult) {\n"+"  // TODO: Your code here\n"+"  return 0;\n"+"}\n"};goog.provide("epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton");goog.require("epiviz.ui.charts.decoration.MarkerCodeButton");goog.require("epiviz.ui.charts.markers.VisualizationMarker");epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);
epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.constructor=epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton;epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.COLOR_BY_MEASUREMENTS};epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.markerLabel=function(){return"Color by Measurements"};
epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.markerId=function(){return"color-by-measurements"};
epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.preMarkTemplate=function(){return"/**\n"+" * This method is called once before every draw, for all data available to the visualization,\n"+" * for initialization. Its result can be used inside the filter method.\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @returns {InitialVars}\n"+" * @template InitialVars\n"+" */\n"+"function(data) {\n"+"  // TODO: Your code here\n"+"  return null;\n"+"}\n"};
epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton.prototype.markTemplate=function(){return"/**\n"+" * @param {epiviz.measurements.Measurement} m\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @param {InitialVars} [preMarkResult]\n"+" * @returns {string|number}\n"+" * @template InitialVars\n"+" */\n"+"function(m, data, preMarkResult) {\n"+"  // TODO: Your code here\n"+"  return 0;\n"+"}\n"};goog.provide("epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton");goog.require("epiviz.ui.charts.decoration.MarkerCodeButton");goog.require("epiviz.ui.charts.markers.VisualizationMarker");epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);
epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.constructor=epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton;epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.ORDER_BY_MEASUREMENTS};epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.markerLabel=function(){return"Order By"};
epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.markerId=function(){return"order-by-measurements"};
epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.preMarkTemplate=function(){return"/**\n"+" * This method is called once before every draw, for all data available to the visualization,\n"+" * for initialization. Its result can be used inside the filter method.\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @returns {InitialVars}\n"+" * @template InitialVars\n"+" */\n"+"function(data) {\n"+"  // TODO: Your code here\n"+"  return null;\n"+"}\n"};
epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton.prototype.markTemplate=function(){return"/**\n"+" * @param {epiviz.measurements.Measurement} m\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @param {InitialVars} [preMarkResult]\n"+" * @returns {string|number}\n"+" * @template InitialVars\n"+" */\n"+"function(m, data, preMarkResult) {\n"+"  // TODO: Your code here\n"+"  return 0;\n"+"}\n"};goog.provide("epiviz.ui.charts.decoration.ChartColorByRowCodeButton");goog.require("epiviz.ui.charts.decoration.MarkerCodeButton");goog.require("epiviz.ui.charts.markers.VisualizationMarker");epiviz.ui.charts.decoration.ChartColorByRowCodeButton=function(visualization,otherDecoration,config){epiviz.ui.charts.decoration.MarkerCodeButton.call(this,visualization,otherDecoration,config)};epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype=epiviz.utils.mapCopy(epiviz.ui.charts.decoration.MarkerCodeButton.prototype);
epiviz.ui.charts.decoration.ChartColorByRowCodeButton.constructor=epiviz.ui.charts.decoration.ChartColorByRowCodeButton;epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.markerType=function(){return epiviz.ui.charts.markers.VisualizationMarker.Type.COLOR_BY_ROW};epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.markerLabel=function(){return"Color By"};epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.markerId=function(){return"color-by"};
epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.preMarkTemplate=function(){return"/**\n"+" * This method is called once before every draw, for all data available to the visualization,\n"+" * for initialization. Its result can be used inside the filter method.\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @returns {InitialVars}\n"+" * @template InitialVars\n"+" */\n"+"function(data) {\n"+"  // TODO: Your code here\n"+"  return null;\n"+"}\n"};
epiviz.ui.charts.decoration.ChartColorByRowCodeButton.prototype.markTemplate=function(){return"/**\n"+" * This method is called for every data object. If it returns false, the object will not be drawn.\n"+" * @param {epiviz.datatypes.GenomicData.RowItem} [row]\n"+" * @param {epiviz.datatypes.GenomicData} [data]\n"+" * @param {InitialVars} [preMarkResult]\n"+" * @returns {string}\n"+" * @template InitialVars\n"+" */\n"+"function(row, data, preMarkResult) {\n"+"  // TODO: Your code here\n"+"  return row.metadata('colLabel');\n"+
"}\n"};goog.provide("epiviz.ui.charts.ChartManager");goog.require("epiviz.events.Event");goog.require("epiviz.ui.charts.markers.VisualizationMarker");goog.require("epiviz.utils");goog.require("epiviz.ui.ControlManager");goog.require("epiviz.ui.charts.VisualizationProperties");goog.require("epiviz.ui.charts.VisEventArgs");goog.require("epiviz.ui.charts.VisualizationType");goog.require("epiviz.events.EventListener");goog.require("epiviz.ui.controls.SaveSvgAsImageDialog");goog.require("epiviz.ui.charts.decoration.RemoveChartButton");
goog.require("epiviz.ui.charts.decoration.SaveChartButton");goog.require("epiviz.ui.charts.decoration.CustomSettingsButton");goog.require("epiviz.ui.charts.decoration.EditCodeButton");goog.require("epiviz.ui.charts.decoration.ChartColorsButton");goog.require("epiviz.ui.charts.decoration.ChartLoaderAnimation");goog.require("epiviz.ui.charts.decoration.ChartResize");goog.require("epiviz.ui.charts.decoration.ToggleTooltipButton");goog.require("epiviz.ui.charts.decoration.ChartTooltip");goog.require("epiviz.ui.charts.decoration.ChartFilterCodeButton");
goog.require("epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton");goog.require("epiviz.ui.charts.decoration.HierarchyFilterCodeButton");goog.require("epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton");goog.require("epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton");goog.require("epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton");goog.require("epiviz.ui.charts.decoration.ChartColorByRowCodeButton");
epiviz.ui.charts.ChartManager=function(config){this._config=config;this._charts={};this._chartsOrder={};this._resizeInterval=null;this._chartAdded=new epiviz.events.Event;this._chartRemoved=new epiviz.events.Event;this._chartsOrderChanged=new epiviz.events.Event;this._chartsCleared=new epiviz.events.Event;this._chartColorsChanged=new epiviz.events.Event;this._chartMethodsModified=new epiviz.events.Event;this._chartMethodsReset=new epiviz.events.Event;this._chartMarkersModified=new epiviz.events.Event;
this._chartCustomSettingsChanged=new epiviz.events.Event;this._chartSizeChanged=new epiviz.events.Event;this._chartMarginsChanged=new epiviz.events.Event;this._chartRequestHierarchy=new epiviz.events.Event;this._chartPropagateHierarchyChanges=new epiviz.events.Event;this._chartPropogateIcicleLocationChanges=new epiviz.events.Event;this._chartIcicleLocationChanges=new epiviz.events.Event;this._chartPropagateNavigationChanges=new epiviz.events.Event;this._registerWindowResize()};
epiviz.ui.charts.ChartManager.prototype.addChart=function(chartType,visConfigSelection,id,chartProperties){id=id||sprintf("%s-%s-%s",chartType.chartDisplayType(),chartType.chartHtmlAttributeName(),epiviz.utils.generatePseudoGUID(5));var css=chartType.cssClass();var chartDisplayTypeContainer=$("#"+chartType.chartContainer());var chartsAccordion=chartDisplayTypeContainer.find(".accordion");var chartsContainer=chartsAccordion.find(".vis-container");if(chartsAccordion.length==0){chartsAccordion=$('<div class="accordion"></div>').appendTo(chartDisplayTypeContainer);
var displayType=chartType.chartDisplayType();chartsAccordion.append(sprintf('<h3><a href="#"><b><span style="color: #025167">Views by %s</span></b></a></h3>',epiviz.ui.ControlManager.DISPLAY_TYPE_LABELS[displayType]));chartsContainer=$('<div class="vis-container"></div>').appendTo(chartsAccordion);chartsAccordion.multiAccordion();chartsAccordion.multiAccordion("option","active","all");var self=this}chartsContainer.append(sprintf('<div id="%s" class="%s"></div>',id,css));var container=chartsContainer.find("#"+
id);var chartMarkers=[];if(chartType._defaultSettings.chartMarkers!=null||chartType._defaultSettings.chartMarkers!=undefined)for(var i=0;i<chartType._defaultSettings.chartMarkers.length;i++){var tMark=chartType._defaultSettings.chartMarkers[i];chartMarkers.push(new epiviz.ui.charts.markers.VisualizationMarker(tMark.type,tMark.id,tMark.name,tMark.preMark,tMark.mark))}chartProperties=chartProperties||new epiviz.ui.charts.VisualizationProperties(chartType.defaultWidth(),chartType.defaultHeight(),chartType.defaultMargins(),
visConfigSelection,chartType.defaultColors(),null,chartType.customSettingsValues(),chartType.customSettingsDefs(),chartMarkers);var chart=chartType.createNew(id,container,chartProperties);this._charts[id]=chart;this._registerChartHover(chart);this._registerChartUnhover(chart);this._registerChartSelect(chart);this._registerChartDeselect(chart);this._registerChartColorsChanged(chart);this._registerChartMethodsModified(chart);this._registerChartMethodsReset(chart);this._registerChartMarkersModified(chart);
this._registerChartCustomSettingsChanged(chart);this._registerChartSizeChanged(chart);this._registerChartMarginsChanged(chart);this._registerChartRemove(chart);this._registerChartSave(chart);this._registerChartRequestHierarchy(chart);this._registerChartPropagateHierarchyChanges(chart);this._registerChartPropogateIcicleLocationChanges(chart);this._registerChartIcicleLocationChanges(chart);this._registerChartPropagateNavigationChanges(chart);if(chartType.decorations()){var topDecoration=undefined;for(var i=
0;i<chartType.decorations().length;++i){var decorationCtor=epiviz.utils.evaluateFullyQualifiedTypeName(chartType.decorations()[i]);if(!decorationCtor)continue;topDecoration=epiviz.utils.applyConstructor(decorationCtor,[chart,topDecoration,this._config])}if(topDecoration)topDecoration.decorate()}if(!(chartType.chartDisplayType()in this._chartsOrder))this._chartsOrder[chartType.chartDisplayType()]=[];this._chartsOrder[chartType.chartDisplayType()].push(id);this._chartAdded.notify(new epiviz.ui.charts.VisEventArgs(id,
{type:chartType,properties:chartProperties,chartsOrder:this._chartsOrder}));return id};
epiviz.ui.charts.ChartManager.prototype.removeChart=function(id){$("#"+id).remove();var chart=this._charts[id];delete this._charts[id];this._chartsOrder[chart.displayType()].splice(this._chartsOrder[chart.displayType()].indexOf(id),1);var chartDisplayTypeContainer=$("#"+epiviz.ui.ControlManager.CHART_TYPE_CONTAINERS[chart.displayType()]);var chartsAccordion=chartDisplayTypeContainer.find(".accordion");var chartsContainer=chartsAccordion.find(".vis-container");if(chartsContainer.children().length==
0)chartDisplayTypeContainer.empty();this._chartRemoved.notify(new epiviz.ui.charts.VisEventArgs(id,this._chartsOrder))};epiviz.ui.charts.ChartManager.prototype.chartsMeasurements=function(){var result={};for(var chartId in this._charts){if(!this._charts.hasOwnProperty(chartId))continue;if(this._charts[chartId].displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE)continue;result[chartId]=this._charts[chartId].measurements()}return result};
epiviz.ui.charts.ChartManager.prototype.updateCharts=function(range,data,chartIds){chartIds=chartIds||Object.keys(this._charts);for(var i=0;i<chartIds.length;++i){if(!this._charts.hasOwnProperty(chartIds[i]))continue;var chart=this._charts[chartIds[i]];if(!chart)continue;(function(chart){chart.transformData(range,data).done(function(){chart.draw()})})(chart)}};
epiviz.ui.charts.ChartManager.prototype.updateDataStructureCharts=function(){var chartIds=Object.keys(this._charts);for(var i=0;i<chartIds.length;++i){if(!this._charts.hasOwnProperty(chartIds[i]))continue;var chart=this._charts[chartIds[i]];if(!chart)continue;if(chart.displayType()!=epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE)continue;(function(chart){setTimeout(function(){chart.fireRequestHierarchy()},0)})(chart)}};
epiviz.ui.charts.ChartManager.prototype.clear=function(){this._charts={};this._chartsOrder={};var chartContainers=epiviz.ui.ControlManager.CHART_TYPE_CONTAINERS;for(var displayType in chartContainers){if(!chartContainers.hasOwnProperty(displayType))continue;$("#"+chartContainers[displayType]).empty()}this._chartsCleared.notify()};
epiviz.ui.charts.ChartManager.prototype.dataWaitStart=function(chartId,chartFilter){if(chartId&&this._charts[chartId]){this._charts[chartId].onDataWaitStart().notify(new epiviz.ui.charts.VisEventArgs(chartId));return}for(var id in this._charts){if(!this._charts.hasOwnProperty(id))continue;if(!chartFilter||!chartFilter[this._charts[id]])continue;this._charts[id].onDataWaitStart().notify(new epiviz.ui.charts.VisEventArgs(id))}};epiviz.ui.charts.ChartManager.prototype.onChartAdded=function(){return this._chartAdded};
epiviz.ui.charts.ChartManager.prototype.onChartRemoved=function(){return this._chartRemoved};epiviz.ui.charts.ChartManager.prototype.onChartsOrderChanged=function(){return this._chartsOrderChanged};epiviz.ui.charts.ChartManager.prototype.onChartsCleared=function(){return this._chartsCleared};epiviz.ui.charts.ChartManager.prototype.onChartColorsChanged=function(){return this._chartColorsChanged};epiviz.ui.charts.ChartManager.prototype.onChartMethodsModified=function(){return this._chartMethodsModified};
epiviz.ui.charts.ChartManager.prototype.onChartMethodsReset=function(){return this._chartMethodsReset};epiviz.ui.charts.ChartManager.prototype.onChartMarkersModified=function(){return this._chartMarkersModified};epiviz.ui.charts.ChartManager.prototype.onChartCustomSettingsChanged=function(){return this._chartCustomSettingsChanged};epiviz.ui.charts.ChartManager.prototype.onChartSizeChanged=function(){return this._chartSizeChanged};epiviz.ui.charts.ChartManager.prototype.onChartMarginsChanged=function(){return this._chartMarginsChanged};
epiviz.ui.charts.ChartManager.prototype.onChartRequestHierarchy=function(){return this._chartRequestHierarchy};epiviz.ui.charts.ChartManager.prototype.onChartPropagateHierarchyChanges=function(){return this._chartPropagateHierarchyChanges};epiviz.ui.charts.ChartManager.prototype.onChartPropogateIcicleLocationChanges=function(){return this._chartPropogateIcicleLocationChanges};epiviz.ui.charts.ChartManager.prototype.onChartIcicleLocationChanges=function(){return this._chartIcicleLocationChanges};
epiviz.ui.charts.ChartManager.prototype.onChartPropagateNavigationChanges=function(){return this._chartPropagateNavigationChanges};
epiviz.ui.charts.ChartManager.prototype._registerWindowResize=function(){var self=this;$(window).resize(function(){if(self._resizeInterval!==null)window.clearTimeout(self._resizeInterval);self._resizeInterval=window.setTimeout(function(){for(var chartId in self._charts){if(!self._charts.hasOwnProperty(chartId))continue;self._charts[chartId].updateSize()}self._resizeInterval=null},500)})};
epiviz.ui.charts.ChartManager.prototype._registerChartHover=function(chart){var self=this;chart.onHover().addListener(new epiviz.events.EventListener(function(e){for(var id in self._charts){if(!self._charts.hasOwnProperty(id))continue;self._charts[id].doHover(e.args)}}))};
epiviz.ui.charts.ChartManager.prototype._registerChartUnhover=function(chart){var self=this;chart.onUnhover().addListener(new epiviz.events.EventListener(function(){for(var id in self._charts){if(!self._charts.hasOwnProperty(id))continue;self._charts[id].doUnhover()}}))};
epiviz.ui.charts.ChartManager.prototype._registerChartSelect=function(chart){var self=this;chart.onSelect().addListener(new epiviz.events.EventListener(function(e){var selectedObject=e.args;for(var id in self._charts){if(!self._charts.hasOwnProperty(id))continue;self._charts[id].doSelect(selectedObject)}}))};
epiviz.ui.charts.ChartManager.prototype._registerChartDeselect=function(chart){var self=this;chart.onDeselect().addListener(new epiviz.events.EventListener(function(){for(var id in self._charts){if(!self._charts.hasOwnProperty(id))continue;self._charts[id].doDeselect()}}))};epiviz.ui.charts.ChartManager.prototype._registerChartRemove=function(chart){var self=this;chart.onRemove().addListener(new epiviz.events.EventListener(function(e){self.removeChart(e.id)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartSave=function(chart){var self=this;if(self._config.configType!="default")chart.onSave().addListener(new epiviz.events.EventListener(function(e){var pm=new epiviz.ui.PrintManager(e.id,"epiviz_"+Math.floor($.now()/1E3),"pdf");pm.print()}));else chart.onSave().addListener(new epiviz.events.EventListener(function(e){var saveSvgDialog=new epiviz.ui.controls.SaveSvgAsImageDialog({ok:function(){},cancel:function(){}},e.id,self._config.dataServerLocation+
self._config.chartSaverLocation);saveSvgDialog.show()}))};epiviz.ui.charts.ChartManager.prototype._registerChartColorsChanged=function(chart){var self=this;chart.onColorsChanged().addListener(new epiviz.events.EventListener(function(e){self._chartColorsChanged.notify(e)}))};epiviz.ui.charts.ChartManager.prototype._registerChartMethodsModified=function(chart){var self=this;chart.onMethodsModified().addListener(new epiviz.events.EventListener(function(e){self._chartMethodsModified.notify(e)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartMethodsReset=function(chart){var self=this;chart.onMethodsReset().addListener(new epiviz.events.EventListener(function(e){self._chartMethodsReset.notify(e)}))};epiviz.ui.charts.ChartManager.prototype._registerChartMarkersModified=function(chart){var self=this;chart.onMarkersModified().addListener(new epiviz.events.EventListener(function(e){self._chartMarkersModified.notify(e)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartCustomSettingsChanged=function(chart){var self=this;chart.onCustomSettingsChanged().addListener(new epiviz.events.EventListener(function(e){self._chartCustomSettingsChanged.notify(e)}))};epiviz.ui.charts.ChartManager.prototype._registerChartSizeChanged=function(chart){var self=this;chart.onSizeChanged().addListener(new epiviz.events.EventListener(function(e){self._chartSizeChanged.notify(e)}))};
epiviz.ui.charts.ChartManager.prototype._registerChartMarginsChanged=function(chart){var self=this;chart.onMarginsChanged().addListener(new epiviz.events.EventListener(function(e){self._chartMarginsChanged.notify(e)}))};epiviz.ui.charts.ChartManager.prototype._registerChartRequestHierarchy=function(chart){var self=this;if(chart.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE){var dataStructVis=chart;dataStructVis.onRequestHierarchy().addListener(new epiviz.events.EventListener(function(e){self._chartRequestHierarchy.notify(e)}))}};
epiviz.ui.charts.ChartManager.prototype._registerChartPropagateHierarchyChanges=function(chart){var self=this;if(chart.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE){var dataStructVis=chart;dataStructVis.onPropagateHierarchyChanges().addListener(new epiviz.events.EventListener(function(e){self._chartPropagateHierarchyChanges.notify(e)}))}};
epiviz.ui.charts.ChartManager.prototype._registerChartPropogateIcicleLocationChanges=function(chart){var self=this;if(chart.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE){var dataStructVis=chart;dataStructVis.onPropagateIcicleLocationChanges().addListener(new epiviz.events.EventListener(function(e){self._chartPropogateIcicleLocationChanges.notify(e)}))}};
epiviz.ui.charts.ChartManager.prototype._registerChartIcicleLocationChanges=function(chart){var self=this;self.onChartIcicleLocationChanges().addListener(new epiviz.events.EventListener(function(e){if(chart.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.DATA_STRUCTURE){chart._updateLocation(e.args.start,e.args.width);chart._drawAxes(chart._lastRoot)}}))};
epiviz.ui.charts.ChartManager.prototype._registerChartPropagateNavigationChanges=function(chart){var self=this;if(chart.displayType()==epiviz.ui.charts.VisualizationType.DisplayType.TRACK)chart._propagateNavigationChanges.addListener(new epiviz.events.EventListener(function(e){self._chartPropagateNavigationChanges.notify(e)}))};
epiviz.ui.charts.ChartManager.prototype.getChartSettings=function(id){var chart=this._charts[id];var result={};result["settings"]=chart.customSettingsValues();result["colorMap"]=chart.properties().colors;return result};
epiviz.ui.charts.ChartManager.prototype.setChartSettings=function(id,settings,colorMap){var chart=this._charts[id];if(settings!=null){var currentSettings=chart.customSettingsValues();var all_keys=Object.keys(settings);all_keys.forEach(function(key){currentSettings[key]=settings[key]});chart.setCustomSettingsValues(currentSettings)}if(colorMap!=null)chart.setColors(colorMap);chart.draw()};goog.provide("epiviz.workspaces.WorkspaceManager");goog.require("epiviz.workspaces.Workspace");goog.require("epiviz.events.EventListener");goog.require("epiviz.events.Event");goog.require("epiviz.datatypes.GenomicRange");
epiviz.workspaces.WorkspaceManager=function(config,locationManager,measurementsManager,chartManager,chartFactory){this._config=config;this._locationManager=locationManager;this._measurementsManager=measurementsManager;this._chartManager=chartManager;this._chartFactory=chartFactory;this._activeWorkspace=null;this._unchangedActiveWorkspace=null;this._workspaces=null;this._workspacesByName=null;this._workspacesLoaded=new epiviz.events.Event;this._activeWorkspaceChanged=new epiviz.events.Event;this._activeWorkspaceChanging=
false;this._requestWorkspaces=new epiviz.events.Event;this._activeWorkspaceContentChanged=new epiviz.events.Event;this._uiChartSettingsChanged=new epiviz.events.Event;var self=this;this._activeWorkspaceContentChangedListener=new epiviz.events.EventListener(function(workspace){self._activeWorkspaceContentChanged.notify(workspace)});this._registerLocationChanged();this._registerComputedMeasurementAdded();this._registerComputedMeasurementRemoved();this._registerChartAdded();this._registerChartRemoved();
this._registerChartsOrderChanged();this._registerChartColorsChanged();this._registerChartMethodsModified();this._registerChartMethodsReset();this._registerChartMarkersModified();this._registerChartSizeChanged();this._registerChartMarginsChanged();this._registerChartCustomSettingsChanged()};epiviz.workspaces.WorkspaceManager.prototype.onUiChartSettingsChanged=function(){return this._uiChartSettingsChanged};
epiviz.workspaces.WorkspaceManager.prototype.activeWorkspace=function(){return this._activeWorkspace||null};epiviz.workspaces.WorkspaceManager.prototype.get=function(id){return id&&this._workspaces?this._workspaces[id]||null:null};epiviz.workspaces.WorkspaceManager.prototype.getByName=function(name){return name&&this._workspacesByName?this._workspacesByName[name]||null:null};
epiviz.workspaces.WorkspaceManager.prototype.initialize=function(){var requestWorkspaceId=epiviz.ui.WebArgsManager.WEB_ARGS["ws"]||epiviz.ui.WebArgsManager.WEB_ARGS["workspace"]||null;this._requestWorkspaces.notify({activeWorkspaceId:requestWorkspaceId})};
epiviz.workspaces.WorkspaceManager.prototype.updateWorkspaces=function(workspaces,activeWorkspace,activeWorkspaceId,unchangedActiveWorkspace){if(workspaces){this._workspaces={};this._workspacesByName={};for(var i=0;i<workspaces.length;++i){if(workspaces[i].id()===null)continue;this._workspaces[workspaces[i].id()]=workspaces[i];this._workspacesByName[workspaces[i].name()]=workspaces[i]}}if(!activeWorkspace)activeWorkspace=workspaces&&workspaces.length?workspaces[0]:epiviz.workspaces.Workspace.fromRawObject(this._config.defaultWorkspaceSettings,
this._chartFactory,this._config);var oldActiveWorkspace=this._activeWorkspace;this._activeWorkspace=activeWorkspace;if(unchangedActiveWorkspace)this._unchangedActiveWorkspace=unchangedActiveWorkspace;else this._unchangedActiveWorkspace=activeWorkspace?activeWorkspace.copy(activeWorkspace.name(),activeWorkspace.id()):null;if(oldActiveWorkspace)oldActiveWorkspace.onContentChanged().removeListener(this._activeWorkspaceContentChangedListener);if(this._activeWorkspace)this._activeWorkspace.onContentChanged().addListener(this._activeWorkspaceContentChangedListener);
var webArgs=epiviz.ui.WebArgsManager.WEB_ARGS;var genome=webArgs["genome"]!=undefined?webArgs["genome"]:this._activeWorkspace.range().genome();var seqName=webArgs["seqName"]!=undefined?webArgs["seqName"]:this._activeWorkspace.range().seqName();var start=null,end=null;if(webArgs["start"]!="undefined")start=parseInt(webArgs["start"])||this._activeWorkspace.range().start();if(webArgs["end"]!="undefined")end=parseInt(webArgs["end"])||this._activeWorkspace.range().end();this._activeWorkspace.locationChanged(epiviz.datatypes.GenomicRange.fromStartEnd(seqName,
start,end,genome));this._workspacesLoaded.notify({activeWorkspace:this._activeWorkspace,workspaces:workspaces});this._activeWorkspaceChanged.notify({oldValue:oldActiveWorkspace,newValue:this._activeWorkspace,workspaceId:this._activeWorkspace.id()||activeWorkspaceId})};epiviz.workspaces.WorkspaceManager.prototype.updateWorkspace=function(workspace){this._workspaces[workspace.id()]=workspace;this._workspacesByName[workspace.name()]=workspace};
epiviz.workspaces.WorkspaceManager.prototype.deleteActiveWorkspace=function(){var activeWorkspace=this._activeWorkspace;if(!activeWorkspace||!activeWorkspace.id())return;delete this._workspaces[activeWorkspace.id()];delete this._workspacesByName[activeWorkspace.name()];var newActiveWorkspace=null;for(var id in this._workspaces){if(!this._workspaces.hasOwnProperty(id))continue;newActiveWorkspace=this._workspaces[id];break}if(!newActiveWorkspace)newActiveWorkspace=epiviz.workspaces.Workspace.fromRawObject(this._config.defaultWorkspaceSettings,
this._chartFactory,this._config);this._activeWorkspace=newActiveWorkspace;this._unchangedActiveWorkspace=newActiveWorkspace?newActiveWorkspace.copy(newActiveWorkspace.name(),newActiveWorkspace.id()):null;var genome=activeWorkspace.range().genome();var seqName=activeWorkspace.range().seqName();var start=activeWorkspace.range().start();var end=activeWorkspace.range().end();this._activeWorkspace.locationChanged(epiviz.datatypes.GenomicRange.fromStartEnd(seqName,start,end,genome));this._activeWorkspaceChanged.notify({oldValue:activeWorkspace,
newValue:this._activeWorkspace,workspaceId:this._activeWorkspace.id()})};
epiviz.workspaces.WorkspaceManager.prototype.revertActiveWorkspace=function(){if(!this._unchangedActiveWorkspace)return;var oldActiveWorkspace=this._activeWorkspace;var genome=oldActiveWorkspace.range().genome();var seqName=oldActiveWorkspace.range().seqName();var start=oldActiveWorkspace.range().start();var end=oldActiveWorkspace.range().end();this._activeWorkspace=this._unchangedActiveWorkspace.copy(this._unchangedActiveWorkspace.name(),this._unchangedActiveWorkspace.id());this._activeWorkspace.locationChanged(epiviz.datatypes.GenomicRange.fromStartEnd(seqName,
start,end,genome));this._activeWorkspaceChanged.notify({oldValue:null,newValue:this._activeWorkspace,workspaceId:this._activeWorkspace.id()})};epiviz.workspaces.WorkspaceManager.prototype.onWorkspacesLoaded=function(){return this._workspacesLoaded};epiviz.workspaces.WorkspaceManager.prototype.onActiveWorkspaceChanged=function(){return this._activeWorkspaceChanged};epiviz.workspaces.WorkspaceManager.prototype.startChangingActiveWorkspace=function(){this._activeWorkspaceChanging=true};
epiviz.workspaces.WorkspaceManager.prototype.endChangingActiveWorkspace=function(){this._activeWorkspaceChanging=false};epiviz.workspaces.WorkspaceManager.prototype.activeWorkspaceChanging=function(){return this._activeWorkspaceChanging};epiviz.workspaces.WorkspaceManager.prototype.onRequestWorkspaces=function(){return this._requestWorkspaces};epiviz.workspaces.WorkspaceManager.prototype.onActiveWorkspaceContentChanged=function(){return this._activeWorkspaceContentChanged};
epiviz.workspaces.WorkspaceManager.prototype.changeActiveWorkspace=function(id,workspace){workspace=workspace||this._workspaces[id];if(!workspace||workspace===this._activeWorkspace)return;var oldValue=this._activeWorkspace;this._activeWorkspace=workspace;this._unchangedActiveWorkspace=this._activeWorkspace?this._activeWorkspace.copy(this._activeWorkspace.name(),this._activeWorkspace.id()):null;this._activeWorkspaceChanged.notify({oldValue:oldValue,newValue:this._activeWorkspace,workspaceId:id})};
epiviz.workspaces.WorkspaceManager.prototype._registerLocationChanged=function(){var self=this;this._locationManager.onCurrentLocationChanged().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.locationChanged(e.newValue)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartAdded=function(){var self=this;this._chartManager.onChartAdded().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartAdded(e.id,e.args.type,e.args.properties,e.args.chartsOrder)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartRemoved=function(){var self=this;this._chartManager.onChartRemoved().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartRemoved(e.id,e.args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartsOrderChanged=function(){var self=this;this._chartManager.onChartsOrderChanged().addListener(new epiviz.events.EventListener(function(args){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartsOrderChanged(args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartColorsChanged=function(){var self=this;this._chartManager.onChartColorsChanged().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartColorsChanged(e.id,e.args);self.onUiChartSettingsChanged().notify({"chartId":e.id,"colorMap":e.args})}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartMethodsModified=function(){var self=this;this._chartManager.onChartMethodsModified().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartMethodsModified(e.id,e.args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartMethodsReset=function(){var self=this;this._chartManager.onChartMethodsReset().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartMethodsReset(e.id)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartMarkersModified=function(){var self=this;this._chartManager.onChartMarkersModified().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartMarkersModified(e.id,e.args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartCustomSettingsChanged=function(){var self=this;this._chartManager.onChartCustomSettingsChanged().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartCustomSettingsChanged(e.id,e.args);self.onUiChartSettingsChanged().notify({"chartId":e.id,"settings":e.args})}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartSizeChanged=function(){var self=this;this._chartManager.onChartSizeChanged().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartSizeChanged(e.id,e.args.width,e.args.height)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerChartMarginsChanged=function(){var self=this;this._chartManager.onChartMarginsChanged().addListener(new epiviz.events.EventListener(function(e){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.chartMarginsChanged(e.id,e.args)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerComputedMeasurementAdded=function(){var self=this;this._measurementsManager.onComputedMeasurementsAdded().addListener(new epiviz.events.EventListener(function(measurements){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.computedMeasurementsAdded(measurements)}))};
epiviz.workspaces.WorkspaceManager.prototype._registerComputedMeasurementRemoved=function(){var self=this;this._measurementsManager.onComputedMeasurementsRemoved().addListener(new epiviz.events.EventListener(function(measurements){if(self._activeWorkspaceChanging)return;if(!self._activeWorkspace)return;self._activeWorkspace.computedMeasurementsRemoved(measurements)}))};goog.provide("epiviz.workspaces.UserManager");epiviz.workspaces.UserManager=function(config){this._config=config};epiviz.workspaces.UserManager.USER_STATUS=epiviz.workspaces.UserManager.USER_STATUS||{loggedIn:false,userData:null,oauthProvider:null};epiviz.workspaces.UserManager.prototype.toggleLogin=function(){if(!epiviz.workspaces.UserManager.USER_STATUS.loggedIn)this._login();else this._logout()};
epiviz.workspaces.UserManager.prototype._login=function(){var location=window.location.toString();if(location.length>0)location=encodeURIComponent(location);var pathname=this._config.dataServerLocation+"login.php";window.location=pathname+"?location="+location};epiviz.workspaces.UserManager.prototype._logout=function(){var location=window.location.toString();if(location.length>0)location=encodeURIComponent(location);window.location=this._config.dataServerLocation+"logout.php?logout&location="+location};goog.provide("epiviz.main");goog.require("epiviz.utils");goog.require("epiviz.Config");goog.require("epiviz.ui.LocationManager");goog.require("epiviz.measurements.MeasurementsManager");goog.require("epiviz.ui.charts.ChartFactory");goog.require("epiviz.ui.charts.ChartManager");goog.require("epiviz.ui.ControlManager");goog.require("epiviz.data.DataProviderFactory");goog.require("epiviz.data.DataManager");goog.require("epiviz.localstorage.LocalStorageManager");goog.require("epiviz.workspaces.WorkspaceManager");
goog.require("epiviz.workspaces.UserManager");goog.require("epiviz.ui.WebArgsManager");goog.require("epiviz.EpiViz");goog.require("epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory");goog.require("epiviz.deferred.Promise");
epiviz.main=function(){var config=new epiviz.Config(epiviz.Config.SETTINGS);var locationManager=new epiviz.ui.LocationManager(config);var measurementsManager=new epiviz.measurements.MeasurementsManager;var chartFactory=new epiviz.ui.charts.ChartFactory(config);var chartManager=new epiviz.ui.charts.ChartManager(config);var controlManager=new epiviz.ui.ControlManager(config,chartFactory,chartManager,measurementsManager,locationManager);var dataProviderFactory=new epiviz.data.DataProviderFactory(config);
var dataManager=new epiviz.data.DataManager(config,dataProviderFactory);var localStorageManager=null;if(config.useCookie=="false"){localStorageManager=new epiviz.localstorage.LocalStorageManager(epiviz.localstorage.LocalStorageManager.MODE.INCOGNITO_MODE);localStorageManager.clearWorkspace();config.defaultWorkspaceSettings.content.charts=null}else localStorageManager=new epiviz.localstorage.LocalStorageManager(epiviz.localstorage.LocalStorageManager.MODE.COOKIE_MODE);var workspaceManager=new epiviz.workspaces.WorkspaceManager(config,
locationManager,measurementsManager,chartManager,chartFactory);var userManager=new epiviz.workspaces.UserManager(config);var webArgsManager=new epiviz.ui.WebArgsManager(locationManager,workspaceManager);var epivizHandler=new epiviz.EpiViz(config,locationManager,measurementsManager,controlManager,dataManager,chartFactory,chartManager,workspaceManager,userManager,webArgsManager,localStorageManager);epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory.initialize(config);epivizHandler.start()};
goog.exportSymbol("epiviz",epiviz);


/***/ })
/******/ ])));