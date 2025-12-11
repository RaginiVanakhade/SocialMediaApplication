import { FaStar } from "react-icons/fa";
import "../Style/ProductCart.css";
import { addToCart } from "../redux/CardSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  // Handler to map Product -> CartProduct shape
  const handleAddToCart = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    product: Product
  ) => {
    e.stopPropagation();
    e.preventDefault();

    const cartItem = {
      id: product.id,
      title: product.name,   // map name -> title
      price: product.price,
      category: product.category,
      img: product.image,    // map image -> img
      rating: product.rating,
    };

    dispatch(addToCart(cartItem));
    alert("Product Added to cart Successfully!");
  };

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

      <div
        className="add-to-cart"
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span>+</span>
        <span>Add to Cart</span>
      </div>
    </div>
  );
};

export default ProductCard;
