import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" className={css.input} />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" className={css.input} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" className={css.input} />
      </label>
      <button type="submit" className={css.button}>
        Register
      </button>
    </form>
  );
};
