"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[670],{4670:function(s,e,t){t.r(e),t.d(e,{default:function(){return ts}});var n=t(2791),a=t(364),o=t(6871),i=t(8683),r="Profile_profile__VHbzQ",l=t(2982),c="MyPosts_newPostForm__AK0gB",u="MyPosts_postsBlock__lB-pf",d="MyPosts_posts__GSiZ2",f="MyPosts_blueButton__b6Bow",h="Post_post__wW6-Y",m="Post_profileImage__hiFi6",x="Post_postText__xEaxK",p="Post_likes__K9KVP",j=t(184),_=function(s){var e=s.message,t=s.likesCount;return(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("img",{className:m,src:"https://cdn-icons-png.flaticon.com/512/1464/1464795.png",alt:"Profile avatar"}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:x,children:e}),(0,j.jsxs)("div",{className:p,children:[t,(0,j.jsx)("span",{children:" likes"})]})]})]})},v=t(6139),N=t(704),g=t(3459),b=t(3098),P=[b.C,(0,b.D)(50)],k=(0,N.Z)({form:"profileMyPostsForm"})((function(s){var e=s.handleSubmit;return(0,j.jsxs)("form",{onSubmit:e,children:[(0,j.jsx)("div",{className:c,children:(0,j.jsx)(v.Z,{component:g.g,name:"newPostText",placeholder:"Enter your post text...",validate:P})}),(0,j.jsx)("div",{children:(0,j.jsx)("button",{className:f,children:"Add post"})})]})})),S=n.memo((function(s){var e=(0,l.Z)(s.posts).reverse().map((function(s){return(0,j.jsx)(_,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("h3",{children:"My posts"}),(0,j.jsx)(k,{onSubmit:function(e){s.addPost(e.newPostText)}}),(0,j.jsx)("div",{className:d,children:e})]})})),I=t(7973),C={addPost:I.q2},F=(0,a.$j)((function(s){return{posts:s.profilePage.posts}}),C)(S),y=t(5861),A=t(885),M=t(7757),w=t.n(M),Z="ProfileInfo_mr5__4XyWt",D="ProfileInfo_blueText__HM4iA",O="ProfileInfo_profileInfo__QG8TK",U="ProfileInfo_userAvatarContainer__Ffhil",E="ProfileInfo_userAvatar__+uFDb",J="ProfileInfo_setUserAvatar__bNSSg",B="ProfileInfo_profileData__m1bqM",T="ProfileInfo_status__YrBI5",K="ProfileInfo_statusInput__XlSnR",V="ProfileInfo_fieldsContainer__u9xNU",Y="ProfileInfo_fieldContainer__EXeV+",R="ProfileInfo_contact__sQB8W",Q="ProfileInfo_error__Vu9Ki",W="ProfileInfo_buttonsContainer__FEDZe",X="ProfileInfo_blueButton__E5ofx",q=t(393),G=t(3445),H=function(s){var e=s.initialStatus,t=s.updateStatus,a=s.isOwner,o=(0,n.useState)(!1),i=(0,A.Z)(o,2),r=i[0],l=i[1],c=(0,n.useState)(e),u=(0,A.Z)(c,2),d=u[0],f=u[1];(0,n.useEffect)((function(){f(e)}),[e]);return(0,j.jsx)("div",{children:a?(0,j.jsx)(j.Fragment,{children:r?(0,j.jsxs)("div",{className:T,children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:D,children:"Status:"}),(0,j.jsx)("input",{type:"text",onChange:function(s){f(s.currentTarget.value)},value:d,autoFocus:!0,className:K})]}),(0,j.jsxs)("div",{className:W,children:[(0,j.jsx)("button",{onClick:function(){l(!1),t(d)},className:X,style:{marginRight:"10px"},children:"Save Changes"}),(0,j.jsx)("button",{onClick:function(){l(!1)},className:X,children:"Discard Changes"})]})]}):(0,j.jsxs)("div",{className:T,children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:D,children:"Status: "}),d||"No status"]}),(0,j.jsx)("button",{onClick:function(){l(!0)},className:X,children:"Change Status"})]})}):(0,j.jsx)("div",{className:T,children:(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:D,children:"Status: "}),(0,j.jsx)("span",{children:d||"No status"})]})})})},L=function(s){var e=s.profile,t=s.isOwner,n=s.activateEditMode;return(0,j.jsxs)("div",{className:B,children:[(0,j.jsxs)("div",{className:V,children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:"".concat(D," ").concat(Z),children:"Full Name:"}),e.fullName]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:"".concat(D," ").concat(Z),children:"About Me:"}),e.aboutMe||"No info"]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:"".concat(D," ").concat(Z),children:"Looking for a job:"}),e.lookingForAJob?"Yes":"No"]}),e.lookingForAJob&&(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:"".concat(D," ").concat(Z),children:"My Professional Skills:"}),e.lookingForAJobDescription||"No Skills"]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:"".concat(D," ").concat(Z),children:"Contacts:"}),0!==Object.keys(e.contacts).filter((function(s){return e.contacts[s]})).length?Object.keys(e.contacts).filter((function(s){return e.contacts[s]})).map((function(s){return(0,j.jsx)("div",{className:R,children:(0,j.jsx)("a",{href:e.contacts[s],target:"_blank",children:s})},s)})):(0,j.jsx)(j.Fragment,{children:"No Contacts"})]})]}),t&&(0,j.jsx)("div",{className:W,children:(0,j.jsx)("button",{className:X,onClick:n,children:"Edit Info"})})]})},$=(0,N.Z)({form:"editProfileData"})((function(s){var e=s.contacts,t=s.discardChanges,n=s.handleSubmit,a=s.error;return(0,j.jsxs)("form",{className:B,onSubmit:n,children:[(0,j.jsxs)("div",{className:V,children:[(0,j.jsxs)("div",{className:Y,children:[(0,j.jsx)("label",{htmlFor:"fullName",className:D,children:"Full Name:"}),(0,j.jsx)(v.Z,{component:g.I,name:"fullName",id:"fullName",type:"text",placeholder:"Your full name"})]}),(0,j.jsxs)("div",{className:Y,children:[(0,j.jsx)("label",{htmlFor:"aboutMe",className:D,children:"About Me:"}),(0,j.jsx)(v.Z,{component:g.g,name:"aboutMe",id:"aboutMe",type:"text",placeholder:"Tell about yourself"})]}),(0,j.jsxs)("div",{className:Y,children:[(0,j.jsx)("label",{htmlFor:"lookingForAJob",className:D,children:"Looking For a Job:"}),(0,j.jsx)(v.Z,{component:g.I,name:"lookingForAJob",id:"lookingForAJob",type:"checkbox"})]}),(0,j.jsxs)("div",{className:Y,children:[(0,j.jsx)("label",{htmlFor:"lookingForAJobDescription",className:D,children:"My Professional Skills:"}),(0,j.jsx)(v.Z,{component:g.g,name:"lookingForAJobDescription",id:"lookingForAJobDescription",type:"text",placeholder:"Your professional skills"})]}),(0,j.jsxs)("div",{className:Y,children:[(0,j.jsx)("span",{className:D,children:"Contacts:"}),Object.keys(e).map((function(s){return(0,j.jsxs)("div",{className:R,children:[(0,j.jsxs)("label",{className:D,children:[s,": "]}),(0,j.jsx)(v.Z,{component:g.I,name:"contacts.".concat(s),id:s,type:"url",placeholder:s})]},s)}))]})]}),a&&(0,j.jsx)("div",{className:Q,children:a}),(0,j.jsxs)("div",{className:W,children:[(0,j.jsx)("button",{className:X,style:{marginRight:"10px"},children:"Save Changes"}),(0,j.jsx)("button",{className:X,onClick:t,children:"Discard Changes"})]})]})})),z=function(s){var e=s.profile,t=s.status,a=s.updateProfile,o=s.updateStatus,i=s.postUserAvatar,r=s.isOwner,l=(0,n.useState)(!1),c=(0,A.Z)(l,2),u=c[0],d=c[1],f=function(){var s=(0,y.Z)(w().mark((function s(e){return w().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a(e);case 2:d(!1);case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return e?(0,j.jsxs)("div",{className:O,children:[(0,j.jsxs)("div",{className:U,children:[(0,j.jsx)("img",{src:e.photos.large||q,className:E,alt:"Profile photo"}),r&&(0,j.jsxs)("label",{className:"".concat(J," ").concat(X),children:[(0,j.jsx)("input",{type:"file",accept:"image/png, image/jpg, image/gif, image/jpeg",onChange:function(s){var e;null!==(e=s.target.files)&&void 0!==e&&e.length&&i(s.target.files[0])}}),(0,j.jsx)("span",{children:"Change Avatar"})]})]}),(0,j.jsx)(H,{initialStatus:t,updateStatus:o,isOwner:r}),u?(0,j.jsx)($,{initialValues:e,contacts:e.contacts,discardChanges:function(){return d(!1)},onSubmit:f}):(0,j.jsx)(L,{profile:e,isOwner:r,activateEditMode:function(){return d(!0)}})]}):(0,j.jsx)(G.Z,{})},ss=function(s){return(0,j.jsxs)("section",{className:r,children:[(0,j.jsx)(z,(0,i.Z)({},s)),(0,j.jsx)(F,{})]})},es={getUserProfile:I.et,getStatus:I.lR,updateProfile:I.ck,updateStatus:I.Nf,postUserAvatar:I.Oe},ts=(0,a.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorisedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),es)((function(s){var e=(0,o.s0)(),t=(0,o.UO)();return(0,n.useEffect)((function(){var n=+t.userId;n||(n=s.authorisedUserId)||e("/login"),s.getUserProfile(n),s.getStatus(n)}),[t.userId]),(0,j.jsx)(ss,{profile:s.profile,status:s.status,updateProfile:s.updateProfile,updateStatus:s.updateStatus,postUserAvatar:s.postUserAvatar,isOwner:!t.userId})}))}}]);
//# sourceMappingURL=670.f5d61ad4.chunk.js.map