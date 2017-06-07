import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {containerToolbarStyles} from './styles';

const styles = StyleSheet.create(containerToolbarStyles);

const ContainerToolbar = ({caption, children, leftIcon, editableCaption}) =>
    <Toolbar className={css(styles.toolbar)}>
        {leftIcon &&
            <ToolbarGroup className={css(styles.toolWorkspaces)} firstChild>
                {leftIcon}
                <ToolbarSeparator />
            </ToolbarGroup>
        }
        <ToolbarGroup className={css(styles.toolTitleWrapper)}>
            <ToolbarTitle
              className={css(styles.toolTitle)}
              text={editableCaption || caption}
            />
        </ToolbarGroup>
        <ToolbarGroup className={css(styles.actionButtons)}>
            {children}
        </ToolbarGroup>
    </Toolbar>;

ContainerToolbar.propTypes = {
    caption: PropTypes.string,
    editableCaption: PropTypes.node,
    children: PropTypes.element,
    leftIcon: PropTypes.node
};

ContainerToolbar.defaultProps = {
    caption: '',
    editableCaption: null,
    leftIcon: null
};

export default ContainerToolbar;

