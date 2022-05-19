import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { EmojiContainer } from "./EmojiContainer";

export const CreatePost = () => {
  return (
    <Box
      bg="white.900"
      w="100%"
      h="max-content"
      boxShadow="md"
      borderRadius="md"
    >
      <Text fontSize="xl" p="4" fontWeight="bold">
        Add New Post
      </Text>
      <Flex direction="column" p="4">
        <Flex align="center" gap="4">
          <Avatar
            mt="2"
            alignSelf="flex-start"
            name="user"
            src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
          />
          <Textarea
            placeholder="Whats happening?"
            height="8rem"
            width="100%"
            resize="none"
          />
        </Flex>
        <HStack p="4">
          <Flex gap="4">
            <Tooltip hasArrow label="Add Image / Video" aria-label="A tooltip">
              <FormControl width="1rem">
                <FormLabel
                  position="absolute"
                  left="0"
                  bottom="0"
                  cursor="pointer"
                  marginBottom="0"
                >
                  <InsertPhotoIcon />
                </FormLabel>
                <Input
                  type="file"
                  visibility="hidden"
                  accept="image/*, video/*"
                />
              </FormControl>
            </Tooltip>
            <EmojiContainer />
          </Flex>
          <Spacer />
          <Button variant="solidPrimary">Post</Button>
        </HStack>
      </Flex>
    </Box>
  );
};
