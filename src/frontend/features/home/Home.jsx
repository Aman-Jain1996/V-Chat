import {
  Button,
  Divider,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Navigation } from "../../components/Navigation";
import { CreatePost } from "./CreatePost";
import { PostCard } from "./PostCard";
import { Suggestions } from "./Suggestions";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Flex
        m="2rem 6rem"
        minH="calc(100vh - 4rem)"
        bg={useColorModeValue("white.800", "white.600")}
      >
        <Flex flex="1 1 60%" justify="center">
          <Flex w="70%" justify="center" direction="column" gap="4">
            <CreatePost />
            <Divider my="4" borderColor="gray.400" />
            <Flex
              width="100%"
              border="1px"
              borderColor={useColorModeValue("gray.200", "gray.800")}
              gap="4"
              p="4"
              mb="6"
              borderRadius="lg"
              bg={useColorModeValue("white.800", "black.700")}
              boxShadow="sm"
            >
              <Button
                aria-label="trending posts"
                variant="outline"
                flex="1 1 50%"
              >
                <TrendingUpOutlinedIcon />
                <Text pl="2">Trending Posts</Text>
              </Button>
              <Button
                aria-label="latest posts"
                variant="outline"
                flex="1 1 50%"
              >
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
