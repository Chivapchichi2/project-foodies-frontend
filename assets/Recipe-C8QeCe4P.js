import{j as e,q as f,t as H,i as v,r as t,s as B,v as M,w as P,B as S,C as T,n as U,l as A,o as F,x as R,I as Q,y as z,L as D,z as K,A as X}from"./index-BEn8Lh2d.js";import{w as E,h as w,B as Z}from"./BreadCrumbs-ntrrtCrr.js";const J="_recipe_info_container_1a2kn_1",V="_recipe_info_wrapper_1a2kn_3",Y="_recipe_img_1a2kn_21",C={recipe_info_container:J,recipe_info_wrapper:V,recipe_img:Y},ee="_ingredients_item_w1ukj_1",se="_ingredients_img_w1ukj_15",ie="_ingredients_info_w1ukj_33",ne="_ingredients_mesure_w1ukj_49",te="_ingredients_list_w1ukj_57",re="_ingredients_subtitel_w1ukj_77",l={ingredients_item:ee,ingredients_img:se,ingredients_info:ie,ingredients_mesure:ne,ingredients_list:te,ingredients_subtitel:re},ae="/project-foodies-frontend/assets/ingredient_without_img-DgeLwZWu.jpg",ce=({pathImg:i,name:s,mesure:n})=>e.jsxs("li",{className:l.ingredients_item,children:[e.jsx("img",{className:l.ingredients_img,src:i||ae,alt:`${s} image`}),e.jsxs("div",{className:l.ingredients_info,children:[e.jsx("p",{children:s}),e.jsx("p",{className:l.ingredients_mesure,children:n})]})]}),oe=({ingredients:i})=>e.jsx("ul",{className:l.ingredients_list,children:i.map(({ingredient:s,mesure:n})=>e.jsx(ce,{pathImg:s.img,name:s.name,mesure:n},s._id))}),_e=({ingredients:i})=>e.jsxs("div",{children:[e.jsx("h3",{className:l.ingredients_subtitel,children:"Ingredients"}),e.jsx(oe,{ingredients:i})]}),pe="_owner_card_1lkyf_1",le="_owner_photo_1lkyf_11",de="_owner_sign_1lkyf_23",me="_owner_primary_info_wrapper_1lkyf_35",ue="_profile_big_card_icon_1lkyf_53",x={owner_card:pe,owner_photo:le,owner_sign:de,owner_primary_info_wrapper:me,profile_big_card_icon:ue},ge=({owner:i})=>{const{avatar:s,name:n,_id:r}=i;return e.jsxs(f,{to:`/user/${r}`,className:x.owner_card,children:[e.jsx("img",{className:x.owner_photo,src:s||E,alt:`${n} photo`}),e.jsxs("div",{className:x.owner_primary_info_wrapper,children:[e.jsx("span",{className:x.owner_sign,children:"Created by:"}),e.jsx("h4",{children:n})]})]})},he="_tags_list_13jcq_1",je="_tag_list_item_13jcq_13",q={tags_list:he,tag_list_item:je},xe=({tagInfo:i})=>e.jsx("li",{className:q.tag_list_item,children:Number(i)?`${i} min`:i}),fe=({tags:i})=>{const s=Object.keys(i);return e.jsx("ul",{className:q.tags_list,children:s.map(n=>e.jsx(xe,{tagInfo:i[n]},H()))})},ve="_recipe_main_info_wrapper_1uv7g_1",we="_recipe_header_1uv7g_15",Ne="_recipe_description_1uv7g_27",$={recipe_main_info_wrapper:ve,recipe_header:we,recipe_description:Ne},Ie=({data:i})=>{const{area:s,category:n,time:r,title:d,description:c,owner:o}=i;return e.jsxs("div",{className:$.recipe_main_info_wrapper,children:[e.jsx("h3",{className:$.recipe_header,children:d}),e.jsx(fe,{tags:{area:s,category:n,time:r}}),e.jsx("p",{className:$.recipe_description,children:c}),e.jsx(ge,{owner:o})]})},ke=i=>i.split(`\r
`).filter(s=>s.trim()!=="").map(s=>`<p>${s}</p><br>`).join(""),ye="_recipe_preparation_1hfuv_1",be="_instruction_1hfuv_19",W={recipe_preparation:ye,instruction:be},Se=({instruction:i})=>e.jsxs("div",{children:[e.jsx("h4",{className:W.recipe_preparation,children:"Recipe Preparation"}),e.jsx("div",{className:W.instruction,dangerouslySetInnerHTML:{__html:ke(i)}})]}),Re="/project-foodies-frontend/assets/recipe_without_img-Bp4tHiOX.jpg",G=i=>i.favoriteRecipes.favorites,Ce=({recipe:i})=>{const{thumb:s,title:n,instructions:r,ingredients:d,_id:c}=i,o=v(G),[j,_]=t.useState(o.includes(c)),N=v(B),[p,m]=t.useState(!1),[u,I]=t.useState(!0),[g,k]=t.useState(!1),[y]=M(),[b]=P();t.useEffect(()=>{_(o.includes(c))},[o,c]);const h=()=>{k(!g),I(!u)};return e.jsxs("section",{className:C.recipe_info_container,children:[e.jsx("img",{className:C.recipe_img,src:s||Re,alt:n}),e.jsxs("div",{className:C.recipe_info_wrapper,children:[e.jsx(Ie,{data:i}),e.jsx(_e,{ingredients:d}),e.jsx(Se,{instruction:r}),N?j?e.jsx(S,{text:"Remove from favorites",variant:"add_favorite",onClick:()=>w(b,c,"delete",_)}):e.jsx(S,{text:"Add to favorites",variant:"add_favorite",onClick:()=>w(y,c,"add",_)}):e.jsx(S,{text:"Add to favorites",variant:"add_favorite",onClick:()=>{m(!p)}})]}),e.jsxs(T,{isOpen:p,onClose:()=>m(!p),children:[g&&e.jsx(U,{handleClickSignIn:h}),u&&e.jsx(A,{handleClickSignUp:h})]})]})},$e="_header_popular_recipes_cshxa_1",Fe="_popular_recipes_container_cshxa_17",Oe="_popular_recipes_list_cshxa_33",O={header_popular_recipes:$e,popular_recipes_container:Fe,popular_recipes_list:Oe},Le="_recipeImage_hfeb7_1",We="_textWrap_hfeb7_17",Be="_recipeDescription_hfeb7_25",Me="_avatarBtnswrap_hfeb7_45",Pe="_avatarWrapper_hfeb7_53",Te="_avatar_hfeb7_45",Ue="_iconWrapper_hfeb7_73",Ae="_iconList_hfeb7_111",De="_recipeCard_hfeb7_125",Ee="_header_card_hfeb7_133",a={recipeImage:Le,textWrap:We,recipeDescription:Be,avatarBtnswrap:Me,avatarWrapper:Pe,avatar:Te,iconWrapper:Ue,iconList:Ae,recipeCard:De,header_card:Ee},qe="_section_subtitle_w8jh6_1",Ge={section_subtitle:qe},He=({text:i,customStyle:s})=>e.jsx("h3",{className:F(Ge.section_subtitle,s),children:i}),Qe=({recipe:i})=>{const{_id:s,title:n,owner:r,description:d,thumb:c}=i,o=v(G),[j,_]=t.useState(o.includes(s)),N=v(B),[p,m]=t.useState(!1),[u,I]=t.useState(!0),[g,k]=t.useState(!1),[y]=M(),[b]=P();t.useEffect(()=>{_(o.includes(s))},[o,s]);const h=()=>{k(!g),I(!u)},L=()=>{j?w(b,s,"delete",_):w(y,s,"add",_)};return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:F(a.recipeCard),children:[e.jsx(f,{to:`/recipe/${s}`,children:e.jsx("img",{src:c,alt:n,className:a.recipeImage})}),e.jsxs("div",{className:a.textWrap,children:[e.jsx(He,{customStyle:a.header_card,text:n}),e.jsx("p",{className:a.recipeDescription,children:d})]}),e.jsxs("div",{className:a.avatarBtnswrap,children:[e.jsxs(f,{to:`/user/${r._id}`,className:F(a.avatarWrapper),children:[e.jsx("img",{src:r.avatar||`${E}`,alt:`${r.name} avatar`,className:a.avatar}),e.jsx("span",{children:r.name})]}),e.jsxs("ul",{className:a.iconList,children:[e.jsx("li",{children:N?j?e.jsx(R,{iconId:"icon-heart",onClick:L}):e.jsx(R,{iconId:"icon-heart",onClick:L}):e.jsx(R,{iconId:"icon-heart",onClick:()=>{m(!p)}})}),e.jsx("li",{children:e.jsx(f,{to:`/recipe/${s}`,className:a.iconWrapper,children:e.jsx(Q,{iconId:"icon-arrow-up-right"})})})]})]})]}),e.jsxs(T,{isOpen:p,onClose:()=>m(!p),children:[g&&e.jsx(U,{handleClickSignIn:h}),u&&e.jsx(A,{handleClickSignUp:h})]})]})},ze=({recipes:i})=>{const{data:s}=i;return e.jsxs("ul",{className:O.popular_recipes_list,children:[s.map(({recipe:n})=>e.jsx(Qe,{recipe:n},n._id))," "]})},Ke=()=>{const{data:i,isLoading:s}=z();return e.jsxs("section",{className:O.popular_recipes_container,children:[e.jsx("h3",{className:O.header_popular_recipes,children:"Popular recipes"}),s?e.jsx(D,{}):e.jsx(ze,{recipes:i})]})},Xe="_main_container_jkri4_1",Ze={main_container:Xe},Ye=()=>{const{id:i}=K(),{data:s,isLoading:n}=X(i);return t.useEffect(()=>{window.scrollTo(0,0)},[i]),e.jsx(e.Fragment,{children:e.jsxs("main",{className:Ze.main_container,children:[s&&e.jsx(Z,{currentPage:s.data.title}),n?e.jsx(D,{}):e.jsx(Ce,{recipe:s.data}),e.jsx(Ke,{})]})})};export{Ye as default};
