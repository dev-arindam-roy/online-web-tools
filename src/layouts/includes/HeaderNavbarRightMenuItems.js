import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/store/slices/ThemeSwitcher";
import Nav from "react-bootstrap/Nav";
import { FiMoon, FiSun } from "react-icons/fi";

const HeaderNavbarRightMenuItems = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      <Nav className="ms-auto">
        <Nav.Link href="#login">Login</Nav.Link>
        <Nav.Link href="#register">Register</Nav.Link>
        {/* Icon Toggle for Theme */}
        <Nav.Link
          onClick={handleThemeToggle}
          className="ms-3"
          style={{ cursor: "pointer" }}
          title={
            theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
        >
          {theme === "dark" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </Nav.Link>
      </Nav>
    </>
  );
};

export default HeaderNavbarRightMenuItems;
