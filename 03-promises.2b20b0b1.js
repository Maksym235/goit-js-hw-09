({form:document.querySelector(".form")}).form.addEventListener("submit",(function(l){l.preventDefault();const{elements:{delay:o,step:u,amount:i}}=l.currentTarget;e=Number(o.value),t=Number(u.value),n=Number(i.value);for(let e=1;e<=n;e++)r(e,n).then((({position:e,delay:t})=>{alert(`✅  Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{alert(`❌  Rejected promise ${e} in ${t}ms`)})),n+=t,l.currentTarget.reset()}));let e=null,t=null,n=null;function r(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3&&n({position:e,delay:t}),r({position:e,delay:t})}),t)}))}
//# sourceMappingURL=03-promises.2b20b0b1.js.map
