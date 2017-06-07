import React, {PropTypes} from 'react';
import {getTargetLocationAndDimensions} from 'utilitarian/event.util';
import {Card} from 'material-ui/Card';
import {StyleSheet, css} from 'aphrodite';
import Measure from 'react-measure';

import {Conditional} from './Conditional';

import {resizableContainerStyles} from './styles';

const styles = StyleSheet.create(resizableContainerStyles);

const ResizableContainer = ({
    isLarge, isVisible, isDrawerOpen,
    backgroundColor, children, containerCSSProps,
    containerResized, containerFocus, containerLostFocus
}) => (
    <Conditional condition={isVisible}>
        <Measure
          onMeasure={dimensions => containerResized(dimensions)}
          onMouseEnter={(event) => containerFocus(getTargetLocationAndDimensions(event))}
          onMouseLeave={(event) => containerLostFocus(getTargetLocationAndDimensions(event))}
          className={css(styles.cardWrapper)}
        >
            <Card
              containerStyle={containerCSSProps}
              style={{backgroundColor}}
              className={css(
                  styles.card,
                  isDrawerOpen && !isLarge ? styles.splitScreen : '',
                  isLarge ? styles.largeCard : styles.normalCard
              )}
            >
                {children}
            </Card>
        </Measure>
    </Conditional>
);

ResizableContainer.propTypes = {
    isVisible: PropTypes.bool,
    isLarge: PropTypes.bool,
    isDrawerOpen: PropTypes.bool,
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    containerCSSProps: PropTypes.shape({
        color: PropTypes.string,
        opacity: PropTypes.number,
        width: PropTypes.string,
        margin: PropTypes.string,
        padding: PropTypes.string,
        border: PropTypes.string
    }),
    containerResized: PropTypes.func.isRequired,
    containerFocus: PropTypes.func.isRequired,
    containerLostFocus: PropTypes.func.isRequired
};

ResizableContainer.defaultProps = {
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    containerCSSProps: {width: '100%'},
    isDrawerOpen: false,
    isLarge: false,
    isVisible: true
};

export default ResizableContainer;
