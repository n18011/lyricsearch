import React, {useState, useContext} from 'react'

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  InputBase,
  Slide,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core'
import {fade, makeStyles} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';

import ScrollTop from './ScrollTop.jsx'
import { LyricsContext } from '../context/LyricsProvider'
import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  installButton:{
    marginLeft: theme.spacing(1)
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ({children}) => {
  const classes = useStyles()
  const { setValue, isShow, setIsShow } = useContext(LyricsContext)
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);
  const [usedInstall, setUsedInstall] = useState(false)

  const hide = () => setVisibleState(false);

  const install = () => {
    promptToInstall()
    hide()
  }

  React.useEffect(
    () => {
      if (prompt) {
        setUsedInstall(true)
      }
    },
    [prompt]
  );

  return (
    <>
    <header className={classes.root}>
    <AppBar >
            <Toolbar >
      <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            aria-label="open drawer"
            onClick={() => setIsShow(false)}
          >
      <QueueMusicRoundedIcon/>
          </IconButton>

{!isShow ? (
              <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e) => setValue(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

): <div/>}

{usedInstall ? (
      <IconButton
            edge="end"
            color="inherit"
            className={classes.installButton}
            aria-label="open drawer"
            onClick={() => setVisibleState(true)}
          >
            <AddToHomeScreenIcon/>
          </IconButton>
): ''}

            </Toolbar>
          </AppBar>
          <Toolbar id='back-to-top-anchor' />
        </header>

    {children}
    <Dialog
        open={isVisible}
        TransitionComponent={Transition}
        keepMounted
        onClose={hide}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">ホームに追加しますか？</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ホームに追加することで、オフラインでもアクセスすることができます。
            またパフォーマンスも上がるため、ユーザエクスペリエンスの向上が期待できます。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hide} color="primary">
            Cancel
          </Button>
          <Button onClick={() => install()} color="secondary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
    <ScrollTop></ScrollTop>
    </>
  )
}