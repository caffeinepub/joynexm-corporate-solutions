import { Mail, MapPin, Phone } from 'lucide-react';
import Section from '@/components/site/Section';
import ContactForm from '@/components/contact/ContactForm';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us - Joynexm Corporate Solutions',
    description: 'Get in touch with Joynexm Corporate Solutions. Schedule a consultation to discuss how we can help your enterprise achieve its strategic objectives.',
  });

  return (
    <>
      <Section size="compact">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business? Let's start a conversation about your goals and how we can help you
            achieve them.
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Our Locations</h3>
                  <p className="text-muted-foreground">
                    Serving enterprises across Pune and Mumbai with dedicated teams in both cities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email</h3>
                  <p className="text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Phone</h3>
                  <p className="text-muted-foreground">Available Monday - Friday, 9 AM - 6 PM IST</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-semibold">What to Expect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Initial consultation to understand your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Customized proposal tailored to your objectives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>Transparent pricing and timeline estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">•</span>
                  <span>No obligation to proceed after consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
