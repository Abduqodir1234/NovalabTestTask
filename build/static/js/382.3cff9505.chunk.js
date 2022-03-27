"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[382],{1147:function(e,t,n){var r=n(9389),a=n(6106),s=n(914),i=n(7496),l=n(1028),o=n(2791),c=n(184),u=r.Z.TextArea;t.Z=function(e){var t=e.quill,n=e.quillRef,d=e.Quill,h=e.handleMainPhotoChange;return d&&!t&&d.register("modules/blotFormatter",l.ZP),(0,o.useEffect)((function(){t&&t.on("text-change",(function(e,r){console.log("Text change!"),console.log("Salom",n.current.firstChild.innerHTML);var a=t.getContents();console.log(a.diff(r))}))}),[t,d]),(0,c.jsxs)(a.Z,{children:[(0,c.jsx)(s.Z,{xl:24,xs:24,className:"px-3",children:(0,c.jsx)(i.Z.Item,{label:"Photo",children:(0,c.jsx)("input",{type:"file",onChange:function(e){return h(e.target.files)}})})}),(0,c.jsx)(s.Z,{xl:24,xs:24,className:"px-3",children:(0,c.jsx)(i.Z.Item,{label:"Title",name:"title",hasFeedback:!0,rules:[{required:!0,message:"Please input title!"}],children:(0,c.jsx)(r.Z,{})})}),(0,c.jsx)(s.Z,{span:24,children:(0,c.jsx)(i.Z.Item,{label:"Short Description",name:"short_desc",rules:[{required:!0,message:"Please input short description"}],children:(0,c.jsx)(u,{showCount:!0,maxLength:100,style:{height:120}})})}),(0,c.jsx)(s.Z,{span:24,children:(0,c.jsx)(i.Z.Item,{label:"Description",name:"desc",className:"react-quill-container",children:(0,c.jsx)("div",{ref:n})})})]})}},382:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(6871),a=n(7711),s=n(2624),i=n(9439),l=n(7496),o=n(7309),c=n(5507),u=n(2791),d=n(1933),h=n(7215),p=n(511),f=n(5861),m=n(7757),x=n.n(m),g=n(4569),Z=n.n(g),j=localStorage.getItem("access_token"),b=localStorage.getItem("refresh_token"),v=function(){var e=(0,f.Z)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z()({method:"PATCH",url:"/blogs/".concat(t.id),headers:{Authorization:"Bearer ".concat(j),refresh:"".concat(b)},data:t.data});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=v,C=n(2730),T=n(1147),_=n(184),q=function(e){var t=e.data2,n=(0,r.s0)(),a=(0,r.UO)().id,s=t.data.data,f=(0,u.useState)(p.r.base_url+s.photo),m=(0,i.Z)(f,2),x=m[0],g=m[1],Z=(0,d.useMutation)(y,{onError:function(){(0,C.Z)("error","Something went wrong")},onSuccess:function(e){e.data.error?(0,C.Z)("error",e.data.msg):e.data.error||((0,C.Z)("success","Updated successfully"),n("/profile/blogs"))}}),j=Z.mutate,b=Z.isLoading,v=(0,h.p)({modules:{blotFormatter:{}}}),q=v.quill,w=v.quillRef,F=v.Quill;(0,u.useEffect)((function(){q&&q.clipboard.dangerouslyPasteHTML(null===s||void 0===s?void 0:s.description)}),[q]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c.Z,{level:3,children:"Update a blog"}),(0,_.jsxs)(l.Z,{name:"basic",initialValues:{title:s.title,short_desc:s.short_desc},onFinish:function(e){e.description=w.current.firstChild.innerHTML,delete e.desc;var t=new FormData;t.append("title",e.title),t.append("short_desc",e.short_desc),"string"!==typeof x&&t.append("photo",x),t.append("description",w.current.firstChild.innerHTML),j({data:t,id:a})},layout:"vertical",onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,_.jsx)(T.Z,{handleMainPhotoChange:function(e){return function(e){g(e[0])}(e)},quill:q,Quill:F,quillRef:w}),(0,_.jsx)(l.Z.Item,{wrapperCol:{offset:0,span:16},children:(0,_.jsx)(o.Z,{loading:b,type:"primary",htmlType:"submit",children:"Send"})})]})]})},w=n(1417),F="Title",k=function(){var e,t=(0,r.UO)().id,n=(0,r.s0)(),i=(0,w.Z)(t,(function(){n("/404")})).data;return null!==i&&void 0!==i&&null!==(e=i.data)&&void 0!==e&&e.data?(0,_.jsx)(a.Z,{breadcrumb:[{url:"/",name:"Home"},{url:"/",name:"My blogs"},{url:"#",name:F}],children:(0,_.jsx)(q,{data2:i})}):(0,_.jsx)(s.Z,{})}}}]);
//# sourceMappingURL=382.3cff9505.chunk.js.map