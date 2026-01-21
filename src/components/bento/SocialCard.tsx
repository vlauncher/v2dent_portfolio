import { BentoCard } from "@/components/BentoGrid";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

interface SocialCardProps {
  links: {
    github: string;
    linkedin: string;
    // twitter?: string; // Optional if added later
  };
  email: string;
}

export function SocialCard({ links, email }: SocialCardProps) {
  const socials = [
    { name: "GitHub", url: links.github, icon: Github, color: "hover:bg-neutral-900 hover:text-white" },
    { name: "LinkedIn", url: links.linkedin, icon: Linkedin, color: "hover:bg-blue-600 hover:text-white" },
    { name: "Email", url: `mailto:${email}`, icon: Mail, color: "hover:bg-red-500 hover:text-white" },
  ];

  return (
    <BentoCard colSpan={1} className="justify-center gap-4" id="contact">
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Connect</h3>
      <div className="flex flex-col gap-3">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between rounded-lg bg-neutral-100 p-3 transition-all hover:scale-105 dark:bg-neutral-800 ${social.color}`}
          >
            <div className="flex items-center gap-3">
              <social.icon className="h-5 w-5" />
              <span className="font-medium">{social.name}</span>
            </div>
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </BentoCard>
  );
}
