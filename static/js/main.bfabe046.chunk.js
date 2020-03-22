(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{15:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/resume_cohen.121b3099.pdf"},35:function(e,t,a){e.exports=a(55)},41:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/profile_pic_resize.a09a1c38.png"},43:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(40),a(14)),s=a(13),i=a(32),m=a(10),u=(a(41),a(27)),h=a.n(u),d=a(28),p=(a(15),a(42));function E(e,t){return r.a.createElement("div",{className:"aboutMeSection"},r.a.createElement("p",{className:"aboutMeSectionDescription"},r.a.createElement(d.a,{src:e,roundedCircle:!0}),r.a.createElement("span",null,t)),r.a.createElement("br",null))}var f=function(){return r.a.createElement("div",{className:"Page"},r.a.createElement("h1",null,"About Me"),E(p,"I am a junior at Purdue University, majoring in computer science and minoring in entrepreneurship. My concentrations include systems, security, and databases."),E("https://2jsqmx3urpic3hm7hj2c4vvi-wpengine.netdna-ssl.com/files/purdue-logo.png"," This semester I am doing undergraduate research under Russell Shirley, working on building a system for streaming video over UDP, which will be used for benchmarking different adaptive streaming algorithms."),E("https://nmgprod.s3.amazonaws.com/media/editorial/2019/06/17/discover.png","Last summer I interned Discover Financial Services, where I helped build backend systems that handeled highly sensitive data, as well as updating old API's to abide by modern security standards."),r.a.createElement("p",{className:"aboutMeSectionDescription"},"For the future, I am look to work on low level systems and networks, and eventually return to school to complete a masters degree in Computer Science."))},g=a(30),v="Completed",b="In Progress";function w(e,t,a){this.courseId=e,this.title=t,this.status=a}function C(e){return e.status===v?"#33ff55":"#f5e617"}var y=[new w("CS18200","Discrete Math",v),new w("CS24000","Programming in C",v),new w("CS25000","Computer Architecture",v),new w("CS25100","Data Structures and Algorithms",v),new w("CS25200","Systems Programming",v),new w("CS34800","Information Systems",v),new w("CS35400","Operating Systems",v),new w("CS38100","Introduction to the Analysis of Algorithms",v),new w("CS42200","Computer Networks",v),new w("CS35200","Compilers: Principles and Practice",b),new w("CS35500","Introduction to Cryptography",b)].map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.courseId),r.a.createElement("td",null,e.title),r.a.createElement("td",null,r.a.createElement("span",{style:{color:C(e)}},r.a.createElement("b",null,e.status.toUpperCase()))))}));var S=function(){return r.a.createElement("div",{className:"Courses"},r.a.createElement(g.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("th",null,"Course No."),r.a.createElement("th",null,"Course Title"),r.a.createElement("th",null,"Status")),r.a.createElement("tbody",null,y)))};var k=function(){return r.a.createElement("div",{className:"Page"},r.a.createElement("h1",null,"Education"),r.a.createElement("h2",{class:"inline"},"Purdue University"),r.a.createElement("span",{class:"inline",id:"location"},"(West Lafayette, IN)"),r.a.createElement("p",null,"Bachelor of Science: ",r.a.createElement("b",null,"School of Computer Science")),r.a.createElement("p",null,"Expected Graduation Date: ",r.a.createElement("b",null,"May 2021")),r.a.createElement("p",null,"Cumulative GPA: ",r.a.createElement("b",null,"3.76")," "),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(S,null)))};a(43);var N=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",null,"Nathan Cohen"),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"}),r.a.createElement("div",{class:"social-buttons"},r.a.createElement("a",{href:"https://www.linkedin.com/in/nathancohen99/",target:"_blank"},r.a.createElement("i",{class:"fab fa-linkedin-in"})),r.a.createElement("a",{href:"https://twitter.com/nathancohen99",target:"_blank"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement("a",{href:"https://github.com/nathancohen4299",target:"_blank"},r.a.createElement("i",{class:"fab fa-github"}))))};var I=function(){return r.a.createElement("div",{className:"Page"},r.a.createElement("h1",null,"Projects"))},P=a(31);function A(e){return"/personal-website#"+e}var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Nathan Cohen")),r.a.createElement(i.a,null,r.a.createElement("div",{className:"TopNavigationBar"},r.a.createElement(s.a,{bg:"light",variant:"light",stickey:"top"},r.a.createElement(s.a.Brand,{href:A("/")},"Nathan Cohen"),r.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(o.a,{className:"mr-auto"},r.a.createElement(o.a.Link,{href:A("/about-me")},"About Me"),r.a.createElement(o.a.Link,{href:A("/education")},"Education"),r.a.createElement(o.a.Link,{href:h.a},"R\xe9sum\xe9"))))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",component:N,exact:!0}),r.a.createElement(m.a,{path:"/about-me",component:f,exact:!0}),r.a.createElement(m.a,{path:"/education",component:k}),r.a.createElement(m.a,{path:"/projects",component:I}))))};a(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.bfabe046.chunk.js.map