const styles = (theme) => ({
  avatarUpload: {
    '& > div': {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 -15px',
      '& > div': {
        width: 'calc(100% / 5 - 30px)',
        margin: 15,
        padding: 10,
        background: 'white',
        border: '1px solid #e1e1e1',
        borderRadius: 4,
        position: 'relative',
        '& > span': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          display: 'none',
          '& > a': {
            display: 'none'
          },
          '& i': {
            cursor: 'pointer',
            fontSize: 20,
            color: 'white',
            '&:hover, &:focus': {
              color: theme.color.color7,
              outline: 'none'
            }
          }
        },
        '& .ant-upload-list-item-name': {
          display: 'none'
        },
        '& img': {
          width: '100%',
          height: '100%',
          transition: '.3s',
        },
        '& .ant-upload-list-item-info': {
          position: 'relative',
          height: '100%',
          overflow: 'hidden',
          '&::before': {
            content: 'attr(href)',
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            opacity: 0,
            transition: '.3s',
          }
        },
        '&:hover': {
          '& .ant-upload-list-item-info::before': {
            opacity: 1
          },
          '& > span': {
            display: 'block'
          },
          '& .anticon.anticon-close': {
            color: 'white'
          }
        },
        '&.ant-upload-list-item-uploading': {
          minHeight: 100,
          position: 'relative',
        },
        [theme.breakpoints.down("lg")]: {
          width: 'calc(100% / 4 - 20px)',
          margin: 10
        },
        [theme.breakpoints.down("sm")]: {
          width: 'calc(100% / 3 - 20px)',
          margin: 10
        },
        [theme.breakpoints.down("xs")]: {
          width: 'calc(100% / 2 - 10px)',
          margin: 5
        },
      },
      [theme.breakpoints.down("lg")]: {
        margin: '0 -10px'
      },
      [theme.breakpoints.down("xs")]: {
        margin: '0 -5px'
      },
    },
    '& .ant-upload-select-picture-card span': {
      width: 150,
      height: 150,
      background: 'white',
      border: '1px dashed #d9d9d9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 4,
      color: theme.color.color6,
      cursor: 'pointer',
      padding: 10,
      margin: 15,
      '& svg': {
        fontSize: 30,
      },
      '&:hover': {
        borderColor: theme.color.primary
      }
    },
    '& .ant-upload-list-item-progress': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 'calc(100% - 20px)',
      left: 10,
      '& .ant-progress-inner': {
        background: '#eee'
      }
    },
    '& .ant-upload-list-item-uploading-text': {
      textAlign: 'center',
      position: 'absolute',
      top: 'calc(50% - 20px)',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: theme.color.color6
    },
    '& .anticon.anticon-close': {
      position: 'absolute',
      top: 20,
      right: 20,
      cursor: 'pointer',
      color: theme.color.color4,
      transition: '.3s',
      zIndex: 3,
      '&:hover': {
        color: theme.color.primary
      }
    }
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -10px',
  },
  box: {
    width: 'calc(100% / 5 - 20px)',
    margin: 10,
    padding: 10,
    background: 'white',
    borderRadius: 5,
    position: 'relative',
    height: 'calc(20vw - 84px)',
    '& > div': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      visibility: 'hidden',
      zIndex: 1,
      transition: '.3s',
      '& button': {
        background: 'none',
        border: 0,
        fontSize: 20,
        margin: 5,
        color: 'white',
        cursor: 'pointer',
        transition: '.3s',
        '&:hover, &:focus': {
          color: theme.color.color7,
          outline: 'none'
        }
      },
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: '.3s',
    },
    '&:hover': {
      '& > div': {
        opacity: 1,
        visibility: 'initial'
      },
      '& img': {
        filter: 'brightness(.5)'
      }
    },
    [theme.breakpoints.down('lg')]: {
      width: 'calc(100% / 4 - 20px)',
      height: 'calc(25vw - 100px)'
    },
    [theme.breakpoints.down('md')]: {
      height: 'calc(25vw - 45px)'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% / 3 - 20px)',
      height: 'calc(33.3vw - 23px)'
    },
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% / 2 - 20px)',
      height: 'calc(50vw - 25px)',
      padding: 5
    }
  },
  preview: {
    background: 'rgba(0, 0, 0, .7)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10001,
    cursor: "zoom-out",
    '& img': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: 20,
    },
    "& button": {
      position: 'absolute',
      top: 10,
      right: 10,
      fontSize: 30,
      cursor: "pointer",
      transition: '.3s',
      background: 'none',
      border: 0,
      color: 'white',
      '&:hover, &:focus': {
        color: theme.color.color7,
        outline: 'none'
      }
    }
  },
});

export default styles;
