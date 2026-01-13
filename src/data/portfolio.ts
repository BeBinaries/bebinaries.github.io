export const portfolioData = {
    personal: {
        name: "Rajnish Kumar Robin",
        title: "Computer Scientist 1 - SRE", // Updated title
        email: "rajnish.robin@gmail.com",
        location: "Bengaluru, Karnataka, India",
        phone: "(+91) 8800939847",
        social: {
            github: "https://github.com/BeBinaries",
            twitter: "https://twitter.com/rajnishrobin",
            linkedin: "", // User to fill
        },
        about: "My passion for technology and my commitment to critical thinking have been the driving forces behind my journey. I believe that in today's rapidly changing world, the ability to adapt, innovate, and think critically is paramount, and I am excited to be part of this ever-evolving tech landscape. I am not only a consumer of technology but also a creator, a thinker, and an advocate for its potential to reshape our world. I am on a constant quest to learn, explore, and share the wonders of technology and the art of critical thinking with the world.",
        role: "SRE | DevOps Engineer | AI/LLM Integration Specialist" // Updated role
    },
    skills: [
        {
            category: "Core Competencies",
            items: [
                "Infrastructure Automation",
                "Resiliency Engineering",
                "Observability & Incident Response",
                "Security & Compliance",
                "Scalability/Cost Optimization",
                "AI/LLM Integration"
            ]
        },
        {
            category: "Cloud & Orchestration",
            items: [
                "AWS (EKS, EC2, S3, RDS, DynamoDB)",
                "AWS Networking (VPC, Direct Connect, PrivateLink)",
                "Kubernetes (CRDs, Admission Controllers, CNI)",
                "Terraform",
                "CloudFormation",
                "Ansible",
                "Helm",
                "Docker"
            ]
        },
        {
            category: "CI/CD & Observability",
            items: [
                "Jenkins (JJB, CI/CD)",
                "Grafana",
                "Prometheus",
                "Alertmanager",
                "ELK Stack (Elasticsearch, Logstash, Kibana)",
                "Loki & Promtail",
                "New Relic APM",
                "K6"
            ]
        },
        {
            category: "AI & Data Engineering",
            items: [
                "LangGraph",
                "OpenAI API",
                "MCP (Model Context Protocol)",
                "Ollama",
                "LangChain",
                "LlamaIndex (RAG)",
                "Hugging Face",
                "Pinecone",
                "Kafka",
                "Zookeeper",
                "Aerospike"
            ]
        },
        {
            category: "Languages",
            items: [
                "Python",
                "Shell Scripting",
                "Core Java",
                "Golang" // Kept from original if still relevant, though not in resume explicit list, but common for SRE. Resume says Java/Python. I'll keep Go as it was there.
            ]
        },
        {
            category: "Certifications",
            items: [
                "Neural Networks and Deep Learning",
                "Graph Theory and Algorithm",
                "Core Java and Python Language"
            ]
        }
    ],
    experience: [
        {
            company: "Adobe",
            role: "Computer Scientist 1- SRE",
            period: "Jan 2024 – Present",
            description: "Driving SRE initiatives to improve service resiliency and optimize cloud infrastructure efficiency at scale. I apply LLM-driven automation to reduce incident response time and enable predictive, reliable operations. Key achievements include developing an LLM-powered alert analysis system that reduced MTTR, creating a platform for end-to-end load simulation at 100x scale, and implementing predictive pod scaling based on traffic patterns."
        },
        {
            company: "Bigbasket.com",
            role: "Sr. Devops Engineer",
            period: "Aug 2019 – Dec 2023",
            description: "Automated cloud infrastructure provisioning and platform onboarding, dramatically improving speed, reliability, and scalability. I strengthened monitoring and security to ensure full compliance. Highlights include migrating Kubernetes to AWS EKS (v1.16 to v1.24), automating PEM key rotation with AWS Secrets Manager, implementing a scalable EFK logging stack, and optimizing CI/CD pipelines with Jenkins."
        },
        {
            company: "IBM Software Lab",
            role: "Intern – Hybrid Cloud",
            period: "Jan 2019 – Aug 2019",
            description: "Developed a Supply Chain Dashboard using machine learning and cloud analytics to track service performance. Also developed an onboarding tool that streamlines vendor/client setup and automates follow-ups, contributing to the Hybrid Cloud setup."
        }
    ],
    education: [
        {
            school: "BITS Pilani, Pilani Rajasthan",
            degree: "M.Tech in Data Science and Engineering",
            period: "Oct 2021 - Oct 2023",
            details: "CGPA: 7.14"
        },
        {
            school: "NIIT University, Neemrana RJ",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            period: "Aug 2015 - Sept 2019",
            details: "CGPA: 8.06"
        }
    ],
    projects: [
        {
            title: "Alert Analysis AI Agent (Adobe)",
            type: "Professional",
            period: "2024",
            tech: ["LLM", "Python", "LangChain", "Observability APIs"],
            description: "Developed an LLM-powered alert analysis system that reduced mean time to resolution (MTTR) by automating incident triage and proactive remediation.",
            link: "" // Confidential
        },
        {
            title: "Predictive Pod Scaling (Adobe)",
            type: "Professional",
            period: "2024",
            tech: ["Kubernetes", "HPA", "Python", "Prometheus"],
            description: "Implemented predictive scaling based on traffic patterns, improving availability during demand spikes while reducing over-provisioning.",
            link: ""
        },
        {
            title: "Resiliency Certification Platform (Adobe)",
            type: "Professional",
            period: "2024",
            tech: ["Chaos Engineering", "Load Testing", "K6"],
            description: "Automated platform for end-to-end load simulation, analysis, and reporting to validate service reliability at 100× scale.",
            link: ""
        },
        {
            title: "Kubernetes Migration to EKS (Bigbasket)",
            type: "Professional",
            period: "2022-2023",
            tech: ["AWS EKS", "Terraform", "Kubernetes"],
            description: "Migrated Kubernetes to AWS EKS, modernizing from v1.16 to v1.24 and offloading control-plane management, improving cluster reliability and developer productivity.",
            link: ""
        },
        {
            title: "EFK Logging Platform (Bigbasket)",
            type: "Professional",
            period: "2020-2023",
            tech: ["Elasticsearch", "Fluentd/Fluentbit", "Kibana", "AWS"],
            description: "Implemented scalable EFK logging stack, reducing log management costs while centralizing observability across monolith and Kubernetes workloads.",
            link: ""
        },
        {
            title: "Hastalekhana",
            type: "Academic",
            period: "Aug 2017 - Dec 2017",
            tech: ["Android", "Java", "MyScript", "Android Studio"],
            description: "Hastalekhana is a handwriting based Android application which is focused toward converting any Kind of handwritten may it be sentence/geometry/symbol etc. into a searchable text.",
            link: ""
        },
        {
            title: "CII Ready Reckoner",
            type: "Academic",
            period: "Jan 2018 - May 2018",
            tech: ["React Native", "Node.js"],
            description: "Cross platform android/IOS app built for the Confederation of Indian Industry (CII). The app provides a bird’s eye view of the entire economy across a range of parameters.",
            link: "https://play.google.com/store/apps/details?id=com.niit"
        }
    ]
}
