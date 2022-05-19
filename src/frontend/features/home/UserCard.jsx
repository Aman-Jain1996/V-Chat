import { Avatar, Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { HomeHeadingTextStyles } from "../../styles/homeStyles";

export const UserCard = () => {
  return (
    <>
      <Box my="4" borderRadius="lg" w="100%">
        <Flex>
          <Avatar
            mt="2"
            size="md"
            alignSelf="flex-start"
            name="user"
            src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
          />
          <Flex direction="column" mx="2" mt="2">
            <Text fontSize="md" fontWeight="bold">
              User Name
            </Text>
            <Text fontSize="xs" mx="2" color="gray.600">
              Follows you
            </Text>
          </Flex>
          <Button
            bg="cyan.300"
            color="black"
            maxH="12"
            w="max-content"
            ml="auto"
            transition="all .3s ease-in-out"
            alignSelf="center"
            _hover={{ bg: "cyan.500" }}
            _active={{ boxShadow: "md", bg: "cyan.300" }}
          >
            <Text fontSize="sm">+ Follow</Text>
          </Button>
        </Flex>
      </Box>
      <Divider my="4" borderColor="gray.400" w="100%" _last={{ d: "none" }} />
    </>
  );
};
