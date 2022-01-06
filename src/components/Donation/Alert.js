import"./Donation.css";


// Alert component
const Alert = props => {
    let totalStillNeeded = props.totalStillNeeded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
    return (
      <div className='alert-container'>
        <div className='alert-info-message'>
          {props.reachedGoal ?
            <div>Your project has been funded!</div>
          :
            <div><span className='remaining-total'>${totalStillNeeded}</span> still needed to fund this project</div>
          }
          
        </div>
      </div>
    )
  }
  export default Alert;