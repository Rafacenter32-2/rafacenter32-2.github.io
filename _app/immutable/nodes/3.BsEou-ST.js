import{_ as S}from"../chunks/WRfzadzF.js";import{_ as k}from"../chunks/BIJU6KHV.js";import{a as h,f as x}from"../chunks/DcRvAZtx.js";import{S as z,T as p,U as D,W as q,a7 as B,X as t,a8 as T,Y as o,V as M,n as l,Z as P}from"../chunks/D6M-tLGz.js";import{s as y}from"../chunks/9k5lJSlE.js";import{e as R}from"../chunks/8Tz-_gio.js";import{h as U}from"../chunks/Bnx3MZPh.js";import{s as w,p as V}from"../chunks/lzowyhgG.js";import{r as W}from"../chunks/DCxypWrq.js";const X=`---\r
title: welcome! :D\r
---\r
# welcome to my website :D\r
\r
### thank you for visiting my website :D, i hope you like it ^-^\r
\r
this website took 3 to 4 months to make and im going to continue to improve it, it serves as an hub for all things i do and etc.\r
\r
i will probably not update the blog that frequently because the way i made it, and i dont have much to talk so bye!`,Y=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),Z=`---\r
title: Bem vindo! :D\r
---\r
# Bem vindo ao meu website :D\r
\r
### muito obrigado por ter visitado meu website :D, eu espero que voce goste dele ^-^\r
\r
esse website demorou um 3 a 4 meses para fazer e ainda vou continuar a melhorar ele com o tempo, e ele serve como um hub para as coisas que faço e etc.\r
\r
eu provavelmente não vou atualizar o blog muito mas por causa do jeito que eu fiz o website e não tenho muito oq falar agora então é so!`,A=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));async function C({params:u}){const m=u.lang??"pt",g=Object.assign({"/src/lib/posts/eng/bem vindo.md":S,"/src/lib/posts/pt/bem vindo.md":k}),c=Object.assign({"/src/lib/posts/eng/bem vindo.md":Y,"/src/lib/posts/pt/bem vindo.md":A});return{posts:Object.entries(g).filter(([a])=>a.includes(`/posts/${m}`)).map(([a,r])=>{const e=c[a].default.replace(/^---[\s\S]*?---/,"").replace(/^---$/gm,"").replace(/!\[.*\]\(.*\)/g,"").replace(/\[(.*)\]\(.*\)/g,"$1").replace(/[*_~`#]/g,"").replace(/>+/g,"").replace(/\n+/g," ").replace(/\s+/g," ").trim(),i=e.length>60?`${e.substring(0,60)}...`:e,d=a.split("/").pop()?.replace(".md",""),n=r.metadata;return{title:n.title,img:n.img,slug:d,preview:i}})}}const te=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));var E=x('<section class="box"><a><div class="flex flex-col"><img alt="" class="rounded-2xl"/> <div><h1 class=" font-semibold"> </h1> <p class="text-xs"> </p></div></div></a></section>'),F=x('<div id="enable_background_2"></div> <main class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"><section class="box"><h1>meu Blog ^-^</h1></section> <!></main>',1);function oe(u,m){z(m,!0);let g=P(()=>V.url.pathname);var c=F();U("pyn1lh",r=>{B(()=>{T.title="Rafacenter Blog"})});var v=p(D(c),2),a=p(t(v),2);R(a,17,()=>m.data.posts,r=>r.slug,(r,s)=>{var e=E(),i=t(e),d=t(i),n=t(d),_=p(n,2),b=t(_),j=t(b,!0);o(b);var f=p(b,2),O=t(f,!0);o(f),o(_),o(d),o(i),o(e),M($=>{w(i,"href",$),w(n,"src",l(s).img),y(j,l(s).title),y(O,l(s).preview)},[()=>W(`${l(g)}/${l(s).slug}`)]),h(r,e)}),o(v),h(u,c),q()}export{oe as component,te as universal};
