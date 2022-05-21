import { Route, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Login } from "./frontend/features/auth/components/Login";
import { SignUp } from "./frontend/features/auth/components/SignUp";
import { Hero } from "./frontend/features/home/Hero";
import { Home } from "./frontend/features/home/Home";
import { Profile } from "./frontend/features/profile/Profile";
import { Explore } from "./frontend/features/explore/Explore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Mockman from "mockman-js";
import "./App.css";

function App() {
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Box>
  );
}

export default App;
