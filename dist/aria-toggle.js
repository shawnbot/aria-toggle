/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	window.ARIAToggle = __webpack_require__(2);
	window.ARIAToggleGroup = __webpack_require__(11);

	(function(hashchange) {
	  window.addEventListener('hashchange', hashchange);
	  window.addEventListener('load', hashchange);

	  window.ARIAToggle.removeListeners = function() {
	    window.removeEventListener('hashchange', hashchange);
	    window.removeEventListener('load', hashchange);
	  };
	})(__webpack_require__(12));


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*! (C) WebReflection Mit Style License */
	(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var elbo = __webpack_require__(3);
	var CustomEvent = __webpack_require__(10);

	var CONTROLS = 'aria-controls';
	var EXPANDED = 'aria-expanded';
	var HIDDEN = 'aria-hidden';

	var EVENT_PROPS = {bubbles: true, cancelable: true};

	var getTarget = function(owner) {
	  var id = owner.getAttribute(CONTROLS);
	  if (id) {
	    return document.getElementById(id);
	  }
	};

	module.exports = elbo.register('aria-toggle', {
	  /**
	   * use with HTML:
	   *
	   * <button is="aria-toggle"></button>
	   *
	   * or in JavaScript:
	   *
	   * document.createElement('button', 'aria-toggle');
	   */
	  'extends': 'button',

	  lifecycle: {
	    createdCallback: function() {
	      // the initial value is inferred either from:
	      // 1. the @aria-expanded attribute of the toggle, or
	      // 2. the aria-hidden attribute of its target, defined by @aria-controls
	      if (this.hasAttribute(EXPANDED)) {
	        this.expanded = this.getAttribute(EXPANDED) !== 'false';
	      } else {
	        var target = getTarget(this);
	        this.expanded = target && target.getAttribute(HIDDEN) !== 'true';
	      }
	    }
	  },

	  properties: {
	    expanded: {
	      // the value is always coerced to a Boolean: anything other than 'false'
	      // or a literal `false` will be considered truthy.
	      parse: function(value) {
	        return value && value !== 'false';
	      },

	      // the change handler sets the target element's @aria-hidden to the
	      // inverse of the expanded value
	      change: function(value, previous) {
	        // dispatch an 'open' or 'close' event depending on the value
	        var type = value ? 'open' : 'close';
	        var event = new CustomEvent(type, EVENT_PROPS);
	        this.dispatchEvent(event);
	        if (event.defaultPrevented) {
	          // XXX because elbo doesn't short-circuit reflections
	          this.setAttribute(EXPANDED, previous);
	          return false;
	        }

	        var target = getTarget(this);
	        if (target) {
	          target.setAttribute(HIDDEN, !value);
	        }
	      },

	      // reflect this value to the ARIA attribute
	      reflect: EXPANDED
	    }
	  },

	  // handy methods
	  methods: {
	    open: function() {
	      this.expanded = true;
	    },
	    close: function() {
	      this.expanded = false;
	    },
	    toggle: function() {
	      this.expanded = !this.expanded;
	    }
	  },

	  events: {
	    // toggle on click
	    'click': function(e) {
	      this.toggle();
	    }
	  }
	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var xsor = __webpack_require__(5);
	var privates = __webpack_require__(6);
	var Delegate = __webpack_require__(8).Delegate;

	const REFLECTING = 'reflecting__';
	const DELEGATE = 'delegate';

	var boilerplate = function(config) {
	  var base = HTMLElement;

	  // this is the object we'll return
	  var props = {};

	  // this is where methods and property accessors go
	  var extensions = {};

	  var ext = config['extends'];
	  if (typeof ext === 'string') {
	    base = document.createElement(ext).constructor;
	    props['extends'] = ext;
	  }

	  var lifecycle = config.lifecycle || {};

	  var methods = config.methods;
	  if (methods) {
	    for (var method in methods) {
	      extensions[method] = {value: methods[method]};
	    }
	  }

	  var properties = config.properties;
	  if (properties) {
	    var reflections = {};
	    for (var name in properties) {
	      var prop = properties[name];
	      var descriptor = xsor(name, prop);
	      if (prop.reflect) {
	        var attr = prop.reflect === true ? name : prop.reflect;
	        reflections[attr] = name;
	        descriptor.set = propertyReflector(
	          attr,
	          descriptor.set
	        );
	      }
	      extensions[name] = descriptor;
	    }

	    if (Object.keys(reflections).length > 0) {
	      lifecycle.attributeChangedCallback = attributeReflector(
	        reflections,
	        lifecycle.attributeChangedCallback
	      );
	    }
	  }

	  // apply lifecycle methods
	  Object.keys(lifecycle).forEach(function(method) {
	    extensions[method] = {value: lifecycle[method]};
	  });

	  var events = config.events;
	  if (events) {
	    extensions.attachedCallback = {
	      value: eventListener(events, lifecycle.attachedCallback)
	    };
	    extensions.detachedCallback = {
	      value: eventUnlistener(events, lifecycle.detachedCallback)
	    };
	  }

	  props.prototype = Object.create(
	    base.prototype,
	    extensions
	  );

	  return props;
	};

	var attributeReflector = function(reflections, callback) {
	  return function(attr, previous, value) {
	    if (attr in reflections) {
	      var key = REFLECTING + attr;
	      if (!privates.get(this, key)) {
	        privates.set(this, key, true);
	        this[reflections[attr]] = value;
	        privates.set(this, key, false);
	      }
	    }
	    return callback
	      ? callback.apply(this, arguments)
	      : undefined;
	  };
	};

	var propertyReflector = function(attr, set) {
	  var key = REFLECTING + attr;
	  return function(value) {
	    if (!privates.get(this, key)) {
	      privates.set(this, key, true);
	      this.setAttribute(attr, value);
	      privates.set(this, key, false);
	    }
	    return set.call(this, value);
	  };
	};

	var eventListener = function(events, callback) {
	  return function() {
	    var delegate = new Delegate(this);
	    privates.set(this, DELEGATE, delegate);
	    for (var type in events) {
	      var match = type.match(/^(.+):delegate\((.+)\)$/);
	      if (match) {
	        delegate.on(match[1], match[2], events[type]);
	      } else {
	        delegate.on(type, events[type]);
	      }
	    }
	    return callback
	      ? callback.apply(this, arguments)
	      : undefined;
	  };
	};

	var eventUnlistener = function(events, callback) {
	  return function() {
	    // remove all event listeners from the delegate
	    var delegate = privates.get(this, DELEGATE);
	    delegate.off();
	    privates.delete(this, DELEGATE);
	    return callback
	      ? callback.apply(this, arguments)
	      : undefined;
	  };
	};

	boilerplate.register = function(name, config) {
	  return document.registerElement(name, boilerplate(config));
	};

	module.exports = boilerplate;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var privates = __webpack_require__(6);

	var symbolId = 0;

	var getDescriptor = function(name, config) {
	  if (!name) {
	    name = 'symbol' + symbolId++;
	  }

	  var accessed = name + '__accessed';
	  var initial = config.initial;

	  var get = function() {
	    // set and return the default value
	    if (!privates.get(this, accessed) && initial !== undefined) {
	      privates.set(this, name, initial);
	      privates.set(this, accessed, true);
	      return (typeof initial === 'function')
	        ? initial.call(this)
	        : initial;
	    }
	    return privates.get(this, name);
	  };

	  var parse = config.parse;
	  var change = config.change;

	  var set = function(value) {
	    if (parse) {
	      value = parse.call(this, value, name);
	    }
	    var previous = get.call(this);
	    if (value !== previous) {
	      var changed = change ?
	        change.call(this, value, previous, name) :
	        true;
	      if (changed !== false) {
	        privates.set(this, name, value);
	      }
	    }
	  };

	  return {
	    get: get,
	    set: set,
	    enumerable: !!config.enumerable
	  };
	};

	var xsor = function(name, config) {
	  if (typeof name !== 'string') {
	    if (name) {
	      config = name;
	      name = null;
	    }
	  }

	  if (typeof config === 'function') {
	    config = {
	      change: config
	    };
	  } else if (typeof config !== 'object') {
	    config = {};
	  }

	  return getDescriptor(name, config);
	};

	xsor.defineProperties = function(obj, properties) {
	  for (var name in properties) {
	    Object.defineProperty(obj, name, xsor(properties[name]));
	  }
	  return obj;
	};

	module.exports = xsor;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var WeakMap = __webpack_require__(7);
	var privates = new WeakMap();

	/**
	 * @name getAll
	 * Get the value map for the source object or value.
	 *
	 * @param {*} source
	 * @return {WeakMap}
	 */
	function getMap(source) {
	  if (privates.has(source)) {
	    return privates.get(source);
	  }
	  var map = {};
	  privates.set(source, map);
	  return map;
	}

	/**
	 * @name set
	 * Set the value of a specific key for a given source object.
	 *
	 * @param {*} source
	 * @param {*} key
	 * @param {*} value
	 */
	function set(source, key, value) {
	  getMap(source)[key] = value;
	}

	/**
	 * @name get
	 * Get a specific key value for a given source object.
	 *
	 * @param {*} source
	 * @param {*} key
	 */
	function get(source, key) {
	  return getMap(source)[key];
	}

	/**
	 * @name delete
	 * Remove the value of a specific key for a given source object.
	 *
	 * @param {*} source
	 * @param {*} key
	 */
	function remove(source, key) {
	  delete getMap(source)[key];
	}

	/**
	 * @name deleteAll
	 * Remove the entire map for a given source object.
	 *
	 * @param {*} source
	 */
	function removeAll(source) {
	  privates.delete(source);
	}

	module.exports = {
	  get: get,
	  set: set,
	  'delete': remove,
	  getAll: getMap,
	  deleteAll: removeAll
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* (The MIT License)
	 *
	 * Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
	 * associated documentation files (the 'Software'), to deal in the Software without restriction,
	 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
	 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included with all copies or
	 * substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
	 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
	 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */

	// Original WeakMap implementation by Gozala @ https://gist.github.com/1269991
	// Updated and bugfixed by Raynos @ https://gist.github.com/1638059
	// Expanded by Benvie @ https://github.com/Benvie/harmony-collections

	void function(global, undefined_, undefined){
	  var getProps = Object.getOwnPropertyNames,
	      defProp  = Object.defineProperty,
	      toSource = Function.prototype.toString,
	      create   = Object.create,
	      hasOwn   = Object.prototype.hasOwnProperty,
	      funcName = /^\n?function\s?(\w*)?_?\(/;


	  function define(object, key, value){
	    if (typeof key === 'function') {
	      value = key;
	      key = nameOf(value).replace(/_$/, '');
	    }
	    return defProp(object, key, { configurable: true, writable: true, value: value });
	  }

	  function nameOf(func){
	    return typeof func !== 'function'
	          ? '' : 'name' in func
	          ? func.name : toSource.call(func).match(funcName)[1];
	  }

	  // ############
	  // ### Data ###
	  // ############

	  var Data = (function(){
	    var dataDesc = { value: { writable: true, value: undefined } },
	        datalock = 'return function(k){if(k===s)return l}',
	        uids     = create(null),

	        createUID = function(){
	          var key = Math.random().toString(36).slice(2);
	          return key in uids ? createUID() : uids[key] = key;
	        },

	        globalID = createUID(),

	        storage = function(obj){
	          if (hasOwn.call(obj, globalID))
	            return obj[globalID];

	          if (!Object.isExtensible(obj))
	            throw new TypeError("Object must be extensible");

	          var store = create(null);
	          defProp(obj, globalID, { value: store });
	          return store;
	        };

	    // common per-object storage area made visible by patching getOwnPropertyNames'
	    define(Object, function getOwnPropertyNames(obj){
	      var props = getProps(obj);
	      if (hasOwn.call(obj, globalID))
	        props.splice(props.indexOf(globalID), 1);
	      return props;
	    });

	    function Data(){
	      var puid = createUID(),
	          secret = {};

	      this.unlock = function(obj){
	        var store = storage(obj);
	        if (hasOwn.call(store, puid))
	          return store[puid](secret);

	        var data = create(null, dataDesc);
	        defProp(store, puid, {
	          value: new Function('s', 'l', datalock)(secret, data)
	        });
	        return data;
	      }
	    }

	    define(Data.prototype, function get(o){ return this.unlock(o).value });
	    define(Data.prototype, function set(o, v){ this.unlock(o).value = v });

	    return Data;
	  }());


	  var WM = (function(data){
	    var validate = function(key){
	      if (key == null || typeof key !== 'object' && typeof key !== 'function')
	        throw new TypeError("Invalid WeakMap key");
	    }

	    var wrap = function(collection, value){
	      var store = data.unlock(collection);
	      if (store.value)
	        throw new TypeError("Object is already a WeakMap");
	      store.value = value;
	    }

	    var unwrap = function(collection){
	      var storage = data.unlock(collection).value;
	      if (!storage)
	        throw new TypeError("WeakMap is not generic");
	      return storage;
	    }

	    var initialize = function(weakmap, iterable){
	      if (iterable !== null && typeof iterable === 'object' && typeof iterable.forEach === 'function') {
	        iterable.forEach(function(item, i){
	          if (item instanceof Array && item.length === 2)
	            set.call(weakmap, iterable[i][0], iterable[i][1]);
	        });
	      }
	    }


	    function WeakMap(iterable){
	      if (this === global || this == null || this === WeakMap.prototype)
	        return new WeakMap(iterable);

	      wrap(this, new Data);
	      initialize(this, iterable);
	    }

	    function get(key){
	      validate(key);
	      var value = unwrap(this).get(key);
	      return value === undefined_ ? undefined : value;
	    }

	    function set(key, value){
	      validate(key);
	      // store a token for explicit undefined so that "has" works correctly
	      unwrap(this).set(key, value === undefined ? undefined_ : value);
	    }

	    function has(key){
	      validate(key);
	      return unwrap(this).get(key) !== undefined;
	    }

	    function delete_(key){
	      validate(key);
	      var data = unwrap(this),
	          had = data.get(key) !== undefined;
	      data.set(key, undefined);
	      return had;
	    }

	    function toString(){
	      unwrap(this);
	      return '[object WeakMap]';
	    }

	    try {
	      var src = ('return '+delete_).replace('e_', '\\u0065'),
	          del = new Function('unwrap', 'validate', src)(unwrap, validate);
	    } catch (e) {
	      var del = delete_;
	    }

	    var src = (''+Object).split('Object');
	    var stringifier = function toString(){
	      return src[0] + nameOf(this) + src[1];
	    };

	    define(stringifier, stringifier);

	    var prep = { __proto__: [] } instanceof Array
	      ? function(f){ f.__proto__ = stringifier }
	      : function(f){ define(f, stringifier) };

	    prep(WeakMap);

	    [toString, get, set, has, del].forEach(function(method){
	      define(WeakMap.prototype, method);
	      prep(method);
	    });

	    return WeakMap;
	  }(new Data));

	  var defaultCreator = Object.create
	    ? function(){ return Object.create(null) }
	    : function(){ return {} };

	  function createStorage(creator){
	    var weakmap = new WM;
	    creator || (creator = defaultCreator);

	    function storage(object, value){
	      if (value || arguments.length === 2) {
	        weakmap.set(object, value);
	      } else {
	        value = weakmap.get(object);
	        if (value === undefined) {
	          value = creator(object);
	          weakmap.set(object, value);
	        }
	      }
	      return value;
	    }

	    return storage;
	  }


	  if (true) {
	    module.exports = WM;
	  } else if (typeof exports !== 'undefined') {
	    exports.WeakMap = WM;
	  } else if (!('WeakMap' in global)) {
	    global.WeakMap = WM;
	  }

	  WM.createStorage = createStorage;
	  if (global.WeakMap)
	    global.WeakMap.createStorage = createStorage;
	}((0, eval)('this'));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/

	'use strict';

	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(9);

	module.exports = function(root) {
	  return new Delegate(root);
	};

	module.exports.Delegate = Delegate;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*jshint browser:true, node:true*/

	'use strict';

	module.exports = Delegate;

	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {

	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }

	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}

	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;

	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }

	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }

	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;

	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }

	  return this;
	};

	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};

	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;

	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }

	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }

	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }

	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];

	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }

	  if (!selector) {
	    matcherParam = null;

	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);

	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }

	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });

	  return this;
	};

	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;

	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }

	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }

	    return this;
	  }

	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }

	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];

	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }

	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];

	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }

	  return this;
	};


	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';

	  if (event[EVENTIGNORE] === true) {
	    return;
	  }

	  target = event.target;

	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }

	  root = this.rootElement;

	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }

	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];

	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }

	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }

	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }

	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }

	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};

	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};

	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));

	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}

	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}

	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}

	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var NativeCustomEvent = global.CustomEvent;

	function useNative () {
	  try {
	    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
	    return  'cat' === p.type && 'bar' === p.detail.foo;
	  } catch (e) {
	  }
	  return false;
	}

	/**
	 * Cross-browser `CustomEvent` constructor.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
	 *
	 * @public
	 */

	module.exports = useNative() ? NativeCustomEvent :

	// IE >= 9
	'function' === typeof document.createEvent ? function CustomEvent (type, params) {
	  var e = document.createEvent('CustomEvent');
	  if (params) {
	    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
	  } else {
	    e.initCustomEvent(type, false, false, void 0);
	  }
	  return e;
	} :

	// IE <= 8
	function CustomEvent (type, params) {
	  var e = document.createEventObject();
	  e.type = type;
	  if (params) {
	    e.bubbles = Boolean(params.bubbles);
	    e.cancelable = Boolean(params.cancelable);
	    e.detail = params.detail;
	  } else {
	    e.bubbles = false;
	    e.cancelable = false;
	    e.detail = void 0;
	  }
	  return e;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var elbo = __webpack_require__(3);

	var getToggles = function(group) {
	  return [].slice.call(group.querySelectorAll('[is=aria-toggle]'));
	};

	module.exports = elbo.register('aria-toggle-group', {
	  properties: {
	    exclusive: {
	      initial: function() {
	        return this.getAttribute('exclusive') !== 'false';
	      },
	      parse: function(value) {
	        return value && value !== 'false';
	      },
	      reflect: true
	    }
	  },

	  events: {
	    'open': function(e) {
	      if (this.exclusive) {
	        getToggles(this).forEach(function(toggle) {
	          if (toggle !== e.target) {
	            toggle.close && toggle.close();
	          }
	        });
	      }
	    }
	  }
	});


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var getToggle = function(el) {
	  var selector = '[aria-controls="' + el.id + '"]';
	  return document.querySelector(selector);
	};

	var requestAnimationFrame = __webpack_require__(13);

	module.exports = function(e) {
	  var id = location.hash.substr(1);
	  if (id) {
	    var target = document.getElementById(id);
	    var toggle = getToggle(target) || target;
	    if (toggle && toggle.getAttribute('is') === 'aria-toggle') {
	      toggle.open();
	      requestAnimationFrame(function() {
	        target.scrollIntoView({
	          behavior: 'smooth'
	        });
	      });
	    }
	  }
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(14)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);