import {
  Image,
  Avatar,
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import ShareIcon from "@mui/icons-material/Share";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

export const PostCard = () => {
  return (
    <Box
      position="relative"
      bg="white.900"
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
            name="user"
            src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
          />
          <Flex
            alignSelf="flex-start"
            direction="column"
            mt="4"
            justify="flex-start"
          >
            <Text fontWeight="bold">Aman Jain </Text>
            <Text fontSize="xs" color="gray.600">
              {new Date().toDateString() +
                " , " +
                new Date().toLocaleTimeString()}
            </Text>
            <Menu>
              <MenuButton
                transition="all 0.2s"
                pos="absolute"
                top="6"
                right="8"
                bg="transparent"
                color="gray.700"
                _hover={{ bg: "transparent" }}
              >
                <MoreHorizRoundedIcon />
              </MenuButton>
              <MenuList minW="8rem">
                <MenuGroup>
                  <MenuItem
                    _hover={{ bg: "cyan.200" }}
                    bg="inherit"
                    fontSize="md"
                  >
                    Edit
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    _hover={{ bg: "cyan.200" }}
                    bg="inherit"
                    fontSize="md"
                  >
                    Delete
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Flex py="4" px="6" direction="column" gap="4">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maxime
            perspiciatis autem sit voluptatibus? Nostrum pariatur quis incidunt
            harum provident atque adipisci, autem vitae dolores quidem, odit
            inventore vel quia laborum quae? Velit dolore debitis minima, autem
            officiis aut maxime!
          </Text>
          <Image src="https://reactjs.org/logo-og.png" />
        </Flex>
        <Flex py="4" px="8" gap="8" align="center">
          <Flex gap="2" align="center" cursor="pointer">
            <ThumbUpOutlinedIcon />
            <Text color="gray.700" fontWeight="bold">
              2
            </Text>
          </Flex>
          <Flex gap="2" align="center" cursor="pointer">
            <ThumbDownAltOutlinedIcon />
            <Text>4</Text>
          </Flex>
          <Flex gap="2" align="center" cursor="pointer">
            <ChatOutlinedIcon />
            <Text>4</Text>
          </Flex>
          <Flex gap="2" align="center" cursor="pointer">
            <ShareIcon />
            <Text>Share</Text>
          </Flex>
          <Flex ml="auto" cursor="pointer">
            <BookmarkBorderOutlinedIcon />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
