import {darkGreen, josefinSlab, lightGreen, sourceCodePro} from "./globalStyles";

export const contactStyles = (theme) => ({
    root: {
        display: "flex",
    },
    rightSideDashboardContainer: {
        width: '100%',
        background: darkGreen
    },
    leftSideDashboardContainer: {
        width: '100%',
        minHeight: '100vh',
    },
    messageArea: {
        resize: 'none',
        width: '50vw',
        outline: 'none',
        minHeight: '250px',
        [theme.breakpoints.down('md')]: {
            width: '80vw',
        }
    },
    inputAreas: {
        width: '50vw',
        minHeight: '50px',
        outline: 'none',
        [theme.breakpoints.down('md')]: {
            width: '80vw',
        }
    },
    label: {
        fontSize: '1.3vw',
        fontFamily: josefinSlab,
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize: '3vw',
        }
    },
    contactButton: {
        width: '50vw',
        height: '70px',
        fontFamily: josefinSlab,
        fontSize: '2vw',
        fontWeight: 'bold',
        background: lightGreen,
    }
})