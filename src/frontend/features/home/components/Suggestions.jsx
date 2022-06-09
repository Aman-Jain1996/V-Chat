import { Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "../../../components";

export const Suggestions = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const { colorMode, toggleColorMode } = useColorMode();
  const [suggestedUser, setSuggestedUser] = useState([]);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    setSuggestedUser(
      users?.filter(
        (currUser) =>
          !userDetails.following.find(
            (innerCurrUser) => innerCurrUser._id === currUser._id
          ) && currUser.username !== userDetails.username
      )
    );
  }, [users, userDetails]);

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
        {suggestedUser?.map((user) => (
          <UserCard key={user._id} userData={user} />
        ))}
      </Flex>
    </Flex>
  );
};
