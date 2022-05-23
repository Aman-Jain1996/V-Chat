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
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { EmojiContainer } from "./EmojiContainer";

export const CreatePost = () => {
  return (
    <Box
      bg={useColorModeValue("white.900", "black.600")}
      w="100%"
      h="max-content"
      boxShadow="md"
      borderRadius="md"
    >
      <Text
        fontSize="xl"
        p="4"
        fontWeight="bold"
        color={useColorModeValue("black", "white.800")}
      >
        Add New Post
      </Text>
      <Flex direction="column" p="4">
        <Flex align="center" gap="4">
          <Avatar
            mt="2"
            alignSelf="flex-start"
            name="user"
            src="https://res.cloudinary.com/ajain8479/image/upload/v1653216526/Social%20Media/4333609_iftyzl.webp"
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
          />
        </Flex>
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
                />
              </FormControl>
            </Tooltip>
            <EmojiContainer />
          </Flex>
          <Spacer />
          <Button variant="solidPrimary" aria-label="Create new Post">
            Post
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
