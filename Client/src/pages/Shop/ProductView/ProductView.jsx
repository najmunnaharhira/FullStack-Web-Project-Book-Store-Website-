import "./style.css";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { commerce } from "../commerce";
import { Link, useParams } from "react-router-dom";

const createMarkup = (text) => {
  return { __html: text || "" };
};

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchProduct = async (productId) => {
    if (!productId) return;
    const response = await commerce.products.retrieve(productId);
    const { name, price, media, quantity, description } = response || {};
    setProduct({
      name: name || "",
      quantity: quantity ?? 0,
      description: description || "",
      src: media?.source || "",
      price: price?.formatted_with_symbol || "",
    });
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  return (
    <Container className="product-view">
      <Grid container>
        <Grid item xs={12} md={6} className="image-wrapper">
          <img src={product.src} alt={product.name} />
        </Grid>
        <Grid item xs={12} md={5} className="text">
          <Typography variant="h2">
            <b>{product.name}</b>
          </Typography>
          <Typography
            variant="p"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          <Typography variant="h3" color="secondary">
            Price: <b> {product.price} </b>
          </Typography>
          <br />
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Button
                size="large"
                className="custom-button"
                component={Link}
                to="/"
              >
                Continue Shopping
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductView;
