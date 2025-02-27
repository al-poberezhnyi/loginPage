import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { LOGIN_SCHEMAS } from '../../../utils/validationSchemas';
import InputForm from '../FormInputs';
import styles from './LoginForm.module.scss';
import InputSignedIn from '../InputSignedIn';
import { Link } from 'react-router';

function LoginForm () {
    const [isPassOff, setIsPassOff] = useState(false);

    const initialValues = {
        email: '',
        password: '',
        signedIn: false,
    };
    const classes = {
        inputContainer: styles.inputContainer,
        input: styles.input,
        errors: styles.errors,
        valid: styles.valid,
        invalid: styles.invalid,
        inputSignedIn: styles.inputSignedIn,
    };

    const setPassOff = () => setIsPassOff(isPassOff => !isPassOff);
    const handleSubmit = (value, formikBag) => {
        formikBag.resetForm();
    };

    return (
        <div className={styles.loginForm}>
            <div className={styles.innerContainer}>
                <div className={styles.loginFormContainer}>
                    <div className={styles.loginImage}>
                        <img src='./user-1.svg' alt='' />
                    </div>

                    <h2 className={styles.loginTitle}>sing up</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={LOGIN_SCHEMAS}
                    >
                        <Form className={styles.form}>
                            <div className={styles.formContainer}>
                                <InputForm
                                    classes={classes}
                                    label='Email or mobile phone number'
                                    type='text'
                                    name='email'
                                    autoFocus
                                />
                                <InputForm
                                    classes={classes}
                                    label='Password'
                                    type={isPassOff ? 'text' : 'password'}
                                    name='password'
                                    src={
                                        isPassOff
                                            ? './pass.svg'
                                            : './pass-off.svg'
                                    }
                                    callBack={setPassOff}
                                />
                            </div>
                            <button
                                className={styles.loginFormBtn}
                                type='submit'
                            >
                                sing up
                            </button>
                            <InputSignedIn
                                classes={classes}
                                type='checkbox'
                                name='signedIn'
                            />
                        </Form>
                    </Formik>
                    <div className={styles.tetsLine}>
                        <h4 className={styles.subTitle}>New Account?</h4>
                    </div>

                    <Link className={styles.link} to='/register'>
                        Create Account
                    </Link>
                    {/* <a className={styles.link} href='#'>
                        Create Account
                    </a> */}
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
