import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import HeaderNavbarBrand from "../includes/HeaderNavbarBrand";
import HeaderNavbarLeftMenuItems from "../includes/HeaderNavbarLeftMenuItems";
import HeaderNavbarRightMenuItems from "../includes/HeaderNavbarRightMenuItems";

const HeaderNavbar = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <>
      <Navbar
        bg={theme}
        data-bs-theme={theme}
        expand="lg"
        className={`bg-body-tertiary ${
          theme === "light" ? "bg-light" : "bg-dark"
        }`}
      >
        <Container>
          <HeaderNavbarBrand />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <HeaderNavbarLeftMenuItems />
            <HeaderNavbarRightMenuItems />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
