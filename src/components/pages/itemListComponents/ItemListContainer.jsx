import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        <ProductCard titulo="nike" precio="1200" />
        <ProductCard titulo="puma" precio="1000" />
      </div>
      <h4>{greetings}</h4>
    </div>
  );
};

export default ItemListContainer;
