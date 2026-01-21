import Container from "./Container";
import Button from "./Button";
import { resume } from "@/data/resume";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            {resume.name}
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button href={`mailto:${resume.email}`}>Hire me</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
