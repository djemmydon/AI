import React from "react";
import styled from "styled-components";
import Logo from "./Ima/giapher.png";

function Navbar() {
  return (
    <div>
      <Navb>
        <div className="navbar_logo">
          <img src={Logo} alt="" />
        </div>

        <div className="nav_section">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Team</li>
          </ul>
        </div>
      </Navb>
    </div>
  );
}

export default Navbar;

const Navb = styled.nav`
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  color: black;
  background-color: white;
  flex-wrap: wrap;

  @media (max-width: 768px) {
  height: 120px;
  justify-content: space-evenly;


  }

  .navbar_logo {
    height: 80px;

    img {
      height: 100%;
    }
  }

  .nav_section {
    padding-right: 10px;

    ul {
      display: flex;
      align-items: center;

      gap: 30px;

      li {
        list-style: none;
        font-size: 1rem;
      }
    }
  }
`;
