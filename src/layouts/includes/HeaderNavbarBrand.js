import React from "react";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import SiteLogoDark from "../../images/site-logo-dark.png";
import SiteLogoLight from "../../images/site-logo-light.png";

const HeaderNavbarBrand = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={theme === "dark" ? SiteLogoDark : SiteLogoLight}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        React Bootstrap
      </Navbar.Brand>
    </>
  );
};

export default HeaderNavbarBrand;
