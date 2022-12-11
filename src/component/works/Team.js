import React from "react";
import Image1 from "../Ima/pic6.jpeg";
import Image2 from "../Ima/pic7.jpeg";
import Image3 from "../Ima/pic1.jpeg";
import Image4 from "../Ima/pic3.jpeg";
import Image5 from "../Ima/pic4.jpeg";
import Image6 from "../Ima/pic5.jpeg";
import Icon from "../Ima/15.png";
import styled from "styled-components";
// import Image1 from "../Ima/pic2.jpg"
// import Image1 from "../Ima/pic2.jpg"
// import Image1 from "../Ima/pic2.jpg"

function Team() {
  return (
    <Body id="team">
      <div className="content">
        <h1>Our Team </h1>
      </div>
      <div className="team_container">
        <div className="team_items">
          <div className="team_img">
            <img src={Image2} alt="" />
          </div>

          <div className="team_text">
            <h3>Pualina Hellen</h3>
            <h4>Global cheif communcative officer</h4>
            <a href="mailto:racheal.naoh@giagpher.com">
              <img src={Icon} alt="" />
            </a>
          </div>
        </div>

        <div className="team_items">
          <div className="team_img">
            <img src={Image3} alt="" />
          </div>

          <div className="team_text">
            <h3>Smith Greg</h3>
            <h4>Global chief Officer</h4>
            <a href="mailto:smith.greg@giagpher.com">
              <img src={Icon} alt="" />
            </a>
          </div>
        </div>

        <div className="team_items">
          <div className="team_img">
            <img src={Image1} alt="" />
          </div>

          <div className="team_text">
            <h3>Racheal Naoh</h3>
            <h4>Chief Global financial Officer</h4>
            <a href="mailto:racheal.naoh@giagpher.com">
              <img src={Icon} alt="" />
            </a>
          </div>
        </div>
        <div className="team_items">
          <div className="team_img">
            <img src={Image4} alt="" />
          </div>

          <div className="team_text">
            <h3>Mick Mckeleb</h3>
            <h4>Global cheif Creative Officer</h4>
            <a href="mailto:mick.mckeleb@giagpher.com">
              <img src={Icon} alt="" />
            </a>
          </div>
        </div>

        <div className="team_items">
          <div className="team_img">
            <img src={Image5} alt="" />
          </div>

          <div className="team_text">
            <h3>Wertime Ken</h3>
            <h4>Cheif executive Officer</h4>
            <a href="mailto:michael.diagneault@giagpher.com">
              <img src={Icon} alt="" />
            </a>
          </div>
        </div>
        <div className="team_items">
          <div className="team_img">
            <img src={Image6} alt="" />
          </div>

          <div className="team_text">
            <h3>Stephanie Ricke</h3>
            <h4>Advertising Cheif Officer</h4>
            <a href="mailto:stephanie.ricke@giagpher.com">
              <img src={Icon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Team;

const Body = styled.div`
  height: 100%;
  margin: 0 auto;

  .content {
    text-align: center;
    color: #f34242;
  }

  .team_container {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;

    .team_items {
      width: 300px;
      height: 100%;
      position: relative;
      cursor: pointer;
      border-radius: 20px;

      .team_img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: relative;
        border-radius: 20px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }

      .team_text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: white;
        opacity: 0;
        transition: all 0.2s;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border-radius: 20px;

        h3 {
          margin: 0;
          padding: 0;
          font-size: 1rem;
        }
        h4 {
          margin: 0;
          padding: 5px 0;
          font-size: 0.8rem;
        }

        a {
          height: 50px;

          img {
            height: 100%;
          }
        }
      }

      &:hover .team_text {
        background-color: rgba(255, 75, 75, 0.493);
        opacity: 1;
      }
    }
  }
`;
