import React, {PropTypes} from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {StyleSheet, css} from 'aphrodite';

import {progressStyles} from './styles';

const styles = StyleSheet.create(progressStyles);

const Progress = ({color}) =>
    <article className={css(styles.progressContainer)}>
        <LinearProgress color={color} mode='indeterminate' />
    </article>;

Progress.propTypes = {
    color: PropTypes.string
};

Progress.defaultProps = {
    color: 'rgba(94, 177, 191, 0.9)'
};

export default Progress;

