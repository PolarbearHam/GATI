import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";

import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  return (
    <Box
      sx={{
        height: 55,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            icon={<HomeOutlinedIcon fontSize="large" />}
            style={{ color: "#FF9494" }}
          />
          <BottomNavigationAction
            component={Link}
            to="/calendar"
            label="Calendar"
            icon={<CalendarMonthOutlinedIcon fontSize="large" />}
            style={{ color: "#FF9494" }}
          />
          <BottomNavigationAction
            component={Link}
            to="/photobook"
            label="PhotoBook"
            icon={<PhotoOutlinedIcon fontSize="large" />}
            style={{ color: "#FF9494" }}
          />
          <BottomNavigationAction
            component={Link}
            to="/gotg"
            label="가치가자"
            icon={<Diversity1OutlinedIcon fontSize="large" />}
            style={{ color: "#FF9494" }}
          />
          <BottomNavigationAction
            component={Link}
            to="/pictg"
            label="가치한장"
            icon={<PortraitOutlinedIcon fontSize="large" />}
            style={{ color: "#FF9494" }}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}
