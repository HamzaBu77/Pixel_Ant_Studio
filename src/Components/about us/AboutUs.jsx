import "./AboutUs.css"
import founder from "../../Assets/founder.jpg"
import React, { useEffect, useState } from 'react';

let AboutUs = () => {
    const counters = [
        { label: 'Projects Completed', count: 107 },
        { label: 'Years of Experience', count: 10 },
        { label: 'Satisfied Customers', count: 100 }
    ];

    const [animatedCounters, setAnimatedCounters] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedCounters(prevCounters => {
                return prevCounters.map(counter => {
                    const increment = Math.ceil(counter.count / 100); // Adjust the increment based on your preference
                    const newCount = Math.min(counter.count, counter.currentCount + increment);
                    return { ...counter, currentCount: newCount };
                });
            });
        }, 50); // Adjust the interval based on your preference

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setAnimatedCounters(counters.map(counter => ({ ...counter, currentCount: 0 })));
    }, []);
    return (
        <div className="about-section">
            <span className="about-title">About founder</span>
            <h3 className="about-heading">Get to know him</h3>
            <div className="row featurette about-container">
                <div className="col-md-6 about-description">
                    <h1 className="featurette-heading animation">Meet <span>Mr. Muhammad Zubair</span></h1>
                    <h3 className="lead"> An accomplished Interior Designer and dedicated 3D Artist. With a passion for transforming spaces, He specialize in creating captivating and functional environments that truly resonate. His portfolio includes a diverse range of styles, including Contemporary, Apartment-specific, Ikea-inspired, and Open Concept designs. Beyond kitchens, He possess the skills to elevate every corner of your home. From luxurious bathroom designs that exude relaxation to personalized bedroom and living room concepts that capture your essence. His journey has been enriched by collaborating with esteemed designers from around the world, including partnerships with American and Italian creatives through his career.</h3>
                    <div className=" details">
                        <div>
                            <p>Email:</p>
                            <p className="bold">pixelantstudio@gmail.com</p>
                        </div>
                        <div>
                            <p>From:</p>
                            <p className="bold">Lahore,Pakistan</p>
                        </div>
                        <div>
                            <p>Contact:</p>
                            <p className="bold">(+92)300-4525123</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 about-photo">
                    <img className="rounded-circle" src={founder} alt="home png" />
                </div>

            </div>

            <div className="counters">
                {animatedCounters.map((counter, index) => (
                    <div className="counter" key={index}>
                        <div className="number">{counter.currentCount}</div>
                        <div className="label">{counter.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AboutUs;