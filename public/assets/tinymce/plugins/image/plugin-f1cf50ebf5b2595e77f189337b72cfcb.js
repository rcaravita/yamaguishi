/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e,t,n,r,a,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(){},s=function(e){return function(){return e}},l=s(!1),u=s(!0),f=function(){return d},d=(e=function(e){return e.isNone()},{fold:function(e){return e()},is:l,isSome:l,isNone:u,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:n,orThunk:t,map:f,each:c,bind:f,exists:l,forall:u,filter:f,equals:e,equals_:e,toArray:function(){return[]},toString:s("none()")}),m=function(e){var t=s(e),n=function(){return a},r=function(t){return t(e)},a={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:u,isNone:l,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return m(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?a:d},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(l,function(t){return n(e,t)})}};return a},g={some:m,none:f,from:function(e){return null===e||void 0===e?d:m(e)}},h=Object.keys,p=Object.hasOwnProperty,y=function(e,t,n,r){return function(e,t){for(var n=h(e),r=0,a=n.length;a>r;r++){var i=n[r];t(e[i],i)}}(e,function(e,a){(t(e,a)?n:r)(e,a)}),{}},v=function(e,t){var n,r={};return y(e,t,(n=r,function(e,t){n[t]=e}),c),r},b=function(e,t){return n=e,r=t,p.call(n,r)&&void 0!==e[t]&&null!==e[t];var n,r},w=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e;var n,r}},k=function(e){return function(t){return typeof t===e}},_=w("string"),C=w("object"),x=w("array"),z=(r=null,function(e){return r===e}),S=k("boolean"),E=function(e){return!(null===(t=e)||void 0===t);var t},N=k("number"),T=Array.prototype.push,D=function(e){for(var t=[],n=0,r=e.length;r>n;++n){if(!x(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);T.apply(t,e[n])}return t},A=function(e){return t=e,(n=0)<=n&&n<t.length?g.some(t[n]):g.none();var t,n},O=("undefined"!=typeof window||Function("return this;")(),function(e,t,n){!function(e,t,n){if(!(_(n)||S(n)||N(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(e.dom,t,n)}),R=function(e){if(null===e||void 0===e)throw new Error("Node cannot be null or undefined");return{dom:e}},P={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return R(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return R(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return R(n)},fromDom:R,fromPoint:function(e,t,n){return g.from(e.dom.elementFromPoint(t,n)).map(R)}},L=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),j=tinymce.util.Tools.resolve("tinymce.util.Promise"),B=tinymce.util.Tools.resolve("tinymce.util.XHR"),M=function(e){return e.getParam("image_dimensions",!0,"boolean")},I=function(e,t){return Math.max(parseInt(e,10),parseInt(t,10))},F=function(e){return e=e&&e.replace(/px$/,"")},H=function(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e},q=function(e){if(e.margin){var t=String(e.margin).split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e},U=function(e){return"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder"))},V=L.DOM,$=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?F(e.style.marginLeft):""},W=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?F(e.style.marginTop):""},X=function(e){return e.style.borderWidth?F(e.style.borderWidth):""},K=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):""},G=function(e,t){return e.style[t]?e.style[t]:""},Y=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},J=function(e,t,n){""===n?e.removeAttribute(t):e.setAttribute(t,n)},Z=function(e){var t,n,r,a;Y(e)?(a=(r=e).parentNode,V.insertAfter(r,a),V.remove(a)):(t=e,n=V.create("figure",{"class":"image"}),V.insertAfter(n,t),n.appendChild(t),n.appendChild(V.create("figcaption",{contentEditable:"true"},"Caption")),n.contentEditable="false")},Q=function(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},ee=function(e,t){return function(e,n,r){e.style[n]?(e.style[n]=H(r),Q(e,t)):J(e,n,r)}},te=function(e,t){return e.style[t]?F(e.style[t]):K(e,t)},ne=function(e,t){var n=H(t);e.style.marginLeft=n,e.style.marginRight=n},re=function(e,t){var n=H(t);e.style.marginTop=n,e.style.marginBottom=n},ae=function(e,t){var n=H(t);e.style.borderWidth=n},ie=function(e,t){e.style.borderStyle=t},oe=function(e){return"FIGURE"===e.nodeName},ce=function(e){return 0===V.getAttrib(e,"alt").length&&"presentation"===V.getAttrib(e,"role")},se=function(){return{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}},le=function(e,t){var n=document.createElement("img");return J(n,"style",t.style),!$(n)&&""===t.hspace||ne(n,t.hspace),!W(n)&&""===t.vspace||re(n,t.vspace),!X(n)&&""===t.border||ae(n,t.border),!G(n,"borderStyle")&&""===t.borderStyle||ie(n,t.borderStyle),e(n.getAttribute("style"))},ue=function(e,t){return{src:K(t,"src"),alt:ce(n=t)?"":K(n,"alt"),title:K(t,"title"),width:te(t,"width"),height:te(t,"height"),"class":K(t,"class"),style:e(K(t,"style")),caption:Y(t),hspace:$(t),vspace:W(t),border:X(t),borderStyle:G(t,"borderStyle"),isDecorative:ce(t)};var n},fe=function(e,t,n,r,a){n[r]!==t[r]&&a(e,r,n[r])},de=function(e,t,n){var r,a;n?(V.setAttrib(e,"role","presentation"),r=P.fromDom(e),O(r,"alt","")):(z(t)?(r=P.fromDom(e),a="alt",r.dom.removeAttribute(a)):(r=P.fromDom(e),O(r,"alt",t)),"presentation"===V.getAttrib(e,"role")&&V.setAttrib(e,"role",""))},me=function(e,t){return function(n,r,a){e(n,a),Q(n,t)}},ge=function(e,t,n){var r,a,i,o=ue(e,n);fe(n,o,t,"caption",function(e){return Z(e),0}),fe(n,o,t,"src",J),fe(n,o,t,"title",J),fe(n,o,t,"width",ee(0,e)),fe(n,o,t,"height",ee(0,e)),fe(n,o,t,"class",J),fe(n,o,t,"style",me(function(e,t){return J(e,"style",t),0},e)),fe(n,o,t,"hspace",me(ne,e)),fe(n,o,t,"vspace",me(re,e)),fe(n,o,t,"border",me(ae,e)),fe(n,o,t,"borderStyle",me(ie,e)),r=n,a=o,(i=t).alt===a.alt&&i.isDecorative===a.isDecorative||de(r,i.alt,i.isDecorative)},he=function(e,t){var n=e.dom.styles.parse(t),r=q(n),a=e.dom.styles.parse(e.dom.styles.serialize(r));return e.dom.styles.serialize(a)},pe=function(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||U(t))?null:t},ye=function(e,t){var n=e.dom,r=v(e.schema.getTextBlockElements(),function(t,n){return!e.schema.isValidChild(n,"figure")}),a=n.getParent(t.parentNode,function(e){return b(r,e.nodeName)},e.getBody());return a?n.split(a,t):t},ve=function(e,t){var n=function(e,t){var n=document.createElement("img");if(ge(e,o(o({},t),{caption:!1}),n),de(n,t.alt,t.isDecorative),t.caption){var r=V.create("figure",{"class":"image"});return r.appendChild(n),r.appendChild(V.create("figcaption",{contentEditable:"true"},"Caption")),r.contentEditable="false",r}return n}(function(t){return he(e,t)},t);e.dom.setAttrib(n,"data-mce-id","__mcenew"),e.focus(),e.selection.setContent(n.outerHTML);var r,a=e.dom.select('*[data-mce-id="__mcenew"]')[0];e.dom.setAttrib(a,"data-mce-id",null),oe(a)?(r=ye(e,a),e.selection.select(r)):e.selection.select(a)},be=function(e,t){var n,r,a,i,o,c,s=pe(e);ge(function(t){return he(e,t)},t,s),n=s,e.dom.setAttrib(n,"src",n.getAttribute("src")),oe(s.parentNode)?(r=s.parentNode,ye(e,r),e.selection.select(s.parentNode)):(e.selection.select(s),a=e,i=t,c=function(){o.onload=o.onerror=null,a.selection&&(a.selection.select(o),a.nodeChanged())},(o=s).onload=function(){i.width||i.height||!M(a)||a.dom.setAttribs(o,{width:String(o.clientWidth),height:String(o.clientHeight)}),c()},o.onerror=c)},we=Object.prototype.hasOwnProperty,ke=(a=function(e,t){return C(e)&&C(t)?ke(e,t):t},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var i=e[r];for(var o in i)we.call(i,o)&&(n[o]=a(n[o],i[o]))}return n}),_e=tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),Ce=tinymce.util.Tools.resolve("tinymce.util.Tools"),xe=function(e){return _(e.value)?e.value:""},ze=function(e,t){var n=[];return Ce.each(e,function(e){var r,a,i,o=_((r=e).text)?r.text:_(r.title)?r.title:"";void 0!==e.menu?(a=ze(e.menu,t),n.push({text:o,items:a})):(i=t(e),n.push({text:o,value:i}))}),n},Se=function(e){return void 0===e&&(e=xe),function(t){return t?g.from(t).map(function(t){return ze(t,e)}):g.none()}},Ee=function(e,t){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n);if(r.isSome())return r}return g.none()}(e,function(e){return n=e,Object.prototype.hasOwnProperty.call(n,"items")?Ee(e.items,t):e.value===t?g.some(e):g.none();var n})},Ne=Se,Te=function(e){return Se(xe)(e)},De=function(e,t){return e.bind(function(e){return Ee(e,t)})},Ae=function(){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},Oe=function(e){var t,n,r=Ne(function(t){return e.convertURL(t.value||t.url,"src")}),a=new j(function(t){var n,a;n=function(e){t(r(e).map(function(e){return D([[{text:"None",value:""}],e])}))},"string"==typeof(a=e.getParam("image_list",!1))?B.send({url:a,success:function(e){n(JSON.parse(e))}}):"function"==typeof a?a(n):n(a)}),i=Te(e.getParam("image_class_list")),o=e.getParam("image_advtab",!1,"boolean"),c=e.getParam("image_uploadtab",!0,"boolean"),s=E(e.getParam("images_upload_url")),l=E(e.getParam("images_upload_handler")),u=(n=pe(t=e))?ue(function(e){return he(t,e)},n):se(),f=e.getParam("image_description",!0,"boolean"),d=e.getParam("image_title",!1,"boolean"),m=M(e),h=e.getParam("image_caption",!1,"boolean"),p=e.getParam("a11y_advanced_options",!1,"boolean"),y=e.getParam("automatic_uploads",!0,"boolean"),v=g.some(e.getParam("image_prepend_url","","string")).filter(function(e){return _(e)&&0<e.length});return a.then(function(e){return{image:u,imageList:e,classList:i,hasAdvTab:o,hasUploadTab:c,hasUploadUrl:s,hasUploadHandler:l,hasDescription:f,hasImageTitle:d,hasDimensions:m,hasImageCaption:h,prependURL:v,hasAccessibilityOptions:p,automaticUploads:y}})},Re=function(e){var t=e.imageList.map(function(e){return{name:"images",type:"listbox",label:"Image list",items:e}}),n={name:"alt",type:"input",label:"Alternative description",disabled:e.hasAccessibilityOptions&&e.image.isDecorative},r=e.classList.map(function(e){return{name:"classes",type:"listbox",label:"Class",items:e}});return D([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],t.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],e.hasDescription?[n]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:D([r.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])},Pe=function(e){return{title:"General",name:"general",items:Re(e)}},Le=Re,je=function(){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}},Be=function(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e["class"],caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}},Me=function(e,t){return{src:e.src.value,alt:0===e.alt.length&&t?null:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,"class":e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}},Ie=function(e,t){var n,r,a=t.getData();n=e,r=a.src.value,(/^(?:[a-zA-Z]+:)?\/\//.test(r)?g.none():n.prependURL.bind(function(e){return r.substring(0,e.length)!==e?g.some(e+r):g.none()})).each(function(e){t.setData({src:{value:e,meta:a.src.meta}})})},Fe=function(e,t){var n,r,a,i,o=t.getData(),c=o.src.meta;void 0!==c&&(n=ke({},o),a=n,i=c,(r=e).hasDescription&&_(i.alt)&&(a.alt=i.alt),r.hasAccessibilityOptions&&(a.isDecorative=i.isDecorative||a.isDecorative||!1),r.hasImageTitle&&_(i.title)&&(a.title=i.title),r.hasDimensions&&(_(i.width)&&(a.dimensions.width=i.width),_(i.height)&&(a.dimensions.height=i.height)),_(i["class"])&&De(r.classList,i["class"]).each(function(e){a.classes=e.value}),r.hasImageCaption&&S(i.caption)&&(a.caption=i.caption),r.hasAdvTab&&(_(i.style)&&(a.style=i.style),_(i.vspace)&&(a.vspace=i.vspace),_(i.border)&&(a.border=i.border),_(i.hspace)&&(a.hspace=i.hspace),_(i.borderstyle)&&(a.borderstyle=i.borderstyle)),t.setData(n))},He=function(e,t,n,r){var a,i,o,c,s,l,u,f,d,m,g,h;Ie(t,r),Fe(t,r),a=e,i=t,o=n,s=(c=r).getData(),l=s.src.value,(u=s.src.meta||{}).width||u.height||!i.hasDimensions||(0<l.length?a.imageSize(l).then(function(e){o.open&&c.setData({dimensions:e})})["catch"](function(e){return console.error(e)}):c.setData({dimensions:{width:"",height:""}})),f=t,d=n,g=(m=r).getData(),h=De(f.imageList,g.src.value),d.prevImage=h,m.setData({images:h.map(function(e){return e.value}).getOr("")})},qe=function(e,t,n){var r,a,i,o,c,s=q(e(n.style)),l=ke({},n);return l.vspace=(r=s)["margin-top"]&&r["margin-bottom"]&&r["margin-top"]===r["margin-bottom"]?F(String(r["margin-top"])):"",l.hspace=(a=s)["margin-right"]&&a["margin-left"]&&a["margin-right"]===a["margin-left"]?F(String(a["margin-right"])):"",l.border=(i=s)["border-width"]?F(String(i["border-width"])):"",l.borderstyle=(o=s)["border-style"]?String(o["border-style"]):"",l.style=(c=t)(e(c(s))),l},Ue=function(e,t,n,r){var a=r.getData();r.block("Uploading image"),A(a.fileinput).fold(function(){r.unblock()},function(a){var i,o=URL.createObjectURL(a),c=function(){r.unblock(),URL.revokeObjectURL(o)},s=function(a){r.setData({src:{value:a,meta:{}}}),r.showTab("general"),He(e,t,n,r)};i=a,new j(function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t(n.error.message)},n.readAsDataURL(i)}).then(function(n){var i=e.createBlobCache(a,o,n);t.automaticUploads?e.uploadImage(i).then(function(e){s(e.url),c()})["catch"](function(t){c(),e.alertErr(t)}):(e.addToBlobCache(i),s(i.blobUri()),r.unblock())})})},Ve=function(e,t,n){return function(r,a){var i,o,c,s,l,u,f,d,m,g,h,p,y,v;"src"===a.name?He(e,t,n,r):"images"===a.name?(m=e,g=t,h=n,y=(p=r).getData(),(v=De(g.imageList,y.images)).each(function(e){""===y.alt||h.prevImage.map(function(e){return e.text===y.alt}).getOr(!1)?""===e.value?p.setData({src:e,alt:h.prevAlt}):p.setData({src:e,alt:e.text}):p.setData({src:e})}),h.prevImage=v,He(m,g,h,p)):"alt"===a.name?n.prevAlt=r.getData().alt:"style"===a.name?(l=e,f=(u=r).getData(),d=qe(l.parseStyle,l.serializeStyle,f),u.setData(d)):"vspace"===a.name||"hspace"===a.name||"border"===a.name||"borderstyle"===a.name?(i=e,o=r,c=ke(Be(t.image),o.getData()),s=le(i.normalizeCss,Me(c,!1)),o.setData({style:s})):"fileinput"===a.name?Ue(e,t,n,r):"isDecorative"===a.name&&(r.getData().isDecorative?r.disable("alt"):r.enable("alt"))}},$e=function(e){return function(t){var n,r,a,i={prevImage:De((n=t).imageList,n.image.src),prevAlt:n.image.alt,open:!0};return{title:"Insert/Edit Image",size:"normal",body:(a=t).hasAdvTab||a.hasUploadUrl||a.hasUploadHandler?{type:"tabpanel",tabs:D([[Pe(a)],a.hasAdvTab?[Ae(a)]:[],a.hasUploadTab&&(a.hasUploadUrl||a.hasUploadHandler)?[je(a)]:[]])}:{type:"panel",items:Le(a)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:Be(t.image),onSubmit:e.onSubmit(t),onChange:Ve(e,t,i),onClose:(r=i,function(){r.open=!1})}}},We=function(e){return function(t){return n=e.documentBaseURI.toAbsolute(t),new j(function(e){var t=document.createElement("img"),r=function(n){t.parentNode&&t.parentNode.removeChild(t),e(n)};t.onload=function(){var e={width:I(t.width,t.clientWidth),height:I(t.height,t.clientHeight)};r(j.resolve(e))},t.onerror=function(){r(j.reject("Failed to get image dimensions for: "+n))};var a=t.style;a.visibility="hidden",a.position="fixed",a.bottom=a.left="0px",a.width=a.height="auto",document.body.appendChild(t),t.src=n}).then(function(e){return{width:String(e.width),height:String(e.height)}});var n}},Xe=function(e){var t,n,r,a,i,o,c,s,l={onSubmit:function(e){return function(t){var n=ke(Be(e.image),t.getData());s.execCommand("mceUpdateImage",!1,Me(n,e.hasAccessibilityOptions)),s.editorUpload.uploadImagesAuto(),t.close()}},imageSize:We(s=e),addToBlobCache:function(e){c.editorUpload.blobCache.add(e)},createBlobCache:function(e,t,n){return o.editorUpload.blobCache.create({blob:e,blobUri:t,name:e.name?e.name.replace(/\.[^\.]+$/,""):null,filename:e.name,base64:n.split(",")[1]})},alertErr:function(e){i.windowManager.alert(e)},normalizeCss:function(e){return he(a,e)},parseStyle:function(e){return r.dom.parseStyle(e)},serializeStyle:function(e,t){return n.dom.serializeStyle(e,t)},uploadImage:(t=n=r=a=i=o=c=e,function(e){return _e(t).upload([e],!1).then(function(e){return 0===e.length?j.reject("Failed to upload image"):!1===e[0].status?j.reject(e[0].error.message):e[0]})})};return{open:function(){Oe(e).then($e(l)).then(e.windowManager.open)}}},Ke=function(e){e.addCommand("mceImage",Xe(e).open),e.addCommand("mceUpdateImage",function(t,n){e.undoManager.transact(function(){return r=n,void((u=pe(t=e))?(a=ue(function(e){return he(t,e)},u),(i=o(o({},a),r)).src?be(t,i):(c=t,(s=u)&&(l=c.dom.is(s.parentNode,"figure.image")?s.parentNode:s,c.dom.remove(l),c.focus(),c.nodeChanged(),c.dom.isEmpty(c.getBody())&&(c.setContent(""),c.selection.setCursorLocation())))):r.src&&ve(t,o(o({},se()),r)));var t,r,a,i,c,s,l,u})})},Ge=function(e){return function(t){for(var n,r=t.length,a=function(t){t.attr("contenteditable",e?"true":null)};r--;){var i=t[r];(n=i.attr("class"))&&/\bimage\b/.test(n)&&(i.attr("contenteditable",e?"false":null),Ce.each(i.getAll("figcaption"),a))}}};i.add("image",function(e){var t,n;(t=e).on("PreInit",function(){t.parser.addNodeFilter("figure",Ge(!0)),t.serializer.addNodeFilter("figure",Ge(!1))}),(n=e).ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:Xe(n).open,onSetup:function(e){return n.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",e.setActive).unbind}}),n.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:Xe(n).open}),n.ui.registry.addContextMenu("image",{update:function(e){return oe(e)||"IMG"===e.nodeName&&!U(e)?["image"]:[]}}),Ke(e)})}();