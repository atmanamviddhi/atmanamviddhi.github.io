const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-DTcb-E-t.js","./main-D4L9Kf1P.js","./main-Bx5oukI8.css","./input-BDb67IcV.js","./App-CAmuYmwr.js","./Index-DHALKKyH.js","./Footer-rYkb5Koh.js","./SocialMediaLinks-DnaaGLvt.js"])))=>i.map(i=>d[i]);
import{_ as e,j as t,r as s}from"./main-D4L9Kf1P.js";import{B as a,R as n,C as r,a as i,I as o,P as l,L as c,b as d,c as m,d as u}from"./input-BDb67IcV.js";import{z as h,x as p,X as f}from"./App-CAmuYmwr.js";import{S as x}from"./SocialMediaLinks-DnaaGLvt.js";import{v as g}from"./Index-DHALKKyH.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=h("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),v=h("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]),w=h("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]),y=h("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
/*! Capacitor: https://capacitorjs.com/ - MIT License */
var j,N;(N=j||(j={})).Unimplemented="UNIMPLEMENTED",N.Unavailable="UNAVAILABLE";class k extends Error{constructor(e,t,s){super(e),this.message=e,this.code=t,this.data=s}}const A=e=>{const t=e.CapacitorCustomPlatform||null,s=e.Capacitor||{},a=s.Plugins=s.Plugins||{},n=()=>null!==t?t.name:(e=>{var t,s;return(null==e?void 0:e.androidBridge)?"android":(null===(s=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===s?void 0:s.bridge)?"ios":"web"})(e),r=e=>{var t;return null===(t=s.PluginHeaders)||void 0===t?void 0:t.find((t=>t.name===e))},i=new Map;return s.convertFileSrc||(s.convertFileSrc=e=>e),s.getPlatform=n,s.handleError=t=>e.console.error(t),s.isNativePlatform=()=>"web"!==n(),s.isPluginAvailable=e=>{const t=i.get(e);return!!(null==t?void 0:t.platforms.has(n()))||!!r(e)},s.registerPlugin=(e,o={})=>{const l=i.get(e);if(l)return l.proxy;const c=n(),d=r(e);let m;const u=a=>{let n;const r=(...r)=>{const i=(async()=>(!m&&c in o?m=m="function"==typeof o[c]?await o[c]():o[c]:null!==t&&!m&&"web"in o&&(m=m="function"==typeof o.web?await o.web():o.web),m))().then((t=>{const i=((t,a)=>{var n,r;if(!d){if(t)return null===(r=t[a])||void 0===r?void 0:r.bind(t);throw new k(`"${e}" plugin is not implemented on ${c}`,j.Unimplemented)}{const r=null==d?void 0:d.methods.find((e=>a===e.name));if(r)return"promise"===r.rtype?t=>s.nativePromise(e,a.toString(),t):(t,n)=>s.nativeCallback(e,a.toString(),t,n);if(t)return null===(n=t[a])||void 0===n?void 0:n.bind(t)}})(t,a);if(i){const e=i(...r);return n=null==e?void 0:e.remove,e}throw new k(`"${e}.${a}()" is not implemented on ${c}`,j.Unimplemented)}));return"addListener"===a&&(i.remove=async()=>n()),i};return r.toString=()=>`${a.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:a,writable:!1,configurable:!1}),r},h=u("addListener"),p=u("removeListener"),f=(e,t)=>{const s=h({eventName:e},t),a=async()=>{const a=await s;p({eventName:e,callbackId:a},t)},n=new Promise((e=>s.then((()=>e({remove:a})))));return n.remove=async()=>{await a()},n},x=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return d?f:h;case"removeListener":return p;default:return u(t)}}});return a[e]=x,i.set(e,{name:e,proxy:x,platforms:new Set([...Object.keys(o),...d?[c]:[]])}),x},s.Exception=k,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s},E=(e=>e.Capacitor=A(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),S=E.registerPlugin;class C{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let s=!1;this.listeners[e]||(this.listeners[e]=[],s=!0),this.listeners[e].push(t);const a=this.windowListeners[e];a&&!a.registered&&this.addWindowListener(a),s&&this.sendRetainedArgumentsForEvent(e);return Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,s){const a=this.listeners[e];if(a)a.forEach((e=>e(t)));else if(s){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new E.Exception(e,j.Unimplemented)}unavailable(e="not available"){return new E.Exception(e,j.Unavailable)}async removeListener(e,t){const s=this.listeners[e];if(!s)return;const a=s.indexOf(t);this.listeners[e].splice(a,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach((t=>{this.notifyListeners(e,t)})))}}const L=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),O=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class P extends C{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach((e=>{if(e.length<=0)return;let[s,a]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=O(s).trim(),a=O(a).trim(),t[s]=a})),t}async setCookie(e){try{const t=L(e.key),s=L(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),r=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${s||""}${a}; path=${n}; ${r};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}S("CapacitorCookies",{web:()=>new P});const I=(e,t={})=>{const s=Object.assign({method:e.method||"GET",headers:e.headers},t),a=((e={})=>{const t=Object.keys(e);return Object.keys(e).map((e=>e.toLocaleLowerCase())).reduce(((s,a,n)=>(s[a]=e[t[n]],s)),{})})(e.headers)["content-type"]||"";if("string"==typeof e.data)s.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[s,a]of Object.entries(e.data||{}))t.set(s,a);s.body=t.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const t=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,s)=>{t.append(s,e)}));else for(const s of Object.keys(e.data))t.append(s,e.data[s]);s.body=t;const a=new Headers(s.headers);a.delete("content-type"),s.headers=a}else(a.includes("application/json")||"object"==typeof e.data)&&(s.body=JSON.stringify(e.data));return s};class F extends C{async request(e){const t=I(e,e.webFetchExtra),s=((e,t=!0)=>e?Object.entries(e).reduce(((e,s)=>{const[a,n]=s;let r,i;return Array.isArray(n)?(i="",n.forEach((e=>{r=t?encodeURIComponent(e):e,i+=`${a}=${r}&`})),i.slice(0,-1)):(r=t?encodeURIComponent(n):n,i=`${a}=${r}`),`${e}&${i}`}),"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=s?`${e.url}?${s}`:e.url,n=await fetch(a,t),r=n.headers.get("content-type")||"";let i,o,{responseType:l="text"}=n.ok?e:{};switch(r.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":o=await n.blob(),i=await(async e=>new Promise(((t,s)=>{const a=new FileReader;a.onload=()=>{const e=a.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},a.onerror=e=>s(e),a.readAsDataURL(e)})))(o);break;case"json":i=await n.json();break;default:i=await n.text()}const c={};return n.headers.forEach(((e,t)=>{c[t]=e})),{data:i,headers:c,status:n.status,url:n.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}S("CapacitorHttp",{web:()=>new F});const T=S("Share",{web:()=>e((()=>import("./web-DTcb-E-t.js")),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then((e=>new e.ShareWeb))}),$=({excerpt:e,isFavorite:s,onToggleFavorite:a})=>{return t.jsxs("div",{className:"pt-6 px-4",children:[t.jsxs("blockquote",{className:"text-lg mb-4 leading-relaxed text-left",children:['"',(n=e.text,n.split("\n").map(((e,s)=>t.jsxs("span",{children:[e,s<n.split("\n").length-1&&t.jsx("br",{})]},s)))),'"']}),t.jsx("div",{className:"text-sm text-muted-foreground space-y-1 text-left",children:e.bookTitle?t.jsx("p",{className:"font-semibold",children:e.bookTitle}):e.bookAuthor?t.jsxs("p",{className:"font-semibold",children:["~ ",e.bookAuthor]}):null}),t.jsx("div",{className:"mt-6 pt-4 border-t border-[#1A4067]/30 text-sm text-center text-muted-foreground",children:t.jsxs("div",{className:"flex items-center justify-center gap-4",children:[t.jsx("button",{onClick:e=>{e.stopPropagation(),a()},className:"p-2 rounded-full hover:bg-white/10 transition-colors "+(s?"text-red-500 hover:text-red-600":"text-gray-400 hover:text-red-500"),children:t.jsx(b,{className:"w-6 h-6 "+(s?"fill-current":"")})}),t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("img",{src:"/lovable-uploads/ic_launcher_round.png",alt:"Atmanam Viddhi Logo",className:"w-8 h-8 mx-auto mb-2"}),t.jsx("p",{className:"font-semibold",children:"Atmanam Viddhi - Know Thyself"}),t.jsx("p",{className:"mt-1",children:"atmanamviddhi.in"})]})]})})]});var n},U=({excerpt:e,onShare:s,onNewExcerpt:n})=>t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsxs(a,{variant:"outline",className:"flex-1 min-w-[140px]",onClick:n,children:[t.jsx("img",{src:"/lovable-uploads/ic_launcher_round.png",alt:"New Excerpt",className:"w-4 h-4 mr-2"}),"New Excerpt"]}),t.jsxs(a,{variant:"ghost",className:"flex-1 min-w-[140px]",onClick:s,children:[t.jsx(w,{className:"w-4 h-4 mr-2"}),"Share"]}),e.amazonLink&&""!==e.amazonLink&&t.jsxs(a,{variant:"default",className:"flex-1 min-w-[140px]",onClick:()=>{e.amazonLink&&window.open(e.amazonLink,"_blank")},children:[t.jsx(y,{className:"w-4 h-4 mr-2"}),"Buy Book"]})]}),R=()=>{const{toast:e}=p();return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"p-4 sm:p-6 text-center",children:[t.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Support Atmanam Viddhi"}),t.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t.jsx("a",{href:"https://www.buymeacoffee.com/botman1001",children:t.jsx("img",{src:"https://img.buymeacoffee.com/button-api/?text=Buy me a book&emoji=📖&slug=botman1001&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00"})}),t.jsxs("div",{className:"mt-4 p-4 bg-white/5 rounded-lg w-full max-w-sm",children:[t.jsx("h3",{className:"text-sm font-medium mb-2",children:"UPI Payment (India)"}),t.jsx("img",{src:"/lovable-uploads/69c6ec32-0e65-419e-8e34-40a2a63b2ebc.png",alt:"UPI QR Code",className:"mx-auto mb-2 w-48 h-48"}),t.jsxs("button",{onClick:async()=>{try{await navigator.clipboard.writeText("atmanamviddhi@axl"),e({title:"UPI ID Copied",description:"The UPI ID has been copied to your clipboard"})}catch(t){}},className:"flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#1A4067] hover:bg-[#1A4067]/80 rounded-md transition-colors",children:[t.jsx(v,{className:"w-4 h-4"}),t.jsx("span",{children:"atmanamviddhi@axl"})]})]})]})]}),t.jsx("div",{className:"p-4 sm:p-6 pt-0 flex justify-center gap-4",children:t.jsx(x,{})})]})},_=100,D=e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch(t){return[]}},G=n,M=r,J=i,z=({value:e,onChange:s,onAdd:n,placeholder:r})=>t.jsxs("div",{className:"flex gap-2",children:[t.jsx(o,{placeholder:r,value:e,onChange:e=>s(e.target.value),maxLength:100,className:"bg-white/10 border-[#1A4067]/30"}),t.jsx(a,{onClick:n,className:"shrink-0",variant:"outline",children:t.jsx(l,{className:"h-4 w-4"})})]}),B=({item:e,onRemove:s})=>t.jsxs("li",{className:"flex items-center justify-between p-2 rounded bg-white/5",children:[t.jsx("span",{className:"break-words overflow-hidden mr-2 flex-1",children:e}),t.jsx(a,{variant:"ghost",size:"sm",onClick:s,className:"shrink-0",children:t.jsx(f,{className:"h-4 w-4"})})]}),W=({title:e,items:s,isOpen:a,onOpenChange:n,inputValue:r,onInputChange:i,onAdd:o,onRemove:l,inputPlaceholder:m})=>t.jsxs(G,{open:a,onOpenChange:n,children:[t.jsxs(M,{className:"flex w-full items-center justify-between",children:[t.jsx(c,{className:"text-lg font-semibold cursor-pointer",children:e}),t.jsx(d,{className:"h-5 w-5 transition-transform "+(a?"":"-rotate-90")})]}),t.jsxs(J,{className:"mt-4 space-y-4",children:[t.jsx(z,{value:r,onChange:i,onAdd:o,placeholder:m}),t.jsx("ul",{className:"space-y-2",children:s.map(((e,s)=>t.jsx(B,{item:e,onRemove:()=>l(s)},s)))})]})]}),V=()=>{const[e,a]=s.useState(!1),[n,r]=s.useState(!1),{gratitudeList:i,affirmationList:o,newGratitude:l,newAffirmation:c,handleAddGratitude:d,handleAddAffirmation:h,handleRemoveGratitude:f,handleRemoveAffirmation:x,handleGratitudeChange:g,handleAffirmationChange:b}=(()=>{const[e,t]=s.useState((()=>D("userGratitude"))),[a,n]=s.useState((()=>D("userAffirmation"))),[r,i]=s.useState(""),[o,l]=s.useState(""),{toast:c}=p(),d=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(s){c({variant:"destructive",title:"Storage Error",description:"Failed to save your data. Please try again."})}};return{gratitudeList:e,affirmationList:a,newGratitude:r,newAffirmation:o,handleAddGratitude:()=>{if(e.length>=5)c({description:"You can only add up to 5 gratitudes",variant:"destructive"});else if(r.trim()){const s=[...e,r];t(s),d("userGratitude",s),i(""),c({description:"Gratitude added successfully"})}},handleAddAffirmation:()=>{if(a.length>=5)c({description:"You can only add up to 5 affirmations",variant:"destructive"});else if(o.trim()){const e=[...a,o];n(e),d("userAffirmation",e),l(""),c({description:"Affirmation added successfully"})}},handleRemoveGratitude:s=>{const a=e.filter(((e,t)=>t!==s));t(a),d("userGratitude",a),c({description:"Gratitude removed successfully"})},handleRemoveAffirmation:e=>{const t=a.filter(((t,s)=>s!==e));n(t),d("userAffirmation",t),c({description:"Affirmation removed successfully"})},handleGratitudeChange:e=>{e.length<=_?i(e):c({description:"Maximum 100 characters allowed",variant:"destructive"})},handleAffirmationChange:e=>{e.length<=_?l(e):c({description:"Maximum 100 characters allowed",variant:"destructive"})}}})();return t.jsxs("div",{className:"space-y-4 my-8",children:[t.jsx(m,{className:"w-full bg-[#F2FCE2]/20 border-[#1A4067]/30 backdrop-blur-sm",children:t.jsx(u,{className:"pt-6",children:t.jsx(W,{title:"🙏 Appreciate Life: Write Your Gratitudes",items:i,isOpen:e,onOpenChange:a,inputValue:l,onInputChange:g,onAdd:d,onRemove:f,inputPlaceholder:"I am grateful for..."})})}),t.jsx(m,{className:"w-full bg-[#E5DEFF]/20 border-[#1A4067]/30 backdrop-blur-sm",children:t.jsx(u,{className:"pt-6",children:t.jsx(W,{title:"✨ Realize Your Divine Nature: Sacred Affirmations",items:o,isOpen:n,onOpenChange:r,inputValue:c,onInputChange:b,onAdd:h,onRemove:x,inputPlaceholder:"I am..."})})})]})},q=Object.freeze(Object.defineProperty({__proto__:null,ExcerptCard:({excerpt:e,onNewExcerpt:a,onScreenshotModeChange:n})=>{const{toast:r}=p(),[i,o]=s.useState(!1),[l,c]=s.useState(!1),d=e.text.match(/[\u0900-\u097F]/);s.useEffect((()=>{const t=JSON.parse(localStorage.getItem("favoriteExcerpts")||"[]").some((t=>e.id&&t.id===e.id||t.text===e.text));c(t)}),[e]);const h=()=>{const t=JSON.parse(localStorage.getItem("favoriteExcerpts")||"[]"),s=JSON.parse(localStorage.getItem("localExcerpts")||"[]");if(l){const a=t.filter((t=>!(e.id&&t.id===e.id||t.text===e.text)));localStorage.setItem("favoriteExcerpts",JSON.stringify(a)),c(!1);const n=s.filter((t=>!(t.text===e.text&&"favorite"===t.type)));localStorage.setItem("localExcerpts",JSON.stringify(n)),r({title:"Removed from favorites",description:"Excerpt has been removed from your collection"})}else{const a={...e,id:e.id||g(),isFavorite:!0};localStorage.setItem("favoriteExcerpts",JSON.stringify([...t,a])),c(!0);const n={id:a.id,bookTitle:e.bookTitle||"Unknown",bookAuthor:e.bookAuthor,translator:e.translator,text:e.text,category:e.bookTitle||"Favorites",language:"en",createdAt:(new Date).toISOString(),type:"favorite"},i=s.findIndex((t=>t.text===e.text));if(-1===i)localStorage.setItem("localExcerpts",JSON.stringify([...s,n]));else{const e=[...s];e[i]={...e[i],type:"favorite",id:n.id},localStorage.setItem("localExcerpts",JSON.stringify(e))}r({title:"Added to favorites",description:"Excerpt has been added to your collection"})}},f=()=>{const e=!i;o(e),n&&n(e)};return t.jsxs("div",{className:"w-[98%] mx-auto space-y-4",children:[t.jsxs("div",{className:"mt-4 relative",onClick:f,children:[t.jsx("style",{children:"\n            @keyframes glowShadow {\n              0% { box-shadow: 0 0 10px 2px rgba(255,215,0,0.3); }\n              50% { box-shadow: 0 0 15px 4px rgba(255,215,0,0.5); }\n              100% { box-shadow: 0 0 10px 2px rgba(255,215,0,0.3); }\n            }\n          "}),t.jsx(m,{className:"w-full bg-[#0A1929]/70 border-[#1A4067]/30 backdrop-blur-sm animate-[glowShadow_3s_ease-in-out_infinite]",children:t.jsx(u,{className:d?"font-hindi":"",children:t.jsx($,{excerpt:e,isFavorite:l,onToggleFavorite:h})})})]}),t.jsxs("div",{className:"transition-opacity duration-300 "+(i?"opacity-0 pointer-events-none absolute":"opacity-100"),children:[e.isLocal&&t.jsx("p",{className:"text-center text-sm text-muted-foreground italic",children:"Click on the excerpt to enter screenshot mode!"}),t.jsx(m,{className:"w-full bg-[#0A1929]/70 border-[#1A4067]/30 backdrop-blur-sm",children:t.jsx(u,{className:"p-2",children:t.jsx(U,{excerpt:e,onShare:async()=>{const t=e.bookTitle||e.bookAuthor||"",s=`${e.text}\n\n~ ${t}\n\nhttps://atmanamviddhi.in`;try{await navigator.clipboard.writeText(s),r({title:"Text copied to clipboard",description:"You can now paste and share it anywhere"}),await T.share({text:s,dialogTitle:"Share Excerpt"})}catch(a){navigator.clipboard||r({title:"Sharing failed",description:"Unable to share at this time",variant:"destructive"})}},onNewExcerpt:a,onToggleFavorite:h,isFavorite:l})})}),t.jsx(V,{}),t.jsx(m,{className:"w-full bg-[#0A1929]/70 border-[#1A4067]/30 backdrop-blur-sm",children:t.jsx(u,{children:t.jsx(R,{})})})]}),i&&t.jsx("div",{className:"fixed inset-0 bg-black/50 -z-10",onClick:f})]})}},Symbol.toStringTag,{value:"Module"}));export{q as E,C as W};
