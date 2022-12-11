import React from 'react'
import styled from 'styled-components'
import How from './How'
import Team from './Team'
import With from './With'

function Works() {
  return (
    <Bodies id="about">
  <div className="content">
        <h1>Our Team </h1>
      </div>
        <How/>
        <With/>
        <Team/>

        <div className="contact" id="contact">
        <div className="content">
        <h1>Contact Us </h1>
      </div>

      <div>
      <a href="mailto:finance@giagpher.com">finance@giagpher.com</a>
      <a href="mailto:payroll@giagpher.com">payroll@giagpher.com</a>
      </div>
          
        </div>

        <div className="container_address">
          <p><span>Address:</span> Add this address too, 1452 Mercury Ct, Milpitas California 95035</p>
        </div>
    </Bodies>
  )
}

export default Works


const Bodies = styled.div`
  width: 700px;
  height: 100%;
  margin: 2rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  .content{
    text-align: center;
    color: #f34242;

  }

  .contact{

    div{
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;

    a{
      font-size: 2rem;
      color: blue ;

      &:hover{
        color: #f34242;

      }
    }
      
    }
  }

  @media screen  and (max-width:700px){
  width: 100%;
  /* padding: 1rem; */
  margin-right: 0 0rem;
    
  }

  .container_address{
    width: 100%;
    height: 30px;
    background: #f34242;
    text-align: center;
    margin-top: 3rem;
    color: white;
    padding: 10px 0;
    font-size: 0.8rem;

    span{
      font-weight: 700;
    }
  }

`;
