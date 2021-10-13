import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { Tab, Tabs, AppBar, Box } from "@mui/material";
import { FiShare2, FiImage, FiVideo, FiMessageCircle } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from "prop-types";
import styles from "./styles";
import TitlePage from "../../TitlePage";
import * as titleConstants from "../../../constants/ui/homepage";
import ViewMoreHome from "../ViewMoreHome";

const images = [
  {
    id: 1,
    name: "Alex",
    url: "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 2,
    name: "Johnny Banks",
    url: "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 3,
    name: "Jeremy McDonald dfgjdkfg jdfgk sdfgk jsdfg lsjdfgjl",
    url: "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 4,
    name: "Dennis Marshall",
    url: "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 5,
    name: "Will Gibson",
    url: "https://image.freepik.com/free-photo/festive-girl-posing-star-light_23-2147651829.jpg",
  },
  {
    id: 11,
    name: "Alex",
    url: "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 21,
    name: "Johnny Banks",
    url: "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 31,
    name: "Jeremy McDonald dfgjdkfg jdfgk sdfgk jsdfg lsjdfgjl",
    url: "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 41,
    name: "Dennis Marshall",
    url: "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 51,
    name: "Will Gibson",
    url: "https://image.freepik.com/free-photo/festive-girl-posing-star-light_23-2147651829.jpg",
  },
  {
    id: 12,
    name: "Alex",
    url: "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 22,
    name: "Johnny Banks",
    url: "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 412,
    name: "Dennis Marshall",
    url: "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 32,
    name: "Jeremy McDonald dfgjdkfg jdfgk sdfgk jsdfg lsjdfgjl",
    url: "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 42,
    name: "Dennis Marshall",
    url: "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function SNSComponent(props) {
  const { classes, hostDetail, hiddenViewMore, isPage } = props;
  const [value, setValue] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [viewImage, setViewImage] = useState(false);
  const [indexImg, setIndexImg] = useState(0);

  const imageMap = () => {
    return images.map((item) => {
      item.src = item.url;

      return item;
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 158) {
      setIsFixed(true);
    } else if (window.pageYOffset < 158) {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    if (isPage) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isPage]);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const renderImg = () => {
    if (images && images.length > 0) {
      return images.map((item, index) => {
        return (
          <div
            onClick={() => {
              setViewImage(true);
              setIndexImg(index);
            }}
            className={classes.photoItem}
            key={item.id}
          >
            <img alt="img" src={item.url} />
            {!hostDetail && <h5>{item.name}</h5>}
          </div>
        );
      });
    }
  };

  const renderTweet = () => {
    if (images && images.length > 0) {
      return images.map((item, index) => {
        return (
          <div
            onClick={() => {
              setViewImage(true);
              setIndexImg(index);
            }}
            className={classes.photoItem}
            key={item.id}
          >
            <img alt="img" src={item.url} />
            {!hostDetail && <h5>{item.name}</h5>}
          </div>
        );
      });
    }
  };

  const renderBlog = () => {
    if (images && images.length > 0) {
      return images.map((item, index) => {
        return (
          <div
            onClick={() => {
              setViewImage(true);
              setIndexImg(index);
            }}
            className={classes.photoItem}
            key={item.id}
          >
            <img alt="img" src={item.url} />
            {!hostDetail && <h5>{item.name}</h5>}
          </div>
        );
      });
    }
  };

  return (
    <div className={classes.container}>
      {!hostDetail && (
        <TitlePage title="SNS" icon={<FiShare2 className={classes.icon} />} />
      )}
      <div className={classes.tabContainer}>
        <AppBar
          position="static"
          color="default"
          className={`${classes.tabBar} ${isFixed ? "fixed" : ""}`}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            classes={{
              indicator: isPage ? classes.indicatorHidden : classes.indicator,
            }}
          >
            <Tab
              className={`${classes.tabItem} ${value === 0 ? `active` : ""}`}
              label={titleConstants.PHOTO}
              icon={<FiImage />}
              {...a11yProps(0)}
            />
            <Tab
              className={`${classes.tabItem} ${value === 1 ? `active` : ""}`}
              label={titleConstants.VIDEO}
              icon={<FiVideo />}
              {...a11yProps(1)}
            />
            <Tab
              className={`${classes.tabItem} ${value === 2 ? `active` : ""}`}
              label={titleConstants.TWEET}
              icon={<FiMessageCircle />}
              {...a11yProps(2)}
            />
            <Tab
              style={{ borderWidth: 1 }}
              className={`${classes.tabItem} ${value === 3 ? `active` : ""}`}
              label={titleConstants.BLOG}
              icon={<FaBlogger />}
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>
        <TabPanel className={classes.tabPanel} value={value} index={0}>
          {renderImg()}
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={1}>
          {renderImg()}
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={2}>
          {renderTweet()}
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={3}>
          {renderBlog()}
        </TabPanel>
      </div>
      {!hostDetail && !hiddenViewMore && <ViewMoreHome link="/sns-page" />}
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

SNSComponent.propTypes = {
  classes: PropTypes.object,
  hostDetail: PropTypes.any,
  hiddenViewMore: PropTypes.any,
  isPage: PropTypes.any,
};

export default withStyles(styles)(SNSComponent);
