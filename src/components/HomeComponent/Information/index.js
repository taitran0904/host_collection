import React from "react";
import { withStyles } from "@mui/styles";
import { FiAlertCircle } from "react-icons/fi";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import TitlePage from "../../TitlePage";
import * as titleConstants from "../../../constants/ui/homepage";
import ViewMoreHome from "../ViewMoreHome";

const informations = [
  {
    id: 1,
    date: "2019/08/08",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    date: "2019/08/08",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: 3,
    date: "2019/08/08",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: 4,
    date: "2019/08/08",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: 5,
    date: "2019/08/08",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

function Information(props) {
  const { classes } = props;

  const renderInfo = () => {
    if (informations && informations.length > 0) {
      return informations.map((item) => {
        return (
          <NavLink
            to={`/information/${item.id}`}
            className={classes.infoItem}
            key={item.id}
          >
            <FiAlertCircle />
            <div>
              <p>{item.date}</p>
              <h5>{item.content}</h5>
            </div>
          </NavLink>
        );
      });
    }
  };

  return (
    <div className={classes.container}>
      <TitlePage
        containerStyle={{ marginBottom: 0 }}
        title={titleConstants.INFORMATION}
        icon={<FiAlertCircle className={classes.icon} />}
      />
      <div>{renderInfo()}</div>
      <ViewMoreHome link="/information" />
    </div>
  );
}

Information.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Information);
