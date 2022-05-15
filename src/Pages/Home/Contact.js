import React from 'react';
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="my-28 py-16" >
            <div className='text-center mb-8'>
                <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                <h2 className='text-5xl text-white'>Stay connected with us</h2>
            </div>
            <div className='flex justify-center items-center'>
            <form className='w-2/4 '>
            <input type="text" placeholder="Email Address" className="input mb-5 block w-full " />
            <input type="text" placeholder="Subject" className="input mb-5 block w-full" />
                    <textarea className="textarea w-full mb-5 block" placeholder="Your message"></textarea>
                    <input type="submit" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mx-auto" />
             </form>
             </div>
              
        </section>
    );
};

export default Contact;