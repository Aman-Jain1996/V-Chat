import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export const ProfileNav = () => {
  return (
    <Flex my="8">
      <Flex direction="column">
        <Flex align="center" gap="2" cursor="pointer">
          <CottageOutlinedIcon style={{ fontSize: "1.6rem" }} />
          <Text>Home</Text>
        </Flex>
        <Divider my="6" borderColor="gray.400" />
        <Flex align="center" gap="2" cursor="pointer">
          <BookmarksOutlinedIcon style={{ fontSize: "1.6rem" }} />
          <Text>Bookmarks</Text>
        </Flex>
        <Divider my="6" borderColor="gray.400" />
        <Flex align="center" gap="2" cursor="pointer">
          <NotificationsNoneOutlinedIcon style={{ fontSize: "1.6rem" }} />
          <Text>Notifications</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
