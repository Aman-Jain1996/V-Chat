import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navigation, ScrollToTop, SortButton } from "../../../components";
import { PostCard, Suggestions } from "../../../features";
import { useSelector } from "react-redux";

export const Explore = () => {
  const { allPosts, filterBy } = useSelector((state) => state.posts);
  const { userDetails } = useSelector((state) => state.auth);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = [...allPosts];

    if (filterBy === "latest") {
      setFilteredPosts(
        filteredPosts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
    } else {
      setFilteredPosts(
        filteredPosts.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
      );
    }
  }, [userDetails, allPosts, filterBy]);

  return !filteredPosts.length ? (
    <>Loading...</>
  ) : (
    <>
      <ScrollToTop />
      <Navigation />
      <Flex m="2rem 6rem" minH="calc(100vh - 4rem)">
        <Flex flex="1 1 60%" justify="center">
          <Flex w="70%" justify="center" direction="column" gap="4">
            <SortButton />
            <Flex direction="column" gap="6">
              {filteredPosts?.length ? (
                filteredPosts.map((post) => (
                  <PostCard key={post._id} postData={post} />
                ))
              ) : (
                <Text textAlign="center" fontSize="24" pt="4">
                  No Posts to Display!
                </Text>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex="1 1 35%"
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
