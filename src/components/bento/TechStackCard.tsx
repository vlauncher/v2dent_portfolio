import { BentoCard } from "@/components/BentoGrid";
import { Code2, Database, Cloud, Terminal, Cpu, Server } from "lucide-react";

interface TechStackCardProps {
  skills: {
    programming: readonly string[];
    frontend: readonly string[];
    backend: readonly string[];
    databases: readonly string[];
    devopsCloud: readonly string[];
  };
}

export function TechStackCard({ skills }: TechStackCardProps) {
  const categories = [
    { name: "Backend", icon: Server, items: skills.backend, color: "text-blue-500" },
    { name: "Frontend", icon: Code2, items: skills.frontend, color: "text-pink-500" },
    { name: "Cloud & DevOps", icon: Cloud, items: skills.devopsCloud, color: "text-orange-500" },
    { name: "Database", icon: Database, items: skills.databases, color: "text-emerald-500" },
    { name: "Languages", icon: Terminal, items: skills.programming, color: "text-purple-500" },
  ];

  return (
    <BentoCard colSpan={2} className="gap-6" id="skills">
      <div className="flex items-center gap-2">
        <Cpu className="h-6 w-6 text-neutral-900 dark:text-white" />
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Tech Stack</h3>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.name} className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              <cat.icon className={`h-4 w-4 ${cat.color}`} />
              <span>{cat.name}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((skill) => (
                <span 
                  key={skill} 
                  className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}


