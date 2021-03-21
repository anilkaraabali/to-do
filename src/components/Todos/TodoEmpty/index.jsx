import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import logo from './empty.svg'

const TodoEmpty = () => (
    <Container>
        <Grid container justify="center">
            <img src={logo} alt="empty todos" />
        </Grid>
    </Container>
)

export default TodoEmpty
