import Link from 'next/link';

const services = [
  {
    href: '/corfu-experience',
    title: 'Corfu Experience',
    text: 'A focused sea experience for visitors who want something memorable and easy to book.',
  },
  {
    href: '/sea-scooter-rental-corfu',
    title: 'Sea Scooter Rental',
    text: 'Rent an Aqua Marina BlueDrive X Pro for snorkeling, swimming, and boat days in Corfu.',
  },
  {
    href: '/underwater-experience-corfu',
    title: 'Underwater Experience',
    text: 'Explore calm coastal water and capture your time below the surface.',
  },
  {
    href: '/underwater-video-corfu',
    title: 'Underwater Video',
    text: 'Cinematic underwater filming for couples, families, solo travelers, and sea lovers.',
  },
  {
    href: '/snorkeling-video-corfu',
    title: 'Snorkeling Video',
    text: 'Turn a snorkeling session or boat stop into a polished video memory.',
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
