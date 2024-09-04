import "./productCard.css";

const ProductCard = ({ titulo, precio }) => {
  return (
    <div>
      <div>
        <h3>{titulo}</h3>
        <h4>{precio}</h4>
        <button>ver detalle</button>
      </div>
    </div>
  );
};

export default ProductCard;
