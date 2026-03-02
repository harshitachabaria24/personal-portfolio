export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudy: {
    problem: string;
    architecture: string;
    implementation: string;
    challenges: string;
    outcome: string;
  };
}

export const projects: Project[] = [
  {
    id: "cloud-encryption",
    title: "Cloud-Based File Encryption and Decryption Using Java & AWS",
    description: "A secure cloud-based system for encrypting and decrypting files using AWS services and Java.",
    techStack: ["Java", "AWS S3", "AWS Lambda", "AWS IAM", "Encryption Algorithms"],
    githubUrl: "https://github.com/yourusername/cloud-encryption",
    liveDemoUrl: "",
    caseStudy: {
      problem: "Organizations need a secure way to store and manage sensitive files in the cloud. Traditional file storage solutions lack end-to-end encryption and fine-grained access control.",
      architecture: "The system uses AWS S3 for file storage, AWS Lambda for serverless encryption/decryption processing, and AWS IAM for access management. Files are encrypted using AES-256 before being stored in S3 buckets. The architecture follows a microservices pattern with clear separation of concerns.",
      implementation: "Developed a Java-based application that integrates with AWS SDK. Implemented AES-256 encryption algorithm for file security. Created Lambda functions to handle encryption/decryption requests. Used S3 bucket policies and IAM roles to enforce strict access controls. Built a simple CLI interface for users to upload, encrypt, decrypt, and download files.",
      challenges: "Managing encryption keys securely was challenging. Solved this by implementing AWS KMS (Key Management Service) for key rotation and management. Performance optimization was needed for large files - implemented chunked encryption to handle files of any size efficiently. Ensuring proper error handling and logging across distributed AWS services required careful planning.",
      outcome: "Successfully deployed a production-ready encryption system that handles files up to 5GB. Reduced file access unauthorized attempts by 100% through IAM policies. Achieved 99.9% uptime using AWS serverless architecture. The system processes encryption/decryption requests with average latency under 2 seconds for files up to 100MB."
    }
  },
  {
    id: "student-portal",
    title: "Student Management Portal",
    description: "A full-stack web application for managing student records, courses, and grades.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/yourusername/student-portal",
    caseStudy: {
      problem: "Educational institutions need an efficient system to manage student information, course enrollment, and grade tracking. Manual processes are time-consuming and error-prone.",
      architecture: "Built using MERN stack (MongoDB, Express, React, Node.js). The backend follows RESTful API design principles with JWT-based authentication. The frontend uses React with context API for state management.",
      implementation: "Created secure authentication system with role-based access control (student, teacher, admin). Implemented CRUD operations for student records, courses, and grades. Built responsive UI with React and Material-UI components. Added real-time notifications for grade updates and announcements.",
      challenges: "Handling concurrent updates to student records required implementing optimistic locking in MongoDB. Ensuring data consistency across multiple collections was solved using MongoDB transactions. Optimizing query performance for large datasets was achieved through proper indexing.",
      outcome: "Deployed system serving 500+ users. Reduced administrative time by 60% through automation. Achieved sub-200ms average API response time. Successfully passed security audit with zero critical vulnerabilities."
    }
  },
  {
    id: "task-scheduler",
    title: "Smart Task Scheduler with Priority Management",
    description: "An intelligent task scheduling application with AI-based priority suggestions.",
    techStack: ["Python", "Flask", "PostgreSQL", "scikit-learn", "React"],
    githubUrl: "https://github.com/yourusername/task-scheduler",
    caseStudy: {
      problem: "Professionals struggle to prioritize tasks effectively, leading to missed deadlines and productivity loss. Existing task managers lack intelligent priority suggestions based on user behavior.",
      architecture: "Backend built with Python Flask and PostgreSQL for data persistence. Machine learning model trained using scikit-learn to predict task priorities based on user patterns. RESTful API for frontend-backend communication.",
      implementation: "Developed ML model that analyzes task completion patterns and suggests optimal priorities. Implemented scheduling algorithm that considers deadlines, dependencies, and estimated effort. Created intuitive React-based dashboard with drag-and-drop task management. Added calendar integration and email reminders.",
      challenges: "Training ML model with limited initial data required implementing active learning approach. Handling task dependencies and circular references was solved using graph algorithms. Ensuring real-time updates across multiple user sessions required WebSocket implementation.",
      outcome: "Achieved 85% accuracy in priority prediction after 2 weeks of user data. Users reported 40% improvement in task completion rates. System handles 10,000+ tasks with sub-100ms query performance. Featured in university innovation showcase."
    }
  },
  {
    id: "network-monitor",
    title: "Network Security Monitor",
    description: "Real-time network traffic analysis tool for detecting security threats.",
    techStack: ["Python", "Scapy", "Wireshark", "Flask", "Chart.js"],
    githubUrl: "https://github.com/yourusername/network-monitor",
    caseStudy: {
      problem: "Small organizations lack affordable network security monitoring tools. Enterprise solutions are expensive and complex for small teams to manage.",
      architecture: "Built with Python using Scapy for packet capture and analysis. Flask backend serves real-time data to web dashboard. Pattern matching algorithms detect common attack signatures.",
      implementation: "Developed packet sniffer that captures and analyzes network traffic in real-time. Implemented detection algorithms for common attacks (port scanning, DDoS, ARP spoofing). Created visualization dashboard showing traffic patterns, alerts, and statistics. Added logging system for forensic analysis.",
      challenges: "Processing high-volume network traffic required optimization through multi-threading. Reducing false positives in threat detection was achieved by implementing adaptive thresholds. Ensuring the tool doesn't become a security risk itself required careful permission management.",
      outcome: "Successfully detected 95% of simulated attacks in testing environment. Processing throughput of 1000+ packets per second. Deployed in 3 small businesses with positive feedback. Zero false negatives in critical threat detection."
    }
  },
  {
    id: "blog-platform",
    title: "Minimalist Blog Platform",
    description: "A clean, fast, and elegant blogging platform focused on content and readability.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveDemoUrl: "https://yourblog.vercel.app",
    caseStudy: {
      problem: "Existing blogging platforms are cluttered with features that distract from content. Writers need a minimalist platform that prioritizes reading experience and performance.",
      architecture: "Built with Next.js for optimal performance and SEO. Uses MDX for content creation allowing React components in markdown. Static site generation for lightning-fast page loads. Deployed on Vercel edge network.",
      implementation: "Created elegant, distraction-free reading interface with perfect typography. Implemented dark mode with smooth transitions. Built content management system using file-based MDX. Added search functionality and tag-based filtering. Optimized images with Next.js Image component.",
      challenges: "Achieving perfect Lighthouse scores across all metrics required extensive optimization. Implementing smooth page transitions without sacrificing performance was solved using Next.js App Router. Making MDX content searchable required building custom indexing solution.",
      outcome: "Achieved 100/100 Lighthouse performance score. Page load time under 1 second globally. Zero CLS (Cumulative Layout Shift). Published 50+ articles with excellent reader engagement. Featured on Next.js showcase."
    }
  }
];
