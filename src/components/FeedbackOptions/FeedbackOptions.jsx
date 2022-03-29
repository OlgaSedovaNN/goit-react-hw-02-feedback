import React from "react";
import { Button } from "components/FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({onLeaveFeedback}) => {
    
    return (
        <div>

<Button type="button" name="good" onClick={onLeaveFeedback} >Good</Button>
<Button type="button" name="neutral" onClick={onLeaveFeedback}>Neutral</Button>
<Button type="button" name="bad" onClick={onLeaveFeedback}>Bad</Button>
</div>
    )
}