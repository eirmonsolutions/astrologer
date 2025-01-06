import React from "react";
import Link from "next/link";
const Services_Area = () => {
    const services = [
        {
            title: "Love Problem Solution",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis animi amet eligendi iste labore et deserunt hic facere, assumenda inventore.",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/love-problem-solution",
        },
        {
            title: "One Side Love Solution",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis animi amet eligendi iste labore et deserunt hic facere, assumenda inventore.",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/one-side-love-solution",
        },
        {
            title: "Breakup Problem",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis animi amet eligendi iste labore et deserunt hic facere, assumenda inventore.",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/breakup-problem",
        },
        {
            title: "Ex Love Back",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis animi amet eligendi iste labore et deserunt hic facere, assumenda inventore.",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/ex-love-back",
        },
        {
            title: "Family Dispute",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis animi amet eligendi iste labore et deserunt hic facere, assumenda inventore.",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/family-dispute",
        },
        {
            title: "Grah Kalesh",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis animi amet eligendi iste labore et deserunt hic facere, assumenda inventore.",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/grah-kalesh",
        },
    ];
    

    return (
        <section className="services_area">
            <div className="container">
                <div className="section-heading">
                    <h3>Our Services</h3>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="services-box">
                                <div className="services-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <Link href={service.link} className="as_btn">Read More</Link>
                                </div>
                                <div className="services-img">
                                    <img src={service.image} alt={service.title} loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services_Area;
