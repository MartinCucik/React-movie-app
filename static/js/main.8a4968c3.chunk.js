(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n.p+"static/media/logo2.d05a4d21.jpg"},51:function(e,t,n){e.exports=n(73)},59:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(44),i=n.n(c),o=(n(59),n(4)),l=(n(61),n(63),n(45)),s=n.n(l),u=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-light bg-light"},r.a.createElement("a",{class:"navbar-brand",href:"#"},r.a.createElement("img",{src:s.a,width:"120",height:"120",class:"d-inline-block align-top",alt:""})),r.a.createElement("form",{class:"form-inline"},r.a.createElement("input",{class:"form-control mr-sm-2",value:e.value,onChange:function(t){return e.SetSearchValue(t.target.value)},placeholder:"Search movie","aria-label":"Search"}),r.a.createElement("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},m=(n(65),n(34)),d=n(22),p=n(33),f=n(27),g=function(e){var t=e.id,n=e.title,a=e.overview,c=e.media_type,i=e.genre_ids,l=e.name,s=e.poster_path,u=e.vote_average,g=e.selectMovie,h=e.updateSelectedGenre,v=(e.selectedGenre,r.a.useState(!1)),b=Object(o.a)(v,2),y=b[0],E=b[1],S=Object(p.useSpring)({from:{opacity:"0.1"},to:{opacity:"1"},config:{duration:"4500"}});function k(e){return e.map(function(e){switch(e){case 12:return"Adventure";case 28:return"Action";case 16:return"Animation";case 35:return"Comedy";case 80:return"Crime";case 99:return"Documentary";case 18:return"Drama";case 14:return"Fantasy";case 36:return"History";case 27:return"Horror";case 9648:return"Mystery";case 10749:return"Romance";case 878:return"Science Fiction";case 53:return"Thriller";case 10752:return"War";case 37:return"Western";case 10759:return"Action & Adventure";case 16:return"Animation";case 35:return"Comedy";case 80:return"Crime";case 99:return"Documentary";case 18:return"Drama";case 10751:return"Family";case 10762:return"Kids";case 10763:return"News";case 10764:return"Reality";case 10765:return"Sci-Fi&Fantasy";case 10766:return"Soap";case 10767:return"Talk";case 10768:return"War&Politics"}})}"tv"===c&&(n=l);var w=function(e){return e.map(function(e,t){return r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){h(e)}},t>0&&",",e)})};return r.a.createElement("div",{className:"reacte"},r.a.createElement(function(e){return r.a.createElement(f.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a.Header,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(f.a.Title,{style:{fontSize:"2rem"},id:"contained-modal-title-vcenter"},n)),r.a.createElement(f.a.Body,{style:{display:"flex",gap:"20px",backgroundColor:"#dee5ec",flexDirection:"row"}},r.a.createElement(d.a.Img,{variant:"top",style:{width:"20rem"},src:"https://image.tmdb.org/t/p/w500"+s}),r.a.createElement("div",{class:"plan-container",style:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.a.createElement("p",null,a),r.a.createElement("div",null," ",w(k(i))))),r.a.createElement(f.a.Footer,null,r.a.createElement(m.a,{onClick:e.onHide},"Close")))},{show:y,onHide:function(){return E(!1)}}),r.a.createElement(p.animated.div,{className:"hehe",style:S}," ",r.a.createElement(d.a,{className:"card m-2 h-100",style:{width:"18rem"},onClick:function(){return g(t)}},r.a.createElement(d.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500"+s}),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,n),r.a.createElement(d.a.Text,null,r.a.createElement("div",null,r.a.createElement("span",{style:{fontSize:"15px"}},w(k(i)))),r.a.createElement("div",null,"User rating :",r.a.createElement("div",{id:"rating",style:{borderRadius:"50%",textAlign:"center"}},(Math.round(10*u)/10).toFixed(1))),r.a.createElement("div",{class:"col-md-12 text-center"},r.a.createElement(m.a,{variant:"flat",onClick:function(){return E(!0)}},"More info")))))))},h=(n(70),n(26));var v=function(e){var t=e.popular,n=e.upcoming,a=e.bestranked;return r.a.createElement(h.a,{horizontal:!0,className:"menu"},r.a.createElement(h.a.Item,{onClick:t},"Popular"),r.a.createElement(h.a.Item,{onClick:n},"Upcoming"),r.a.createElement(h.a.Item,{onClick:a},"Best ranked"))};var b=function(){var e=r.a.useState([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=r.a.useState(),i=Object(o.a)(c,2),l=i[0],s=i[1],m=r.a.useState(),d=Object(o.a)(m,2),p=d[0],f=d[1],h=r.a.useState("s"),b=Object(o.a)(h,2),y=b[0],E=b[1],S=r.a.useState(),k=Object(o.a)(S,2),w=k[0],C=(k[1],"https://api.themoviedb.org/3/trending/all/week?api_key=895828b8903ed3292aba730835d1e40e"),j="https://api.themoviedb.org/3/movie/top_rated?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=1",x="https://api.themoviedb.org/3/movie/upcoming?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=1";return"https://api.themoviedb.org/3/movie/".concat(w,"/similar?api_key=<<api_key>>&language=en-US&page=1"),r.a.useEffect(function(){console.log(y),console.log(p),console.log(p),"undefined"!==typeof p&&null!=p&&fetch("https://api.themoviedb.org/3/movie/".concat(p,"/similar?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&page=1")).then(function(e){return e.json()}).then(function(e){a(e.results)})},[y]),r.a.useEffect(function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=895828b8903ed3292aba730835d1e40e&language=en-US&query=".concat(l,"&page=1&include_adult=false")).then(function(e){return e.json()}).then(function(e){a(e.results)})},[l]),r.a.useEffect(function(){fetch("https://api.themoviedb.org/3/trending/all/week?api_key=895828b8903ed3292aba730835d1e40e").then(function(e){return e.json()}).then(function(e){a(e.results)})},[]),r.a.createElement("div",null,r.a.createElement(u,{searchValue:l,SetSearchValue:s}),r.a.createElement(v,{popular:function(){fetch(C).then(function(e){return e.json()}).then(function(e){console.log(e),a(e.results)})},bestranked:function(){fetch(j).then(function(e){return e.json()}).then(function(e){console.log(e),a(e.results)})},upcoming:function(){fetch(x).then(function(e){return e.json()}).then(function(e){console.log(e),a(e.results)})}}),r.a.createElement("div",{className:"container1"},r.a.createElement("div",{className:"movie"},n.map(function(e){return r.a.createElement(g,Object.assign({key:e.id},e,{selectMovie:f,updateSelectedGenre:E}))}))))},y=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,75)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(b,null)),y()}},[[51,3,2]]]);
//# sourceMappingURL=main.8a4968c3.chunk.js.map