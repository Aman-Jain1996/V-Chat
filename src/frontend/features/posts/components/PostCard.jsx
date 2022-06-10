import {
  Image,
  Avatar,
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  useColorModeValue,
  useColorMode,
  MenuGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import ShareIcon from "@mui/icons-material/Share";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsService } from "../../../services";
import { useNavigate } from "react-router-dom";
import { deletePost, dislikePost, likePost } from "../postsSlice";
import { useUploadMedia } from "../hooks/useUploadMedia";
import { EditPostModal } from "./EditPostModal";
import { AddToBookmark, RemoveFromBookmark } from "../../auth/AuthSlice";
import { PostComment } from "./PostComment";

export const PostCard = ({ postData }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { userDetails, authToken } = useSelector((state) => state.auth);
  const [postUserData, setPostUserData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deleteMedia } = useUploadMedia();

  useEffect(() => {
    if (postData?.username !== userDetails?.username) {
      (async () => {
        const response = await getUserDetailsService(postData.username);
        setPostUserData(response.data.user);
      })();
    } else {
      setPostUserData(userDetails);
    }
  }, [postData, userDetails]);

  return (
    <Box
      position="relative"
      bg={useColorModeValue("white.900", "black.600")}
      w="100%"
      h="max-content"
      boxShadow="xl"
      borderRadius="lg"
    >
      <Flex direction="column" p="4">
        <Flex align="center" gap="4">
          <Avatar
            mt="2"
            size="lg"
            alignSelf="flex-start"
            name={postUserData?.firstName + postUserData?.lastName}
            src={postUserData?.avatarURL}
            onClick={() => navigate(`/user/${postUserData.username}`)}
          />
          <Flex
            alignSelf="flex-start"
            direction="column"
            mt="4"
            justify="flex-start"
          >
            <Box
              onClick={() => navigate(`/user/${postUserData.username}`)}
              cursor="pointer"
            >
              <Text
                fontWeight="bold"
                color={colorMode === "dark" && "white.800"}
              >
                {postUserData?.firstName + " " + postUserData?.lastName}
              </Text>
              <Text
                fontSize="xs"
                color={useColorModeValue("gray.600", "gray.200")}
              >
                {new Date(postData?.createdAt).toDateString()}
              </Text>
            </Box>
            {userDetails.username === postData.username && (
              <Menu>
                <MenuButton
                  transition="all 0.2s"
                  pos="absolute"
                  top="6"
                  right="8"
                  bg="transparent"
                  color={useColorModeValue("gray.700", "gray.200")}
                  _hover={{ bg: "transparent" }}
                >
                  <MoreHorizRoundedIcon />
                </MenuButton>
                <MenuList minW="8rem" bg="white" p="0" overflow="hidden">
                  <MenuGroup>
                    <EditPostModal post={postData} />
                    <MenuDivider borderColor="gray.400" m="0" />
                    <MenuItem
                      _hover={{ bg: "cyan.400" }}
                      bg="inherit"
                      color="black"
                      fontSize="md"
                      p="2"
                      onClick={async () => {
                        dispatch(
                          deletePost({ postId: postData._id, authToken })
                        );
                        postData.deleteToken &&
                          (await deleteMedia(postData.deleteToken));
                      }}
                    >
                      Delete
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>
        <Flex
          py="4"
          px="6"
          direction="column"
          gap="4"
          color={colorMode === "dark" && "white.800"}
        >
          <Text>{postData?.content}</Text>
          <Box>
            {postData?.mediaURL &&
              (postData?.mediaURL.split("/")[4] === "image" ? (
                <Image src={postData?.mediaURL} alt="post image" />
              ) : (
                <video controls style={{ width: "100%" }}>
                  <source src={postData?.mediaURL} />
                </video>
              ))}
          </Box>
        </Flex>
        <Flex
          py="4"
          px="8"
          gap="8"
          align="center"
          color={colorMode === "dark" && "white.800"}
        >
          <Flex gap="2" align="center" cursor="pointer">
            {postData?.likes.likedBy?.find(
              (user) => user.username === userDetails.username
            ) ? (
              <ThumbUpRoundedIcon />
            ) : (
              <ThumbUpOutlinedIcon
                onClick={() =>
                  dispatch(likePost({ postId: postData._id, authToken }))
                }
              />
            )}
            <Text fontWeight="bold">{postData?.likes.likeCount}</Text>
          </Flex>
          <Flex gap="2" align="center" cursor="pointer">
            {postData?.likes.dislikedBy?.find(
              (user) => user.username === userDetails.username
            ) ? (
              <ThumbDownAltRoundedIcon />
            ) : (
              <ThumbDownAltOutlinedIcon
                onClick={() =>
                  dispatch(dislikePost({ postId: postData._id, authToken }))
                }
              />
            )}
            <Text>{postData?.likes.dislikedBy.length}</Text>
          </Flex>
          <Flex gap="2" align="center" cursor="pointer">
            <ChatOutlinedIcon />
            <Text>{postData?.comments?.length}</Text>
          </Flex>
          <Flex gap="2" align="center" cursor="pointer">
            <ShareIcon />
            <Text>Share</Text>
          </Flex>
          <Flex ml="auto" cursor="pointer">
            {userDetails?.bookmarks?.find(
              (post) => post._id === postData._id
            ) ? (
              <BookmarkOutlinedIcon
                onClick={() =>
                  dispatch(
                    RemoveFromBookmark({ postId: postData._id, authToken })
                  )
                }
              />
            ) : (
              <BookmarkBorderOutlinedIcon
                onClick={() =>
                  dispatch(AddToBookmark({ postId: postData._id, authToken }))
                }
              />
            )}
          </Flex>
        </Flex>
        <PostComment postId={postData._id} />
      </Flex>
    </Box>
  );
};
