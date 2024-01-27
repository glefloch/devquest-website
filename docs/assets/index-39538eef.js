(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();let Se=he;const x=1,E=2,ce={owned:null,cleanups:null,context:null,owner:null};var v=null;let k=null,m=null,_=null,b=null,z=0;function Ce(e,t){const n=m,s=v,i=e.length===0,l=t===void 0?s:t,o=i?ce:{owned:null,cleanups:null,context:l?l.context:null,owner:l},r=i?e:()=>e(()=>D(()=>q(o)));v=o,m=null;try{return L(r,!0)}finally{m=n,v=s}}function S(e,t,n){const s=ze(e,t,!1,x);ve(s)}function D(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function Ee(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&L(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=k&&k.running;o&&k.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?_.push(l):b.push(l),l.observers&&_e(l)),o||(l.state=x)}if(_.length>1e6)throw _=[],new Error},!1)),t}function ve(e){if(!e.fn)return;q(e);const t=v,n=m,s=z;m=v=e,Ne(e,e.value,s),m=n,v=t}function Ne(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=x,e.owned&&e.owned.forEach(q),e.owned=null),e.updatedAt=n+1,pe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ee(e,s):e.value=s,e.updatedAt=n)}function ze(e,t,n,s=x,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:v?v.context:null,pure:n};return v===null||v!==ce&&(v.owned?v.owned.push(l):v.owned=[l]),l}function ge(e){if(e.state===0)return;if(e.state===E)return U(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===x)ve(e);else if(e.state===E){const s=_;_=null,L(()=>U(e,t[0]),!1),_=s}}function L(e,t){if(_)return e();let n=!1;t||(_=[]),b?n=!0:b=[],z++;try{const s=e();return De(n),s}catch(s){n||(b=null),_=null,pe(s)}}function De(e){if(_&&(he(_),_=null),e)return;const t=b;b=null,t.length&&L(()=>Se(t),!1)}function he(e){for(let t=0;t<e.length;t++)ge(e[t])}function U(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===x?s!==t&&(!s.updatedAt||s.updatedAt<z)&&ge(s):i===E&&U(s,t)}}}function _e(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=E,n.pure?_.push(n):b.push(n),n.observers&&_e(n))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Le(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function pe(e,t=v){throw Le(e)}function me(e,t){return D(()=>e(t||{}))}function qe(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,d=t[i-1].nextSibling,g=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const a=l<s?r?n[r-1].nextSibling:n[l-r]:d;for(;r<l;)e.insertBefore(n[r++],a)}else if(l===r)for(;o<i;)(!g||!g.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],a),t[i]=n[l]}else{if(!g){g=new Map;let h=r;for(;h<l;)g.set(n[h],h++)}const a=g.get(t[o]);if(a!=null)if(r<a&&a<l){let h=o,$=1,A;for(;++h<i&&h<l&&!((A=g.get(t[h]))==null||A!==a+$);)$++;if($>a-r){const C=t[o];for(;r<a;)e.insertBefore(n[r++],C)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}function je(e,t,n,s={}){let i;return Ce(l=>{i=l,t===document?e():y(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function j(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},l=t?()=>D(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function c(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function p(e,t){t==null?e.removeAttribute("class"):e.className=t}function y(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return N(e,t,s,n);S(i=>N(e,t(),i,n),s)}function N(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=w(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=w(e,n,s);else{if(l==="function")return S(()=>{let r=t();for(;typeof r=="function";)r=r();n=N(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],d=n&&Array.isArray(n);if(O(r,t,n,i))return S(()=>n=N(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=w(e,n,s),o)return n}else d?n.length===0?de(e,r,s):qe(e,n,r):(n&&w(e),de(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=w(e,n,s,t);w(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function O(e,t,n,s){let i=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],d=n&&n[l],g;if(!(r==null||r===!0||r===!1))if((g=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))i=O(e,r,d)||i;else if(g==="function")if(s){for(;typeof r=="function";)r=r();i=O(e,Array.isArray(r)?r:[r],Array.isArray(d)?d:[d])||i}else e.push(r),i=!0;else{const a=String(r);d&&d.nodeType===3&&d.data===a?e.push(d):e.push(document.createTextNode(a))}}return i}function de(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function w(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const d=r.parentNode===e;!l&&!o?d?e.replaceChild(i,r):e.insertBefore(i,n):d&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const Te="_App_nnz0d_8",Pe="_main_nnz0d_1",ke="_brand_nnz0d_1",Ue="_logo_nnz0d_1",Oe="_btn_nnz0d_57",Fe="_row_nnz0d_74",Ie="_infos_nnz0d_1",Qe="_card_nnz0d_93",Be="_rows_nnz0d_1",Re="_rs_nnz0d_109",Ge="_event_nnz0d_1",Me="_eventspec_nnz0d_1",Xe="_equipe_nnz0d_1",Ve="_galery_nnz0d_1",We="_program_nnz0d_1",He="_programtext_nnz0d_1",f={App:Te,main:Pe,brand:ke,logo:Ue,btn:Oe,row:Fe,infos:Ie,card:Qe,rows:Be,rs:Re,event:Ge,eventspec:Me,equipe:Xe,galery:Ve,program:We,programtext:He},Je="_avatar_f2n01_1",Ke="_infos_f2n01_6",fe={avatar:Je,infos:Ke},Ye=j('<div><img height="128" width="128"><h2></h2><div><p>'),Ze=j('<a target="_blank"><span class="icon-github">'),et=j('<a target="_blank"><span class="icon-linkedin">');function tt({img:e,name:t,role:n,github:s,linkedin:i}){return(()=>{const l=Ye(),o=l.firstChild,r=o.nextSibling,d=r.nextSibling,g=d.firstChild;return c(o,"src",e),c(o,"alt",t),y(r,t),y(g,n),y(d,s&&(()=>{const a=Ze();return c(a,"href",`https://github.com/${s}`),a})(),null),y(d,i&&(()=>{const a=et();return c(a,"href",`https://www.linkedin.com/in/${i}`),a})(),null),S(a=>{const h=fe.avatar,$=fe.infos;return h!==a._v$&&p(o,a._v$=h),$!==a._v$2&&p(d,a._v$2=$),a},{_v$:void 0,_v$2:void 0}),l})()}const nt=j(`<div><div><div><img src="logo.svg" alt="DevQuest"><h1>Le premier rassemblement dev niortais</h1><h2>Le 14 Juin 2024 au <a href="https://www.google.com/maps/place/Parc+des+Expositions+de+Noron/@46.3294067,-0.4903639,17z/data=!3m1!4b1!4m6!3m5!1s0x48072fcbc6eabbfb:0x4febad6b6c995284!8m2!3d46.3294067!4d-0.4903639!16s%2Fg%2F1tq6jg6w?entry=ttu">Parc des Expositions de Noron</a></h2><div><div><a href="https://conference-hall.io/public/event/geINICiIQFU0WdORU423">Proposer un sujet</a></div><div><a href="https://www.billetweb.fr/devquest-niort-2024">Accéder à la billeterie</a></div></div></div><div><h1>Des conférences. Des sangliers. De la cervoise.</h1><div>L'été prochain, ne manquez pas le premier événement ludico-professionnel niortais dédié aux développeurs. Améliorez vos compétences et surtout... Profitez de l'aventure !</div><div><a href="https://www.linkedin.com/company/devquest-niort/" aria-label="Linkedin DevQuest"><img height="32" width="32" src="/social/logo-linkedin.png" aria-hidden="true"></a><a href="https://twitter.com/DevQuestNiort" aria-label="Twitter DevQuest"><img height="32" width="32" src="/social/logo-x.png" aria-hidden="true"></a><a href="mailto:bureau@devquest.fr" aria-label="Envoyer un mail à bureau@devquest.fr"><span class="icon-mail"></span></a></div></div><div><h1>Diantre, DevQuest dîtes-vous? Qu'est-ce donc que cela?</h1><div><div><img height="96" src="/assets/backpack.png" aria-hidden="true"><h2>1 journée</h2></div><div><img height="96" src="/assets/knight.png" aria-hidden="true"><h2>150 spectateurs</h2></div><div><img height="96" src="/assets/king.png" aria-hidden="true"><h2>16 partenaires</h2></div><div><img height="96" src="/assets/quest.png" aria-hidden="true"><h2>20 présentations multi format</h2></div></div></div><div><h1>L'équipe</h1><div></div></div><div><h1>Le programme</h1><div><p>Le programme n'est pas encore disponible, mais d'ores et déjà, nous pouvons vous dire que les histoires que vous entendrez vous raconterons des épopées sur l'intelligence artificielle mais aussi autour de l'artisanat logiciel... ou bien encore d'autres sujets passionnants!</p></div><p aria-hidden="true"><b>2024 - DevQuest`),it=[{img:"/team/pacaud.jpeg",name:"Alexandre Pacaud",role:"#Dev",linkedin:"alexandre-pacaud-78266210a",github:"Lithyon"},{img:"/team/guerin.jpeg",name:"Alexandre Guérin",role:"#Dev",linkedin:"alexandre-guerin",github:"Ithrandil"},{img:"/team/lefloch.jpeg",name:"Guillaume Le Floch",role:"#Dev",github:"glefloch",linkedin:"guillaume-lefloch"},{img:"/team/nait.jpeg",name:"Samuel Nait",role:"#Dev",github:"Tisamu",linkedin:"samuel-nait"},{img:"/team/gouadon.jpeg",name:"Vincent Gouadon",role:"#Dev",linkedin:"vincent-gouadon-14099851",github:"nayosis"},{img:"/team/lecouls.jpeg",name:"Xavier Lecouls",role:"#ProductOwner",linkedin:"xavier-lecouls-53867b1"},{img:"/team/cozien.jpeg",name:"Alice Cozien",role:"#UX",linkedin:"cozienalice"},{img:"/team/duvivier.jpeg",name:"Nicolas Duvivier",role:"#UX",linkedin:"nduvivier"},{img:"/team/fremont.jpeg",name:"Florent Frémont",role:"#Dev",linkedin:"florent-frémont-b2a943a9"},{img:"/team/riou.jpeg",name:"Susan Riou",role:"#SysOps",linkedin:"susan-riou-5a7a4a139"}],st=()=>(console.log(`
    Félicitations explorateur !
    Tu es l'heureux gagnant d'une place gratuite pour accéder à notre aventure grâce à ta curiosité !
    Pour récupérer ta place, utilise le code secret issue d'un langage ancien LAPIN_GAROU directement sur notre billetterie.
    Attention ce code ne fonctionnera qu'une seule fois!
    A bientôt !
  `),(()=>{const e=nt(),t=e.firstChild,n=t.firstChild,s=n.firstChild,i=s.nextSibling,l=i.nextSibling,o=l.nextSibling,r=o.firstChild,d=r.firstChild,g=r.nextSibling,a=g.firstChild,h=n.nextSibling,$=h.firstChild,A=$.nextSibling,C=A.nextSibling,F=C.firstChild,I=F.nextSibling,$e=I.nextSibling,T=h.nextSibling,be=T.firstChild,we=be.nextSibling,P=T.nextSibling,ye=P.firstChild,Q=ye.nextSibling,B=P.nextSibling,xe=B.firstChild,R=xe.nextSibling,Ae=R.firstChild;return y(Q,()=>it.sort(()=>Math.random()>.5?1:-1).map(u=>me(tt,{get img(){return u.img},get name(){return u.name},get role(){return u.role},get github(){return u.github},get linkedin(){return u.linkedin}}))),S(u=>{const G=f.App,M=f.main,X=f.brand,V=f.logo,W=f.row,H=f.btn,J=f.btn,K=f.infos,Y=f.card,Z=f.rows,ee=f.rs,te=f.rs,ne=f.rs,ie=f.event,se=f.eventspec,le=f.equipe,re=f.galery,oe=f.program,ue=f.card,ae=f.programtext;return G!==u._v$&&p(e,u._v$=G),M!==u._v$2&&c(t,"id",u._v$2=M),X!==u._v$3&&c(n,"id",u._v$3=X),V!==u._v$4&&c(s,"id",u._v$4=V),W!==u._v$5&&p(o,u._v$5=W),H!==u._v$6&&p(d,u._v$6=H),J!==u._v$7&&p(a,u._v$7=J),K!==u._v$8&&c(h,"id",u._v$8=K),Y!==u._v$9&&p(A,u._v$9=Y),Z!==u._v$10&&c(C,"id",u._v$10=Z),ee!==u._v$11&&p(F,u._v$11=ee),te!==u._v$12&&p(I,u._v$12=te),ne!==u._v$13&&p($e,u._v$13=ne),ie!==u._v$14&&c(T,"id",u._v$14=ie),se!==u._v$15&&c(we,"id",u._v$15=se),le!==u._v$16&&c(P,"id",u._v$16=le),re!==u._v$17&&c(Q,"id",u._v$17=re),oe!==u._v$18&&c(B,"id",u._v$18=oe),ue!==u._v$19&&p(R,u._v$19=ue),ae!==u._v$20&&c(Ae,"id",u._v$20=ae),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0}),e})()),lt=document.getElementById("root");je(()=>me(st,{}),lt);
