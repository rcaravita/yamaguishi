window.TinyMCERails={configuration:{"default":{}},initialize:function(e,t){if("undefined"!=typeof tinyMCE){var n=TinyMCERails.configuration[e||"default"];n=TinyMCERails._merge(n,t),tinyMCE.init(n)}else setTimeout(function(){TinyMCERails.initialize(e,t)},50)},setupTurbolinks:function(){document.addEventListener("turbolinks:before-render",function(){tinymce.remove()})},_merge:function(){for(var e={},t=0;t<arguments.length;++t){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&("[object Object]"===Object.prototype.toString.call(n[r])?e[r]=TinyMCERails._merge(e[r],n[r]):e[r]=n[r])}return e}},"undefined"!=typeof Turbolinks&&Turbolinks.supported&&TinyMCERails.setupTurbolinks();