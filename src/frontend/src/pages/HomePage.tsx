import { useNavigate } from '@tanstack/react-router';
import { Package, Gift, Shirt, IdCard, FileText, Briefcase, Calendar, CheckCircle2, MapPin, TrendingUp, Shield, Clock, DollarSign, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/site/Hero';
import Section from '@/components/site/Section';
import CalloutCard from '@/components/site/CalloutCard';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function HomePage() {
  const navigate = useNavigate();

  usePageMeta({
    title: 'Joynexm - Corporate Procurement Partner for Pune & Mumbai',
    description: 'India\'s all-in-one corporate procurement partner. From corporate gifting to daily admin supplies, Joynexm simplifies procurement for businesses in Pune and Mumbai.',
  });

  const procurementAreas = [
    'Corporate Gifting',
    'Employee Welcome Kits',
    'Branded T-Shirts & Uniforms',
    'ID Cards & Lanyards',
    'Visiting Cards',
    'Office Stationery',
    'Promotional Merchandise',
    'Event Giveaways',
    'Packaging & Branding Materials',
  ];

  const puneLocations = ['Hinjewadi', 'Kharadi', 'Baner', 'Magarpatta'];
  const mumbaiLocations = ['BKC', 'Andheri', 'Powai', 'Lower Parel', 'Navi Mumbai'];

  const giftingSolutions = [
    'Festive Hampers',
    'Employee Onboarding Kits',
    'Premium Merchandise',
    'Custom Branded Gift Boxes',
    'Bulk Corporate Orders',
  ];

  const apparelEssentials = [
    'Corporate T-Shirts',
    'Uniform Branding',
    'ID Cards & Lanyards',
    'Visiting Cards',
    'Office Stationery',
  ];

  const contractOptions = [
    { icon: <Calendar className="h-5 w-5" />, text: 'Monthly Admin Supply Contracts' },
    { icon: <Gift className="h-5 w-5" />, text: 'Quarterly Gifting Programs' },
    { icon: <Briefcase className="h-5 w-5" />, text: 'Annual Procurement Partnerships' },
    { icon: <Award className="h-5 w-5" />, text: 'Dedicated Account Management' },
  ];

  const whyChooseUs = [
    { icon: <Package className="h-5 w-5" />, text: 'Single Vendor Convenience' },
    { icon: <DollarSign className="h-5 w-5" />, text: '25–35% Cost Efficiency through Bulk Sourcing' },
    { icon: <MapPin className="h-5 w-5" />, text: 'Vendor Network Across Maharashtra' },
    { icon: <Shield className="h-5 w-5" />, text: 'Quality Control & Standardization' },
    { icon: <Clock className="h-5 w-5" />, text: 'Fast Turnaround Time' },
    { icon: <FileText className="h-5 w-5" />, text: 'Professional Billing & Compliance' },
  ];

  return (
    <>
      <Hero
        headline="India's All-In-One Corporate Procurement Partner"
        subheadline="From Corporate Gifting to Daily Admin Supplies — Joynexm simplifies procurement for Pune & Mumbai businesses."
        backgroundImage="/assets/generated/hero-bg.dim_2400x1200.png"
      >
        <Button size="lg" onClick={() => navigate({ to: '/contact' })} className="group">
          Request a Corporate Catalogue
        </Button>
        <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
          Get a Bulk Quote
        </Button>
      </Hero>

      <Section variant="muted">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">🎯 Why Joynexm?</h2>
          <p className="mx-auto mb-4 max-w-2xl text-xl font-semibold">
            Corporates don't need multiple vendors.
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-xl font-semibold">
            They need one reliable partner.
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
            Joynexm helps organizations streamline:
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {procurementAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-muted-foreground">
          We act as your centralized procurement partner, reducing coordination time, improving quality consistency,
          and optimizing cost structures.
        </p>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">📍 Serving Pune & Mumbai Corporates</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            We actively serve companies in:
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <CalloutCard
            icon={<MapPin className="h-6 w-6 text-primary" />}
            title="Pune"
          >
            <div className="mt-4 flex flex-wrap gap-3">
              {puneLocations.map((location, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {location}
                </span>
              ))}
            </div>
          </CalloutCard>
          <CalloutCard
            icon={<MapPin className="h-6 w-6 text-primary" />}
            title="Mumbai"
          >
            <div className="mt-4 flex flex-wrap gap-3">
              {mumbaiLocations.map((location, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {location}
                </span>
              ))}
            </div>
          </CalloutCard>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            💼 Our Core Focus – Corporate Gifting & Admin Supplies
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <CalloutCard
            icon={<Gift className="h-6 w-6 text-primary" />}
            title="1️⃣ Corporate Gifting Solutions"
          >
            <ul className="mt-4 space-y-2">
              {giftingSolutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </CalloutCard>
          <CalloutCard
            icon={<Shirt className="h-6 w-6 text-primary" />}
            title="2️⃣ Branded Apparel & Office Essentials"
          >
            <ul className="mt-4 space-y-2">
              {apparelEssentials.map((essential, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{essential}</span>
                </li>
              ))}
            </ul>
          </CalloutCard>
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">🔁 Recurring Contract Model</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Instead of one-time orders, Joynexm offers:
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {contractOptions.map((option, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {option.icon}
              </div>
              <p className="pt-1 text-base font-medium">{option.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-muted-foreground">
          This ensures predictable budgeting and seamless operations.
        </p>
      </Section>

      <Section variant="muted">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">📊 Why Corporates Choose Us</h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {reason.icon}
              </div>
              <p className="pt-1 text-base font-medium">{reason.text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-xl font-semibold">We don't operate as a vendor.</p>
          <p className="mt-2 text-xl font-semibold">We operate as your corporate infrastructure partner.</p>
        </div>
      </Section>

      <Section variant="accent" size="compact">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simplify Your Corporate Procurement Today
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Book a consultation and receive a customized corporate supply plan.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={() => navigate({ to: '/contact' })} className="group">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
              Schedule Meeting
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
