"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: number | { sm?: number; md?: number; lg?: number };
  rowSpan?: number;
  href?: string;
  id?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[auto] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  href,
  id,
}: BentoCardProps) {
  const Component = href ? motion.a : motion.div;
  
  return (
    <Component
      id={id}
      href={href}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 p-6 shadow-sm backdrop-blur-md transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700",
        // Default column spans
        colSpan === 1 && "col-span-1",
        colSpan === 2 && "col-span-1 sm:col-span-2",
        colSpan === 3 && "col-span-1 sm:col-span-2 md:col-span-3",
        colSpan === 4 && "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4",
        // Row spans
        rowSpan === 2 && "row-span-2",
        className
      )}
    >
      {children}
    </Component>
  );
}
