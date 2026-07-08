import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, Shield } from 'lucide-react';

const TimelineItem = ({ title, subtitle, date, description, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0"
    >
        <div className="absolute left-[-12px] top-0 p-1.5 bg-slate-900 border border-blue-500 rounded-full text-blue-400">
            <Icon size={16} />
        </div>

        <div className="mb-1">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="flex items-center text-slate-400 text-sm mt-1">
                <span className="font-medium text-blue-400">{subtitle}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center"><Calendar size={14} className="mr-1" /> {date}</span>
            </div>
        </div>

        <p className="text-slate-400 mt-2 text-sm leading-relaxed">
            {description}
        </p>

        {/* List items if description is an array - adapting to user data */}
        {Array.isArray(description) && (
            <ul className="list-disc list-inside mt-2 text-slate-400 text-sm space-y-1">
                {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        )}
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            title: "Technology Virtual Internship",
            subtitle: "Coding & Development",
            date: "2024",
            icon: Briefcase,
            description: [
                "Applied Python & Data Structures for efficient problem solving.",
                "Followed modular coding practices for maintainability.",
                "Used version control best practices for collaboration."
            ]
        },
        {
            title: "Cyber Security Virtual Internship",
            subtitle: "Security Analysis",
            date: "2024",
            icon: Shield,
            description: [
                "Log analysis & anomaly detection.",
                "Deep dive into TCP/IP and networking fundamentals.",
                "Implemented web security best practices (OWASP, HTTPS, authentication)."
            ]
        }
    ];

    const education = [
        {
            title: "B.Tech (CSE)",
            subtitle: "Rawal Institute of Engineering and Technology, Haryana",
            date: "2023 – 2027",
            icon: GraduationCap,
            description: "CGPA: 8.05. Focused on Cloud Computing, DevOps, and System Security."
        },
        {
            title: "CBSE 12th",
            subtitle: "Sarvodaya Bal Vidyalaya",
            date: "2022",
            icon: GraduationCap,
            description: "Score: 66%. Science Stream."
        }
    ];

    const certifications = [
        {
            title: "Certificate in Technology and Cybersecurity",
            subtitle: "Deloitte Australia (Virtual)",
            date: "2025",
            icon: Award,
            description: "Practical virtual experience in technology consulting and cybersecurity."
        }
    ];



    return (
        <section id="experience" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Experience & <span className="text-gradient">Education</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <Briefcase className="mr-3 text-blue-500" /> Work Experience
                        </h3>
                        <div className="space-y-2">
                            {experiences.map((exp, index) => (
                                <TimelineItem key={index} {...exp} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <GraduationCap className="mr-3 text-blue-500" /> Education & Certifications
                        </h3>
                        <div className="space-y-2">
                            {education.map((edu, index) => (
                                <TimelineItem key={index} {...edu} />
                            ))}
                            {certifications.map((cert, index) => (
                                <TimelineItem key={`cert-${index}`} {...cert} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
