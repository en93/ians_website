import React from "react";

const contact = "Contact";
const email = "IanBabington93@gmail.com";
const linkedin = "Linkedin.com/in/Ian-Babington/";
const github = "Github.com/En93";

const display = () => {
    return(
        <div>
            <h1>{contact}</h1>
            <p>{email}</p>
            <p>{linkedin}</p>
            <p>{github}</p>
        </div>
    )
};

export default display;