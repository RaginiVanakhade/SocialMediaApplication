import React from "react";
import { FaStar } from "react-icons/fa";
import "../Style/ProductCart.css"

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="rating">
        {Array.from({ length: product.rating ?? 4 }).map((_, idx) => (
          <FaStar key={idx} />
        ))}
      </div>
      <div className="add-to-cart">
        <span>+</span>
        <span>Add to Cart</span>
      </div>
    </div>
  );
};

export default ProductCard;
