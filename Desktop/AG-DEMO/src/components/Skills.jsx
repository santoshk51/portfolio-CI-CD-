import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Terminal, Shield, Code } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all shadow-lg"
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-200">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-900/60 border border-slate-700 rounded-md text-sm text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Cloud",
            icon: Cloud,
            skills: ["AWS", "Microsoft Azure", "Google Cloud Platform"]
        },
        {
            title: "DevOps & Automation",
            icon: Server,
            skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI", "Terraform", "Ansible", "Argo CD"]
        },
        {
            title: "Linux & Systems",
            icon: Terminal,
            skills: ["Ubuntu", "Kali Linux", "Debian", "Bash Scripting", "System Administration"]
        },
        {
            title: "Monitoring & Security",
            icon: Shield,
            skills: ["Prometheus", "Grafana", "SonarQube", "Trivy", "OWASP", "Nginx", "Apache"]
        },
        {
            title: "Programming",
            icon: Code,
            skills: ["Python", "C", "C++", "JavaScript", "YAML", "HCL"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolset for building, deploying, and securing scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <SkillCategory key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
