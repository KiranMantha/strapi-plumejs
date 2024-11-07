var c=Object.defineProperty;var g=(n,e,t)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>g(n,typeof e!="symbol"?e+"":e,t);import{h as f,f as h,b as u,p as x}from"./index-CGiAIj6Q.js";var d=Object.defineProperty,m=Object.getOwnPropertyDescriptor,p=(n,e,t,r)=>{for(var o=r>1?void 0:r?m(e,t):e,a=n.length-1,i;a>=0;a--)(i=n[a])&&(o=(r?i(e,t,o):i(o))||o);return r&&o&&d(e,t,o),o};let s=class{constructor(){l(this,"props",f())}render(){if(this.props()){const{heading:n,description:e,textPosition:t,image:r}=this.props();return h`<div
        class="hero-banner-container"
        style="--bg-image: url(${"http://localhost:1337"+(r==null?void 0:r.url)}); color: ${r!=null&&r.url?"#000":"#fff"}"
      >
        <div class="content align-${t} text-${t}">
          <h2 class="text-5xl text-primary mb-4 font-semibold">${n}</h2>
          <p class="text-2xl text-muted-foreground font-thin">${e}</p>
        </div>
      </div>`}return""}};p([u()],s.prototype,"props",2);s=p([x({selector:"app-hero-banner",styles:`
    .hero-banner-container {
      height: 670px;
      background-image: var(--bg-image);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #000;

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        max-width: 30rem;

        &.align-left {
          align-items: flex-start;
          margin-right: auto;
          margin-left: 250px;
        }
        &.align-center {
          align-items: center;
          margin: auto;
        }
        &.align-right {
          align-items: flex-end;
          margin-left: auto;
          margin-right: 250px;
        }
      }
    }
  `})],s);export{s as HeroBanner};
