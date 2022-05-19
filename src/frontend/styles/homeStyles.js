export const HomeTextContainerStyles = {
  direction: "column",
  gap: "8",
  justify: "center",
};

export const HomeContainerHeadingStyles = {
  fontSize: "5xl",
  fontFamily: "dancing",
  position: "relative",
  zIndex: "10",
  pos: "relative",
  _after: {
    pos: "absolute",
    bottom: "-20%",
    left: "-10%",
    content: `""`,
    width: "120%",
    height: "1",
    backgroundColor: "gray.800",
  },
};

export const HomeHeadingTextStyles = {
  fontSize: "4xl",
  fontWeight: "black",
  mx: "4",
  bgGradient: "linear(to-tl, cyan.400 , cyan.700 ,cyan.500)",
  bgClip: "text",
  flex: "0 1 40%",
  textAlign: "center",
};

export const HomeHeadingSubTextStyles = {
  fontWeight: "bold",
  fontSize: "lg",
};
