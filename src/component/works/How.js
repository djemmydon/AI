import React from "react";
import styled from "styled-components";
import Image from "../Ima/bus.jpg";
function How() {
  return (
    <Body>
      <div className="container_text">
        <h1>How We Works</h1>
        <p>
          Remember full-service ad agencies? You know, places where Creative,
          Account Management, Social Media, Brand Strategy, Digital, Earned, CIX
          and Paid Media all live together under one roof? Despite what you may
          have heard, this model is alive and well "–" and dare we say is
          thriving at Giagpher. Whether you provide a service that needs
          attention, excel in selling brand experiences or make products that
          are found around the house, we have the expertise and know-how to get
          you noticed.
        </p>
      </div>

      <div className="container_img">
        <img src={Image} alt="" />
      </div>
    </Body>
  );
}

export default How;

const Body = styled.div`
  width: 700px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    max-width: 100%;
    height: 100%;
    flex-wrap: wrap;
    margin: 0 auto;
    align-content: center;
  justify-content: center;
  }

  .container_img {
    width: 500px;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container_text {
    width: 500px;
    height: 100%;
    font-size: 0.6rem;

    h1 {
      font-size: 1rem;
      padding: 0;
      margin: 0;
      color: #f34242;
    }

    p {
      font-size: 0.7rem;
      color: grey;
    }
  }
`;
