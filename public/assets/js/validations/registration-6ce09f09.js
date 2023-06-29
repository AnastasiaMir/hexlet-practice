import"./modulepreload-polyfill-3cfb730f.js";import{c as m,v as s,i as l}from"./validation-b3345f32.js";const a=document.querySelector(".form__login"),t=document.querySelector(".form__email"),i=document.querySelector(".form__password"),o=document.querySelector("form"),r=m().min(8,{field:"login",message:"Login должен быть не менее 8 символов"}),d=m().email({field:"email",message:"Некорректный email"}).required({field:"email",message:"Email обязательное поле"}),n=m().min(8,{field:"password",message:"Пароль должен быть не менее 8 символов"}).required({field:"password",message:"Пароль обязательное поле"}).matches(/\d+/,{message:{field:"password",message:"Пароль должен содержать цифры"}}).matches(/[a-z]+/,{message:{field:"password",message:"Пароль должен содержать маленькие буквы"}}).matches(/[A-Z]+/,{message:{field:"password",message:"Пароль должен содержать большие буквы"}}).test("Password has russian letters",{field:"password",message:"Пароль содержит русские буквы"},e=>!/[а-яё]|[А-ЯЁ]/.test(e)).test("Password has spaces",{field:"password",message:"Пароль содержит пробел"},e=>!/\s+/.test(e));a.oninput=()=>s(r,a);t.oninput=()=>s(d,t);i.oninput=()=>s(n,i);o.addEventListener("submit",async e=>{e.preventDefault(),await s(r,a),await s(d,t),await s(n,i),l(o)&&e.target.submit()});