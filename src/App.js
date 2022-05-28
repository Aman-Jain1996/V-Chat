import { Route, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Mockman from "mockman-js";
import "./App.css";
import {
  Explore,
  getAllPosts,
  getAllUsers,
  Home,
  Login,
  Profile,
  SignUp,
} from "./frontend/features";
import { Hero } from "./frontend/components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { userDetails, authToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, [userDetails, authToken]);

  return (
    <Box color={useColorModeValue("black.800", "gray.100")}>
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:username" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Box>
  );
}

export default App;
