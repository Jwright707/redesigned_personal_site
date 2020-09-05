import {lightBlue, navyBlue} from "./globalStyles";

export const appStyles = () => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: navyBlue,
    },
    menuIcon: {
        background: lightBlue,
        width: 60,
        height: 60,
        borderRadius: 50,
        padding: 6
    },
    iconContainer: {
        position: 'absolute',
        margin: `10px 0 0 10px`
    }
})