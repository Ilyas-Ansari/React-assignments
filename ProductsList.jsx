import React from "react";
import "./ProductList.css";

const products = [
  {
    title: "iPhone 14",
    price: "$799",
    image: "https://vsprod.vijaysales.com/media/catalog/product/2/0/206077-image1_2.jpg?optimize=medium&fit=bounds&height=500&width=500%22",
  },
  {
    title: "Galaxy S23",
    price: "$699",
    image: "https://credsell.com/wp-content/uploads/2023/07/6-SAMSUNG-GALAXY-S23-ULTRA-1.jpg",
  },
  {
    title: "OnePlus 11",
    price: "$649",
    image: "https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png",
  },
  {
    title: "Pixel 8",
    price: "$599",
    image: "https://lh3.googleusercontent.com/tJHgI5pI2yxmL4Drqp1Yy2N3pHTX5UN2Z-Cd0688K9ljI2-eeYjsigymm8Hk09Rdhm5RwOLajG9sUnzhLVlaj3H7VZcFAMP6ojQ=s3000-w3000-e365-rw-v0-nu",
  },
  {
    title: "Xiaomi 13",
    price: "$499",
    image: "https://m.media-amazon.com/images/I/417i5BdW1LL._SX300_SY300_QL70_FMwebp_.jpg",
  },
];

const ProductCard = ({ title, price, image }) => (
  <div className="product-card">
    <img src={image} alt={title} />
    <div className="product-details">
      <h3>{title}</h3>
      <p>{price}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  </div>
);

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="scroll-vertical">
        {products.map((prod, index) => (
          <ProductCard
            key={index}
            title={prod.title}
            price={prod.price}
            image={prod.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
