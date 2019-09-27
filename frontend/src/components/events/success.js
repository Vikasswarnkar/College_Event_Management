import React, { Component } from "react";
import {Button} from 'antd'

class Success extends Component {
  

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  };
   back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice} = this.props.values
    return (
      <React.Fragment>
        <h1>Please chek once details and submit</h1>

        <Button
          type="primary"
          
        >
          Submit
        </Button>
        <Button type="primary" onClick={this.props.nextStep}>
          Continue
        </Button>
        <Button type="primary" onClick={this.props.previousStep}>
          Back
        </Button>
      </React.Fragment>
    );
  }
}
export default Success;