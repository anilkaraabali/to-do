import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
        borderRadius: '6px',
        border: '1px solid hsla(0,0%,49.8%,.06)'
    },
    header: {
        marginBottom: theme.spacing(1)
    }
}))
