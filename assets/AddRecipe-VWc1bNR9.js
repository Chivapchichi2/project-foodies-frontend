import{G as O,H as y,r as b,j as e,J as C,I as H,K as S,M as k,B as G,L as K,P as V,Q as X,T as Y,U as z,V as Z,W as ee,l as te,X as se,Y as q}from"./index-D35yrkTA.js";import{B as ne}from"./BreadCrumbs-B5nP-Di4.js";import{S as re}from"./SectionTitle-DavVL4-U.js";const ae=O().shape({title:y().required("Title is required"),description:y().max(200,"Description must be at most 200 characters").required("Description is required"),category:y().required("Category is required"),area:y().required("Area is required"),instructions:y().max(200,"Instructions must be at most 200 characters").required("Instructions are required")}),ie="_container_e8cnf_1",ce="_titleWrapper_e8cnf_17",oe="_formWrapper_e8cnf_25",le="_form_e8cnf_25",pe="_nameInput_e8cnf_69",de="_nameInputWrapper_e8cnf_97",me="_errorTitle_e8cnf_103",he="_errorMsg_e8cnf_121",ue="_textareaWrapper_e8cnf_159",_e="_textarea_e8cnf_159",ge="_labelPrep_e8cnf_203",xe="_symbolCounter_e8cnf_223",je="_recipeData_e8cnf_237",ye="_recipeIncstructions_e8cnf_249",be="_buttonWrapper_e8cnf_257",fe="_button_e8cnf_257",Ie="_trashBtn_e8cnf_289",Ne="_iconTrash_e8cnf_305",ve="_categoryAndTime_e8cnf_369",s={container:ie,titleWrapper:ce,formWrapper:oe,form:le,nameInput:pe,nameInputWrapper:de,errorTitle:me,errorMsg:he,textareaWrapper:ue,textarea:_e,labelPrep:ge,symbolCounter:xe,recipeData:je,recipeIncstructions:ye,buttonWrapper:be,button:fe,trashBtn:Ie,iconTrash:Ne,categoryAndTime:ve},We="_errorMsg_1gh9h_9",Te="_wrapper_1gh9h_21",Ce="_uploadBox_1gh9h_39",Se="_uploadAnotherSpan_1gh9h_63",Be="_customUploadBtn_1gh9h_85",Ae="_imagePreview_1gh9h_109",Me="_btnWrapper_1gh9h_129",De="_photoIcon_1gh9h_203",m={errorMsg:We,wrapper:Te,uploadBox:Ce,uploadAnotherSpan:Se,customUploadBtn:Be,imagePreview:Ae,btnWrapper:Me,photoIcon:De},Le=({register:i,setValue:c,imagePreview:l,setImagePreview:p,errors:n,watch:o})=>(b.useEffect(()=>{const a=o(h=>{h.thumb[0]&&p(URL.createObjectURL(h.thumb[0]))&&c("thumb",h.thumb[0])});return()=>a.unsubscribe()},[o,p,c]),e.jsxs("div",{className:m.wrapper,children:[e.jsx("div",{className:m.uploadBox,children:e.jsxs("label",{className:m.customUploadBtn,children:[e.jsx(C,{type:"file",name:"thumb",register:i,setValue:c,errors:n}),l&&e.jsx("img",{src:l,alt:"Recipe Preview",className:m.imagePreview}),e.jsxs("div",{className:m.btnWrapper,children:[!l&&e.jsxs(e.Fragment,{children:[e.jsx(H,{iconId:"icon-capture-photo-camera",width:"50px",height:"50",customStyle:m.photoIcon}),e.jsx("span",{children:"Upload a photo"})]}),n.thumb&&e.jsx("p",{className:m.errorMsg,children:n.thumb.message})]})]})}),l&&e.jsxs("label",{className:m.uploadAnotherSpan,children:[e.jsx(C,{type:"file",name:"thumb",register:i,setValue:c,errors:n}),"Upload another photo"]})]})),$e="_container_h7a2m_1",we="_errorMsg_h7a2m_13",Qe="_textareaWrapper_h7a2m_25",Ue="_symbolCounter_h7a2m_33",ke="_textarea_h7a2m_25",qe="_inputQuantity_h7a2m_97",Pe="_buttonAdd_h7a2m_143",Re="_icon_h7a2m_181",Ge="_list_h7a2m_205",Ee="_listItem_h7a2m_217",Fe="_imageWrapper_h7a2m_231",Je="_image_h7a2m_231",Oe="_iconBtn_h7a2m_247",He="_textWrapper_h7a2m_279",Ke="_ingredientAndQuantity_h7a2m_289",t={container:$e,errorMsg:we,textareaWrapper:Qe,symbolCounter:Ue,textarea:ke,inputQuantity:qe,buttonAdd:Pe,icon:Re,list:Ge,listItem:Ee,imageWrapper:Fe,image:Je,iconBtn:Oe,textWrapper:He,ingredientAndQuantity:Ke},Ve="_iconBtn_sycip_1",Xe="_icon_sycip_1",Ye="_counterInput_sycip_41",T={iconBtn:Ve,icon:Xe,counterInput:Ye},ze=({cookingTime:i,setCookingTime:c})=>{const l=()=>{c(n=>n+1)},p=()=>{c(n=>n>1?n-1:1)};return e.jsxs("div",{children:[e.jsx("label",{children:"Cooking Time"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(S,{iconId:"icon-minus",width:"16",height:"16",type:"button",style:T.iconBtn,styleSVG:T.icon,onClick:p}),e.jsx("div",{children:e.jsxs("span",{style:{margin:"0 12px"},children:[i," min"]})}),e.jsx(S,{iconId:"icon-plus",type:"button",width:"16",height:"16",style:T.iconBtn,styleSVG:T.icon,onClick:l})]})]})},Ze=({register:i,setValue:c,watch:l,ingredients:p,selectedIngredients:n,setSelectedIngredients:o,errors:a,categories:h,areas:B,cookingTime:A,setCookingTime:M,isIngredientsLoading:D,isCategoriesLoading:L,isAreasLoading:$})=>{var W;const[w,j]=b.useState(!1),u=l("ingredient"),f=l("measure"),I=()=>{if(u&&f){const r=p.find(_=>_._id===u.value);o([...n,{id:u.value,measure:f,imageUrl:r.img,label:u.label}]),c("ingredient",null),c("measure",""),j(!0)}},N=r=>{o(n.filter((_,Q)=>Q!==r)),n.length<=1&&j(!1)},v=r=>r?e.jsx(K,{}):null;return e.jsxs("div",{className:t.container,children:[e.jsxs("div",{className:t.textareaWrapper,children:[e.jsx("textarea",{...i("description"),name:"description",maxLength:"200",placeholder:"Enter the description of the dish",className:t.textarea}),e.jsxs("span",{className:t.symbolCounter,children:[((W=l("description"))==null?void 0:W.length)||0,"/200"]}),a.description&&e.jsx("p",{className:t.errorMsg,children:a.description.message})]}),e.jsx("div",{className:t.categoryAndTime,children:v(L)||e.jsxs("div",{children:[e.jsx("label",{children:"Category"}),e.jsx(k,{options:h,placeholder:"Select a category",...i("category"),onChange:r=>c("category",r.label)}),a.category&&e.jsx("p",{className:t.errorMsg,children:a.category.message})]})}),e.jsx("div",{className:t.categoryAndTime,children:v($)||e.jsxs("div",{children:[e.jsx("label",{children:"Area"}),e.jsx(k,{options:B,placeholder:"Select area",...i("area"),onChange:r=>c("area",r.label)}),a.area&&e.jsx("p",{className:t.errorMsg,children:a.area.message})]})}),e.jsxs("div",{children:[e.jsx(ze,{cookingTime:A,setCookingTime:M}),a.cookingTime&&e.jsx("p",{className:t.errorMsg,children:a.cookingTime.message})]}),e.jsxs("div",{className:t.ingredientAndQuantity,children:[D?e.jsx("p",{children:"Loading..."}):e.jsxs("div",{children:[e.jsx("label",{children:"Ingredient"}),e.jsx(k,{options:p,placeholder:"Select an ingredient",className:t.select,...i("ingredient"),onChange:r=>c("ingredient",r)}),a.ingredient&&e.jsx("p",{className:t.errorMsg,children:a.ingredient.message})]}),e.jsxs("div",{children:[e.jsx(C,{type:"text",name:"measure",register:i,placeholder:"Enter quantity",classname:t.inputQuantity}),a.measure&&e.jsx("p",{className:t.errorMsg,children:a.measure.message})]})]}),w&&e.jsx("ul",{className:t.list,children:n.map((r,_)=>e.jsxs("li",{className:t.listItem,children:[e.jsx("div",{className:t.imageWrapper,children:e.jsx("img",{src:r.imageUrl,alt:r.label,width:"55px",height:"55px",className:t.image})}),e.jsxs("div",{className:t.textWrapper,children:[e.jsx("p",{children:r.label}),e.jsx("p",{children:r.measure})]}),e.jsx(S,{iconId:"icon-close-btn",type:"button",onClick:()=>N(_),style:t.iconBtn})]},_))}),e.jsx(G,{text:"Add ingredient +",type:"button",onClick:I,iconId:"icon-plus",classname:t.buttonAdd})]})},et="_formTitleWrapper_1hnv8_1",tt="_fromDescription_1hnv8_37",st="_formTitle_1hnv8_1",R={formTitleWrapper:et,fromDescription:tt,formTitle:st},nt=()=>e.jsx("div",{className:R.formTitleWrapper,children:e.jsx("p",{className:R.fromDescription,children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."})}),ct=()=>{var P;const{register:i,handleSubmit:c,control:l,setValue:p,watch:n,formState:{errors:o},reset:a}=V({resolver:se(ae),defaultValues:{selectedIngredients:[]}}),{data:h,isLoading:B}=X(),{data:A,isLoading:M}=Y(),{data:D,isLoading:L}=z(),{data:$}=Z(),[w]=ee(),[j,u]=b.useState([]),[f,I]=b.useState(null),[N,v]=b.useState(1),W=h,r=A,_=D,Q=te(),U="toastId",E=async x=>{const d=new FormData;d.append("thumb",x.thumb[0]),d.append("title",x.title),d.append("description",x.description),d.append("category",x.category),d.append("area",x.area),d.append("time",N.toString()),d.append("instructions",x.instructions);const J=j.map(g=>({id:g.id,measure:g.measure}));d.append("ingredients",JSON.stringify(J));try{const g=await w(d);g.error?q.error(g.error.data.message,{toastId:U}):(Q(`/user/${$.id}`),q.success("Sign In successful",{toastId:U}),a())}catch(g){q.error(g.message,{toastId:U})}},F=()=>{a(),I(null),u([])};return e.jsxs("div",{className:s.container,children:[e.jsx(ne,{currentPage:"Add Recipe"}),e.jsxs("div",{className:s.titleWrapper,children:[e.jsx(re,{text:"add recipe"}),e.jsx(nt,{})]}),e.jsx("form",{onSubmit:c(E),className:s.form,children:e.jsxs("div",{className:s.formWrapper,children:[e.jsx(Le,{register:i,setValue:p,imagePreview:f,setImagePreview:I,watch:n,errors:o}),e.jsxs("div",{children:[e.jsxs("div",{className:s.nameInputWrapper,children:[e.jsx(C,{type:"text",name:"title",register:i,placeholder:"The name of the recipe",classname:s.nameInput}),o.title&&e.jsx("p",{className:s.errorTitle,children:o.title.message})]}),e.jsx("div",{className:s.recipeData,children:e.jsx("div",{className:s.categoryAndTime,children:e.jsxs("div",{className:s.recipeData,children:[e.jsx(Ze,{control:l,register:i,setValue:p,watch:n,categories:W,areas:_,cookingTime:N,setCookingTime:v,ingredients:r,selectedIngredients:j,setSelectedIngredients:u,errors:o,isCategoriesLoading:B,isIngredientsLoading:M,isAreasLoading:L}),o.selectedIngredients&&e.jsx("p",{className:s.errorMsg,children:o.selectedIngredients.message})]})})}),e.jsxs("div",{className:s.recipeIncstructions,children:[e.jsx("label",{className:s.labelPrep,children:"Recipe preparation"}),e.jsxs("div",{className:s.textareaWrapper,children:[e.jsx("textarea",{...i("instructions"),name:"instructions",placeholder:"Enter recipe",maxLength:"200",className:s.textarea}),e.jsxs("span",{className:s.symbolCounter,children:[((P=n("instructions"))==null?void 0:P.length)||0,"/200"]}),o.instructions&&e.jsx("p",{className:s.errorMsg,children:o.instructions.message})]})]}),e.jsxs("div",{className:s.buttonWrapper,children:[e.jsx(S,{iconId:"icon-trash",type:"button",onClick:F,width:"20",height:"20",style:s.trashBtn,styleSVG:s.iconTrash}),e.jsx(G,{text:"Publish",type:"submit",classname:s.button})]})]})]})})]})};export{ct as default};
