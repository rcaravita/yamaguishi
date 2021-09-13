/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),n=tinymce.util.Tools.resolve("tinymce.util.Tools"),r="a:not([href])",o=function(e){return e.getAttribute("id")||e.getAttribute("name")||""},i=function(e){return(t=e)&&"a"===t.nodeName.toLowerCase()&&!e.getAttribute("href")&&""!==o(e);var t},a=function(e){var r=e.dom;t(r).walk(e.selection.getRng(),function(e){n.each(e,function(e){var t;i(t=e)&&!t.firstChild&&r.remove(e,!1)})})},u=function(e){return e.dom.getParent(e.selection.getStart(),r)},s=function(e,t){var n,r,o,i,s,c=u(e);c?(o=e,i=t,(s=c).removeAttribute("name"),s.id=i,o.addVisual(),o.undoManager.add()):(r=t,(n=e).undoManager.transact(function(){n.getParam("allow_html_in_named_anchor",!1,"boolean")||n.selection.collapse(!0),n.selection.isCollapsed()?n.insertContent(n.dom.createHTML("a",{id:r})):(a(n),n.formatter.remove("namedAnchor",null,null,!0),n.formatter.apply("namedAnchor",{value:r}),n.addVisual())})),e.focus()},c=function(e){var t,n=(t=u(e))?o(t):"";e.windowManager.open({title:"Anchor",size:"normal",body:{type:"panel",items:[{name:"id",type:"input",label:"ID",placeholder:"example"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{id:n},onSubmit:function(t){var n,r;n=e,r=t.getData().id,(/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(r)?(s(n,r),1):(n.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),0))&&t.close()}})},l=function(e){return function(t){for(var n,r,o=0;o<t.length;o++){var i=t[o];r=void 0,!(r=n=i)||r.attr("href")||!r.attr("id")&&!r.attr("name")||n.firstChild||i.attr("contenteditable",e)}}};e.add("anchor",function(e){var t,n,o;(t=e).on("PreInit",function(){t.parser.addNodeFilter("a",l("false")),t.serializer.addNodeFilter("a",l(null))}),(n=e).addCommand("mceAnchor",function(){c(n)}),(o=e).ui.registry.addToggleButton("anchor",{icon:"bookmark",tooltip:"Anchor",onAction:function(){return o.execCommand("mceAnchor")},onSetup:function(e){return o.selection.selectorChangedWithUnbind("a:not([href])",e.setActive).unbind}}),o.ui.registry.addMenuItem("anchor",{icon:"bookmark",text:"Anchor...",onAction:function(){return o.execCommand("mceAnchor")}}),e.on("PreInit",function(){e.formatter.register("namedAnchor",{inline:"a",selector:r,remove:"all",split:!0,deep:!0,attributes:{id:"%value"},onmatch:function(e){return i(e)}})})})}();