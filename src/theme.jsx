import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0078d4'
        }
    },
    overrides: {
        MuiButton: {
            outlined: {
                borderColor: '#fff',
                color: '#fff'
            }
        },
        MuiAppBar: {
            colorPrimary: {
                color: 'rgba(0,0,0, .87)',
                backgroundColor: '#fff',
                boxShadow: 'inset 0 -1px 0 0 #dadce0'
            }
        }
    }
})
