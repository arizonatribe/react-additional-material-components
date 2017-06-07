import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditButton from 'material-ui/svg-icons/editor/mode-edit';

import BlurField from './BlurField';
import {editableLabelStyles} from './styles';

const styles = StyleSheet.create(editableLabelStyles);

const EditableLabel = ({
    name, formName, placeholder, value, label,
    textFieldStyles, isEditing, editIconVisible, editLabel, handleSubmit
}) => (
    isEditing ? (
        <div className={css(styles.wrapper)}>
            <form
              className={css(styles.infoLabelForm)}
              onKeyPress={(e) => {
                  if (e.which === 13) {
                      e.preventDefault();
                  }
              }}
              name={formName}
            >
                <fieldset className={css(styles.fieldset)}>
                    <BlurField
                      textStyles={textFieldStyles}
                      placeholder={placeholder || label || name}
                      handleBlur={handleSubmit}
                      input={{name, value, label: name}}
                    />
                </fieldset>
            </form>
        </div>
    ) : (
        <div className={css(styles.shownLabel)}>
            <p
              className={css(
                  styles.p,
                  editIconVisible ? styles.editableField : '',
                  !value && !editIconVisible ? styles.blankP : ''
              )}
            >
                {value || label}
            </p>
            <span className={css(styles.spacer)} />
            <FloatingActionButton
              mini
              secondary
              onClick={editLabel}
              className={css(
                  styles.editIcon,
                  editIconVisible ? styles.editIconVisible : styles.editIconHidden
              )}
            >
                <EditButton />
            </FloatingActionButton>
        </div>
    )
);

EditableLabel.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    formName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    editIconVisible: PropTypes.bool,
    isEditing: PropTypes.bool,
    isDarkBackground: PropTypes.bool,
    textFieldStyles: PropTypes.shape({
        color: PropTypes.string
    }),
    editLabel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

EditableLabel.defaultProps = {
    textFieldStyles: {},
    isEditing: false,
    isDarkBackground: false,
    editIconVisible: false
};

export default EditableLabel;

