/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
!function(){var e,t,n,r=[],o="undefined"!=typeof global?global:window,i=o.jQuery,a=function(){return o.tinymce};i.fn.tinymce=function(e){var s,c,l,f=this,d="";if(!f.length)return f;if(!e)return a()?a().get(f[0].id):null;f.css("visibility","hidden");var h,p=function(){var t=[],r=0;n||(u(),n=!0),f.each(function(n,o){var i,u=o.id,s=e.oninit;u||(o.id=u=a().DOM.uniqueId()),a().get(u)||(i=a().createEditor(u,e),t.push(i),i.on("init",function(){var e,n=s;f.css("visibility",""),s&&++r==t.length&&("string"==typeof n&&(e=-1===n.indexOf(".")?null:a().resolve(n.replace(/\.\w+$/,"")),n=a().resolve(n)),n.apply(e||a(),t))}))}),i.each(t,function(e,t){t.render()})};return o.tinymce||t||!(s=e.script_url)?1===t?r.push(p):p():(t=1,c=s.substring(0,s.lastIndexOf("/")),-1!=s.indexOf(".min")&&(d=".min"),o.tinymce=o.tinyMCEPreInit||{base:c,suffix:d},-1!=s.indexOf("gzip")&&(l=e.language||"en",s=s+(/\?/.test(s)?"&":"?")+"js=true&core=true&suffix="+escape(d)+"&themes="+escape(e.theme||"modern")+"&plugins="+escape(e.plugins||"")+"&languages="+(l||""),o.tinyMCE_GZ||(o.tinyMCE_GZ={start:function(){var t=function(e){a().ScriptLoader.markDone(a().baseURI.toAbsolute(e))};t("langs/"+l+".js"),t("themes/"+e.theme+"/theme"+d+".js"),t("themes/"+e.theme+"/langs/"+l+".js"),i.each(e.plugins.split(","),function(e,n){n&&(t("plugins/"+n+"/plugin"+d+".js"),t("plugins/"+n+"/langs/"+l+".js"))})},end:function(){}})),(h=document.createElement("script")).type="text/javascript",h.onload=h.onreadystatechange=function(n){n=n||window.event,2===t||"load"!=n.type&&!/complete|loaded/.test(h.readyState)||(a().dom.Event.domLoaded=1,t=2,e.script_loaded&&e.script_loaded(),p(),i.each(r,function(e,t){t()}))},h.src=s,document.body.appendChild(h)),f},i.extend(i.expr[":"],{tinymce:function(e){var t;return!!(e.id&&"tinymce"in o&&(t=a().get(e.id))&&t.editorManager===a())}});var u=function(){var t=function(e){"remove"===e&&this.each(function(e,t){var n=r(t);n&&n.remove()}),this.find("span.mceEditor,div.mceEditor").each(function(e,t){var n=a().get(t.id.replace(/_parent$/,""));n&&n.remove()})},n=function(e){var n,r=this;if(null!=e)t.call(r),r.each(function(t,n){var r;(r=a().get(n.id))&&r.setContent(e)});else if(0<r.length&&(n=a().get(r[0].id)))return n.getContent()},r=function(e){var t=null;return e&&e.id&&o.tinymce&&(t=a().get(e.id)),t},u=function(e){return!!(e&&e.length&&o.tinymce&&e.is(":tinymce"))},s={};i.each(["text","html","val"],function(t,o){var a=s[o]=i.fn[o],c="text"===o;i.fn[o]=function(t){var o=this;if(!u(o))return a.apply(o,arguments);if(t!==e)return n.call(o.filter(":tinymce"),t),a.apply(o.not(":tinymce"),arguments),o;var s="",l=arguments;return(c?o:o.eq(0)).each(function(e,t){var n=r(t);s+=n?c?n.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):n.getContent({save:!0}):a.apply(i(t),l)}),s}}),i.each(["append","prepend"],function(t,n){var o=s[n]=i.fn[n],a="prepend"===n;i.fn[n]=function(t){var n=this;return u(n)?t!==e?("string"==typeof t&&n.filter(":tinymce").each(function(e,n){var o=r(n);o&&o.setContent(a?t+o.getContent():o.getContent()+t)}),o.apply(n.not(":tinymce"),arguments),n):void 0:o.apply(n,arguments)}}),i.each(["remove","replaceWith","replaceAll","empty"],function(e,n){var r=s[n]=i.fn[n];i.fn[n]=function(){return t.call(this,n),r.apply(this,arguments)}}),s.attr=i.fn.attr,i.fn.attr=function(t,o){var a=this,c=arguments;if(!t||"value"!==t||!u(a))return s.attr.apply(a,c);if(o!==e)return n.call(a.filter(":tinymce"),o),s.attr.apply(a.not(":tinymce"),c),a;var l=a[0],f=r(l);return f?f.getContent({save:!0}):s.attr.apply(i(l),c)}}}();