import{j as e,k as v,z as V,Z as Q,N as A,K as N,A as G,u as T,B,E,_ as O,r as u,$ as Y,a0 as Z,a1 as H,a2 as J,a3 as X,a4 as K,a5 as ee,L as se,a6 as re,w as S,v as te,a7 as oe,a8 as ae,Y as ie,C as ne,a9 as ce}from"./index-D35yrkTA.js";import{S as le}from"./SectionTitle-DavVL4-U.js";import{B as pe}from"./BreadCrumbs-B5nP-Di4.js";const de="_container_ezw5g_1",_e="_message_ezw5g_11",x={container:de,message:_e},ue="_menuContainer_gij54_1",fe="_menuItem_gij54_29",me="_active_gij54_75",R={menuContainer:ue,menuItem:fe,active:me},he=({menuItems:s,activeTab:t,setActiveTab:r})=>e.jsx("div",{className:R.menuContainer,children:s.map(o=>e.jsx("div",{className:`${R.menuItem} ${o.id===t?R.active:""}`,onClick:()=>r(o.id),children:o.label},o.id))}),xe=s=>s.profile.userProfile,U=s=>s.profile.isAuthorizedUser,ge=s=>s.profile.followers,ve=s=>s.profile.following,je=s=>s.profile.favoritesRecipes,we="_recipeCard_zbyhy_1",be={recipeCard:we},$=({imgUrl:s,title:t})=>e.jsx("div",{className:be.recipeCard,children:e.jsx("img",{src:s,alt:t})}),Ce="_recipeCardWrapper_aqgmv_1",ye="_flexPhotoWrapper_aqgmv_11",Ne="_recipeTextWrapper_aqgmv_21",Le="_recipeInstructions_aqgmv_31",We="_recipeTitle_aqgmv_53",Ie="_buttonWrapper_aqgmv_69",Re="_recipeCardList_aqgmv_79",Pe="_iconBtn_aqgmv_91",Fe="_icon_aqgmv_91",p={recipeCardWrapper:Ce,flexPhotoWrapper:ye,recipeTextWrapper:Ne,recipeInstructions:Le,recipeTitle:We,buttonWrapper:Ie,recipeCardList:Re,iconBtn:Pe,icon:Fe},Ue=({data:s,tab:t})=>{const r=v(U),[o]=V(),[c]=Q(),n=()=>{t==="recipe"?c(s._id):G(o,s._id,"delete")};return e.jsxs("li",{className:p.recipeCardWrapper,children:[e.jsxs("div",{className:p.flexPhotoWrapper,children:[e.jsx($,{imgUrl:s.thumb,title:s.title}),e.jsxs("div",{className:p.recipeTextWrapper,children:[e.jsxs("h5",{className:p.recipeTitle,children:[" ",s.title," "]}),e.jsx("p",{className:p.recipeInstructions,children:s.instructions})]})]}),e.jsxs("div",{className:p.buttonWrapper,children:[e.jsx(A,{to:`/recipe/${s._id}`,children:e.jsx(N,{iconId:"icon-arrow-up-right",style:p.iconBtn,styleSVG:p.icon})}),r&&e.jsx(N,{iconId:"icon-trash",onClick:n,style:p.iconBtn,styleSVG:p.icon})]})]})},P=({data:s,tab:t})=>e.jsx("ul",{className:p.recipeCardList,children:s.map(r=>e.jsx(Ue,{data:r,tab:t},r._id))}),Te="_cardWrapper_bt2lx_1",Se="_photoWrapper_bt2lx_15",Ae="_smallProfilePhoto_bt2lx_41",Be="_followerData_bt2lx_51",Ee="_name_bt2lx_61",Oe="_descr_bt2lx_77",$e="_followerCardList_bt2lx_91",ze="_iconBtn_bt2lx_99",ke="_icon_bt2lx_99",De="_recipesList_bt2lx_157",Me="_recipeCard_bt2lx_167",_={cardWrapper:Te,photoWrapper:Se,smallProfilePhoto:Ae,followerData:Be,name:Ee,descr:Oe,followerCardList:$e,iconBtn:ze,icon:ke,recipesList:De,recipeCard:Me},qe=({data:s,btnText:t})=>{var c;const r=T(768,!1,3),o=T(1440,3,4);return e.jsxs("li",{className:_.cardWrapper,children:[e.jsxs("div",{className:_.followerData,children:[e.jsx("div",{className:_.photoWrapper,children:e.jsx("img",{src:s.avatarURL||"https://gravatar.com/avatar/000000000000000000000000000000000000000000000000000000?d=mp",className:_.smallProfilePhoto,alt:"User avatar"})}),e.jsxs("div",{children:[e.jsxs("h5",{className:_.name,children:[" ",s.name]}),e.jsxs("p",{className:_.descr,children:["Own recipes: ",s.totalRecipes]}),e.jsx(B,{text:t,variant:"follow_user"})]})]}),r&&e.jsx("ul",{className:_.recipesList,children:(c=s==null?void 0:s.recipes)==null?void 0:c.map((n,a)=>{if(a<o)return e.jsx("li",{children:e.jsx($,{imgUrl:n.thumb,title:n.title})},n._id)})}),e.jsx(A,{to:`/user/${s._id}`,children:e.jsx(N,{iconId:"icon-arrow-up-right",style:_.iconBtn,styleSVG:_.icon})})]})},F=({data:s,btnText:t})=>e.jsx("ul",{className:_.followerCardList,children:s.map(r=>e.jsx(qe,{data:r,btnText:t},r._id))}),g=[{id:"my-recipes",label:"MY RECIPES",message:"Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."},{id:"my-favorites",label:"MY FAVORITES",message:"Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future."},{id:"followers",label:"FOLLOWERS",message:"There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile."},{id:"following",label:"FOLLOWING",message:"Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you."}],b=[{id:"recipes",label:"RECIPES",message:"The current user hasn't added any recipes yet."},{id:"followers",label:"FOLLOWERS",message:"The current user hasn't any followers yet."}],Ve=()=>{const{id:s}=E(),t=O(),r=v(U),o=v(ge),c=v(ve),n=v(je),[a,C]=u.useState(r?g[0].id:b[0].id);u.useEffect(()=>{C(r?g[0].id:b[0].id)},[r]);const{data:l,isLoading:y}=Y(s),{data:m,isLoading:L}=Z({userId:s},{skip:a!=="my-favorites"}),{data:i,isLoading:h}=H({userId:s},{skip:a!=="followers"}),{data:d,isLoading:z}=J({userId:s},{skip:a!=="following"}),k=y||L||h||z;u.useEffect(()=>{if(a==="followers"&&i)t(X(i.followersWithRecipes));else if(a==="following"&&d)t(K(d.followingWithRecipes));else if(a==="my-favorites"&&m){const W=m==null?void 0:m.data.map(I=>I.recipe);t(ee({data:W}))}},[a,t,i,d,m]);const j=(W,I)=>W.find(({id:q})=>q===I).message,D=()=>{if(r)switch(a){case"my-recipes":return(l==null?void 0:l.total)>0?e.jsx(P,{data:l.data,tab:"recipe"}):e.jsx("p",{className:x.message,children:j(g,a)});case"my-favorites":return(n==null?void 0:n.length)>0?e.jsx(P,{data:n,tab:"favorites"}):e.jsx("p",{className:x.message,children:j(g,a)});case"followers":return(o==null?void 0:o.length)>0?e.jsx(F,{data:o,btnText:"follow"}):e.jsx("p",{className:x.message,children:j(g,a)});case"following":return(c==null?void 0:c.length)>0?e.jsx(F,{data:c,btnText:"unfollow"}):e.jsx("p",{className:x.message,children:j(g,a)});default:return null}else switch(a){case"recipes":return(l==null?void 0:l.total)>0?e.jsx(P,{data:l.data}):e.jsx("p",{className:x.message,children:j(b,a)});case"followers":return(o==null?void 0:o.length)>0?e.jsx(F,{data:o,btnText:"follow"}):e.jsx("p",{className:x.message,children:j(b,a)});default:return null}},M=r?g:b;return e.jsxs("div",{className:x.container,children:[e.jsx(he,{menuItems:M,activeTab:a,setActiveTab:C}),k?e.jsx(se,{}):e.jsx("div",{className:x.content,children:D()})]})},Qe="_container_1ivx6_1",Ge="_breadscrumbs_1ivx6_9",Ye="_title_1ivx6_17",Ze="_subtitle_1ivx6_23",He="_userInfoAndBtnWrapper_1ivx6_41",Je="_userInfoAndTabContentWerapper_1ivx6_111",w={container:Qe,breadscrumbs:Ge,title:Ye,subtitle:Ze,userInfoAndBtnWrapper:He,userInfoAndTabContentWerapper:Je},Xe="_profile_card_wrapper_hmtns_1",Ke="_profile_card_hmtns_1",es="_profile_name_hmtns_41",ss="_profile_card_info_hmtns_59",rs="_profile_info_item_hmtns_73",ts="_profile_info_content_hmtns_93",os="_profile_big_card_button_hmtns_109",as="_profile_big_card_icon_hmtns_127",is="_profile_photo_hmtns_135",f={profile_card_wrapper:Xe,profile_card:Ke,profile_name:es,profile_card_info:ss,profile_info_item:rs,profile_info_content:ts,profile_big_card_button:os,profile_big_card_icon:as,profile_photo:is},ns=s=>s.charAt(0).toUpperCase()+s.slice(1),cs=({name:s,value:t})=>{const r={email:"email",createdRecipesCount:"added recipes",favoriteRecipesCount:"favorites",followersCount:"followers",followingCount:"following"};return e.jsxs("li",{className:f.profile_info_item,children:[ns(r[s]),":",e.jsx("span",{className:f.profile_info_content,children:t})]})},ls=()=>{const s=v(U),[t]=re(),r=v(xe),o=r?Object.keys(r):[],[c,n]=u.useState((r==null?void 0:r.avatar)||S),a=async i=>{const h=new FormData;h.append("avatar",i);try{const d=await t(h).unwrap();n(d.avatarURL)}catch(d){console.error("Error updating avatar:",d)}},C=i=>{const h=i.target.files[0];if(h){const d=new FileReader;d.onload=()=>{a(h)},d.readAsDataURL(h)}},l=u.useRef(null),[y,m]=u.useState({width:16,height:16}),L=()=>{l.current.click()};return u.useEffect(()=>{n((r==null?void 0:r.avatar)||S)},[r==null?void 0:r.avatar]),u.useEffect(()=>{const i=()=>{window.matchMedia("(max-width: 768px)").matches?m({width:16,height:16}):m({width:18,height:18})};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),e.jsx("div",{className:f.profile_card_wrapper,children:e.jsxs("div",{className:f.profile_card,children:[e.jsx("img",{className:f.profile_photo,src:c,alt:`${(r==null?void 0:r.name)||"User Name"} avatar`}),s&&e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"file",ref:l,style:{display:"none"},onChange:C}),e.jsx(N,{iconId:"icon-plus",style:f.profile_big_card_button,styleSVG:f.profile_big_card_icon,stroke:"#FFF",width:y.width,height:y.height,onClick:L})]}),e.jsx("h3",{className:f.profile_name,children:r==null?void 0:r.name}),e.jsx("ul",{className:f.profile_info,children:o.map(i=>{if(!(i==="_id"||i==="name"||i==="avatar"))return e.jsx(cs,{name:i,value:r[i]},te())})})]})})},fs=()=>{const[s,t]=u.useState(!1),{id:r}=E(),o=O(),{data:c,error:n}=oe(r);if(u.useEffect(()=>{c&&o(ae(c))},[c,o]),n){ie.error(n.data.message,{position:"top-right"});return}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:w.container,children:[e.jsx("div",{className:w.breadscrumbs,children:e.jsx(pe,{currentPage:"Profile"})}),e.jsx("div",{className:w.title,children:e.jsx(le,{text:"Profile"})}),e.jsxs("p",{className:w.subtitle,children:["Reveal your culinary art, share your favorite recipe and create ",e.jsx("br",{}),"gastronomic masterpieces with us."]}),e.jsxs("div",{className:w.userInfoAndTabContentWerapper,children:[e.jsxs("div",{className:w.userInfoAndBtnWrapper,children:[e.jsx(ls,{}),e.jsx(B,{type:"button",variant:"logOutBtn",text:"Log Out",onClick:()=>t(!0)})]}),e.jsx(Ve,{})]})]}),e.jsx(ne,{isOpen:s,onClose:()=>t(!1),children:e.jsx(ce,{setModalLogOutOpen:t})})]})};export{fs as default};
