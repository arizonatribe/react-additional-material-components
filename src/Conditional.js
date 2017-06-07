import React, {PropTypes} from 'react';
import {isTruthy} from 'utilitarian/is.util';
import {generateUUID} from 'utilitarian/string.util';

function getComponentDisplayName(comp) {
    if (comp.prototype && comp.prototype.constructor && comp.prototype.constructor.displayName) {
        return `${comp.prototype.constructor.displayName}_Wrapper`;
    }

    return `ConditionalRenderingComponent-${generateUUID()}`;
}

export const Conditional = ({condition, children}) => (
    isTruthy(condition) ? children : null
);

Conditional.propTypes = {
    children: PropTypes.node,
    condition: PropTypes.any
};

Conditional.defaultProps = {
    condition: true,
    children: null
};

export function renderConditional(ComponentWrapped) {
    const ConditionalWrapper = (props) => (
        isTruthy(props.condition) ? <ComponentWrapped {...props} /> : null
    );

    ConditionalWrapper.displayName = getComponentDisplayName(ComponentWrapped);

    ConditionalWrapper.propTypes = {
        condition: PropTypes.any
    };

    ConditionalWrapper.defaultProps = {
        condition: true
    };

    return ConditionalWrapper;
}
