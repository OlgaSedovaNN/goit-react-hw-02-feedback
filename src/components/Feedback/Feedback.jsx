import React, { Component } from "react";
import {FeedbackList, Button} from "./Feedback.styled"

class Feedback extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}
    plusFeedback = (e) => {
        const name = e.currentTarget.name
 
        
    this.setState((prevState) => {  
        return {
         [name]: prevState[name] + 1               
        }
      
    })
   
}
    countTotalFeedback = (state) => {
        
        return Object.values(state).reduce((a, b) => a + b, 0)   

      
    }
  countPositiveFeedbackPercentage = (state) => {
      const total = Object.values(state).reduce((a, b) => a + b, 0);
      let result = 0;
      if (state.good > 0) {
         result = (state.good*100/total).toFixed(0)
     }
   return result
    
    }  
    
render() {
    
        return (
         <div>
<h1>Please leave your feedback</h1>
<Button type="button" name="good" onClick={this.plusFeedback} >Good</Button>
<Button type="button" name="neutral" onClick={this.plusFeedback}>Neutral</Button>
<Button type="button" name="bad" onClick={this.plusFeedback}>Bad</Button>

<h2>Statistics</h2>
     <FeedbackList>
                    <li >Neutral: {this.state.neutral}</li>
         <li >Bad: {this.state.bad}</li>
         <li >Good: {this.state.good}</li>
        <li >Total: {this.countTotalFeedback(this.state)}</li>
                    <li >Positive feedback: {this.countPositiveFeedbackPercentage(this.state)}%</li>
     </FeedbackList>
    </div>

);
    }
}
export default Feedback