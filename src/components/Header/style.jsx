import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

export const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    hide: {
        display: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    logoContainer: {
        display: 'flex'
    },
    logo: {
        width: 'auto',
        height: 40
    },
    brand: {
        fontSize: 22,
        color: '#0078d4',
        paddingLeft: theme.spacing(2)
    }
}))
