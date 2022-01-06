import React from "react";
import"./Donation.css";
 
 
 
 // Form component
 class FormContainer extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
        inputMinimum: '5',
        inputValue: 5,
        numberOfDonors: 11
          }
      
      this.handleInput = this.handleInput.bind(this)
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
      this.handleSubmit = this.props.handleSubmit;
      }
    
    // Update input state  
    handleInput(e) {
      let inputValue = parseInt(e.target.value);
      this.setState(
        prevState => ({
          inputValue
        })
      );
    }
    
    handleFormSubmit = (e) => {
      e.preventDefault();
      let numberOfDonors = this.state.numberOfDonors + 1
      
      // Update number of donors
      this.setState(
        prevState => ({
          numberOfDonors
        }),
        () => {
          // handle callback
          let formData = this.state;
          this.handleSubmit(formData);
        }
      );
    }
    
    render() {
      let { numberOfDonors, inputValue, inputMinimum } = this.state;
      let reachedGoal = this.props.reachedGoal;
      console.log(reachedGoal)
      
      return (
        <div className="form-container">
          <span className="form-heading">Only four days left to fund this project</span>
          <p className="form-subheading">Join the <span className="donors">{numberOfDonors}</span> other donors who have already supported this project.</p>
          {reachedGoal ?
            <div className="form-success-message">Goal reached!</div>
          :
            <form className="form-input-container" onSubmit={this.handleFormSubmit}>
              <input
                id="donation--amount" 
                className="input"
                name='donation-amount'
                type='number'
                min={inputMinimum}
                value={inputValue}
                onChange={this.handleInput}
                placeholder='Enter donation amount'
                required
                autofocus
              />
              <input 
                id="donate" 
                className="button" 
                type="submit" 
                value="Give Now"
              />
            </form>
          }
        </div>
      )
    }
    
  }

  export default FormContainer;