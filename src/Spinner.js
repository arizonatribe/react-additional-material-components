import React, {PropTypes} from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {StyleSheet, css} from 'aphrodite';
import {spinnerStyles} from './styles';
import {Conditional} from './Conditional';

const styles = StyleSheet.create(spinnerStyles);

const Spinner = ({isLoading}) =>
    <Conditional condition={isLoading}>
        <section className={css(styles.containerStyles)}>
            <RefreshIndicator
              top={0}
              left={0}
              size={48}
              status='hide'
            />
        </section>
    </Conditional>;

Spinner.propTypes = {
    isLoading: PropTypes.bool
};

Spinner.defaultProps = {
    isLoading: false
};

export default Spinner;

