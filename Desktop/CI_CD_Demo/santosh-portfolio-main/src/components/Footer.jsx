import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/santoshk51" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/santosh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:santoshk01@zohomail.in" className="text-slate-400 hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Santosh Kumar. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Built with React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
