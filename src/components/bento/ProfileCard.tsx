import { BentoCard } from "@/components/BentoGrid";
import { MapPin } from "lucide-react";

interface ProfileCardProps {
  name: string;
  title: string;
  location: string;
  summary: string;
}

export function ProfileCard({ name, title, location, summary }: ProfileCardProps) {
  return (
    <BentoCard colSpan={2} rowSpan={2} className="justify-between" id="about">
      <div>
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          {name}
        </h1>
        <p className="mt-2 text-lg font-medium text-neutral-600 dark:text-neutral-300">
          {title}
        </p>
      </div>
      
      <div className="mt-8">
        <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          {summary}
        </p>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
    </BentoCard>
  );
}
