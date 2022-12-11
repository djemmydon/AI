import React from "react";
import styled from "styled-components";

function With() {
  return (
    <Body>
      <div className="the_body">
        <div>
          <h1>WITH OTHERS</h1>

          <p>
            Our open office space fosters a collaborative culture and allows
            ideas to bounce across the room with ease. Yeah, Team Giagpher has
            its share of superstars, but we check egos at the door and play the
            game collaboratively, with one another and with clients. It’s how
            our ideas score big.
          </p>
        </div>

        <div>
          <h1>WITH AGILITY</h1>

          <p>
            Like great athletes, we don’t just run, we sprint. We set goals and
            aren’t afraid to climb as high as is needed to reach them. Clients
            appreciate how we stretch past limits to get you the results needed.
            The goal is to cross the finish line first (and hope we don’t pull a
            muscle along the way).
          </p>
        </div>

        <div>
          <h1>WITH CREATIVITY</h1>

          <p>
            We’re honest — and don’t keep our clients in the dark. We believe in
            open communication and working together. There’s a reason our office
            has glass walls. What you see is what you get, and we guarantee
            you’ll like it—just make sure you watch where you walk.
          </p>
        </div>

        <div>
          <h1>WITH TRANSPARENCY</h1>

          <p>
            To get the best ideas, you’ve got to dig deep. It’s how we uncover
            unique ways to tell your story. Our philosophy is simple: You can’t
            bore people into buying your product or service. Here, ideas are
            king. After all, there’s no riskier approach than to play it safe.
          </p>
        </div>

        <div>
          <h1>WITH STRATEGY</h1>

          <p>
            The blueprint. The game plan. The return in RO!. Whatever you call
            it, we pursue goals with purpose. What good is a rudderless ship?
            Here we like to go from A to B and all the way to Z. Along the way,
            we ensure the journey is amazing, enlightening, and dare we say fun?
          </p>
        </div>

        <div>
          <h1>WITH FOCUS</h1>

          <p>
            We kick into work mode fast, and fuel our minds with morning joes
            and lunchtime jogs. We don’t just get work done, we do it
            exceptionally. We believe in being focused, because it helps us to
            spot the target audience, it helps with our messaging and it creates
            results.
          </p>
        </div>
      </div>
    </Body>
  );
}

export default With;

const Body = styled.div`
  width: 700px;
  height: 100%;
  border-radius: 10px;
  margin: 2rem auto;

  @media screen  and (max-width:700px){
  width: 100%;
  padding: 0;
    
  }

  h1 {
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
    color: #f34242;
  }

  p {
    font-size: 0.8rem;
    color: grey;
    
    padding: 10px 0;
    margin: 0;
  }

  .the_body {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    div {
        margin:0 1rem;
      border-right: 2px solid grey;
      color: #f34242;
      padding: 0 2rem;
    }
  }
`;
