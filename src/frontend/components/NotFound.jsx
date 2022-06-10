import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Navigation } from "./Navigation";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Navigation />
      <Box
        w="100%"
        display="grid"
        placeItems="center"
        h="90vh"
        position="relative"
      >
        <Image
          w="50%"
          src="https://res.cloudinary.com/ajain8479/image/upload/v1654849641/Social%20Media/keiaf9s2kdojvtacawp5.webp"
          alt="404 Not Found"
        />
        <Button
          position="absolute"
          variant="primary"
          top="75%"
          left="50%"
          transform="translate(-50%,-50%)"
          onClick={() => navigate("/home")}
        >
          Go back to Home
        </Button>
      </Box>
    </Box>
  );
};
