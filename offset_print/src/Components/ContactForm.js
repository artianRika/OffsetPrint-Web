import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_h3c3f2t", "template_enz3iu8", form.current, {
                publicKey: "HaREZ7krIvn99vfiZ",
            })
            .then(
                () => {
                    alert("success")
                },
                (error) => {
                    alert(error)
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={"contact-form"}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default ContactForm;