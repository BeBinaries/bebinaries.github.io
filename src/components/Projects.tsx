import { portfolioData } from '../data/portfolio';
import { Section } from './Section';
import { Folder, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ProjectModal } from './ProjectModal';
import { useState } from 'react';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

    return (
        <Section title="Featured Projects" id="projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {portfolioData.projects.map((project, index) => (
                    <div key={index} onClick={() => setSelectedProject(project)} className="cursor-pointer h-full">
                        <SpotlightCard className="h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
                            <div className="p-8 flex flex-col h-full z-10 relative">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Folder className="text-primary w-6 h-6" />
                                    </div>
                                    <ArrowUpRight className="text-slate-300 group-hover:text-primary transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded border border-slate-200 dark:border-zinc-700">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2 py-1">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Section>
    );
};
