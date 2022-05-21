import React, { useEffect, useState } from "react";
import { Navigation } from "../../../components/Navigation";
import { HomeContainerHeadingStyles } from "../../../styles/homeStyles";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../AuthSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.auth.authToken);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    authToken &&
      navigate(location?.state?.from?.pathname || "/home", { replace: true });
  }, [authToken]);

  const loginHandler = ({ username, password }) => {
    dispatch(loginAction({ username, password }));
  };

  const initialState = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values) => {
      loginHandler(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.username.trim())
        errors.username = "Username is a mandatory Field";

      if (!values.password.trim())
        errors.password = "Passoword is a mandatory Field";

      return errors;
    },
  });

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
            color={useColorModeValue("black", "black.800")}
          >
            Login
          </Heading>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            style={{ width: "100%" }}
          >
            <FormControl my="4" mb="6">
              <FormLabel htmlFor="username" color="black.800">
                Username
              </FormLabel>
              <Input
                id="username"
                placeholder="Enter your username"
                type="text"
                borderColor="gray.600"
                name="username"
                color="black.800"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                _hover={{ borderColor: "initial" }}
              />
              {formik.touched.username && formik.errors.username && (
                <Box color="red" fontSize="sm" px="4" pt="2">
                  {formik.errors.username}
                </Box>
              )}
            </FormControl>
            <FormControl my="4" mb="6">
              <FormLabel htmlFor="password" color="black.800">
                Password
              </FormLabel>
              <Box position="relative">
                <Input
                  placeholder="Enter your Password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  borderColor="gray.600"
                  name="password"
                  color="black.800"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  _hover={{ borderColor: "gray" }}
                />
                <IconButton
                  aria-label="toogle show password"
                  position="absolute"
                  size="sm"
                  right="2%"
                  variant="iconButton"
                  bottom="6%"
                  onClick={() => setShowPassword((pass) => !pass)}
                  cursor="pointer"
                  zIndex="1"
                  outline="0"
                  _hover={{
                    border: "0",
                    outline: "0",
                    bg: "transparent",
                  }}
                  _active={{
                    border: "0",
                    outline: "0",
                    bg: "transparent",
                  }}
                  icon={
                    showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )
                  }
                ></IconButton>
              </Box>
              {formik.touched.password && formik.errors.password && (
                <Box color="red" fontSize="sm" px="4" pt="2">
                  {formik.errors.password}
                </Box>
              )}
            </FormControl>
            <HStack my="4" mb="6" color="black">
              <Checkbox
                colorScheme="black"
                borderColor="black"
                id="rememberMe"
                spacing=".5rem"
                _checked={{ outline: "none" }}
              >
                <label htmlFor="rememberMe">Remember me</label>
              </Checkbox>
              <Spacer />
              <Text color="cyan.400">
                <Link to="#">Forgot Password ?</Link>
              </Text>
            </HStack>
            <Flex justify="center" direction="column" gap="4">
              <Button
                type="submit"
                aria-label="login"
                variant="solidPrimary"
                w="100%"
              >
                Log In
              </Button>
              <Button
                aria-label="login as guest"
                variant="outline"
                w="100%"
                color="black"
                onClick={() =>
                  dispatch(
                    loginAction({
                      username: "amanjain",
                      password: "amanjain1234",
                    })
                  )
                }
              >
                Log In as Guest
              </Button>
            </Flex>
            <Center mt="4" fontSize="sm" color="black">
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
