import type { Testimonial } from "@/types/sanity";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-2xl border border-border bg-card p-6">
      <blockquote className="text-base text-foreground/90">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{testimonial.clientName}</span>
        {testimonial.role && `, ${testimonial.role}`}
        {testimonial.company && ` — ${testimonial.company}`}
      </figcaption>
    </figure>
  );
}
