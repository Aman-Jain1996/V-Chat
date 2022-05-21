import {
  Avatar,
  Button,
  Center,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { logout } from "../auth/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProfileCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      position="relative"
    >
      <IconButton
        color={colorMode === "dark" && "white"}
        title="Logout"
        position="absolute"
        right="8"
        top="4"
        aria-label="logout icon"
        variant="iconButton"
        icon={<LogoutOutlinedIcon style={{ fontSize: "2rem" }} />}
        onClick={() => {
          dispatch(logout());
          navigate("/", { replace: true });
        }}
      ></IconButton>
      <Center mb="4">
        <Avatar
          mt="2"
          size="xl"
          alignSelf="flex-start"
          name="user"
          src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
        />
      </Center>
      <Text
        fontSize="lg"
        fontWeight="bold"
        color={colorMode === "dark" && "white.800"}
      >
        Aman Jain
      </Text>
      <Text
        my="2"
        fontSize="sm"
        color={useColorModeValue("gray.700", "gray.300")}
      >
        @Aman_Jain
      </Text>
      <Button aria-label="Edit Profile" my="4" variant="outline">
        Edit Profile
      </Button>
      <Text
        mx="auto"
        px="2"
        fontSize="md"
        textAlign="center"
        color={colorMode === "dark" && "gray.300"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe
        dignissimos perspiciatis cupiditate sit a quam maiores exercitationem
        voluptatem fugit?
      </Text>
      <Flex
        justify="space-between"
        mx="4"
        my="6"
        w="80%"
        bg={useColorModeValue("white.900", "black.600")}
        p="6"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Flex direction="column" gap="1" align="center">
          <Text fontWeight="bold" color={colorMode === "dark" && "white.800"}>
            200
          </Text>
          <Text color={colorMode === "dark" && "white.800"}>Following</Text>
        </Flex>
        <Flex direction="column" gap="1" align="center">
          <Text fontWeight="bold" color={colorMode === "dark" && "white.800"}>
            20
          </Text>
          <Text color={colorMode === "dark" && "white.800"}>Posts</Text>
        </Flex>
        <Flex direction="column" gap="1" align="center">
          <Text fontWeight="bold" color={colorMode === "dark" && "white.800"}>
            20.6k
          </Text>
          <Text color={colorMode === "dark" && "white.800"}>Followers</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
