(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"061g":function(e,t,n){"use strict";var o=n("1LhI"),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,u,l,s=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),c=document.createRange(),u=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),u.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(c):u.removeAllRanges()),l&&document.body.removeChild(l),i()}return s}},"1LhI":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},"8h3H":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("O94r"),r=n.n(o),a=n("ERkP"),i=n.n(a),c=n("j/s1"),u=n("gYIA"),l=i.a.createElement,s=function(e){var t=i.a.useRef(),n=function(n){var o;(null===(o=t.current.contentWindow)||void 0===o?void 0:o.location.href)===u.b&&e.onCloseMeCallback()};return i.a.useEffect((function(){return t.current.addEventListener("load",n),function(){var e;null===(e=t.current)||void 0===e||e.removeEventListener("load",n)}}),[]),l(f,{ref:t,src:e.src,className:r()(e.className)})},f=c.default.iframe.withConfig({displayName:"ContributeIframe__StyledIframe",componentId:"ajwla2-0"})(["height:100%;width:100%;position:absolute;"])},EMob:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n("ERkP")),r=a(n("061g"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?d(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n;l(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return b(d(n=f(this,(e=p(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,u=t.options,l=o.default.Children.only(c),s=(0,r.default)(a,u);i&&i(a,s),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&s(n.prototype,a),i&&s(n,i),t}(o.default.PureComponent);t.CopyToClipboard=h,b(h,"defaultProps",{onCopy:void 0,options:void 0})},KYZq:function(e,t,n){"use strict";var o=n("EMob").CopyToClipboard;o.CopyToClipboard=o,e.exports=o},OjFY:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return l}));var o=n("MBti"),r={id:"shareMenu_ariaLabel_shareOnSocialMedia",defaultMessage:"Share on social media"},a={id:"shareMenu_shareText_checkoutThisLink",defaultMessage:"Check out this link on IMDb!"},i=a,c={id:"shareMenu_copyLink",defaultMessage:"Copy Link"},u={id:"shareMenu_emailLink",defaultMessage:"Email Link"},l=function(e){return"string"===typeof e?e:Object(o.a)(e)}},c4DU:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n("ERkP"),r=n("WFZG"),a=n("oZvv"),i=n("8h3H"),c=n("Minc"),u=n("MBti"),l=n("sTM0"),s=o.createElement,f=function(e){var t=e.contributeButton,n=e.contributeUrl,f=e.iframeClassName,p=e.smallBreakpointAction,d=Object(o.useState)(!1),m=d[0],b=d[1],h=function(){return b(!1)},y=function(e){e.stopPropagation()},v=function(e){var t=e.breakpoint,n=e.isLoggedIn,o=e.largeBreakpointAction,r=e.refTagForLoginRedirect,a=e.smallBreakpointAction,i=t.l||t.xl;return function(e){e.preventDefault(),i?n?o(e):Object(l.a)(r):a(e)}}({isLoggedIn:Object(c.a)(),breakpoint:Object(r.useBreakpointsAsConfig)(),smallBreakpointAction:p,largeBreakpointAction:function(e){e.stopPropagation(),e.preventDefault(),b(!0)}}),g=o.cloneElement(t,{href:n,onClick:v,onKeyDown:function(e){Object(a.isEnterOrSpaceKey)(e)&&v(e)}}),w=Object(u.a)({id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"});return s(o.Fragment,null,g,m&&s("div",{onClick:y,onMouseLeave:y,"data-testid":"contribute-iframe-drawer-container"},s(r.Drawer,{isOpen:m,onCloseClicked:h,side:"right",closePromptLabel:w},s(i.a,{src:n,onCloseMeCallback:h,className:f,"data-testid":"contribute-iframe"}))))};t.b=f},gC6y:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s}));var o=n("0D0S"),r=n.n(o),a=function(e){return"/title/".concat(e,"/reviews?").concat("ref_=tt_urv")},i=function(e){return"/user/".concat(e,"/?").concat("ref_=tt_urv_usr")},c=function(e){return"/review/".concat(e,"/?").concat("ref_=tt_urv")},u=function(e,t){var n=-1!==e.indexOf("?")?"&":"?";return"".concat(e).concat(n,"return_url=").concat(encodeURIComponent(t))},l=function(e,t){return"".concat("Beta"===r()().publicRuntimeConfig.stage?"https://contribute.dev.imdb.com":"https://contribute.imdb.com","/review/").concat(e,"/").concat(t,"/report?bus=imdb&site=www&").concat("ref_=tt_urv")},s=function(e,t,n){return"/title/".concat(e,"/review/").concat(t,"/vote/interesting?voteValue=").concat(n)}},gfXT:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var o=n("ERkP"),r=n.n(o),a=r.a.createElement,i=r.a.createContext({type:void 0,subType:void 0,id:void 0}),c=function(e){var t=e.value,n=e.children;return a(i.Provider,{value:t},n)},u=function(){return r.a.useContext(i)}},y0U9:function(e,t,n){"use strict";n.d(t,"a",(function(){return Z}));var o=n("ERkP"),r=n.n(o),a=n("WFZG"),i=n("E39Q"),c=n("MBti"),u=n("KYZq"),l=n.n(u),s=n("01Zg"),f=n.n(s),p=n("JeX9"),d=n("gfXT"),m=n("OjFY"),b="ext_shr_em",h="ext_shr_fb",y="ext_shr_tw",v="ext_shr_lnk",g=function(e,t,n,o){return{shareLabelText:e,shareLinkUrl:t,shareIconName:n,shareLinkTarget:o}},w=n("c4DU"),k=n("gYIA"),C=n("j/s1"),O=n("gC6y"),_=n("O94r"),j=n.n(_),x=r.a.createElement,P={email:"share-em",facebook:"share-fb",twitter:"share-tw",link:"share-lnk"},E={email:"share_em",facebook:"share_fb",twitter:"share_tw",link:"share_lnk"},I={name:"nm_",title:"tt_"},N="extra-contribute-action-",L="contribute-extra-action-",S=C.default.div.withConfig({displayName:"ShareMenuList__ExtraContributeAction",componentId:"lx44wt-0"})(["cursor:pointer;"]),D=function(e){if(i.d)return null;var t=Object(d.b)(),n=function(n){return function(o){o.stopPropagation(),Object(p.q)(P[n.shareIconName]),t.type&&Object(p.r)(I[t.type]+E[n.shareIconName],t,P[n.shareIconName],p.b.ACTION_ONLY),e.interactionHandler(n.shareLinkUrl)&&o.preventDefault()}},o=function(e){e.stopPropagation()},r=function(e,t){var n=encodeURIComponent(Object(m.f)(t.emailSubject)),o=encodeURIComponent(Object(m.f)(t.shareBody)),r=encodeURIComponent(e+"?ref_="+h),a=encodeURIComponent(e+"?ref_="+y),i=encodeURIComponent(e+"?ref_="+b),c="".concat("https://www.facebook.com/sharer.php","?u=").concat(r),u="".concat("https://twitter.com/intent/tweet","?text=").concat(o," - ").concat(a),l="mailto:?subject=".concat(n,"&body=").concat(o," - ").concat(i);return[g("Facebook",c,"facebook","_blank"),g("Twitter",u,"twitter","_blank"),g(m.e,l,"email","_blank"),g(m.a,e+"?ref_="+v,"link","_copy")]}(function(e){var t;if(i.d)throw new Error("not supported from node");e=null!==(t=e)&&void 0!==t?t:window.location.href;var n=new f.a(e,window.location,!0);return delete n.query.ref_,n.set("query",n.query),n.host||n.set("host",window.location.host),n.toString()}(e.url),e.shareProps).map((function(e){return"_copy"===e.shareLinkTarget?function(e){return x(l.a,{key:"copy-to-clipboard",text:e.shareLinkUrl,options:{format:"text/plain"}},x(a.ListItem,{className:j()(["sharemenu-listitem","sharemenu-copylink"]),preIconName:"link",onClick:n(e)},Object(m.f)(e.shareLabelText)))}(e):function(e){return x(a.ListItem,{key:e.shareIconName,preIconName:e.shareIconName,href:e.shareLinkUrl,target:e.shareLinkTarget,className:"sharemenu-listitem",onClick:n(e)},Object(m.f)(e.shareLabelText))}(e)}));if(e.shareProps.extraActions){r.push(x(a.ListDivider,{key:"divider"}));var c=0;e.shareProps.extraActions.forEach((function(t,n){t.isContributionAction?(c+=1,r.push(function(e,t,n){var r=e.linkUrl,i={contributeButton:x(S,{onMouseLeave:o,"data-testid":N+t},x(a.ListItem,{className:j()([e.className,"sharemenu-listitem"]),key:e.iconName+"-"+n,preIconName:e.iconName,postIconName:e.postIconName},Object(m.f)(e.label))),contributeUrl:Object(O.a)(r,k.b),iframeClassName:L+t,smallBreakpointAction:function(e){window.open(Object(O.a)(r,window.location.href),"_self")}};return x(w.b,i)}(t,c,n))):r.push(function(t,n){var o=t.linkUrl;return x(a.ListItem,{className:j()([t.className,"sharemenu-listitem"]),key:t.iconName+"-"+n,preIconName:t.iconName,postIconName:t.postIconName,href:o,target:t.linkTarget,onClick:function(n){n.stopPropagation();var r=!1;t.handler&&t.handler(o)&&(r=!0),e.interactionHandler(o)&&(r=!0),r&&n.preventDefault()}},Object(m.f)(t.label))}(t,n))}))}return x(a.List,{className:"sharemenu-list"},r)},M=r.a.createElement,T=function(e){return M(a.BottomSheet,{isOpen:e.menuVisibility,onCloseClicked:function(){return e.interactionHandler()},"data-testid":"share-bottom-sheet",closePromptLabel:Object(c.a)({id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"})},M(D,e))},A=C.default.div.withConfig({displayName:"ShareMenuFlyoutstyles__ShareMenuContainer",componentId:"sc-4w3yxu-0"})(["position:relative;right:0;top:0;text-align:left;"]),R=r.a.createElement,U=function(e){var t=function(){return e.interactionHandler()};return Object(o.useEffect)((function(){return window.addEventListener("click",t),function(){return window.removeEventListener("click",t)}}),[]),R(A,{onMouseLeave:t,"data-testid":"share-container"},R(a.SetPalette,{palette:"dark"},R(a.Menu,{menuID:"media-details-share-button",isVisible:e.menuVisibility,mode:"anchored"},R(D,e))))},B=r.a.createElement,F=function(e){if(!i.c)return null;var t=Object(a.useBreakpointsAsConfig)(),n=t.s||t.xs,o=e.forceBottomSheet||n;return B(o?T:U,e)},H=n("bM0r"),Y=n("y6um"),q=r.a.createElement;var Z=function(e){var t,n=Object(o.useState)(!1),i=n[0],c=n[1],u=Object(Y.c)().context,l=u.pageType,s=u.pageConst,f={type:l,subType:u.subPageType,id:s},p=function(e){var t,n,o;return{shareBody:null!==(t=null===e||void 0===e?void 0:e.shareBody)&&void 0!==t?t:m.c,emailSubject:null!==(n=null===e||void 0===e?void 0:e.emailSubject)&&void 0!==n?n:m.b,label:null!==(o=null===e||void 0===e?void 0:e.label)&&void 0!==o?o:m.d,extraActions:null===e||void 0===e?void 0:e.extraActions}}(e.shareProps),d=Object(m.f)(p.label),b={shareProps:p,url:e.url,forceBottomSheet:e.forceBottomSheet,interactionHandler:function(t){return c(!1),!(!t||!e.shareHandler)&&e.shareHandler(t)},menuVisibility:i};return q(r.a.Fragment,null,q(a.IconButton,{name:null!==(t=e.iconButtonName)&&void 0!==t?t:"share",label:d,onClick:function(t){t.stopPropagation();var n=!i;!function(e,t){var n="".concat(t).concat("-menu-open");Object(H.e)(e,n,H.a.POP_UP)}(f,e.pageActionPrefix),c(n)},className:"sharemenu-iconbutton",onColor:e.onColor}),q(F,b))}}}]);