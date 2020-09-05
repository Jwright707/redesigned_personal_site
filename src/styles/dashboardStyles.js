import {sourceCodePro, navyBlue, standardFontColor, josefinSlab} from "./globalStyles";

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
    }
})