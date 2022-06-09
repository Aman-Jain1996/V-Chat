import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsService } from "../services";
import { followUser } from "../features";

export const UserCard = ({ userData, modalData, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [activeUser, setActiveUser] = useState(userData);

  useEffect(() => {
    (async () => {
      if (modalData) {
        const response = await getUserDetailsService(userData.username);
        setActiveUser(response.data.user);
      }
    })();
  }, [userData]);

  return (
    <>
      <Box my="4" borderRadius="lg" w="100%">
        <Flex>
          <Flex
            cursor="pointer"
            onClick={() => {
              navigate(`/user/${activeUser.username}`);
              onClose && onClose();
            }}
          >
            <Avatar
              mt="2"
              size="md"
              alignSelf="flex-start"
              name={activeUser.firstName + " " + activeUser.lastName}
              src={activeUser?.avatarURL}
            />
            <Flex direction="column" mx="2" mt="3">
              <Text
                fontSize="md"
                fontWeight="bold"
                color={useColorModeValue("black", "white.800")}
              >
                {activeUser.firstName + " " + activeUser.lastName}
              </Text>
              <Text
                fontSize="xs"
                mx="2"
                color={useColorModeValue("gray.800", "white.800")}
              >
                @{activeUser.username}
              </Text>
            </Flex>
          </Flex>
          {!modalData && (
            <Button
              aria-label="follow"
              bg={useColorModeValue("cyan.300", "cyan.400")}
              color="black"
              maxH="12"
              w="max-content"
              ml="auto"
              transition="all .3s ease-in-out"
              alignSelf="center"
              _hover={{ bg: "cyan.500" }}
              _active={{ boxShadow: "md", bg: "cyan.300" }}
              onClick={() =>
                dispatch(
                  followUser({ userId: userData?._id, authToken, dispatch })
                )
              }
            >
              <Text fontSize="sm">+ Follow</Text>
            </Button>
          )}
        </Flex>
      </Box>
      <Divider my="4" borderColor="gray.400" w="100%" _last={{ d: "none" }} />
    </>
  );
};
