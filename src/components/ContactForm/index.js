import React from "react";

function ContactForm() {

    return (
        <div className="myForm">
            <form id="email-form" method="POST">
                <div className="form-group">
                    <label for="form-name">Name</label>
                    <input type="text" name="name" className="form-control" id="form-name"  placeholder="Your Name"></input>
                </div>
        </div>
    )
}

export default ContactForm;


