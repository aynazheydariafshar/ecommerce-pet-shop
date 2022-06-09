import { Box } from "@mui/material";

const Cart = (props) => {
  return (
    <Box
      sx={{
        marginBottom: props.mbottom,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          width: props.width,
          height: "70%",
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
          justifyContent: "space-around",
          alignItems: "center",
          background: "#F8F9FD",
          boxShadow:
            "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
          borderRadius: 2,
          padding: props.padding,
          marginTop: "30px",
          marginLeft: { md: "100px", sm: "50px"},
          marginRight: "30px",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Cart;
