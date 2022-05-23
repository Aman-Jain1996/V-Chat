import { Divider, Flex, Heading, useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PostCard } from "../home/PostCard";
import { Suggestions } from "../home/Suggestions";
import { Navigation } from "../../components/Navigation";
import { ProfileCard } from "./ProfileCard";
import { ProfileNav } from "./ProfileNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "./ProfileSlice";
import { Loading } from "../../components";

export const Profile = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const { userDetails } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  

  return !userDetails?.username ? (
    <Loading />
  ) : (
    <>
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
            <Heading mb="4" fontSize="2xl">
              Your Posts
            </Heading>
            <Flex direction="column" gap="6">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </Flex>
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
