import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Login } from "./frontend/features/auth/components/Login";
import { SignUp } from "./frontend/features/auth/components/SignUp";
import { Hero } from "./frontend/features/home/Hero";
import { Home } from "./frontend/features/home/Home";
import { Profile } from "./frontend/features/profile/Profile";
import { Explore } from "./frontend/features/explore/Explore";

function App() {
  return (
    <Box>
      <Routes>
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
