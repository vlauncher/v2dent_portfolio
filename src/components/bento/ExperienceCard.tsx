import { BentoCard } from "@/components/BentoGrid";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  experience: readonly {
    role: string;
    company: string;
    location: string;
    dates: string;
    bullets: readonly string[];
  }[];
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <BentoCard colSpan={2} rowSpan={2} className="overflow-y-auto" id="experience">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="h-6 w-6 text-neutral-900 dark:text-white" />
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Experience</h3>
      </div>

      <div className="space-y-8">
        {experience.map((job, idx) => (
          <div key={`${job.company}-${idx}`} className="relative border-l border-neutral-200 pl-6 dark:border-neutral-800">
             <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                {job.role}
              </h4>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {job.dates}
              </span>
            </div>
            
            <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">
              {job.company} • {job.location}
            </p>
            
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-600 dark:text-neutral-400">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
