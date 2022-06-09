import { Divider, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation, ScrollToTop } from "../../../components";
import { ProfileNav, ProfileCard, Suggestions } from "../../../features";

export const Profile = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Flex m="2rem 4rem" minH="calc(100vh - 4rem)">
        <Flex
          flex="1 1 15%"
          position="sticky"
          top="6rem"
          bottom="2rem"
          justify="center"
          maxH="calc(100vh - 4rem)"
          mb="2rem"
          color={colorMode === "dark" && "white"}
        >
          <ProfileNav />
        </Flex>
        <Flex flex="1 1 55%" justify="center">
          <Flex w="70%" justify="center" direction="column" gap="4">
            <ProfileCard />
            <Divider my="4" borderColor="gray.400" />
            <Outlet />
          </Flex>
        </Flex>
        <Flex
          flex="1 1 30%"
          position="sticky"
          top="6rem"
          bottom="2rem"
          justify="center"
          maxH="calc(100vh - 4rem)"
          overflowY="auto"
          mb="2rem"
        >
          <Suggestions />
        </Flex>
      </Flex>
    </>
  );
};
