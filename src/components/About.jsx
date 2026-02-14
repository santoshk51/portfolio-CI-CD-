import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
                        <p className="text-slate-300 text-lg leading-relaxed text-justify sm:text-center">
                            I am a Computer Science Engineering student (B.Tech, CGPA 8.05) with strong hands-on experience in
                            <span className="text-cyan-400 font-medium"> DevOps, Cloud, and GitOps-based CI/CD implementation</span>.
                            I specialize in <span className="text-cyan-400 font-medium">AWS, Azure, Kubernetes, Terraform, and automation-driven infrastructure</span>.
                            I am passionate about scalable architecture, secure deployments, and troubleshooting complex systems.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
