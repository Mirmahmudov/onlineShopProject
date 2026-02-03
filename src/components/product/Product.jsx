import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  return (
    <div className="product-grid" onClick={() => navigate("/ProductDetail")}>
      <div className="product-card">
        <div className="discount">-30%</div>

        <img
          src="./public/imgs/lWGeSFc0Y6jBoVxA4hQw-home_default 1.svg"
          alt="product"
        />

        <p className="product-name">TECNO Spark 6 Go 3/64GB</p>

        <div className="price">
          <span className="old">1 300 000 сум</span>
          <span className="new">1 040 000 сум</span>
        </div>

        <div className="icons">
          <button>♡</button>
          <button>🛒</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
