import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  Spacer,
  Text,
  Textarea,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { EmojiContainer } from "../../../features";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../postsSlice";
import { useUploadMedia } from "../hooks/useUploadMedia";
import CloseIcon from "@mui/icons-material/Close";
import { ToastHandler } from "../../../utils/toastUtils";

export const CreatePost = ({ onClose, editPostData }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const { userDetails, authToken } = useSelector((state) => state.auth);
  const [postContent, setPostContent] = useState(editPostData?.content ?? "");
  const [mediaURL, setMediaURL] = useState(editPostData?.mediaURL ?? "");
  const [uploadFileName, setUploadFileName] = useState("");
  const [mediaType, setMediaType] = useState(
    editPostData?.mediaURL?.split("/")[4] ?? ""
  );
  const dispatch = useDispatch();
  const { uploadMedia, deleteMedia } = useUploadMedia();
  const [deleteToken, setDeleteToken] = useState(
    editPostData?.deleteToken ?? ""
  );
  const [isPosted, setIsPosted] = useState(false);

  useEffect(() => {
    if (chosenEmoji?.emoji) {
      setPostContent((data) => data + chosenEmoji.emoji);
    }
  }, [chosenEmoji]);

  const fileUploadHandler = async (e) => {
    setMediaType(e.target.files[0].type.split("/")[0]);
    if (uploadFileName) deleteMedia(deleteToken, setDeleteToken);
    setUploadFileName(e.target.files[0].name);
    await uploadMedia(e.target.files[0], setDeleteToken, setMediaURL);
    setIsPosted(true);
  };

  const createPostHandler = () => {
    if (!postContent && !mediaURL) ToastHandler("error", "Post can't be empty");
    else {
      const postData = {
        content: postContent,
        mediaURL: mediaURL,
        deleteToken,
      };
      dispatch(createPost({ postData, authToken }));
    }
    setMediaURL("");
    setPostContent("");
    setIsPosted(false);
    setDeleteToken("");
    setUploadFileName("");
  };

  const editPostHandler = () => {
    if (!postContent && !mediaURL) ToastHandler("error", "Post can't be empty");
    else {
      dispatch(
        updatePost({
          postData: {
            ...editPostData,
            content: postContent,
            mediaURL: mediaURL,
            deleteToken,
          },
          authToken,
        })
      );
    }
    setMediaURL("");
    setPostContent("");
    setIsPosted(false);
    setDeleteToken("");
    setUploadFileName("");
    onClose();
  };

  return (
    <Box
      bg={useColorModeValue("white.900", "black.600")}
      w="100%"
      h="max-content"
      boxShadow={onClose ? "none" : "md"}
      borderRadius="md"
    >
      {!onClose && (
        <Text
          fontSize="xl"
          p="4"
          fontWeight="bold"
          color={useColorModeValue("black", "white.800")}
        >
          Add New Post
        </Text>
      )}
      <Flex direction="column" p="4">
        <Flex align="center" gap="4">
          <Avatar
            mt="2"
            alignSelf="flex-start"
            name={userDetails?.firstName + " " + userDetails?.lastName}
            src={userDetails?.avatarURL}
          />
          <Textarea
            placeholder="Whats happening?"
            height="8rem"
            width="100%"
            resize="none"
            pt="4"
            color={useColorModeValue("black", "white.800")}
            _focus={{
              borderColor: "inherit",
            }}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Flex>
        {mediaURL && (
          <Flex m="2" maxW="400" mx="auto" position="relative">
            {mediaType === "image" && <Image src={mediaURL} />}
            {mediaType === "video" && (
              <video controls>
                <source src={mediaURL} />
              </video>
            )}
            <IconButton
              position="absolute"
              top="2%"
              right="2%"
              variant="iconButton"
              fontWeight="bolder"
              zIndex="10"
              aria-label="Remove Media"
              bg="gray.400"
              borderRadius="xl"
              icon={<CloseIcon />}
              _hover={{ boxShadow: "xl", bg: "gray.300" }}
              onClick={() => {
                if (editPostData?.deleteToken) {
                  deleteMedia(editPostData?.deleteToken, setDeleteToken);
                } else {
                  isPosted && deleteMedia(deleteToken, setDeleteToken);
                }
                setMediaURL("");
                isPosted && setIsPosted(false);
                uploadFileName && setUploadFileName("");
              }}
            />
          </Flex>
        )}
        <HStack p="4" pl="8">
          <Flex gap="6">
            <Tooltip hasArrow label="Add Image / Video" aria-label="A tooltip">
              <FormControl width="1rem">
                <FormLabel
                  position="absolute"
                  left="0"
                  bottom="0"
                  cursor="pointer"
                  marginBottom="0"
                  color={useColorModeValue("black", "white.800")}
                >
                  <InsertPhotoIcon />
                </FormLabel>
                <Input
                  type="file"
                  visibility="hidden"
                  accept="image/*, video/*"
                  onChange={fileUploadHandler}
                />
              </FormControl>
            </Tooltip>
            <EmojiContainer setChosenEmoji={setChosenEmoji} />
          </Flex>
          <Spacer />
          {!onClose && (
            <Button
              variant="solidPrimary"
              aria-label="Create new Post"
              onClick={() => {
                createPostHandler();
                setPostContent("");
              }}
            >
              Post
            </Button>
          )}
          {onClose && (
            <Button
              variant="solidPrimary"
              aria-label="Create new Post"
              onClick={() => {
                editPostHandler();
                setPostContent("");
              }}
            >
              Update
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};
