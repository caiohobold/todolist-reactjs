import React from "react";

export const Button = ({ onClick, value }) => {
    return(
        <button className="btn-tasks" onClick={onClick}>{value}</button>
    );
}