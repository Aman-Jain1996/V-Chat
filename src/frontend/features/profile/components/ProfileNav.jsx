import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProfileNav = () => {
  const { userDetails } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.indexOf("bookmarks") !== -1)
      setActiveTab("bookmarks");
    else if (location.pathname.indexOf("notifications") !== -1)
      setActiveTab("notifications");
    else setActiveTab("home");
  }, [location]);

  return (
    <Flex my="8">
      <Flex direction="column">
        <Box
          onClick={() => navigate(`/user/${userDetails.username}`)}
          p="4"
          bg={activeTab === "home" && "cyan.300"}
        >
          <Flex align="center" gap="2" cursor="pointer">
            <CottageOutlinedIcon style={{ fontSize: "1.6rem" }} />
            <Text>Home</Text>
          </Flex>
        </Box>
        <Divider borderColor="gray.400" />
        <Box
          onClick={() => navigate(`bookmarks`)}
          p="4"
          bg={activeTab === "bookmarks" && "cyan.300"}
        >
          <Flex align="center" gap="2" cursor="pointer">
            <BookmarksOutlinedIcon style={{ fontSize: "1.6rem" }} />
            <Text>Bookmarks</Text>
          </Flex>
        </Box>
        <Divider borderColor="gray.400" />
        <Box
          onClick={() => navigate(`notifications`)}
          p="4"
          bg={activeTab === "notifications" && "cyan.300"}
        >
          <Flex align="center" gap="2" cursor="pointer">
            <NotificationsNoneOutlinedIcon style={{ fontSize: "1.6rem" }} />
            <Text>Notifications</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
