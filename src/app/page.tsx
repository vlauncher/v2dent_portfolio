import Container from "@/components/Container";
import { BentoGrid } from "@/components/BentoGrid";
import { ProfileCard } from "@/components/bento/ProfileCard";
import { TechStackCard } from "@/components/bento/TechStackCard";
import { SocialCard } from "@/components/bento/SocialCard";
import { ExperienceCard } from "@/components/bento/ExperienceCard";
import { EducationCard } from "@/components/bento/EducationCard";
import { ProjectCard } from "@/components/bento/ProjectCard";
import { ResumeCard } from "@/components/bento/ResumeCard";
import { resume } from "@/data/resume";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden py-10 sm:py-20">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[100px]" />
      </div>

      <Container>
        <BentoGrid>
          {/* Row 1 & 2 */}
          <ProfileCard
            name={resume.name}
            title={resume.title}
            location={resume.location}
            summary={resume.summary}
          />
          <SocialCard links={resume.links} email={resume.email} />
          <ResumeCard />
          <TechStackCard skills={resume.skills} />

          {/* Row 3 & 4 */}
          <ExperienceCard experience={resume.experience} />
          <EducationCard education={resume.education} />
          
          {resume.projects.map((project, index) => (
            <ProjectCard 
              key={project.name} 
              project={project} 
              index={index} 
              id={index === 0 ? "projects" : undefined}
            />
          ))}
        </BentoGrid>
      </Container>
    </main>
  );
}
