"use strict";var t={delimiter:function(){return"<br/>"},header:function(t){var n=t.data;return"<h"+n.level+"> "+n.text+" </h"+n.level+">"},paragraph:function(t){return"<p> "+t.data.text+" </p>"},list:function(t){var n=t.data,e="unordered"===n.style?"ul":"ol",o="";return n.items&&(o=n.items.map((function(t){return"<li> "+t+" </li>"})).reduce((function(t,n){return t+n}),"")),"<"+e+"> "+o+" </"+e+">"},image:function(t){var n=t.data,e=n.caption?n.caption:"Image";return'<img src="'+(n.file?n.file.url:"")+'" alt="'+e+'" />'},video:function(t){var n=t.data,e=n.caption?n.caption:"Video";return'<video controls src="'+(n.file?n.file.url:"")+'" alt="'+e+'" />'},quote:function(t){var n=t.data;return"<blockquote> "+n.text+" </blockquote> - "+n.caption},link:function(t){var n,e,o,i,r=t.data,l=[];return(null===(n=r.meta)||void 0===n?void 0:n.title)&&l.push('<div class="link-tool__title">'+(null===(e=r.meta)||void 0===e?void 0:e.title)+"</div>"),(null===(o=r.meta)||void 0===o?void 0:o.description)&&l.push('<p class="link-tool__description">'+(null===(i=r.meta)||void 0===i?void 0:i.description)+"</p>"),'<div class="link-tool"><a class="link-tool__content link-tool__content--rendered" target="_blank" rel="nofollow noindex noreferrer" href="'+r.link+'">'+l.join("")+'<span class="link-tool__anchor">'+r.link+"</span></a></div>"}};function n(t){return new Error('[31m The Parser function of type "'+t+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}module.exports=function(e){return void 0===e&&(e={}),Object.assign(t,e),{parse:function(e){return e.blocks.map((function(e){return t[e.type]?t[e.type](e):n(e.type)}))},parseBlock:function(e){return t[e.type]?t[e.type](e):n(e.type)}}};
