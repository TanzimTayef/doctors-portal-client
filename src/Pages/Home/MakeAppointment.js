import React from 'react';
import doctor from "../../assets/images/doctor-small.png"
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='py-5 text-3xl text-white font-bold'>Make an Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse commodi, quidem nesciunt temporibus officia possimus. Quam aperiam hic molestias ducimus provident ratione exercitationem facere perferendis odit nostrum enim id ipsa ad quasi dolorum omnis nisi, laborum rem? Eaque, placeat culpa?</p>
                <PrimaryButton>
                    Get Started
                </PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;