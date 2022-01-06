import"./Donation.css";

// Progress Bar component
const ProgressBar = props => {
    // Helper function to find percentage
    const percentage = (a, b) => {
      return a / b * 100 > 100 ? 100 : a / b * 100;
    }
    
    let { donationTotal, donationGoal } = props;
    let percent = percentage(donationTotal, donationGoal);
    
    
    return (
      <div className="progress-bar-container">
        <div className="progress-bar-background">
          <div id="progress" className="progress" style={{width: `${percent}%` }}></div>
        </div>
      </div>
    )
  }
  export default ProgressBar;