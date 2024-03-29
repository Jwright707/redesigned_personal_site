import {sourceCodePro, josefinSlab} from "./globalStyles";

export const projectStyles = (theme, layoutChange) => ({
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
        position: layoutChange ? 'static' : 'fixed',
        height: '100vh',
        width: layoutChange ? '100%' : '50%',
        right: 0,
    },
    rightSideTitle: {
        fontSize: '5vw',
        zIndex: 2,
        position: layoutChange ? 'absolute' : 'fixed',
        fontFamily: sourceCodePro,
        color: 'black',
        margin: `100px 0 0 0`,
        textAlign: 'center',
        [theme.breakpoints.up('xl')]: {
            fontSize: '80px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8vw'
        },
    },
    leftSideDescription: {
        fontSize: '1.6vw',
        lineHeight: 1.8,
        fontFamily: josefinSlab,
        fontWeight: 600,
        width: '80%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3vw'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.3vw'
        }
    },
    leftSideDescription2: {
        fontSize: '1.6vw',
        lineHeight: 1.8,
        fontFamily: josefinSlab,
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3vw'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.3vw'
        }
    },
    viewStructure: {
        fontSize: '1.2vw',
        lineHeight: 1.8,
        fontFamily: josefinSlab,
        width: '80%',
        textDecoration: 'none',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.8vw'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.1vw'
        }
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
    },
    bottomSection: {
        paddingLeft: 30,
        flexWrap: 'nowrap',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,

        }
    }
})
