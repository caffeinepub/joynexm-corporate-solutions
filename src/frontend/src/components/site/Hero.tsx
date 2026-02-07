import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  headline: string;
  subheadline: string;
  children?: ReactNode;
  backgroundImage?: string;
  className?: string;
}

export default function Hero({ headline, subheadline, children, backgroundImage, className }: HeroProps) {
  return (
    <section className={cn('relative overflow-hidden', className)}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
      )}
      <div className="container relative z-10 py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            {subheadline}
          </p>
          {children && <div className="flex flex-wrap items-center justify-center gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
