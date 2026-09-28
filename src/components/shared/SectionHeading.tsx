type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className ?? ""}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-muted-foreground">{description}</p>}
    </div>
  );
}
