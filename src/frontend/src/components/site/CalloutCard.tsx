import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CalloutCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function CalloutCard({ title, description, children, icon, className }: CalloutCardProps) {
  return (
    <Card className={cn('h-full transition-shadow hover:shadow-md', className)}>
      <CardHeader>
        {icon && <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription className="mt-2">{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
