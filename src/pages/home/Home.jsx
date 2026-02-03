import React from "react";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import Swiper from "../../components/swiper/Swiper";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper />
        </div>
      </div>
      <main>
        <section className="one">
          <div className="container">
            <div className="sarlavha">
              <h1>Рекомендуем</h1>
              <span>Посмотреть все →</span>
            </div>
            <Product />
          </div>
        </section>
        <section className="two">
          <div className="container">
            <div className="sarlavha">
              <h1>Popular category</h1>
            </div>
            <Category />
          </div>
        </section>
        <section className="three">
          <div className="container">
            <div className="sarlavha">
              <h1>Рекомендуем</h1>
              <span>Посмотреть все →</span>
            </div>
            <div className="recomend">
              <img src="./public/imgs/newHotRus 1.svg" alt="" />
              <Product />
            </div>
          </div>
        </section>
        <section className="four">
          <div className="container">
            <div className="card">
              <img src="./public/imgs/Layer 48 copy 1.svg" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
