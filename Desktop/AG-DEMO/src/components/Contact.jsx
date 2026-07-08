import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const ContactItem = ({ icon: Icon, text, href, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
    >
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <Icon size={20} />
        </div>
        <div className="ml-4">
            <p className="text-xs text-slate-400">{label}</p>
            <p className="text-sm sm:text-base text-slate-200 font-medium">{text}</p>
        </div>
    </a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            Feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <ContactItem
                                icon={Mail}
                                label="Email"
                                text="santoshk01@zohomail.in"
                                href="mailto:santoshk01@zohomail.in"
                            />
                            <ContactItem
                                icon={Phone}
                                label="Phone"
                                text="+91 9625445049"
                                href="tel:+919625445049"
                            />
                            <ContactItem
                                icon={Github}
                                label="GitHub"
                                text="santoshk51"
                                href="https://github.com/santoshk51"
                            />
                            <ContactItem
                                icon={Linkedin}
                                label="LinkedIn"
                                text="santosh"
                                href="https://linkedin.com/in/santosh"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200" placeholder="Your Name" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200" placeholder="your@email.com" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-400">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200" placeholder="Project Discussion" />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200 resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                                Send Message <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
