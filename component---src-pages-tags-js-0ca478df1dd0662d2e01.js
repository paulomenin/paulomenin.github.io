"use strict";(self.webpackChunkgatsby_paulomenin_blog=self.webpackChunkgatsby_paulomenin_blog||[]).push([[159],{7986:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(2061);var l=function({name:e}){return n.createElement("div",{className:"tag-link"},e)};var c=function({tags:e,prefix:t}){const a=t||"tag";return n.createElement("div",{className:"flex gap-2 flex-wrap content-center"},e.map((e=>{const t=e.toLowerCase();return n.createElement(r.Z,{className:"no-underline",key:t,href:`/${a}/${t}`},n.createElement(l,{name:e}))})))}},7320:function(e,t,a){var n=a(7294),r=a(1082),l=a(7986);t.Z=function(){const e=function(e){const t=new Set;return e.forEach((({frontmatter:e})=>{var a;null===(a=e.tags)||void 0===a||a.forEach((e=>{t.add(e)}))})),Array.from(t).sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())))}((0,r.useStaticQuery)("1402579868").allMdx.nodes);return n.createElement(l.Z,{tags:e})}},9043:function(e,t,a){var n=a(7294),r=a(1082),l=a(7986);t.Z=function(){const e=(0,r.useStaticQuery)("2094171154").allMdx.group.map((e=>e.fieldValue)).sort().reverse();return n.createElement(l.Z,{tags:e,prefix:"year"})}},1325:function(e,t,a){a.r(t);var n=a(7294),r=a(6990),l=a(9357),c=a(7320),s=a(9043);t.default=function({data:e,location:t}){var a;const o=(null===(a=e.site.siteMetadata)||void 0===a?void 0:a.title)||"Title";return n.createElement(r.Z,{location:t,title:o},n.createElement(l.Z,{title:"All Tags"}),n.createElement("div",{className:"card flex justify-center"},n.createElement("div",{className:"lg:min-w-[700px] max-w-[700px]"},n.createElement("div",{className:"flex justify-between mb-4"},n.createElement("h1",{className:"mb-3"},"All Tags")),n.createElement(c.Z,null),n.createElement("div",{className:"h-4"}),n.createElement(s.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-tags-js-0ca478df1dd0662d2e01.js.map