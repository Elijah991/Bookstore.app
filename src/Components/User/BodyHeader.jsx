import { Link } from "react-router-dom";
import imageSrc from "../images/books/rep.jpg";
import Sofaimg from "../images/books/2.jpg";
import ChairImg from "../images/books/3.jpg";
import TableImg from "../images/books/4.jpg";
import DiningsetImg from "../images/books/5.jpg";
import BedImg from "../images/books/6.jpg";
import StorageImg from "../images/books/7.jpg";
import OfficeFurImg from "../images/books/8.jpg";
import PetFurnitureImg from "../images/books/9.jpg";
import StudyImg from "../images/books/10.jpg";
import DressingImg from "../images/books/11.jpg";
import BestSellBed from "../images/books/13.jpg";
import BestSellChair from "../images/books/14.jpg";
import BestSellTable from "../images/books/15.jpg";
import BestSellShoeCabin from "../images/books/4.jpg";

import "../User/BodyHeader.css";

export default function BodyHeader() {
  return (
    <div className="container BodyHeader">
      <div className="HeaderImage">
        <Link to={"/"}>
          <img src={imageSrc} alt="" />
        </Link>
      </div>
      <div>
        <div>
          <h3 className="ShopCategoryH3">Shop by Category</h3>
        </div>

        <div className="row ShopCategory">
          <div className="col-sm-6 col-md-4">
            <Link to="/sofa" className="imageContainer linkWithoutDecoration">
              <img src={Sofaimg} alt="" />
              <p>love</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/chair" className="imageContainer linkWithoutDecoration">
              <img src={ChairImg} alt="" />
              <p>friction</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/table" className="imageContainer linkWithoutDecoration">
              <img src={TableImg} alt="" />
              <p>horrors</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link
              to="/products"
              className="imageContainer linkWithoutDecoration"
            >
              <img src={DiningsetImg} alt="" />
              <p>adventure</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/bed" className="imageContainer linkWithoutDecoration">
              <img src={BedImg} alt="" />
              <p>novals</p>
            </Link>
          </div>
        </div>

        <div className="row ShopCategory">
          <div className="col-sm-6 col-md-4">
            <Link
              to="/products"
              className="imageContainer linkWithoutDecoration"
            >
              <img src={StorageImg} alt="" />
              <p>Storage & organizer books</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link
              to="/products"
              className="imageContainer linkWithoutDecoration"
            >
              <img src={PetFurnitureImg} alt="" />
              <p>cooking books</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/table" className="imageContainer linkWithoutDecoration">
              <img src={StudyImg} alt="" />
              <p>Study books</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link
              to="/products"
              className="imageContainer linkWithoutDecoration"
            >
              <img src={OfficeFurImg} alt="" />
              <p>Office books</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/table" className="imageContainer linkWithoutDecoration">
              <img src={DressingImg} alt="" />
              <p>Dressing books</p>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className="BestSellerH3">Shop Best Sellers of books</h3>
        </div>
        <div className="row BestSellCategory">
          <div className="col-sm-6 col-md-3">
            <Link
              to="/bed"
              className="BestSellimageContainer linkWithoutDecoration"
            >
              <img src={BestSellBed} alt="" />
              <h4>Books of values</h4>
              <p className="BestSellP">300 + Options, Starting shs10710</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3">
            <Link
              to="/table"
              className="BestSellimageContainer linkWithoutDecoration"
            >
              <img src={BestSellTable} alt="" />
              <h4>Modern Writing books</h4>
              <p className="BestSellP">180+ Options, Starting shs.2799</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3">
            <Link
              to="/chair"
              className="BestSellimageContainer linkWithoutDecoration"
            >
              <img src={BestSellChair} alt="" />
              <h4>Ergonomic books</h4>
              <p className="BestSellP">250+ Options, Starting shs.3799</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3">
            <Link
              to="/products"
              className="BestSellimageContainer linkWithoutDecoration"
            >
              <img src={BestSellShoeCabin} alt="" />
              <h4>Shoe books</h4>
              <p className="BestSellP">95+ Options, Starting shs.3499</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
