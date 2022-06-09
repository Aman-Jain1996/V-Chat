import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../../posts/components/PostCard";

export const Bookmarks = () => {
  const { userDetails } = useSelector((state) => state.auth);
  return (
    <>
      <Heading mb="4" fontSize="2xl">
        Your Bookmarks
      </Heading>
      <Flex direction="column" gap="6">
        {userDetails.bookmarks.length ? (
          userDetails.bookmarks.map((post) => (
            <PostCard key={post._id} postData={post} />
          ))
        ) : (
          <Text textAlign="center" fontSize="24" pt="4">
            You have not bookmarked anything Yet!
          </Text>
        )}
      </Flex>
    </>
  );
};
