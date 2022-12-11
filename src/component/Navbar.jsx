import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Ima/giapher.png";
import Hamburger from "hamburger-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  // const handleOpen = () =>{
  //   setOpen(!open)
  // }
  ;
  return (
    <div>
      <Navb>
        <div className="navbar_logo">
          <img src={Logo} alt="" />
        </div>

        <div className={open ? "nav_section open" : "nav_section"}>
          <ul>
            <li >
              {" "}
              <a href="#home">Home</a>{" "}
            </li>
            <li >
              <a href="#about">About</a>{" "}
            </li>
            <li >
              {" "}
              <a href="#team">Team</a>{" "}
            </li>
            <li >
              {" "}
              <a href="#contact">Contact</a>{" "}
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <Hamburger toggled={open} toggle={setOpen} size={25} style={{paddingRight:"30px"}} />
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
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);


  .hamburger {
    display: none;
  }
  @media (max-width: 768px) {
    height: 70px;
    justify-content: space-evenly;
  }
  @media (max-width: 668px) {
    flex-wrap: wrap;
    justify-content: space-between;

    .hamburger {
      display: block;
    padding: 0 10px;

    }
  }

  .navbar_logo {
    height: 80px;

    img {
      height: 100%;
    }
  }

  .nav_section {
    padding-right: 10px;

    @media (max-width: 668px) {
      display: none;
      transform: scaleX(-0);
      transition: 0.3s;
    }

    ul {
      display: flex;
      align-items: center;

      gap: 30px;

      li {
        list-style: none;
        font-size: 1rem;

        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }

  .nav_section.open {
    display: block;
    transform: scaleX(1);
    transition: 0.3s;
    position: absolute;
    top: 5rem;
    right: 0;
    width: 200px;
    height: 100vh;
    background-color: white;
    padding-top: 2rem;

    display: flex;
    justify-items: center;

    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
      
      li {
        list-style: none;
        font-size: 2rem;
        transition: 0.2s;

    

        a {
          text-decoration: none;
          color: black;
          transition: 0.3s;
          &:hover{
         color: red;
        }
        }
      }
    }
  }
`;
