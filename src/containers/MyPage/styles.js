const styles = (theme) => ({
  myPageContent: {
    // background: '#ffff',
    // padding: 10,
    [theme.breakpoints.down('sm')]: {
      padding: 15,
      margin: '0 -15px'
    }
  },
  tabHost: {
    display: 'flex',
    width: '100%',
    overflow: 'overlay',
    transition: '.3s',
    '&::-webkit-scrollbar': {
      height: 0,
    },
    '&::-webkit-scrollbar-track': {
      background: '#ccc',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255,0,0,0)!important'
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        background: '#aaa!important',
      },
      '&::-webkit-scrollbar': {
        height: 5,
      }
    },
    // [theme.breakpoints.down('sm')]: {
    //   margin: '0 -15px',
    //   width: 'calc(100% + 30px)'
    // }
  },
  tabItem: {
    padding: '15px 20px',
    background: theme.color.color3,
    marginRight: 3,
    minWidth: 100,
    textAlign: 'center',
    flexShrink: 0,
    fontSize: 16,
    color: 'white',
    '&.active': {
      background: theme.color.color5,
      color: 'black',
      '&:hover': {
        background: theme.color.color5,
        color: 'black',
      },
    },
    '&:hover': {
      background: theme.color.primary,
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '40vw'
    }
  }
});

export default styles;
