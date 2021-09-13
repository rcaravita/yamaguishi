/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e,t,n,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e){return function(){return e}},o=i(!1),c=i(!0),s=function(){return l},l=(e=function(e){return e.isNone()},{fold:function(e){return e()},is:o,isSome:o,isNone:c,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:n,orThunk:t,map:s,each:function(){},bind:s,exists:o,forall:c,filter:s,equals:e,equals_:e,toArray:function(){return[]},toString:i("none()")}),u=function(e){var t=i(e),n=function(){return a},r=function(t){return t(e)},a={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:c,isNone:o,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return u(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?a:l},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(o,function(t){return n(e,t)})}};return a},f={some:u,none:s,from:function(e){return null===e||void 0===e?l:u(e)}},d=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e;var n,r}},m=d("string"),g=d("object"),h=d("array"),p=function(e){return!(null===(t=e)||void 0===t);var t},y=Array.prototype.push,v=function(e,t){for(var n=0,r=e.length;r>n;n++)t(e[n],n)},b=function(e){var t=e;return{get:function(){return t},set:function(e){t=e}}},w=Object.keys,k=Object.hasOwnProperty,_=function(e,t){return C(e,t)?f.from(e[t]):f.none()},C=function(e,t){return k.call(e,t)},x=function(e){return e.getParam("media_scripts")},z=tinymce.util.Tools.resolve("tinymce.util.Tools"),S=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),N=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),E=function(e,t){if(e)for(var n=0;n<e.length;n++)if(-1!==t.indexOf(e[n].filter))return e[n]},T=S.DOM,D=function(e){return e.replace(/px$/,"")},A=function(e,t){var n=b(!1),r={};return N({validate:!1,allow_conditional_comments:!0,start:function(t,a){if(!n.get())if(C(a.map,"data-ephox-embed-iri"))n.set(!0),c=(o=a).map.style,s=c?T.parseStyle(c):{},r={type:"ephox-embed-iri",source:o.map["data-ephox-embed-iri"],altsource:"",poster:"",width:_(s,"max-width").map(D).getOr(""),height:_(s,"max-height").map(D).getOr("")};else{if(r.source||"param"!==t||(r.source=a.map.movie),"iframe"!==t&&"object"!==t&&"embed"!==t&&"video"!==t&&"audio"!==t||(r.type||(r.type=t),r=z.extend(a.map,r)),"script"===t){var i=E(e,a.map.src);if(!i)return;r={type:"script",source:a.map.src,width:String(i.width),height:String(i.height)}}"source"===t&&(r.source?r.altsource||(r.altsource=a.map.src):r.source=a.map.src),"img"!==t||r.poster||(r.poster=a.map.src)}var o,c,s}}).parse(t),r.source=r.source||r.src||r.data,r.altsource=r.altsource||"",r.poster=r.poster||"",r},O=function(e){var t={mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()];return t||""},R=tinymce.util.Tools.resolve("tinymce.html.Schema"),P=tinymce.util.Tools.resolve("tinymce.html.Writer"),L=S.DOM,j=function(e){return/^[0-9.]+$/.test(e)?e+"px":e},B=function(e,t){!function(e,t){for(var n=w(e),r=0,a=n.length;a>r;r++){var i=n[r];t(e[i],i)}}(t,function(t,n){var r=""+t;if(e.map[n])for(var a=e.length;a--;){var i=e[a];i.name===n&&(r?(e.map[n]=r,i.value=r):(delete e.map[n],e.splice(a,1)))}else r&&(e.push({name:n,value:r}),e.map[n]=r)})},M=["source","altsource"],I=function(e,t,n){var r,a=P(),i=b(!1),o=0;return N({validate:!1,allow_conditional_comments:!0,comment:function(e){a.comment(e)},cdata:function(e){a.cdata(e)},text:function(e,t){a.text(e,t)},start:function(e,c,s){if(!i.get())if(C(c.map,"data-ephox-embed-iri"))i.set(!0),l=t,f=(u=c).map.style,(d=f?L.parseStyle(f):{})["max-width"]=j(l.width),d["max-height"]=j(l.height),B(u,{style:L.serializeStyle(d)});else{switch(e){case"video":case"object":case"embed":case"img":case"iframe":void 0!==t.height&&void 0!==t.width&&B(c,{width:t.width,height:t.height})}if(n)switch(e){case"video":B(c,{poster:t.poster,src:""}),t.altsource&&B(c,{src:""});break;case"iframe":B(c,{src:t.source});break;case"source":if(2>o&&(B(c,{src:t[M[o]],type:t[M[o]+"mime"]}),!t[M[o]]))return;o++;break;case"img":if(!t.poster)return;r=!0}}var l,u,f,d;a.start(e,c,s)},end:function(e){if(!i.get()){if("video"===e&&n)for(var c,s=0;2>s;s++)t[M[s]]&&((c=[]).map={},s>=o&&(B(c,{src:t[M[s]],type:t[M[s]+"mime"]}),a.start("source",c,!0)));var l;t.poster&&"object"===e&&n&&!r&&((l=[]).map={},B(l,{src:t.poster,width:t.width,height:t.height}),a.start("img",l,!0))}a.end(e)}},R({})).parse(e),a.getContent()},F=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],H=function(e){var t=F.filter(function(t){return t.regex.test(e)});return 0<t.length?z.extend({},t[0],{url:function(e,t){for(var n,r=(n=t.match(/^(https?:\/\/|www\.)(.+)$/i))&&1<n.length&&"www."!==n[1]?n[1]:"https://",a=e.regex.exec(t),i=r+e.url,o=0;o<a.length;o++)!function(e){i=i.replace("$"+e,function(){return a[e]?a[e]:""})}(o);return i.replace(/\?$/,"")}(t[0],e)}):null},q=function(e,t){var n=z.extend({},t);if(!n.source&&(z.extend(n,A(x(e),n.embed)),!n.source))return"";n.altsource||(n.altsource=""),n.poster||(n.poster=""),n.source=e.convertURL(n.source,"source"),n.altsource=e.convertURL(n.altsource,"source"),n.sourcemime=O(n.source),n.altsourcemime=O(n.altsource),n.poster=e.convertURL(n.poster,"poster");var r=H(n.source);if(r&&(n.source=r.url,n.type=r.type,n.allowfullscreen=r.allowFullscreen,n.width=n.width||String(r.w),n.height=n.height||String(r.h)),n.embed)return I(n.embed,n,!0);var a=E(x(e),n.source);a&&(n.type="script",n.width=String(a.width),n.height=String(a.height));var i,o,c,s,l,u,f,d,m=e.getParam("audio_template_callback"),g=e.getParam("video_template_callback");return n.width=n.width||"300",n.height=n.height||"150",z.each(n,function(t,r){n[r]=e.dom.encode(""+t)}),"iframe"===n.type?(d=(f=n).allowfullscreen?' allowFullscreen="1"':"",'<iframe src="'+f.source+'" width="'+f.width+'" height="'+f.height+'"'+d+"></iframe>"):"application/x-shockwave-flash"===n.sourcemime?(u='<object data="'+(l=n).source+'" width="'+l.width+'" height="'+l.height+'" type="application/x-shockwave-flash">',l.poster&&(u+='<img src="'+l.poster+'" width="'+l.width+'" height="'+l.height+'" />'),u+="</object>"):-1!==n.sourcemime.indexOf("audio")?(c=n,(s=m)?s(c):'<audio controls="controls" src="'+c.source+'">'+(c.altsource?'\n<source src="'+c.altsource+'"'+(c.altsourcemime?' type="'+c.altsourcemime+'"':"")+" />\n":"")+"</audio>"):"script"===n.type?'<script src="'+n.source+'"></script>':(i=n,(o=g)?o(i):'<video width="'+i.width+'" height="'+i.height+'"'+(i.poster?' poster="'+i.poster+'"':"")+' controls="controls">\n<source src="'+i.source+'"'+(i.sourcemime?' type="'+i.sourcemime+'"':"")+" />\n"+(i.altsource?'<source src="'+i.altsource+'"'+(i.altsourcemime?' type="'+i.altsourcemime+'"':"")+" />\n":"")+"</video>")},U=tinymce.util.Tools.resolve("tinymce.util.Promise"),V={},$=function(e){return function(t){return q(e,t)}},W=function(e,t){var n,r,a,i,o,c=e.getParam("media_url_resolver");return c?(a=t,i=$(e),o=c,new U(function(e,t){var n=function(t){return t.html&&(V[a.source]=t),e({url:a.source,html:t.html?t.html:i(a)})};V[a.source]?n(V[a.source]):o({url:a.source},n,t)})):(n=t,r=$(e),new U(function(e){e({html:r(n),url:n.source})}))},X=function(e,t,n){return function(r){var a=function(){return _(e,r)},i=function(){return _(t,r)},o=function(e){return _(e,"value").bind(function(e){return 0<e.length?f.some(e):f.none()})},c={};return c[r]=(r===n?a().bind(function(e){return g(e)?o(e).orThunk(i):i().orThunk(function(){return f.from(e)})}):i().orThunk(function(){return a().bind(function(e){return g(e)?o(e):f.from(e)})})).getOr(""),c}},K=function(e,t){var n,r,i=t?_(e,t).bind(function(e){return _(e,"meta")}).getOr({}):{},o=X(e,i,t);return a(a(a(a(a({},o("source")),o("altsource")),o("poster")),o("embed")),(n=i,r={},_(e,"dimensions").each(function(e){v(["width","height"],function(t){_(n,t).orThunk(function(){return _(e,t)}).each(function(e){return r[t]=e})})}),r))},G=function(e){var t=a(a({},e),{source:{value:_(e,"source").getOr("")},altsource:{value:_(e,"altsource").getOr("")},poster:{value:_(e,"poster").getOr("")}});return v(["width","height"],function(n){_(e,n).each(function(e){var r=t.dimensions||{};r[n]=e,t.dimensions=r})}),t},Y=function(e){return function(t){var n=t&&t.msg?"Media embed handler error: "+t.msg:"Media embed handler threw unknown error.";e.notificationManager.open({type:"error",text:n})}},J=function(e,t){return A(x(e),t)},Z=function(e,t){return function(n){var r,i,o;m(n.url)&&0<n.url.trim().length&&(r=n.html,i=J(t,r),o=a(a({},i),{source:n.url,embed:r}),e.setData(G(o)))}},Q=function(e,t){var n=e.dom.select("*[data-mce-object]");e.insertContent(t),function(e,t){for(var n=e.dom.select("*[data-mce-object]"),r=0;r<t.length;r++)for(var a=n.length-1;a>=0;a--)t[r]===n[a]&&n.splice(a,1);e.selection.select(n[0])}(e,n),e.nodeChanged()},ee=function(e,t,n){var r;t.embed=I(t.embed,t),t.embed&&(e.source===t.source||(r=t.source,V.hasOwnProperty(r)))?Q(n,t.embed):W(n,t).then(function(e){Q(n,e.html)})["catch"](Y(n))},te=function(e){var t,n,r,i,o=(r=(t=e).selection.getNode(),i=(n=r).getAttribute("data-mce-object")||n.getAttribute("data-ephox-embed-iri")?t.serializer.serialize(r,{selection:!0}):"",a({embed:i},A(x(t),i))),c=b(o),s=G(o),l={title:"General",name:"general",items:function(e){for(var t=[],n=0,r=e.length;r>n;++n){if(!h(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);y.apply(t,e[n])}return t}([[{name:"source",type:"urlinput",filetype:"media",label:"Source"}],e.getParam("media_dimensions",!0)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[]])},u={title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]},f=[];e.getParam("media_alt_source",!0)&&f.push({name:"altsource",type:"urlinput",filetype:"media",label:"Alternative source URL"}),e.getParam("media_poster",!0)&&f.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"});var d={title:"Advanced",name:"advanced",items:f},m=[l,u];0<f.length&&m.push(d);var g={type:"tabpanel",tabs:m},p=e.windowManager.open({title:"Insert/Edit Media",size:"normal",body:g,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(t){var n=K(t.getData());ee(c.get(),n,e),t.close()},onChange:function(t,n){switch(n.name){case"source":d=c.get(),m=K(t.getData(),"source"),d.source!==m.source&&(Z(p,e)({url:m.source,html:""}),W(e,m).then(Z(p,e))["catch"](Y(e)));break;case"embed":u=K((l=t).getData()),f=J(e,u.embed),l.setData(G(f));break;case"dimensions":case"altsource":case"poster":r=t,i=n.name,o=K(r.getData(),i),s=q(e,o),r.setData(G(a(a({},o),{embed:s})))}var r,i,o,s,l,u,f,d,m;c.set(K(t.getData()))},initialData:s})},ne=tinymce.util.Tools.resolve("tinymce.html.Node"),re=tinymce.util.Tools.resolve("tinymce.Env"),ae=tinymce.util.Tools.resolve("tinymce.html.DomParser"),ie=function(e,t){if(!1===e.getParam("media_filter_html",!0))return t;var n,r=P();return N({validate:!1,allow_conditional_comments:!1,comment:function(e){n||r.comment(e)},cdata:function(e){n||r.cdata(e)},text:function(e,t){n||r.text(e,t)},start:function(t,a,i){if(n=!0,"script"!==t&&"noscript"!==t&&"svg"!==t){for(var o=a.length-1;o>=0;o--){var c=a[o].name;0===c.indexOf("on")&&(delete a.map[c],a.splice(o,1)),"style"===c&&(a[o].value=e.dom.serializeStyle(e.dom.parseStyle(a[o].value),t))}r.start(t,a,i),n=!1}},end:function(e){n||r.end(e)}},R({})).parse(t),r.getContent()},oe=function(e,t,n,r){void 0===r&&(r=null);var a=e.attr(n);return p(a)?a:C(t,n)?null:r},ce=function(e,t,n){var r="img"===t.name||"video"===e.name,a=r?"300":null,i="audio"===e.name?"30":"150",o=r?i:null;t.attr({width:oe(e,n,"width",a),height:oe(e,n,"height",o)})},se=function(e,t){var n=t.name,r=new ne("span",1);r.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":n,"class":"mce-preview-object mce-object-"+n}),le(e,t,r);var a,i=e.dom.parseStyle(t.attr("style")),o=new ne(n,1);ce(t,o,i),o.attr({src:t.attr("src"),style:t.attr("style"),"class":t.attr("class")}),"iframe"===n?o.attr({allowfullscreen:t.attr("allowfullscreen"),frameborder:"0"}):(v(["controls","crossorigin","currentTime","loop","muted","poster","preload"],function(e){o.attr(e,t.attr(e))}),a=r.attr("data-mce-html"),p(a)&&function(e,t,n,r){for(var a=ae({forced_root_block:!1,validate:!1},e.schema).parse(r,{context:t});a.firstChild;)n.append(a.firstChild)}(e,n,o,a));var c=new ne("span",1);return c.attr("class","mce-shim"),r.append(o),r.append(c),r},le=function(e,t,n){for(var r=t.attributes,a=r.length;a--;){var i=r[a].name,o=r[a].value;"width"!==i&&"height"!==i&&"style"!==i&&("data"!==i&&"src"!==i||(o=e.convertURL(o,i)),n.attr("data-mce-p-"+i,o))}var c=t.firstChild&&t.firstChild.value;c&&(n.attr("data-mce-html",escape(ie(e,c))),n.firstChild=null)},ue=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri")||(t=e.attr("class"))&&/\btiny-pageembed\b/.test(t))return!0;var t;return!1},fe=function(e){return function(t){for(var n,r,a,i,o,c,s,l=t.length;l--;)(n=t[l]).parent&&(n.parent.attr("data-mce-object")||"script"===n.name&&!(r=E(x(e),n.attr("src")))||(r&&(r.width&&n.attr("width",r.width.toString()),r.height&&n.attr("height",r.height.toString())),("iframe"===(s=n.name)||"video"===s||"audio"===s)&&e.getParam("media_live_embeds",!0)&&re.ceFalse?ue(n)||n.replace(se(e,n)):ue(n)||n.replace((a=e,c=void 0,o=(i=n).name,(c=new ne("img",1)).shortEnded=!0,le(a,i,c),ce(i,c,{}),c.attr({style:i.attr("style"),src:re.transparentSrc,"data-mce-object":o,"class":"mce-object mce-object-"+o}),c))))}},de=function(e){var t,n;e.ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction:function(){e.execCommand("mceMedia")},onSetup:(t=e,n=["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"],function(e){return t.selection.selectorChangedWithUnbind(n.join(","),e.setActive).unbind})}),e.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction:function(){e.execCommand("mceMedia")}})};r.add("media",function(e){var t,n,r,a;return(t=e).addCommand("mceMedia",function(){te(t)}),de(e),e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}),(n=e).on("preInit",function(){var e=n.schema.getSpecialElements();z.each("video audio iframe object".split(" "),function(t){e[t]=new RegExp("</"+t+"[^>]*>","gi")});var t=n.schema.getBoolAttrs();z.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){t[e]={}}),n.parser.addNodeFilter("iframe,video,audio,object,embed,script",fe(n)),n.serializer.addAttributeFilter("data-mce-object",function(e,t){for(var r,a,i,o,c,s,l,u,f=e.length;f--;)if((r=e[f]).parent){for(l=r.attr(t),a=new ne(l,1),"audio"!==l&&"script"!==l&&((u=r.attr("class"))&&-1!==u.indexOf("mce-preview-object")?a.attr({width:r.firstChild.attr("width"),height:r.firstChild.attr("height")}):a.attr({width:r.attr("width"),height:r.attr("height")})),a.attr({style:r.attr("style")}),i=(o=r.attributes).length;i--;){var d=o[i].name;0===d.indexOf("data-mce-p-")&&a.attr(d.substr(11),o[i].value)}"script"===l&&a.attr("type","text/javascript"),(c=r.attr("data-mce-html"))&&((s=new ne("#text",3)).raw=!0,s.value=ie(n,unescape(c)),a.append(s)),r.replace(a)}})}),n.on("SetContent",function(){n.$("span.mce-preview-object").each(function(e,t){var r=n.$(t);0===r.find("span.mce-shim").length&&r.append('<span class="mce-shim"></span>')})}),(r=e).on("click keyup touchend",function(){var e=r.selection.getNode();e&&r.dom.hasClass(e,"mce-preview-object")&&r.dom.getAttrib(e,"data-mce-selected")&&e.setAttribute("data-mce-selected","2")}),r.on("ObjectSelected",function(e){"script"===e.target.getAttribute("data-mce-object")&&e.preventDefault()}),r.on("ObjectResized",function(e){var t,n=e.target;n.getAttribute("data-mce-object")&&(t=n.getAttribute("data-mce-html"))&&(t=unescape(t),n.setAttribute("data-mce-html",escape(I(t,{width:String(e.width),height:String(e.height)}))))}),a=e,{showDialog:function(){te(a)}}})}();