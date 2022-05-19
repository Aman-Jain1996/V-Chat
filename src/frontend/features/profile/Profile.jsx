import { Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { PostCard } from "../home/PostCard";
import { Suggestions } from "../home/Suggestions";
import { Navigation } from "../../components/Navigation";
import { ProfileCard } from "./ProfileCard";
import { ProfileNav } from "./ProfileNav";

export const Profile = () => {
  return (
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
