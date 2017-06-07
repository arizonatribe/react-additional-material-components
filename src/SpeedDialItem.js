import React, {PropTypes} from 'react';
import {isFunction} from 'utilitarian/is.util';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {StyleSheet, css} from 'aphrodite';

import constants from './constants';

import {
    speedDialStyles,
    getFx,
    getSpeedDialItemStyles,
    getSpeedDialItemLabelStyles
} from './styles';

const {footerBarHeight} = constants;
const styles = StyleSheet.create(speedDialStyles);

const SpeedDialItem = ({
    effect, label, index, xOffset, yOffset,
    openUpward, labelLeft, visible,
    speedDialMenuOpen, fabContent, onTouchTap, onCloseRequest
}) => (
    <div
      style={{
          ...getSpeedDialItemStyles({
              index,
              xOffset,
              yOffset,
              visible: Boolean(speedDialMenuOpen && visible)
          }, labelLeft, openUpward),
          ...getFx(effect)({
              index,
              visible: Boolean(speedDialMenuOpen && visible)
          })
      }}
    >
        {!!label &&
            <div
              className={css(styles.speedLabels)}
              style={{
                  ...getSpeedDialItemLabelStyles(labelLeft, openUpward)
              }}
            >
                {label}
            </div>
        }
        <FloatingActionButton
          mini
          secondary
          onTouchTap={(ev) => {
              if (isFunction(onCloseRequest)) onCloseRequest();
              onTouchTap(ev);
          }}
        >
            {fabContent}
        </FloatingActionButton>
    </div>
);

SpeedDialItem.propTypes = {
    effect: PropTypes.string,
    fabContent: PropTypes.element.isRequired,
    index: PropTypes.number,
    label: PropTypes.string,
    xOffset: PropTypes.number,
    yOffset: PropTypes.number,
    onCloseRequest: PropTypes.func,
    onTouchTap: PropTypes.func.isRequired,
    speedDialMenuOpen: PropTypes.bool,
    labelLeft: PropTypes.bool,
    openUpward: PropTypes.bool,
    visible: PropTypes.bool
};

SpeedDialItem.defaultProps = {
    effect: 'fade-staggered',
    index: 0,
    xOffset: -8,
    yOffset: Number(footerBarHeight.replace('px', '')),
    labelLeft: false,
    openUpward: false,
    speedDialMenuOpen: false,
    visible: false
};

export default SpeedDialItem;
