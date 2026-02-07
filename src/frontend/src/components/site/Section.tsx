import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'accent';
  size?: 'default' | 'large' | 'compact';
}

export default function Section({ children, className, variant = 'default', size = 'default' }: SectionProps) {
  const variantClasses = {
    default: '',
    muted: 'bg-muted/40',
    accent: 'bg-accent/20',
  };

  const sizeClasses = {
    default: 'py-16 md:py-24',
    large: 'py-20 md:py-32',
    compact: 'py-12 md:py-16',
  };

  return (
    <section className={cn(variantClasses[variant], sizeClasses[size], className)}>
      <div className="container">{children}</div>
    </section>
  );
}
