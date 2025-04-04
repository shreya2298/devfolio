export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Certifications", link: "#certifications" },
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
  "REST API"
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
    company: "TCS",
    title: "Backend Developer",
    desc: "Experienced Backend Developer with 4 years in designing and implementing scalable server-side solutions. Developed custom reports by collecting and organizing data from a licensed DMS application, leveraging session management over traditional DB connections to securely fetch application data via encapsulated getter and setter methods. Successfully delivered multiple projects focused on building RESTful web services that integrated with third-party tools and external systems using SFTP protocols. Proficient in crafting robust APIs, managing secure data transactions, and ensuring high availability through optimized server logic and modular architecture.",
    className: "md:col-span-2",
    location: "Pune, Maharashtra, India", // Feel free to update based on your actual location
    period: "2021 - 2025", // Adjust timeline if needed
    skills: [
      "Java",
      "JSP",
      "Servlets",
      "REST APIs",
      "Session Management",
      "SFTP Integration",
      "Web Services",
      "Third-party Integrations",
      "Backend Architecture",
      "Oracle Database",
    ]
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "assets/git.svg",
    link: "https://github.com/shreya2298",
  },
  {
    id: 2,
    img: "assets/linkedin.svg",
    link: "https://www.linkedin.com/in/smfdeveloper/",
  },
  {
    id: 3,
    img: "assets/link.svg",
    link: "https://medium.com/@smfegade2298/",
  },
];

export const skills = ["TypeScript", "React", "Redux", "NodeJS", "NextJS", "Tailwind"];
