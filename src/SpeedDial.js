import React, {Children, cloneElement, PropTypes} from 'react';
import {pick, pruneEmpties} from 'utilitarian/obj.util';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {StyleSheet, css} from 'aphrodite';

import FabSpinner from './FabSpinner';
import {speedDialStyles, getSpeedDialLabelStyles} from './styles';

const styles = StyleSheet.create(speedDialStyles);

const pruneListeners = (listeners = {}) =>
    pruneEmpties(
        pick(listeners, [
            'onMouseUp', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseOver'
        ])
    );

const SpeedDial = ({
    fabProps, onOpenCloseRequest, fabContentOpen, fabContentClose,
    effect, children, isOpen, label, labelLeft, listeners
}) => (
    <div className={css(styles.wrapper)}>
        {!!label &&
            <div
              className={css(styles.speedLabels)}
              style={{...getSpeedDialLabelStyles(labelLeft)}}
            >
                {label}
            </div>
        }
        <FloatingActionButton
          onTouchTap={onOpenCloseRequest}
          {...pruneListeners(listeners)}
          {...fabProps}
        >
            <FabSpinner
              aContent={fabContentOpen}
              bContent={fabContentClose || fabContentOpen}
              showB={isOpen}
            />
        </FloatingActionButton>
        {Children
            .map(children, (child) => child)
            .filter(({props}) => props.visible)
            .map((child, index) => cloneElement(child, {
                effect,
                index,
                speedDialMenuOpen: isOpen,
                onCloseRequest: onOpenCloseRequest
            }))
        }
    </div>
);

SpeedDial.propTypes = {
    children: PropTypes.node,
    effect: PropTypes.string,
    fabContentClose: PropTypes.element,
    fabContentOpen: PropTypes.element,
    fabProps: PropTypes.shape({
        backgroundColor: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        disabledColor: PropTypes.string,
        href: PropTypes.string,
        iconClassName: PropTypes.string,
        iconStyle: PropTypes.object,
        mini: PropTypes.bool,
        secondary: PropTypes.bool,
        style: PropTypes.object
    }),
    label: PropTypes.string,
    labelLeft: PropTypes.bool,
    listeners: PropTypes.shape({
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onMouseOver: PropTypes.func,
        onMouseDown: PropTypes.func,
        onMouseUp: PropTypes.func
    }),
    onOpenCloseRequest: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    visible: PropTypes.bool
};

SpeedDial.defaultProps = {
    labelLeft: false,
    listeners: {},
    isOpen: false
};

export default SpeedDial;

