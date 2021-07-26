import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Fade, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import './styles.scss'

import LoginBestPizza from '../../assets/Login-Best-Pizza.png';

const validationSchema = yup.object({
  email: yup
    .string('Ingresa tu correo')
    .email('Ingresa un correo válido')
    .required('El correo es requerido'),
  password: yup
    .string('Ingresa tu contraseña')
    .min(8, 'La contraseña debe tener por los menos 8 caractéres')
    .required('La contraseña es requerida'),
});

const LoginForm = () => {
  const [query, setQuery] = useState('idle');
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      setQuery('progress');
      setTimeout(() => {
        console.log(email);
        console.log(password);
        setQuery('success');
      }, 3000);
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div className="login-form">
        <img
          src={LoginBestPizza}
          alt="Logo Best Pizza"
        />
        <div className="form__container">
          <h1 className="form__main-title">
            Bienvenido
          </h1>
          <p className="form__main-description">A las mejores pizzas del país</p>
          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form__group">
              <div className="form-field__container">
                <input
                  type="text"
                  id="email"
                  placeholder="Usuario"
                  name="email"
                  className="form__field"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user text-lightgrey-700"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <small className="form__field-error">
                {formik.touched.email && formik.errors.email
                  ? `${formik.errors.email}`
                  : undefined}
              </small>
            </div>
            <div className="form__group">
              <div className="form-field__container">
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  name="password"
                  className="form__field"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-lock text-lightgrey-700"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <small className="form__field-error">
                {formik.touched.password && formik.errors.password
                  ? `${formik.errors.password}`
                  : undefined}
              </small>
            </div>
            <div>
              <a
                className="forgot-password__text"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button
              className="login__button"
              type="submit"
              disabled={query === 'progress'}
            >
              Iniciar sesión
            </button>
            <div>
              <Fade in={query === 'progress'} unmountOnExit>
                <CircularProgress color="inherit" />
              </Fade>
            </div>
          </form>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {query === 'bad_credentials' || query === 'error' && (
          <Alert onClose={handleClose} severity="error">
            {query === 'bad_credentials'
              ? 'Credenciales inválidas, por favor intentalo de nuevo'
              : 'Ha ocurrido un error, por favor intentalo de nuevo'}
          </Alert>
        )}
      </Snackbar>
    </>
  );
};

export default LoginForm;