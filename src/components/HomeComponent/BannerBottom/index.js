import React, { useState } from "react";
import { withStyles, makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Carousel, { Modal, ModalGateway } from "react-images";
import styles from "./styles";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/707670/pexels-photo-707670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/23735/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/161309/traditional-and-technology-zojoji-temple-tokyo-culture-161309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 11,
    url: "https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 21,
    url: "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 31,
    url: "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 41,
    url: "https://images.pexels.com/photos/707670/pexels-photo-707670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function Information(props) {
  const { classes } = props;
  const [viewImage, setViewImage] = useState(false);
  const [indexImg, setIndexImg] = useState(0);

  const imageMap = () => {
    return images.map((item) => {
      item.src = item.url;

      return item;
    });
  };

  const roundedLength = images && 2 * Math.round(images.length / 2);

  const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("xs")]: {
      bannerMB: {
        columnCount: images && (images.length > 4 ? roundedLength / 2 : 2),
        width:
          images && (images.length > 4 ? `${roundedLength * 20}vw` : "100%"),
        columnGap: 0,
      },
    },
  }));
  const classMB = useStyles();

  const renderInfoBottom = () => {
    if (images && images.length > 0) {
      return images.map((item, index) => (
        <div
          onClick={() => {
            setViewImage(true);
            setIndexImg(index);
          }}
          className={classes.bannerItem}
          key={item.id}
        >
          <img alt="img" src={item.url} />
        </div>
      ));
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.bannerWrap}>
        <div className={`${classes.infoBottom} ${classMB.bannerMB}`}>
          {renderInfoBottom()}
        </div>
      </div>
      <ModalGateway>
        {viewImage ? (
          <Modal onClose={() => setViewImage(false)}>
            <Carousel currentIndex={indexImg} views={imageMap()} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

Information.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Information);
