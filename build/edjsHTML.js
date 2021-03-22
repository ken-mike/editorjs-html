!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).edjsHTML=e()}(this,(function(){"use strict";var t=/(https?:\/\/)?([\w-@])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^\n\r ]*)/g,e=/([\w.])+@([\w.])+/g,n={delimiter:function(){return"<br/>"},header:function(t){var e=t.data;return"<h"+e.level+"> "+e.text+" </h"+e.level+">"},paragraph:function(n){return"<p> "+(n.data.text||"").replace(t,(function(t){if(e.test(t))return t;var n=t;return/^https?:\/\//.test(t)||(n="https://"+t),'<a href="'+n+'" target="_blank">'+n+"</a>"})).replace(e,'<a href="mailto:$&" target="_blank">$&</a>')+" </p>"},list:function(t){var e=t.data,n="unordered"===e.style?"ul":"ol",i="";return e.items&&(i=e.items.map((function(t){return"<li> "+t+" </li>"})).reduce((function(t,e){return t+e}),"")),"<"+n+"> "+i+" </"+n+">"},image:function(t){var e=t.data,n='<img src="'+(e.file?e.file.url:"")+'" alt="'+e.caption+'" />';return""!==e.caption&&(n+='<p class="module-image-caption">'+e.caption+"</p>"),n},video:function(t){var e=t.data,n='<video controls src="'+(e.file?e.file.url:"")+'" alt="'+e.caption+'"></video>';return""!==e.caption&&(n+='<p class="module-video-caption">'+e.caption+"</p>"),n},quote:function(t){var e=t.data;return"<blockquote> "+e.text+" </blockquote> - "+e.caption},link:function(t){var n,i,o,l,r,a,u,c,d,s=t.data,p=s.link||"",f=[];return(null===(n=s.meta)||void 0===n?void 0:n.image)&&(null===(o=null===(i=s.meta)||void 0===i?void 0:i.image)||void 0===o?void 0:o.url)&&f.push('<div class="link-tool__image" style="background-image: url(&quot;'+(null===(r=null===(l=null==s?void 0:s.meta)||void 0===l?void 0:l.image)||void 0===r?void 0:r.url)+'&quot;);"></div>'),(null===(a=s.meta)||void 0===a?void 0:a.title)&&f.push('<div class="link-tool__title">'+(null===(u=s.meta)||void 0===u?void 0:u.title)+"</div>"),(null===(c=s.meta)||void 0===c?void 0:c.description)&&f.push('<p class="link-tool__description">'+(null===(d=s.meta)||void 0===d?void 0:d.description)+"</p>"),e.test(p)?(f.push('<div class="link-tool__title">'+p+"</div>"),'<div class="link-tool"><a class="link-tool__content link-tool__content--rendered" target="_blank" href="mailto:'+p+'">'+f.join("")+'<span class="link-tool__anchor">こちらのメールアドレスにメールを送る</span></a></div>'):'<div class="link-tool"><a class="link-tool__content link-tool__content--rendered" target="_blank" rel="nofollow noindex noreferrer" href="'+s.link+'">'+f.join("")+'<span class="link-tool__anchor">'+s.link+"</span></a></div>"},embed:function(t){var e=t.data;return"youtube"!==e.service?"":'<iframe width="'+e.width+'" height="'+e.height+'" src="'+e.embed+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="embed-youtube-caption">'+e.caption+"</p>"}};function i(t){return new Error('[31m The Parser function of type "'+t+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}return function(t){return void 0===t&&(t={}),Object.assign(n,t),{parse:function(t){return t.blocks.map((function(t){return n[t.type]?n[t.type](t):i(t.type)}))},parseBlock:function(t){return n[t.type]?n[t.type](t):i(t.type)}}}}));
