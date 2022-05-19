import { Avatar, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const ProfileCard = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Center mb="4">
        <Avatar
          mt="2"
          size="xl"
          alignSelf="flex-start"
          name="user"
          src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
        />
      </Center>
      <Text fontSize="lg" fontWeight="bold">
        User Name
      </Text>
      <Text my="2" fontSize="sm" color="gary.400">
        User@email.com
      </Text>
      <Button my="4" variant="outline">
        Edit Profile
      </Button>
      <Text mx="auto" px="2" fontSize="md" textAlign="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe
        dignissimos perspiciatis cupiditate sit a quam maiores exercitationem
        voluptatem fugit?
      </Text>
      <Flex
        justify="space-between"
        mx="4"
        my="6"
        w="80%"
        bg="white.900"
        p="6"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Flex direction="column" gap="1" align="center">
          <Text fontWeight="bold">200</Text>
          <Text>Following</Text>
        </Flex>
        <Flex direction="column" gap="1" align="center">
          <Text fontWeight="bold">20</Text>
          <Text>Posts</Text>
        </Flex>
        <Flex direction="column" gap="1" align="center">
          <Text fontWeight="bold">20.6k</Text>
          <Text>Followers</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
