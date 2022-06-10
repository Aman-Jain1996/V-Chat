import {
  Avatar,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../../components";
import { getUserDetailsService } from "../../../services";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";
import {
  deleteCommentFromPost,
  editCommentOnPost,
  likeCommentOnPost,
} from "../postsSlice";
import SendIcon from "@mui/icons-material/Send";
import { ToastHandler } from "../../../utils/toastUtils";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { v4 } from "uuid";

export const CommentCard = ({ commentData, postId }) => {
  const [commentUser, setCommentUser] = useState();
  const { userDetails, authToken } = useSelector((state) => state.auth);
  const [isPostEditing, setIsPostEditing] = useState(false);
  const [editPostContent, setEditPostContent] = useState(commentData.content);
  const [replyUser, setReplyUser] = useState();
  const [isReplying, setIsReplying] = useState(false);
  const [replyInput, setReplyInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await getUserDetailsService(commentData.user.username);
      setCommentUser(response.data.user);
      if (commentData?.replies?.length > 0) {
        const response = await getUserDetailsService(
          commentData?.replies[0].user?.username
        );
        setReplyUser(response.data.user);
      }
    })();
  }, [commentData]);

  const isLiked = () =>
    commentData?.votes?.upvotedBy?.some((user) => user._id === userDetails._id);

  const isReplied = () => (commentData?.replies?.length > 0 ? true : false);

  return !commentUser?.username ? (
    <Loading />
  ) : (
    <>
      <Flex mt="4" gap="4" align="center">
        <Avatar
          mt="2"
          size="sm"
          alignSelf="flex-start"
          name={commentUser?.firstName + commentUser?.lastName}
          src={commentUser?.avatarURL}
        />
        <Flex
          bg="cyan.200"
          color="black.800"
          direction="column"
          borderRadius="md"
          width="100%"
          px="4"
          py="2"
          position="relative"
        >
          <Text fontWeight="bold" fontSize="sm" mb="2">
            {commentUser?.firstName + " " + commentUser?.lastName}
          </Text>
          {!isPostEditing ? (
            <Input
              readOnly
              color="gray.900"
              pl="2"
              variant="unstyled"
              display="inline-flex"
              justify="center"
              align="center"
              value={commentData.content}
            />
          ) : (
            <Flex
              bg="cyan.300"
              color="gray.900"
              h="3rem"
              borderRadius="md"
              width="100%"
              px="4"
              position="relative"
            >
              <Input
                isRequired
                height="100%"
                placeholder="Edit Your Comment"
                variant="unstyled"
                width="85%"
                display="inline-flex"
                justify="center"
                align="center"
                value={editPostContent}
                onChange={(e) => setEditPostContent(e.target.value)}
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
                  if (editPostContent.trim() === "")
                    ToastHandler("warn", "Post can't empty");
                  else {
                    dispatch(
                      editCommentOnPost({
                        postId,
                        commentId: commentData._id,
                        commentData: { content: editPostContent },
                        authToken,
                      })
                    );
                    setIsPostEditing(false);
                    setEditPostContent("");
                  }
                }}
              >
                <SendIcon style={{ fontSize: "1.5rem" }} />
              </Button>
            </Flex>
          )}
          {commentUser?.username === userDetails?.username && (
            <Menu>
              <MenuButton
                transition="all 0.2s"
                pos="absolute"
                top="2"
                right="2"
                bg="transparent"
                color="gray.800"
                _hover={{ bg: "transparent" }}
              >
                <MoreVertIcon />
              </MenuButton>
              <MenuList minW="6rem" bg="white" p="0" overflow="hidden">
                <MenuGroup>
                  <MenuItem
                    _hover={{ bg: "cyan.400" }}
                    bg="inherit"
                    color="black"
                    fontSize="md"
                    p="2"
                    onClick={() => setIsPostEditing(true)}
                  >
                    Edit
                  </MenuItem>
                  <MenuDivider borderColor="gray.400" m="0" />
                  <MenuItem
                    _hover={{ bg: "cyan.400" }}
                    bg="inherit"
                    color="black"
                    fontSize="md"
                    p="2"
                    onClick={() =>
                      dispatch(
                        deleteCommentFromPost({
                          postId,
                          commentId: commentData._id,
                          authToken,
                        })
                      )
                    }
                  >
                    Delete
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          )}
          <Flex
            pr="2"
            gap="4"
            mt="2"
            align="center"
            color="gray.900"
            fontSize="sm"
            justify="flex-end"
          >
            <Flex gap="1" align="center" cursor="pointer">
              {isLiked() ? (
                <ThumbUpRoundedIcon
                  style={{ fontSize: "16px" }}
                  onClick={() =>
                    dispatch(
                      likeCommentOnPost({
                        postId,
                        commentId: commentData._id,
                        authToken,
                      })
                    )
                  }
                />
              ) : (
                <ThumbUpOutlinedIcon
                  style={{ fontSize: "16px" }}
                  onClick={() =>
                    dispatch(
                      likeCommentOnPost({
                        postId,
                        commentId: commentData._id,
                        authToken,
                      })
                    )
                  }
                />
              )}
              <Text fontWeight="bold">
                {commentData?.votes?.upvotedBy?.length}
              </Text>
            </Flex>
            <Flex
              gap="1"
              align="center"
              cursor="pointer"
              onClick={() => setIsReplying(true)}
            >
              {!isReplied() &&
                commentData?.user?.username !== userDetails?.username && (
                  <>
                    <ReplyIcon style={{ fontSize: "16px" }} />
                    <Text fontWeight="bold">Reply</Text>
                  </>
                )}
            </Flex>
          </Flex>
          {isReplying && (
            <Flex
              bg="cyan.300"
              color="gray.900"
              h="3rem"
              borderRadius="md"
              width="100%"
              px="4"
              mt="2"
              position="relative"
            >
              <Input
                isRequired
                height="100%"
                placeholder="Your Reply"
                variant="unstyled"
                width="85%"
                display="inline-flex"
                justify="center"
                align="center"
                value={replyInput}
                onChange={(e) => setReplyInput(e.target.value)}
              />
              <Button
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                aria-label="Post reply"
                variant="iconButton"
                color="cyan.400"
                onClick={() => {
                  if (replyInput.trim() === "")
                    ToastHandler("warn", "Reply can't empty");
                  else {
                    dispatch(
                      editCommentOnPost({
                        postId,
                        commentId: commentData._id,
                        commentData: {
                          ...commentData,
                          replies: commentData.replies.concat({
                            _id: v4(),
                            user: {
                              _id: userDetails._id,
                              username: userDetails.username,
                            },
                            content: replyInput,
                          }),
                        },
                        authToken,
                      })
                    );
                    setIsReplying(false);
                    setReplyInput("");
                  }
                }}
              >
                <SendIcon style={{ fontSize: "1.5rem" }} />
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
      {commentData.replies.length > 0 && (
        <Flex my="4" gap="4" ml="16" align="center">
          <Avatar
            mt="2"
            size="sm"
            alignSelf="flex-start"
            name={replyUser?.firstName + replyUser?.lastName}
            src={replyUser?.avatarURL}
          />
          <Flex
            bg="cyan.200"
            color="black.800"
            direction="column"
            borderRadius="md"
            width="100%"
            px="4"
            py="2"
            position="relative"
          >
            <Text fontWeight="bold" fontSize="sm" mb="2">
              {replyUser?.firstName + " " + replyUser?.lastName}
            </Text>
            {!isPostEditing ? (
              <Input
                readOnly
                color="gray.900"
                pl="2"
                variant="unstyled"
                display="inline-flex"
                justify="center"
                align="center"
                value={commentData.replies[0].content}
              />
            ) : (
              <Flex
                bg="cyan.300"
                color="gray.900"
                h="3rem"
                borderRadius="md"
                width="100%"
                px="4"
                position="relative"
              >
                <Input
                  isRequired
                  height="100%"
                  placeholder="Edit Your Comment"
                  variant="unstyled"
                  width="85%"
                  display="inline-flex"
                  justify="center"
                  align="center"
                  value={editPostContent}
                  onChange={(e) => setEditPostContent(e.target.value)}
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
                    if (editPostContent.trim() === "")
                      ToastHandler("warn", "Post can't empty");
                    else {
                      dispatch(
                        editCommentOnPost({
                          postId,
                          commentId: commentData._id,
                          commentData: { content: editPostContent },
                          authToken,
                        })
                      );
                      setIsPostEditing(false);
                      setEditPostContent("");
                    }
                  }}
                >
                  <SendIcon style={{ fontSize: "1.5rem" }} />
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
};
