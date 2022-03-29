import React, { Component } from "react";

import { Section } from '../components/Section/Section';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  
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
      const total = this.countTotalFeedback(state)

      let result = 0;
      if (state.good > 0) {
         result = (state.good*100/total).toFixed(0)
     }
   return result
    
    }  
    
render() {
    
  return (
    <Section title={'Please leave your feedback'}>
    
      <FeedbackOptions onLeaveFeedback={this.plusFeedback} />
      <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback(this.state)} positivePercentage={this.countPositiveFeedbackPercentage(this.state)}/>
    
    </Section>
);
    }
}
  
;

