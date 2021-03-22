"use strict";var t=/([\w.])+@([\w.])+/g,e={delimiter:function(){return"<br/>"},header:function(t){var e=t.data;return"<h"+e.level+"> "+e.text+" </h"+e.level+">"},paragraph:function(t){return"<p> "+t.data.text+" </p>"},list:function(t){var e=t.data,o="unordered"===e.style?"ul":"ol",i="";return e.items&&(i=e.items.map((function(t){return"<li> "+t+" </li>"})).reduce((function(t,e){return t+e}),"")),"<"+o+"> "+i+" </"+o+">"},image:function(t){var e=t.data,o='<img src="'+(e.file?e.file.url:"")+'" alt="'+e.caption+'" />';return""!==e.caption&&(o+='<p class="module-image-caption">'+e.caption+"</p>"),o},video:function(t){var e=t.data,o='<video controls src="'+(e.file?e.file.url:"")+'" alt="'+e.caption+'"></video>';return""!==e.caption&&(o+='<p class="module-video-caption">'+e.caption+"</p>"),o},quote:function(t){var e=t.data;return"<blockquote> "+e.text+" </blockquote> - "+e.caption},link:function(e){var o,i,n,l,r,a,u,c,d,s=e.data,p=s.link||"",v=[];return(null===(o=s.meta)||void 0===o?void 0:o.image)&&(null===(n=null===(i=s.meta)||void 0===i?void 0:i.image)||void 0===n?void 0:n.url)&&v.push('<div class="link-tool__image" style="background-image: url(&quot;'+(null===(r=null===(l=null==s?void 0:s.meta)||void 0===l?void 0:l.image)||void 0===r?void 0:r.url)+'&quot;);"></div>'),(null===(a=s.meta)||void 0===a?void 0:a.title)&&v.push('<div class="link-tool__title">'+(null===(u=s.meta)||void 0===u?void 0:u.title)+"</div>"),(null===(c=s.meta)||void 0===c?void 0:c.description)&&v.push('<p class="link-tool__description">'+(null===(d=s.meta)||void 0===d?void 0:d.description)+"</p>"),t.test(p)?'<div class="link-tool"><a class="link-tool__content link-tool__content--rendered" target="_blank" href="mailto:'+p+'">'+v.join("")+'<span class="link-tool__anchor">こちらのメールアドレスにメールを送る</span></a></div>':'<div class="link-tool"><a class="link-tool__content link-tool__content--rendered" target="_blank" rel="nofollow noindex noreferrer" href="'+s.link+'">'+v.join("")+'<span class="link-tool__anchor">'+s.link+"</span></a></div>"},embed:function(t){var e=t.data;return"youtube"!==e.service?"":'<iframe width="'+e.width+'" height="'+e.height+'" src="'+e.embed+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="embed-youtube-caption">'+e.caption+"</p>"}};function o(t){return new Error('[31m The Parser function of type "'+t+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}module.exports=function(t){return void 0===t&&(t={}),Object.assign(e,t),{parse:function(t){return t.blocks.map((function(t){return e[t.type]?e[t.type](t):o(t.type)}))},parseBlock:function(t){return e[t.type]?e[t.type](t):o(t.type)}}};
