import React from 'react'
import {NavItemMenu} from "../../components";

function ServicesMenu({ setDropDownBox }) {
  const leftLinks = [
    {
      title: "Product Engineering",
      subTitle: "Comprehensive solutions for developing and maintaining high-quality products",
      content: [
        { heading: "Product Roadmap", desc: "Strategic plan for product development and goals" },
        { heading: "Product Development", desc: "Creating and enhancing products to meet user needs" },
        { heading: "Quality Engineering", desc: "Ensuring high standards in product quality" },
        { heading: "Digital Experience", desc: "Optimizing user interfaces and interactions" },
        { heading: "Maintenance and Support", desc: "Ongoing assistance and issue resolution for products" },
      ],
    },
    {
      title: "Microsoft Solutions",
      subTitle: "Leverage the power of Microsoft technologies to drive innovation",
      content: [
        { heading: "Azure", desc: "Cloud computing services by Microsoft" },
        { heading: "Power BI", desc: "Business analytics and visualization tools" },
        { heading: "Kentico", desc: "CMS platform for website and e-commerce development" },
        { heading: "Blazer", desc: "Web framework for building interactive web UIs" },
        { heading: "Classic ASP", desc: "Legacy scripting language for web applications" },
        { heading: ".NET", desc: "Microsoft framework for building various applications" },
      ],
    },
    {
      title: "Software Development",
      subTitle: "Customized software solutions to meet diverse business needs",
      content: [
        { heading: "Maintenance", desc: "Ensuring software runs smoothly and remains updated" },
        { heading: "E-learning Software", desc: "Tools for online education and training" },
        { heading: "Delivery Management", desc: "Systems to manage delivery operations efficiently" },
        { heading: "Grocery Software", desc: "Platforms for managing grocery retail and delivery" },
        { heading: "LMS Development", desc: "Creating learning management systems for education" },
      ],
    },
    {
      title: "E-commerce Development",
      subTitle: "Transform your online business with scalable e-commerce solutions",
      content: [
        { heading: "Shopify", desc: "E-commerce platform for online stores" },
        { heading: "Big Commerce", desc: "SaaS e-commerce platform for businesses" },
        { heading: "Adobe Commerce", desc: "Formerly Magento, e-commerce solution by Adobe" },
        { heading: "Salesforce", desc: "CRM with e-commerce and cloud integration" },
      ],
    },
    {
      title: "Web Development",
      subTitle: "End-to-end web development services for modern, scalable websites",
      content: [
        { heading: "React.js", desc: "JavaScript library for building UIs" },
        { heading: "Node.js", desc: "Runtime for building server-side applications" },
        { heading: "Full Stack", desc: "Developing both client-side and server-side applications" },
        { heading: "Next.js", desc: "Framework for server-rendered React applications" },
        { heading: "Django", desc: "Python framework for building web applications" },
      ],
    },
  ];
  
  
  return (
    <NavItemMenu
      navItemName="Services"
      leftLinks={leftLinks}
      setDropDownBox={setDropDownBox}
    />
  )
}

export default ServicesMenu