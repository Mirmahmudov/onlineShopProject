import React from "react";
import "./ProductDetail.css";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiScales } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
function ProductDetail() {
  const naviagte = useNavigate();
  return (
    <>
      <div className="productdet">
        <div className="container">
          <div
            className="back"
            onClick={() => {
              naviagte("/");
            }}
          >
            ◀ BACK
          </div>
          <div className="info">
            <div className="imgs">
              <img
                className="big"
                src="./public/imgs/Rectangle 216.svg"
                alt=""
              />
              <div className="smallimg">
                <img src="./public/imgs/Rectangle 216.svg" alt="" />
                <img src="./public/imgs/Rectangle 216.svg" alt="" />
                <img src="./public/imgs/Rectangle 216.svg" alt="" />
                <img src="./public/imgs/Rectangle 216.svg" alt="" />
              </div>
            </div>
            <div className="detail">
              <h1>MacBook Pro 13 MXK32ZP/A Space Gray</h1>
              <h3>16 559 000 cум</h3>
              <div className="icons">
                <FiShoppingCart />
                <FaRegHeart />
                <GiScales />
              </div>
              <div className="btns">
                <button className="seychas">Купить сейчас</button>
                <button className="rassrochku">
                  Купить в рассрочку сейчас
                </button>
              </div>
              <p>
                {" "}
                MacBook Pro 13 MXK32ZP/A Space Gray Full HD 1920x1080 IPS /
                Core™ i7-1165G7 / 8GB RAM / 256GB SSD
              </p>
            </div>
          </div>
          <div className="outhers">
            <h1>Технические параметры</h1>
            <div className="sec">
              <h2>Название</h2>
              <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
