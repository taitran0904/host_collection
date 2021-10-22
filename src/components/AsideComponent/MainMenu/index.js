import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import uniqid from "uniqid";
import styles from "./styles";
import * as titleContants from "../../../constants/ui/aside";

const mainMenu = [
  {
    id: uniqid(),
    name: titleContants.MY_PAGE,
    icon: <FiUser size={18} />,
    to: "/my-page",
    exact: false,
  },
];

function MainMenu(props) {
  const { classes, mobile, hideAside } = props;

  const showMenus = (mainMenu) => {
    const { classes } = props;
    let result = null;

    if (mainMenu.length > 0) {
      result = mainMenu.map((menu) => {
        return (
          <NavLink
            key={`${menu.name}-${menu.id}`}
            className={classes.mainLink}
            to={menu.to}
            exact={menu.exact}
            onClick={() => hideAside && hideAside()}
          >
            <span className={classes.icon}>{menu.icon}</span>
            {!mobile && menu.name}
          </NavLink>
        );
      });
    }

    return result;
  };

  return <div className={`${classes.mainMenu}`}>{showMenus(mainMenu)}</div>;
}

MainMenu.propTypes = {
  classes: PropTypes.object,
  mobile: PropTypes.string,
  hideAside: PropTypes.func,
};

export default withStyles(styles)(MainMenu);
