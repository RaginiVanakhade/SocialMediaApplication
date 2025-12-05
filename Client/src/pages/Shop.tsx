// import React from 'react'
import ProductCard from "../components/ProductCard"
import "../Style/Home.css"
import { useSelector } from "react-redux"


// Assuming Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  // add other fields from ProductData
}

interface RootState {
  products: {
    products: Product[];
  };
}
const Shop = () => {
    const products = useSelector((state: RootState) => state.products);
  return (

    <div>
         <div>
  <h2>Shop</h2>
  <div className="product-card-container">
    {products.products.map((product: Product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
    </div>
  )
}

export default Shop