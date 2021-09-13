/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e,t,n,r,a=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=tinymce.util.Tools.resolve("tinymce.util.VK"),o=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e;var n,r}},c=function(e){return function(t){return typeof t===e}},s=o("string"),l=o("array"),u=function(t){return e===t},f=c("boolean"),d=c("function"),m=function(e){var t=e.getParam("link_assume_external_targets",!1);return f(t)&&t?1:!s(t)||"http"!==t&&"https"!==t?0:t},g=function(e){return e.getParam("default_link_target")},h=function(e){return e.getParam("target_list",!0)},p=function(e){return e.getParam("rel_list",[],"array")},y=function(e){return e.getParam("allow_unsafe_link_target",!1,"boolean")},v=function(){},b=function(e){return function(){return e}},w=b(!1),k=b(!(e=null)),_=function(){return C},C=(t=function(e){return e.isNone()},{fold:function(e){return e()},is:w,isSome:w,isNone:k,getOr:r=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:b(null),getOrUndefined:b(void 0),or:r,orThunk:n,map:_,each:v,bind:_,exists:w,forall:k,filter:_,equals:t,equals_:t,toArray:function(){return[]},toString:b("none()")}),x=function(e){var t=b(e),n=function(){return a},r=function(t){return t(e)},a={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:k,isNone:w,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return x(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?a:C},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(w,function(t){return n(e,t)})}};return a},z={some:x,none:_,from:function(e){return null===e||void 0===e?C:x(e)}},S=Array.prototype.indexOf,E=Array.prototype.push,N=function(e,t){return n=e,r=t,-1<S.call(n,r);var n,r},T=function(e){for(var t=[],n=0,r=e.length;r>n;++n){if(!l(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);E.apply(t,e[n])}return t},D=function(e,t){return T(function(e,t){for(var n=e.length,r=new Array(n),a=0;n>a;a++){var i=e[a];r[a]=t(i,a)}return r}(e,t))},A=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n);if(r.isSome())return r}return z.none()},O=function(e,t){return e?z.some(t):z.none()},R=tinymce.util.Tools.resolve("tinymce.util.Tools"),P=function(e){return s(e.value)?e.value:""},L=function(e,t){var n=[];return R.each(e,function(e){var r,a,i,o=s((r=e).text)?r.text:s(r.title)?r.title:"";void 0!==e.menu?(a=L(e.menu,t),n.push({text:o,items:a})):(i=t(e),n.push({text:o,value:i}))}),n},j=function(e){return void 0===e&&(e=P),function(t){return z.from(t).map(function(t){return L(t,e)})}},B={sanitize:function(e){return j(P)(e)},sanitizeWith:j,createUi:function(e,t){return function(n){return{name:e,type:"listbox",label:t,items:n}}},getValue:P},M=function(){return(M=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},I=Object.keys,F=Object.hasOwnProperty,H=function(e,t,n,r){return function(e,t){for(var n=I(e),r=0,a=n.length;a>r;r++){var i=n[r];t(e[i],i)}}(e,function(e,a){(t(e,a)?n:r)(e,a)}),{}},q=function(e,t){var n,r={};return H(e,t,(n=r,function(e,t){n[t]=e}),v),r},U=function(e,t){return F.call(e,t)},V=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),$=function(e){return e&&"a"===e.nodeName.toLowerCase()},W=function(e){return $(e)&&!!G(e)},X=function(e,t){if(e.collapsed)return[];for(var n=e.cloneContents(),r=new V(n.firstChild,n),a=[],i=n.firstChild;t(i)&&a.push(i),i=r.next(););return a},K=function(e){return/^\w+:/i.test(e)},G=function(e){var t=e.getAttribute("data-mce-href");return t||e.getAttribute("href")},Y=function(e,t){var n,r,a=["noopener"],i=e?e.split(/\s+/):[],o=function(e){return e.filter(function(e){return-1===R.inArray(a,e)})},c=t?0<(n=o(n=i)).length?n.concat(a):a:o(i);return 0<c.length?(r=c,R.trim(r.sort().join(" "))):""},J=function(e,t){return t=t||e.selection.getNode(),te(t)?e.dom.select("a[href]",t)[0]:e.dom.getParent(t,"a[href]")},Z=function(e,t){var n=t?t.innerText||t.textContent:e.getContent({format:"text"});return n.replace(/\uFEFF/g,"")},Q=function(e){return 0<R.grep(e,W).length},ee=function(e){var t=e.schema.getTextInlineElements();return 0===X(e.selection.getRng(),function(e){return 1===e.nodeType&&!$(e)&&!U(t,e.nodeName.toLowerCase())}).length},te=function(e){return e&&"FIGURE"===e.nodeName&&/\bimage\b/i.test(e.className)},ne=function(e){return t=["title","rel","class","target"],n=function(t,n){return e[n].each(function(e){t[n]=0<e.length?e:null}),t},r={href:e.href},function(e,t){for(var n=0,r=e.length;r>n;n++)t(e[n],n)}(t,function(e){r=n(r,e)}),r;var t,n,r},re=function(e,t){var n,r,a,i=M({},t);return 0<p(e).length||!1!==y(e)||(n=Y(i.rel,"_blank"===i.target),i.rel=n||null),z.from(i.target).isNone()&&!1===h(e)&&(i.target=g(e)),i.href=(r=i.href,"http"!==(a=m(e))&&"https"!==a||K(r)?r:a+"://"+r),i},ae=function(e,t,n){var r=e.selection.getNode(),a=J(e,r),i=re(e,ne(n));e.undoManager.transact(function(){var o,c,s,l,u,f,d,m;n.href===t.href&&t.attach(),a?(e.focus(),u=e,f=a,d=n.text,m=i,d.each(function(e){f.hasOwnProperty("innerText")?f.innerText=e:f.textContent=e}),u.dom.setAttribs(f,m),u.selection.select(f)):(o=e,c=r,s=n.text,l=i,te(c)?le(o,c,l):s.fold(function(){o.execCommand("mceInsertLink",!1,l)},function(e){o.insertContent(o.dom.createHTML("a",l,o.dom.encode(e)))}))})},ie=function(e){e.undoManager.transact(function(){var t,n,r,a,i,o,c,s=e.selection.getNode();te(s)?se(e,s):(n=(t=e).dom,r=t.selection,a=r.getBookmark(),i=r.getRng().cloneRange(),o=n.getParent(i.startContainer,"a[href]",t.getBody()),c=n.getParent(i.endContainer,"a[href]",t.getBody()),o&&i.setStartBefore(o),c&&i.setEndAfter(c),r.setRng(i),t.execCommand("unlink"),r.moveToBookmark(a)),e.focus()})},oe=function(e,t,n){var r,a,i,o,c,s,l;e.hasPlugin("rtc",!0)?e.execCommand("createlink",!1,(a=(r=n)["class"],i=r.href,o=r.rel,c=r.target,s=r.text,l=r.title,q({"class":a.getOrNull(),href:i,rel:o.getOrNull(),target:c.getOrNull(),text:s.getOrNull(),title:l.getOrNull()},function(e){return!1===u(e)}))):ae(e,t,n)},ce=function(e){e.hasPlugin("rtc",!0)?e.execCommand("unlink"):ie(e)},se=function(e,t){var n,r=e.dom.select("img",t)[0];!r||(n=e.dom.getParents(r,"a[href]",t)[0])&&(n.parentNode.insertBefore(r,n),e.dom.remove(n))},le=function(e,t,n){var r,a=e.dom.select("img",t)[0];a&&(r=e.dom.create("a",n),a.parentNode.insertBefore(r,a),r.appendChild(a))},ue=function(e){return U(t=e,n="items")&&void 0!==t[n]&&null!==t[n];var t,n},fe=function(e,t){return A(t,function(t){return ue(t)?fe(e,t.items):O(t.value===e,t)})},de=function(e,t,n,r){var a=r[t],i=0<e.length;return void 0!==a?fe(a,n).map(function(t){return{url:{value:t.value,meta:{text:i?e:t.text,attach:v}},text:i?e:t.text}}):z.none()},me=function(e,t){var n={text:e.text,title:e.title},r=function(e){var t,r,a=(t=e.url,O(n.text.length<=0,z.from(t.meta.text).getOr(t.value))),i=(r=e.url,O(n.title.length<=0,z.from(r.meta.title).getOr("")));return a.isSome()||i.isSome()?z.some(M(M({},a.map(function(e){return{text:e}}).getOr({})),i.map(function(e){return{title:e}}).getOr({}))):z.none()},a=function(e,r){var a,i,o=(a=t,("link"===(i=r.name)?a.link:"anchor"===i?a.anchor:z.none()).getOr([]));return de(n.text,r.name,o,e)};return{onChange:function(e,t){var i=t.name;return"url"===i?r(e()):N(["anchor","link"],i)?a(e(),t):(("text"===i||"title"===i)&&(n[i]=e()[i]),z.none())}}},ge=tinymce.util.Tools.resolve("tinymce.util.Delay"),he=tinymce.util.Tools.resolve("tinymce.util.Promise"),pe=function(e){var t=e.href;return 0<t.indexOf("@")&&-1===t.indexOf("/")&&-1===t.indexOf("mailto:")?z.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:function(e){return M(M({},e),{href:"mailto:"+t})}}):z.none()},ye=function(e,t){return A([pe,(n=m(e),r=e.getParam("link_default_protocol","http","string"),function(e){var t=e.href;return 1===n&&!K(t)||0===n&&/^\s*www(\.|\d\.)/i.test(t)?z.some({message:"The URL you entered seems to be an external link. Do you want to add the required "+r+":// prefix?",preprocess:function(e){return M(M({},e),{href:r+"://"+t})}}):z.none()})],function(e){return e(t)}).fold(function(){return he.resolve(t)},function(n){return new he(function(r){var a,i,o,c;a=e,i=n.message,o=function(e){r(e?n.preprocess(t):t)},c=a.selection.getRng(),ge.setEditorTimeout(a,function(){a.windowManager.confirm(i,function(e){a.selection.setRng(c),o(e)})})})});var n,r},ve=function(e){var t=e.dom.select("a:not([href])"),n=D(t,function(e){var t=e.name||e.id;return t?[{text:t,value:"#"+t}]:[]});return 0<n.length?z.some([{text:"None",value:""}].concat(n)):z.none()},be=function(e){var t=e.getParam("link_class_list",[],"array");return 0<t.length?B.sanitize(t):z.none()},we=tinymce.util.Tools.resolve("tinymce.util.XHR"),ke=function(e){var t=function(t){return e.convertURL(t.value||t.url,"href")},n=e.getParam("link_list");return new he(function(e){s(n)?we.send({url:n,success:function(t){return e(function(e){try{return z.some(JSON.parse(e))}catch(t){return z.none()}}(t))},error:function(){return e(z.none())}}):d(n)?n(function(t){return e(z.some(t))}):e(z.from(n))}).then(function(e){return e.bind(B.sanitizeWith(t)).map(function(e){return 0<e.length?[{text:"None",value:""}].concat(e):e})})},_e=function(e,t){var n=p(e);if(0<n.length){var r=t.is("_blank");return(!1===y(e)?B.sanitizeWith(function(e){return Y(B.getValue(e),r)}):B.sanitize)(n)}return z.none()},Ce=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],xe=function(e){var t=h(e);return l(t)?B.sanitize(t).orThunk(function(){return z.some(Ce)}):!1===t?z.none():z.some(Ce)},ze=function(e,t,n){var r=e.getAttrib(t,n);return null!==r&&0<r.length?z.some(r):z.none()},Se=function(e,t){return ke(e).then(function(n){var r,a,i,o,c,s,l,u,f=(a=t,i=(r=e).dom,o=ee(r)?z.some(Z(r.selection,a)):z.none(),c=a?z.some(i.getAttrib(a,"href")):z.none(),s=a?z.from(i.getAttrib(a,"target")):z.none(),l=ze(i,a,"rel"),u=ze(i,a,"class"),{url:c,text:o,title:ze(i,a,"title"),target:s,rel:l,linkClass:u});return{anchor:f,catalogs:{targets:xe(e),rels:_e(e,f.target),classes:be(e),anchor:ve(e),link:n},optNode:z.from(t),flags:{titleEnabled:e.getParam("link_title",!0,"boolean")}}})},Ee=function(e){var t,n;(n=J(t=e),Se(t,n)).then(function(t){var n,r,a,i,o,c,s,l,u,f,d,m,h,p;return i=function(e){var t=e.getData();if(!t.url.value)return ce(n),void e.close();var a=function(e){return z.from(t[e]).filter(function(t){return!r.anchor[e].is(t)})},i={href:t.url.value,text:a("text"),target:a("target"),rel:a("rel"),"class":a("linkClass"),title:a("title")},o={href:t.url.value,attach:void 0!==t.url.meta&&t.url.meta.attach?t.url.meta.attach:v};ye(n,i).then(function(e){oe(n,o,e)}),e.close()},o=n=e,u=(a=r=t).anchor.text.map(function(){return{name:"text",type:"input",label:"Text to display"}}).toArray(),f=a.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],d=z.from(g(o)),c=d,s=a.anchor,m={url:{value:l=s.url.getOr(""),meta:{original:{value:l}}},text:s.text.getOr(""),title:s.title.getOr(""),anchor:l,link:l,rel:s.rel.getOr(""),target:s.target.or(c).getOr(""),linkClass:s.linkClass.getOr("")},h=a.catalogs,p=me(m,h),{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:T([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],u,f,function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n);return t}([h.anchor.map(B.createUi("anchor","Anchors")),h.rels.map(B.createUi("rel","Rel")),h.targets.map(B.createUi("target","Open link in...")),h.link.map(B.createUi("link","Link list")),h.classes.map(B.createUi("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:m,onChange:function(e,t){var n=t.name;p.onChange(e.getData,{name:n}).each(function(t){e.setData(t)})},onSubmit:i}}).then(function(t){e.windowManager.open(t)})},Ne=function(e){var t=document.createElement("a");t.target="_blank",t.href=e,t.rel="noreferrer noopener";var n,r,a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n=t,r=a,document.body.appendChild(n),n.dispatchEvent(r),document.body.removeChild(n)},Te=function(e,t){return e.dom.getParent(t,"a[href]")},De=function(e){return Te(e,e.selection.getStart())},Ae=function(e,t){var n,r;t&&(n=G(t),/^#/.test(n)?(r=e.$(n)).length&&e.selection.scrollIntoView(r[0],!0):Ne(t.href))},Oe=function(e){return function(){Ee(e)}},Re=function(e){return function(){Ae(e,De(e))}},Pe=function(e){e.on("click",function(t){var n=Te(e,t.target);n&&i.metaKeyPressed(t)&&(t.preventDefault(),Ae(e,n))}),e.on("keydown",function(t){var n,r=De(e);r&&13===t.keyCode&&!0===(n=t).altKey&&!1===n.shiftKey&&!1===n.ctrlKey&&!1===n.metaKey&&(t.preventDefault(),Ae(e,r))})},Le=function(e,t){return e.on("NodeChange",t),function(){return e.off("NodeChange",t)}},je=function(e){return function(t){return Le(e,function(){t.setActive(!e.mode.isReadOnly()&&null!==J(e,e.selection.getNode()))})}},Be=function(e){return function(t){var n=function(){return t.setDisabled(null===J(e,e.selection.getNode()))};return n(),Le(e,n)}},Me=function(e){return function(t){var n=function(t){return Q(t)||(n=e.selection.getRng(),0<X(n,W).length);var n},r=e.dom.getParents(e.selection.getStart());return t.setDisabled(!n(r)),Le(e,function(e){return t.setDisabled(!n(e.parents))})}};a.add("link",function(e){var t,n,r,a,i,o,c;(t=e).ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Oe(t),onSetup:je(t)}),t.ui.registry.addButton("openlink",{icon:"new-tab",tooltip:"Open link",onAction:Re(t),onSetup:Be(t)}),t.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:function(){return ce(t)},onSetup:Me(t)}),(n=e).ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Re(n),onSetup:Be(n)}),n.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:Oe(n)}),n.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:function(){return ce(n)},onSetup:Me(n)}),(r=e).ui.registry.addContextMenu("link",{update:function(e){return Q(r.dom.getParents(e,"a"))?"link unlink openlink":"link"}}),i=function(e){var t=a.selection.getNode();return e.setDisabled(!J(a,t)),v},(a=e).ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:je(a)},label:"Link",predicate:function(e){return!!J(a,e)&&a.getParam("link_context_toolbar",!1,"boolean")},initValue:function(){var e=J(a);return e?G(e):""},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:function(e){var t=a.selection.getNode();return e.setActive(!!J(a,t)),je(a)(e)},onAction:function(e){var t,n,r=J(a),i=e.getValue();r?a.undoManager.transact(function(){a.dom.setAttrib(r,"href",i),a.selection.collapse(!1),e.hide()}):(t={href:i,attach:v},n=ee(a)?z.some(Z(a.selection,r)).filter(function(e){return 0<e.length}).or(z.from(i)):z.none(),oe(a,t,{href:i,text:n,title:z.none(),rel:z.none(),target:z.none(),"class":z.none()}),e.hide())}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:i,onAction:function(e){ce(a),e.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:i,onAction:function(e){Re(a)(),e.hide()}}]}),Pe(e),(o=e).addCommand("mceLink",function(){o.getParam("link_quicklink",!1,"boolean")?o.fire("contexttoolbar-show",{toolbarKey:"quicklink"}):Oe(o)()}),(c=e).addShortcut("Meta+K","",function(){c.execCommand("mceLink")})})}();