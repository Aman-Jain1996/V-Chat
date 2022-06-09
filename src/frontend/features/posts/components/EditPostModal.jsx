import {
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { CreatePost } from "./CreatePost";

export const EditPostModal = ({ post }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <MenuItem
        _hover={{ bg: "cyan.400" }}
        bg="inherit"
        color="black"
        fontSize="md"
        p="2"
        onClick={onOpen}
      >
        Edit
      </MenuItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader px="6" py="4" fontWeight="bold">
            Edit Post
          </ModalHeader>
          <ModalCloseButton
            size="lg"
            bg="transparent"
            outline="0"
            color="black.800"
            _focus={{
              boxShadow: "transparent",
              border: "none",
            }}
          />
          <ModalBody>
            <CreatePost onClose={onClose} editPostData={post} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
