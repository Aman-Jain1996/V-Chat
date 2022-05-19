import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/popover";
import {
  useDisclosure,
  Button,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import Picker from "emoji-picker-react";
import { useState } from "react";

export const EmojiContainer = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <Box>
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button
            variant="iconButton"
            color={useColorModeValue("gray.800", "white.900")}
            paddingBottom="0"
          >
            <EmojiEmotionsRoundedIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Picker onEmojiClick={onEmojiClick} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
