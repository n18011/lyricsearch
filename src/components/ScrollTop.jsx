import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
    Zoom,
    Fab,
    useScrollTrigger
} from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles(theme => ({
    fab: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    },
    div: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
}))

export default ({ window }) => { // Scroll Button 押すとPage最上部へ
    const classes = useStyles()

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role='presentation' className={classes.div}>
                <Fab className={classes.fab} size='small' aria-label='scroll back to top'>
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    )
}