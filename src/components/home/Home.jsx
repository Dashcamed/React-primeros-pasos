import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Home = () => {
  return (
    <div>
      <Button variant="contained" color="secondary">
        Sumar
      </Button>
      <TextField label="Outlined" variant="filled" />
      <ShoppingCartIcon color="success" />
    </div>
  );
};
