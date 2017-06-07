import {colors} from 'utilitarian/color.util';
import {transition, boxShadow} from 'utilitarian/css-mixins';
import constants from './constants';

const {
    fontFamily,
    footerBarHeight,
    headerBarHeight,
    width,
    widthPhone,
    widthTablet,
    before,
    after,
    cardBackgroundColor,
    largeWidth
} = constants;

const {white, heidelbergRed, dkGrey, mdGrey, ltGrey, platinum} = colors;
const drawerWidth = '256px';
const getYPos = (index, offset = 91) => (offset + (index * 48));

export const speedDialStyles = {
    wrapper: {
        position: 'relative'
    },
    speedLabels: {
        fontFamily,
        boxShadow: `0 0 3px ${ltGrey}`,
        position: 'absolute',
        color: 'white',
        borderRadius: '2px',
        padding: '3px 6px',
        backgroundColor: 'rgba(51, 51, 51, 0.7)',
        WebkitTransform: 'translateY(-50%)',
        MozTransform: 'translateY(-50%)',
        MsTransform: 'translateY(-50%)',
        OTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)'
    }
};

export const getSpeedDialItemStyles = (
    {index, xOffset, yOffset, visible}, labelLeft = true, openUpward = true
) => (
    Object.assign({
        pointerEvents: visible ? '' : 'none',
        position: 'absolute',
        whiteSpace: 'nowrap',
        zIndex: 3000
    }, openUpward ? {
        bottom: getYPos(index, yOffset)
    } : {
        top: getYPos(index, yOffset)
    }, labelLeft ? {
        right: 8 + xOffset
    } : {
        left: 8 + xOffset
    })
);

export const getSpeedDialItemLabelStyles = (
    labelLeft = true, openUpward = true
) => (Object.assign({},
    labelLeft ? {
        right: 48
    } : {
        left: 48
    }, openUpward ? {
        bottom: 0
    } : {
        top: 20
    }
));

export const getSpeedDialLabelStyles = (
    labelLeft = true
) => (Object.assign({},
    labelLeft ? {
        right: 68
    } : {
        left: 68
    }, {
        whiteSpace: 'nowrap',
        top: '50%'
    }
));

const speedDialEffects = {
    none: ({visible}) => ({display: visible ? '' : 'none'}),
    'fade-staggered': ({visible, index}) => ({
        transition: visible ? '450ms' : '300ms',
        transitionDelay: visible ? `${(index * 0.025)}s` : '',
        transform: `translateY(${(visible ? 0 : '5px')})`,
        opacity: visible ? 1 : 0
    }),
    fade: ({visible}) => ({
        transition: visible ? '450ms' : '300ms',
        opacity: visible ? 1 : 0
    }),
    slide: ({visible, index}) => ({
        transition: visible ? '250ms' : '300ms',
        transform: `translateY(${(visible ? 0 : `${getYPos(index)}px`)})`,
        opacity: visible ? 1 : 0
    })
};

export const getFx = (effect) => (speedDialEffects[effect] || speedDialEffects.none);

export const spinnerStyles = {
    containerStyles: {
        zIndex: 3000,
        position: 'fixed',
        left: '50%',
        top: '50%'
    }
};

export const overlayStyles = {
    overlay: {
        transition: 'all 0.2s ease',
        margin: 0,
        padding: 0,
        position: 'fixed',
        zIndex: 1050,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(51, 51, 51, 0.3)',
        display: 'flex',
        height: '100%',
        minHeight: '100vh',
        width: '100%',
        '@media print': {
            display: 'none'
        }
    }
};

