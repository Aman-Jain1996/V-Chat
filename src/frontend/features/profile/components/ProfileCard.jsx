import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditProfile, logout, FollowingModal } from "../../../features";

export const ProfileCard = ({ profileDetails, userPosts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.auth);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      position="relative"
    >
      {profileDetails.username === userDetails.username ? (
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
      ) : (
        <Box position="absolute" top="4" right="4">
          {userDetails.following.find(
            (user) => user._id === profileDetails._id
          ) ? (
            <Button aria-label="Following Button" my="4" variant="outline">
              Following
            </Button>
          ) : (
            <Button aria-label="Following Button" my="4" variant="outline">
              Follow
            </Button>
          )}
        </Box>
      )}
      <Center mb="4">
        <Avatar
          mt="2"
          size="xl"
          alignSelf="flex-start"
          name={profileDetails?.firstName + profileDetails?.lastName}
          src={
            profileDetails.username === userDetails.username
              ? userDetails?.avatarURL
              : profileDetails?.avatarURL
          }
          alt="profile pic"
        />
      </Center>
      <Text
        fontSize="lg"
        fontWeight="bold"
        color={colorMode === "dark" && "white.800"}
      >
        {profileDetails?.firstName + " " + profileDetails?.lastName}
      </Text>
      <Text
        my="2"
        fontSize="sm"
        color={useColorModeValue("gray.700", "gray.300")}
      >
        {"@" + profileDetails?.username}
      </Text>
      {profileDetails.username === userDetails.username && (
        <EditProfile profileDetails={profileDetails} />
      )}
      {profileDetails?.bio && (
        <Text
          mx="auto"
          mt="4"
          px="2"
          fontSize="md"
          textAlign="center"
          color={colorMode === "dark" && "gray.300"}
        >
          {profileDetails?.bio}
        </Text>
      )}
      {profileDetails?.websiteURL && (
        <Link
          isExternal
          href={profileDetails?.websiteURL}
          mx="auto"
          mt="4"
          px="2"
          fontSize="md"
          textAlign="center"
          color="blue.500"
          _focus={{ boxShadow: "none" }}
        >
          {profileDetails?.websiteURL}
        </Link>
      )}
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
          <Text color={colorMode === "dark" && "white.800"}>Posts</Text>
          <Text fontWeight="bold" color={colorMode === "dark" && "white.800"}>
            {userPosts?.length}
          </Text>
        </Flex>
        <FollowingModal
          followingUsers={profileDetails?.following}
          Datafor={"following"}
        />
        <FollowingModal
          followingUsers={profileDetails?.followers}
          Datafor={"followers"}
        />
      </Flex>
    </Flex>
  );
};
