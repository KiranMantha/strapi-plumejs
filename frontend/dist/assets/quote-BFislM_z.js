var l=Object.defineProperty;var f=(t,e,p)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[e]=p;var n=(t,e,p)=>f(t,typeof e!="symbol"?e+"":e,p);import{h as u,f as x,b as h,p as v}from"./index-DUgFqLgN.js";import"./richText-TNQzq0VK.js";var d=Object.defineProperty,m=Object.getOwnPropertyDescriptor,c=(t,e,p,s)=>{for(var r=s>1?void 0:s?m(e,p):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(s?o(e,p,r):o(r))||r);return s&&r&&d(e,p,r),r};let i=class{constructor(){n(this,"props",u())}render(){if(this.props()){const{image:t,quotation:e}=this.props();return x` <div class="container mx-auto quote-container">
        <app-asset class="image" data-input=${{props:t}}></app-asset>
        <app-rich-text class="description" data-input=${{props:{content:e}}}></app-rich-text>
      </div>`}return""}};c([h()],i.prototype,"props",2);i=c([v({selector:"app-quote",styles:`
    .quote-container {
      display: flex;
      align-items: center;
      gap: 35px;
      &.reverse {
        flex-direction: row-reverse;
      }
      .image {
        height: 505px;
        width: 605px;
        flex: 40%;
      }
      .description {
        flex: 60%;
      }
    }
  `})],i);export{i as Quote};
