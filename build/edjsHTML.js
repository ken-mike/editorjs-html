!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).edjsHTML=t()}(this,(function(){"use strict";var e=/(https?:\/\/)?([\w-@])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^\n\r ]*)/g,t=/([\w.])+@([\w.])+/g,n={delimiter:function(){return"<br/>"},header:function(e){var t=e.data;return"<h"+t.level+"> "+t.text+" </h"+t.level+">"},paragraph:function(n){return"<p> "+(n.data.text||"").replace(e,(function(e){if(t.test(e))return e;var n="";return/^https?:\/\//.test(e)||(n="https://"+e),'<a href="'+n+'" target="_blank">'+n+"</a>"})).replace(t,'<a href="mailto:$&" target="_blank">$&</a>')+" </p>"},list:function(e){var t=e.data,n="unordered"===t.style?"ul":"ol",i="";return t.items&&(i=t.items.map((function(e){return"<li> "+e+" </li>"})).reduce((function(e,t){return e+t}),"")),"<"+n+"> "+i+" </"+n+">"},image:function(e){var t=e.data,n='<img src="'+(t.file?t.file.url:"")+'" alt="'+t.caption+'" />';return""!==t.caption&&(n+='<p class="module-image-caption">'+t.caption+"</p>"),n},video:function(e){var t=e.data,n='<video controls src="'+(t.file?t.file.url:"")+'" alt="'+t.caption+'"></video>';return""!==t.caption&&(n+='<p class="module-video-caption">'+t.caption+"</p>"),n},quote:function(e){var t=e.data;return"<blockquote> "+t.text+" </blockquote> - "+t.caption},link:function(e){var t,n,i,o,r,a,l,u,c,d=e.data,s=[];return(null===(t=d.meta)||void 0===t?void 0:t.image)&&(null===(i=null===(n=d.meta)||void 0===n?void 0:n.image)||void 0===i?void 0:i.url)&&s.push('<div class="link-tool__image" style="background-image: url(&quot;'+(null===(r=null===(o=null==d?void 0:d.meta)||void 0===o?void 0:o.image)||void 0===r?void 0:r.url)+'&quot;);"></div>'),(null===(a=d.meta)||void 0===a?void 0:a.title)&&s.push('<div class="link-tool__title">'+(null===(l=d.meta)||void 0===l?void 0:l.title)+"</div>"),(null===(u=d.meta)||void 0===u?void 0:u.description)&&s.push('<p class="link-tool__description">'+(null===(c=d.meta)||void 0===c?void 0:c.description)+"</p>"),'<div class="link-tool"><a class="link-tool__content link-tool__content--rendered" target="_blank" rel="nofollow noindex noreferrer" href="'+d.link+'">'+s.join("")+'<span class="link-tool__anchor">'+d.link+"</span></a></div>"},embed:function(e){var t=e.data;return"youtube"!==t.service?"":'<iframe width="'+t.width+'" height="'+t.height+'" src="'+t.embed+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="embed-youtube-caption">'+t.caption+"</p>"}};function i(e){return new Error('[31m The Parser function of type "'+e+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}return function(e){return void 0===e&&(e={}),Object.assign(n,e),{parse:function(e){return e.blocks.map((function(e){return n[e.type]?n[e.type](e):i(e.type)}))},parseBlock:function(e){return n[e.type]?n[e.type](e):i(e.type)}}}}));
