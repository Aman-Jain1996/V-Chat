import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../features";

export const SortButton = () => {
  const { filterBy } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
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
        variant={filterBy === "trending" ? "solidPrimary" : "outline"}
        flex="1 1 50%"
        onClick={() => {
          filterBy !== "trending" && dispatch(changeFilter("trending"));
        }}
      >
        <TrendingUpOutlinedIcon />
        <Text pl="2">Trending Posts</Text>
      </Button>
      <Button
        aria-label="latest posts"
        variant={filterBy === "latest" ? "solidPrimary" : "outline"}
        flex="1 1 50%"
        onClick={() => {
          filterBy !== "latest" && dispatch(changeFilter("latest"));
        }}
      >
        <AccessTimeFilledOutlinedIcon />
        <Text pl="2">Latest Posts</Text>
      </Button>
    </Flex>
  );
};
