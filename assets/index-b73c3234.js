import{r as te,p as de,q as fe,u as ve,c as O,F as me,v as be,a as re,w as he,x as Ce,y as ye,z as Pe,j as ie,k as ke,A as xe,B as Ne,C as Le}from"./index-70e6d325.js";const _e="_page_1lj0n_1",Ee="_all__content_1lj0n_6",Oe="_all__content__items_1lj0n_11",ee={page:_e,all__content:Ee,all__content__items:Oe};var se={},Re={get exports(){return se},set exports(x){se=x}};(function(x,Y){(function(R,F){x.exports=F(te)})(de,R=>(()=>{var F={703:(u,g,C)=>{var t=C(414);function M(){}function K(){}K.resetWarningCache=M,u.exports=function(){function m(oe,w,G,U,le,z){if(z!==t){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}}function N(){return m}m.isRequired=m;var q={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:N,element:m,elementType:m,instanceOf:N,node:m,objectOf:N,oneOf:N,oneOfType:N,shape:N,exact:N,checkPropTypes:K,resetWarningCache:M};return q.PropTypes=q,q}},697:(u,g,C)=>{u.exports=C(703)()},414:u=>{u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:u=>{u.exports=R}},J={};function v(u){var g=J[u];if(g!==void 0)return g.exports;var C=J[u]={exports:{}};return F[u](C,C.exports,v),C.exports}v.n=u=>{var g=u&&u.__esModule?()=>u.default:()=>u;return v.d(g,{a:g}),g},v.d=(u,g)=>{for(var C in g)v.o(g,C)&&!v.o(u,C)&&Object.defineProperty(u,C,{enumerable:!0,get:g[C]})},v.o=(u,g)=>Object.prototype.hasOwnProperty.call(u,g),v.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var ae={};return(()=>{v.r(ae),v.d(ae,{default:()=>ce});var u=v(98),g=v.n(u),C=v(697),t=v.n(C);function M(){return M=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},M.apply(this,arguments)}var K=function(n){var i=n.pageClassName,o=n.pageLinkClassName,l=n.page,j=n.selected,Z=n.activeClassName,L=n.activeLinkClassName,a=n.getEventListener,e=n.pageSelectedHandler,p=n.href,r=n.extraAriaContext,s=n.pageLabelBuilder,c=n.rel,f=n.ariaLabel||"Page "+l+(r?" "+r:""),b=null;return j&&(b="page",f=n.ariaLabel||"Page "+l+" is your current page",i=i!==void 0?i+" "+Z:Z,o!==void 0?L!==void 0&&(o=o+" "+L):o=L),g().createElement("li",{className:i},g().createElement("a",M({rel:c,role:p?void 0:"button",className:o,href:p,tabIndex:j?"-1":"0","aria-label":f,"aria-current":b,onKeyPress:e},a(e)),s(l)))};K.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const m=K;function N(){return N=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},N.apply(this,arguments)}var q=function(n){var i=n.breakLabel,o=n.breakClassName,l=n.breakLinkClassName,j=n.breakHandler,Z=n.getEventListener,L=o||"break";return g().createElement("li",{className:L},g().createElement("a",N({className:l,role:"button",tabIndex:"0",onKeyPress:j},Z(j)),i))};q.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const oe=q;function w(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n??i}function G(n){return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},G(n)}function U(){return U=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},U.apply(this,arguments)}function le(n,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function z(n,i){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},z(n,i)}function $(n,i){if(i&&(G(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(n)}function P(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Q(n){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Q(n)}function y(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var ne=function(n){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&z(a,e)})(L,n);var i,o,l,j,Z=(l=L,j=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=Q(l);if(j){var p=Q(this).constructor;a=Reflect.construct(e,arguments,p)}else a=e.apply(this,arguments);return $(this,a)});function L(a){var e,p;return function(r,s){if(!(r instanceof s))throw new TypeError("Cannot call a class as a function")}(this,L),y(P(e=Z.call(this,a)),"handlePreviousPage",function(r){var s=e.state.selected;e.handleClick(r,null,s>0?s-1:void 0,{isPrevious:!0})}),y(P(e),"handleNextPage",function(r){var s=e.state.selected,c=e.props.pageCount;e.handleClick(r,null,s<c-1?s+1:void 0,{isNext:!0})}),y(P(e),"handlePageSelected",function(r,s){if(e.state.selected===r)return e.callActiveCallback(r),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,r)}),y(P(e),"handlePageChange",function(r){e.state.selected!==r&&(e.setState({selected:r}),e.callCallback(r))}),y(P(e),"getEventListener",function(r){return y({},e.props.eventListener,r)}),y(P(e),"handleClick",function(r,s,c){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},b=f.isPrevious,E=b!==void 0&&b,V=f.isNext,W=V!==void 0&&V,k=f.isBreak,D=k!==void 0&&k,A=f.isActive,S=A!==void 0&&A;r.preventDefault?r.preventDefault():r.returnValue=!1;var h=e.state.selected,B=e.props.onClick,_=c;if(B){var d=B({index:s,selected:h,nextSelectedPage:c,event:r,isPrevious:E,isNext:W,isBreak:D,isActive:S});if(d===!1)return;Number.isInteger(d)&&(_=d)}_!==void 0&&e.handlePageChange(_)}),y(P(e),"handleBreakClick",function(r,s){var c=e.state.selected;e.handleClick(s,r,c<r?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),y(P(e),"callCallback",function(r){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:r})}),y(P(e),"callActiveCallback",function(r){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:r})}),y(P(e),"getElementPageRel",function(r){var s=e.state.selected,c=e.props,f=c.nextPageRel,b=c.prevPageRel,E=c.selectedPageRel;return s-1===r?b:s===r?E:s+1===r?f:void 0}),y(P(e),"pagination",function(){var r=[],s=e.props,c=s.pageRangeDisplayed,f=s.pageCount,b=s.marginPagesDisplayed,E=s.breakLabel,V=s.breakClassName,W=s.breakLinkClassName,k=e.state.selected;if(f<=c)for(var D=0;D<f;D++)r.push(e.getPageElement(D));else{var A=c/2,S=c-A;k>f-c/2?A=c-(S=f-k):k<c/2&&(S=c-(A=k));var h,B,_=function(T){return e.getPageElement(T)},d=[];for(h=0;h<f;h++){var I=h+1;I<=b||I>f-b||h>=k-A&&h<=k+(k===0&&c>1?S-1:S)?d.push({type:"page",index:h,display:_(h)}):E&&d.length>0&&d[d.length-1].display!==B&&(c>0||b>0)&&(B=g().createElement(oe,{key:h,breakLabel:E,breakClassName:V,breakLinkClassName:W,breakHandler:e.handleBreakClick.bind(null,h),getEventListener:e.getEventListener}),d.push({type:"break",index:h,display:B}))}d.forEach(function(T,H){var X=T;T.type==="break"&&d[H-1]&&d[H-1].type==="page"&&d[H+1]&&d[H+1].type==="page"&&d[H+1].index-d[H-1].index<=2&&(X={type:"page",index:T.index,display:_(T.index)}),r.push(X.display)})}return r}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),p=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:p},e}return i=L,(o=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,p=a.disableInitialCallback,r=a.extraAriaContext,s=a.pageCount,c=a.forcePage;e===void 0||p||this.callCallback(e),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),c!==void 0&&c>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(c," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,p=e.pageCount,r=a+e.pageRangeDisplayed;return r>=p?p-1:r}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,p=e.hrefBuilder,r=e.pageCount,s=e.hrefAllControls;if(p)return s||a>=0&&a<r?p(a+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var p=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(p=p+" "+this.props.extraAriaContext),p}}},{key:"getPageElement",value:function(a){var e=this.state.selected,p=this.props,r=p.pageClassName,s=p.pageLinkClassName,c=p.activeClassName,f=p.activeLinkClassName,b=p.extraAriaContext,E=p.pageLabelBuilder;return g().createElement(m,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:r,pageLinkClassName:s,activeClassName:c,activeLinkClassName:f,extraAriaContext:b,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:E,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,p=e.disabledClassName,r=e.disabledLinkClassName,s=e.pageCount,c=e.className,f=e.containerClassName,b=e.previousLabel,E=e.previousClassName,V=e.previousLinkClassName,W=e.previousAriaLabel,k=e.prevRel,D=e.nextLabel,A=e.nextClassName,S=e.nextLinkClassName,h=e.nextAriaLabel,B=e.nextRel,_=this.state.selected,d=_===0,I=_===s-1,T="".concat(w(E)).concat(d?" ".concat(w(p)):""),H="".concat(w(A)).concat(I?" ".concat(w(p)):""),X="".concat(w(V)).concat(d?" ".concat(w(r)):""),pe="".concat(w(S)).concat(I?" ".concat(w(r)):""),ue=d?"true":"false",ge=I?"true":"false";return g().createElement("ul",{className:c||f,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:T},g().createElement("a",U({className:X,href:this.getElementHref(_-1),tabIndex:d?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ue,"aria-label":W,rel:k},this.getEventListener(this.handlePreviousPage)),b)),this.pagination(),g().createElement("li",{className:H},g().createElement("a",U({className:pe,href:this.getElementHref(_+1),tabIndex:I?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ge,"aria-label":h,rel:B},this.getEventListener(this.handleNextPage)),D)))}}])&&le(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),L}(u.Component);y(ne,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),y(ne,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(n){return n},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ce=ne})(),ae})())})(Re);const we=fe(se),Ae="_App_ziwf4_1",je="_paginate_ziwf4_31",Se={App:Ae,paginate:je},Be=()=>{const x=ve(),Y=R=>{x(be(R+1)),window.scrollTo(0,0)};return O(me,{children:O(we,{className:Se.paginate,breakLabel:"...",nextLabel:">",onPageChange:R=>Y(R.selected),pageRangeDisplayed:4,pageCount:5,previousLabel:"<"})})},Te=x=>te.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...x},te.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 18C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H7C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18H21ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H21ZM21 4C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H7C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4H21ZM2 4H4V6H2V4ZM2 11H4V13H2V11ZM2 18H4V20H2V18Z",fill:"black"})),He=x=>x.pagination.pageNumber,Ie=()=>{const x=re(he),Y=Ce(),R=re(He),F=re(ye);return te.useEffect(()=>{Y(Pe({sort:"description",order:"desc",page:R,limit:4}))},[R]),O("div",{className:"container",children:ie("div",{className:ee.page,children:[ie("section",{className:ee.all,children:[O(ke,{title:"All Anime",icon:O(Te,{})}),ie("div",{className:ee.all__content,children:[O("div",{className:ee.all__content__items,children:F==="loading"?[...Array(4)].map((J,v)=>O(xe,{},v)):x.map((J,v)=>O(Ne,{...J},v))}),O(Be,{})]})]}),O(Le,{})]})})};export{Ie as default};
