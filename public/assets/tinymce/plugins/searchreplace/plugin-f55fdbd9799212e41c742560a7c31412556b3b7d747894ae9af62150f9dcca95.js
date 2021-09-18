!function(){"use strict";var e,t,n,r,o,i,a,d=function(e){var t=e;return{get:function(){return t},set:function(e){t=e}}},u=tinymce.util.Tools.resolve("tinymce.PluginManager"),h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e){return function(){return e}},l=c(!1),m=c(!0),s=c("[!-#%-*,-\\/:;?@\\[-\\]_{}\xa1\xab\xb7\xbb\xbf;\xb7\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1361-\u1368\u1400\u166d\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u3008\u3009\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30\u2e31\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]"),f=function(){return g},g=(e=function(e){return e.isNone()},{fold:function(e){return e()},is:l,isSome:l,isNone:m,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(undefined),or:n,orThunk:t,map:f,each:function(){},bind:f,exists:l,forall:m,filter:f,equals:e,equals_:e,toArray:function(){return[]},toString:c("none()")}),p=function(n){var e=c(n),t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:m,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return p(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?o:g},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(l,function(e){return t(n,e)})}};return o},v={some:p,none:f,from:function(e){return null===e||e===undefined?g:p(e)}},y=s,x=tinymce.util.Tools.resolve("tinymce.util.Tools"),b=function(r){return function(e){return n=typeof(t=e),(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n)===r;var t,n}},w=function(t){return function(e){return typeof e===t}},O=b("string"),C=b("array"),T=w("boolean"),N=w("number"),E=Array.prototype.slice,k=Array.prototype.push,S=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o)}return r},A=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},D=function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n)},M=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!C(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);k.apply(t,e[n])}return t}(S(e,t))},B=Object.hasOwnProperty,F=function(e,t){return B.call(e,t)},I=("undefined"!=typeof window||Function("return this;")(),r=3,function(e){return e.dom.nodeType===r}),P=function(e,t,n){!function(e,t,n){if(!(O(n)||T(n)||N(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(e.dom,t,n)},R=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:e}},W={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return R(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return R(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return R(n)},fromDom:R,fromPoint:function(e,t,n){return v.from(e.dom.elementFromPoint(t,n)).map(R)}},j=function(e,t){return{element:e,offset:t}},q=function(e,t){var n=S(e.dom.childNodes,W.fromDom);return 0<n.length&&t<n.length?j(n[t],0):j(e,t)},V=function(t,n){var e;(e=t,v.from(e.dom.parentNode).map(W.fromDom)).each(function(e){e.dom.insertBefore(n.dom,t.dom)})},_=function(e,t){var n;V(e,t),n=e,t.dom.appendChild(n.dom)},H=(o=I,i="text",{get:function(e){if(!o(e))throw new Error("Can only get "+i+" value of a "+i+" node");return a(e).getOr("")},getOption:a=function(e){return o(e)?v.from(e.dom.nodeValue):v.none()},set:function(e,t){if(!o(e))throw new Error("Can only set raw "+i+" value of a "+i+" node");e.dom.nodeValue=t}}),L=function(e){return H.get(e)},U=function(e,t){return n=t,1!==(o=i=(r=e)===undefined?document:r.dom).nodeType&&9!==o.nodeType&&11!==o.nodeType||0===o.childElementCount?[]:S(i.querySelectorAll(n),W.fromDom);var n,r,o,i},$=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),z=function(e,t){return e.isBlock(t)||F(e.schema.getShortEndedElements(),t.nodeName)},G=function(e,t){return"false"===e.getContentEditable(t)},K=function(e,t){return!e.isBlock(t)&&F(e.schema.getWhiteSpaceElements(),t.nodeName)},J=function(){return{sOffset:0,fOffset:0,elements:[]}},Q=function(e,t){return q(W.fromDom(e),t)},X=function(e,t,n,r,o,i){void 0===i&&(i=!0);for(var a=i?t(!1):n;a;){var u=G(e,a);if(u||K(e,a)){if(u?r.cef(a):r.boundary(a))break;a=t(!0)}else{if(z(e,a)){if(r.boundary(a))break}else 3===a.nodeType&&r.text(a);if(a===o)break;a=t(!1)}}},Y=function(e,t,n,r,o){var i,a,u,c,l,s,f;z(i=e,a=n)||G(i,a)||K(i,a)||(c=a,"true"===(u=i).getContentEditable(c)&&"false"===u.getContentEditableParent(c.parentNode))||(l=e.getParent(r,e.isBlock),s=new $(n,l),f=o?s.next.bind(s):s.prev.bind(s),X(e,f,n,{boundary:m,cef:m,text:function(e){o?t.fOffset+=e.length:t.sOffset+=e.length,t.elements.push(W.fromDom(e))}}))},Z=function(e,t,n,r,o,i){void 0===i&&(i=!0);var a=new $(n,t),u=[],c=J();Y(e,c,n,t,!1);var l=function(){return 0<c.elements.length&&(u.push(c),c=J()),!1};return X(e,a.next.bind(a),n,{boundary:l,cef:function(e){return l(),o&&u.push.apply(u,o.cef(e)),!1},text:function(e){c.elements.push(W.fromDom(e)),o&&o.text(e,c)}},r,i),r&&Y(e,c,r,t,!0),l(),u},ee=function(o,e){var n=Q(e.startContainer,e.startOffset),r=n.element.dom,i=Q(e.endContainer,e.endOffset),a=i.element.dom;return Z(o,e.commonAncestorContainer,r,a,{text:function(e,t){e===a?t.fOffset+=e.length-i.offset:e===r&&(t.sOffset+=n.offset)},cef:function(e){var t,n,r;return t=M(U(W.fromDom(e),"*[contenteditable=true]"),function(e){var t=e.dom;return Z(o,t,t)}),n=function(e,t){return n=e.elements[0].dom,r=t.elements[0].dom,o=Node.DOCUMENT_POSITION_PRECEDING,0!=(n.compareDocumentPosition(r)&o)?1:-1;var n,r,o},(r=E.call(t,0)).sort(n),r}},!1)},te=function(e,t){return t.collapsed?[]:ee(e,t)},ne=function(e,t){var n=e.createRng();return n.selectNode(t),te(e,n)},re=function(e,a){var t,n;return function(e,t){if(0===e.length)return[];for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var u=e[i],c=t(u);c!==n&&(r.push(o),o=[]),n=c,o.push(u)}return 0!==o.length&&r.push(o),r}((t=function(e,n){var t=L(n),r=e.last,o=r+t.length,i=M(a,function(e,t){return e.start<o&&e.finish>r?[{element:n,start:Math.max(r,e.start)-r,finish:Math.min(o,e.finish)-r,matchId:t}]:[]});return{results:e.results.concat(i),last:o}},n={results:[],last:0},A(e,function(e){n=t(n,e)}),n.results),function(e){return e.matchId})},oe=function(o,e){return M(e,function(e){var t=e.elements,n=S(t,L).join(""),r=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);var o=t.regex;o.lastIndex=n;for(var i,a=[];i=o.exec(e);){var u=i[t.matchIndex],c=i.index+i[0].indexOf(u),l=c+u.length;if(r<l)break;a.push({start:c,finish:l}),o.lastIndex=l}return a}(n,o,e.sOffset,n.length-e.fOffset);return re(t,r)})},ie=function(e,i){D(e,function(e,o){D(e,function(e){var t=W.fromDom(i.cloneNode(!1));P(t,"data-mce-index",o);var n,r=e.element.dom;r.length===e.finish&&0===e.start?_(e.element,t):(r.length!==e.finish&&r.splitText(e.finish),n=r.splitText(e.start),_(W.fromDom(n),t))})})},ae=function(e,t,n,r){var o,i=n.getBookmark(),a=e.select("td[data-mce-selected],th[data-mce-selected]"),u=0<a.length?(o=e,M(a,function(e){return ne(o,e)})):te(e,n.getRng()),c=oe(t,u);return ie(c,r),n.moveToBookmark(i),c.length},ue=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},ce=function(e,t,n,r){var o=e.dom.create("span",{"data-mce-bogus":1});o.className="mce-match-marker";var i,a,u,c,l,s=e.getBody();return ye(e,t,!1),r?ae(e.dom,n,e.selection,o):(i=e.dom,a=n,u=o,c=ne(i,s),l=oe(a,c),ie(l,u),l.length)},le=function(e){var t=e.parentNode;e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},se=function(e,t){var n=[],r=x.toArray(e.getBody().getElementsByTagName("span"));if(r.length)for(var o=0;o<r.length;o++){var i=ue(r[o]);null!==i&&i.length&&i===t.toString()&&n.push(r[o])}return n},fe=function(e,t,n){var r=t.get(),o=r.index,i=e.dom;(n=!1!==n)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,i.removeClass(se(e,r.index),"mce-match-marker-selected");var a=se(e,o);return a.length?(i.addClass(se(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),o):-1},de=function(e,t){var n=t.parentNode;e.remove(t),e.isEmpty(n)&&e.remove(n)},me=function(e,t,n,r,o,i){var a,u,c,l=(a=o,u="("+n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n\\uFEFF]")+")",a?"(?:^|\\s|"+y()+")"+u+"(?=$|\\s|"+y()+")":u),s={regex:new RegExp(l,r?"g":"gi"),matchIndex:1},f=ce(e,t,s,i);return f&&(c=fe(e,t,!0),t.set({index:c,count:f,text:n,matchCase:r,wholeWord:o,inSelection:i})),f},he=function(e,t){var n=fe(e,t,!0);t.set(h(h({},t.get()),{index:n}))},ge=function(e,t){var n=fe(e,t,!1);t.set(h(h({},t.get()),{index:n}))},pe=function(e){var t=ue(e);return null!==t&&0<t.length},ve=function(e,t,n,r,o){var i,a=t.get(),u=a.index,c=u;r=!1!==r;for(var l=e.getBody(),s=x.grep(x.toArray(l.getElementsByTagName("span")),pe),f=0;f<s.length;f++){var d=ue(s[f]),m=i=parseInt(d,10);if(o||m===a.index){for(n.length?(s[f].firstChild.nodeValue=n,le(s[f])):de(e.dom,s[f]);s[++f];){if((m=parseInt(ue(s[f]),10))!==i){f--;break}de(e.dom,s[f])}r&&c--}else u<i&&s[f].setAttribute("data-mce-index",String(i-1))}return t.set(h(h({},a),{count:o?0:a.count-1,index:c})),(r?he:ge)(e,t),!o&&0<t.get().count},ye=function(e,t,n){for(var r,o,i=t.get(),a=x.toArray(e.getBody().getElementsByTagName("span")),u=0;u<a.length;u++){var c=ue(a[u]);null!==c&&c.length&&(c===i.index.toString()&&(r=r||a[u].firstChild,o=a[u].firstChild),le(a[u]))}if(t.set(h(h({},i),{index:-1,count:0,text:""})),r&&o){var l=e.dom.createRng();return l.setStart(r,0),l.setEnd(o,o.data.length),!1!==n&&e.selection.setRng(l),l}},xe=tinymce.util.Tools.resolve("tinymce.Env"),be=function(i,a){var t,e=(t=d(v.none()),{clear:function(){return t.set(v.none())},set:function(e){return t.set(v.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}});i.undoManager.add();var n=x.trim(i.selection.getContent({format:"text"})),u=function(e){(1<a.get().count?e.enable:e.disable)("next"),(1<a.get().count?e.enable:e.disable)("prev")},c=function(e,t){var n=t?e.disable:e.enable;A(["replace","replaceall","prev","next"],n)},l=function(e,t){xe.browser.isSafari()&&xe.deviceType.isTouch()&&("find"===t||"replace"===t||"replaceall"===t)&&e.focus(t)},s=function(e){ye(i,a,!1),c(e,!0),u(e)},f=function(e){var t,n,r=e.getData(),o=a.get();r.findtext.length?(o.text===r.findtext&&o.matchCase===r.matchcase&&o.wholeWord===r.wholewords?he(i,a):((t=me(i,a,r.findtext,r.matchcase,r.wholewords,r.inselection))<=0&&(n=e,i.windowManager.alert("Could not find the specified string.",function(){n.focus("findtext")})),c(e,0===t)),u(e)):s(e)},r=a.get(),o={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"},{type:"togglemenuitem",name:"inselection",text:"Find in selection"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",disabled:!0}],initialData:{findtext:n,replacetext:"",wholewords:r.wholeWord,matchcase:r.matchCase,inselection:r.inSelection},onChange:function(e,t){"findtext"===t.name&&0<a.get().count&&s(e)},onAction:function(e,t){var n,r,o=e.getData();switch(t.name){case"find":f(e);break;case"replace":(ve(i,a,o.replacetext)?u:s)(e);break;case"replaceall":ve(i,a,o.replacetext,!0,!0),s(e);break;case"prev":ge(i,a),u(e);break;case"next":he(i,a),u(e);break;case"matchcase":case"wholewords":case"inselection":n=e.getData(),r=a.get(),a.set(h(h({},r),{matchCase:n.matchcase,wholeWord:n.wholewords,inSelection:n.inselection})),s(e)}l(e,t.name)},onSubmit:function(e){f(e),l(e,"find")},onClose:function(){i.focus(),ye(i,a),i.undoManager.add()}};e.set(i.windowManager.open(o,{inline:"toolbar"}))},we=function(e,t){return function(){be(e,t)}};u.add("searchreplace",function(e){var t,n,r,o,i,a,u=d({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1,inSelection:!1});return n=u,(t=e).addCommand("SearchReplace",function(){be(t,n)}),o=u,(r=e).ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:we(r,o),icon:"search"}),r.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:we(r,o),icon:"search"}),r.shortcuts.add("Meta+F","",we(r,o)),i=e,a=u,{done:function(e){return ye(i,a,e)},find:function(e,t,n,r){return void 0===r&&(r=!1),me(i,a,e,t,n,r)},next:function(){return he(i,a)},prev:function(){return ge(i,a)},replace:function(e,t,n){return ve(i,a,e,t,n)}}})}();