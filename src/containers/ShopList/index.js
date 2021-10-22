import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import { NavLink } from "react-router-dom";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FiChevronDown } from "react-icons/fi";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";

import styles from "./styles";
import { data } from "./data";
import { Welcome } from "../../components/AsideComponent";
function ShopList(props) {
  const { hideAside, history } = props;
  const [locationMapped, setLocationMapped] = useState([]);

  const locations = useSelector((state) => state.general.locations);

  useEffect(() => {
    if (locations.length > 0) {
      let result = locations.filter((i) => `${i.cid_location_parent}` === "0");
      result = result.map((item, index) => {
        const child = locations.filter(
          (i) => i.cid_location_parent === item.id
        );
        item.children = child;
        item.index = index;
        // console.log(item);
        return item;
      });
      setLocationMapped(result);
    }
  }, [locations.length]);

  const renderLocation = () => {
    return (
      <div>
        {locationMapped.map((section) => {
          return (
            <Accordion>
              <AccordionSummary
                sx={{ bgcolor: "#666687", mb: 1 }}
                expandIcon={<FiChevronDown size={24} color="#fff" />}
                aria-controls="panel1a-content"
              >
                <Typography
                  sx={{ color: "#fff", fontSize: 18 }}
                  key={section.id}
                >
                  {section.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {section.children.map((item) => {
                  return (
                    <List sx={{ ml: 2 }}>
                      <ListItem disablePadding>
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#666687",
                            width: "100%",
                          }}
                          key={item.id}
                          to={{
                            pathname: `/shop-list/${item.id}`,
                            state: {
                              cid_location_parent: item.cid_location_parent,
                            },
                          }}
                        >
                          <ListItemText primary={item.name} />
                        </NavLink>
                      </ListItem>
                      <Divider />
                    </List>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  };
  return <div>{renderLocation()}</div>;
}
ShopList.propTypes = {
  // classes: PropTypes.object,
  locations: PropTypes.array,
  setCurrentLocation: PropTypes.func,
  currentLocation: PropTypes.object,
  hideAside: PropTypes.func,
  history: PropTypes.object,
};
export default withStyles(styles)(ShopList);
