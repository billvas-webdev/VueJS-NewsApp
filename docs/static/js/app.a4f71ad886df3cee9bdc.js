webpackJsonp([0],{0:function(t,e){},"3uD7":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jumbotron"},[s("weather",{attrs:{"api-key":"a1a5357a4bc875aba578cf0eec58ab94",title:"Weather for Seattle, Washington",latitude:"47.671081",longitude:"-122.326071",language:"en",units:"us"}})],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},"5hDV":function(t,e,s){"use strict";function a(t){s("9kQO")}var n=s("pKM5"),r=s("nJ7q"),i=s("VU/8"),c=a,u=i(n.a,r.a,!1,c,"data-v-41e98d90",null);e.a=u.exports},"8bAv":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("WeatherWidget"),t._v(" "),s("SourceSelection",{on:{sourceChanged:t.sourceChanged}}),t._v(" "),s("Newslist",{attrs:{source:t.source}})],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},"9KFG":function(t,e,s){"use strict";var a=s("+cKT"),n=s.n(a),r=s("lyb+");s.n(r);e.a={components:{weather:n.a}}},"9kQO":function(t,e){},BqLK:function(t,e){},M09z:function(t,e,s){"use strict";function a(t){s("PxTq")}var n=s("tnuH"),r=s("vNE5"),i=s("VU/8"),c=a,u=i(n.a,r.a,!1,c,"data-v-0ffa8a22",null);e.a=u.exports},M93x:function(t,e,s){"use strict";function a(t){s("ie0B")}var n=s("xJD8"),r=s("8bAv"),i=s("VU/8"),c=a,u=i(n.a,r.a,!1,c,null,null);e.a=u.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),r=s("ORbq");a.a.use(r.a),new a.a({el:"#app",template:"<App/>",components:{App:n.a}})},PxTq:function(t,e){},"TNm/":function(t,e,s){"use strict";function a(t){s("BqLK")}var n=s("9KFG"),r=s("3uD7"),i=s("VU/8"),c=a,u=i(n.a,r.a,!1,c,"data-v-77d54777",null);e.a=u.exports},ie0B:function(t,e){},"lyb+":function(t,e){},nJ7q:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sourceselection"},[s("div",{staticClass:"jumbotron"},[t._m(0),t._v(" "),s("h4",[t._v("Select News Source")]),t._v(" "),s("select",{staticClass:"form-control",on:{change:t.sourceChanged}},t._l(t.sources,function(e){return s("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})),t._v(" "),t.source?s("div",[s("h6",[t._v(t._s(t.source.description))]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:t.source.url,target:"blank"}},[t._v("Go To "+t._s(t.source.name)+" Website")])]):t._e()])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("span",{staticClass:"glyphicon glyphicon-list-alt"}),t._v(" News List")])}],r={render:a,staticRenderFns:n};e.a=r},pKM5:function(t,e,s){"use strict";e.a={name:"sourceselection",data:function(){return{sources:[],source:""}},methods:{sourceChanged:function(t){for(var e=0;e<this.sources.length;e++)this.sources[e].id==t.target.value&&(this.source=this.sources[e]);this.$emit("sourceChanged",t.target.value)}},created:function(){var t=this;this.$http.get("https://newsapi.org/v1/sources?language=en").then(function(e){t.sources=e.data.sources})}}},tnuH:function(t,e,s){"use strict";e.a={name:"newslist",props:["source"],data:function(){return{articles:[]}},methods:{updateSource:function(t){var e=this;this.$http.get("https://newsapi.org/v1/articles?source="+t+"&apiKey=30fdd9c8493742eebe75a786fc36f1bd").then(function(t){e.articles=t.data.articles})}},created:function(){this.updateSource(this.source)},watch:{source:function(t){this.updateSource(t)}}}},vNE5:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newslist"},[s("div",{staticClass:"flex-container"},[s("ul",{staticClass:"media-list"},t._l(t.articles,function(e){return s("li",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("a",{attrs:{href:e.url,target:"_blank"}},[s("img",{staticClass:"media-object",attrs:{src:e.urlToImage}})])]),t._v(" "),s("div",{staticClass:"media-body"},[s("h4",{staticClass:"media-heading"},[s("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),s("h5",[s("i",[t._v("by "+t._s(e.author))])]),t._v(" "),s("p",[t._v(t._s(e.description))])])])}))])])},n=[],r={render:a,staticRenderFns:n};e.a=r},xJD8:function(t,e,s){"use strict";var a=s("TNm/"),n=s("5hDV"),r=s("M09z");e.a={name:"app",components:{WeatherWidget:a.a,SourceSelection:n.a,Newslist:r.a},data:function(){return{source:""}},methods:{sourceChanged:function(t){this.source=t}}}}},["NHnr"]);
//# sourceMappingURL=app.a4f71ad886df3cee9bdc.js.map