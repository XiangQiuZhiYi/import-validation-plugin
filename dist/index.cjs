var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/core-js/library/modules/_add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js/library/modules/_add-to-unscopables.js"(exports2, module2) {
    module2.exports = function() {
    };
  }
});

// node_modules/core-js/library/modules/_iter-step.js
var require_iter_step = __commonJS({
  "node_modules/core-js/library/modules/_iter-step.js"(exports2, module2) {
    module2.exports = function(done, value) {
      return { value, done: !!done };
    };
  }
});

// node_modules/core-js/library/modules/_iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/library/modules/_iterators.js"(exports2, module2) {
    module2.exports = {};
  }
});

// node_modules/core-js/library/modules/_cof.js
var require_cof = __commonJS({
  "node_modules/core-js/library/modules/_cof.js"(exports2, module2) {
    var toString = {}.toString;
    module2.exports = function(it) {
      return toString.call(it).slice(8, -1);
    };
  }
});

// node_modules/core-js/library/modules/_iobject.js
var require_iobject = __commonJS({
  "node_modules/core-js/library/modules/_iobject.js"(exports2, module2) {
    var cof = require_cof();
    module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
      return cof(it) == "String" ? it.split("") : Object(it);
    };
  }
});

// node_modules/core-js/library/modules/_defined.js
var require_defined = __commonJS({
  "node_modules/core-js/library/modules/_defined.js"(exports2, module2) {
    module2.exports = function(it) {
      if (it == void 0)
        throw TypeError("Can't call method on  " + it);
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_to-iobject.js
var require_to_iobject = __commonJS({
  "node_modules/core-js/library/modules/_to-iobject.js"(exports2, module2) {
    var IObject = require_iobject();
    var defined = require_defined();
    module2.exports = function(it) {
      return IObject(defined(it));
    };
  }
});

// node_modules/core-js/library/modules/_library.js
var require_library = __commonJS({
  "node_modules/core-js/library/modules/_library.js"(exports2, module2) {
    module2.exports = true;
  }
});

// node_modules/core-js/library/modules/_global.js
var require_global = __commonJS({
  "node_modules/core-js/library/modules/_global.js"(exports2, module2) {
    var global2 = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
    if (typeof __g == "number")
      __g = global2;
  }
});

// node_modules/core-js/library/modules/_core.js
var require_core = __commonJS({
  "node_modules/core-js/library/modules/_core.js"(exports2, module2) {
    var core = module2.exports = { version: "2.6.12" };
    if (typeof __e == "number")
      __e = core;
  }
});

// node_modules/core-js/library/modules/_a-function.js
var require_a_function = __commonJS({
  "node_modules/core-js/library/modules/_a-function.js"(exports2, module2) {
    module2.exports = function(it) {
      if (typeof it != "function")
        throw TypeError(it + " is not a function!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_ctx.js
var require_ctx = __commonJS({
  "node_modules/core-js/library/modules/_ctx.js"(exports2, module2) {
    var aFunction = require_a_function();
    module2.exports = function(fn, that, length) {
      aFunction(fn);
      if (that === void 0)
        return fn;
      switch (length) {
        case 1:
          return function(a) {
            return fn.call(that, a);
          };
        case 2:
          return function(a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function(a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/library/modules/_is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/library/modules/_is-object.js"(exports2, module2) {
    module2.exports = function(it) {
      return typeof it === "object" ? it !== null : typeof it === "function";
    };
  }
});

// node_modules/core-js/library/modules/_an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/library/modules/_an-object.js"(exports2, module2) {
    var isObject = require_is_object();
    module2.exports = function(it) {
      if (!isObject(it))
        throw TypeError(it + " is not an object!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_fails.js
var require_fails = __commonJS({
  "node_modules/core-js/library/modules/_fails.js"(exports2, module2) {
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }
});

// node_modules/core-js/library/modules/_descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/library/modules/_descriptors.js"(exports2, module2) {
    module2.exports = !require_fails()(function() {
      return Object.defineProperty({}, "a", { get: function() {
        return 7;
      } }).a != 7;
    });
  }
});

// node_modules/core-js/library/modules/_dom-create.js
var require_dom_create = __commonJS({
  "node_modules/core-js/library/modules/_dom-create.js"(exports2, module2) {
    var isObject = require_is_object();
    var document2 = require_global().document;
    var is = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return is ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/library/modules/_ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/library/modules/_ie8-dom-define.js"(exports2, module2) {
    module2.exports = !require_descriptors() && !require_fails()(function() {
      return Object.defineProperty(require_dom_create()("div"), "a", { get: function() {
        return 7;
      } }).a != 7;
    });
  }
});

// node_modules/core-js/library/modules/_to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/library/modules/_to-primitive.js"(exports2, module2) {
    var isObject = require_is_object();
    module2.exports = function(it, S) {
      if (!isObject(it))
        return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
        return val;
      if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
        return val;
      if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
        return val;
      throw TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/library/modules/_object-dp.js
var require_object_dp = __commonJS({
  "node_modules/core-js/library/modules/_object-dp.js"(exports2) {
    var anObject = require_an_object();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var toPrimitive = require_to_primitive();
    var dP = Object.defineProperty;
    exports2.f = require_descriptors() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return dP(O, P, Attributes);
        } catch (e) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw TypeError("Accessors not supported!");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/library/modules/_property-desc.js
var require_property_desc = __commonJS({
  "node_modules/core-js/library/modules/_property-desc.js"(exports2, module2) {
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/library/modules/_hide.js
var require_hide = __commonJS({
  "node_modules/core-js/library/modules/_hide.js"(exports2, module2) {
    var dP = require_object_dp();
    var createDesc = require_property_desc();
    module2.exports = require_descriptors() ? function(object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/library/modules/_has.js
var require_has = __commonJS({
  "node_modules/core-js/library/modules/_has.js"(exports2, module2) {
    var hasOwnProperty = {}.hasOwnProperty;
    module2.exports = function(it, key) {
      return hasOwnProperty.call(it, key);
    };
  }
});

// node_modules/core-js/library/modules/_export.js
var require_export = __commonJS({
  "node_modules/core-js/library/modules/_export.js"(exports2, module2) {
    var global2 = require_global();
    var core = require_core();
    var ctx = require_ctx();
    var hide = require_hide();
    var has = require_has();
    var PROTOTYPE = "prototype";
    var $export = function(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var IS_WRAP = type & $export.W;
      var exports3 = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports3[PROTOTYPE];
      var target = IS_GLOBAL ? global2 : IS_STATIC ? global2[name] : (global2[name] || {})[PROTOTYPE];
      var key, own, out;
      if (IS_GLOBAL)
        source = name;
      for (key in source) {
        own = !IS_FORCED && target && target[key] !== void 0;
        if (own && has(exports3, key))
          continue;
        out = own ? target[key] : source[key];
        exports3[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global2) : IS_WRAP && target[key] == out ? function(C) {
          var F = function(a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0:
                  return new C();
                case 1:
                  return new C(a);
                case 2:
                  return new C(a, b);
              }
              return new C(a, b, c);
            }
            return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
        if (IS_PROTO) {
          (exports3.virtual || (exports3.virtual = {}))[key] = out;
          if (type & $export.R && expProto && !expProto[key])
            hide(expProto, key, out);
        }
      }
    };
    $export.F = 1;
    $export.G = 2;
    $export.S = 4;
    $export.P = 8;
    $export.B = 16;
    $export.W = 32;
    $export.U = 64;
    $export.R = 128;
    module2.exports = $export;
  }
});

// node_modules/core-js/library/modules/_redefine.js
var require_redefine = __commonJS({
  "node_modules/core-js/library/modules/_redefine.js"(exports2, module2) {
    module2.exports = require_hide();
  }
});

// node_modules/core-js/library/modules/_to-integer.js
var require_to_integer = __commonJS({
  "node_modules/core-js/library/modules/_to-integer.js"(exports2, module2) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = function(it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }
});

// node_modules/core-js/library/modules/_to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/library/modules/_to-length.js"(exports2, module2) {
    var toInteger = require_to_integer();
    var min = Math.min;
    module2.exports = function(it) {
      return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/library/modules/_to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/library/modules/_to-absolute-index.js"(exports2, module2) {
    var toInteger = require_to_integer();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
  }
});

// node_modules/core-js/library/modules/_array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/library/modules/_array-includes.js"(exports2, module2) {
    var toIObject = require_to_iobject();
    var toLength = require_to_length();
    var toAbsoluteIndex = require_to_absolute_index();
    module2.exports = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el)
          while (length > index) {
            value = O[index++];
            if (value != value)
              return true;
          }
        else
          for (; length > index; index++)
            if (IS_INCLUDES || index in O) {
              if (O[index] === el)
                return IS_INCLUDES || index || 0;
            }
        return !IS_INCLUDES && -1;
      };
    };
  }
});

// node_modules/core-js/library/modules/_shared.js
var require_shared = __commonJS({
  "node_modules/core-js/library/modules/_shared.js"(exports2, module2) {
    var core = require_core();
    var global2 = require_global();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || (global2[SHARED] = {});
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: core.version,
      mode: require_library() ? "pure" : "global",
      copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
    });
  }
});

// node_modules/core-js/library/modules/_uid.js
var require_uid = __commonJS({
  "node_modules/core-js/library/modules/_uid.js"(exports2, module2) {
    var id = 0;
    var px = Math.random();
    module2.exports = function(key) {
      return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
    };
  }
});

// node_modules/core-js/library/modules/_shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/library/modules/_shared-key.js"(exports2, module2) {
    var shared = require_shared()("keys");
    var uid = require_uid();
    module2.exports = function(key) {
      return shared[key] || (shared[key] = uid(key));
    };
  }
});

// node_modules/core-js/library/modules/_object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/library/modules/_object-keys-internal.js"(exports2, module2) {
    var has = require_has();
    var toIObject = require_to_iobject();
    var arrayIndexOf = require_array_includes()(false);
    var IE_PROTO = require_shared_key()("IE_PROTO");
    module2.exports = function(object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        if (key != IE_PROTO)
          has(O, key) && result.push(key);
      while (names.length > i)
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      return result;
    };
  }
});

// node_modules/core-js/library/modules/_enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/library/modules/_enum-bug-keys.js"(exports2, module2) {
    module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }
});

// node_modules/core-js/library/modules/_object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/library/modules/_object-keys.js"(exports2, module2) {
    var $keys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/library/modules/_object-dps.js
var require_object_dps = __commonJS({
  "node_modules/core-js/library/modules/_object-dps.js"(exports2, module2) {
    var dP = require_object_dp();
    var anObject = require_an_object();
    var getKeys = require_object_keys();
    module2.exports = require_descriptors() ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i)
        dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };
  }
});

// node_modules/core-js/library/modules/_html.js
var require_html = __commonJS({
  "node_modules/core-js/library/modules/_html.js"(exports2, module2) {
    var document2 = require_global().document;
    module2.exports = document2 && document2.documentElement;
  }
});

// node_modules/core-js/library/modules/_object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/library/modules/_object-create.js"(exports2, module2) {
    var anObject = require_an_object();
    var dPs = require_object_dps();
    var enumBugKeys = require_enum_bug_keys();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var Empty = function() {
    };
    var PROTOTYPE = "prototype";
    var createDict = function() {
      var iframe = require_dom_create()("iframe");
      var i = enumBugKeys.length;
      var lt = "<";
      var gt = ">";
      var iframeDocument;
      iframe.style.display = "none";
      require_html().appendChild(iframe);
      iframe.src = "javascript:";
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--)
        delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };
    module2.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = createDict();
      return Properties === void 0 ? result : dPs(result, Properties);
    };
  }
});

// node_modules/core-js/library/modules/_wks.js
var require_wks = __commonJS({
  "node_modules/core-js/library/modules/_wks.js"(exports2, module2) {
    var store = require_shared()("wks");
    var uid = require_uid();
    var Symbol2 = require_global().Symbol;
    var USE_SYMBOL = typeof Symbol2 == "function";
    var $exports = module2.exports = function(name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
    };
    $exports.store = store;
  }
});

// node_modules/core-js/library/modules/_set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js/library/modules/_set-to-string-tag.js"(exports2, module2) {
    var def = require_object_dp().f;
    var has = require_has();
    var TAG = require_wks()("toStringTag");
    module2.exports = function(it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG))
        def(it, TAG, { configurable: true, value: tag });
    };
  }
});

// node_modules/core-js/library/modules/_iter-create.js
var require_iter_create = __commonJS({
  "node_modules/core-js/library/modules/_iter-create.js"(exports2, module2) {
    "use strict";
    var create = require_object_create();
    var descriptor = require_property_desc();
    var setToStringTag = require_set_to_string_tag();
    var IteratorPrototype = {};
    require_hide()(IteratorPrototype, require_wks()("iterator"), function() {
      return this;
    });
    module2.exports = function(Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
      setToStringTag(Constructor, NAME + " Iterator");
    };
  }
});

// node_modules/core-js/library/modules/_to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/library/modules/_to-object.js"(exports2, module2) {
    var defined = require_defined();
    module2.exports = function(it) {
      return Object(defined(it));
    };
  }
});

// node_modules/core-js/library/modules/_object-gpo.js
var require_object_gpo = __commonJS({
  "node_modules/core-js/library/modules/_object-gpo.js"(exports2, module2) {
    var has = require_has();
    var toObject = require_to_object();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var ObjectProto = Object.prototype;
    module2.exports = Object.getPrototypeOf || function(O) {
      O = toObject(O);
      if (has(O, IE_PROTO))
        return O[IE_PROTO];
      if (typeof O.constructor == "function" && O instanceof O.constructor) {
        return O.constructor.prototype;
      }
      return O instanceof Object ? ObjectProto : null;
    };
  }
});

// node_modules/core-js/library/modules/_iter-define.js
var require_iter_define = __commonJS({
  "node_modules/core-js/library/modules/_iter-define.js"(exports2, module2) {
    "use strict";
    var LIBRARY = require_library();
    var $export = require_export();
    var redefine = require_redefine();
    var hide = require_hide();
    var Iterators = require_iterators();
    var $iterCreate = require_iter_create();
    var setToStringTag = require_set_to_string_tag();
    var getPrototypeOf = require_object_gpo();
    var ITERATOR = require_wks()("iterator");
    var BUGGY = !([].keys && "next" in [].keys());
    var FF_ITERATOR = "@@iterator";
    var KEYS = "keys";
    var VALUES = "values";
    var returnThis = function() {
      return this;
    };
    module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function(kind) {
        if (!BUGGY && kind in proto)
          return proto[kind];
        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };
          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }
        return function entries() {
          return new Constructor(this, kind);
        };
      };
      var TAG = NAME + " Iterator";
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
      var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype;
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          setToStringTag(IteratorPrototype, TAG, true);
          if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
            hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      }
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED)
          for (key in methods) {
            if (!(key in proto))
              redefine(proto, key, methods[key]);
          }
        else
          $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };
  }
});

// node_modules/core-js/library/modules/es6.array.iterator.js
var require_es6_array_iterator = __commonJS({
  "node_modules/core-js/library/modules/es6.array.iterator.js"(exports2, module2) {
    "use strict";
    var addToUnscopables = require_add_to_unscopables();
    var step = require_iter_step();
    var Iterators = require_iterators();
    var toIObject = require_to_iobject();
    module2.exports = require_iter_define()(Array, "Array", function(iterated, kind) {
      this._t = toIObject(iterated);
      this._i = 0;
      this._k = kind;
    }, function() {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = void 0;
        return step(1);
      }
      if (kind == "keys")
        return step(0, index);
      if (kind == "values")
        return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, "values");
    Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
  }
});

// node_modules/core-js/library/modules/web.dom.iterable.js
var require_web_dom_iterable = __commonJS({
  "node_modules/core-js/library/modules/web.dom.iterable.js"() {
    require_es6_array_iterator();
    var global2 = require_global();
    var hide = require_hide();
    var Iterators = require_iterators();
    var TO_STRING_TAG = require_wks()("toStringTag");
    var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
    for (i = 0; i < DOMIterables.length; i++) {
      NAME = DOMIterables[i];
      Collection = global2[NAME];
      proto = Collection && Collection.prototype;
      if (proto && !proto[TO_STRING_TAG])
        hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = Iterators.Array;
    }
    var NAME;
    var Collection;
    var proto;
    var i;
  }
});

// node_modules/core-js/library/modules/_string-at.js
var require_string_at = __commonJS({
  "node_modules/core-js/library/modules/_string-at.js"(exports2, module2) {
    var toInteger = require_to_integer();
    var defined = require_defined();
    module2.exports = function(TO_STRING) {
      return function(that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l)
          return TO_STRING ? "" : void 0;
        a = s.charCodeAt(i);
        return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
      };
    };
  }
});

// node_modules/core-js/library/modules/es6.string.iterator.js
var require_es6_string_iterator = __commonJS({
  "node_modules/core-js/library/modules/es6.string.iterator.js"() {
    "use strict";
    var $at = require_string_at()(true);
    require_iter_define()(String, "String", function(iterated) {
      this._t = String(iterated);
      this._i = 0;
    }, function() {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length)
        return { value: void 0, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    });
  }
});

// node_modules/core-js/library/modules/_classof.js
var require_classof = __commonJS({
  "node_modules/core-js/library/modules/_classof.js"(exports2, module2) {
    var cof = require_cof();
    var TAG = require_wks()("toStringTag");
    var ARG = cof(/* @__PURE__ */ function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (e) {
      }
    };
    module2.exports = function(it) {
      var O, T, B;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
    };
  }
});

// node_modules/core-js/library/modules/core.get-iterator-method.js
var require_core_get_iterator_method = __commonJS({
  "node_modules/core-js/library/modules/core.get-iterator-method.js"(exports2, module2) {
    var classof = require_classof();
    var ITERATOR = require_wks()("iterator");
    var Iterators = require_iterators();
    module2.exports = require_core().getIteratorMethod = function(it) {
      if (it != void 0)
        return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js/library/modules/core.get-iterator.js
var require_core_get_iterator = __commonJS({
  "node_modules/core-js/library/modules/core.get-iterator.js"(exports2, module2) {
    var anObject = require_an_object();
    var get = require_core_get_iterator_method();
    module2.exports = require_core().getIterator = function(it) {
      var iterFn = get(it);
      if (typeof iterFn != "function")
        throw TypeError(it + " is not iterable!");
      return anObject(iterFn.call(it));
    };
  }
});

// node_modules/core-js/library/fn/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js/library/fn/get-iterator.js"(exports2, module2) {
    require_web_dom_iterable();
    require_es6_string_iterator();
    module2.exports = require_core_get_iterator();
  }
});

// node_modules/babel-runtime/core-js/get-iterator.js
var require_get_iterator2 = __commonJS({
  "node_modules/babel-runtime/core-js/get-iterator.js"(exports2, module2) {
    module2.exports = { "default": require_get_iterator(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/babel-runtime/helpers/classCallCheck.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.default = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  }
});

// node_modules/core-js/library/modules/_meta.js
var require_meta = __commonJS({
  "node_modules/core-js/library/modules/_meta.js"(exports2, module2) {
    var META = require_uid()("meta");
    var isObject = require_is_object();
    var has = require_has();
    var setDesc = require_object_dp().f;
    var id = 0;
    var isExtensible = Object.isExtensible || function() {
      return true;
    };
    var FREEZE = !require_fails()(function() {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function(it) {
      setDesc(it, META, { value: {
        i: "O" + ++id,
        // object ID
        w: {}
        // weak collections IDs
      } });
    };
    var fastKey = function(it, create) {
      if (!isObject(it))
        return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
      if (!has(it, META)) {
        if (!isExtensible(it))
          return "F";
        if (!create)
          return "E";
        setMeta(it);
      }
      return it[META].i;
    };
    var getWeak = function(it, create) {
      if (!has(it, META)) {
        if (!isExtensible(it))
          return true;
        if (!create)
          return false;
        setMeta(it);
      }
      return it[META].w;
    };
    var onFreeze = function(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
        setMeta(it);
      return it;
    };
    var meta = module2.exports = {
      KEY: META,
      NEED: false,
      fastKey,
      getWeak,
      onFreeze
    };
  }
});

// node_modules/core-js/library/modules/_wks-ext.js
var require_wks_ext = __commonJS({
  "node_modules/core-js/library/modules/_wks-ext.js"(exports2) {
    exports2.f = require_wks();
  }
});

// node_modules/core-js/library/modules/_wks-define.js
var require_wks_define = __commonJS({
  "node_modules/core-js/library/modules/_wks-define.js"(exports2, module2) {
    var global2 = require_global();
    var core = require_core();
    var LIBRARY = require_library();
    var wksExt = require_wks_ext();
    var defineProperty = require_object_dp().f;
    module2.exports = function(name) {
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global2.Symbol || {});
      if (name.charAt(0) != "_" && !(name in $Symbol))
        defineProperty($Symbol, name, { value: wksExt.f(name) });
    };
  }
});

// node_modules/core-js/library/modules/_object-gops.js
var require_object_gops = __commonJS({
  "node_modules/core-js/library/modules/_object-gops.js"(exports2) {
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/library/modules/_object-pie.js
var require_object_pie = __commonJS({
  "node_modules/core-js/library/modules/_object-pie.js"(exports2) {
    exports2.f = {}.propertyIsEnumerable;
  }
});

// node_modules/core-js/library/modules/_enum-keys.js
var require_enum_keys = __commonJS({
  "node_modules/core-js/library/modules/_enum-keys.js"(exports2, module2) {
    var getKeys = require_object_keys();
    var gOPS = require_object_gops();
    var pIE = require_object_pie();
    module2.exports = function(it) {
      var result = getKeys(it);
      var getSymbols = gOPS.f;
      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;
        while (symbols.length > i)
          if (isEnum.call(it, key = symbols[i++]))
            result.push(key);
      }
      return result;
    };
  }
});

// node_modules/core-js/library/modules/_is-array.js
var require_is_array = __commonJS({
  "node_modules/core-js/library/modules/_is-array.js"(exports2, module2) {
    var cof = require_cof();
    module2.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == "Array";
    };
  }
});

// node_modules/core-js/library/modules/_object-gopn.js
var require_object_gopn = __commonJS({
  "node_modules/core-js/library/modules/_object-gopn.js"(exports2) {
    var $keys = require_object_keys_internal();
    var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/library/modules/_object-gopn-ext.js
var require_object_gopn_ext = __commonJS({
  "node_modules/core-js/library/modules/_object-gopn-ext.js"(exports2, module2) {
    var toIObject = require_to_iobject();
    var gOPN = require_object_gopn().f;
    var toString = {}.toString;
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };
    module2.exports.f = function getOwnPropertyNames(it) {
      return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
    };
  }
});

// node_modules/core-js/library/modules/_object-gopd.js
var require_object_gopd = __commonJS({
  "node_modules/core-js/library/modules/_object-gopd.js"(exports2) {
    var pIE = require_object_pie();
    var createDesc = require_property_desc();
    var toIObject = require_to_iobject();
    var toPrimitive = require_to_primitive();
    var has = require_has();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var gOPD = Object.getOwnPropertyDescriptor;
    exports2.f = require_descriptors() ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE)
        try {
          return gOPD(O, P);
        } catch (e) {
        }
      if (has(O, P))
        return createDesc(!pIE.f.call(O, P), O[P]);
    };
  }
});

// node_modules/core-js/library/modules/es6.symbol.js
var require_es6_symbol = __commonJS({
  "node_modules/core-js/library/modules/es6.symbol.js"() {
    "use strict";
    var global2 = require_global();
    var has = require_has();
    var DESCRIPTORS = require_descriptors();
    var $export = require_export();
    var redefine = require_redefine();
    var META = require_meta().KEY;
    var $fails = require_fails();
    var shared = require_shared();
    var setToStringTag = require_set_to_string_tag();
    var uid = require_uid();
    var wks = require_wks();
    var wksExt = require_wks_ext();
    var wksDefine = require_wks_define();
    var enumKeys = require_enum_keys();
    var isArray = require_is_array();
    var anObject = require_an_object();
    var isObject = require_is_object();
    var toObject = require_to_object();
    var toIObject = require_to_iobject();
    var toPrimitive = require_to_primitive();
    var createDesc = require_property_desc();
    var _create = require_object_create();
    var gOPNExt = require_object_gopn_ext();
    var $GOPD = require_object_gopd();
    var $GOPS = require_object_gops();
    var $DP = require_object_dp();
    var $keys = require_object_keys();
    var gOPD = $GOPD.f;
    var dP = $DP.f;
    var gOPN = gOPNExt.f;
    var $Symbol = global2.Symbol;
    var $JSON = global2.JSON;
    var _stringify = $JSON && $JSON.stringify;
    var PROTOTYPE = "prototype";
    var HIDDEN = wks("_hidden");
    var TO_PRIMITIVE = wks("toPrimitive");
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = shared("symbol-registry");
    var AllSymbols = shared("symbols");
    var OPSymbols = shared("op-symbols");
    var ObjectProto = Object[PROTOTYPE];
    var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
    var QObject = global2.QObject;
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var setSymbolDesc = DESCRIPTORS && $fails(function() {
      return _create(dP({}, "a", {
        get: function() {
          return dP(this, "a", { value: 7 }).a;
        }
      })).a != 7;
    }) ? function(it, key, D) {
      var protoDesc = gOPD(ObjectProto, key);
      if (protoDesc)
        delete ObjectProto[key];
      dP(it, key, D);
      if (protoDesc && it !== ObjectProto)
        dP(ObjectProto, key, protoDesc);
    } : dP;
    var wrap = function(tag) {
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
      sym._k = tag;
      return sym;
    };
    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      return it instanceof $Symbol;
    };
    var $defineProperty = function defineProperty(it, key, D) {
      if (it === ObjectProto)
        $defineProperty(OPSymbols, key, D);
      anObject(it);
      key = toPrimitive(key, true);
      anObject(D);
      if (has(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!has(it, HIDDEN))
            dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (has(it, HIDDEN) && it[HIDDEN][key])
            it[HIDDEN][key] = false;
          D = _create(D, { enumerable: createDesc(0, false) });
        }
        return setSymbolDesc(it, key, D);
      }
      return dP(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P));
      var i = 0;
      var l = keys.length;
      var key;
      while (l > i)
        $defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create(it, P) {
      return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = toPrimitive(key, true));
      if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
        return false;
      return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = toIObject(it);
      key = toPrimitive(key, true);
      if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
        return;
      var D = gOPD(it, key);
      if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
        D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN(toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
          result.push(key);
      }
      return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto;
      var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))
          result.push(AllSymbols[key]);
      }
      return result;
    };
    if (!USE_NATIVE) {
      $Symbol = function Symbol2() {
        if (this instanceof $Symbol)
          throw TypeError("Symbol is not a constructor!");
        var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
        var $set = function(value) {
          if (this === ObjectProto)
            $set.call(OPSymbols, value);
          if (has(this, HIDDEN) && has(this[HIDDEN], tag))
            this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value));
        };
        if (DESCRIPTORS && setter)
          setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
        return wrap(tag);
      };
      redefine($Symbol[PROTOTYPE], "toString", function toString() {
        return this._k;
      });
      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f = $defineProperty;
      require_object_gopn().f = gOPNExt.f = $getOwnPropertyNames;
      require_object_pie().f = $propertyIsEnumerable;
      $GOPS.f = $getOwnPropertySymbols;
      if (DESCRIPTORS && !require_library()) {
        redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
      }
      wksExt.f = function(name) {
        return wrap(wks(name));
      };
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
    for (es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; )
      wks(es6Symbols[j++]);
    var es6Symbols;
    var j;
    for (wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; )
      wksDefine(wellKnownSymbols[k++]);
    var wellKnownSymbols;
    var k;
    $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
      // 19.4.2.1 Symbol.for(key)
      "for": function(key) {
        return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym))
          throw TypeError(sym + " is not a symbol!");
        for (var key in SymbolRegistry)
          if (SymbolRegistry[key] === sym)
            return key;
      },
      useSetter: function() {
        setter = true;
      },
      useSimple: function() {
        setter = false;
      }
    });
    $export($export.S + $export.F * !USE_NATIVE, "Object", {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });
    var FAILS_ON_PRIMITIVES = $fails(function() {
      $GOPS.f(1);
    });
    $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return $GOPS.f(toObject(it));
      }
    });
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
      var S = $Symbol();
      return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
    })), "JSON", {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i)
          args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && it === void 0 || isSymbol(it))
          return;
        if (!isArray(replacer))
          replacer = function(key, value) {
            if (typeof $replacer == "function")
              value = $replacer.call(this, key, value);
            if (!isSymbol(value))
              return value;
          };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || require_hide()($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    setToStringTag($Symbol, "Symbol");
    setToStringTag(Math, "Math", true);
    setToStringTag(global2.JSON, "JSON", true);
  }
});

// node_modules/core-js/library/fn/object/get-own-property-symbols.js
var require_get_own_property_symbols = __commonJS({
  "node_modules/core-js/library/fn/object/get-own-property-symbols.js"(exports2, module2) {
    require_es6_symbol();
    module2.exports = require_core().Object.getOwnPropertySymbols;
  }
});

// node_modules/babel-runtime/core-js/object/get-own-property-symbols.js
var require_get_own_property_symbols2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/get-own-property-symbols.js"(exports2, module2) {
    module2.exports = { "default": require_get_own_property_symbols(), __esModule: true };
  }
});

// node_modules/core-js/library/modules/_object-sap.js
var require_object_sap = __commonJS({
  "node_modules/core-js/library/modules/_object-sap.js"(exports2, module2) {
    var $export = require_export();
    var core = require_core();
    var fails = require_fails();
    module2.exports = function(KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function() {
        fn(1);
      }), "Object", exp);
    };
  }
});

// node_modules/core-js/library/modules/es6.object.keys.js
var require_es6_object_keys = __commonJS({
  "node_modules/core-js/library/modules/es6.object.keys.js"() {
    var toObject = require_to_object();
    var $keys = require_object_keys();
    require_object_sap()("keys", function() {
      return function keys(it) {
        return $keys(toObject(it));
      };
    });
  }
});

// node_modules/core-js/library/fn/object/keys.js
var require_keys = __commonJS({
  "node_modules/core-js/library/fn/object/keys.js"(exports2, module2) {
    require_es6_object_keys();
    module2.exports = require_core().Object.keys;
  }
});

// node_modules/babel-runtime/core-js/object/keys.js
var require_keys2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/keys.js"(exports2, module2) {
    module2.exports = { "default": require_keys(), __esModule: true };
  }
});

// node_modules/core-js/library/fn/json/stringify.js
var require_stringify = __commonJS({
  "node_modules/core-js/library/fn/json/stringify.js"(exports2, module2) {
    var core = require_core();
    var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
    module2.exports = function stringify(it) {
      return $JSON.stringify.apply($JSON, arguments);
    };
  }
});

// node_modules/babel-runtime/core-js/json/stringify.js
var require_stringify2 = __commonJS({
  "node_modules/babel-runtime/core-js/json/stringify.js"(exports2, module2) {
    module2.exports = { "default": require_stringify(), __esModule: true };
  }
});

// node_modules/core-js/library/fn/symbol/for.js
var require_for = __commonJS({
  "node_modules/core-js/library/fn/symbol/for.js"(exports2, module2) {
    require_es6_symbol();
    module2.exports = require_core().Symbol["for"];
  }
});

// node_modules/babel-runtime/core-js/symbol/for.js
var require_for2 = __commonJS({
  "node_modules/babel-runtime/core-js/symbol/for.js"(exports2, module2) {
    module2.exports = { "default": require_for(), __esModule: true };
  }
});

// node_modules/babel-types/lib/constants.js
var require_constants = __commonJS({
  "node_modules/babel-types/lib/constants.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.NOT_LOCAL_BINDING = exports2.BLOCK_SCOPED_SYMBOL = exports2.INHERIT_KEYS = exports2.UNARY_OPERATORS = exports2.STRING_UNARY_OPERATORS = exports2.NUMBER_UNARY_OPERATORS = exports2.BOOLEAN_UNARY_OPERATORS = exports2.BINARY_OPERATORS = exports2.NUMBER_BINARY_OPERATORS = exports2.BOOLEAN_BINARY_OPERATORS = exports2.COMPARISON_BINARY_OPERATORS = exports2.EQUALITY_BINARY_OPERATORS = exports2.BOOLEAN_NUMBER_BINARY_OPERATORS = exports2.UPDATE_OPERATORS = exports2.LOGICAL_OPERATORS = exports2.COMMENT_KEYS = exports2.FOR_INIT_KEYS = exports2.FLATTENABLE_KEYS = exports2.STATEMENT_OR_BLOCK_KEYS = void 0;
    var _for = require_for2();
    var _for2 = _interopRequireDefault(_for);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var STATEMENT_OR_BLOCK_KEYS = exports2.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
    var FLATTENABLE_KEYS = exports2.FLATTENABLE_KEYS = ["body", "expressions"];
    var FOR_INIT_KEYS = exports2.FOR_INIT_KEYS = ["left", "init"];
    var COMMENT_KEYS = exports2.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
    var LOGICAL_OPERATORS = exports2.LOGICAL_OPERATORS = ["||", "&&"];
    var UPDATE_OPERATORS = exports2.UPDATE_OPERATORS = ["++", "--"];
    var BOOLEAN_NUMBER_BINARY_OPERATORS = exports2.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
    var EQUALITY_BINARY_OPERATORS = exports2.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
    var COMPARISON_BINARY_OPERATORS = exports2.COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
    var BOOLEAN_BINARY_OPERATORS = exports2.BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
    var NUMBER_BINARY_OPERATORS = exports2.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
    var BINARY_OPERATORS = exports2.BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);
    var BOOLEAN_UNARY_OPERATORS = exports2.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
    var NUMBER_UNARY_OPERATORS = exports2.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"];
    var STRING_UNARY_OPERATORS = exports2.STRING_UNARY_OPERATORS = ["typeof"];
    var UNARY_OPERATORS = exports2.UNARY_OPERATORS = ["void"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);
    var INHERIT_KEYS = exports2.INHERIT_KEYS = {
      optional: ["typeAnnotation", "typeParameters", "returnType"],
      force: ["start", "loc", "end"]
    };
    var BLOCK_SCOPED_SYMBOL = exports2.BLOCK_SCOPED_SYMBOL = (0, _for2.default)("var used to be block scoped");
    var NOT_LOCAL_BINDING = exports2.NOT_LOCAL_BINDING = (0, _for2.default)("should not be considered a local binding");
  }
});

// node_modules/core-js/library/modules/es6.object.create.js
var require_es6_object_create = __commonJS({
  "node_modules/core-js/library/modules/es6.object.create.js"() {
    var $export = require_export();
    $export($export.S, "Object", { create: require_object_create() });
  }
});

// node_modules/core-js/library/fn/object/create.js
var require_create = __commonJS({
  "node_modules/core-js/library/fn/object/create.js"(exports2, module2) {
    require_es6_object_create();
    var $Object = require_core().Object;
    module2.exports = function create(P, D) {
      return $Object.create(P, D);
    };
  }
});

// node_modules/babel-runtime/core-js/object/create.js
var require_create2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/create.js"(exports2, module2) {
    module2.exports = { "default": require_create(), __esModule: true };
  }
});

// node_modules/babel-types/lib/retrievers.js
var require_retrievers = __commonJS({
  "node_modules/babel-types/lib/retrievers.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _create = require_create2();
    var _create2 = _interopRequireDefault(_create);
    exports2.getBindingIdentifiers = getBindingIdentifiers;
    exports2.getOuterBindingIdentifiers = getOuterBindingIdentifiers;
    var _index = require_lib();
    var t4 = _interopRequireWildcard(_index);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getBindingIdentifiers(node, duplicates, outerOnly) {
      var search = [].concat(node);
      var ids = (0, _create2.default)(null);
      while (search.length) {
        var id = search.shift();
        if (!id)
          continue;
        var keys = t4.getBindingIdentifiers.keys[id.type];
        if (t4.isIdentifier(id)) {
          if (duplicates) {
            var _ids = ids[id.name] = ids[id.name] || [];
            _ids.push(id);
          } else {
            ids[id.name] = id;
          }
          continue;
        }
        if (t4.isExportDeclaration(id)) {
          if (t4.isDeclaration(id.declaration)) {
            search.push(id.declaration);
          }
          continue;
        }
        if (outerOnly) {
          if (t4.isFunctionDeclaration(id)) {
            search.push(id.id);
            continue;
          }
          if (t4.isFunctionExpression(id)) {
            continue;
          }
        }
        if (keys) {
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (id[key]) {
              search = search.concat(id[key]);
            }
          }
        }
      }
      return ids;
    }
    getBindingIdentifiers.keys = {
      DeclareClass: ["id"],
      DeclareFunction: ["id"],
      DeclareModule: ["id"],
      DeclareVariable: ["id"],
      InterfaceDeclaration: ["id"],
      TypeAlias: ["id"],
      OpaqueType: ["id"],
      CatchClause: ["param"],
      LabeledStatement: ["label"],
      UnaryExpression: ["argument"],
      AssignmentExpression: ["left"],
      ImportSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportDefaultSpecifier: ["local"],
      ImportDeclaration: ["specifiers"],
      ExportSpecifier: ["exported"],
      ExportNamespaceSpecifier: ["exported"],
      ExportDefaultSpecifier: ["exported"],
      FunctionDeclaration: ["id", "params"],
      FunctionExpression: ["id", "params"],
      ClassDeclaration: ["id"],
      ClassExpression: ["id"],
      RestElement: ["argument"],
      UpdateExpression: ["argument"],
      RestProperty: ["argument"],
      ObjectProperty: ["value"],
      AssignmentPattern: ["left"],
      ArrayPattern: ["elements"],
      ObjectPattern: ["properties"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id"]
    };
    function getOuterBindingIdentifiers(node, duplicates) {
      return getBindingIdentifiers(node, duplicates, true);
    }
  }
});

// node_modules/core-js/library/fn/symbol/iterator.js
var require_iterator = __commonJS({
  "node_modules/core-js/library/fn/symbol/iterator.js"(exports2, module2) {
    require_es6_string_iterator();
    require_web_dom_iterable();
    module2.exports = require_wks_ext().f("iterator");
  }
});

// node_modules/babel-runtime/core-js/symbol/iterator.js
var require_iterator2 = __commonJS({
  "node_modules/babel-runtime/core-js/symbol/iterator.js"(exports2, module2) {
    module2.exports = { "default": require_iterator(), __esModule: true };
  }
});

// node_modules/core-js/library/modules/es6.object.to-string.js
var require_es6_object_to_string = __commonJS({
  "node_modules/core-js/library/modules/es6.object.to-string.js"() {
  }
});

// node_modules/core-js/library/modules/es7.symbol.async-iterator.js
var require_es7_symbol_async_iterator = __commonJS({
  "node_modules/core-js/library/modules/es7.symbol.async-iterator.js"() {
    require_wks_define()("asyncIterator");
  }
});

// node_modules/core-js/library/modules/es7.symbol.observable.js
var require_es7_symbol_observable = __commonJS({
  "node_modules/core-js/library/modules/es7.symbol.observable.js"() {
    require_wks_define()("observable");
  }
});

// node_modules/core-js/library/fn/symbol/index.js
var require_symbol = __commonJS({
  "node_modules/core-js/library/fn/symbol/index.js"(exports2, module2) {
    require_es6_symbol();
    require_es6_object_to_string();
    require_es7_symbol_async_iterator();
    require_es7_symbol_observable();
    module2.exports = require_core().Symbol;
  }
});

// node_modules/babel-runtime/core-js/symbol.js
var require_symbol2 = __commonJS({
  "node_modules/babel-runtime/core-js/symbol.js"(exports2, module2) {
    module2.exports = { "default": require_symbol(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/babel-runtime/helpers/typeof.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _iterator = require_iterator2();
    var _iterator2 = _interopRequireDefault(_iterator);
    var _symbol = require_symbol2();
    var _symbol2 = _interopRequireDefault(_symbol);
    var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof(obj);
    } : function(obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    };
  }
});

// node_modules/esutils/lib/ast.js
var require_ast = __commonJS({
  "node_modules/esutils/lib/ast.js"(exports2, module2) {
    (function() {
      "use strict";
      function isExpression(node) {
        if (node == null) {
          return false;
        }
        switch (node.type) {
          case "ArrayExpression":
          case "AssignmentExpression":
          case "BinaryExpression":
          case "CallExpression":
          case "ConditionalExpression":
          case "FunctionExpression":
          case "Identifier":
          case "Literal":
          case "LogicalExpression":
          case "MemberExpression":
          case "NewExpression":
          case "ObjectExpression":
          case "SequenceExpression":
          case "ThisExpression":
          case "UnaryExpression":
          case "UpdateExpression":
            return true;
        }
        return false;
      }
      function isIterationStatement(node) {
        if (node == null) {
          return false;
        }
        switch (node.type) {
          case "DoWhileStatement":
          case "ForInStatement":
          case "ForStatement":
          case "WhileStatement":
            return true;
        }
        return false;
      }
      function isStatement(node) {
        if (node == null) {
          return false;
        }
        switch (node.type) {
          case "BlockStatement":
          case "BreakStatement":
          case "ContinueStatement":
          case "DebuggerStatement":
          case "DoWhileStatement":
          case "EmptyStatement":
          case "ExpressionStatement":
          case "ForInStatement":
          case "ForStatement":
          case "IfStatement":
          case "LabeledStatement":
          case "ReturnStatement":
          case "SwitchStatement":
          case "ThrowStatement":
          case "TryStatement":
          case "VariableDeclaration":
          case "WhileStatement":
          case "WithStatement":
            return true;
        }
        return false;
      }
      function isSourceElement(node) {
        return isStatement(node) || node != null && node.type === "FunctionDeclaration";
      }
      function trailingStatement(node) {
        switch (node.type) {
          case "IfStatement":
            if (node.alternate != null) {
              return node.alternate;
            }
            return node.consequent;
          case "LabeledStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "WithStatement":
            return node.body;
        }
        return null;
      }
      function isProblematicIfStatement(node) {
        var current;
        if (node.type !== "IfStatement") {
          return false;
        }
        if (node.alternate == null) {
          return false;
        }
        current = node.consequent;
        do {
          if (current.type === "IfStatement") {
            if (current.alternate == null) {
              return true;
            }
          }
          current = trailingStatement(current);
        } while (current);
        return false;
      }
      module2.exports = {
        isExpression,
        isStatement,
        isIterationStatement,
        isSourceElement,
        isProblematicIfStatement,
        trailingStatement
      };
    })();
  }
});

// node_modules/esutils/lib/code.js
var require_code = __commonJS({
  "node_modules/esutils/lib/code.js"(exports2, module2) {
    (function() {
      "use strict";
      var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;
      ES5Regex = {
        // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
      };
      ES6Regex = {
        // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
      };
      function isDecimalDigit(ch2) {
        return 48 <= ch2 && ch2 <= 57;
      }
      function isHexDigit(ch2) {
        return 48 <= ch2 && ch2 <= 57 || // 0..9
        97 <= ch2 && ch2 <= 102 || // a..f
        65 <= ch2 && ch2 <= 70;
      }
      function isOctalDigit(ch2) {
        return ch2 >= 48 && ch2 <= 55;
      }
      NON_ASCII_WHITESPACES = [
        5760,
        8192,
        8193,
        8194,
        8195,
        8196,
        8197,
        8198,
        8199,
        8200,
        8201,
        8202,
        8239,
        8287,
        12288,
        65279
      ];
      function isWhiteSpace(ch2) {
        return ch2 === 32 || ch2 === 9 || ch2 === 11 || ch2 === 12 || ch2 === 160 || ch2 >= 5760 && NON_ASCII_WHITESPACES.indexOf(ch2) >= 0;
      }
      function isLineTerminator(ch2) {
        return ch2 === 10 || ch2 === 13 || ch2 === 8232 || ch2 === 8233;
      }
      function fromCodePoint(cp) {
        if (cp <= 65535) {
          return String.fromCharCode(cp);
        }
        var cu1 = String.fromCharCode(Math.floor((cp - 65536) / 1024) + 55296);
        var cu2 = String.fromCharCode((cp - 65536) % 1024 + 56320);
        return cu1 + cu2;
      }
      IDENTIFIER_START = new Array(128);
      for (ch = 0; ch < 128; ++ch) {
        IDENTIFIER_START[ch] = ch >= 97 && ch <= 122 || // a..z
        ch >= 65 && ch <= 90 || // A..Z
        ch === 36 || ch === 95;
      }
      IDENTIFIER_PART = new Array(128);
      for (ch = 0; ch < 128; ++ch) {
        IDENTIFIER_PART[ch] = ch >= 97 && ch <= 122 || // a..z
        ch >= 65 && ch <= 90 || // A..Z
        ch >= 48 && ch <= 57 || // 0..9
        ch === 36 || ch === 95;
      }
      function isIdentifierStartES5(ch2) {
        return ch2 < 128 ? IDENTIFIER_START[ch2] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch2));
      }
      function isIdentifierPartES5(ch2) {
        return ch2 < 128 ? IDENTIFIER_PART[ch2] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch2));
      }
      function isIdentifierStartES6(ch2) {
        return ch2 < 128 ? IDENTIFIER_START[ch2] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch2));
      }
      function isIdentifierPartES6(ch2) {
        return ch2 < 128 ? IDENTIFIER_PART[ch2] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch2));
      }
      module2.exports = {
        isDecimalDigit,
        isHexDigit,
        isOctalDigit,
        isWhiteSpace,
        isLineTerminator,
        isIdentifierStartES5,
        isIdentifierPartES5,
        isIdentifierStartES6,
        isIdentifierPartES6
      };
    })();
  }
});

// node_modules/esutils/lib/keyword.js
var require_keyword = __commonJS({
  "node_modules/esutils/lib/keyword.js"(exports2, module2) {
    (function() {
      "use strict";
      var code = require_code();
      function isStrictModeReservedWordES6(id) {
        switch (id) {
          case "implements":
          case "interface":
          case "package":
          case "private":
          case "protected":
          case "public":
          case "static":
          case "let":
            return true;
          default:
            return false;
        }
      }
      function isKeywordES5(id, strict) {
        if (!strict && id === "yield") {
          return false;
        }
        return isKeywordES6(id, strict);
      }
      function isKeywordES6(id, strict) {
        if (strict && isStrictModeReservedWordES6(id)) {
          return true;
        }
        switch (id.length) {
          case 2:
            return id === "if" || id === "in" || id === "do";
          case 3:
            return id === "var" || id === "for" || id === "new" || id === "try";
          case 4:
            return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
          case 5:
            return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
          case 6:
            return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
          case 7:
            return id === "default" || id === "finally" || id === "extends";
          case 8:
            return id === "function" || id === "continue" || id === "debugger";
          case 10:
            return id === "instanceof";
          default:
            return false;
        }
      }
      function isReservedWordES5(id, strict) {
        return id === "null" || id === "true" || id === "false" || isKeywordES5(id, strict);
      }
      function isReservedWordES6(id, strict) {
        return id === "null" || id === "true" || id === "false" || isKeywordES6(id, strict);
      }
      function isRestrictedWord(id) {
        return id === "eval" || id === "arguments";
      }
      function isIdentifierNameES5(id) {
        var i, iz, ch;
        if (id.length === 0) {
          return false;
        }
        ch = id.charCodeAt(0);
        if (!code.isIdentifierStartES5(ch)) {
          return false;
        }
        for (i = 1, iz = id.length; i < iz; ++i) {
          ch = id.charCodeAt(i);
          if (!code.isIdentifierPartES5(ch)) {
            return false;
          }
        }
        return true;
      }
      function decodeUtf16(lead, trail) {
        return (lead - 55296) * 1024 + (trail - 56320) + 65536;
      }
      function isIdentifierNameES6(id) {
        var i, iz, ch, lowCh, check;
        if (id.length === 0) {
          return false;
        }
        check = code.isIdentifierStartES6;
        for (i = 0, iz = id.length; i < iz; ++i) {
          ch = id.charCodeAt(i);
          if (55296 <= ch && ch <= 56319) {
            ++i;
            if (i >= iz) {
              return false;
            }
            lowCh = id.charCodeAt(i);
            if (!(56320 <= lowCh && lowCh <= 57343)) {
              return false;
            }
            ch = decodeUtf16(ch, lowCh);
          }
          if (!check(ch)) {
            return false;
          }
          check = code.isIdentifierPartES6;
        }
        return true;
      }
      function isIdentifierES5(id, strict) {
        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
      }
      function isIdentifierES6(id, strict) {
        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
      }
      module2.exports = {
        isKeywordES5,
        isKeywordES6,
        isReservedWordES5,
        isReservedWordES6,
        isRestrictedWord,
        isIdentifierNameES5,
        isIdentifierNameES6,
        isIdentifierES5,
        isIdentifierES6
      };
    })();
  }
});

// node_modules/esutils/lib/utils.js
var require_utils = __commonJS({
  "node_modules/esutils/lib/utils.js"(exports2) {
    (function() {
      "use strict";
      exports2.ast = require_ast();
      exports2.code = require_code();
      exports2.keyword = require_keyword();
    })();
  }
});

// node_modules/babel-types/lib/validators.js
var require_validators = __commonJS({
  "node_modules/babel-types/lib/validators.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _keys = require_keys2();
    var _keys2 = _interopRequireDefault(_keys);
    var _typeof2 = require_typeof();
    var _typeof3 = _interopRequireDefault(_typeof2);
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.isBinding = isBinding;
    exports2.isReferenced = isReferenced;
    exports2.isValidIdentifier = isValidIdentifier;
    exports2.isLet = isLet;
    exports2.isBlockScoped = isBlockScoped;
    exports2.isVar = isVar;
    exports2.isSpecifierDefault = isSpecifierDefault;
    exports2.isScope = isScope;
    exports2.isImmutable = isImmutable;
    exports2.isNodesEquivalent = isNodesEquivalent;
    var _retrievers = require_retrievers();
    var _esutils = require_utils();
    var _esutils2 = _interopRequireDefault(_esutils);
    var _index = require_lib();
    var t4 = _interopRequireWildcard(_index);
    var _constants = require_constants();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isBinding(node, parent) {
      var keys = _retrievers.getBindingIdentifiers.keys[parent.type];
      if (keys) {
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var val = parent[key];
          if (Array.isArray(val)) {
            if (val.indexOf(node) >= 0)
              return true;
          } else {
            if (val === node)
              return true;
          }
        }
      }
      return false;
    }
    function isReferenced(node, parent) {
      switch (parent.type) {
        case "BindExpression":
          return parent.object === node || parent.callee === node;
        case "MemberExpression":
        case "JSXMemberExpression":
          if (parent.property === node && parent.computed) {
            return true;
          } else if (parent.object === node) {
            return true;
          } else {
            return false;
          }
        case "MetaProperty":
          return false;
        case "ObjectProperty":
          if (parent.key === node) {
            return parent.computed;
          }
        case "VariableDeclarator":
          return parent.id !== node;
        case "ArrowFunctionExpression":
        case "FunctionDeclaration":
        case "FunctionExpression":
          for (var _iterator = parent.params, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
            var _ref;
            if (_isArray) {
              if (_i >= _iterator.length)
                break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done)
                break;
              _ref = _i.value;
            }
            var param = _ref;
            if (param === node)
              return false;
          }
          return parent.id !== node;
        case "ExportSpecifier":
          if (parent.source) {
            return false;
          } else {
            return parent.local === node;
          }
        case "ExportNamespaceSpecifier":
        case "ExportDefaultSpecifier":
          return false;
        case "JSXAttribute":
          return parent.name !== node;
        case "ClassProperty":
          if (parent.key === node) {
            return parent.computed;
          } else {
            return parent.value === node;
          }
        case "ImportDefaultSpecifier":
        case "ImportNamespaceSpecifier":
        case "ImportSpecifier":
          return false;
        case "ClassDeclaration":
        case "ClassExpression":
          return parent.id !== node;
        case "ClassMethod":
        case "ObjectMethod":
          return parent.key === node && parent.computed;
        case "LabeledStatement":
          return false;
        case "CatchClause":
          return parent.param !== node;
        case "RestElement":
          return false;
        case "AssignmentExpression":
          return parent.right === node;
        case "AssignmentPattern":
          return parent.right === node;
        case "ObjectPattern":
        case "ArrayPattern":
          return false;
      }
      return true;
    }
    function isValidIdentifier(name) {
      if (typeof name !== "string" || _esutils2.default.keyword.isReservedWordES6(name, true)) {
        return false;
      } else if (name === "await") {
        return false;
      } else {
        return _esutils2.default.keyword.isIdentifierNameES6(name);
      }
    }
    function isLet(node) {
      return t4.isVariableDeclaration(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
    }
    function isBlockScoped(node) {
      return t4.isFunctionDeclaration(node) || t4.isClassDeclaration(node) || t4.isLet(node);
    }
    function isVar(node) {
      return t4.isVariableDeclaration(node, { kind: "var" }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
    }
    function isSpecifierDefault(specifier) {
      return t4.isImportDefaultSpecifier(specifier) || t4.isIdentifier(specifier.imported || specifier.exported, { name: "default" });
    }
    function isScope(node, parent) {
      if (t4.isBlockStatement(node) && t4.isFunction(parent, { body: node })) {
        return false;
      }
      return t4.isScopable(node);
    }
    function isImmutable(node) {
      if (t4.isType(node.type, "Immutable"))
        return true;
      if (t4.isIdentifier(node)) {
        if (node.name === "undefined") {
          return true;
        } else {
          return false;
        }
      }
      return false;
    }
    function isNodesEquivalent(a, b) {
      if ((typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) !== "object" || (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) !== "object" || a == null || b == null) {
        return a === b;
      }
      if (a.type !== b.type) {
        return false;
      }
      var fields = (0, _keys2.default)(t4.NODE_FIELDS[a.type] || a.type);
      for (var _iterator2 = fields, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
        var _ref2;
        if (_isArray2) {
          if (_i2 >= _iterator2.length)
            break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done)
            break;
          _ref2 = _i2.value;
        }
        var field = _ref2;
        if ((0, _typeof3.default)(a[field]) !== (0, _typeof3.default)(b[field])) {
          return false;
        }
        if (Array.isArray(a[field])) {
          if (!Array.isArray(b[field])) {
            return false;
          }
          if (a[field].length !== b[field].length) {
            return false;
          }
          for (var i = 0; i < a[field].length; i++) {
            if (!isNodesEquivalent(a[field][i], b[field][i])) {
              return false;
            }
          }
          continue;
        }
        if (!isNodesEquivalent(a[field], b[field])) {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/core-js/library/modules/es6.number.max-safe-integer.js
var require_es6_number_max_safe_integer = __commonJS({
  "node_modules/core-js/library/modules/es6.number.max-safe-integer.js"() {
    var $export = require_export();
    $export($export.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
  }
});

// node_modules/core-js/library/fn/number/max-safe-integer.js
var require_max_safe_integer = __commonJS({
  "node_modules/core-js/library/fn/number/max-safe-integer.js"(exports2, module2) {
    require_es6_number_max_safe_integer();
    module2.exports = 9007199254740991;
  }
});

// node_modules/babel-runtime/core-js/number/max-safe-integer.js
var require_max_safe_integer2 = __commonJS({
  "node_modules/babel-runtime/core-js/number/max-safe-integer.js"(exports2, module2) {
    module2.exports = { "default": require_max_safe_integer(), __esModule: true };
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports2, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports2, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports2, module2) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports2, module2) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports2, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports2, module2) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports2, module2) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module2.exports = overArg;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports2, module2) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module2.exports = getPrototype;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports2, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject;
  }
});

// node_modules/lodash/_baseIsRegExp.js
var require_baseIsRegExp = __commonJS({
  "node_modules/lodash/_baseIsRegExp.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var regexpTag = "[object RegExp]";
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }
    module2.exports = baseIsRegExp;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports2, module2) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module2.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports2, module2) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil;
  }
});

// node_modules/lodash/isRegExp.js
var require_isRegExp = __commonJS({
  "node_modules/lodash/isRegExp.js"(exports2, module2) {
    var baseIsRegExp = require_baseIsRegExp();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
    module2.exports = isRegExp;
  }
});

// node_modules/babel-types/lib/converters.js
var require_converters = __commonJS({
  "node_modules/babel-types/lib/converters.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _maxSafeInteger = require_max_safe_integer2();
    var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);
    var _stringify = require_stringify2();
    var _stringify2 = _interopRequireDefault(_stringify);
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.toComputedKey = toComputedKey;
    exports2.toSequenceExpression = toSequenceExpression;
    exports2.toKeyAlias = toKeyAlias;
    exports2.toIdentifier = toIdentifier;
    exports2.toBindingIdentifierName = toBindingIdentifierName;
    exports2.toStatement = toStatement;
    exports2.toExpression = toExpression;
    exports2.toBlock = toBlock;
    exports2.valueToNode = valueToNode;
    var _isPlainObject = require_isPlainObject();
    var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
    var _isRegExp = require_isRegExp();
    var _isRegExp2 = _interopRequireDefault(_isRegExp);
    var _index = require_lib();
    var t4 = _interopRequireWildcard(_index);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function toComputedKey(node) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : node.key || node.property;
      if (!node.computed) {
        if (t4.isIdentifier(key))
          key = t4.stringLiteral(key.name);
      }
      return key;
    }
    function gatherSequenceExpressions(nodes, scope, declars) {
      var exprs = [];
      var ensureLastUndefined = true;
      for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var node = _ref;
        ensureLastUndefined = false;
        if (t4.isExpression(node)) {
          exprs.push(node);
        } else if (t4.isExpressionStatement(node)) {
          exprs.push(node.expression);
        } else if (t4.isVariableDeclaration(node)) {
          if (node.kind !== "var")
            return;
          for (var _iterator2 = node.declarations, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
            var _ref2;
            if (_isArray2) {
              if (_i2 >= _iterator2.length)
                break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done)
                break;
              _ref2 = _i2.value;
            }
            var declar = _ref2;
            var bindings = t4.getBindingIdentifiers(declar);
            for (var key in bindings) {
              declars.push({
                kind: node.kind,
                id: bindings[key]
              });
            }
            if (declar.init) {
              exprs.push(t4.assignmentExpression("=", declar.id, declar.init));
            }
          }
          ensureLastUndefined = true;
        } else if (t4.isIfStatement(node)) {
          var consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
          var alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
          if (!consequent || !alternate)
            return;
          exprs.push(t4.conditionalExpression(node.test, consequent, alternate));
        } else if (t4.isBlockStatement(node)) {
          var body = gatherSequenceExpressions(node.body, scope, declars);
          if (!body)
            return;
          exprs.push(body);
        } else if (t4.isEmptyStatement(node)) {
          ensureLastUndefined = true;
        } else {
          return;
        }
      }
      if (ensureLastUndefined) {
        exprs.push(scope.buildUndefinedNode());
      }
      if (exprs.length === 1) {
        return exprs[0];
      } else {
        return t4.sequenceExpression(exprs);
      }
    }
    function toSequenceExpression(nodes, scope) {
      if (!nodes || !nodes.length)
        return;
      var declars = [];
      var result = gatherSequenceExpressions(nodes, scope, declars);
      if (!result)
        return;
      for (var _iterator3 = declars, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
        var _ref3;
        if (_isArray3) {
          if (_i3 >= _iterator3.length)
            break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done)
            break;
          _ref3 = _i3.value;
        }
        var declar = _ref3;
        scope.push(declar);
      }
      return result;
    }
    function toKeyAlias(node) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : node.key;
      var alias = void 0;
      if (node.kind === "method") {
        return toKeyAlias.increment() + "";
      } else if (t4.isIdentifier(key)) {
        alias = key.name;
      } else if (t4.isStringLiteral(key)) {
        alias = (0, _stringify2.default)(key.value);
      } else {
        alias = (0, _stringify2.default)(t4.removePropertiesDeep(t4.cloneDeep(key)));
      }
      if (node.computed) {
        alias = "[" + alias + "]";
      }
      if (node.static) {
        alias = "static:" + alias;
      }
      return alias;
    }
    toKeyAlias.uid = 0;
    toKeyAlias.increment = function() {
      if (toKeyAlias.uid >= _maxSafeInteger2.default) {
        return toKeyAlias.uid = 0;
      } else {
        return toKeyAlias.uid++;
      }
    };
    function toIdentifier(name) {
      name = name + "";
      name = name.replace(/[^a-zA-Z0-9$_]/g, "-");
      name = name.replace(/^[-0-9]+/, "");
      name = name.replace(/[-\s]+(.)?/g, function(match, c) {
        return c ? c.toUpperCase() : "";
      });
      if (!t4.isValidIdentifier(name)) {
        name = "_" + name;
      }
      return name || "_";
    }
    function toBindingIdentifierName(name) {
      name = toIdentifier(name);
      if (name === "eval" || name === "arguments")
        name = "_" + name;
      return name;
    }
    function toStatement(node, ignore) {
      if (t4.isStatement(node)) {
        return node;
      }
      var mustHaveId = false;
      var newType = void 0;
      if (t4.isClass(node)) {
        mustHaveId = true;
        newType = "ClassDeclaration";
      } else if (t4.isFunction(node)) {
        mustHaveId = true;
        newType = "FunctionDeclaration";
      } else if (t4.isAssignmentExpression(node)) {
        return t4.expressionStatement(node);
      }
      if (mustHaveId && !node.id) {
        newType = false;
      }
      if (!newType) {
        if (ignore) {
          return false;
        } else {
          throw new Error("cannot turn " + node.type + " to a statement");
        }
      }
      node.type = newType;
      return node;
    }
    function toExpression(node) {
      if (t4.isExpressionStatement(node)) {
        node = node.expression;
      }
      if (t4.isExpression(node)) {
        return node;
      }
      if (t4.isClass(node)) {
        node.type = "ClassExpression";
      } else if (t4.isFunction(node)) {
        node.type = "FunctionExpression";
      }
      if (!t4.isExpression(node)) {
        throw new Error("cannot turn " + node.type + " to an expression");
      }
      return node;
    }
    function toBlock(node, parent) {
      if (t4.isBlockStatement(node)) {
        return node;
      }
      if (t4.isEmptyStatement(node)) {
        node = [];
      }
      if (!Array.isArray(node)) {
        if (!t4.isStatement(node)) {
          if (t4.isFunction(parent)) {
            node = t4.returnStatement(node);
          } else {
            node = t4.expressionStatement(node);
          }
        }
        node = [node];
      }
      return t4.blockStatement(node);
    }
    function valueToNode(value) {
      if (value === void 0) {
        return t4.identifier("undefined");
      }
      if (value === true || value === false) {
        return t4.booleanLiteral(value);
      }
      if (value === null) {
        return t4.nullLiteral();
      }
      if (typeof value === "string") {
        return t4.stringLiteral(value);
      }
      if (typeof value === "number") {
        return t4.numericLiteral(value);
      }
      if ((0, _isRegExp2.default)(value)) {
        var pattern = value.source;
        var flags = value.toString().match(/\/([a-z]+|)$/)[1];
        return t4.regExpLiteral(pattern, flags);
      }
      if (Array.isArray(value)) {
        return t4.arrayExpression(value.map(t4.valueToNode));
      }
      if ((0, _isPlainObject2.default)(value)) {
        var props = [];
        for (var key in value) {
          var nodeKey = void 0;
          if (t4.isValidIdentifier(key)) {
            nodeKey = t4.identifier(key);
          } else {
            nodeKey = t4.stringLiteral(key);
          }
          props.push(t4.objectProperty(nodeKey, t4.valueToNode(value[key])));
        }
        return t4.objectExpression(props);
      }
      throw new Error("don't know how to turn this value into a node");
    }
  }
});

// node_modules/babel-types/lib/flow.js
var require_flow = __commonJS({
  "node_modules/babel-types/lib/flow.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.createUnionTypeAnnotation = createUnionTypeAnnotation;
    exports2.removeTypeDuplicates = removeTypeDuplicates;
    exports2.createTypeAnnotationBasedOnTypeof = createTypeAnnotationBasedOnTypeof;
    var _index = require_lib();
    var t4 = _interopRequireWildcard(_index);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function createUnionTypeAnnotation(types) {
      var flattened = removeTypeDuplicates(types);
      if (flattened.length === 1) {
        return flattened[0];
      } else {
        return t4.unionTypeAnnotation(flattened);
      }
    }
    function removeTypeDuplicates(nodes) {
      var generics = {};
      var bases = {};
      var typeGroups = [];
      var types = [];
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (!node)
          continue;
        if (types.indexOf(node) >= 0) {
          continue;
        }
        if (t4.isAnyTypeAnnotation(node)) {
          return [node];
        }
        if (t4.isFlowBaseAnnotation(node)) {
          bases[node.type] = node;
          continue;
        }
        if (t4.isUnionTypeAnnotation(node)) {
          if (typeGroups.indexOf(node.types) < 0) {
            nodes = nodes.concat(node.types);
            typeGroups.push(node.types);
          }
          continue;
        }
        if (t4.isGenericTypeAnnotation(node)) {
          var name = node.id.name;
          if (generics[name]) {
            var existing = generics[name];
            if (existing.typeParameters) {
              if (node.typeParameters) {
                existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
              }
            } else {
              existing = node.typeParameters;
            }
          } else {
            generics[name] = node;
          }
          continue;
        }
        types.push(node);
      }
      for (var type in bases) {
        types.push(bases[type]);
      }
      for (var _name in generics) {
        types.push(generics[_name]);
      }
      return types;
    }
    function createTypeAnnotationBasedOnTypeof(type) {
      if (type === "string") {
        return t4.stringTypeAnnotation();
      } else if (type === "number") {
        return t4.numberTypeAnnotation();
      } else if (type === "undefined") {
        return t4.voidTypeAnnotation();
      } else if (type === "boolean") {
        return t4.booleanTypeAnnotation();
      } else if (type === "function") {
        return t4.genericTypeAnnotation(t4.identifier("Function"));
      } else if (type === "object") {
        return t4.genericTypeAnnotation(t4.identifier("Object"));
      } else if (type === "symbol") {
        return t4.genericTypeAnnotation(t4.identifier("Symbol"));
      } else {
        throw new Error("Invalid typeof value");
      }
    }
  }
});

// node_modules/to-fast-properties/index.js
var require_to_fast_properties = __commonJS({
  "node_modules/to-fast-properties/index.js"(exports, module) {
    "use strict";
    module.exports = function toFastproperties(o) {
      function Sub() {
      }
      Sub.prototype = o;
      var receiver = new Sub();
      function ic() {
        return typeof receiver.foo;
      }
      ic();
      ic();
      return o;
      eval("o" + o);
    };
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports2, module2) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports2, module2) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports2, module2) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports2, module2) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module2.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports2, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports2, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports2, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module2.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports2, module2) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports2, module2) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module2.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports2, module2) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module2.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports2, module2) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module2.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports2, module2) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module2.exports = stackHas;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports2, module2) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports2, module2) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports2, module2) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports2, module2) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports2, module2) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports2, module2) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports2, module2) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports2, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module2.exports = Map;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports2, module2) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports2, module2) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports2, module2) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports2, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports2, module2) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports2, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module2.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports2, module2) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports2, module2) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports2, module2) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports2, module2) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports2, module2) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports2, module2) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports2, module2) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports2, module2) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module2.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports2, module2) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports2, module2) {
    var ListCache = require_ListCache();
    var Map = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module2.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports2, module2) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports2, module2) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module2.exports = arrayEach;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports2, module2) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module2.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports2, module2) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module2.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports2, module2) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module2.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports2, module2) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module2.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports2, module2) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module2.exports = baseTimes;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module2.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports2, module2) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports2, module2) {
    var isArray = Array.isArray;
    module2.exports = isArray;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports2, module2) {
    function stubFalse() {
      return false;
    }
    module2.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports2, module2) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports2, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module2.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports2, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module2.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module2.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports2, module2) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports2, module2) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports2, module2) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module2.exports = isPrototype;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports2, module2) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module2.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports2, module2) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports2, module2) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module2.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys3 = __commonJS({
  "node_modules/lodash/keys.js"(exports2, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module2.exports = keys;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports2, module2) {
    var copyObject = require_copyObject();
    var keys = require_keys3();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module2.exports = baseAssign;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports2, module2) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports2, module2) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports2, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module2.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports2, module2) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module2.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports2, module2) {
    var root = require_root();
    var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module2.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports2, module2) {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module2.exports = copyArray;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports2, module2) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module2.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports2, module2) {
    function stubArray() {
      return [];
    }
    module2.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports2, module2) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module2.exports = getSymbols;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports2, module2) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module2.exports = copySymbols;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports2, module2) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module2.exports = arrayPush;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports2, module2) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module2.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports2, module2) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module2.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports2, module2) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module2.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports2, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys3();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module2.exports = getAllKeys;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports2, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module2.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports2, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module2.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports2, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module2.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports2, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module2.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports2, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module2.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports2, module2) {
    var DataView = require_DataView();
    var Map = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module2.exports = getTag;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports2, module2) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module2.exports = initCloneArray;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports2, module2) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports2, module2) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module2.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports2, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module2.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports2, module2) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module2.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports2, module2) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module2.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports2, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module2.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports2, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module2.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports2, module2) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module2.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports2, module2) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module2.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports2, module2) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module2.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports2, module2) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module2.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports2, module2) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module2.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports2, module2) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module2.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports2, module2) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys3();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module2.exports = baseClone;
  }
});

// node_modules/lodash/clone.js
var require_clone = __commonJS({
  "node_modules/lodash/clone.js"(exports2, module2) {
    var baseClone = require_baseClone();
    var CLONE_SYMBOLS_FLAG = 4;
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }
    module2.exports = clone;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports2, module2) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module2.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports2, module2) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module2.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports2, module2) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module2.exports = SetCache;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports2, module2) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module2.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports2, module2) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module2.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports2, module2) {
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module2.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports2, module2) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module2.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports2, module2) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module2.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports2, module2) {
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    module2.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports2, module2) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module2.exports = cacheHas;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports2, module2) {
    function noop() {
    }
    module2.exports = noop;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports2, module2) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module2.exports = setToArray;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports2, module2) {
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module2.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports2, module2) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module2.exports = baseUniq;
  }
});

// node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/lodash/uniq.js"(exports2, module2) {
    var baseUniq = require_baseUniq();
    function uniq(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    module2.exports = uniq;
  }
});

// node_modules/babel-types/lib/definitions/index.js
var require_definitions = __commonJS({
  "node_modules/babel-types/lib/definitions/index.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.DEPRECATED_KEYS = exports2.BUILDER_KEYS = exports2.NODE_FIELDS = exports2.ALIAS_KEYS = exports2.VISITOR_KEYS = void 0;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    var _stringify = require_stringify2();
    var _stringify2 = _interopRequireDefault(_stringify);
    var _typeof2 = require_typeof();
    var _typeof3 = _interopRequireDefault(_typeof2);
    exports2.assertEach = assertEach;
    exports2.assertOneOf = assertOneOf;
    exports2.assertNodeType = assertNodeType;
    exports2.assertNodeOrValueType = assertNodeOrValueType;
    exports2.assertValueType = assertValueType;
    exports2.chain = chain;
    exports2.default = defineType;
    var _index = require_lib();
    var t4 = _interopRequireWildcard(_index);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var VISITOR_KEYS = exports2.VISITOR_KEYS = {};
    var ALIAS_KEYS = exports2.ALIAS_KEYS = {};
    var NODE_FIELDS = exports2.NODE_FIELDS = {};
    var BUILDER_KEYS = exports2.BUILDER_KEYS = {};
    var DEPRECATED_KEYS = exports2.DEPRECATED_KEYS = {};
    function getType(val) {
      if (Array.isArray(val)) {
        return "array";
      } else if (val === null) {
        return "null";
      } else if (val === void 0) {
        return "undefined";
      } else {
        return typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val);
      }
    }
    function assertEach(callback) {
      function validator(node, key, val) {
        if (!Array.isArray(val))
          return;
        for (var i = 0; i < val.length; i++) {
          callback(node, key + "[" + i + "]", val[i]);
        }
      }
      validator.each = callback;
      return validator;
    }
    function assertOneOf() {
      for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
        vals[_key] = arguments[_key];
      }
      function validate(node, key, val) {
        if (vals.indexOf(val) < 0) {
          throw new TypeError("Property " + key + " expected value to be one of " + (0, _stringify2.default)(vals) + " but got " + (0, _stringify2.default)(val));
        }
      }
      validate.oneOf = vals;
      return validate;
    }
    function assertNodeType() {
      for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        types[_key2] = arguments[_key2];
      }
      function validate(node, key, val) {
        var valid = false;
        for (var _iterator = types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var type = _ref;
          if (t4.is(type, val)) {
            valid = true;
            break;
          }
        }
        if (!valid) {
          throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
        }
      }
      validate.oneOfNodeTypes = types;
      return validate;
    }
    function assertNodeOrValueType() {
      for (var _len3 = arguments.length, types = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        types[_key3] = arguments[_key3];
      }
      function validate(node, key, val) {
        var valid = false;
        for (var _iterator2 = types, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
          var _ref2;
          if (_isArray2) {
            if (_i2 >= _iterator2.length)
              break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done)
              break;
            _ref2 = _i2.value;
          }
          var type = _ref2;
          if (getType(val) === type || t4.is(type, val)) {
            valid = true;
            break;
          }
        }
        if (!valid) {
          throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
        }
      }
      validate.oneOfNodeOrValueTypes = types;
      return validate;
    }
    function assertValueType(type) {
      function validate(node, key, val) {
        var valid = getType(val) === type;
        if (!valid) {
          throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
        }
      }
      validate.type = type;
      return validate;
    }
    function chain() {
      for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        fns[_key4] = arguments[_key4];
      }
      function validate() {
        for (var _iterator3 = fns, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
          var _ref3;
          if (_isArray3) {
            if (_i3 >= _iterator3.length)
              break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done)
              break;
            _ref3 = _i3.value;
          }
          var fn = _ref3;
          fn.apply(void 0, arguments);
        }
      }
      validate.chainOf = fns;
      return validate;
    }
    function defineType(type) {
      var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var inherits = opts.inherits && store[opts.inherits] || {};
      opts.fields = opts.fields || inherits.fields || {};
      opts.visitor = opts.visitor || inherits.visitor || [];
      opts.aliases = opts.aliases || inherits.aliases || [];
      opts.builder = opts.builder || inherits.builder || opts.visitor || [];
      if (opts.deprecatedAlias) {
        DEPRECATED_KEYS[opts.deprecatedAlias] = type;
      }
      for (var _iterator4 = opts.visitor.concat(opts.builder), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4); ; ) {
        var _ref4;
        if (_isArray4) {
          if (_i4 >= _iterator4.length)
            break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done)
            break;
          _ref4 = _i4.value;
        }
        var _key5 = _ref4;
        opts.fields[_key5] = opts.fields[_key5] || {};
      }
      for (var key in opts.fields) {
        var field = opts.fields[key];
        if (opts.builder.indexOf(key) === -1) {
          field.optional = true;
        }
        if (field.default === void 0) {
          field.default = null;
        } else if (!field.validate) {
          field.validate = assertValueType(getType(field.default));
        }
      }
      VISITOR_KEYS[type] = opts.visitor;
      BUILDER_KEYS[type] = opts.builder;
      NODE_FIELDS[type] = opts.fields;
      ALIAS_KEYS[type] = opts.aliases;
      store[type] = opts;
    }
    var store = {};
  }
});

// node_modules/babel-types/lib/definitions/core.js
var require_core2 = __commonJS({
  "node_modules/babel-types/lib/definitions/core.js"() {
    "use strict";
    var _index = require_lib();
    var t4 = _interopRequireWildcard(_index);
    var _constants = require_constants();
    var _index2 = require_definitions();
    var _index3 = _interopRequireDefault(_index2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    (0, _index3.default)("ArrayExpression", {
      fields: {
        elements: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
          default: []
        }
      },
      visitor: ["elements"],
      aliases: ["Expression"]
    });
    (0, _index3.default)("AssignmentExpression", {
      fields: {
        operator: {
          validate: (0, _index2.assertValueType)("string")
        },
        left: {
          validate: (0, _index2.assertNodeType)("LVal")
        },
        right: {
          validate: (0, _index2.assertNodeType)("Expression")
        }
      },
      builder: ["operator", "left", "right"],
      visitor: ["left", "right"],
      aliases: ["Expression"]
    });
    (0, _index3.default)("BinaryExpression", {
      builder: ["operator", "left", "right"],
      fields: {
        operator: {
          validate: _index2.assertOneOf.apply(void 0, _constants.BINARY_OPERATORS)
        },
        left: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        right: {
          validate: (0, _index2.assertNodeType)("Expression")
        }
      },
      visitor: ["left", "right"],
      aliases: ["Binary", "Expression"]
    });
    (0, _index3.default)("Directive", {
      visitor: ["value"],
      fields: {
        value: {
          validate: (0, _index2.assertNodeType)("DirectiveLiteral")
        }
      }
    });
    (0, _index3.default)("DirectiveLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _index2.assertValueType)("string")
        }
      }
    });
    (0, _index3.default)("BlockStatement", {
      builder: ["body", "directives"],
      visitor: ["directives", "body"],
      fields: {
        directives: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
          default: []
        },
        body: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
        }
      },
      aliases: ["Scopable", "BlockParent", "Block", "Statement"]
    });
    (0, _index3.default)("BreakStatement", {
      visitor: ["label"],
      fields: {
        label: {
          validate: (0, _index2.assertNodeType)("Identifier"),
          optional: true
        }
      },
      aliases: ["Statement", "Terminatorless", "CompletionStatement"]
    });
    (0, _index3.default)("CallExpression", {
      visitor: ["callee", "arguments"],
      fields: {
        callee: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        arguments: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
        }
      },
      aliases: ["Expression"]
    });
    (0, _index3.default)("CatchClause", {
      visitor: ["param", "body"],
      fields: {
        param: {
          validate: (0, _index2.assertNodeType)("Identifier")
        },
        body: {
          validate: (0, _index2.assertNodeType)("BlockStatement")
        }
      },
      aliases: ["Scopable"]
    });
    (0, _index3.default)("ConditionalExpression", {
      visitor: ["test", "consequent", "alternate"],
      fields: {
        test: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        consequent: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        alternate: {
          validate: (0, _index2.assertNodeType)("Expression")
        }
      },
      aliases: ["Expression", "Conditional"]
    });
    (0, _index3.default)("ContinueStatement", {
      visitor: ["label"],
      fields: {
        label: {
          validate: (0, _index2.assertNodeType)("Identifier"),
          optional: true
        }
      },
      aliases: ["Statement", "Terminatorless", "CompletionStatement"]
    });
    (0, _index3.default)("DebuggerStatement", {
      aliases: ["Statement"]
    });
    (0, _index3.default)("DoWhileStatement", {
      visitor: ["test", "body"],
      fields: {
        test: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _index2.assertNodeType)("Statement")
        }
      },
      aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
    });
    (0, _index3.default)("EmptyStatement", {
      aliases: ["Statement"]
    });
    (0, _index3.default)("ExpressionStatement", {
      visitor: ["expression"],
      fields: {
        expression: {
          validate: (0, _index2.assertNodeType)("Expression")
        }
      },
      aliases: ["Statement", "ExpressionWrapper"]
    });
    (0, _index3.default)("File", {
      builder: ["program", "comments", "tokens"],
      visitor: ["program"],
      fields: {
        program: {
          validate: (0, _index2.assertNodeType)("Program")
        }
      }
    });
    (0, _index3.default)("ForInStatement", {
      visitor: ["left", "right", "body"],
      aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
      fields: {
        left: {
          validate: (0, _index2.assertNodeType)("VariableDeclaration", "LVal")
        },
        right: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _index2.assertNodeType)("Statement")
        }
      }
    });
    (0, _index3.default)("ForStatement", {
      visitor: ["init", "test", "update", "body"],
      aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
      fields: {
        init: {
          validate: (0, _index2.assertNodeType)("VariableDeclaration", "Expression"),
          optional: true
        },
        test: {
          validate: (0, _index2.assertNodeType)("Expression"),
          optional: true
        },
        update: {
          validate: (0, _index2.assertNodeType)("Expression"),
          optional: true
        },
        body: {
          validate: (0, _index2.assertNodeType)("Statement")
        }
      }
    });
    (0, _index3.default)("FunctionDeclaration", {
      builder: ["id", "params", "body", "generator", "async"],
      visitor: ["id", "params", "body", "returnType", "typeParameters"],
      fields: {
        id: {
          validate: (0, _index2.assertNodeType)("Identifier")
        },
        params: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
        },
        body: {
          validate: (0, _index2.assertNodeType)("BlockStatement")
        },
        generator: {
          default: false,
          validate: (0, _index2.assertValueType)("boolean")
        },
        async: {
          default: false,
          validate: (0, _index2.assertValueType)("boolean")
        }
      },
      aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"]
    });
    (0, _index3.default)("FunctionExpression", {
      inherits: "FunctionDeclaration",
      aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
      fields: {
        id: {
          validate: (0, _index2.assertNodeType)("Identifier"),
          optional: true
        },
        params: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
        },
        body: {
          validate: (0, _index2.assertNodeType)("BlockStatement")
        },
        generator: {
          default: false,
          validate: (0, _index2.assertValueType)("boolean")
        },
        async: {
          default: false,
          validate: (0, _index2.assertValueType)("boolean")
        }
      }
    });
    (0, _index3.default)("Identifier", {
      builder: ["name"],
      visitor: ["typeAnnotation"],
      aliases: ["Expression", "LVal"],
      fields: {
        name: {
          validate: function validate(node, key, val) {
            if (!t4.isValidIdentifier(val)) {
            }
          }
        },
        decorators: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
        }
      }
    });
    (0, _index3.default)("IfStatement", {
      visitor: ["test", "consequent", "alternate"],
      aliases: ["Statement", "Conditional"],
      fields: {
        test: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        consequent: {
          validate: (0, _index2.assertNodeType)("Statement")
        },
        alternate: {
          optional: true,
          validate: (0, _index2.assertNodeType)("Statement")
        }
      }
    });
    (0, _index3.default)("LabeledStatement", {
      visitor: ["label", "body"],
      aliases: ["Statement"],
      fields: {
        label: {
          validate: (0, _index2.assertNodeType)("Identifier")
        },
        body: {
          validate: (0, _index2.assertNodeType)("Statement")
        }
      }
    });
    (0, _index3.default)("StringLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _index2.assertValueType)("string")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    (0, _index3.default)("NumericLiteral", {
      builder: ["value"],
      deprecatedAlias: "NumberLiteral",
      fields: {
        value: {
          validate: (0, _index2.assertValueType)("number")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    (0, _index3.default)("NullLiteral", {
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    (0, _index3.default)("BooleanLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _index2.assertValueType)("boolean")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    (0, _index3.default)("RegExpLiteral", {
      builder: ["pattern", "flags"],
      deprecatedAlias: "RegexLiteral",
      aliases: ["Expression", "Literal"],
      fields: {
        pattern: {
          validate: (0, _index2.assertValueType)("string")
        },
        flags: {
          validate: (0, _index2.assertValueType)("string"),
          default: ""
        }
      }
    });
    (0, _index3.default)("LogicalExpression", {
      builder: ["operator", "left", "right"],
      visitor: ["left", "right"],
      aliases: ["Binary", "Expression"],
      fields: {
        operator: {
          validate: _index2.assertOneOf.apply(void 0, _constants.LOGICAL_OPERATORS)
        },
        left: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        right: {
          validate: (0, _index2.assertNodeType)("Expression")
        }
      }
    });
    (0, _index3.default)("MemberExpression", {
      builder: ["object", "property", "computed"],
      visitor: ["object", "property"],
      aliases: ["Expression", "LVal"],
      fields: {
        object: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        property: {
          validate: function validate(node, key, val) {
            var expectedType = node.computed ? "Expression" : "Identifier";
            (0, _index2.assertNodeType)(expectedType)(node, key, val);
          }
        },
        computed: {
          default: false
        }
      }
    });
    (0, _index3.default)("NewExpression", {
      visitor: ["callee", "arguments"],
      aliases: ["Expression"],
      fields: {
        callee: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        arguments: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
        }
      }
    });
    (0, _index3.default)("Program", {
      visitor: ["directives", "body"],
      builder: ["body", "directives"],
      fields: {
        directives: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
          default: []
        },
        body: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
        }
      },
      aliases: ["Scopable", "BlockParent", "Block", "FunctionParent"]
    });
    (0, _index3.default)("ObjectExpression", {
      visitor: ["properties"],
      aliases: ["Expression"],
      fields: {
        properties: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadProperty")))
        }
      }
    });
    (0, _index3.default)("ObjectMethod", {
      builder: ["kind", "key", "params", "body", "computed"],
      fields: {
        kind: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("method", "get", "set")),
          default: "method"
        },
        computed: {
          validate: (0, _index2.assertValueType)("boolean"),
          default: false
        },
        key: {
          validate: function validate(node, key, val) {
            var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
            _index2.assertNodeType.apply(void 0, expectedTypes)(node, key, val);
          }
        },
        decorators: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
        },
        body: {
          validate: (0, _index2.assertNodeType)("BlockStatement")
        },
        generator: {
          default: false,
          validate: (0, _index2.assertValueType)("boolean")
        },
        async: {
          default: false,
          validate: (0, _index2.assertValueType)("boolean")
        }
      },
      visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
      aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
    });
    (0, _index3.default)("ObjectProperty", {
      builder: ["key", "value", "computed", "shorthand", "decorators"],
      fields: {
        computed: {
          validate: (0, _index2.assertValueType)("boolean"),
          default: false
        },
        key: {
          validate: function validate(node, key, val) {
            var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
            _index2.assertNodeType.apply(void 0, expectedTypes)(node, key, val);
          }
        },
        value: {
          validate: (0, _index2.assertNodeType)("Expression", "Pattern", "RestElement")
        },
        shorthand: {
          validate: (0, _index2.assertValueType)("boolean"),
          default: false
        },
        decorators: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator"))),
          optional: true
        }
      },
      visitor: ["key", "value", "decorators"],
      aliases: ["UserWhitespacable", "Property", "ObjectMember"]
    });
    (0, _index3.default)("RestElement", {
      visitor: ["argument", "typeAnnotation"],
      aliases: ["LVal"],
      fields: {
        argument: {
          validate: (0, _index2.assertNodeType)("LVal")
        },
        decorators: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
        }
      }
    });
    (0, _index3.default)("ReturnStatement", {
      visitor: ["argument"],
      aliases: ["Statement", "Terminatorless", "CompletionStatement"],
      fields: {
        argument: {
          validate: (0, _index2.assertNodeType)("Expression"),
          optional: true
        }
      }
    });
    (0, _index3.default)("SequenceExpression", {
      visitor: ["expressions"],
      fields: {
        expressions: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression")))
        }
      },
      aliases: ["Expression"]
    });
    (0, _index3.default)("SwitchCase", {
      visitor: ["test", "consequent"],
      fields: {
        test: {
          validate: (0, _index2.assertNodeType)("Expression"),
          optional: true
        },
        consequent: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
        }
      }
    });
    (0, _index3.default)("SwitchStatement", {
      visitor: ["discriminant", "cases"],
      aliases: ["Statement", "BlockParent", "Scopable"],
      fields: {
        discriminant: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        cases: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("SwitchCase")))
        }
      }
    });
    (0, _index3.default)("ThisExpression", {
      aliases: ["Expression"]
    });
    (0, _index3.default)("ThrowStatement", {
      visitor: ["argument"],
      aliases: ["Statement", "Terminatorless", "CompletionStatement"],
      fields: {
        argument: {
          validate: (0, _index2.assertNodeType)("Expression")
        }
      }
    });
    (0, _index3.default)("TryStatement", {
      visitor: ["block", "handler", "finalizer"],
      aliases: ["Statement"],
      fields: {
        body: {
          validate: (0, _index2.assertNodeType)("BlockStatement")
        },
        handler: {
          optional: true,
          handler: (0, _index2.assertNodeType)("BlockStatement")
        },
        finalizer: {
          optional: true,
          validate: (0, _index2.assertNodeType)("BlockStatement")
        }
      }
    });
    (0, _index3.default)("UnaryExpression", {
      builder: ["operator", "argument", "prefix"],
      fields: {
        prefix: {
          default: true
        },
        argument: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        operator: {
          validate: _index2.assertOneOf.apply(void 0, _constants.UNARY_OPERATORS)
        }
      },
      visitor: ["argument"],
      aliases: ["UnaryLike", "Expression"]
    });
    (0, _index3.default)("UpdateExpression", {
      builder: ["operator", "argument", "prefix"],
      fields: {
        prefix: {
          default: false
        },
        argument: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        operator: {
          validate: _index2.assertOneOf.apply(void 0, _constants.UPDATE_OPERATORS)
        }
      },
      visitor: ["argument"],
      aliases: ["Expression"]
    });
    (0, _index3.default)("VariableDeclaration", {
      builder: ["kind", "declarations"],
      visitor: ["declarations"],
      aliases: ["Statement", "Declaration"],
      fields: {
        kind: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("var", "let", "const"))
        },
        declarations: {
          validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("VariableDeclarator")))
        }
      }
    });
    (0, _index3.default)("VariableDeclarator", {
      visitor: ["id", "init"],
      fields: {
        id: {
          validate: (0, _index2.assertNodeType)("LVal")
        },
        init: {
          optional: true,
          validate: (0, _index2.assertNodeType)("Expression")
        }
      }
    });
    (0, _index3.default)("WhileStatement", {
      visitor: ["test", "body"],
      aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
      fields: {
        test: {
          validate: (0, _index2.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
        }
      }
    });
    (0, _index3.default)("WithStatement", {
      visitor: ["object", "body"],
      aliases: ["Statement"],
      fields: {
        object: {
          object: (0, _index2.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
        }
      }
    });
  }
});

// node_modules/babel-types/lib/definitions/es2015.js
var require_es2015 = __commonJS({
  "node_modules/babel-types/lib/definitions/es2015.js"() {
    "use strict";
    var _index = require_definitions();
    var _index2 = _interopRequireDefault(_index);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    (0, _index2.default)("AssignmentPattern", {
      visitor: ["left", "right"],
      aliases: ["Pattern", "LVal"],
      fields: {
        left: {
          validate: (0, _index.assertNodeType)("Identifier")
        },
        right: {
          validate: (0, _index.assertNodeType)("Expression")
        },
        decorators: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
        }
      }
    });
    (0, _index2.default)("ArrayPattern", {
      visitor: ["elements", "typeAnnotation"],
      aliases: ["Pattern", "LVal"],
      fields: {
        elements: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Identifier", "Pattern", "RestElement")))
        },
        decorators: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
        }
      }
    });
    (0, _index2.default)("ArrowFunctionExpression", {
      builder: ["params", "body", "async"],
      visitor: ["params", "body", "returnType", "typeParameters"],
      aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
      fields: {
        params: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("LVal")))
        },
        body: {
          validate: (0, _index.assertNodeType)("BlockStatement", "Expression")
        },
        async: {
          validate: (0, _index.assertValueType)("boolean"),
          default: false
        }
      }
    });
    (0, _index2.default)("ClassBody", {
      visitor: ["body"],
      fields: {
        body: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ClassMethod", "ClassProperty")))
        }
      }
    });
    (0, _index2.default)("ClassDeclaration", {
      builder: ["id", "superClass", "body", "decorators"],
      visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
      aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
      fields: {
        id: {
          validate: (0, _index.assertNodeType)("Identifier")
        },
        body: {
          validate: (0, _index.assertNodeType)("ClassBody")
        },
        superClass: {
          optional: true,
          validate: (0, _index.assertNodeType)("Expression")
        },
        decorators: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
        }
      }
    });
    (0, _index2.default)("ClassExpression", {
      inherits: "ClassDeclaration",
      aliases: ["Scopable", "Class", "Expression", "Pureish"],
      fields: {
        id: {
          optional: true,
          validate: (0, _index.assertNodeType)("Identifier")
        },
        body: {
          validate: (0, _index.assertNodeType)("ClassBody")
        },
        superClass: {
          optional: true,
          validate: (0, _index.assertNodeType)("Expression")
        },
        decorators: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
        }
      }
    });
    (0, _index2.default)("ExportAllDeclaration", {
      visitor: ["source"],
      aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
      fields: {
        source: {
          validate: (0, _index.assertNodeType)("StringLiteral")
        }
      }
    });
    (0, _index2.default)("ExportDefaultDeclaration", {
      visitor: ["declaration"],
      aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
      fields: {
        declaration: {
          validate: (0, _index.assertNodeType)("FunctionDeclaration", "ClassDeclaration", "Expression")
        }
      }
    });
    (0, _index2.default)("ExportNamedDeclaration", {
      visitor: ["declaration", "specifiers", "source"],
      aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
      fields: {
        declaration: {
          validate: (0, _index.assertNodeType)("Declaration"),
          optional: true
        },
        specifiers: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ExportSpecifier")))
        },
        source: {
          validate: (0, _index.assertNodeType)("StringLiteral"),
          optional: true
        }
      }
    });
    (0, _index2.default)("ExportSpecifier", {
      visitor: ["local", "exported"],
      aliases: ["ModuleSpecifier"],
      fields: {
        local: {
          validate: (0, _index.assertNodeType)("Identifier")
        },
        exported: {
          validate: (0, _index.assertNodeType)("Identifier")
        }
      }
    });
    (0, _index2.default)("ForOfStatement", {
      visitor: ["left", "right", "body"],
      aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
      fields: {
        left: {
          validate: (0, _index.assertNodeType)("VariableDeclaration", "LVal")
        },
        right: {
          validate: (0, _index.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _index.assertNodeType)("Statement")
        }
      }
    });
    (0, _index2.default)("ImportDeclaration", {
      visitor: ["specifiers", "source"],
      aliases: ["Statement", "Declaration", "ModuleDeclaration"],
      fields: {
        specifiers: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
        },
        source: {
          validate: (0, _index.assertNodeType)("StringLiteral")
        }
      }
    });
    (0, _index2.default)("ImportDefaultSpecifier", {
      visitor: ["local"],
      aliases: ["ModuleSpecifier"],
      fields: {
        local: {
          validate: (0, _index.assertNodeType)("Identifier")
        }
      }
    });
    (0, _index2.default)("ImportNamespaceSpecifier", {
      visitor: ["local"],
      aliases: ["ModuleSpecifier"],
      fields: {
        local: {
          validate: (0, _index.assertNodeType)("Identifier")
        }
      }
    });
    (0, _index2.default)("ImportSpecifier", {
      visitor: ["local", "imported"],
      aliases: ["ModuleSpecifier"],
      fields: {
        local: {
          validate: (0, _index.assertNodeType)("Identifier")
        },
        imported: {
          validate: (0, _index.assertNodeType)("Identifier")
        },
        importKind: {
          validate: (0, _index.assertOneOf)(null, "type", "typeof")
        }
      }
    });
    (0, _index2.default)("MetaProperty", {
      visitor: ["meta", "property"],
      aliases: ["Expression"],
      fields: {
        meta: {
          validate: (0, _index.assertValueType)("string")
        },
        property: {
          validate: (0, _index.assertValueType)("string")
        }
      }
    });
    (0, _index2.default)("ClassMethod", {
      aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
      builder: ["kind", "key", "params", "body", "computed", "static"],
      visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
      fields: {
        kind: {
          validate: (0, _index.chain)((0, _index.assertValueType)("string"), (0, _index.assertOneOf)("get", "set", "method", "constructor")),
          default: "method"
        },
        computed: {
          default: false,
          validate: (0, _index.assertValueType)("boolean")
        },
        static: {
          default: false,
          validate: (0, _index.assertValueType)("boolean")
        },
        key: {
          validate: function validate(node, key, val) {
            var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
            _index.assertNodeType.apply(void 0, expectedTypes)(node, key, val);
          }
        },
        params: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("LVal")))
        },
        body: {
          validate: (0, _index.assertNodeType)("BlockStatement")
        },
        generator: {
          default: false,
          validate: (0, _index.assertValueType)("boolean")
        },
        async: {
          default: false,
          validate: (0, _index.assertValueType)("boolean")
        }
      }
    });
    (0, _index2.default)("ObjectPattern", {
      visitor: ["properties", "typeAnnotation"],
      aliases: ["Pattern", "LVal"],
      fields: {
        properties: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("RestProperty", "Property")))
        },
        decorators: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
        }
      }
    });
    (0, _index2.default)("SpreadElement", {
      visitor: ["argument"],
      aliases: ["UnaryLike"],
      fields: {
        argument: {
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
    (0, _index2.default)("Super", {
      aliases: ["Expression"]
    });
    (0, _index2.default)("TaggedTemplateExpression", {
      visitor: ["tag", "quasi"],
      aliases: ["Expression"],
      fields: {
        tag: {
          validate: (0, _index.assertNodeType)("Expression")
        },
        quasi: {
          validate: (0, _index.assertNodeType)("TemplateLiteral")
        }
      }
    });
    (0, _index2.default)("TemplateElement", {
      builder: ["value", "tail"],
      fields: {
        value: {},
        tail: {
          validate: (0, _index.assertValueType)("boolean"),
          default: false
        }
      }
    });
    (0, _index2.default)("TemplateLiteral", {
      visitor: ["quasis", "expressions"],
      aliases: ["Expression", "Literal"],
      fields: {
        quasis: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("TemplateElement")))
        },
        expressions: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Expression")))
        }
      }
    });
    (0, _index2.default)("YieldExpression", {
      builder: ["argument", "delegate"],
      visitor: ["argument"],
      aliases: ["Expression", "Terminatorless"],
      fields: {
        delegate: {
          validate: (0, _index.assertValueType)("boolean"),
          default: false
        },
        argument: {
          optional: true,
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
  }
});

// node_modules/babel-types/lib/definitions/flow.js
var require_flow2 = __commonJS({
  "node_modules/babel-types/lib/definitions/flow.js"() {
    "use strict";
    var _index = require_definitions();
    var _index2 = _interopRequireDefault(_index);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    (0, _index2.default)("AnyTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"],
      fields: {}
    });
    (0, _index2.default)("ArrayTypeAnnotation", {
      visitor: ["elementType"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("BooleanTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"],
      fields: {}
    });
    (0, _index2.default)("BooleanLiteralTypeAnnotation", {
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("NullLiteralTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"],
      fields: {}
    });
    (0, _index2.default)("ClassImplements", {
      visitor: ["id", "typeParameters"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("ClassProperty", {
      visitor: ["key", "value", "typeAnnotation", "decorators"],
      builder: ["key", "value", "typeAnnotation", "decorators", "computed"],
      aliases: ["Property"],
      fields: {
        computed: {
          validate: (0, _index.assertValueType)("boolean"),
          default: false
        }
      }
    });
    (0, _index2.default)("DeclareClass", {
      visitor: ["id", "typeParameters", "extends", "body"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("DeclareFunction", {
      visitor: ["id"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("DeclareInterface", {
      visitor: ["id", "typeParameters", "extends", "body"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("DeclareModule", {
      visitor: ["id", "body"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("DeclareModuleExports", {
      visitor: ["typeAnnotation"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("DeclareTypeAlias", {
      visitor: ["id", "typeParameters", "right"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("DeclareOpaqueType", {
      visitor: ["id", "typeParameters", "supertype"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("DeclareVariable", {
      visitor: ["id"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("DeclareExportDeclaration", {
      visitor: ["declaration", "specifiers", "source"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("ExistentialTypeParam", {
      aliases: ["Flow"]
    });
    (0, _index2.default)("FunctionTypeAnnotation", {
      visitor: ["typeParameters", "params", "rest", "returnType"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("FunctionTypeParam", {
      visitor: ["name", "typeAnnotation"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("GenericTypeAnnotation", {
      visitor: ["id", "typeParameters"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("InterfaceExtends", {
      visitor: ["id", "typeParameters"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("InterfaceDeclaration", {
      visitor: ["id", "typeParameters", "extends", "body"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("IntersectionTypeAnnotation", {
      visitor: ["types"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("MixedTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"]
    });
    (0, _index2.default)("EmptyTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"]
    });
    (0, _index2.default)("NullableTypeAnnotation", {
      visitor: ["typeAnnotation"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("NumericLiteralTypeAnnotation", {
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("NumberTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"],
      fields: {}
    });
    (0, _index2.default)("StringLiteralTypeAnnotation", {
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("StringTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"],
      fields: {}
    });
    (0, _index2.default)("ThisTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"],
      fields: {}
    });
    (0, _index2.default)("TupleTypeAnnotation", {
      visitor: ["types"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("TypeofTypeAnnotation", {
      visitor: ["argument"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("TypeAlias", {
      visitor: ["id", "typeParameters", "right"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("OpaqueType", {
      visitor: ["id", "typeParameters", "impltype", "supertype"],
      aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
      fields: {}
    });
    (0, _index2.default)("TypeAnnotation", {
      visitor: ["typeAnnotation"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("TypeCastExpression", {
      visitor: ["expression", "typeAnnotation"],
      aliases: ["Flow", "ExpressionWrapper", "Expression"],
      fields: {}
    });
    (0, _index2.default)("TypeParameter", {
      visitor: ["bound"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("TypeParameterDeclaration", {
      visitor: ["params"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("TypeParameterInstantiation", {
      visitor: ["params"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("ObjectTypeAnnotation", {
      visitor: ["properties", "indexers", "callProperties"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("ObjectTypeCallProperty", {
      visitor: ["value"],
      aliases: ["Flow", "UserWhitespacable"],
      fields: {}
    });
    (0, _index2.default)("ObjectTypeIndexer", {
      visitor: ["id", "key", "value"],
      aliases: ["Flow", "UserWhitespacable"],
      fields: {}
    });
    (0, _index2.default)("ObjectTypeProperty", {
      visitor: ["key", "value"],
      aliases: ["Flow", "UserWhitespacable"],
      fields: {}
    });
    (0, _index2.default)("ObjectTypeSpreadProperty", {
      visitor: ["argument"],
      aliases: ["Flow", "UserWhitespacable"],
      fields: {}
    });
    (0, _index2.default)("QualifiedTypeIdentifier", {
      visitor: ["id", "qualification"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("UnionTypeAnnotation", {
      visitor: ["types"],
      aliases: ["Flow"],
      fields: {}
    });
    (0, _index2.default)("VoidTypeAnnotation", {
      aliases: ["Flow", "FlowBaseAnnotation"],
      fields: {}
    });
  }
});

// node_modules/babel-types/lib/definitions/jsx.js
var require_jsx = __commonJS({
  "node_modules/babel-types/lib/definitions/jsx.js"() {
    "use strict";
    var _index = require_definitions();
    var _index2 = _interopRequireDefault(_index);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    (0, _index2.default)("JSXAttribute", {
      visitor: ["name", "value"],
      aliases: ["JSX", "Immutable"],
      fields: {
        name: {
          validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
        },
        value: {
          optional: true,
          validate: (0, _index.assertNodeType)("JSXElement", "StringLiteral", "JSXExpressionContainer")
        }
      }
    });
    (0, _index2.default)("JSXClosingElement", {
      visitor: ["name"],
      aliases: ["JSX", "Immutable"],
      fields: {
        name: {
          validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
        }
      }
    });
    (0, _index2.default)("JSXElement", {
      builder: ["openingElement", "closingElement", "children", "selfClosing"],
      visitor: ["openingElement", "children", "closingElement"],
      aliases: ["JSX", "Immutable", "Expression"],
      fields: {
        openingElement: {
          validate: (0, _index.assertNodeType)("JSXOpeningElement")
        },
        closingElement: {
          optional: true,
          validate: (0, _index.assertNodeType)("JSXClosingElement")
        },
        children: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement")))
        }
      }
    });
    (0, _index2.default)("JSXEmptyExpression", {
      aliases: ["JSX", "Expression"]
    });
    (0, _index2.default)("JSXExpressionContainer", {
      visitor: ["expression"],
      aliases: ["JSX", "Immutable"],
      fields: {
        expression: {
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
    (0, _index2.default)("JSXSpreadChild", {
      visitor: ["expression"],
      aliases: ["JSX", "Immutable"],
      fields: {
        expression: {
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
    (0, _index2.default)("JSXIdentifier", {
      builder: ["name"],
      aliases: ["JSX", "Expression"],
      fields: {
        name: {
          validate: (0, _index.assertValueType)("string")
        }
      }
    });
    (0, _index2.default)("JSXMemberExpression", {
      visitor: ["object", "property"],
      aliases: ["JSX", "Expression"],
      fields: {
        object: {
          validate: (0, _index.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
        },
        property: {
          validate: (0, _index.assertNodeType)("JSXIdentifier")
        }
      }
    });
    (0, _index2.default)("JSXNamespacedName", {
      visitor: ["namespace", "name"],
      aliases: ["JSX"],
      fields: {
        namespace: {
          validate: (0, _index.assertNodeType)("JSXIdentifier")
        },
        name: {
          validate: (0, _index.assertNodeType)("JSXIdentifier")
        }
      }
    });
    (0, _index2.default)("JSXOpeningElement", {
      builder: ["name", "attributes", "selfClosing"],
      visitor: ["name", "attributes"],
      aliases: ["JSX", "Immutable"],
      fields: {
        name: {
          validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
        },
        selfClosing: {
          default: false,
          validate: (0, _index.assertValueType)("boolean")
        },
        attributes: {
          validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
        }
      }
    });
    (0, _index2.default)("JSXSpreadAttribute", {
      visitor: ["argument"],
      aliases: ["JSX"],
      fields: {
        argument: {
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
    (0, _index2.default)("JSXText", {
      aliases: ["JSX", "Immutable"],
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _index.assertValueType)("string")
        }
      }
    });
  }
});

// node_modules/babel-types/lib/definitions/misc.js
var require_misc = __commonJS({
  "node_modules/babel-types/lib/definitions/misc.js"() {
    "use strict";
    var _index = require_definitions();
    var _index2 = _interopRequireDefault(_index);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    (0, _index2.default)("Noop", {
      visitor: []
    });
    (0, _index2.default)("ParenthesizedExpression", {
      visitor: ["expression"],
      aliases: ["Expression", "ExpressionWrapper"],
      fields: {
        expression: {
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
  }
});

// node_modules/babel-types/lib/definitions/experimental.js
var require_experimental = __commonJS({
  "node_modules/babel-types/lib/definitions/experimental.js"() {
    "use strict";
    var _index = require_definitions();
    var _index2 = _interopRequireDefault(_index);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    (0, _index2.default)("AwaitExpression", {
      builder: ["argument"],
      visitor: ["argument"],
      aliases: ["Expression", "Terminatorless"],
      fields: {
        argument: {
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
    (0, _index2.default)("ForAwaitStatement", {
      visitor: ["left", "right", "body"],
      aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
      fields: {
        left: {
          validate: (0, _index.assertNodeType)("VariableDeclaration", "LVal")
        },
        right: {
          validate: (0, _index.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _index.assertNodeType)("Statement")
        }
      }
    });
    (0, _index2.default)("BindExpression", {
      visitor: ["object", "callee"],
      aliases: ["Expression"],
      fields: {}
    });
    (0, _index2.default)("Import", {
      aliases: ["Expression"]
    });
    (0, _index2.default)("Decorator", {
      visitor: ["expression"],
      fields: {
        expression: {
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
    (0, _index2.default)("DoExpression", {
      visitor: ["body"],
      aliases: ["Expression"],
      fields: {
        body: {
          validate: (0, _index.assertNodeType)("BlockStatement")
        }
      }
    });
    (0, _index2.default)("ExportDefaultSpecifier", {
      visitor: ["exported"],
      aliases: ["ModuleSpecifier"],
      fields: {
        exported: {
          validate: (0, _index.assertNodeType)("Identifier")
        }
      }
    });
    (0, _index2.default)("ExportNamespaceSpecifier", {
      visitor: ["exported"],
      aliases: ["ModuleSpecifier"],
      fields: {
        exported: {
          validate: (0, _index.assertNodeType)("Identifier")
        }
      }
    });
    (0, _index2.default)("RestProperty", {
      visitor: ["argument"],
      aliases: ["UnaryLike"],
      fields: {
        argument: {
          validate: (0, _index.assertNodeType)("LVal")
        }
      }
    });
    (0, _index2.default)("SpreadProperty", {
      visitor: ["argument"],
      aliases: ["UnaryLike"],
      fields: {
        argument: {
          validate: (0, _index.assertNodeType)("Expression")
        }
      }
    });
  }
});

// node_modules/babel-types/lib/definitions/init.js
var require_init = __commonJS({
  "node_modules/babel-types/lib/definitions/init.js"() {
    "use strict";
    require_definitions();
    require_core2();
    require_es2015();
    require_flow2();
    require_jsx();
    require_misc();
    require_experimental();
  }
});

// node_modules/babel-types/lib/react.js
var require_react = __commonJS({
  "node_modules/babel-types/lib/react.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.isReactComponent = void 0;
    exports2.isCompatTag = isCompatTag;
    exports2.buildChildren = buildChildren;
    var _index = require_lib();
    var t4 = _interopRequireWildcard(_index);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    var isReactComponent = exports2.isReactComponent = t4.buildMatchMemberExpression("React.Component");
    function isCompatTag(tagName) {
      return !!tagName && /^[a-z]|\-/.test(tagName);
    }
    function cleanJSXElementLiteralChild(child, args) {
      var lines = child.value.split(/\r\n|\n|\r/);
      var lastNonEmptyLine = 0;
      for (var i = 0; i < lines.length; i++) {
        if (lines[i].match(/[^ \t]/)) {
          lastNonEmptyLine = i;
        }
      }
      var str = "";
      for (var _i = 0; _i < lines.length; _i++) {
        var line = lines[_i];
        var isFirstLine = _i === 0;
        var isLastLine = _i === lines.length - 1;
        var isLastNonEmptyLine = _i === lastNonEmptyLine;
        var trimmedLine = line.replace(/\t/g, " ");
        if (!isFirstLine) {
          trimmedLine = trimmedLine.replace(/^[ ]+/, "");
        }
        if (!isLastLine) {
          trimmedLine = trimmedLine.replace(/[ ]+$/, "");
        }
        if (trimmedLine) {
          if (!isLastNonEmptyLine) {
            trimmedLine += " ";
          }
          str += trimmedLine;
        }
      }
      if (str)
        args.push(t4.stringLiteral(str));
    }
    function buildChildren(node) {
      var elems = [];
      for (var i = 0; i < node.children.length; i++) {
        var child = node.children[i];
        if (t4.isJSXText(child)) {
          cleanJSXElementLiteralChild(child, elems);
          continue;
        }
        if (t4.isJSXExpressionContainer(child))
          child = child.expression;
        if (t4.isJSXEmptyExpression(child))
          continue;
        elems.push(child);
      }
      return elems;
    }
  }
});

// node_modules/babel-types/lib/index.js
var require_lib = __commonJS({
  "node_modules/babel-types/lib/index.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.createTypeAnnotationBasedOnTypeof = exports2.removeTypeDuplicates = exports2.createUnionTypeAnnotation = exports2.valueToNode = exports2.toBlock = exports2.toExpression = exports2.toStatement = exports2.toBindingIdentifierName = exports2.toIdentifier = exports2.toKeyAlias = exports2.toSequenceExpression = exports2.toComputedKey = exports2.isNodesEquivalent = exports2.isImmutable = exports2.isScope = exports2.isSpecifierDefault = exports2.isVar = exports2.isBlockScoped = exports2.isLet = exports2.isValidIdentifier = exports2.isReferenced = exports2.isBinding = exports2.getOuterBindingIdentifiers = exports2.getBindingIdentifiers = exports2.TYPES = exports2.react = exports2.DEPRECATED_KEYS = exports2.BUILDER_KEYS = exports2.NODE_FIELDS = exports2.ALIAS_KEYS = exports2.VISITOR_KEYS = exports2.NOT_LOCAL_BINDING = exports2.BLOCK_SCOPED_SYMBOL = exports2.INHERIT_KEYS = exports2.UNARY_OPERATORS = exports2.STRING_UNARY_OPERATORS = exports2.NUMBER_UNARY_OPERATORS = exports2.BOOLEAN_UNARY_OPERATORS = exports2.BINARY_OPERATORS = exports2.NUMBER_BINARY_OPERATORS = exports2.BOOLEAN_BINARY_OPERATORS = exports2.COMPARISON_BINARY_OPERATORS = exports2.EQUALITY_BINARY_OPERATORS = exports2.BOOLEAN_NUMBER_BINARY_OPERATORS = exports2.UPDATE_OPERATORS = exports2.LOGICAL_OPERATORS = exports2.COMMENT_KEYS = exports2.FOR_INIT_KEYS = exports2.FLATTENABLE_KEYS = exports2.STATEMENT_OR_BLOCK_KEYS = void 0;
    var _getOwnPropertySymbols = require_get_own_property_symbols2();
    var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    var _keys = require_keys2();
    var _keys2 = _interopRequireDefault(_keys);
    var _stringify = require_stringify2();
    var _stringify2 = _interopRequireDefault(_stringify);
    var _constants = require_constants();
    Object.defineProperty(exports2, "STATEMENT_OR_BLOCK_KEYS", {
      enumerable: true,
      get: function get() {
        return _constants.STATEMENT_OR_BLOCK_KEYS;
      }
    });
    Object.defineProperty(exports2, "FLATTENABLE_KEYS", {
      enumerable: true,
      get: function get() {
        return _constants.FLATTENABLE_KEYS;
      }
    });
    Object.defineProperty(exports2, "FOR_INIT_KEYS", {
      enumerable: true,
      get: function get() {
        return _constants.FOR_INIT_KEYS;
      }
    });
    Object.defineProperty(exports2, "COMMENT_KEYS", {
      enumerable: true,
      get: function get() {
        return _constants.COMMENT_KEYS;
      }
    });
    Object.defineProperty(exports2, "LOGICAL_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.LOGICAL_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "UPDATE_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.UPDATE_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "BOOLEAN_NUMBER_BINARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "EQUALITY_BINARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.EQUALITY_BINARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "COMPARISON_BINARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.COMPARISON_BINARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "BOOLEAN_BINARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.BOOLEAN_BINARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "NUMBER_BINARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.NUMBER_BINARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "BINARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.BINARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "BOOLEAN_UNARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.BOOLEAN_UNARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "NUMBER_UNARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.NUMBER_UNARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "STRING_UNARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.STRING_UNARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "UNARY_OPERATORS", {
      enumerable: true,
      get: function get() {
        return _constants.UNARY_OPERATORS;
      }
    });
    Object.defineProperty(exports2, "INHERIT_KEYS", {
      enumerable: true,
      get: function get() {
        return _constants.INHERIT_KEYS;
      }
    });
    Object.defineProperty(exports2, "BLOCK_SCOPED_SYMBOL", {
      enumerable: true,
      get: function get() {
        return _constants.BLOCK_SCOPED_SYMBOL;
      }
    });
    Object.defineProperty(exports2, "NOT_LOCAL_BINDING", {
      enumerable: true,
      get: function get() {
        return _constants.NOT_LOCAL_BINDING;
      }
    });
    exports2.is = is;
    exports2.isType = isType;
    exports2.validate = validate;
    exports2.shallowEqual = shallowEqual;
    exports2.appendToMemberExpression = appendToMemberExpression;
    exports2.prependToMemberExpression = prependToMemberExpression;
    exports2.ensureBlock = ensureBlock;
    exports2.clone = clone;
    exports2.cloneWithoutLoc = cloneWithoutLoc;
    exports2.cloneDeep = cloneDeep;
    exports2.buildMatchMemberExpression = buildMatchMemberExpression;
    exports2.removeComments = removeComments;
    exports2.inheritsComments = inheritsComments;
    exports2.inheritTrailingComments = inheritTrailingComments;
    exports2.inheritLeadingComments = inheritLeadingComments;
    exports2.inheritInnerComments = inheritInnerComments;
    exports2.inherits = inherits;
    exports2.assertNode = assertNode;
    exports2.isNode = isNode;
    exports2.traverseFast = traverseFast;
    exports2.removeProperties = removeProperties;
    exports2.removePropertiesDeep = removePropertiesDeep;
    var _retrievers = require_retrievers();
    Object.defineProperty(exports2, "getBindingIdentifiers", {
      enumerable: true,
      get: function get() {
        return _retrievers.getBindingIdentifiers;
      }
    });
    Object.defineProperty(exports2, "getOuterBindingIdentifiers", {
      enumerable: true,
      get: function get() {
        return _retrievers.getOuterBindingIdentifiers;
      }
    });
    var _validators = require_validators();
    Object.defineProperty(exports2, "isBinding", {
      enumerable: true,
      get: function get() {
        return _validators.isBinding;
      }
    });
    Object.defineProperty(exports2, "isReferenced", {
      enumerable: true,
      get: function get() {
        return _validators.isReferenced;
      }
    });
    Object.defineProperty(exports2, "isValidIdentifier", {
      enumerable: true,
      get: function get() {
        return _validators.isValidIdentifier;
      }
    });
    Object.defineProperty(exports2, "isLet", {
      enumerable: true,
      get: function get() {
        return _validators.isLet;
      }
    });
    Object.defineProperty(exports2, "isBlockScoped", {
      enumerable: true,
      get: function get() {
        return _validators.isBlockScoped;
      }
    });
    Object.defineProperty(exports2, "isVar", {
      enumerable: true,
      get: function get() {
        return _validators.isVar;
      }
    });
    Object.defineProperty(exports2, "isSpecifierDefault", {
      enumerable: true,
      get: function get() {
        return _validators.isSpecifierDefault;
      }
    });
    Object.defineProperty(exports2, "isScope", {
      enumerable: true,
      get: function get() {
        return _validators.isScope;
      }
    });
    Object.defineProperty(exports2, "isImmutable", {
      enumerable: true,
      get: function get() {
        return _validators.isImmutable;
      }
    });
    Object.defineProperty(exports2, "isNodesEquivalent", {
      enumerable: true,
      get: function get() {
        return _validators.isNodesEquivalent;
      }
    });
    var _converters = require_converters();
    Object.defineProperty(exports2, "toComputedKey", {
      enumerable: true,
      get: function get() {
        return _converters.toComputedKey;
      }
    });
    Object.defineProperty(exports2, "toSequenceExpression", {
      enumerable: true,
      get: function get() {
        return _converters.toSequenceExpression;
      }
    });
    Object.defineProperty(exports2, "toKeyAlias", {
      enumerable: true,
      get: function get() {
        return _converters.toKeyAlias;
      }
    });
    Object.defineProperty(exports2, "toIdentifier", {
      enumerable: true,
      get: function get() {
        return _converters.toIdentifier;
      }
    });
    Object.defineProperty(exports2, "toBindingIdentifierName", {
      enumerable: true,
      get: function get() {
        return _converters.toBindingIdentifierName;
      }
    });
    Object.defineProperty(exports2, "toStatement", {
      enumerable: true,
      get: function get() {
        return _converters.toStatement;
      }
    });
    Object.defineProperty(exports2, "toExpression", {
      enumerable: true,
      get: function get() {
        return _converters.toExpression;
      }
    });
    Object.defineProperty(exports2, "toBlock", {
      enumerable: true,
      get: function get() {
        return _converters.toBlock;
      }
    });
    Object.defineProperty(exports2, "valueToNode", {
      enumerable: true,
      get: function get() {
        return _converters.valueToNode;
      }
    });
    var _flow = require_flow();
    Object.defineProperty(exports2, "createUnionTypeAnnotation", {
      enumerable: true,
      get: function get() {
        return _flow.createUnionTypeAnnotation;
      }
    });
    Object.defineProperty(exports2, "removeTypeDuplicates", {
      enumerable: true,
      get: function get() {
        return _flow.removeTypeDuplicates;
      }
    });
    Object.defineProperty(exports2, "createTypeAnnotationBasedOnTypeof", {
      enumerable: true,
      get: function get() {
        return _flow.createTypeAnnotationBasedOnTypeof;
      }
    });
    var _toFastProperties = require_to_fast_properties();
    var _toFastProperties2 = _interopRequireDefault(_toFastProperties);
    var _clone = require_clone();
    var _clone2 = _interopRequireDefault(_clone);
    var _uniq = require_uniq();
    var _uniq2 = _interopRequireDefault(_uniq);
    require_init();
    var _definitions = require_definitions();
    var _react2 = require_react();
    var _react = _interopRequireWildcard(_react2);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var t4 = exports2;
    function registerType(type2) {
      var is2 = t4["is" + type2];
      if (!is2) {
        is2 = t4["is" + type2] = function(node, opts) {
          return t4.is(type2, node, opts);
        };
      }
      t4["assert" + type2] = function(node, opts) {
        opts = opts || {};
        if (!is2(node, opts)) {
          throw new Error("Expected type " + (0, _stringify2.default)(type2) + " with option " + (0, _stringify2.default)(opts));
        }
      };
    }
    exports2.VISITOR_KEYS = _definitions.VISITOR_KEYS;
    exports2.ALIAS_KEYS = _definitions.ALIAS_KEYS;
    exports2.NODE_FIELDS = _definitions.NODE_FIELDS;
    exports2.BUILDER_KEYS = _definitions.BUILDER_KEYS;
    exports2.DEPRECATED_KEYS = _definitions.DEPRECATED_KEYS;
    exports2.react = _react;
    for (type in t4.VISITOR_KEYS) {
      registerType(type);
    }
    var type;
    t4.FLIPPED_ALIAS_KEYS = {};
    (0, _keys2.default)(t4.ALIAS_KEYS).forEach(function(type2) {
      t4.ALIAS_KEYS[type2].forEach(function(alias) {
        var types = t4.FLIPPED_ALIAS_KEYS[alias] = t4.FLIPPED_ALIAS_KEYS[alias] || [];
        types.push(type2);
      });
    });
    (0, _keys2.default)(t4.FLIPPED_ALIAS_KEYS).forEach(function(type2) {
      t4[type2.toUpperCase() + "_TYPES"] = t4.FLIPPED_ALIAS_KEYS[type2];
      registerType(type2);
    });
    var TYPES = exports2.TYPES = (0, _keys2.default)(t4.VISITOR_KEYS).concat((0, _keys2.default)(t4.FLIPPED_ALIAS_KEYS)).concat((0, _keys2.default)(t4.DEPRECATED_KEYS));
    function is(type2, node, opts) {
      if (!node)
        return false;
      var matches = isType(node.type, type2);
      if (!matches)
        return false;
      if (typeof opts === "undefined") {
        return true;
      } else {
        return t4.shallowEqual(node, opts);
      }
    }
    function isType(nodeType, targetType) {
      if (nodeType === targetType)
        return true;
      if (t4.ALIAS_KEYS[targetType])
        return false;
      var aliases2 = t4.FLIPPED_ALIAS_KEYS[targetType];
      if (aliases2) {
        if (aliases2[0] === nodeType)
          return true;
        for (var _iterator = aliases2, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var alias = _ref;
          if (nodeType === alias)
            return true;
        }
      }
      return false;
    }
    (0, _keys2.default)(t4.BUILDER_KEYS).forEach(function(type2) {
      var keys = t4.BUILDER_KEYS[type2];
      function builder() {
        if (arguments.length > keys.length) {
          throw new Error("t." + type2 + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + keys.length));
        }
        var node = {};
        node.type = type2;
        var i = 0;
        for (var _iterator2 = keys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
          var _ref2;
          if (_isArray2) {
            if (_i2 >= _iterator2.length)
              break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done)
              break;
            _ref2 = _i2.value;
          }
          var _key = _ref2;
          var field = t4.NODE_FIELDS[type2][_key];
          var arg = arguments[i++];
          if (arg === void 0)
            arg = (0, _clone2.default)(field.default);
          node[_key] = arg;
        }
        for (var key in node) {
          validate(node, key, node[key]);
        }
        return node;
      }
      t4[type2] = builder;
      t4[type2[0].toLowerCase() + type2.slice(1)] = builder;
    });
    var _loop = function _loop2(_type2) {
      var newType = t4.DEPRECATED_KEYS[_type2];
      function proxy(fn) {
        return function() {
          console.trace("The node type " + _type2 + " has been renamed to " + newType);
          return fn.apply(this, arguments);
        };
      }
      t4[_type2] = t4[_type2[0].toLowerCase() + _type2.slice(1)] = proxy(t4[newType]);
      t4["is" + _type2] = proxy(t4["is" + newType]);
      t4["assert" + _type2] = proxy(t4["assert" + newType]);
    };
    for (_type in t4.DEPRECATED_KEYS) {
      _loop(_type);
    }
    var _type;
    function validate(node, key, val) {
      if (!node)
        return;
      var fields = t4.NODE_FIELDS[node.type];
      if (!fields)
        return;
      var field = fields[key];
      if (!field || !field.validate)
        return;
      if (field.optional && val == null)
        return;
      field.validate(node, key, val);
    }
    function shallowEqual(actual, expected) {
      var keys = (0, _keys2.default)(expected);
      for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
        var _ref3;
        if (_isArray3) {
          if (_i3 >= _iterator3.length)
            break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done)
            break;
          _ref3 = _i3.value;
        }
        var key = _ref3;
        if (actual[key] !== expected[key]) {
          return false;
        }
      }
      return true;
    }
    function appendToMemberExpression(member, append, computed) {
      member.object = t4.memberExpression(member.object, member.property, member.computed);
      member.property = append;
      member.computed = !!computed;
      return member;
    }
    function prependToMemberExpression(member, prepend) {
      member.object = t4.memberExpression(prepend, member.object);
      return member;
    }
    function ensureBlock(node) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "body";
      return node[key] = t4.toBlock(node[key], node);
    }
    function clone(node) {
      if (!node)
        return node;
      var newNode = {};
      for (var key in node) {
        if (key[0] === "_")
          continue;
        newNode[key] = node[key];
      }
      return newNode;
    }
    function cloneWithoutLoc(node) {
      var newNode = clone(node);
      delete newNode.loc;
      return newNode;
    }
    function cloneDeep(node) {
      if (!node)
        return node;
      var newNode = {};
      for (var key in node) {
        if (key[0] === "_")
          continue;
        var val = node[key];
        if (val) {
          if (val.type) {
            val = t4.cloneDeep(val);
          } else if (Array.isArray(val)) {
            val = val.map(t4.cloneDeep);
          }
        }
        newNode[key] = val;
      }
      return newNode;
    }
    function buildMatchMemberExpression(match, allowPartial) {
      var parts = match.split(".");
      return function(member) {
        if (!t4.isMemberExpression(member))
          return false;
        var search = [member];
        var i = 0;
        while (search.length) {
          var node = search.shift();
          if (allowPartial && i === parts.length) {
            return true;
          }
          if (t4.isIdentifier(node)) {
            if (parts[i] !== node.name)
              return false;
          } else if (t4.isStringLiteral(node)) {
            if (parts[i] !== node.value)
              return false;
          } else if (t4.isMemberExpression(node)) {
            if (node.computed && !t4.isStringLiteral(node.property)) {
              return false;
            } else {
              search.push(node.object);
              search.push(node.property);
              continue;
            }
          } else {
            return false;
          }
          if (++i > parts.length) {
            return false;
          }
        }
        return true;
      };
    }
    function removeComments(node) {
      for (var _iterator4 = t4.COMMENT_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4); ; ) {
        var _ref4;
        if (_isArray4) {
          if (_i4 >= _iterator4.length)
            break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done)
            break;
          _ref4 = _i4.value;
        }
        var key = _ref4;
        delete node[key];
      }
      return node;
    }
    function inheritsComments(child, parent) {
      inheritTrailingComments(child, parent);
      inheritLeadingComments(child, parent);
      inheritInnerComments(child, parent);
      return child;
    }
    function inheritTrailingComments(child, parent) {
      _inheritComments("trailingComments", child, parent);
    }
    function inheritLeadingComments(child, parent) {
      _inheritComments("leadingComments", child, parent);
    }
    function inheritInnerComments(child, parent) {
      _inheritComments("innerComments", child, parent);
    }
    function _inheritComments(key, child, parent) {
      if (child && parent) {
        child[key] = (0, _uniq2.default)([].concat(child[key], parent[key]).filter(Boolean));
      }
    }
    function inherits(child, parent) {
      if (!child || !parent)
        return child;
      for (var _iterator5 = t4.INHERIT_KEYS.optional, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5); ; ) {
        var _ref5;
        if (_isArray5) {
          if (_i5 >= _iterator5.length)
            break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done)
            break;
          _ref5 = _i5.value;
        }
        var _key2 = _ref5;
        if (child[_key2] == null) {
          child[_key2] = parent[_key2];
        }
      }
      for (var key in parent) {
        if (key[0] === "_")
          child[key] = parent[key];
      }
      for (var _iterator6 = t4.INHERIT_KEYS.force, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6); ; ) {
        var _ref6;
        if (_isArray6) {
          if (_i6 >= _iterator6.length)
            break;
          _ref6 = _iterator6[_i6++];
        } else {
          _i6 = _iterator6.next();
          if (_i6.done)
            break;
          _ref6 = _i6.value;
        }
        var _key3 = _ref6;
        child[_key3] = parent[_key3];
      }
      t4.inheritsComments(child, parent);
      return child;
    }
    function assertNode(node) {
      if (!isNode(node)) {
        throw new TypeError("Not a valid node " + (node && node.type));
      }
    }
    function isNode(node) {
      return !!(node && _definitions.VISITOR_KEYS[node.type]);
    }
    (0, _toFastProperties2.default)(t4);
    (0, _toFastProperties2.default)(t4.VISITOR_KEYS);
    function traverseFast(node, enter, opts) {
      if (!node)
        return;
      var keys = t4.VISITOR_KEYS[node.type];
      if (!keys)
        return;
      opts = opts || {};
      enter(node, opts);
      for (var _iterator7 = keys, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7); ; ) {
        var _ref7;
        if (_isArray7) {
          if (_i7 >= _iterator7.length)
            break;
          _ref7 = _iterator7[_i7++];
        } else {
          _i7 = _iterator7.next();
          if (_i7.done)
            break;
          _ref7 = _i7.value;
        }
        var key = _ref7;
        var subNode = node[key];
        if (Array.isArray(subNode)) {
          for (var _iterator8 = subNode, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8); ; ) {
            var _ref8;
            if (_isArray8) {
              if (_i8 >= _iterator8.length)
                break;
              _ref8 = _iterator8[_i8++];
            } else {
              _i8 = _iterator8.next();
              if (_i8.done)
                break;
              _ref8 = _i8.value;
            }
            var _node = _ref8;
            traverseFast(_node, enter, opts);
          }
        } else {
          traverseFast(subNode, enter, opts);
        }
      }
    }
    var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
    var CLEAR_KEYS_PLUS_COMMENTS = t4.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);
    function removeProperties(node, opts) {
      opts = opts || {};
      var map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
      for (var _iterator9 = map, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9); ; ) {
        var _ref9;
        if (_isArray9) {
          if (_i9 >= _iterator9.length)
            break;
          _ref9 = _iterator9[_i9++];
        } else {
          _i9 = _iterator9.next();
          if (_i9.done)
            break;
          _ref9 = _i9.value;
        }
        var _key4 = _ref9;
        if (node[_key4] != null)
          node[_key4] = void 0;
      }
      for (var key in node) {
        if (key[0] === "_" && node[key] != null)
          node[key] = void 0;
      }
      var syms = (0, _getOwnPropertySymbols2.default)(node);
      for (var _iterator10 = syms, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10); ; ) {
        var _ref10;
        if (_isArray10) {
          if (_i10 >= _iterator10.length)
            break;
          _ref10 = _iterator10[_i10++];
        } else {
          _i10 = _iterator10.next();
          if (_i10.done)
            break;
          _ref10 = _i10.value;
        }
        var sym = _ref10;
        node[sym] = null;
      }
    }
    function removePropertiesDeep(tree, opts) {
      traverseFast(tree, removeProperties, opts);
      return tree;
    }
  }
});

// node_modules/babel-traverse/lib/path/lib/virtual-types.js
var require_virtual_types = __commonJS({
  "node_modules/babel-traverse/lib/path/lib/virtual-types.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.Flow = exports2.Pure = exports2.Generated = exports2.User = exports2.Var = exports2.BlockScoped = exports2.Referenced = exports2.Scope = exports2.Expression = exports2.Statement = exports2.BindingIdentifier = exports2.ReferencedMemberExpression = exports2.ReferencedIdentifier = void 0;
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    var ReferencedIdentifier = exports2.ReferencedIdentifier = {
      types: ["Identifier", "JSXIdentifier"],
      checkPath: function checkPath(_ref, opts) {
        var node = _ref.node, parent = _ref.parent;
        if (!t4.isIdentifier(node, opts) && !t4.isJSXMemberExpression(parent, opts)) {
          if (t4.isJSXIdentifier(node, opts)) {
            if (_babelTypes.react.isCompatTag(node.name))
              return false;
          } else {
            return false;
          }
        }
        return t4.isReferenced(node, parent);
      }
    };
    var ReferencedMemberExpression = exports2.ReferencedMemberExpression = {
      types: ["MemberExpression"],
      checkPath: function checkPath(_ref2) {
        var node = _ref2.node, parent = _ref2.parent;
        return t4.isMemberExpression(node) && t4.isReferenced(node, parent);
      }
    };
    var BindingIdentifier = exports2.BindingIdentifier = {
      types: ["Identifier"],
      checkPath: function checkPath(_ref3) {
        var node = _ref3.node, parent = _ref3.parent;
        return t4.isIdentifier(node) && t4.isBinding(node, parent);
      }
    };
    var Statement = exports2.Statement = {
      types: ["Statement"],
      checkPath: function checkPath(_ref4) {
        var node = _ref4.node, parent = _ref4.parent;
        if (t4.isStatement(node)) {
          if (t4.isVariableDeclaration(node)) {
            if (t4.isForXStatement(parent, { left: node }))
              return false;
            if (t4.isForStatement(parent, { init: node }))
              return false;
          }
          return true;
        } else {
          return false;
        }
      }
    };
    var Expression = exports2.Expression = {
      types: ["Expression"],
      checkPath: function checkPath(path2) {
        if (path2.isIdentifier()) {
          return path2.isReferencedIdentifier();
        } else {
          return t4.isExpression(path2.node);
        }
      }
    };
    var Scope = exports2.Scope = {
      types: ["Scopable"],
      checkPath: function checkPath(path2) {
        return t4.isScope(path2.node, path2.parent);
      }
    };
    var Referenced = exports2.Referenced = {
      checkPath: function checkPath(path2) {
        return t4.isReferenced(path2.node, path2.parent);
      }
    };
    var BlockScoped = exports2.BlockScoped = {
      checkPath: function checkPath(path2) {
        return t4.isBlockScoped(path2.node);
      }
    };
    var Var = exports2.Var = {
      types: ["VariableDeclaration"],
      checkPath: function checkPath(path2) {
        return t4.isVar(path2.node);
      }
    };
    var User = exports2.User = {
      checkPath: function checkPath(path2) {
        return path2.node && !!path2.node.loc;
      }
    };
    var Generated = exports2.Generated = {
      checkPath: function checkPath(path2) {
        return !path2.isUser();
      }
    };
    var Pure = exports2.Pure = {
      checkPath: function checkPath(path2, opts) {
        return path2.scope.isPure(path2.node, opts);
      }
    };
    var Flow = exports2.Flow = {
      types: ["Flow", "ImportDeclaration", "ExportDeclaration", "ImportSpecifier"],
      checkPath: function checkPath(_ref5) {
        var node = _ref5.node;
        if (t4.isFlow(node)) {
          return true;
        } else if (t4.isImportDeclaration(node)) {
          return node.importKind === "type" || node.importKind === "typeof";
        } else if (t4.isExportDeclaration(node)) {
          return node.exportKind === "type";
        } else if (t4.isImportSpecifier(node)) {
          return node.importKind === "type" || node.importKind === "typeof";
        } else {
          return false;
        }
      }
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse3(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse3(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/debug/src/debug.js"(exports2, module2) {
    exports2 = module2.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports2.coerce = coerce;
    exports2.disable = disable;
    exports2.enable = enable;
    exports2.enabled = enabled;
    exports2.humanize = require_ms();
    exports2.names = [];
    exports2.skips = [];
    exports2.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports2.colors[Math.abs(hash) % exports2.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled)
          return;
        var self2 = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports2.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%")
            return match;
          index++;
          var formatter = exports2.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports2.formatArgs.call(self2, args);
        var logFn = debug.log || exports2.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports2.enabled(namespace);
      debug.useColors = exports2.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports2.init) {
        exports2.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports2.save(namespaces);
      exports2.names = [];
      exports2.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i])
          continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports2.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports2.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports2.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports2.skips.length; i < len; i++) {
        if (exports2.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports2.names.length; i < len; i++) {
        if (exports2.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error)
        return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2 = module2.exports = require_debug();
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports2.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports2.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports2.humanize(this.diff);
      if (!useColors2)
        return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match)
          return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports2.storage.removeItem("debug");
        } else {
          exports2.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports2.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports2.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2 = module2.exports = require_debug();
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.colors = [6, 2, 3, 4, 5, 1];
    exports2.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val))
        val = true;
      else if (/^(no|off|false|disabled)$/i.test(val))
        val = false;
      else if (val === "null")
        val = null;
      else
        val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(fd);
    }
    exports2.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports2.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports2.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs2 = require("fs");
          stream2 = new fs2.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports2.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    exports2.enable(load());
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process !== "undefined" && process.type === "renderer") {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/invariant/invariant.js
var require_invariant = __commonJS({
  "node_modules/invariant/invariant.js"(exports2, module2) {
    "use strict";
    var NODE_ENV = process.env.NODE_ENV;
    var invariant = function(condition, format, a, b, c, d, e, f) {
      if (NODE_ENV !== "production") {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module2.exports = invariant;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports2, module2) {
    function identity(value) {
      return value;
    }
    module2.exports = identity;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports2, module2) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module2.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports2, module2) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module2.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports2, module2) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module2.exports = constant;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports2, module2) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module2.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports2, module2) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module2.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports2, module2) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module2.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports2, module2) {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    module2.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports2, module2) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    module2.exports = isIterateeCall;
  }
});

// node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports2, module2) {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    module2.exports = createAssigner;
  }
});

// node_modules/lodash/assign.js
var require_assign = __commonJS({
  "node_modules/lodash/assign.js"(exports2, module2) {
    var assignValue = require_assignValue();
    var copyObject = require_copyObject();
    var createAssigner = require_createAssigner();
    var isArrayLike = require_isArrayLike();
    var isPrototype = require_isPrototype();
    var keys = require_keys3();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });
    module2.exports = assign;
  }
});

// node_modules/core-js/library/modules/_redefine-all.js
var require_redefine_all = __commonJS({
  "node_modules/core-js/library/modules/_redefine-all.js"(exports2, module2) {
    var hide = require_hide();
    module2.exports = function(target, src, safe) {
      for (var key in src) {
        if (safe && target[key])
          target[key] = src[key];
        else
          hide(target, key, src[key]);
      }
      return target;
    };
  }
});

// node_modules/core-js/library/modules/_an-instance.js
var require_an_instance = __commonJS({
  "node_modules/core-js/library/modules/_an-instance.js"(exports2, module2) {
    module2.exports = function(it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || forbiddenField !== void 0 && forbiddenField in it) {
        throw TypeError(name + ": incorrect invocation!");
      }
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_iter-call.js
var require_iter_call = __commonJS({
  "node_modules/core-js/library/modules/_iter-call.js"(exports2, module2) {
    var anObject = require_an_object();
    module2.exports = function(iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (e) {
        var ret = iterator["return"];
        if (ret !== void 0)
          anObject(ret.call(iterator));
        throw e;
      }
    };
  }
});

// node_modules/core-js/library/modules/_is-array-iter.js
var require_is_array_iter = __commonJS({
  "node_modules/core-js/library/modules/_is-array-iter.js"(exports2, module2) {
    var Iterators = require_iterators();
    var ITERATOR = require_wks()("iterator");
    var ArrayProto = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
  }
});

// node_modules/core-js/library/modules/_for-of.js
var require_for_of = __commonJS({
  "node_modules/core-js/library/modules/_for-of.js"(exports2, module2) {
    var ctx = require_ctx();
    var call = require_iter_call();
    var isArrayIter = require_is_array_iter();
    var anObject = require_an_object();
    var toLength = require_to_length();
    var getIterFn = require_core_get_iterator_method();
    var BREAK = {};
    var RETURN = {};
    var exports2 = module2.exports = function(iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function() {
        return iterable;
      } : getIterFn(iterable);
      var f = ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != "function")
        throw TypeError(iterable + " is not iterable!");
      if (isArrayIter(iterFn))
        for (length = toLength(iterable.length); length > index; index++) {
          result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
          if (result === BREAK || result === RETURN)
            return result;
        }
      else
        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
          result = call(iterator, f, step.value, entries);
          if (result === BREAK || result === RETURN)
            return result;
        }
    };
    exports2.BREAK = BREAK;
    exports2.RETURN = RETURN;
  }
});

// node_modules/core-js/library/modules/_set-species.js
var require_set_species = __commonJS({
  "node_modules/core-js/library/modules/_set-species.js"(exports2, module2) {
    "use strict";
    var global2 = require_global();
    var core = require_core();
    var dP = require_object_dp();
    var DESCRIPTORS = require_descriptors();
    var SPECIES = require_wks()("species");
    module2.exports = function(KEY) {
      var C = typeof core[KEY] == "function" ? core[KEY] : global2[KEY];
      if (DESCRIPTORS && C && !C[SPECIES])
        dP.f(C, SPECIES, {
          configurable: true,
          get: function() {
            return this;
          }
        });
    };
  }
});

// node_modules/core-js/library/modules/_validate-collection.js
var require_validate_collection = __commonJS({
  "node_modules/core-js/library/modules/_validate-collection.js"(exports2, module2) {
    var isObject = require_is_object();
    module2.exports = function(it, TYPE) {
      if (!isObject(it) || it._t !== TYPE)
        throw TypeError("Incompatible receiver, " + TYPE + " required!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_collection-strong.js
var require_collection_strong = __commonJS({
  "node_modules/core-js/library/modules/_collection-strong.js"(exports2, module2) {
    "use strict";
    var dP = require_object_dp().f;
    var create = require_object_create();
    var redefineAll = require_redefine_all();
    var ctx = require_ctx();
    var anInstance = require_an_instance();
    var forOf = require_for_of();
    var $iterDefine = require_iter_define();
    var step = require_iter_step();
    var setSpecies = require_set_species();
    var DESCRIPTORS = require_descriptors();
    var fastKey = require_meta().fastKey;
    var validate = require_validate_collection();
    var SIZE = DESCRIPTORS ? "_s" : "size";
    var getEntry = function(that, key) {
      var index = fastKey(key);
      var entry;
      if (index !== "F")
        return that._i[index];
      for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key)
          return entry;
      }
    };
    module2.exports = {
      getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
          anInstance(that, C, NAME, "_i");
          that._t = NAME;
          that._i = create(null);
          that._f = void 0;
          that._l = void 0;
          that[SIZE] = 0;
          if (iterable != void 0)
            forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p)
                entry.p = entry.p.n = void 0;
              delete data[entry.i];
            }
            that._f = that._l = void 0;
            that[SIZE] = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          "delete": function(key) {
            var that = validate(this, NAME);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.n;
              var prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              if (prev)
                prev.n = next;
              if (next)
                next.p = prev;
              if (that._f == entry)
                that._f = next;
              if (that._l == entry)
                that._l = prev;
              that[SIZE]--;
            }
            return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn) {
            validate(this, NAME);
            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
            var entry;
            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this);
              while (entry && entry.r)
                entry = entry.p;
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(validate(this, NAME), key);
          }
        });
        if (DESCRIPTORS)
          dP(C.prototype, "size", {
            get: function() {
              return validate(this, NAME)[SIZE];
            }
          });
        return C;
      },
      def: function(that, key, value) {
        var entry = getEntry(that, key);
        var prev, index;
        if (entry) {
          entry.v = value;
        } else {
          that._l = entry = {
            i: index = fastKey(key, true),
            // <- index
            k: key,
            // <- key
            v: value,
            // <- value
            p: prev = that._l,
            // <- previous entry
            n: void 0,
            // <- next entry
            r: false
            // <- removed
          };
          if (!that._f)
            that._f = entry;
          if (prev)
            prev.n = entry;
          that[SIZE]++;
          if (index !== "F")
            that._i[index] = entry;
        }
        return that;
      },
      getEntry,
      setStrong: function(C, NAME, IS_MAP) {
        $iterDefine(C, NAME, function(iterated, kind) {
          this._t = validate(iterated, NAME);
          this._k = kind;
          this._l = void 0;
        }, function() {
          var that = this;
          var kind = that._k;
          var entry = that._l;
          while (entry && entry.r)
            entry = entry.p;
          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            that._t = void 0;
            return step(1);
          }
          if (kind == "keys")
            return step(0, entry.k);
          if (kind == "values")
            return step(0, entry.v);
          return step(0, [entry.k, entry.v]);
        }, IS_MAP ? "entries" : "values", !IS_MAP, true);
        setSpecies(NAME);
      }
    };
  }
});

// node_modules/core-js/library/modules/_array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "node_modules/core-js/library/modules/_array-species-constructor.js"(exports2, module2) {
    var isObject = require_is_object();
    var isArray = require_is_array();
    var SPECIES = require_wks()("species");
    module2.exports = function(original) {
      var C;
      if (isArray(original)) {
        C = original.constructor;
        if (typeof C == "function" && (C === Array || isArray(C.prototype)))
          C = void 0;
        if (isObject(C)) {
          C = C[SPECIES];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? Array : C;
    };
  }
});

// node_modules/core-js/library/modules/_array-species-create.js
var require_array_species_create = __commonJS({
  "node_modules/core-js/library/modules/_array-species-create.js"(exports2, module2) {
    var speciesConstructor = require_array_species_constructor();
    module2.exports = function(original, length) {
      return new (speciesConstructor(original))(length);
    };
  }
});

// node_modules/core-js/library/modules/_array-methods.js
var require_array_methods = __commonJS({
  "node_modules/core-js/library/modules/_array-methods.js"(exports2, module2) {
    var ctx = require_ctx();
    var IObject = require_iobject();
    var toObject = require_to_object();
    var toLength = require_to_length();
    var asc = require_array_species_create();
    module2.exports = function(TYPE, $create) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      var create = $create || asc;
      return function($this, callbackfn, that) {
        var O = toObject($this);
        var self2 = IObject(O);
        var f = ctx(callbackfn, that, 3);
        var length = toLength(self2.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
        var val, res;
        for (; length > index; index++)
          if (NO_HOLES || index in self2) {
            val = self2[index];
            res = f(val, index, O);
            if (TYPE) {
              if (IS_MAP)
                result[index] = res;
              else if (res)
                switch (TYPE) {
                  case 3:
                    return true;
                  case 5:
                    return val;
                  case 6:
                    return index;
                  case 2:
                    result.push(val);
                }
              else if (IS_EVERY)
                return false;
            }
          }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };
  }
});

// node_modules/core-js/library/modules/_collection.js
var require_collection = __commonJS({
  "node_modules/core-js/library/modules/_collection.js"(exports2, module2) {
    "use strict";
    var global2 = require_global();
    var $export = require_export();
    var meta = require_meta();
    var fails = require_fails();
    var hide = require_hide();
    var redefineAll = require_redefine_all();
    var forOf = require_for_of();
    var anInstance = require_an_instance();
    var isObject = require_is_object();
    var setToStringTag = require_set_to_string_tag();
    var dP = require_object_dp().f;
    var each = require_array_methods()(0);
    var DESCRIPTORS = require_descriptors();
    module2.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = global2[NAME];
      var C = Base;
      var ADDER = IS_MAP ? "set" : "add";
      var proto = C && C.prototype;
      var O = {};
      if (!DESCRIPTORS || typeof C != "function" || !(IS_WEAK || proto.forEach && !fails(function() {
        new C().entries().next();
      }))) {
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
      } else {
        C = wrapper(function(target, iterable) {
          anInstance(target, C, NAME, "_c");
          target._c = new Base();
          if (iterable != void 0)
            forOf(iterable, IS_MAP, target[ADDER], target);
        });
        each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(KEY) {
          var IS_ADDER = KEY == "add" || KEY == "set";
          if (KEY in proto && !(IS_WEAK && KEY == "clear"))
            hide(C.prototype, KEY, function(a, b) {
              anInstance(this, C, KEY);
              if (!IS_ADDER && IS_WEAK && !isObject(a))
                return KEY == "get" ? void 0 : false;
              var result = this._c[KEY](a === 0 ? 0 : a, b);
              return IS_ADDER ? this : result;
            });
        });
        IS_WEAK || dP(C.prototype, "size", {
          get: function() {
            return this._c.size;
          }
        });
      }
      setToStringTag(C, NAME);
      O[NAME] = C;
      $export($export.G + $export.W + $export.F, O);
      if (!IS_WEAK)
        common.setStrong(C, NAME, IS_MAP);
      return C;
    };
  }
});

// node_modules/core-js/library/modules/es6.map.js
var require_es6_map = __commonJS({
  "node_modules/core-js/library/modules/es6.map.js"(exports2, module2) {
    "use strict";
    var strong = require_collection_strong();
    var validate = require_validate_collection();
    var MAP = "Map";
    module2.exports = require_collection()(MAP, function(get) {
      return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = strong.getEntry(validate(this, MAP), key);
        return entry && entry.v;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
      }
    }, strong, true);
  }
});

// node_modules/core-js/library/modules/_array-from-iterable.js
var require_array_from_iterable = __commonJS({
  "node_modules/core-js/library/modules/_array-from-iterable.js"(exports2, module2) {
    var forOf = require_for_of();
    module2.exports = function(iter, ITERATOR) {
      var result = [];
      forOf(iter, false, result.push, result, ITERATOR);
      return result;
    };
  }
});

// node_modules/core-js/library/modules/_collection-to-json.js
var require_collection_to_json = __commonJS({
  "node_modules/core-js/library/modules/_collection-to-json.js"(exports2, module2) {
    var classof = require_classof();
    var from = require_array_from_iterable();
    module2.exports = function(NAME) {
      return function toJSON() {
        if (classof(this) != NAME)
          throw TypeError(NAME + "#toJSON isn't generic");
        return from(this);
      };
    };
  }
});

// node_modules/core-js/library/modules/es7.map.to-json.js
var require_es7_map_to_json = __commonJS({
  "node_modules/core-js/library/modules/es7.map.to-json.js"() {
    var $export = require_export();
    $export($export.P + $export.R, "Map", { toJSON: require_collection_to_json()("Map") });
  }
});

// node_modules/core-js/library/modules/_set-collection-of.js
var require_set_collection_of = __commonJS({
  "node_modules/core-js/library/modules/_set-collection-of.js"(exports2, module2) {
    "use strict";
    var $export = require_export();
    module2.exports = function(COLLECTION) {
      $export($export.S, COLLECTION, { of: function of() {
        var length = arguments.length;
        var A = new Array(length);
        while (length--)
          A[length] = arguments[length];
        return new this(A);
      } });
    };
  }
});

// node_modules/core-js/library/modules/es7.map.of.js
var require_es7_map_of = __commonJS({
  "node_modules/core-js/library/modules/es7.map.of.js"() {
    require_set_collection_of()("Map");
  }
});

// node_modules/core-js/library/modules/_set-collection-from.js
var require_set_collection_from = __commonJS({
  "node_modules/core-js/library/modules/_set-collection-from.js"(exports2, module2) {
    "use strict";
    var $export = require_export();
    var aFunction = require_a_function();
    var ctx = require_ctx();
    var forOf = require_for_of();
    module2.exports = function(COLLECTION) {
      $export($export.S, COLLECTION, { from: function from(source) {
        var mapFn = arguments[1];
        var mapping, A, n, cb;
        aFunction(this);
        mapping = mapFn !== void 0;
        if (mapping)
          aFunction(mapFn);
        if (source == void 0)
          return new this();
        A = [];
        if (mapping) {
          n = 0;
          cb = ctx(mapFn, arguments[2], 2);
          forOf(source, false, function(nextItem) {
            A.push(cb(nextItem, n++));
          });
        } else {
          forOf(source, false, A.push, A);
        }
        return new this(A);
      } });
    };
  }
});

// node_modules/core-js/library/modules/es7.map.from.js
var require_es7_map_from = __commonJS({
  "node_modules/core-js/library/modules/es7.map.from.js"() {
    require_set_collection_from()("Map");
  }
});

// node_modules/core-js/library/fn/map.js
var require_map = __commonJS({
  "node_modules/core-js/library/fn/map.js"(exports2, module2) {
    require_es6_object_to_string();
    require_es6_string_iterator();
    require_web_dom_iterable();
    require_es6_map();
    require_es7_map_to_json();
    require_es7_map_of();
    require_es7_map_from();
    module2.exports = require_core().Map;
  }
});

// node_modules/babel-runtime/core-js/map.js
var require_map2 = __commonJS({
  "node_modules/babel-runtime/core-js/map.js"(exports2, module2) {
    module2.exports = { "default": require_map(), __esModule: true };
  }
});

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    module2.exports = isString;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports2, module2) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module2.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports2, module2) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module2.exports = baseTrim;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports2, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module2.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports2, module2) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = toNumber;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports2, module2) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module2.exports = toFinite;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports2, module2) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module2.exports = toInteger;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports2, module2) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module2.exports = arrayMap;
  }
});

// node_modules/lodash/_baseValues.js
var require_baseValues = __commonJS({
  "node_modules/lodash/_baseValues.js"(exports2, module2) {
    var arrayMap = require_arrayMap();
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    module2.exports = baseValues;
  }
});

// node_modules/lodash/values.js
var require_values = __commonJS({
  "node_modules/lodash/values.js"(exports2, module2) {
    var baseValues = require_baseValues();
    var keys = require_keys3();
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }
    module2.exports = values;
  }
});

// node_modules/lodash/includes.js
var require_includes = __commonJS({
  "node_modules/lodash/includes.js"(exports2, module2) {
    var baseIndexOf = require_baseIndexOf();
    var isArrayLike = require_isArrayLike();
    var isString = require_isString();
    var toInteger = require_toInteger();
    var values = require_values();
    var nativeMax = Math.max;
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
    }
    module2.exports = includes;
  }
});

// node_modules/lodash/_baseRepeat.js
var require_baseRepeat = __commonJS({
  "node_modules/lodash/_baseRepeat.js"(exports2, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var nativeFloor = Math.floor;
    function baseRepeat(string, n) {
      var result = "";
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);
      return result;
    }
    module2.exports = baseRepeat;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports2, module2) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports2, module2) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module2.exports = toString;
  }
});

// node_modules/lodash/repeat.js
var require_repeat = __commonJS({
  "node_modules/lodash/repeat.js"(exports2, module2) {
    var baseRepeat = require_baseRepeat();
    var isIterateeCall = require_isIterateeCall();
    var toInteger = require_toInteger();
    var toString = require_toString();
    function repeat(string, n, guard) {
      if (guard ? isIterateeCall(string, n, guard) : n === void 0) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }
    module2.exports = repeat;
  }
});

// node_modules/babel-traverse/lib/scope/binding.js
var require_binding = __commonJS({
  "node_modules/babel-traverse/lib/scope/binding.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    var _classCallCheck2 = require_classCallCheck();
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var Binding = function() {
      function Binding2(_ref) {
        var existing = _ref.existing, identifier = _ref.identifier, scope = _ref.scope, path2 = _ref.path, kind = _ref.kind;
        (0, _classCallCheck3.default)(this, Binding2);
        this.identifier = identifier;
        this.scope = scope;
        this.path = path2;
        this.kind = kind;
        this.constantViolations = [];
        this.constant = true;
        this.referencePaths = [];
        this.referenced = false;
        this.references = 0;
        this.clearValue();
        if (existing) {
          this.constantViolations = [].concat(existing.path, existing.constantViolations, this.constantViolations);
        }
      }
      Binding2.prototype.deoptValue = function deoptValue() {
        this.clearValue();
        this.hasDeoptedValue = true;
      };
      Binding2.prototype.setValue = function setValue(value) {
        if (this.hasDeoptedValue)
          return;
        this.hasValue = true;
        this.value = value;
      };
      Binding2.prototype.clearValue = function clearValue() {
        this.hasDeoptedValue = false;
        this.hasValue = false;
        this.value = null;
      };
      Binding2.prototype.reassign = function reassign(path2) {
        this.constant = false;
        if (this.constantViolations.indexOf(path2) !== -1) {
          return;
        }
        this.constantViolations.push(path2);
      };
      Binding2.prototype.reference = function reference(path2) {
        if (this.referencePaths.indexOf(path2) !== -1) {
          return;
        }
        this.referenced = true;
        this.references++;
        this.referencePaths.push(path2);
      };
      Binding2.prototype.dereference = function dereference() {
        this.references--;
        this.referenced = !!this.references;
      };
      return Binding2;
    }();
    exports2.default = Binding;
    module2.exports = exports2["default"];
  }
});

// node_modules/babel-traverse/lib/scope/lib/renamer.js
var require_renamer = __commonJS({
  "node_modules/babel-traverse/lib/scope/lib/renamer.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    var _classCallCheck2 = require_classCallCheck();
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    var _binding = require_binding();
    var _binding2 = _interopRequireDefault(_binding);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var renameVisitor = {
      ReferencedIdentifier: function ReferencedIdentifier(_ref, state) {
        var node = _ref.node;
        if (node.name === state.oldName) {
          node.name = state.newName;
        }
      },
      Scope: function Scope(path2, state) {
        if (!path2.scope.bindingIdentifierEquals(state.oldName, state.binding.identifier)) {
          path2.skip();
        }
      },
      "AssignmentExpression|Declaration": function AssignmentExpressionDeclaration(path2, state) {
        var ids = path2.getOuterBindingIdentifiers();
        for (var name in ids) {
          if (name === state.oldName)
            ids[name].name = state.newName;
        }
      }
    };
    var Renamer = function() {
      function Renamer2(binding, oldName, newName) {
        (0, _classCallCheck3.default)(this, Renamer2);
        this.newName = newName;
        this.oldName = oldName;
        this.binding = binding;
      }
      Renamer2.prototype.maybeConvertFromExportDeclaration = function maybeConvertFromExportDeclaration(parentDeclar) {
        var exportDeclar = parentDeclar.parentPath.isExportDeclaration() && parentDeclar.parentPath;
        if (!exportDeclar)
          return;
        var isDefault = exportDeclar.isExportDefaultDeclaration();
        if (isDefault && (parentDeclar.isFunctionDeclaration() || parentDeclar.isClassDeclaration()) && !parentDeclar.node.id) {
          parentDeclar.node.id = parentDeclar.scope.generateUidIdentifier("default");
        }
        var bindingIdentifiers = parentDeclar.getOuterBindingIdentifiers();
        var specifiers = [];
        for (var name in bindingIdentifiers) {
          var localName = name === this.oldName ? this.newName : name;
          var exportedName = isDefault ? "default" : name;
          specifiers.push(t4.exportSpecifier(t4.identifier(localName), t4.identifier(exportedName)));
        }
        if (specifiers.length) {
          var aliasDeclar = t4.exportNamedDeclaration(null, specifiers);
          if (parentDeclar.isFunctionDeclaration()) {
            aliasDeclar._blockHoist = 3;
          }
          exportDeclar.insertAfter(aliasDeclar);
          exportDeclar.replaceWith(parentDeclar.node);
        }
      };
      Renamer2.prototype.rename = function rename(block) {
        var binding = this.binding, oldName = this.oldName, newName = this.newName;
        var scope = binding.scope, path2 = binding.path;
        var parentDeclar = path2.find(function(path3) {
          return path3.isDeclaration() || path3.isFunctionExpression();
        });
        if (parentDeclar) {
          this.maybeConvertFromExportDeclaration(parentDeclar);
        }
        scope.traverse(block || scope.block, renameVisitor, this);
        if (!block) {
          scope.removeOwnBinding(oldName);
          scope.bindings[newName] = binding;
          this.binding.identifier.name = newName;
        }
        if (binding.type === "hoisted") {
        }
      };
      return Renamer2;
    }();
    exports2.default = Renamer;
    module2.exports = exports2["default"];
  }
});

// node_modules/lodash/defaults.js
var require_defaults = __commonJS({
  "node_modules/lodash/defaults.js"(exports2, module2) {
    var baseRest = require_baseRest();
    var eq = require_eq();
    var isIterateeCall = require_isIterateeCall();
    var keysIn = require_keysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var defaults = baseRest(function(object, sources) {
      object = Object(object);
      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }
      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;
        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];
          if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            object[key] = source[key];
          }
        }
      }
      return object;
    });
    module2.exports = defaults;
  }
});

// node_modules/babel-messages/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/babel-messages/lib/index.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.MESSAGES = void 0;
    var _stringify = require_stringify2();
    var _stringify2 = _interopRequireDefault(_stringify);
    exports2.get = get;
    exports2.parseArgs = parseArgs;
    var _util = require("util");
    var util = _interopRequireWildcard(_util);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MESSAGES = exports2.MESSAGES = {
      tailCallReassignmentDeopt: "Function reference has been reassigned, so it will probably be dereferenced, therefore we can't optimise this with confidence",
      classesIllegalBareSuper: "Illegal use of bare super",
      classesIllegalSuperCall: "Direct super call is illegal in non-constructor, use super.$1() instead",
      scopeDuplicateDeclaration: "Duplicate declaration $1",
      settersNoRest: "Setters aren't allowed to have a rest",
      noAssignmentsInForHead: "No assignments allowed in for-in/of head",
      expectedMemberExpressionOrIdentifier: "Expected type MemberExpression or Identifier",
      invalidParentForThisNode: "We don't know how to handle this node within the current parent - please open an issue",
      readOnly: "$1 is read-only",
      unknownForHead: "Unknown node type $1 in ForStatement",
      didYouMean: "Did you mean $1?",
      codeGeneratorDeopt: "Note: The code generator has deoptimised the styling of $1 as it exceeds the max of $2.",
      missingTemplatesDirectory: "no templates directory - this is most likely the result of a broken `npm publish`. Please report to https://github.com/babel/babel/issues",
      unsupportedOutputType: "Unsupported output type $1",
      illegalMethodName: "Illegal method name $1",
      lostTrackNodePath: "We lost track of this node's position, likely because the AST was directly manipulated",
      modulesIllegalExportName: "Illegal export $1",
      modulesDuplicateDeclarations: "Duplicate module declarations with the same source but in different scopes",
      undeclaredVariable: "Reference to undeclared variable $1",
      undeclaredVariableType: "Referencing a type alias outside of a type annotation",
      undeclaredVariableSuggestion: "Reference to undeclared variable $1 - did you mean $2?",
      traverseNeedsParent: "You must pass a scope and parentPath unless traversing a Program/File. Instead of that you tried to traverse a $1 node without passing scope and parentPath.",
      traverseVerifyRootFunction: "You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?",
      traverseVerifyVisitorProperty: "You passed `traverse()` a visitor object with the property $1 that has the invalid property $2",
      traverseVerifyNodeType: "You gave us a visitor for the node type $1 but it's not a valid type",
      pluginNotObject: "Plugin $2 specified in $1 was expected to return an object when invoked but returned $3",
      pluginNotFunction: "Plugin $2 specified in $1 was expected to return a function but returned $3",
      pluginUnknown: "Unknown plugin $1 specified in $2 at $3, attempted to resolve relative to $4",
      pluginInvalidProperty: "Plugin $2 specified in $1 provided an invalid property of $3"
    };
    function get(key) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var msg = MESSAGES[key];
      if (!msg)
        throw new ReferenceError("Unknown message " + (0, _stringify2.default)(key));
      args = parseArgs(args);
      return msg.replace(/\$(\d+)/g, function(str, i) {
        return args[i - 1];
      });
    }
    function parseArgs(args) {
      return args.map(function(val) {
        if (val != null && val.inspect) {
          return val.inspect();
        } else {
          try {
            return (0, _stringify2.default)(val) || val + "";
          } catch (e) {
            return util.inspect(val);
          }
        }
      });
    }
  }
});

// node_modules/babel-traverse/node_modules/globals/globals.json
var require_globals = __commonJS({
  "node_modules/babel-traverse/node_modules/globals/globals.json"(exports2, module2) {
    module2.exports = {
      builtin: {
        Array: false,
        ArrayBuffer: false,
        Boolean: false,
        constructor: false,
        DataView: false,
        Date: false,
        decodeURI: false,
        decodeURIComponent: false,
        encodeURI: false,
        encodeURIComponent: false,
        Error: false,
        escape: false,
        eval: false,
        EvalError: false,
        Float32Array: false,
        Float64Array: false,
        Function: false,
        hasOwnProperty: false,
        Infinity: false,
        Int16Array: false,
        Int32Array: false,
        Int8Array: false,
        isFinite: false,
        isNaN: false,
        isPrototypeOf: false,
        JSON: false,
        Map: false,
        Math: false,
        NaN: false,
        Number: false,
        Object: false,
        parseFloat: false,
        parseInt: false,
        Promise: false,
        propertyIsEnumerable: false,
        Proxy: false,
        RangeError: false,
        ReferenceError: false,
        Reflect: false,
        RegExp: false,
        Set: false,
        String: false,
        Symbol: false,
        SyntaxError: false,
        System: false,
        toLocaleString: false,
        toString: false,
        TypeError: false,
        Uint16Array: false,
        Uint32Array: false,
        Uint8Array: false,
        Uint8ClampedArray: false,
        undefined: false,
        unescape: false,
        URIError: false,
        valueOf: false,
        WeakMap: false,
        WeakSet: false
      },
      es5: {
        Array: false,
        Boolean: false,
        constructor: false,
        Date: false,
        decodeURI: false,
        decodeURIComponent: false,
        encodeURI: false,
        encodeURIComponent: false,
        Error: false,
        escape: false,
        eval: false,
        EvalError: false,
        Function: false,
        hasOwnProperty: false,
        Infinity: false,
        isFinite: false,
        isNaN: false,
        isPrototypeOf: false,
        JSON: false,
        Math: false,
        NaN: false,
        Number: false,
        Object: false,
        parseFloat: false,
        parseInt: false,
        propertyIsEnumerable: false,
        RangeError: false,
        ReferenceError: false,
        RegExp: false,
        String: false,
        SyntaxError: false,
        toLocaleString: false,
        toString: false,
        TypeError: false,
        undefined: false,
        unescape: false,
        URIError: false,
        valueOf: false
      },
      es6: {
        Array: false,
        ArrayBuffer: false,
        Boolean: false,
        constructor: false,
        DataView: false,
        Date: false,
        decodeURI: false,
        decodeURIComponent: false,
        encodeURI: false,
        encodeURIComponent: false,
        Error: false,
        escape: false,
        eval: false,
        EvalError: false,
        Float32Array: false,
        Float64Array: false,
        Function: false,
        hasOwnProperty: false,
        Infinity: false,
        Int16Array: false,
        Int32Array: false,
        Int8Array: false,
        isFinite: false,
        isNaN: false,
        isPrototypeOf: false,
        JSON: false,
        Map: false,
        Math: false,
        NaN: false,
        Number: false,
        Object: false,
        parseFloat: false,
        parseInt: false,
        Promise: false,
        propertyIsEnumerable: false,
        Proxy: false,
        RangeError: false,
        ReferenceError: false,
        Reflect: false,
        RegExp: false,
        Set: false,
        String: false,
        Symbol: false,
        SyntaxError: false,
        System: false,
        toLocaleString: false,
        toString: false,
        TypeError: false,
        Uint16Array: false,
        Uint32Array: false,
        Uint8Array: false,
        Uint8ClampedArray: false,
        undefined: false,
        unescape: false,
        URIError: false,
        valueOf: false,
        WeakMap: false,
        WeakSet: false
      },
      browser: {
        addEventListener: false,
        alert: false,
        AnalyserNode: false,
        Animation: false,
        AnimationEffectReadOnly: false,
        AnimationEffectTiming: false,
        AnimationEffectTimingReadOnly: false,
        AnimationEvent: false,
        AnimationPlaybackEvent: false,
        AnimationTimeline: false,
        applicationCache: false,
        ApplicationCache: false,
        ApplicationCacheErrorEvent: false,
        atob: false,
        Attr: false,
        Audio: false,
        AudioBuffer: false,
        AudioBufferSourceNode: false,
        AudioContext: false,
        AudioDestinationNode: false,
        AudioListener: false,
        AudioNode: false,
        AudioParam: false,
        AudioProcessingEvent: false,
        AutocompleteErrorEvent: false,
        BarProp: false,
        BatteryManager: false,
        BeforeUnloadEvent: false,
        BiquadFilterNode: false,
        Blob: false,
        blur: false,
        btoa: false,
        Cache: false,
        caches: false,
        CacheStorage: false,
        cancelAnimationFrame: false,
        cancelIdleCallback: false,
        CanvasGradient: false,
        CanvasPattern: false,
        CanvasRenderingContext2D: false,
        CDATASection: false,
        ChannelMergerNode: false,
        ChannelSplitterNode: false,
        CharacterData: false,
        clearInterval: false,
        clearTimeout: false,
        clientInformation: false,
        ClientRect: false,
        ClientRectList: false,
        ClipboardEvent: false,
        close: false,
        closed: false,
        CloseEvent: false,
        Comment: false,
        CompositionEvent: false,
        confirm: false,
        console: false,
        ConvolverNode: false,
        createImageBitmap: false,
        Credential: false,
        CredentialsContainer: false,
        crypto: false,
        Crypto: false,
        CryptoKey: false,
        CSS: false,
        CSSAnimation: false,
        CSSFontFaceRule: false,
        CSSImportRule: false,
        CSSKeyframeRule: false,
        CSSKeyframesRule: false,
        CSSMediaRule: false,
        CSSPageRule: false,
        CSSRule: false,
        CSSRuleList: false,
        CSSStyleDeclaration: false,
        CSSStyleRule: false,
        CSSStyleSheet: false,
        CSSSupportsRule: false,
        CSSTransition: false,
        CSSUnknownRule: false,
        CSSViewportRule: false,
        customElements: false,
        CustomEvent: false,
        DataTransfer: false,
        DataTransferItem: false,
        DataTransferItemList: false,
        Debug: false,
        defaultStatus: false,
        defaultstatus: false,
        DelayNode: false,
        DeviceMotionEvent: false,
        DeviceOrientationEvent: false,
        devicePixelRatio: false,
        dispatchEvent: false,
        document: false,
        Document: false,
        DocumentFragment: false,
        DocumentTimeline: false,
        DocumentType: false,
        DOMError: false,
        DOMException: false,
        DOMImplementation: false,
        DOMParser: false,
        DOMSettableTokenList: false,
        DOMStringList: false,
        DOMStringMap: false,
        DOMTokenList: false,
        DragEvent: false,
        DynamicsCompressorNode: false,
        Element: false,
        ElementTimeControl: false,
        ErrorEvent: false,
        event: false,
        Event: false,
        EventSource: false,
        EventTarget: false,
        external: false,
        FederatedCredential: false,
        fetch: false,
        File: false,
        FileError: false,
        FileList: false,
        FileReader: false,
        find: false,
        focus: false,
        FocusEvent: false,
        FontFace: false,
        FormData: false,
        frameElement: false,
        frames: false,
        GainNode: false,
        Gamepad: false,
        GamepadButton: false,
        GamepadEvent: false,
        getComputedStyle: false,
        getSelection: false,
        HashChangeEvent: false,
        Headers: false,
        history: false,
        History: false,
        HTMLAllCollection: false,
        HTMLAnchorElement: false,
        HTMLAppletElement: false,
        HTMLAreaElement: false,
        HTMLAudioElement: false,
        HTMLBaseElement: false,
        HTMLBlockquoteElement: false,
        HTMLBodyElement: false,
        HTMLBRElement: false,
        HTMLButtonElement: false,
        HTMLCanvasElement: false,
        HTMLCollection: false,
        HTMLContentElement: false,
        HTMLDataListElement: false,
        HTMLDetailsElement: false,
        HTMLDialogElement: false,
        HTMLDirectoryElement: false,
        HTMLDivElement: false,
        HTMLDListElement: false,
        HTMLDocument: false,
        HTMLElement: false,
        HTMLEmbedElement: false,
        HTMLFieldSetElement: false,
        HTMLFontElement: false,
        HTMLFormControlsCollection: false,
        HTMLFormElement: false,
        HTMLFrameElement: false,
        HTMLFrameSetElement: false,
        HTMLHeadElement: false,
        HTMLHeadingElement: false,
        HTMLHRElement: false,
        HTMLHtmlElement: false,
        HTMLIFrameElement: false,
        HTMLImageElement: false,
        HTMLInputElement: false,
        HTMLIsIndexElement: false,
        HTMLKeygenElement: false,
        HTMLLabelElement: false,
        HTMLLayerElement: false,
        HTMLLegendElement: false,
        HTMLLIElement: false,
        HTMLLinkElement: false,
        HTMLMapElement: false,
        HTMLMarqueeElement: false,
        HTMLMediaElement: false,
        HTMLMenuElement: false,
        HTMLMetaElement: false,
        HTMLMeterElement: false,
        HTMLModElement: false,
        HTMLObjectElement: false,
        HTMLOListElement: false,
        HTMLOptGroupElement: false,
        HTMLOptionElement: false,
        HTMLOptionsCollection: false,
        HTMLOutputElement: false,
        HTMLParagraphElement: false,
        HTMLParamElement: false,
        HTMLPictureElement: false,
        HTMLPreElement: false,
        HTMLProgressElement: false,
        HTMLQuoteElement: false,
        HTMLScriptElement: false,
        HTMLSelectElement: false,
        HTMLShadowElement: false,
        HTMLSourceElement: false,
        HTMLSpanElement: false,
        HTMLStyleElement: false,
        HTMLTableCaptionElement: false,
        HTMLTableCellElement: false,
        HTMLTableColElement: false,
        HTMLTableElement: false,
        HTMLTableRowElement: false,
        HTMLTableSectionElement: false,
        HTMLTemplateElement: false,
        HTMLTextAreaElement: false,
        HTMLTitleElement: false,
        HTMLTrackElement: false,
        HTMLUListElement: false,
        HTMLUnknownElement: false,
        HTMLVideoElement: false,
        IDBCursor: false,
        IDBCursorWithValue: false,
        IDBDatabase: false,
        IDBEnvironment: false,
        IDBFactory: false,
        IDBIndex: false,
        IDBKeyRange: false,
        IDBObjectStore: false,
        IDBOpenDBRequest: false,
        IDBRequest: false,
        IDBTransaction: false,
        IDBVersionChangeEvent: false,
        Image: false,
        ImageBitmap: false,
        ImageData: false,
        indexedDB: false,
        innerHeight: false,
        innerWidth: false,
        InputEvent: false,
        InputMethodContext: false,
        IntersectionObserver: false,
        IntersectionObserverEntry: false,
        Intl: false,
        KeyboardEvent: false,
        KeyframeEffect: false,
        KeyframeEffectReadOnly: false,
        length: false,
        localStorage: false,
        location: false,
        Location: false,
        locationbar: false,
        matchMedia: false,
        MediaElementAudioSourceNode: false,
        MediaEncryptedEvent: false,
        MediaError: false,
        MediaKeyError: false,
        MediaKeyEvent: false,
        MediaKeyMessageEvent: false,
        MediaKeys: false,
        MediaKeySession: false,
        MediaKeyStatusMap: false,
        MediaKeySystemAccess: false,
        MediaList: false,
        MediaQueryList: false,
        MediaQueryListEvent: false,
        MediaSource: false,
        MediaRecorder: false,
        MediaStream: false,
        MediaStreamAudioDestinationNode: false,
        MediaStreamAudioSourceNode: false,
        MediaStreamEvent: false,
        MediaStreamTrack: false,
        menubar: false,
        MessageChannel: false,
        MessageEvent: false,
        MessagePort: false,
        MIDIAccess: false,
        MIDIConnectionEvent: false,
        MIDIInput: false,
        MIDIInputMap: false,
        MIDIMessageEvent: false,
        MIDIOutput: false,
        MIDIOutputMap: false,
        MIDIPort: false,
        MimeType: false,
        MimeTypeArray: false,
        MouseEvent: false,
        moveBy: false,
        moveTo: false,
        MutationEvent: false,
        MutationObserver: false,
        MutationRecord: false,
        name: false,
        NamedNodeMap: false,
        navigator: false,
        Navigator: false,
        Node: false,
        NodeFilter: false,
        NodeIterator: false,
        NodeList: false,
        Notification: false,
        OfflineAudioCompletionEvent: false,
        OfflineAudioContext: false,
        offscreenBuffering: false,
        onbeforeunload: true,
        onblur: true,
        onerror: true,
        onfocus: true,
        onload: true,
        onresize: true,
        onunload: true,
        open: false,
        openDatabase: false,
        opener: false,
        opera: false,
        Option: false,
        OscillatorNode: false,
        outerHeight: false,
        outerWidth: false,
        PageTransitionEvent: false,
        pageXOffset: false,
        pageYOffset: false,
        parent: false,
        PasswordCredential: false,
        Path2D: false,
        performance: false,
        Performance: false,
        PerformanceEntry: false,
        PerformanceMark: false,
        PerformanceMeasure: false,
        PerformanceNavigation: false,
        PerformanceResourceTiming: false,
        PerformanceTiming: false,
        PeriodicWave: false,
        Permissions: false,
        PermissionStatus: false,
        personalbar: false,
        Plugin: false,
        PluginArray: false,
        PopStateEvent: false,
        postMessage: false,
        print: false,
        ProcessingInstruction: false,
        ProgressEvent: false,
        PromiseRejectionEvent: false,
        prompt: false,
        PushManager: false,
        PushSubscription: false,
        RadioNodeList: false,
        Range: false,
        ReadableByteStream: false,
        ReadableStream: false,
        removeEventListener: false,
        Request: false,
        requestAnimationFrame: false,
        requestIdleCallback: false,
        resizeBy: false,
        resizeTo: false,
        Response: false,
        RTCIceCandidate: false,
        RTCSessionDescription: false,
        RTCPeerConnection: false,
        screen: false,
        Screen: false,
        screenLeft: false,
        ScreenOrientation: false,
        screenTop: false,
        screenX: false,
        screenY: false,
        ScriptProcessorNode: false,
        scroll: false,
        scrollbars: false,
        scrollBy: false,
        scrollTo: false,
        scrollX: false,
        scrollY: false,
        SecurityPolicyViolationEvent: false,
        Selection: false,
        self: false,
        ServiceWorker: false,
        ServiceWorkerContainer: false,
        ServiceWorkerRegistration: false,
        sessionStorage: false,
        setInterval: false,
        setTimeout: false,
        ShadowRoot: false,
        SharedKeyframeList: false,
        SharedWorker: false,
        showModalDialog: false,
        SiteBoundCredential: false,
        speechSynthesis: false,
        SpeechSynthesisEvent: false,
        SpeechSynthesisUtterance: false,
        status: false,
        statusbar: false,
        stop: false,
        Storage: false,
        StorageEvent: false,
        styleMedia: false,
        StyleSheet: false,
        StyleSheetList: false,
        SubtleCrypto: false,
        SVGAElement: false,
        SVGAltGlyphDefElement: false,
        SVGAltGlyphElement: false,
        SVGAltGlyphItemElement: false,
        SVGAngle: false,
        SVGAnimateColorElement: false,
        SVGAnimatedAngle: false,
        SVGAnimatedBoolean: false,
        SVGAnimatedEnumeration: false,
        SVGAnimatedInteger: false,
        SVGAnimatedLength: false,
        SVGAnimatedLengthList: false,
        SVGAnimatedNumber: false,
        SVGAnimatedNumberList: false,
        SVGAnimatedPathData: false,
        SVGAnimatedPoints: false,
        SVGAnimatedPreserveAspectRatio: false,
        SVGAnimatedRect: false,
        SVGAnimatedString: false,
        SVGAnimatedTransformList: false,
        SVGAnimateElement: false,
        SVGAnimateMotionElement: false,
        SVGAnimateTransformElement: false,
        SVGAnimationElement: false,
        SVGCircleElement: false,
        SVGClipPathElement: false,
        SVGColor: false,
        SVGColorProfileElement: false,
        SVGColorProfileRule: false,
        SVGComponentTransferFunctionElement: false,
        SVGCSSRule: false,
        SVGCursorElement: false,
        SVGDefsElement: false,
        SVGDescElement: false,
        SVGDiscardElement: false,
        SVGDocument: false,
        SVGElement: false,
        SVGElementInstance: false,
        SVGElementInstanceList: false,
        SVGEllipseElement: false,
        SVGEvent: false,
        SVGExternalResourcesRequired: false,
        SVGFEBlendElement: false,
        SVGFEColorMatrixElement: false,
        SVGFEComponentTransferElement: false,
        SVGFECompositeElement: false,
        SVGFEConvolveMatrixElement: false,
        SVGFEDiffuseLightingElement: false,
        SVGFEDisplacementMapElement: false,
        SVGFEDistantLightElement: false,
        SVGFEDropShadowElement: false,
        SVGFEFloodElement: false,
        SVGFEFuncAElement: false,
        SVGFEFuncBElement: false,
        SVGFEFuncGElement: false,
        SVGFEFuncRElement: false,
        SVGFEGaussianBlurElement: false,
        SVGFEImageElement: false,
        SVGFEMergeElement: false,
        SVGFEMergeNodeElement: false,
        SVGFEMorphologyElement: false,
        SVGFEOffsetElement: false,
        SVGFEPointLightElement: false,
        SVGFESpecularLightingElement: false,
        SVGFESpotLightElement: false,
        SVGFETileElement: false,
        SVGFETurbulenceElement: false,
        SVGFilterElement: false,
        SVGFilterPrimitiveStandardAttributes: false,
        SVGFitToViewBox: false,
        SVGFontElement: false,
        SVGFontFaceElement: false,
        SVGFontFaceFormatElement: false,
        SVGFontFaceNameElement: false,
        SVGFontFaceSrcElement: false,
        SVGFontFaceUriElement: false,
        SVGForeignObjectElement: false,
        SVGGElement: false,
        SVGGeometryElement: false,
        SVGGlyphElement: false,
        SVGGlyphRefElement: false,
        SVGGradientElement: false,
        SVGGraphicsElement: false,
        SVGHKernElement: false,
        SVGICCColor: false,
        SVGImageElement: false,
        SVGLangSpace: false,
        SVGLength: false,
        SVGLengthList: false,
        SVGLinearGradientElement: false,
        SVGLineElement: false,
        SVGLocatable: false,
        SVGMarkerElement: false,
        SVGMaskElement: false,
        SVGMatrix: false,
        SVGMetadataElement: false,
        SVGMissingGlyphElement: false,
        SVGMPathElement: false,
        SVGNumber: false,
        SVGNumberList: false,
        SVGPaint: false,
        SVGPathElement: false,
        SVGPathSeg: false,
        SVGPathSegArcAbs: false,
        SVGPathSegArcRel: false,
        SVGPathSegClosePath: false,
        SVGPathSegCurvetoCubicAbs: false,
        SVGPathSegCurvetoCubicRel: false,
        SVGPathSegCurvetoCubicSmoothAbs: false,
        SVGPathSegCurvetoCubicSmoothRel: false,
        SVGPathSegCurvetoQuadraticAbs: false,
        SVGPathSegCurvetoQuadraticRel: false,
        SVGPathSegCurvetoQuadraticSmoothAbs: false,
        SVGPathSegCurvetoQuadraticSmoothRel: false,
        SVGPathSegLinetoAbs: false,
        SVGPathSegLinetoHorizontalAbs: false,
        SVGPathSegLinetoHorizontalRel: false,
        SVGPathSegLinetoRel: false,
        SVGPathSegLinetoVerticalAbs: false,
        SVGPathSegLinetoVerticalRel: false,
        SVGPathSegList: false,
        SVGPathSegMovetoAbs: false,
        SVGPathSegMovetoRel: false,
        SVGPatternElement: false,
        SVGPoint: false,
        SVGPointList: false,
        SVGPolygonElement: false,
        SVGPolylineElement: false,
        SVGPreserveAspectRatio: false,
        SVGRadialGradientElement: false,
        SVGRect: false,
        SVGRectElement: false,
        SVGRenderingIntent: false,
        SVGScriptElement: false,
        SVGSetElement: false,
        SVGStopElement: false,
        SVGStringList: false,
        SVGStylable: false,
        SVGStyleElement: false,
        SVGSVGElement: false,
        SVGSwitchElement: false,
        SVGSymbolElement: false,
        SVGTests: false,
        SVGTextContentElement: false,
        SVGTextElement: false,
        SVGTextPathElement: false,
        SVGTextPositioningElement: false,
        SVGTitleElement: false,
        SVGTransform: false,
        SVGTransformable: false,
        SVGTransformList: false,
        SVGTRefElement: false,
        SVGTSpanElement: false,
        SVGUnitTypes: false,
        SVGURIReference: false,
        SVGUseElement: false,
        SVGViewElement: false,
        SVGViewSpec: false,
        SVGVKernElement: false,
        SVGZoomAndPan: false,
        SVGZoomEvent: false,
        Text: false,
        TextDecoder: false,
        TextEncoder: false,
        TextEvent: false,
        TextMetrics: false,
        TextTrack: false,
        TextTrackCue: false,
        TextTrackCueList: false,
        TextTrackList: false,
        TimeEvent: false,
        TimeRanges: false,
        toolbar: false,
        top: false,
        Touch: false,
        TouchEvent: false,
        TouchList: false,
        TrackEvent: false,
        TransitionEvent: false,
        TreeWalker: false,
        UIEvent: false,
        URL: false,
        URLSearchParams: false,
        ValidityState: false,
        VTTCue: false,
        WaveShaperNode: false,
        WebGLActiveInfo: false,
        WebGLBuffer: false,
        WebGLContextEvent: false,
        WebGLFramebuffer: false,
        WebGLProgram: false,
        WebGLRenderbuffer: false,
        WebGLRenderingContext: false,
        WebGLShader: false,
        WebGLShaderPrecisionFormat: false,
        WebGLTexture: false,
        WebGLUniformLocation: false,
        WebSocket: false,
        WheelEvent: false,
        window: false,
        Window: false,
        Worker: false,
        XDomainRequest: false,
        XMLDocument: false,
        XMLHttpRequest: false,
        XMLHttpRequestEventTarget: false,
        XMLHttpRequestProgressEvent: false,
        XMLHttpRequestUpload: false,
        XMLSerializer: false,
        XPathEvaluator: false,
        XPathException: false,
        XPathExpression: false,
        XPathNamespace: false,
        XPathNSResolver: false,
        XPathResult: false,
        XSLTProcessor: false
      },
      worker: {
        applicationCache: false,
        atob: false,
        Blob: false,
        BroadcastChannel: false,
        btoa: false,
        Cache: false,
        caches: false,
        clearInterval: false,
        clearTimeout: false,
        close: true,
        console: false,
        fetch: false,
        FileReaderSync: false,
        FormData: false,
        Headers: false,
        IDBCursor: false,
        IDBCursorWithValue: false,
        IDBDatabase: false,
        IDBFactory: false,
        IDBIndex: false,
        IDBKeyRange: false,
        IDBObjectStore: false,
        IDBOpenDBRequest: false,
        IDBRequest: false,
        IDBTransaction: false,
        IDBVersionChangeEvent: false,
        ImageData: false,
        importScripts: true,
        indexedDB: false,
        location: false,
        MessageChannel: false,
        MessagePort: false,
        name: false,
        navigator: false,
        Notification: false,
        onclose: true,
        onconnect: true,
        onerror: true,
        onlanguagechange: true,
        onmessage: true,
        onoffline: true,
        ononline: true,
        onrejectionhandled: true,
        onunhandledrejection: true,
        performance: false,
        Performance: false,
        PerformanceEntry: false,
        PerformanceMark: false,
        PerformanceMeasure: false,
        PerformanceNavigation: false,
        PerformanceResourceTiming: false,
        PerformanceTiming: false,
        postMessage: true,
        Promise: false,
        Request: false,
        Response: false,
        self: true,
        ServiceWorkerRegistration: false,
        setInterval: false,
        setTimeout: false,
        TextDecoder: false,
        TextEncoder: false,
        URL: false,
        URLSearchParams: false,
        WebSocket: false,
        Worker: false,
        XMLHttpRequest: false
      },
      node: {
        __dirname: false,
        __filename: false,
        arguments: false,
        Buffer: false,
        clearImmediate: false,
        clearInterval: false,
        clearTimeout: false,
        console: false,
        exports: true,
        GLOBAL: false,
        global: false,
        Intl: false,
        module: false,
        process: false,
        require: false,
        root: false,
        setImmediate: false,
        setInterval: false,
        setTimeout: false
      },
      commonjs: {
        exports: true,
        module: false,
        require: false,
        global: false
      },
      amd: {
        define: false,
        require: false
      },
      mocha: {
        after: false,
        afterEach: false,
        before: false,
        beforeEach: false,
        context: false,
        describe: false,
        it: false,
        mocha: false,
        run: false,
        setup: false,
        specify: false,
        suite: false,
        suiteSetup: false,
        suiteTeardown: false,
        teardown: false,
        test: false,
        xcontext: false,
        xdescribe: false,
        xit: false,
        xspecify: false
      },
      jasmine: {
        afterAll: false,
        afterEach: false,
        beforeAll: false,
        beforeEach: false,
        describe: false,
        expect: false,
        fail: false,
        fdescribe: false,
        fit: false,
        it: false,
        jasmine: false,
        pending: false,
        runs: false,
        spyOn: false,
        spyOnProperty: false,
        waits: false,
        waitsFor: false,
        xdescribe: false,
        xit: false
      },
      jest: {
        afterAll: false,
        afterEach: false,
        beforeAll: false,
        beforeEach: false,
        check: false,
        describe: false,
        expect: false,
        gen: false,
        it: false,
        fdescribe: false,
        fit: false,
        jest: false,
        pit: false,
        require: false,
        test: false,
        xdescribe: false,
        xit: false,
        xtest: false
      },
      qunit: {
        asyncTest: false,
        deepEqual: false,
        equal: false,
        expect: false,
        module: false,
        notDeepEqual: false,
        notEqual: false,
        notOk: false,
        notPropEqual: false,
        notStrictEqual: false,
        ok: false,
        propEqual: false,
        QUnit: false,
        raises: false,
        start: false,
        stop: false,
        strictEqual: false,
        test: false,
        throws: false
      },
      phantomjs: {
        console: true,
        exports: true,
        phantom: true,
        require: true,
        WebPage: true
      },
      couch: {
        emit: false,
        exports: false,
        getRow: false,
        log: false,
        module: false,
        provides: false,
        require: false,
        respond: false,
        send: false,
        start: false,
        sum: false
      },
      rhino: {
        defineClass: false,
        deserialize: false,
        gc: false,
        help: false,
        importClass: false,
        importPackage: false,
        java: false,
        load: false,
        loadClass: false,
        Packages: false,
        print: false,
        quit: false,
        readFile: false,
        readUrl: false,
        runCommand: false,
        seal: false,
        serialize: false,
        spawn: false,
        sync: false,
        toint32: false,
        version: false
      },
      nashorn: {
        __DIR__: false,
        __FILE__: false,
        __LINE__: false,
        com: false,
        edu: false,
        exit: false,
        Java: false,
        java: false,
        javafx: false,
        JavaImporter: false,
        javax: false,
        JSAdapter: false,
        load: false,
        loadWithNewGlobal: false,
        org: false,
        Packages: false,
        print: false,
        quit: false
      },
      wsh: {
        ActiveXObject: true,
        Enumerator: true,
        GetObject: true,
        ScriptEngine: true,
        ScriptEngineBuildVersion: true,
        ScriptEngineMajorVersion: true,
        ScriptEngineMinorVersion: true,
        VBArray: true,
        WScript: true,
        WSH: true,
        XDomainRequest: true
      },
      jquery: {
        $: false,
        jQuery: false
      },
      yui: {
        Y: false,
        YUI: false,
        YUI_config: false
      },
      shelljs: {
        cat: false,
        cd: false,
        chmod: false,
        config: false,
        cp: false,
        dirs: false,
        echo: false,
        env: false,
        error: false,
        exec: false,
        exit: false,
        find: false,
        grep: false,
        ls: false,
        ln: false,
        mkdir: false,
        mv: false,
        popd: false,
        pushd: false,
        pwd: false,
        rm: false,
        sed: false,
        set: false,
        target: false,
        tempdir: false,
        test: false,
        touch: false,
        which: false
      },
      prototypejs: {
        $: false,
        $$: false,
        $A: false,
        $break: false,
        $continue: false,
        $F: false,
        $H: false,
        $R: false,
        $w: false,
        Abstract: false,
        Ajax: false,
        Autocompleter: false,
        Builder: false,
        Class: false,
        Control: false,
        Draggable: false,
        Draggables: false,
        Droppables: false,
        Effect: false,
        Element: false,
        Enumerable: false,
        Event: false,
        Field: false,
        Form: false,
        Hash: false,
        Insertion: false,
        ObjectRange: false,
        PeriodicalExecuter: false,
        Position: false,
        Prototype: false,
        Scriptaculous: false,
        Selector: false,
        Sortable: false,
        SortableObserver: false,
        Sound: false,
        Template: false,
        Toggle: false,
        Try: false
      },
      meteor: {
        $: false,
        _: false,
        Accounts: false,
        AccountsClient: false,
        AccountsServer: false,
        AccountsCommon: false,
        App: false,
        Assets: false,
        Blaze: false,
        check: false,
        Cordova: false,
        DDP: false,
        DDPServer: false,
        DDPRateLimiter: false,
        Deps: false,
        EJSON: false,
        Email: false,
        HTTP: false,
        Log: false,
        Match: false,
        Meteor: false,
        Mongo: false,
        MongoInternals: false,
        Npm: false,
        Package: false,
        Plugin: false,
        process: false,
        Random: false,
        ReactiveDict: false,
        ReactiveVar: false,
        Router: false,
        ServiceConfiguration: false,
        Session: false,
        share: false,
        Spacebars: false,
        Template: false,
        Tinytest: false,
        Tracker: false,
        UI: false,
        Utils: false,
        WebApp: false,
        WebAppInternals: false
      },
      mongo: {
        _isWindows: false,
        _rand: false,
        BulkWriteResult: false,
        cat: false,
        cd: false,
        connect: false,
        db: false,
        getHostName: false,
        getMemInfo: false,
        hostname: false,
        ISODate: false,
        listFiles: false,
        load: false,
        ls: false,
        md5sumFile: false,
        mkdir: false,
        Mongo: false,
        NumberInt: false,
        NumberLong: false,
        ObjectId: false,
        PlanCache: false,
        print: false,
        printjson: false,
        pwd: false,
        quit: false,
        removeFile: false,
        rs: false,
        sh: false,
        UUID: false,
        version: false,
        WriteResult: false
      },
      applescript: {
        $: false,
        Application: false,
        Automation: false,
        console: false,
        delay: false,
        Library: false,
        ObjC: false,
        ObjectSpecifier: false,
        Path: false,
        Progress: false,
        Ref: false
      },
      serviceworker: {
        caches: false,
        Cache: false,
        CacheStorage: false,
        Client: false,
        clients: false,
        Clients: false,
        ExtendableEvent: false,
        ExtendableMessageEvent: false,
        FetchEvent: false,
        importScripts: false,
        registration: false,
        self: false,
        ServiceWorker: false,
        ServiceWorkerContainer: false,
        ServiceWorkerGlobalScope: false,
        ServiceWorkerMessageEvent: false,
        ServiceWorkerRegistration: false,
        skipWaiting: false,
        WindowClient: false
      },
      atomtest: {
        advanceClock: false,
        fakeClearInterval: false,
        fakeClearTimeout: false,
        fakeSetInterval: false,
        fakeSetTimeout: false,
        resetTimeouts: false,
        waitsForPromise: false
      },
      embertest: {
        andThen: false,
        click: false,
        currentPath: false,
        currentRouteName: false,
        currentURL: false,
        fillIn: false,
        find: false,
        findWithAssert: false,
        keyEvent: false,
        pauseTest: false,
        resumeTest: false,
        triggerEvent: false,
        visit: false
      },
      protractor: {
        $: false,
        $$: false,
        browser: false,
        By: false,
        by: false,
        DartObject: false,
        element: false,
        protractor: false
      },
      "shared-node-browser": {
        clearInterval: false,
        clearTimeout: false,
        console: false,
        setInterval: false,
        setTimeout: false
      },
      webextensions: {
        browser: false,
        chrome: false,
        opr: false
      },
      greasemonkey: {
        GM_addStyle: false,
        GM_deleteValue: false,
        GM_getResourceText: false,
        GM_getResourceURL: false,
        GM_getValue: false,
        GM_info: false,
        GM_listValues: false,
        GM_log: false,
        GM_openInTab: false,
        GM_registerMenuCommand: false,
        GM_setClipboard: false,
        GM_setValue: false,
        GM_xmlhttpRequest: false,
        unsafeWindow: false
      }
    };
  }
});

// node_modules/babel-traverse/node_modules/globals/index.js
var require_globals2 = __commonJS({
  "node_modules/babel-traverse/node_modules/globals/index.js"(exports2, module2) {
    module2.exports = require_globals();
  }
});

// node_modules/core-js/library/modules/_object-assign.js
var require_object_assign = __commonJS({
  "node_modules/core-js/library/modules/_object-assign.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var getKeys = require_object_keys();
    var gOPS = require_object_gops();
    var pIE = require_object_pie();
    var toObject = require_to_object();
    var IObject = require_iobject();
    var $assign = Object.assign;
    module2.exports = !$assign || require_fails()(function() {
      var A = {};
      var B = {};
      var S = Symbol();
      var K = "abcdefghijklmnopqrst";
      A[S] = 7;
      K.split("").forEach(function(k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || isEnum.call(S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js/library/modules/_collection-weak.js
var require_collection_weak = __commonJS({
  "node_modules/core-js/library/modules/_collection-weak.js"(exports2, module2) {
    "use strict";
    var redefineAll = require_redefine_all();
    var getWeak = require_meta().getWeak;
    var anObject = require_an_object();
    var isObject = require_is_object();
    var anInstance = require_an_instance();
    var forOf = require_for_of();
    var createArrayMethod = require_array_methods();
    var $has = require_has();
    var validate = require_validate_collection();
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var id = 0;
    var uncaughtFrozenStore = function(that) {
      return that._l || (that._l = new UncaughtFrozenStore());
    };
    var UncaughtFrozenStore = function() {
      this.a = [];
    };
    var findUncaughtFrozen = function(store, key) {
      return arrayFind(store.a, function(it) {
        return it[0] === key;
      });
    };
    UncaughtFrozenStore.prototype = {
      get: function(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry)
          return entry[1];
      },
      has: function(key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry)
          entry[1] = value;
        else
          this.a.push([key, value]);
      },
      "delete": function(key) {
        var index = arrayFindIndex(this.a, function(it) {
          return it[0] === key;
        });
        if (~index)
          this.a.splice(index, 1);
        return !!~index;
      }
    };
    module2.exports = {
      getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
          anInstance(that, C, NAME, "_i");
          that._t = NAME;
          that._i = id++;
          that._l = void 0;
          if (iterable != void 0)
            forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          "delete": function(key) {
            if (!isObject(key))
              return false;
            var data = getWeak(key);
            if (data === true)
              return uncaughtFrozenStore(validate(this, NAME))["delete"](key);
            return data && $has(data, this._i) && delete data[this._i];
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has(key) {
            if (!isObject(key))
              return false;
            var data = getWeak(key);
            if (data === true)
              return uncaughtFrozenStore(validate(this, NAME)).has(key);
            return data && $has(data, this._i);
          }
        });
        return C;
      },
      def: function(that, key, value) {
        var data = getWeak(anObject(key), true);
        if (data === true)
          uncaughtFrozenStore(that).set(key, value);
        else
          data[that._i] = value;
        return that;
      },
      ufstore: uncaughtFrozenStore
    };
  }
});

// node_modules/core-js/library/modules/es6.weak-map.js
var require_es6_weak_map = __commonJS({
  "node_modules/core-js/library/modules/es6.weak-map.js"(exports2, module2) {
    "use strict";
    var global2 = require_global();
    var each = require_array_methods()(0);
    var redefine = require_redefine();
    var meta = require_meta();
    var assign = require_object_assign();
    var weak = require_collection_weak();
    var isObject = require_is_object();
    var validate = require_validate_collection();
    var NATIVE_WEAK_MAP = require_validate_collection();
    var IS_IE11 = !global2.ActiveXObject && "ActiveXObject" in global2;
    var WEAK_MAP = "WeakMap";
    var getWeak = meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = weak.ufstore;
    var InternalMap;
    var wrapper = function(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    };
    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (isObject(key)) {
          var data = getWeak(key);
          if (data === true)
            return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : void 0;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
      }
    };
    var $WeakMap = module2.exports = require_collection()(WEAK_MAP, wrapper, methods, weak, true, true);
    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
      assign(InternalMap.prototype, methods);
      meta.NEED = true;
      each(["delete", "has", "get", "set"], function(key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function(a, b) {
          if (isObject(a) && !isExtensible(a)) {
            if (!this._f)
              this._f = new InternalMap();
            var result = this._f[key](a, b);
            return key == "set" ? this : result;
          }
          return method.call(this, a, b);
        });
      });
    }
  }
});

// node_modules/core-js/library/modules/es7.weak-map.of.js
var require_es7_weak_map_of = __commonJS({
  "node_modules/core-js/library/modules/es7.weak-map.of.js"() {
    require_set_collection_of()("WeakMap");
  }
});

// node_modules/core-js/library/modules/es7.weak-map.from.js
var require_es7_weak_map_from = __commonJS({
  "node_modules/core-js/library/modules/es7.weak-map.from.js"() {
    require_set_collection_from()("WeakMap");
  }
});

// node_modules/core-js/library/fn/weak-map.js
var require_weak_map = __commonJS({
  "node_modules/core-js/library/fn/weak-map.js"(exports2, module2) {
    require_es6_object_to_string();
    require_web_dom_iterable();
    require_es6_weak_map();
    require_es7_weak_map_of();
    require_es7_weak_map_from();
    module2.exports = require_core().WeakMap;
  }
});

// node_modules/babel-runtime/core-js/weak-map.js
var require_weak_map2 = __commonJS({
  "node_modules/babel-runtime/core-js/weak-map.js"(exports2, module2) {
    module2.exports = { "default": require_weak_map(), __esModule: true };
  }
});

// node_modules/babel-traverse/lib/cache.js
var require_cache = __commonJS({
  "node_modules/babel-traverse/lib/cache.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.scope = exports2.path = void 0;
    var _weakMap = require_weak_map2();
    var _weakMap2 = _interopRequireDefault(_weakMap);
    exports2.clear = clear;
    exports2.clearPath = clearPath;
    exports2.clearScope = clearScope;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var path2 = exports2.path = new _weakMap2.default();
    var scope = exports2.scope = new _weakMap2.default();
    function clear() {
      clearPath();
      clearScope();
    }
    function clearPath() {
      exports2.path = path2 = new _weakMap2.default();
    }
    function clearScope() {
      exports2.scope = scope = new _weakMap2.default();
    }
  }
});

// node_modules/babel-traverse/lib/scope/index.js
var require_scope = __commonJS({
  "node_modules/babel-traverse/lib/scope/index.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    var _keys = require_keys2();
    var _keys2 = _interopRequireDefault(_keys);
    var _create = require_create2();
    var _create2 = _interopRequireDefault(_create);
    var _map = require_map2();
    var _map2 = _interopRequireDefault(_map);
    var _classCallCheck2 = require_classCallCheck();
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    var _includes = require_includes();
    var _includes2 = _interopRequireDefault(_includes);
    var _repeat = require_repeat();
    var _repeat2 = _interopRequireDefault(_repeat);
    var _renamer = require_renamer();
    var _renamer2 = _interopRequireDefault(_renamer);
    var _index = require_lib5();
    var _index2 = _interopRequireDefault(_index);
    var _defaults = require_defaults();
    var _defaults2 = _interopRequireDefault(_defaults);
    var _babelMessages = require_lib2();
    var messages = _interopRequireWildcard(_babelMessages);
    var _binding2 = require_binding();
    var _binding3 = _interopRequireDefault(_binding2);
    var _globals = require_globals2();
    var _globals2 = _interopRequireDefault(_globals);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    var _cache = require_cache();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _crawlCallsCount = 0;
    function getCache(path2, parentScope, self2) {
      var scopes = _cache.scope.get(path2.node) || [];
      for (var _iterator = scopes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var scope = _ref;
        if (scope.parent === parentScope && scope.path === path2)
          return scope;
      }
      scopes.push(self2);
      if (!_cache.scope.has(path2.node)) {
        _cache.scope.set(path2.node, scopes);
      }
    }
    function gatherNodeParts(node, parts) {
      if (t4.isModuleDeclaration(node)) {
        if (node.source) {
          gatherNodeParts(node.source, parts);
        } else if (node.specifiers && node.specifiers.length) {
          for (var _iterator2 = node.specifiers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
            var _ref2;
            if (_isArray2) {
              if (_i2 >= _iterator2.length)
                break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done)
                break;
              _ref2 = _i2.value;
            }
            var specifier = _ref2;
            gatherNodeParts(specifier, parts);
          }
        } else if (node.declaration) {
          gatherNodeParts(node.declaration, parts);
        }
      } else if (t4.isModuleSpecifier(node)) {
        gatherNodeParts(node.local, parts);
      } else if (t4.isMemberExpression(node)) {
        gatherNodeParts(node.object, parts);
        gatherNodeParts(node.property, parts);
      } else if (t4.isIdentifier(node)) {
        parts.push(node.name);
      } else if (t4.isLiteral(node)) {
        parts.push(node.value);
      } else if (t4.isCallExpression(node)) {
        gatherNodeParts(node.callee, parts);
      } else if (t4.isObjectExpression(node) || t4.isObjectPattern(node)) {
        for (var _iterator3 = node.properties, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
          var _ref3;
          if (_isArray3) {
            if (_i3 >= _iterator3.length)
              break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done)
              break;
            _ref3 = _i3.value;
          }
          var prop = _ref3;
          gatherNodeParts(prop.key || prop.argument, parts);
        }
      }
    }
    var collectorVisitor = {
      For: function For(path2) {
        for (var _iterator4 = t4.FOR_INIT_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4); ; ) {
          var _ref4;
          if (_isArray4) {
            if (_i4 >= _iterator4.length)
              break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done)
              break;
            _ref4 = _i4.value;
          }
          var key = _ref4;
          var declar = path2.get(key);
          if (declar.isVar())
            path2.scope.getFunctionParent().registerBinding("var", declar);
        }
      },
      Declaration: function Declaration(path2) {
        if (path2.isBlockScoped())
          return;
        if (path2.isExportDeclaration() && path2.get("declaration").isDeclaration())
          return;
        path2.scope.getFunctionParent().registerDeclaration(path2);
      },
      ReferencedIdentifier: function ReferencedIdentifier(path2, state) {
        state.references.push(path2);
      },
      ForXStatement: function ForXStatement(path2, state) {
        var left = path2.get("left");
        if (left.isPattern() || left.isIdentifier()) {
          state.constantViolations.push(left);
        }
      },
      ExportDeclaration: {
        exit: function exit(path2) {
          var node = path2.node, scope = path2.scope;
          var declar = node.declaration;
          if (t4.isClassDeclaration(declar) || t4.isFunctionDeclaration(declar)) {
            var _id = declar.id;
            if (!_id)
              return;
            var binding = scope.getBinding(_id.name);
            if (binding)
              binding.reference(path2);
          } else if (t4.isVariableDeclaration(declar)) {
            for (var _iterator5 = declar.declarations, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5); ; ) {
              var _ref5;
              if (_isArray5) {
                if (_i5 >= _iterator5.length)
                  break;
                _ref5 = _iterator5[_i5++];
              } else {
                _i5 = _iterator5.next();
                if (_i5.done)
                  break;
                _ref5 = _i5.value;
              }
              var decl = _ref5;
              var ids = t4.getBindingIdentifiers(decl);
              for (var name in ids) {
                var _binding = scope.getBinding(name);
                if (_binding)
                  _binding.reference(path2);
              }
            }
          }
        }
      },
      LabeledStatement: function LabeledStatement(path2) {
        path2.scope.getProgramParent().addGlobal(path2.node);
        path2.scope.getBlockParent().registerDeclaration(path2);
      },
      AssignmentExpression: function AssignmentExpression(path2, state) {
        state.assignments.push(path2);
      },
      UpdateExpression: function UpdateExpression(path2, state) {
        state.constantViolations.push(path2.get("argument"));
      },
      UnaryExpression: function UnaryExpression(path2, state) {
        if (path2.node.operator === "delete") {
          state.constantViolations.push(path2.get("argument"));
        }
      },
      BlockScoped: function BlockScoped(path2) {
        var scope = path2.scope;
        if (scope.path === path2)
          scope = scope.parent;
        scope.getBlockParent().registerDeclaration(path2);
      },
      ClassDeclaration: function ClassDeclaration(path2) {
        var id = path2.node.id;
        if (!id)
          return;
        var name = id.name;
        path2.scope.bindings[name] = path2.scope.getBinding(name);
      },
      Block: function Block(path2) {
        var paths = path2.get("body");
        for (var _iterator6 = paths, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6); ; ) {
          var _ref6;
          if (_isArray6) {
            if (_i6 >= _iterator6.length)
              break;
            _ref6 = _iterator6[_i6++];
          } else {
            _i6 = _iterator6.next();
            if (_i6.done)
              break;
            _ref6 = _i6.value;
          }
          var bodyPath = _ref6;
          if (bodyPath.isFunctionDeclaration()) {
            path2.scope.getBlockParent().registerDeclaration(bodyPath);
          }
        }
      }
    };
    var uid = 0;
    var Scope = function() {
      function Scope2(path2, parentScope) {
        (0, _classCallCheck3.default)(this, Scope2);
        if (parentScope && parentScope.block === path2.node) {
          return parentScope;
        }
        var cached = getCache(path2, parentScope, this);
        if (cached)
          return cached;
        this.uid = uid++;
        this.parent = parentScope;
        this.hub = path2.hub;
        this.parentBlock = path2.parent;
        this.block = path2.node;
        this.path = path2;
        this.labels = new _map2.default();
      }
      Scope2.prototype.traverse = function traverse5(node, opts, state) {
        (0, _index2.default)(node, opts, this, state, this.path);
      };
      Scope2.prototype.generateDeclaredUidIdentifier = function generateDeclaredUidIdentifier() {
        var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "temp";
        var id = this.generateUidIdentifier(name);
        this.push({ id });
        return id;
      };
      Scope2.prototype.generateUidIdentifier = function generateUidIdentifier() {
        var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "temp";
        return t4.identifier(this.generateUid(name));
      };
      Scope2.prototype.generateUid = function generateUid() {
        var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "temp";
        name = t4.toIdentifier(name).replace(/^_+/, "").replace(/[0-9]+$/g, "");
        var uid2 = void 0;
        var i = 0;
        do {
          uid2 = this._generateUid(name, i);
          i++;
        } while (this.hasLabel(uid2) || this.hasBinding(uid2) || this.hasGlobal(uid2) || this.hasReference(uid2));
        var program = this.getProgramParent();
        program.references[uid2] = true;
        program.uids[uid2] = true;
        return uid2;
      };
      Scope2.prototype._generateUid = function _generateUid(name, i) {
        var id = name;
        if (i > 1)
          id += i;
        return "_" + id;
      };
      Scope2.prototype.generateUidIdentifierBasedOnNode = function generateUidIdentifierBasedOnNode(parent, defaultName) {
        var node = parent;
        if (t4.isAssignmentExpression(parent)) {
          node = parent.left;
        } else if (t4.isVariableDeclarator(parent)) {
          node = parent.id;
        } else if (t4.isObjectProperty(node) || t4.isObjectMethod(node)) {
          node = node.key;
        }
        var parts = [];
        gatherNodeParts(node, parts);
        var id = parts.join("$");
        id = id.replace(/^_/, "") || defaultName || "ref";
        return this.generateUidIdentifier(id.slice(0, 20));
      };
      Scope2.prototype.isStatic = function isStatic(node) {
        if (t4.isThisExpression(node) || t4.isSuper(node)) {
          return true;
        }
        if (t4.isIdentifier(node)) {
          var binding = this.getBinding(node.name);
          if (binding) {
            return binding.constant;
          } else {
            return this.hasBinding(node.name);
          }
        }
        return false;
      };
      Scope2.prototype.maybeGenerateMemoised = function maybeGenerateMemoised(node, dontPush) {
        if (this.isStatic(node)) {
          return null;
        } else {
          var _id2 = this.generateUidIdentifierBasedOnNode(node);
          if (!dontPush)
            this.push({ id: _id2 });
          return _id2;
        }
      };
      Scope2.prototype.checkBlockScopedCollisions = function checkBlockScopedCollisions(local, kind, name, id) {
        if (kind === "param")
          return;
        if (kind === "hoisted" && local.kind === "let")
          return;
        var duplicate = kind === "let" || local.kind === "let" || local.kind === "const" || local.kind === "module" || local.kind === "param" && (kind === "let" || kind === "const");
        if (duplicate) {
          throw this.hub.file.buildCodeFrameError(id, messages.get("scopeDuplicateDeclaration", name), TypeError);
        }
      };
      Scope2.prototype.rename = function rename(oldName, newName, block) {
        var binding = this.getBinding(oldName);
        if (binding) {
          newName = newName || this.generateUidIdentifier(oldName).name;
          return new _renamer2.default(binding, oldName, newName).rename(block);
        }
      };
      Scope2.prototype._renameFromMap = function _renameFromMap(map, oldName, newName, value) {
        if (map[oldName]) {
          map[newName] = value;
          map[oldName] = null;
        }
      };
      Scope2.prototype.dump = function dump() {
        var sep = (0, _repeat2.default)("-", 60);
        console.log(sep);
        var scope = this;
        do {
          console.log("#", scope.block.type);
          for (var name in scope.bindings) {
            var binding = scope.bindings[name];
            console.log(" -", name, {
              constant: binding.constant,
              references: binding.references,
              violations: binding.constantViolations.length,
              kind: binding.kind
            });
          }
        } while (scope = scope.parent);
        console.log(sep);
      };
      Scope2.prototype.toArray = function toArray(node, i) {
        var file = this.hub.file;
        if (t4.isIdentifier(node)) {
          var binding = this.getBinding(node.name);
          if (binding && binding.constant && binding.path.isGenericType("Array"))
            return node;
        }
        if (t4.isArrayExpression(node)) {
          return node;
        }
        if (t4.isIdentifier(node, { name: "arguments" })) {
          return t4.callExpression(t4.memberExpression(t4.memberExpression(t4.memberExpression(t4.identifier("Array"), t4.identifier("prototype")), t4.identifier("slice")), t4.identifier("call")), [node]);
        }
        var helperName = "toArray";
        var args = [node];
        if (i === true) {
          helperName = "toConsumableArray";
        } else if (i) {
          args.push(t4.numericLiteral(i));
          helperName = "slicedToArray";
        }
        return t4.callExpression(file.addHelper(helperName), args);
      };
      Scope2.prototype.hasLabel = function hasLabel(name) {
        return !!this.getLabel(name);
      };
      Scope2.prototype.getLabel = function getLabel(name) {
        return this.labels.get(name);
      };
      Scope2.prototype.registerLabel = function registerLabel(path2) {
        this.labels.set(path2.node.label.name, path2);
      };
      Scope2.prototype.registerDeclaration = function registerDeclaration(path2) {
        if (path2.isLabeledStatement()) {
          this.registerLabel(path2);
        } else if (path2.isFunctionDeclaration()) {
          this.registerBinding("hoisted", path2.get("id"), path2);
        } else if (path2.isVariableDeclaration()) {
          var declarations = path2.get("declarations");
          for (var _iterator7 = declarations, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7); ; ) {
            var _ref7;
            if (_isArray7) {
              if (_i7 >= _iterator7.length)
                break;
              _ref7 = _iterator7[_i7++];
            } else {
              _i7 = _iterator7.next();
              if (_i7.done)
                break;
              _ref7 = _i7.value;
            }
            var declar = _ref7;
            this.registerBinding(path2.node.kind, declar);
          }
        } else if (path2.isClassDeclaration()) {
          this.registerBinding("let", path2);
        } else if (path2.isImportDeclaration()) {
          var specifiers = path2.get("specifiers");
          for (var _iterator8 = specifiers, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8); ; ) {
            var _ref8;
            if (_isArray8) {
              if (_i8 >= _iterator8.length)
                break;
              _ref8 = _iterator8[_i8++];
            } else {
              _i8 = _iterator8.next();
              if (_i8.done)
                break;
              _ref8 = _i8.value;
            }
            var specifier = _ref8;
            this.registerBinding("module", specifier);
          }
        } else if (path2.isExportDeclaration()) {
          var _declar = path2.get("declaration");
          if (_declar.isClassDeclaration() || _declar.isFunctionDeclaration() || _declar.isVariableDeclaration()) {
            this.registerDeclaration(_declar);
          }
        } else {
          this.registerBinding("unknown", path2);
        }
      };
      Scope2.prototype.buildUndefinedNode = function buildUndefinedNode() {
        if (this.hasBinding("undefined")) {
          return t4.unaryExpression("void", t4.numericLiteral(0), true);
        } else {
          return t4.identifier("undefined");
        }
      };
      Scope2.prototype.registerConstantViolation = function registerConstantViolation(path2) {
        var ids = path2.getBindingIdentifiers();
        for (var name in ids) {
          var binding = this.getBinding(name);
          if (binding)
            binding.reassign(path2);
        }
      };
      Scope2.prototype.registerBinding = function registerBinding(kind, path2) {
        var bindingPath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : path2;
        if (!kind)
          throw new ReferenceError("no `kind`");
        if (path2.isVariableDeclaration()) {
          var declarators = path2.get("declarations");
          for (var _iterator9 = declarators, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9); ; ) {
            var _ref9;
            if (_isArray9) {
              if (_i9 >= _iterator9.length)
                break;
              _ref9 = _iterator9[_i9++];
            } else {
              _i9 = _iterator9.next();
              if (_i9.done)
                break;
              _ref9 = _i9.value;
            }
            var declar = _ref9;
            this.registerBinding(kind, declar);
          }
          return;
        }
        var parent = this.getProgramParent();
        var ids = path2.getBindingIdentifiers(true);
        for (var name in ids) {
          for (var _iterator10 = ids[name], _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10); ; ) {
            var _ref10;
            if (_isArray10) {
              if (_i10 >= _iterator10.length)
                break;
              _ref10 = _iterator10[_i10++];
            } else {
              _i10 = _iterator10.next();
              if (_i10.done)
                break;
              _ref10 = _i10.value;
            }
            var _id3 = _ref10;
            var local = this.getOwnBinding(name);
            if (local) {
              if (local.identifier === _id3)
                continue;
              this.checkBlockScopedCollisions(local, kind, name, _id3);
            }
            if (local && local.path.isFlow())
              local = null;
            parent.references[name] = true;
            this.bindings[name] = new _binding3.default({
              identifier: _id3,
              existing: local,
              scope: this,
              path: bindingPath,
              kind
            });
          }
        }
      };
      Scope2.prototype.addGlobal = function addGlobal(node) {
        this.globals[node.name] = node;
      };
      Scope2.prototype.hasUid = function hasUid(name) {
        var scope = this;
        do {
          if (scope.uids[name])
            return true;
        } while (scope = scope.parent);
        return false;
      };
      Scope2.prototype.hasGlobal = function hasGlobal(name) {
        var scope = this;
        do {
          if (scope.globals[name])
            return true;
        } while (scope = scope.parent);
        return false;
      };
      Scope2.prototype.hasReference = function hasReference(name) {
        var scope = this;
        do {
          if (scope.references[name])
            return true;
        } while (scope = scope.parent);
        return false;
      };
      Scope2.prototype.isPure = function isPure(node, constantsOnly) {
        if (t4.isIdentifier(node)) {
          var binding = this.getBinding(node.name);
          if (!binding)
            return false;
          if (constantsOnly)
            return binding.constant;
          return true;
        } else if (t4.isClass(node)) {
          if (node.superClass && !this.isPure(node.superClass, constantsOnly))
            return false;
          return this.isPure(node.body, constantsOnly);
        } else if (t4.isClassBody(node)) {
          for (var _iterator11 = node.body, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11); ; ) {
            var _ref11;
            if (_isArray11) {
              if (_i11 >= _iterator11.length)
                break;
              _ref11 = _iterator11[_i11++];
            } else {
              _i11 = _iterator11.next();
              if (_i11.done)
                break;
              _ref11 = _i11.value;
            }
            var method = _ref11;
            if (!this.isPure(method, constantsOnly))
              return false;
          }
          return true;
        } else if (t4.isBinary(node)) {
          return this.isPure(node.left, constantsOnly) && this.isPure(node.right, constantsOnly);
        } else if (t4.isArrayExpression(node)) {
          for (var _iterator12 = node.elements, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12); ; ) {
            var _ref12;
            if (_isArray12) {
              if (_i12 >= _iterator12.length)
                break;
              _ref12 = _iterator12[_i12++];
            } else {
              _i12 = _iterator12.next();
              if (_i12.done)
                break;
              _ref12 = _i12.value;
            }
            var elem = _ref12;
            if (!this.isPure(elem, constantsOnly))
              return false;
          }
          return true;
        } else if (t4.isObjectExpression(node)) {
          for (var _iterator13 = node.properties, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13); ; ) {
            var _ref13;
            if (_isArray13) {
              if (_i13 >= _iterator13.length)
                break;
              _ref13 = _iterator13[_i13++];
            } else {
              _i13 = _iterator13.next();
              if (_i13.done)
                break;
              _ref13 = _i13.value;
            }
            var prop = _ref13;
            if (!this.isPure(prop, constantsOnly))
              return false;
          }
          return true;
        } else if (t4.isClassMethod(node)) {
          if (node.computed && !this.isPure(node.key, constantsOnly))
            return false;
          if (node.kind === "get" || node.kind === "set")
            return false;
          return true;
        } else if (t4.isClassProperty(node) || t4.isObjectProperty(node)) {
          if (node.computed && !this.isPure(node.key, constantsOnly))
            return false;
          return this.isPure(node.value, constantsOnly);
        } else if (t4.isUnaryExpression(node)) {
          return this.isPure(node.argument, constantsOnly);
        } else {
          return t4.isPureish(node);
        }
      };
      Scope2.prototype.setData = function setData(key, val) {
        return this.data[key] = val;
      };
      Scope2.prototype.getData = function getData(key) {
        var scope = this;
        do {
          var data = scope.data[key];
          if (data != null)
            return data;
        } while (scope = scope.parent);
      };
      Scope2.prototype.removeData = function removeData(key) {
        var scope = this;
        do {
          var data = scope.data[key];
          if (data != null)
            scope.data[key] = null;
        } while (scope = scope.parent);
      };
      Scope2.prototype.init = function init() {
        if (!this.references)
          this.crawl();
      };
      Scope2.prototype.crawl = function crawl() {
        _crawlCallsCount++;
        this._crawl();
        _crawlCallsCount--;
      };
      Scope2.prototype._crawl = function _crawl() {
        var path2 = this.path;
        this.references = (0, _create2.default)(null);
        this.bindings = (0, _create2.default)(null);
        this.globals = (0, _create2.default)(null);
        this.uids = (0, _create2.default)(null);
        this.data = (0, _create2.default)(null);
        if (path2.isLoop()) {
          for (var _iterator14 = t4.FOR_INIT_KEYS, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : (0, _getIterator3.default)(_iterator14); ; ) {
            var _ref14;
            if (_isArray14) {
              if (_i14 >= _iterator14.length)
                break;
              _ref14 = _iterator14[_i14++];
            } else {
              _i14 = _iterator14.next();
              if (_i14.done)
                break;
              _ref14 = _i14.value;
            }
            var key = _ref14;
            var node = path2.get(key);
            if (node.isBlockScoped())
              this.registerBinding(node.node.kind, node);
          }
        }
        if (path2.isFunctionExpression() && path2.has("id")) {
          if (!path2.get("id").node[t4.NOT_LOCAL_BINDING]) {
            this.registerBinding("local", path2.get("id"), path2);
          }
        }
        if (path2.isClassExpression() && path2.has("id")) {
          if (!path2.get("id").node[t4.NOT_LOCAL_BINDING]) {
            this.registerBinding("local", path2);
          }
        }
        if (path2.isFunction()) {
          var params = path2.get("params");
          for (var _iterator15 = params, _isArray15 = Array.isArray(_iterator15), _i15 = 0, _iterator15 = _isArray15 ? _iterator15 : (0, _getIterator3.default)(_iterator15); ; ) {
            var _ref15;
            if (_isArray15) {
              if (_i15 >= _iterator15.length)
                break;
              _ref15 = _iterator15[_i15++];
            } else {
              _i15 = _iterator15.next();
              if (_i15.done)
                break;
              _ref15 = _i15.value;
            }
            var param = _ref15;
            this.registerBinding("param", param);
          }
        }
        if (path2.isCatchClause()) {
          this.registerBinding("let", path2);
        }
        var parent = this.getProgramParent();
        if (parent.crawling)
          return;
        var state = {
          references: [],
          constantViolations: [],
          assignments: []
        };
        this.crawling = true;
        path2.traverse(collectorVisitor, state);
        this.crawling = false;
        for (var _iterator16 = state.assignments, _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : (0, _getIterator3.default)(_iterator16); ; ) {
          var _ref16;
          if (_isArray16) {
            if (_i16 >= _iterator16.length)
              break;
            _ref16 = _iterator16[_i16++];
          } else {
            _i16 = _iterator16.next();
            if (_i16.done)
              break;
            _ref16 = _i16.value;
          }
          var _path = _ref16;
          var ids = _path.getBindingIdentifiers();
          var programParent = void 0;
          for (var name in ids) {
            if (_path.scope.getBinding(name))
              continue;
            programParent = programParent || _path.scope.getProgramParent();
            programParent.addGlobal(ids[name]);
          }
          _path.scope.registerConstantViolation(_path);
        }
        for (var _iterator17 = state.references, _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : (0, _getIterator3.default)(_iterator17); ; ) {
          var _ref17;
          if (_isArray17) {
            if (_i17 >= _iterator17.length)
              break;
            _ref17 = _iterator17[_i17++];
          } else {
            _i17 = _iterator17.next();
            if (_i17.done)
              break;
            _ref17 = _i17.value;
          }
          var ref = _ref17;
          var binding = ref.scope.getBinding(ref.node.name);
          if (binding) {
            binding.reference(ref);
          } else {
            ref.scope.getProgramParent().addGlobal(ref.node);
          }
        }
        for (var _iterator18 = state.constantViolations, _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : (0, _getIterator3.default)(_iterator18); ; ) {
          var _ref18;
          if (_isArray18) {
            if (_i18 >= _iterator18.length)
              break;
            _ref18 = _iterator18[_i18++];
          } else {
            _i18 = _iterator18.next();
            if (_i18.done)
              break;
            _ref18 = _i18.value;
          }
          var _path2 = _ref18;
          _path2.scope.registerConstantViolation(_path2);
        }
      };
      Scope2.prototype.push = function push(opts) {
        var path2 = this.path;
        if (!path2.isBlockStatement() && !path2.isProgram()) {
          path2 = this.getBlockParent().path;
        }
        if (path2.isSwitchStatement()) {
          path2 = this.getFunctionParent().path;
        }
        if (path2.isLoop() || path2.isCatchClause() || path2.isFunction()) {
          t4.ensureBlock(path2.node);
          path2 = path2.get("body");
        }
        var unique = opts.unique;
        var kind = opts.kind || "var";
        var blockHoist = opts._blockHoist == null ? 2 : opts._blockHoist;
        var dataKey = "declaration:" + kind + ":" + blockHoist;
        var declarPath = !unique && path2.getData(dataKey);
        if (!declarPath) {
          var declar = t4.variableDeclaration(kind, []);
          declar._generated = true;
          declar._blockHoist = blockHoist;
          var _path$unshiftContaine = path2.unshiftContainer("body", [declar]);
          declarPath = _path$unshiftContaine[0];
          if (!unique)
            path2.setData(dataKey, declarPath);
        }
        var declarator2 = t4.variableDeclarator(opts.id, opts.init);
        declarPath.node.declarations.push(declarator2);
        this.registerBinding(kind, declarPath.get("declarations").pop());
      };
      Scope2.prototype.getProgramParent = function getProgramParent() {
        var scope = this;
        do {
          if (scope.path.isProgram()) {
            return scope;
          }
        } while (scope = scope.parent);
        throw new Error("We couldn't find a Function or Program...");
      };
      Scope2.prototype.getFunctionParent = function getFunctionParent() {
        var scope = this;
        do {
          if (scope.path.isFunctionParent()) {
            return scope;
          }
        } while (scope = scope.parent);
        throw new Error("We couldn't find a Function or Program...");
      };
      Scope2.prototype.getBlockParent = function getBlockParent() {
        var scope = this;
        do {
          if (scope.path.isBlockParent()) {
            return scope;
          }
        } while (scope = scope.parent);
        throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
      };
      Scope2.prototype.getAllBindings = function getAllBindings() {
        var ids = (0, _create2.default)(null);
        var scope = this;
        do {
          (0, _defaults2.default)(ids, scope.bindings);
          scope = scope.parent;
        } while (scope);
        return ids;
      };
      Scope2.prototype.getAllBindingsOfKind = function getAllBindingsOfKind() {
        var ids = (0, _create2.default)(null);
        for (var _iterator19 = arguments, _isArray19 = Array.isArray(_iterator19), _i19 = 0, _iterator19 = _isArray19 ? _iterator19 : (0, _getIterator3.default)(_iterator19); ; ) {
          var _ref19;
          if (_isArray19) {
            if (_i19 >= _iterator19.length)
              break;
            _ref19 = _iterator19[_i19++];
          } else {
            _i19 = _iterator19.next();
            if (_i19.done)
              break;
            _ref19 = _i19.value;
          }
          var kind = _ref19;
          var scope = this;
          do {
            for (var name in scope.bindings) {
              var binding = scope.bindings[name];
              if (binding.kind === kind)
                ids[name] = binding;
            }
            scope = scope.parent;
          } while (scope);
        }
        return ids;
      };
      Scope2.prototype.bindingIdentifierEquals = function bindingIdentifierEquals(name, node) {
        return this.getBindingIdentifier(name) === node;
      };
      Scope2.prototype.warnOnFlowBinding = function warnOnFlowBinding(binding) {
        if (_crawlCallsCount === 0 && binding && binding.path.isFlow()) {
          console.warn("\n        You or one of the Babel plugins you are using are using Flow declarations as bindings.\n        Support for this will be removed in version 7. To find out the caller, grep for this\n        message and change it to a `console.trace()`.\n      ");
        }
        return binding;
      };
      Scope2.prototype.getBinding = function getBinding(name) {
        var scope = this;
        do {
          var binding = scope.getOwnBinding(name);
          if (binding)
            return this.warnOnFlowBinding(binding);
        } while (scope = scope.parent);
      };
      Scope2.prototype.getOwnBinding = function getOwnBinding(name) {
        return this.warnOnFlowBinding(this.bindings[name]);
      };
      Scope2.prototype.getBindingIdentifier = function getBindingIdentifier(name) {
        var info = this.getBinding(name);
        return info && info.identifier;
      };
      Scope2.prototype.getOwnBindingIdentifier = function getOwnBindingIdentifier(name) {
        var binding = this.bindings[name];
        return binding && binding.identifier;
      };
      Scope2.prototype.hasOwnBinding = function hasOwnBinding(name) {
        return !!this.getOwnBinding(name);
      };
      Scope2.prototype.hasBinding = function hasBinding(name, noGlobals) {
        if (!name)
          return false;
        if (this.hasOwnBinding(name))
          return true;
        if (this.parentHasBinding(name, noGlobals))
          return true;
        if (this.hasUid(name))
          return true;
        if (!noGlobals && (0, _includes2.default)(Scope2.globals, name))
          return true;
        if (!noGlobals && (0, _includes2.default)(Scope2.contextVariables, name))
          return true;
        return false;
      };
      Scope2.prototype.parentHasBinding = function parentHasBinding(name, noGlobals) {
        return this.parent && this.parent.hasBinding(name, noGlobals);
      };
      Scope2.prototype.moveBindingTo = function moveBindingTo(name, scope) {
        var info = this.getBinding(name);
        if (info) {
          info.scope.removeOwnBinding(name);
          info.scope = scope;
          scope.bindings[name] = info;
        }
      };
      Scope2.prototype.removeOwnBinding = function removeOwnBinding(name) {
        delete this.bindings[name];
      };
      Scope2.prototype.removeBinding = function removeBinding(name) {
        var info = this.getBinding(name);
        if (info) {
          info.scope.removeOwnBinding(name);
        }
        var scope = this;
        do {
          if (scope.uids[name]) {
            scope.uids[name] = false;
          }
        } while (scope = scope.parent);
      };
      return Scope2;
    }();
    Scope.globals = (0, _keys2.default)(_globals2.default.builtin);
    Scope.contextVariables = ["arguments", "undefined", "Infinity", "NaN"];
    exports2.default = Scope;
    module2.exports = exports2["default"];
  }
});

// node_modules/babel-traverse/lib/path/ancestry.js
var require_ancestry = __commonJS({
  "node_modules/babel-traverse/lib/path/ancestry.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.findParent = findParent;
    exports2.find = find;
    exports2.getFunctionParent = getFunctionParent;
    exports2.getStatementParent = getStatementParent;
    exports2.getEarliestCommonAncestorFrom = getEarliestCommonAncestorFrom;
    exports2.getDeepestCommonAncestorFrom = getDeepestCommonAncestorFrom;
    exports2.getAncestry = getAncestry;
    exports2.isAncestor = isAncestor;
    exports2.isDescendant = isDescendant;
    exports2.inType = inType;
    exports2.inShadow = inShadow;
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    var _index = require_path();
    var _index2 = _interopRequireDefault(_index);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function findParent(callback) {
      var path2 = this;
      while (path2 = path2.parentPath) {
        if (callback(path2))
          return path2;
      }
      return null;
    }
    function find(callback) {
      var path2 = this;
      do {
        if (callback(path2))
          return path2;
      } while (path2 = path2.parentPath);
      return null;
    }
    function getFunctionParent() {
      return this.findParent(function(path2) {
        return path2.isFunction() || path2.isProgram();
      });
    }
    function getStatementParent() {
      var path2 = this;
      do {
        if (Array.isArray(path2.container)) {
          return path2;
        }
      } while (path2 = path2.parentPath);
    }
    function getEarliestCommonAncestorFrom(paths) {
      return this.getDeepestCommonAncestorFrom(paths, function(deepest, i, ancestries) {
        var earliest = void 0;
        var keys = t4.VISITOR_KEYS[deepest.type];
        for (var _iterator = ancestries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var ancestry = _ref;
          var path2 = ancestry[i + 1];
          if (!earliest) {
            earliest = path2;
            continue;
          }
          if (path2.listKey && earliest.listKey === path2.listKey) {
            if (path2.key < earliest.key) {
              earliest = path2;
              continue;
            }
          }
          var earliestKeyIndex = keys.indexOf(earliest.parentKey);
          var currentKeyIndex = keys.indexOf(path2.parentKey);
          if (earliestKeyIndex > currentKeyIndex) {
            earliest = path2;
          }
        }
        return earliest;
      });
    }
    function getDeepestCommonAncestorFrom(paths, filter) {
      var _this = this;
      if (!paths.length) {
        return this;
      }
      if (paths.length === 1) {
        return paths[0];
      }
      var minDepth = Infinity;
      var lastCommonIndex = void 0, lastCommon = void 0;
      var ancestries = paths.map(function(path2) {
        var ancestry2 = [];
        do {
          ancestry2.unshift(path2);
        } while ((path2 = path2.parentPath) && path2 !== _this);
        if (ancestry2.length < minDepth) {
          minDepth = ancestry2.length;
        }
        return ancestry2;
      });
      var first = ancestries[0];
      depthLoop:
        for (var i = 0; i < minDepth; i++) {
          var shouldMatch = first[i];
          for (var _iterator2 = ancestries, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
            var _ref2;
            if (_isArray2) {
              if (_i2 >= _iterator2.length)
                break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done)
                break;
              _ref2 = _i2.value;
            }
            var ancestry = _ref2;
            if (ancestry[i] !== shouldMatch) {
              break depthLoop;
            }
          }
          lastCommonIndex = i;
          lastCommon = shouldMatch;
        }
      if (lastCommon) {
        if (filter) {
          return filter(lastCommon, lastCommonIndex, ancestries);
        } else {
          return lastCommon;
        }
      } else {
        throw new Error("Couldn't find intersection");
      }
    }
    function getAncestry() {
      var path2 = this;
      var paths = [];
      do {
        paths.push(path2);
      } while (path2 = path2.parentPath);
      return paths;
    }
    function isAncestor(maybeDescendant) {
      return maybeDescendant.isDescendant(this);
    }
    function isDescendant(maybeAncestor) {
      return !!this.findParent(function(parent) {
        return parent === maybeAncestor;
      });
    }
    function inType() {
      var path2 = this;
      while (path2) {
        for (var _iterator3 = arguments, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
          var _ref3;
          if (_isArray3) {
            if (_i3 >= _iterator3.length)
              break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done)
              break;
            _ref3 = _i3.value;
          }
          var type = _ref3;
          if (path2.node.type === type)
            return true;
        }
        path2 = path2.parentPath;
      }
      return false;
    }
    function inShadow(key) {
      var parentFn = this.isFunction() ? this : this.findParent(function(p) {
        return p.isFunction();
      });
      if (!parentFn)
        return;
      if (parentFn.isFunctionExpression() || parentFn.isFunctionDeclaration()) {
        var shadow = parentFn.node.shadow;
        if (shadow && (!key || shadow[key] !== false)) {
          return parentFn;
        }
      } else if (parentFn.isArrowFunctionExpression()) {
        return parentFn;
      }
      return null;
    }
  }
});

// node_modules/babel-traverse/lib/path/inference/inferer-reference.js
var require_inferer_reference = __commonJS({
  "node_modules/babel-traverse/lib/path/inference/inferer-reference.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.default = function(node) {
      if (!this.isReferenced())
        return;
      var binding = this.scope.getBinding(node.name);
      if (binding) {
        if (binding.identifier.typeAnnotation) {
          return binding.identifier.typeAnnotation;
        } else {
          return getTypeAnnotationBindingConstantViolations(this, node.name);
        }
      }
      if (node.name === "undefined") {
        return t4.voidTypeAnnotation();
      } else if (node.name === "NaN" || node.name === "Infinity") {
        return t4.numberTypeAnnotation();
      } else if (node.name === "arguments") {
      }
    };
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getTypeAnnotationBindingConstantViolations(path2, name) {
      var binding = path2.scope.getBinding(name);
      var types = [];
      path2.typeAnnotation = t4.unionTypeAnnotation(types);
      var functionConstantViolations = [];
      var constantViolations = getConstantViolationsBefore(binding, path2, functionConstantViolations);
      var testType = getConditionalAnnotation(path2, name);
      if (testType) {
        var testConstantViolations = getConstantViolationsBefore(binding, testType.ifStatement);
        constantViolations = constantViolations.filter(function(path3) {
          return testConstantViolations.indexOf(path3) < 0;
        });
        types.push(testType.typeAnnotation);
      }
      if (constantViolations.length) {
        constantViolations = constantViolations.concat(functionConstantViolations);
        for (var _iterator = constantViolations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var violation = _ref;
          types.push(violation.getTypeAnnotation());
        }
      }
      if (types.length) {
        return t4.createUnionTypeAnnotation(types);
      }
    }
    function getConstantViolationsBefore(binding, path2, functions) {
      var violations = binding.constantViolations.slice();
      violations.unshift(binding.path);
      return violations.filter(function(violation) {
        violation = violation.resolve();
        var status = violation._guessExecutionStatusRelativeTo(path2);
        if (functions && status === "function")
          functions.push(violation);
        return status === "before";
      });
    }
    function inferAnnotationFromBinaryExpression(name, path2) {
      var operator = path2.node.operator;
      var right = path2.get("right").resolve();
      var left = path2.get("left").resolve();
      var target = void 0;
      if (left.isIdentifier({ name })) {
        target = right;
      } else if (right.isIdentifier({ name })) {
        target = left;
      }
      if (target) {
        if (operator === "===") {
          return target.getTypeAnnotation();
        } else if (t4.BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
          return t4.numberTypeAnnotation();
        } else {
          return;
        }
      } else {
        if (operator !== "===")
          return;
      }
      var typeofPath = void 0;
      var typePath = void 0;
      if (left.isUnaryExpression({ operator: "typeof" })) {
        typeofPath = left;
        typePath = right;
      } else if (right.isUnaryExpression({ operator: "typeof" })) {
        typeofPath = right;
        typePath = left;
      }
      if (!typePath && !typeofPath)
        return;
      typePath = typePath.resolve();
      if (!typePath.isLiteral())
        return;
      var typeValue = typePath.node.value;
      if (typeof typeValue !== "string")
        return;
      if (!typeofPath.get("argument").isIdentifier({ name }))
        return;
      return t4.createTypeAnnotationBasedOnTypeof(typePath.node.value);
    }
    function getParentConditionalPath(path2) {
      var parentPath = void 0;
      while (parentPath = path2.parentPath) {
        if (parentPath.isIfStatement() || parentPath.isConditionalExpression()) {
          if (path2.key === "test") {
            return;
          } else {
            return parentPath;
          }
        } else {
          path2 = parentPath;
        }
      }
    }
    function getConditionalAnnotation(path2, name) {
      var ifStatement = getParentConditionalPath(path2);
      if (!ifStatement)
        return;
      var test = ifStatement.get("test");
      var paths = [test];
      var types = [];
      do {
        var _path = paths.shift().resolve();
        if (_path.isLogicalExpression()) {
          paths.push(_path.get("left"));
          paths.push(_path.get("right"));
        }
        if (_path.isBinaryExpression()) {
          var type = inferAnnotationFromBinaryExpression(name, _path);
          if (type)
            types.push(type);
        }
      } while (paths.length);
      if (types.length) {
        return {
          typeAnnotation: t4.createUnionTypeAnnotation(types),
          ifStatement
        };
      } else {
        return getConditionalAnnotation(ifStatement, name);
      }
    }
    module2.exports = exports2["default"];
  }
});

// node_modules/babel-traverse/lib/path/inference/inferers.js
var require_inferers = __commonJS({
  "node_modules/babel-traverse/lib/path/inference/inferers.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.ClassDeclaration = exports2.ClassExpression = exports2.FunctionDeclaration = exports2.ArrowFunctionExpression = exports2.FunctionExpression = exports2.Identifier = void 0;
    var _infererReference = require_inferer_reference();
    Object.defineProperty(exports2, "Identifier", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_infererReference).default;
      }
    });
    exports2.VariableDeclarator = VariableDeclarator;
    exports2.TypeCastExpression = TypeCastExpression;
    exports2.NewExpression = NewExpression;
    exports2.TemplateLiteral = TemplateLiteral;
    exports2.UnaryExpression = UnaryExpression;
    exports2.BinaryExpression = BinaryExpression;
    exports2.LogicalExpression = LogicalExpression;
    exports2.ConditionalExpression = ConditionalExpression;
    exports2.SequenceExpression = SequenceExpression;
    exports2.AssignmentExpression = AssignmentExpression;
    exports2.UpdateExpression = UpdateExpression;
    exports2.StringLiteral = StringLiteral;
    exports2.NumericLiteral = NumericLiteral;
    exports2.BooleanLiteral = BooleanLiteral;
    exports2.NullLiteral = NullLiteral;
    exports2.RegExpLiteral = RegExpLiteral;
    exports2.ObjectExpression = ObjectExpression;
    exports2.ArrayExpression = ArrayExpression;
    exports2.RestElement = RestElement;
    exports2.CallExpression = CallExpression;
    exports2.TaggedTemplateExpression = TaggedTemplateExpression;
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function VariableDeclarator() {
      var id = this.get("id");
      if (id.isIdentifier()) {
        return this.get("init").getTypeAnnotation();
      } else {
        return;
      }
    }
    function TypeCastExpression(node) {
      return node.typeAnnotation;
    }
    TypeCastExpression.validParent = true;
    function NewExpression(node) {
      if (this.get("callee").isIdentifier()) {
        return t4.genericTypeAnnotation(node.callee);
      }
    }
    function TemplateLiteral() {
      return t4.stringTypeAnnotation();
    }
    function UnaryExpression(node) {
      var operator = node.operator;
      if (operator === "void") {
        return t4.voidTypeAnnotation();
      } else if (t4.NUMBER_UNARY_OPERATORS.indexOf(operator) >= 0) {
        return t4.numberTypeAnnotation();
      } else if (t4.STRING_UNARY_OPERATORS.indexOf(operator) >= 0) {
        return t4.stringTypeAnnotation();
      } else if (t4.BOOLEAN_UNARY_OPERATORS.indexOf(operator) >= 0) {
        return t4.booleanTypeAnnotation();
      }
    }
    function BinaryExpression(node) {
      var operator = node.operator;
      if (t4.NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
        return t4.numberTypeAnnotation();
      } else if (t4.BOOLEAN_BINARY_OPERATORS.indexOf(operator) >= 0) {
        return t4.booleanTypeAnnotation();
      } else if (operator === "+") {
        var right = this.get("right");
        var left = this.get("left");
        if (left.isBaseType("number") && right.isBaseType("number")) {
          return t4.numberTypeAnnotation();
        } else if (left.isBaseType("string") || right.isBaseType("string")) {
          return t4.stringTypeAnnotation();
        }
        return t4.unionTypeAnnotation([t4.stringTypeAnnotation(), t4.numberTypeAnnotation()]);
      }
    }
    function LogicalExpression() {
      return t4.createUnionTypeAnnotation([this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()]);
    }
    function ConditionalExpression() {
      return t4.createUnionTypeAnnotation([this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()]);
    }
    function SequenceExpression() {
      return this.get("expressions").pop().getTypeAnnotation();
    }
    function AssignmentExpression() {
      return this.get("right").getTypeAnnotation();
    }
    function UpdateExpression(node) {
      var operator = node.operator;
      if (operator === "++" || operator === "--") {
        return t4.numberTypeAnnotation();
      }
    }
    function StringLiteral() {
      return t4.stringTypeAnnotation();
    }
    function NumericLiteral() {
      return t4.numberTypeAnnotation();
    }
    function BooleanLiteral() {
      return t4.booleanTypeAnnotation();
    }
    function NullLiteral() {
      return t4.nullLiteralTypeAnnotation();
    }
    function RegExpLiteral() {
      return t4.genericTypeAnnotation(t4.identifier("RegExp"));
    }
    function ObjectExpression() {
      return t4.genericTypeAnnotation(t4.identifier("Object"));
    }
    function ArrayExpression() {
      return t4.genericTypeAnnotation(t4.identifier("Array"));
    }
    function RestElement() {
      return ArrayExpression();
    }
    RestElement.validParent = true;
    function Func() {
      return t4.genericTypeAnnotation(t4.identifier("Function"));
    }
    exports2.FunctionExpression = Func;
    exports2.ArrowFunctionExpression = Func;
    exports2.FunctionDeclaration = Func;
    exports2.ClassExpression = Func;
    exports2.ClassDeclaration = Func;
    function CallExpression() {
      return resolveCall(this.get("callee"));
    }
    function TaggedTemplateExpression() {
      return resolveCall(this.get("tag"));
    }
    function resolveCall(callee) {
      callee = callee.resolve();
      if (callee.isFunction()) {
        if (callee.is("async")) {
          if (callee.is("generator")) {
            return t4.genericTypeAnnotation(t4.identifier("AsyncIterator"));
          } else {
            return t4.genericTypeAnnotation(t4.identifier("Promise"));
          }
        } else {
          if (callee.node.returnType) {
            return callee.node.returnType;
          } else {
          }
        }
      }
    }
  }
});

// node_modules/babel-traverse/lib/path/inference/index.js
var require_inference = __commonJS({
  "node_modules/babel-traverse/lib/path/inference/index.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.getTypeAnnotation = getTypeAnnotation;
    exports2._getTypeAnnotation = _getTypeAnnotation;
    exports2.isBaseType = isBaseType;
    exports2.couldBeBaseType = couldBeBaseType;
    exports2.baseTypeStrictlyMatches = baseTypeStrictlyMatches;
    exports2.isGenericType = isGenericType;
    var _inferers = require_inferers();
    var inferers = _interopRequireWildcard(_inferers);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getTypeAnnotation() {
      if (this.typeAnnotation)
        return this.typeAnnotation;
      var type = this._getTypeAnnotation() || t4.anyTypeAnnotation();
      if (t4.isTypeAnnotation(type))
        type = type.typeAnnotation;
      return this.typeAnnotation = type;
    }
    function _getTypeAnnotation() {
      var node = this.node;
      if (!node) {
        if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
          var declar = this.parentPath.parentPath;
          var declarParent = declar.parentPath;
          if (declar.key === "left" && declarParent.isForInStatement()) {
            return t4.stringTypeAnnotation();
          }
          if (declar.key === "left" && declarParent.isForOfStatement()) {
            return t4.anyTypeAnnotation();
          }
          return t4.voidTypeAnnotation();
        } else {
          return;
        }
      }
      if (node.typeAnnotation) {
        return node.typeAnnotation;
      }
      var inferer = inferers[node.type];
      if (inferer) {
        return inferer.call(this, node);
      }
      inferer = inferers[this.parentPath.type];
      if (inferer && inferer.validParent) {
        return this.parentPath.getTypeAnnotation();
      }
    }
    function isBaseType(baseName, soft) {
      return _isBaseType(baseName, this.getTypeAnnotation(), soft);
    }
    function _isBaseType(baseName, type, soft) {
      if (baseName === "string") {
        return t4.isStringTypeAnnotation(type);
      } else if (baseName === "number") {
        return t4.isNumberTypeAnnotation(type);
      } else if (baseName === "boolean") {
        return t4.isBooleanTypeAnnotation(type);
      } else if (baseName === "any") {
        return t4.isAnyTypeAnnotation(type);
      } else if (baseName === "mixed") {
        return t4.isMixedTypeAnnotation(type);
      } else if (baseName === "empty") {
        return t4.isEmptyTypeAnnotation(type);
      } else if (baseName === "void") {
        return t4.isVoidTypeAnnotation(type);
      } else {
        if (soft) {
          return false;
        } else {
          throw new Error("Unknown base type " + baseName);
        }
      }
    }
    function couldBeBaseType(name) {
      var type = this.getTypeAnnotation();
      if (t4.isAnyTypeAnnotation(type))
        return true;
      if (t4.isUnionTypeAnnotation(type)) {
        for (var _iterator = type.types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var type2 = _ref;
          if (t4.isAnyTypeAnnotation(type2) || _isBaseType(name, type2, true)) {
            return true;
          }
        }
        return false;
      } else {
        return _isBaseType(name, type, true);
      }
    }
    function baseTypeStrictlyMatches(right) {
      var left = this.getTypeAnnotation();
      right = right.getTypeAnnotation();
      if (!t4.isAnyTypeAnnotation(left) && t4.isFlowBaseAnnotation(left)) {
        return right.type === left.type;
      }
    }
    function isGenericType(genericName) {
      var type = this.getTypeAnnotation();
      return t4.isGenericTypeAnnotation(type) && t4.isIdentifier(type.id, { name: genericName });
    }
  }
});

// node_modules/babel-code-frame/node_modules/js-tokens/index.js
var require_js_tokens = __commonJS({
  "node_modules/babel-code-frame/node_modules/js-tokens/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
    exports2.matchToToken = function(match) {
      var token = { type: "invalid", value: match[0] };
      if (match[1])
        token.type = "string", token.closed = !!(match[3] || match[4]);
      else if (match[5])
        token.type = "comment";
      else if (match[6])
        token.type = "comment", token.closed = !!match[7];
      else if (match[8])
        token.type = "regex";
      else if (match[9])
        token.type = "number";
      else if (match[10])
        token.type = "name";
      else if (match[11])
        token.type = "punctuator";
      else if (match[12])
        token.type = "whitespace";
      return token;
    };
  }
});

// node_modules/babel-code-frame/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/babel-code-frame/lib/index.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2.default = function(rawLines, lineNumber, colNumber) {
      var opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      colNumber = Math.max(colNumber, 0);
      var highlighted = opts.highlightCode && _chalk2.default.supportsColor || opts.forceColor;
      var chalk = _chalk2.default;
      if (opts.forceColor) {
        chalk = new _chalk2.default.constructor({ enabled: true });
      }
      var maybeHighlight = function maybeHighlight2(chalkFn, string) {
        return highlighted ? chalkFn(string) : string;
      };
      var defs = getDefs(chalk);
      if (highlighted)
        rawLines = highlight(defs, rawLines);
      var linesAbove = opts.linesAbove || 2;
      var linesBelow = opts.linesBelow || 3;
      var lines = rawLines.split(NEWLINE);
      var start = Math.max(lineNumber - (linesAbove + 1), 0);
      var end = Math.min(lines.length, lineNumber + linesBelow);
      if (!lineNumber && !colNumber) {
        start = 0;
        end = lines.length;
      }
      var numberMaxWidth = String(end).length;
      var frame = lines.slice(start, end).map(function(line, index) {
        var number = start + 1 + index;
        var paddedNumber = (" " + number).slice(-numberMaxWidth);
        var gutter = " " + paddedNumber + " | ";
        if (number === lineNumber) {
          var markerLine = "";
          if (colNumber) {
            var markerSpacing = line.slice(0, colNumber - 1).replace(/[^\t]/g, " ");
            markerLine = ["\n ", maybeHighlight(defs.gutter, gutter.replace(/\d/g, " ")), markerSpacing, maybeHighlight(defs.marker, "^")].join("");
          }
          return [maybeHighlight(defs.marker, ">"), maybeHighlight(defs.gutter, gutter), line, markerLine].join("");
        } else {
          return " " + maybeHighlight(defs.gutter, gutter) + line;
        }
      }).join("\n");
      if (highlighted) {
        return chalk.reset(frame);
      } else {
        return frame;
      }
    };
    var _jsTokens = require_js_tokens();
    var _jsTokens2 = _interopRequireDefault(_jsTokens);
    var _esutils = require_utils();
    var _esutils2 = _interopRequireDefault(_esutils);
    var _chalk = require("chalk");
    var _chalk2 = _interopRequireDefault(_chalk);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getDefs(chalk) {
      return {
        keyword: chalk.cyan,
        capitalized: chalk.yellow,
        jsx_tag: chalk.yellow,
        punctuator: chalk.yellow,
        number: chalk.magenta,
        string: chalk.green,
        regex: chalk.magenta,
        comment: chalk.grey,
        invalid: chalk.white.bgRed.bold,
        gutter: chalk.grey,
        marker: chalk.red.bold
      };
    }
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    var JSX_TAG = /^[a-z][\w-]*$/i;
    var BRACKET = /^[()\[\]{}]$/;
    function getTokenType(match) {
      var _match$slice = match.slice(-2), offset = _match$slice[0], text = _match$slice[1];
      var token = (0, _jsTokens.matchToToken)(match);
      if (token.type === "name") {
        if (_esutils2.default.keyword.isReservedWordES6(token.value)) {
          return "keyword";
        }
        if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.substr(offset - 2, 2) == "</")) {
          return "jsx_tag";
        }
        if (token.value[0] !== token.value[0].toLowerCase()) {
          return "capitalized";
        }
      }
      if (token.type === "punctuator" && BRACKET.test(token.value)) {
        return "bracket";
      }
      return token.type;
    }
    function highlight(defs, text) {
      return text.replace(_jsTokens2.default, function() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var type = getTokenType(args);
        var colorize = defs[type];
        if (colorize) {
          return args[0].split(NEWLINE).map(function(str) {
            return colorize(str);
          }).join("\n");
        } else {
          return args[0];
        }
      });
    }
    module2.exports = exports2["default"];
  }
});

// node_modules/babylon/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/babylon/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function makePredicate(words) {
      words = words.split(" ");
      return function(str) {
        return words.indexOf(str) >= 0;
      };
    }
    var reservedWords = {
      6: makePredicate("enum await"),
      strict: makePredicate("implements interface let package private protected public static yield"),
      strictBind: makePredicate("eval arguments")
    };
    var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super");
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA900-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 17, 26, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 449, 56, 264, 8, 2, 36, 18, 0, 50, 29, 881, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 0, 32, 6124, 20, 754, 9486, 1, 3071, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 10591, 541];
    var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 838, 7, 2, 7, 17, 9, 57, 21, 2, 13, 19882, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];
    function isInAstralSet(code, set) {
      var pos = 65536;
      for (var i = 0; i < set.length; i += 2) {
        pos += set[i];
        if (pos > code)
          return false;
        pos += set[i + 1];
        if (pos >= code)
          return true;
      }
    }
    function isIdentifierStart(code) {
      if (code < 65)
        return code === 36;
      if (code < 91)
        return true;
      if (code < 97)
        return code === 95;
      if (code < 123)
        return true;
      if (code <= 65535)
        return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
      return isInAstralSet(code, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code) {
      if (code < 48)
        return code === 36;
      if (code < 58)
        return true;
      if (code < 65)
        return false;
      if (code < 91)
        return true;
      if (code < 97)
        return code === 95;
      if (code < 123)
        return true;
      if (code <= 65535)
        return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
      return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
    }
    var defaultOptions = {
      // Source type ("script" or "module") for different semantics
      sourceType: "script",
      // Source filename.
      sourceFilename: void 0,
      // Line from which to start counting source. Useful for
      // integration with other tools.
      startLine: 1,
      // When enabled, a return at the top level is not considered an
      // error.
      allowReturnOutsideFunction: false,
      // When enabled, import/export statements are not constrained to
      // appearing at the top of the program.
      allowImportExportEverywhere: false,
      // TODO
      allowSuperOutsideMethod: false,
      // An array of plugins to enable
      plugins: [],
      // TODO
      strictMode: null
    };
    function getOptions(opts) {
      var options = {};
      for (var key in defaultOptions) {
        options[key] = opts && key in opts ? opts[key] : defaultOptions[key];
      }
      return options;
    }
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var inherits = function(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    var possibleConstructorReturn = function(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    };
    var beforeExpr = true;
    var startsExpr = true;
    var isLoop = true;
    var isAssign = true;
    var prefix = true;
    var postfix = true;
    var TokenType = function TokenType2(label) {
      var conf = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      classCallCheck(this, TokenType2);
      this.label = label;
      this.keyword = conf.keyword;
      this.beforeExpr = !!conf.beforeExpr;
      this.startsExpr = !!conf.startsExpr;
      this.rightAssociative = !!conf.rightAssociative;
      this.isLoop = !!conf.isLoop;
      this.isAssign = !!conf.isAssign;
      this.prefix = !!conf.prefix;
      this.postfix = !!conf.postfix;
      this.binop = conf.binop || null;
      this.updateContext = null;
    };
    var KeywordTokenType = function(_TokenType) {
      inherits(KeywordTokenType2, _TokenType);
      function KeywordTokenType2(name) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        classCallCheck(this, KeywordTokenType2);
        options.keyword = name;
        return possibleConstructorReturn(this, _TokenType.call(this, name, options));
      }
      return KeywordTokenType2;
    }(TokenType);
    var BinopTokenType = function(_TokenType2) {
      inherits(BinopTokenType2, _TokenType2);
      function BinopTokenType2(name, prec) {
        classCallCheck(this, BinopTokenType2);
        return possibleConstructorReturn(this, _TokenType2.call(this, name, { beforeExpr, binop: prec }));
      }
      return BinopTokenType2;
    }(TokenType);
    var types = {
      num: new TokenType("num", { startsExpr }),
      regexp: new TokenType("regexp", { startsExpr }),
      string: new TokenType("string", { startsExpr }),
      name: new TokenType("name", { startsExpr }),
      eof: new TokenType("eof"),
      // Punctuation token types.
      bracketL: new TokenType("[", { beforeExpr, startsExpr }),
      bracketR: new TokenType("]"),
      braceL: new TokenType("{", { beforeExpr, startsExpr }),
      braceBarL: new TokenType("{|", { beforeExpr, startsExpr }),
      braceR: new TokenType("}"),
      braceBarR: new TokenType("|}"),
      parenL: new TokenType("(", { beforeExpr, startsExpr }),
      parenR: new TokenType(")"),
      comma: new TokenType(",", { beforeExpr }),
      semi: new TokenType(";", { beforeExpr }),
      colon: new TokenType(":", { beforeExpr }),
      doubleColon: new TokenType("::", { beforeExpr }),
      dot: new TokenType("."),
      question: new TokenType("?", { beforeExpr }),
      arrow: new TokenType("=>", { beforeExpr }),
      template: new TokenType("template"),
      ellipsis: new TokenType("...", { beforeExpr }),
      backQuote: new TokenType("`", { startsExpr }),
      dollarBraceL: new TokenType("${", { beforeExpr, startsExpr }),
      at: new TokenType("@"),
      // Operators. These carry several kinds of properties to help the
      // parser use them properly (the presence of these properties is
      // what categorizes them as operators).
      //
      // `binop`, when present, specifies that this operator is a binary
      // operator, and will refer to its precedence.
      //
      // `prefix` and `postfix` mark the operator as a prefix or postfix
      // unary operator.
      //
      // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
      // binary operators with a very low precedence, that should result
      // in AssignmentExpression nodes.
      eq: new TokenType("=", { beforeExpr, isAssign }),
      assign: new TokenType("_=", { beforeExpr, isAssign }),
      incDec: new TokenType("++/--", { prefix, postfix, startsExpr }),
      prefix: new TokenType("prefix", { beforeExpr, prefix, startsExpr }),
      logicalOR: new BinopTokenType("||", 1),
      logicalAND: new BinopTokenType("&&", 2),
      bitwiseOR: new BinopTokenType("|", 3),
      bitwiseXOR: new BinopTokenType("^", 4),
      bitwiseAND: new BinopTokenType("&", 5),
      equality: new BinopTokenType("==/!=", 6),
      relational: new BinopTokenType("</>", 7),
      bitShift: new BinopTokenType("<</>>", 8),
      plusMin: new TokenType("+/-", { beforeExpr, binop: 9, prefix, startsExpr }),
      modulo: new BinopTokenType("%", 10),
      star: new BinopTokenType("*", 10),
      slash: new BinopTokenType("/", 10),
      exponent: new TokenType("**", { beforeExpr, binop: 11, rightAssociative: true })
    };
    var keywords = {
      "break": new KeywordTokenType("break"),
      "case": new KeywordTokenType("case", { beforeExpr }),
      "catch": new KeywordTokenType("catch"),
      "continue": new KeywordTokenType("continue"),
      "debugger": new KeywordTokenType("debugger"),
      "default": new KeywordTokenType("default", { beforeExpr }),
      "do": new KeywordTokenType("do", { isLoop, beforeExpr }),
      "else": new KeywordTokenType("else", { beforeExpr }),
      "finally": new KeywordTokenType("finally"),
      "for": new KeywordTokenType("for", { isLoop }),
      "function": new KeywordTokenType("function", { startsExpr }),
      "if": new KeywordTokenType("if"),
      "return": new KeywordTokenType("return", { beforeExpr }),
      "switch": new KeywordTokenType("switch"),
      "throw": new KeywordTokenType("throw", { beforeExpr }),
      "try": new KeywordTokenType("try"),
      "var": new KeywordTokenType("var"),
      "let": new KeywordTokenType("let"),
      "const": new KeywordTokenType("const"),
      "while": new KeywordTokenType("while", { isLoop }),
      "with": new KeywordTokenType("with"),
      "new": new KeywordTokenType("new", { beforeExpr, startsExpr }),
      "this": new KeywordTokenType("this", { startsExpr }),
      "super": new KeywordTokenType("super", { startsExpr }),
      "class": new KeywordTokenType("class"),
      "extends": new KeywordTokenType("extends", { beforeExpr }),
      "export": new KeywordTokenType("export"),
      "import": new KeywordTokenType("import", { startsExpr }),
      "yield": new KeywordTokenType("yield", { beforeExpr, startsExpr }),
      "null": new KeywordTokenType("null", { startsExpr }),
      "true": new KeywordTokenType("true", { startsExpr }),
      "false": new KeywordTokenType("false", { startsExpr }),
      "in": new KeywordTokenType("in", { beforeExpr, binop: 7 }),
      "instanceof": new KeywordTokenType("instanceof", { beforeExpr, binop: 7 }),
      "typeof": new KeywordTokenType("typeof", { beforeExpr, prefix, startsExpr }),
      "void": new KeywordTokenType("void", { beforeExpr, prefix, startsExpr }),
      "delete": new KeywordTokenType("delete", { beforeExpr, prefix, startsExpr })
    };
    Object.keys(keywords).forEach(function(name) {
      types["_" + name] = keywords[name];
    });
    var lineBreak = /\r\n?|\n|\u2028|\u2029/;
    var lineBreakG = new RegExp(lineBreak.source, "g");
    function isNewLine(code) {
      return code === 10 || code === 13 || code === 8232 || code === 8233;
    }
    var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
    var TokContext = function TokContext2(token, isExpr, preserveSpace, override) {
      classCallCheck(this, TokContext2);
      this.token = token;
      this.isExpr = !!isExpr;
      this.preserveSpace = !!preserveSpace;
      this.override = override;
    };
    var types$1 = {
      braceStatement: new TokContext("{", false),
      braceExpression: new TokContext("{", true),
      templateQuasi: new TokContext("${", true),
      parenStatement: new TokContext("(", false),
      parenExpression: new TokContext("(", true),
      template: new TokContext("`", true, true, function(p) {
        return p.readTmplToken();
      }),
      functionExpression: new TokContext("function", true)
    };
    types.parenR.updateContext = types.braceR.updateContext = function() {
      if (this.state.context.length === 1) {
        this.state.exprAllowed = true;
        return;
      }
      var out = this.state.context.pop();
      if (out === types$1.braceStatement && this.curContext() === types$1.functionExpression) {
        this.state.context.pop();
        this.state.exprAllowed = false;
      } else if (out === types$1.templateQuasi) {
        this.state.exprAllowed = true;
      } else {
        this.state.exprAllowed = !out.isExpr;
      }
    };
    types.name.updateContext = function(prevType) {
      this.state.exprAllowed = false;
      if (prevType === types._let || prevType === types._const || prevType === types._var) {
        if (lineBreak.test(this.input.slice(this.state.end))) {
          this.state.exprAllowed = true;
        }
      }
    };
    types.braceL.updateContext = function(prevType) {
      this.state.context.push(this.braceIsBlock(prevType) ? types$1.braceStatement : types$1.braceExpression);
      this.state.exprAllowed = true;
    };
    types.dollarBraceL.updateContext = function() {
      this.state.context.push(types$1.templateQuasi);
      this.state.exprAllowed = true;
    };
    types.parenL.updateContext = function(prevType) {
      var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
      this.state.context.push(statementParens ? types$1.parenStatement : types$1.parenExpression);
      this.state.exprAllowed = true;
    };
    types.incDec.updateContext = function() {
    };
    types._function.updateContext = function() {
      if (this.curContext() !== types$1.braceStatement) {
        this.state.context.push(types$1.functionExpression);
      }
      this.state.exprAllowed = false;
    };
    types.backQuote.updateContext = function() {
      if (this.curContext() === types$1.template) {
        this.state.context.pop();
      } else {
        this.state.context.push(types$1.template);
      }
      this.state.exprAllowed = false;
    };
    var Position = function Position2(line, col) {
      classCallCheck(this, Position2);
      this.line = line;
      this.column = col;
    };
    var SourceLocation = function SourceLocation2(start, end) {
      classCallCheck(this, SourceLocation2);
      this.start = start;
      this.end = end;
    };
    function getLineInfo(input, offset) {
      for (var line = 1, cur = 0; ; ) {
        lineBreakG.lastIndex = cur;
        var match = lineBreakG.exec(input);
        if (match && match.index < offset) {
          ++line;
          cur = match.index + match[0].length;
        } else {
          return new Position(line, offset - cur);
        }
      }
    }
    var State = function() {
      function State2() {
        classCallCheck(this, State2);
      }
      State2.prototype.init = function init(options, input) {
        this.strict = options.strictMode === false ? false : options.sourceType === "module";
        this.input = input;
        this.potentialArrowAt = -1;
        this.inMethod = this.inFunction = this.inGenerator = this.inAsync = this.inPropertyName = this.inType = this.inClassProperty = this.noAnonFunctionType = false;
        this.labels = [];
        this.decorators = [];
        this.tokens = [];
        this.comments = [];
        this.trailingComments = [];
        this.leadingComments = [];
        this.commentStack = [];
        this.pos = this.lineStart = 0;
        this.curLine = options.startLine;
        this.type = types.eof;
        this.value = null;
        this.start = this.end = this.pos;
        this.startLoc = this.endLoc = this.curPosition();
        this.lastTokEndLoc = this.lastTokStartLoc = null;
        this.lastTokStart = this.lastTokEnd = this.pos;
        this.context = [types$1.braceStatement];
        this.exprAllowed = true;
        this.containsEsc = this.containsOctal = false;
        this.octalPosition = null;
        this.invalidTemplateEscapePosition = null;
        this.exportedIdentifiers = [];
        return this;
      };
      State2.prototype.curPosition = function curPosition() {
        return new Position(this.curLine, this.pos - this.lineStart);
      };
      State2.prototype.clone = function clone(skipArrays) {
        var state = new State2();
        for (var key in this) {
          var val = this[key];
          if ((!skipArrays || key === "context") && Array.isArray(val)) {
            val = val.slice();
          }
          state[key] = val;
        }
        return state;
      };
      return State2;
    }();
    var Token = function Token2(state) {
      classCallCheck(this, Token2);
      this.type = state.type;
      this.value = state.value;
      this.start = state.start;
      this.end = state.end;
      this.loc = new SourceLocation(state.startLoc, state.endLoc);
    };
    function codePointToString(code) {
      if (code <= 65535) {
        return String.fromCharCode(code);
      } else {
        return String.fromCharCode((code - 65536 >> 10) + 55296, (code - 65536 & 1023) + 56320);
      }
    }
    var Tokenizer = function() {
      function Tokenizer2(options, input) {
        classCallCheck(this, Tokenizer2);
        this.state = new State();
        this.state.init(options, input);
      }
      Tokenizer2.prototype.next = function next() {
        if (!this.isLookahead) {
          this.state.tokens.push(new Token(this.state));
        }
        this.state.lastTokEnd = this.state.end;
        this.state.lastTokStart = this.state.start;
        this.state.lastTokEndLoc = this.state.endLoc;
        this.state.lastTokStartLoc = this.state.startLoc;
        this.nextToken();
      };
      Tokenizer2.prototype.eat = function eat(type) {
        if (this.match(type)) {
          this.next();
          return true;
        } else {
          return false;
        }
      };
      Tokenizer2.prototype.match = function match(type) {
        return this.state.type === type;
      };
      Tokenizer2.prototype.isKeyword = function isKeyword$$1(word) {
        return isKeyword(word);
      };
      Tokenizer2.prototype.lookahead = function lookahead() {
        var old = this.state;
        this.state = old.clone(true);
        this.isLookahead = true;
        this.next();
        this.isLookahead = false;
        var curr = this.state.clone(true);
        this.state = old;
        return curr;
      };
      Tokenizer2.prototype.setStrict = function setStrict(strict) {
        this.state.strict = strict;
        if (!this.match(types.num) && !this.match(types.string))
          return;
        this.state.pos = this.state.start;
        while (this.state.pos < this.state.lineStart) {
          this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1;
          --this.state.curLine;
        }
        this.nextToken();
      };
      Tokenizer2.prototype.curContext = function curContext() {
        return this.state.context[this.state.context.length - 1];
      };
      Tokenizer2.prototype.nextToken = function nextToken() {
        var curContext = this.curContext();
        if (!curContext || !curContext.preserveSpace)
          this.skipSpace();
        this.state.containsOctal = false;
        this.state.octalPosition = null;
        this.state.start = this.state.pos;
        this.state.startLoc = this.state.curPosition();
        if (this.state.pos >= this.input.length)
          return this.finishToken(types.eof);
        if (curContext.override) {
          return curContext.override(this);
        } else {
          return this.readToken(this.fullCharCodeAtPos());
        }
      };
      Tokenizer2.prototype.readToken = function readToken(code) {
        if (isIdentifierStart(code) || code === 92) {
          return this.readWord();
        } else {
          return this.getTokenFromCode(code);
        }
      };
      Tokenizer2.prototype.fullCharCodeAtPos = function fullCharCodeAtPos() {
        var code = this.input.charCodeAt(this.state.pos);
        if (code <= 55295 || code >= 57344)
          return code;
        var next = this.input.charCodeAt(this.state.pos + 1);
        return (code << 10) + next - 56613888;
      };
      Tokenizer2.prototype.pushComment = function pushComment(block, text, start, end, startLoc, endLoc) {
        var comment = {
          type: block ? "CommentBlock" : "CommentLine",
          value: text,
          start,
          end,
          loc: new SourceLocation(startLoc, endLoc)
        };
        if (!this.isLookahead) {
          this.state.tokens.push(comment);
          this.state.comments.push(comment);
          this.addComment(comment);
        }
      };
      Tokenizer2.prototype.skipBlockComment = function skipBlockComment() {
        var startLoc = this.state.curPosition();
        var start = this.state.pos;
        var end = this.input.indexOf("*/", this.state.pos += 2);
        if (end === -1)
          this.raise(this.state.pos - 2, "Unterminated comment");
        this.state.pos = end + 2;
        lineBreakG.lastIndex = start;
        var match = void 0;
        while ((match = lineBreakG.exec(this.input)) && match.index < this.state.pos) {
          ++this.state.curLine;
          this.state.lineStart = match.index + match[0].length;
        }
        this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
      };
      Tokenizer2.prototype.skipLineComment = function skipLineComment(startSkip) {
        var start = this.state.pos;
        var startLoc = this.state.curPosition();
        var ch = this.input.charCodeAt(this.state.pos += startSkip);
        while (this.state.pos < this.input.length && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
          ++this.state.pos;
          ch = this.input.charCodeAt(this.state.pos);
        }
        this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
      };
      Tokenizer2.prototype.skipSpace = function skipSpace() {
        loop:
          while (this.state.pos < this.input.length) {
            var ch = this.input.charCodeAt(this.state.pos);
            switch (ch) {
              case 32:
              case 160:
                ++this.state.pos;
                break;
              case 13:
                if (this.input.charCodeAt(this.state.pos + 1) === 10) {
                  ++this.state.pos;
                }
              case 10:
              case 8232:
              case 8233:
                ++this.state.pos;
                ++this.state.curLine;
                this.state.lineStart = this.state.pos;
                break;
              case 47:
                switch (this.input.charCodeAt(this.state.pos + 1)) {
                  case 42:
                    this.skipBlockComment();
                    break;
                  case 47:
                    this.skipLineComment(2);
                    break;
                  default:
                    break loop;
                }
                break;
              default:
                if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
                  ++this.state.pos;
                } else {
                  break loop;
                }
            }
          }
      };
      Tokenizer2.prototype.finishToken = function finishToken(type, val) {
        this.state.end = this.state.pos;
        this.state.endLoc = this.state.curPosition();
        var prevType = this.state.type;
        this.state.type = type;
        this.state.value = val;
        this.updateContext(prevType);
      };
      Tokenizer2.prototype.readToken_dot = function readToken_dot() {
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (next >= 48 && next <= 57) {
          return this.readNumber(true);
        }
        var next2 = this.input.charCodeAt(this.state.pos + 2);
        if (next === 46 && next2 === 46) {
          this.state.pos += 3;
          return this.finishToken(types.ellipsis);
        } else {
          ++this.state.pos;
          return this.finishToken(types.dot);
        }
      };
      Tokenizer2.prototype.readToken_slash = function readToken_slash() {
        if (this.state.exprAllowed) {
          ++this.state.pos;
          return this.readRegexp();
        }
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 61) {
          return this.finishOp(types.assign, 2);
        } else {
          return this.finishOp(types.slash, 1);
        }
      };
      Tokenizer2.prototype.readToken_mult_modulo = function readToken_mult_modulo(code) {
        var type = code === 42 ? types.star : types.modulo;
        var width = 1;
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 42) {
          width++;
          next = this.input.charCodeAt(this.state.pos + 2);
          type = types.exponent;
        }
        if (next === 61) {
          width++;
          type = types.assign;
        }
        return this.finishOp(type, width);
      };
      Tokenizer2.prototype.readToken_pipe_amp = function readToken_pipe_amp(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (next === code)
          return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
        if (next === 61)
          return this.finishOp(types.assign, 2);
        if (code === 124 && next === 125 && this.hasPlugin("flow"))
          return this.finishOp(types.braceBarR, 2);
        return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
      };
      Tokenizer2.prototype.readToken_caret = function readToken_caret() {
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 61) {
          return this.finishOp(types.assign, 2);
        } else {
          return this.finishOp(types.bitwiseXOR, 1);
        }
      };
      Tokenizer2.prototype.readToken_plus_min = function readToken_plus_min(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (next === code) {
          if (next === 45 && this.input.charCodeAt(this.state.pos + 2) === 62 && lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.pos))) {
            this.skipLineComment(3);
            this.skipSpace();
            return this.nextToken();
          }
          return this.finishOp(types.incDec, 2);
        }
        if (next === 61) {
          return this.finishOp(types.assign, 2);
        } else {
          return this.finishOp(types.plusMin, 1);
        }
      };
      Tokenizer2.prototype.readToken_lt_gt = function readToken_lt_gt(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);
        var size = 1;
        if (next === code) {
          size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;
          if (this.input.charCodeAt(this.state.pos + size) === 61)
            return this.finishOp(types.assign, size + 1);
          return this.finishOp(types.bitShift, size);
        }
        if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
          if (this.inModule)
            this.unexpected();
          this.skipLineComment(4);
          this.skipSpace();
          return this.nextToken();
        }
        if (next === 61) {
          size = 2;
        }
        return this.finishOp(types.relational, size);
      };
      Tokenizer2.prototype.readToken_eq_excl = function readToken_eq_excl(code) {
        var next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 61)
          return this.finishOp(types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        if (code === 61 && next === 62) {
          this.state.pos += 2;
          return this.finishToken(types.arrow);
        }
        return this.finishOp(code === 61 ? types.eq : types.prefix, 1);
      };
      Tokenizer2.prototype.getTokenFromCode = function getTokenFromCode(code) {
        switch (code) {
          case 46:
            return this.readToken_dot();
          case 40:
            ++this.state.pos;
            return this.finishToken(types.parenL);
          case 41:
            ++this.state.pos;
            return this.finishToken(types.parenR);
          case 59:
            ++this.state.pos;
            return this.finishToken(types.semi);
          case 44:
            ++this.state.pos;
            return this.finishToken(types.comma);
          case 91:
            ++this.state.pos;
            return this.finishToken(types.bracketL);
          case 93:
            ++this.state.pos;
            return this.finishToken(types.bracketR);
          case 123:
            if (this.hasPlugin("flow") && this.input.charCodeAt(this.state.pos + 1) === 124) {
              return this.finishOp(types.braceBarL, 2);
            } else {
              ++this.state.pos;
              return this.finishToken(types.braceL);
            }
          case 125:
            ++this.state.pos;
            return this.finishToken(types.braceR);
          case 58:
            if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
              return this.finishOp(types.doubleColon, 2);
            } else {
              ++this.state.pos;
              return this.finishToken(types.colon);
            }
          case 63:
            ++this.state.pos;
            return this.finishToken(types.question);
          case 64:
            ++this.state.pos;
            return this.finishToken(types.at);
          case 96:
            ++this.state.pos;
            return this.finishToken(types.backQuote);
          case 48:
            var next = this.input.charCodeAt(this.state.pos + 1);
            if (next === 120 || next === 88)
              return this.readRadixNumber(16);
            if (next === 111 || next === 79)
              return this.readRadixNumber(8);
            if (next === 98 || next === 66)
              return this.readRadixNumber(2);
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(false);
          case 34:
          case 39:
            return this.readString(code);
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo(code);
          case 124:
          case 38:
            return this.readToken_pipe_amp(code);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(code);
          case 60:
          case 62:
            return this.readToken_lt_gt(code);
          case 61:
          case 33:
            return this.readToken_eq_excl(code);
          case 126:
            return this.finishOp(types.prefix, 1);
        }
        this.raise(this.state.pos, "Unexpected character '" + codePointToString(code) + "'");
      };
      Tokenizer2.prototype.finishOp = function finishOp(type, size) {
        var str = this.input.slice(this.state.pos, this.state.pos + size);
        this.state.pos += size;
        return this.finishToken(type, str);
      };
      Tokenizer2.prototype.readRegexp = function readRegexp() {
        var start = this.state.pos;
        var escaped = void 0, inClass = void 0;
        for (; ; ) {
          if (this.state.pos >= this.input.length)
            this.raise(start, "Unterminated regular expression");
          var ch = this.input.charAt(this.state.pos);
          if (lineBreak.test(ch)) {
            this.raise(start, "Unterminated regular expression");
          }
          if (escaped) {
            escaped = false;
          } else {
            if (ch === "[") {
              inClass = true;
            } else if (ch === "]" && inClass) {
              inClass = false;
            } else if (ch === "/" && !inClass) {
              break;
            }
            escaped = ch === "\\";
          }
          ++this.state.pos;
        }
        var content = this.input.slice(start, this.state.pos);
        ++this.state.pos;
        var mods = this.readWord1();
        if (mods) {
          var validFlags = /^[gmsiyu]*$/;
          if (!validFlags.test(mods))
            this.raise(start, "Invalid regular expression flag");
        }
        return this.finishToken(types.regexp, {
          pattern: content,
          flags: mods
        });
      };
      Tokenizer2.prototype.readInt = function readInt(radix, len) {
        var start = this.state.pos;
        var total = 0;
        for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
          var code = this.input.charCodeAt(this.state.pos);
          var val = void 0;
          if (code >= 97) {
            val = code - 97 + 10;
          } else if (code >= 65) {
            val = code - 65 + 10;
          } else if (code >= 48 && code <= 57) {
            val = code - 48;
          } else {
            val = Infinity;
          }
          if (val >= radix)
            break;
          ++this.state.pos;
          total = total * radix + val;
        }
        if (this.state.pos === start || len != null && this.state.pos - start !== len)
          return null;
        return total;
      };
      Tokenizer2.prototype.readRadixNumber = function readRadixNumber(radix) {
        this.state.pos += 2;
        var val = this.readInt(radix);
        if (val == null)
          this.raise(this.state.start + 2, "Expected number in radix " + radix);
        if (isIdentifierStart(this.fullCharCodeAtPos()))
          this.raise(this.state.pos, "Identifier directly after number");
        return this.finishToken(types.num, val);
      };
      Tokenizer2.prototype.readNumber = function readNumber(startsWithDot) {
        var start = this.state.pos;
        var octal = this.input.charCodeAt(start) === 48;
        var isFloat = false;
        if (!startsWithDot && this.readInt(10) === null)
          this.raise(start, "Invalid number");
        if (octal && this.state.pos == start + 1)
          octal = false;
        var next = this.input.charCodeAt(this.state.pos);
        if (next === 46 && !octal) {
          ++this.state.pos;
          this.readInt(10);
          isFloat = true;
          next = this.input.charCodeAt(this.state.pos);
        }
        if ((next === 69 || next === 101) && !octal) {
          next = this.input.charCodeAt(++this.state.pos);
          if (next === 43 || next === 45)
            ++this.state.pos;
          if (this.readInt(10) === null)
            this.raise(start, "Invalid number");
          isFloat = true;
        }
        if (isIdentifierStart(this.fullCharCodeAtPos()))
          this.raise(this.state.pos, "Identifier directly after number");
        var str = this.input.slice(start, this.state.pos);
        var val = void 0;
        if (isFloat) {
          val = parseFloat(str);
        } else if (!octal || str.length === 1) {
          val = parseInt(str, 10);
        } else if (this.state.strict) {
          this.raise(start, "Invalid number");
        } else if (/[89]/.test(str)) {
          val = parseInt(str, 10);
        } else {
          val = parseInt(str, 8);
        }
        return this.finishToken(types.num, val);
      };
      Tokenizer2.prototype.readCodePoint = function readCodePoint(throwOnInvalid) {
        var ch = this.input.charCodeAt(this.state.pos);
        var code = void 0;
        if (ch === 123) {
          var codePos = ++this.state.pos;
          code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, throwOnInvalid);
          ++this.state.pos;
          if (code === null) {
            --this.state.invalidTemplateEscapePosition;
          } else if (code > 1114111) {
            if (throwOnInvalid) {
              this.raise(codePos, "Code point out of bounds");
            } else {
              this.state.invalidTemplateEscapePosition = codePos - 2;
              return null;
            }
          }
        } else {
          code = this.readHexChar(4, throwOnInvalid);
        }
        return code;
      };
      Tokenizer2.prototype.readString = function readString(quote) {
        var out = "", chunkStart = ++this.state.pos;
        for (; ; ) {
          if (this.state.pos >= this.input.length)
            this.raise(this.state.start, "Unterminated string constant");
          var ch = this.input.charCodeAt(this.state.pos);
          if (ch === quote)
            break;
          if (ch === 92) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.readEscapedChar(false);
            chunkStart = this.state.pos;
          } else {
            if (isNewLine(ch))
              this.raise(this.state.start, "Unterminated string constant");
            ++this.state.pos;
          }
        }
        out += this.input.slice(chunkStart, this.state.pos++);
        return this.finishToken(types.string, out);
      };
      Tokenizer2.prototype.readTmplToken = function readTmplToken() {
        var out = "", chunkStart = this.state.pos, containsInvalid = false;
        for (; ; ) {
          if (this.state.pos >= this.input.length)
            this.raise(this.state.start, "Unterminated template");
          var ch = this.input.charCodeAt(this.state.pos);
          if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
            if (this.state.pos === this.state.start && this.match(types.template)) {
              if (ch === 36) {
                this.state.pos += 2;
                return this.finishToken(types.dollarBraceL);
              } else {
                ++this.state.pos;
                return this.finishToken(types.backQuote);
              }
            }
            out += this.input.slice(chunkStart, this.state.pos);
            return this.finishToken(types.template, containsInvalid ? null : out);
          }
          if (ch === 92) {
            out += this.input.slice(chunkStart, this.state.pos);
            var escaped = this.readEscapedChar(true);
            if (escaped === null) {
              containsInvalid = true;
            } else {
              out += escaped;
            }
            chunkStart = this.state.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            ++this.state.pos;
            switch (ch) {
              case 13:
                if (this.input.charCodeAt(this.state.pos) === 10)
                  ++this.state.pos;
              case 10:
                out += "\n";
                break;
              default:
                out += String.fromCharCode(ch);
                break;
            }
            ++this.state.curLine;
            this.state.lineStart = this.state.pos;
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }
        }
      };
      Tokenizer2.prototype.readEscapedChar = function readEscapedChar(inTemplate) {
        var throwOnInvalid = !inTemplate;
        var ch = this.input.charCodeAt(++this.state.pos);
        ++this.state.pos;
        switch (ch) {
          case 110:
            return "\n";
          case 114:
            return "\r";
          case 120: {
            var code = this.readHexChar(2, throwOnInvalid);
            return code === null ? null : String.fromCharCode(code);
          }
          case 117: {
            var _code = this.readCodePoint(throwOnInvalid);
            return _code === null ? null : codePointToString(_code);
          }
          case 116:
            return "	";
          case 98:
            return "\b";
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 13:
            if (this.input.charCodeAt(this.state.pos) === 10)
              ++this.state.pos;
          case 10:
            this.state.lineStart = this.state.pos;
            ++this.state.curLine;
            return "";
          default:
            if (ch >= 48 && ch <= 55) {
              var codePos = this.state.pos - 1;
              var octalStr = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0];
              var octal = parseInt(octalStr, 8);
              if (octal > 255) {
                octalStr = octalStr.slice(0, -1);
                octal = parseInt(octalStr, 8);
              }
              if (octal > 0) {
                if (inTemplate) {
                  this.state.invalidTemplateEscapePosition = codePos;
                  return null;
                } else if (this.state.strict) {
                  this.raise(codePos, "Octal literal in strict mode");
                } else if (!this.state.containsOctal) {
                  this.state.containsOctal = true;
                  this.state.octalPosition = codePos;
                }
              }
              this.state.pos += octalStr.length - 1;
              return String.fromCharCode(octal);
            }
            return String.fromCharCode(ch);
        }
      };
      Tokenizer2.prototype.readHexChar = function readHexChar(len, throwOnInvalid) {
        var codePos = this.state.pos;
        var n = this.readInt(16, len);
        if (n === null) {
          if (throwOnInvalid) {
            this.raise(codePos, "Bad character escape sequence");
          } else {
            this.state.pos = codePos - 1;
            this.state.invalidTemplateEscapePosition = codePos - 1;
          }
        }
        return n;
      };
      Tokenizer2.prototype.readWord1 = function readWord1() {
        this.state.containsEsc = false;
        var word = "", first = true, chunkStart = this.state.pos;
        while (this.state.pos < this.input.length) {
          var ch = this.fullCharCodeAtPos();
          if (isIdentifierChar(ch)) {
            this.state.pos += ch <= 65535 ? 1 : 2;
          } else if (ch === 92) {
            this.state.containsEsc = true;
            word += this.input.slice(chunkStart, this.state.pos);
            var escStart = this.state.pos;
            if (this.input.charCodeAt(++this.state.pos) !== 117) {
              this.raise(this.state.pos, "Expecting Unicode escape sequence \\uXXXX");
            }
            ++this.state.pos;
            var esc = this.readCodePoint(true);
            if (!(first ? isIdentifierStart : isIdentifierChar)(esc, true)) {
              this.raise(escStart, "Invalid Unicode escape");
            }
            word += codePointToString(esc);
            chunkStart = this.state.pos;
          } else {
            break;
          }
          first = false;
        }
        return word + this.input.slice(chunkStart, this.state.pos);
      };
      Tokenizer2.prototype.readWord = function readWord() {
        var word = this.readWord1();
        var type = types.name;
        if (!this.state.containsEsc && this.isKeyword(word)) {
          type = keywords[word];
        }
        return this.finishToken(type, word);
      };
      Tokenizer2.prototype.braceIsBlock = function braceIsBlock(prevType) {
        if (prevType === types.colon) {
          var parent = this.curContext();
          if (parent === types$1.braceStatement || parent === types$1.braceExpression) {
            return !parent.isExpr;
          }
        }
        if (prevType === types._return) {
          return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
        }
        if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR) {
          return true;
        }
        if (prevType === types.braceL) {
          return this.curContext() === types$1.braceStatement;
        }
        return !this.state.exprAllowed;
      };
      Tokenizer2.prototype.updateContext = function updateContext(prevType) {
        var type = this.state.type;
        var update = void 0;
        if (type.keyword && prevType === types.dot) {
          this.state.exprAllowed = false;
        } else if (update = type.updateContext) {
          update.call(this, prevType);
        } else {
          this.state.exprAllowed = type.beforeExpr;
        }
      };
      return Tokenizer2;
    }();
    var plugins = {};
    var frozenDeprecatedWildcardPluginList = ["jsx", "doExpressions", "objectRestSpread", "decorators", "classProperties", "exportExtensions", "asyncGenerators", "functionBind", "functionSent", "dynamicImport", "flow"];
    var Parser = function(_Tokenizer) {
      inherits(Parser2, _Tokenizer);
      function Parser2(options, input) {
        classCallCheck(this, Parser2);
        options = getOptions(options);
        var _this = possibleConstructorReturn(this, _Tokenizer.call(this, options, input));
        _this.options = options;
        _this.inModule = _this.options.sourceType === "module";
        _this.input = input;
        _this.plugins = _this.loadPlugins(_this.options.plugins);
        _this.filename = options.sourceFilename;
        if (_this.state.pos === 0 && _this.input[0] === "#" && _this.input[1] === "!") {
          _this.skipLineComment(2);
        }
        return _this;
      }
      Parser2.prototype.isReservedWord = function isReservedWord(word) {
        if (word === "await") {
          return this.inModule;
        } else {
          return reservedWords[6](word);
        }
      };
      Parser2.prototype.hasPlugin = function hasPlugin(name) {
        if (this.plugins["*"] && frozenDeprecatedWildcardPluginList.indexOf(name) > -1) {
          return true;
        }
        return !!this.plugins[name];
      };
      Parser2.prototype.extend = function extend(name, f) {
        this[name] = f(this[name]);
      };
      Parser2.prototype.loadAllPlugins = function loadAllPlugins() {
        var _this2 = this;
        var pluginNames = Object.keys(plugins).filter(function(name) {
          return name !== "flow" && name !== "estree";
        });
        pluginNames.push("flow");
        pluginNames.forEach(function(name) {
          var plugin = plugins[name];
          if (plugin)
            plugin(_this2);
        });
      };
      Parser2.prototype.loadPlugins = function loadPlugins(pluginList) {
        if (pluginList.indexOf("*") >= 0) {
          this.loadAllPlugins();
          return { "*": true };
        }
        var pluginMap = {};
        if (pluginList.indexOf("flow") >= 0) {
          pluginList = pluginList.filter(function(plugin2) {
            return plugin2 !== "flow";
          });
          pluginList.push("flow");
        }
        if (pluginList.indexOf("estree") >= 0) {
          pluginList = pluginList.filter(function(plugin2) {
            return plugin2 !== "estree";
          });
          pluginList.unshift("estree");
        }
        for (var _iterator = pluginList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var name = _ref;
          if (!pluginMap[name]) {
            pluginMap[name] = true;
            var plugin = plugins[name];
            if (plugin)
              plugin(this);
          }
        }
        return pluginMap;
      };
      Parser2.prototype.parse = function parse4() {
        var file = this.startNode();
        var program = this.startNode();
        this.nextToken();
        return this.parseTopLevel(file, program);
      };
      return Parser2;
    }(Tokenizer);
    var pp = Parser.prototype;
    pp.addExtra = function(node, key, val) {
      if (!node)
        return;
      var extra = node.extra = node.extra || {};
      extra[key] = val;
    };
    pp.isRelational = function(op) {
      return this.match(types.relational) && this.state.value === op;
    };
    pp.expectRelational = function(op) {
      if (this.isRelational(op)) {
        this.next();
      } else {
        this.unexpected(null, types.relational);
      }
    };
    pp.isContextual = function(name) {
      return this.match(types.name) && this.state.value === name;
    };
    pp.eatContextual = function(name) {
      return this.state.value === name && this.eat(types.name);
    };
    pp.expectContextual = function(name, message) {
      if (!this.eatContextual(name))
        this.unexpected(null, message);
    };
    pp.canInsertSemicolon = function() {
      return this.match(types.eof) || this.match(types.braceR) || lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
    };
    pp.isLineTerminator = function() {
      return this.eat(types.semi) || this.canInsertSemicolon();
    };
    pp.semicolon = function() {
      if (!this.isLineTerminator())
        this.unexpected(null, types.semi);
    };
    pp.expect = function(type, pos) {
      return this.eat(type) || this.unexpected(pos, type);
    };
    pp.unexpected = function(pos) {
      var messageOrType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Unexpected token";
      if (messageOrType && (typeof messageOrType === "undefined" ? "undefined" : _typeof(messageOrType)) === "object" && messageOrType.label) {
        messageOrType = "Unexpected token, expected " + messageOrType.label;
      }
      this.raise(pos != null ? pos : this.state.start, messageOrType);
    };
    var pp$1 = Parser.prototype;
    pp$1.parseTopLevel = function(file, program) {
      program.sourceType = this.options.sourceType;
      this.parseBlockBody(program, true, true, types.eof);
      file.program = this.finishNode(program, "Program");
      file.comments = this.state.comments;
      file.tokens = this.state.tokens;
      return this.finishNode(file, "File");
    };
    var loopLabel = { kind: "loop" };
    var switchLabel = { kind: "switch" };
    pp$1.stmtToDirective = function(stmt) {
      var expr = stmt.expression;
      var directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
      var directive = this.startNodeAt(stmt.start, stmt.loc.start);
      var raw = this.input.slice(expr.start, expr.end);
      var val = directiveLiteral.value = raw.slice(1, -1);
      this.addExtra(directiveLiteral, "raw", raw);
      this.addExtra(directiveLiteral, "rawValue", val);
      directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);
      return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
    };
    pp$1.parseStatement = function(declaration, topLevel) {
      if (this.match(types.at)) {
        this.parseDecorators(true);
      }
      var starttype = this.state.type;
      var node = this.startNode();
      switch (starttype) {
        case types._break:
        case types._continue:
          return this.parseBreakContinueStatement(node, starttype.keyword);
        case types._debugger:
          return this.parseDebuggerStatement(node);
        case types._do:
          return this.parseDoStatement(node);
        case types._for:
          return this.parseForStatement(node);
        case types._function:
          if (!declaration)
            this.unexpected();
          return this.parseFunctionStatement(node);
        case types._class:
          if (!declaration)
            this.unexpected();
          return this.parseClass(node, true);
        case types._if:
          return this.parseIfStatement(node);
        case types._return:
          return this.parseReturnStatement(node);
        case types._switch:
          return this.parseSwitchStatement(node);
        case types._throw:
          return this.parseThrowStatement(node);
        case types._try:
          return this.parseTryStatement(node);
        case types._let:
        case types._const:
          if (!declaration)
            this.unexpected();
        case types._var:
          return this.parseVarStatement(node, starttype);
        case types._while:
          return this.parseWhileStatement(node);
        case types._with:
          return this.parseWithStatement(node);
        case types.braceL:
          return this.parseBlock();
        case types.semi:
          return this.parseEmptyStatement(node);
        case types._export:
        case types._import:
          if (this.hasPlugin("dynamicImport") && this.lookahead().type === types.parenL)
            break;
          if (!this.options.allowImportExportEverywhere) {
            if (!topLevel) {
              this.raise(this.state.start, "'import' and 'export' may only appear at the top level");
            }
            if (!this.inModule) {
              this.raise(this.state.start, `'import' and 'export' may appear only with 'sourceType: "module"'`);
            }
          }
          return starttype === types._import ? this.parseImport(node) : this.parseExport(node);
        case types.name:
          if (this.state.value === "async") {
            var state = this.state.clone();
            this.next();
            if (this.match(types._function) && !this.canInsertSemicolon()) {
              this.expect(types._function);
              return this.parseFunction(node, true, false, true);
            } else {
              this.state = state;
            }
          }
      }
      var maybeName = this.state.value;
      var expr = this.parseExpression();
      if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
    };
    pp$1.takeDecorators = function(node) {
      if (this.state.decorators.length) {
        node.decorators = this.state.decorators;
        this.state.decorators = [];
      }
    };
    pp$1.parseDecorators = function(allowExport) {
      while (this.match(types.at)) {
        var decorator = this.parseDecorator();
        this.state.decorators.push(decorator);
      }
      if (allowExport && this.match(types._export)) {
        return;
      }
      if (!this.match(types._class)) {
        this.raise(this.state.start, "Leading decorators must be attached to a class declaration");
      }
    };
    pp$1.parseDecorator = function() {
      if (!this.hasPlugin("decorators")) {
        this.unexpected();
      }
      var node = this.startNode();
      this.next();
      node.expression = this.parseMaybeAssign();
      return this.finishNode(node, "Decorator");
    };
    pp$1.parseBreakContinueStatement = function(node, keyword) {
      var isBreak = keyword === "break";
      this.next();
      if (this.isLineTerminator()) {
        node.label = null;
      } else if (!this.match(types.name)) {
        this.unexpected();
      } else {
        node.label = this.parseIdentifier();
        this.semicolon();
      }
      var i = void 0;
      for (i = 0; i < this.state.labels.length; ++i) {
        var lab = this.state.labels[i];
        if (node.label == null || lab.name === node.label.name) {
          if (lab.kind != null && (isBreak || lab.kind === "loop"))
            break;
          if (node.label && isBreak)
            break;
        }
      }
      if (i === this.state.labels.length)
        this.raise(node.start, "Unsyntactic " + keyword);
      return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
    };
    pp$1.parseDebuggerStatement = function(node) {
      this.next();
      this.semicolon();
      return this.finishNode(node, "DebuggerStatement");
    };
    pp$1.parseDoStatement = function(node) {
      this.next();
      this.state.labels.push(loopLabel);
      node.body = this.parseStatement(false);
      this.state.labels.pop();
      this.expect(types._while);
      node.test = this.parseParenExpression();
      this.eat(types.semi);
      return this.finishNode(node, "DoWhileStatement");
    };
    pp$1.parseForStatement = function(node) {
      this.next();
      this.state.labels.push(loopLabel);
      var forAwait = false;
      if (this.hasPlugin("asyncGenerators") && this.state.inAsync && this.isContextual("await")) {
        forAwait = true;
        this.next();
      }
      this.expect(types.parenL);
      if (this.match(types.semi)) {
        if (forAwait) {
          this.unexpected();
        }
        return this.parseFor(node, null);
      }
      if (this.match(types._var) || this.match(types._let) || this.match(types._const)) {
        var _init = this.startNode();
        var varKind = this.state.type;
        this.next();
        this.parseVar(_init, true, varKind);
        this.finishNode(_init, "VariableDeclaration");
        if (this.match(types._in) || this.isContextual("of")) {
          if (_init.declarations.length === 1 && !_init.declarations[0].init) {
            return this.parseForIn(node, _init, forAwait);
          }
        }
        if (forAwait) {
          this.unexpected();
        }
        return this.parseFor(node, _init);
      }
      var refShorthandDefaultPos = { start: 0 };
      var init = this.parseExpression(true, refShorthandDefaultPos);
      if (this.match(types._in) || this.isContextual("of")) {
        var description = this.isContextual("of") ? "for-of statement" : "for-in statement";
        this.toAssignable(init, void 0, description);
        this.checkLVal(init, void 0, void 0, description);
        return this.parseForIn(node, init, forAwait);
      } else if (refShorthandDefaultPos.start) {
        this.unexpected(refShorthandDefaultPos.start);
      }
      if (forAwait) {
        this.unexpected();
      }
      return this.parseFor(node, init);
    };
    pp$1.parseFunctionStatement = function(node) {
      this.next();
      return this.parseFunction(node, true);
    };
    pp$1.parseIfStatement = function(node) {
      this.next();
      node.test = this.parseParenExpression();
      node.consequent = this.parseStatement(false);
      node.alternate = this.eat(types._else) ? this.parseStatement(false) : null;
      return this.finishNode(node, "IfStatement");
    };
    pp$1.parseReturnStatement = function(node) {
      if (!this.state.inFunction && !this.options.allowReturnOutsideFunction) {
        this.raise(this.state.start, "'return' outside of function");
      }
      this.next();
      if (this.isLineTerminator()) {
        node.argument = null;
      } else {
        node.argument = this.parseExpression();
        this.semicolon();
      }
      return this.finishNode(node, "ReturnStatement");
    };
    pp$1.parseSwitchStatement = function(node) {
      this.next();
      node.discriminant = this.parseParenExpression();
      node.cases = [];
      this.expect(types.braceL);
      this.state.labels.push(switchLabel);
      var cur = void 0;
      for (var sawDefault; !this.match(types.braceR); ) {
        if (this.match(types._case) || this.match(types._default)) {
          var isCase = this.match(types._case);
          if (cur)
            this.finishNode(cur, "SwitchCase");
          node.cases.push(cur = this.startNode());
          cur.consequent = [];
          this.next();
          if (isCase) {
            cur.test = this.parseExpression();
          } else {
            if (sawDefault)
              this.raise(this.state.lastTokStart, "Multiple default clauses");
            sawDefault = true;
            cur.test = null;
          }
          this.expect(types.colon);
        } else {
          if (cur) {
            cur.consequent.push(this.parseStatement(true));
          } else {
            this.unexpected();
          }
        }
      }
      if (cur)
        this.finishNode(cur, "SwitchCase");
      this.next();
      this.state.labels.pop();
      return this.finishNode(node, "SwitchStatement");
    };
    pp$1.parseThrowStatement = function(node) {
      this.next();
      if (lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start)))
        this.raise(this.state.lastTokEnd, "Illegal newline after throw");
      node.argument = this.parseExpression();
      this.semicolon();
      return this.finishNode(node, "ThrowStatement");
    };
    var empty = [];
    pp$1.parseTryStatement = function(node) {
      this.next();
      node.block = this.parseBlock();
      node.handler = null;
      if (this.match(types._catch)) {
        var clause = this.startNode();
        this.next();
        this.expect(types.parenL);
        clause.param = this.parseBindingAtom();
        this.checkLVal(clause.param, true, /* @__PURE__ */ Object.create(null), "catch clause");
        this.expect(types.parenR);
        clause.body = this.parseBlock();
        node.handler = this.finishNode(clause, "CatchClause");
      }
      node.guardedHandlers = empty;
      node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
      if (!node.handler && !node.finalizer) {
        this.raise(node.start, "Missing catch or finally clause");
      }
      return this.finishNode(node, "TryStatement");
    };
    pp$1.parseVarStatement = function(node, kind) {
      this.next();
      this.parseVar(node, false, kind);
      this.semicolon();
      return this.finishNode(node, "VariableDeclaration");
    };
    pp$1.parseWhileStatement = function(node) {
      this.next();
      node.test = this.parseParenExpression();
      this.state.labels.push(loopLabel);
      node.body = this.parseStatement(false);
      this.state.labels.pop();
      return this.finishNode(node, "WhileStatement");
    };
    pp$1.parseWithStatement = function(node) {
      if (this.state.strict)
        this.raise(this.state.start, "'with' in strict mode");
      this.next();
      node.object = this.parseParenExpression();
      node.body = this.parseStatement(false);
      return this.finishNode(node, "WithStatement");
    };
    pp$1.parseEmptyStatement = function(node) {
      this.next();
      return this.finishNode(node, "EmptyStatement");
    };
    pp$1.parseLabeledStatement = function(node, maybeName, expr) {
      for (var _iterator = this.state.labels, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var _label = _ref;
        if (_label.name === maybeName) {
          this.raise(expr.start, "Label '" + maybeName + "' is already declared");
        }
      }
      var kind = this.state.type.isLoop ? "loop" : this.match(types._switch) ? "switch" : null;
      for (var i = this.state.labels.length - 1; i >= 0; i--) {
        var label = this.state.labels[i];
        if (label.statementStart === node.start) {
          label.statementStart = this.state.start;
          label.kind = kind;
        } else {
          break;
        }
      }
      this.state.labels.push({ name: maybeName, kind, statementStart: this.state.start });
      node.body = this.parseStatement(true);
      this.state.labels.pop();
      node.label = expr;
      return this.finishNode(node, "LabeledStatement");
    };
    pp$1.parseExpressionStatement = function(node, expr) {
      node.expression = expr;
      this.semicolon();
      return this.finishNode(node, "ExpressionStatement");
    };
    pp$1.parseBlock = function(allowDirectives) {
      var node = this.startNode();
      this.expect(types.braceL);
      this.parseBlockBody(node, allowDirectives, false, types.braceR);
      return this.finishNode(node, "BlockStatement");
    };
    pp$1.isValidDirective = function(stmt) {
      return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
    };
    pp$1.parseBlockBody = function(node, allowDirectives, topLevel, end) {
      node.body = [];
      node.directives = [];
      var parsedNonDirective = false;
      var oldStrict = void 0;
      var octalPosition = void 0;
      while (!this.eat(end)) {
        if (!parsedNonDirective && this.state.containsOctal && !octalPosition) {
          octalPosition = this.state.octalPosition;
        }
        var stmt = this.parseStatement(true, topLevel);
        if (allowDirectives && !parsedNonDirective && this.isValidDirective(stmt)) {
          var directive = this.stmtToDirective(stmt);
          node.directives.push(directive);
          if (oldStrict === void 0 && directive.value.value === "use strict") {
            oldStrict = this.state.strict;
            this.setStrict(true);
            if (octalPosition) {
              this.raise(octalPosition, "Octal literal in strict mode");
            }
          }
          continue;
        }
        parsedNonDirective = true;
        node.body.push(stmt);
      }
      if (oldStrict === false) {
        this.setStrict(false);
      }
    };
    pp$1.parseFor = function(node, init) {
      node.init = init;
      this.expect(types.semi);
      node.test = this.match(types.semi) ? null : this.parseExpression();
      this.expect(types.semi);
      node.update = this.match(types.parenR) ? null : this.parseExpression();
      this.expect(types.parenR);
      node.body = this.parseStatement(false);
      this.state.labels.pop();
      return this.finishNode(node, "ForStatement");
    };
    pp$1.parseForIn = function(node, init, forAwait) {
      var type = void 0;
      if (forAwait) {
        this.eatContextual("of");
        type = "ForAwaitStatement";
      } else {
        type = this.match(types._in) ? "ForInStatement" : "ForOfStatement";
        this.next();
      }
      node.left = init;
      node.right = this.parseExpression();
      this.expect(types.parenR);
      node.body = this.parseStatement(false);
      this.state.labels.pop();
      return this.finishNode(node, type);
    };
    pp$1.parseVar = function(node, isFor, kind) {
      node.declarations = [];
      node.kind = kind.keyword;
      for (; ; ) {
        var decl = this.startNode();
        this.parseVarHead(decl);
        if (this.eat(types.eq)) {
          decl.init = this.parseMaybeAssign(isFor);
        } else if (kind === types._const && !(this.match(types._in) || this.isContextual("of"))) {
          this.unexpected();
        } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(types._in) || this.isContextual("of")))) {
          this.raise(this.state.lastTokEnd, "Complex binding patterns require an initialization value");
        } else {
          decl.init = null;
        }
        node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
        if (!this.eat(types.comma))
          break;
      }
      return node;
    };
    pp$1.parseVarHead = function(decl) {
      decl.id = this.parseBindingAtom();
      this.checkLVal(decl.id, true, void 0, "variable declaration");
    };
    pp$1.parseFunction = function(node, isStatement, allowExpressionBody, isAsync, optionalId) {
      var oldInMethod = this.state.inMethod;
      this.state.inMethod = false;
      this.initFunction(node, isAsync);
      if (this.match(types.star)) {
        if (node.async && !this.hasPlugin("asyncGenerators")) {
          this.unexpected();
        } else {
          node.generator = true;
          this.next();
        }
      }
      if (isStatement && !optionalId && !this.match(types.name) && !this.match(types._yield)) {
        this.unexpected();
      }
      if (this.match(types.name) || this.match(types._yield)) {
        node.id = this.parseBindingIdentifier();
      }
      this.parseFunctionParams(node);
      this.parseFunctionBody(node, allowExpressionBody);
      this.state.inMethod = oldInMethod;
      return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
    };
    pp$1.parseFunctionParams = function(node) {
      this.expect(types.parenL);
      node.params = this.parseBindingList(types.parenR);
    };
    pp$1.parseClass = function(node, isStatement, optionalId) {
      this.next();
      this.takeDecorators(node);
      this.parseClassId(node, isStatement, optionalId);
      this.parseClassSuper(node);
      this.parseClassBody(node);
      return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
    };
    pp$1.isClassProperty = function() {
      return this.match(types.eq) || this.match(types.semi) || this.match(types.braceR);
    };
    pp$1.isClassMethod = function() {
      return this.match(types.parenL);
    };
    pp$1.isNonstaticConstructor = function(method) {
      return !method.computed && !method.static && (method.key.name === "constructor" || // Identifier
      method.key.value === "constructor");
    };
    pp$1.parseClassBody = function(node) {
      var oldStrict = this.state.strict;
      this.state.strict = true;
      var hadConstructorCall = false;
      var hadConstructor = false;
      var decorators = [];
      var classBody = this.startNode();
      classBody.body = [];
      this.expect(types.braceL);
      while (!this.eat(types.braceR)) {
        if (this.eat(types.semi)) {
          if (decorators.length > 0) {
            this.raise(this.state.lastTokEnd, "Decorators must not be followed by a semicolon");
          }
          continue;
        }
        if (this.match(types.at)) {
          decorators.push(this.parseDecorator());
          continue;
        }
        var method = this.startNode();
        if (decorators.length) {
          method.decorators = decorators;
          decorators = [];
        }
        method.static = false;
        if (this.match(types.name) && this.state.value === "static") {
          var key = this.parseIdentifier(true);
          if (this.isClassMethod()) {
            method.kind = "method";
            method.computed = false;
            method.key = key;
            this.parseClassMethod(classBody, method, false, false);
            continue;
          } else if (this.isClassProperty()) {
            method.computed = false;
            method.key = key;
            classBody.body.push(this.parseClassProperty(method));
            continue;
          }
          method.static = true;
        }
        if (this.eat(types.star)) {
          method.kind = "method";
          this.parsePropertyName(method);
          if (this.isNonstaticConstructor(method)) {
            this.raise(method.key.start, "Constructor can't be a generator");
          }
          if (!method.computed && method.static && (method.key.name === "prototype" || method.key.value === "prototype")) {
            this.raise(method.key.start, "Classes may not have static property named prototype");
          }
          this.parseClassMethod(classBody, method, true, false);
        } else {
          var isSimple = this.match(types.name);
          var _key = this.parsePropertyName(method);
          if (!method.computed && method.static && (method.key.name === "prototype" || method.key.value === "prototype")) {
            this.raise(method.key.start, "Classes may not have static property named prototype");
          }
          if (this.isClassMethod()) {
            if (this.isNonstaticConstructor(method)) {
              if (hadConstructor) {
                this.raise(_key.start, "Duplicate constructor in the same class");
              } else if (method.decorators) {
                this.raise(method.start, "You can't attach decorators to a class constructor");
              }
              hadConstructor = true;
              method.kind = "constructor";
            } else {
              method.kind = "method";
            }
            this.parseClassMethod(classBody, method, false, false);
          } else if (this.isClassProperty()) {
            if (this.isNonstaticConstructor(method)) {
              this.raise(method.key.start, "Classes may not have a non-static field named 'constructor'");
            }
            classBody.body.push(this.parseClassProperty(method));
          } else if (isSimple && _key.name === "async" && !this.isLineTerminator()) {
            var isGenerator = this.hasPlugin("asyncGenerators") && this.eat(types.star);
            method.kind = "method";
            this.parsePropertyName(method);
            if (this.isNonstaticConstructor(method)) {
              this.raise(method.key.start, "Constructor can't be an async function");
            }
            this.parseClassMethod(classBody, method, isGenerator, true);
          } else if (isSimple && (_key.name === "get" || _key.name === "set") && !(this.isLineTerminator() && this.match(types.star))) {
            method.kind = _key.name;
            this.parsePropertyName(method);
            if (this.isNonstaticConstructor(method)) {
              this.raise(method.key.start, "Constructor can't have get/set modifier");
            }
            this.parseClassMethod(classBody, method, false, false);
            this.checkGetterSetterParamCount(method);
          } else if (this.hasPlugin("classConstructorCall") && isSimple && _key.name === "call" && this.match(types.name) && this.state.value === "constructor") {
            if (hadConstructorCall) {
              this.raise(method.start, "Duplicate constructor call in the same class");
            } else if (method.decorators) {
              this.raise(method.start, "You can't attach decorators to a class constructor");
            }
            hadConstructorCall = true;
            method.kind = "constructorCall";
            this.parsePropertyName(method);
            this.parseClassMethod(classBody, method, false, false);
          } else if (this.isLineTerminator()) {
            if (this.isNonstaticConstructor(method)) {
              this.raise(method.key.start, "Classes may not have a non-static field named 'constructor'");
            }
            classBody.body.push(this.parseClassProperty(method));
          } else {
            this.unexpected();
          }
        }
      }
      if (decorators.length) {
        this.raise(this.state.start, "You have trailing decorators with no method");
      }
      node.body = this.finishNode(classBody, "ClassBody");
      this.state.strict = oldStrict;
    };
    pp$1.parseClassProperty = function(node) {
      this.state.inClassProperty = true;
      if (this.match(types.eq)) {
        if (!this.hasPlugin("classProperties"))
          this.unexpected();
        this.next();
        node.value = this.parseMaybeAssign();
      } else {
        node.value = null;
      }
      this.semicolon();
      this.state.inClassProperty = false;
      return this.finishNode(node, "ClassProperty");
    };
    pp$1.parseClassMethod = function(classBody, method, isGenerator, isAsync) {
      this.parseMethod(method, isGenerator, isAsync);
      classBody.body.push(this.finishNode(method, "ClassMethod"));
    };
    pp$1.parseClassId = function(node, isStatement, optionalId) {
      if (this.match(types.name)) {
        node.id = this.parseIdentifier();
      } else {
        if (optionalId || !isStatement) {
          node.id = null;
        } else {
          this.unexpected();
        }
      }
    };
    pp$1.parseClassSuper = function(node) {
      node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
    };
    pp$1.parseExport = function(node) {
      this.next();
      if (this.match(types.star)) {
        var specifier = this.startNode();
        this.next();
        if (this.hasPlugin("exportExtensions") && this.eatContextual("as")) {
          specifier.exported = this.parseIdentifier();
          node.specifiers = [this.finishNode(specifier, "ExportNamespaceSpecifier")];
          this.parseExportSpecifiersMaybe(node);
          this.parseExportFrom(node, true);
        } else {
          this.parseExportFrom(node, true);
          return this.finishNode(node, "ExportAllDeclaration");
        }
      } else if (this.hasPlugin("exportExtensions") && this.isExportDefaultSpecifier()) {
        var _specifier = this.startNode();
        _specifier.exported = this.parseIdentifier(true);
        node.specifiers = [this.finishNode(_specifier, "ExportDefaultSpecifier")];
        if (this.match(types.comma) && this.lookahead().type === types.star) {
          this.expect(types.comma);
          var _specifier2 = this.startNode();
          this.expect(types.star);
          this.expectContextual("as");
          _specifier2.exported = this.parseIdentifier();
          node.specifiers.push(this.finishNode(_specifier2, "ExportNamespaceSpecifier"));
        } else {
          this.parseExportSpecifiersMaybe(node);
        }
        this.parseExportFrom(node, true);
      } else if (this.eat(types._default)) {
        var expr = this.startNode();
        var needsSemi = false;
        if (this.eat(types._function)) {
          expr = this.parseFunction(expr, true, false, false, true);
        } else if (this.match(types._class)) {
          expr = this.parseClass(expr, true, true);
        } else {
          needsSemi = true;
          expr = this.parseMaybeAssign();
        }
        node.declaration = expr;
        if (needsSemi)
          this.semicolon();
        this.checkExport(node, true, true);
        return this.finishNode(node, "ExportDefaultDeclaration");
      } else if (this.shouldParseExportDeclaration()) {
        node.specifiers = [];
        node.source = null;
        node.declaration = this.parseExportDeclaration(node);
      } else {
        node.declaration = null;
        node.specifiers = this.parseExportSpecifiers();
        this.parseExportFrom(node);
      }
      this.checkExport(node, true);
      return this.finishNode(node, "ExportNamedDeclaration");
    };
    pp$1.parseExportDeclaration = function() {
      return this.parseStatement(true);
    };
    pp$1.isExportDefaultSpecifier = function() {
      if (this.match(types.name)) {
        return this.state.value !== "async";
      }
      if (!this.match(types._default)) {
        return false;
      }
      var lookahead = this.lookahead();
      return lookahead.type === types.comma || lookahead.type === types.name && lookahead.value === "from";
    };
    pp$1.parseExportSpecifiersMaybe = function(node) {
      if (this.eat(types.comma)) {
        node.specifiers = node.specifiers.concat(this.parseExportSpecifiers());
      }
    };
    pp$1.parseExportFrom = function(node, expect) {
      if (this.eatContextual("from")) {
        node.source = this.match(types.string) ? this.parseExprAtom() : this.unexpected();
        this.checkExport(node);
      } else {
        if (expect) {
          this.unexpected();
        } else {
          node.source = null;
        }
      }
      this.semicolon();
    };
    pp$1.shouldParseExportDeclaration = function() {
      return this.state.type.keyword === "var" || this.state.type.keyword === "const" || this.state.type.keyword === "let" || this.state.type.keyword === "function" || this.state.type.keyword === "class" || this.isContextual("async");
    };
    pp$1.checkExport = function(node, checkNames, isDefault) {
      if (checkNames) {
        if (isDefault) {
          this.checkDuplicateExports(node, "default");
        } else if (node.specifiers && node.specifiers.length) {
          for (var _iterator2 = node.specifiers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ; ) {
            var _ref2;
            if (_isArray2) {
              if (_i2 >= _iterator2.length)
                break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done)
                break;
              _ref2 = _i2.value;
            }
            var specifier = _ref2;
            this.checkDuplicateExports(specifier, specifier.exported.name);
          }
        } else if (node.declaration) {
          if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
            this.checkDuplicateExports(node, node.declaration.id.name);
          } else if (node.declaration.type === "VariableDeclaration") {
            for (var _iterator3 = node.declaration.declarations, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ; ) {
              var _ref3;
              if (_isArray3) {
                if (_i3 >= _iterator3.length)
                  break;
                _ref3 = _iterator3[_i3++];
              } else {
                _i3 = _iterator3.next();
                if (_i3.done)
                  break;
                _ref3 = _i3.value;
              }
              var declaration = _ref3;
              this.checkDeclaration(declaration.id);
            }
          }
        }
      }
      if (this.state.decorators.length) {
        var isClass = node.declaration && (node.declaration.type === "ClassDeclaration" || node.declaration.type === "ClassExpression");
        if (!node.declaration || !isClass) {
          this.raise(node.start, "You can only use decorators on an export when exporting a class");
        }
        this.takeDecorators(node.declaration);
      }
    };
    pp$1.checkDeclaration = function(node) {
      if (node.type === "ObjectPattern") {
        for (var _iterator4 = node.properties, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ; ) {
          var _ref4;
          if (_isArray4) {
            if (_i4 >= _iterator4.length)
              break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done)
              break;
            _ref4 = _i4.value;
          }
          var prop = _ref4;
          this.checkDeclaration(prop);
        }
      } else if (node.type === "ArrayPattern") {
        for (var _iterator5 = node.elements, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ; ) {
          var _ref5;
          if (_isArray5) {
            if (_i5 >= _iterator5.length)
              break;
            _ref5 = _iterator5[_i5++];
          } else {
            _i5 = _iterator5.next();
            if (_i5.done)
              break;
            _ref5 = _i5.value;
          }
          var elem = _ref5;
          if (elem) {
            this.checkDeclaration(elem);
          }
        }
      } else if (node.type === "ObjectProperty") {
        this.checkDeclaration(node.value);
      } else if (node.type === "RestElement" || node.type === "RestProperty") {
        this.checkDeclaration(node.argument);
      } else if (node.type === "Identifier") {
        this.checkDuplicateExports(node, node.name);
      }
    };
    pp$1.checkDuplicateExports = function(node, name) {
      if (this.state.exportedIdentifiers.indexOf(name) > -1) {
        this.raiseDuplicateExportError(node, name);
      }
      this.state.exportedIdentifiers.push(name);
    };
    pp$1.raiseDuplicateExportError = function(node, name) {
      this.raise(node.start, name === "default" ? "Only one default export allowed per module." : "`" + name + "` has already been exported. Exported identifiers must be unique.");
    };
    pp$1.parseExportSpecifiers = function() {
      var nodes = [];
      var first = true;
      var needsFrom = void 0;
      this.expect(types.braceL);
      while (!this.eat(types.braceR)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.eat(types.braceR))
            break;
        }
        var isDefault = this.match(types._default);
        if (isDefault && !needsFrom)
          needsFrom = true;
        var node = this.startNode();
        node.local = this.parseIdentifier(isDefault);
        node.exported = this.eatContextual("as") ? this.parseIdentifier(true) : node.local.__clone();
        nodes.push(this.finishNode(node, "ExportSpecifier"));
      }
      if (needsFrom && !this.isContextual("from")) {
        this.unexpected();
      }
      return nodes;
    };
    pp$1.parseImport = function(node) {
      this.eat(types._import);
      if (this.match(types.string)) {
        node.specifiers = [];
        node.source = this.parseExprAtom();
      } else {
        node.specifiers = [];
        this.parseImportSpecifiers(node);
        this.expectContextual("from");
        node.source = this.match(types.string) ? this.parseExprAtom() : this.unexpected();
      }
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    };
    pp$1.parseImportSpecifiers = function(node) {
      var first = true;
      if (this.match(types.name)) {
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        node.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(), startPos, startLoc));
        if (!this.eat(types.comma))
          return;
      }
      if (this.match(types.star)) {
        var specifier = this.startNode();
        this.next();
        this.expectContextual("as");
        specifier.local = this.parseIdentifier();
        this.checkLVal(specifier.local, true, void 0, "import namespace specifier");
        node.specifiers.push(this.finishNode(specifier, "ImportNamespaceSpecifier"));
        return;
      }
      this.expect(types.braceL);
      while (!this.eat(types.braceR)) {
        if (first) {
          first = false;
        } else {
          if (this.eat(types.colon)) {
            this.unexpected(null, "ES2015 named imports do not destructure. Use another statement for destructuring after the import.");
          }
          this.expect(types.comma);
          if (this.eat(types.braceR))
            break;
        }
        this.parseImportSpecifier(node);
      }
    };
    pp$1.parseImportSpecifier = function(node) {
      var specifier = this.startNode();
      specifier.imported = this.parseIdentifier(true);
      if (this.eatContextual("as")) {
        specifier.local = this.parseIdentifier();
      } else {
        this.checkReservedWord(specifier.imported.name, specifier.start, true, true);
        specifier.local = specifier.imported.__clone();
      }
      this.checkLVal(specifier.local, true, void 0, "import specifier");
      node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
    };
    pp$1.parseImportSpecifierDefault = function(id, startPos, startLoc) {
      var node = this.startNodeAt(startPos, startLoc);
      node.local = id;
      this.checkLVal(node.local, true, void 0, "default import specifier");
      return this.finishNode(node, "ImportDefaultSpecifier");
    };
    var pp$2 = Parser.prototype;
    pp$2.toAssignable = function(node, isBinding, contextDescription) {
      if (node) {
        switch (node.type) {
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
            break;
          case "ObjectExpression":
            node.type = "ObjectPattern";
            for (var _iterator = node.properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
              var _ref;
              if (_isArray) {
                if (_i >= _iterator.length)
                  break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done)
                  break;
                _ref = _i.value;
              }
              var prop = _ref;
              if (prop.type === "ObjectMethod") {
                if (prop.kind === "get" || prop.kind === "set") {
                  this.raise(prop.key.start, "Object pattern can't contain getter or setter");
                } else {
                  this.raise(prop.key.start, "Object pattern can't contain methods");
                }
              } else {
                this.toAssignable(prop, isBinding, "object destructuring pattern");
              }
            }
            break;
          case "ObjectProperty":
            this.toAssignable(node.value, isBinding, contextDescription);
            break;
          case "SpreadProperty":
            node.type = "RestProperty";
            var arg = node.argument;
            this.toAssignable(arg, isBinding, contextDescription);
            break;
          case "ArrayExpression":
            node.type = "ArrayPattern";
            this.toAssignableList(node.elements, isBinding, contextDescription);
            break;
          case "AssignmentExpression":
            if (node.operator === "=") {
              node.type = "AssignmentPattern";
              delete node.operator;
            } else {
              this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
            }
            break;
          case "MemberExpression":
            if (!isBinding)
              break;
          default: {
            var message = "Invalid left-hand side" + (contextDescription ? " in " + contextDescription : (
              /* istanbul ignore next */
              "expression"
            ));
            this.raise(node.start, message);
          }
        }
      }
      return node;
    };
    pp$2.toAssignableList = function(exprList, isBinding, contextDescription) {
      var end = exprList.length;
      if (end) {
        var last2 = exprList[end - 1];
        if (last2 && last2.type === "RestElement") {
          --end;
        } else if (last2 && last2.type === "SpreadElement") {
          last2.type = "RestElement";
          var arg = last2.argument;
          this.toAssignable(arg, isBinding, contextDescription);
          if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern") {
            this.unexpected(arg.start);
          }
          --end;
        }
      }
      for (var i = 0; i < end; i++) {
        var elt = exprList[i];
        if (elt)
          this.toAssignable(elt, isBinding, contextDescription);
      }
      return exprList;
    };
    pp$2.toReferencedList = function(exprList) {
      return exprList;
    };
    pp$2.parseSpread = function(refShorthandDefaultPos) {
      var node = this.startNode();
      this.next();
      node.argument = this.parseMaybeAssign(false, refShorthandDefaultPos);
      return this.finishNode(node, "SpreadElement");
    };
    pp$2.parseRest = function() {
      var node = this.startNode();
      this.next();
      node.argument = this.parseBindingIdentifier();
      return this.finishNode(node, "RestElement");
    };
    pp$2.shouldAllowYieldIdentifier = function() {
      return this.match(types._yield) && !this.state.strict && !this.state.inGenerator;
    };
    pp$2.parseBindingIdentifier = function() {
      return this.parseIdentifier(this.shouldAllowYieldIdentifier());
    };
    pp$2.parseBindingAtom = function() {
      switch (this.state.type) {
        case types._yield:
          if (this.state.strict || this.state.inGenerator)
            this.unexpected();
        case types.name:
          return this.parseIdentifier(true);
        case types.bracketL:
          var node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(types.bracketR, true);
          return this.finishNode(node, "ArrayPattern");
        case types.braceL:
          return this.parseObj(true);
        default:
          this.unexpected();
      }
    };
    pp$2.parseBindingList = function(close, allowEmpty) {
      var elts = [];
      var first = true;
      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
        }
        if (allowEmpty && this.match(types.comma)) {
          elts.push(null);
        } else if (this.eat(close)) {
          break;
        } else if (this.match(types.ellipsis)) {
          elts.push(this.parseAssignableListItemTypes(this.parseRest()));
          this.expect(close);
          break;
        } else {
          var decorators = [];
          while (this.match(types.at)) {
            decorators.push(this.parseDecorator());
          }
          var left = this.parseMaybeDefault();
          if (decorators.length) {
            left.decorators = decorators;
          }
          this.parseAssignableListItemTypes(left);
          elts.push(this.parseMaybeDefault(left.start, left.loc.start, left));
        }
      }
      return elts;
    };
    pp$2.parseAssignableListItemTypes = function(param) {
      return param;
    };
    pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
      startLoc = startLoc || this.state.startLoc;
      startPos = startPos || this.state.start;
      left = left || this.parseBindingAtom();
      if (!this.eat(types.eq))
        return left;
      var node = this.startNodeAt(startPos, startLoc);
      node.left = left;
      node.right = this.parseMaybeAssign();
      return this.finishNode(node, "AssignmentPattern");
    };
    pp$2.checkLVal = function(expr, isBinding, checkClashes, contextDescription) {
      switch (expr.type) {
        case "Identifier":
          this.checkReservedWord(expr.name, expr.start, false, true);
          if (checkClashes) {
            var key = "_" + expr.name;
            if (checkClashes[key]) {
              this.raise(expr.start, "Argument name clash in strict mode");
            } else {
              checkClashes[key] = true;
            }
          }
          break;
        case "MemberExpression":
          if (isBinding)
            this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " member expression");
          break;
        case "ObjectPattern":
          for (var _iterator2 = expr.properties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ; ) {
            var _ref2;
            if (_isArray2) {
              if (_i2 >= _iterator2.length)
                break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done)
                break;
              _ref2 = _i2.value;
            }
            var prop = _ref2;
            if (prop.type === "ObjectProperty")
              prop = prop.value;
            this.checkLVal(prop, isBinding, checkClashes, "object destructuring pattern");
          }
          break;
        case "ArrayPattern":
          for (var _iterator3 = expr.elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ; ) {
            var _ref3;
            if (_isArray3) {
              if (_i3 >= _iterator3.length)
                break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done)
                break;
              _ref3 = _i3.value;
            }
            var elem = _ref3;
            if (elem)
              this.checkLVal(elem, isBinding, checkClashes, "array destructuring pattern");
          }
          break;
        case "AssignmentPattern":
          this.checkLVal(expr.left, isBinding, checkClashes, "assignment pattern");
          break;
        case "RestProperty":
          this.checkLVal(expr.argument, isBinding, checkClashes, "rest property");
          break;
        case "RestElement":
          this.checkLVal(expr.argument, isBinding, checkClashes, "rest element");
          break;
        default: {
          var message = (isBinding ? (
            /* istanbul ignore next */
            "Binding invalid"
          ) : "Invalid") + " left-hand side" + (contextDescription ? " in " + contextDescription : (
            /* istanbul ignore next */
            "expression"
          ));
          this.raise(expr.start, message);
        }
      }
    };
    var pp$3 = Parser.prototype;
    pp$3.checkPropClash = function(prop, propHash) {
      if (prop.computed || prop.kind)
        return;
      var key = prop.key;
      var name = key.type === "Identifier" ? key.name : String(key.value);
      if (name === "__proto__") {
        if (propHash.proto)
          this.raise(key.start, "Redefinition of __proto__ property");
        propHash.proto = true;
      }
    };
    pp$3.getExpression = function() {
      this.nextToken();
      var expr = this.parseExpression();
      if (!this.match(types.eof)) {
        this.unexpected();
      }
      return expr;
    };
    pp$3.parseExpression = function(noIn, refShorthandDefaultPos) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var expr = this.parseMaybeAssign(noIn, refShorthandDefaultPos);
      if (this.match(types.comma)) {
        var node = this.startNodeAt(startPos, startLoc);
        node.expressions = [expr];
        while (this.eat(types.comma)) {
          node.expressions.push(this.parseMaybeAssign(noIn, refShorthandDefaultPos));
        }
        this.toReferencedList(node.expressions);
        return this.finishNode(node, "SequenceExpression");
      }
      return expr;
    };
    pp$3.parseMaybeAssign = function(noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      if (this.match(types._yield) && this.state.inGenerator) {
        var _left = this.parseYield();
        if (afterLeftParse)
          _left = afterLeftParse.call(this, _left, startPos, startLoc);
        return _left;
      }
      var failOnShorthandAssign = void 0;
      if (refShorthandDefaultPos) {
        failOnShorthandAssign = false;
      } else {
        refShorthandDefaultPos = { start: 0 };
        failOnShorthandAssign = true;
      }
      if (this.match(types.parenL) || this.match(types.name)) {
        this.state.potentialArrowAt = this.state.start;
      }
      var left = this.parseMaybeConditional(noIn, refShorthandDefaultPos, refNeedsArrowPos);
      if (afterLeftParse)
        left = afterLeftParse.call(this, left, startPos, startLoc);
      if (this.state.type.isAssign) {
        var node = this.startNodeAt(startPos, startLoc);
        node.operator = this.state.value;
        node.left = this.match(types.eq) ? this.toAssignable(left, void 0, "assignment expression") : left;
        refShorthandDefaultPos.start = 0;
        this.checkLVal(left, void 0, void 0, "assignment expression");
        if (left.extra && left.extra.parenthesized) {
          var errorMsg = void 0;
          if (left.type === "ObjectPattern") {
            errorMsg = "`({a}) = 0` use `({a} = 0)`";
          } else if (left.type === "ArrayPattern") {
            errorMsg = "`([a]) = 0` use `([a] = 0)`";
          }
          if (errorMsg) {
            this.raise(left.start, "You're trying to assign to a parenthesized expression, eg. instead of " + errorMsg);
          }
        }
        this.next();
        node.right = this.parseMaybeAssign(noIn);
        return this.finishNode(node, "AssignmentExpression");
      } else if (failOnShorthandAssign && refShorthandDefaultPos.start) {
        this.unexpected(refShorthandDefaultPos.start);
      }
      return left;
    };
    pp$3.parseMaybeConditional = function(noIn, refShorthandDefaultPos, refNeedsArrowPos) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var expr = this.parseExprOps(noIn, refShorthandDefaultPos);
      if (refShorthandDefaultPos && refShorthandDefaultPos.start)
        return expr;
      return this.parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos);
    };
    pp$3.parseConditional = function(expr, noIn, startPos, startLoc) {
      if (this.eat(types.question)) {
        var node = this.startNodeAt(startPos, startLoc);
        node.test = expr;
        node.consequent = this.parseMaybeAssign();
        this.expect(types.colon);
        node.alternate = this.parseMaybeAssign(noIn);
        return this.finishNode(node, "ConditionalExpression");
      }
      return expr;
    };
    pp$3.parseExprOps = function(noIn, refShorthandDefaultPos) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var expr = this.parseMaybeUnary(refShorthandDefaultPos);
      if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
        return expr;
      } else {
        return this.parseExprOp(expr, startPos, startLoc, -1, noIn);
      }
    };
    pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
      var prec = this.state.type.binop;
      if (prec != null && (!noIn || !this.match(types._in))) {
        if (prec > minPrec) {
          var node = this.startNodeAt(leftStartPos, leftStartLoc);
          node.left = left;
          node.operator = this.state.value;
          if (node.operator === "**" && left.type === "UnaryExpression" && left.extra && !left.extra.parenthesizedArgument && !left.extra.parenthesized) {
            this.raise(left.argument.start, "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");
          }
          var op = this.state.type;
          this.next();
          var startPos = this.state.start;
          var startLoc = this.state.startLoc;
          node.right = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec, noIn);
          this.finishNode(node, op === types.logicalOR || op === types.logicalAND ? "LogicalExpression" : "BinaryExpression");
          return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
        }
      }
      return left;
    };
    pp$3.parseMaybeUnary = function(refShorthandDefaultPos) {
      if (this.state.type.prefix) {
        var node = this.startNode();
        var update = this.match(types.incDec);
        node.operator = this.state.value;
        node.prefix = true;
        this.next();
        var argType = this.state.type;
        node.argument = this.parseMaybeUnary();
        this.addExtra(node, "parenthesizedArgument", argType === types.parenL && (!node.argument.extra || !node.argument.extra.parenthesized));
        if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
          this.unexpected(refShorthandDefaultPos.start);
        }
        if (update) {
          this.checkLVal(node.argument, void 0, void 0, "prefix operation");
        } else if (this.state.strict && node.operator === "delete" && node.argument.type === "Identifier") {
          this.raise(node.start, "Deleting local variable in strict mode");
        }
        return this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
      }
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var expr = this.parseExprSubscripts(refShorthandDefaultPos);
      if (refShorthandDefaultPos && refShorthandDefaultPos.start)
        return expr;
      while (this.state.type.postfix && !this.canInsertSemicolon()) {
        var _node = this.startNodeAt(startPos, startLoc);
        _node.operator = this.state.value;
        _node.prefix = false;
        _node.argument = expr;
        this.checkLVal(expr, void 0, void 0, "postfix operation");
        this.next();
        expr = this.finishNode(_node, "UpdateExpression");
      }
      return expr;
    };
    pp$3.parseExprSubscripts = function(refShorthandDefaultPos) {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var potentialArrowAt = this.state.potentialArrowAt;
      var expr = this.parseExprAtom(refShorthandDefaultPos);
      if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
        return expr;
      }
      if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
        return expr;
      }
      return this.parseSubscripts(expr, startPos, startLoc);
    };
    pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
      for (; ; ) {
        if (!noCalls && this.eat(types.doubleColon)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.object = base;
          node.callee = this.parseNoCallExpr();
          return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
        } else if (this.eat(types.dot)) {
          var _node2 = this.startNodeAt(startPos, startLoc);
          _node2.object = base;
          _node2.property = this.parseIdentifier(true);
          _node2.computed = false;
          base = this.finishNode(_node2, "MemberExpression");
        } else if (this.eat(types.bracketL)) {
          var _node3 = this.startNodeAt(startPos, startLoc);
          _node3.object = base;
          _node3.property = this.parseExpression();
          _node3.computed = true;
          this.expect(types.bracketR);
          base = this.finishNode(_node3, "MemberExpression");
        } else if (!noCalls && this.match(types.parenL)) {
          var possibleAsync = this.state.potentialArrowAt === base.start && base.type === "Identifier" && base.name === "async" && !this.canInsertSemicolon();
          this.next();
          var _node4 = this.startNodeAt(startPos, startLoc);
          _node4.callee = base;
          _node4.arguments = this.parseCallExpressionArguments(types.parenR, possibleAsync);
          if (_node4.callee.type === "Import" && _node4.arguments.length !== 1) {
            this.raise(_node4.start, "import() requires exactly one argument");
          }
          base = this.finishNode(_node4, "CallExpression");
          if (possibleAsync && this.shouldParseAsyncArrow()) {
            return this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), _node4);
          } else {
            this.toReferencedList(_node4.arguments);
          }
        } else if (this.match(types.backQuote)) {
          var _node5 = this.startNodeAt(startPos, startLoc);
          _node5.tag = base;
          _node5.quasi = this.parseTemplate(true);
          base = this.finishNode(_node5, "TaggedTemplateExpression");
        } else {
          return base;
        }
      }
    };
    pp$3.parseCallExpressionArguments = function(close, possibleAsyncArrow) {
      var elts = [];
      var innerParenStart = void 0;
      var first = true;
      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.eat(close))
            break;
        }
        if (this.match(types.parenL) && !innerParenStart) {
          innerParenStart = this.state.start;
        }
        elts.push(this.parseExprListItem(false, possibleAsyncArrow ? { start: 0 } : void 0, possibleAsyncArrow ? { start: 0 } : void 0));
      }
      if (possibleAsyncArrow && innerParenStart && this.shouldParseAsyncArrow()) {
        this.unexpected();
      }
      return elts;
    };
    pp$3.shouldParseAsyncArrow = function() {
      return this.match(types.arrow);
    };
    pp$3.parseAsyncArrowFromCallExpression = function(node, call) {
      this.expect(types.arrow);
      return this.parseArrowExpression(node, call.arguments, true);
    };
    pp$3.parseNoCallExpr = function() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
    };
    pp$3.parseExprAtom = function(refShorthandDefaultPos) {
      var canBeArrow = this.state.potentialArrowAt === this.state.start;
      var node = void 0;
      switch (this.state.type) {
        case types._super:
          if (!this.state.inMethod && !this.state.inClassProperty && !this.options.allowSuperOutsideMethod) {
            this.raise(this.state.start, "'super' outside of function or class");
          }
          node = this.startNode();
          this.next();
          if (!this.match(types.parenL) && !this.match(types.bracketL) && !this.match(types.dot)) {
            this.unexpected();
          }
          if (this.match(types.parenL) && this.state.inMethod !== "constructor" && !this.options.allowSuperOutsideMethod) {
            this.raise(node.start, "super() outside of class constructor");
          }
          return this.finishNode(node, "Super");
        case types._import:
          if (!this.hasPlugin("dynamicImport"))
            this.unexpected();
          node = this.startNode();
          this.next();
          if (!this.match(types.parenL)) {
            this.unexpected(null, types.parenL);
          }
          return this.finishNode(node, "Import");
        case types._this:
          node = this.startNode();
          this.next();
          return this.finishNode(node, "ThisExpression");
        case types._yield:
          if (this.state.inGenerator)
            this.unexpected();
        case types.name:
          node = this.startNode();
          var allowAwait = this.state.value === "await" && this.state.inAsync;
          var allowYield = this.shouldAllowYieldIdentifier();
          var id = this.parseIdentifier(allowAwait || allowYield);
          if (id.name === "await") {
            if (this.state.inAsync || this.inModule) {
              return this.parseAwait(node);
            }
          } else if (id.name === "async" && this.match(types._function) && !this.canInsertSemicolon()) {
            this.next();
            return this.parseFunction(node, false, false, true);
          } else if (canBeArrow && id.name === "async" && this.match(types.name)) {
            var params = [this.parseIdentifier()];
            this.expect(types.arrow);
            return this.parseArrowExpression(node, params, true);
          }
          if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
            return this.parseArrowExpression(node, [id]);
          }
          return id;
        case types._do:
          if (this.hasPlugin("doExpressions")) {
            var _node6 = this.startNode();
            this.next();
            var oldInFunction = this.state.inFunction;
            var oldLabels = this.state.labels;
            this.state.labels = [];
            this.state.inFunction = false;
            _node6.body = this.parseBlock(false, true);
            this.state.inFunction = oldInFunction;
            this.state.labels = oldLabels;
            return this.finishNode(_node6, "DoExpression");
          }
        case types.regexp:
          var value = this.state.value;
          node = this.parseLiteral(value.value, "RegExpLiteral");
          node.pattern = value.pattern;
          node.flags = value.flags;
          return node;
        case types.num:
          return this.parseLiteral(this.state.value, "NumericLiteral");
        case types.string:
          return this.parseLiteral(this.state.value, "StringLiteral");
        case types._null:
          node = this.startNode();
          this.next();
          return this.finishNode(node, "NullLiteral");
        case types._true:
        case types._false:
          node = this.startNode();
          node.value = this.match(types._true);
          this.next();
          return this.finishNode(node, "BooleanLiteral");
        case types.parenL:
          return this.parseParenAndDistinguishExpression(null, null, canBeArrow);
        case types.bracketL:
          node = this.startNode();
          this.next();
          node.elements = this.parseExprList(types.bracketR, true, refShorthandDefaultPos);
          this.toReferencedList(node.elements);
          return this.finishNode(node, "ArrayExpression");
        case types.braceL:
          return this.parseObj(false, refShorthandDefaultPos);
        case types._function:
          return this.parseFunctionExpression();
        case types.at:
          this.parseDecorators();
        case types._class:
          node = this.startNode();
          this.takeDecorators(node);
          return this.parseClass(node, false);
        case types._new:
          return this.parseNew();
        case types.backQuote:
          return this.parseTemplate(false);
        case types.doubleColon:
          node = this.startNode();
          this.next();
          node.object = null;
          var callee = node.callee = this.parseNoCallExpr();
          if (callee.type === "MemberExpression") {
            return this.finishNode(node, "BindExpression");
          } else {
            this.raise(callee.start, "Binding should be performed on object property.");
          }
        default:
          this.unexpected();
      }
    };
    pp$3.parseFunctionExpression = function() {
      var node = this.startNode();
      var meta = this.parseIdentifier(true);
      if (this.state.inGenerator && this.eat(types.dot) && this.hasPlugin("functionSent")) {
        return this.parseMetaProperty(node, meta, "sent");
      } else {
        return this.parseFunction(node, false);
      }
    };
    pp$3.parseMetaProperty = function(node, meta, propertyName) {
      node.meta = meta;
      node.property = this.parseIdentifier(true);
      if (node.property.name !== propertyName) {
        this.raise(node.property.start, "The only valid meta property for new is " + meta.name + "." + propertyName);
      }
      return this.finishNode(node, "MetaProperty");
    };
    pp$3.parseLiteral = function(value, type, startPos, startLoc) {
      startPos = startPos || this.state.start;
      startLoc = startLoc || this.state.startLoc;
      var node = this.startNodeAt(startPos, startLoc);
      this.addExtra(node, "rawValue", value);
      this.addExtra(node, "raw", this.input.slice(startPos, this.state.end));
      node.value = value;
      this.next();
      return this.finishNode(node, type);
    };
    pp$3.parseParenExpression = function() {
      this.expect(types.parenL);
      var val = this.parseExpression();
      this.expect(types.parenR);
      return val;
    };
    pp$3.parseParenAndDistinguishExpression = function(startPos, startLoc, canBeArrow) {
      startPos = startPos || this.state.start;
      startLoc = startLoc || this.state.startLoc;
      var val = void 0;
      this.expect(types.parenL);
      var innerStartPos = this.state.start;
      var innerStartLoc = this.state.startLoc;
      var exprList = [];
      var refShorthandDefaultPos = { start: 0 };
      var refNeedsArrowPos = { start: 0 };
      var first = true;
      var spreadStart = void 0;
      var optionalCommaStart = void 0;
      while (!this.match(types.parenR)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma, refNeedsArrowPos.start || null);
          if (this.match(types.parenR)) {
            optionalCommaStart = this.state.start;
            break;
          }
        }
        if (this.match(types.ellipsis)) {
          var spreadNodeStartPos = this.state.start;
          var spreadNodeStartLoc = this.state.startLoc;
          spreadStart = this.state.start;
          exprList.push(this.parseParenItem(this.parseRest(), spreadNodeStartPos, spreadNodeStartLoc));
          break;
        } else {
          exprList.push(this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos));
        }
      }
      var innerEndPos = this.state.start;
      var innerEndLoc = this.state.startLoc;
      this.expect(types.parenR);
      var arrowNode = this.startNodeAt(startPos, startLoc);
      if (canBeArrow && this.shouldParseArrow() && (arrowNode = this.parseArrow(arrowNode))) {
        for (var _iterator = exprList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var param = _ref;
          if (param.extra && param.extra.parenthesized)
            this.unexpected(param.extra.parenStart);
        }
        return this.parseArrowExpression(arrowNode, exprList);
      }
      if (!exprList.length) {
        this.unexpected(this.state.lastTokStart);
      }
      if (optionalCommaStart)
        this.unexpected(optionalCommaStart);
      if (spreadStart)
        this.unexpected(spreadStart);
      if (refShorthandDefaultPos.start)
        this.unexpected(refShorthandDefaultPos.start);
      if (refNeedsArrowPos.start)
        this.unexpected(refNeedsArrowPos.start);
      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.toReferencedList(val.expressions);
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }
      this.addExtra(val, "parenthesized", true);
      this.addExtra(val, "parenStart", startPos);
      return val;
    };
    pp$3.shouldParseArrow = function() {
      return !this.canInsertSemicolon();
    };
    pp$3.parseArrow = function(node) {
      if (this.eat(types.arrow)) {
        return node;
      }
    };
    pp$3.parseParenItem = function(node) {
      return node;
    };
    pp$3.parseNew = function() {
      var node = this.startNode();
      var meta = this.parseIdentifier(true);
      if (this.eat(types.dot)) {
        var metaProp = this.parseMetaProperty(node, meta, "target");
        if (!this.state.inFunction) {
          this.raise(metaProp.property.start, "new.target can only be used in functions");
        }
        return metaProp;
      }
      node.callee = this.parseNoCallExpr();
      if (this.eat(types.parenL)) {
        node.arguments = this.parseExprList(types.parenR);
        this.toReferencedList(node.arguments);
      } else {
        node.arguments = [];
      }
      return this.finishNode(node, "NewExpression");
    };
    pp$3.parseTemplateElement = function(isTagged) {
      var elem = this.startNode();
      if (this.state.value === null) {
        if (!isTagged || !this.hasPlugin("templateInvalidEscapes")) {
          this.raise(this.state.invalidTemplateEscapePosition, "Invalid escape sequence in template");
        } else {
          this.state.invalidTemplateEscapePosition = null;
        }
      }
      elem.value = {
        raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
        cooked: this.state.value
      };
      this.next();
      elem.tail = this.match(types.backQuote);
      return this.finishNode(elem, "TemplateElement");
    };
    pp$3.parseTemplate = function(isTagged) {
      var node = this.startNode();
      this.next();
      node.expressions = [];
      var curElt = this.parseTemplateElement(isTagged);
      node.quasis = [curElt];
      while (!curElt.tail) {
        this.expect(types.dollarBraceL);
        node.expressions.push(this.parseExpression());
        this.expect(types.braceR);
        node.quasis.push(curElt = this.parseTemplateElement(isTagged));
      }
      this.next();
      return this.finishNode(node, "TemplateLiteral");
    };
    pp$3.parseObj = function(isPattern, refShorthandDefaultPos) {
      var decorators = [];
      var propHash = /* @__PURE__ */ Object.create(null);
      var first = true;
      var node = this.startNode();
      node.properties = [];
      this.next();
      var firstRestLocation = null;
      while (!this.eat(types.braceR)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.eat(types.braceR))
            break;
        }
        while (this.match(types.at)) {
          decorators.push(this.parseDecorator());
        }
        var prop = this.startNode(), isGenerator = false, isAsync = false, startPos = void 0, startLoc = void 0;
        if (decorators.length) {
          prop.decorators = decorators;
          decorators = [];
        }
        if (this.hasPlugin("objectRestSpread") && this.match(types.ellipsis)) {
          prop = this.parseSpread(isPattern ? { start: 0 } : void 0);
          prop.type = isPattern ? "RestProperty" : "SpreadProperty";
          if (isPattern)
            this.toAssignable(prop.argument, true, "object pattern");
          node.properties.push(prop);
          if (isPattern) {
            var position = this.state.start;
            if (firstRestLocation !== null) {
              this.unexpected(firstRestLocation, "Cannot have multiple rest elements when destructuring");
            } else if (this.eat(types.braceR)) {
              break;
            } else if (this.match(types.comma) && this.lookahead().type === types.braceR) {
              continue;
            } else {
              firstRestLocation = position;
              continue;
            }
          } else {
            continue;
          }
        }
        prop.method = false;
        prop.shorthand = false;
        if (isPattern || refShorthandDefaultPos) {
          startPos = this.state.start;
          startLoc = this.state.startLoc;
        }
        if (!isPattern) {
          isGenerator = this.eat(types.star);
        }
        if (!isPattern && this.isContextual("async")) {
          if (isGenerator)
            this.unexpected();
          var asyncId = this.parseIdentifier();
          if (this.match(types.colon) || this.match(types.parenL) || this.match(types.braceR) || this.match(types.eq) || this.match(types.comma)) {
            prop.key = asyncId;
            prop.computed = false;
          } else {
            isAsync = true;
            if (this.hasPlugin("asyncGenerators"))
              isGenerator = this.eat(types.star);
            this.parsePropertyName(prop);
          }
        } else {
          this.parsePropertyName(prop);
        }
        this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos);
        this.checkPropClash(prop, propHash);
        if (prop.shorthand) {
          this.addExtra(prop, "shorthand", true);
        }
        node.properties.push(prop);
      }
      if (firstRestLocation !== null) {
        this.unexpected(firstRestLocation, "The rest element has to be the last element when destructuring");
      }
      if (decorators.length) {
        this.raise(this.state.start, "You have trailing decorators with no property");
      }
      return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
    };
    pp$3.isGetterOrSetterMethod = function(prop, isPattern) {
      return !isPattern && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.match(types.string) || // get "string"() {}
      this.match(types.num) || // get 1() {}
      this.match(types.bracketL) || // get ["string"]() {}
      this.match(types.name) || // get foo() {}
      this.state.type.keyword);
    };
    pp$3.checkGetterSetterParamCount = function(method) {
      var paramCount = method.kind === "get" ? 0 : 1;
      if (method.params.length !== paramCount) {
        var start = method.start;
        if (method.kind === "get") {
          this.raise(start, "getter should have no params");
        } else {
          this.raise(start, "setter should have exactly one param");
        }
      }
    };
    pp$3.parseObjectMethod = function(prop, isGenerator, isAsync, isPattern) {
      if (isAsync || isGenerator || this.match(types.parenL)) {
        if (isPattern)
          this.unexpected();
        prop.kind = "method";
        prop.method = true;
        this.parseMethod(prop, isGenerator, isAsync);
        return this.finishNode(prop, "ObjectMethod");
      }
      if (this.isGetterOrSetterMethod(prop, isPattern)) {
        if (isGenerator || isAsync)
          this.unexpected();
        prop.kind = prop.key.name;
        this.parsePropertyName(prop);
        this.parseMethod(prop);
        this.checkGetterSetterParamCount(prop);
        return this.finishNode(prop, "ObjectMethod");
      }
    };
    pp$3.parseObjectProperty = function(prop, startPos, startLoc, isPattern, refShorthandDefaultPos) {
      if (this.eat(types.colon)) {
        prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssign(false, refShorthandDefaultPos);
        return this.finishNode(prop, "ObjectProperty");
      }
      if (!prop.computed && prop.key.type === "Identifier") {
        this.checkReservedWord(prop.key.name, prop.key.start, true, true);
        if (isPattern) {
          prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
        } else if (this.match(types.eq) && refShorthandDefaultPos) {
          if (!refShorthandDefaultPos.start) {
            refShorthandDefaultPos.start = this.state.start;
          }
          prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
        } else {
          prop.value = prop.key.__clone();
        }
        prop.shorthand = true;
        return this.finishNode(prop, "ObjectProperty");
      }
    };
    pp$3.parseObjPropValue = function(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos) {
      var node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refShorthandDefaultPos);
      if (!node)
        this.unexpected();
      return node;
    };
    pp$3.parsePropertyName = function(prop) {
      if (this.eat(types.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssign();
        this.expect(types.bracketR);
      } else {
        prop.computed = false;
        var oldInPropertyName = this.state.inPropertyName;
        this.state.inPropertyName = true;
        prop.key = this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
        this.state.inPropertyName = oldInPropertyName;
      }
      return prop.key;
    };
    pp$3.initFunction = function(node, isAsync) {
      node.id = null;
      node.generator = false;
      node.expression = false;
      node.async = !!isAsync;
    };
    pp$3.parseMethod = function(node, isGenerator, isAsync) {
      var oldInMethod = this.state.inMethod;
      this.state.inMethod = node.kind || true;
      this.initFunction(node, isAsync);
      this.expect(types.parenL);
      node.params = this.parseBindingList(types.parenR);
      node.generator = !!isGenerator;
      this.parseFunctionBody(node);
      this.state.inMethod = oldInMethod;
      return node;
    };
    pp$3.parseArrowExpression = function(node, params, isAsync) {
      this.initFunction(node, isAsync);
      node.params = this.toAssignableList(params, true, "arrow function parameters");
      this.parseFunctionBody(node, true);
      return this.finishNode(node, "ArrowFunctionExpression");
    };
    pp$3.isStrictBody = function(node, isExpression) {
      if (!isExpression && node.body.directives.length) {
        for (var _iterator2 = node.body.directives, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ; ) {
          var _ref2;
          if (_isArray2) {
            if (_i2 >= _iterator2.length)
              break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done)
              break;
            _ref2 = _i2.value;
          }
          var directive = _ref2;
          if (directive.value.value === "use strict") {
            return true;
          }
        }
      }
      return false;
    };
    pp$3.parseFunctionBody = function(node, allowExpression) {
      var isExpression = allowExpression && !this.match(types.braceL);
      var oldInAsync = this.state.inAsync;
      this.state.inAsync = node.async;
      if (isExpression) {
        node.body = this.parseMaybeAssign();
        node.expression = true;
      } else {
        var oldInFunc = this.state.inFunction;
        var oldInGen = this.state.inGenerator;
        var oldLabels = this.state.labels;
        this.state.inFunction = true;
        this.state.inGenerator = node.generator;
        this.state.labels = [];
        node.body = this.parseBlock(true);
        node.expression = false;
        this.state.inFunction = oldInFunc;
        this.state.inGenerator = oldInGen;
        this.state.labels = oldLabels;
      }
      this.state.inAsync = oldInAsync;
      var isStrict = this.isStrictBody(node, isExpression);
      var checkLVal = this.state.strict || allowExpression || isStrict;
      if (isStrict && node.id && node.id.type === "Identifier" && node.id.name === "yield") {
        this.raise(node.id.start, "Binding yield in strict mode");
      }
      if (checkLVal) {
        var nameHash = /* @__PURE__ */ Object.create(null);
        var oldStrict = this.state.strict;
        if (isStrict)
          this.state.strict = true;
        if (node.id) {
          this.checkLVal(node.id, true, void 0, "function name");
        }
        for (var _iterator3 = node.params, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ; ) {
          var _ref3;
          if (_isArray3) {
            if (_i3 >= _iterator3.length)
              break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done)
              break;
            _ref3 = _i3.value;
          }
          var param = _ref3;
          if (isStrict && param.type !== "Identifier") {
            this.raise(param.start, "Non-simple parameter in strict mode");
          }
          this.checkLVal(param, true, nameHash, "function parameter list");
        }
        this.state.strict = oldStrict;
      }
    };
    pp$3.parseExprList = function(close, allowEmpty, refShorthandDefaultPos) {
      var elts = [];
      var first = true;
      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.eat(close))
            break;
        }
        elts.push(this.parseExprListItem(allowEmpty, refShorthandDefaultPos));
      }
      return elts;
    };
    pp$3.parseExprListItem = function(allowEmpty, refShorthandDefaultPos, refNeedsArrowPos) {
      var elt = void 0;
      if (allowEmpty && this.match(types.comma)) {
        elt = null;
      } else if (this.match(types.ellipsis)) {
        elt = this.parseSpread(refShorthandDefaultPos);
      } else {
        elt = this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos);
      }
      return elt;
    };
    pp$3.parseIdentifier = function(liberal) {
      var node = this.startNode();
      if (!liberal) {
        this.checkReservedWord(this.state.value, this.state.start, !!this.state.type.keyword, false);
      }
      if (this.match(types.name)) {
        node.name = this.state.value;
      } else if (this.state.type.keyword) {
        node.name = this.state.type.keyword;
      } else {
        this.unexpected();
      }
      if (!liberal && node.name === "await" && this.state.inAsync) {
        this.raise(node.start, "invalid use of await inside of an async function");
      }
      node.loc.identifierName = node.name;
      this.next();
      return this.finishNode(node, "Identifier");
    };
    pp$3.checkReservedWord = function(word, startLoc, checkKeywords, isBinding) {
      if (this.isReservedWord(word) || checkKeywords && this.isKeyword(word)) {
        this.raise(startLoc, word + " is a reserved word");
      }
      if (this.state.strict && (reservedWords.strict(word) || isBinding && reservedWords.strictBind(word))) {
        this.raise(startLoc, word + " is a reserved word in strict mode");
      }
    };
    pp$3.parseAwait = function(node) {
      if (!this.state.inAsync) {
        this.unexpected();
      }
      if (this.match(types.star)) {
        this.raise(node.start, "await* has been removed from the async functions proposal. Use Promise.all() instead.");
      }
      node.argument = this.parseMaybeUnary();
      return this.finishNode(node, "AwaitExpression");
    };
    pp$3.parseYield = function() {
      var node = this.startNode();
      this.next();
      if (this.match(types.semi) || this.canInsertSemicolon() || !this.match(types.star) && !this.state.type.startsExpr) {
        node.delegate = false;
        node.argument = null;
      } else {
        node.delegate = this.eat(types.star);
        node.argument = this.parseMaybeAssign();
      }
      return this.finishNode(node, "YieldExpression");
    };
    var pp$4 = Parser.prototype;
    var commentKeys = ["leadingComments", "trailingComments", "innerComments"];
    var Node = function() {
      function Node2(pos, loc, filename) {
        classCallCheck(this, Node2);
        this.type = "";
        this.start = pos;
        this.end = 0;
        this.loc = new SourceLocation(loc);
        if (filename)
          this.loc.filename = filename;
      }
      Node2.prototype.__clone = function __clone() {
        var node2 = new Node2();
        for (var key in this) {
          if (commentKeys.indexOf(key) < 0) {
            node2[key] = this[key];
          }
        }
        return node2;
      };
      return Node2;
    }();
    pp$4.startNode = function() {
      return new Node(this.state.start, this.state.startLoc, this.filename);
    };
    pp$4.startNodeAt = function(pos, loc) {
      return new Node(pos, loc, this.filename);
    };
    function finishNodeAt(node, type, pos, loc) {
      node.type = type;
      node.end = pos;
      node.loc.end = loc;
      this.processComment(node);
      return node;
    }
    pp$4.finishNode = function(node, type) {
      return finishNodeAt.call(this, node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
    };
    pp$4.finishNodeAt = function(node, type, pos, loc) {
      return finishNodeAt.call(this, node, type, pos, loc);
    };
    var pp$5 = Parser.prototype;
    pp$5.raise = function(pos, message) {
      var loc = getLineInfo(this.input, pos);
      message += " (" + loc.line + ":" + loc.column + ")";
      var err = new SyntaxError(message);
      err.pos = pos;
      err.loc = loc;
      throw err;
    };
    function last(stack) {
      return stack[stack.length - 1];
    }
    var pp$6 = Parser.prototype;
    pp$6.addComment = function(comment) {
      if (this.filename)
        comment.loc.filename = this.filename;
      this.state.trailingComments.push(comment);
      this.state.leadingComments.push(comment);
    };
    pp$6.processComment = function(node) {
      if (node.type === "Program" && node.body.length > 0)
        return;
      var stack = this.state.commentStack;
      var firstChild = void 0, lastChild = void 0, trailingComments = void 0, i = void 0, j = void 0;
      if (this.state.trailingComments.length > 0) {
        if (this.state.trailingComments[0].start >= node.end) {
          trailingComments = this.state.trailingComments;
          this.state.trailingComments = [];
        } else {
          this.state.trailingComments.length = 0;
        }
      } else {
        var lastInStack = last(stack);
        if (stack.length > 0 && lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
          trailingComments = lastInStack.trailingComments;
          lastInStack.trailingComments = null;
        }
      }
      if (stack.length > 0 && last(stack).start >= node.start) {
        firstChild = stack.pop();
      }
      while (stack.length > 0 && last(stack).start >= node.start) {
        lastChild = stack.pop();
      }
      if (!lastChild && firstChild)
        lastChild = firstChild;
      if (firstChild && this.state.leadingComments.length > 0) {
        var lastComment = last(this.state.leadingComments);
        if (firstChild.type === "ObjectProperty") {
          if (lastComment.start >= node.start) {
            if (this.state.commentPreviousNode) {
              for (j = 0; j < this.state.leadingComments.length; j++) {
                if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
                  this.state.leadingComments.splice(j, 1);
                  j--;
                }
              }
              if (this.state.leadingComments.length > 0) {
                firstChild.trailingComments = this.state.leadingComments;
                this.state.leadingComments = [];
              }
            }
          }
        } else if (node.type === "CallExpression" && node.arguments && node.arguments.length) {
          var lastArg = last(node.arguments);
          if (lastArg && lastComment.start >= lastArg.start && lastComment.end <= node.end) {
            if (this.state.commentPreviousNode) {
              if (this.state.leadingComments.length > 0) {
                lastArg.trailingComments = this.state.leadingComments;
                this.state.leadingComments = [];
              }
            }
          }
        }
      }
      if (lastChild) {
        if (lastChild.leadingComments) {
          if (lastChild !== node && last(lastChild.leadingComments).end <= node.start) {
            node.leadingComments = lastChild.leadingComments;
            lastChild.leadingComments = null;
          } else {
            for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
              if (lastChild.leadingComments[i].end <= node.start) {
                node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
                break;
              }
            }
          }
        }
      } else if (this.state.leadingComments.length > 0) {
        if (last(this.state.leadingComments).end <= node.start) {
          if (this.state.commentPreviousNode) {
            for (j = 0; j < this.state.leadingComments.length; j++) {
              if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
                this.state.leadingComments.splice(j, 1);
                j--;
              }
            }
          }
          if (this.state.leadingComments.length > 0) {
            node.leadingComments = this.state.leadingComments;
            this.state.leadingComments = [];
          }
        } else {
          for (i = 0; i < this.state.leadingComments.length; i++) {
            if (this.state.leadingComments[i].end > node.start) {
              break;
            }
          }
          node.leadingComments = this.state.leadingComments.slice(0, i);
          if (node.leadingComments.length === 0) {
            node.leadingComments = null;
          }
          trailingComments = this.state.leadingComments.slice(i);
          if (trailingComments.length === 0) {
            trailingComments = null;
          }
        }
      }
      this.state.commentPreviousNode = node;
      if (trailingComments) {
        if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
          node.innerComments = trailingComments;
        } else {
          node.trailingComments = trailingComments;
        }
      }
      stack.push(node);
    };
    var pp$7 = Parser.prototype;
    pp$7.estreeParseRegExpLiteral = function(_ref) {
      var pattern = _ref.pattern, flags = _ref.flags;
      var regex = null;
      try {
        regex = new RegExp(pattern, flags);
      } catch (e) {
      }
      var node = this.estreeParseLiteral(regex);
      node.regex = { pattern, flags };
      return node;
    };
    pp$7.estreeParseLiteral = function(value) {
      return this.parseLiteral(value, "Literal");
    };
    pp$7.directiveToStmt = function(directive) {
      var directiveLiteral = directive.value;
      var stmt = this.startNodeAt(directive.start, directive.loc.start);
      var expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);
      expression.value = directiveLiteral.value;
      expression.raw = directiveLiteral.extra.raw;
      stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.end, directiveLiteral.loc.end);
      stmt.directive = directiveLiteral.extra.raw.slice(1, -1);
      return this.finishNodeAt(stmt, "ExpressionStatement", directive.end, directive.loc.end);
    };
    function isSimpleProperty(node) {
      return node && node.type === "Property" && node.kind === "init" && node.method === false;
    }
    var estreePlugin = function(instance) {
      instance.extend("checkDeclaration", function(inner) {
        return function(node) {
          if (isSimpleProperty(node)) {
            this.checkDeclaration(node.value);
          } else {
            inner.call(this, node);
          }
        };
      });
      instance.extend("checkGetterSetterParamCount", function() {
        return function(prop) {
          var paramCount = prop.kind === "get" ? 0 : 1;
          if (prop.value.params.length !== paramCount) {
            var start = prop.start;
            if (prop.kind === "get") {
              this.raise(start, "getter should have no params");
            } else {
              this.raise(start, "setter should have exactly one param");
            }
          }
        };
      });
      instance.extend("checkLVal", function(inner) {
        return function(expr, isBinding, checkClashes) {
          var _this = this;
          switch (expr.type) {
            case "ObjectPattern":
              expr.properties.forEach(function(prop) {
                _this.checkLVal(prop.type === "Property" ? prop.value : prop, isBinding, checkClashes, "object destructuring pattern");
              });
              break;
            default:
              for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                args[_key - 3] = arguments[_key];
              }
              inner.call.apply(inner, [this, expr, isBinding, checkClashes].concat(args));
          }
        };
      });
      instance.extend("checkPropClash", function() {
        return function(prop, propHash) {
          if (prop.computed || !isSimpleProperty(prop))
            return;
          var key = prop.key;
          var name = key.type === "Identifier" ? key.name : String(key.value);
          if (name === "__proto__") {
            if (propHash.proto)
              this.raise(key.start, "Redefinition of __proto__ property");
            propHash.proto = true;
          }
        };
      });
      instance.extend("isStrictBody", function() {
        return function(node, isExpression) {
          if (!isExpression && node.body.body.length > 0) {
            for (var _iterator = node.body.body, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
              var _ref2;
              if (_isArray) {
                if (_i >= _iterator.length)
                  break;
                _ref2 = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done)
                  break;
                _ref2 = _i.value;
              }
              var directive = _ref2;
              if (directive.type === "ExpressionStatement" && directive.expression.type === "Literal") {
                if (directive.expression.value === "use strict")
                  return true;
              } else {
                break;
              }
            }
          }
          return false;
        };
      });
      instance.extend("isValidDirective", function() {
        return function(stmt) {
          return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && (!stmt.expression.extra || !stmt.expression.extra.parenthesized);
        };
      });
      instance.extend("stmtToDirective", function(inner) {
        return function(stmt) {
          var directive = inner.call(this, stmt);
          var value = stmt.expression.value;
          directive.value.value = value;
          return directive;
        };
      });
      instance.extend("parseBlockBody", function(inner) {
        return function(node) {
          var _this2 = this;
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          inner.call.apply(inner, [this, node].concat(args));
          node.directives.reverse().forEach(function(directive) {
            node.body.unshift(_this2.directiveToStmt(directive));
          });
          delete node.directives;
        };
      });
      instance.extend("parseClassMethod", function() {
        return function(classBody, method, isGenerator, isAsync) {
          this.parseMethod(method, isGenerator, isAsync);
          if (method.typeParameters) {
            method.value.typeParameters = method.typeParameters;
            delete method.typeParameters;
          }
          classBody.body.push(this.finishNode(method, "MethodDefinition"));
        };
      });
      instance.extend("parseExprAtom", function(inner) {
        return function() {
          switch (this.state.type) {
            case types.regexp:
              return this.estreeParseRegExpLiteral(this.state.value);
            case types.num:
            case types.string:
              return this.estreeParseLiteral(this.state.value);
            case types._null:
              return this.estreeParseLiteral(null);
            case types._true:
              return this.estreeParseLiteral(true);
            case types._false:
              return this.estreeParseLiteral(false);
            default:
              for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }
              return inner.call.apply(inner, [this].concat(args));
          }
        };
      });
      instance.extend("parseLiteral", function(inner) {
        return function() {
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          var node = inner.call.apply(inner, [this].concat(args));
          node.raw = node.extra.raw;
          delete node.extra;
          return node;
        };
      });
      instance.extend("parseMethod", function(inner) {
        return function(node) {
          var funcNode = this.startNode();
          funcNode.kind = node.kind;
          for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            args[_key5 - 1] = arguments[_key5];
          }
          funcNode = inner.call.apply(inner, [this, funcNode].concat(args));
          delete funcNode.kind;
          node.value = this.finishNode(funcNode, "FunctionExpression");
          return node;
        };
      });
      instance.extend("parseObjectMethod", function(inner) {
        return function() {
          for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          var node = inner.call.apply(inner, [this].concat(args));
          if (node) {
            if (node.kind === "method")
              node.kind = "init";
            node.type = "Property";
          }
          return node;
        };
      });
      instance.extend("parseObjectProperty", function(inner) {
        return function() {
          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          var node = inner.call.apply(inner, [this].concat(args));
          if (node) {
            node.kind = "init";
            node.type = "Property";
          }
          return node;
        };
      });
      instance.extend("toAssignable", function(inner) {
        return function(node, isBinding) {
          for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
            args[_key8 - 2] = arguments[_key8];
          }
          if (isSimpleProperty(node)) {
            this.toAssignable.apply(this, [node.value, isBinding].concat(args));
            return node;
          } else if (node.type === "ObjectExpression") {
            node.type = "ObjectPattern";
            for (var _iterator2 = node.properties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ; ) {
              var _ref3;
              if (_isArray2) {
                if (_i2 >= _iterator2.length)
                  break;
                _ref3 = _iterator2[_i2++];
              } else {
                _i2 = _iterator2.next();
                if (_i2.done)
                  break;
                _ref3 = _i2.value;
              }
              var prop = _ref3;
              if (prop.kind === "get" || prop.kind === "set") {
                this.raise(prop.key.start, "Object pattern can't contain getter or setter");
              } else if (prop.method) {
                this.raise(prop.key.start, "Object pattern can't contain methods");
              } else {
                this.toAssignable(prop, isBinding, "object destructuring pattern");
              }
            }
            return node;
          }
          return inner.call.apply(inner, [this, node, isBinding].concat(args));
        };
      });
    };
    var primitiveTypes = ["any", "mixed", "empty", "bool", "boolean", "number", "string", "void", "null"];
    var pp$8 = Parser.prototype;
    pp$8.flowParseTypeInitialiser = function(tok) {
      var oldInType = this.state.inType;
      this.state.inType = true;
      this.expect(tok || types.colon);
      var type = this.flowParseType();
      this.state.inType = oldInType;
      return type;
    };
    pp$8.flowParsePredicate = function() {
      var node = this.startNode();
      var moduloLoc = this.state.startLoc;
      var moduloPos = this.state.start;
      this.expect(types.modulo);
      var checksLoc = this.state.startLoc;
      this.expectContextual("checks");
      if (moduloLoc.line !== checksLoc.line || moduloLoc.column !== checksLoc.column - 1) {
        this.raise(moduloPos, "Spaces between \xB4%\xB4 and \xB4checks\xB4 are not allowed here.");
      }
      if (this.eat(types.parenL)) {
        node.expression = this.parseExpression();
        this.expect(types.parenR);
        return this.finishNode(node, "DeclaredPredicate");
      } else {
        return this.finishNode(node, "InferredPredicate");
      }
    };
    pp$8.flowParseTypeAndPredicateInitialiser = function() {
      var oldInType = this.state.inType;
      this.state.inType = true;
      this.expect(types.colon);
      var type = null;
      var predicate = null;
      if (this.match(types.modulo)) {
        this.state.inType = oldInType;
        predicate = this.flowParsePredicate();
      } else {
        type = this.flowParseType();
        this.state.inType = oldInType;
        if (this.match(types.modulo)) {
          predicate = this.flowParsePredicate();
        }
      }
      return [type, predicate];
    };
    pp$8.flowParseDeclareClass = function(node) {
      this.next();
      this.flowParseInterfaceish(node, true);
      return this.finishNode(node, "DeclareClass");
    };
    pp$8.flowParseDeclareFunction = function(node) {
      this.next();
      var id = node.id = this.parseIdentifier();
      var typeNode = this.startNode();
      var typeContainer = this.startNode();
      if (this.isRelational("<")) {
        typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        typeNode.typeParameters = null;
      }
      this.expect(types.parenL);
      var tmp = this.flowParseFunctionTypeParams();
      typeNode.params = tmp.params;
      typeNode.rest = tmp.rest;
      this.expect(types.parenR);
      var predicate = null;
      var _flowParseTypeAndPred = this.flowParseTypeAndPredicateInitialiser();
      typeNode.returnType = _flowParseTypeAndPred[0];
      predicate = _flowParseTypeAndPred[1];
      typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
      typeContainer.predicate = predicate;
      id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
      this.finishNode(id, id.type);
      this.semicolon();
      return this.finishNode(node, "DeclareFunction");
    };
    pp$8.flowParseDeclare = function(node) {
      if (this.match(types._class)) {
        return this.flowParseDeclareClass(node);
      } else if (this.match(types._function)) {
        return this.flowParseDeclareFunction(node);
      } else if (this.match(types._var)) {
        return this.flowParseDeclareVariable(node);
      } else if (this.isContextual("module")) {
        if (this.lookahead().type === types.dot) {
          return this.flowParseDeclareModuleExports(node);
        } else {
          return this.flowParseDeclareModule(node);
        }
      } else if (this.isContextual("type")) {
        return this.flowParseDeclareTypeAlias(node);
      } else if (this.isContextual("opaque")) {
        return this.flowParseDeclareOpaqueType(node);
      } else if (this.isContextual("interface")) {
        return this.flowParseDeclareInterface(node);
      } else if (this.match(types._export)) {
        return this.flowParseDeclareExportDeclaration(node);
      } else {
        this.unexpected();
      }
    };
    pp$8.flowParseDeclareExportDeclaration = function(node) {
      this.expect(types._export);
      if (this.isContextual("opaque")) {
        node.declaration = this.flowParseDeclare(this.startNode());
        node.default = false;
        return this.finishNode(node, "DeclareExportDeclaration");
      }
      throw this.unexpected();
    };
    pp$8.flowParseDeclareVariable = function(node) {
      this.next();
      node.id = this.flowParseTypeAnnotatableIdentifier();
      this.semicolon();
      return this.finishNode(node, "DeclareVariable");
    };
    pp$8.flowParseDeclareModule = function(node) {
      this.next();
      if (this.match(types.string)) {
        node.id = this.parseExprAtom();
      } else {
        node.id = this.parseIdentifier();
      }
      var bodyNode = node.body = this.startNode();
      var body = bodyNode.body = [];
      this.expect(types.braceL);
      while (!this.match(types.braceR)) {
        var _bodyNode = this.startNode();
        if (this.match(types._import)) {
          var lookahead = this.lookahead();
          if (lookahead.value !== "type" && lookahead.value !== "typeof") {
            this.unexpected(null, "Imports within a `declare module` body must always be `import type` or `import typeof`");
          }
          this.parseImport(_bodyNode);
        } else {
          this.expectContextual("declare", "Only declares and type imports are allowed inside declare module");
          _bodyNode = this.flowParseDeclare(_bodyNode, true);
        }
        body.push(_bodyNode);
      }
      this.expect(types.braceR);
      this.finishNode(bodyNode, "BlockStatement");
      return this.finishNode(node, "DeclareModule");
    };
    pp$8.flowParseDeclareModuleExports = function(node) {
      this.expectContextual("module");
      this.expect(types.dot);
      this.expectContextual("exports");
      node.typeAnnotation = this.flowParseTypeAnnotation();
      this.semicolon();
      return this.finishNode(node, "DeclareModuleExports");
    };
    pp$8.flowParseDeclareTypeAlias = function(node) {
      this.next();
      this.flowParseTypeAlias(node);
      return this.finishNode(node, "DeclareTypeAlias");
    };
    pp$8.flowParseDeclareOpaqueType = function(node) {
      this.next();
      this.flowParseOpaqueType(node, true);
      return this.finishNode(node, "DeclareOpaqueType");
    };
    pp$8.flowParseDeclareInterface = function(node) {
      this.next();
      this.flowParseInterfaceish(node);
      return this.finishNode(node, "DeclareInterface");
    };
    pp$8.flowParseInterfaceish = function(node) {
      node.id = this.parseIdentifier();
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      }
      node.extends = [];
      node.mixins = [];
      if (this.eat(types._extends)) {
        do {
          node.extends.push(this.flowParseInterfaceExtends());
        } while (this.eat(types.comma));
      }
      if (this.isContextual("mixins")) {
        this.next();
        do {
          node.mixins.push(this.flowParseInterfaceExtends());
        } while (this.eat(types.comma));
      }
      node.body = this.flowParseObjectType(true, false, false);
    };
    pp$8.flowParseInterfaceExtends = function() {
      var node = this.startNode();
      node.id = this.flowParseQualifiedTypeIdentifier();
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterInstantiation();
      } else {
        node.typeParameters = null;
      }
      return this.finishNode(node, "InterfaceExtends");
    };
    pp$8.flowParseInterface = function(node) {
      this.flowParseInterfaceish(node, false);
      return this.finishNode(node, "InterfaceDeclaration");
    };
    pp$8.flowParseRestrictedIdentifier = function(liberal) {
      if (primitiveTypes.indexOf(this.state.value) > -1) {
        this.raise(this.state.start, "Cannot overwrite primitive type " + this.state.value);
      }
      return this.parseIdentifier(liberal);
    };
    pp$8.flowParseTypeAlias = function(node) {
      node.id = this.flowParseRestrictedIdentifier();
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      }
      node.right = this.flowParseTypeInitialiser(types.eq);
      this.semicolon();
      return this.finishNode(node, "TypeAlias");
    };
    pp$8.flowParseOpaqueType = function(node, declare) {
      this.expectContextual("type");
      node.id = this.flowParseRestrictedIdentifier();
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      } else {
        node.typeParameters = null;
      }
      node.supertype = null;
      if (this.match(types.colon)) {
        node.supertype = this.flowParseTypeInitialiser(types.colon);
      }
      node.impltype = null;
      if (!declare) {
        node.impltype = this.flowParseTypeInitialiser(types.eq);
      }
      this.semicolon();
      return this.finishNode(node, "OpaqueType");
    };
    pp$8.flowParseTypeParameter = function() {
      var node = this.startNode();
      var variance = this.flowParseVariance();
      var ident = this.flowParseTypeAnnotatableIdentifier();
      node.name = ident.name;
      node.variance = variance;
      node.bound = ident.typeAnnotation;
      if (this.match(types.eq)) {
        this.eat(types.eq);
        node.default = this.flowParseType();
      }
      return this.finishNode(node, "TypeParameter");
    };
    pp$8.flowParseTypeParameterDeclaration = function() {
      var oldInType = this.state.inType;
      var node = this.startNode();
      node.params = [];
      this.state.inType = true;
      if (this.isRelational("<") || this.match(types.jsxTagStart)) {
        this.next();
      } else {
        this.unexpected();
      }
      do {
        node.params.push(this.flowParseTypeParameter());
        if (!this.isRelational(">")) {
          this.expect(types.comma);
        }
      } while (!this.isRelational(">"));
      this.expectRelational(">");
      this.state.inType = oldInType;
      return this.finishNode(node, "TypeParameterDeclaration");
    };
    pp$8.flowParseTypeParameterInstantiation = function() {
      var node = this.startNode();
      var oldInType = this.state.inType;
      node.params = [];
      this.state.inType = true;
      this.expectRelational("<");
      while (!this.isRelational(">")) {
        node.params.push(this.flowParseType());
        if (!this.isRelational(">")) {
          this.expect(types.comma);
        }
      }
      this.expectRelational(">");
      this.state.inType = oldInType;
      return this.finishNode(node, "TypeParameterInstantiation");
    };
    pp$8.flowParseObjectPropertyKey = function() {
      return this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
    };
    pp$8.flowParseObjectTypeIndexer = function(node, isStatic, variance) {
      node.static = isStatic;
      this.expect(types.bracketL);
      if (this.lookahead().type === types.colon) {
        node.id = this.flowParseObjectPropertyKey();
        node.key = this.flowParseTypeInitialiser();
      } else {
        node.id = null;
        node.key = this.flowParseType();
      }
      this.expect(types.bracketR);
      node.value = this.flowParseTypeInitialiser();
      node.variance = variance;
      this.flowObjectTypeSemicolon();
      return this.finishNode(node, "ObjectTypeIndexer");
    };
    pp$8.flowParseObjectTypeMethodish = function(node) {
      node.params = [];
      node.rest = null;
      node.typeParameters = null;
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterDeclaration();
      }
      this.expect(types.parenL);
      while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
        node.params.push(this.flowParseFunctionTypeParam());
        if (!this.match(types.parenR)) {
          this.expect(types.comma);
        }
      }
      if (this.eat(types.ellipsis)) {
        node.rest = this.flowParseFunctionTypeParam();
      }
      this.expect(types.parenR);
      node.returnType = this.flowParseTypeInitialiser();
      return this.finishNode(node, "FunctionTypeAnnotation");
    };
    pp$8.flowParseObjectTypeMethod = function(startPos, startLoc, isStatic, key) {
      var node = this.startNodeAt(startPos, startLoc);
      node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(startPos, startLoc));
      node.static = isStatic;
      node.key = key;
      node.optional = false;
      this.flowObjectTypeSemicolon();
      return this.finishNode(node, "ObjectTypeProperty");
    };
    pp$8.flowParseObjectTypeCallProperty = function(node, isStatic) {
      var valueNode = this.startNode();
      node.static = isStatic;
      node.value = this.flowParseObjectTypeMethodish(valueNode);
      this.flowObjectTypeSemicolon();
      return this.finishNode(node, "ObjectTypeCallProperty");
    };
    pp$8.flowParseObjectType = function(allowStatic, allowExact, allowSpread) {
      var oldInType = this.state.inType;
      this.state.inType = true;
      var nodeStart = this.startNode();
      var node = void 0;
      var propertyKey = void 0;
      var isStatic = false;
      nodeStart.callProperties = [];
      nodeStart.properties = [];
      nodeStart.indexers = [];
      var endDelim = void 0;
      var exact = void 0;
      if (allowExact && this.match(types.braceBarL)) {
        this.expect(types.braceBarL);
        endDelim = types.braceBarR;
        exact = true;
      } else {
        this.expect(types.braceL);
        endDelim = types.braceR;
        exact = false;
      }
      nodeStart.exact = exact;
      while (!this.match(endDelim)) {
        var optional = false;
        var startPos = this.state.start;
        var startLoc = this.state.startLoc;
        node = this.startNode();
        if (allowStatic && this.isContextual("static") && this.lookahead().type !== types.colon) {
          this.next();
          isStatic = true;
        }
        var variancePos = this.state.start;
        var variance = this.flowParseVariance();
        if (this.match(types.bracketL)) {
          nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
        } else if (this.match(types.parenL) || this.isRelational("<")) {
          if (variance) {
            this.unexpected(variancePos);
          }
          nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
        } else {
          if (this.match(types.ellipsis)) {
            if (!allowSpread) {
              this.unexpected(null, "Spread operator cannot appear in class or interface definitions");
            }
            if (variance) {
              this.unexpected(variance.start, "Spread properties cannot have variance");
            }
            this.expect(types.ellipsis);
            node.argument = this.flowParseType();
            this.flowObjectTypeSemicolon();
            nodeStart.properties.push(this.finishNode(node, "ObjectTypeSpreadProperty"));
          } else {
            propertyKey = this.flowParseObjectPropertyKey();
            if (this.isRelational("<") || this.match(types.parenL)) {
              if (variance) {
                this.unexpected(variance.start);
              }
              nodeStart.properties.push(this.flowParseObjectTypeMethod(startPos, startLoc, isStatic, propertyKey));
            } else {
              if (this.eat(types.question)) {
                optional = true;
              }
              node.key = propertyKey;
              node.value = this.flowParseTypeInitialiser();
              node.optional = optional;
              node.static = isStatic;
              node.variance = variance;
              this.flowObjectTypeSemicolon();
              nodeStart.properties.push(this.finishNode(node, "ObjectTypeProperty"));
            }
          }
        }
        isStatic = false;
      }
      this.expect(endDelim);
      var out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
      this.state.inType = oldInType;
      return out;
    };
    pp$8.flowObjectTypeSemicolon = function() {
      if (!this.eat(types.semi) && !this.eat(types.comma) && !this.match(types.braceR) && !this.match(types.braceBarR)) {
        this.unexpected();
      }
    };
    pp$8.flowParseQualifiedTypeIdentifier = function(startPos, startLoc, id) {
      startPos = startPos || this.state.start;
      startLoc = startLoc || this.state.startLoc;
      var node = id || this.parseIdentifier();
      while (this.eat(types.dot)) {
        var node2 = this.startNodeAt(startPos, startLoc);
        node2.qualification = node;
        node2.id = this.parseIdentifier();
        node = this.finishNode(node2, "QualifiedTypeIdentifier");
      }
      return node;
    };
    pp$8.flowParseGenericType = function(startPos, startLoc, id) {
      var node = this.startNodeAt(startPos, startLoc);
      node.typeParameters = null;
      node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);
      if (this.isRelational("<")) {
        node.typeParameters = this.flowParseTypeParameterInstantiation();
      }
      return this.finishNode(node, "GenericTypeAnnotation");
    };
    pp$8.flowParseTypeofType = function() {
      var node = this.startNode();
      this.expect(types._typeof);
      node.argument = this.flowParsePrimaryType();
      return this.finishNode(node, "TypeofTypeAnnotation");
    };
    pp$8.flowParseTupleType = function() {
      var node = this.startNode();
      node.types = [];
      this.expect(types.bracketL);
      while (this.state.pos < this.input.length && !this.match(types.bracketR)) {
        node.types.push(this.flowParseType());
        if (this.match(types.bracketR))
          break;
        this.expect(types.comma);
      }
      this.expect(types.bracketR);
      return this.finishNode(node, "TupleTypeAnnotation");
    };
    pp$8.flowParseFunctionTypeParam = function() {
      var name = null;
      var optional = false;
      var typeAnnotation = null;
      var node = this.startNode();
      var lh = this.lookahead();
      if (lh.type === types.colon || lh.type === types.question) {
        name = this.parseIdentifier();
        if (this.eat(types.question)) {
          optional = true;
        }
        typeAnnotation = this.flowParseTypeInitialiser();
      } else {
        typeAnnotation = this.flowParseType();
      }
      node.name = name;
      node.optional = optional;
      node.typeAnnotation = typeAnnotation;
      return this.finishNode(node, "FunctionTypeParam");
    };
    pp$8.reinterpretTypeAsFunctionTypeParam = function(type) {
      var node = this.startNodeAt(type.start, type.loc.start);
      node.name = null;
      node.optional = false;
      node.typeAnnotation = type;
      return this.finishNode(node, "FunctionTypeParam");
    };
    pp$8.flowParseFunctionTypeParams = function() {
      var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var ret = { params, rest: null };
      while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
        ret.params.push(this.flowParseFunctionTypeParam());
        if (!this.match(types.parenR)) {
          this.expect(types.comma);
        }
      }
      if (this.eat(types.ellipsis)) {
        ret.rest = this.flowParseFunctionTypeParam();
      }
      return ret;
    };
    pp$8.flowIdentToTypeAnnotation = function(startPos, startLoc, node, id) {
      switch (id.name) {
        case "any":
          return this.finishNode(node, "AnyTypeAnnotation");
        case "void":
          return this.finishNode(node, "VoidTypeAnnotation");
        case "bool":
        case "boolean":
          return this.finishNode(node, "BooleanTypeAnnotation");
        case "mixed":
          return this.finishNode(node, "MixedTypeAnnotation");
        case "empty":
          return this.finishNode(node, "EmptyTypeAnnotation");
        case "number":
          return this.finishNode(node, "NumberTypeAnnotation");
        case "string":
          return this.finishNode(node, "StringTypeAnnotation");
        default:
          return this.flowParseGenericType(startPos, startLoc, id);
      }
    };
    pp$8.flowParsePrimaryType = function() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var node = this.startNode();
      var tmp = void 0;
      var type = void 0;
      var isGroupedType = false;
      var oldNoAnonFunctionType = this.state.noAnonFunctionType;
      switch (this.state.type) {
        case types.name:
          return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());
        case types.braceL:
          return this.flowParseObjectType(false, false, true);
        case types.braceBarL:
          return this.flowParseObjectType(false, true, true);
        case types.bracketL:
          return this.flowParseTupleType();
        case types.relational:
          if (this.state.value === "<") {
            node.typeParameters = this.flowParseTypeParameterDeclaration();
            this.expect(types.parenL);
            tmp = this.flowParseFunctionTypeParams();
            node.params = tmp.params;
            node.rest = tmp.rest;
            this.expect(types.parenR);
            this.expect(types.arrow);
            node.returnType = this.flowParseType();
            return this.finishNode(node, "FunctionTypeAnnotation");
          }
          break;
        case types.parenL:
          this.next();
          if (!this.match(types.parenR) && !this.match(types.ellipsis)) {
            if (this.match(types.name)) {
              var token = this.lookahead().type;
              isGroupedType = token !== types.question && token !== types.colon;
            } else {
              isGroupedType = true;
            }
          }
          if (isGroupedType) {
            this.state.noAnonFunctionType = false;
            type = this.flowParseType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            if (this.state.noAnonFunctionType || !(this.match(types.comma) || this.match(types.parenR) && this.lookahead().type === types.arrow)) {
              this.expect(types.parenR);
              return type;
            } else {
              this.eat(types.comma);
            }
          }
          if (type) {
            tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
          } else {
            tmp = this.flowParseFunctionTypeParams();
          }
          node.params = tmp.params;
          node.rest = tmp.rest;
          this.expect(types.parenR);
          this.expect(types.arrow);
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");
        case types.string:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
        case types._true:
        case types._false:
          node.value = this.match(types._true);
          this.next();
          return this.finishNode(node, "BooleanLiteralTypeAnnotation");
        case types.plusMin:
          if (this.state.value === "-") {
            this.next();
            if (!this.match(types.num))
              this.unexpected(null, "Unexpected token, expected number");
            return this.parseLiteral(-this.state.value, "NumericLiteralTypeAnnotation", node.start, node.loc.start);
          }
          this.unexpected();
        case types.num:
          return this.parseLiteral(this.state.value, "NumericLiteralTypeAnnotation");
        case types._null:
          node.value = this.match(types._null);
          this.next();
          return this.finishNode(node, "NullLiteralTypeAnnotation");
        case types._this:
          node.value = this.match(types._this);
          this.next();
          return this.finishNode(node, "ThisTypeAnnotation");
        case types.star:
          this.next();
          return this.finishNode(node, "ExistentialTypeParam");
        default:
          if (this.state.type.keyword === "typeof") {
            return this.flowParseTypeofType();
          }
      }
      this.unexpected();
    };
    pp$8.flowParsePostfixType = function() {
      var startPos = this.state.start, startLoc = this.state.startLoc;
      var type = this.flowParsePrimaryType();
      while (!this.canInsertSemicolon() && this.match(types.bracketL)) {
        var node = this.startNodeAt(startPos, startLoc);
        node.elementType = type;
        this.expect(types.bracketL);
        this.expect(types.bracketR);
        type = this.finishNode(node, "ArrayTypeAnnotation");
      }
      return type;
    };
    pp$8.flowParsePrefixType = function() {
      var node = this.startNode();
      if (this.eat(types.question)) {
        node.typeAnnotation = this.flowParsePrefixType();
        return this.finishNode(node, "NullableTypeAnnotation");
      } else {
        return this.flowParsePostfixType();
      }
    };
    pp$8.flowParseAnonFunctionWithoutParens = function() {
      var param = this.flowParsePrefixType();
      if (!this.state.noAnonFunctionType && this.eat(types.arrow)) {
        var node = this.startNodeAt(param.start, param.loc.start);
        node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
        node.rest = null;
        node.returnType = this.flowParseType();
        node.typeParameters = null;
        return this.finishNode(node, "FunctionTypeAnnotation");
      }
      return param;
    };
    pp$8.flowParseIntersectionType = function() {
      var node = this.startNode();
      this.eat(types.bitwiseAND);
      var type = this.flowParseAnonFunctionWithoutParens();
      node.types = [type];
      while (this.eat(types.bitwiseAND)) {
        node.types.push(this.flowParseAnonFunctionWithoutParens());
      }
      return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
    };
    pp$8.flowParseUnionType = function() {
      var node = this.startNode();
      this.eat(types.bitwiseOR);
      var type = this.flowParseIntersectionType();
      node.types = [type];
      while (this.eat(types.bitwiseOR)) {
        node.types.push(this.flowParseIntersectionType());
      }
      return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
    };
    pp$8.flowParseType = function() {
      var oldInType = this.state.inType;
      this.state.inType = true;
      var type = this.flowParseUnionType();
      this.state.inType = oldInType;
      return type;
    };
    pp$8.flowParseTypeAnnotation = function() {
      var node = this.startNode();
      node.typeAnnotation = this.flowParseTypeInitialiser();
      return this.finishNode(node, "TypeAnnotation");
    };
    pp$8.flowParseTypeAndPredicateAnnotation = function() {
      var node = this.startNode();
      var _flowParseTypeAndPred2 = this.flowParseTypeAndPredicateInitialiser();
      node.typeAnnotation = _flowParseTypeAndPred2[0];
      node.predicate = _flowParseTypeAndPred2[1];
      return this.finishNode(node, "TypeAnnotation");
    };
    pp$8.flowParseTypeAnnotatableIdentifier = function() {
      var ident = this.flowParseRestrictedIdentifier();
      if (this.match(types.colon)) {
        ident.typeAnnotation = this.flowParseTypeAnnotation();
        this.finishNode(ident, ident.type);
      }
      return ident;
    };
    pp$8.typeCastToParameter = function(node) {
      node.expression.typeAnnotation = node.typeAnnotation;
      return this.finishNodeAt(node.expression, node.expression.type, node.typeAnnotation.end, node.typeAnnotation.loc.end);
    };
    pp$8.flowParseVariance = function() {
      var variance = null;
      if (this.match(types.plusMin)) {
        if (this.state.value === "+") {
          variance = "plus";
        } else if (this.state.value === "-") {
          variance = "minus";
        }
        this.next();
      }
      return variance;
    };
    var flowPlugin = function(instance) {
      instance.extend("parseFunctionBody", function(inner) {
        return function(node, allowExpression) {
          if (this.match(types.colon) && !allowExpression) {
            node.returnType = this.flowParseTypeAndPredicateAnnotation();
          }
          return inner.call(this, node, allowExpression);
        };
      });
      instance.extend("parseStatement", function(inner) {
        return function(declaration, topLevel) {
          if (this.state.strict && this.match(types.name) && this.state.value === "interface") {
            var node = this.startNode();
            this.next();
            return this.flowParseInterface(node);
          } else {
            return inner.call(this, declaration, topLevel);
          }
        };
      });
      instance.extend("parseExpressionStatement", function(inner) {
        return function(node, expr) {
          if (expr.type === "Identifier") {
            if (expr.name === "declare") {
              if (this.match(types._class) || this.match(types.name) || this.match(types._function) || this.match(types._var) || this.match(types._export)) {
                return this.flowParseDeclare(node);
              }
            } else if (this.match(types.name)) {
              if (expr.name === "interface") {
                return this.flowParseInterface(node);
              } else if (expr.name === "type") {
                return this.flowParseTypeAlias(node);
              } else if (expr.name === "opaque") {
                return this.flowParseOpaqueType(node, false);
              }
            }
          }
          return inner.call(this, node, expr);
        };
      });
      instance.extend("shouldParseExportDeclaration", function(inner) {
        return function() {
          return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || inner.call(this);
        };
      });
      instance.extend("isExportDefaultSpecifier", function(inner) {
        return function() {
          if (this.match(types.name) && (this.state.value === "type" || this.state.value === "interface" || this.state.value === "opaque")) {
            return false;
          }
          return inner.call(this);
        };
      });
      instance.extend("parseConditional", function(inner) {
        return function(expr, noIn, startPos, startLoc, refNeedsArrowPos) {
          if (refNeedsArrowPos && this.match(types.question)) {
            var state = this.state.clone();
            try {
              return inner.call(this, expr, noIn, startPos, startLoc);
            } catch (err) {
              if (err instanceof SyntaxError) {
                this.state = state;
                refNeedsArrowPos.start = err.pos || this.state.start;
                return expr;
              } else {
                throw err;
              }
            }
          }
          return inner.call(this, expr, noIn, startPos, startLoc);
        };
      });
      instance.extend("parseParenItem", function(inner) {
        return function(node, startPos, startLoc) {
          node = inner.call(this, node, startPos, startLoc);
          if (this.eat(types.question)) {
            node.optional = true;
          }
          if (this.match(types.colon)) {
            var typeCastNode = this.startNodeAt(startPos, startLoc);
            typeCastNode.expression = node;
            typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
            return this.finishNode(typeCastNode, "TypeCastExpression");
          }
          return node;
        };
      });
      instance.extend("parseExport", function(inner) {
        return function(node) {
          node = inner.call(this, node);
          if (node.type === "ExportNamedDeclaration") {
            node.exportKind = node.exportKind || "value";
          }
          return node;
        };
      });
      instance.extend("parseExportDeclaration", function(inner) {
        return function(node) {
          if (this.isContextual("type")) {
            node.exportKind = "type";
            var declarationNode = this.startNode();
            this.next();
            if (this.match(types.braceL)) {
              node.specifiers = this.parseExportSpecifiers();
              this.parseExportFrom(node);
              return null;
            } else {
              return this.flowParseTypeAlias(declarationNode);
            }
          } else if (this.isContextual("opaque")) {
            node.exportKind = "type";
            var _declarationNode = this.startNode();
            this.next();
            return this.flowParseOpaqueType(_declarationNode, false);
          } else if (this.isContextual("interface")) {
            node.exportKind = "type";
            var _declarationNode2 = this.startNode();
            this.next();
            return this.flowParseInterface(_declarationNode2);
          } else {
            return inner.call(this, node);
          }
        };
      });
      instance.extend("parseClassId", function(inner) {
        return function(node) {
          inner.apply(this, arguments);
          if (this.isRelational("<")) {
            node.typeParameters = this.flowParseTypeParameterDeclaration();
          }
        };
      });
      instance.extend("isKeyword", function(inner) {
        return function(name) {
          if (this.state.inType && name === "void") {
            return false;
          } else {
            return inner.call(this, name);
          }
        };
      });
      instance.extend("readToken", function(inner) {
        return function(code) {
          if (this.state.inType && (code === 62 || code === 60)) {
            return this.finishOp(types.relational, 1);
          } else {
            return inner.call(this, code);
          }
        };
      });
      instance.extend("jsx_readToken", function(inner) {
        return function() {
          if (!this.state.inType)
            return inner.call(this);
        };
      });
      instance.extend("toAssignable", function(inner) {
        return function(node, isBinding, contextDescription) {
          if (node.type === "TypeCastExpression") {
            return inner.call(this, this.typeCastToParameter(node), isBinding, contextDescription);
          } else {
            return inner.call(this, node, isBinding, contextDescription);
          }
        };
      });
      instance.extend("toAssignableList", function(inner) {
        return function(exprList, isBinding, contextDescription) {
          for (var i = 0; i < exprList.length; i++) {
            var expr = exprList[i];
            if (expr && expr.type === "TypeCastExpression") {
              exprList[i] = this.typeCastToParameter(expr);
            }
          }
          return inner.call(this, exprList, isBinding, contextDescription);
        };
      });
      instance.extend("toReferencedList", function() {
        return function(exprList) {
          for (var i = 0; i < exprList.length; i++) {
            var expr = exprList[i];
            if (expr && expr._exprListItem && expr.type === "TypeCastExpression") {
              this.raise(expr.start, "Unexpected type cast");
            }
          }
          return exprList;
        };
      });
      instance.extend("parseExprListItem", function(inner) {
        return function() {
          var container = this.startNode();
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var node = inner.call.apply(inner, [this].concat(args));
          if (this.match(types.colon)) {
            container._exprListItem = true;
            container.expression = node;
            container.typeAnnotation = this.flowParseTypeAnnotation();
            return this.finishNode(container, "TypeCastExpression");
          } else {
            return node;
          }
        };
      });
      instance.extend("checkLVal", function(inner) {
        return function(node) {
          if (node.type !== "TypeCastExpression") {
            return inner.apply(this, arguments);
          }
        };
      });
      instance.extend("parseClassProperty", function(inner) {
        return function(node) {
          delete node.variancePos;
          if (this.match(types.colon)) {
            node.typeAnnotation = this.flowParseTypeAnnotation();
          }
          return inner.call(this, node);
        };
      });
      instance.extend("isClassMethod", function(inner) {
        return function() {
          return this.isRelational("<") || inner.call(this);
        };
      });
      instance.extend("isClassProperty", function(inner) {
        return function() {
          return this.match(types.colon) || inner.call(this);
        };
      });
      instance.extend("isNonstaticConstructor", function(inner) {
        return function(method) {
          return !this.match(types.colon) && inner.call(this, method);
        };
      });
      instance.extend("parseClassMethod", function(inner) {
        return function(classBody, method) {
          if (method.variance) {
            this.unexpected(method.variancePos);
          }
          delete method.variance;
          delete method.variancePos;
          if (this.isRelational("<")) {
            method.typeParameters = this.flowParseTypeParameterDeclaration();
          }
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          inner.call.apply(inner, [this, classBody, method].concat(args));
        };
      });
      instance.extend("parseClassSuper", function(inner) {
        return function(node, isStatement) {
          inner.call(this, node, isStatement);
          if (node.superClass && this.isRelational("<")) {
            node.superTypeParameters = this.flowParseTypeParameterInstantiation();
          }
          if (this.isContextual("implements")) {
            this.next();
            var implemented = node.implements = [];
            do {
              var _node = this.startNode();
              _node.id = this.parseIdentifier();
              if (this.isRelational("<")) {
                _node.typeParameters = this.flowParseTypeParameterInstantiation();
              } else {
                _node.typeParameters = null;
              }
              implemented.push(this.finishNode(_node, "ClassImplements"));
            } while (this.eat(types.comma));
          }
        };
      });
      instance.extend("parsePropertyName", function(inner) {
        return function(node) {
          var variancePos = this.state.start;
          var variance = this.flowParseVariance();
          var key = inner.call(this, node);
          node.variance = variance;
          node.variancePos = variancePos;
          return key;
        };
      });
      instance.extend("parseObjPropValue", function(inner) {
        return function(prop) {
          if (prop.variance) {
            this.unexpected(prop.variancePos);
          }
          delete prop.variance;
          delete prop.variancePos;
          var typeParameters = void 0;
          if (this.isRelational("<")) {
            typeParameters = this.flowParseTypeParameterDeclaration();
            if (!this.match(types.parenL))
              this.unexpected();
          }
          inner.apply(this, arguments);
          if (typeParameters) {
            (prop.value || prop).typeParameters = typeParameters;
          }
        };
      });
      instance.extend("parseAssignableListItemTypes", function() {
        return function(param) {
          if (this.eat(types.question)) {
            param.optional = true;
          }
          if (this.match(types.colon)) {
            param.typeAnnotation = this.flowParseTypeAnnotation();
          }
          this.finishNode(param, param.type);
          return param;
        };
      });
      instance.extend("parseMaybeDefault", function(inner) {
        return function() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          var node = inner.apply(this, args);
          if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
            this.raise(node.typeAnnotation.start, "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`");
          }
          return node;
        };
      });
      instance.extend("parseImportSpecifiers", function(inner) {
        return function(node) {
          node.importKind = "value";
          var kind = null;
          if (this.match(types._typeof)) {
            kind = "typeof";
          } else if (this.isContextual("type")) {
            kind = "type";
          }
          if (kind) {
            var lh = this.lookahead();
            if (lh.type === types.name && lh.value !== "from" || lh.type === types.braceL || lh.type === types.star) {
              this.next();
              node.importKind = kind;
            }
          }
          inner.call(this, node);
        };
      });
      instance.extend("parseImportSpecifier", function() {
        return function(node) {
          var specifier = this.startNode();
          var firstIdentLoc = this.state.start;
          var firstIdent = this.parseIdentifier(true);
          var specifierTypeKind = null;
          if (firstIdent.name === "type") {
            specifierTypeKind = "type";
          } else if (firstIdent.name === "typeof") {
            specifierTypeKind = "typeof";
          }
          var isBinding = false;
          if (this.isContextual("as")) {
            var as_ident = this.parseIdentifier(true);
            if (specifierTypeKind !== null && !this.match(types.name) && !this.state.type.keyword) {
              specifier.imported = as_ident;
              specifier.importKind = specifierTypeKind;
              specifier.local = as_ident.__clone();
            } else {
              specifier.imported = firstIdent;
              specifier.importKind = null;
              specifier.local = this.parseIdentifier();
            }
          } else if (specifierTypeKind !== null && (this.match(types.name) || this.state.type.keyword)) {
            specifier.imported = this.parseIdentifier(true);
            specifier.importKind = specifierTypeKind;
            if (this.eatContextual("as")) {
              specifier.local = this.parseIdentifier();
            } else {
              isBinding = true;
              specifier.local = specifier.imported.__clone();
            }
          } else {
            isBinding = true;
            specifier.imported = firstIdent;
            specifier.importKind = null;
            specifier.local = specifier.imported.__clone();
          }
          if ((node.importKind === "type" || node.importKind === "typeof") && (specifier.importKind === "type" || specifier.importKind === "typeof")) {
            this.raise(firstIdentLoc, "`The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements`");
          }
          if (isBinding)
            this.checkReservedWord(specifier.local.name, specifier.start, true, true);
          this.checkLVal(specifier.local, true, void 0, "import specifier");
          node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
        };
      });
      instance.extend("parseFunctionParams", function(inner) {
        return function(node) {
          if (this.isRelational("<")) {
            node.typeParameters = this.flowParseTypeParameterDeclaration();
          }
          inner.call(this, node);
        };
      });
      instance.extend("parseVarHead", function(inner) {
        return function(decl) {
          inner.call(this, decl);
          if (this.match(types.colon)) {
            decl.id.typeAnnotation = this.flowParseTypeAnnotation();
            this.finishNode(decl.id, decl.id.type);
          }
        };
      });
      instance.extend("parseAsyncArrowFromCallExpression", function(inner) {
        return function(node, call) {
          if (this.match(types.colon)) {
            var oldNoAnonFunctionType = this.state.noAnonFunctionType;
            this.state.noAnonFunctionType = true;
            node.returnType = this.flowParseTypeAnnotation();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
          }
          return inner.call(this, node, call);
        };
      });
      instance.extend("shouldParseAsyncArrow", function(inner) {
        return function() {
          return this.match(types.colon) || inner.call(this);
        };
      });
      instance.extend("parseMaybeAssign", function(inner) {
        return function() {
          var jsxError = null;
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          if (types.jsxTagStart && this.match(types.jsxTagStart)) {
            var state = this.state.clone();
            try {
              return inner.apply(this, args);
            } catch (err) {
              if (err instanceof SyntaxError) {
                this.state = state;
                this.state.context.length -= 2;
                jsxError = err;
              } else {
                throw err;
              }
            }
          }
          if (jsxError != null || this.isRelational("<")) {
            var arrowExpression = void 0;
            var typeParameters = void 0;
            try {
              typeParameters = this.flowParseTypeParameterDeclaration();
              arrowExpression = inner.apply(this, args);
              arrowExpression.typeParameters = typeParameters;
              arrowExpression.start = typeParameters.start;
              arrowExpression.loc.start = typeParameters.loc.start;
            } catch (err) {
              throw jsxError || err;
            }
            if (arrowExpression.type === "ArrowFunctionExpression") {
              return arrowExpression;
            } else if (jsxError != null) {
              throw jsxError;
            } else {
              this.raise(typeParameters.start, "Expected an arrow function after this type parameter declaration");
            }
          }
          return inner.apply(this, args);
        };
      });
      instance.extend("parseArrow", function(inner) {
        return function(node) {
          if (this.match(types.colon)) {
            var state = this.state.clone();
            try {
              var oldNoAnonFunctionType = this.state.noAnonFunctionType;
              this.state.noAnonFunctionType = true;
              var returnType = this.flowParseTypeAndPredicateAnnotation();
              this.state.noAnonFunctionType = oldNoAnonFunctionType;
              if (this.canInsertSemicolon())
                this.unexpected();
              if (!this.match(types.arrow))
                this.unexpected();
              node.returnType = returnType;
            } catch (err) {
              if (err instanceof SyntaxError) {
                this.state = state;
              } else {
                throw err;
              }
            }
          }
          return inner.call(this, node);
        };
      });
      instance.extend("shouldParseArrow", function(inner) {
        return function() {
          return this.match(types.colon) || inner.call(this);
        };
      });
    };
    var fromCodePoint = String.fromCodePoint;
    if (!fromCodePoint) {
      stringFromCharCode = String.fromCharCode;
      floor = Math.floor;
      fromCodePoint = function fromCodePoint2() {
        var MAX_SIZE = 16384;
        var codeUnits = [];
        var highSurrogate = void 0;
        var lowSurrogate = void 0;
        var index = -1;
        var length = arguments.length;
        if (!length) {
          return "";
        }
        var result = "";
        while (++index < length) {
          var codePoint = Number(arguments[index]);
          if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
          codePoint < 0 || // not a valid Unicode code point
          codePoint > 1114111 || // not a valid Unicode code point
          floor(codePoint) != codePoint) {
            throw RangeError("Invalid code point: " + codePoint);
          }
          if (codePoint <= 65535) {
            codeUnits.push(codePoint);
          } else {
            codePoint -= 65536;
            highSurrogate = (codePoint >> 10) + 55296;
            lowSurrogate = codePoint % 1024 + 56320;
            codeUnits.push(highSurrogate, lowSurrogate);
          }
          if (index + 1 == length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits);
            codeUnits.length = 0;
          }
        }
        return result;
      };
    }
    var stringFromCharCode;
    var floor;
    var fromCodePoint$1 = fromCodePoint;
    var XHTMLEntities = {
      quot: '"',
      amp: "&",
      apos: "'",
      lt: "<",
      gt: ">",
      nbsp: "\xA0",
      iexcl: "\xA1",
      cent: "\xA2",
      pound: "\xA3",
      curren: "\xA4",
      yen: "\xA5",
      brvbar: "\xA6",
      sect: "\xA7",
      uml: "\xA8",
      copy: "\xA9",
      ordf: "\xAA",
      laquo: "\xAB",
      not: "\xAC",
      shy: "\xAD",
      reg: "\xAE",
      macr: "\xAF",
      deg: "\xB0",
      plusmn: "\xB1",
      sup2: "\xB2",
      sup3: "\xB3",
      acute: "\xB4",
      micro: "\xB5",
      para: "\xB6",
      middot: "\xB7",
      cedil: "\xB8",
      sup1: "\xB9",
      ordm: "\xBA",
      raquo: "\xBB",
      frac14: "\xBC",
      frac12: "\xBD",
      frac34: "\xBE",
      iquest: "\xBF",
      Agrave: "\xC0",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Atilde: "\xC3",
      Auml: "\xC4",
      Aring: "\xC5",
      AElig: "\xC6",
      Ccedil: "\xC7",
      Egrave: "\xC8",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Euml: "\xCB",
      Igrave: "\xCC",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Iuml: "\xCF",
      ETH: "\xD0",
      Ntilde: "\xD1",
      Ograve: "\xD2",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Otilde: "\xD5",
      Ouml: "\xD6",
      times: "\xD7",
      Oslash: "\xD8",
      Ugrave: "\xD9",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Uuml: "\xDC",
      Yacute: "\xDD",
      THORN: "\xDE",
      szlig: "\xDF",
      agrave: "\xE0",
      aacute: "\xE1",
      acirc: "\xE2",
      atilde: "\xE3",
      auml: "\xE4",
      aring: "\xE5",
      aelig: "\xE6",
      ccedil: "\xE7",
      egrave: "\xE8",
      eacute: "\xE9",
      ecirc: "\xEA",
      euml: "\xEB",
      igrave: "\xEC",
      iacute: "\xED",
      icirc: "\xEE",
      iuml: "\xEF",
      eth: "\xF0",
      ntilde: "\xF1",
      ograve: "\xF2",
      oacute: "\xF3",
      ocirc: "\xF4",
      otilde: "\xF5",
      ouml: "\xF6",
      divide: "\xF7",
      oslash: "\xF8",
      ugrave: "\xF9",
      uacute: "\xFA",
      ucirc: "\xFB",
      uuml: "\xFC",
      yacute: "\xFD",
      thorn: "\xFE",
      yuml: "\xFF",
      OElig: "\u0152",
      oelig: "\u0153",
      Scaron: "\u0160",
      scaron: "\u0161",
      Yuml: "\u0178",
      fnof: "\u0192",
      circ: "\u02C6",
      tilde: "\u02DC",
      Alpha: "\u0391",
      Beta: "\u0392",
      Gamma: "\u0393",
      Delta: "\u0394",
      Epsilon: "\u0395",
      Zeta: "\u0396",
      Eta: "\u0397",
      Theta: "\u0398",
      Iota: "\u0399",
      Kappa: "\u039A",
      Lambda: "\u039B",
      Mu: "\u039C",
      Nu: "\u039D",
      Xi: "\u039E",
      Omicron: "\u039F",
      Pi: "\u03A0",
      Rho: "\u03A1",
      Sigma: "\u03A3",
      Tau: "\u03A4",
      Upsilon: "\u03A5",
      Phi: "\u03A6",
      Chi: "\u03A7",
      Psi: "\u03A8",
      Omega: "\u03A9",
      alpha: "\u03B1",
      beta: "\u03B2",
      gamma: "\u03B3",
      delta: "\u03B4",
      epsilon: "\u03B5",
      zeta: "\u03B6",
      eta: "\u03B7",
      theta: "\u03B8",
      iota: "\u03B9",
      kappa: "\u03BA",
      lambda: "\u03BB",
      mu: "\u03BC",
      nu: "\u03BD",
      xi: "\u03BE",
      omicron: "\u03BF",
      pi: "\u03C0",
      rho: "\u03C1",
      sigmaf: "\u03C2",
      sigma: "\u03C3",
      tau: "\u03C4",
      upsilon: "\u03C5",
      phi: "\u03C6",
      chi: "\u03C7",
      psi: "\u03C8",
      omega: "\u03C9",
      thetasym: "\u03D1",
      upsih: "\u03D2",
      piv: "\u03D6",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "\u200C",
      zwj: "\u200D",
      lrm: "\u200E",
      rlm: "\u200F",
      ndash: "\u2013",
      mdash: "\u2014",
      lsquo: "\u2018",
      rsquo: "\u2019",
      sbquo: "\u201A",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bdquo: "\u201E",
      dagger: "\u2020",
      Dagger: "\u2021",
      bull: "\u2022",
      hellip: "\u2026",
      permil: "\u2030",
      prime: "\u2032",
      Prime: "\u2033",
      lsaquo: "\u2039",
      rsaquo: "\u203A",
      oline: "\u203E",
      frasl: "\u2044",
      euro: "\u20AC",
      image: "\u2111",
      weierp: "\u2118",
      real: "\u211C",
      trade: "\u2122",
      alefsym: "\u2135",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193",
      harr: "\u2194",
      crarr: "\u21B5",
      lArr: "\u21D0",
      uArr: "\u21D1",
      rArr: "\u21D2",
      dArr: "\u21D3",
      hArr: "\u21D4",
      forall: "\u2200",
      part: "\u2202",
      exist: "\u2203",
      empty: "\u2205",
      nabla: "\u2207",
      isin: "\u2208",
      notin: "\u2209",
      ni: "\u220B",
      prod: "\u220F",
      sum: "\u2211",
      minus: "\u2212",
      lowast: "\u2217",
      radic: "\u221A",
      prop: "\u221D",
      infin: "\u221E",
      ang: "\u2220",
      and: "\u2227",
      or: "\u2228",
      cap: "\u2229",
      cup: "\u222A",
      "int": "\u222B",
      there4: "\u2234",
      sim: "\u223C",
      cong: "\u2245",
      asymp: "\u2248",
      ne: "\u2260",
      equiv: "\u2261",
      le: "\u2264",
      ge: "\u2265",
      sub: "\u2282",
      sup: "\u2283",
      nsub: "\u2284",
      sube: "\u2286",
      supe: "\u2287",
      oplus: "\u2295",
      otimes: "\u2297",
      perp: "\u22A5",
      sdot: "\u22C5",
      lceil: "\u2308",
      rceil: "\u2309",
      lfloor: "\u230A",
      rfloor: "\u230B",
      lang: "\u2329",
      rang: "\u232A",
      loz: "\u25CA",
      spades: "\u2660",
      clubs: "\u2663",
      hearts: "\u2665",
      diams: "\u2666"
    };
    var HEX_NUMBER = /^[\da-fA-F]+$/;
    var DECIMAL_NUMBER = /^\d+$/;
    types$1.j_oTag = new TokContext("<tag", false);
    types$1.j_cTag = new TokContext("</tag", false);
    types$1.j_expr = new TokContext("<tag>...</tag>", true, true);
    types.jsxName = new TokenType("jsxName");
    types.jsxText = new TokenType("jsxText", { beforeExpr: true });
    types.jsxTagStart = new TokenType("jsxTagStart", { startsExpr: true });
    types.jsxTagEnd = new TokenType("jsxTagEnd");
    types.jsxTagStart.updateContext = function() {
      this.state.context.push(types$1.j_expr);
      this.state.context.push(types$1.j_oTag);
      this.state.exprAllowed = false;
    };
    types.jsxTagEnd.updateContext = function(prevType) {
      var out = this.state.context.pop();
      if (out === types$1.j_oTag && prevType === types.slash || out === types$1.j_cTag) {
        this.state.context.pop();
        this.state.exprAllowed = this.curContext() === types$1.j_expr;
      } else {
        this.state.exprAllowed = true;
      }
    };
    var pp$9 = Parser.prototype;
    pp$9.jsxReadToken = function() {
      var out = "";
      var chunkStart = this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.input.length) {
          this.raise(this.state.start, "Unterminated JSX contents");
        }
        var ch = this.input.charCodeAt(this.state.pos);
        switch (ch) {
          case 60:
          case 123:
            if (this.state.pos === this.state.start) {
              if (ch === 60 && this.state.exprAllowed) {
                ++this.state.pos;
                return this.finishToken(types.jsxTagStart);
              }
              return this.getTokenFromCode(ch);
            }
            out += this.input.slice(chunkStart, this.state.pos);
            return this.finishToken(types.jsxText, out);
          case 38:
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadEntity();
            chunkStart = this.state.pos;
            break;
          default:
            if (isNewLine(ch)) {
              out += this.input.slice(chunkStart, this.state.pos);
              out += this.jsxReadNewLine(true);
              chunkStart = this.state.pos;
            } else {
              ++this.state.pos;
            }
        }
      }
    };
    pp$9.jsxReadNewLine = function(normalizeCRLF) {
      var ch = this.input.charCodeAt(this.state.pos);
      var out = void 0;
      ++this.state.pos;
      if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
        ++this.state.pos;
        out = normalizeCRLF ? "\n" : "\r\n";
      } else {
        out = String.fromCharCode(ch);
      }
      ++this.state.curLine;
      this.state.lineStart = this.state.pos;
      return out;
    };
    pp$9.jsxReadString = function(quote) {
      var out = "";
      var chunkStart = ++this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.input.length) {
          this.raise(this.state.start, "Unterminated string constant");
        }
        var ch = this.input.charCodeAt(this.state.pos);
        if (ch === quote)
          break;
        if (ch === 38) {
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadEntity();
          chunkStart = this.state.pos;
        } else if (isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadNewLine(false);
          chunkStart = this.state.pos;
        } else {
          ++this.state.pos;
        }
      }
      out += this.input.slice(chunkStart, this.state.pos++);
      return this.finishToken(types.string, out);
    };
    pp$9.jsxReadEntity = function() {
      var str = "";
      var count = 0;
      var entity = void 0;
      var ch = this.input[this.state.pos];
      var startPos = ++this.state.pos;
      while (this.state.pos < this.input.length && count++ < 10) {
        ch = this.input[this.state.pos++];
        if (ch === ";") {
          if (str[0] === "#") {
            if (str[1] === "x") {
              str = str.substr(2);
              if (HEX_NUMBER.test(str))
                entity = fromCodePoint$1(parseInt(str, 16));
            } else {
              str = str.substr(1);
              if (DECIMAL_NUMBER.test(str))
                entity = fromCodePoint$1(parseInt(str, 10));
            }
          } else {
            entity = XHTMLEntities[str];
          }
          break;
        }
        str += ch;
      }
      if (!entity) {
        this.state.pos = startPos;
        return "&";
      }
      return entity;
    };
    pp$9.jsxReadWord = function() {
      var ch = void 0;
      var start = this.state.pos;
      do {
        ch = this.input.charCodeAt(++this.state.pos);
      } while (isIdentifierChar(ch) || ch === 45);
      return this.finishToken(types.jsxName, this.input.slice(start, this.state.pos));
    };
    function getQualifiedJSXName(object) {
      if (object.type === "JSXIdentifier") {
        return object.name;
      }
      if (object.type === "JSXNamespacedName") {
        return object.namespace.name + ":" + object.name.name;
      }
      if (object.type === "JSXMemberExpression") {
        return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
      }
    }
    pp$9.jsxParseIdentifier = function() {
      var node = this.startNode();
      if (this.match(types.jsxName)) {
        node.name = this.state.value;
      } else if (this.state.type.keyword) {
        node.name = this.state.type.keyword;
      } else {
        this.unexpected();
      }
      this.next();
      return this.finishNode(node, "JSXIdentifier");
    };
    pp$9.jsxParseNamespacedName = function() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var name = this.jsxParseIdentifier();
      if (!this.eat(types.colon))
        return name;
      var node = this.startNodeAt(startPos, startLoc);
      node.namespace = name;
      node.name = this.jsxParseIdentifier();
      return this.finishNode(node, "JSXNamespacedName");
    };
    pp$9.jsxParseElementName = function() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      var node = this.jsxParseNamespacedName();
      while (this.eat(types.dot)) {
        var newNode = this.startNodeAt(startPos, startLoc);
        newNode.object = node;
        newNode.property = this.jsxParseIdentifier();
        node = this.finishNode(newNode, "JSXMemberExpression");
      }
      return node;
    };
    pp$9.jsxParseAttributeValue = function() {
      var node = void 0;
      switch (this.state.type) {
        case types.braceL:
          node = this.jsxParseExpressionContainer();
          if (node.expression.type === "JSXEmptyExpression") {
            this.raise(node.start, "JSX attributes must only be assigned a non-empty expression");
          } else {
            return node;
          }
        case types.jsxTagStart:
        case types.string:
          node = this.parseExprAtom();
          node.extra = null;
          return node;
        default:
          this.raise(this.state.start, "JSX value should be either an expression or a quoted JSX text");
      }
    };
    pp$9.jsxParseEmptyExpression = function() {
      var node = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
      return this.finishNodeAt(node, "JSXEmptyExpression", this.state.start, this.state.startLoc);
    };
    pp$9.jsxParseSpreadChild = function() {
      var node = this.startNode();
      this.expect(types.braceL);
      this.expect(types.ellipsis);
      node.expression = this.parseExpression();
      this.expect(types.braceR);
      return this.finishNode(node, "JSXSpreadChild");
    };
    pp$9.jsxParseExpressionContainer = function() {
      var node = this.startNode();
      this.next();
      if (this.match(types.braceR)) {
        node.expression = this.jsxParseEmptyExpression();
      } else {
        node.expression = this.parseExpression();
      }
      this.expect(types.braceR);
      return this.finishNode(node, "JSXExpressionContainer");
    };
    pp$9.jsxParseAttribute = function() {
      var node = this.startNode();
      if (this.eat(types.braceL)) {
        this.expect(types.ellipsis);
        node.argument = this.parseMaybeAssign();
        this.expect(types.braceR);
        return this.finishNode(node, "JSXSpreadAttribute");
      }
      node.name = this.jsxParseNamespacedName();
      node.value = this.eat(types.eq) ? this.jsxParseAttributeValue() : null;
      return this.finishNode(node, "JSXAttribute");
    };
    pp$9.jsxParseOpeningElementAt = function(startPos, startLoc) {
      var node = this.startNodeAt(startPos, startLoc);
      node.attributes = [];
      node.name = this.jsxParseElementName();
      while (!this.match(types.slash) && !this.match(types.jsxTagEnd)) {
        node.attributes.push(this.jsxParseAttribute());
      }
      node.selfClosing = this.eat(types.slash);
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXOpeningElement");
    };
    pp$9.jsxParseClosingElementAt = function(startPos, startLoc) {
      var node = this.startNodeAt(startPos, startLoc);
      node.name = this.jsxParseElementName();
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXClosingElement");
    };
    pp$9.jsxParseElementAt = function(startPos, startLoc) {
      var node = this.startNodeAt(startPos, startLoc);
      var children = [];
      var openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
      var closingElement = null;
      if (!openingElement.selfClosing) {
        contents:
          for (; ; ) {
            switch (this.state.type) {
              case types.jsxTagStart:
                startPos = this.state.start;
                startLoc = this.state.startLoc;
                this.next();
                if (this.eat(types.slash)) {
                  closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
                  break contents;
                }
                children.push(this.jsxParseElementAt(startPos, startLoc));
                break;
              case types.jsxText:
                children.push(this.parseExprAtom());
                break;
              case types.braceL:
                if (this.lookahead().type === types.ellipsis) {
                  children.push(this.jsxParseSpreadChild());
                } else {
                  children.push(this.jsxParseExpressionContainer());
                }
                break;
              default:
                this.unexpected();
            }
          }
        if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise(closingElement.start, "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">");
        }
      }
      node.openingElement = openingElement;
      node.closingElement = closingElement;
      node.children = children;
      if (this.match(types.relational) && this.state.value === "<") {
        this.raise(this.state.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
      }
      return this.finishNode(node, "JSXElement");
    };
    pp$9.jsxParseElement = function() {
      var startPos = this.state.start;
      var startLoc = this.state.startLoc;
      this.next();
      return this.jsxParseElementAt(startPos, startLoc);
    };
    var jsxPlugin = function(instance) {
      instance.extend("parseExprAtom", function(inner) {
        return function(refShortHandDefaultPos) {
          if (this.match(types.jsxText)) {
            var node = this.parseLiteral(this.state.value, "JSXText");
            node.extra = null;
            return node;
          } else if (this.match(types.jsxTagStart)) {
            return this.jsxParseElement();
          } else {
            return inner.call(this, refShortHandDefaultPos);
          }
        };
      });
      instance.extend("readToken", function(inner) {
        return function(code) {
          if (this.state.inPropertyName)
            return inner.call(this, code);
          var context = this.curContext();
          if (context === types$1.j_expr) {
            return this.jsxReadToken();
          }
          if (context === types$1.j_oTag || context === types$1.j_cTag) {
            if (isIdentifierStart(code)) {
              return this.jsxReadWord();
            }
            if (code === 62) {
              ++this.state.pos;
              return this.finishToken(types.jsxTagEnd);
            }
            if ((code === 34 || code === 39) && context === types$1.j_oTag) {
              return this.jsxReadString(code);
            }
          }
          if (code === 60 && this.state.exprAllowed) {
            ++this.state.pos;
            return this.finishToken(types.jsxTagStart);
          }
          return inner.call(this, code);
        };
      });
      instance.extend("updateContext", function(inner) {
        return function(prevType) {
          if (this.match(types.braceL)) {
            var curContext = this.curContext();
            if (curContext === types$1.j_oTag) {
              this.state.context.push(types$1.braceExpression);
            } else if (curContext === types$1.j_expr) {
              this.state.context.push(types$1.templateQuasi);
            } else {
              inner.call(this, prevType);
            }
            this.state.exprAllowed = true;
          } else if (this.match(types.slash) && prevType === types.jsxTagStart) {
            this.state.context.length -= 2;
            this.state.context.push(types$1.j_cTag);
            this.state.exprAllowed = false;
          } else {
            return inner.call(this, prevType);
          }
        };
      });
    };
    plugins.estree = estreePlugin;
    plugins.flow = flowPlugin;
    plugins.jsx = jsxPlugin;
    function parse3(input, options) {
      return new Parser(options, input).parse();
    }
    function parseExpression(input, options) {
      var parser = new Parser(options, input);
      if (parser.options.strictMode) {
        parser.state.strict = true;
      }
      return parser.getExpression();
    }
    exports2.parse = parse3;
    exports2.parseExpression = parseExpression;
    exports2.tokTypes = types;
  }
});

// node_modules/babel-traverse/lib/path/replacement.js
var require_replacement = __commonJS({
  "node_modules/babel-traverse/lib/path/replacement.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.replaceWithMultiple = replaceWithMultiple;
    exports2.replaceWithSourceString = replaceWithSourceString;
    exports2.replaceWith = replaceWith;
    exports2._replaceWith = _replaceWith;
    exports2.replaceExpressionWithStatements = replaceExpressionWithStatements;
    exports2.replaceInline = replaceInline;
    var _babelCodeFrame = require_lib3();
    var _babelCodeFrame2 = _interopRequireDefault(_babelCodeFrame);
    var _index = require_lib5();
    var _index2 = _interopRequireDefault(_index);
    var _index3 = require_path();
    var _index4 = _interopRequireDefault(_index3);
    var _babylon = require_lib4();
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var hoistVariablesVisitor = {
      Function: function Function2(path2) {
        path2.skip();
      },
      VariableDeclaration: function VariableDeclaration(path2) {
        if (path2.node.kind !== "var")
          return;
        var bindings = path2.getBindingIdentifiers();
        for (var key in bindings) {
          path2.scope.push({ id: bindings[key] });
        }
        var exprs = [];
        for (var _iterator = path2.node.declarations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var declar = _ref;
          if (declar.init) {
            exprs.push(t4.expressionStatement(t4.assignmentExpression("=", declar.id, declar.init)));
          }
        }
        path2.replaceWithMultiple(exprs);
      }
    };
    function replaceWithMultiple(nodes) {
      this.resync();
      nodes = this._verifyNodeList(nodes);
      t4.inheritLeadingComments(nodes[0], this.node);
      t4.inheritTrailingComments(nodes[nodes.length - 1], this.node);
      this.node = this.container[this.key] = null;
      this.insertAfter(nodes);
      if (this.node) {
        this.requeue();
      } else {
        this.remove();
      }
    }
    function replaceWithSourceString(replacement) {
      this.resync();
      try {
        replacement = "(" + replacement + ")";
        replacement = (0, _babylon.parse)(replacement);
      } catch (err) {
        var loc = err.loc;
        if (loc) {
          err.message += " - make sure this is an expression.";
          err.message += "\n" + (0, _babelCodeFrame2.default)(replacement, loc.line, loc.column + 1);
        }
        throw err;
      }
      replacement = replacement.program.body[0].expression;
      _index2.default.removeProperties(replacement);
      return this.replaceWith(replacement);
    }
    function replaceWith(replacement) {
      this.resync();
      if (this.removed) {
        throw new Error("You can't replace this node, we've already removed it");
      }
      if (replacement instanceof _index4.default) {
        replacement = replacement.node;
      }
      if (!replacement) {
        throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
      }
      if (this.node === replacement) {
        return;
      }
      if (this.isProgram() && !t4.isProgram(replacement)) {
        throw new Error("You can only replace a Program root node with another Program node");
      }
      if (Array.isArray(replacement)) {
        throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
      }
      if (typeof replacement === "string") {
        throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
      }
      if (this.isNodeType("Statement") && t4.isExpression(replacement)) {
        if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement) && !this.parentPath.isExportDefaultDeclaration()) {
          replacement = t4.expressionStatement(replacement);
        }
      }
      if (this.isNodeType("Expression") && t4.isStatement(replacement)) {
        if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement)) {
          return this.replaceExpressionWithStatements([replacement]);
        }
      }
      var oldNode = this.node;
      if (oldNode) {
        t4.inheritsComments(replacement, oldNode);
        t4.removeComments(oldNode);
      }
      this._replaceWith(replacement);
      this.type = replacement.type;
      this.setScope();
      this.requeue();
    }
    function _replaceWith(node) {
      if (!this.container) {
        throw new ReferenceError("Container is falsy");
      }
      if (this.inList) {
        t4.validate(this.parent, this.key, [node]);
      } else {
        t4.validate(this.parent, this.key, node);
      }
      this.debug(function() {
        return "Replace with " + (node && node.type);
      });
      this.node = this.container[this.key] = node;
    }
    function replaceExpressionWithStatements(nodes) {
      this.resync();
      var toSequenceExpression = t4.toSequenceExpression(nodes, this.scope);
      if (t4.isSequenceExpression(toSequenceExpression)) {
        var exprs = toSequenceExpression.expressions;
        if (exprs.length >= 2 && this.parentPath.isExpressionStatement()) {
          this._maybePopFromStatements(exprs);
        }
        if (exprs.length === 1) {
          this.replaceWith(exprs[0]);
        } else {
          this.replaceWith(toSequenceExpression);
        }
      } else if (toSequenceExpression) {
        this.replaceWith(toSequenceExpression);
      } else {
        var container = t4.functionExpression(null, [], t4.blockStatement(nodes));
        container.shadow = true;
        this.replaceWith(t4.callExpression(container, []));
        this.traverse(hoistVariablesVisitor);
        var completionRecords = this.get("callee").getCompletionRecords();
        for (var _iterator2 = completionRecords, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
          var _ref2;
          if (_isArray2) {
            if (_i2 >= _iterator2.length)
              break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done)
              break;
            _ref2 = _i2.value;
          }
          var path2 = _ref2;
          if (!path2.isExpressionStatement())
            continue;
          var loop = path2.findParent(function(path3) {
            return path3.isLoop();
          });
          if (loop) {
            var uid = loop.getData("expressionReplacementReturnUid");
            if (!uid) {
              var callee = this.get("callee");
              uid = callee.scope.generateDeclaredUidIdentifier("ret");
              callee.get("body").pushContainer("body", t4.returnStatement(uid));
              loop.setData("expressionReplacementReturnUid", uid);
            } else {
              uid = t4.identifier(uid.name);
            }
            path2.get("expression").replaceWith(t4.assignmentExpression("=", uid, path2.node.expression));
          } else {
            path2.replaceWith(t4.returnStatement(path2.node.expression));
          }
        }
        return this.node;
      }
    }
    function replaceInline(nodes) {
      this.resync();
      if (Array.isArray(nodes)) {
        if (Array.isArray(this.container)) {
          nodes = this._verifyNodeList(nodes);
          this._containerInsertAfter(nodes);
          return this.remove();
        } else {
          return this.replaceWithMultiple(nodes);
        }
      } else {
        return this.replaceWith(nodes);
      }
    }
  }
});

// node_modules/babel-traverse/lib/path/evaluation.js
var require_evaluation = __commonJS({
  "node_modules/babel-traverse/lib/path/evaluation.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _typeof2 = require_typeof();
    var _typeof3 = _interopRequireDefault(_typeof2);
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    var _map = require_map2();
    var _map2 = _interopRequireDefault(_map);
    exports2.evaluateTruthy = evaluateTruthy;
    exports2.evaluate = evaluate;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var VALID_CALLEES = ["String", "Number", "Math"];
    var INVALID_METHODS = ["random"];
    function evaluateTruthy() {
      var res = this.evaluate();
      if (res.confident)
        return !!res.value;
    }
    function evaluate() {
      var confident = true;
      var deoptPath = void 0;
      var seen = new _map2.default();
      function deopt(path2) {
        if (!confident)
          return;
        deoptPath = path2;
        confident = false;
      }
      var value = evaluate2(this);
      if (!confident)
        value = void 0;
      return {
        confident,
        deopt: deoptPath,
        value
      };
      function evaluate2(path2) {
        var node = path2.node;
        if (seen.has(node)) {
          var existing = seen.get(node);
          if (existing.resolved) {
            return existing.value;
          } else {
            deopt(path2);
            return;
          }
        } else {
          var item2 = { resolved: false };
          seen.set(node, item2);
          var val = _evaluate(path2);
          if (confident) {
            item2.resolved = true;
            item2.value = val;
          }
          return val;
        }
      }
      function _evaluate(path2) {
        if (!confident)
          return;
        var node = path2.node;
        if (path2.isSequenceExpression()) {
          var exprs = path2.get("expressions");
          return evaluate2(exprs[exprs.length - 1]);
        }
        if (path2.isStringLiteral() || path2.isNumericLiteral() || path2.isBooleanLiteral()) {
          return node.value;
        }
        if (path2.isNullLiteral()) {
          return null;
        }
        if (path2.isTemplateLiteral()) {
          var str = "";
          var i = 0;
          var _exprs = path2.get("expressions");
          for (var _iterator = node.quasis, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
            var _ref;
            if (_isArray) {
              if (_i >= _iterator.length)
                break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done)
                break;
              _ref = _i.value;
            }
            var elem = _ref;
            if (!confident)
              break;
            str += elem.value.cooked;
            var expr = _exprs[i++];
            if (expr)
              str += String(evaluate2(expr));
          }
          if (!confident)
            return;
          return str;
        }
        if (path2.isConditionalExpression()) {
          var testResult = evaluate2(path2.get("test"));
          if (!confident)
            return;
          if (testResult) {
            return evaluate2(path2.get("consequent"));
          } else {
            return evaluate2(path2.get("alternate"));
          }
        }
        if (path2.isExpressionWrapper()) {
          return evaluate2(path2.get("expression"));
        }
        if (path2.isMemberExpression() && !path2.parentPath.isCallExpression({ callee: node })) {
          var property = path2.get("property");
          var object = path2.get("object");
          if (object.isLiteral() && property.isIdentifier()) {
            var _value = object.node.value;
            var type = typeof _value === "undefined" ? "undefined" : (0, _typeof3.default)(_value);
            if (type === "number" || type === "string") {
              return _value[property.node.name];
            }
          }
        }
        if (path2.isReferencedIdentifier()) {
          var binding = path2.scope.getBinding(node.name);
          if (binding && binding.constantViolations.length > 0) {
            return deopt(binding.path);
          }
          if (binding && path2.node.start < binding.path.node.end) {
            return deopt(binding.path);
          }
          if (binding && binding.hasValue) {
            return binding.value;
          } else {
            if (node.name === "undefined") {
              return binding ? deopt(binding.path) : void 0;
            } else if (node.name === "Infinity") {
              return binding ? deopt(binding.path) : Infinity;
            } else if (node.name === "NaN") {
              return binding ? deopt(binding.path) : NaN;
            }
            var resolved = path2.resolve();
            if (resolved === path2) {
              return deopt(path2);
            } else {
              return evaluate2(resolved);
            }
          }
        }
        if (path2.isUnaryExpression({ prefix: true })) {
          if (node.operator === "void") {
            return void 0;
          }
          var argument = path2.get("argument");
          if (node.operator === "typeof" && (argument.isFunction() || argument.isClass())) {
            return "function";
          }
          var arg = evaluate2(argument);
          if (!confident)
            return;
          switch (node.operator) {
            case "!":
              return !arg;
            case "+":
              return +arg;
            case "-":
              return -arg;
            case "~":
              return ~arg;
            case "typeof":
              return typeof arg === "undefined" ? "undefined" : (0, _typeof3.default)(arg);
          }
        }
        if (path2.isArrayExpression()) {
          var arr = [];
          var elems = path2.get("elements");
          for (var _iterator2 = elems, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
            var _ref2;
            if (_isArray2) {
              if (_i2 >= _iterator2.length)
                break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done)
                break;
              _ref2 = _i2.value;
            }
            var _elem = _ref2;
            _elem = _elem.evaluate();
            if (_elem.confident) {
              arr.push(_elem.value);
            } else {
              return deopt(_elem);
            }
          }
          return arr;
        }
        if (path2.isObjectExpression()) {
          var obj = {};
          var props = path2.get("properties");
          for (var _iterator3 = props, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
            var _ref3;
            if (_isArray3) {
              if (_i3 >= _iterator3.length)
                break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done)
                break;
              _ref3 = _i3.value;
            }
            var prop = _ref3;
            if (prop.isObjectMethod() || prop.isSpreadProperty()) {
              return deopt(prop);
            }
            var keyPath = prop.get("key");
            var key = keyPath;
            if (prop.node.computed) {
              key = key.evaluate();
              if (!key.confident) {
                return deopt(keyPath);
              }
              key = key.value;
            } else if (key.isIdentifier()) {
              key = key.node.name;
            } else {
              key = key.node.value;
            }
            var valuePath = prop.get("value");
            var _value2 = valuePath.evaluate();
            if (!_value2.confident) {
              return deopt(valuePath);
            }
            _value2 = _value2.value;
            obj[key] = _value2;
          }
          return obj;
        }
        if (path2.isLogicalExpression()) {
          var wasConfident = confident;
          var left = evaluate2(path2.get("left"));
          var leftConfident = confident;
          confident = wasConfident;
          var right = evaluate2(path2.get("right"));
          var rightConfident = confident;
          confident = leftConfident && rightConfident;
          switch (node.operator) {
            case "||":
              if (left && leftConfident) {
                confident = true;
                return left;
              }
              if (!confident)
                return;
              return left || right;
            case "&&":
              if (!left && leftConfident || !right && rightConfident) {
                confident = true;
              }
              if (!confident)
                return;
              return left && right;
          }
        }
        if (path2.isBinaryExpression()) {
          var _left = evaluate2(path2.get("left"));
          if (!confident)
            return;
          var _right = evaluate2(path2.get("right"));
          if (!confident)
            return;
          switch (node.operator) {
            case "-":
              return _left - _right;
            case "+":
              return _left + _right;
            case "/":
              return _left / _right;
            case "*":
              return _left * _right;
            case "%":
              return _left % _right;
            case "**":
              return Math.pow(_left, _right);
            case "<":
              return _left < _right;
            case ">":
              return _left > _right;
            case "<=":
              return _left <= _right;
            case ">=":
              return _left >= _right;
            case "==":
              return _left == _right;
            case "!=":
              return _left != _right;
            case "===":
              return _left === _right;
            case "!==":
              return _left !== _right;
            case "|":
              return _left | _right;
            case "&":
              return _left & _right;
            case "^":
              return _left ^ _right;
            case "<<":
              return _left << _right;
            case ">>":
              return _left >> _right;
            case ">>>":
              return _left >>> _right;
          }
        }
        if (path2.isCallExpression()) {
          var callee = path2.get("callee");
          var context = void 0;
          var func = void 0;
          if (callee.isIdentifier() && !path2.scope.getBinding(callee.node.name, true) && VALID_CALLEES.indexOf(callee.node.name) >= 0) {
            func = global[node.callee.name];
          }
          if (callee.isMemberExpression()) {
            var _object = callee.get("object");
            var _property = callee.get("property");
            if (_object.isIdentifier() && _property.isIdentifier() && VALID_CALLEES.indexOf(_object.node.name) >= 0 && INVALID_METHODS.indexOf(_property.node.name) < 0) {
              context = global[_object.node.name];
              func = context[_property.node.name];
            }
            if (_object.isLiteral() && _property.isIdentifier()) {
              var _type = (0, _typeof3.default)(_object.node.value);
              if (_type === "string" || _type === "number") {
                context = _object.node.value;
                func = context[_property.node.name];
              }
            }
          }
          if (func) {
            var args = path2.get("arguments").map(evaluate2);
            if (!confident)
              return;
            return func.apply(context, args);
          }
        }
        deopt(path2);
      }
    }
  }
});

// node_modules/babel-traverse/lib/path/conversion.js
var require_conversion = __commonJS({
  "node_modules/babel-traverse/lib/path/conversion.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.toComputedKey = toComputedKey;
    exports2.ensureBlock = ensureBlock;
    exports2.arrowFunctionToShadowed = arrowFunctionToShadowed;
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function toComputedKey() {
      var node = this.node;
      var key = void 0;
      if (this.isMemberExpression()) {
        key = node.property;
      } else if (this.isProperty() || this.isMethod()) {
        key = node.key;
      } else {
        throw new ReferenceError("todo");
      }
      if (!node.computed) {
        if (t4.isIdentifier(key))
          key = t4.stringLiteral(key.name);
      }
      return key;
    }
    function ensureBlock() {
      return t4.ensureBlock(this.node);
    }
    function arrowFunctionToShadowed() {
      if (!this.isArrowFunctionExpression())
        return;
      this.ensureBlock();
      var node = this.node;
      node.expression = false;
      node.type = "FunctionExpression";
      node.shadow = node.shadow || true;
    }
  }
});

// node_modules/babel-traverse/lib/path/introspection.js
var require_introspection = __commonJS({
  "node_modules/babel-traverse/lib/path/introspection.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.is = void 0;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.matchesPattern = matchesPattern;
    exports2.has = has;
    exports2.isStatic = isStatic;
    exports2.isnt = isnt;
    exports2.equals = equals;
    exports2.isNodeType = isNodeType;
    exports2.canHaveVariableDeclarationOrExpression = canHaveVariableDeclarationOrExpression;
    exports2.canSwapBetweenExpressionAndStatement = canSwapBetweenExpressionAndStatement;
    exports2.isCompletionRecord = isCompletionRecord;
    exports2.isStatementOrBlock = isStatementOrBlock;
    exports2.referencesImport = referencesImport;
    exports2.getSource = getSource;
    exports2.willIMaybeExecuteBefore = willIMaybeExecuteBefore;
    exports2._guessExecutionStatusRelativeTo = _guessExecutionStatusRelativeTo;
    exports2._guessExecutionStatusRelativeToDifferentFunctions = _guessExecutionStatusRelativeToDifferentFunctions;
    exports2.resolve = resolve;
    exports2._resolve = _resolve;
    var _includes = require_includes();
    var _includes2 = _interopRequireDefault(_includes);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function matchesPattern(pattern, allowPartial) {
      if (!this.isMemberExpression())
        return false;
      var parts = pattern.split(".");
      var search = [this.node];
      var i = 0;
      function matches(name) {
        var part = parts[i];
        return part === "*" || name === part;
      }
      while (search.length) {
        var node = search.shift();
        if (allowPartial && i === parts.length) {
          return true;
        }
        if (t4.isIdentifier(node)) {
          if (!matches(node.name))
            return false;
        } else if (t4.isLiteral(node)) {
          if (!matches(node.value))
            return false;
        } else if (t4.isMemberExpression(node)) {
          if (node.computed && !t4.isLiteral(node.property)) {
            return false;
          } else {
            search.unshift(node.property);
            search.unshift(node.object);
            continue;
          }
        } else if (t4.isThisExpression(node)) {
          if (!matches("this"))
            return false;
        } else {
          return false;
        }
        if (++i > parts.length) {
          return false;
        }
      }
      return i === parts.length;
    }
    function has(key) {
      var val = this.node && this.node[key];
      if (val && Array.isArray(val)) {
        return !!val.length;
      } else {
        return !!val;
      }
    }
    function isStatic() {
      return this.scope.isStatic(this.node);
    }
    var is = exports2.is = has;
    function isnt(key) {
      return !this.has(key);
    }
    function equals(key, value) {
      return this.node[key] === value;
    }
    function isNodeType(type) {
      return t4.isType(this.type, type);
    }
    function canHaveVariableDeclarationOrExpression() {
      return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
    }
    function canSwapBetweenExpressionAndStatement(replacement) {
      if (this.key !== "body" || !this.parentPath.isArrowFunctionExpression()) {
        return false;
      }
      if (this.isExpression()) {
        return t4.isBlockStatement(replacement);
      } else if (this.isBlockStatement()) {
        return t4.isExpression(replacement);
      }
      return false;
    }
    function isCompletionRecord(allowInsideFunction) {
      var path2 = this;
      var first = true;
      do {
        var container = path2.container;
        if (path2.isFunction() && !first) {
          return !!allowInsideFunction;
        }
        first = false;
        if (Array.isArray(container) && path2.key !== container.length - 1) {
          return false;
        }
      } while ((path2 = path2.parentPath) && !path2.isProgram());
      return true;
    }
    function isStatementOrBlock() {
      if (this.parentPath.isLabeledStatement() || t4.isBlockStatement(this.container)) {
        return false;
      } else {
        return (0, _includes2.default)(t4.STATEMENT_OR_BLOCK_KEYS, this.key);
      }
    }
    function referencesImport(moduleSource, importName) {
      if (!this.isReferencedIdentifier())
        return false;
      var binding = this.scope.getBinding(this.node.name);
      if (!binding || binding.kind !== "module")
        return false;
      var path2 = binding.path;
      var parent = path2.parentPath;
      if (!parent.isImportDeclaration())
        return false;
      if (parent.node.source.value === moduleSource) {
        if (!importName)
          return true;
      } else {
        return false;
      }
      if (path2.isImportDefaultSpecifier() && importName === "default") {
        return true;
      }
      if (path2.isImportNamespaceSpecifier() && importName === "*") {
        return true;
      }
      if (path2.isImportSpecifier() && path2.node.imported.name === importName) {
        return true;
      }
      return false;
    }
    function getSource() {
      var node = this.node;
      if (node.end) {
        return this.hub.file.code.slice(node.start, node.end);
      } else {
        return "";
      }
    }
    function willIMaybeExecuteBefore(target) {
      return this._guessExecutionStatusRelativeTo(target) !== "after";
    }
    function _guessExecutionStatusRelativeTo(target) {
      var targetFuncParent = target.scope.getFunctionParent();
      var selfFuncParent = this.scope.getFunctionParent();
      if (targetFuncParent.node !== selfFuncParent.node) {
        var status = this._guessExecutionStatusRelativeToDifferentFunctions(targetFuncParent);
        if (status) {
          return status;
        } else {
          target = targetFuncParent.path;
        }
      }
      var targetPaths = target.getAncestry();
      if (targetPaths.indexOf(this) >= 0)
        return "after";
      var selfPaths = this.getAncestry();
      var commonPath = void 0;
      var targetIndex = void 0;
      var selfIndex = void 0;
      for (selfIndex = 0; selfIndex < selfPaths.length; selfIndex++) {
        var selfPath = selfPaths[selfIndex];
        targetIndex = targetPaths.indexOf(selfPath);
        if (targetIndex >= 0) {
          commonPath = selfPath;
          break;
        }
      }
      if (!commonPath) {
        return "before";
      }
      var targetRelationship = targetPaths[targetIndex - 1];
      var selfRelationship = selfPaths[selfIndex - 1];
      if (!targetRelationship || !selfRelationship) {
        return "before";
      }
      if (targetRelationship.listKey && targetRelationship.container === selfRelationship.container) {
        return targetRelationship.key > selfRelationship.key ? "before" : "after";
      }
      var targetKeyPosition = t4.VISITOR_KEYS[targetRelationship.type].indexOf(targetRelationship.key);
      var selfKeyPosition = t4.VISITOR_KEYS[selfRelationship.type].indexOf(selfRelationship.key);
      return targetKeyPosition > selfKeyPosition ? "before" : "after";
    }
    function _guessExecutionStatusRelativeToDifferentFunctions(targetFuncParent) {
      var targetFuncPath = targetFuncParent.path;
      if (!targetFuncPath.isFunctionDeclaration())
        return;
      var binding = targetFuncPath.scope.getBinding(targetFuncPath.node.id.name);
      if (!binding.references)
        return "before";
      var referencePaths = binding.referencePaths;
      for (var _iterator = referencePaths, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var path2 = _ref;
        if (path2.key !== "callee" || !path2.parentPath.isCallExpression()) {
          return;
        }
      }
      var allStatus = void 0;
      for (var _iterator2 = referencePaths, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
        var _ref2;
        if (_isArray2) {
          if (_i2 >= _iterator2.length)
            break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done)
            break;
          _ref2 = _i2.value;
        }
        var _path = _ref2;
        var childOfFunction = !!_path.find(function(path3) {
          return path3.node === targetFuncPath.node;
        });
        if (childOfFunction)
          continue;
        var status = this._guessExecutionStatusRelativeTo(_path);
        if (allStatus) {
          if (allStatus !== status)
            return;
        } else {
          allStatus = status;
        }
      }
      return allStatus;
    }
    function resolve(dangerous, resolved) {
      return this._resolve(dangerous, resolved) || this;
    }
    function _resolve(dangerous, resolved) {
      if (resolved && resolved.indexOf(this) >= 0)
        return;
      resolved = resolved || [];
      resolved.push(this);
      if (this.isVariableDeclarator()) {
        if (this.get("id").isIdentifier()) {
          return this.get("init").resolve(dangerous, resolved);
        } else {
        }
      } else if (this.isReferencedIdentifier()) {
        var binding = this.scope.getBinding(this.node.name);
        if (!binding)
          return;
        if (!binding.constant)
          return;
        if (binding.kind === "module")
          return;
        if (binding.path !== this) {
          var ret = binding.path.resolve(dangerous, resolved);
          if (this.find(function(parent) {
            return parent.node === ret.node;
          }))
            return;
          return ret;
        }
      } else if (this.isTypeCastExpression()) {
        return this.get("expression").resolve(dangerous, resolved);
      } else if (dangerous && this.isMemberExpression()) {
        var targetKey = this.toComputedKey();
        if (!t4.isLiteral(targetKey))
          return;
        var targetName = targetKey.value;
        var target = this.get("object").resolve(dangerous, resolved);
        if (target.isObjectExpression()) {
          var props = target.get("properties");
          for (var _iterator3 = props, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
            var _ref3;
            if (_isArray3) {
              if (_i3 >= _iterator3.length)
                break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done)
                break;
              _ref3 = _i3.value;
            }
            var prop = _ref3;
            if (!prop.isProperty())
              continue;
            var key = prop.get("key");
            var match = prop.isnt("computed") && key.isIdentifier({ name: targetName });
            match = match || key.isLiteral({ value: targetName });
            if (match)
              return prop.get("value").resolve(dangerous, resolved);
          }
        } else if (target.isArrayExpression() && !isNaN(+targetName)) {
          var elems = target.get("elements");
          var elem = elems[targetName];
          if (elem)
            return elem.resolve(dangerous, resolved);
        }
      }
    }
  }
});

// node_modules/babel-traverse/lib/path/context.js
var require_context = __commonJS({
  "node_modules/babel-traverse/lib/path/context.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.call = call;
    exports2._call = _call;
    exports2.isBlacklisted = isBlacklisted;
    exports2.visit = visit;
    exports2.skip = skip;
    exports2.skipKey = skipKey;
    exports2.stop = stop;
    exports2.setScope = setScope;
    exports2.setContext = setContext;
    exports2.resync = resync;
    exports2._resyncParent = _resyncParent;
    exports2._resyncKey = _resyncKey;
    exports2._resyncList = _resyncList;
    exports2._resyncRemoved = _resyncRemoved;
    exports2.popContext = popContext;
    exports2.pushContext = pushContext;
    exports2.setup = setup;
    exports2.setKey = setKey;
    exports2.requeue = requeue;
    exports2._getQueueContexts = _getQueueContexts;
    var _index = require_lib5();
    var _index2 = _interopRequireDefault(_index);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function call(key) {
      var opts = this.opts;
      this.debug(function() {
        return key;
      });
      if (this.node) {
        if (this._call(opts[key]))
          return true;
      }
      if (this.node) {
        return this._call(opts[this.node.type] && opts[this.node.type][key]);
      }
      return false;
    }
    function _call(fns) {
      if (!fns)
        return false;
      for (var _iterator = fns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var fn = _ref;
        if (!fn)
          continue;
        var node = this.node;
        if (!node)
          return true;
        var ret = fn.call(this.state, this, this.state);
        if (ret)
          throw new Error("Unexpected return value from visitor method " + fn);
        if (this.node !== node)
          return true;
        if (this.shouldStop || this.shouldSkip || this.removed)
          return true;
      }
      return false;
    }
    function isBlacklisted() {
      var blacklist = this.opts.blacklist;
      return blacklist && blacklist.indexOf(this.node.type) > -1;
    }
    function visit() {
      if (!this.node) {
        return false;
      }
      if (this.isBlacklisted()) {
        return false;
      }
      if (this.opts.shouldSkip && this.opts.shouldSkip(this)) {
        return false;
      }
      if (this.call("enter") || this.shouldSkip) {
        this.debug(function() {
          return "Skip...";
        });
        return this.shouldStop;
      }
      this.debug(function() {
        return "Recursing into...";
      });
      _index2.default.node(this.node, this.opts, this.scope, this.state, this, this.skipKeys);
      this.call("exit");
      return this.shouldStop;
    }
    function skip() {
      this.shouldSkip = true;
    }
    function skipKey(key) {
      this.skipKeys[key] = true;
    }
    function stop() {
      this.shouldStop = true;
      this.shouldSkip = true;
    }
    function setScope() {
      if (this.opts && this.opts.noScope)
        return;
      var target = this.context && this.context.scope;
      if (!target) {
        var path2 = this.parentPath;
        while (path2 && !target) {
          if (path2.opts && path2.opts.noScope)
            return;
          target = path2.scope;
          path2 = path2.parentPath;
        }
      }
      this.scope = this.getScope(target);
      if (this.scope)
        this.scope.init();
    }
    function setContext(context) {
      this.shouldSkip = false;
      this.shouldStop = false;
      this.removed = false;
      this.skipKeys = {};
      if (context) {
        this.context = context;
        this.state = context.state;
        this.opts = context.opts;
      }
      this.setScope();
      return this;
    }
    function resync() {
      if (this.removed)
        return;
      this._resyncParent();
      this._resyncList();
      this._resyncKey();
    }
    function _resyncParent() {
      if (this.parentPath) {
        this.parent = this.parentPath.node;
      }
    }
    function _resyncKey() {
      if (!this.container)
        return;
      if (this.node === this.container[this.key])
        return;
      if (Array.isArray(this.container)) {
        for (var i = 0; i < this.container.length; i++) {
          if (this.container[i] === this.node) {
            return this.setKey(i);
          }
        }
      } else {
        for (var key in this.container) {
          if (this.container[key] === this.node) {
            return this.setKey(key);
          }
        }
      }
      this.key = null;
    }
    function _resyncList() {
      if (!this.parent || !this.inList)
        return;
      var newContainer = this.parent[this.listKey];
      if (this.container === newContainer)
        return;
      this.container = newContainer || null;
    }
    function _resyncRemoved() {
      if (this.key == null || !this.container || this.container[this.key] !== this.node) {
        this._markRemoved();
      }
    }
    function popContext() {
      this.contexts.pop();
      this.setContext(this.contexts[this.contexts.length - 1]);
    }
    function pushContext(context) {
      this.contexts.push(context);
      this.setContext(context);
    }
    function setup(parentPath, container, listKey, key) {
      this.inList = !!listKey;
      this.listKey = listKey;
      this.parentKey = listKey || key;
      this.container = container;
      this.parentPath = parentPath || this.parentPath;
      this.setKey(key);
    }
    function setKey(key) {
      this.key = key;
      this.node = this.container[this.key];
      this.type = this.node && this.node.type;
    }
    function requeue() {
      var pathToQueue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this;
      if (pathToQueue.removed)
        return;
      var contexts = this.contexts;
      for (var _iterator2 = contexts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
        var _ref2;
        if (_isArray2) {
          if (_i2 >= _iterator2.length)
            break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done)
            break;
          _ref2 = _i2.value;
        }
        var context = _ref2;
        context.maybeQueue(pathToQueue);
      }
    }
    function _getQueueContexts() {
      var path2 = this;
      var contexts = this.contexts;
      while (!contexts.length) {
        path2 = path2.parentPath;
        contexts = path2.contexts;
      }
      return contexts;
    }
  }
});

// node_modules/babel-traverse/lib/path/lib/removal-hooks.js
var require_removal_hooks = __commonJS({
  "node_modules/babel-traverse/lib/path/lib/removal-hooks.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var hooks = exports2.hooks = [function(self2, parent) {
      var removeParent = self2.key === "test" && (parent.isWhile() || parent.isSwitchCase()) || self2.key === "declaration" && parent.isExportDeclaration() || self2.key === "body" && parent.isLabeledStatement() || self2.listKey === "declarations" && parent.isVariableDeclaration() && parent.node.declarations.length === 1 || self2.key === "expression" && parent.isExpressionStatement();
      if (removeParent) {
        parent.remove();
        return true;
      }
    }, function(self2, parent) {
      if (parent.isSequenceExpression() && parent.node.expressions.length === 1) {
        parent.replaceWith(parent.node.expressions[0]);
        return true;
      }
    }, function(self2, parent) {
      if (parent.isBinary()) {
        if (self2.key === "left") {
          parent.replaceWith(parent.node.right);
        } else {
          parent.replaceWith(parent.node.left);
        }
        return true;
      }
    }, function(self2, parent) {
      if (parent.isIfStatement() && (self2.key === "consequent" || self2.key === "alternate") || self2.key === "body" && (parent.isLoop() || parent.isArrowFunctionExpression())) {
        self2.replaceWith({
          type: "BlockStatement",
          body: []
        });
        return true;
      }
    }];
  }
});

// node_modules/babel-traverse/lib/path/removal.js
var require_removal = __commonJS({
  "node_modules/babel-traverse/lib/path/removal.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.remove = remove;
    exports2._callRemovalHooks = _callRemovalHooks;
    exports2._remove = _remove;
    exports2._markRemoved = _markRemoved;
    exports2._assertUnremoved = _assertUnremoved;
    var _removalHooks = require_removal_hooks();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function remove() {
      this._assertUnremoved();
      this.resync();
      if (this._callRemovalHooks()) {
        this._markRemoved();
        return;
      }
      this.shareCommentsWithSiblings();
      this._remove();
      this._markRemoved();
    }
    function _callRemovalHooks() {
      for (var _iterator = _removalHooks.hooks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var fn = _ref;
        if (fn(this, this.parentPath))
          return true;
      }
    }
    function _remove() {
      if (Array.isArray(this.container)) {
        this.container.splice(this.key, 1);
        this.updateSiblingKeys(this.key, -1);
      } else {
        this._replaceWith(null);
      }
    }
    function _markRemoved() {
      this.shouldSkip = true;
      this.removed = true;
      this.node = null;
    }
    function _assertUnremoved() {
      if (this.removed) {
        throw this.buildCodeFrameError("NodePath has been removed so is read-only.");
      }
    }
  }
});

// node_modules/babel-traverse/lib/path/lib/hoister.js
var require_hoister = __commonJS({
  "node_modules/babel-traverse/lib/path/lib/hoister.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    var _classCallCheck2 = require_classCallCheck();
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var referenceVisitor = {
      ReferencedIdentifier: function ReferencedIdentifier(path2, state) {
        if (path2.isJSXIdentifier() && _babelTypes.react.isCompatTag(path2.node.name) && !path2.parentPath.isJSXMemberExpression()) {
          return;
        }
        if (path2.node.name === "this") {
          var scope = path2.scope;
          do {
            if (scope.path.isFunction() && !scope.path.isArrowFunctionExpression())
              break;
          } while (scope = scope.parent);
          if (scope)
            state.breakOnScopePaths.push(scope.path);
        }
        var binding = path2.scope.getBinding(path2.node.name);
        if (!binding)
          return;
        if (binding !== state.scope.getBinding(path2.node.name))
          return;
        state.bindings[path2.node.name] = binding;
      }
    };
    var PathHoister = function() {
      function PathHoister2(path2, scope) {
        (0, _classCallCheck3.default)(this, PathHoister2);
        this.breakOnScopePaths = [];
        this.bindings = {};
        this.scopes = [];
        this.scope = scope;
        this.path = path2;
        this.attachAfter = false;
      }
      PathHoister2.prototype.isCompatibleScope = function isCompatibleScope(scope) {
        for (var key in this.bindings) {
          var binding = this.bindings[key];
          if (!scope.bindingIdentifierEquals(key, binding.identifier)) {
            return false;
          }
        }
        return true;
      };
      PathHoister2.prototype.getCompatibleScopes = function getCompatibleScopes() {
        var scope = this.path.scope;
        do {
          if (this.isCompatibleScope(scope)) {
            this.scopes.push(scope);
          } else {
            break;
          }
          if (this.breakOnScopePaths.indexOf(scope.path) >= 0) {
            break;
          }
        } while (scope = scope.parent);
      };
      PathHoister2.prototype.getAttachmentPath = function getAttachmentPath() {
        var path2 = this._getAttachmentPath();
        if (!path2)
          return;
        var targetScope = path2.scope;
        if (targetScope.path === path2) {
          targetScope = path2.scope.parent;
        }
        if (targetScope.path.isProgram() || targetScope.path.isFunction()) {
          for (var name in this.bindings) {
            if (!targetScope.hasOwnBinding(name))
              continue;
            var binding = this.bindings[name];
            if (binding.kind === "param")
              continue;
            if (this.getAttachmentParentForPath(binding.path).key > path2.key) {
              this.attachAfter = true;
              path2 = binding.path;
              for (var _iterator = binding.constantViolations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
                var _ref;
                if (_isArray) {
                  if (_i >= _iterator.length)
                    break;
                  _ref = _iterator[_i++];
                } else {
                  _i = _iterator.next();
                  if (_i.done)
                    break;
                  _ref = _i.value;
                }
                var violationPath = _ref;
                if (this.getAttachmentParentForPath(violationPath).key > path2.key) {
                  path2 = violationPath;
                }
              }
            }
          }
        }
        if (path2.parentPath.isExportDeclaration()) {
          path2 = path2.parentPath;
        }
        return path2;
      };
      PathHoister2.prototype._getAttachmentPath = function _getAttachmentPath() {
        var scopes = this.scopes;
        var scope = scopes.pop();
        if (!scope)
          return;
        if (scope.path.isFunction()) {
          if (this.hasOwnParamBindings(scope)) {
            if (this.scope === scope)
              return;
            return scope.path.get("body").get("body")[0];
          } else {
            return this.getNextScopeAttachmentParent();
          }
        } else if (scope.path.isProgram()) {
          return this.getNextScopeAttachmentParent();
        }
      };
      PathHoister2.prototype.getNextScopeAttachmentParent = function getNextScopeAttachmentParent() {
        var scope = this.scopes.pop();
        if (scope)
          return this.getAttachmentParentForPath(scope.path);
      };
      PathHoister2.prototype.getAttachmentParentForPath = function getAttachmentParentForPath(path2) {
        do {
          if (!path2.parentPath || Array.isArray(path2.container) && path2.isStatement() || path2.isVariableDeclarator() && path2.parentPath.node !== null && path2.parentPath.node.declarations.length > 1)
            return path2;
        } while (path2 = path2.parentPath);
      };
      PathHoister2.prototype.hasOwnParamBindings = function hasOwnParamBindings(scope) {
        for (var name in this.bindings) {
          if (!scope.hasOwnBinding(name))
            continue;
          var binding = this.bindings[name];
          if (binding.kind === "param" && binding.constant)
            return true;
        }
        return false;
      };
      PathHoister2.prototype.run = function run() {
        var node = this.path.node;
        if (node._hoisted)
          return;
        node._hoisted = true;
        this.path.traverse(referenceVisitor, this);
        this.getCompatibleScopes();
        var attachTo = this.getAttachmentPath();
        if (!attachTo)
          return;
        if (attachTo.getFunctionParent() === this.path.getFunctionParent())
          return;
        var uid = attachTo.scope.generateUidIdentifier("ref");
        var declarator2 = t4.variableDeclarator(uid, this.path.node);
        var insertFn = this.attachAfter ? "insertAfter" : "insertBefore";
        attachTo[insertFn]([attachTo.isVariableDeclarator() ? declarator2 : t4.variableDeclaration("var", [declarator2])]);
        var parent = this.path.parentPath;
        if (parent.isJSXElement() && this.path.container === parent.node.children) {
          uid = t4.JSXExpressionContainer(uid);
        }
        this.path.replaceWith(uid);
      };
      return PathHoister2;
    }();
    exports2.default = PathHoister;
    module2.exports = exports2["default"];
  }
});

// node_modules/babel-traverse/lib/path/modification.js
var require_modification = __commonJS({
  "node_modules/babel-traverse/lib/path/modification.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _typeof2 = require_typeof();
    var _typeof3 = _interopRequireDefault(_typeof2);
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.insertBefore = insertBefore;
    exports2._containerInsert = _containerInsert;
    exports2._containerInsertBefore = _containerInsertBefore;
    exports2._containerInsertAfter = _containerInsertAfter;
    exports2._maybePopFromStatements = _maybePopFromStatements;
    exports2.insertAfter = insertAfter;
    exports2.updateSiblingKeys = updateSiblingKeys;
    exports2._verifyNodeList = _verifyNodeList;
    exports2.unshiftContainer = unshiftContainer;
    exports2.pushContainer = pushContainer;
    exports2.hoist = hoist;
    var _cache = require_cache();
    var _hoister = require_hoister();
    var _hoister2 = _interopRequireDefault(_hoister);
    var _index = require_path();
    var _index2 = _interopRequireDefault(_index);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function insertBefore(nodes) {
      this._assertUnremoved();
      nodes = this._verifyNodeList(nodes);
      if (this.parentPath.isExpressionStatement() || this.parentPath.isLabeledStatement()) {
        return this.parentPath.insertBefore(nodes);
      } else if (this.isNodeType("Expression") || this.parentPath.isForStatement() && this.key === "init") {
        if (this.node)
          nodes.push(this.node);
        this.replaceExpressionWithStatements(nodes);
      } else {
        this._maybePopFromStatements(nodes);
        if (Array.isArray(this.container)) {
          return this._containerInsertBefore(nodes);
        } else if (this.isStatementOrBlock()) {
          if (this.node)
            nodes.push(this.node);
          this._replaceWith(t4.blockStatement(nodes));
        } else {
          throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
        }
      }
      return [this];
    }
    function _containerInsert(from, nodes) {
      this.updateSiblingKeys(from, nodes.length);
      var paths = [];
      for (var i = 0; i < nodes.length; i++) {
        var to = from + i;
        var node = nodes[i];
        this.container.splice(to, 0, node);
        if (this.context) {
          var path2 = this.context.create(this.parent, this.container, to, this.listKey);
          if (this.context.queue)
            path2.pushContext(this.context);
          paths.push(path2);
        } else {
          paths.push(_index2.default.get({
            parentPath: this.parentPath,
            parent: this.parent,
            container: this.container,
            listKey: this.listKey,
            key: to
          }));
        }
      }
      var contexts = this._getQueueContexts();
      for (var _iterator = paths, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var _path = _ref;
        _path.setScope();
        _path.debug(function() {
          return "Inserted.";
        });
        for (var _iterator2 = contexts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
          var _ref2;
          if (_isArray2) {
            if (_i2 >= _iterator2.length)
              break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done)
              break;
            _ref2 = _i2.value;
          }
          var context = _ref2;
          context.maybeQueue(_path, true);
        }
      }
      return paths;
    }
    function _containerInsertBefore(nodes) {
      return this._containerInsert(this.key, nodes);
    }
    function _containerInsertAfter(nodes) {
      return this._containerInsert(this.key + 1, nodes);
    }
    function _maybePopFromStatements(nodes) {
      var last = nodes[nodes.length - 1];
      var isIdentifier2 = t4.isIdentifier(last) || t4.isExpressionStatement(last) && t4.isIdentifier(last.expression);
      if (isIdentifier2 && !this.isCompletionRecord()) {
        nodes.pop();
      }
    }
    function insertAfter(nodes) {
      this._assertUnremoved();
      nodes = this._verifyNodeList(nodes);
      if (this.parentPath.isExpressionStatement() || this.parentPath.isLabeledStatement()) {
        return this.parentPath.insertAfter(nodes);
      } else if (this.isNodeType("Expression") || this.parentPath.isForStatement() && this.key === "init") {
        if (this.node) {
          var temp = this.scope.generateDeclaredUidIdentifier();
          nodes.unshift(t4.expressionStatement(t4.assignmentExpression("=", temp, this.node)));
          nodes.push(t4.expressionStatement(temp));
        }
        this.replaceExpressionWithStatements(nodes);
      } else {
        this._maybePopFromStatements(nodes);
        if (Array.isArray(this.container)) {
          return this._containerInsertAfter(nodes);
        } else if (this.isStatementOrBlock()) {
          if (this.node)
            nodes.unshift(this.node);
          this._replaceWith(t4.blockStatement(nodes));
        } else {
          throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
        }
      }
      return [this];
    }
    function updateSiblingKeys(fromIndex, incrementBy) {
      if (!this.parent)
        return;
      var paths = _cache.path.get(this.parent);
      for (var i = 0; i < paths.length; i++) {
        var path2 = paths[i];
        if (path2.key >= fromIndex) {
          path2.key += incrementBy;
        }
      }
    }
    function _verifyNodeList(nodes) {
      if (!nodes) {
        return [];
      }
      if (nodes.constructor !== Array) {
        nodes = [nodes];
      }
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var msg = void 0;
        if (!node) {
          msg = "has falsy node";
        } else if ((typeof node === "undefined" ? "undefined" : (0, _typeof3.default)(node)) !== "object") {
          msg = "contains a non-object node";
        } else if (!node.type) {
          msg = "without a type";
        } else if (node instanceof _index2.default) {
          msg = "has a NodePath when it expected a raw object";
        }
        if (msg) {
          var type = Array.isArray(node) ? "array" : typeof node === "undefined" ? "undefined" : (0, _typeof3.default)(node);
          throw new Error("Node list " + msg + " with the index of " + i + " and type of " + type);
        }
      }
      return nodes;
    }
    function unshiftContainer(listKey, nodes) {
      this._assertUnremoved();
      nodes = this._verifyNodeList(nodes);
      var path2 = _index2.default.get({
        parentPath: this,
        parent: this.node,
        container: this.node[listKey],
        listKey,
        key: 0
      });
      return path2.insertBefore(nodes);
    }
    function pushContainer(listKey, nodes) {
      this._assertUnremoved();
      nodes = this._verifyNodeList(nodes);
      var container = this.node[listKey];
      var path2 = _index2.default.get({
        parentPath: this,
        parent: this.node,
        container,
        listKey,
        key: container.length
      });
      return path2.replaceWithMultiple(nodes);
    }
    function hoist() {
      var scope = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.scope;
      var hoister = new _hoister2.default(this, scope);
      return hoister.run();
    }
  }
});

// node_modules/babel-traverse/lib/path/family.js
var require_family = __commonJS({
  "node_modules/babel-traverse/lib/path/family.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _create = require_create2();
    var _create2 = _interopRequireDefault(_create);
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.getStatementParent = getStatementParent;
    exports2.getOpposite = getOpposite;
    exports2.getCompletionRecords = getCompletionRecords;
    exports2.getSibling = getSibling;
    exports2.getPrevSibling = getPrevSibling;
    exports2.getNextSibling = getNextSibling;
    exports2.getAllNextSiblings = getAllNextSiblings;
    exports2.getAllPrevSiblings = getAllPrevSiblings;
    exports2.get = get;
    exports2._getKey = _getKey;
    exports2._getPattern = _getPattern;
    exports2.getBindingIdentifiers = getBindingIdentifiers;
    exports2.getOuterBindingIdentifiers = getOuterBindingIdentifiers;
    exports2.getBindingIdentifierPaths = getBindingIdentifierPaths;
    exports2.getOuterBindingIdentifierPaths = getOuterBindingIdentifierPaths;
    var _index = require_path();
    var _index2 = _interopRequireDefault(_index);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getStatementParent() {
      var path2 = this;
      do {
        if (!path2.parentPath || Array.isArray(path2.container) && path2.isStatement()) {
          break;
        } else {
          path2 = path2.parentPath;
        }
      } while (path2);
      if (path2 && (path2.isProgram() || path2.isFile())) {
        throw new Error("File/Program node, we can't possibly find a statement parent to this");
      }
      return path2;
    }
    function getOpposite() {
      if (this.key === "left") {
        return this.getSibling("right");
      } else if (this.key === "right") {
        return this.getSibling("left");
      }
    }
    function getCompletionRecords() {
      var paths = [];
      var add = function add2(path2) {
        if (path2)
          paths = paths.concat(path2.getCompletionRecords());
      };
      if (this.isIfStatement()) {
        add(this.get("consequent"));
        add(this.get("alternate"));
      } else if (this.isDoExpression() || this.isFor() || this.isWhile()) {
        add(this.get("body"));
      } else if (this.isProgram() || this.isBlockStatement()) {
        add(this.get("body").pop());
      } else if (this.isFunction()) {
        return this.get("body").getCompletionRecords();
      } else if (this.isTryStatement()) {
        add(this.get("block"));
        add(this.get("handler"));
        add(this.get("finalizer"));
      } else {
        paths.push(this);
      }
      return paths;
    }
    function getSibling(key) {
      return _index2.default.get({
        parentPath: this.parentPath,
        parent: this.parent,
        container: this.container,
        listKey: this.listKey,
        key
      });
    }
    function getPrevSibling() {
      return this.getSibling(this.key - 1);
    }
    function getNextSibling() {
      return this.getSibling(this.key + 1);
    }
    function getAllNextSiblings() {
      var _key = this.key;
      var sibling = this.getSibling(++_key);
      var siblings = [];
      while (sibling.node) {
        siblings.push(sibling);
        sibling = this.getSibling(++_key);
      }
      return siblings;
    }
    function getAllPrevSiblings() {
      var _key = this.key;
      var sibling = this.getSibling(--_key);
      var siblings = [];
      while (sibling.node) {
        siblings.push(sibling);
        sibling = this.getSibling(--_key);
      }
      return siblings;
    }
    function get(key, context) {
      if (context === true)
        context = this.context;
      var parts = key.split(".");
      if (parts.length === 1) {
        return this._getKey(key, context);
      } else {
        return this._getPattern(parts, context);
      }
    }
    function _getKey(key, context) {
      var _this = this;
      var node = this.node;
      var container = node[key];
      if (Array.isArray(container)) {
        return container.map(function(_, i) {
          return _index2.default.get({
            listKey: key,
            parentPath: _this,
            parent: node,
            container,
            key: i
          }).setContext(context);
        });
      } else {
        return _index2.default.get({
          parentPath: this,
          parent: node,
          container: node,
          key
        }).setContext(context);
      }
    }
    function _getPattern(parts, context) {
      var path2 = this;
      for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var part = _ref;
        if (part === ".") {
          path2 = path2.parentPath;
        } else {
          if (Array.isArray(path2)) {
            path2 = path2[part];
          } else {
            path2 = path2.get(part, context);
          }
        }
      }
      return path2;
    }
    function getBindingIdentifiers(duplicates) {
      return t4.getBindingIdentifiers(this.node, duplicates);
    }
    function getOuterBindingIdentifiers(duplicates) {
      return t4.getOuterBindingIdentifiers(this.node, duplicates);
    }
    function getBindingIdentifierPaths() {
      var duplicates = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var outerOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var path2 = this;
      var search = [].concat(path2);
      var ids = (0, _create2.default)(null);
      while (search.length) {
        var id = search.shift();
        if (!id)
          continue;
        if (!id.node)
          continue;
        var keys = t4.getBindingIdentifiers.keys[id.node.type];
        if (id.isIdentifier()) {
          if (duplicates) {
            var _ids = ids[id.node.name] = ids[id.node.name] || [];
            _ids.push(id);
          } else {
            ids[id.node.name] = id;
          }
          continue;
        }
        if (id.isExportDeclaration()) {
          var declaration = id.get("declaration");
          if (declaration.isDeclaration()) {
            search.push(declaration);
          }
          continue;
        }
        if (outerOnly) {
          if (id.isFunctionDeclaration()) {
            search.push(id.get("id"));
            continue;
          }
          if (id.isFunctionExpression()) {
            continue;
          }
        }
        if (keys) {
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var child = id.get(key);
            if (Array.isArray(child) || child.node) {
              search = search.concat(child);
            }
          }
        }
      }
      return ids;
    }
    function getOuterBindingIdentifierPaths(duplicates) {
      return this.getBindingIdentifierPaths(duplicates, true);
    }
  }
});

// node_modules/babel-traverse/lib/path/comments.js
var require_comments = __commonJS({
  "node_modules/babel-traverse/lib/path/comments.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.shareCommentsWithSiblings = shareCommentsWithSiblings;
    exports2.addComment = addComment;
    exports2.addComments = addComments;
    function shareCommentsWithSiblings() {
      if (typeof this.key === "string")
        return;
      var node = this.node;
      if (!node)
        return;
      var trailing = node.trailingComments;
      var leading = node.leadingComments;
      if (!trailing && !leading)
        return;
      var prev = this.getSibling(this.key - 1);
      var next = this.getSibling(this.key + 1);
      if (!prev.node)
        prev = next;
      if (!next.node)
        next = prev;
      prev.addComments("trailing", leading);
      next.addComments("leading", trailing);
    }
    function addComment(type, content, line) {
      this.addComments(type, [{
        type: line ? "CommentLine" : "CommentBlock",
        value: content
      }]);
    }
    function addComments(type, comments) {
      if (!comments)
        return;
      var node = this.node;
      if (!node)
        return;
      var key = type + "Comments";
      if (node[key]) {
        node[key] = node[key].concat(comments);
      } else {
        node[key] = comments;
      }
    }
  }
});

// node_modules/babel-traverse/lib/path/index.js
var require_path = __commonJS({
  "node_modules/babel-traverse/lib/path/index.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    var _classCallCheck2 = require_classCallCheck();
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    var _virtualTypes = require_virtual_types();
    var virtualTypes = _interopRequireWildcard(_virtualTypes);
    var _debug2 = require_src();
    var _debug3 = _interopRequireDefault(_debug2);
    var _invariant = require_invariant();
    var _invariant2 = _interopRequireDefault(_invariant);
    var _index = require_lib5();
    var _index2 = _interopRequireDefault(_index);
    var _assign = require_assign();
    var _assign2 = _interopRequireDefault(_assign);
    var _scope = require_scope();
    var _scope2 = _interopRequireDefault(_scope);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    var _cache = require_cache();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _debug = (0, _debug3.default)("babel");
    var NodePath = function() {
      function NodePath2(hub, parent) {
        (0, _classCallCheck3.default)(this, NodePath2);
        this.parent = parent;
        this.hub = hub;
        this.contexts = [];
        this.data = {};
        this.shouldSkip = false;
        this.shouldStop = false;
        this.removed = false;
        this.state = null;
        this.opts = null;
        this.skipKeys = null;
        this.parentPath = null;
        this.context = null;
        this.container = null;
        this.listKey = null;
        this.inList = false;
        this.parentKey = null;
        this.key = null;
        this.node = null;
        this.scope = null;
        this.type = null;
        this.typeAnnotation = null;
      }
      NodePath2.get = function get(_ref) {
        var hub = _ref.hub, parentPath = _ref.parentPath, parent = _ref.parent, container = _ref.container, listKey = _ref.listKey, key = _ref.key;
        if (!hub && parentPath) {
          hub = parentPath.hub;
        }
        (0, _invariant2.default)(parent, "To get a node path the parent needs to exist");
        var targetNode = container[key];
        var paths = _cache.path.get(parent) || [];
        if (!_cache.path.has(parent)) {
          _cache.path.set(parent, paths);
        }
        var path2 = void 0;
        for (var i = 0; i < paths.length; i++) {
          var pathCheck = paths[i];
          if (pathCheck.node === targetNode) {
            path2 = pathCheck;
            break;
          }
        }
        if (!path2) {
          path2 = new NodePath2(hub, parent);
          paths.push(path2);
        }
        path2.setup(parentPath, container, listKey, key);
        return path2;
      };
      NodePath2.prototype.getScope = function getScope(scope) {
        var ourScope = scope;
        if (this.isScope()) {
          ourScope = new _scope2.default(this, scope);
        }
        return ourScope;
      };
      NodePath2.prototype.setData = function setData(key, val) {
        return this.data[key] = val;
      };
      NodePath2.prototype.getData = function getData(key, def) {
        var val = this.data[key];
        if (!val && def)
          val = this.data[key] = def;
        return val;
      };
      NodePath2.prototype.buildCodeFrameError = function buildCodeFrameError(msg) {
        var Error2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : SyntaxError;
        return this.hub.file.buildCodeFrameError(this.node, msg, Error2);
      };
      NodePath2.prototype.traverse = function traverse5(visitor, state) {
        (0, _index2.default)(this.node, visitor, this.scope, state, this);
      };
      NodePath2.prototype.mark = function mark(type2, message) {
        this.hub.file.metadata.marked.push({
          type: type2,
          message,
          loc: this.node.loc
        });
      };
      NodePath2.prototype.set = function set(key, node) {
        t4.validate(this.node, key, node);
        this.node[key] = node;
      };
      NodePath2.prototype.getPathLocation = function getPathLocation() {
        var parts = [];
        var path2 = this;
        do {
          var key = path2.key;
          if (path2.inList)
            key = path2.listKey + "[" + key + "]";
          parts.unshift(key);
        } while (path2 = path2.parentPath);
        return parts.join(".");
      };
      NodePath2.prototype.debug = function debug(buildMessage) {
        if (!_debug.enabled)
          return;
        _debug(this.getPathLocation() + " " + this.type + ": " + buildMessage());
      };
      return NodePath2;
    }();
    exports2.default = NodePath;
    (0, _assign2.default)(NodePath.prototype, require_ancestry());
    (0, _assign2.default)(NodePath.prototype, require_inference());
    (0, _assign2.default)(NodePath.prototype, require_replacement());
    (0, _assign2.default)(NodePath.prototype, require_evaluation());
    (0, _assign2.default)(NodePath.prototype, require_conversion());
    (0, _assign2.default)(NodePath.prototype, require_introspection());
    (0, _assign2.default)(NodePath.prototype, require_context());
    (0, _assign2.default)(NodePath.prototype, require_removal());
    (0, _assign2.default)(NodePath.prototype, require_modification());
    (0, _assign2.default)(NodePath.prototype, require_family());
    (0, _assign2.default)(NodePath.prototype, require_comments());
    var _loop2 = function _loop22() {
      if (_isArray) {
        if (_i >= _iterator.length)
          return "break";
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done)
          return "break";
        _ref2 = _i.value;
      }
      var type2 = _ref2;
      var typeKey = "is" + type2;
      NodePath.prototype[typeKey] = function(opts) {
        return t4[typeKey](this.node, opts);
      };
      NodePath.prototype["assert" + type2] = function(opts) {
        if (!this[typeKey](opts)) {
          throw new TypeError("Expected node path of type " + type2);
        }
      };
    };
    for (_iterator = t4.TYPES, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
      _ret2 = _loop2();
      if (_ret2 === "break")
        break;
    }
    var _ref2;
    var _ret2;
    var _iterator;
    var _isArray;
    var _i;
    var _loop = function _loop3(type2) {
      if (type2[0] === "_")
        return "continue";
      if (t4.TYPES.indexOf(type2) < 0)
        t4.TYPES.push(type2);
      var virtualType = virtualTypes[type2];
      NodePath.prototype["is" + type2] = function(opts) {
        return virtualType.checkPath(this, opts);
      };
    };
    for (type in virtualTypes) {
      _ret = _loop(type);
      if (_ret === "continue")
        continue;
    }
    var _ret;
    var type;
    module2.exports = exports2["default"];
  }
});

// node_modules/babel-traverse/lib/hub.js
var require_hub = __commonJS({
  "node_modules/babel-traverse/lib/hub.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    var _classCallCheck2 = require_classCallCheck();
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var Hub = function Hub2(file, options) {
      (0, _classCallCheck3.default)(this, Hub2);
      this.file = file;
      this.options = options;
    };
    exports2.default = Hub;
    module2.exports = exports2["default"];
  }
});

// node_modules/babel-traverse/lib/context.js
var require_context2 = __commonJS({
  "node_modules/babel-traverse/lib/context.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    var _classCallCheck2 = require_classCallCheck();
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    var _path2 = require_path();
    var _path3 = _interopRequireDefault(_path2);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var testing = process.env.NODE_ENV === "test";
    var TraversalContext = function() {
      function TraversalContext2(scope, opts, state, parentPath) {
        (0, _classCallCheck3.default)(this, TraversalContext2);
        this.queue = null;
        this.parentPath = parentPath;
        this.scope = scope;
        this.state = state;
        this.opts = opts;
      }
      TraversalContext2.prototype.shouldVisit = function shouldVisit(node) {
        var opts = this.opts;
        if (opts.enter || opts.exit)
          return true;
        if (opts[node.type])
          return true;
        var keys = t4.VISITOR_KEYS[node.type];
        if (!keys || !keys.length)
          return false;
        for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var key = _ref;
          if (node[key])
            return true;
        }
        return false;
      };
      TraversalContext2.prototype.create = function create(node, obj, key, listKey) {
        return _path3.default.get({
          parentPath: this.parentPath,
          parent: node,
          container: obj,
          key,
          listKey
        });
      };
      TraversalContext2.prototype.maybeQueue = function maybeQueue(path2, notPriority) {
        if (this.trap) {
          throw new Error("Infinite cycle detected");
        }
        if (this.queue) {
          if (notPriority) {
            this.queue.push(path2);
          } else {
            this.priorityQueue.push(path2);
          }
        }
      };
      TraversalContext2.prototype.visitMultiple = function visitMultiple(container, parent, listKey) {
        if (container.length === 0)
          return false;
        var queue = [];
        for (var key = 0; key < container.length; key++) {
          var node = container[key];
          if (node && this.shouldVisit(node)) {
            queue.push(this.create(parent, container, key, listKey));
          }
        }
        return this.visitQueue(queue);
      };
      TraversalContext2.prototype.visitSingle = function visitSingle(node, key) {
        if (this.shouldVisit(node[key])) {
          return this.visitQueue([this.create(node, node, key)]);
        } else {
          return false;
        }
      };
      TraversalContext2.prototype.visitQueue = function visitQueue(queue) {
        this.queue = queue;
        this.priorityQueue = [];
        var visited = [];
        var stop = false;
        for (var _iterator2 = queue, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
          var _ref2;
          if (_isArray2) {
            if (_i2 >= _iterator2.length)
              break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done)
              break;
            _ref2 = _i2.value;
          }
          var path2 = _ref2;
          path2.resync();
          if (path2.contexts.length === 0 || path2.contexts[path2.contexts.length - 1] !== this) {
            path2.pushContext(this);
          }
          if (path2.key === null)
            continue;
          if (testing && queue.length >= 1e4) {
            this.trap = true;
          }
          if (visited.indexOf(path2.node) >= 0)
            continue;
          visited.push(path2.node);
          if (path2.visit()) {
            stop = true;
            break;
          }
          if (this.priorityQueue.length) {
            stop = this.visitQueue(this.priorityQueue);
            this.priorityQueue = [];
            this.queue = queue;
            if (stop)
              break;
          }
        }
        for (var _iterator3 = queue, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
          var _ref3;
          if (_isArray3) {
            if (_i3 >= _iterator3.length)
              break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done)
              break;
            _ref3 = _i3.value;
          }
          var _path = _ref3;
          _path.popContext();
        }
        this.queue = null;
        return stop;
      };
      TraversalContext2.prototype.visit = function visit(node, key) {
        var nodes = node[key];
        if (!nodes)
          return false;
        if (Array.isArray(nodes)) {
          return this.visitMultiple(nodes, node, key);
        } else {
          return this.visitSingle(node, key);
        }
      };
      return TraversalContext2;
    }();
    exports2.default = TraversalContext;
    module2.exports = exports2["default"];
  }
});

// node_modules/babel-traverse/lib/visitors.js
var require_visitors = __commonJS({
  "node_modules/babel-traverse/lib/visitors.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    var _typeof2 = require_typeof();
    var _typeof3 = _interopRequireDefault(_typeof2);
    var _keys = require_keys2();
    var _keys2 = _interopRequireDefault(_keys);
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    exports2.explode = explode;
    exports2.verify = verify;
    exports2.merge = merge;
    var _virtualTypes = require_virtual_types();
    var virtualTypes = _interopRequireWildcard(_virtualTypes);
    var _babelMessages = require_lib2();
    var messages = _interopRequireWildcard(_babelMessages);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    var _clone = require_clone();
    var _clone2 = _interopRequireDefault(_clone);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function explode(visitor) {
      if (visitor._exploded)
        return visitor;
      visitor._exploded = true;
      for (var nodeType in visitor) {
        if (shouldIgnoreKey(nodeType))
          continue;
        var parts = nodeType.split("|");
        if (parts.length === 1)
          continue;
        var fns = visitor[nodeType];
        delete visitor[nodeType];
        for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var part = _ref;
          visitor[part] = fns;
        }
      }
      verify(visitor);
      delete visitor.__esModule;
      ensureEntranceObjects(visitor);
      ensureCallbackArrays(visitor);
      for (var _iterator2 = (0, _keys2.default)(visitor), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2); ; ) {
        var _ref2;
        if (_isArray2) {
          if (_i2 >= _iterator2.length)
            break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done)
            break;
          _ref2 = _i2.value;
        }
        var _nodeType3 = _ref2;
        if (shouldIgnoreKey(_nodeType3))
          continue;
        var wrapper = virtualTypes[_nodeType3];
        if (!wrapper)
          continue;
        var _fns2 = visitor[_nodeType3];
        for (var type in _fns2) {
          _fns2[type] = wrapCheck(wrapper, _fns2[type]);
        }
        delete visitor[_nodeType3];
        if (wrapper.types) {
          for (var _iterator4 = wrapper.types, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4); ; ) {
            var _ref4;
            if (_isArray4) {
              if (_i4 >= _iterator4.length)
                break;
              _ref4 = _iterator4[_i4++];
            } else {
              _i4 = _iterator4.next();
              if (_i4.done)
                break;
              _ref4 = _i4.value;
            }
            var _type = _ref4;
            if (visitor[_type]) {
              mergePair(visitor[_type], _fns2);
            } else {
              visitor[_type] = _fns2;
            }
          }
        } else {
          mergePair(visitor, _fns2);
        }
      }
      for (var _nodeType in visitor) {
        if (shouldIgnoreKey(_nodeType))
          continue;
        var _fns = visitor[_nodeType];
        var aliases2 = t4.FLIPPED_ALIAS_KEYS[_nodeType];
        var deprecratedKey = t4.DEPRECATED_KEYS[_nodeType];
        if (deprecratedKey) {
          console.trace("Visitor defined for " + _nodeType + " but it has been renamed to " + deprecratedKey);
          aliases2 = [deprecratedKey];
        }
        if (!aliases2)
          continue;
        delete visitor[_nodeType];
        for (var _iterator3 = aliases2, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3); ; ) {
          var _ref3;
          if (_isArray3) {
            if (_i3 >= _iterator3.length)
              break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done)
              break;
            _ref3 = _i3.value;
          }
          var alias = _ref3;
          var existing = visitor[alias];
          if (existing) {
            mergePair(existing, _fns);
          } else {
            visitor[alias] = (0, _clone2.default)(_fns);
          }
        }
      }
      for (var _nodeType2 in visitor) {
        if (shouldIgnoreKey(_nodeType2))
          continue;
        ensureCallbackArrays(visitor[_nodeType2]);
      }
      return visitor;
    }
    function verify(visitor) {
      if (visitor._verified)
        return;
      if (typeof visitor === "function") {
        throw new Error(messages.get("traverseVerifyRootFunction"));
      }
      for (var nodeType in visitor) {
        if (nodeType === "enter" || nodeType === "exit") {
          validateVisitorMethods(nodeType, visitor[nodeType]);
        }
        if (shouldIgnoreKey(nodeType))
          continue;
        if (t4.TYPES.indexOf(nodeType) < 0) {
          throw new Error(messages.get("traverseVerifyNodeType", nodeType));
        }
        var visitors = visitor[nodeType];
        if ((typeof visitors === "undefined" ? "undefined" : (0, _typeof3.default)(visitors)) === "object") {
          for (var visitorKey in visitors) {
            if (visitorKey === "enter" || visitorKey === "exit") {
              validateVisitorMethods(nodeType + "." + visitorKey, visitors[visitorKey]);
            } else {
              throw new Error(messages.get("traverseVerifyVisitorProperty", nodeType, visitorKey));
            }
          }
        }
      }
      visitor._verified = true;
    }
    function validateVisitorMethods(path2, val) {
      var fns = [].concat(val);
      for (var _iterator5 = fns, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5); ; ) {
        var _ref5;
        if (_isArray5) {
          if (_i5 >= _iterator5.length)
            break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done)
            break;
          _ref5 = _i5.value;
        }
        var fn = _ref5;
        if (typeof fn !== "function") {
          throw new TypeError("Non-function found defined in " + path2 + " with type " + (typeof fn === "undefined" ? "undefined" : (0, _typeof3.default)(fn)));
        }
      }
    }
    function merge(visitors) {
      var states = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var wrapper = arguments[2];
      var rootVisitor = {};
      for (var i = 0; i < visitors.length; i++) {
        var visitor = visitors[i];
        var state = states[i];
        explode(visitor);
        for (var type in visitor) {
          var visitorType = visitor[type];
          if (state || wrapper) {
            visitorType = wrapWithStateOrWrapper(visitorType, state, wrapper);
          }
          var nodeVisitor = rootVisitor[type] = rootVisitor[type] || {};
          mergePair(nodeVisitor, visitorType);
        }
      }
      return rootVisitor;
    }
    function wrapWithStateOrWrapper(oldVisitor, state, wrapper) {
      var newVisitor = {};
      var _loop = function _loop2(key2) {
        var fns = oldVisitor[key2];
        if (!Array.isArray(fns))
          return "continue";
        fns = fns.map(function(fn) {
          var newFn = fn;
          if (state) {
            newFn = function newFn2(path2) {
              return fn.call(state, path2, state);
            };
          }
          if (wrapper) {
            newFn = wrapper(state.key, key2, newFn);
          }
          return newFn;
        });
        newVisitor[key2] = fns;
      };
      for (var key in oldVisitor) {
        var _ret = _loop(key);
        if (_ret === "continue")
          continue;
      }
      return newVisitor;
    }
    function ensureEntranceObjects(obj) {
      for (var key in obj) {
        if (shouldIgnoreKey(key))
          continue;
        var fns = obj[key];
        if (typeof fns === "function") {
          obj[key] = { enter: fns };
        }
      }
    }
    function ensureCallbackArrays(obj) {
      if (obj.enter && !Array.isArray(obj.enter))
        obj.enter = [obj.enter];
      if (obj.exit && !Array.isArray(obj.exit))
        obj.exit = [obj.exit];
    }
    function wrapCheck(wrapper, fn) {
      var newFn = function newFn2(path2) {
        if (wrapper.checkPath(path2)) {
          return fn.apply(this, arguments);
        }
      };
      newFn.toString = function() {
        return fn.toString();
      };
      return newFn;
    }
    function shouldIgnoreKey(key) {
      if (key[0] === "_")
        return true;
      if (key === "enter" || key === "exit" || key === "shouldSkip")
        return true;
      if (key === "blacklist" || key === "noScope" || key === "skipKeys")
        return true;
      return false;
    }
    function mergePair(dest, src) {
      for (var key in src) {
        dest[key] = [].concat(dest[key] || [], src[key]);
      }
    }
  }
});

// node_modules/babel-traverse/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/babel-traverse/lib/index.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    exports2.visitors = exports2.Hub = exports2.Scope = exports2.NodePath = void 0;
    var _getIterator2 = require_get_iterator2();
    var _getIterator3 = _interopRequireDefault(_getIterator2);
    var _path = require_path();
    Object.defineProperty(exports2, "NodePath", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_path).default;
      }
    });
    var _scope = require_scope();
    Object.defineProperty(exports2, "Scope", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_scope).default;
      }
    });
    var _hub = require_hub();
    Object.defineProperty(exports2, "Hub", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_hub).default;
      }
    });
    exports2.default = traverse5;
    var _context = require_context2();
    var _context2 = _interopRequireDefault(_context);
    var _visitors = require_visitors();
    var visitors = _interopRequireWildcard(_visitors);
    var _babelMessages = require_lib2();
    var messages = _interopRequireWildcard(_babelMessages);
    var _includes = require_includes();
    var _includes2 = _interopRequireDefault(_includes);
    var _babelTypes = require_lib();
    var t4 = _interopRequireWildcard(_babelTypes);
    var _cache = require_cache();
    var cache = _interopRequireWildcard(_cache);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2.visitors = visitors;
    function traverse5(parent, opts, scope, state, parentPath) {
      if (!parent)
        return;
      if (!opts)
        opts = {};
      if (!opts.noScope && !scope) {
        if (parent.type !== "Program" && parent.type !== "File") {
          throw new Error(messages.get("traverseNeedsParent", parent.type));
        }
      }
      visitors.explode(opts);
      traverse5.node(parent, opts, scope, state, parentPath);
    }
    traverse5.visitors = visitors;
    traverse5.verify = visitors.verify;
    traverse5.explode = visitors.explode;
    traverse5.NodePath = require_path();
    traverse5.Scope = require_scope();
    traverse5.Hub = require_hub();
    traverse5.cheap = function(node, enter) {
      return t4.traverseFast(node, enter);
    };
    traverse5.node = function(node, opts, scope, state, parentPath, skipKeys) {
      var keys = t4.VISITOR_KEYS[node.type];
      if (!keys)
        return;
      var context = new _context2.default(scope, opts, state, parentPath);
      for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator); ; ) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length)
            break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done)
            break;
          _ref = _i.value;
        }
        var key = _ref;
        if (skipKeys && skipKeys[key])
          continue;
        if (context.visit(node, key))
          return;
      }
    };
    traverse5.clearNode = function(node, opts) {
      t4.removeProperties(node, opts);
      cache.path.delete(node);
    };
    traverse5.removeProperties = function(tree, opts) {
      t4.traverseFast(tree, traverse5.clearNode, opts);
      return tree;
    };
    function hasBlacklistedType(path2, state) {
      if (path2.node.type === state.type) {
        state.has = true;
        path2.stop();
      }
    }
    traverse5.hasType = function(tree, scope, type, blacklistTypes) {
      if ((0, _includes2.default)(blacklistTypes, tree.type))
        return false;
      if (tree.type === type)
        return true;
      var state = {
        has: false,
        type
      };
      traverse5(tree, {
        blacklist: blacklistTypes,
        enter: hasBlacklistedType
      }, scope, state);
      return state.has;
    };
    traverse5.clearCache = function() {
      cache.clear();
    };
    traverse5.clearCache.clearPath = cache.clearPath;
    traverse5.clearCache.clearScope = cache.clearScope;
    traverse5.copyCache = function(source, destination) {
      if (cache.path.has(source)) {
        cache.path.set(destination, cache.path.get(source));
      }
    };
  }
});

// src/index.js
var src_exports = {};
__export(src_exports, {
  importValidationForVite: () => importValidationForVite,
  importValidationForWebpack: () => importValidationForWebpack,
  importValidationForWebpack2: () => importValidationForWebpack2
});
module.exports = __toCommonJS(src_exports);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_parser2 = require("@babel/parser");
var import_traverse3 = __toESM(require("@babel/traverse"), 1);
var t3 = __toESM(require("@babel/types"), 1);
var import_compiler_sfc = require("@vue/compiler-sfc");

// src/getExport.js
var import_parser = require("@babel/parser");
var import_traverse = __toESM(require("@babel/traverse"), 1);
var import_babel_traverse = __toESM(require_lib5(), 1);
var t = __toESM(require("@babel/types"), 1);
function getExport(originalCode) {
  const ast = (0, import_parser.parse)(originalCode, {
    sourceType: "module",
    plugins: ["jsx", "typescript"]
  });
  const exportsObject = {};
  const handleExport = (declaration) => {
    if (t.isVariableDeclaration(declaration)) {
      if ((declaration.declarations || []).length > 0) {
        declaration.declarations?.forEach((declarator2) => {
          if (t.isObjectExpression(declarator2.init)) {
            exportsObject[declarator2.id.name] = {};
            declarator2.init.properties.forEach((property) => {
              exportsObject[declarator2.id.name][property.key.name] = property.value.value;
            });
          } else {
            exportsObject[declarator2.id.name] = declarator2.init.type;
          }
        });
      } else {
        exportsObject[declarator.id.name] = declarator.init.value;
      }
    } else if (t.isClassDeclaration(declaration)) {
      exportsObject[declaration.id.name] = {};
      if (t.isClassBody(declaration.body)) {
        declaration.body.body.forEach((member) => {
          if (t.isClassMethod(member) || t.isClassProperty(member)) {
            exportsObject[declaration.id.name][member.key.name] = member.type;
          }
        });
      }
    } else if (t.isFunctionDeclaration(declaration)) {
      exportsObject[declaration.id.name] = declaration.type;
    } else if (t.isObjectExpression(declaration)) {
      exportsObject[declaration.id.name] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[declaration.id.name][member.key.name] = member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSInterfaceDeclaration(declaration)) {
      exportsObject[declaration.id.name] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[declaration.id.name][member.key.name] = member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSTypeAliasDeclaration(declaration)) {
      if (declaration.typeAnnotation.members) {
        exportsObject[declaration.id.name] = {};
        declaration.typeAnnotation.members.forEach((member) => {
          exportsObject[declaration.id.name][member.key.name] = member.typeAnnotation.type;
        });
      } else {
        exportsObject[declaration.id.name] = declaration.typeAnnotation.type;
      }
    } else if (t.isTSEnumDeclaration(declaration)) {
      exportsObject[declaration.id.name] = {};
      declaration.members.forEach((member) => {
        exportsObject[declaration.id.name][member.id.name] = member.initializer.value;
      });
    } else if (t.isVariableDeclarator(declaration)) {
      if (t.isObjectExpression(declaration.init)) {
        exportsObject[declaration.id.name] = {};
        declaration.init.properties.forEach((property) => {
          exportsObject[declaration.id.name][property.key.name] = property.value.value;
        });
      } else {
        exportsObject[declaration.id.name] = declaration.init.type;
      }
    }
  };
  const handleExportDefault = (declaration, defaultKey = "export default") => {
    if (t.isVariableDeclaration(declaration)) {
      if ((declaration.declarations || []).length > 0) {
        declaration.declarations?.forEach((declarator2) => {
          if (t.isObjectExpression(declarator2.init)) {
            exportsObject[defaultKey] = {};
            declarator2.init.properties.forEach((property) => {
              exportsObject[defaultKey][property.key.name] = property.value.value;
            });
          } else {
            exportsObject[defaultKey] = declarator2.init.type;
          }
        });
      } else {
        exportsObject[defaultKey] = declarator.init.value;
      }
    } else if (t.isClassDeclaration(declaration)) {
      exportsObject[defaultKey] = {};
      if (t.isClassBody(declaration.body)) {
        declaration.body.body.forEach((member) => {
          if (t.isClassMethod(member) || t.isClassProperty(member)) {
            exportsObject[defaultKey][member.key.name] = member.type;
          }
        });
      }
    } else if (t.isFunctionDeclaration(declaration)) {
      exportsObject[defaultKey] = declaration.type;
    } else if (t.isObjectExpression(declaration)) {
      exportsObject[defaultKey] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[defaultKey][member.key.name] = member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSInterfaceDeclaration(declaration)) {
      exportsObject[defaultKey] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[defaultKey][member.key.name] = member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSTypeAliasDeclaration(declaration)) {
      if (declaration.typeAnnotation.members) {
        exportsObject[defaultKey] = {};
        declaration.typeAnnotation.members.forEach((member) => {
          exportsObject[defaultKey][member.key.name] = member.typeAnnotation.type;
        });
      } else {
        exportsObject[defaultKey] = declaration.typeAnnotation.type;
      }
    } else if (t.isTSEnumDeclaration(declaration)) {
      exportsObject[defaultKey] = {};
      declaration.members.forEach((member) => {
        exportsObject[defaultKey][member.id.name] = member.initializer.value;
      });
    } else if (t.isVariableDeclarator(declaration)) {
      if (t.isObjectExpression(declaration.init)) {
        exportsObject[defaultKey] = {};
        declaration.init.properties.forEach((property) => {
          exportsObject[defaultKey][property.key.name] = property.value.value;
        });
      } else {
        exportsObject[defaultKey] = declaration.init.type;
      }
    }
  };
  import_babel_traverse.default.default(ast, {
    ExportNamedDeclaration(path2) {
      if (path2.node.declaration) {
        const declaration = path2.node.declaration;
        handleExport(declaration);
      } else if (t.isExportNamedDeclaration(path2.node)) {
        const nameList = path2.node.specifiers.map((specifier) => {
          return specifier.exported.name;
        });
        const parent = path2.parentPath.node;
        parent?.body.forEach((node) => {
          if (node.id?.name) {
            if (nameList.includes(node?.id?.name)) {
              handleExport(node);
            }
          } else if (t.isVariableDeclaration(node)) {
            if (node.declarations?.length > 0) {
              node.declarations.forEach((declarator2) => {
                if (nameList.includes(declarator2?.id?.name)) {
                  handleExport(declarator2);
                }
              });
            }
          }
        });
      }
    },
    ExportDefaultDeclaration(path2) {
      exportsObject["export default"] = {};
      const declaration = path2.node.declaration;
      if (t.isIdentifier(declaration)) {
        const parent = path2.parentPath.node;
        parent?.body.forEach((node) => {
          if (node.id?.name) {
            if (declaration.name === node?.id?.name) {
              handleExportDefault(node);
            }
          } else if (t.isVariableDeclaration(node)) {
            if (node.declarations?.length > 0) {
              node.declarations.forEach((declarator2) => {
                if (declaration.name === declarator2?.id?.name) {
                  handleExportDefault(declarator2);
                }
              });
            }
          }
        });
      } else if (t.isObjectExpression(declaration)) {
        declaration.properties.forEach((property) => {
          exportsObject["export default"][property.key.name] = property.value.type;
        });
      }
    }
  });
  return exportsObject;
}

// src/getCitation.js
var import_traverse2 = __toESM(require("@babel/traverse"), 1);
var import_babel_traverse2 = __toESM(require_lib5(), 1);
var t2 = __toESM(require("@babel/types"), 1);
function getCitation(filePath, ast, targetVar) {
  function isReference(path2) {
    return !(t2.isVariableDeclarator(path2.parent) || t2.isFunctionDeclaration(path2.parent));
  }
  function getContext(path2) {
    const parent = path2.parentPath;
    if (parent.isMemberExpression()) {
      return `${path2.node.name}${parent.node.property.name ? "." + parent.node.property.name : ""}`;
    }
    return path2.node.name;
  }
  const references = [];
  try {
    import_babel_traverse2.default.default(ast, {
      Identifier(path2) {
        if (path2.node.name === targetVar && isReference(path2)) {
          const parentNode = path2.parentPath.node;
          if (!parentNode.computed) {
            references.push({
              filePath,
              line: path2.node.loc?.start.line,
              column: path2.node.loc?.start.column,
              context: getContext(path2)
            });
          }
        }
      }
    });
  } catch (error) {
    console.error("\u89E3\u6790\u4EE3\u7801\u51FA\u9519:", error);
  }
  return references;
}

// src/index.js
var exportedAllList = {};
var errorList = /* @__PURE__ */ new Set();
var aliases = null;
function getExportedMethods(code, fullPath) {
  if (fullPath in exportedAllList === false) {
    exportedAllList[fullPath] = getExport(code);
  }
}
function resolveImportPath(importPath, sourceFile) {
  let basePath = "";
  if (import_path.default.isAbsolute(importPath)) {
    basePath = importPath;
  } else {
    if (importPath.startsWith(".")) {
      basePath = import_path.default.resolve(import_path.default.dirname(sourceFile), importPath);
    } else if (aliases) {
      for (const [alias, aliasPath] of Object.entries(aliases)) {
        if (importPath.startsWith(alias)) {
          const remainingPath = importPath.slice(alias.length + 1);
          basePath = import_path.default.resolve(aliasPath, remainingPath);
          break;
        }
      }
    }
  }
  return basePath;
}
function checkExists(resolvedPath, citations, defaultBol = false) {
  const obj = exportedAllList[resolvedPath];
  if (defaultBol && !("export default" in obj)) {
    errorList.add(
      `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u9ED8\u8BA4\u5BFC\u51FA: "${item.context}" at ${item.filePath}:${item.line}:${item.column}`
    );
  }
  citations.forEach((item2) => {
    if (defaultBol) {
      const value = item2.context.split(".")[1];
      if (value && value in obj["export default"] === false) {
        errorList.add(
          `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u53EF\u4F7F\u7528\u7684\u5C5E\u6027: "${item2.context}" at ${item2.filePath}:${item2.line}:${item2.column}`
        );
      }
    } else {
      const key = item2.context.split(".")[0];
      const value = item2.context.split(".")[1];
      if (key in obj === false) {
        errorList.add(
          `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u5BFC\u51FA: "${item2.context}" at ${item2.filePath}:${item2.line}:${item2.column}`
        );
      } else if (value && value in obj[key] === false) {
        errorList.add(
          `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u53EF\u4F7F\u7528\u7684\u5C5E\u6027: "${item2.context}" at ${item2.filePath}:${item2.line}:${item2.column}`
        );
      }
    }
  });
}
function hasApiImport(filePath, code, API_PATH_PATTERN) {
  const ext = import_path.default.extname(filePath);
  let ast;
  if (ext === ".vue") {
    try {
      const { descriptor } = (0, import_compiler_sfc.parse)(code);
      if (!descriptor.script && !descriptor.scriptSetup)
        return false;
      const scriptContent = descriptor.script?.content || descriptor.scriptSetup?.content || "";
      ast = (0, import_parser2.parse)(scriptContent, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  } else {
    try {
      ast = (0, import_parser2.parse)(code, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  }
  import_traverse3.default.default(ast, {
    // 静态导入: import ... from 'xxx'
    ImportDeclaration(path2) {
      const importPath = path2.node.source.value;
      let resolvedPath = "";
      const basePath = resolveImportPath(importPath, filePath);
      if (API_PATH_PATTERN.test(basePath)) {
        const extensions = [
          ".js",
          ".ts",
          ".tsx",
          ".jsx",
          "/index.js",
          "/index.ts"
        ];
        if (import_fs.default.existsSync(basePath)) {
          resolvedPath = basePath;
        }
        for (const ext2 of extensions) {
          const fullPath = basePath + ext2;
          if (import_fs.default.existsSync(fullPath)) {
            resolvedPath = fullPath;
          }
        }
        if (resolvedPath === "") {
          if (path2.node.loc) {
            const { line, column } = path2.node.loc.start;
            errorList.add(
              `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u5BFC\u51FA: "${importPath}" at ${filePath}:${line}:${column}`
            );
          } else {
            errorList.add(`\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u5BFC\u51FA: "${importPath}"`);
          }
        } else {
          const code2 = import_fs.default.readFileSync(resolvedPath, "utf-8");
          getExportedMethods(code2, resolvedPath);
          path2.node.specifiers.forEach((spec) => {
            if (t3.isImportDefaultSpecifier(spec)) {
              const citations = getCitation(filePath, ast, spec.local.name);
              checkExists(resolvedPath, citations, true);
            }
            if (t3.isImportSpecifier(spec)) {
              const citations = getCitation(filePath, ast, spec.imported.name);
              checkExists(resolvedPath, citations);
            }
          });
        }
      }
    }
  });
}
function importValidationForVite(options) {
  return {
    name: "vite-plugin-import-validation",
    enforce: "pre",
    config(config) {
      aliases = config.resolve.alias;
    },
    async transform(code, id) {
      if (options.exclude && options.exclude.test(id)) {
        return null;
      }
      const ext = import_path.default.extname(id);
      if ([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(ext)) {
        const newSpecify = options.specify.map((item2) => {
          return import_path.default.join(process.cwd(), item2);
        });
        const API_PATH_PATTERN = new RegExp(`^(${newSpecify.join("|")})/`);
        hasApiImport(id, code, API_PATH_PATTERN);
        if (errorList.size > 0) {
          Array.from(errorList).forEach((error) => {
            console.error("\n \u53D1\u73B0\u5BFC\u5165\u9A8C\u8BC1\u9519\u8BEF \n");
            console.error(error);
          });
          process.exit();
        }
      }
      return null;
    }
  };
}
var importValidationForWebpack = class {
  constructor(options = {}) {
    this.options = {
      specify: ["api", "enum"],
      skipDefault: false,
      exclude: /node_modules/,
      ...options
    };
  }
  apply(compiler) {
    const webpackConfig = compiler.options;
    aliases = webpackConfig?.resolve?.alias || {};
    compiler.hooks.compilation.tap(
      "WebpackImportValidationPlugin",
      (compilation) => {
        compilation.hooks.succeedModule.tap(
          "WebpackImportValidationPlugin",
          (module2) => {
            if (this.options.exclude && this.options.exclude.test(module2.resource)) {
              return;
            }
            const ext = import_path.default.extname(module2.resource);
            if ([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(
              ext
            )) {
              const newSpecify = this.options.specify.map((item2) => {
                return import_path.default.join(process.cwd(), item2);
              });
              const API_PATH_PATTERN = new RegExp(
                `^(${newSpecify.join("|")})/`
              );
              const source = module2.originalSource();
              if (!source)
                return;
              const code = source.source().toString();
              hasApiImport(module2.resource, code, API_PATH_PATTERN);
              if (errorList.size > 0) {
                console.error("\n \u53D1\u73B0\u5BFC\u5165\u9A8C\u8BC1\u9519\u8BEF \n");
                Array.from(errorList).forEach((error) => {
                  console.error(error);
                });
                console.error("\n \u8BF7\u4FEE\u590D\u4EE5\u4E0A\u9519\u8BEF\u540E\u91CD\u8BD5 \n");
                process.exit();
              }
            }
          }
        );
      }
    );
  }
};
var importValidationForWebpack2 = class {
  constructor(options = {}) {
    this.options = {
      specify: ["api", "enum"],
      skipDefault: false,
      exclude: /node_modules/,
      ...options
    };
  }
  apply(compiler) {
    const webpackConfig = compiler.options;
    aliases = webpackConfig.resolve.alias || {};
    compiler.plugin("compilation", (compilation) => {
      compilation.plugin("normal-module-loader", (loaderContext, module2) => {
        if (this.options.exclude && this.options.exclude.test(module2.resource) || !module2.resource) {
          return;
        }
        const ext = import_path.default.extname(module2.resource);
        if ([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(ext)) {
          const newSpecify = this.options.specify.map((item2) => {
            return import_path.default.join(process.cwd(), item2);
          });
          const API_PATH_PATTERN = new RegExp(`^(${newSpecify.join("|")})/`);
          loaderContext.fs.readFile(module2.resource, (err, data) => {
            if (err)
              return console.error(`\u8BFB\u53D6\u5931\u8D25: ${module2.resource}`, err);
            const code = data?.toString();
            if (code) {
              hasApiImport(module2.resource, code, API_PATH_PATTERN);
              if (errorList.size > 0) {
                console.error("\n\u53D1\u73B0\u5BFC\u5165\u9A8C\u8BC1\u9519\u8BEF:");
                errorList.forEach((error) => console.error(error));
                process.exit(1);
              }
            }
          });
        }
      });
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  importValidationForVite,
  importValidationForWebpack,
  importValidationForWebpack2
});
/*! Bundled license information:

babylon/lib/index.js:
  (*! https://mths.be/fromcodepoint v0.2.1 by @mathias *)
*/
