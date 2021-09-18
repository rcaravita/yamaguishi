!function(){"use strict";var n,e,t,c=function(n){var e=n;return{get:function(){return e},set:function(n){e=n}}},r=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(n){return{isFullscreen:function(){return null!==n.get()}}},o=function(){},u=function(n){return function(){return n}},l=u(!1),f=u(!0),a=function(){return d},d=(n=function(n){return n.isNone()},{fold:function(n){return n()},is:l,isSome:l,isNone:f,getOr:t=function(n){return n},getOrThunk:e=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(undefined),or:t,orThunk:e,map:a,each:o,bind:a,exists:l,forall:f,filter:a,equals:n,equals_:n,toArray:function(){return[]},toString:u("none()")}),s=function(t){var n=u(t),e=function(){return o},r=function(n){return n(t)},o={fold:function(n,e){return e(t)},is:function(n){return t===n},isSome:f,isNone:l,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:e,orThunk:e,map:function(n){return s(n(t))},each:function(n){n(t)},bind:r,exists:r,forall:r,filter:function(n){return n(t)?o:d},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(n){return n.is(t)},equals_:function(n,e){return n.fold(l,function(n){return e(t,n)})}};return o},b={some:s,none:a,from:function(n){return null===n||n===undefined?d:s(n)}},m=function(){return n=function(n){return n.unbind()},e=c(b.none()),t=function(){return e.get().each(n)},{clear:function(){t(),e.set(b.none())},isSet:function(){return e.get().isSome()},set:function(n){t(),e.set(b.some(n))}};var n,e,t},h=function(r){return function(n){return t=typeof(e=n),(null===e?"null":"object"==t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t)===r;var e,t}},g=function(e){return function(n){return typeof n===e}},p=h("string"),v=h("array"),y=g("boolean"),w=function(n){return!(null===(e=n)||e===undefined);var e},S=g("function"),E=g("number"),F=Array.prototype.push,T=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var u=n[o];r[o]=e(u,o)}return r},x=function(n,e){for(var t=0,r=n.length;t<r;t++)e(n[t],t)},D=function(n,e){for(var t=[],r=0,o=n.length;r<o;r++){var u=n[r];e(u,r)&&t.push(u)}return t},k=function(n,e){return function(n){for(var e=[],t=0,r=n.length;t<r;++t){if(!v(n[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+n);F.apply(e,n[t])}return e}(T(n,e))},C=function(n){return e=n,(t=0)<=t&&t<e.length?b.some(e[t]):b.none();var e,t},O=Object.keys,A=function(n){return n.style!==undefined&&S(n.style.getPropertyValue)},N=function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:n}},M={fromHtml:function(n,e){var t=(e||document).createElement("div");if(t.innerHTML=n,!t.hasChildNodes()||1<t.childNodes.length)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return N(t.childNodes[0])},fromTag:function(n,e){var t=(e||document).createElement(n);return N(t)},fromText:function(n,e){var t=(e||document).createTextNode(n);return N(t)},fromDom:N,fromPoint:function(n,e,t){return b.from(n.dom.elementFromPoint(e,t)).map(N)}},P=("undefined"!=typeof window||Function("return this;")(),function(e){return function(n){return n.dom.nodeType===e}}),L=P(1),q=P(3),H=P(9),R=P(11),V=function(n,e){var t=n.dom;if(1!==t.nodeType)return!1;var r=t;if(r.matches!==undefined)return r.matches(e);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(e);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(e);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")},W=function(n){return M.fromDom(n.dom.ownerDocument)},B=function(t){var n;return n=t,b.from(n.dom.parentNode).map(M.fromDom).map(j).map(function(n){return D(n,function(n){return e=n,t.dom!==e.dom;var e})}).getOr([])},j=function(n){return T(n.dom.childNodes,M.fromDom)},z=S(Element.prototype.attachShadow)&&S(Node.prototype.getRootNode),I=u(z),U=z?function(n){return M.fromDom(n.dom.getRootNode())}:function(n){return H(n)?n:W(n)},_=function(n){var e,t=U(n);return R(e=t)&&w(e.dom.host)?b.some(t):b.none()},K=function(n){return M.fromDom(n.dom.host)},X=function(n){return w(n.dom.shadowRoot)},Y=function(n){var e=q(n)?n.dom.parentNode:n.dom;if(e===undefined||null===e||null===e.ownerDocument)return!1;var t,r,o=e.ownerDocument;return _(M.fromDom(e)).fold(function(){return o.body.contains(e)},(t=Y,r=K,function(n){return t(r(n))}))},G=function(n,e,t){!function(n,e,t){if(!(p(t)||y(t)||E(t)))throw console.error("Invalid call to Attribute.set. Key ",e,":: Value ",t,":: Element ",n),new Error("Attribute value was not simple");n.setAttribute(e,t+"")}(n.dom,e,t)},J=function(n,e){var t=n.dom.getAttribute(e);return null===t?undefined:t},Q=function(n,e){n.dom.removeAttribute(e)},Z=function(n,e){var t=n.dom;!function(n,e){for(var t=O(n),r=0,o=t.length;r<o;r++){var u=t[r];e(n[u],u)}}(e,function(n,e){!function(n,e,t){if(!p(t))throw console.error("Invalid call to CSS.set. Property ",e,":: Value ",t,":: Element ",n),new Error("CSS value must be a string: "+t);A(n)&&n.style.setProperty(e,t)}(t,e,n)})},$=function(n,e){return A(n)?n.style.getPropertyValue(e):""},nn=function(n){var t,r,e=M.fromDom(function(n){if(I()&&w(n.target)){var e=M.fromDom(n.target);if(L(e)&&X(e)&&n.composed&&n.composedPath){var t=n.composedPath();if(t)return C(t)}}return b.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(t=u,r=o,function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t(r.apply(null,n))});return{target:e,x:n.clientX,y:n.clientY,stop:o,prevent:u,kill:i,raw:n}},en=function(n,e,t,r,o){var u,i,c=(u=t,i=r,function(n){u(n)&&i(nn(n))});return n.dom.addEventListener(e,c,o),{unbind:function(r){for(var o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=o.concat(n);return r.apply(null,t)}}(tn,n,e,c,o)}},tn=function(n,e,t,r){n.dom.removeEventListener(e,t,r)},rn=f,on=function(n,e,t){return en(n,e,rn,t,!1)},un=function(t,r){return{left:t,top:r,translate:function(n,e){return un(t+n,r+e)}}},cn=un,ln=function(n){var e=n===undefined?window:n;return b.from(e.visualViewport)},fn=function(n,e,t,r){return{x:n,y:e,width:t,height:r,right:n+t,bottom:e+r}},an=function(n){var e,t,r,o,u=n===undefined?window:n,i=u.document,c=(r=(t=(e=M.fromDom(i))!==undefined?e.dom:document).body.scrollLeft||t.documentElement.scrollLeft,o=t.body.scrollTop||t.documentElement.scrollTop,cn(r,o));return ln(u).fold(function(){var n=u.document.documentElement,e=n.clientWidth,t=n.clientHeight;return fn(c.left,c.top,e,t)},function(n){return fn(Math.max(n.pageLeft,c.left),Math.max(n.pageTop,c.top),n.width,n.height)})},dn=function(t,r,n){return ln(n).map(function(n){var e=function(n){return r(nn(n))};return n.addEventListener(t,e),{unbind:function(){return n.removeEventListener(t,e)}}}).getOrThunk(function(){return{unbind:o}})},sn=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),mn=tinymce.util.Tools.resolve("tinymce.Env"),hn=tinymce.util.Tools.resolve("tinymce.util.Delay"),gn=function(n,e){n.fire("FullscreenStateChanged",{state:e})},pn=function(n){return n.getParam("fullscreen_native",!1,"boolean")},vn=function(n){var e=M.fromDom(n.getElement());return _(e).map(K).getOrThunk(function(){return function(){var n=W(e).dom.body;if(null===n||n===undefined)throw new Error("Body is not available yet");return M.fromDom(n)}()})},yn=function(n){return n.dom===((e=W(n).dom).fullscreenElement!==undefined?e.fullscreenElement:e.msFullscreenElement!==undefined?e.msFullscreenElement:e.webkitFullscreenElement!==undefined?e.webkitFullscreenElement:null);var e},wn=function(n,e,t){return D(function(n,e){for(var t=S(e)?e:l,r=n.dom,o=[];null!==r.parentNode&&r.parentNode!==undefined;){var u=r.parentNode,i=M.fromDom(u);if(o.push(i),!0===t(i))break;r=u}return o}(n,t),e)},bn=function(n){return e=n,1!==(r=o=t===undefined?document:t.dom).nodeType&&9!==r.nodeType&&11!==r.nodeType||0===r.childElementCount?[]:T(o.querySelectorAll(e),M.fromDom);var e,t,r,o},Sn=function(n,e){return t=function(n){return V(n,e)},D(B(n),t);var t},En="data-ephox-mobile-fullscreen-style",Fn="position:absolute!important;",Tn="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",xn=mn.os.isAndroid(),Dn=function(n){var e,t,r,o,u=(t="background-color",r=(e=n).dom,""!==(o=window.getComputedStyle(r).getPropertyValue(t))||Y(e)?o:$(r,t));return u!==undefined&&""!==u?"background-color:"+u+"!important":"background-color:rgb(255,255,255)!important;"},kn=function(o,n,e){var t,r,u=function(r){return function(n){var e=J(n,"style"),t=e===undefined?"no-styles":e.trim();t!==r&&(G(n,En,t),Z(n,o.parseStyle(r)))}},i=(t="*",wn(n,function(n){return V(n,t)},r)),c=k(i,function(n){return Sn(n,"*:not(.tox-silver-sink)")}),l=Dn(e);x(c,u("display:none!important;")),x(i,u(Fn+Tn+l)),u((!0===xn?"":Fn)+Tn+l)(n)},Cn=sn.DOM,On=ln().fold(function(){return{bind:o,unbind:o}},function(e){var t,r=(t=c(b.none()),{clear:function(){return t.set(b.none())},set:function(n){return t.set(b.some(n))},isSet:function(){return t.get().isSome()},on:function(n){return t.get().each(n)}}),o=m(),u=m(),i=hn.throttle(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.requestAnimationFrame(function(){r.on(function(n){return Z(n,{top:e.offsetTop+"px",left:e.offsetLeft+"px",height:e.height+"px",width:e.width+"px"})})})},50);return{bind:function(n){r.set(n),i(),o.set(dn("resize",i)),u.set(dn("scroll",i))},unbind:function(){r.on(function(){o.clear(),u.clear()}),r.clear()}}}),An=function(e,r){var n,t,o,u,i,c,l=document.body,f=document.documentElement,a=e.getContainer(),d=M.fromDom(a),s=vn(e),m=r.get(),h=M.fromDom(e.getBody()),g=mn.deviceType.isTouch(),p=a.style,v=e.iframeElement.style,y=function(e){e(l,"tox-fullscreen"),e(f,"tox-fullscreen"),e(a,"tox-fullscreen"),_(d).map(function(n){return K(n).dom}).each(function(n){e(n,"tox-fullscreen"),e(n,"tox-shadowhost")})},w=function(){var t,n;g&&(t=e.dom,n=bn("["+En+"]"),x(n,function(n){var e=J(n,En);"no-styles"!==e?Z(n,t.parseStyle(e)):Q(n,"style"),Q(n,En)})),y(Cn.removeClass),On.unbind(),b.from(r.get()).each(function(n){return n.fullscreenChangeHandler.unbind()})};m?(m.fullscreenChangeHandler.unbind(),pn(e)&&yn(s)&&((u=W(s).dom).exitFullscreen?u.exitFullscreen():u.msExitFullscreen?u.msExitFullscreen():u.webkitCancelFullScreen&&u.webkitCancelFullScreen()),v.width=m.iframeWidth,v.height=m.iframeHeight,p.width=m.containerWidth,p.height=m.containerHeight,p.top=m.containerTop,p.left=m.containerLeft,o=m.scrollPos,window.scrollTo(o.x,o.y),r.set(null),gn(e,!1),w(),e.off("remove",w)):(n=on(W(s),document.fullscreenElement!==undefined?"fullscreenchange":document.msFullscreenElement!==undefined?"MSFullscreenChange":document.webkitFullscreenElement!==undefined?"webkitfullscreenchange":"fullscreenchange",function(){pn(e)&&(yn(s)||null===r.get()||An(e,r))}),t={scrollPos:{x:(c=an(window)).x,y:c.y},containerWidth:p.width,containerHeight:p.height,containerTop:p.top,containerLeft:p.left,iframeWidth:v.width,iframeHeight:v.height,fullscreenChangeHandler:n},g&&kn(e.dom,d,h),v.width=v.height="100%",p.width=p.height="",y(Cn.addClass),On.bind(d),e.on("remove",w),r.set(t),pn(e)&&((i=s.dom).requestFullscreen?i.requestFullscreen():i.msRequestFullscreen?i.msRequestFullscreen():i.webkitRequestFullScreen&&i.webkitRequestFullScreen()),gn(e,!0))},Nn=function(t,r){return function(e){e.setActive(null!==r.get());var n=function(n){return e.setActive(n.state)};return t.on("FullscreenStateChanged",n),function(){return t.off("FullscreenStateChanged",n)}}};r.add("fullscreen",function(n){var e,t,r,o,u=c(null);return n.inline||(t=u,(e=n).addCommand("mceFullScreen",function(){An(e,t)}),o=u,(r=n).ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",icon:"fullscreen",shortcut:"Meta+Shift+F",onAction:function(){return r.execCommand("mceFullScreen")},onSetup:Nn(r,o)}),r.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:function(){return r.execCommand("mceFullScreen")},onSetup:Nn(r,o)}),n.addShortcut("Meta+Shift+F","","mceFullScreen")),i(u)})}();