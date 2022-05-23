import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export function Loading() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bg={useColorModeValue("whiteAlpha.800", "gray.900")}
      justifyContent="center"
      alignItems="center"
      zIndex="10"
      position="relaive"
    >
      <Spinner
        color={useColorModeValue("cyan.600", "cyan.300")}
        thickness="4px"
        speed="0.65s"
        size="xl"
      />
    </Flex>
  );
}
