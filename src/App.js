import React from "react";
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values =>{
      alert("Login Successful");
      console.log("values", values)
    },
    validate: values =>{
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email format";
      }
      if(!values.password) errors.password = "Field required";
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div>: null}
        <div>Password:</div>
        <input name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div>: null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
