import {
  Avatar,
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
import { deleteCommentFromPost } from "../postsSlice";

export const CommentCard = ({ commentData, postId }) => {
  const [commentUser, setCommentUser] = useState();
  const { userDetails, authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await getUserDetailsService(commentData.user.username);
      setCommentUser(response.data.user);
    })();
  }, [commentData]);

  return !commentUser?.username ? (
    <Loading />
  ) : (
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
      </Flex>
    </Flex>
  );
};
