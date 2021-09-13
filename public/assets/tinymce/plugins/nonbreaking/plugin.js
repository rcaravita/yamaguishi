/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e,t){for(var n="",r=0;t>r;r++)n+=e;return n},n=function(e,n){var r,a=e.getParam("nonbreaking_wrap",!0,"boolean")||e.plugins.visualchars?'<span class="'+((r=e).plugins.visualchars&&r.plugins.visualchars.isEnabled()?"mce-nbsp-wrap mce-nbsp":"mce-nbsp-wrap")+'" contenteditable="false">'+t("&nbsp;",n)+"</span>":t("&nbsp;",n);e.undoManager.transact(function(){return e.insertContent(a)})},r=tinymce.util.Tools.resolve("tinymce.util.VK");e.add("nonbreaking",function(e){var t,a,i,o,c;(t=e).addCommand("mceNonBreaking",function(){n(t,1)}),(a=e).ui.registry.addButton("nonbreaking",{icon:"non-breaking",tooltip:"Nonbreaking space",onAction:function(){return a.execCommand("mceNonBreaking")}}),a.ui.registry.addMenuItem("nonbreaking",{icon:"non-breaking",text:"Nonbreaking space",onAction:function(){return a.execCommand("mceNonBreaking")}}),0<(c="boolean"==typeof(o=(i=e).getParam("nonbreaking_force_tab",0))?!0===o?3:0:o)&&i.on("keydown",function(e){if(e.keyCode===r.TAB&&!e.isDefaultPrevented()){if(e.shiftKey)return;e.preventDefault(),e.stopImmediatePropagation(),n(i,c)}})})}();