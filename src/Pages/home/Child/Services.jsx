import Service1 from "../../../Assets/3d-rendering.png"
import Service2 from "../../../Assets/interior-design.png"
import Service3 from "../../../Assets/kitchen-room.png"
import React, { useEffect, useState } from 'react';

  
let Services = () =>{
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
                    const increment = Math.ceil(counter.count / 100); 
                    const newCount = Math.min(counter.count, counter.currentCount + increment);
                    return { ...counter, currentCount: newCount };
                });
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setAnimatedCounters(counters.map(counter => ({ ...counter, currentCount: 0 })));
    }, []);
    return(
        <section id="services">
            <div className="Package_container" >
                <div className="Section_Tittle">
                    <span>Services</span>
            <h3>Our Expertise, The Services We Provide To Our Clients</h3>
            </div>
            <div className="section_container">
                
                <div className="content_container section_animation">
                <div className="Section_content">
                <img src={Service1} alt="Econnomy Class Icon"/>
                <h3 >3D-Rendering</h3>
                <p >Budget-friendly accommodation with affordable dining options</p>
                <button>Explore<i class="uil uil-arrow-right"></i></button>
                </div>

                 <div className="Section_content">
                <img src={Service2}  alt="First Class Icon"/>
                <h3 >Interior Design</h3>
                <p >Premium hotels with fine dining experiences, showcasing local & international cuisine</p>
                <button>Explore<i class="uil uil-arrow-right"></i></button>
                </div>
                 
                 <div className="Section_content">
                <img src={Service3}  alt="Business Class Icon"/>
                <h3>kitchen Design</h3>
                <p>High-end Accommodation with exclusive private guided tours</p>
                <button>Explore<i class="uil uil-arrow-right"></i></button>
                </div>
                </div>
                </div>
        </div>
        <div className="Counter_div">

<div className="counters">
    {animatedCounters.map((counter, index) => (
        <div className="counter" key={index}>
            <div className="number">{counter.currentCount}</div>
            <div className="label">{counter.label}</div>
        </div>
    ))}
</div>
</div>
        </section>
    )
}

export default Services