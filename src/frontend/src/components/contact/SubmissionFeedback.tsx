import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

interface SubmissionFeedbackProps {
  type: 'success' | 'error';
  error?: Error | null;
  onReset: () => void;
}

export default function SubmissionFeedback({ type, error, onReset }: SubmissionFeedbackProps) {
  if (type === 'success') {
    return (
      <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
        <AlertTitle className="text-green-900 dark:text-green-100">Message Sent Successfully!</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Thank you for reaching out. We'll review your message and get back to you within 24 hours.
        </AlertDescription>
        <Button variant="outline" size="sm" onClick={onReset} className="mt-4">
          Send Another Message
        </Button>
      </Alert>
    );
  }

  const errorMessage = error?.message || 'An unexpected error occurred';
  const isRateLimited = errorMessage.includes('wait before submitting');

  return (
    <Alert variant="destructive" className="relative">
      <AlertCircle className="h-5 w-5" />
      <AlertTitle>Submission Failed</AlertTitle>
      <AlertDescription>
        {isRateLimited
          ? 'Please wait a moment before submitting another message. This helps us prevent spam and ensure quality service.'
          : errorMessage}
      </AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        onClick={onReset}
        className="absolute right-2 top-2 h-6 w-6"
        aria-label="Dismiss error"
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  );
}
