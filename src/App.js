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
  Notifications,
  Profile,
  SignUp,
} from "./frontend/features";
import { Hero, Loading } from "./frontend/components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyPosts } from "./frontend/features/profile/components/MyPosts";
import { Bookmarks } from "./frontend/features/profile/components/Bookmarks";

function App() {
  const dispatch = useDispatch();
  const { authToken, isLoading } = useSelector((state) => state.auth);
  const { profileLoading } = useSelector((state) => state.profile);
  const { postLoading } = useSelector((state) => state.posts);
  const { userLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (authToken) {
      dispatch(getAllUsers());
      dispatch(getAllPosts());
    }
  }, [authToken]);

  return (
    <Box color={useColorModeValue("black.800", "gray.100")}>
      {(isLoading || userLoading || postLoading || profileLoading) && (
        <Loading />
      )}
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
        <Route path="/explore" element={<Explore />} />
        <Route path="/user/:username" element={<Profile />}>
          <Route index element={<MyPosts />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
