import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {
  Link as ReachLink,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authToken, userDetails } = useSelector((state) => state.auth);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justify="space-between"
      align="center"
      bg={useColorModeValue("white.900", "black.800")}
      borderBottom="1px"
      borderBottomColor="gray.400"
      h="max-content"
      maxH="4rem"
      p=".5rem 2.5rem"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <ReachLink to={authToken?.token ? "/home" : "/"}>
        <Flex align="center" gap="1" _hover={{ textDecoration: "none" }}>
          <Image
            src="https://res.cloudinary.com/ajain8479/image/upload/v1652887180/Social%20Media/logo512_n05pnf.webp"
            alt="User Avatar"
            boxSize="16"
          />
          <Heading
            fontSize="3xl"
            fontFamily="dancing"
            color={useColorModeValue("black.800", "white.800")}
          >
            V-Chat
          </Heading>
        </Flex>
      </ReachLink>
      <Flex
        bg={useColorModeValue("#efefef", "whiteAlpha.200")}
        color={useColorModeValue("black.800", "white.800")}
        h="3rem"
        borderRadius="md"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50% , -50%)"
        width="16rem"
        px="4"
      >
        <Popover flip={true} placement="bottom">
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
              />
              <SearchOutlinedIcon
                style={{
                  color: "#38bdf8",
                  position: "absolute",
                  right: "2%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
            </FormControl>
          </PopoverTrigger>
          <PopoverContent maxH="60vh" overflowY="auto" w="16rem">
            <PopoverBody>No User Found</PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Flex align="center" gap="8">
        <Flex align="center" gap="4">
          {location.pathname !== "/login" && location.pathname !== "/signUp" && (
            <>
              <NavLink to="/home">
                <Button
                  aria-label="Home Page"
                  variant="iconButton"
                  color="cyan.400"
                  _hover={{
                    color: useColorModeValue("black.800", "white.800"),
                    bg: "transparent",
                    boxShadow: "md",
                  }}
                  _active={{
                    boxShadow: "lg",
                  }}
                >
                  <HomeIcon style={{ fontSize: "2rem" }} />
                </Button>
              </NavLink>
              <NavLink to="/explore">
                <Button
                  aria-label="Explore Feed"
                  variant="iconButton"
                  color="cyan.400"
                  _hover={{
                    color: useColorModeValue("black.800", "white.800"),
                    bg: "transparent",
                    boxShadow: "md",
                  }}
                  _active={{
                    boxShadow: "lg",
                  }}
                >
                  <ExploreOutlinedIcon style={{ fontSize: "2rem" }} />
                </Button>
              </NavLink>
            </>
          )}
          <Button
            variant="iconButton"
            aria-label="toggle theme"
            color="cyan.400"
            onClick={toggleColorMode}
            _hover={{
              color: useColorModeValue("black.800", "white.800"),
              borderColor: "gray.700",
              bg: "transparent",
            }}
          >
            {colorMode === "light" ? (
              <LightModeOutlinedIcon style={{ fontSize: "2rem" }} />
            ) : (
              <DarkModeIcon style={{ fontSize: "2rem" }} />
            )}
          </Button>
        </Flex>
        {location.pathname !== "/login" && location.pathname !== "/signUp" && (
          <Avatar
            onClick={() => navigate(`/users/${userDetails.username}`)}
            mt="2"
            size="md"
            alignSelf="flex-start"
            name={userDetails.firstName + userDetails.lastName}
            src={userDetails.avatarURL}
            alt="user Image"
          />
        )}
      </Flex>
    </Flex>
  );
};
