var x=Object.defineProperty;var c=(r,e,s)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var l=(r,e,s)=>c(r,typeof e!="symbol"?e+"":e,s);import{h as d,f,b as v,p as g}from"./index-CfCaPSLt.js";var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,n=(r,e,s,t)=>{for(var p=t>1?void 0:t?u(e,s):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(p=(t?a(e,s,p):a(p))||p);return t&&p&&h(e,s,p),p};let o=class{constructor(){l(this,"props",d())}render(){if(this.props()){const{heading:r,description:e,image:s,imagePosition:t}=this.props();return f` <div class="container mx-auto duplex-container ${t==="left"?"":"reverse"}">
        <app-asset class="image" data-input=${{props:s}}></app-asset>
        <div class="description">
          <h2 class="text-4xl font-bold text-foreground">${r}</h2>
          <p class="text-gray-500 mt-8 text-lg">${e}</p>
        </div>
      </div>`}return""}};n([v()],o.prototype,"props",2);o=n([g({selector:"app-duplex",styles:`
    .duplex-container {
      display: flex;
      align-items: center;
      gap: 70px;
      margin: 70px 0;
      &.reverse {
        flex-direction: row-reverse;
      }
      .image {
        height: 399px;
        width: 595px;
        flex: 40%;
      }
      .description {
        flex: 60%;
      }
    }
  `})],o);export{o as Duplex};
