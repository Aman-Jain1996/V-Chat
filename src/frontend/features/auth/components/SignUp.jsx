import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { Navigation } from "../../../components/Navigation";
import { HomeContainerHeadingStyles } from "../../../styles/homeStyles";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../AuthSlice";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.auth.authToken);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    authToken && navigate("/home", { replace: true });
  }, [authToken]);

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  };

  const submitHandler = (formData) => {
    dispatch(signUpAction(formData));
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values) => {
      submitHandler(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.firstName.trim()) errors.firstName = "First Name is mandatory";
      else if (!new RegExp("[A-Za-z]+").test(values.firstName))
        errors.firstName = "Only Alphabets allowed";

      if (!values.lastName.trim()) errors.lastName = "Last Name is mandatory";
      else if (!new RegExp("[A-Za-z]+").test(values.lastName))
        errors.lastName = "Only Alphabets allowed";

      if (!values.username.trim()) errors.username = "Username is mandatory";
      else if (!new RegExp("^[a-zA-Z0-9_.]+$").test(values.username))
        errors.username = "Only alphabets and _ are allowed";

      if (!values.password.trim()) errors.password = "Password is mandatory";
      else if (values.password.length < 6)
        errors.password = "Password must be more than 6 characters";

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
            color="black.800"
          >
            SignUp
          </Heading>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
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
                <FormLabel htmlFor="firstName" color="black.800">
                  First Name
                </FormLabel>
                <Input
                  color="black.800"
                  id="firstName"
                  placeholder="Enter your first name"
                  type="text"
                  borderColor="gray.600"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  _hover={{ borderColor: "gray" }}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <Box color="red" fontSize="sm" px="4" pt="2">
                    {formik.errors.firstName}
                  </Box>
                )}
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="lastName" color="black.800">
                  Last Name
                </FormLabel>
                <Input
                  color="black.800"
                  placeholder="Enter your last Name"
                  id="lastName"
                  type="text"
                  borderColor="gray.600"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  _hover={{ borderColor: "gray" }}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <Box color="red" fontSize="sm" px="4" pt="2">
                    {formik.errors.lastName}
                  </Box>
                )}
              </FormControl>
            </Flex>
            <Flex gap="4">
              <FormControl isRequired>
                <FormLabel htmlFor="username" color="black.800">
                  Username
                </FormLabel>
                <Input
                  color="black.800"
                  placeholder="Enter Username"
                  id="username"
                  type="text"
                  borderColor="gray.600"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  _hover={{ borderColor: "gray" }}
                />
                {formik.touched.username && formik.errors.username && (
                  <Box color="red" fontSize="sm" px="4" pt="2">
                    {formik.errors.username}
                  </Box>
                )}
              </FormControl>
            </Flex>
            <Flex gap="4">
              <FormControl isRequired>
                <FormLabel htmlFor="password" color="black.800">
                  Password
                </FormLabel>
                <Box position="relative">
                  <Input
                    color="black.800"
                    id="password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    borderColor="gray.600"
                    name="password"
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
                      outline: "none",
                      bg: "inherit",
                    }}
                    _active={{
                      border: "0",
                      outline: "0px",
                      bg: "inherit",
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
            </Flex>
            <Checkbox
              isRequired
              colorScheme="cyan"
              id="rememberMe"
              spacing=".5rem"
              borderColor="black"
            >
              <label htmlFor="rememberMe">
                <Text color="black">I accept all Terms &amp; conditions</Text>
              </label>
            </Checkbox>
            <Flex justify="center" direction="column" gap="4">
              <Button
                type="submit"
                aria-label="signUp"
                variant="solidPrimary"
                w="100%"
              >
                Sign Up
              </Button>
            </Flex>
            <Center fontSize="sm" color="black">
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
