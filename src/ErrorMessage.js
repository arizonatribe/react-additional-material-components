import React, {PropTypes} from 'react';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {StyleSheet, css} from 'aphrodite';

import {errorStyles} from './styles';

const styles = StyleSheet.create(errorStyles);

const ErrorMessage = ({error, clearErrors, closeMenu}) =>
    <section
      onClick={closeMenu}
      className={css(
          styles.errorMessageContainer,
          !error ? styles.errorMessageHidden : styles.errorMessageVisible
      )}
    >
        <div className={css(styles.errorWrapper)}>
            <p>{error}</p>
            <IconButton
              className={css(styles.xButton)}
              onClick={clearErrors}
            >
                <CloseIcon className={css(styles.closeIcon)} />
            </IconButton>
        </div>
    </section>;

ErrorMessage.propTypes = {
    closeMenu: PropTypes.func,
    clearErrors: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default ErrorMessage;

