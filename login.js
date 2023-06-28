import { string } from 'yup';
import { validate, isNotErrors } from './validation.js';

const email = document.querySelector('.login__input-email');
const password = document.querySelector('.login__input-password');
const loginForm = document.querySelector('form');

const emailSchema = string()
  .email({ field: 'email', message: 'Некорректный email' })
  .required({ field: 'email', message: 'Email обязательное поле' });
const passwordSchema = string()
  .required({ field: 'password', message: 'Пароль обязательное поле' })
  .test(
    'Password has russian letters',
    { field: 'password', message: 'Пароль содержит русские буквы' },
    (value) => !/[а-яё]|[А-ЯЁ]/.test(value),
  )
  .test(
    'Password has spaces',
    { field: 'password', message: 'Пароль содержит пробел' },
    (value) => !/\s+/.test(value),
  );

email.oninput = () => validate(emailSchema, email);
password.oninput = () => validate(passwordSchema, password);
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await validate(emailSchema, email);
  await validate(passwordSchema, password);
  if (isNotErrors(loginForm)) {
    event.target.submit();
    // alert('Форма отправлена!');
  }
});
