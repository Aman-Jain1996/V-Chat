import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../../posts/components/PostCard";

export const MyPosts = () => {
  const { userPosts } = useSelector((state) => state.posts);
  return (
    <>
      <Heading mb="4" fontSize="2xl">
        Your Posts
      </Heading>
      <Flex direction="column" gap="6">
        {userPosts.length ? (
          userPosts.map((post) => <PostCard key={post._id} postData={post} />)
        ) : (
          <Text textAlign="center" fontSize="24" pt="4">
            You have not posted anything Yet!
          </Text>
        )}
      </Flex>
    </>
  );
};
