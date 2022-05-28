import { Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeContainerHeadingStyles,
  HomeHeadingSubTextStyles,
  HomeHeadingTextStyles,
  HomeTextContainerStyles,
} from "../styles/homeStyles";

export const Hero = () => {
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.auth.authToken);

  useEffect(() => {
    authToken && navigate("/home");
  }, [authToken]);

  return (
    <Flex
      bg="white"
      color="black"
      direction="column"
      align="center"
      minH="100vh"
      justify="space-between"
      py={10}
      px={20}
    >
      <Heading {...HomeContainerHeadingStyles}>V-Chat</Heading>
      <Flex w="100%" justify="space-between">
        <Image
          flex="1 1 50%"
          maxW="xl"
          src="https://res.cloudinary.com/ajain8479/image/upload/v1652353394/Social%20Media/Header_eyg9tp.webp"
          alt="Hero Banner"
          transform="skew(0deg,-5deg)"
        />
        <VStack flex="1 1 50%" pt="20" d="flex">
          <Flex w="80%" mb="10" {...HomeTextContainerStyles}>
            <Flex align="center">
              <Text {...HomeHeadingTextStyles}>Follow</Text>
              <Text {...HomeHeadingSubTextStyles}>People around the Globe</Text>
            </Flex>
            <Flex align="center">
              <Text {...HomeHeadingTextStyles}>Connect</Text>
              <Text {...HomeHeadingSubTextStyles}> With your Friends</Text>
            </Flex>
            <Flex align="center">
              <Text {...HomeHeadingTextStyles} justifyContent="flex-end">
                Share
              </Text>
              <Text {...HomeHeadingSubTextStyles}>
                {" "}
                Your Ideas &amp; Thoughts
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" gap="4" alignSelf="center">
            <Button
              variant="solidPrimary"
              aria-label="Join Now"
              onClick={() => navigate("/signUp")}
            >
              Join Now
            </Button>
            <Link to="/login">
              <Text fontFamily="montserrat">Already have an Account?</Text>
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};
