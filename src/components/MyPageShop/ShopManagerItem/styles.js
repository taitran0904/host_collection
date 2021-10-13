
const styles = (theme) => ({
  box: {
    width: 'calc(100% / 5 - 20px)',
    textAlign: 'center',
    margin: 10,
    marginTop: 60,
    padding: 10,
    paddingTop: 0,
    background: 'white',
    border: '1px solid #e1e1e1',
    borderRadius: 5,
    boxShadow: '0 3px 6px rgba(0, 0, 0, .16)',
    position: 'relative',
    color: theme.color.color6,
    '& img': {
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: '50%',
      marginBottom: 5,
      transition: '.3s',
      width: 100,
      height: 100,
    },
    '& p': {
      height: 30,
      lineHeight: '30px',
      padding: '0 15px',
      color: 'white',
      display: 'table',
      borderRadius: 15,
      fontSize: 12,
      margin: '5px auto'
    },
    '& h6': {
      margin: 'auto',
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px solid #e1e1e1',
      display: 'table',
    },
    '& h5': {
      color: theme.color.color7,
      fontWeight: '500'
    },
    '&:hover > div': {
      '& a, & button': {
        opacity: 1,
      }
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(100% / 5 - 20px)',
    },
    // [theme.breakpoints.down('xl')]: {
    //   width: 'calc(100% / 4 - 20px)',
    // },
  },
  boxImg: {
    overflow: 'hidden',
    marginTop: -50
  },
  status: {
    position: 'absolute',
    top: '-50px',
    width: '100px',
    height: '100px!important',
    borderRadius: '50%!important',
    left: '50%',
    transform: 'translateX(-50%)',
    margin: '0!important',
    lineHeight: '100px!important',
  },
  option: {
    '& a, & button': {
      background: 'none',
      border: 0,
      fontSize: 20,
      cursor: 'pointer',
      zIndex: 1,
      position: 'absolute',
      top: 10,
      color: theme.color.color4,
      opacity: 0,
      '&:hover, &:focus': {
        color: theme.color.color7,
        outline: 'none'
      }
    },
    '& a': {
      left: 10,
    },
    '& button': {
      right: 10
    },
  },
  [theme.breakpoints.down('lg')]: {
    box: {
      width: 'calc(100% / 3 - 20px)',
    }
  },
  [theme.breakpoints.down('sm')]: {
    box: {
      width: 'calc(100% / 2 - 20px)',
      '& > div': {
        '& a, & button': {
          opacity: 1,
        }
      },
    }
  },
  [theme.breakpoints.down('xs')]: {
    box: {
      width: 'calc(100% - 20px)',
    }
  },
});

export default styles;
