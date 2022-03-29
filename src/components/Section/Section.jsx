import React from "react";


export const Section = (props) => {
    return (
        <section>
            <h1>{props.title}</h1>
            {props.children}
        </section>
    )
}

