import React, { useState } from "react";
import { Box, Link, ToggleButton, Avatar, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import avatar from "../../assets/images/ameba.png";

function ShopItem(props) {
  const { classes } = props;
  const [selected, setSelected] = useState(false);
  return (
    <Box>
      <Box
        sx={{
          overflowY: "auto",
          dislay: "flex",
          listStyle: "none",
          overflowX: "auto",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <ToggleButton
          fullWidth
          variant="contained"
          size="small"
          selected={selected}
          onChange={() => setSelected(!selected)}
          sx={{
            minWidth: 100,
            maxWidth: 100,
            height: 30,
            m: 0.5,
            bgcolor: "#fff",
            color: "#555",
            "&.active": {
              bgcolor: "#555",
              color: "#fff",
            },
          }}
        >
          Small
        </ToggleButton>
        <ToggleButton
          variant="contained"
          size="small"
          sx={{
            minWidth: 100,
            maxWidth: 100,
            height: 30,
            m: 0.5,
            bgcolor: "#fff",
            color: "#555",
            "&.active": {
              bgcolor: "#555",
              color: "#fff",
            },
          }}
        >
          Small
        </ToggleButton>
        <ToggleButton
          variant="contained"
          size="small"
          sx={{
            minWidth: 100,
            maxWidth: 100,
            height: 30,
            m: 0.5,
            bgcolor: "#fff",
            color: "#555",
            "&.active": {
              bgcolor: "#555",
              color: "#fff",
            },
          }}
        >
          Small
        </ToggleButton>
        <ToggleButton
          variant="contained"
          size="small"
          sx={{
            minWidth: 100,
            maxWidth: 100,
            height: 30,
            m: 0.5,
            bgcolor: "#fff",
            color: "#555",
            "&.active": {
              bgcolor: "#555",
              color: "#fff",
            },
          }}
        >
          Small
        </ToggleButton>
        <ToggleButton
          variant="contained"
          size="small"
          sx={{
            minWidth: 100,
            maxWidth: 100,
            height: 30,
            m: 0.5,
            bgcolor: "#fff",
            color: "#555",
            "&.active": {
              bgcolor: "#555",
              color: "#fff",
            },
          }}
        >
          Small
        </ToggleButton>
        <ToggleButton
          variant="contained"
          size="small"
          sx={{
            minWidth: 100,
            maxWidth: 100,
            height: 30,
            m: 0.5,
            bgcolor: "#fff",
            color: "#555",
            "&.active": {
              bgcolor: "#555",
              color: "#fff",
            },
          }}
        >
          Small
        </ToggleButton>
      </Box>
      <Box sx={{ boxShadow: 1, mt: 1 }}>
        <Box
          sx={{
            p: 0.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{ width: 60, height: 60 }}
          />
          <Box sx={{ ml: 1 }}>
            <Box sx={{ flexDirection: "row", display: "flex" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Tokyo
              </Typography>
              <Typography
                sx={{
                  width: 50,
                  height: 20,
                  bgcolor: "#555",
                  ml: 1,
                  textAlign: "center",
                  borderRadius: 1,
                  textTransform: "uppercase",
                  color: "#fff",
                }}
                variant="body2"
              >
                Host
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontSize: 14, color: "#555" }}>
              Japan, Tokyo, Taito City Yanaka3-11, yanaka kenshido
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ boxShadow: 1, mt: 1 }}>
        <Box
          sx={{
            p: 0.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{ width: 60, height: 60 }}
          />
          <Box sx={{ ml: 1 }}>
            <Box sx={{ flexDirection: "row", display: "flex" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Tokyo
              </Typography>
              <Typography
                sx={{
                  width: 50,
                  height: 20,
                  bgcolor: "#555",
                  ml: 1,
                  textAlign: "center",
                  borderRadius: 1,
                  textTransform: "uppercase",
                  color: "#fff",
                }}
                variant="body2"
              >
                Host
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontSize: 14, color: "#555" }}>
              Japan, Tokyo, Taito City Yanaka3-11, yanaka kenshido
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default withStyles(styles)(ShopItem);
