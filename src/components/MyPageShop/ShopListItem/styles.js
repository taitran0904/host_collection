
const styles = (theme) => ({
  box: {
    width: 'calc(100% / 5 - 20px)',
    textAlign: 'center',
    margin: 10,
    padding: 10,
    background: 'white',
    border: '1px solid #e1e1e1',
    borderRadius: 5,
    boxShadow: '0 3px 6px rgba(0, 0, 0, .16)',
    color: theme.color.color6,
    '& img': {
      objectFit: "cover",
      objectPosition: "center",
      height: 'calc(20vw - 117px)',
      width: '100%',
      borderRadius: 3,
      marginBottom: 5,
      transition: '.3s',
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
    '&:hover > div': {
      '& > div a': {
        left: 'calc(50% - 20px)',
        transform: 'translate(-50%, -50%)',
      },
      '& > div button': {
        left: 'calc(50% + 20px)',
        transform: 'translate(-50%, -50%)',
      },
      '& img': {
        filter: 'brightness(.3)'
      }
    },
  },
  boxImg: {
    position: 'relative',
    overflow: 'hidden',
  },
  option: {
    '& a, & button': {
      background: 'none',
      border: 0,
      fontSize: 20,
      color: 'white',
      cursor: 'pointer',
      zIndex: 1,
      position: 'absolute',
      top: '50%',
      '&:hover, &:focus': {
        color: theme.color.color7,
        outline: 'none'
      }
    },
    '& a': {
      transform: 'translate(-50%, -50%) rotate(360deg)',
      left: -15,
    },
    '& button': {
      transform: 'translate(-50%, -50%) rotate(-360deg)',
      left: 'calc(100% + 15px)',
    },
  },
  [theme.breakpoints.down('lg')]: {
    box: {
      width: 'calc(100% / 3 - 20px)',
      '& img': {
        height: 'calc(33.3vw - 148px)'
      }
    }
  },
  [theme.breakpoints.down('md')]: {
    box: {
      '& img': {
        height: 'calc(33.3vw - 75px)'
      }
    }
  },
  [theme.breakpoints.down('sm')]: {
    box: {
      width: 'calc(100% / 3 - 20px)',
      '& img': {
        height: 'calc(33vw - 45px)'
      }
    }
  },
  [theme.breakpoints.down('xs')]: {
    box: {
      width: '70vw',
      '& img': {
        height: 'calc(70vw - 22px)'
      }
    }
  }
});

export default styles;
