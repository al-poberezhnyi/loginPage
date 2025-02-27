import { useField } from 'formik';
import React from 'react';

function InputSignedIn ({ classes, ...props }) {
    const [field, meta] = useField(props.name);
    return (
        <div>
            <label className={classes.inputSignedIn}>
                <input {...field} {...props} />
                <span>Keep me signed in.</span>
                <a href='#'>Details</a>
            </label>
        </div>
    );
}

export default InputSignedIn;
