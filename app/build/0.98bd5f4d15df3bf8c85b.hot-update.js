webpackHotUpdatemojs_curve_editor(0,{5:function(t,a,e){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=this,n=e(6),i=a(n),p=e(65),o=a(p),l=e(66),d=a(l),c=this.opts.type,u=e(67);this.applyClass=u["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+u["resize-handle--"+this.opts.type],e(68),e(72),this.on("mount",function(){(0,d["default"])(new o["default"](s.root)).on("pan",function(t){var a=t.deltaX,e=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE",data:{x:a,y:e,type:c}}),t.stopPropagation()}).on("panend",function(t){var a=t.deltaX,e=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:a,y:e,type:c}}),t.stopPropagation()})})})}).call(a,e(2))}});