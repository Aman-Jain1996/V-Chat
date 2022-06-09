import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { UserCard } from "../../../components";

export const FollowingModal = ({ followingUsers, Datafor }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        direction="column"
        gap="1"
        align="center"
        cursor="pointer"
        onClick={onOpen}
      >
        <Text color={colorMode === "dark" && "white.800"}>
          {Datafor === "following" ? "Following" : "Followers"}
        </Text>
        <Text fontWeight="bold" color={colorMode === "dark" && "white.800"}>
          {followingUsers?.length}
        </Text>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior={"inside"}
        maxH="40vh"
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {Datafor === "following"
              ? "User's you are following"
              : "User's following You"}
          </ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "none",
              border: "none",
            }}
          />
          <ModalBody justifyContent="space-between" pb="2rem">
            {followingUsers.length ? (
              followingUsers.map((user) => (
                <UserCard
                  userData={user}
                  modalData={true}
                  onClose={onClose}
                  key={user._id}
                />
              ))
            ) : (
              <Text textAlign="center">No Followers Yet</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
