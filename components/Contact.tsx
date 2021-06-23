import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mdoykbyg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="logo flex flex-col justify-center items-center">
            <h1 className="logo mb-10 text-2xl font-bold">Contact Me!</h1>
            <form className="logo pb-40 flex flex-col justify-center items-center" id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/mdoykbyg" method="post">
                <fieldset id="fs-frm-inputs" className="flex flex-col gap-1 justify-center items-center">
                    <label id="full-name">Full Name</label>
                    <input className="logo w-80 p-1" type="text" name="name" id="full-name" placeholder="First and Last / Organization"></input>
                    <label id="email-address">Email Address</label>
                    <input className="logo w-80 p-1" type="email" name="_replyto" id="email-address" placeholder="kevsaj@gmail.com"></input>
                    <label id="message">Message</label>
                    <textarea className="logo w-80 p-3" name="message" id="message" placeholder="Hey Kevin, I want to work with you!"></textarea>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
                    </input>
                </fieldset>
                <input className="logo mt-3 w-24 h-10 bg-green-500 rounded" type="submit" value="Submit"></input>
            </form>

            <div className="flex flex-row gap-4">
                <div><a className="logo border border-blue-400 hover:bg-blue-800 hover:text-white rounded outline-none focus:outline-none bg-transparent text-blue-300 text-sm py-1 px-2 badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/kevin-sajan?trk=profile-badge" target="_blank" rel="noopener noreferrer">Kevin Sajan on LinkedIn</a></div>
                <div><a className="logo mr-3 border border-purple-400 hover:bg-purple-800 hover:text-white rounded outline-none focus:outline-none bg-transparent text-purple-300 text-sm py-1 px-2 badge-base__link LI-simple-link" href="https://github.com/kevsaj" target="_blank" rel="noopener noreferrer">Kevin Sajan on Github</a></div>
            </div>
            <br>
            </br>
            <br>
            </br>
        </div>
    );
}

function Contact() {
    return (
        <ContactForm />
    );
}
export default Contact;
