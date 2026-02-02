import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="Footer-Head">
            <div className="footer-logo">
              <img src="/imgs/Group 1.svg" alt="" />
              <h1>MIXEL.UZ</h1>
            </div>
            <div className="footer-lorem">
              <p>График работы колл-центра Понедельник - Суббота: 9:00–18:00</p>
            </div>
            <div className="footer-icons">
              <div className="footer-icon">
                <FaTelegram />
              </div>
              <div className="footer-icon">
                <FaInstagram />
              </div>
              <div className="footer-icon">
                <FaFacebook />
              </div>
              <div className="footer-icon">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="footer-category">
            <h2>Категории</h2>
            <h4>Ноутбуки</h4>
            <h4>Игровые кресла</h4>
            <h4>Телефоны</h4>
            <h4>Моноблоки</h4>
            <h4>Модули памяти</h4>
          </div>
          <div className="footer-categoryAll">
            <h2>Категории</h2>
            <h4>Ноутбуки</h4>
            <h4>Игровые кресла</h4>
            <h4>Телефоны</h4>
            <h4>Моноблоки</h4>
            <h4>Модули памяти</h4>
          </div>
          <div className="footer-category-Shop">
            <h2>Категории</h2>
            <h4>Ноутбуки</h4>
            <h4>Игровые кресла</h4>
            <h4>Телефоны</h4>
            <h4>Моноблоки</h4>
            <h4>Модули памяти</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
