import {
  Divider,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { UserCard } from "./UserCard";

export const Suggestions = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction="column" align="center" py="4" px="8" gap="8" w="100%">
      <Text
        position="sticky"
        top="0"
        fontSize="lg"
        bg={useColorModeValue("white.800", "transparent")}
        zIndex="100"
        w="100%"
        textAlign="center"
        borderBottom="1px"
        pb="2"
        color={colorMode === "dark" && "white"}
        borderBottomColor={useColorModeValue("cyan.600", "gray.400")}
      >
        Suggestions for You
      </Text>
      <Flex w="100%" direction="column" align="flex-start">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Flex>
    </Flex>
  );
};
