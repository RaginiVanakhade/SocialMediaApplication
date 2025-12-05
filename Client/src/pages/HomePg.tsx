// import React from 'react'
import { Categories ,ProductData } from "../assets/MocData"
import ShoppingImg from "../assets/shopping.png"
import "../Style/Home.css"
import InfoSection from "../components/InfoSection"
import Category from "../components/Category"
import { setProducts } from "../redux/ProductSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ProductCard from "../components/ProductCard"
import Shop from "./Shop"



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

const HomePg = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(setProducts(ProductData));
  }, [dispatch]);

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="category-box">
            <div className="category-title">SHOP BY CATEGORIES</div>
            <ul>
              {Categories.map((category, index) => (
                <li key={index}>
                  <div></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="home-banner">
            <img src={ShoppingImg} alt="" />
            <div className="banner-text">
              <p>Code With Yousaf</p>
              <h2>WELCOME TO E-SHOP</h2>
              <p>MILLIONS+ PRODUCTS</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>

      <InfoSection />
      <Category />

     <div>
  <h2>Top Products</h2>
  <div className="product-card-container">
    {products.products.slice(0, 5).map((product: Product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

<Shop />

    </>
  );
};

export default HomePg;