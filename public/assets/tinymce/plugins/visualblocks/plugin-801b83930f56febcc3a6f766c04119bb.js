/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e,t,n){var r,a;e.dom.toggleClass(e.getBody(),"mce-visualblocks"),n.set(!n.get()),r=e,a=n.get(),r.fire("VisualBlocks",{state:a})},n=function(e,t){return function(n){n.setActive(t.get());var r=function(e){return n.setActive(e.state)};return e.on("VisualBlocks",r),function(){return e.off("VisualBlocks",r)}}};e.add("visualblocks",function(e){var r,a,o,i,c,s,l,u=(r=!1,{get:function(){return r},set:function(e){r=e}});o=u,(a=e).addCommand("mceVisualBlocks",function(){t(a,0,o)}),c=u,(i=e).ui.registry.addToggleButton("visualblocks",{icon:"visualblocks",tooltip:"Show blocks",onAction:function(){return i.execCommand("mceVisualBlocks")},onSetup:n(i,c)}),i.ui.registry.addToggleMenuItem("visualblocks",{text:"Show blocks",icon:"visualblocks",onAction:function(){return i.execCommand("mceVisualBlocks")},onSetup:n(i,c)}),l=u,(s=e).on("PreviewFormats AfterPreviewFormats",function(e){l.get()&&s.dom.toggleClass(s.getBody(),"mce-visualblocks","afterpreviewformats"===e.type)}),s.on("init",function(){s.getParam("visualblocks_default_state",!1,"boolean")&&t(s,0,l)})})}();