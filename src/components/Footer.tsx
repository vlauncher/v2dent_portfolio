import Container from "./Container";
import { resume } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} {resume.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              className="text-neutral-700 hover:underline dark:text-neutral-300"
              href={resume.links.github}
            >
              GitHub
            </a>
            <a
              className="text-neutral-700 hover:underline dark:text-neutral-300"
              href={resume.links.linkedin}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
