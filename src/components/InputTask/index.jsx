import React from "react";

export const InputTextMask = ({ handleChange, value, placeholder, name }) => {
    return(
        <input type="text" placeholder={placeholder} onChange={handleChange} value={value} name={name}/>
    );
}