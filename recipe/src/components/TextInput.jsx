import React from "react"
import "./TextInput.css"

export default function TextInput({textName, description}) {
    return (
        <div className="text-container">
        <link rel="stylesheet" href="./TextInput.css" />
        <input type="text" name={textName} placeholder={description} />
    </div>
    )
}