import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="gray"
      className="text-center text-lg-start text-muted Footer"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <div className="FooterFirstSession">
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Corporate</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    About Us{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Corporate Reading{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    THE BOOK in the News{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Careers
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Useful Links</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Explore Gift & Cards{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Buy in Bulk{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Discover Our Brands{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Check Out Bonhomie,Our Blog
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Find a book{" "}
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Partner With Us</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Sell on THE BOOK{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Become a Feanchisee{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Become Our Channel Partner{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Become Our Pep Homie{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Our Marketplace Policies{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Merchant Dashboard Login
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Need Help?</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    FAQs{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Policies
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/home">
                    {" "}
                    Contact Us
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">
                  Download our App
                </h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    <img
                      className="App-img"
                      src={
                        "https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-apple-appstore-logo_2x.png"
                      }
                      alt=""  />{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    <img
                      className="App-img"
                      src={
                        "https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-google-playstore-logo_2x.png"
                    }
                    alt="" />{" "}
                  </Link>{" "}
                  <br />
                </div>
              </MDBCol>
            </div>

            <div className="FooterSecondSession">
              <div className="categorySession">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular Categories
                    </h4>
                    <p>
                      
                    </p>
                  </Link>
                </MDBCol>
              </div>

              <div className="BrandSession">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular Brands
                    </h4>
                    <p>
                     
                    </p>
                  </Link>
                </MDBCol>
              </div>

              <div className="citesCategory">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular cities
                    </h4>
                    <p>
                      
                    </p>
                  </Link>
                </MDBCol>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="ThirdSessionMain">
        <div className="ThirdSession">
          <div className="ThirdSessionLeft">
            <div className="HeadingAccept">
              <h3>We accept</h3>
            </div>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-visa.jpg"  alt=""/>{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-master-card.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-rupay.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-dinners-club.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-wallet.jpg" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg" alt="" />{" "}
            </Link>
          </div>
          <div className="ThirdSessionRight">
            <div className="HeadingAccept">
              <h3>Like What You See? Follow us Here</h3>
            </div>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-social-insta.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-fb.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-pinterest.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-social-linkedin.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-youtube.png" alt="" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-social-twitter.png" alt="" />{" "}
            </Link>
          </div>
        </div>
      </div>

      <div
        className="copyRight text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
      >
        © 2024 Copyright:
        <Link to="/" className="linkWithoutDecoration">
        THE BOOK
        </Link>
      </div>
    </MDBFooter>
  );
}
