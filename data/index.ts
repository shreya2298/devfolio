export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const myTechStack = [
  "AWS",
  "Linux",
  "Python",
  "Java",
  "Flask",
  "FastAPI",
  "Docker",
  "Terraform",
  "Kubernetes",
  "ArgoCD",
  "GitHub",
  "Ansible",
  "Github Actions",
  "Jenkins",
  "CI/CD",
  "Prometheus",
  "Grafana",
  "Elasticsearch",
  "Kibana",
  "MySQL,PostgreSQL",
  "MongoDB",
  "REST API",
  "Javascript"
]

export const projects = [
  {
  
    id: 1,
    title: "CI/CD Automation with Jenkins & Docker",
    description: "Developed and implemented a robust CI/CD pipeline using Jenkins, Docker, and Git. Automated build, tagging, and deployment of containerized applications with Git commit hash-based versioning for seamless and consistent releases.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "", // Removed as requested
    github: "https://github.com/shreya2298/on_push_docker_jenkins_pipeline",
    link: "https://www.linkedin.com/in/smfdeveloper",
    techs: ["Jenkins", "Docker", "Git", "Groovy", "CI/CD", "Credential Management"]  
    
  },
  {
    id: 2,
    title: "Server Monitoring with Prometheus & Grafana",
    description: "Implemented a comprehensive server monitoring solution using Prometheus, Node Exporter, and Grafana. Enabled real-time visibility into system performance and resource utilization across multiple servers, improving proactive issue detection.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "", // No image as requested
    github: "https://github.com/shreya2298/monitoring-metrics.git",
    link: "https://www.linkedin.com/in/smfdeveloper",
    techs: ["Prometheus", "Node Exporter", "Grafana", "Linux", "Monitoring", "Dashboards"]
  },
  {
    id: 3,
    title: "Centralized Logging with ELK Stack",
    description: "Implemented centralized logging using the ELK Stack (Elasticsearch, Logstash, Kibana) along with Filebeat and Docker. Aggregated and visualized logs from multiple servers, improving log analysis efficiency by 60%.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "", // No image as requested
    github: "https://github.com/shreya2298/monitoring-metrics.git",
    link: "https://www.linkedin.com/in/smfdeveloper",
    techs: ["Elasticsearch", "Logstash", "Kibana", "Filebeat", "Docker", "AWS", "Log Analysis"]
  },
  {
    id: 4,
    title: "CI/CD Pipeline with Jenkins & Terraform",
    description: "Developed and deployed a CI/CD pipeline on AWS using Jenkins, Docker, and Terraform. Automated infrastructure provisioning, application deployment, and artifact storage—resulting in a 50% reduction in deployment time.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "", // No image as requested
    github: "https://github.com/shreya2298/pipeline_jenkins_docker.git",
    link: "https://www.linkedin.com/in/smfdeveloper",
    techs: ["Jenkins", "Docker", "Terraform", "AWS (EC2, S3, VPC)", "Ansible", "Git"]
  },
  { 
    id: 5,
    title: "Flask App Deployment on Kubernetes Cluster",
    description: "Deployed a Flask web application on a Kubernetes cluster using Docker. Containerized the app, created Kubernetes manifests for deployment and service exposure, and ensured scalability and high availability.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "", // No image as requested
    github: "https://github.com/shreya2298/flask-app_doc-k8s.git",
    link: "https://www.linkedin.com/in/smfdeveloper",
    techs: ["Flask", "Docker", "Kubernetes", "YAML", "Microservices", "Cloud-Native"]  
  },
  {
    id: 6,
    title: "Simple CI Pipeline with GitHub Actions",
    description: "Created a lightweight CI pipeline using GitHub Actions to automate build and test processes on code push and pull requests. Streamlined workflow efficiency and ensured code quality through automated validation.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "", // No image as requested
    github: "https://github.com/shreya2298/github-act-commands.git",
    link: "https://www.linkedin.com/in/smfdeveloper",
    techs: ["GitHub Actions", "CI", "YAML", "Automation", "DevOps"]
  }
  
];

export const workExperience = [
  {
    id: 1,
    company: "LumoTech",
    title: "UX/UI Sorcerer",
    desc: "Transformed the user dashboard with a sleek design that boosted engagement by 35%. Optimized the onboarding flow to make new users feel like wizards on their first try.",
    className: "md:col-span-2",
    location: "Los Angeles",
    period: "2022 - Present",
    skills: [
      "Figma",
      "Sketch",
      "Prototyping",
      "User Testing",
      "Illustrator",
      "Adobe XD"
    ]
  },
  {
    id: 2,
    company: "PixelMinds",
    title: "Product Design Genius",
    desc: "Revamped the interface with intuitive controls, increasing user retention by 28%. Pioneered AR features for interactive learning experiences—because education should be fun and engaging.",
    className: "md:col-span-2",
    location: "San Francisco",
    period: "2020 - 2022",
    skills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "CSS"
    ]
  },
  {
    id: 3,
    company: "DesignHub",
    title: "Design Systems Guru",
    desc: "Crafted design systems that were so organized they could be put in a museum. Pushed for consistent, user-friendly components that made developers’ lives easier.",
    className: "md:col-span-2",
    location: "Remote",
    period: "2016 - 2020",
    skills: [
      "Figma",
      "React",
      "Design Tokens",
      "Accessibility",
      "Storybook",
      "Collaboration"
    ]
  }
];


export const socialMedia = [
  {
    id: 1,
    img: "assets/git.svg",
    link: "https://github.com/atzin-escandia",
  },
  {
    id: 2,
    img: "assets/linkedin.svg",
    link: "https://www.linkedin.com/in/atzin-escandia/",
  },
  {
    id: 3,
    img: "assets/link.svg",
    link: "https://theplumup.com/",
  },
];

export const skills = ["TypeScript", "React", "Redux", "NodeJS", "NextJS", "Tailwind"];
