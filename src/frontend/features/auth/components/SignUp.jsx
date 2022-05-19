import React from "react";
import {
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Navigation } from "../../../components/Navigation";
import { HomeContainerHeadingStyles } from "../../../styles/homeStyles";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <Navigation />
      <Flex align="center" justify="center" mt="2rem">
        <Flex
          direction="column"
          boxShadow="2xl"
          bg="white"
          borderRadius="xl"
          maxW="50%"
          w="40rem"
          h="max-content"
          p="2rem 4rem"
        >
          <Heading
            w="max-content"
            alignSelf="center"
            {...HomeContainerHeadingStyles}
            fontFamily="body"
            fontSize="3xl"
          >
            SignUp
          </Heading>
          <form
            style={{
              paddingTop: "2.4rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Flex gap="4">
              <FormControl isRequired>
                <FormLabel htmlFor="fName">First Name</FormLabel>
                <Input
                  id="fName"
                  placeholder="Enter your first name"
                  type="text"
                  borderColor="gray.600"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="lName">Last Name</FormLabel>
                <Input
                  placeholder="Enter your last Name"
                  id="lName"
                  type="text"
                  borderColor="gray.600"
                />
              </FormControl>
            </Flex>
            <Flex gap="4">
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  placeholder="Enter your Email"
                  id="email"
                  type="email"
                  borderColor="gray.600"
                />
              </FormControl>
            </Flex>
            <Flex gap="4">
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  borderColor="gray.600"
                />
              </FormControl>
            </Flex>
            <Checkbox
              isRequired
              colorScheme="cyan"
              id="rememberMe"
              spacing=".5rem"
            >
              <label htmlFor="rememberMe">
                I accept all Terms &amp; conditions
              </label>
            </Checkbox>
            <Flex justify="center" direction="column" gap="4">
              <Button variant="solidPrimary" w="100%">
                Sign Up
              </Button>
            </Flex>
            <Center fontSize="sm">
              Already have account?
              <Text color="cyan.400" mx="2" textDecoration="underline">
                <Link to="/login">Login here</Link>
              </Text>
            </Center>
          </form>
        </Flex>
      </Flex>
    </>
  );
};
