import {
  Flex,
  FormControl,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { UserCard } from "./UserCard";

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { users } = useSelector((state) => state.user);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [searchResult, setSearchResult] = useState([]);
  const timerRef = useRef();

  const filteredUser = (user) =>
    user.username.toLowerCase().includes(searchInput.toLowerCase()) ||
    user.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchInput.toLowerCase());

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (searchInput) setSearchResult(users?.filter(filteredUser));
      else setSearchResult([]);
    }, 500);
    return () => clearTimeout(timerRef.current);
  }, [searchInput]);

  return (
    <Popover flip={true} placement="bottom" autoFocus={false} isOpen={isOpen}>
      <PopoverTrigger>
        <FormControl>
          <Input
            height="100%"
            placeholder="Search User.."
            variant="unstyled"
            width="85%"
            display="inline-flex"
            justify="center"
            align="center"
            value={searchInput}
            onClick={onOpen}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {isOpen ? (
            <CloseIcon
              onClick={() => {
                setSearchInput("");
                onClose();
              }}
              style={{
                color: "#38bdf8",
                position: "absolute",
                right: "2%",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          ) : (
            <SearchOutlinedIcon
              onClick={onOpen}
              style={{
                color: "#38bdf8",
                position: "absolute",
                right: "2%",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          )}
        </FormControl>
      </PopoverTrigger>
      <PopoverContent maxH="60vh" overflowY="auto" w="16rem">
        <PopoverBody bg={useColorModeValue("#e8fbfe", "inherit")}>
          {!searchResult.length ? (
            <Text p="1rem 0" color="gray.300">
              No user found!
            </Text>
          ) : (
            searchResult.map((user) => (
              <Flex
                key={user._id}
                pl={4}
                onClick={() => {
                  setSearchInput("");
                  onClose();
                }}
              >
                <UserCard userData={user} modalData={true} onClose={onClose} />
              </Flex>
            ))
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
