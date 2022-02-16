import {sourceCodePro, josefinSlab} from "./globalStyles";

export const dashboardStyles = (theme, layoutChange) => ({
    root: {
        display: "flex",
    },
    rightSideDashboardContainer: {
        width: '100%',
        overflowX: 'hidden',
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
        minWidth: '500px',
        right: 0,
        opacity: 1,
    },
    rightSideTitle: {
        fontSize: '5vw',
        zIndex: 2,
        position: layoutChange ? 'absolute' : 'fixed',
        fontFamily: sourceCodePro,
        color: 'white',
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
            width: '80%',
            fontSize: '3vw'
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            fontSize: '3.3vw'
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
        textDecoration: 'underline',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5vw',
        }
    },
    eachProjectImage: {
        width: '20vw',
        height: '20vw',
        border: `2px solid black`,
        borderRadius: 500,
        transition: 'transform 300ms ease-in-out',
        '&:hover': {
            transform: `scale(1.03) translate(0, 3px)`
        },
        [theme.breakpoints.up('xl')]: {
            width: 300,
            height: 300,        },
        [theme.breakpoints.down('sm')]: {
            width: '40vw',
            height: '40vw',
        }
    },
    eachProjectContainer: {
        paddingTop: 50,
        flexWrap: 'nowrap'
    },
    eachSkillContainer: {
        paddingTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
        flexWrap: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 50,
        }
    },
    eachSkillTitle: {
        fontSize: '1.5vw',
        fontFamily: josefinSlab,
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5vw',
        }

    },
    eachSkillDescription: {
        fontSize: '1.3vw',
        fontFamily: josefinSlab,
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.3vw',
        }
    },
    eachProjectTitle: {
        fontSize: '1.5vw',
        fontFamily: josefinSlab,
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.3vw',
        }
    },
    eachProjectLearnMore: {
        fontSize: '1.1vw',
        fontFamily: josefinSlab,
    }
})