import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    todo: {
        boxShadow: '0 0 10px 0 rgb(0 0 0 / 5%)',
        border: '1px solid #fff',
        background: '#fff',
        '&:hover': {
            background: '#fafbfc'
        }
    },
    todoStatus: {
        width: 8,
        height: 8,
        borderRadius: 2
    },
    todoAvatar: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    textCenter: {
        textAlign: 'center'
    }
}))
