import{u as f,a as l,i as d,r as t,b as u,j as e,c as _,H as h,S as v,L as r,s as j}from"./index-b46f2d0f.js";import{A as i,S as A,a as c}from"./index-a6f153ba.js";const N="_App_n7v2j_1",S="_page_n7v2j_31",b="_page__wrapper_n7v2j_37",w="_page__form_n7v2j_48",L="_page__form__main_n7v2j_61",x="_page__form__main__fields_n7v2j_74",y="_page__form__main__fields__forgot_n7v2j_80",k="_page__form__main__account_n7v2j_107",D="_page__form__buttons_n7v2j_123",a={App:N,page:S,page__wrapper:b,page__form:w,page__form__main:L,page__form__main__fields:x,page__form__main__fields__forgot:y,page__form__main__account:k,page__form__buttons:D},H=()=>{const p=f(),n=l(d),s=t.useRef(!1),m=u();t.useEffect(()=>{if(s.current){const o=JSON.stringify(n);localStorage.setItem("auth",o)}s.current=!0},[n]);const g=o=>{o.preventDefault(),p(j(!0)),m("/Animenia/")};return e("div",{className:a.page,children:[_(h,{}),_("div",{className:"container",children:_("div",{className:a.page__wrapper,children:_("div",{className:a.page__form,children:e("form",{onSubmit:o=>g(o),children:[e("div",{className:a.page__form__main,children:[_("h1",{children:"Login"}),e("div",{className:a.page__form__main__fields,children:[_(i,{type:"text",placeholder:"Login",icon:_(v,{})}),e("div",{className:a.page__form__main__fields__forgot,children:[_(i,{type:"password",placeholder:"Password",icon:_(A,{})}),_(r,{to:"",children:"Forgot password"})]})]}),_("input",{type:"submit",value:"Login"}),e("div",{className:a.page__form__main__account,children:[_("p",{children:"Don't have an account?"}),_(r,{to:"/Animenia/register",children:"Register"})]})]}),e("div",{className:a.page__form__buttons,children:[_(c,{variation:"facebook"}),_(c,{variation:"google"})]})]})})})})]})};export{H as default};