function _asyncToGenerator(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,r){return function e(o,a){try{var i=t[o](a),c=i.value}catch(n){return void r(n)}if(!i.done)return Promise.resolve(c).then(function(n){e("next",n)},function(n){e("throw",n)});n(c)}("next")})}}var getJSONP=function(n,t){this.url=n+"?";return new Promise((n,r)=>{!function(n){for(const t in n){const r=n[t];url+="callback"==t?`${t}=${r}`:`${t}=${r}&`}}(t);const e=url.match(/.*?callback=(.*)/)[1];window[e]=function(t){n(t)},(function(){let n=document.createElement("script");return n.setAttribute("src",url),document.body.appendChild(n),n}()).onerror=function(){r("error")}})},parse=function(n){let t=(r=_asyncToGenerator(function*(n){let t=Math.floor(2147483647*Math.random())*Math.floor(1e3*Date.now())%1e10,r=e(n,t),o=yield getJSONP(r.url,r.params);return`https://dl.stream.qqmusic.qq.com/${o.data.items[0].filename}?vkey=${o.data.items[0].vkey}&guid=${t}&uin=0&fromtag=66`}),function(n){return r.apply(this,arguments)});var r,e=function(n,t){let r=`C400${n}.m4a`,e=o();return Info={url:"https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg",params:{format:"json",cid:"205361747",uin:"0",songmid:n,filename:r,guid:t,callback:e}},Info},o=function(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,3)};return t(n)};