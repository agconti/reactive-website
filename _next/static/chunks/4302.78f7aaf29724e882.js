"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4302],{14302:function(e,t,n){n.d(t,{i:function(){return a}});var r=n(25525),i=n(74084),o=n(45050),u=n(68035);function passthrough(e,t){return t?t(e):i.y.of()}function toLink(e){return"function"==typeof e?new a(e):e}function isTerminating(e){return e.request.length<=1}var a=function(){function ApolloLink(e){e&&(this.request=e)}return ApolloLink.empty=function(){return new ApolloLink(function(){return i.y.of()})},ApolloLink.from=function(e){return 0===e.length?ApolloLink.empty():e.map(toLink).reduce(function(e,t){return e.concat(t)})},ApolloLink.split=function(e,t,n){var r=toLink(t),o=toLink(n||new ApolloLink(passthrough));return Object.assign(new ApolloLink(isTerminating(r)&&isTerminating(o)?function(t){return e(t)?r.request(t)||i.y.of():o.request(t)||i.y.of()}:function(t,n){return e(t)?r.request(t,n)||i.y.of():o.request(t,n)||i.y.of()}),{left:r,right:o})},ApolloLink.execute=function(e,t){var n,a,s,c;return e.request((s=t.context,(a={variables:(n=function(e){for(var t=["query","operationName","variables","extensions","context"],n=0,i=Object.keys(e);n<i.length;n++){var o=i[n];if(0>t.indexOf(o))throw(0,r._K)(43,o)}return e}(t)).variables||{},extensions:n.extensions||{},operationName:n.operationName,query:n.query}).operationName||(a.operationName="string"!=typeof a.query?(0,u.rY)(a.query)||void 0:""),c=(0,o.pi)({},s),Object.defineProperty(a,"setContext",{enumerable:!1,value:function(e){c="function"==typeof e?(0,o.pi)((0,o.pi)({},c),e(c)):(0,o.pi)((0,o.pi)({},c),e)}}),Object.defineProperty(a,"getContext",{enumerable:!1,value:function(){return(0,o.pi)({},c)}}),a))||i.y.of()},ApolloLink.concat=function(e,t){var n=toLink(e);if(isTerminating(n))return!1!==globalThis.__DEV__&&r.kG.warn(35,n),n;var o=toLink(t);return Object.assign(new ApolloLink(isTerminating(o)?function(e){return n.request(e,function(e){return o.request(e)||i.y.of()})||i.y.of()}:function(e,t){return n.request(e,function(e){return o.request(e,t)||i.y.of()})||i.y.of()}),{left:n,right:o})},ApolloLink.prototype.split=function(e,t,n){return this.concat(ApolloLink.split(e,t,n||new ApolloLink(passthrough)))},ApolloLink.prototype.concat=function(e){return ApolloLink.concat(this,e)},ApolloLink.prototype.request=function(e,t){throw(0,r._K)(36)},ApolloLink.prototype.onError=function(e,t){if(t&&t.error)return t.error(e),!1;throw e},ApolloLink.prototype.setOnError=function(e){return this.onError=e,this},ApolloLink}()},73176:function(e,t,n){n.d(t,{L:function(){return AutoCleanedStrongCache},s:function(){return AutoCleanedWeakCache}});var r=n(17521),i=n(91160),o=new WeakSet;function schedule(e){o.has(e)||(o.add(e),setTimeout(function(){e.clean(),o.delete(e)},100))}var AutoCleanedWeakCache=function(e,t){var n=new r.k(e,t);return n.set=function(e,t){return schedule(this),r.k.prototype.set.call(this,e,t)},n},AutoCleanedStrongCache=function(e,t){var n=new i.e(e,t);return n.set=function(e,t){return schedule(this),i.e.prototype.set.call(this,e,t)},n}},32619:function(e,t,n){n.d(t,{Kb:function(){return s},q4:function(){return a},su:function(){return u},zP:function(){return registerGlobalCache}});var r=n(45050),i=n(25182),o={};function registerGlobalCache(e,t){o[e]=t}var u=!1!==globalThis.__DEV__?function(){var e,t,n,u,a;if(!(!1!==globalThis.__DEV__))throw Error("only supported in development mode");return{limits:Object.fromEntries(Object.entries({parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4}).map(function(e){var t=e[0],n=e[1];return[t,i.Q[t]||n]})),sizes:(0,r.pi)({print:null===(e=o.print)||void 0===e?void 0:e.call(o),parser:null===(t=o.parser)||void 0===t?void 0:t.call(o),canonicalStringify:null===(n=o.canonicalStringify)||void 0===n?void 0:n.call(o),links:function linkInfo(e){var t;return e?(0,r.ev)((0,r.ev)([null===(t=null==e?void 0:e.getMemoryInternals)||void 0===t?void 0:t.call(e)],linkInfo(null==e?void 0:e.left),!0),linkInfo(null==e?void 0:e.right),!0).filter(isDefined):[]}(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:transformInfo(this.queryManager.documentTransform)}},null===(a=(u=this.cache).getMemoryInternals)||void 0===a?void 0:a.call(u))}}:void 0,a=!1!==globalThis.__DEV__?function(){var e=this.config.fragments;return(0,r.pi)((0,r.pi)({},_getApolloCacheMemoryInternals.apply(this)),{addTypenameDocumentTransform:transformInfo(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:getWrapperInformation(this.storeReader.executeSelectionSet),executeSubSelectedArray:getWrapperInformation(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:getWrapperInformation(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:getWrapperInformation(null==e?void 0:e.findFragmentSpreads),lookup:getWrapperInformation(null==e?void 0:e.lookup),transform:getWrapperInformation(null==e?void 0:e.transform)}})}:void 0,s=!1!==globalThis.__DEV__?_getApolloCacheMemoryInternals:void 0;function _getApolloCacheMemoryInternals(){return{cache:{fragmentQueryDocuments:getWrapperInformation(this.getFragmentDoc)}}}function getWrapperInformation(e){return e&&"dirtyKey"in e?e.size:void 0}function isDefined(e){return null!=e}function transformInfo(e){return(function recurseTransformInfo(e){return e?(0,r.ev)((0,r.ev)([getWrapperInformation(null==e?void 0:e.performWork)],recurseTransformInfo(null==e?void 0:e.left),!0),recurseTransformInfo(null==e?void 0:e.right),!0).filter(isDefined):[]})(e).map(function(e){return{cache:e}})}},25182:function(e,t,n){n.d(t,{Q:function(){return u}});var r=n(45050),i=n(25525),o=Symbol.for("apollo.cacheSize"),u=(0,r.pi)({},i.CO[o])},53615:function(e,t,n){n.d(t,{B:function(){return a}});var r,i=n(73176),o=n(25182),u=n(32619),a=Object.assign(function(e){return JSON.stringify(e,stableObjectReplacer)},{reset:function(){r=new i.L(o.Q.canonicalStringify||1e3)}});function stableObjectReplacer(e,t){if(t&&"object"==typeof t){var n=Object.getPrototypeOf(t);if(n===Object.prototype||null===n){var i=Object.keys(t);if(i.every(everyKeyInOrder))return t;var o=JSON.stringify(i),u=r.get(o);if(!u){i.sort();var a=JSON.stringify(i);u=r.get(a)||i,r.set(o,u),r.set(a,u)}var s=Object.create(n);return u.forEach(function(e){s[e]=t[e]}),s}}return t}function everyKeyInOrder(e,t,n){return 0===t||n[t-1]<=e}!1!==globalThis.__DEV__&&(0,u.zP)("canonicalStringify",function(){return r.size}),a.reset()},88464:function(e,t,n){n.d(t,{s:function(){return isNonNullObject}});function isNonNullObject(e){return null!==e&&"object"==typeof e}},50741:function(e,t,n){n.d(t,{F:function(){return createFragmentMap},Yk:function(){return getFragmentQueryDocument},hi:function(){return getFragmentFromSelection}});var r=n(45050),i=n(25525);function getFragmentQueryDocument(e,t){var n=t,o=[];return e.definitions.forEach(function(e){if("OperationDefinition"===e.kind)throw(0,i._K)(71,e.operation,e.name?" named '".concat(e.name.value,"'"):"");"FragmentDefinition"===e.kind&&o.push(e)}),void 0===n&&((0,i.kG)(1===o.length,72,o.length),n=o[0].name.value),(0,r.pi)((0,r.pi)({},e),{definitions:(0,r.ev)([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}}],e.definitions,!0)})}function createFragmentMap(e){void 0===e&&(e=[]);var t={};return e.forEach(function(e){t[e.name.value]=e}),t}function getFragmentFromSelection(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":var n=e.name.value;if("function"==typeof t)return t(n);var r=t&&t[n];return(0,i.kG)(r,73,n),r||null;default:return null}}},68035:function(e,t,n){n.d(t,{$H:function(){return getOperationDefinition},A$:function(){return checkDocument},O4:function(){return getDefaultValues},iW:function(){return getQueryDefinition},kU:function(){return getFragmentDefinitions},p$:function(){return getMainDefinition},pD:function(){return getFragmentDefinition},rY:function(){return getOperationName}});var r=n(25525),i=n(21739);function checkDocument(e){(0,r.kG)(e&&"Document"===e.kind,74);var t=e.definitions.filter(function(e){return"FragmentDefinition"!==e.kind}).map(function(e){if("OperationDefinition"!==e.kind)throw(0,r._K)(75,e.kind);return e});return(0,r.kG)(t.length<=1,76,t.length),e}function getOperationDefinition(e){return checkDocument(e),e.definitions.filter(function(e){return"OperationDefinition"===e.kind})[0]}function getOperationName(e){return e.definitions.filter(function(e){return"OperationDefinition"===e.kind&&!!e.name}).map(function(e){return e.name.value})[0]||null}function getFragmentDefinitions(e){return e.definitions.filter(function(e){return"FragmentDefinition"===e.kind})}function getQueryDefinition(e){var t=getOperationDefinition(e);return(0,r.kG)(t&&"query"===t.operation,77),t}function getFragmentDefinition(e){(0,r.kG)("Document"===e.kind,78),(0,r.kG)(e.definitions.length<=1,79);var t=e.definitions[0];return(0,r.kG)("FragmentDefinition"===t.kind,80),t}function getMainDefinition(e){checkDocument(e);for(var t,n=0,i=e.definitions;n<i.length;n++){var o=i[n];if("OperationDefinition"===o.kind){var u=o.operation;if("query"===u||"mutation"===u||"subscription"===u)return o}"FragmentDefinition"!==o.kind||t||(t=o)}if(t)return t;throw(0,r._K)(81)}function getDefaultValues(e){var t=Object.create(null),n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(function(e){e.defaultValue&&(0,i.vb)(t,e.variable.name,e.defaultValue)}),t}},21739:function(e,t,n){n.d(t,{Ao:function(){return isInlineFragment},JW:function(){return isDocumentNode},My:function(){return isField},NC:function(){return argumentsObjectFromField},PT:function(){return c},Yk:function(){return isReference},kQ:function(){return makeReference},qw:function(){return function getTypenameFromResult(e,t,n){for(var r,i=0,u=t.selections;i<u.length;i++){var a=u[i];if(isField(a)){if("__typename"===a.name.value)return e[resultKeyNameFromField(a)]}else r?r.push(a):r=[a]}if("string"==typeof e.__typename)return e.__typename;if(r)for(var s=0,c=r;s<c.length;s++){var a=c[s],l=getTypenameFromResult(e,(0,o.hi)(a,n).selectionSet,n);if("string"==typeof l)return l}}},u2:function(){return resultKeyNameFromField},vb:function(){return valueToObjectRepresentation},vf:function(){return storeKeyNameFromField}});var r=n(25525),i=n(88464),o=n(50741),u=n(53615);function makeReference(e){return{__ref:String(e)}}function isReference(e){return!!(e&&"object"==typeof e&&"string"==typeof e.__ref)}function isDocumentNode(e){return(0,i.s)(e)&&"Document"===e.kind&&Array.isArray(e.definitions)}function valueToObjectRepresentation(e,t,n,i){if("IntValue"===n.kind||"FloatValue"===n.kind)e[t.value]=Number(n.value);else if("BooleanValue"===n.kind||"StringValue"===n.kind)e[t.value]=n.value;else if("ObjectValue"===n.kind){var o={};n.fields.map(function(e){return valueToObjectRepresentation(o,e.name,e.value,i)}),e[t.value]=o}else if("Variable"===n.kind){var u=(i||{})[n.name.value];e[t.value]=u}else if("ListValue"===n.kind)e[t.value]=n.values.map(function(e){var n={};return valueToObjectRepresentation(n,t,e,i),n[t.value]});else if("EnumValue"===n.kind)e[t.value]=n.value;else if("NullValue"===n.kind)e[t.value]=null;else throw(0,r._K)(82,t.value,n.kind)}function storeKeyNameFromField(e,t){var n=null;e.directives&&(n={},e.directives.forEach(function(e){n[e.name.value]={},e.arguments&&e.arguments.forEach(function(r){var i=r.name,o=r.value;return valueToObjectRepresentation(n[e.name.value],i,o,t)})}));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(function(e){var n=e.name,i=e.value;return valueToObjectRepresentation(r,n,i,t)})),c(e.name.value,r,n)}var a=["connection","include","skip","client","rest","export","nonreactive"],s=u.B,c=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key){if(!n.connection.filter||!(n.connection.filter.length>0))return n.connection.key;var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach(function(e){i[e]=t[e]}),"".concat(n.connection.key,"(").concat(s(i),")")}var o=e;if(t){var u=s(t);o+="(".concat(u,")")}return n&&Object.keys(n).forEach(function(e){-1===a.indexOf(e)&&(n[e]&&Object.keys(n[e]).length?o+="@".concat(e,"(").concat(s(n[e]),")"):o+="@".concat(e))}),o},{setStringify:function(e){var t=s;return s=e,t}});function argumentsObjectFromField(e,t){if(e.arguments&&e.arguments.length){var n={};return e.arguments.forEach(function(e){return valueToObjectRepresentation(n,e.name,e.value,t)}),n}return null}function resultKeyNameFromField(e){return e.alias?e.alias.value:e.name.value}function isField(e){return"Field"===e.kind}function isInlineFragment(e){return"InlineFragment"===e.kind}},91160:function(e,t,n){function defaultDispose(){}n.d(t,{e:function(){return StrongCache}});let StrongCache=class StrongCache{constructor(e=1/0,t=defaultDispose){this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){let t=this.getNode(e);return t&&t.value}get size(){return this.map.size}getNode(e){let t=this.map.get(e);if(t&&t!==this.newest){let{older:e,newer:n}=t;n&&(n.older=e),e&&(e.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t}set(e,t){let n=this.getNode(e);return n?n.value=t:(n={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(e,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){let t=this.map.get(e);return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)}}},17521:function(e,t,n){function noop(){}n.d(t,{k:function(){return WeakCache}});let r="undefined"!=typeof WeakRef?WeakRef:function(e){return{deref:()=>e}},i="undefined"!=typeof WeakMap?WeakMap:Map,o="undefined"!=typeof FinalizationRegistry?FinalizationRegistry:function(){return{register:noop,unregister:noop}};let WeakCache=class WeakCache{constructor(e=1/0,t=noop){this.max=e,this.dispose=t,this.map=new i,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let e=this.unfinalizedNodes.values();for(let t=0;t<10024;t++){let t=e.next().value;if(!t)break;this.unfinalizedNodes.delete(t);let n=t.key;delete t.key,t.keyRef=new r(n),this.registry.register(n,t,t)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new o(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){let t=this.getNode(e);return t&&t.value}getNode(e){let t=this.map.get(e);if(t&&t!==this.newest){let{older:e,newer:n}=t;n&&(n.older=e),e&&(e.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t}set(e,t){let n=this.getNode(e);return n?n.value=t:(n={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.scheduleFinalization(n),this.map.set(e,n),this.size++,n.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--;let t=e.key||e.keyRef&&e.keyRef.deref();this.dispose(e.value,t),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),t&&this.map.delete(t)}delete(e){let t=this.map.get(e);return!!t&&(this.deleteNode(t),!0)}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}},74084:function(e,t,n){function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{y:function(){return s}});var hasSymbols=function(){return"function"==typeof Symbol},hasSymbol=function(e){return hasSymbols()&&!!Symbol[e]},getSymbol=function(e){return hasSymbol(e)?Symbol[e]:"@@"+e};hasSymbols()&&!hasSymbol("observable")&&(Symbol.observable=Symbol("observable"));var r=getSymbol("iterator"),i=getSymbol("observable"),o=getSymbol("species");function getMethod(e,t){var n=e[t];if(null!=n){if("function"!=typeof n)throw TypeError(n+" is not a function");return n}}function getSpecies(e){var t=e.constructor;return void 0!==t&&null===(t=t[o])&&(t=void 0),void 0!==t?t:s}function hostReportError(e){hostReportError.log?hostReportError.log(e):setTimeout(function(){throw e})}function enqueue(e){Promise.resolve().then(function(){try{e()}catch(e){hostReportError(e)}})}function cleanupSubscription(e){var t=e._cleanup;if(void 0!==t){if(e._cleanup=void 0,!t)return;try{if("function"==typeof t)t();else{var n=getMethod(t,"unsubscribe");n&&n.call(t)}}catch(e){hostReportError(e)}}}function closeSubscription(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function notifySubscription(e,t,n){e._state="running";var r=e._observer;try{var i=getMethod(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(closeSubscription(e),i)i.call(r,n);else throw n;break;case"complete":closeSubscription(e),i&&i.call(r)}}catch(e){hostReportError(e)}"closed"===e._state?cleanupSubscription(e):"running"===e._state&&(e._state="ready")}function onNotify(e,t,n){if("closed"!==e._state){if("buffering"===e._state){e._queue.push({type:t,value:n});return}if("ready"!==e._state){e._state="buffering",e._queue=[{type:t,value:n}],enqueue(function(){return function(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(notifySubscription(e,t[n].type,t[n].value),"closed"!==e._state);++n);}}(e)});return}notifySubscription(e,t,n)}}var u=function(){function Subscription(e,t){this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing";var n=new a(this);try{this._cleanup=t.call(void 0,n)}catch(e){n.error(e)}"initializing"===this._state&&(this._state="ready")}return Subscription.prototype.unsubscribe=function(){"closed"!==this._state&&(closeSubscription(this),cleanupSubscription(this))},_createClass(Subscription,[{key:"closed",get:function(){return"closed"===this._state}}]),Subscription}(),a=function(){function SubscriptionObserver(e){this._subscription=e}var e=SubscriptionObserver.prototype;return e.next=function(e){onNotify(this._subscription,"next",e)},e.error=function(e){onNotify(this._subscription,"error",e)},e.complete=function(){onNotify(this._subscription,"complete")},_createClass(SubscriptionObserver,[{key:"closed",get:function(){return"closed"===this._subscription._state}}]),SubscriptionObserver}(),s=function(){function Observable(e){if(!(this instanceof Observable))throw TypeError("Observable cannot be called as a function");if("function"!=typeof e)throw TypeError("Observable initializer must be a function");this._subscriber=e}var e=Observable.prototype;return e.subscribe=function(e){return("object"!=typeof e||null===e)&&(e={next:e,error:arguments[1],complete:arguments[2]}),new u(e,this._subscriber)},e.forEach=function(e){var t=this;return new Promise(function(n,r){if("function"!=typeof e){r(TypeError(e+" is not a function"));return}function done(){i.unsubscribe(),n()}var i=t.subscribe({next:function(t){try{e(t,done)}catch(e){r(e),i.unsubscribe()}},error:r,complete:n})})},e.map=function(e){var t=this;if("function"!=typeof e)throw TypeError(e+" is not a function");return new(getSpecies(this))(function(n){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return n.error(e)}n.next(t)},error:function(e){n.error(e)},complete:function(){n.complete()}})})},e.filter=function(e){var t=this;if("function"!=typeof e)throw TypeError(e+" is not a function");return new(getSpecies(this))(function(n){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return n.error(e)}n.next(t)},error:function(e){n.error(e)},complete:function(){n.complete()}})})},e.reduce=function(e){var t=this;if("function"!=typeof e)throw TypeError(e+" is not a function");var n=getSpecies(this),r=arguments.length>1,i=!1,o=arguments[1],u=o;return new n(function(n){return t.subscribe({next:function(t){var o=!i;if(i=!0,!o||r)try{u=e(u,t)}catch(e){return n.error(e)}else u=t},error:function(e){n.error(e)},complete:function(){if(!i&&!r)return n.error(TypeError("Cannot reduce an empty sequence"));n.next(u),n.complete()}})})},e.concat=function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=getSpecies(this);return new i(function(t){var r,o=0;return function startNext(e){r=e.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===n.length?(r=void 0,t.complete()):startNext(i.from(n[o++]))}})}(e),function(){r&&(r.unsubscribe(),r=void 0)}})},e.flatMap=function(e){var t=this;if("function"!=typeof e)throw TypeError(e+" is not a function");var n=getSpecies(this);return new n(function(r){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return r.error(e)}var o=n.from(t).subscribe({next:function(e){r.next(e)},error:function(e){r.error(e)},complete:function(){var e=i.indexOf(o);e>=0&&i.splice(e,1),completeIfDone()}});i.push(o)},error:function(e){r.error(e)},complete:function(){completeIfDone()}});function completeIfDone(){o.closed&&0===i.length&&r.complete()}return function(){i.forEach(function(e){return e.unsubscribe()}),o.unsubscribe()}})},e[i]=function(){return this},Observable.from=function(e){var t="function"==typeof this?this:Observable;if(null==e)throw TypeError(e+" is not an object");var n=getMethod(e,i);if(n){var o=n.call(e);if(Object(o)!==o)throw TypeError(o+" is not an object");return o instanceof s&&o.constructor===t?o:new t(function(e){return o.subscribe(e)})}if(hasSymbol("iterator")&&(n=getMethod(e,r)))return new t(function(t){enqueue(function(){if(!t.closed){for(var r,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n.call(e));!(r=i()).done;){var o=r.value;if(t.next(o),t.closed)return}t.complete()}})});if(Array.isArray(e))return new t(function(t){enqueue(function(){if(!t.closed){for(var n=0;n<e.length;++n)if(t.next(e[n]),t.closed)return;t.complete()}})});throw TypeError(e+" is not observable")},Observable.of=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new("function"==typeof this?this:Observable)(function(e){enqueue(function(){if(!e.closed){for(var n=0;n<t.length;++n)if(e.next(t[n]),e.closed)return;e.complete()}})})},_createClass(Observable,null,[{key:o,get:function(){return this}}]),Observable}();hasSymbols()&&Object.defineProperty(s,Symbol("extensions"),{value:{symbol:i,hostReportError:hostReportError},configurable:!0})}}]);