function Je(T,l){for(var y=0;y<l.length;y++){const C=l[y];if(typeof C!="string"&&!Array.isArray(C)){for(const a in C)if(a!=="default"&&!(a in T)){const x=Object.getOwnPropertyDescriptor(C,a);x&&Object.defineProperty(T,a,x.get?x:{enumerable:!0,get:()=>C[a]})}}}return Object.freeze(Object.defineProperty(T,Symbol.toStringTag,{value:"Module"}))}var ge={},ie={};(function(){var T={},l="";try{l=location.hash.toString()}catch{}var y=N(l),C=te("initParams");if(C)for(var a in C)typeof y[a]>"u"&&(y[a]=C[a]);L("initParams",y);var x=!1,O;try{if(x=window.parent!=null&&window!=window.parent,x){window.addEventListener("message",function(p){if(p.source===window.parent){try{var u=JSON.parse(p.data)}catch{return}if(!(!u||!u.eventType))if(u.eventType=="set_custom_style")p.origin==="https://web.telegram.org"&&(O.innerHTML=u.eventData);else if(u.eventType=="reload_iframe"){try{window.parent.postMessage(JSON.stringify({eventType:"iframe_will_reload"}),"*")}catch{}location.reload()}else B(u.eventType,u.eventData)}}),O=document.createElement("style"),document.head.appendChild(O);try{window.parent.postMessage(JSON.stringify({eventType:"iframe_ready",eventData:{reload_supported:!0}}),"*")}catch{}}}catch{}function E(p){try{return p=p.replace(/\+/g,"%20"),decodeURIComponent(p)}catch{return p}}function N(p){p=p.replace(/^#/,"");var u={};if(!p.length)return u;if(p.indexOf("=")<0&&p.indexOf("?")<0)return u._path=E(p),u;var b=p.indexOf("?");if(b>=0){var v=p.substr(0,b);u._path=E(v),p=p.substr(b+1)}var P=_(p);for(var I in P)u[I]=P[I];return u}function _(p){var u={};if(!p.length)return u;var b=p.split("&"),v,P,I,j;for(v=0;v<b.length;v++)P=b[v].split("="),I=E(P[0]),j=P[1]==null?null:E(P[1]),u[I]=j;return u}function Y(p,u){var b=p.indexOf("#");if(b<0)return p+"#"+u;var v=p.substr(b+1);return v.indexOf("=")>=0||v.indexOf("?")>=0?p+"&"+u:v.length>0?p+"?"+u:p+u}function ee(p,u,b){if(u||(u=function(){}),b===void 0&&(b=""),console.log("[Telegram.WebView] > postEvent",p,b),window.TelegramWebviewProxy!==void 0)TelegramWebviewProxy.postEvent(p,JSON.stringify(b)),u();else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:p,eventData:b})),u();else if(x)try{var v="https://web.telegram.org";v="*",window.parent.postMessage(JSON.stringify({eventType:p,eventData:b}),v),u()}catch(P){u(P)}else u({notAvailable:!0})}function B(p,u){console.log("[Telegram.WebView] < receiveEvent",p,u),re(p,function(b){b(p,u)})}function re(p,u){var b=T[p];if(!(b===void 0||!b.length))for(var v=0;v<b.length;v++)try{u(b[v])}catch{}}function q(p,u){T[p]===void 0&&(T[p]=[]);var b=T[p].indexOf(u);b===-1&&T[p].push(u)}function ae(p,u){if(T[p]!==void 0){var b=T[p].indexOf(u);b!==-1&&T[p].splice(b,1)}}function L(p,u){try{return window.sessionStorage.setItem("__telegram__"+p,JSON.stringify(u)),!0}catch{}return!1}function te(p){try{return JSON.parse(window.sessionStorage.getItem("__telegram__"+p))}catch{}return null}window.Telegram||(window.Telegram={}),window.Telegram.WebView={initParams:y,isIframe:x,onEvent:q,offEvent:ae,postEvent:ee,receiveEvent:B,callEventCallbacks:re},window.Telegram.Utils={urlSafeDecode:E,urlParseQueryString:_,urlParseHashParams:N,urlAppendHashParams:Y,sessionStorageSet:L,sessionStorageGet:te},window.TelegramGameProxy_receiveEvent=B,window.TelegramGameProxy={receiveEvent:B}})();(function(){var T=window.Telegram.Utils,l=window.Telegram.WebView,y=l.initParams,C=l.isIframe,a={},x="",O={},E={},N="light",_="6.0",Y="unknown";if(y.tgWebAppData&&y.tgWebAppData.length){x=y.tgWebAppData,O=T.urlParseQueryString(x);for(var ee in O){var B=O[ee];try{(B.substr(0,1)=="{"&&B.substr(-1)=="}"||B.substr(0,1)=="["&&B.substr(-1)=="]")&&(O[ee]=JSON.parse(B))}catch{}}}if(y.tgWebAppThemeParams&&y.tgWebAppThemeParams.length){var re=y.tgWebAppThemeParams;try{var q=JSON.parse(re);q&&se(q)}catch{}}var q=T.sessionStorageGet("themeParams");q&&se(q),y.tgWebAppVersion&&(_=y.tgWebAppVersion),y.tgWebAppPlatform&&(Y=y.tgWebAppPlatform);function ae(e,r){r.theme_params&&(se(r.theme_params),window.Telegram.WebApp.MainButton.setParams({}),fe(),v("themeChanged"))}var L=window.innerHeight;function te(e,r){r.height&&(window.removeEventListener("resize",p),le(r))}function p(e){L!=window.innerHeight&&(L=window.innerHeight,v("viewportChanged",{isStateStable:!0}))}function u(e){if(!(e.metaKey||e.ctrlKey)){for(var r=e.target;r.tagName!="A"&&r.parentNode;)r=r.parentNode;r.tagName=="A"&&r.target!="_blank"&&(r.protocol=="http:"||r.protocol=="https:")&&r.hostname=="t.me"&&(a.openTgLink(r.href),e.preventDefault())}}function b(e){return e.toString().replace(/^\s+|\s+$/g,"")}function v(e){var r=Array.prototype.slice.call(arguments);e=r.shift(),l.callEventCallbacks("webview:"+e,function(t){t.apply(a,r)})}function P(e,r){l.onEvent("webview:"+e,r)}function I(e,r){l.offEvent("webview:"+e,r)}function j(e,r){var t=document.documentElement;t&&t.style&&t.style.setProperty&&t.style.setProperty("--tg-"+e,r)}function se(e){e.bg_color=="#1c1c1d"&&e.bg_color==e.secondary_bg_color&&(e.secondary_bg_color="#2c2c2e");var r;for(var t in e)(r=D(e[t]))&&(E[t]=r,t=="bg_color"&&(N=Ce(r)?"dark":"light",j("color-scheme",N)),t="theme-"+t.split("_").join("-"),j(t,r));T.sessionStorageSet("themeParams",E)}var M={};function ve(e){for(var r=100;--r;){for(var t="",o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=o.length,d=0;d<e;d++)t+=o[Math.floor(Math.random()*n)];if(!M[t])return M[t]={},t}throw Error("WebAppCallbackIdGenerateFailed")}var F=!1,Q=!1,me=!0;function le(e){typeof e<"u"&&(me=!!e.is_expanded,F=e.height,e.is_state_stable&&(Q=e.height),v("viewportChanged",{isStateStable:!!e.is_state_stable}));var r,t;F!==!1?r=F-S+"px":r=S?"calc(100vh - "+S+"px)":"100vh",Q!==!1?t=Q-S+"px":t=S?"calc(100vh - "+S+"px)":"100vh",j("viewport-height",r),j("viewport-stable-height",t)}var pe=!1;function We(e){if(!h("6.2")){console.warn("[Telegram.WebApp] Closing confirmation is not supported in version "+_);return}pe=!!e,l.postEvent("web_app_setup_closing_behavior",!1,{need_confirmation:pe})}var ue=!0;function Ee(e){if(!h("7.7")){console.warn("[Telegram.WebApp] Changing swipes behavior is not supported in version "+_);return}ue=!!e,l.postEvent("web_app_setup_swipe_behavior",!1,{allow_vertical_swipe:ue})}var H="bg_color",J=null;function Te(){return H=="secondary_bg_color"?E.secondary_bg_color:H=="bg_color"?E.bg_color:J}function Pe(e){if(!h("6.1")){console.warn("[Telegram.WebApp] Header color is not supported in version "+_);return}h("6.9")||(E.bg_color&&E.bg_color==e?e="bg_color":E.secondary_bg_color&&E.secondary_bg_color==e&&(e="secondary_bg_color"));var r=null,t=null;if(e=="bg_color"||e=="secondary_bg_color")t=e;else if(h("6.9")&&(r=D(e),!r))throw console.error("[Telegram.WebApp] Header color format is invalid",e),Error("WebAppHeaderColorInvalid");if(!h("6.9")&&t!="bg_color"&&t!="secondary_bg_color")throw console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'",e),Error("WebAppHeaderColorKeyInvalid");H=t,J=r,_e()}var he=null,ce=null;function _e(){(he!=H||ce!=J)&&(he=H,ce=J,ce?l.postEvent("web_app_set_header_color",!1,{color:J}):l.postEvent("web_app_set_header_color",!1,{color_key:H}))}var oe="bg_color";function we(){return oe=="secondary_bg_color"?E.secondary_bg_color:oe=="bg_color"?E.bg_color:oe}function ke(e){if(!h("6.1")){console.warn("[Telegram.WebApp] Background color is not supported in version "+_);return}var r;if(e=="bg_color"||e=="secondary_bg_color")r=e;else if(r=D(e),!r)throw console.error("[Telegram.WebApp] Background color format is invalid",e),Error("WebAppBackgroundColorInvalid");oe=r,fe()}var ye=null;function fe(){var e=we();ye!=e&&(ye=e,l.postEvent("web_app_set_background_color",!1,{color:e}))}function D(e){e+="";var r;if(r=/^\s*#([0-9a-f]{6})\s*$/i.exec(e))return"#"+r[1].toLowerCase();if(r=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+r[1]+r[1]+r[2]+r[2]+r[3]+r[3]).toLowerCase();if(r=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var t=parseInt(r[1]),o=parseInt(r[2]),n=parseInt(r[3]);return t=(t<16?"0":"")+t.toString(16),o=(o<16?"0":"")+o.toString(16),n=(n<16?"0":"")+n.toString(16),"#"+t+o+n}return!1}function Ce(e){e=e.replace(/[\s#]/g,""),e.length==3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e.substr(0,2),16),t=parseInt(e.substr(2,2),16),o=parseInt(e.substr(4,2),16),n=Math.sqrt(.299*(r*r)+.587*(t*t)+.114*(o*o));return n<120}function xe(e,r){typeof e!="string"&&(e=""),typeof r!="string"&&(r=""),e=e.replace(/^\s+|\s+$/g,"").split("."),r=r.replace(/^\s+|\s+$/g,"").split(".");var t=Math.max(e.length,r.length),o,n,d;for(o=0;o<t;o++)if(n=parseInt(e[o])||0,d=parseInt(r[o])||0,n!=d)return n>d?1:-1;return 0}function h(e){return xe(_,e)>=0}function Se(e){if(window.Blob)try{return new Blob([e]).size}catch{}for(var r=e.length,t=e.length-1;t>=0;t--){var o=e.charCodeAt(t);o>127&&o<=2047?r++:o>2047&&o<=65535&&(r+=2),o>=56320&&o<=57343&&t--}return r}var Be=function(){var e=!1,r={};Object.defineProperty(r,"isVisible",{set:function(f){g({is_visible:f})},get:function(){return e},enumerable:!0});var t=null;l.onEvent("back_button_pressed",o);function o(){v("backButtonClicked")}function n(){return{is_visible:e}}function d(f){return typeof f>"u"&&(f=n()),JSON.stringify(f)}function s(){return h("6.1")?!0:(console.warn("[Telegram.WebApp] BackButton is not supported in version "+_),!1)}function c(){var f=n(),w=d(f);t!==w&&(t=w,l.postEvent("web_app_setup_back_button",!1,f))}function g(f){return s()&&(typeof f.is_visible<"u"&&(e=!!f.is_visible),c()),r}return r.onClick=function(f){return s()&&P("backButtonClicked",f),r},r.offClick=function(f){return s()&&I("backButtonClicked",f),r},r.show=function(){return g({is_visible:!0})},r.hide=function(){return g({is_visible:!1})},r}(),S=0,Ie=function(){var e=!1,r=!0,t=!1,o="CONTINUE",n=!1,d=!1,s={};Object.defineProperty(s,"text",{set:function(i){s.setParams({text:i})},get:function(){return o},enumerable:!0}),Object.defineProperty(s,"color",{set:function(i){s.setParams({color:i})},get:function(){return n||E.button_color||"#2481cc"},enumerable:!0}),Object.defineProperty(s,"textColor",{set:function(i){s.setParams({text_color:i})},get:function(){return d||E.button_text_color||"#ffffff"},enumerable:!0}),Object.defineProperty(s,"isVisible",{set:function(i){s.setParams({is_visible:i})},get:function(){return e},enumerable:!0}),Object.defineProperty(s,"isProgressVisible",{get:function(){return t},enumerable:!0}),Object.defineProperty(s,"isActive",{set:function(i){s.setParams({is_active:i})},get:function(){return r},enumerable:!0});var c=null;l.onEvent("main_button_pressed",k);var g=null,f={};if(y.tgWebAppDebug){g=document.createElement("tg-main-button"),f={font:"600 14px/18px sans-serif",display:"none",width:"100%",height:"48px",borderRadius:"0",background:"no-repeat right center",position:"fixed",left:"0",right:"0",bottom:"0",margin:"0",padding:"15px 20px",textAlign:"center",boxSizing:"border-box",zIndex:"10000"};for(var w in f)g.style[w]=f[w];document.addEventListener("DOMContentLoaded",function i(m){document.removeEventListener("DOMContentLoaded",i),document.body.appendChild(g),g.addEventListener("click",k,!1)})}function k(){r&&v("mainButtonClicked")}function ne(){var i=s.color,m=s.textColor;return e?{is_visible:!0,is_active:r,is_progress_visible:t,text:o,color:i,text_color:m}:{is_visible:!1}}function be(i){return typeof i>"u"&&(i=ne()),JSON.stringify(i)}function X(){var i=ne(),m=be(i);c!==m&&(c=m,l.postEvent("web_app_setup_main_button",!1,i),y.tgWebAppDebug&&U(i))}function U(i){i.is_visible?(g.style.display="block",S=48,g.style.opacity=i.is_active?"1":"0.8",g.style.cursor=i.is_active?"pointer":"auto",g.disabled=!i.is_active,g.innerText=i.text,g.style.backgroundImage=i.is_progress_visible?"url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewport%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%3Ccircle%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222.25%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20stroke-dashoffset%3D%22106%22%20r%3D%229%22%20stroke-dasharray%3D%2256.52%22%20rotate%3D%22-90%22%3E%3Canimate%20attributeName%3D%22stroke-dashoffset%22%20attributeType%3D%22XML%22%20dur%3D%22360s%22%20from%3D%220%22%20to%3D%2212500%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3CanimateTransform%20attributeName%3D%22transform%22%20attributeType%3D%22XML%22%20type%3D%22rotate%22%20dur%3D%221s%22%20from%3D%22-90%2024%2024%22%20to%3D%22630%2024%2024%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')":"none",g.style.backgroundColor=i.color,g.style.color=i.text_color):(g.style.display="none",S=0),document.documentElement&&(document.documentElement.style.boxSizing="border-box",document.documentElement.style.paddingBottom=S+"px"),le()}function V(i){if(typeof i.text<"u"){var m=b(i.text);if(!m.length)throw console.error("[Telegram.WebApp] Main button text is required",i.text),Error("WebAppMainButtonParamInvalid");if(m.length>64)throw console.error("[Telegram.WebApp] Main button text is too long",m),Error("WebAppMainButtonParamInvalid");o=m}if(typeof i.color<"u")if(i.color===!1||i.color===null)n=!1;else{var A=D(i.color);if(!A)throw console.error("[Telegram.WebApp] Main button color format is invalid",i.color),Error("WebAppMainButtonParamInvalid");n=A}if(typeof i.text_color<"u")if(i.text_color===!1||i.text_color===null)d=!1;else{var W=D(i.text_color);if(!W)throw console.error("[Telegram.WebApp] Main button text color format is invalid",i.text_color),Error("WebAppMainButtonParamInvalid");d=W}if(typeof i.is_visible<"u"){if(i.is_visible&&!s.text.length)throw console.error("[Telegram.WebApp] Main button text is required"),Error("WebAppMainButtonParamInvalid");e=!!i.is_visible}return typeof i.is_active<"u"&&(r=!!i.is_active),X(),s}return s.setText=function(i){return s.setParams({text:i})},s.onClick=function(i){return P("mainButtonClicked",i),s},s.offClick=function(i){return I("mainButtonClicked",i),s},s.show=function(){return s.setParams({is_visible:!0})},s.hide=function(){return s.setParams({is_visible:!1})},s.enable=function(){return s.setParams({is_active:!0})},s.disable=function(){return s.setParams({is_active:!1})},s.showProgress=function(i){return r=!!i,t=!0,X(),s},s.hideProgress=function(){return s.isActive||(r=!0),t=!1,X(),s},s.setParams=V,s}(),Ae=function(){var e=!1,r={};Object.defineProperty(r,"isVisible",{set:function(f){g({is_visible:f})},get:function(){return e},enumerable:!0});var t=null;l.onEvent("settings_button_pressed",o);function o(){v("settingsButtonClicked")}function n(){return{is_visible:e}}function d(f){return typeof f>"u"&&(f=n()),JSON.stringify(f)}function s(){return h("6.10")?!0:(console.warn("[Telegram.WebApp] SettingsButton is not supported in version "+_),!1)}function c(){var f=n(),w=d(f);t!==w&&(t=w,l.postEvent("web_app_setup_settings_button",!1,f))}function g(f){return s()&&(typeof f.is_visible<"u"&&(e=!!f.is_visible),c()),r}return r.onClick=function(f){return s()&&P("settingsButtonClicked",f),r},r.offClick=function(f){return s()&&I("settingsButtonClicked",f),r},r.show=function(){return g({is_visible:!0})},r.hide=function(){return g({is_visible:!1})},r}(),Me=function(){var e={};function r(t){if(!h("6.1"))return console.warn("[Telegram.WebApp] HapticFeedback is not supported in version "+_),e;if(t.type=="impact"){if(t.impact_style!="light"&&t.impact_style!="medium"&&t.impact_style!="heavy"&&t.impact_style!="rigid"&&t.impact_style!="soft")throw console.error("[Telegram.WebApp] Haptic impact style is invalid",t.impact_style),Error("WebAppHapticImpactStyleInvalid")}else if(t.type=="notification"){if(t.notification_type!="error"&&t.notification_type!="success"&&t.notification_type!="warning")throw console.error("[Telegram.WebApp] Haptic notification type is invalid",t.notification_type),Error("WebAppHapticNotificationTypeInvalid")}else if(t.type!="selection_change")throw console.error("[Telegram.WebApp] Haptic feedback type is invalid",t.type),Error("WebAppHapticFeedbackTypeInvalid");return l.postEvent("web_app_trigger_haptic_feedback",!1,t),e}return e.impactOccurred=function(t){return r({type:"impact",impact_style:t})},e.notificationOccurred=function(t){return r({type:"notification",notification_type:t})},e.selectionChanged=function(){return r({type:"selection_change"})},e}(),Oe=function(){var e={};function r(t,o,n){if(!h("6.9"))throw console.error("[Telegram.WebApp] CloudStorage is not supported in version "+_),Error("WebAppMethodUnsupported");return de(t,o,n),e}return e.setItem=function(t,o,n){return r("saveStorageValue",{key:t,value:o},n)},e.getItem=function(t,o){return e.getItems([t],o?function(n,d){n?o(n):o(null,d[t])}:null)},e.getItems=function(t,o){return r("getStorageValues",{keys:t},o)},e.removeItem=function(t,o){return e.removeItems([t],o)},e.removeItems=function(t,o){return r("deleteStorageValues",{keys:t},o)},e.getKeys=function(t){return r("getStorageKeys",{},t)},e}(),qe=function(){var e=!1,r=!1,t="unknown",o=!1,n=!1,d=!1,s="",c={};Object.defineProperty(c,"isInited",{get:function(){return e},enumerable:!0}),Object.defineProperty(c,"isBiometricAvailable",{get:function(){return e&&r},enumerable:!0}),Object.defineProperty(c,"biometricType",{get:function(){return t||"unknown"},enumerable:!0}),Object.defineProperty(c,"isAccessRequested",{get:function(){return o},enumerable:!0}),Object.defineProperty(c,"isAccessGranted",{get:function(){return o&&n},enumerable:!0}),Object.defineProperty(c,"isBiometricTokenSaved",{get:function(){return d},enumerable:!0}),Object.defineProperty(c,"deviceId",{get:function(){return s||""},enumerable:!0});var g={callbacks:[]},f=!1,w=!1,k=!1;l.onEvent("biometry_info_received",ne),l.onEvent("biometry_auth_requested",be),l.onEvent("biometry_token_updated",X);function ne(i,m){if(e=!0,m.available?(r=!0,t=m.type||"unknown",m.access_requested?(o=!0,n=!!m.access_granted,d=!!m.token_saved):(o=!1,n=!1,d=!1)):(r=!1,t="unknown",o=!1,n=!1,d=!1),s=m.device_id||"",g.callbacks.length>0)for(var A=0;A<g.callbacks.length;A++){var W=g.callbacks[A];W()}if(f){var Z=f;f=!1,Z.callback&&Z.callback(n)}v("biometricManagerUpdated")}function be(i,m){var A=m.status=="authorized",W=m.token||"";if(w){var Z=w;w=!1,Z.callback&&Z.callback(A,A?W:null)}v("biometricAuthRequested",A?{isAuthenticated:!0,biometricToken:W}:{isAuthenticated:!1})}function X(i,m){var A=!1;if(r&&o&&(m.status=="updated"?(d=!0,A=!0):m.status=="removed"&&(d=!1,A=!0)),k){var W=k;k=!1,W.callback&&W.callback(A)}v("biometricTokenUpdated",{isUpdated:A})}function U(){return h("7.2")?!0:(console.warn("[Telegram.WebApp] BiometricManager is not supported in version "+_),!1)}function V(){if(!e)throw console.error("[Telegram.WebApp] BiometricManager should be inited before using."),Error("WebAppBiometricManagerNotInited");return!0}return c.init=function(i){return!U()||e||(i&&g.callbacks.push(i),l.postEvent("web_app_biometry_get_info",!1)),c},c.requestAccess=function(i,m){if(!U())return c;if(V(),!r)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(f)throw console.error("[Telegram.WebApp] Access is already requested"),Error("WebAppBiometricManagerAccessRequested");var A={};if(typeof i.reason<"u"){var W=b(i.reason);if(W.length>128)throw console.error("[Telegram.WebApp] Biometric reason is too long",W),Error("WebAppBiometricRequestAccessParamInvalid");W.length>0&&(A.reason=W)}return f={callback:m},l.postEvent("web_app_biometry_request_access",!1,A),c},c.authenticate=function(i,m){if(!U())return c;if(V(),!r)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!n)throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."),Error("WebAppBiometricManagerBiometricAccessNotGranted");if(w)throw console.error("[Telegram.WebApp] Authentication request is already in progress."),Error("WebAppBiometricManagerAuthenticationRequested");var A={};if(typeof i.reason<"u"){var W=b(i.reason);if(W.length>128)throw console.error("[Telegram.WebApp] Biometric reason is too long",W),Error("WebAppBiometricRequestAccessParamInvalid");W.length>0&&(A.reason=W)}return w={callback:m},l.postEvent("web_app_biometry_request_auth",!1,A),c},c.updateBiometricToken=function(i,m){if(!U())return c;if(i=i||"",i.length>1024)throw console.error("[Telegram.WebApp] Token is too long",i),Error("WebAppBiometricManagerTokenInvalid");if(V(),!r)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!n)throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."),Error("WebAppBiometricManagerBiometricAccessNotGranted");if(k)throw console.error("[Telegram.WebApp] Token request is already in progress."),Error("WebAppBiometricManagerTokenUpdateRequested");return k={callback:m},l.postEvent("web_app_biometry_update_token",!1,{token:i}),c},c.openSettings=function(){if(!U())return c;if(V(),!r)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!o)throw console.error("[Telegram.WebApp] Biometric access was not requested yet."),Error("WebAppBiometricManagerBiometricsAccessNotRequested");return n?(console.warn("[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings."),c):(l.postEvent("web_app_biometry_open_settings",!1),c)},c}(),z={};function je(e,r){if(r.slug&&z[r.slug]){var t=z[r.slug];delete z[r.slug],t.callback&&t.callback(r.status),v("invoiceClosed",{url:t.url,status:r.status})}}var G=!1;function Re(e,r){if(G){var t=G;G=!1;var o=null;typeof r.button_id<"u"&&(o=r.button_id),t.callback&&t.callback(o),v("popupClosed",{button_id:o})}}var R=!1;function Ue(e,r){if(R){var t=R,o=null;typeof r.data<"u"&&(o=r.data),t.callback&&t.callback(o)&&(R=!1,l.postEvent("web_app_close_scan_qr_popup",!1)),v("qrTextReceived",{data:o})}}function Ne(e,r){R=!1,v("scanQrPopupClosed")}function He(e,r){if(r.req_id&&M[r.req_id]){var t=M[r.req_id];delete M[r.req_id];var o=null;typeof r.data<"u"&&(o=r.data),t.callback&&t.callback(o),v("clipboardTextReceived",{data:o})}}var K=!1;function Ve(e,r){if(K){var t=K;K=!1,t.callback&&t.callback(r.status=="allowed"),v("writeAccessRequested",{status:r.status})}}function Le(e,r){var t,o,n=0,d=function(){de("getRequestedContact",{},function(c,g){g&&g.length?(clearTimeout(o),e(g)):(n+=50,t=setTimeout(d,n))})},s=function(){clearTimeout(t),e("")};o=setTimeout(s,r),d()}var $=!1;function Fe(e,r){if($){var t=$;$=!1;var o=r.status=="sent",n={status:r.status};o?Le(function(d){if(d&&d.length){n.response=d,n.responseUnsafe=T.urlParseQueryString(d);for(var s in n.responseUnsafe){var c=n.responseUnsafe[s];try{(c.substr(0,1)=="{"&&c.substr(-1)=="}"||c.substr(0,1)=="["&&c.substr(-1)=="]")&&(n.responseUnsafe[s]=JSON.parse(c))}catch{}}}t.callback&&t.callback(o,n),v("contactRequested",n)},3e3):(t.callback&&t.callback(o,n),v("contactRequested",n))}}function Qe(e,r){if(r.req_id&&M[r.req_id]){var t=M[r.req_id];delete M[r.req_id];var o=null,n=null;typeof r.result<"u"&&(o=r.result),typeof r.error<"u"&&(n=r.error),t.callback&&t.callback(n,o)}}function de(e,r,t){if(!h("6.9"))throw console.error("[Telegram.WebApp] Method invokeCustomMethod is not supported in version "+_),Error("WebAppMethodUnsupported");var o=ve(16),n={req_id:o,method:e,params:r||{}};M[o]={callback:t},l.postEvent("web_app_invoke_custom_method",!1,n)}window.Telegram||(window.Telegram={}),Object.defineProperty(a,"initData",{get:function(){return x},enumerable:!0}),Object.defineProperty(a,"initDataUnsafe",{get:function(){return O},enumerable:!0}),Object.defineProperty(a,"version",{get:function(){return _},enumerable:!0}),Object.defineProperty(a,"platform",{get:function(){return Y},enumerable:!0}),Object.defineProperty(a,"colorScheme",{get:function(){return N},enumerable:!0}),Object.defineProperty(a,"themeParams",{get:function(){return E},enumerable:!0}),Object.defineProperty(a,"isExpanded",{get:function(){return me},enumerable:!0}),Object.defineProperty(a,"viewportHeight",{get:function(){return(F===!1?window.innerHeight:F)-S},enumerable:!0}),Object.defineProperty(a,"viewportStableHeight",{get:function(){return(Q===!1?window.innerHeight:Q)-S},enumerable:!0}),Object.defineProperty(a,"isClosingConfirmationEnabled",{set:function(e){We(e)},get:function(){return pe},enumerable:!0}),Object.defineProperty(a,"isVerticalSwipesEnabled",{set:function(e){Ee(e)},get:function(){return ue},enumerable:!0}),Object.defineProperty(a,"headerColor",{set:function(e){Pe(e)},get:function(){return Te()},enumerable:!0}),Object.defineProperty(a,"backgroundColor",{set:function(e){ke(e)},get:function(){return we()},enumerable:!0}),Object.defineProperty(a,"BackButton",{value:Be,enumerable:!0}),Object.defineProperty(a,"MainButton",{value:Ie,enumerable:!0}),Object.defineProperty(a,"SettingsButton",{value:Ae,enumerable:!0}),Object.defineProperty(a,"HapticFeedback",{value:Me,enumerable:!0}),Object.defineProperty(a,"CloudStorage",{value:Oe,enumerable:!0}),Object.defineProperty(a,"BiometricManager",{value:qe,enumerable:!0}),a.setHeaderColor=function(e){a.headerColor=e},a.setBackgroundColor=function(e){a.backgroundColor=e},a.enableClosingConfirmation=function(){a.isClosingConfirmationEnabled=!0},a.disableClosingConfirmation=function(){a.isClosingConfirmationEnabled=!1},a.enableVerticalSwipes=function(){a.isVerticalSwipesEnabled=!0},a.disableVerticalSwipes=function(){a.isVerticalSwipesEnabled=!1},a.isVersionAtLeast=function(e){return h(e)},a.onEvent=function(e,r){P(e,r)},a.offEvent=function(e,r){I(e,r)},a.sendData=function(e){if(!e||!e.length)throw console.error("[Telegram.WebApp] Data is required",e),Error("WebAppDataInvalid");if(Se(e)>4096)throw console.error("[Telegram.WebApp] Data is too long",e),Error("WebAppDataInvalid");l.postEvent("web_app_data_send",!1,{data:e})},a.switchInlineQuery=function(e,r){if(!h("6.6"))throw console.error("[Telegram.WebApp] Method switchInlineQuery is not supported in version "+_),Error("WebAppMethodUnsupported");if(!y.tgWebAppBotInline)throw console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline"),Error("WebAppInlineModeDisabled");if(e=e||"",e.length>256)throw console.error("[Telegram.WebApp] Inline query is too long",e),Error("WebAppInlineQueryInvalid");var t=[];if(r){if(!Array.isArray(r))throw console.error("[Telegram.WebApp] Choose chat types should be an array",r),Error("WebAppInlineChooseChatTypesInvalid");for(var o={users:1,bots:1,groups:1,channels:1},n=0;n<r.length;n++){var d=r[n];if(!o[d])throw console.error("[Telegram.WebApp] Choose chat type is invalid",d),Error("WebAppInlineChooseChatTypeInvalid");o[d]!=2&&(o[d]=2,t.push(d))}}l.postEvent("web_app_switch_inline_query",!1,{query:e,chat_types:t})},a.openLink=function(o,r){var t=document.createElement("A");if(t.href=o,t.protocol!="http:"&&t.protocol!="https:")throw console.error("[Telegram.WebApp] Url protocol is not supported",o),Error("WebAppTgUrlInvalid");var o=t.href;if(r=r||{},h("6.1")){var n={url:o};h("6.4")&&r.try_instant_view&&(n.try_instant_view=!0),h("7.6")&&r.try_browser&&(n.try_browser=r.try_browser),l.postEvent("web_app_open_link",!1,n)}else window.open(o,"_blank")},a.openTelegramLink=function(e){var r=document.createElement("A");if(r.href=e,r.protocol!="http:"&&r.protocol!="https:")throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");if(r.hostname!="t.me")throw console.error("[Telegram.WebApp] Url host is not supported",e),Error("WebAppTgUrlInvalid");var t=r.pathname+r.search;C||h("6.1")?l.postEvent("web_app_open_tg_link",!1,{path_full:t}):location.href="https://t.me"+t},a.openInvoice=function(e,r){var t=document.createElement("A"),o,n;if(t.href=e,t.protocol!="http:"&&t.protocol!="https:"||t.hostname!="t.me"||!(o=t.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/))||!(n=o[2]))throw console.error("[Telegram.WebApp] Invoice url is invalid",e),Error("WebAppInvoiceUrlInvalid");if(!h("6.1"))throw console.error("[Telegram.WebApp] Method openInvoice is not supported in version "+_),Error("WebAppMethodUnsupported");if(z[n])throw console.error("[Telegram.WebApp] Invoice is already opened"),Error("WebAppInvoiceOpened");z[n]={url:e,callback:r},l.postEvent("web_app_open_invoice",!1,{slug:n})},a.showPopup=function(e,r){if(!h("6.2"))throw console.error("[Telegram.WebApp] Method showPopup is not supported in version "+_),Error("WebAppMethodUnsupported");if(G)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppPopupOpened");var t="",o="",n=[],d={};if(typeof e.title<"u"){if(t=b(e.title),t.length>64)throw console.error("[Telegram.WebApp] Popup title is too long",t),Error("WebAppPopupParamInvalid");t.length>0&&(d.title=t)}if(typeof e.message<"u"&&(o=b(e.message)),!o.length)throw console.error("[Telegram.WebApp] Popup message is required",e.message),Error("WebAppPopupParamInvalid");if(o.length>256)throw console.error("[Telegram.WebApp] Popup message is too long",o),Error("WebAppPopupParamInvalid");if(d.message=o,typeof e.buttons<"u"){if(!Array.isArray(e.buttons))throw console.error("[Telegram.WebApp] Popup buttons should be an array",e.buttons),Error("WebAppPopupParamInvalid");for(var s=0;s<e.buttons.length;s++){var c=e.buttons[s],g={},f="";if(typeof c.id<"u"&&(f=c.id.toString(),f.length>64))throw console.error("[Telegram.WebApp] Popup button id is too long",f),Error("WebAppPopupParamInvalid");g.id=f;var w=c.type;if(typeof w>"u"&&(w="default"),g.type=w,!(w=="ok"||w=="close"||w=="cancel"))if(w=="default"||w=="destructive"){var k="";if(typeof c.text<"u"&&(k=b(c.text)),!k.length)throw console.error("[Telegram.WebApp] Popup button text is required for type "+w,c.text),Error("WebAppPopupParamInvalid");if(k.length>64)throw console.error("[Telegram.WebApp] Popup button text is too long",k),Error("WebAppPopupParamInvalid");g.text=k}else throw console.error("[Telegram.WebApp] Popup button type is invalid",w),Error("WebAppPopupParamInvalid");n.push(g)}}else n.push({id:"",type:"close"});if(n.length<1)throw console.error("[Telegram.WebApp] Popup should have at least one button"),Error("WebAppPopupParamInvalid");if(n.length>3)throw console.error("[Telegram.WebApp] Popup should not have more than 3 buttons"),Error("WebAppPopupParamInvalid");d.buttons=n,G={callback:r},l.postEvent("web_app_open_popup",!1,d)},a.showAlert=function(e,r){a.showPopup({message:e},r?function(){r()}:null)},a.showConfirm=function(e,r){a.showPopup({message:e,buttons:[{type:"ok",id:"ok"},{type:"cancel"}]},r?function(t){r(t=="ok")}:null)},a.showScanQrPopup=function(e,r){if(!h("6.4"))throw console.error("[Telegram.WebApp] Method showScanQrPopup is not supported in version "+_),Error("WebAppMethodUnsupported");if(R)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppScanQrPopupOpened");var t="",o={};if(typeof e.text<"u"){if(t=b(e.text),t.length>64)throw console.error("[Telegram.WebApp] Scan QR popup text is too long",t),Error("WebAppScanQrPopupParamInvalid");t.length>0&&(o.text=t)}R={callback:r},l.postEvent("web_app_open_scan_qr_popup",!1,o)},a.closeScanQrPopup=function(){if(!h("6.4"))throw console.error("[Telegram.WebApp] Method closeScanQrPopup is not supported in version "+_),Error("WebAppMethodUnsupported");R=!1,l.postEvent("web_app_close_scan_qr_popup",!1)},a.readTextFromClipboard=function(e){if(!h("6.4"))throw console.error("[Telegram.WebApp] Method readTextFromClipboard is not supported in version "+_),Error("WebAppMethodUnsupported");var r=ve(16),t={req_id:r};M[r]={callback:e},l.postEvent("web_app_read_text_from_clipboard",!1,t)},a.requestWriteAccess=function(e){if(!h("6.9"))throw console.error("[Telegram.WebApp] Method requestWriteAccess is not supported in version "+_),Error("WebAppMethodUnsupported");if(K)throw console.error("[Telegram.WebApp] Write access is already requested"),Error("WebAppWriteAccessRequested");K={callback:e},l.postEvent("web_app_request_write_access")},a.requestContact=function(e){if(!h("6.9"))throw console.error("[Telegram.WebApp] Method requestContact is not supported in version "+_),Error("WebAppMethodUnsupported");if($)throw console.error("[Telegram.WebApp] Contact is already requested"),Error("WebAppContactRequested");$={callback:e},l.postEvent("web_app_request_phone")},a.shareToStory=function(e,r){if(r=r||{},!h("7.8"))throw console.error("[Telegram.WebApp] Method shareToStory is not supported in version "+_),Error("WebAppMethodUnsupported");var t=document.createElement("A");if(t.href=e,t.protocol!="http:"&&t.protocol!="https:")throw console.error("[Telegram.WebApp] Media url protocol is not supported",url),Error("WebAppMediaUrlInvalid");var o={};if(o.media_url=t.href,typeof r.text<"u"){var n=b(r.text);if(n.length>2048)throw console.error("[Telegram.WebApp] Text is too long",n),Error("WebAppShareToStoryParamInvalid");n.length>0&&(o.text=n)}if(typeof r.widget_link<"u"){if(r.widget_link=r.widget_link||{},t.href=r.widget_link.url,t.protocol!="http:"&&t.protocol!="https:")throw console.error("[Telegram.WebApp] Link protocol is not supported",url),Error("WebAppShareToStoryParamInvalid");var d={url:t.href};if(typeof r.widget_link.name<"u"){var s=b(r.widget_link.name);if(s.length>48)throw console.error("[Telegram.WebApp] Link name is too long",s),Error("WebAppShareToStoryParamInvalid");s.length>0&&(d.name=s)}o.widget_link=d}l.postEvent("web_app_share_to_story",!1,o)},a.invokeCustomMethod=function(e,r,t){de(e,r,t)},a.ready=function(){l.postEvent("web_app_ready")},a.expand=function(){l.postEvent("web_app_expand")},a.close=function(e){e=e||{};var r={};h("7.6")&&e.return_back&&(r.return_back=!0),l.postEvent("web_app_close",!1,r)},window.Telegram.WebApp=a,_e(),fe(),le(),y.tgWebAppShowSettings&&Ae.show(),window.addEventListener("resize",p),C&&document.addEventListener("click",u),l.onEvent("theme_changed",ae),l.onEvent("viewport_changed",te),l.onEvent("invoice_closed",je),l.onEvent("popup_closed",Re),l.onEvent("qr_text_received",Ue),l.onEvent("scan_qr_popup_closed",Ne),l.onEvent("clipboard_text_received",He),l.onEvent("write_access_requested",Ve),l.onEvent("phone_requested",Fe),l.onEvent("custom_method_invoked",Qe),l.postEvent("web_app_request_theme"),l.postEvent("web_app_request_viewport")})();Object.defineProperty(ie,"__esModule",{value:!0});ie.WebApp=void 0;var De=window;ie.WebApp=De.Telegram.WebApp;Object.defineProperty(ge,"__esModule",{value:!0});var ze=ie,Ge=ge.default=ze.WebApp;const Ke=Je({__proto__:null,default:Ge},[ge]);export{Ke as i};