export const errorStyles = {
    xButton: {
        fontFamily,
        boxShadow: '1px 1px 4px rgba(255, 255, 255, 0.4)',
        background: heidelbergRed,
        borderRadius: '50%',
        width: '16px',
        height: '16px',
        padding: 0,
        border: 'none',
        color: 'white',
        position: 'absolute',
        cursor: 'pointer',
        right: '12px',
        textDecoration: 'none',
        top: '5px',
        ':hover': {
            boxShadow: '0 0 3px rgba(255, 255, 255, 0.9)'
        }
    },
    closeIcon: {
        color: 'white',
        fontWeight: 'bold',
        textShadow: `1px 1px 4px ${ltGrey}`,
        width: '13px',
        height: '13px'
    },
    errorWrapper: {
        fontFamily,
        transition: 'all 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '3px',
        paddingTop: '10px',
        borderTop: 'none',
        borderBottom: `1px dashed ${platinum}`,
        borderRight: `1px dashed ${platinum}`,
        borderLeft: `1px dashed ${platinum}`,
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px',
        color: platinum,
        textShadow: '1px 1px 8px rgba(61, 61, 61, 0.6)',
        fontWeight: 'bold',
        opacity: '0.9',
        ':hover': {
            textShadow: `1px 1px 4px ${dkGrey}`
        },
        '@media print': {
            display: 'none'
        }
    },
    errorMessageVisible: {
        marginTop: headerBarHeight
    },
    errorMessageHidden: {
        marginTop: 0
    },
    errorMessageContainer: {
        transition: 'all 0.2s ease',
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        padding: '0 3px 3px 3px',
        minWidth: '50vw',
        width: '50vw',
        backgroundColor: 'rgba(94, 177, 191, 0.9)',
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px',
        top: 0,
        maxHeight: `${(Number(headerBarHeight.replace('px', '')) * 2.2)}px`,
        zIndex: '1000',
        '@media print': {
            display: 'none'
        }
    }
};

export const progressStyles = {
    progressContainer: {
        transition: 'all 0.2s ease',
        zIndex: '6000',
        position: 'fixed',
        backgroundColor: 'rgba(62, 62, 62, 0.4)',
        width: '100%',
        top: headerBarHeight,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'progress',
        '@media print': {
            display: 'none'
        }
    }
};

export const resizableContainerStyles = {
    cardWrapper: {
        transition: 'max-width 0.3s ease',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        ...transition('max-height', '0.3s'),
        ...before,
        ...after,
        backgroundColor: cardBackgroundColor,
        '@media print': {
            width: '100%',
            backgroundColor: 'transparent',
            boxShadow: 'none'
        }
    },
    splitScreen: {
        marginLeft: drawerWidth
    },
    normalCard: {
        ...widthPhone,
        ...widthTablet,
        ...width
    },
    largeCard: {
        minWidth: largeWidth,
        maxWidth: largeWidth
    },
    header: {
        '@media print': {
            display: 'none'
        }
    }
};

export const imageUploaderStyles = {
    imageHiddenUploadButton: {
        height: 0,
        maxHeight: 0,
        width: 0,
        maxWidth: 0,
        overflow: 'hidden'
    },
    card: {
        ...transition(),
        ...before,
        ...after,
        ...widthPhone,
        ...widthTablet,
        ...width,
        backgroundColor: cardBackgroundColor
    }
};

export const containerToolbarStyles = {
    actionButtons: {
        '@media print': {
            display: 'none'
        }
    },
    toolbar: {
        ...transition(),
        width: '100%',
        zIndex: '50',
        position: 'relative',
        minHeight: footerBarHeight,
        maxHeight: footerBarHeight,
        '@media print': {
            display: 'none'
        }
    },
    toolTitle: {
        width: '100%',
        textAlign: 'center'
    },
    toolTitleWrapper: {
        width: '100%',
        marginLeft: '0.3em',
        '@media print': {
            display: 'none'
        }
    },
    toolWorkspaces: {
        marginLeft: '0.3em',
        '@media print': {
            display: 'none'
        }
    }
};

export const editableLabelStyles = {
    container: {
        justifyContent: 'center'
    },
    infoLabelForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shownLabel: {
        display: 'flex',
        margin: '0 10px',
        position: 'relative'
    },
    editableField: {
        ...transition(),
        ...boxShadow(),
        fontFamily,
        display: 'flex',
        color: white,
        borderRadius: '2px',
        padding: '3px 6px',
        backgroundColor: 'rgba(51, 51, 51, 0.7)',
        ':hover': {
            color: dkGrey,
            backgroundColor: 'rgba(240, 240, 240, 0.7)'
        }
    },
    p: {
        ...transition(),
        fontSize: '16px',
        margin: '0 0 5px 0',
        padding: '3px 6px',
        color: mdGrey,
        fontWeight: 'bold'
    },
    blankP: {
        ...transition(),
        color: ltGrey,
        padding: '3px 6px',
        ':hover': {
            color: dkGrey
        }
    },
    editIcon: {
        ...transition(),
        position: 'absolute',
        top: '-9px',
        left: '-50px'
    },
    editIconVisible: {
        color: mdGrey,
        opacity: 1
    },
    editIconHidden: {
        color: 'transparent',
        opacity: 0
    },
    spacer: {
        flexGrow: 1,
        height: '100%',
        paddingTop: '8px',
        margin: '0 5px'
    }
};

