import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold text-gradient">
                            Santosh Kumar
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.filter(link => link.name !== 'Contact').map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white text-sm font-semibold cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
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

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex space-x-4 px-3 py-2 mt-4 border-t border-slate-800">
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
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
