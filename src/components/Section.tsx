import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
}

export const Section = ({ children, id, className = "", title }: SectionProps) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-primary"
                >
                    {title}
                </motion.h2>
            )}
            {children}
        </section>
    );
};
