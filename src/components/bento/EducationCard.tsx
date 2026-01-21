import { BentoCard } from "@/components/BentoGrid";
import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  education: readonly {
    school: string;
    degree: string;
    dates: string;
    highlights: readonly string[];
  }[];
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <BentoCard colSpan={2} rowSpan={1} className="overflow-y-auto" id="education">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="h-6 w-6 text-neutral-900 dark:text-white" />
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Education</h3>
      </div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={`${edu.school}-${idx}`} className="relative border-l border-neutral-200 pl-6 dark:border-neutral-800">
             <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                {edu.degree}
              </h4>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {edu.dates}
              </span>
            </div>
            
            <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">
              {edu.school}
            </p>
            
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-600 dark:text-neutral-400">
              {edu.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
