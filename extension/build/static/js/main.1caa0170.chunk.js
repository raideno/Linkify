(this.webpackJsonplinkify=this.webpackJsonplinkify||[]).push([[0],[,,,function(e,t,n){e.exports={container:"style_container__3hVGZ",left:"style_left__3Z4qZ",logo:"style_logo__gsLQ4",title:"style_title__1hj3W",description:"style_description__2HjkV",right:"style_right__3SqcS",icon:"style_icon__1Z_98"}},function(e,t,n){e.exports={container:"UserCard_container__2lt2b",left:"UserCard_left__7WJc5",avatar:"UserCard_avatar__hu91U",username:"UserCard_username__KG6y4",bio:"UserCard_bio__3uSpk",right:"UserCard_right__27CUK",icon:"UserCard_icon__3C5Cu"}},,function(e,t,n){e.exports={container:"Setting_container__1oE89",title:"Setting_title__5iHPZ",switch:"Setting_switch__3GiXI",slider:"Setting_slider__1rIg9"}},,function(e,t,n){e.exports={container:"SearchBar_container__alOtI",input:"SearchBar_input__liGSp",icon:"SearchBar_icon__bgg3x"}},function(e,t,n){e.exports={home:"styles_home__1PU8g",text:"styles_text__1gI6l",links:"styles_links__2SmJV"}},,function(e,t,n){e.exports={container:"styles_container__LLVnH"}},function(e,t,n){e.exports={container:"styles_container__1FTxL"}},function(e,t,n){e.exports={select:"Categorys_select__1Tmlp"}},function(e,t,n){e.exports={button:"HomeButton_button__3oriW"}},function(e,t,n){e.exports={button:"AddButton_button__21Jru"}},function(e,t,n){e.exports={button:"CancelButton_button__2kCAF"}},function(e,t,n){e.exports={button:"CreateButton_button__l13XV"}},function(e,t,n){e.exports={App:"App_App__3n6ez"}},function(e,t,n){e.exports={container:"styles_container__OHR6-"}},function(e,t,n){e.exports={button:"ClearLinks_button__30vtt"}},,,function(e,t,n){},,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);n(23);var c=n(2),a=n(1),i=n.n(a),s=n(12),r=n.n(s),o=Object(a.createContext)({previousPath:null,pathname:"/"});var l=function(){return Object(a.useContext)(o)},u=n(8),j=n.n(u),d=n(0);var b=function(e){var t=e.search,n=e.setSearch;return Object(d.jsxs)("div",{className:j.a.container,children:[Object(d.jsx)("input",{type:"text",value:t||"",placeholder:"Search",className:j.a.input,onChange:function(e){var t=e.target;return n(t.value)}}),Object(d.jsx)("div",{className:j.a.icon,onClick:function(){t&&n()},children:Object(d.jsx)("i",{className:t?"fas fa-times-circle":"fas fa-search"})})]})},h=n(13),v=n.n(h);var x=function(){return Object(d.jsx)("div",{className:v.a.select,children:Object(d.jsxs)("select",{children:[Object(d.jsx)("option",{children:"Tout"}),Object(d.jsx)("option",{value:"1",children:"\ud83d\udcbb Dev"}),Object(d.jsx)("option",{value:"2",children:"\ud83e\udd6a Cuisine"}),Object(d.jsx)("option",{value:"3",children:"\ud83d\udc84 Mode"}),Object(d.jsx)("option",{value:"4",children:"\u2708\ufe0f Travel"})]})})},_=n(14),O=n.n(_);var f=function(){var e=l();return Object(d.jsxs)("button",{className:O.a.button,onClick:function(){e.navigate("/")},children:[Object(d.jsx)("i",{className:"fas fa-home"}),"Home"]})};var m=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1];switch(l().navigation.pathname){case"/settings":case"/addlink":return Object(d.jsx)(f,{});default:return Object(d.jsxs)("div",{className:r.a.container,children:[Object(d.jsx)(b,{search:n,setSearch:i}),Object(d.jsx)(x,{})]})}},p=n(11),g=n.n(p),k=n(4),C=n.n(k);var N=function(){var e=l().navigate;return Object(d.jsxs)("div",{className:C.a.container,children:[Object(d.jsxs)("div",{className:C.a.left,children:[Object(d.jsx)("div",{className:C.a.avatar,children:Object(d.jsx)("img",{style:{borderRadius:"50%"},src:"https://cdn.discordapp.com/avatars/423897604330618883/566c677bba2b46858106b01dd3ed52cb.png?size=32",alt:"user-avatar"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:C.a.username,children:"diNaro"}),Object(d.jsx)("div",{className:C.a.bio,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde distinctio aut architecto illo. Possimus voluptates maxime error placeat magni iusto dolores rerum ad blanditiis."})]})]}),Object(d.jsx)("div",{className:C.a.right,children:Object(d.jsx)("div",{className:C.a.icon,onClick:function(){e("/settings")},children:Object(d.jsx)("svg",{"aria-hidden":"false",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"})})})})]})},y=n(15),L=n.n(y);var S=function(){var e=l().navigate;return Object(d.jsxs)("button",{className:L.a.button,onClick:function(){console.log("Click"),e("/addlink")},children:["Linkify",Object(d.jsx)("i",{className:"fas fa-link"})]})},w=n(16),H=n.n(w);var V=function(){var e=l();return Object(d.jsx)("button",{className:H.a.button,onClick:function(){e.navigate("/")},children:"Cancel"})},U=n(17),B=n.n(U);var P=n(22);var A=function(){var e=l(),t=Object(a.useState)(""),n=Object(c.a)(t,2),i=n[0],s=n[1],r=Object(a.useState)(""),o=Object(c.a)(r,2),u=o[0],j=o[1];return Object(a.useEffect)((function(){chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(e){var t=e[0].url,n=e[0].title;s(t),j(n)}))}),[]),Object(d.jsx)("button",{className:B.a.button,onClick:function(){!function(e){var t=e.link,n=e.title,c=void 0===n?null:n,a=e.description,i=void 0===a?null:a,s=e.keywords,r=void 0===s?[]:s,o=e.category,l=void 0===o?null:o;chrome.storage.local.get({links:[]},(function(e){var n=[{link:t,title:c,description:i,keywords:r,category:l}].concat(Object(P.a)(e.links));chrome.storage.local.set({links:n},(function(){chrome.storage.local.get("links",(function(e){console.log(e.links)}))}))}))}({link:i,title:u}),e.navigate("/")},children:"Confirm"})};var Z=function(){switch(l().navigation.pathname){case"/settings":return null;case"/addlink":return Object(d.jsxs)("div",{className:g.a.container,children:[Object(d.jsx)(V,{}),Object(d.jsx)(A,{})]});default:return Object(d.jsxs)("div",{className:g.a.container,children:[Object(d.jsx)(N,{}),Object(d.jsx)(S,{})]})}};var F=function(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsx)("main",{children:t}),Object(d.jsx)(Z,{})]})},W=n(18),I=n.n(W),J=n(19),M=n.n(J),q=n(6),E=n.n(q);var G=function(e){var t=e.name;return Object(d.jsxs)("div",{className:E.a.container,children:[Object(d.jsx)("div",{className:E.a.title,children:t}),Object(d.jsxs)("label",{className:E.a.switch,children:[Object(d.jsx)("input",{type:"checkbox"}),Object(d.jsx)("span",{className:E.a.slider})]})]})},R=n(20),T=n.n(R);var z=function(){var e=l();return Object(d.jsxs)("button",{className:T.a.button,onClick:function(){chrome.storage.local.set({links:[]}),e.navigate("/")},children:[Object(d.jsx)("i",{className:"fas fa-trash"}),"ClearLinks"]})};var K=function(){return Object(d.jsxs)("div",{className:M.a.container,children:[Object(d.jsx)(G,{name:"Synchronisation"}),Object(d.jsx)(G,{name:"Ferme Le"}),Object(d.jsx)(z,{})]})};n(26);var X=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"AddLink"})})},D=n(3),Q=n.n(D);var Y=function(e){var t=e.data;return console.log(t),Object(d.jsxs)("div",{className:Q.a.container,children:[Object(d.jsxs)("div",{className:Q.a.left,children:[Object(d.jsx)("div",{className:Q.a.logo}),Object(d.jsxs)("div",{className:Q.a.texts,children:[Object(d.jsx)("div",{className:Q.a.title,children:t.title}),Object(d.jsx)("div",{className:Q.a.description,children:"Linkify Website..."})]})]}),Object(d.jsx)("div",{className:Q.a.right,children:Object(d.jsx)("div",{className:Q.a.icon,onClick:function(){chrome.tabs.create({url:t.link})},children:Object(d.jsx)("i",{className:"fas fa-2x fa-external-link-alt"})})})]})},$=n(9),ee=n.n($);var te=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!0),r=Object(c.a)(s,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){chrome.storage.local.get("links",(function(e){i(e.links?e.links:[]),l(!1)})),chrome.storage.onChanged.addListener((function(e,t){l(!0),chrome.storage.local.get("links",(function(e){i(e.links?e.links:[]),l(!1)}))}))}),[]),o?null:Object(d.jsx)("div",{className:ee.a.home,children:0===n.length?Object(d.jsx)("div",{className:ee.a.text,children:"No Links Yet :("}):Object(d.jsx)("div",{className:ee.a.links,children:n.map((function(e,t){return Object(d.jsx)(Y,{data:e},"Home-link-"+t)}))})})};var ne=function(){var e=l().navigation.pathname,t=Object(a.useState)("NULL"),n=Object(c.a)(t,2),i=(n[0],n[1]);return Object(a.useState)((function(){try{chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(e){var t=e[0].url;i(t)}))}catch(e){console.log("Prblm")}}),[]),Object(d.jsx)("div",{className:I.a.App,children:Object(d.jsx)(F,{children:"/"===e?Object(d.jsx)(te,{}):"/settings"===e?Object(d.jsx)(K,{}):Object(d.jsx)(X,{})})})},ce=n(21);var ae=function(e){var t=e.children,n=Object(a.useState)({previousPath:null,pathname:"/"}),i=Object(c.a)(n,2),s=i[0],r=i[1];function l(e){r((function(t){return{previousPath:t.pathname,pathname:e}}))}var u=Object(a.useMemo)((function(){return{navigation:s,navigate:l}}),[s,l]);return Object(d.jsx)(o.Provider,{value:u,children:t})};n.n(ce).a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(ae,{children:Object(d.jsx)(ne,{})})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.1caa0170.chunk.js.map