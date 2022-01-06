import React from "react";
import Alert from "./Alert";
import FormContainer from "./FormContainer";
import ProgressBar from "./ProgressBar";
import"./Donation.css";

  // Main container component
  class DonationWidget extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
        donationGoal: 5000,
        donationTotal: 3750,
        totalStillNeeded: 0,
        reachedGoal: false,
          }
      
      this.handleUpdate = this.handleUpdate.bind(this);
      }
    
    componentDidMount = () => {
      this.handleUpdate();
    }
    
    //  Calculate remaining total and update state   
    handleUpdate = () => {
      let { donationGoal, donationTotal } = this.state;
      let totalStillNeeded = donationGoal - donationTotal;
      let reachedGoal = totalStillNeeded <= 0 ? true : false;
      
      this.setState(
        prevState => ({
          totalStillNeeded,
          reachedGoal
        })
      );
    }
    
    handleSubmit = (formData) => {
      let { inputValue } = formData;
      let newDonationTotal = this.state.donationTotal + inputValue;
      
      this.setState(
        prevState => ({
          donationTotal: newDonationTotal
        }),
        () => {this.handleUpdate()}
      );
    }
    
    
    render() {
      let {totalStillNeeded, reachedGoal, numberOfDonors, donationTotal, donationGoal} = this.state;
      
      return (
              <div className='donation-widget-container'>
          <Alert totalStillNeeded={totalStillNeeded} reachedGoal={reachedGoal}/>
          <ProgressBar donationTotal={donationTotal} donationGoal={donationGoal}/>
          <FormContainer reachedGoal={reachedGoal} handleSubmit={this.handleSubmit}/>
              </div>
          )
          
    }
  }

  export default DonationWidget;