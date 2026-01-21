import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";

export default function ProjectCard({
  name,
  description,
  tech,
  links,
}: {
  name: string;
  description: string;
  tech: string[];
  links: { live?: string; repo?: string };
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        {links.live ? <Button href={links.live}>Live</Button> : null}
        {links.repo ? (
          <Button href={links.repo} variant="ghost">
            Code
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
