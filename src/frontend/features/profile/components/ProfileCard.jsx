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
import React, { useEffect } from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditProfile,
  logout,
  FollowingModal,
  unFollowUser,
} from "../../../features";
import { followUser } from "../../home/usersSlice";
import { fetchUserDetails } from "../ProfileSlice";
import { getUserPosts } from "../../posts/postsSlice";
import { Loading } from "../../../components";

export const ProfileCard = () => {
  const { username } = useParams();
  const { colorMode, toggleColorMode } = useColorMode();
  const { profileDetails } = useSelector((state) => state.profile);
  const { userDetails, authToken } = useSelector((state) => state.auth);
  const { userPosts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserDetails(username));
    dispatch(getUserPosts(username));
  }, [username]);

  return profileDetails?.username !== username ? (
    <Loading />
  ) : (
    <Flex
      direction="column"
      align="center"
      justify="center"
      position="relative"
    >
      {userDetails?.username === username ? (
        <IconButton
          color="inherit"
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
          {userDetails?.following.find(
            (user) => user._id === profileDetails._id
          ) ? (
            <Button
              aria-label="Following Button"
              my="4"
              variant="outline"
              onClick={() =>
                dispatch(
                  unFollowUser({
                    userId: profileDetails?._id,
                    authToken,
                    dispatch,
                  })
                )
              }
            >
              Following
            </Button>
          ) : (
            <Button
              aria-label="Following Button"
              my="4"
              variant="outline"
              onClick={() =>
                dispatch(
                  followUser({
                    userId: profileDetails?._id,
                    authToken,
                    dispatch,
                  })
                )
              }
            >
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
            profileDetails?.username === userDetails?.username
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
        // color={useColorModeValue("gray.700", "gray.300")}
      >
        {"@" + profileDetails?.username}
      </Text>
      {profileDetails.username === userDetails?.username && (
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
