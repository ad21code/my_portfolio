import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Aniket Datta",
  title: "Computer Science & Engineering Student",
  bio: "Computer Science & Engineering student with strong foundations in machine learning, backend development, and LLM-based systems. Experienced in building end-to-end ML and agentic AI applications using Python, FastAPI, LangChain, and cloud deployment tools.",
  location: "India, Kolkata",
  email: "aniketdatta21@gmail.com",
  socials: [
    { platform: "GitHub", url: "https://github.com/ad21code", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/aniket-datta-4b0b09244/", icon: "Linkedin" },
    { platform: "Gmail", url: "mailto:aniketdatta21@gmail.com", icon: "Gmail" },
  ],
  skills: [
    { name: "Python", level: 95, category: "Backend" },
    { name: "LangChain / AI Agents", level: 90, category: "Backend" },
    { name: "TensorFlow / Keras", level: 85, category: "Backend" },
    { name: "FastAPI / Django", level: 85, category: "Backend" },
    { name: "HTML / CSS / JS", level: 80, category: "Frontend" },
    { name: "YOLOv8", level: 80, category: "Backend" },
    { name: "AWS / Render", level: 70, category: "Tools" },
    { name: "SQL", level: 75, category: "Backend" },
    { name: "MySQL", level: 75, category: "Backend" },
    { name: "Google Gemini API", level: 80, category: "Backend" },
    { name: "Tableau / Power BI", level: 65, category: "Design" },
    { name: "Seaborn", level: 65, category: "Design" },
  ],
  experience: [
    {
      id: "exp1",
      role: "Machine Learning Intern",
      company: "Euphoria GenX",
      period: "June 2025 - August 2025",
      description: "Built an end-to-end loan-approval prediction pipeline (data cleaning, feature engineering, model training) integrated into a Django web app. Improved accuracy to 85% through feature engineering and hyperparameter tuning, validated via cross-validation. Documented model evaluation criteria and edge cases for reproducibility."
    },
    {
      id: "exp2",
      role: "B.Tech, CSE Student",
      company: "MCKV Institute of Engineering",
      period: "2022 - Present",
      description: "Pursuing Computer Science & Engineering with a CGPA of 8.92. Focused on Machine Learning, Backend Development, and LLM-based systems."
    } 
  ],
  certifications: [
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia (Forage)",
      date: "Aug 2026"
    },
    {
      name: "Cyber Job Simulation",
      issuer: "Deloitte Australia (Forage)",
      date: "Aug 2026"
    },
    {
      name: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "TCS (Forage)",
      date: "Aug 2026"
    },
    {
      name: "Getting Started with Artificial Intelligence",
      issuer: "IBM",
      date: "2025"
    },
    {
      name: "Power BI for Beginners",
      issuer: "SkillUp",
      date: "2025"
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Agentic AI Chatbot",
      description: "A production-ready conversational AI using LangChain and Google Gemini with session-based memory and voice input.",
      technologies: ["LangChain", "Gemini API", "FastAPI", "Render"],
      imageUrl: "https://framerusercontent.com/images/HYwcVWk9kLoLhfgj19vLNFmx8U.png?width=1472&height=832",
      link: "https://github.com/ad21code/agentic_AI.git"
    },
    {
      id: "proj2",
      title: "Gender & Age Predictor",
      description: "Multi-task CNN using TensorFlow/Keras to simultaneously classify gender and regress age from facial images.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Python"],
      imageUrl: "https://raw.githubusercontent.com/mowshon/age-and-gender/master/example/result.jpg",
      link: "https://github.com/ad21code/age_gender_prediction.git"
    },
    {
      id: "proj5",
      title: "Kolkata Metro Ticket Booking & Verification System",
      description: "Built a full-stack transit platform for route planning and QR ticket booking across 40+ stations using Dijkstra's algorithm and a dual-database architecture (PostgreSQL + SQLite). Optimized to a 91 KB gzipped bundle with a WCAG-compliant, mobile-first UI.",
      technologies: ["React", "FastAPI", "Tailwind", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: "proj6",
      title: "Content-Based Movie Recommendation System",
      description: "Developed a content-based recommender using similarity scoring on movie metadata with live external API integration, deployed via Streamlit.",
      technologies: ["Python", "Streamlit"],
      imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    // {
    //   id: "proj3",
    //   title: "Hand Sign Predictor",
    //   description: "End-to-end hand gesture detection pipeline using YOLOv8, featuring real-time deployment and optimized inference.",
    //   technologies: ["YOLOv8", "Python", "Computer Vision", "NMS"],
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVl7J7Dp8RQEECKOrR2B_o3QrYpNe36HNoXw&s",
    //   link: "#"
    // },
    // {
    //   id: "proj4",
    //   title: "E-Commerce & Product App",
    //   description: "A full-stack product management and sales platform featuring secure Stripe payment integration, cart functionality, and inventory control.",
    //   technologies: ["Flask", "Stripe API", "Python", "SQL"],
    //   imageUrl: "https://ploomber.io/images/blog/stripe-flask/header.png",
    //   link: "https://github.com/ad21code/product_management_app.git"
    // }
  ]
};