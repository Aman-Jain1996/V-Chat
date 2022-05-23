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
import React, { useEffect } from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { logout } from "../auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditProfile } from "./EditProfile";
import { fetchUserDetails } from "./ProfileSlice";

export const ProfileCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const { colorMode, toggleColorMode } = useColorMode();
  const { userDetails } = useSelector((state) => state.auth);

  useEffect(() => {
    if (username) dispatch(fetchUserDetails(username));
  }, [username, userDetails]);

  return !userDetails?.username ? (
    <Loading />
  ) : (
    <Flex
      direction="column"
      align="center"
      justify="center"
      position="relative"
    >
      <IconButton
        color={useColorModeValue("black", "white")}
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
          name={userDetails?.firstName + userDetails?.lastName}
          src={userDetails?.avatarURL}
          alt="profile pic"
        />
      </Center>
      <Text
        fontSize="lg"
        fontWeight="bold"
        color={colorMode === "dark" && "white.800"}
      >
        {userDetails?.firstName + " " + userDetails?.lastName}
      </Text>
      <Text
        my="2"
        fontSize="sm"
        color={useColorModeValue("gray.700", "gray.300")}
      >
        {"@" + userDetails?.username}
      </Text>
      <EditProfile userDetails={userDetails} />
      <Text
        mx="auto"
        px="2"
        fontSize="md"
        textAlign="center"
        color={colorMode === "dark" && "gray.300"}
      >
        {userDetails?.bio}
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
            {userDetails.following.length}
          </Text>
          <Text color={colorMode === "dark" && "white.800"}>Following</Text>
        </Flex>
        <Flex direction="column" gap="1" align="center">
          <Text fontWeight="bold" color={colorMode === "dark" && "white.800"}>
            {userDetails.posts.length}
          </Text>
          <Text color={colorMode === "dark" && "white.800"}>Posts</Text>
        </Flex>
        <Flex direction="column" gap="1" align="center">
          <Text fontWeight="bold" color={colorMode === "dark" && "white.800"}>
            {userDetails.followers.length}
          </Text>
          <Text color={colorMode === "dark" && "white.800"}>Followers</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
