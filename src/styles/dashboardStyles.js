import {sourceCodePro, navyBlue, standardFontColor, josefinSlab, keyFrameExampleOne} from "./globalStyles";

export const dashboardStyles = (theme) => ({
    root: {
        display: "flex",
    },
    rightSideDashboardContainer: {
        width: '100%',
    },
    leftSideDashboardContainer: {
        width: '100%',
        minHeight: '100vh',
    },
    dashboardImage: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'fixed',
        height: '100vh',
        width: '50%',
        right: 0,
    },
    rightSideTitle: {
        fontSize: '5vw',
        zIndex: 2,
        position: 'fixed',
        fontFamily: sourceCodePro,
        color: 'white',
        margin: `100px 0 0 0`,
        [theme.breakpoints.up('xl')]: {
            fontSize: '80px',
        },
    },
    leftSideDescription: {
        fontSize: '1.6vw',
        lineHeight: 1.8,
        fontFamily: josefinSlab,
        fontWeight: 600,
        width: '80%',
        textAlign: 'center',
    },
    projectsSectionContainer: {
        minHeight: '100vh',
    },
    arrowDownIcon: {
        width: 60,
        height: 60,
    },
    arrowUpIcon: {
        width: 60,
        height: 60,
        transform: `rotate(180deg)`
    },
    projectsTitle: {
        fontSize: '2vw',
        fontFamily: josefinSlab,
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    eachProjectImage: {
        width: 300,
        height: 300,
        border: `2px solid black`,
        borderRadius: 500,
        transition: 'transform 300ms ease-in-out',
        '&:hover': {
            transform: `scale(1.1) translate(0, 15px)`
        }
    },
    eachProjectContainer: {
        paddingTop: 50
    },
    eachProjectTitle: {
        fontSize: '1.5vw',
        fontFamily: josefinSlab,
        fontWeight: 'bold',
    },
    eachProjectLearnMore: {
        fontSize: '1.1vw',
        fontFamily: josefinSlab,
    }
})