;/*FB_PKG_DELIM*/

__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=(c=b("PageHooks"))._domreadyHook;a._onloadHook=c._onloadHook;a.runHook=c.runHook;a.runHooks=c.runHooks;a.keep_window_set_as_loaded=c.keepWindowSetAsLoaded}),3);
__d("FullScreen",["ArbiterMixin","BrowserFeatureInstrumentation","CSS","Event","Keys","UserAgent","UserAgent_DEPRECATED","mixin","throttle"],(function(a,b,c,d,e,f,g){var h={},i=!1;function j(a){c("Event").getKeyCode(a)===c("Keys").ESC&&a.stopPropagation()}function k(){i||(document.addEventListener("keydown",j,!0),i=!0)}function l(){i&&(document.removeEventListener("keydown",j,!0),i=!1)}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=c=a.call.apply(a,[this].concat(f))||this,c.onChange=function(){var a=c.isFullScreen(),b=document.body;b&&d("CSS").conditionClass(b,"fullScreen",a);c.inform("changed");a||l()},b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.listenForEvent=function(a){var b=c("throttle")(this.onChange,0,this);h[a.id]||(h[a.id]=!0,c("Event").listen(a,{webkitfullscreenchange:b,mozfullscreenchange:b,MSFullscreenChange:b,fullscreenchange:b}))};e.enableFullScreen=function(a){this.listenForEvent(a);a=a;if(a.webkitRequestFullScreen)d("UserAgent_DEPRECATED").chrome()?a.webkitRequestFullScreen==null?void 0:a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen==null?void 0:a.webkitRequestFullScreen();else if(a.mozRequestFullScreen)a.mozRequestFullScreen();else if(a.msRequestFullscreen)k(),a.msRequestFullscreen==null?void 0:a.msRequestFullscreen();else if(a.requestFullScreen)c("BrowserFeatureInstrumentation")("fullscreen","FullScreen"),a.requestFullScreen==null?void 0:a.requestFullScreen();else return!1;return!0};e.disableFullScreen=function(){var a=document;if(a.webkitCancelFullScreen)a.webkitCancelFullScreen();else if(a.mozCancelFullScreen)a.mozCancelFullScreen();else if(a.msExitFullscreen)a.msExitFullscreen();else if(a.cancelFullScreen)a.cancelFullScreen();else if(a.exitFullScreen)a.exitFullScreen();else return!1;return!0};e.isFullScreen=function(){var a=document;return Boolean(a.webkitIsFullScreen||a.fullScreen||a.mozFullScreen||a.msFullscreenElement)};e.toggleFullScreen=function(a){if(this.isFullScreen()){this.disableFullScreen();return!1}else return this.enableFullScreen(a)};e.isSupportedWithKeyboardInput=function(){return this.isSupported()&&!c("UserAgent").isBrowser("Safari")};e.isSupported=function(){var a=document,b=a.webkitFullscreenEnabled||a.mozFullScreenEnabled||a.msFullscreenEnabled||a.fullscreenEnabled;return Boolean(b||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen||a.cancelFullScreen||a.exitFullScreen)};return b}(c("mixin")(c("ArbiterMixin")));b=new a();e=c("throttle")(b.onChange,0,b);c("Event").listen(document,{webkitfullscreenchange:e,mozfullscreenchange:e,MSFullscreenChange:e,fullscreenchange:e});f=b;g["default"]=f}),98);
__d("XAsyncRequestWWW",["AsyncRequest"],(function(a,b,c,d,e,f,g){a=function(){function a(a){var b=this;this.setAllowCrossPageTransition=function(a){b.$1.setAllowCrossPageTransition(a);return b};this.$1=new(c("AsyncRequest"))(a)}var b=a.prototype;b.setURI=function(a){this.$1.setURI(a);return this};b.setTimeoutHandler=function(a,b){this.$1.setTimeoutHandler(a,b);return this};b.setOption=function(a,b){this.$1.setOption(a,b);return this};b.setMethod=function(a){this.$1.setMethod(a);return this};b.setAutoProcess=function(a){this.$1.setOption("suppressEvaluation",a);return this};b.setData=function(a){this.$1.setData(a);return this};b.setHandler=function(a){this.$1.setHandler(a);return this};b.setPayloadHandler=function(a){this.setHandler(function(b){return a(b.payload)});return this};b.setErrorHandler=function(a){this.$1.setErrorHandler(a);return this};b.send=function(){this.$1.send();return this};b.abort=function(){this.$1.abort()};b.setReadOnly=function(a){this.$1.setReadOnly(a);return this};b.setAllowCrossOrigin=function(a){this.$1.setAllowCrossOrigin(a);return this};b.setAllowCredentials=function(a){this.$1.setAllowCredentials(a);return this};return a}();g["default"]=a}),98);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","CSS","Event","FullScreen","getDocumentScrollElement","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o={init:function(a){a=b("throttle")(function(){if(b("FullScreen").isFullScreen())return;b("queryThenMutateDOM")(function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){if(h!==l||i!==m||j!==n){var a;(a=b("CSS")).conditionClass(g,"tinyViewport",h);a.conditionClass(g,"tinyWidth",i);a.conditionClass(g,"tinyHeight",j);a.conditionClass(g,"canHaveFixedElements",!h);o.inform("change",h);b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},"state");l=h;m=i;n=j}},"TinyViewport")});a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a);b("FullScreen").subscribe("changed",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(o,b("ArbiterMixin"));e.exports=o}),null);
__d("XAsyncRequest",["cr:1042"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1042")}),98);