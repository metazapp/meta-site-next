(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1469:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return n}});let a=r(8229),s=r(8883),l=r(3063),i=a._(r(1193));function n(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=l.Image},4436:(e,t,r)=>{"use strict";r.d(t,{k5:()=>d});var a=r(2115),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(s),i=["attr","size","title"];function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var a,s,l;a=e,s=t,l=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(s))in a?Object.defineProperty(a,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[s]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>a.createElement(h,n({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function h(e){var t=t=>{var r,{attr:s,size:l,title:o}=e,d=function(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,i),h=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==l?a.createElement(l.Consumer,null,e=>t(e)):t(s)}},5094:(e,t,r)=>{Promise.resolve().then(r.bind(r,9581)),Promise.resolve().then(r.bind(r,7053)),Promise.resolve().then(r.t.bind(r,9840,23)),Promise.resolve().then(r.t.bind(r,9324,23))},6766:(e,t,r)=>{"use strict";r.d(t,{default:()=>s.a});var a=r(1469),s=r.n(a)},7053:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(5155),s=r(2115),l=r(6874),i=r.n(l),n=r(8999),o=r(4742),c=r(6766);let d=()=>{let[e,t]=(0,s.useState)(!1),[r,l]=(0,s.useState)(!1),d=(0,n.usePathname)();(0,s.useEffect)(()=>{let e=()=>{t(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let h=[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/products",label:"Products"},{href:"/blog",label:"Blog"},{href:"/career",label:"Careers"}];return(0,a.jsx)("header",{className:"fixed top-0 w-full z-[100] transition-all duration-300 ".concat(e?"bg-black/10 backdrop-blur-sm py-2":"bg-white shadow-md py-2"),children:(0,a.jsxs)("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[(0,a.jsx)(i(),{href:"/",className:"relative z-10",children:(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(c.default,{src:"/Metazapp-Logo.png",alt:"Metazapp Logo",width:150,height:40,priority:!0,className:"object-contain"})})}),(0,a.jsxs)("nav",{className:"hidden md:flex items-center space-x-8",children:[(0,a.jsx)("ul",{className:"flex space-x-8",children:h.map(t=>(0,a.jsx)("li",{children:(0,a.jsxs)(i(),{href:t.href,className:"relative text-sm font-medium transition-colors duration-300 hover:text-primary ".concat(d===t.href?"text-primary":e?"text-gray-800":"text-black"),children:[t.label,d===t.href&&(0,a.jsx)("span",{className:"absolute -bottom-1 left-0 w-full h-0.5 bg-primary"})]})},t.href))}),(0,a.jsx)(i(),{href:"/contact",className:"inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors duration-300",children:"Contact Us"})]}),(0,a.jsx)("button",{onClick:()=>l(!r),className:"md:hidden relative z-10 focus:outline-none","aria-label":"Toggle mobile menu",children:(0,a.jsxs)("div",{className:"w-6 flex flex-col items-end justify-center gap-1.5",children:[(0,a.jsx)("span",{className:"block h-0.5 rounded transition-all duration-300 ".concat(r?"w-6 -rotate-45 translate-y-1 bg-gray-800":e?"w-6 bg-gray-800":"w-6 bg-white")}),(0,a.jsx)("span",{className:"block h-0.5 rounded transition-all duration-300 ".concat(r?"w-6 opacity-0":e?"w-4 bg-gray-800":"w-4 bg-white")}),(0,a.jsx)("span",{className:"block h-0.5 rounded transition-all duration-300 ".concat(r?"w-6 rotate-45 -translate-y-1 bg-gray-800":e?"w-5 bg-gray-800":"w-5 bg-white")})]})}),r&&(0,a.jsx)(o.P.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"absolute top-0 left-0 right-0 bg-white shadow-lg py-20 px-6 z-0",children:(0,a.jsxs)("ul",{className:"flex flex-col space-y-4",children:[h.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:e.href,className:"block py-2 text-gray-800 text-lg font-medium hover:text-primary transition-colors duration-300 ".concat(d===e.href?"text-primary":""),onClick:()=>l(!1),children:e.label})},e.href)),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/contact",className:"block py-2 px-4 bg-primary text-white rounded-md text-center hover:bg-primary-dark transition-colors duration-300",onClick:()=>l(!1),children:"Contact Us"})})]})})]})})}},9324:()=>{},9581:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(5155),s=r(2115),l=r(6874),i=r.n(l),n=r(351);let o=()=>{let[e,t]=(0,s.useState)("");return(0,a.jsx)("footer",{className:"bg-gray-900 text-white pt-16 pb-8",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-4 gradient-text",children:"Metazapp"}),(0,a.jsx)("p",{className:"text-gray-400 mb-4",children:"Innovative software solutions for GenZ, students, and professionals."}),(0,a.jsxs)("div",{className:"flex space-x-4",children:[(0,a.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors duration-300","aria-label":"Facebook",children:(0,a.jsx)(n.spH,{size:20})}),(0,a.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors duration-300","aria-label":"Twitter",children:(0,a.jsx)(n.TC4,{size:20})}),(0,a.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors duration-300","aria-label":"Instagram",children:(0,a.jsx)(n.eCe,{size:20})}),(0,a.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors duration-300","aria-label":"LinkedIn",children:(0,a.jsx)(n.Wjy,{size:20})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Quick Links"}),(0,a.jsxs)("ul",{className:"space-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/services",className:"text-gray-400 hover:text-white transition-colors duration-300",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/products",className:"text-gray-400 hover:text-white transition-colors duration-300",children:"Products"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/blog",className:"text-gray-400 hover:text-white transition-colors duration-300",children:"Blog"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/career",className:"text-gray-400 hover:text-white transition-colors duration-300",children:"Careers"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/contact",className:"text-gray-400 hover:text-white transition-colors duration-300",children:"Contact"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Contact"}),(0,a.jsxs)("ul",{className:"space-y-3",children:[(0,a.jsxs)("li",{className:"flex items-start",children:[(0,a.jsx)(n.HzC,{className:"text-primary mr-3 mt-1",size:18}),(0,a.jsx)("span",{className:"text-gray-400",children:"No.17 First Floor, Coimbatore - 641047"})]}),(0,a.jsxs)("li",{className:"flex items-center",children:[(0,a.jsx)(n.QFc,{className:"text-primary mr-3",size:18}),(0,a.jsx)("a",{href:"tel:+919003414321",className:"text-gray-400 hover:text-white transition-colors duration-300",children:"+91 90034 14321"})]}),(0,a.jsxs)("li",{className:"flex items-center",children:[(0,a.jsx)(n.pHD,{className:"text-primary mr-3",size:18}),(0,a.jsx)("a",{href:"mailto:hello@metazapp.com",className:"text-gray-400 hover:text-white transition-colors duration-300",children:"hello@metazapp.com"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Newsletter"}),(0,a.jsx)("p",{className:"text-gray-400 mb-4",children:"Subscribe to our newsletter for the latest updates."}),(0,a.jsx)("form",{onSubmit:r=>{r.preventDefault(),console.log("Newsletter signup:",e),t("")},className:"flex flex-col",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"email",value:e,onChange:e=>t(e.target.value),placeholder:"Your email",required:!0,className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"}),(0,a.jsx)("button",{type:"submit",className:"absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r hover:bg-primary-dark transition-colors duration-300",children:"Subscribe"})]})})]})]}),(0,a.jsx)("div",{className:"border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm",children:(0,a.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Metazapp. All rights reserved."]})})]})})}},9840:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[385,844,874,63,742,441,684,358],()=>t(5094)),_N_E=e.O()}]);