import{j as r,O as R,k as b,r as a,x as S,q as x,A as L,P as O,Q as N,T as U}from"./index-CR1s_VMy.js";import{w}from"./user_without_avatar-Dha2JWmk.js";const A="_container_1h2az_1",j={container:A},F="_menuContainer_e34x7_1",P="_menuItem_e34x7_27",T="_active_e34x7_69",_={menuContainer:F,menuItem:P,active:T},y=({menuItems:i,activeTab:t,setActiveTab:e})=>r.jsx("div",{className:_.menuContainer,children:i.map(n=>r.jsx("div",{className:`${_.menuItem} ${n.id===t?_.active:""}`,onClick:()=>e(n.id),children:n.label},n.id))}),z=i=>i.profile.userProfile,M=i=>i.profile.isAuthorizedUser,k="_profile_card_wrapper_14f2i_1",W="_profile_card_14f2i_1",D="_profile_name_14f2i_41",$="_profile_card_info_14f2i_59",Y="_profile_info_item_14f2i_73",G="_profile_info_content_14f2i_85",V="_profile_big_card_button_14f2i_101",B="_profile_big_card_icon_14f2i_119",Q="_profile_photo_14f2i_127",s={profile_card_wrapper:k,profile_card:W,profile_name:D,profile_card_info:$,profile_info_item:Y,profile_info_content:G,profile_big_card_button:V,profile_big_card_icon:B,profile_photo:Q},q=i=>i.charAt(0).toUpperCase()+i.slice(1),g=({name:i,value:t})=>{const e={email:"email",createdRecipesCount:"added recipes",favoriteRecipesCount:"favorites",followersCount:"followers",followingCount:"following"};return r.jsxs("li",{className:s.profile_info_item,children:[q(e[i]),":",r.jsx("span",{className:s.profile_info_content,children:t})]})},H=({isOwnProfile:i})=>{const[t]=R(),e=b(z),n=e?Object.keys(e):[],[f,u]=a.useState((e==null?void 0:e.avatar)||w),E=async o=>{const c=new FormData;c.append("avatar",o);try{const l=await t(c).unwrap();u(l.avatarURL)}catch(l){console.error("Error updating avatar:",l)}},C=o=>{const c=o.target.files[0];if(c){const l=new FileReader;l.onload=()=>{E(c)},l.readAsDataURL(c)}},m=a.useRef(null),[h,v]=a.useState({width:16,height:16}),I=()=>{m.current.click()};return a.useEffect(()=>{u((e==null?void 0:e.avatar)||w)},[e==null?void 0:e.avatar]),a.useEffect(()=>{const o=()=>{window.matchMedia("(max-width: 768px)").matches?v({width:16,height:16}):v({width:18,height:18})};return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),r.jsx("div",{className:s.profile_card_wrapper,children:r.jsxs("div",{className:s.profile_card,children:[r.jsx("img",{className:s.profile_photo,src:f,alt:`${(e==null?void 0:e.name)||"User Name"} avatar`}),i&&r.jsxs(r.Fragment,{children:[r.jsx("input",{type:"file",ref:m,style:{display:"none"},onChange:C}),r.jsx(S,{iconId:"icon-plus",style:s.profile_big_card_button,styleSVG:s.profile_big_card_icon,stroke:"#FFF",width:h.width,height:h.height,onClick:I})]}),r.jsx("h3",{className:s.profile_name,children:e==null?void 0:e.name}),r.jsx("ul",{className:s.profile_info,children:n.map(o=>{if(!(o==="_id"||o==="name"||o==="avatar"))return o==="createdRecipesCount"||o==="favoriteRecipesCount"?r.jsx(g,{name:o,value:e[o].total},x()):r.jsx(g,{name:o,value:e[o]},x())})})]})})},d=[{id:"my-recipes",label:"MY RECIPES"},{id:"my-favorites",label:"MY FAVORITES"},{id:"followers",label:"FOLLOWERS"},{id:"following",label:"FOLLOWING"}],p=[{id:"recipes",label:"RECIPES"},{id:"followers",label:"FOLLOWERS"}],J=()=>{const i=b(M),[t,e]=a.useState(i?d[0].id:p[0].id);a.useEffect(()=>{e(i?d[0].id:p[0].id)},[i]);const n=()=>{if(i)switch(t){case"my-recipes":return r.jsx("div",{children:"MY RECIPES"});case"my-favorites":return r.jsx("div",{children:"MY FAVORITES"});case"followers":return r.jsx("div",{children:"FOLLOWERS"});case"following":return r.jsx("div",{children:"FOLLOWING"});default:return null}else switch(t){case"recipes":return r.jsx("div",{children:"RECIPES"});case"followers":return r.jsx("div",{children:"FOLLOWERS"});default:return null}},f=i?d:p;return r.jsxs("div",{className:j.container,children:[r.jsx(H,{isOwnProfile:i}),r.jsx(y,{menuItems:f,activeTab:t,setActiveTab:e}),r.jsx("div",{className:j.content,children:n()})]})},K=()=>{const{id:i}=L(),t=O(),{data:e,error:n,isLoading:f}=N(i);return a.useEffect(()=>{e&&t(U(e))},[e,t]),f?r.jsx("div",{children:"Loading..."}):n?r.jsxs("div",{children:["Error: ",n.message]}):r.jsx("div",{children:r.jsx(J,{})})};export{K as default};
