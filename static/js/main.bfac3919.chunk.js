(this["webpackJsonpcolis-voyageur"]=this["webpackJsonpcolis-voyageur"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),c=a(160),o=a(161),s=a(86),u=Object(s.a)({palette:{type:"dark",primary:{main:"#4267b2"}}}),m=a(16),p=a(36),d=a(81),g=a(87),f=a(31),E=a(167),v=a(136),b=a(137),y=a(11),h=a(48),x=a(20),j=function(e){var t=r.a.useState(Object(h.a)({},e)),a=Object(x.a)(t,2),n=a[0],i=a[1];return{content:n,setContent:i,bind:{content:n,onChange:function(e,t){return i(Object(h.a)({},n,Object(y.a)({},e.target.id,Object(h.a)({},n[e.target.id],{value:t}))))},setError:function(e,t){return i(Object(h.a)({},n,Object(y.a)({},e,Object(h.a)({},n[e],{error:t}))))}}}},O=a(108),N=a(162),T=Object(O.a)((function(e){return{input:{marginBottom:e.spacing(2)},textField:{width:"100%"}}})),k=function(e){var t=T(),a=e.inputHandler,n=a.content[e.id],i=n.value,l=n.error;return r.a.createElement("div",{className:t.input},r.a.createElement(N.a,{error:!!l,helperText:l||"",id:e.id,label:e.label,variant:"outlined",onChange:function(e,t){return a.bind.onChange(e,e.target.value)},value:i,inputProps:{maxLength:"64"},type:e.type,className:t.textField}))},w=function(e){return r.a.createElement("form",{noValidate:!0,autoComplete:"off"},e.inputs.map((function(t){return r.a.createElement(k,{key:t.id,id:t.id,label:t.label,type:t.type?t.type:"text",error:t.error,inputHandler:e.inputHandler})})))},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a={};return e.forEach((function(e){a[e.id]={value:t,error:t}})),a},P=Object(d.a)((function(e){return{paper:{maxWidth:600,width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},container:{width:"90%"},title:{paddingTop:"30px",paddingBottom:"20px"},small:{width:e.spacing(6),height:e.spacing(6),marginBottom:"20px"},actions:{display:"flex",justifyContent:"center",paddingTop:"10px",paddingBottom:"30px"},button:{marginLeft:"10px",marginRight:"10px"}}})),B=function(e){var t=P(),a=j(C(e.inputs));return r.a.createElement(g.a,{elevation:3,className:t.paper},r.a.createElement(f.a,{component:"h4",variant:"h4",className:t.title},e.title),r.a.createElement(E.a,{className:t.small},e.icon),r.a.createElement(v.a,{className:t.container},r.a.createElement("div",null,r.a.createElement(w,{inputs:e.inputs,inputHandler:a}))),r.a.createElement(v.a,{className:t.actions},e.buttons.map((function(e,n){return r.a.createElement(b.a,{key:n,onClick:function(){return e.click(a)},variant:"contained",className:t.button},e.label)}))))},I=a(64),A=a.n(I),z=function(e){console.log(e.content)},D=[{id:"mail",label:"Mail"},{id:"password",label:"Password",type:"password"}],M=[{label:"Connexion",click:function(e){return z(e)}}],q=function(e){return r.a.createElement(B,{title:"Connexion",icon:r.a.createElement(A.a,null),inputs:D,buttons:M})},L=[{id:"firstName",label:"Pr\xe9nom"},{id:"lastName",label:"Nom de famille"},{id:"mail",label:"Mail"},{id:"password",label:"Mot de passe",type:"password"},{id:"passwordConfirm",label:"Confirmer le mot de passe",type:"password"}],F=[{label:"Inscription",click:function(e){return z(e)}}],V=function(e){return r.a.createElement(B,{title:"Inscription",icon:r.a.createElement(A.a,null),inputs:L,buttons:F})},R=a(139),H=a(140),W=a(65),G=a.n(W),J=a(66),S=a.n(J),U=Object(d.a)((function(e){return{logo:{marginTop:"8px",marginRight:"20px",marginLeft:"10px"}}})),Y=function(e){var t=U(),a=50;return e.large?a=200:e.medium?a=125:e.small&&(a=75),r.a.createElement("div",{className:t.logo},r.a.createElement("img",{src:"".concat("/colis-voyageur","/resources/img/logo.png"),alt:"logo",width:"".concat(a,"px")}))},K=Object(O.a)((function(e){return{root:{flexGrow:1},menuRight:{marginRight:e.spacing(3)},accountButtons:{marginLeft:"auto"}}})),Q=function(){var e=K();return r.a.createElement(R.a,{position:"static",className:e.root},r.a.createElement(H.a,null,r.a.createElement(Y,{small:!0}),r.a.createElement(b.a,{color:"primary",variant:"contained",component:m.b,to:"/"},"Accueil"),r.a.createElement(b.a,{color:"primary",variant:"contained",component:m.b,to:"/travels/"},"Voyages"),r.a.createElement(b.a,{color:"primary",variant:"contained",component:m.b,to:"/requests/"},"Demandes"),r.a.createElement("div",{className:e.accountButtons},r.a.createElement(b.a,{color:"primary",variant:"contained",startIcon:r.a.createElement(G.a,null),component:m.b,to:"/login/"},"Connexion"),r.a.createElement(b.a,{color:"primary",variant:"contained",startIcon:r.a.createElement(S.a,null),component:m.b,to:"/create/"},"Inscription"))))},X=a(107),Z=a(164),$=a(83),_=a.n($),ee=a(135),te=a(144),ae=a(2),ne=a(17),re=a(141),ie=a(142),le=a(143),ce=function(e){var t=Object(ne.a)(),a=e.icon,n=e.text,i=Object(ae.a)(e,["icon","text"]);return r.a.createElement(re.a,Object.assign({button:!0},i,{style:{paddingLeft:t.spacing(4)}}),a?r.a.createElement(ie.a,null,a):"",r.a.createElement(le.a,{primary:n}))},oe=Object(O.a)((function(e){return{list:{width:250,marginTop:"10px"},nested:{paddingLeft:e.spacing(4)}}})),se=function(){var e=oe();return r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(Y,{medium:!0}),r.a.createElement(ee.a,{className:e.list},r.a.createElement(ce,{text:"Accueil",component:m.b,to:"/"}),r.a.createElement(ce,{text:"Connexion",icon:r.a.createElement(G.a,null),component:m.b,to:"/login"}),r.a.createElement(ce,{text:"Inscription",icon:r.a.createElement(S.a,null),component:m.b,to:"/create"}),r.a.createElement(te.a,null,"Voyages"),r.a.createElement(ce,{text:"Consulter les voyages",component:m.b,to:"/travels"}),r.a.createElement(te.a,null,"Demandes"),r.a.createElement(ce,{text:"Consulter les demandes",component:m.b,to:"/requests"})))},ue=Object(O.a)((function(e){return{root:{flexGrow:1},list:{width:250}}})),me=function(){var e=ue(),t=r.a.useState(!1),a=Object(x.a)(t,2),n=a[0],i=a[1],l=function(){i(!n)};return r.a.createElement("div",null,r.a.createElement(R.a,{position:"static",className:e.route},r.a.createElement(H.a,null,r.a.createElement(X.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:l},r.a.createElement(_.a,null)),r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement(Y,{small:!0})))),r.a.createElement(Z.a,{open:n,onClose:l},r.a.createElement("div",{onClick:l},r.a.createElement(se,null))))},pe=a(145),de=function(e){var t=Object(ne.a)(),a=Object(pe.a)(t.breakpoints.up("md"));return r.a.createElement("div",null,a?r.a.createElement(Q,null):r.a.createElement(me,null))},ge=(Object(d.a)((function(e){return{footer:{borderTop:"1px solid ".concat(e.palette.divider),marginTop:"10em"},container:{marginTop:"2em"},text:{color:e.palette.grey[500],textAlign:"center"},list:{maxWidth:400}}})),a(156)),fe=a(146),Ee=a(147),ve=a(148),be=a(149),ye=a(150),he=a(151),xe=Object(d.a)((function(e){return{table:{maxWidth:600,width:"100%"},title:{paddingTop:"10px",paddingBottom:"10px"},headCell:{textAlign:"center",fontWeight:"bold"}}})),je=function(e){var t=xe();return r.a.createElement(g.a,{elevation:3,className:t.table},r.a.createElement(f.a,{variant:"h4",component:"h4",align:"center",className:t.title},e.title),r.a.createElement(fe.a,null,r.a.createElement(Ee.a,{"aria-label":"simple table"},r.a.createElement(ve.a,null,r.a.createElement(be.a,null,e.headers.map((function(e,a){return r.a.createElement(ye.a,{key:a,className:t.headCell},e)})))),r.a.createElement(he.a,null,e.rows.map((function(e,t){return r.a.createElement(be.a,{key:t,hover:!0},e.map((function(e,t){return r.a.createElement(ye.a,{key:t,align:"center"},e)})))}))))))},Oe=a(166),Ne=a(152),Te=a(168),ke=a(153),we=a(154),Ce=a(155),Pe=a(84),Be=a.n(Pe),Ie=Object(d.a)((function(e){return{table:{paddingTop:"20px"}}})),Ae=function(e){var t=Ie();return r.a.createElement(fe.a,{className:t.table},r.a.createElement(Ee.a,null,r.a.createElement(ve.a,null,r.a.createElement(be.a,null,Object.entries(e.info).map((function(e){var t=Object(x.a)(e,2),a=t[0];t[1];return r.a.createElement(ye.a,{key:a,style:{fontWeight:"bold"},align:"center"},a)})))),r.a.createElement(he.a,null,r.a.createElement(be.a,null,Object.entries(e.info).map((function(e){var t=Object(x.a)(e,2),a=(t[0],t[1]);return r.a.createElement(ye.a,{key:a,align:"center"},a)}))))))},ze=Object(d.a)((function(e){return{paper:{maxWidth:600,width:"100%",margin:"0 auto",marginTop:"10px",marginBottom:"10px"},content:{width:"100%"},action:{marginTop:"20px",float:"right"}}})),De=function(e){var t=ze();return r.a.createElement(g.a,{elevation:3,className:t.paper},r.a.createElement(Oe.a,{className:t.panel},r.a.createElement(Ne.a,{expandIcon:r.a.createElement(Be.a,null)},r.a.createElement(Te.a,{label:e.title,color:e.color,style:{marginRight:"15px"}}),r.a.createElement("div",null,r.a.createElement("div",null,e.data.departure),r.a.createElement("div",null,e.data.arrival))),r.a.createElement(ke.a,null,r.a.createElement("div",{className:t.content},r.a.createElement("div",null,e.data.desc),r.a.createElement(Ae,{info:e.data.info}),r.a.createElement(we.a,{elevation:0},r.a.createElement(Ce.a,{avatar:r.a.createElement(E.a,{src:e.user.pic,component:m.b,to:"/user/".concat(e.user.id)}),title:"".concat(e.user.firstName," ").concat(e.user.lastName),subheader:e.user.city,action:r.a.createElement(b.a,{variant:"contained",className:t.action},"Contacter")}))))))},Me=function(e,t,a){return[e,t,a]},qe=["Ville de d\xe9part","Date de d\xe9part","Ville d'arriv\xe9e"],Le=[Me("Paris","14/09/2020","Los Angeles"),Me("New York","05/11/2020","Tizi Ouzou"),Me("Alger","31/02/2021","Paris")],Fe=function(e){return r.a.createElement(je,{headers:qe,rows:Le,title:"Voyages"})},Ve=function(e,t,a){return[e,t,a]},Re=["Ville de d\xe9part","Date maximum de d\xe9part","Ville d'arriv\xe9e"],He=[Ve("Paris","14/09/2020","Los Angeles"),Ve("New York","05/11/2020","Tizi Ouzou"),Ve("Alger","31/02/2021","Paris")],We=function(e){return r.a.createElement(je,{headers:Re,rows:He,title:"Demandes"})},Ge=Object(d.a)((function(e){return{grid:{width:"100%"}}})),Je=function(e){var t=Ge();return r.a.createElement(ge.a,{container:!0,justify:"center",spacing:2,className:t.grid},r.a.createElement(ge.a,{item:!0},r.a.createElement(Fe,null)),r.a.createElement(ge.a,{item:!0},r.a.createElement(We,null)))},Se=a(27),Ue=a(157),Ye=a(158),Ke=a(165),Qe=Object(d.a)((function(e){return{paper:{width:"100%",margin:"0 auto",marginTop:"10px",marginBottom:"10px"},grid:{padding:"20px 20px 20px 20px"}}})),Xe=function(e){var t=Qe();return r.a.createElement(g.a,{elevation:3,className:t.paper},r.a.createElement(ge.a,{container:!0,spacing:2,className:t.grid},r.a.createElement(ge.a,{item:!0,xs:12},r.a.createElement(f.a,{component:"h6",variant:"h6",align:"center"},"Type"),r.a.createElement(Ue.a,null,e.inputs.map((function(t){var a=e.inputHandler.content[t.id].value;return r.a.createElement(Ye.a,{key:t.id,control:r.a.createElement(Ke.a,{key:t.id,id:t.id,checked:a,onChange:function(t){return e.inputHandler.bind.onChange(t,t.target.checked)},color:"secondary"}),label:t.label})}))))))},Ze=Object(d.a)((function(e){return{grid:{width:"100%"}}})),$e=function(e){var t=Ze(),a=[];e.data.forEach((function(e){return Object.entries(e).forEach((function(e){var t=Object(x.a)(e,2),n=t[0],r=t[1];"type"===n&&a.push(r)}))})),a=Object(Se.a)(new Set(a)).map((function(e){return{id:e,label:e}}));var n=j(C(a,!0)),i=e.data.filter((function(e){return!0===n.content[e.type].value}));return r.a.createElement(ge.a,{container:!0,spacing:2,justify:"center",className:t.grid},r.a.createElement(ge.a,{item:!0,xs:10,sm:4},r.a.createElement(Xe,{inputs:a,inputHandler:n})),r.a.createElement(ge.a,{item:!0,xs:12,sm:8},i.map((function(t,a){return r.a.createElement(e.component,{key:a,data:t})}))))},_e=a(25),et=Object(_e.b)((function(e){return{users:e.users}}))((function(e){var t=e.users.find((function(t){return t.id===e.data.userId}));return r.a.createElement(De,{title:"Voyage",color:"primary",data:e.data,user:t})})),tt=Object(_e.b)((function(e){return{travels:e.travels}}))((function(e){return r.a.createElement($e,{data:e.travels,component:et})})),at=Object(_e.b)((function(e){return{users:e.users}}))((function(e){var t=e.users.find((function(t){return t.id===e.data.userId}));return r.a.createElement(De,{title:"Demande",color:"secondary",data:e.data,user:t})})),nt=Object(_e.b)((function(e){return{requests:e.requests}}))((function(e){return r.a.createElement($e,{data:e.requests,component:at})})),rt=a(159),it=Object(d.a)((function(e){return{paper:{width:600},container:{display:"flex",justifyContent:"center"},avatar:{width:e.spacing(20),height:e.spacing(20),margin:"0 auto",marginTop:"20px",marginBottom:"10px"},desc:{marginTop:"20px",marginBottom:"20px"},name:{marginBottom:"5px"},city:{color:e.palette.grey[400]}}})),lt=function(e){var t=it();return console.log(e.user.pic),r.a.createElement(g.a,{elevation:3,className:t.paper},r.a.createElement(v.a,null,r.a.createElement(E.a,{src:e.user.pic,className:t.avatar}),r.a.createElement(f.a,{component:"h4",variant:"h4",align:"center",className:t.name},e.user.firstName," ",e.user.lastName),r.a.createElement(f.a,{component:"h6",variant:"h6",align:"center",className:t.city},e.user.city),r.a.createElement("p",{className:t.desc},e.user.desc),r.a.createElement(rt.a,null)),r.a.createElement(v.a,null,r.a.createElement(f.a,{component:"h6",variant:"h6",align:"center",style:{marginTop:"10px"}},"Voyages pr\xe9vus"),e.travels.map((function(e,t){return r.a.createElement(et,{key:t,data:e})})),r.a.createElement(f.a,{component:"h6",variant:"h6",align:"center",style:{marginTop:"10px"}},"Demandes en cours"),e.requests.map((function(e,t){return r.a.createElement(at,{key:t,data:e})}))))},ct=Object(_e.b)((function(e){return{users:e.users,travels:e.travels,requests:e.requests}}))((function(e){var t=parseInt(Object(p.e)().id),a=e.users.find((function(e){return e.id===t})),n=e.travels.filter((function(e){return e.userId===t})),i=e.requests.filter((function(e){return e.userId===t}));return r.a.createElement(lt,{user:a,travels:n,requests:i})})),ot=Object(d.a)((function(e){return{container:{paddingTop:"30px",display:"flex",justifyContent:"center"}}})),st=function(){var e=ot();return r.a.createElement(m.a,null,r.a.createElement(de,null),r.a.createElement(v.a,{className:e.container},r.a.createElement(p.a,{exact:!0,path:"/",component:Je}),r.a.createElement(p.a,{path:"/login",component:q}),r.a.createElement(p.a,{path:"/create",component:V}),r.a.createElement(p.a,{path:"/travels",component:tt}),r.a.createElement(p.a,{path:"/requests",component:nt}),r.a.createElement(p.a,{path:"/user/:id",component:ct})))},ut=a(44),mt=function(){return[{id:0,userId:1,departure:"Paris (France)",arrival:"Tizi Ouzou (Algerie)",desc:"Bonjour, je fais Paris / Tizi Ouzou en avion et j'ai 20 kg de libre dans mes bagages.",info:{"Date de d\xe9part":"16/07/2020",Prix:"40e",Type:"Avion"},type:"flight"},{id:1,userId:2,departure:"Paris (France)",arrival:"Los Angeles (Etats Unis)",desc:"Bonjour, je fais Paris / Los Angeles en avion et j'ai pas mal de place libre dans mon bagage.",info:{"Date de d\xe9part":"25/10/2021",Prix:"20e",Type:"Avion"},type:"flight"},{id:2,userId:2,departure:"Paris (France)",arrival:"Miami (Etats Unis)",desc:"Bonjour, je dois aller voir mon ami Rick Ross a Miami n'hesitez pas si vous devez faire transporter des bagages a Miami.",info:{"Date de d\xe9part":"25/07/2022",Prix:"10e",Type:"Avion"},type:"flight"},{id:3,userId:1,departure:"Paris (France)",arrival:"Marseille",desc:"Bonjour, je vais a Marseille en Renault Espace j'ai pas mal de place dans mon coffre.",info:{"Date de d\xe9part":"25/03/2020",Prix:"10e",Type:"Voiture"},type:"car"}]},pt=function(){return[{userId:1,departure:"Paris (France)",arrival:"Tizi Ouzou (Algerie)",desc:"Bonjour, j'ai un colis de 3kg pas tres grand a transporter pour Tizi Ouzou.",info:{"Date de d\xe9part":"16/07/2020",Budget:"40e","Type de colis":"Petit, l\xe9ger"},type:"small"},{userId:2,departure:"Paris (France)",arrival:"Moscou (Russie)",desc:"Bonjour, j'ai un colis de 8kg un peu grand a transporter pour Moscou URGENT.",info:{"Date de d\xe9part":"01/02/2020",Budget:"60e","Type de colis":"Moyen, lourd"},type:"medium"},{userId:1,departure:"Paris (France)",arrival:"Madrid (Espagne)",desc:"Bonjour, j'ai un colis de 15kg a transporter pour Madrid.",info:{"Date de d\xe9part":"16/07/2020",Budget:"80e","Type de colis":"Grand, lourd"},type:"large"}]},dt=function(){return[{id:1,firstName:"Mehdi",lastName:"Dalil",pic:"".concat("/colis-voyageur","/resources/img/users/montana.jpg"),city:"Paris (France)",desc:"Je fais souvent des trajets Paris / Alger donc n'hesitez pas a surveiller mon profil",mobile:"0102030405"},{id:2,firstName:"Lyes",lastName:"Nino",pic:"".concat("/colis-voyageur","/resources/img/users/drake.jpg"),city:"Paris (France)",desc:"Je fais souvent des trajets Paris / Los Angeles donc n'hesitez pas a surveiller mon profil",mobile:"0103050406"}]},gt=Object(ut.b)({travels:mt,requests:pt,users:dt});l.a.render(r.a.createElement((function(){return r.a.createElement(_e.a,{store:Object(ut.c)(gt)},r.a.createElement(c.a,{theme:u},r.a.createElement(o.a,null),r.a.createElement(st,null)))}),null),document.querySelector("#root"))},94:function(e,t,a){e.exports=a(105)}},[[94,1,2]]]);
//# sourceMappingURL=main.bfac3919.chunk.js.map