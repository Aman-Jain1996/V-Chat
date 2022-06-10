import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SendIcon from "@mui/icons-material/Send";
import { CommentCard } from "./CommentCard";
import { getCommentsByPostIdService } from "../../../services";
import { addCommentToPost } from "../postsSlice";
import { ToastHandler } from "../../../utils/toastUtils";

export const PostComment = ({ postId }) => {
  const { userDetails, authToken } = useSelector((state) => state.auth);
  const { allPosts } = useSelector((state) => state.posts);
  const [postComments, setPostComments] = useState([]);
  const [postToShow, setPostToShow] = useState(1);
  const [postInput, setPostInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await getCommentsByPostIdService(postId);
        setPostComments(response.data.comments);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [postId, allPosts]);

  return (
    <Box py="4" px="2">
      <Divider mb="4" />
      <Box>
        {postComments.slice(0, postToShow).map((comment) => (
          <CommentCard
            key={comment._id}
            commentData={comment}
            postId={postId}
          />
        ))}
      </Box>
      {postComments.length > 1 && postToShow === 1 && (
        <Text
          mt="4"
          ml="16"
          cursor="pointer"
          fontSize="sm"
          onClick={() => setPostToShow(postComments.length)}
        >
          Show All Comments
        </Text>
      )}
      {postComments.length > 1 && postToShow > 1 && (
        <Text
          mt="4"
          ml="16"
          cursor="pointer"
          fontSize="sm"
          onClick={() => setPostToShow(1)}
        >
          Show Less Comments
        </Text>
      )}
      <Flex mt="4" gap="4">
        <Avatar
          mt="2"
          size="sm"
          alignSelf="flex-start"
          name={userDetails?.firstName + userDetails?.lastName}
          src={userDetails?.avatarURL}
        />
        <Flex
          bg={useColorModeValue("#efefef", "whiteAlpha.200")}
          color={useColorModeValue("black.800", "white.800")}
          h="3rem"
          borderRadius="md"
          width="100%"
          px="4"
          position="relative"
        >
          <Input
            isRequired
            height="100%"
            placeholder="Post Your Comment"
            variant="unstyled"
            width="85%"
            display="inline-flex"
            justify="center"
            align="center"
            value={postInput}
            onChange={(e) => setPostInput(e.target.value)}
          />
          <Button
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            aria-label="Post Comment"
            variant="iconButton"
            color="cyan.400"
            onClick={() => {
              if (postInput.trim() === "")
                ToastHandler("warn", "Post can't empty");
              else
                dispatch(
                  addCommentToPost({
                    postId,
                    commentData: { content: postInput },
                    authToken,
                  })
                );
              setPostInput("");
            }}
          >
            <SendIcon style={{ fontSize: "1.5rem" }} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
