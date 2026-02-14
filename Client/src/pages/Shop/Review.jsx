import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const Review = ({ checkoutToken }) => {
  const lineItems = checkoutToken?.live?.line_items ?? [];
  const subtotal = checkoutToken?.live?.subtotal?.formatted_with_symbol ?? "0.00";
  return (
    <>
      <Typography variant="h6" gutterBottom>Order summary</Typography>
      <List disablePadding>
        {lineItems.map((product) => (
          <ListItem key={product.id} style={{ padding: '10px 0' }}>
            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
            <Typography variant="body2">{product.line_total?.formatted_with_symbol ?? ""}</Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {subtotal}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
