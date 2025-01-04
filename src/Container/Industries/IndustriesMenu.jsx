import React from 'react'
import { NavItemMenu } from "../../components";

function IndustriesMenu({ setDropDownBox }) {
  const leftLinks = [
    {
      title: "Healthcare Solutions",
      subTitle: "Transforming patient care with innovative technology and digital healthcare solutions.",
      content: [
        { heading: "Patient Management Systems", desc: "Tools for managing patient data and appointments." },
        { heading: "Telemedicine Platforms", desc: "Enable remote consultations and virtual care." },
        { heading: "Health Analytics", desc: "Insights from medical data to improve outcomes." },
        { heading: "IoT in Healthcare", desc: "Devices for monitoring and diagnostics." },
        { heading: "EHR Integration", desc: "Seamlessly manage and integrate electronic health records." },
      ],
    },
    {
      title: "Event and Ticketing",
      subTitle: "Streamline event planning and ticketing with modern tools and platforms",
      content: [
        { heading: "Ticketing Systems", desc: "Simplify ticket booking and management." },
        { heading: "Event Management Platforms", desc: "Plan, organize, and execute events seamlessly." },
        { heading: "Virtual Event Solutions", desc: "Tools for hosting online events and webinars." },
        { heading: "Audience Analytics", desc: "Measure event engagement and impact." },
        { heading: "Event Promotion Tools", desc: "Digital marketing tools for better outreach and attendee acquisition." },
      ],
    },
    {
      title: "Education & Learning",
      subTitle: "Modernize education with e-learning solutions and virtual classroom tools",
      content: [
        { heading: "Learning Management Systems (LMS)", desc: "Manage and deliver e-learning content." },
        { heading: "Virtual Classrooms", desc: "Enable interactive and remote learning." },
        { heading: "Adaptive Learning Platforms", desc: "Personalized learning based on student progress." },
        { heading: "Assessment Tools", desc: "Evaluate student performance effectively." },
        { heading: "Gamified Learning", desc: "Boost student engagement with gamification elements." },
      ],
    },
    {
      title: "Real Estate and Housing",
      subTitle: "Empower real estate businesses with tech-driven solutions for better management",
      content: [
        { heading: "Property Management Software", desc: "Manage rentals, sales, and maintenance." },
        { heading: "Real Estate Portals", desc: "Showcase property listings and connect buyers." },
        { heading: "Smart Home Solutions", desc: "IoT-enabled automation for modern living." },
        { heading: "Virtual Tours", desc: "360° property view for remote buyers." },
        { heading: "Mortgage Management Systems", desc: "Streamline loan processing and approvals." },
      ],
    },
    {
      title: "Banking & Finance",
      subTitle: "Enhance financial services with secure and innovative banking solutions",
      content: [
        { heading: "Digital Banking Platforms", desc: "Offer secure online banking experiences." },
        { heading: "Investment Management Tools", desc: "Track and manage portfolios efficiently." },
        { heading: "Fraud Detection Systems", desc: "Identify and prevent financial crimes." },
        { heading: "Payment Gateways", desc: "Simplify online transactions securely." },
        { heading: "Loan Origination Systems", desc: "Manage the end-to-end loan process effectively." },
      ],
    },
    {
      title: "Entertainment & Media",
      subTitle: "Revolutionize entertainment with streaming, gaming, and media solutions",
      content: [
        { heading: "Streaming Platforms", desc: "Deliver high-quality video and audio content." },
        { heading: "Content Management Systems", desc: "Organize and distribute media assets." },
        { heading: "Gaming Solutions", desc: "Platforms for online and mobile gaming." },
        { heading: "Media Analytics", desc: "Understand audience preferences and behavior." },
        { heading: "Digital Rights Management", desc: "Protect intellectual property and content ownership." },
      ],
    },
    {
      title: "Logistics & Transportation",
      subTitle: "Streamline operations and improve delivery efficiency with logistics technology",
      content: [
        { heading: "Fleet Management Systems", desc: "Monitor and manage vehicle fleets." },
        { heading: "Supply Chain Solutions", desc: "Optimize logistics and inventory management." },
        { heading: "Delivery Tracking Tools", desc: "Real-time updates on package location." },
        { heading: "Route Optimization Software", desc: "Improve delivery efficiency and reduce costs." },
        { heading: "Warehouse Management Systems", desc: "Efficiently manage inventory and storage." },
      ],
    },
    {
      title: "E-commerce",
      subTitle: "Drive online retail success with comprehensive e-commerce solutions",
      content: [
        { heading: "Online Store Platforms", desc: "Build and manage e-commerce websites." },
        { heading: "Inventory Management Tools", desc: "Track and manage stock levels." },
        { heading: "Payment Integration", desc: "Offer seamless payment methods to customers." },
        { heading: "Customer Analytics", desc: "Insights to understand shopping behavior." },
        { heading: "Omnichannel Retailing", desc: "Provide seamless shopping experiences across channels." },
      ],
    },
  ];
  
  
  return (
    <NavItemMenu
      navItemName="Industries"
      leftLinks={leftLinks}
      setDropDownBox={setDropDownBox}
    />
  )
}

export default IndustriesMenu;