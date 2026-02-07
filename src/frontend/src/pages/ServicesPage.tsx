import { useNavigate } from '@tanstack/react-router';
import { Target, Zap, Users, BarChart3, Cog, Lightbulb } from 'lucide-react';
import Section from '@/components/site/Section';
import ServiceCard from '@/components/services/ServiceCard';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ServicesPage() {
  const navigate = useNavigate();

  usePageMeta({
    title: 'Our Services - Joynexm Corporate Solutions',
    description: 'Comprehensive enterprise services including strategic consulting, digital transformation, organizational development, and more for businesses in Pune and Mumbai.',
  });

  const services = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Strategic Consulting',
      description:
        'Navigate complex business challenges with confidence through our data-driven strategic consulting services.',
      included: [
        'Market analysis and competitive positioning',
        'Growth strategy development',
        'Business model innovation',
        'Strategic roadmap creation',
      ],
      outcomes: 'Clear strategic direction, improved market positioning, and accelerated growth trajectory',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Digital Transformation',
      description:
        'Modernize your operations and unlock new opportunities through comprehensive digital transformation initiatives.',
      included: [
        'Technology assessment and roadmap',
        'Process automation and optimization',
        'Cloud migration and integration',
        'Digital capability building',
      ],
      outcomes: 'Enhanced operational efficiency, reduced costs, and improved customer experiences',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Organizational Development',
      description:
        'Build high-performing teams and cultivate a culture that drives innovation and sustainable success.',
      included: [
        'Leadership development programs',
        'Change management support',
        'Team effectiveness workshops',
        'Culture transformation initiatives',
      ],
      outcomes: 'Stronger leadership, engaged workforce, and resilient organizational culture',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: 'Performance Optimization',
      description:
        'Maximize efficiency and profitability through systematic performance measurement and improvement.',
      included: [
        'KPI framework design',
        'Performance analytics and dashboards',
        'Process improvement initiatives',
        'Operational excellence programs',
      ],
      outcomes: 'Measurable performance gains, data-driven decision making, and continuous improvement',
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: 'Operations Excellence',
      description:
        'Streamline operations and enhance productivity through proven methodologies and best practices.',
      included: [
        'Process mapping and redesign',
        'Supply chain optimization',
        'Quality management systems',
        'Lean and Six Sigma implementation',
      ],
      outcomes: 'Reduced operational costs, improved quality, and faster time-to-market',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: 'Innovation Advisory',
      description:
        'Foster a culture of innovation and develop new products, services, and business models for competitive advantage.',
      included: [
        'Innovation strategy development',
        'Ideation and concept validation',
        'Pilot program design and execution',
        'Innovation capability building',
      ],
      outcomes: 'New revenue streams, competitive differentiation, and sustained innovation pipeline',
    },
  ];

  return (
    <>
      <Section size="compact">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to address the unique challenges facing enterprises in Pune and Mumbai
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              included={service.included}
              outcomes={service.outcomes}
              onContact={() => navigate({ to: '/contact' })}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
