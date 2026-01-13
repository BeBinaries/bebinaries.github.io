import { motion } from 'framer-motion';
import { Github, Mail, Twitter, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center relative px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                    {portfolioData.personal.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
                    {portfolioData.personal.title}
                </h2>
                <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                    {portfolioData.personal.about}
                </p>

                <div className="flex gap-6 justify-center mb-16">
                    <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Github size={24} />
                    </a>
                    <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-primary transition-colors">
                        <Mail size={24} />
                    </a>
                    <a href={portfolioData.personal.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Twitter size={24} />
                    </a>
                    {/* Add Linkedin if available */}
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10"
            >
                <ChevronDown size={32} className="text-slate-400" />
            </motion.div>
        </div>
    );
};
