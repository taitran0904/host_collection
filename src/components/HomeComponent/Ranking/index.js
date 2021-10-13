import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { Tab, Tabs, AppBar, Box } from "@mui/material";
import { FaStore, FaHeartbeat } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import { IoMdWine, IoMdHeart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles";
import TitlePage from "../../TitlePage";
import * as titleConstants from "../../../constants/ui/homepage";

const images = [
  {
    id: 1,
    rank: 1,
    name: "Jeremy McDonald ",
    url: "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 2,
    rank: 2,
    name: "Johnny Banks",
    url: "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 3,
    rank: 3,
    name: "Alex",
    url: "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 4,
    rank: 4,
    name: "Dennis Marshall",
    url: "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 5,
    rank: 5,
    name: "Will Gibson",
    url: "https://image.freepik.com/free-photo/festive-girl-posing-star-light_23-2147651829.jpg",
  },
  {
    id: 6,
    rank: 6,
    name: "Alex",
    url: "https://image.freepik.com/free-photo/cute-girl-with-hairdryer_23-2147643788.jpg",
  },
  {
    id: 7,
    rank: 7,
    name: "Johnny Banks",
    url: "https://image.freepik.com/free-photo/portrait-modern-man_23-2147961417.jpg",
  },
  {
    id: 8,
    rank: 8,
    name: "Jeremy McDonald dfgjdkfg jdfgk sdfgk jsdfg lsjdfgjl",
    url: "https://image.freepik.com/free-photo/teenage-girl-lifestyle-concept_23-2148093985.jpg",
  },
  {
    id: 9,
    rank: 9,
    name: "Dennis Marshall",
    url: "https://image.freepik.com/free-photo/scared-girl_23-2148155724.jpg",
  },
  {
    id: 10,
    rank: 10,
    name: "Will Gibson",
    url: "https://image.freepik.com/free-photo/festive-girl-posing-star-light_23-2147651829.jpg",
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

function Ranking(props) {
  const { classes } = props;
  const [value, setValue] = useState(0);
  const [type, setType] = useState("daily");
  const [focused, setFocused] = useState(false);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const onDisableButton = (e) => {
    if (focused) {
      e.preventDefault();
    }
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  const _renderTopRank = (item) => {
    return (
      <NavLink
        onClick={(e) => onDisableButton(e)}
        to={`/host-detail/${item.id}`}
        className={`${classes.rankItem} ${`rank-${item.rank}`}`}
        key={item.id}
      >
        <div className="info">
          <h2>{`No. ${item.rank}`}</h2>
          <h5>{item.name}</h5>
          <div className="desc">
            <p>lorem lorem</p>
            <p>lorem lorem lorem</p>
            <p>lorem lorem lorem</p>
          </div>
        </div>

        <div className="image">
          <img alt="img" src={item.url} />
          <button
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={() => alert("You just liked you")}
            type="button"
          >
            <IoMdHeart />
          </button>
        </div>
      </NavLink>
    );
  };

  const _renderRestRank = (item) => {
    return (
      <NavLink
        to={`/host-detail/${item.id}`}
        className={`${classes.rankItem} ${`rank-${item.rank}`}`}
        key={item.id}
      >
        <h2>{item.rank}</h2>
        <div className="image">
          <img alt="img" src={item.url} />
        </div>
        <h5>{item.name}</h5>
      </NavLink>
    );
  };

  const _renderAll = () => {
    return images.map((item) => {
      if (item.rank <= 3) {
        return _renderTopRank(item);
      }
      return _renderRestRank(item);
    });
  };

  const _renderType = () => {
    const types = [
      { value: "daily", label: titleConstants.DAILY },
      { value: "week", label: titleConstants.WEEK },
      { value: "month", label: titleConstants.MONTH },
    ];
    return (
      <div className={classes.rankType}>
        {types.map((item) => (
          <h5
            key={item.value}
            className={type === item.value ? "active" : ""}
            item={item.value}
            onClick={() => setType(item.value)}
          >
            {item.label}
          </h5>
        ))}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <TitlePage
        title={titleConstants.RANKING}
        icon={<FiBarChart className={classes.icon} />}
      />
      <div className={classes.tabContainer}>
        <AppBar position="static" color="default" className={classes.tabBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            classes={{ indicator: classes.indicator }}
          >
            <Tab
              className={`${classes.tabItem} ${value === 0 ? `active` : ""}`}
              label={titleConstants.HOST}
              icon={<IoMdWine />}
              {...a11yProps(0)}
            />
            <Tab
              className={`${classes.tabItem} ${value === 1 ? `active` : ""}`}
              label={titleConstants.SHOP}
              icon={<FaStore />}
              {...a11yProps(1)}
            />
            <Tab
              className={`${classes.tabItem} ${value === 2 ? `active` : ""}`}
              label={titleConstants.FAVORITE}
              icon={<FaHeartbeat />}
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <TabPanel className={classes.tabPanel} value={value} index={0}>
          {_renderType()}
          <div className="imgContainer">{_renderAll()}</div>
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={1}>
          {_renderType()}
          <div className="imgContainer">{_renderAll()}</div>
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={2}>
          {_renderType()}
          <div className="imgContainer">{_renderAll()}</div>
        </TabPanel>
      </div>
    </div>
  );
}

Ranking.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Ranking);
