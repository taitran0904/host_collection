import React, { useState } from "react";
import { withStyles, makeStyles } from "@mui/styles";
import { Modal, Backdrop, Fade } from "@mui/material";
import { TiWarningOutline } from "react-icons/ti";
import PropTypes from "prop-types";
import styles from "./styles";
import TitlePage from "../../TitlePage";
import * as titleConstants from "../../../constants/ui/homepage";

const images = [
  {
    id: 1,
    name: "Alex",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 2,
    name: "Johnny Banks",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 3,
    name: "Jeremy McDonald dfgjdkfg jdfgk sdfgk jsdfg lsjdfgjl",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 4,
    name: "Dennis Marshall",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 5,
    name: "Will Gibson",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/festive-girl-posing-star-light_23-2147651829.jpg",
  },
  {
    id: 11,
    name: "Alex",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 21,
    name: "Johnny Banks",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 31,
    name: "Jeremy McDonald dfgjdkfg jdfgk sdfgk jsdfg lsjdfgjl",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 41,
    name: "Dennis Marshall",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 51,
    name: "Will Gibson",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/festive-girl-posing-star-light_23-2147651829.jpg",
  },
  {
    id: 12,
    name: "Alex",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 22,
    name: "Johnny Banks",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 32,
    name: "Jeremy McDonald dfgjdkfg jdfgk sdfgk jsdfg lsjdfgjl",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 42,
    name: "Dennis Marshall",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 52,
    name: "Will Gibson",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/festive-girl-posing-star-light_23-2147651829.jpg",
  },
  {
    id: 33,
    name: "Jeremy McDonald dfgjdkfg jdfgk sdfgk jsdfg lsjdfgjl",
    content: "lorem lorem lorem lorem lorem lorem",
    avatar:
      "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
];

function PickUp(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState({});

  const roundedLength = images && 2 * Math.round(images.length / 2);

  const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("xs")]: {
      pickUpMB: {
        columnCount: images && (images.length > 4 ? roundedLength / 2 : 2),
        width:
          images && (images.length > 4 ? `${roundedLength * 20}vw` : "100%"),
        columnGap: 0,
      },
    },
  }));
  const classMB = useStyles();

  const handleOpen = (item) => {
    setOpen(true);
    setPicked(item);
  };

  const handleClose = () => {
    setOpen(false);
    setPicked({});
  };

  const renderImg = () => {
    if (images && images.length > 0) {
      return images.map((item) => {
        return (
          <div
            onClick={() => handleOpen(item)}
            title={titleConstants.VIEW_DETAIL}
            className={classes.pickUpItem}
            key={item.id}
          >
            <img alt="img" src={item.avatar} />
            <h5>{item.name}</h5>
          </div>
        );
      });
    }
  };

  return (
    <div className={classes.container}>
      <TitlePage
        title={titleConstants.PICK_UP}
        icon={<TiWarningOutline className={classes.icon} />}
      />

      <div className={classes.pickUpWrap}>
        <div
          className={`${classes.pickUpContainer} ${classMB.pickUpMB} pick-up`}
        >
          {renderImg()}
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalContent}>
            <div>
              <img alt={picked.name} src={picked.avatar} />
              <h5>{picked.name}</h5>
            </div>
            <p>
              In at iaculis lorem. Praesent tempor dictum tellus ut molestie.
              Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut
              ligula cursus molestie at at dolor. Nulla est justo, pellentesque
              vel lectus eget, fermentum varius dui. Morbi faucibus quam sed
              efficitur interdum. Suspendisse in pretium magna. Vivamus nec orci
              purus. Quisque accumsan dictum urna semper laoreet. Sed id rutrum
              tellus. In nisi sapien, sagittis faucibus tincidunt et, lacinia id
              felis. Ut tempor lectus porta, tempus orci ac
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

PickUp.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PickUp);
