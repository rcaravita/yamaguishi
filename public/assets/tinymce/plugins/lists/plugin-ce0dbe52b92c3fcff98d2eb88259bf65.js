/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e,t,n,r,a,i,o,c=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=function(){},l=function(e){return function(){return e}},u=function(e){return function(t){return!e(t)}},f=l(!1),d=l(!0),m=function(){return g},g=(e=function(e){return e.isNone()},{fold:function(e){return e()},is:f,isSome:f,isNone:d,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(void 0),or:n,orThunk:t,map:m,each:s,bind:m,exists:f,forall:d,filter:m,equals:e,equals_:e,toArray:function(){return[]},toString:l("none()")}),h=function(e){var t=l(e),n=function(){return a},r=function(t){return t(e)},a={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:d,isNone:f,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return h(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?a:g},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(f,function(t){return n(e,t)})}};return a},p={some:h,none:m,from:function(e){return null===e||void 0===e?g:h(e)}},y=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e;var n,r}},v=function(e){return function(t){return typeof t===e}},b=y("string"),w=y("array"),k=v("boolean"),_=v("function"),C=v("number"),x=Array.prototype.slice,z=Array.prototype.push,S=function(e,t){for(var n=e.length,r=new Array(n),a=0;n>a;a++){var i=e[a];r[a]=t(i,a)}return r},N=function(e,t){for(var n=0,r=e.length;r>n;n++)t(e[n],n)},E=function(e,t){for(var n=[],r=0,a=e.length;a>r;r++){var i=e[r];t(i,r)&&n.push(i)}return n},T=function(e,t,n){return N(e,function(e){n=t(n,e)}),n},D=function(e,t,n){for(var r=0,a=e.length;a>r;r++){var i=e[r];if(t(i,r))return p.some(i);if(n(i,r))break}return p.none()},A=function(e,t){return D(e,t,f)},O=function(e,t){return function(e){for(var t=[],n=0,r=e.length;r>n;++n){if(!w(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);z.apply(t,e[n])}return t}(S(e,t))},R=function(e){var t=x.call(e,0);return t.reverse(),t},P=function(e,t){return t>=0&&t<e.length?p.some(e[t]):p.none()},L=function(e){return P(e,0)},B=function(e){return P(e,e.length-1)},M=function(){return(M=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},j=function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.test(t))return r}}(e,t);if(!n)return{major:0,minor:0};var r=function(e){return Number(t.replace(n,"$"+e))};return F(r(1),r(2))},I=function(){return F(0,0)},F=function(e,t){return{major:e,minor:t}},H={nu:F,detect:function(e,t){var n=String(t).toLowerCase();return 0===e.length?I():j(e,n)},unknown:I},q=function(e,t){var n=String(t).toLowerCase();return A(e,function(e){return e.search(n)})},U=function(e,t){return q(e,t).map(function(e){var n=H.detect(e.versionRegexes,t);return{current:e.name,version:n}})},V=function(e,t){return q(e,t).map(function(e){var n=H.detect(e.versionRegexes,t);return{current:e.name,version:n}})},$=function(e,t){return-1!==e.indexOf(t)},W=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,X=function(e){return function(t){return $(t,e)}},K=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return $(e,"edge/")&&$(e,"chrome")&&$(e,"safari")&&$(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,W],search:function(e){return $(e,"chrome")&&!$(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return $(e,"msie")||$(e,"trident")}},{name:"Opera",versionRegexes:[W,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:X("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:X("firefox")},{name:"Safari",versionRegexes:[W,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return($(e,"safari")||$(e,"mobile/"))&&$(e,"applewebkit")}}],G=[{name:"Windows",search:X("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return $(e,"iphone")||$(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:X("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:X("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:X("linux"),versionRegexes:[]},{name:"Solaris",search:X("sunos"),versionRegexes:[]},{name:"FreeBSD",search:X("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:X("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Y={browsers:l(K),oses:l(G)},J="Firefox",Z=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}};return{current:t,version:n,isEdge:r("Edge"),isChrome:r("Chrome"),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r(J),isSafari:r("Safari")}},Q={unknown:function(){return Z({current:void 0,version:H.unknown()})},nu:Z,edge:l("Edge"),chrome:l("Chrome"),ie:l("IE"),opera:l("Opera"),firefox:l(J),safari:l("Safari")},ee="Windows",te="Android",ne="Solaris",re="FreeBSD",ae="ChromeOS",ie=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}};return{current:t,version:n,isWindows:r(ee),isiOS:r("iOS"),isAndroid:r(te),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(ne),isFreeBSD:r(re),isChromeOS:r(ae)}},oe={unknown:function(){return ie({current:void 0,version:H.unknown()})},nu:ie,windows:l(ee),ios:l("iOS"),android:l(te),linux:l("Linux"),osx:l("OSX"),solaris:l(ne),freebsd:l(re),chromeos:l(ae)},ce=function(e,t){var n,r,a,i,o,c,s,u,f,d,m,g,h=Y.browsers(),p=Y.oses(),y=U(h,e).fold(Q.unknown,Q.nu),v=V(p,e).fold(oe.unknown,oe.nu);return{browser:y,os:v,deviceType:(r=y,a=e,i=t,o=(n=v).isiOS()&&!0===/ipad/i.test(a),c=n.isiOS()&&!o,s=n.isiOS()||n.isAndroid(),u=s||i("(pointer:coarse)"),f=o||!c&&s&&i("(min-device-width:768px)"),d=c||s&&!f,m=r.isSafari()&&n.isiOS()&&!1===/safari/i.test(a),g=!d&&!f&&!m,{isiPad:l(o),isiPhone:l(c),isTablet:l(f),isPhone:l(d),isTouch:l(u),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:l(m),isDesktop:l(g)})}},se=function(e){return window.matchMedia(e).matches},le=(i=!(r=function(){return ce(navigator.userAgent,se)}),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i||(i=!0,a=r.apply(null,e)),a}),ue=function(e){if(null===e||void 0===e)throw new Error("Node cannot be null or undefined");return{dom:e}},fe={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return ue(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return ue(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return ue(n)},fromDom:ue,fromPoint:function(e,t,n){return p.from(e.dom.elementFromPoint(t,n)).map(ue)}},de=function(e,t){return e.dom===t.dom},me=function(e,t){return n=e.dom,r=t.dom,a=n,i=r,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(a.compareDocumentPosition(i)&o);var n,r,a,i,o},ge=function(e,t){return le().browser.isIE()?me(e,t):(n=t,r=e.dom,a=n.dom,r!==a&&r.contains(a));var n,r,a},he=function(e,t){var n=e.dom;if(1!==n.nodeType)return!1;var r=n;if(void 0!==r.matches)return r.matches(t);if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t);if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")},pe=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),ye=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),ve=tinymce.util.Tools.resolve("tinymce.util.VK"),be=Object.keys,we=function(e,t){for(var n=be(e),r=0,a=n.length;a>r;r++){var i=n[r];t(e[i],i)}},ke=function(e,t){var n,r,a,i,o={};return n=t,i=o,r=function(e,t){i[t]=e},a=s,we(e,function(e,t){(n(e,t)?r:a)(e,t)}),o},_e=("undefined"!=typeof window||Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Ce=(o=1,function(e){return e.dom.nodeType===o}),xe=function(e,t){var n=e.dom;we(t,function(e,t){!function(e,t,n){if(!(b(n)||k(n)||C(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(n,t,e)})},ze=function(e){return T(e.dom.attributes,function(e,t){return e[t.name]=t.value,e},{})},Se=function(e){return p.from(e.dom.parentNode).map(fe.fromDom)},Ne=function(e){return S(e.dom.childNodes,fe.fromDom)},Ee=function(e,t){var n=e.dom.childNodes;return p.from(n[t]).map(fe.fromDom)},Te=function(e){return Ee(e,0)},De=function(e){return Ee(e,e.dom.childNodes.length-1)},Ae=function(e,t){Se(e).each(function(n){n.dom.insertBefore(t.dom,e.dom)})},Oe=function(e,t){e.dom.appendChild(t.dom)},Re=function(e,t){N(t,function(t){Oe(e,t)})},Pe=function(e){var t=e.dom;null!==t.parentNode&&t.parentNode.removeChild(t)},Le=function(e){return t=e,n=!0,fe.fromDom(t.dom.cloneNode(n));var t,n},Be=function(e,t){var n,r,a,i,o=(n=e,r=t,a=fe.fromTag(r),i=ze(n),xe(a,i),a);Ae(e,o);var c=Ne(e);return Re(o,c),Pe(e),o},Me=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),je=tinymce.util.Tools.resolve("tinymce.util.Tools"),Ie=function(e){return function(t){return t&&t.nodeName.toLowerCase()===e}},Fe=function(e){return function(t){return t&&e.test(t.nodeName)}},He=function(e){return e&&3===e.nodeType},qe=Fe(/^(OL|UL|DL)$/),Ue=Fe(/^(OL|UL)$/),Ve=Ie("ol"),$e=Fe(/^(LI|DT|DD)$/),We=Fe(/^(DT|DD)$/),Xe=Fe(/^(TH|TD)$/),Ke=Ie("br"),Ge=function(e,t){return t&&!!e.schema.getTextBlockElements()[t.nodeName]},Ye=function(e,t){return e&&e.nodeName in t},Je=function(e,t,n){var r=e.isEmpty(t);return!(n&&0<e.select("span[data-mce-type=bookmark]",t).length)&&r},Ze=function(e,t){return e.isChildOf(t,e.getRoot())},Qe=function(e,t){var n,r,a,i,o=e.dom,c=e.schema.getBlockElements(),s=o.createFragment(),l=!1===(n=e.getParam("forced_root_block","p"))?"":!0===n?"p":n;if(l&&((a=o.create(l)).tagName===l.toUpperCase()&&o.setAttribs(a,e.getParam("forced_root_block_attrs",{})),Ye(t.firstChild,c)||s.appendChild(a)),t)for(;r=t.firstChild;){var u=r.nodeName;i||"SPAN"===u&&"bookmark"===r.getAttribute("data-mce-type")||(i=!0),Ye(r,c)?(s.appendChild(r),a=null):l?(a||(a=o.create(l),s.appendChild(a)),a.appendChild(r)):s.appendChild(r)}return l?i||a.appendChild(o.create("br",{"data-mce-bogus":"1"})):s.appendChild(o.create("br")),s},et=Me.DOM,tt=function(e,t){he(t,"dd")?Be(t,"dt"):he(t,"dt")&&Se(t).each(function(n){return function(e,t,n){var r=et.select('span[data-mce-type="bookmark"]',t),a=Qe(e,n),i=et.createRng();i.setStartAfter(n),i.setEndAfter(t);for(var o,c=i.extractContents(),s=c.firstChild;s;s=s.firstChild)if("LI"===s.nodeName&&e.dom.isEmpty(s)){et.remove(s);break}e.dom.isEmpty(c)||et.insertAfter(c,t),et.insertAfter(a,t),Je(e.dom,n.parentNode)&&(o=n.parentNode,je.each(r,function(e){o.parentNode.insertBefore(e,n.parentNode)}),et.remove(o)),et.remove(n),Je(e.dom,t)&&et.remove(t)}(e,n.dom,t.dom)})},nt=function(e){he(e,"dt")&&Be(e,"dd")},rt=function(e,t){if(He(e))return{container:e,offset:t};var n=pe.getNode(e,t);return He(n)?{container:n,offset:t>=e.childNodes.length?n.data.length:0}:n.previousSibling&&He(n.previousSibling)?{container:n.previousSibling,offset:n.previousSibling.data.length}:n.nextSibling&&He(n.nextSibling)?{container:n.nextSibling,offset:0}:{container:e,offset:t}},at=function(e){var t=e.cloneRange(),n=rt(e.startContainer,e.startOffset);t.setStart(n.container,n.offset);var r=rt(e.endContainer,e.endOffset);return t.setEnd(r.container,r.offset),t},it=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),ot=function(e,t){var n=t||e.selection.getStart(!0);return e.dom.getParent(n,"OL,UL,DL",lt(e,n))},ct=function(e){var t,n,r,a=ot(e),i=e.selection.getSelectedBlocks();return r=i,(n=a)&&1===r.length&&r[0]===n?(t=a,je.grep(t.querySelectorAll("ol,ul,dl"),function(e){return qe(e)})):je.grep(i,function(e){return qe(e)&&a!==e})},st=function(e){var t,n,r,a=e.selection.getSelectedBlocks();return je.grep((t=e,n=a,r=je.map(n,function(e){var n=t.dom.getParent(e,"li,dd,dt",lt(t,e));return n||e}),it.unique(r)),function(e){return $e(e)})},lt=function(e,t){var n=e.dom.getParents(t,"TD,TH");return 0<n.length?n[0]:e.getBody()},ut=function(e,t){var n=e.dom.getParents(t,"ol,ul",lt(e,t));return B(n)},ft=function(e){var t,n,r,a=(n=ut(t=e,t.selection.getStart()),r=E(t.selection.getSelectedBlocks(),Ue),n.toArray().concat(r));return dt(e,a)},dt=function(e,t){var n=S(t,function(t){return ut(e,t).getOr(t)});return it.unique(n)},mt=function(e,t,n){return e.isSome()&&t.isSome()?p.some(n(e.getOrDie(),t.getOrDie())):p.none()},gt=function(e,t,n){return e.fire("ListMutation",{action:t,element:n})},ht=function(e,t,n){if(!b(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);var r;void 0!==(r=e).style&&_(r.style.getPropertyValue)&&e.style.setProperty(t,n)},pt=function(e,t){Oe(e.item,t.list)},yt=function(e,t,n){for(var r,a,i,o=[],c=0;n>c;c++)o.push((r=e,a=t.listType,i={list:fe.fromTag(a,r),item:fe.fromTag("li",r)},Oe(i.list,i.item),i));return o},vt=function(e,t){for(var n,r,a,i,o=0;o<e.length-1;o++)n=e[o].item,r="list-style-type",a="none",i=n.dom,ht(i,r,a);B(e).each(function(e){xe(e.list,t.listAttributes),xe(e.item,t.itemAttributes),Re(e.item,t.content)})},bt=function(e,t,n){var r=t.slice(0,n.depth);return B(r).each(function(t){var r,a,i,o,c,s,l,u,f=(r=e,a=n.itemAttributes,i=n.content,o=fe.fromTag("li",r),xe(o,a),Re(o,i),o);s=f,Oe((c=t).list,s),c.item=s,u=n,_e((l=t).list)!==u.listType&&(l.list=Be(l.list,u.listType)),xe(l.list,u.listAttributes)}),r},wt=function(e,t,n){var r,a=yt(e,n,n.depth-t.length);return function(e){for(var t=1;t<e.length;t++)pt(e[t-1],e[t])}(a),vt(a,n),r=a,mt(B(t),L(r),pt),t.concat(a)},kt=function(e){return he(e,"OL,UL")},_t=function(e){return Te(e).map(kt).getOr(!1)},Ct=function(e){return 0<e.depth},xt=function(e){return e.isSelected},zt=function(e){var t=Ne(e),n=De(e).map(kt).getOr(!1)?t.slice(0,-1):t;return S(n,Le)},St=function(e){return N(e,function(t,n){var r,a,i,o,c;i=(r=e)[a=n].depth,o=function(e){return e.depth===i&&!e.dirty},c=function(e){return e.depth<i},D(R(r.slice(0,a)),o,c).orThunk(function(){return D(r.slice(a+1),o,c)}).fold(function(){var e;t.dirty&&((e=t).listAttributes=ke(e.listAttributes,function(e,t){return"start"!==t}))},function(e){return r=e,(n=t).listType=r.listType,void(n.listAttributes=M({},r.listAttributes));var n,r})}),e},Nt=function(e,t,n,r){return Te(r).filter(kt).fold(function(){t.each(function(e){de(e.start,r)&&n.set(!0)});var a,i,o,c=(a=r,i=e,o=n.get(),Se(a).filter(Ce).map(function(e){return{depth:i,dirty:!1,isSelected:o,content:zt(a),itemAttributes:ze(a),listAttributes:ze(e),listType:_e(e)}}));t.each(function(e){de(e.end,r)&&n.set(!1)});var s=De(r).filter(kt).map(function(r){return Et(e,t,n,r)}).getOr([]);return c.toArray().concat(s)},function(r){return Et(e,t,n,r)})},Et=function(e,t,n,r){return O(Ne(r),function(r){return(kt(r)?Et:Nt)(e+1,t,n,r)})},Tt=function(e,t){var n,r=(n=!1,{get:function(){return n},set:function(e){n=e}});return S(e,function(e){return{sourceList:e,entries:Et(0,t,r,e)}})},Dt=function(e,t){var n=St(t);return S(n,function(t){var n,r,a,i=(n=t.content,a=(r||document).createDocumentFragment(),N(n,function(e){a.appendChild(e.dom)}),fe.fromDom(a));return fe.fromDom(Qe(e,i.dom))})},At=function(e,t){var n,r,a=St(t);return n=e.contentDocument,r=T(a,function(e,t){return(t.depth>e.length?wt:bt)(n,e,t)},[]),L(r).map(function(e){return e.list}).toArray()},Ot=function(e,t,n){var r,a=Tt(t,(r=S(st(e),fe.fromDom),mt(A(r,u(_t)),A(R(r),u(_t)),function(e,t){return{start:e,end:t}})));N(a,function(t){var r,a;r=t.entries,a=n,N(E(r,xt),function(e){return function(e,t){switch(e){case"Indent":t.depth++;break;case"Outdent":t.depth--;break;case"Flatten":t.depth=0}t.dirty=!0}(a,e),0});var i,o,c,s=(i=e,o=t.entries,O(function(e,t){if(0===e.length)return[];for(var n=t(e[0]),r=[],a=[],i=0,o=e.length;o>i;i++){var c=e[i],s=t(c);s!==n&&(r.push(a),a=[]),n=s,a.push(c)}return 0!==a.length&&r.push(a),r}(o,Ct),function(e){return(L(e).map(Ct).getOr(!1)?At:Dt)(i,e)}));N(s,function(t){gt(e,"Indent"===n?"IndentList":"OutdentList",t.dom)}),c=t.sourceList,N(s,function(e){Ae(c,e)}),Pe(t.sourceList)})},Rt=function(e,t){var n,r,a=S(ft(e),fe.fromDom),i=S(E(st(e),We),fe.fromDom),o=!1;return(a.length||i.length)&&(n=e.selection.getBookmark(),Ot(e,a,t),r=e,N(i,"Indent"===t?nt:function(e){return tt(r,e),0}),e.selection.moveToBookmark(n),e.selection.setRng(at(e.selection.getRng())),e.nodeChanged(),o=!0),o},Pt=function(e){return Rt(e,"Indent")},Lt=function(e){return Rt(e,"Outdent")},Bt=function(e){return Rt(e,"Flatten")},Mt=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),jt=Me.DOM,It=function(e){var t={},n=function(n){var r,a=e[n?"startContainer":"endContainer"],i=e[n?"startOffset":"endOffset"];1===a.nodeType&&(r=jt.create("span",{"data-mce-type":"bookmark"}),a.hasChildNodes()?(i=Math.min(i,a.childNodes.length-1),n?a.insertBefore(r,a.childNodes[i]):jt.insertAfter(r,a.childNodes[i])):a.appendChild(r),a=r,i=0),t[n?"startContainer":"endContainer"]=a,t[n?"startOffset":"endOffset"]=i};return n(!0),e.collapsed||n(),t},Ft=function(e){var t=function(t){var n,r=n=e[t?"startContainer":"endContainer"],a=e[t?"startOffset":"endOffset"];r&&(1===r.nodeType&&(a=function(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t===e)return n;1===t.nodeType&&"bookmark"===t.getAttribute("data-mce-type")||n++,t=t.nextSibling}return-1}(r),r=r.parentNode,jt.remove(n),!r.hasChildNodes()&&jt.isBlock(r)&&r.appendChild(jt.create("br"))),e[t?"startContainer":"endContainer"]=r,e[t?"startOffset":"endOffset"]=a)};t(!0),t();var n=jt.createRng();return n.setStart(e.startContainer,e.startOffset),e.endContainer&&n.setEnd(e.endContainer,e.endOffset),at(n)},Ht=function(e){switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}},qt=function(e){return/\btox\-/.test(e.className)},Ut=function(e,t,n){var r=function(e){var r=D(e.parents,qe,Xe).filter(function(e){return e.nodeName===t&&!qt(e)}).isSome();n(r)},a=e.dom.getParents(e.selection.getNode());return r({parents:a}),e.on("NodeChange",r),function(){return e.off("NodeChange",r)}},Vt=function(e,t){je.each(t,function(t,n){e.setAttribute(n,t)})},$t=function(e,t,n){var r,a,i,o,c,s,l;r=e,a=t,o=(i=n)["list-style-type"]?i["list-style-type"]:null,r.setStyle(a,"list-style-type",o),c=e,Vt(s=t,(l=n)["list-attributes"]),je.each(c.select("li",s),function(e){Vt(e,l["list-item-attributes"])})},Wt=function(e,t,n,r){var a=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"];for(1===a.nodeType&&(a=a.childNodes[Math.min(i,a.childNodes.length-1)]||a),!n&&Ke(a.nextSibling)&&(a=a.nextSibling);a.parentNode!==r;){if(Ge(e,a))return a;if(/^(TD|TH)$/.test(a.parentNode.nodeName))return a;a=a.parentNode}return a},Xt=function(e,t,n){void 0===n&&(n={});var r,a,i=e.selection.getRng(),o="LI",c=lt(e,e.selection.getStart(!0)),s=e.dom;"false"!==s.getContentEditable(e.selection.getNode())&&("DL"===(t=t.toUpperCase())&&(o="DT"),r=It(i),a=function(e,t,n){for(var r,a=[],i=e.dom,o=Wt(e,t,!0,n),c=Wt(e,t,!1,n),s=[],l=o;l&&(s.push(l),l!==c);l=l.nextSibling);return je.each(s,function(t){if(Ge(e,t))return a.push(t),void(r=null);if(i.isBlock(t)||Ke(t))return Ke(t)&&i.remove(t),void(r=null);var o=t.nextSibling;Mt.isBookmarkNode(t)&&(qe(o)||Ge(e,o)||!o&&t.parentNode===n)?r=null:(r||(r=i.create("p"),t.parentNode.insertBefore(r,t),a.push(r)),r.appendChild(t))}),a}(e,i,c),je.each(a,function(r){var a,i,c,l,u,f,d,m,g=r.previousSibling,h=r.parentNode;$e(h)||(g&&qe(g)&&g.nodeName===t&&(u=g,f=n,d=s.getStyle(u,"list-style-type"),m=f?f["list-style-type"]:"",d===(m=null===m?"":m))?(a=g,r=s.rename(r,o),g.appendChild(r)):(a=s.create(t),r.parentNode.insertBefore(a,r),a.appendChild(r),r=s.rename(r,o)),i=s,c=r,l=["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],je.each(l,function(e){var t;return i.setStyle(c,((t={})[e]="",t))}),$t(s,a,n),Gt(e.dom,a))}),e.selection.setRng(Ft(r)))},Kt=function(e,t,n){return s=n,(c=t)&&s&&qe(c)&&c.nodeName===s.nodeName&&(i=t,o=n,(a=e).getStyle(i,"list-style-type",!0)===a.getStyle(o,"list-style-type",!0))&&(r=n,t.className===r.className);var r,a,i,o,c,s},Gt=function(e,t){var n,r=t.nextSibling;if(Kt(e,t,r)){for(;n=r.firstChild;)t.appendChild(n);e.remove(r)}if(r=t.previousSibling,Kt(e,t,r)){for(;n=r.lastChild;)t.insertBefore(n,t.firstChild);e.remove(r)}},Yt=function(e,t,n,r,a){var i,o,c=qe(t);c&&t.nodeName===r&&!Jt(a)?Bt(e):(Xt(e,r,a),i=It(e.selection.getRng(!0)),o=c?function(){for(var e=0,t=0,n=arguments.length;n>t;t++)e+=arguments[t].length;for(var r=Array(e),a=0,t=0;n>t;t++)for(var i=arguments[t],o=0,c=i.length;c>o;o++,a++)r[a]=i[o];return r}([t],n):n,je.each(o,function(t){var n,i,o,c,s;n=e,o=r,c=a,(i=t).nodeName!==o?(s=n.dom.rename(i,o),$t(n.dom,s,c),gt(n,Ht(o),s)):($t(n.dom,i,c),gt(n,Ht(o),i))}),e.selection.setRng(Ft(i)))},Jt=function(e){return"list-style-type"in e},Zt=function(e,t,n){var r,a,i,o,c,s,l=ot(e),u=ct(e);n=n||{},0<u.length?Yt(e,l,u,t,n):(i=t,o=n,(a=l)!==(r=e).getBody()&&(a?a.nodeName!==i||Jt(o)||qt(a)?(c=It(r.selection.getRng(!0)),$t(r.dom,a,o),s=r.dom.rename(a,i),Gt(r.dom,s),r.selection.setRng(Ft(c)),Xt(r,i,o),gt(r,Ht(i),s)):Bt(r):(Xt(r,i,o),gt(r,Ht(i),a))))},Qt=Me.DOM,en=function(e,t){je.each(je.grep(e.select("ol,ul",t)),function(t){var n,r,a,i;n=e,"LI"===(i=(r=t).parentNode).nodeName&&i.firstChild===r&&((a=i.previousSibling)&&"LI"===a.nodeName?(a.appendChild(r),Je(n,i)&&Qt.remove(i)):Qt.setStyle(i,"listStyleType","none")),qe(i)&&(a=i.previousSibling)&&"LI"===a.nodeName&&a.appendChild(r)})},tn=function(e,t,n,r){var a=t.startContainer,i=t.startOffset;if(He(a)&&(n?i<a.data.length:i>0))return a;var o=e.schema.getNonEmptyElements();1===a.nodeType&&(a=pe.getNode(a,i));var c,s,l=new ye(a,r);for(n&&(c=e.dom,Ke(s=a)&&c.isBlock(s.nextSibling)&&!Ke(s.previousSibling)&&l.next());a=l[n?"next":"prev2"]();){if("LI"===a.nodeName&&!a.hasChildNodes())return a;if(o[a.nodeName])return a;if(He(a)&&0<a.data.length)return a}},nn=function(e,t){var n=t.childNodes;return 1===n.length&&!qe(n[0])&&e.isBlock(n[0])},rn=function(e,t,n){var r,a,i,o=nn(e,n)?n.firstChild:n;if(nn(a=e,i=t)&&a.remove(i.firstChild,!0),!Je(e,t,!0))for(;r=t.firstChild;)o.appendChild(r)},an=function(e,t,n){var r,a,i,o=t.parentNode;Ze(e,t)&&Ze(e,n)&&(qe(n.lastChild)&&(r=n.lastChild),o===n.lastChild&&Ke(o.previousSibling)&&e.remove(o.previousSibling),(a=n.lastChild)&&Ke(a)&&t.hasChildNodes()&&e.remove(a),Je(e,n,!0)&&e.$(n).empty(),rn(e,t,n),r&&n.appendChild(r),i=ge(fe.fromDom(n),fe.fromDom(t))?e.getParents(t,qe,n):[],e.remove(t),N(i,function(t){Je(e,t)&&t!==e.getRoot()&&e.remove(t)}))},on=function(e,t,n,r){var a,i,o,c,s=e.dom;s.isEmpty(r)?(o=n,c=r,(i=e).dom.$(c).empty(),an(i.dom,o,c),i.selection.setCursorLocation(c,0)):(a=It(t),an(s,n,r),e.selection.setRng(Ft(a)))},cn=function(e,t){var n=e.dom,r=e.selection,a=r.getStart(),i=lt(e,a),o=n.getParent(r.getStart(),"LI",i);if(o){var c=o.parentNode;if(c===e.getBody()&&Je(n,c))return!0;var s=at(r.getRng()),l=n.getParent(tn(e,s,t,i),"LI",i);if(l&&l!==o)return e.undoManager.transact(function(){var n;t?on(e,s,l,o):(n=o).parentNode.firstChild===n?Lt(e):function(e,t,n,r){var a=It(t);an(e.dom,n,r);var i=Ft(a);e.selection.setRng(i)}(e,s,o,l)}),!0;if(!l&&!t&&0===s.startOffset&&0===s.endOffset)return e.undoManager.transact(function(){Bt(e)}),!0}return!1},sn=function(e,t){var n=e.dom,r=e.selection.getStart(),a=lt(e,r),i=n.getParent(r,n.isBlock,a);if(i&&n.isEmpty(i)){var o=at(e.selection.getRng()),c=n.getParent(tn(e,o,t,a),"LI",a);if(c)return e.undoManager.transact(function(){var r,o,s,l;o=i,s=a,l=(r=n).getParent(o.parentNode,r.isBlock,s),r.remove(o),l&&r.isEmpty(l)&&r.remove(l),Gt(n,c.parentNode),e.selection.select(c,!0),e.selection.collapse(t)}),!0}return!1},ln=function(e,t){return e.selection.isCollapsed()?cn(i=e,o=t)||sn(i,o):(r=(n=e).selection.getStart(),a=lt(n,r),!!(n.dom.getParent(r,"LI,DT,DD",a)||0<st(n).length)&&(n.undoManager.transact(function(){n.execCommand("Delete"),en(n.dom,n.getBody())}),!0));var n,r,a,i,o},un=function(e){var t=e.dom,n=ot(e);Ve(n)&&e.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:t.getAttrib(n,"start")||"1"},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(n){var r=n.getData();e.undoManager.transact(function(){t.setAttrib(ot(e),"start","1"===r.start?"":r.start)}),n.close()}})},fn=function(e,t){return function(){var n=e.dom.getParent(e.selection.getStart(),"UL,OL,DL");return n&&n.nodeName===t}},dn=function(e){var t,n;e.getParam("lists_indent_on_tab",!0)&&(t=e).on("keydown",function(e){e.keyCode!==ve.TAB||ve.metaKeyPressed(e)||t.undoManager.transact(function(){(e.shiftKey?Lt:Pt)(t)&&e.preventDefault()})}),(n=e).on("keydown",function(e){e.keyCode===ve.BACKSPACE?ln(n,!1)&&e.preventDefault():e.keyCode===ve.DELETE&&ln(n,!0)&&e.preventDefault()})};c.add("lists",function(e){var t,n,r,a,i,o;return!1===e.hasPlugin("rtc",!0)&&(dn(e),(t=e).on("BeforeExecCommand",function(e){var n=e.command.toLowerCase();"indent"===n?Pt(t):"outdent"===n&&Lt(t)}),t.addCommand("InsertUnorderedList",function(e,n){Zt(t,"UL",n)}),t.addCommand("InsertOrderedList",function(e,n){Zt(t,"OL",n)}),t.addCommand("InsertDefinitionList",function(e,n){Zt(t,"DL",n)}),t.addCommand("RemoveList",function(){Bt(t)}),t.addCommand("mceListProps",function(){un(t)}),t.addQueryStateHandler("InsertUnorderedList",fn(t,"UL")),t.addQueryStateHandler("InsertOrderedList",fn(t,"OL")),t.addQueryStateHandler("InsertDefinitionList",fn(t,"DL"))),r=function(e){return function(){return n.execCommand(e)}},(n=e).hasPlugin("advlist")||(n.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:r("InsertOrderedList"),onSetup:function(e){return Ut(n,"OL",e.setActive)}}),n.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:r("InsertUnorderedList"),onSetup:function(e){return Ut(n,"UL",e.setActive)}})),i={text:"List properties...",icon:"ordered-list",onAction:function(){return un(a)},onSetup:function(e){return Ut(a,"OL",function(t){return e.setDisabled(!t)})}},(a=e).ui.registry.addMenuItem("listprops",i),a.ui.registry.addContextMenu("lists",{update:function(e){var t=ot(a,e);return Ve(t)?["listprops"]:[]}}),o=e,{backspaceDelete:function(e){ln(o,e)}}})}();