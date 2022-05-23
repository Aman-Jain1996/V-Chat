import {
  Avatar,
  AvatarBadge,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import {
  formControlFields,
  formControlStyles,
  formControlText,
} from "../../styles/globalStyles";
import { ToastHandler } from "../../utils/toastUtils";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../auth/AuthSlice";

export const EditProfile = ({ userDetails }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [bio, setBio] = useState(userDetails.bio);
  const [websiteURL, setWebsiteURL] = useState(userDetails.websiteURL);
  const [avatarURL, setAvatarURL] = useState(userDetails.avatarURL);
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);

  const uploadImage = async (image) => {
    const toBase64 = () =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    try {
      let base64File = await toBase64();
      setAvatarURL(base64File);
    } catch (error) {
      console.error(error);
      ToastHandler("error", "Error uploading Image");
    }
  };

  const updateHandler = () => {
    dispatch(
      updateUserDetails({
        userData: { ...userDetails, bio, websiteURL, avatarURL },
        authToken,
      })
    );
    onClose();
  };

  return (
    <>
      <Button
        aria-label="Edit Profile"
        my="4"
        variant="outline"
        onClick={onOpen}
      >
        Edit Profile
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader px="6" py="4" fontWeight="bold">
            Edit Profile
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
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              updateHandler();
            }}
          >
            <ModalBody>
              <FormControl {...formControlStyles} gap="12">
                <Text {...formControlText} flexGrow="0">
                  Avatar
                </Text>
                <Avatar
                  src={avatarURL}
                  alt="profile-image"
                  size="lg"
                  marginRight="2"
                  name={userDetails.firstName + userDetails.lastName}
                >
                  <AvatarBadge boxSize="1.5em" border="0">
                    <FormControl>
                      <FormLabel
                        cursor="pointer"
                        position="absolute"
                        right="-10px"
                        bottom="0"
                      >
                        <PhotoCameraOutlinedIcon />
                      </FormLabel>
                      <Input
                        type="file"
                        visibility="hidden"
                        accept="image/*"
                        onChange={(e) => uploadImage(e.target.files[0])}
                      />
                    </FormControl>
                  </AvatarBadge>
                </Avatar>
              </FormControl>
              <FormControl {...formControlStyles}>
                <FormLabel {...formControlText}>Name</FormLabel>
                <Input
                  {...formControlFields}
                  variant="unstyled"
                  isReadOnly
                  value={userDetails.firstName + " " + userDetails.lastName}
                />
              </FormControl>
              <FormControl {...formControlStyles}>
                <FormLabel {...formControlText}>Username</FormLabel>
                <Input
                  {...formControlFields}
                  variant="unstyled"
                  isReadOnly
                  value={userDetails.username}
                />
              </FormControl>
              <FormControl {...formControlStyles}>
                <FormLabel {...formControlText}>Bio</FormLabel>
                <Input
                  required
                  {...formControlFields}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </FormControl>
              <FormControl {...formControlStyles}>
                <FormLabel {...formControlText}>Website</FormLabel>
                <Input
                  required
                  {...formControlFields}
                  value={websiteURL}
                  onChange={(e) => setWebsiteURL(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} variant="solidPrimary" type="submit">
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
