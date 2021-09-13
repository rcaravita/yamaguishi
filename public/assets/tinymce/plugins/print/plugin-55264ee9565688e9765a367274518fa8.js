/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.7.1 (2021-03-17)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env");e.add("print",function(e){var n,r;(n=e).addCommand("mcePrint",function(){t.browser.isIE()?n.getDoc().execCommand("print",!1,null):n.getWin().print()}),(r=e).ui.registry.addButton("print",{icon:"print",tooltip:"Print",onAction:function(){return r.execCommand("mcePrint")}}),r.ui.registry.addMenuItem("print",{text:"Print...",icon:"print",onAction:function(){return r.execCommand("mcePrint")}}),e.addShortcut("Meta+P","","mcePrint")})}();