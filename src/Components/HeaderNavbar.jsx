import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Components/HeaderNavbar.css";
import { BsMinecart } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import {GrUserAdmin} from "react-icons/gr"
import { useContext, useState } from "react";
import UserContext from "./User/UserContext";
import Badge from "react-bootstrap/Badge";




function HeaderNavbar({ cartItems }) {
  const { loginStatus,setLoginStatus } = useContext(UserContext);

  const [searchInput, setSearchInput] = useState("");

  const handleLogout=()=>{
    setLoginStatus("logout")
  }

  function handleSearch() {
    if (searchInput.toLowerCase().includes("sofa")) {
      return "/sofa";
    } else if (searchInput.toLowerCase().includes("chair")) {
      return "/chair";
    } else if (searchInput.toLowerCase().includes("table")) {
      return "/table";
    } else if (searchInput.toLowerCase().includes("product")) {
      return "/products";
    }
    else if (searchInput.toLowerCase().includes("bed")) {
      return "/bed";
    }
  }

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <div className="Nav-bar">
          <div className="left-section">
            <input
              className="input-Search"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Link
              to={handleSearch()}
              className="Search-btn linkWithoutDecoration"
            >
              Search
            </Link>
          </div>

          <div className="center-section">
            <Link className="logo" to="/">
            THE BOOK
            </Link>
          </div>

          <div className="right-section">
            {loginStatus === "success" ? (
              <Link className="login-logo" to="/" onClick={handleLogout}>
                <IoMdLogOut />
              </Link>
            ) : (
              <Link className="login-logo" to="/login">
                <AiOutlineUser />
              </Link>
            )}

            <Link className="wishlist-logo" to="/wishlist">
              <GiSelfLove />
            </Link>

            <Link className="cart-logo" to="/cart">
              <BsMinecart />
              <Badge pill bg="secondary" className="cart-badge">
                {cartItems.length}
              </Badge>
            </Link>
            <Link className="admin-logo" to='/adminlogin'>
             <GrUserAdmin />
            </Link>
          </div>
        </div>

        <div className="navbar-second-line">
          <a className="link-text" href="/home">
            FIND THE BOOK
          </a>
          <a className="link-text" href="/home">
            Track Your Order
          </a>
          <a className="link-text" href="/home">
            Buy in Bulk
          </a>
          <a className="link-text" href="/home">
            Contact Us
          </a>
        </div>

        <div className="thrid-nav">
          <div className="navbar-thrid-line">
            <Link to="/" className="service-text">
              love books
              <div className="dropdown-list">
                <ul>
                  <li>
                    {" "}
                    <Link className="linkWithoutDecoration" to="/sofa">
                      education books
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWithoutDecoration" to="/table">
                      east african politics
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWithoutDecoration" to="/chair">
                      science books
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWithoutDecoration" to="/bed">
                      life style books
                    </Link>
                  </li>
                </ul>
              </div>
            </Link>

            <a className="service-text" href="/">
              Books of East Africa
              <div className="dropdown-list">
                <ul>
                  <li>horror</li>
                  <li>romance</li>
                </ul>
              </div>
            </a>
            <a className="service-text" href="/">
              education level books
              <div className="dropdown-list">
                <ul>
                  <li>tech</li>
                  <li>literature</li>
                </ul>
              </div>
            </a>
            <a className="service-text" href="/">
              novals
            </a>
            <a className="service-text" href="/">
              poetry
            </a>
            <a className="service-text" href="/">
              biography
            </a>

            <Link className="service-text linkWithoutDecoration" to="/products">
              All Products
            </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
