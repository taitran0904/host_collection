const styles = theme => ({
  icon: {
    fontSize: 30,
    marginRight: 10,
    color: theme.color.primary
  },
  container: {
    marginTop: 30
  },
  tabContainer: {
    border: `4px solid ${theme.colors.color2}`,
    borderRadius: 10,
    overflow: "hidden"
  },
  tabBar: {
    width: "100%",
    background: "none",
    boxShadow: "none",

    "& > div": {
      minHeight: "auto"
    }
  },
  tabs: {
    minHeight: "auto",
    width: "100%",
    "& > div": {
      background: theme.color.color5
    }
  },
  tabItem: {
    position: "relative",
    zIndex: 1,
    minHeight: "auto",
    opacity: 1,
    width: "calc(100% / 3)",
    color: theme.color.color4,
    border: `1px solid ${theme.colors.color3}`,
    borderRightWidth: 0,
    maxWidth: "initial",
    overflow: "hidden",

    "& span": {
      fontSize: 20,
      textTransform: "initial",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",

      "& svg": {
        marginBottom: "0!important",
        marginRight: 10
      }
    },
    "&:hover": {
      color: theme.color.primary
    },
    "&.active": {
      color: "white!important",
      borderColor: theme.colors.primary,
      background: theme.color.primary
    }
  },
  indicator: {
    height: "100%",
    background: theme.color.primary,
    borderRadius: 5
  },
  tabPanel: {
    background: "white",

    "& .imgContainer": {
      background: "white",
      display: "flex",
      flexWrap: "wrap",
      padding: 10
    }
  },
  rankItem: {
    width: "calc(100% / 7 - 20px)",
    margin: 10,
    position: "relative",
    display: "block",

    "& h2": {
      fontFamily: "Ranking Font",
      color: "#ffa41b",
      textAlign: "center"
    },

    "& img": {
      borderRadius: 10,
      transition: ".3s"
    },

    "& p, & h5": {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical"
    },

    "& h5": {
      textAlign: "center"
    },

    "&.rank-1, &.rank-2, &.rank-3": {
      display: "flex",
      background: "#f4f4f4",
      borderRadius: 5,
      padding: "20px 10px",
      alignItems: "center",

      "& h2, & h5": {
        textAlign: "left"
      },

      "& .image": {
        position: "relative",

        "& button": {
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "white",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "&:hover": {
            borderColor: theme.colors.primary,
            background: theme.colors.primary,

            "& svg": {
              color: "white"
            }
          },

          "& svg": {
            fontSize: 24,
            color: theme.colors.gray2
          }
        }
      },

      "& img": {
        borderRadius: "50%",
        objectFit: "cover"
      }
    },

    "&.rank-1": {
      width: "calc(100% / 6 * 2.5 - 20px)",

      "& h2": {
        fontSize: 50
      },

      "& .info": {
        width: "calc(100% - 120px - 10px)",
        marginRight: 10
      },

      "& img": {
        width: 120,
        height: 120
      }
    },
    "&.rank-2": {
      width: "calc(100% / 6 * 1.9 - 20px)",

      "& h2": {
        fontSize: 40
      },

      "& .info": {
        width: "calc(100% - 100px - 10px)",
        marginRight: 10
      },

      "& img": {
        width: 100,
        height: 100
      }
    },
    "&.rank-3": {
      width: "calc(100% / 6 * 1.6 - 20px)",

      "& h2": {
        fontSize: 30
      },

      "& .info": {
        width: "calc(100% - 80px - 10px)",
        marginRight: 10
      },

      "& img": {
        width: 80,
        height: 80
      }
    },

    "&:hover img": {
      filter: "brightness(0.5)"
    }
  },

  rankType: {
    display: "flex",
    paddingTop: 20,
    marginLeft: 15,

    "& h5": {
      padding: "5px 20px",
      margin: "0 5px",
      fontSize: 16,
      color: theme.colors.gray,
      fontWeight: "600",
      borderRadius: 5,
      cursor: "pointer",
      transition: ".2s",

      "&:hover": {
        background: "#e1e1e1"
      },

      "&.active": {
        background: "#666666",
        color: "white"
      }
    }
  },
  [theme.breakpoints.down("lg")]: {
    rankItem: {
      width: "calc(100% / 7 - 20px)"
    }
  },
  [theme.breakpoints.down("sm")]: {
    rankItem: {
      width: "calc(100% / 4 - 20px)"
    }
  },
  [theme.breakpoints.down("xs")]: {
    container: {
      background: "white",
      margin: -15,
      padding: "0 10px",
      paddingTop: 0,
      paddingBottom: 20,
      marginTop: 25
    },
    tabContainer: {
      border: 0,
      borderRadius: 0,
      margin: "0 -10px"
    },
    rankItem: {
      width: "calc(100% / 2 - 10px)",
      margin: 5,
      marginBottom: 10,

      "&.rank-1, &.rank-2, &.rank-3": {
        width: "calc(100% - 10px)"
      },

      "&.rank-1": {
        "& h2": {
          fontSize: 40
        },

        "& .info": {
          width: "calc(100% - 100px - 10px)"
        },

        "& img": {
          width: 100,
          height: 100
        }
      },
      "&.rank-2": {
        "& h2": {
          fontSize: 35
        },

        "& .info": {
          width: "calc(100% - 90px - 10px)"
        },

        "& img": {
          width: 90,
          height: 90
        }
      },

      "&.rank-8, &.rank-9, &.rank-10": {
        width: "calc(100% / 3 - 10px)"
      }
    },

    tabPanel: {
      background: "white",

      "& .imgContainer": {
        padding: 5
      }
    },
    tabItem: {
      "& span": {
        fontSize: 12,
        justifyContent: "center",

        "& svg": {
          display: "none"
        }
      }
    }
  }
});

export default styles;
