(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(4148)}])},4148:function(e,t,n){"use strict";n.r(t),n.d(t,{Div_ac2a89ea84667d600a059f034bd91dfe:function(){return Div_ac2a89ea84667d600a059f034bd91dfe},Fragment_28ce67fed844672bd39035b8c5472eaa:function(){return Fragment_28ce67fed844672bd39035b8c5472eaa},Fragment_cf53a535ae2e610a113dd361eb6ac95b:function(){return Fragment_cf53a535ae2e610a113dd361eb6ac95b},Toaster_6e90e5e87a1cac8c96c683214079bef3:function(){return Toaster_6e90e5e87a1cac8c96c683214079bef3},default:function(){return Component}});var a=n(2729),r=n(1965),c=n(7294),o=n(687),i=n(6608),s=n(9894),d=n(917),u=n(4712),f=n(3954),l=n(4298),h=n.n(l),m=n(2918),g=n.n(m),_=n(1163);let useClientSideRouting=()=>{let[e,t]=(0,c.useState)(!1),n=(0,c.useRef)(!1),a=(0,_.useRouter)();return(0,c.useEffect)(()=>{a.isReady&&!n.current&&(n.current=!0,a.replace({pathname:window.location.pathname,query:window.location.search.slice(1)}).then(()=>{"/404"===a.pathname&&t(!0)}).catch(e=>{t(!0)}))},[a.isReady]),e};var b=n(9008),p=n.n(b);function _templateObject(){let e=(0,a._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}let w=(0,d.F4)(_templateObject());function Fragment_28ce67fed844672bd39035b8c5472eaa(){let[e,t]=(0,c.useContext)(o.DR);return(0,r.tZ)(c.Fragment,{children:(0,i.oA)(t.length>0)?(0,r.tZ)(c.Fragment,{children:(0,r.tZ)(h(),{strategy:"afterInteractive",children:'\nconst thisUrl = new URL(window.location.href);\nconst params = new URLSearchParams(thisUrl.search)\n\nfunction doRedirect(url) {\n    if (!window.sessionStorage.getItem("authenticated_github_codespaces")) {\n        const a = document.createElement("a");\n        if (params.has("redirect_to")) {\n            a.href = params.get("redirect_to")\n        } else if (!window.location.href.startsWith(url)) {\n            a.href = url + `?redirect_to='.concat(window.location.href,'`\n        } else {\n            return\n        }\n        a.hidden = true;\n        a.click();\n        a.remove();\n        window.sessionStorage.setItem("authenticated_github_codespaces", "true")\n    }\n}\ndoRedirect("https://rxh-prod-thisasecretsummarizer.fly.dev/auth-codespace")\n')})}):(0,r.tZ)(c.Fragment,{})})}function Toaster_6e90e5e87a1cac8c96c683214079bef3(){let{resolvedColorMode:e}=(0,c.useContext)(o.kc);i.xL.__toast=u.A;let[t,n]=(0,c.useContext)(o.DR),a={description:"Check if server is reachable at ".concat((0,i.LH)(f.Ks).href),closeButton:!0,duration:12e4,id:"websocket-error"},[s,d]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{n.length>=2?s||u.A.error("Cannot connect to server: ".concat(n.length>0?n[n.length-1].message:"","."),{...a,onDismiss:()=>d(!0)}):(u.A.dismiss("websocket-error"),d(!1))},[n]),(0,r.tZ)(u.x,{closeButton:!1,expand:!0,position:"bottom-right",richColors:!0,theme:e})}function Fragment_cf53a535ae2e610a113dd361eb6ac95b(){let[e,t]=(0,c.useContext)(o.DR);return(0,r.tZ)(c.Fragment,{children:(0,i.oA)(t.length>0)?(0,r.tZ)(c.Fragment,{children:(0,r.tZ)(s.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"33px",right:"33px",animation:"".concat(w," 1s infinite")},size:32})}):(0,r.tZ)(c.Fragment,{})})}function Div_ac2a89ea84667d600a059f034bd91dfe(){let[e,t]=(0,c.useContext)(o.DR);return(0,r.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},title:"Connection Error: ".concat(t.length>0?t[t.length-1].message:""),children:(0,r.tZ)(Fragment_cf53a535ae2e610a113dd361eb6ac95b,{})})}function Component(){let e=useClientSideRouting();return(0,r.BX)(c.Fragment,{children:[(0,r.BX)(c.Fragment,{children:[(0,r.tZ)(Div_ac2a89ea84667d600a059f034bd91dfe,{}),(0,r.tZ)(Toaster_6e90e5e87a1cac8c96c683214079bef3,{}),(0,r.tZ)(Fragment_28ce67fed844672bd39035b8c5472eaa,{})]}),(0,r.tZ)(c.Fragment,{children:(0,i.oA)(e)?(0,r.tZ)(c.Fragment,{children:(0,r.tZ)(g(),{statusCode:404})}):(0,r.tZ)(c.Fragment,{})}),(0,r.BX)(p(),{children:[(0,r.tZ)("title",{children:"404 - Not Found"}),(0,r.tZ)("meta",{content:"The page was not found",name:"description"}),(0,r.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},2918:function(e,t,n){e.exports=n(6908)}},function(e){e.O(0,[264,774,888,179],function(){return e(e.s=394)}),_N_E=e.O()}]);