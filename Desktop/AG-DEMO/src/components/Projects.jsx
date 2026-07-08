import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Layers, Globe } from 'lucide-react';

const ProjectCard = ({ title, description, tags, icon: Icon, links }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/30 transition-all group"
    >
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Icon size={24} />
                </div>
                <div className="flex gap-4">
                    {links.github && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {links.demo && (
                        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed min-h-[80px]">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 bg-slate-800 text-xs font-medium text-slate-300 rounded border border-slate-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Retail Store - GitOps EKS",
            description: "End-to-end CI/CD pipeline using GitHub Actions and Terraform. Integrated EKS, ECR, IAM, and Load Balancer. Deployed with Argo CD using Helm charts.",
            tags: ["AWS EKS", "Terraform", "Argo CD", "Jenkins", "Docker"],
            icon: Globe,
            links: { github: "https://github.com/santoshk51/retail-store-sample-app", demo: "#" }
        },
        {
            title: "Voting App - Azure DevOps",
            description: "Migration of GitHub Actions workflows to Azure DevOps. GitOps implementation with ArgoCD on AKS. Configured self-hosted Azure agents on VMs.",
            tags: ["Azure AKS", "Azure DevOps", "Argo CD", "Linux VM"],
            icon: Layers,
            links: { github: "https://github.com/santoshk51/example-voting-app", demo: "#" }
        },
        {
            title: "Zomato Clone - DevSecOps",
            description: "Full-stack deployment using Docker & Kubernetes. Integrated SonarQube, Trivy, and OWASP for security scanning. Monitoring with Prometheus & Grafana.",
            tags: ["Kubernetes", "SonarQube", "Prometheus", "Grafana", "Trivy"],
            icon: Server,
            links: { github: "https://github.com/santoshk51/DevOps-Project-Zomato-Kastro", demo: "#" }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Real-world infrastructure and DevOps implementations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
