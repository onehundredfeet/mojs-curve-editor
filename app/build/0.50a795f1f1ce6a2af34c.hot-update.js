webpackHotUpdatemojs_curve_editor(0,{82:function(t,a,s){(function(t){t.tag2("resize-handle",'<icon shape="ellipsis"></icon>',"",'class="{this.applyClass}"',function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var n=this,p=s(86),i=a(p),o=this.opts.type.type,l=s(85),d=s(77);this.applyClass=l["resize-handle"]+" "+(t.adc||""),this.applyClass=this.applyClass+" "+l["resize-handle--"+this.opts.type],s(83),s(50),this.on("mount",function(){var t=new d(n.root,{});t.on("pan",function(t){var a=t.deltaX,s=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE",data:{x:a,y:s,type:o}}),e.stopPropagation()}),t.on("panend",function(t){var a=t.deltaX,s=t.deltaY;i["default"].dispatch({type:"EDITOR_RESIZE_END",data:{x:a,y:s,type:o}}),e.stopPropagation()})})})}).call(a,s(2))}});