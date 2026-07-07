import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({ tag, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      <span className="font-body text-base font-semibold text-accent uppercase tracking-widest">{tag}</span>
      <h2 className="font-headline text-4xl md:text-5xl mt-2 text-primary">{title}</h2>
      <p className="font-body text-muted-foreground mt-4 max-w-3xl mx-auto text-balance">{subtitle}</p>
    </div>
  );
}
