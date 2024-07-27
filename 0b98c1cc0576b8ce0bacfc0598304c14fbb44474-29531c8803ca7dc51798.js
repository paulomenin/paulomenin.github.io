"use strict";(self.webpackChunkgatsby_paulomenin_blog=self.webpackChunkgatsby_paulomenin_blog||[]).push([[320],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},3723:function(e,t,r){r.d(t,{L:function(){return f},M:function(){return E},P:function(){return w},S:function(){return Z},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return s}});var n=r(7294),a=(r(72),r(5697)),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r,n,a={}){return o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function u(e,t,r,n,a,i,l,s){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],d=function({layout:e,width:t,height:r}){return"fullWidth"===e?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/t*100+"%"}}):"constrained"===e?n.createElement("div",{style:{maxWidth:t,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${r}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,r=l(e,m);return n.createElement(n.Fragment,null,n.createElement(d,o({},r)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:r,loading:a,alt:i="",shouldLoad:s}=e,c=l(e,p);return n.createElement("img",o({},c,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,alt:i}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,i=l(e,g);const s=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(h,o({},i,t,{sizes:s,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map((({media:e,srcSet:t,type:r})=>n.createElement("source",{key:`${e}-${r}-${t}`,type:r,media:e,srcSet:a?t:void 0,"data-srcset":a?void 0:t,sizes:s}))),c):c};var y;h.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const b=["fallback"],w=function(e){let{fallback:t}=e,r=l(e,b);return t?n.createElement(v,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(y=v.propTypes)?void 0:y.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(v,o({},e)),n.createElement("noscript",null,n.createElement(v,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;const x=(e,t,r,...n)=>e.alt||""===e.alt?i().string(e,t,r,...n):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`),C={image:i().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],N=new Set;let _,L;const O=function(e){let{as:t="div",image:a,style:i,backgroundColor:c,className:u,class:m,onStartLoad:d,onLoad:f,onError:p}=e,g=l(e,k);const{width:h,height:v,layout:y}=a,b=function(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(h,v,y),{style:w,className:E}=b,x=l(b,S),C=(0,n.useRef)(),O=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);m&&(u=m);const T=function(e,t,r){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${r}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(y,h,v);return(0,n.useEffect)((()=>{_||(_=Promise.all([r.e(774),r.e(223)]).then(r.bind(r,8223)).then((({renderImageToString:e,swapPlaceholderImage:t})=>(L=e,{renderImageToString:e,swapPlaceholderImage:t}))));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==d||d({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==d||d({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(O);if(L&&N.has(O))return;let t,n;return _.then((({renderImageToString:e,swapPlaceholderImage:r})=>{C.current&&(C.current.innerHTML=e(o({isLoading:!0,isLoaded:N.has(O),image:a},g)),N.has(O)||(t=requestAnimationFrame((()=>{C.current&&(n=r(C.current,O,N,i,d,f,p))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{N.has(O)&&L&&(C.current.innerHTML=L(o({isLoading:N.has(O),isLoaded:N.has(O),image:a},g)),null==d||d({wasCached:!0}),null==f||f({wasCached:!0}))}),[a]),(0,n.createElement)(t,o({},x,{style:o({},w,i,{backgroundColor:c}),className:`${E}${u?` ${u}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},T=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));T.propTypes=C,T.displayName="GatsbyImage";const j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],M=(e,t,...r)=>"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number(e,t,...r):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`),z=new Set(["fixed","fullWidth","constrained"]),I={src:i().string.isRequired,alt:x,width:M,height:M,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},Z=(A=T,function(e){let{src:t,__imageData:r,__error:a}=e,i=l(e,j);return a&&console.warn(a),r?n.createElement(A,o({image:r},i)):(console.warn("Image not loaded",t),null)});var A;Z.displayName="StaticImage",Z.propTypes=I},6990:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),a=r(5414),i=r(4983),o=r(1082),l=r(3723);var s=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{d:"M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"}),n.createElement("path",{d:"M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"}))})),c=r(2061);var u=function(){return n.createElement("nav",{className:" flex flex-col xsm:flex-row space-y-1 xsm:space-y-0 xsm:space-x-2"},[["/article","Articles"],["/blog","Blog"],["/slidedeck","Slide Decks"],["/tags","Tags"],["/about","About"]].map((([e,t])=>n.createElement(c.Z,{key:e,className:"menu-link",href:e},t))))};var m=function(){var e,t;const a=(0,o.useStaticQuery)("1196552721"),i=null===(e=a.site.siteMetadata)||void 0===e?void 0:e.author,m=null===(t=a.site.siteMetadata)||void 0===t?void 0:t.social,d=i.name;return n.createElement("header",{className:"card flex flex-col m-4 gap-2"},n.createElement("div",{className:"flex flex-row justify-between"},n.createElement(c.Z,{className:"flex items-center ml-2",href:"/"},n.createElement(l.S,{src:"../../images/profile_logo_src.svg",alt:d,className:"mr-3 w-[54px]",placeholder:"none",backgroundColor:"#ffffff",__imageData:r(4992)}),n.createElement("span",{className:"font-sans font-bold text-2xl text-black"},d)),n.createElement("div",{className:"flex gap-2 items-start"},n.createElement(c.Z,{href:m.linkedin},n.createElement("div",{className:"icon-link flex justify-center items-center"},n.createElement("div",{className:"h-5 w-5 transition-colors duration-300"},n.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"LinkedIn"),n.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))))),n.createElement(c.Z,{href:m.github},n.createElement("div",{className:"icon-link flex justify-center items-center"},n.createElement("div",{className:"h-5 w-5 transition-colors duration-300"},n.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"GitHub"),n.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))))),n.createElement(c.Z,{href:"/rss.xml",title:"RSS"},n.createElement("div",{className:"icon-link text-neutral-900"},n.createElement(s,{className:"h-7 w-7"}))))),n.createElement("div",{className:""},n.createElement(u,null)))};var d=function(){var e,t;const r=(0,o.useStaticQuery)("1660071041"),a=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,i=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social,l=2022===(new Date).getFullYear()?"2022":`2022-${(new Date).getFullYear()}`;return n.createElement("footer",{className:" flex flex-row justify-between content-center items-center h-10 m-4 mb-2 px-3 rounded-lg text-sm bg-neutral-200 drop-shadow-md"},n.createElement("div",{className:"flex flex-row gap-1 items-center"},n.createElement("a",{className:"flex flex-row gap-1 min-w-fit",rel:"license noopener noreferrer",href:"http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1",target:"_blank"},n.createElement("img",{className:"inline-block h-5",src:"https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"}),n.createElement("img",{className:"inline-block h-5",src:"https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"})),l," by ",a.name,". This work is licensed under CC BY 4.0"),n.createElement("div",{className:" flex flex-row items-end justify-center gap-2"},n.createElement("a",{href:i.linkedin,target:"_blank",rel:"noopener noreferrer"},n.createElement("div",{className:"w-5 h-5 fill-gray-600 hover:fill-black"},n.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"LinkedIn"),n.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))),n.createElement("a",{href:i.github,target:"_blank",rel:"noopener noreferrer"},n.createElement("div",{className:"w-5 h-5 fill-gray-600 hover:fill-black"},n.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"GitHub"),n.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))))))};var f=function({files:e,src:t,alt:r}){const a=null==e?void 0:e.find((e=>e.basename===t));return n.createElement("img",{src:null==a?void 0:a.url,alt:r})},p=r(8306),g=r(3629);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v=(0,n.memo)((function(e){var t=e.children,r=e.math,a=e.block,i=e.errorColor,o=e.renderError,l=e.settings,s=e.as,c=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}(e,["children","math","block","errorColor","renderError","settings","as"]),u=s||(a?"div":"span"),m=null!=t?t:r,d=(0,n.useState)({innerHtml:""}),f=d[0],p=d[1];return(0,n.useEffect)((function(){try{var e=g.Z.renderToString(m,h({displayMode:!!a,errorColor:i,throwOnError:!!o},l));p({innerHtml:e})}catch(e){if(!(e instanceof g.Z.ParseError||e instanceof TypeError))throw e;p(o?{errorElement:o(e)}:{innerHtml:e.message})}}),[a,m,i,o,l]),"errorElement"in f?f.errorElement:n.createElement(u,Object.assign({},c,{dangerouslySetInnerHTML:{__html:f.innerHtml}}))}));const y={a:c.Z,Kroki:f,TeX:v,RevealJsSlides:p.Z};var b=function({location:e,children:t}){const r="/"===e.pathname;return n.createElement(n.Fragment,null,n.createElement(a.q,null,n.createElement("html",{className:"light"})),n.createElement("div",{className:"flex flex-col h-full","data-is-root-path":r},n.createElement(m,null),n.createElement(i.MDXProvider,{components:y},n.createElement("main",{className:"mb-auto mx-4 relative"},t)),n.createElement(d,null)))}},907:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},5671:function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:function(){return n}})},1656:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function o(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r.d(t,{Z:function(){return o}})},885:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(u){c=!0,a=u}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2982:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(907);var a=r(181);function i(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(907);function a(e,t){if(e){if("string"==typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},4992:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#ffffff","images":{"fallback":{"src":"/static/a7f966a9f3976450c2332a688fa2f514/0dea8/profile_logo_src.svg","srcSet":"/static/a7f966a9f3976450c2332a688fa2f514/8a04f/profile_logo_src.svg 270w,\\n/static/a7f966a9f3976450c2332a688fa2f514/da8b6/profile_logo_src.svg 540w,\\n/static/a7f966a9f3976450c2332a688fa2f514/0dea8/profile_logo_src.svg 1080w","sizes":"(min-width: 1080px) 1080px, 100vw"},"sources":[{"srcSet":"/static/a7f966a9f3976450c2332a688fa2f514/878eb/profile_logo_src.webp 270w,\\n/static/a7f966a9f3976450c2332a688fa2f514/2af5c/profile_logo_src.webp 540w,\\n/static/a7f966a9f3976450c2332a688fa2f514/06ecc/profile_logo_src.webp 1080w","type":"image/webp","sizes":"(min-width: 1080px) 1080px, 100vw"}]},"width":1080,"height":1080}')}}]);
//# sourceMappingURL=0b98c1cc0576b8ce0bacfc0598304c14fbb44474-29531c8803ca7dc51798.js.map