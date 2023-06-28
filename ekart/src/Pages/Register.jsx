import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RegisterComponent } from '../components/Register';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  
});

export const Register = () => (
  <div>
    <RegisterComponent/>

  </div>
);