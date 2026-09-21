import Link from 'next/link';

const services = [
  {
    href: '/corfu-experience',
    title: 'Unique Corfu Sea Experience',
    text: 'Underwater video, snorkeling memories, and sea scooter moments for visitors who want something memorable.',
  },
  {
    href: '/sea-scooter-rental-corfu',
    title: 'Sea Scooter Rental in Corfu',
    text: 'Rent an Aqua Marina BlueDrive X Pro for snorkeling, swimming, and boat days in Corfu.',
  },
  {
    href: '/snorkeling-in-corfu',
    title: 'Snorkeling in Corfu',
    text: 'Plan a snorkeling activity and turn it into underwater video memories with optional sea scooter action.',
  },
  {
    href: '/underwater-experience-corfu',
    title: 'Underwater Photo & Video Experience',
    text: 'Capture underwater selfies, short video clips, snorkeling footage, and sea memories in Corfu.',
  },
  {
    href: '/underwater-video-corfu',
    title: 'Underwater Video in Corfu',
    text: 'Cinematic underwater filming for couples, families, solo travelers, and sea lovers.',
  },
  {
    href: '/snorkeling-video-corfu',
    title: 'Snorkeling Video Experience',
    text: 'Turn a snorkeling session, reef stop, or boat day into a polished underwater memory.',
  },
];

export default function ServiceLinks() {
  return (
    <section className="service-links">
      <h2>Explore Our Corfu Experiences</h2>
      <div>
        {services.map((service) => (
          <Link key={service.href} href={service.href}>
            <strong>{service.title}</strong>
            <span>{service.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
