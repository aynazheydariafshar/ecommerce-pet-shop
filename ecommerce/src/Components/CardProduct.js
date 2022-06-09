import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import PN from "persian-number";

export default function CardProduct({ imageSrc, titleCard, price, brand }) {
  return (
    <Card sx={{ maxWidth: 250, width: "100%", my: "20px", mx: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={imageSrc}
          alt="imgProduct"
          sx={{ objectFit: "contain", padding: "5px" }}
        />
        <CardContent>
          <Typography
            textAlign="right"
            gutterBottom
            variant="h7"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {titleCard}
          </Typography>
          <Typography variant="body2" textAlign="right" padding="10px">
            برند : {brand}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "error.main" }}
            padding="10px"
          >
            قیمت : {PN.convertEnToPe(PN.sliceNumber(price))} تومان
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardProduct.propTypes = {
  imageSrc: PropTypes.string,
  titleCard: PropTypes.string,
  price: PropTypes.number,
  brand: PropTypes.string,
};
