import"./modulepreload-polyfill-3cfb730f.js";import{c as i,v as s,i as d}from"./validation-b3345f32.js";const a=document.querySelector(".form__email"),t=document.querySelector(".form__password"),r=document.querySelector("form"),o=i().email({field:"email",message:"Некорректный email"}).required({field:"email",message:"Email обязательное поле"}),m=i().required({field:"password",message:"Пароль обязательное поле"}).test("Password has russian letters",{field:"password",message:"Пароль содержит русские буквы"},e=>!/[а-яё]|[А-ЯЁ]/.test(e)).test("Password has spaces",{field:"password",message:"Пароль содержит пробел"},e=>!/\s+/.test(e));a.oninput=()=>s(o,a);t.oninput=()=>s(m,t);r.addEventListener("submit",async e=>{e.preventDefault(),await s(o,a),await s(m,t),d(r)&&e.target.submit()});