
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {registerSchema} from './register.schema'
import './Register.scss';

function Register(props) {
    return (
        <div className="register-container">
            <h2 className="register-header">---</h2>
            <div className="form-container">
                <Formik 
                initialValues={{username: '', email: '', password: '', agreeToTerms: false}} 
                validationSchema={registerSchema} >
                    <Form>
                        <div className="form-group mb-3 me-5 ms-5" >
                            <label htmlFor="username">Username</label>
                            <Field className="form-control" id="username" name="username" />
                            <ErrorMessage name="username" component="div" className="register-error" />
                        </div>
                        <div className="form-group mb-3 me-5 ms-5">
                            <label htmlFor="email">Email</label>
                            <Field type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
                            <ErrorMessage name="email" component="div" className="register-error" />
                        </div>
                        <div className="form-group mb-3 me-5 ms-5">
                            <label htmlFor="password">Password</label>
                            <Field type="password" className="form-control" id="password" name="password" />
                            <ErrorMessage name="password" component="div" className="register-error" />
                        </div>
                        <div className="form-group mb-3 me-5 ms-5 from-check">
                            <Field type="checkbox" className="form-check-input me-2" id="agreeToTerms" name="agreeToTerms" />
                            <label className="form-check-label" htmlFor="agreeToTerms">Agree to terms</label>
                            <ErrorMessage name="agreeToTerms" component="div" className="register-error" />
                        </div>
                        <div className="form-group ps-5 pb-3 pt-3 pe-5">
                            <button className="btn btn-success">Sign Up</button>
                        </div>

                    </Form>
                    
                </Formik>
            </div>
            {/* <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div> */}
        </div>
    );
}

export default Register;