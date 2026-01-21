import { BentoCard } from "@/components/BentoGrid";
import { FileText, Download } from "lucide-react";

export function ResumeCard() {
  return (
    <BentoCard colSpan={1} href="/resume.pdf" className="group justify-center items-center bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <FileText className="h-8 w-8" />
          <Download className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-blue-500 p-0.5 text-white" />
        </div>
        <p className="font-bold">Resume</p>
      </div>
    </BentoCard>
  );
}
