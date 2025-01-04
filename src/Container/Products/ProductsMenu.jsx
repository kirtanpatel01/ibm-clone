import { NavItemMenu } from "../../components";

function ProductsMenu({ setDropDownBox }) {
  const leftLinks = [
    {
      title: "SaaS Platforms",
      subTitle: "Scalable and ready-to-use software-as-a-service products.",
      content: [
        { heading: "CRM Software", desc: "Manage customer relationships and sales pipelines." },
        { heading: "ERP Systems", desc: "Streamline operations across business units." },
        { heading: "HR Management Tools", desc: "Tools for payroll, recruitment, and employee engagement." },
        { heading: "Project Management", desc: "Collaborate and manage projects seamlessly." },
        { heading: "Marketing Automation", desc: "Automate and track marketing campaigns." },
      ],
    },
    {
      title: "Cloud Solutions",
      subTitle: "Advanced cloud-based products for digital transformation.",
      content: [
        { heading: "Cloud Storage", desc: "Secure and scalable storage solutions." },
        { heading: "Serverless Computing", desc: "Deploy and run applications without managing servers." },
        { heading: "AI and ML Services", desc: "Pre-trained models and tools for AI integration." },
        { heading: "IoT Solutions", desc: "Connect and monitor IoT devices in real-time." },
      ],
    },
    {
      title: "Developer Tools",
      subTitle: "Empower developers to build, test, and deploy faster.",
      content: [
        { heading: "Code Editors and IDEs", desc: "Tools for efficient coding and debugging." },
        { heading: "API Gateways", desc: "Simplify API management and integration." },
        { heading: "Testing Frameworks", desc: "Automate and enhance testing processes." },
        { heading: "Version Control Systems", desc: "Collaborate on and manage code versions." },
      ],
    },
    {
      title: "AI and Analytics",
      subTitle: "Advanced solutions powered by artificial intelligence and big data.",
      content: [
        { heading: "Predictive Analytics Tools", desc: "Analyze trends and predict outcomes." },
        { heading: "Chatbots", desc: "AI-powered bots for customer interaction." },
        { heading: "Sentiment Analysis Tools", desc: "Gauge customer opinions and feedback." },
        { heading: "Data Visualization", desc: "Create interactive charts and dashboards." },
      ],
    },
    {
      title: "Industry-Specific Products",
      subTitle: "Tailored solutions for specific industries.",
      content: [
        { heading: "Healthcare Platforms", desc: "Patient management and telemedicine solutions." },
        { heading: "Education Tech", desc: "Virtual classrooms and student management systems." },
        { heading: "E-commerce Engines", desc: "Fully customizable platforms for online stores." },
        { heading: "Logistics Platforms", desc: "Tools for fleet and supply chain management." },
      ],
    },
    {
      title: "Security Solutions",
      subTitle: "Safeguard your digital assets with cutting-edge security tools.",
      content: [
        { heading: "Identity Management Systems", desc: "Manage user access and authentication." },
        { heading: "Data Encryption Tools", desc: "Secure sensitive data during transfer or storage." },
        { heading: "Firewall Solutions", desc: "Protect against cyber threats." },
        { heading: "Fraud Detection Systems", desc: "Identify and prevent fraudulent activities." },
      ],
    },
    {
      title: "Productivity Tools",
      subTitle: "Increase team efficiency with powerful productivity software.",
      content: [
        { heading: "Team Collaboration Apps", desc: "Share files, chat, and video conference." },
        { heading: "Note-Taking Software", desc: "Organize and manage your ideas efficiently." },
        { heading: "Time Tracking Tools", desc: "Monitor time spent on tasks and projects." },
        { heading: "Workflow Automation", desc: "Automate repetitive business tasks." },
      ],
    },
    {
      title: "IoT Products",
      subTitle: "Manage and connect IoT devices with robust platforms.",
      content: [
        { heading: "Smart Home Hubs", desc: "Control home appliances remotely." },
        { heading: "Industrial IoT Tools", desc: "Optimize factory and equipment performance." },
        { heading: "IoT Analytics Platforms", desc: "Monitor and analyze IoT data in real-time." },
        { heading: "IoT Security Systems", desc: "Ensure the safety of connected devices." },
      ],
    },
    {
      title: "Design and UI/UX Tools",
      subTitle: "Tools to create visually stunning and user-friendly interfaces.",
      content: [
        { heading: "Prototyping Tools", desc: "Quickly create mockups and prototypes." },
        { heading: "UI Design Software", desc: "Build modern interfaces for web and mobile apps." },
        { heading: "Accessibility Tools", desc: "Ensure designs meet accessibility standards." },
        { heading: "Illustration Tools", desc: "Create vector-based graphics and illustrations." },
      ],
    },
    {
      title: "Customizable Solutions",
      subTitle: "Build tailored software and platforms to meet unique needs.",
      content: [
        { heading: "White-Label Software", desc: "Rebrand and launch pre-built solutions." },
        { heading: "Custom Dashboards", desc: "Visualize data specific to your requirements." },
        { heading: "Modular Tools", desc: "Add or remove features based on business needs." },
        { heading: "Integration Frameworks", desc: "Seamlessly connect multiple systems." },
      ],
    },
  ];
  
  return (
    <NavItemMenu
      navItemName="Products"
      leftLinks={leftLinks}
      setDropDownBox={setDropDownBox}
    />
  );
}

export default ProductsMenu;
