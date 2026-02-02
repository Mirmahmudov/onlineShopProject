import { MdCancelPresentation, MdOutlineKeyboardVoice } from "react-icons/md";
import "./Navbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaBalanceScale, FaChevronDown, FaChevronRight, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [modal, setModal] = useState(false);

  return (
    <div className="navbar">
      <div className="head">
        <div className="head-location">
          <img src="/imgs/Location.svg" alt="" />
        </div>
        <div className="head-lorem">
          <h3>Our Stores</h3>
          <h3>B2B Sales</h3>
          <h3>Installment Purchase</h3>
          <h3>Payment Methods</h3>
          <h3>Product Warranty</h3>
        </div>
        <div className="head-Number">
          <h3>+998 95 123 55 88</h3>
        </div>
      </div>

      <div className="nav">
        <div className="container">
          <div className="logo">
            <img src="/imgs/Logo.svg" alt="" />
          </div>
          <form action="">
            <div className="form-category">
              <select>
                <option value="">All category</option>
              </select>
              <input type="text" placeholder="Telephone and home appliances" />
              <MdOutlineKeyboardVoice className="voise" />
              <button className="nav-search" type="submit">
                <h4>
                  <IoSearchOutline className="outlineIcon" />
                </h4>
                <h4>
                  <span>search</span>
                </h4>
              </button>
            </div>
          </form>

          <div className="nav-icons">
            <div className="nav-icon">
              <FiUser className="nav-user" />
              <h4>login</h4>
            </div>
            <div className="nav-icon">
              <FaBalanceScale className="FaBalanceScale" />
              <h4>Compare</h4>
            </div>
            <div className="nav-icon">
              <FaRegHeart className="nav-heart" />
              <h4>like</h4>
            </div>
            <div className="nav-icon">
              <LuShoppingCart className="nav-cart" />
              <h4>korzina</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-category">
        <div className="container">
          <div className="nav-category-btn">
            <button
              onClick={() => {
                setModal(!modal);
              }}
            >
              {modal ? (
                <MdCancelPresentation className="nav-category-btn-menu" />
              ) : (
                <TfiMenuAlt className="nav-category-btn-menu" />
              )}
              Category
            </button>
          </div>
          <ul>
            <li>
              <NavLink>Shop</NavLink>
            </li>
            <li>
              <NavLink>All-in-One computers</NavLink>
            </li>
            <li>
              <NavLink>Telephone, planshet</NavLink>
            </li>
            <li>
              <NavLink>Notebook</NavLink>
            </li>
            <li>
              <NavLink>Components</NavLink>
            </li>
            <li>
              <NavLink>Networking equipment</NavLink>
            </li>
            <li>
              <NavLink>Office equipment</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {modal && (
        <div className="category-modal">
          <div className="container">
            <div className="categrorys">
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/MAwjgyjlqEAbAU0zXMng.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Telephone, planshet</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/XvXONMiidCc1qzRs6pUd.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Notebook</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/i06LjY25JX2Vz45mIaa2.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Networking equipment</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/d93sqWZvxhPVZpcPyPth.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Video surveillance</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/bZhSzCtTF6eWSSRMCkgq.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Computer</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/OK9bfQ9okt09qMMdcY4j.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Office equipment</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/hajkxW0rNiM4hej53WWK.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Acsessuare</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/AWBudZ707IYIkL38zF4y.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Home goods</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/rg9Jx4v2Osgw8F3Ib5hW.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Peripheral devices</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
              <div className="categoryAll">
                <div className="categoryimg">
                  <img src="/imgs/ExtMa67favhspFSzo5FK.svg" alt="" />
                </div>
                <div className="categoryName">
                  <h4>Ip, telephone</h4>
                </div>
                <div className="ategory-modal-icon">
                  <FaChevronRight />
                </div>
              </div>
            </div>

            <div className="categoryModal-Two">
              <div className="category-info">
                <h1>Сетевое оборудование</h1>
                <div className="category-info-One">
                  
                  <h5>Switches</h5>
                  <h5>Wi-Fi access points</h5>
                  <h5>Media converters</h5>
                  <h5>ADSL routers</h5>
                  <h5>Network adapters</h5>
                  <h5>Wi-Fi routers and routers</h5>
                  <h5>Injectors</h5>
                  <h5>Signal repeaters</h5>
                  <h5>Other network equipment</h5>
                  <h5>Network Cable (Ethernet)</h5>
                </div>
              </div>
              <div className="category-img">
                <img
                  src="https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4="
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
