import React, { useState } from "react";
import { useForm } from "@formspree/react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { Form1, Form2, Form3, Form4, Form5, Form6 } from "./Form";
import { data } from "./data";
import {useNavigate} from "react-router-dom";

function getStep() {
  return [
    "Application Information",
    "Education",
    "References",
    "Previous Employment",
    "Military Service",
    "Disclaimer and Signature",
  ];
}

function StepperForm() {
  const [activeSteps, setActiveStep] = useState(0);
  const [userInfo, setUserInfo] = useState(data);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const [state, sendToFormspree] = useForm("xeqdypww");
  
  const steps = getStep();

  const handleNext = () => {
    setActiveStep(activeSteps + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeSteps - 1);
  };

  function getStepContent() {
    switch (activeSteps) {
      case 0:
        return <Form1 userInfo={userInfo} handleChange={handleChange} />;

      case 1:
        return <Form2 userInfo={userInfo} handleChange={handleChange} />;

      case 2:
        return <Form3 userInfo={userInfo} handleChange={handleChange} />;

      case 3:
        return <Form4 userInfo={userInfo} handleChange={handleChange} />;

      case 4:
        return <Form5 userInfo={userInfo} handleChange={handleChange} />;

      case 5:
        return <Form6 userInfo={userInfo} handleChange={handleChange} />;

      default:
        return null;
    }
  }
  console.log(state);

  const submitNow = (e) => {
    e.preventDefault();
    sendToFormspree(userInfo);
  };

  if (state.succeeded) {
    navigate("/")
}
  return (
    <Body>
      {activeSteps === steps.length ? (
        <h1>Congratulation</h1>
      ) : (
        <Form onSubmit={submitNow}>
          <Stepper alternativeLabel activeStep={activeSteps}>
            {steps.map((step, index) => {
              const labelProps = {};
              //   const stepProps = {};

              return (
                <Step {...labelProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {getStepContent(activeSteps)}

          <div className="button">
            <button type="button" onClick={() => handlePrev()}>
              Back
            </button>

            {activeSteps === 5 ? (
              <Button type="submit" disabled={state.submitting}>
                Submit
              </Button>
            ) : (
              <button type="button" onClick={() => handleNext()}>
                Next
              </button>
            )}
          </div>
        </Form>
      )}
    </Body>
  );
}

export default StepperForm;

const Body = styled.div`
  padding: 7rem 0;
  background-image: url(./Ima/banner.jpg);
  max-height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  

  font-family: "Montserrat", sans-serif !important;

  @media screen and (max-width: 868px) {
    width: 100%;

  padding:20rem 0;

  }
`;

const Form = styled.form`
  width: 800px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.75);

  padding: 15px 10px;
  font-family: "Montserrat", sans-serif !important;

  @media screen and (max-width: 868px) {
    width: 100%;
  }

  button {
    padding: 7px 20px;
    outline: none;
    border: none;
    background: #f34242;
    color: white;
    border-radius: 10px;
    transition: all 0.5s;

    &:hover {
      color: #f34242;
      background: #e7e1e1;
    }
  }
  span {
    font-size: 0.8rem !important;
  }

  input {
    font-size: 0.8rem !important;
  }

  .MuiStepper-horizontal{
    flex-wrap: wrap;
  }
  .button {
    display: flex;
    justify-content: space-between;
  }

  .asp {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px 0;
    font-family: "Montserrat", sans-serif !important;

    @media screen and (max-width: 868px) {
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: start;
      gap: 5px;
      width: 100%;
    }
    @media screen and (max-width: 568px) {
      align-items: center;
      justify-content: center;
    }

    .form_input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;

      label {
        font-size: 0.8rem;
      }

      input {
        width: 200px;
        height: 30px;
        outline: none;
        border: 2px solid grey;
        border-radius: 10px;
        padding: 0 10px;
        font-size: 0.8rem;
        font-family: "Montserrat", sans-serif !important;

        @media screen and (max-width: 568px) {
          width: 400px;
        }
      }
    }

    .txt {
      flex-direction: column;
      width: 100%;
      padding: 0 2.8rem;

      @media screen and (max-width: 568px) {
        flex-direction: column;
        align-items: flex-start;
        justify-items: center;
      }
      input {
        width: 100%;
        height: 30px;
        outline: none;
        border: 2px solid grey;
        border-radius: 10px;
        padding: 0 10px;
        font-size: 0.8rem;

        @media screen and (max-width: 568px) {
          width: 400px;
        }
      }
    }

    .form_check {
      display: flex;
      flex-direction: column;

      label {
        font-size: 0.8rem;
      }

      select {
        width: 230px;
        height: 35px;
        outline: none;
        border: 2px solid grey;
        border-radius: 10px;
        padding: 0 10px;
        font-size: 0.8rem;
        font-family: "Montserrat", sans-serif !important;

        @media screen and (max-width: 568px) {
          width: 430px;
        }
      }

      .check_body {
        display: flex;
        align-items: center;
        gap: 5px;
        div {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;
