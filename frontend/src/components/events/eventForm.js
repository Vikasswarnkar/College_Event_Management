
import React, { Component } from 'react'
import { connect } from "react-redux";
import { createEvent } from "./../../actions/events";
import Step2Form from "./eventForm_step2";
import Step1Form from "./eventForm_step1";
import Step3Form from "./eventForm_step3";
import Step4Form from "./eventForm_step4";
import Success from './success';
import ThankYou from './thankYou';
import StepWizard from "react-step-wizard";
import Dialog from "@material-ui/core/Dialog"; 
import { Modal, Button } from "antd";



class EventForm extends Component {
  state = {
    step: 1,
    name: "jlnd",
    date: "2019-09-02 16:06:02.656Z",
    time: "10:30",
    venue: "JKjbd",
    Description: "thsui my evenet",
    type: "music",
    image: "45",
    logo: "",
    organiserName: "Name",
    role: "admin",
    email: "hasrsh@hjbs.com",
    ticketrequired: true,
    ticketname: "Hello music",
    isPaid: false,
    ticketprice: 30,
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
 const {
   name,
   date,
   time,
   venue,
   Description,
   type,
   image,
   logo,
   organiserName,
   role,
   email,
   ticketrequired,
   ticketname,
   isPaid,
   ticketprice
 } = this.state;
  this.props.createEvent(
      name,
      date,
      time,
      venue,
      Description,
      type,
      image,
      logo,
      organiserName,
      role,
      email,
      ticketrequired,
      ticketname,
      isPaid,
      ticketprice
    );
    
    this.setState({
      visible: false
    });
    

  
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      name,
      date,
      time,
      venue,
      Description,
      type,
      image,
      logo,
      organiserName,
      role,
      email,
      ticketrequired,
      ticketname,
      isPaid,
      ticketprice
    } = this.state;
    const values = {
      name,
      date,
      time,
      venue,
      Description,
      type,
      image,
      logo,
      organiserName,
      role,
      email,
      ticketrequired,
      ticketname,
      isPaid,
      ticketprice
    };

    return (
      <div className="container">
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <StepWizard>
            <Step1Form
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Step2Form
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Step3Form
              nextStep={this.nextStep}
              prevStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Step4Form
              nextStep={this.nextStep}
              prevStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Success
              values={values}
              nextStep={this.nextStep}
              prevStep={this.previousStep}
            />
          </StepWizard>
          
        </Modal>
      </div>
    );
  }
}


  



export default connect(
  undefined,
  { createEvent }
)(EventForm);