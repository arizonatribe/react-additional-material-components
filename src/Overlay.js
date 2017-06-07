import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {overlayStyles} from './styles';

const styles = StyleSheet.create(overlayStyles);

const Overlay = (props) =>
    <div className={css(styles.overlay)} {...props} />;

export default Overlay;

