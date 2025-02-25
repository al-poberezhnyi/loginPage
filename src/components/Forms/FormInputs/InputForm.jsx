import { ErrorMessage, Field } from 'formik';
import React from 'react';
import classNames from 'classnames';

function InputForm (props) {
    const { callBack, classes, name, src, label, ...rest } = props;

    return (
        <Field name={name}>
            {({ field, meta: { error, touched } }) => {
                const inputClassnames = classNames(classes.input, {
                    [classes.valid]: !error && touched,
                    [classes.invalid]: error && touched,
                });
                return (
                    <label className={classes.inputContainer}>
                        <span>{label}</span>
                        <input
                            className={inputClassnames}
                            {...rest}
                            {...field}
                        />
                        {src ? (
                            <img
                                onClick={callBack ? callBack : null}
                                src={src}
                                alt={name}
                            />
                        ) : null}

                        <ErrorMessage name={name}>
                            {msg => (
                                <div className={classes.errors}>
                                    <img src='./error.svg' alt={name} />
                                    {msg}
                                </div>
                            )}
                        </ErrorMessage>
                    </label>
                );
            }}
        </Field>
    );
}

export default InputForm;
