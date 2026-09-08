import ServiceLanding from '../components/ServiceLanding';

export default function CorfuExperience() {
  return (
    <ServiceLanding
      title="Unique Corfu Experience | Underwater Videos & Sea Scooter Rental"
      description="Book a unique Corfu experience at sea with SeaMemories360: underwater videos, snorkeling memories, underwater selfies, and Aqua Marina sea scooter rental."
      canonicalPath="/corfu-experience"
      keywords={['corfu experience', 'unique corfu experience', 'corfu experiences', 'sea experience corfu', 'underwater experience corfu', 'things to do in corfu']}
      eyebrow="Unique Corfu experience"
      heading="A Unique Corfu Experience at Sea"
      intro="SeaMemories360 helps visitors turn a beach day, boat trip, or snorkeling stop into a cinematic sea memory with underwater filming, sea scooter rental, and easy WhatsApp booking."
      imageAlt="Aqua Marina sea scooter on the Corfu coastline for a unique Corfu experience"
      whatsappText="Hi Sea Memories 360, I'd like to book a unique Corfu experience at sea."
      highlights={[
        { label: '01', title: 'Made for Corfu', text: 'Built around the coastline, clear water, boat stops, and holiday rhythm of Corfu.' },
        { label: '02', title: 'Easy to Book', text: 'Visitors can ask questions and reserve quickly through WhatsApp.' },
        { label: '03', title: 'Shareable Memories', text: 'Designed around moments people actually want to remember and share.' },
      ]}
      sections={[
        { title: 'What makes this Corfu experience different?', text: 'Most visitors leave Corfu with phone photos. SeaMemories360 adds a sea-level story: underwater video, snorkeling memories, underwater selfies, and optional sea scooter rental for a more active experience.' },
        { title: 'Who is it for?', text: 'It fits couples, families, solo travelers, boat guests, villa guests, hotel visitors, and anyone who wants a simple but memorable thing to do in Corfu.' },
        { title: 'How booking works', text: 'Send a WhatsApp message, tell us your preferred day and location, and we help match the right sea experience for your plans.' },
      ]}
      faq={[
        { question: 'What is the SeaMemories360 Corfu experience?', answer: 'It is a sea-based Corfu experience combining underwater filming, snorkeling memories, underwater selfies, and optional Aqua Marina sea scooter rental.' },
        { question: 'Where in Corfu is it available?', answer: 'The service is available in Corfu and is best planned around calm coastal areas, beach visits, snorkeling stops, and boat days.' },
        { question: 'How do I book?', answer: 'The fastest way to book is through WhatsApp. Send your preferred date, number of people, and the type of experience you want.' },
      ]}
    />
  );
}
