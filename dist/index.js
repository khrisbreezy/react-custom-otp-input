import e,{useState as r,useRef as t,useEffect as n}from"react";var o=function(){return o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},o.apply(this,arguments)};function a(e,r,t){if(t||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}"function"==typeof SuppressedError&&SuppressedError;var i,c={exports:{}},s={};var u,l,f={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function p(){return u||(u=1,"production"!==process.env.NODE_ENV&&function(){var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),m=Symbol.iterator;var g=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=g.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(r+="%s",t=t.concat([o]));var a=t.map((function(e){return String(e)}));a.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,a)}("error",e,t)}var b;function _(e){return e.displayName||"Context"}function k(e){if(null==e)return null;if("number"==typeof e.tag&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case l:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return _(e)+".Consumer";case c:return _(e._context)+".Provider";case u:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:k(e.type)||"Memo";case d:var t=e,f=t._payload,v=t._init;try{return k(v(f))}catch(e){return null}}return null}b=Symbol.for("react.module.reference");var w,j,S,O,R,E,x,P=Object.assign,T=0;function $(){}$.__reactDisabledLog=!0;var N,C=g.ReactCurrentDispatcher;function D(e,r,t){if(void 0===N)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||""}return"\n"+N+e}var F,I=!1,A="function"==typeof WeakMap?WeakMap:Map;function L(e,r){if(!e||I)return"";var t,n=F.get(e);if(void 0!==n)return n;I=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=C.current,C.current=null,function(){if(0===T){w=console.log,j=console.info,S=console.warn,O=console.error,R=console.group,E=console.groupCollapsed,x=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}T++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(r){if(r&&t&&"string"==typeof r.stack){for(var c=r.stack.split("\n"),s=t.stack.split("\n"),u=c.length-1,l=s.length-1;u>=1&&l>=0&&c[u]!==s[l];)l--;for(;u>=1&&l>=0;u--,l--)if(c[u]!==s[l]){if(1!==u||1!==l)do{if(u--,--l<0||c[u]!==s[l]){var f="\n"+c[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&F.set(e,f),f}}while(u>=1&&l>=0);break}}}finally{I=!1,C.current=o,function(){if(0==--T){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:P({},e,{value:w}),info:P({},e,{value:j}),warn:P({},e,{value:S}),error:P({},e,{value:O}),group:P({},e,{value:R}),groupCollapsed:P({},e,{value:E}),groupEnd:P({},e,{value:x})})}T<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?D(p):"";return"function"==typeof e&&F.set(e,y),y}function W(e,r,t){if(null==e)return"";if("function"==typeof e)return L(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return D(e);switch(e){case l:return D("Suspense");case p:return D("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return L(e.render,!1);case y:return W(e.type,r,t);case d:var o=e,a=o._payload,i=o._init;try{return W(i(a),r,t)}catch(e){}}return""}F=new A;var U=Object.prototype.hasOwnProperty,z={},M=g.ReactDebugCurrentFrame;function Y(e){if(e){var r=e._owner,t=W(e.type,e._source,r?r.type:null);M.setExtraStackFrame(t)}else M.setExtraStackFrame(null)}var B=Array.isArray;function K(e){return B(e)}function V(e){return""+e}function J(e){if(function(e){try{return V(e),!1}catch(e){return!0}}(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),V(e)}var X,q,H,G=g.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};H={};function Z(e,r,n,o,a){var i,c={},s=null,u=null;for(i in void 0!==n&&(J(n),s=""+n),function(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(J(r.key),s=""+r.key),function(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(u=r.ref,function(e,r){if("string"==typeof e.ref&&G.current&&r&&G.current.stateNode!==r){var t=k(G.current.type);H[t]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k(G.current.type),e.ref),H[t]=!0)}}(r,a)),r)U.call(r,i)&&!Q.hasOwnProperty(i)&&(c[i]=r[i]);if(e&&e.defaultProps){var l=e.defaultProps;for(i in l)void 0===c[i]&&(c[i]=l[i])}if(s||u){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;s&&function(e,r){var t=function(){X||(X=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(c,f),u&&function(e,r){var t=function(){q||(q=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(c,f)}return function(e,r,n,o,a,i,c){var s={$$typeof:t,type:e,key:r,ref:n,props:c,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s}(e,s,u,a,o,G.current,c)}var ee,re=g.ReactCurrentOwner,te=g.ReactDebugCurrentFrame;function ne(e){if(e){var r=e._owner,t=W(e.type,e._source,r?r.type:null);te.setExtraStackFrame(t)}else te.setExtraStackFrame(null)}function oe(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function ae(){if(re.current){var e=k(re.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ee=!1;var ie={};function ce(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=ae();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ie[t]){ie[t]=!0;var n="";e&&e._owner&&e._owner!==re.current&&(n=" It was passed a child from "+k(e._owner.type)+"."),ne(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),ne(null)}}}function se(e,r){if("object"==typeof e)if(K(e))for(var t=0;t<e.length;t++){var n=e[t];oe(n)&&ce(n,r)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=m&&e[m]||e["@@iterator"];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)oe(a.value)&&ce(a.value,r)}}function ue(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==u&&t.$$typeof!==y)return;r=t.propTypes}if(r){var n=k(t);!function(e,r,t,n,o){var a=Function.call.bind(U);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}c=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(Y(o),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof c),Y(null)),c instanceof Error&&!(c.message in z)&&(z[c.message]=!0,Y(o),h("Failed %s type: %s",t,c.message),Y(null))}}(r,e.props,"prop",n,e)}else if(void 0!==t.PropTypes&&!ee){ee=!0,h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",k(t)||"Unknown")}"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var le={};function fe(e,r,n,f,m,g){var _=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===a||e===l||e===p||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===c||e.$$typeof===s||e.$$typeof===u||e.$$typeof===b||void 0!==e.getModuleId)}(e);if(!_){var w="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j;w+=ae(),null===e?j="null":K(e)?j="array":void 0!==e&&e.$$typeof===t?(j="<"+(k(e.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):j=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",j,w)}var S=Z(e,r,n,m,g);if(null==S)return S;if(_){var O=r.children;if(void 0!==O)if(f)if(K(O)){for(var R=0;R<O.length;R++)se(O[R],e);Object.freeze&&Object.freeze(O)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else se(O,e)}if(U.call(r,"key")){var E=k(e),x=Object.keys(r).filter((function(e){return"key"!==e})),P=x.length>0?"{key: someKey, "+x.join(": ..., ")+": ...}":"{key: someKey}";if(!le[E+P])h('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',P,E,x.length>0?"{"+x.join(": ..., ")+": ...}":"{}",E),le[E+P]=!0}return e===o?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){ne(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ne(null);break}}null!==e.ref&&(ne(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),ne(null))}(S):ue(S),S}var pe=function(e,r,t){return fe(e,r,t,!1)},ye=function(e,r,t){return fe(e,r,t,!0)};f.Fragment=o,f.jsx=pe,f.jsxs=ye}()),f}var y=(l||(l=1,"production"===process.env.NODE_ENV?c.exports=function(){if(i)return s;i=1;var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var i,s={},u=null,l=null;for(i in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,i)&&!c.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===s[i]&&(s[i]=r[i]);return{$$typeof:t,type:e,key:u,ref:l,props:s,_owner:a.current}}return s.Fragment=n,s.jsx=u,s.jsxs=u,s}():c.exports=p()),c.exports),d=function(e){var i=e.length,c=void 0===i?6:i,s=e.onChangeOtp,u=e.secure,l=void 0!==u&&u,f=e.className,p=e.width,d=e.height,v=e.size,m=e.styles,g=r(new Array(c).fill("")),h=g[0],b=g[1],_=r(new Array(c).fill("")),k=_[0],w=_[1],j=t([]);n((function(){j.current[0]&&j.current[0].focus()}),[]);var S=function(e){var r;e.preventDefault();var t=e.clipboardData.getData("Text").slice(0,c);if(/^\d+$/.test(t)&&t.length===c){var n=t.split("");if(b(n),l){var o=n.map((function(){return"•"}));w(o)}else w(n);n.forEach((function(e,r){j.current[r]&&(j.current[r].value=l?"•":e)})),s(t);var a=t.length-1;j.current[a]&&(null===(r=j.current[a])||void 0===r||r.focus())}};return y.jsx("div",{className:"otpinput",style:{display:"flex",justifyContent:"space-between",width:"100%",margin:"auto"},children:h.map((function(e,r){return y.jsx("input",{className:f,ref:function(e){return j.current[r]=e},type:"tel",inputMode:"numeric",pattern:"\\d*",name:"otp",maxLength:1,value:k[r],onChange:function(e){return function(e,r){var t=e.value.trim();if(!isNaN(e.value)){var n,o=a([],h,!0);o[r]=e.value,b(o),l?((n=a([],k,!0))[r]="•",w(n)):((n=a([],k,!0))[r]=t,w(n)),t&&j.current[r+1]&&j.current[r+1].focus(),s(o.join(""))}}(e.target,r)},onKeyDown:function(e){return function(e,r){if("Backspace"===e.key){var t=a([],h,!0),n=a([],k,!0);t[r]="",n[r]="",b(t),w(n),r>0&&!t[r]&&j.current[r-1].focus(),s(t.join(""))}}(e,r)},onPaste:0===r?S:void 0,style:o(o({},m),{textAlign:"center",width:p||60,height:d||60,fontSize:v||25,outline:"none",borderRadius:10,border:"1px solid #e3e1e7"})},r)}))})};export{d as default};
//# sourceMappingURL=index.js.map
