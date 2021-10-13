import React from "react";
import { withStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PropTypes from "prop-types";
import styles from "./styles";
import "./styles.css";

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
];

function BannerSlider(props) {
  const { classes, isHostDetail } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: "progressive",
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  const renderImg = () => {
    if (images && images.length > 0) {
      return images.map((item) => (
        <img key={item.id} alt="img" src={item.url} />
      ));
    }
  };

  return (
    <div
      style={isHostDetail && { margin: 0 }}
      className={`${classes.container} banner banner-slider`}
    >
      <Slider {...settings}>{renderImg()}</Slider>
    </div>
  );
}

BannerSlider.propTypes = {
  classes: PropTypes.object,
  isHostDetail: PropTypes.any,
};

export default withStyles(styles)(BannerSlider);
