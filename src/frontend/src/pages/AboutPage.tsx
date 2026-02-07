import { Building2, Award, Globe, Users } from 'lucide-react';
import Section from '@/components/site/Section';
import DifferentiatorList from '@/components/about/DifferentiatorList';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta({
    title: 'About Us - Joynexm Corporate Solutions',
    description: 'Learn about Joynexm Corporate Solutions, a leading provider of enterprise solutions serving businesses across Pune and Mumbai with proven expertise and client-focused approach.',
  });

  const differentiators = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Proven Expertise',
      description:
        'Our team brings decades of combined experience across industries, delivering solutions that are both innovative and practical. We understand the unique challenges facing enterprises in the Indian market.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Client-Centric Approach',
      description:
        'We believe in building long-term partnerships, not just completing projects. Our collaborative methodology ensures solutions are tailored to your specific needs and organizational culture.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Regional Focus, Global Standards',
      description:
        'With deep roots in Pune and Mumbai, we combine local market knowledge with international best practices to deliver world-class solutions that work in your context.',
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'End-to-End Support',
      description:
        'From strategy to implementation and beyond, we provide comprehensive support throughout your transformation journey, ensuring sustainable results and knowledge transfer.',
    },
  ];

  return (
    <>
      <Section size="compact">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Joynexm</h1>
          <p className="text-lg text-muted-foreground">
            Empowering enterprises to achieve their full potential through strategic insight and operational excellence
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Joynexm Corporate Solutions was founded with a clear mission: to help enterprises in Pune and Mumbai
              navigate the complexities of modern business and achieve sustainable growth. We recognized that many
              organizations struggle to balance strategic vision with operational execution, and we set out to bridge
              that gap.
            </p>
            <p>
              Today, we serve a diverse portfolio of clients across industries, from established corporations to
              fast-growing mid-market companies. Our approach combines rigorous analysis, creative problem-solving, and
              hands-on implementation support to deliver measurable results.
            </p>
            <p>
              What sets us apart is our commitment to understanding your business deeply before proposing solutions. We
              don't believe in one-size-fits-all approaches. Instead, we take the time to understand your unique
              challenges, opportunities, and organizational dynamics to craft strategies that truly work.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Joynexm</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our differentiators reflect our commitment to delivering exceptional value to every client
          </p>
        </div>
        <DifferentiatorList items={differentiators} />
      </Section>

      <Section variant="accent" size="compact">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Serving Pune and Mumbai</h2>
          <p className="text-lg text-muted-foreground">
            With a strong presence in both Pune and Mumbai, we're uniquely positioned to serve enterprises across
            Maharashtra's key business hubs. Our local expertise, combined with global best practices, enables us to
            deliver solutions that are both world-class and contextually relevant. Whether you're headquartered in
            Pune's thriving IT corridor or Mumbai's financial district, we're here to support your growth journey.
          </p>
        </div>
      </Section>
    </>
  );
}
