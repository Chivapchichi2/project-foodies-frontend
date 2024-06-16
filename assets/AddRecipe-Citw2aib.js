import{H as O,J as b,r as j,j as e,K as B,I as z,M as C,P as k,B as E,L as K,Q as V,T as X,U as Y,V as Z,W as ee,X as te,l as se,Y as ne,Z as q}from"./index-BaMi0nCm.js";import{B as re}from"./BreadCrumbs-DtmTWXhP.js";import{S as ae}from"./SectionTitle-DjZCqdzd.js";const ie=O().shape({title:b().required("Title is required"),description:b().max(200,"Description must be at most 200 characters").required("Description is required"),category:b().required("Category is required"),area:b().required("Area is required"),instructions:b().max(200,"Instructions must be at most 200 characters").required("Instructions are required")}),oe="_container_1o5ms_1",ce="_titleWrapper_1o5ms_19",le="_titleAndCrumpsWraper_1o5ms_25",pe="_formWrapper_1o5ms_37",de="_form_1o5ms_37",me="_nameInput_1o5ms_81",ue="_nameInputWrapper_1o5ms_109",he="_errorTitle_1o5ms_115",_e="_errorMsg_1o5ms_133",ge="_textareaWrapper_1o5ms_171",xe="_textarea_1o5ms_171",je="_labelPrep_1o5ms_215",ye="_symbolCounter_1o5ms_235",be="_recipeData_1o5ms_249",Ie="_recipeIncstructions_1o5ms_261",fe="_buttonWrapper_1o5ms_269",Ne="_button_1o5ms_269",ve="_trashBtn_1o5ms_301",We="_iconTrash_1o5ms_317",Te="_categoryAndTime_1o5ms_381",s={container:oe,titleWrapper:ce,titleAndCrumpsWraper:le,formWrapper:pe,form:de,nameInput:me,nameInputWrapper:ue,errorTitle:he,errorMsg:_e,textareaWrapper:ge,textarea:xe,labelPrep:je,symbolCounter:ye,recipeData:be,recipeIncstructions:Ie,buttonWrapper:fe,button:Ne,trashBtn:ve,iconTrash:We,categoryAndTime:Te},Be="_errorMsg_1gh9h_9",Ce="_wrapper_1gh9h_21",Ae="_uploadBox_1gh9h_39",Se="_uploadAnotherSpan_1gh9h_63",Me="_customUploadBtn_1gh9h_85",Le="_imagePreview_1gh9h_109",De="_btnWrapper_1gh9h_129",$e="_photoIcon_1gh9h_203",m={errorMsg:Be,wrapper:Ce,uploadBox:Ae,uploadAnotherSpan:Se,customUploadBtn:Me,imagePreview:Le,btnWrapper:De,photoIcon:$e},we=({register:r,setValue:n,imagePreview:c,setImagePreview:p,errors:a,watch:l})=>(j.useEffect(()=>{const o=l(u=>{u.thumb[0]&&(p(URL.createObjectURL(u.thumb[0])),n("thumb",u.thumb[0]))});return()=>o.unsubscribe()},[l,p,n]),e.jsxs("div",{className:m.wrapper,children:[e.jsx("div",{className:m.uploadBox,children:e.jsxs("label",{className:m.customUploadBtn,children:[e.jsx(B,{type:"file",name:"thumb",register:r,setValue:n,errors:a}),c&&e.jsx("img",{src:c,alt:"Recipe Preview",className:m.imagePreview}),e.jsxs("div",{className:m.btnWrapper,children:[!c&&e.jsxs(e.Fragment,{children:[e.jsx(z,{iconId:"icon-capture-photo-camera",width:"50px",height:"50",customStyle:m.photoIcon}),e.jsx("span",{children:"Upload a photo"})]}),a.thumb&&e.jsx("p",{className:m.errorMsg,children:a.thumb.message})]})]})}),c&&e.jsxs("label",{className:m.uploadAnotherSpan,children:[e.jsx(B,{type:"file",name:"thumb",register:r,setValue:n,errors:a}),"Upload another photo"]})]})),Qe="_container_11pdu_1",Ue="_errorMsg_11pdu_13",ke="_textareaWrapper_11pdu_25",qe="_symbolCounter_11pdu_33",Re="_textarea_11pdu_25",Pe="_inputQuantity_11pdu_97",Ee="_buttonAdd_11pdu_145",Ge="_addBtnIcon_11pdu_181",Fe="_icon_11pdu_207",He="_list_11pdu_231",Je="_listItem_11pdu_243",Oe="_imageWrapper_11pdu_257",ze="_image_11pdu_257",Ke="_iconBtn_11pdu_273",Ve="_textWrapper_11pdu_305",Xe="_ingredientAndQuantity_11pdu_315",t={container:Qe,errorMsg:Ue,textareaWrapper:ke,symbolCounter:qe,textarea:Re,inputQuantity:Pe,buttonAdd:Ee,addBtnIcon:Ge,icon:Fe,list:He,listItem:Je,imageWrapper:Oe,image:ze,iconBtn:Ke,textWrapper:Ve,ingredientAndQuantity:Xe},Ye="_iconBtn_sycip_1",Ze="_icon_sycip_1",et="_counterInput_sycip_41",T={iconBtn:Ye,icon:Ze,counterInput:et},tt=({cookingTime:r,setCookingTime:n})=>{const c=()=>{n(a=>a+1)},p=()=>{n(a=>a>1?a-1:1)};return e.jsxs("div",{children:[e.jsx("label",{children:"Cooking Time"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(C,{iconId:"icon-minus",width:"16",height:"16",type:"button",style:T.iconBtn,styleSVG:T.icon,onClick:p}),e.jsx("div",{children:e.jsxs("span",{style:{margin:"0 12px"},children:[r," min"]})}),e.jsx(C,{iconId:"icon-plus",type:"button",width:"16",height:"16",style:T.iconBtn,styleSVG:T.icon,onClick:c})]})]})},G=r=>{j.useEffect(()=>{const n=document.querySelector(`.${r}`),c=p=>{n.style.height="36px",n.style.height=`${p.target.scrollHeight}px`};return n.addEventListener("input",c),()=>{n.removeEventListener("input",c)}},[r])},st=({register:r,setValue:n,watch:c,ingredients:p,selectedIngredients:a,setSelectedIngredients:l,errors:o,categories:u,areas:A,cookingTime:S,setCookingTime:M,isIngredientsLoading:L,isCategoriesLoading:D,isAreasLoading:$})=>{var W;const[w,y]=j.useState(!1),h=c("ingredient"),I=c("measure"),f=()=>{if(h&&I){const i=p.find(_=>_._id===h.value);l([...a,{id:h.value,measure:I,imageUrl:i.img,label:h.label}]),n("ingredient",null),n("measure",""),y(!0)}},N=i=>{l(a.filter((_,Q)=>Q!==i)),a.length<=1&&y(!1)},v=i=>i?e.jsx(K,{}):null;return G(t.textarea),e.jsxs("div",{className:t.container,children:[e.jsxs("div",{className:t.textareaWrapper,children:[e.jsx("textarea",{...r("description"),name:"description",maxLength:"200",placeholder:"Enter the description of the dish",className:t.textarea}),e.jsxs("span",{className:t.symbolCounter,children:[((W=c("description"))==null?void 0:W.length)||0,"/200"]}),o.description&&e.jsx("p",{className:t.errorMsg,children:o.description.message})]}),e.jsx("div",{className:t.categoryAndTime,children:v(D)||e.jsxs("div",{children:[e.jsx("label",{children:"Category"}),e.jsx(k,{options:u,placeholder:"Select a category",...r("category"),onChange:i=>n("category",i.label)}),o.category&&e.jsx("p",{className:t.errorMsg,children:o.category.message})]})}),e.jsx("div",{className:t.categoryAndTime,children:v($)||e.jsxs("div",{children:[e.jsx("label",{children:"Area"}),e.jsx(k,{options:A,placeholder:"Select area",...r("area"),onChange:i=>n("area",i.label)}),o.area&&e.jsx("p",{className:t.errorMsg,children:o.area.message})]})}),e.jsxs("div",{children:[e.jsx(tt,{cookingTime:S,setCookingTime:M}),o.cookingTime&&e.jsx("p",{className:t.errorMsg,children:o.cookingTime.message})]}),e.jsxs("div",{className:t.ingredientAndQuantity,children:[L?e.jsx("p",{children:"Loading..."}):e.jsxs("div",{children:[e.jsx("label",{children:"Ingredient"}),e.jsx(k,{options:p,placeholder:"Select an ingredient",className:t.select,...r("ingredient"),onChange:i=>n("ingredient",i)}),o.ingredient&&e.jsx("p",{className:t.errorMsg,children:o.ingredient.message})]}),e.jsxs("div",{children:[e.jsx(B,{type:"text",name:"measure",register:r,placeholder:"Enter quantity",classname:t.inputQuantity}),o.measure&&e.jsx("p",{className:t.errorMsg,children:o.measure.message})]})]}),w&&e.jsx("ul",{className:t.list,children:a.map((i,_)=>e.jsxs("li",{className:t.listItem,children:[e.jsx("div",{className:t.imageWrapper,children:e.jsx("img",{src:i.imageUrl,alt:i.label,width:"55px",height:"55px",className:t.image})}),e.jsxs("div",{className:t.textWrapper,children:[e.jsx("p",{children:i.label}),e.jsx("p",{children:i.measure})]}),e.jsx(C,{iconId:"icon-close-btn",type:"button",onClick:()=>N(_),style:t.iconBtn})]},_))}),e.jsx(E,{text:"Add ingredient",type:"button",onClick:f,iconId:"icon-plus",iconStyle:t.addBtnIcon,classname:t.buttonAdd})]})},nt="_formTitleWrapper_1hnv8_1",rt="_fromDescription_1hnv8_37",at="_formTitle_1hnv8_1",P={formTitleWrapper:nt,fromDescription:rt,formTitle:at},it=()=>e.jsx("div",{className:P.formTitleWrapper,children:e.jsx("p",{className:P.fromDescription,children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."})}),pt=()=>{var R;const{register:r,handleSubmit:n,control:c,setValue:p,watch:a,formState:{errors:l},reset:o}=V({resolver:ne(ie),defaultValues:{selectedIngredients:[]}}),{data:u,isLoading:A}=X(),{data:S,isLoading:M}=Y(),{data:L,isLoading:D}=Z(),{data:$}=ee(),[w]=te(),[y,h]=j.useState([]),[I,f]=j.useState(null),[N,v]=j.useState(1),W=u,i=S,_=L,Q=se(),U="toastId",F=async x=>{const d=new FormData;d.append("thumb",x.thumb),d.append("title",x.title),d.append("description",x.description),d.append("category",x.category),d.append("area",x.area),d.append("time",N.toString()),d.append("instructions",x.instructions);const J=y.map(g=>({id:g.id,measure:g.measure}));d.append("ingredients",JSON.stringify(J));try{const g=await w(d);g.error?q.error(g.error.data.message,{toastId:U}):(Q(`/user/${$.id}`),q.success("Sign In successful",{toastId:U}),o())}catch(g){q.error(g.message,{toastId:U})}},H=()=>{o(),f(null),h([])};return G(s.textarea),e.jsxs("div",{className:s.container,children:[e.jsxs("div",{className:s.titleAndCrumpsWraper,children:[e.jsx(re,{currentPage:"Add Recipe"}),e.jsxs("div",{className:s.titleWrapper,children:[e.jsx(ae,{text:"add recipe"}),e.jsx(it,{})]})]}),e.jsx("form",{onSubmit:n(F),className:s.form,children:e.jsxs("div",{className:s.formWrapper,children:[e.jsx(we,{register:r,setValue:p,imagePreview:I,setImagePreview:f,watch:a,errors:l}),e.jsxs("div",{children:[e.jsxs("div",{className:s.nameInputWrapper,children:[e.jsx(B,{type:"text",name:"title",register:r,placeholder:"The name of the recipe",classname:s.nameInput}),l.title&&e.jsx("p",{className:s.errorTitle,children:l.title.message})]}),e.jsx("div",{className:s.recipeData,children:e.jsx("div",{className:s.categoryAndTime,children:e.jsxs("div",{className:s.recipeData,children:[e.jsx(st,{control:c,register:r,setValue:p,watch:a,categories:W,areas:_,cookingTime:N,setCookingTime:v,ingredients:i,selectedIngredients:y,setSelectedIngredients:h,errors:l,isCategoriesLoading:A,isIngredientsLoading:M,isAreasLoading:D}),l.selectedIngredients&&e.jsx("p",{className:s.errorMsg,children:l.selectedIngredients.message})]})})}),e.jsxs("div",{className:s.recipeIncstructions,children:[e.jsx("label",{className:s.labelPrep,children:"Recipe preparation"}),e.jsxs("div",{className:s.textareaWrapper,children:[e.jsx("textarea",{...r("instructions"),name:"instructions",placeholder:"Enter recipe",maxLength:"200",className:s.textarea}),e.jsxs("span",{className:s.symbolCounter,children:[((R=a("instructions"))==null?void 0:R.length)||0,"/200"]}),l.instructions&&e.jsx("p",{className:s.errorMsg,children:l.instructions.message})]})]}),e.jsxs("div",{className:s.buttonWrapper,children:[e.jsx(C,{iconId:"icon-trash",type:"button",onClick:H,width:"20",height:"20",style:s.trashBtn,styleSVG:s.iconTrash}),e.jsx(E,{text:"Publish",type:"submit",classname:s.button})]})]})]})})]})};export{pt as default};
