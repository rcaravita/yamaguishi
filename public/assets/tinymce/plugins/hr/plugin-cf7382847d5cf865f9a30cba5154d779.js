/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");e.add("hr",function(e){var t,n;(t=e).addCommand("InsertHorizontalRule",function(){t.execCommand("mceInsertContent",!1,"<hr />")}),(n=e).ui.registry.addButton("hr",{icon:"horizontal-rule",tooltip:"Horizontal line",onAction:function(){return n.execCommand("InsertHorizontalRule")}}),n.ui.registry.addMenuItem("hr",{icon:"horizontal-rule",text:"Horizontal line",onAction:function(){return n.execCommand("InsertHorizontalRule")}})})}();