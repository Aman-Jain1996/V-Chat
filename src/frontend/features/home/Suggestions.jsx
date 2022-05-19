import { Divider, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { UserCard } from "./UserCard";

export const Suggestions = () => {
  return (
    <Flex direction="column" align="center" py="4" px="8" gap="8" w="100%">
      <Text
        position="sticky"
        top="0"
        fontSize="lg"
        bg="white.800"
        zIndex="100"
        w="100%"
        textAlign="center"
        borderBottom="1px"
        pb="2"
        borderBottomColor="cyan.600"
      >
        Suggestions for You
      </Text>
      <Flex w="100%" direction="column" align="flex-start" >
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
