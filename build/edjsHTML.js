!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).edjsHTML=t()}(this,(function(){"use strict";var e=/([\w.])+@([\w.])+/g,t={delimiter:function(){return"<br/>"},header:function(e){var t=e.data;return"<h"+t.level+"> "+t.text+" </h"+t.level+">"},paragraph:function(e){return"<p> "+e.data.text+" </p>"},list:function(e){var t=e.data,n="unordered"===t.style?"ul":"ol",o="";return t.items&&(o=t.items.map((function(e){return"<li> "+e+" </li>"})).reduce((function(e,t){return e+t}),"")),"<"+n+"> "+o+" </"+n+">"},image:function(e){var t=e.data,n='<img src="'+(t.file?t.file.url:"")+'" alt="'+t.caption+'" />';return""!==t.caption&&(n+='<p class="module-image-caption">'+t.caption+"</p>"),n},video:function(e){var t=e.data,n='<video controls src="'+(t.file?t.file.url:"")+'" alt="'+t.caption+'"></video>';return""!==t.caption&&(n+='<p class="module-video-caption">'+t.caption+"</p>"),n},quote:function(e){var t=e.data;return"<blockquote> "+t.text+" </blockquote> - "+t.caption},link:function(t){var n,o,i,l,r,a,u,d,c,s=t.data,p=s.link||"",f=[];return(null===(n=s.meta)||void 0===n?void 0:n.image)&&(null===(i=null===(o=s.meta)||void 0===o?void 0:o.image)||void 0===i?void 0:i.url)&&f.push('<div class="link-tool__image" style="background-image: url(&quot;'+(null===(r=null===(l=null==s?void 0:s.meta)||void 0===l?void 0:l.image)||void 0===r?void 0:r.url)+'&quot;);"></div>'),(null===(a=s.meta)||void 0===a?void 0:a.title)&&f.push('<div class="link-tool__title">'+(null===(u=s.meta)||void 0===u?void 0:u.title)+"</div>"),(null===(d=s.meta)||void 0===d?void 0:d.description)&&f.push('<p class="link-tool__description">'+(null===(c=s.meta)||void 0===c?void 0:c.description)+"</p>"),e.test(p)?'<div class="link-tool"><a class="link-tool__content link-tool__content--rendered" target="_blank" href="mailto:'+p+'">'+f.join("")+'<span class="link-tool__anchor">こちらのメールアドレスにメールを送る</span></a></div>':'<div class="link-tool"><a class="link-tool__content link-tool__content--rendered" target="_blank" rel="nofollow noindex noreferrer" href="'+s.link+'">'+f.join("")+'<span class="link-tool__anchor">'+s.link+"</span></a></div>"},embed:function(e){var t=e.data;return"youtube"!==t.service?"":'<iframe width="'+t.width+'" height="'+t.height+'" src="'+t.embed+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="embed-youtube-caption">'+t.caption+"</p>"}};function n(e){return new Error('[31m The Parser function of type "'+e+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}return function(e){return void 0===e&&(e={}),Object.assign(t,e),{parse:function(e){return e.blocks.map((function(e){return t[e.type]?t[e.type](e):n(e.type)}))},parseBlock:function(e){return t[e.type]?t[e.type](e):n(e.type)}}}}));
