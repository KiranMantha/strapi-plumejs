var h=Object.defineProperty;var n=(e,s,r)=>s in e?h(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r;var l=(e,s,r)=>n(e,typeof s!="symbol"?s+"":s,r);import{h as m,f as c,b as u,p as v}from"./index-DUgFqLgN.js";var b=Object.defineProperty,_=Object.getOwnPropertyDescriptor,f=(e,s,r,p)=>{for(var t=p>1?void 0:p?_(s,r):s,o=e.length-1,a;o>=0;o--)(a=e[o])&&(t=(p?a(s,r,t):a(t))||t);return p&&t&&b(s,r,t),t};const g="http://localhost:1337";let i=class{constructor(){l(this,"props",m())}render(){if(this.props()){const{mime:e,name:s,url:r}=this.props();return e.includes("image")?c`<img class="asset-img shadow-2xl" src="${g+r}" alt="${s}" />`:c``}return""}};f([u()],i.prototype,"props",2);i=f([v({selector:"app-asset",styles:`
    .asset-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  `})],i);export{i as Asset};
