import{_ as k}from"../chunks/BB_fwRvX.js";import{_ as z}from"../chunks/BqXArGuI.js";import{a as h,f as x}from"../chunks/CVoBGtD1.js";import{R as D,S as p,T as $,V as q,W as t,X as o,U as T,k as l,Y as B}from"../chunks/D6kv-mmP.js";import{s as y}from"../chunks/_-oD8FLZ.js";import{e as M}from"../chunks/Bmzm9fw4.js";import{s as w,p as P}from"../chunks/TMtAkB73.js";import{r as R}from"../chunks/LS3TVnJm.js";const U=`---\r
title: welcome! :D\r
---\r
# welcome to my website :D\r
\r
### thank you for visiting my website :D, i hope you like it ^-^\r
\r
this website took 3 to 4 months to make and im going to continue to improve it, it serves as an hub for all things i do and etc.\r
\r
i will probably not update the blog that frequently because the way i made it, and i dont have much to talk so bye!`,V=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),W=`---\r
title: Bem vindo! :D\r
---\r
# Bem vindo ao meu website :D\r
\r
### muito obrigado por ter visitado meu website :D, eu espero que voce goste dele ^-^\r
\r
esse website demorou um 3 a 4 meses para fazer e ainda vou continuar a melhorar ele com o tempo, e ele serve como um hub para as coisas que faço e etc.\r
\r
eu provavelmente não vou atualizar o blog muito mas por causa do jeito que eu fiz o website e não tenho muito oq falar agora então é so!`,X=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));async function Y({params:u}){const m=u.lang??"pt",g=Object.assign({"/src/lib/posts/eng/bem vindo.md":k,"/src/lib/posts/pt/bem vindo.md":z}),c=Object.assign({"/src/lib/posts/eng/bem vindo.md":V,"/src/lib/posts/pt/bem vindo.md":X});return{posts:Object.entries(g).filter(([a])=>a.includes(`/posts/${m}`)).map(([a,r])=>{const e=c[a].default.replace(/^---[\s\S]*?---/,"").replace(/^---$/gm,"").replace(/!\[.*\]\(.*\)/g,"").replace(/\[(.*)\]\(.*\)/g,"$1").replace(/[*_~`#]/g,"").replace(/>+/g,"").replace(/\n+/g," ").replace(/\s+/g," ").trim(),i=e.length>60?`${e.substring(0,60)}...`:e,d=a.split("/").pop()?.replace(".md",""),n=r.metadata;return{title:n.title,img:n.img,slug:d,preview:i}})}}const N=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));var A=x('<section class="box"><a><div class="flex flex-col"><img alt="" class="rounded-2xl"/> <div><h1 class=" font-semibold"> </h1> <p class="text-xs"> </p></div></div></a></section>'),C=x('<div id="enable_background_2"></div> <main class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"><section class="box"><h1>meu Blog ^-^</h1></section> <!></main>',1);function Q(u,m){D(m,!0);let g=B(()=>P.url.pathname);var c=C(),v=p($(c),2),a=p(t(v),2);M(a,17,()=>m.data.posts,r=>r.slug,(r,s)=>{var e=A(),i=t(e),d=t(i),n=t(d),_=p(n,2),b=t(_),j=t(b,!0);o(b);var f=p(b,2),O=t(f,!0);o(f),o(_),o(d),o(i),o(e),T(S=>{w(i,"href",S),w(n,"src",l(s).img),y(j,l(s).title),y(O,l(s).preview)},[()=>R(`${l(g)}/${l(s).slug}`)]),h(r,e)}),o(v),h(u,c),q()}export{Q as component,N as universal};
