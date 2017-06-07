import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const isErr = (wasSubmitted, error, active) => (wasSubmitted && error && !active);

const FormField = ({
    input, placeholder, type,
    meta: {active, error},
    wasSubmitted
}) =>
    <TextField
      errorText={isErr(wasSubmitted, error, active) && error}
      hintText={placeholder}
      type={type}
      {...input}
    />;

FormField.propTypes = {
    placeholder: PropTypes.string,
    input: PropTypes.object.isRequired,
    error: PropTypes.string,
    type: PropTypes.string,
    active: PropTypes.bool,
    wasSubmitted: PropTypes.bool,
    meta: PropTypes.object
};

export default FormField;

