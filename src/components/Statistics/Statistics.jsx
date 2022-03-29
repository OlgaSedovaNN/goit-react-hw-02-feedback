import React from "react";
import { FeedbackList } from "components/Statistics/Statistics.styled";
import { Notification } from "../Notification/Notification";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <h2>Statistics</h2>
             {total>0 ? <FeedbackList>
        <li >Neutral: {neutral}</li>
        <li >Bad: {bad}</li>
        <li >Good: {good}</li>
        <li >Total: {total}</li>
        <li >Positive feedback: {positivePercentage}%</li>
            </FeedbackList> 
                : <Notification message={'There is no feedback'}/>}
             
     
        </div>
    )
}