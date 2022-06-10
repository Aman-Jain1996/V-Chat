import { Route, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
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
import { Hero, Loading, NotFound, PrivateRoute } from "./frontend/components";
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
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* private routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:username"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <MyPosts />
              </PrivateRoute>
            }
          />
          <Route
            path="bookmarks"
            element={
              <PrivateRoute>
                <Bookmarks />
              </PrivateRoute>
            }
          />
          <Route
            path="notifications"
            element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
