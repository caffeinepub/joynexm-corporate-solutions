import { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  included: string[];
  outcomes: string;
  onContact: () => void;
}

export default function ServiceCard({ icon, title, description, included, outcomes, onContact }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <div className="mb-4 flex-1">
          <h4 className="mb-3 text-sm font-semibold">What's Included:</h4>
          <ul className="space-y-2">
            {included.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 rounded-lg bg-muted/50 p-4">
          <h4 className="mb-2 text-sm font-semibold">Expected Outcomes:</h4>
          <p className="text-sm text-muted-foreground">{outcomes}</p>
        </div>
        <Button onClick={onContact} className="w-full">
          Request Consultation
        </Button>
      </CardContent>
    </Card>
  );
}
