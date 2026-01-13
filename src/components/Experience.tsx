import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';


export const Experience = () => {
    return (
        <Section title="Experience" id="experience">
            <div className="space-y-12">
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col md:flex-row gap-4 md:gap-10 border-l-2 border-primary/20 pl-8 relative"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

                        <div className="md:w-1/4">
                            <span className="text-primary font-mono text-sm">{exp.period}</span>
                            <h3 className="font-bold text-xl mt-1">{exp.company}</h3>
                            <p className="text-slate-500 text-sm">{exp.role}</p>
                        </div>

                        <div className="md:w-3/4">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
