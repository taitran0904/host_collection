import React, { useState, useEffect, useCallback } from "react";
import { Box, Button, ToggleButton, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import { fetchShopByLocationAPI } from "../../apis/shop";
import { IMAGE_BASE_URL } from "../../constants";
import NoLogo from "../../assets/images/no-logo.png";
import { useLocation } from "react-router-dom";

function ShopListChild(props) {
  const { match } = props;
  const [selected, setSelected] = useState(false);
  const [childItem, setchildItem] = useState([]);
  const [locationMapped, setLocationMapped] = useState([]);

  const [shopList, setShopList] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const locations = useSelector((state) => state.general.locations);

  const loc = useLocation();

  useEffect(() => {
    if (locations.length > 0) {
      let result = locations.filter((i) => `${i.cid_location_parent}` === "0");
      result = result.map((item, index) => {
        const child = locations.filter(
          (i) => i.cid_location_parent === item.id
        );
        item.children = child;
        item.index = index;
        return item;
      });
      setLocationMapped(result);
    }
  }, [locations.length]);

  useEffect(() => {
    let result;
    if (locations.length > 0)
      result = locations.filter((i) => i.id === loc.state.cid_location_parent);

    setchildItem(result);
    setCurrentLocation(match?.params?.id);
  }, [match?.params?.id, locations.length]);

  console.log(childItem);
  const fetchShopList = useCallback(async () => {
    console.log(currentLocation.id);
    try {
      const res = await fetchShopByLocationAPI(currentLocation?.id, token);
      setShopList(res.data.length > 0 ? res.data[0].shopList : []);
    } catch (error) {
      //
    }
  }, [currentLocation]);

  useEffect(() => {
    fetchShopList();
  }, [fetchShopList]);

  const _getCareer = (id) => {
    const careers = [
      { id: 1, name: "HOST" },
      { id: 2, name: "キャバクラ" },
      { id: 3, name: "BAR" },
      { id: 4, name: "RESTAURANT" },
    ];

    const career = careers.find((i) => i.id === id);
    return career?.name || "";
  };
  console.log(childItem);

  return (
    <Box>
      <Box
        sx={{
          listStyle: "none",
          overflowX: "auto",
          flexDirection: "row",
          display: "flex",
        }}
      >
        {childItem[0]?.children?.map((item) => {
          return (
            <button
              key={item.id}
              style={{
                border:
                  item.id === currentLocation.id ? "none" : "1px solid #e1e1e1",
                textAlign: "center",
                minWidth: 100,
                maxWidth: 100,
                height: 30,
                margin: 5,
                borderRadius: 5,
                dislay: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  item.id === currentLocation.id ? "#666687" : "#fff",
                color: item.id === currentLocation.id ? "#fff" : "#666687",
                marginRight: 10,
                fontSize: 18,
              }}
              onClick={() =>
                item.id !== currentLocation?.id && setCurrentLocation(item)
              }
            >
              {item.name}
            </button>
          );
        })}
      </Box>
      {shopList.map((item) => {
        return (
          <Box sx={{ boxShadow: 1, mt: 1, borderRadius: 2, p: 1 }}>
            <Box
              sx={{
                p: 0.5,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                src={
                  item.avatar_image === null
                    ? NoLogo
                    : `${IMAGE_BASE_URL}/shop/logo/${item.avatar_image}`
                }
                sx={{ width: 70, height: 70 }}
              />
              <Box sx={{ ml: 1 }}>
                <Box sx={{ flexDirection: "row", display: "flex" }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      pl: 1,
                      pr: 1,
                      height: 20,
                      bgcolor: "#666687",
                      ml: 1,
                      textAlign: "center",
                      borderRadius: 1,
                      textTransform: "uppercase",
                      color: "#fff",
                    }}
                    variant="body2"
                  >
                    {_getCareer(item.cid_career)}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{ fontSize: 14, color: "#555" }}
                >
                  {item.address}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
export default withStyles(styles)(ShopListChild);
