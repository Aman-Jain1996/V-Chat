import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Notifications = () => {
  return (
    <>
      <Heading mb="4" fontSize="2xl">
        Your Notifications
      </Heading>
      <Flex direction="column" gap="6">
        <Text textAlign="center" fontSize="24" pt="4">
          No Notifications Yet*
        </Text>
      </Flex>
    </>
  );
};
