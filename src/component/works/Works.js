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

        <div className="contact">
        <div className="content">
        <h1>Contact Us </h1>
      </div>

      <div>
      <a href="mailto:finance@giagpher.com">finance@giagpher.com</a>
      <a href="mailto:payroll@giagpher.com">payroll@giagpher.com</a>
      </div>
          
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

`;
