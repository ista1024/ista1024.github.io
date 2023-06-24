(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{3129:function(e,t,r){Promise.resolve().then(r.bind(r,5536))},5536:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(9268),i=r(6006),a=r(6394),l=r.n(a),s=r(10),o=r(2040);let u=o.env.NEXT_PUBLIC_RAPID_API_ARTICLE_KEY;var c=()=>{var e;let[t,r]=(0,i.useState)({url:"",summary:""}),[a,o]=(0,i.useState)([]),[c,d]=(0,i.useState)(""),[f,m]=(0,i.useState)(u),[p,{error:h,isFetching:g}]=(0,s.B)();(0,i.useEffect)(()=>{let e=localStorage.getItem("articles");if(e){let t=JSON.parse(e);o(t)}},[]);let y=async e=>{e.preventDefault();let{data:n}=await p({articleUrl:t.url,rapidApiKey:f});if(null==n?void 0:n.summary){let e={...t,summary:(null==n?void 0:n.summary)||""},i=[e,...a];r(e),o(i),localStorage.setItem("articles",JSON.stringify(i))}},v=e=>{d(e),navigator.clipboard.writeText(e),setTimeout(()=>d(""),1500)};return(0,n.jsxs)("section",{className:"mt-16 w-full max-w-xl",children:[(0,n.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{className:"url_input",type:"text",placeholder:"Rapid Api Key",value:f||"",onChange:e=>{m(e.target.value)},required:!0}),(0,n.jsx)("a",{className:"m-1",target:"_blank",href:"https://rapidapi.com/restyler/api/article-extractor-and-summarizer",rel:"noopener noreferrer",children:(0,n.jsx)("p",{children:"Get API key from rapidapi"})})]}),(0,n.jsxs)("form",{className:"relative flex justify-center items-center",onSubmit:y,children:[(0,n.jsx)(l(),{className:"absolute left-0 my-2 ml-3 w-5",src:"/link.svg",alt:"link_icon",width:28,height:37,priority:!0}),(0,n.jsx)("input",{className:"url_input peer",type:"url",placeholder:"Enter a URL",value:(null==t?void 0:t.url)||"",onChange:e=>r({...t,url:e.target.value||""}),required:!0}),(0,n.jsx)("button",{type:"submit",className:"submit_btn   peer-focus:border-gray-700   peer-focus:text-gray-700",children:"\uD83D\uDD0E"})]}),(0,n.jsx)("div",{className:"flex flex-col gap-1 max-h-60 overflow-y-auto",children:a.map((e,t)=>(0,n.jsxs)("div",{onClick:()=>r(e),className:"link_card",children:[(0,n.jsx)("div",{className:"copy_btn",onClick:()=>v(e.url),children:(0,n.jsx)(l(),{className:"w-[40%] h-[40%] object-contain",src:c===e.url?"/tick.svg":"/copy.svg",alt:"copy",width:28,height:37,priority:!0})}),(0,n.jsx)("p",{className:"flex-1 font-satoshi text-blue-700 font-medium text-sm truncate",children:e.url})]},"link-".concat(t)))})]}),(0,n.jsx)("div",{className:"my-10 max-w-full flex justify-center items-center",children:g?(0,n.jsx)(l(),{className:"w-20 h-20 object-contain",src:"/loader.svg",alt:"loader",width:28,height:37,priority:!0}):h?(0,n.jsxs)("p",{className:"font-inter font-bold text-black text-center",children:["Well, that wasn't suppoered to happen...",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"font-satoshi font-normal text-gray-700",children:"data"in h&&(null==h?void 0:null===(e=h.data)||void 0===e?void 0:e.message)})]}):(null==t?void 0:t.summary)&&(0,n.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,n.jsxs)("h2",{className:"font-satoshi font-bold text-gray-600 text-lx",children:["Article ",(0,n.jsx)("span",{className:"blue_gradient",children:"Summary"})]}),(0,n.jsx)("div",{className:"summary_box",children:(0,n.jsx)("p",{className:"font-inter font-medium text-sm text-gray-700",children:(null==t?void 0:t.summary)||""})})]})})]})},d=()=>(0,n.jsxs)("header",{className:"w-full flex jusify-center items-center flex-col",children:[(0,n.jsxs)("nav",{className:"flex justify-between items-center w-full mb-10 pt-3",children:[(0,n.jsx)(l(),{className:"w-28 object-contain",src:"/logo.svg",alt:"sumz_logo",width:28,height:37,priority:!0}),(0,n.jsx)("button",{type:"button",onClick:()=>window.open("https://github.com/ista1024"),className:"black_btn",children:"Github"})]}),(0,n.jsxs)("h1",{className:"head_text",children:["Summarize Articles with",(0,n.jsx)("br",{className:"max-md:hedden"}),(0,n.jsx)("span",{className:"orange_gradient",children:"OpenAI GPT-4"})]}),(0,n.jsx)("h2",{className:"desc",children:"Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries"})]});function f(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"main",children:(0,n.jsx)("div",{className:"gradient"})}),(0,n.jsxs)("div",{className:"app",children:[(0,n.jsx)(d,{}),(0,n.jsx)(c,{})]})]})}},5962:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(6927),i=r(5909),a=i._(r(6006)),l=n._(r(2930)),s=r(2325),o=r(6374),u=r(168);r(7653);let c=n._(r(5840)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function m(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,i,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function h(e){let[t,r]=a.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,a.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:l,className:s,imgStyle:o,blurStyle:u,isLazy:c,fetchPriority:d,fill:f,placeholder:m,loading:g,srcString:y,config:v,unoptimized:b,loader:x,onLoadRef:j,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:S,onLoad:C,onError:N,...P}=e;return g=c?"lazy":g,a.default.createElement("img",{...P,...h(d),loading:g,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:s,style:{...o,...u},...r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&p(e,y,m,j,w,_,b))},[y,m,j,w,_,N,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,y,m,j,w,_,b)},onError:e=>{S(!0),"blur"===m&&_(!0),N&&N(e)}})}),y=(0,a.forwardRef)((e,t)=>{var r;let n,i,{src:p,sizes:y,unoptimized:v=!1,priority:b=!1,loading:x,className:j,quality:w,width:_,height:S,fill:C,style:N,onLoad:P,onLoadingComplete:E,placeholder:O="empty",blurDataURL:k,fetchPriority:A,layout:I,objectFit:z,objectPosition:M,lazyBoundary:R,lazyRoot:D,...U}=e,T=(0,a.useContext)(u.ImageConfigContext),L=(0,a.useMemo)(()=>{let e=d||T||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[T]),B=U.loader||c.default;delete U.loader;let F="__next_img_default"in B;if(F){if("custom"===L.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(I){"fill"===I&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(N={...N,...e});let t={responsive:"100vw",fill:"100vw"}[I];t&&!y&&(y=t)}let G="",W=m(_),q=m(S);if("object"==typeof(r=p)&&(f(r)||void 0!==r.src)){let e=f(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,k=k||e.blurDataURL,G=e.src,!C){if(W||q){if(W&&!q){let t=W/e.width;q=Math.round(e.height*t)}else if(!W&&q){let t=q/e.height;W=Math.round(e.width*t)}}else W=e.width,q=e.height}}let H=!b&&("lazy"===x||void 0===x);(!(p="string"==typeof p?p:G)||p.startsWith("data:")||p.startsWith("blob:"))&&(v=!0,H=!1),L.unoptimized&&(v=!0),F&&p.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(v=!0),b&&(A="high");let[V,J]=(0,a.useState)(!1),[K,$]=(0,a.useState)(!1),X=m(w),Y=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:M}:{},K?{}:{color:"transparent"},N),Q="blur"===O&&k&&!V?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:W,heightInt:q,blurWidth:n,blurHeight:i,blurDataURL:k,objectFit:Y.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:l,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,l),c=o.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:o.map((e,n)=>s({config:t,src:r,quality:a,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:s({config:t,src:r,quality:a,width:o[c]})}}({config:L,src:p,unoptimized:v,width:W,quality:X,sizes:y,loader:B}),ee=p,et=(0,a.useRef)(P);(0,a.useEffect)(()=>{et.current=P},[P]);let er=(0,a.useRef)(E);(0,a.useEffect)(()=>{er.current=E},[E]);let en={isLazy:H,imgAttributes:Z,heightInt:q,widthInt:W,qualityInt:X,className:j,imgStyle:Y,blurStyle:Q,loading:x,config:L,fetchPriority:A,fill:C,unoptimized:v,placeholder:O,loader:B,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:J,setShowAltText:$,...U};return a.default.createElement(a.default.Fragment,null,a.default.createElement(g,{...en,ref:t}),b?a.default.createElement(l.default,null,a.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:U.crossOrigin,referrerPolicy:U.referrerPolicy,...h(A)})):null)}),v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4626:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return a}});let n=r(6927),i=n._(r(6006)),a=i.default.createContext({})},7290:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2930:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return p}});let n=r(6927),i=r(5909),a=i._(r(6006)),l=n._(r(9488)),s=r(4626),o=r(6436),u=r(7290);function c(e){void 0===e&&(e=!1);let t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7653);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let a=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let p=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(o.HeadManagerContext);return a.default.createElement(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2325:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a,objectFit:l}=e,s=n||t,o=i||r,u=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+s+" "+o+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},168:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let n=r(6927),i=n._(r(6006)),a=r(6374),l=i.default.createContext(a.imageConfigDefault)},6374:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5840:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9488:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(5909),i=n._(r(6006)),a=i.useLayoutEffect,l=i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return a(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7653:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},10:function(e,t,r){"use strict";r.d(t,{$:function(){return a},B:function(){return l}});var n=r(9764),i=r(1452);let a=(0,n.LC)({reducerPath:"articleApi",baseQuery:(0,i.ni)({baseUrl:"https://article-extractor-and-summarizer.p.rapidapi.com/"}),endpoints:e=>({getSummary:e.query({query:e=>({url:"summarize?url=".concat(encodeURIComponent(e.articleUrl),"&length=3"),headers:{"X-RapidAPI-Key":e.rapidApiKey,"X-RapidAPI-Host":"article-extractor-and-summarizer.p.rapidapi.com"}})})})}),{useLazyGetSummaryQuery:l}=a},6394:function(e,t,r){e.exports=r(5962)}},function(e){e.O(0,[305,253,769,744],function(){return e(e.s=3129)}),_N_E=e.O()}]);