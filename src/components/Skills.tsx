import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Section } from './Section';

export const Skills = () => {
    return (
        <Section title="Skills & Technology" id="skills">
            <div className="space-y-12">
                {portfolioData.skills.map((category, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full inline-block" />
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#009688", color: "#fff" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-4 py-2 bg-slate-100 dark:bg-zinc-800 rounded-lg text-sm font-medium transition-colors cursor-default border border-transparent hover:border-primary/50"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
