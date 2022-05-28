import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
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

export const EmojiContainer = ({ setChosenEmoji }) => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  const onEmojiClick = (e, emojiObject) => {
    setChosenEmoji(emojiObject);
    onClose();
  };

  return (
    <Box>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        isLazy
        placement="right"
        arrowSize="8"
      >
        <PopoverTrigger>
          <Button
            variant="iconButton"
            color={useColorModeValue("gray.800", "white.900")}
            paddingBottom="0"
          >
            <EmojiEmotionsRoundedIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          width="max-content"
          p="0"
          borderWidth="0"
          bg="transparent"
          _focus={{ outline: "none" }}
        >
          <PopoverArrow />
          <PopoverBody>
            <Picker
              disableSearchBar={"true"}
              groupVisibility={{
                flags: false,
                animals_nature: false,
                symbols: false,
                flags: false,
                travel_places: false,
                food_drink: false,
                activities: false,
              }}
              pickerStyle={{
                margin: "0",
                boxShadow: "0 0 0 0",
              }}
              onEmojiClick={onEmojiClick}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
