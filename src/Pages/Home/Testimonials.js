import React from 'react';
import quote from "../../assets/icons/quote.svg"
import pepole1 from "../../assets/images/people1.png";
import pepole2 from "../../assets/images/people2.png";
import pepole3 from "../../assets/images/people3.png";
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: "Winson herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "california",
            img: pepole1
        },
        {
            _id: 2,
            name: "John do",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "california",
            img: pepole2
        },
        {
            _id: 3,
            name: "Heery potter",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "california",
            img: pepole3
        },
    ]

    return (
        <section className='my-28'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl '>Whats our Patients say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =>  <Review key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;