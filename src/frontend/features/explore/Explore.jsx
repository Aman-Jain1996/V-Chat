import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Navigation } from "../../components/Navigation";
import { PostCard } from "../home/PostCard";
import { Suggestions } from "../home/Suggestions";

export const Explore = () => {
  return (
    <>
      <Navigation />
      <Flex m="2rem 6rem" minH="calc(100vh - 4rem)">
        <Flex flex="1 1 60%" justify="center">
          <Flex w="70%" justify="center" direction="column" gap="4">
            <Flex width="100%" border="1px" borderColor="gray.200" gap="4">
              <Button variant="outline" flex="1 1 50%">
                <TrendingUpOutlinedIcon />
                <Text pl="2">Trending Posts</Text>
              </Button>
              <Button variant="outline" flex="1 1 50%">
                <AccessTimeFilledOutlinedIcon />
                <Text pl="2">Latest Posts</Text>
              </Button>
            </Flex>
            <Flex direction="column" gap="6">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex="1 1 35%"
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
