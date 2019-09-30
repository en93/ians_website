import React from "react";

const email = "IanBabington93@gmail.com";
const linkedin = "linkedin.com/in/ian-babington/";
const github = "github.com/en93";

const contact = () => {
    return(
        <div><p>
                {email}
                <br/>
                {linkedin}
                <br/>
                {github}
            </p>
        </div>
    )
};

export default contact;