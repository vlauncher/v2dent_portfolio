import { BentoCard } from "@/components/BentoGrid";
import { Folder, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    tech: readonly string[];
    links: {
      live?: string;
      repo?: string;
    };
  };
  index: number;
  id?: string;
}

export function ProjectCard({ project, index, id }: ProjectCardProps) {
  // Alternate col spans for visual interest if needed, but for now kept uniform or handled by parent
  return (
    <BentoCard colSpan={1} className="flex flex-col justify-between gap-4 group" id={id}>
      <div>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
          <Folder className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
        </div>
        
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </BentoCard>
  );
}
