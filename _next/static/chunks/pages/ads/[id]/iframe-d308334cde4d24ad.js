(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8135],{82299:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ads/[id]/iframe",function(){return r(482)}])},1342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let n=r(38754),o=(r(67294),n._(r(24304)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let r=o.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let i=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=i?i().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete n.webpack,delete n.modules,noSSR(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30043:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let n=r(38754),o=n._(r(67294)),i=o.default.createContext(null)},24304:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(38754),o=n._(r(67294)),i=r(30043),l=[],a=[],u=!1;function load(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function init(){if(!n){let t=new LoadableSubscription(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!u){let e=r.webpack?r.webpack():r.modules;e&&a.push(t=>{for(let r of e)if(t.includes(r))return init()})}function LoadableComponent(e,t){!function(){init();let e=o.default.useContext(i.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let l=o.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),o.default.useMemo(()=>{var t;return l.loading||l.error?o.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:n.retry}):l.loaded?o.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",o.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(l).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(u=!0,t());flushInitializers(a,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let d=Loadable},482:function(e,t,r){"use strict";r.r(t);var n=r(85893);r(67294);var o=r(9008),i=r.n(o),l=r(5152),a=r.n(l),u=r(8043);let d=a()(()=>Promise.all([r.e(7531),r.e(2510),r.e(6705),r.e(2790)]).then(r.bind(r,26705)).catch(e=>console.error(e)),{loadableGenerated:{webpack:()=>[26705]},ssr:!1}),s={id:"0251dc34-7501-4db8-abd1-c4ded8d922bd",stream:{id:"d2c410db-04a8-455e-9caf-44a2beba0f4d",producer:"c8f48f91-99f9-4c89-beee-da3d48e24e68",ingest_url:"rtmp://receiver.reactive.live/live",dash_url:"https://distribution.reactive.live/files/c8f48f91-99f9-4c89-beee-da3d48e24e68/d2c410db-04a8-455e-9caf-44a2beba0f4d/out.mpd",hls_url:"https://distribution.reactive.live/files/c8f48f91-99f9-4c89-beee-da3d48e24e68/d2c410db-04a8-455e-9caf-44a2beba0f4d/master.m3u8",status:"ENDED",tag:"",start:"1969-12-31T19:00:00-05:00",end:"1969-12-31T19:00:00-05:00",configuration:{id:"ef8bd791-f95b-4ced-9169-9514470d5d5c",product_showcase:"buy_now",chat:"free_form",embed_position:"top_left",embed_offset_x:24,embed_offset_y:24,start_minimized_on_desktop:!1,app_follows_while_playing:!0,theme_primary_color:"#d98bb1",theme_accent_color:"#E6006F",theme_light_text_color:"#FFFFFF",theme_dark_text_color:"#212121",join_pill_copy:""},plays_on_pages:"ALL",collection:"",name:""},name:"A shake kids love - chocolate",start:"1969-12-31T19:00:00-05:00",end:"1969-12-31T19:00:25-05:00",dash_url:"/demo-ad-else/video/out.mpd",hls_url:"/demo-ad-else/video/master.m3u8",is_embeded:!1,plays_on_pages:"ALL",processed:!0,created:"2024-05-15T10:45:54.088029-04:00",modified:"2024-06-21T09:38:01.614194-04:00",embed_url:"https://consumer-app.reactive.live/bundle.js?storeId=c8f48f91-99f9-4c89-beee-da3d48e24e68&storefrontAccessToken=4b17822e55dbd320785a1563837032c0&shop=else-nutrition.myshopify.com&replayId=0251dc34-7501-4db8-abd1-c4ded8d922bd",sharing_preview_url:"/demo-ad-else/preview.gif"};t.default=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"Reactive Ad Demo"})}),(0,n.jsx)("div",{className:"reactive-embed",children:(0,n.jsx)("div",{className:u.gH,children:(0,n.jsx)(d,{isInPageEmbed:!0,replay:s,autoplay:!0,isFullScreen:!0,isAd:!0,applyGlobalResets:!1})})})]})},8043:function(e,t,r){"use strict";r.d(t,{Bs:function(){return l},CT:function(){return i},V4:function(){return d},gH:function(){return a},kH:function(){return u},t$:function(){return o}});var n=r(37916);let o="/api",i="/api";n.env.WEB_SOCKET_URL;let l={height:"508px",width:"270px"},a="rs-app",u=Array.from({length:3},()=>".".concat(a)).join(""),d="2024-04"},5152:function(e,t,r){e.exports=r(1342)},37916:function(e){var t,r,n,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var i=[],l=!1,a=-1;function cleanUpNextTick(){l&&n&&(l=!1,n.length?i=n.concat(i):a=-1,i.length&&drainQueue())}function drainQueue(){if(!l){var e=runTimeout(cleanUpNextTick);l=!0;for(var t=i.length;t;){for(n=i,i=[];++a<t;)n&&n[a].run();a=-1,t=i.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new Item(e,t)),1!==i.length||l||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=82299)}),_N_E=e.O()}]);