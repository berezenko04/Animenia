import{u as f,a as l,i as d,r as n,b as u,j as e,c as _,H as h,S as v,L as r,s as A}from"./index-67d703dc.js";import{A as i,S as N,a as m}from"./index-296aca55.js";const S="_App_1tms5_1",b="_page_1tms5_31",w="_page__wrapper_1tms5_37",L="_page__form_1tms5_48",x="_page__form__main_1tms5_61",y="_page__form__main__fields_1tms5_74",j="_page__form__main__fields__forgot_1tms5_80",k="_page__form__main__account_1tms5_110",D="_page__form__buttons_1tms5_126",a={App:S,page:b,page__wrapper:w,page__form:L,page__form__main:x,page__form__main__fields:y,page__form__main__fields__forgot:j,page__form__main__account:k,page__form__buttons:D},H=()=>{const c=f(),o=l(d),t=n.useRef(!1),p=u();n.useEffect(()=>{if(t.current){const s=JSON.stringify(o);localStorage.setItem("auth",s)}t.current=!0},[o]);const g=s=>{s.preventDefault(),c(A(!0)),p("/Animenia/")};return e("div",{className:a.page,children:[_(h,{}),_("div",{className:"container",children:_("div",{className:a.page__wrapper,children:_("div",{className:a.page__form,children:e("form",{onSubmit:s=>g(s),children:[e("div",{className:a.page__form__main,children:[_("h1",{children:"Login"}),e("div",{className:a.page__form__main__fields,children:[_(i,{type:"text",placeholder:"Login",icon:_(v,{})}),e("div",{className:a.page__form__main__fields__forgot,children:[_(i,{type:"password",placeholder:"Password",icon:_(N,{})}),_(r,{to:"",children:"Forgot password"})]})]}),_("input",{type:"submit",value:"Login"}),e("div",{className:a.page__form__main__account,children:[_("p",{children:"Don't have an account?"}),_(r,{to:"/Animenia/register",children:"Register"})]})]}),e("div",{className:a.page__form__buttons,children:[_(m,{variation:"facebook"}),_(m,{variation:"google"})]})]})})})})]})};export{H as default};
