import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"
import {useTranslation} from "react-i18next";


const ContactForm = () => {
    const form = useRef();
    const {t} = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_h3c3f2t", "template_enz3iu8", form.current, {
                publicKey: "HaREZ7krIvn99vfiZ",
            })
            .then(
                () => {
                    alert(t('contact.emailSent'))
                },
                (error) => {
                    alert(error)
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={"contact-form"}>
            <label>{t('contact.name')}</label>
            <input type="text" name="user_name" />
            <label>{t('contact.email')}</label>
            <input type="email" name="user_email" />
            <label>{t('contact.message')}</label>
            <textarea name="message" />
            <input type="submit" value={t('contact.send')} />
        </form>
    );
};

export default ContactForm;