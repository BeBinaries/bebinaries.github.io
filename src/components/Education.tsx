import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
    return (
        <Section title="Education" id="education">
            <div className="grid md:grid-cols-2 gap-8">
                {portfolioData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-700/50"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <GraduationCap className="text-primary" size={28} />
                            <span className="text-xs font-mono px-3 py-1 bg-slate-100 dark:bg-zinc-800 rounded-full">
                                {edu.period}
                            </span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{edu.school}</h3>
                        <p className="text-primary mb-4">{edu.degree}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.details}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
