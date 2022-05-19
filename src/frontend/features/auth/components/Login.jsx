import React from "react";
import { Navigation } from "../../../components/Navigation";
import { HomeContainerHeadingStyles } from "../../../styles/homeStyles";
import {
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <Navigation />
      <Flex align="center" justify="center" mt="2rem">
        <Flex
          direction="column"
          boxShadow="2xl"
          bg="white"
          borderRadius="xl"
          maxW="40%"
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
            mb="4"
          >
            Login
          </Heading>
          <form style={{ width: "100%" }}>
            <FormControl isRequired my="4" mb="6">
              <FormLabel htmlFor="email">Username</FormLabel>
              <Input
                id="username"
                placeholder="Enter your username"
                type="text"
                borderColor="gray.600"
              />
            </FormControl>
            <FormControl isRequired my="4" mb="6">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                placeholder="Enter your Password"
                id="password"
                type="password"
                borderColor="gray.600"
              />
            </FormControl>
            <HStack my="4" mb="6">
              <Checkbox colorScheme="cyan" id="rememberMe" spacing=".5rem">
                <label htmlFor="rememberMe">Remember me</label>
              </Checkbox>
              <Spacer />
              <Text color="cyan.400">
                <Link to="#">Forgot Password ?</Link>
              </Text>
            </HStack>
            <Flex justify="center" direction="column" gap="4">
              <Button variant="solidPrimary" w="100%">
                Log In
              </Button>
              <Button variant="outline" w="100%">
                Log In as Guest
              </Button>
            </Flex>
            <Center mt="4" fontSize="sm">
              New to V-Chat !
              <Text color="cyan.400" mx="2" textDecoration="underline">
                <Link to="/signUp">SignUp</Link>
              </Text>
            </Center>
          </form>
        </Flex>
      </Flex>
    </>
  );
};
