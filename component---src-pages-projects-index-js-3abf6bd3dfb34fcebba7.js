(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6KBL":function(e,t,a){},"7oih":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("U5tq");a("NyTG");t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{fullwidth:!0}),r.a.createElement("div",{className:"layout-container"},t))}},JeRo:function(e,t,a){"use strict";a.r(t),a.d(t,"githubQuery",(function(){return u}));a("E5k/"),a("pJf4");var n=a("q1tI"),r=a.n(n),l=(a("aNpn"),a("7oih")),c=a("Wbzz");var o=function(e){return console.log(e.hasReadme),r.a.createElement("div",{className:"project-card"},r.a.createElement("div",{className:"project-card-body"},r.a.createElement("h4",null,e.name&&e.hasReadme?r.a.createElement(c.Link,{to:"/projects/"+e.name},e.description):e.description),e.languages&&e.languages.edges.length?r.a.createElement("h5",null,"Main Dev Language:"," ",r.a.createElement("span",{style:{color:e.languages.edges[0].node.color}},e.languages.edges[0].node.name)):null,e.extraBody?r.a.createElement("div",{className:"project-card-extra-body"},e.extraBody):null),r.a.createElement("div",{className:"project-card-footer"},e.url?r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer"},"See on github",r.a.createElement("i",{className:"bx bxl-github"})):null,e.extraFooter||null))},s=a("ZPkd");var u="703179686";t.default=function(e){var t=e.data.githubData.data.user.repositories.nodes,a=[].filter((function(e){return null!==e.data}));return console.log(a),r.a.createElement(l.a,null,r.a.createElement("h1",null,r.a.createElement(s.a,{text:"My Projects",onlyText:!0,cursorVariant:"dark"})),r.a.createElement("div",{className:"projects-grid"},r.a.createElement(o,{description:"Tweet Story",extraBody:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"A mobile app that reads your tweets for you"),r.a.createElement("p",null,"It's far more better than a screen reader, helpful for blind people")),extraFooter:r.a.createElement("a",{href:"https://tweetstory.app",target:"_blank",rel:"noreferrer"},"Visit app website",r.a.createElement("i",{className:"bx bxs-right-arrow"}))}),t.map((function(e,t){return r.a.createElement(o,Object.assign({key:t},e,{hasReadme:!!a.filter((function(t){return t.name===e.name})).length}))}))))}},NyTG:function(e,t,a){},U5tq:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=(a("f6wI"),a("Wbzz"));t.a=function(e){var t=e.fullwidth;return r.a.createElement("nav",{className:t?"navbar-fullwidth":"navbar-regular"},r.a.createElement("ul",null,t?r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},r.a.createElement("i",{className:"bx bxs-left-arrow"}))):null,r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/projects"},"Projects"))))}},ZPkd:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);a("6KBL");t.a=function(e){var t=e.text,a=e.onlyText,l=e.cursorVariant,c=Object(n.useState)(0),o=c[0],s=c[1];return Object(n.useEffect)((function(){o!==t.length&&setTimeout((function(){s(o+1)}),150)}),[o,t]),a?r.a.createElement(r.a.Fragment,null,t.slice(0,o),r.a.createElement("span",{className:"cursor-"+(l||"light")})):r.a.createElement("p",{className:"typewriter"},o?t.slice(0,o):"Loading..."," ",r.a.createElement("span",{className:"cursor-"+(l||"light")}))}},aNpn:function(e,t,a){},f6wI:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-projects-index-js-3abf6bd3dfb34fcebba7.js.map