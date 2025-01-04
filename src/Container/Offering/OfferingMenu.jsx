import React from "react";
import { NavItemMenu } from "../../components";

function OfferingMenu({ setDropDownBox }) {
  const leftLinks = [
    {
      title: "On-Demand Solutions",
      subTitle: "",
      content: [
        {
          heading: "Food Delivery App",
          desc: "Customizable platforms for food delivery businesses",
        },
        {
          heading: "Grocery Delivery App",
          desc: "Solutions for managing grocery delivery services",
        },
        {
          heading: "Taxi Booking",
          desc: "Ride-hailing platforms with real-time tracking",
        },
        {
          heading: "Doctor On-Demand App",
          desc: "Telemedicine apps for remote healthcare services",
        },
        {
          heading: "E-learning App",
          desc: "Interactive platforms for online education",
        },
        {
          heading: "Chat App",
          desc: "Secure communication platforms for personal and business use",
        },
        {
          heading: "Car Wash",
          desc: "Digital platforms for car wash service providers",
        },
        {
          heading: "Home Services App",
          desc: "Apps for home service bookings and management",
        },
        {
          heading: "Automobile Related App",
          desc: "Solutions for the automotive industry",
        },
        { heading: "E-commerce", desc: "Feature-rich online store platforms" },
        {
          heading: "UI/UX Based Websites",
          desc: "Custom-designed websites focusing on user experience",
        },
        {
          heading: "MIS",
          desc: "Management Information Systems for businesses",
        },
      ],
    },
    {
      title: "Hire Developers",
      subTitle: "",
      content: [
        {
          heading: "Shopify Developer",
          desc: "Expert developers for Shopify e-commerce stores",
        },
        {
          heading: "WordPress Developer",
          desc: "Skilled WordPress professionals for website creation",
        },
        {
          heading: "ReactJS Developer",
          desc: "Front-end developers specializing in React.js",
        },
        {
          heading: "NodeJS Developer",
          desc: "Backend developers for Node.js applications",
        },
        {
          heading: "MERN Developer",
          desc: "Full-stack developers for MERN stack projects",
        },
        {
          heading: "NextJS Developer",
          desc: "Experienced developers for Next.js applications",
        },
        {
          heading: "AI/ML Engineer",
          desc: "Experts in artificial intelligence and machine learning",
        },
      ],
    },
  ];

  return (
    <NavItemMenu
      navItemName="Offering"
      leftLinks={leftLinks}
      setDropDownBox={setDropDownBox}
    />
  );
}

export default OfferingMenu;
