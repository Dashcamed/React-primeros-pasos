import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary"></Badge>
      <ShoppingCartIcon />
    </div>
  );
};

export default CartWidget;
