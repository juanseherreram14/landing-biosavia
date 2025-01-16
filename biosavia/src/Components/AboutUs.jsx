import React from "react";
import '../Styles/AboutUs.css';
import AboutUsImage from "../Images/AboutUs.jpeg";

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-text">
                <h2>About Biosavia</h2>
                <p>
                    BIOSAVIA made in the USA, a natural OTC gel for topical use with a sophisticated formula and effective action as analgesic, anti-inflammatory, anti-stress. It contains capsaicin, arnica, ginseng and pure orange and mint essential oils.
                </p>
                <p>
                    BIOSAVIA is a pain reliever for bruises, cramps, muscle tensions in the neck or back. It is perfect for sports people and gentle with the elderly and children, suitable for all ages. Only massage on the affected part of the body until it is absorbed, and on back, feet and neck for a better and relaxing sleep.
                </p>
                <p>
                    Our 4 oz / 117.5 g bottle is properly sealed and has great applications at the gym, spa, or first aid kit such as:
                </p>
                <ul>
                    <li>Relaxes contracted and tensed muscles from any part of the body before or after working out</li>
                    <li>Applied on the scalp heals headaches or migraines</li>
                    <li>Heals cramps in any part of the body</li>
                    <li>Reduces inflammation of articulations</li>
                    <li>Relief for varicose veins and heavy tired legs and feet</li>
                    <li>Relieves tiredness</li>
                    <li>Best for mosquito bites</li>
                </ul>
            </div>
            <img 
                src={AboutUsImage} 
                alt="About Us" 
                className="about-image" 
            />
        </section>
    );
};

export default AboutUs;
