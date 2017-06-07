import React, {cloneElement, PropTypes} from 'react';

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: 0,
        transform: 'translate(0, 2px)'
    },
    overlap: {
        position: 'relative',
        transition: 'all 450ms'
    }
};

const FabSpinner = ({showB, aContent, bContent, style}) => {
    const aStyles = {...style, ...aContent.style};
    const bStyles = {...style, ...bContent.style};

    return (
        <div style={styles.container}>
            <div
              style={{
                  ...styles.overlap,
                  transform: `translateY(-50%) rotate(${(showB ? '90deg' : 0)})`,
                  opacity: showB ? 0 : 1
              }}
            >
                {cloneElement(aContent, {style: aStyles})}
            </div>
            <div
              style={{
                  ...styles.overlap,
                  transform: `translateY(-150%) rotate(${(showB ? 0 : '-90deg')})`,
                  opacity: showB ? 1 : 0
              }}
            >
                {cloneElement(aContent, {style: bStyles})}
            </div>
        </div>
    );
};

FabSpinner.propTypes = {
    aContent: PropTypes.element.isRequired,
    bContent: PropTypes.element.isRequired,
    showB: PropTypes.bool,
    style: PropTypes.object
};

FabSpinner.defaultProps = {
    showB: false,
    style: {}
};

export default FabSpinner;

