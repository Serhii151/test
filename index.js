import{c as x,a as w,p as F,b as R,d as A,e as c,u as m,r as g,R as e,v as N,f as d,P as y,g as E,h as P}from"./assets/vendor-BQ0Xpk8m.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const I={items:[]},C=x({name:"contacts",initialState:I,reducers:{addContact:(t,n)=>{t.items.push(n.payload)},deleteContact:(t,n)=>{t.items=t.items.filter(a=>a.id!==n.payload)}}}),{addContact:z,deleteContact:O}=C.actions,D=t=>t.contacts.items,q=C.reducer,B={name:""},S=x({name:"filters",initialState:B,reducers:{changeFilter:(t,n)=>{t.name=n.payload}}}),{changeFilter:Z}=S.actions,v=t=>t.filters.name,$=S.reducer,j={key:"root",storage:A},k=R(j,q),p=w({reducer:{contacts:k,filters:$},middleware:t=>t({serializableCheck:{ignoredActions:["persist/PERSIST","persist/REHYDRATE"]}})}),L=F(p),T=c.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid #605f5f;
  padding: 20px;
`,u=c.label`
  display: contents;
  margin-bottom: 10px;
`,b=c.input`
  max-width: 130px;
  max-height: 5px;
  padding: 5px;
  margin-bottom: 10px;
`,_=c.button`
  height: 15px;
  width: 62px;
  font-size: 8px;
  cursor: pointer;

  &:active {
    background-color: #4972fa;
    border-radius: 2px;
    border: none;
  }
`,G=()=>{const t=m(),[n,a]=g.useState(""),[s,r]=g.useState(""),o=l=>{const{name:f,value:h}=l.target;f==="name"?a(h):f==="number"&&r(h)},i=l=>{l.preventDefault(),t(z({id:N(),name:n,number:s})),a(""),r("")};return e.createElement(T,{onSubmit:i},e.createElement(u,null,"Name",e.createElement(b,{type:"text",name:"name",value:n,pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0,onChange:o})),e.createElement(u,null,"Number",e.createElement(b,{type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.",required:!0,onChange:o})),e.createElement(_,{type:"submit"},"Add Contact"))},H=c.ul`
  list-style: none;
  padding: 0;
`,K=c.li`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  border-bottom: 1px solid #ccc;
`,M=c.button`
  cursor: pointer;
  height: 15px;
  width: 38px;
  font-size: 8px;

  &:active {
    background-color: #4972fa;
    border-radius: 2px;
    border: none;
  }
`,Y=({contact:t})=>{const n=m(),a=()=>{n(O(t.id))};return e.createElement(K,null,e.createElement("span",null,t.name,": ",t.number),e.createElement(M,{type:"button",onClick:a},"Delete"))},J=()=>{const t=d(D),n=d(v),a=t.filter(s=>s.name.toLowerCase().includes(n.toLowerCase()));return e.createElement(H,null,a.map(s=>e.createElement(Y,{key:s.id,contact:s})))};c.div`
  margin-bottom: 20px; /* Простір під фільтром */
`;const Q=c.input`
  max-width: 130px;
  max-height: 5px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
`,U=()=>{const t=m(),n=d(v),a=s=>{t(Z(s.target.value))};return e.createElement(u,null,"Find contacts by name",e.createElement(Q,{type:"text",value:n,onChange:a}))},V=c.div`
  display: grid;
  justify-content: center;
  background-color: #f0f0f0;
`,W=()=>e.createElement(y,{store:p},e.createElement(E,{loading:null,persistor:L},e.createElement(V,null,e.createElement("h1",null,"Книга контактів"),e.createElement(G,null),e.createElement("h2",null,"Contacts"),e.createElement(U,null),e.createElement(J,null)))),X=P.createRoot(document.getElementById("root"));X.render(e.createElement(y,{store:p},e.createElement(E,{loading:null,persistor:L},e.createElement(W,null))));
//# sourceMappingURL=index.js.map
