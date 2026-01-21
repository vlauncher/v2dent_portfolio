export const resume = {
  name: "Samson Amos",
  title: "Software Developer",
  location: "Jos South, Plateau State, Nigeria",
  phone: "+2347068751747",
  email: "samsonamosv2@gmail.com",
  links: {
    github: "https://github.com/samsonamosv2",
    linkedin: "https://linkedin.com/in/samson-amos-b4379a20b",
  },
  summary:
    "Seasoned Software Developer with over 5 years of experience in crafting scalable, high-performance applications. Expertise in Python, JavaScript, and cloud technologies, with a proven track record in designing efficient APIs and leading teams to success. Recently built a cutting-edge serverless backend for a ride-sharing app, featuring real-time tracking and secure payments. Passionate about innovation and eager to contribute to Pististechub’s mission.",
  skills: {
    programming: ["Python (OOP, Data Structures, Algorithms)", "JavaScript", "TypeScript"],
    frontend: ["React", "Tailwind CSS", "API Testing and Integration"],
    backend: ["Django", "Django REST Framework", "FastAPI", "Express.js", "Node.js"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "AWS S3", "DynamoDB"],
    devopsCloud: ["Docker", "Jenkins", "Git", "CI/CD", "AWS EC2", "AWS Serverless Stack"],
    methodologies: ["Agile Development", "Test-Driven Development", "Microservices Architecture"],
  },
  experience: [
    {
      role: "Backend Developer",
      company: "Pistis Tech Hub",
      location: "Remote (Lagos, Nigeria)",
      dates: "March 2024 – Present",
      bullets: [
        "Engineered high-performance API endpoints using Django REST Framework, boosting system efficiency by 30% for 2,000+ concurrent users.",
        "Led a team of 3 engineers to deliver critical API solutions, cutting development time by 20% through streamlined workflows.",
        "Integrated Paystack and Flutterwave payment gateways into an e-learning platform, increasing user satisfaction by 15%.",
        "Containerized deployments with Docker and set up a CI/CD pipeline, reducing deployment time from 4 hours to 1 hour.",
        "Migrated to AWS EC2 with load balancing, decreasing downtime by 10% and improving resilience.",
      ],
    },
    {
      role: "Backend Developer",
      company: "ApeXpress",
      location: "Remote",
      dates: "January 2025 – Present",
      bullets: [
        "Architected a scalable, serverless microservices backend for a ride-sharing platform using AWS Lambda, API Gateway, and DynamoDB.",
        "Implemented real-time features with WebSocket API and Redis, enabling live ride tracking and notifications.",
        "Developed a secure authentication system with JWT, Google OAuth 2.0, and multi-factor authentication.",
        "Integrated Stripe for payment processing and Twilio/SendGrid for multi-channel communication.",
        "Designed a file management system with S3 presigned URLs for secure document handling.",
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "Nhub Foundation",
      location: "Jos South",
      dates: "February 2020 – December 2021",
      bullets: [
        "Built RESTful APIs with Django and FastAPI, enhancing system efficiency by 20%.",
        "Collaborated on backend functionalities, reducing development time by 15%.",
        "Ensured code quality and security, decreasing vulnerabilities by 10%.",
      ],
    },
  ],
  education: [
    {
      school: "Abubakar Tafawa Balewa University, Bauchi State, Nigeria",
      degree: "B.Tech in Computer Science",
      dates: "January 2017 – September 2021",
      highlights: [
        "Relevant Coursework: Data Structures, OOP, Web Development, DBMS",
        "Capstone Project: Developed a full-stack web application for the university library using Django and React, streamlining book borrowing processes and increasing efficiency by 30%.",
      ],
    },
  ],
  projects: [
    {
      name: "Heart Disease Prediction Web App",
      description:
        "Built a full-stack application with Django REST Framework and React.js. Integrated a machine learning model (94% accuracy) using Scikit-learn, NumPy, and Pandas. Deployed on Render with Docker and CI/CD for seamless updates.",
      tech: ["Python", "Django", "React", "Docker", "ML libraries (Scikit-learn, NumPy, Pandas)"],
      links: {
        live: "https://render.com",
        repo: "https://github.com/samsonamosv2",
      },
    },
    {
      name: "E-Learning Platform",
      description:
        "Designed a scalable backend for 500+ concurrent users with role-based access. Implemented secure payment processing with Paystack and automated receipts. Deployed on AWS EC2 with load balancing and Redis caching.",
      tech: ["Django REST Framework", "Docker", "AWS", "PostgreSQL", "Redis"],
      links: {
        live: "https://learn.pististechub.io",
        repo: "https://github.com/samsonamosv2",
      },
    },
    {
      name: "ApeXpress Ride-Sharing Platform",
      description:
        "Developed a serverless microservices backend with AWS Lambda, API Gateway, and DynamoDB. Enabled real-time ride tracking and notifications using WebSocket API and Redis. Integrated Stripe for payments and Twilio/SendGrid for communications.",
      tech: ["AWS Serverless", "Node.js", "Express.js", "Redis", "WebSocket API"],
      links: {
        live: "https://example.com",
        repo: "https://github.com/samsonamosv2",
      },
    },
  ],
} as const;
