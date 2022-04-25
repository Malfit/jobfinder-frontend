import React from "react";

export const ProfileDataItem = (props) => {
    return (
        <div>
            <h2>Your {props.field}: <span style={{color: props.color}}>{props.data}</span></h2>
        </div>
    )
}