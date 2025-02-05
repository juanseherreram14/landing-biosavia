import React from "react";
import '../Styles/AboutUs.css';
import AboutUsImage from "../Images/AboutUs.jpeg";

const AboutUs = () => {
    return (
        <section className="about-us">
    <div className="about-text">
        <h2>About BIOSAVIA</h2>
        <p>
            BIOSAVIA is a premium, natural OTC gel made in the USA, formulated for effective pain relief, 
            anti-inflammatory benefits, and stress reduction. Its sophisticated formula combines capsaicin, arnica, 
            ginseng, and pure essential oils of orange and mint, delivering a soothing and therapeutic experience.
        </p>
        <h3>Targeted Relief for All Ages</h3>
        <p>
            BIOSAVIA provides fast-acting relief for bruises, cramps, and muscle tension in the neck, back, and 
            other areas of the body. Whether you're an athlete, an active individual, or seeking gentle care for 
            children or the elderly, our formula is designed to suit all ages. Simply massage it onto the affected 
            area until fully absorbed, or apply it to the back, feet, and neck for a more relaxing and restful sleep.
        </p>
        <h3>Versatile Applications</h3>
        <p>
            Our conveniently sealed 4 oz (117.5 g) bottle is ideal for use at the gym, spa, or as part of a 
            first-aid kit. BIOSAVIA can help with:
        </p>
        <ul>
            <li>Relaxing tense and contracted muscles before or after exercise</li>
            <li>Relieving headaches and migraines when applied to the scalp</li>
            <li>Alleviating muscle cramps in any part of the body</li>
            <li>Reducing joint inflammation</li>
            <li>Providing relief for varicose veins, tired legs, and feet</li>
            <li>Easing general fatigue and tension</li>
            <li>Soothing mosquito bites</li>
        </ul>
        <p>
            Experience the natural power of BIOSAVIA and enjoy a soothing, pain-free lifestyle.
        </p>
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
