import{u as l,a as f,i as d,r as t,b as u,j as e,c as _,H as h,S as v,L as r,s as A}from"./index-de5fe095.js";import{A as i,S as N,a as p}from"./index-715d89ab.js";const S="_App_o6vp5_1",b="_page_o6vp5_31",w="_page__wrapper_o6vp5_37",L="_page__form_o6vp5_43",x="_page__form__main_o6vp5_51",y="_page__form__main__fields_o6vp5_64",j="_page__form__main__fields__forgot_o6vp5_70",k="_page__form__main__account_o6vp5_97",D="_page__form__buttons_o6vp5_113",a={App:S,page:b,page__wrapper:w,page__form:L,page__form__main:x,page__form__main__fields:y,page__form__main__fields__forgot:j,page__form__main__account:k,page__form__buttons:D},H=()=>{const c=l(),s=f(d),n=t.useRef(!1),m=u();console.log(s),t.useEffect(()=>{if(n.current){const o=JSON.stringify(s);localStorage.setItem("auth",o)}n.current=!0},[s]);const g=o=>{o.preventDefault(),c(A(!0)),m("/Animenia/")};return e("div",{className:a.page,children:[_(h,{}),_("div",{className:"container",children:_("div",{className:a.page__wrapper,children:_("div",{className:a.page__form,children:e("form",{onSubmit:o=>g(o),children:[e("div",{className:a.page__form__main,children:[_("h1",{children:"Login"}),e("div",{className:a.page__form__main__fields,children:[_(i,{type:"text",placeholder:"Login",icon:_(v,{})}),e("div",{className:a.page__form__main__fields__forgot,children:[_(i,{type:"password",placeholder:"Password",icon:_(N,{})}),_(r,{to:"",children:"Forgot password"})]})]}),_("input",{type:"submit",value:"Login"}),e("div",{className:a.page__form__main__account,children:[_("p",{children:"Don't have an account?"}),_(r,{to:"/Animenia/register",children:"Register"})]})]}),e("div",{className:a.page__form__buttons,children:[_(p,{variation:"facebook"}),_(p,{variation:"google"})]})]})})})})]})};export{H as default};