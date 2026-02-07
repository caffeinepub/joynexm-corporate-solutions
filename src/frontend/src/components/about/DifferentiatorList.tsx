import { ReactNode } from 'react';

interface Differentiator {
  icon: ReactNode;
  title: string;
  description: string;
}

interface DifferentiatorListProps {
  items: Differentiator[];
}

export default function DifferentiatorList({ items }: DifferentiatorListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {item.icon}
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
