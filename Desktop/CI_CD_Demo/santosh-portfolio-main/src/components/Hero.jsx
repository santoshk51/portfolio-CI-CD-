import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';
import profilePic from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 px-4 sm:px-6 lg:px-8 py-20">
            {/* Background Blobs - animated with CSS in global styles */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="text-center lg:text-left order-2 lg:order-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-cyan-400 font-medium mb-4 tracking-wider">
                        HELLO, I AM
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold text-white mb-6">
                        Santosh <span className="text-gradient">Kumar</span>
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl text-slate-300 font-semibold mb-6">
                        DevOps Engineer | Cloud Engineer
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
                        Building Scalable Cloud Infrastructure | Automating CI/CD | Implementing Secure DevOps
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            to="projects"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="group px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all flex items-center justify-center cursor-pointer shadow-lg shadow-blue-500/25"
                        >
                            View Projects
                            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-transparent border border-slate-600 text-slate-300 rounded-md font-medium hover:border-slate-400 hover:text-white transition-all flex items-center justify-center backdrop-blur-sm"
                        >
                            Download Resume
                            <Download size={20} className="ml-2" />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="order-1 lg:order-2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <img
                            src={profilePic}
                            alt="Santosh Kumar"
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800/50 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
