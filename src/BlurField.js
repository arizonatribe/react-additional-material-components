import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const BlurField = ({
    input, placeholder, type, handleBlur, handleChange, textStyles
}) =>
    <TextField
      inputStyle={{...textStyles}}
      hintText={placeholder}
      type={type}
      onBlur={handleBlur}
      onChange={handleChange}
      defaultValue={input.value}
      label={input.name}
      name={input.name}
    />;

BlurField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.any,
        label: PropTypes.string
    }),
    textStyles: PropTypes.shape({
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        padding: PropTypes.string,
        fontFamily: PropTypes.string,
        fontSize: PropTypes.string,
        fontStyle: PropTypes.string,
        margin: PropTypes.string
    }),
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

BlurField.defaultProps = {
    type: 'text',
    textStyles: {},
    handleBlur: () => (true),
    handleChange: () => (true)
};

export default BlurField;
