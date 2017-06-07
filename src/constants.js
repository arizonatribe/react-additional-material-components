const spacingBetweenCards = '15px';
const cardWidth = '80%';
const headerBarHeight = '65px';
const footerBarHeight = '65px';

export default {
    cardWidth,
    spacingBetweenCards,
    headerBarHeight,
    footerBarHeight,
    largeWidth: '98%',
    fontFamily: 'Roboto, sans-serif',
    cardBackgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: {
        '@media only screen and (min-width: 720px)': {
            maxWidth: cardWidth,
            minWidth: cardWidth
        }
    },
    widthTablet: {
        '@media only screen and (min-width: 480px)': {
            maxWidth: '95%',
            minWidth: '95%'
        }
    },
    widthPhone: {
        '@media only screen and (min-width: 320px)': {
            maxWidth: '98%',
            minWidth: '98%'
        }
    },
    before: {
        marginTop: spacingBetweenCards
    },
    after: {
        marginBottom: spacingBetweenCards
    }
};

