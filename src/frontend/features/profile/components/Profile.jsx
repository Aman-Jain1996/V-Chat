import { Divider, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading, Navigation, ScrollToTop } from "../../../components";
import {
  ProfileNav,
  ProfileCard,
  PostCard,
  Suggestions,
  fetchUserDetails,
  getUserPosts,
} from "../../../features";

export const Profile = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { profileDetails } = useSelector((state) => state.profile);
  const { userDetails: loggedInUserDetails } = useSelector(
    (state) => state.auth
  );
  const { userPosts } = useSelector((state) => state.posts);
  const { username } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(fetchUserDetails(username));
      dispatch(getUserPosts(username));
    }
  }, [username, loggedInUserDetails]);

  return !profileDetails?.username ? (
    <Loading />
  ) : (
    <>
      <ScrollToTop />
      <Navigation />
      <Flex m="2rem 4rem" minH="calc(100vh - 4rem)">
        <Flex
          flex="1 1 15%"
          position="sticky"
          top="6rem"
          bottom="2rem"
          justify="center"
          maxH="calc(100vh - 4rem)"
          mb="2rem"
          color={colorMode === "dark" && "white"}
        >
          <ProfileNav />
        </Flex>
        <Flex flex="1 1 55%" justify="center">
          <Flex w="70%" justify="center" direction="column" gap="4">
            <ProfileCard
              profileDetails={profileDetails}
              userPosts={userPosts}
            />
            <Divider my="4" borderColor="gray.400" />
            <Heading mb="4" fontSize="2xl">
              {loggedInUserDetails.username === profileDetails.username
                ? "Your"
                : profileDetails.firstName + "'s"}{" "}
              Posts
            </Heading>
            <Flex direction="column" gap="6">
              {userPosts.length ? (
                userPosts.map((post) => (
                  <PostCard key={post._id} postData={post} />
                ))
              ) : (
                <Text textAlign="center" fontSize="24" pt="4">
                  {loggedInUserDetails.username === profileDetails.username
                    ? "You"
                    : profileDetails.firstName}{" "}
                  have not posted anything Yet!
                </Text>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex="1 1 30%"
          position="sticky"
          top="6rem"
          bottom="2rem"
          justify="center"
          maxH="calc(100vh - 4rem)"
          overflowY="auto"
          mb="2rem"
        >
          <Suggestions />
        </Flex>
      </Flex>
    </>
  );
};
