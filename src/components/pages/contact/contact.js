import React from "react";

const contact = "Contact";

const EMAIL_ADDRESS = "IanBabington93@gmail.com";
const EMAIL_LABEL = "Send Email";

const LINKEDIN_URL = "https://www.linkedin.com/in/Ian-Babington";
const LINKEDIN_LABEL= "LinkedIn"

const GITHUB_URL = "https://github.com/en93";
const GITHUB_LABEL = "GitHub"

const display = () => {
    return(
        <div>
            <h1>{contact}</h1>
            <p><a href = {"mailto: " + EMAIL_ADDRESS}>{EMAIL_LABEL}</a></p>
            <p><a href={LINKEDIN_URL}>{LINKEDIN_LABEL}</a></p>
            <p><a href={GITHUB_URL}>{GITHUB_LABEL}</a></p>
        </div>
    )
};

export default display;